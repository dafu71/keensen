Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.customerCombo
 * @extends Ext.Window
 *          <p>
 *          选择参与者弹出框
 */
com.keensen.ump.customerComboWindow = Ext.extend(Ext.Window, {
	title : '选择客户',// 标题栏
	partTitle : '客户',// 参与者显示值
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
					text : '客户编码:'
				}, '-', {
					xtype : 'textfield',
					ref : '../customerCode',
					name : 'customerCode'
				},{
					xtype : 'label',
					text : '客户名称:'
				}, '-', {
					xtype : 'textfield',
					ref : '../customerName',
					name : 'customerName'
				},  '-', {
					text : '查询',
					scope : this,
					handler : function() {
						var _lifnr = this.customerCode.getValue();
						var _name1 = this.customerName.getValue();
						Ext.apply(this.currentParticipant, {
									customerCode : _lifnr,
									customerName : _name1
								})
						this.participantsListPanel
								.doQuery(this.currentParticipant);
					}
				}, '-', {
					text : '重置',
					scope : this,
					handler : function() {
						this.customerCode.setValue();
						this.customerName.setValue();
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
					var pts = [];
					pts[0] = records[0].get('customerCode');
					pts[1] = records[0].get('customerName');
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
		com.keensen.ump.customerComboWindow.superclass.initComponent
				.call(this);
		// 构建window时就执行查询，必须写在这句话后面
		//this.items.items[0].store.baseParams = {
		//	'condition/zcpcx' : ''	
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
				        name :'customerCode',
						hiddenName : 'customerCode',
						dataIndex : 'customerCode',
						header : '客户编码',
						width:150,
						sortable : true
					},{
				        name :'customerName',
						hiddenName : 'customerName',
						dataIndex : 'customerName',
						header : '客户名称',
						width:250,
						sortable : true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.base.queryCustomerByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'customerCode'
						},{
							name : 'customerName'
						},{
							name : 'customerId'
						}]
			}),
			doQuery : function(val) {
				var val = val || {};
				this.store.baseParams = {
					'condition/customerCode' : val.customerCode,
					'condition/customerName' : val.customerName
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

com.keensen.ump.customerCombo = Ext.extend(Ext.form.TriggerField, {
			fieldLabel : this.partTitle,
			actualValue:'',
			hideTrigger : false,
			editable : false,
			triggerClass : "x-form-search-trigger",
			initComponent : function() {
				this.powWindow = this.getselectWin();
				com.keensen.ump.customerCombo.superclass.initComponent
						.call(this);
			},
			onTriggerClick : function() {
				this.powWindow.items.items[0].store.removeAll();
				this.powWindow.items.items[0].store.load();
				this.powWindow.show();
				// 返回事件
				this.powWindow.mon(this.powWindow, 'callback', function(pts) {
							this.setValue(pts[1]);
							this.actualValue = pts[0];
						}, this);
			},
			getselectWin : function() {
				return new com.keensen.ump.customerComboWindow({
						});
			}
		})
Ext.reg("customerCombo", com.keensen.ump.customerCombo);
// demo:
// { xtype : 'selectParticipateField',
// name : 'pts',
// fieldLabel : '参与者',
// maxLength : 500,
// currentRolecode : '00062',//可以传值也可以不传值
// currentOrgcode : '',//可以传值也可以不传值
// colspan : 2
// }