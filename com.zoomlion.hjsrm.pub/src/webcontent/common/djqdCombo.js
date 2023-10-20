Ext.ns("com.zoomlion.hjsrm");
/**
 * 
 * @class com.zoomlion.hjsrm.selectParticipantsWindow
 * @extends Ext.Window
 *          <p>
 *          选择参与者弹出框
 */
com.zoomlion.hjsrm.djqdComboWindow = Ext.extend(Ext.Window, {
	title : '选择车型名称',// 标题栏
	partTitle : '车型名称',// 参与者显示值
	divisionFront : "(",// 前面的分割符号
	divisionBack : "),",// 后面的分割符号
	
	closeAction : 'hide',
	layout : 'anchor',
	sendListPanel : undefined,
	modal : true,
	collapsible : true,
	maximizable : true,
	width : 480,
	height : 520,
	buttonAlign : 'center',
	currentParticipant : {},
	initComponent : function() {
		this.buildParticipantsList();
		this.items = [this.participantsListPanel]
		this.tbar = [{
					xtype : 'label',
					text : '车型名称:'
				}, '-', {
					xtype : 'textfield',
					ref : '../cxmcquery',
					name : 'cxmc'
				},  '-', {
					text : '查询',
					scope : this,
					handler : function() {
						var _cxmc = this.cxmcquery.getValue();
						Ext.apply(this.currentParticipant, {
									cxmc : _cxmc
								})
						this.participantsListPanel
								.doQuery(this.currentParticipant);
					}
				}, '-', {
					text : '重置',
					scope : this,
					handler : function() {
						this.cxmcquery.setValue();
					}
				}]
		this.buttons = [{
			text : '确认',
			scope : this,
			handler : function() {
			var records = this.participantsListPanel.selModel.getSelections();
				if (records.length == 0) {
		             Ext.Msg.alert("系统提示", "请选择数据！");
					return false;
				} else if(records.length >1){
					 Ext.Msg.alert("系统提示", "请选择一条数据进行确认！");
				}else {
					// 响应返回事件，如需要在父窗口取得pts,则在父窗口，配置callback事件即可
					var pts = records[0].get('cxdm');
					var pts1 = records[0].get('cxmc');
					this.fireEvent('callback', pts,pts1);
					this.participantsListPanel.selModel.clearSelections();
					this.hide();
				}
			}
		}, {
			text : '关闭',
			scope : this,
			handler : function() {
				this.participantsListPanel.selModel.clearSelections();
				this.hide();
			}
		}]
		com.zoomlion.hjsrm.djqdComboWindow.superclass.initComponent
				.call(this);
		// 构建window时就执行查询，必须写在这句话后面
		//this.items.items[0].store.baseParams = {
		//	'cxcm/zcpcx' : ''	
		//};
		//this.items.items[0].store.load();
	},
	buildParticipantsList : function() {
		var participantsSelModel = new Ext.grid.CheckboxSelectionModel({});
		this.participantsListPanel = new Ext.fn.ListPanel({
			title : this.partTitle + '列表',
			hsPage : true,
			selModel : participantsSelModel,
			height : 420,
			columns : [new Ext.grid.RowNumberer(), participantsSelModel, {
				        name :'cxdm',
						hiddenName : 'cxdm',
						dataIndex : 'cxdm',
						header : '车型代码',
						width:200,
						sortable : true
					},{
				        name :'cxmc',
						hiddenName : 'cxmc',
						dataIndex : 'cxmc',
						header : '车型名称',
						width:200,
						sortable : true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.pub.busi.common.srmcommon.querydjqdCombo.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				fields : [{
							name : 'cxdm'
						},{
							name : 'cxmc'
						}]
			}),
			doQuery : function(val) {
				var val = val || {};
				this.store.baseParams = {
					'cxcm/cxmc' : val.cxmc
				};
				this.store.load({
							params : {
								"pageCond/begin" : 0,
								"pageCond/length" : this.pagingToolbar.pageSize
							}
						});
			}

		});
	}
});

com.zoomlion.hjsrm.djqdCombo = Ext.extend(Ext.form.TriggerField, {
			fieldLabel : this.partTitle,
			hideTrigger : false,
			editable : false,
			triggerClass : "x-form-search-trigger",
			initComponent : function() {
				this.powWindow = this.getselectWin();
				com.zoomlion.hjsrm.djqdCombo.superclass.initComponent
						.call(this);
			},
			onTriggerClick : function() {
				this.powWindow.items.items[0].store.removeAll();		
				this.powWindow.show();
				// 返回事件
				this.powWindow.mon(this.powWindow, 'callback', function(pts,pts1) {
							this.setValue(pts1);
							Ext.getCmp("cxdmxxx").setValue(pts);
							Ext.getCmp("cxdmxxx2").setValue(pts);
						}, this);
			},
			getselectWin : function() {
				return new com.zoomlion.hjsrm.djqdComboWindow({
						});
			}
		})
Ext.reg("djqdCombo", com.zoomlion.hjsrm.djqdCombo);
// demo:
// { xtype : 'selectParticipateField',
// name : 'pts',
// fieldLabel : '参与者',
// maxLength : 500,
// currentRolecode : '00062',//可以传值也可以不传值
// currentOrgcode : '',//可以传值也可以不传值
// colspan : 2
// }