Ext.ns("com.zoomlion.hjsrm");
/**
 * 
 * @class com.zoomlion.hjsrm.s
 * @extends Ext.Window
 *          <p>
 *          选择参与者弹出框
 */
com.zoomlion.hjsrm.lifnrallComboWindow = Ext.extend(Ext.Window, {
	title : '选择供应商',// 标题栏
	partTitle : '供应商',// 参与者显示值
	divisionFront : "(",// 前面的分割符号
	divisionBack : "),",// 后面的分割符号
	
	closeAction : 'hide',
	layout : 'anchor',
	sendListPanel : undefined,
	modal : true,
	collapsible : true,
	maximizable : true,
	width : 520,
	height : 520,
	buttonAlign : 'center',
	currentParticipant : {},
	initComponent : function() {
		this.buildParticipantsList();
		this.items = [this.participantsListPanel]
		this.tbar = [{
					xtype : 'label',
					text : '供应商编码:'
				}, '-', {
					xtype : 'textfield',
					ref : '../lifnrquery',
					name : 'lifnr'
				},{
					xtype : 'label',
					text : '供应商描述:'
				}, '-', {
					xtype : 'textfield',
					ref : '../name1query',
					name : 'name1'
				},  '-', {
					text : '查询',
					scope : this,
					handler : function() {
						var _lifnr = this.lifnrquery.getValue();
						var _name1 = this.name1query.getValue();
						Ext.apply(this.currentParticipant, {
									lifnr : _lifnr,
									name1 : _name1
								})
						this.participantsListPanel
								.doQuery(this.currentParticipant);
					}
				}, '-', {
					text : '重置',
					scope : this,
					handler : function() {
						this.lifnrquery.setValue();
						this.name1query.setValue();
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
					var pts = records[0].get('lifnr');
					this.fireEvent('callback', pts);
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
		com.zoomlion.hjsrm.lifnrallComboWindow.superclass.initComponent
				.call(this);
		// 构建window时就执行查询，必须写在这句话后面
		//this.items.items[0].store.baseParams = {
		//	'cxcm/zcpcx' : ''	
		//};
		//this.items.items[0].store.load();
	},
	buildParticipantsList : function() {
		var participantsSelModel = new Ext.grid.CheckboxSelectionModel({
					header : '',
					singleSelect : true});
		this.participantsListPanel = new Ext.fn.ListPanel({
			title : this.partTitle + '列表',
			hsPage : true,
			selModel : participantsSelModel,
			height : 420,
			columns : [new Ext.grid.RowNumberer(), participantsSelModel, {
				        name :'lifnr',
						hiddenName : 'lifnr',
						dataIndex : 'lifnr',
						header : '供应商编码',
						width:150,
						sortable : true
					},{
				        name :'name1',
						hiddenName : 'name1',
						dataIndex : 'name1',
						header : '供应商描述',
						width:250,
						sortable : true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.pub.busi.common.srmcommon.querylifnrallCombo.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				fields : [{
							name : 'lifnr'
						},{
							name : 'name1'
						}]
			}),
			doQuery : function(val) {
				var val = val || {};
				this.store.baseParams = {
					'cxcm/lifnr' : val.lifnr,
					'cxcm/name1' : val.name1
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

com.zoomlion.hjsrm.lifnrallCombo = Ext.extend(Ext.form.TriggerField, {
			fieldLabel : this.partTitle,
			hideTrigger : false,
			editable : false,
			triggerClass : "x-form-search-trigger",
			initComponent : function() {
				this.powWindow = this.getselectWin();
				com.zoomlion.hjsrm.lifnrallCombo.superclass.initComponent
						.call(this);
			},
			onTriggerClick : function() {
				this.powWindow.items.items[0].store.removeAll();		
				this.powWindow.show();
				// 返回事件
				this.powWindow.mon(this.powWindow, 'callback', function(pts) {
							this.setValue(pts);
						}, this);
			},
			getselectWin : function() {
				return new com.zoomlion.hjsrm.lifnrallComboWindow({
						});
			}
		})
Ext.reg("lifnrallCombo", com.zoomlion.hjsrm.lifnrallCombo);
// demo:
// { xtype : 'selectParticipateField',
// name : 'pts',
// fieldLabel : '参与者',
// maxLength : 500,
// currentRolecode : '00062',//可以传值也可以不传值
// currentOrgcode : '',//可以传值也可以不传值
// colspan : 2
// }