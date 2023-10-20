Ext.ns("com.zoomlion.hjsrm");
/**
 * 
 * @class com.zoomlion.hjsrm.s
 * @extends Ext.Window
 *          <p>
 *          选择参与者弹出框
 */
com.zoomlion.hjsrm.matnrComboWindow = Ext.extend(Ext.Window, {
	title : '选择物料编码',// 标题栏
	partTitle : '物料编码',// 参与者显示值
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
					text : '物料编码:'
				}, '-', {
					xtype : 'textfield',
					ref : '../matnrquery',
					name : 'matnr'
				},{
					xtype : 'label',
					text : '物料描述:'
				}, '-', {
					xtype : 'textfield',
					ref : '../maktxquery',
					name : 'maktx'
				},  '-', {
					text : '查询',
					scope : this,
					handler : function() {
						var _matnr = this.matnrquery.getValue();
						var _maktx = this.maktxquery.getValue();
					   if(Ext.isEmpty(_matnr)&&Ext.isEmpty(_maktx)){
		               Ext.Msg.alert("系统提示", "物料编码与物料描述不能同时为空！");
			           return ;
			             }
						Ext.apply(this.currentParticipant, {
									matnr : _matnr,
									maktx : _maktx
								})
						this.participantsListPanel
								.doQuery(this.currentParticipant);
					}
				}, '-', {
					text : '重置',
					scope : this,
					handler : function() {
						this.maktxquery.setValue();
						this.matnrquery.setValue();
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
					var pts = records[0].get('matnr');
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
		com.zoomlion.hjsrm.matnrComboWindow.superclass.initComponent
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
				        name :'matnr',
						hiddenName : 'matnr',
						dataIndex : 'matnr',
						header : '物料编码',
						width:150,
						sortable : true
					},{
				        name :'maktx',
						hiddenName : 'maktx',
						dataIndex : 'maktx',
						header : '物料描述',
						width:250,
						sortable : true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.pub.busi.common.srmcommon.querymatneCombo.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				fields : [{
							name : 'matnr'
						},{
							name : 'maktx'
						}]
			}),
			doQuery : function(val) {
				var val = val || {};
				this.store.baseParams = {
					'cxcm/matnr' : val.matnr,
					'cxcm/maktx' : val.maktx
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

com.zoomlion.hjsrm.matnrCombo = Ext.extend(Ext.form.TriggerField, {
			fieldLabel : this.partTitle,
			hideTrigger : false,
			editable : false,
			triggerClass : "x-form-search-trigger",
			initComponent : function() {
				this.powWindow = this.getselectWin();
				com.zoomlion.hjsrm.matnrCombo.superclass.initComponent
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
				return new com.zoomlion.hjsrm.matnrComboWindow({
						});
			}
		})
Ext.reg("matnrCombo", com.zoomlion.hjsrm.matnrCombo);
// demo:
// { xtype : 'selectParticipateField',
// name : 'pts',
// fieldLabel : '参与者',
// maxLength : 500,
// currentRolecode : '00062',//可以传值也可以不传值
// currentOrgcode : '',//可以传值也可以不传值
// colspan : 2
// }