Ext.ns("com.zoomlion.hjsrm");
/**
 * 
 * @class com.zoomlion.hjsrm.selectParticipantsWindow
 * @extends Ext.Window
 *          <p>
 *          选择参与者弹出框
 */
com.zoomlion.hjsrm.wtfkComboWindow = Ext.extend(Ext.Window, {
	title : '选择供管工程师',// 标题栏
	partTitle : '供管工程师',// 参与者显示值
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
	currentRolecode : undefined, // 角色编码
	initComponent : function() {
		this.buildParticipantsList();
		this.items = [this.participantsListPanel]
		this.tbar = [{
					xtype : 'label',
					text : '供管工程师:'
				}, '-', {
					xtype : 'textfield',
					ref : '../namequery',
					name : 'name'
				}, '-', {
					text : '查询',
					scope : this,
					handler : function() {
						var _name = this.namequery.getValue();
						Ext.apply(this.currentParticipant, {
									name : _name,
									rolecode : this.currentRolecode
								})
						this.participantsListPanel
								.doQuery(this.currentParticipant);
					}
				}, '-', {
					text : '重置',
					scope : this,
					handler : function() {
						this.namequery.setValue();
					}
				}]
		this.buttons = [{
			text : '确认',
			scope : this,
			handler : function() {
				var records = this.participantsListPanel.selModel
						.getSelections();
				if (records.length == 0) {
					Ext.Msg.alert("系统提示", "请选择数据！");
					return false;
				} else if (records.length > 1) {
					Ext.Msg.alert("系统提示", "请选择一条数据进行确认！");
				} else {
					// 响应返回事件，如需要在父窗口取得pts,则在父窗口，配置callback事件即可
					var pts = records[0].get('operatorname');
					var pts1 = records[0].get('userid');
					this.fireEvent('callback', pts, pts1);
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
		com.zoomlion.hjsrm.wtfkComboWindow.superclass.initComponent.call(this);
		// 构建window时就执行查询，必须写在这句话后面
		// this.items.items[0].store.baseParams = {
		// 'cxcm/zcpcx' : ''
		// };
		// this.items.items[0].store.load();
	},
	buildParticipantsList : function() {
		var participantsSelModel = new Ext.grid.CheckboxSelectionModel({});
		this.participantsListPanel = new Ext.fn.ListPanel({
			title : this.partTitle + '列表',
			hsPage : true,
			selModel : participantsSelModel,
			autoExpandColumn : '5',
			height : 420,
			columns : [new Ext.grid.RowNumberer(), participantsSelModel, {
						header : "操作员名称",
						autoWidth : true,
						dataIndex : "operatorname"
					}, {
						header : "登陆用户名",
						autoWidth : true,
						dataIndex : "userid"
					}, {
						header : "所属公司",
						dataIndex : "orgname",
						id : 'orgname',
						autoWidth : true,
						sortable : true
					}, {
						header : "业务机构",
						autoWidth : true,
						dataIndex : "orgnames"
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryParticipantsByRoleOrOrg.biz.ext',
				root : 'data',
				totalProperty : 'totalCount',
				fields : [{
							name : 'operatorid'// 操作员ID
						}, {
							name : 'userid'// 登陆用户名
						}, {
							name : 'operatorname'// 操作员名称

						}, {
							name : 'orgname'// 所属机构

						}, {
							name : 'dataorgid'// 数据归属

						}, {
							name : 'orgnames'// 业务机构

						}, {
							name : 'flag'// 业务机构

						}]
			}),
			doQuery : function(val) {
				var val = val || {};
				this.store.baseParams = {
					'person/operatorname' : val.name,
					'person/rolecode' : val.rolecode
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

com.zoomlion.hjsrm.wtfkCombo = Ext.extend(Ext.form.TriggerField, {
			fieldLabel : this.partTitle,
			hideTrigger : false,
			editable : false,
			currentRolecode : undefined, // 角色编码
			triggerClass : "x-form-search-trigger",
			initComponent : function() {
				this.powWindow = this.getselectWin();
				com.zoomlion.hjsrm.wtfkCombo.superclass.initComponent
						.call(this);
			},
			onTriggerClick : function() {
				this.powWindow.items.items[0].store.removeAll();
				this.powWindow.show();
				// 返回事件
				this.powWindow.mon(this.powWindow, 'callback', function(pts,
								pts1) {
							this.setValue(pts);
							Ext.getCmp("userid").setValue(pts1);
							Ext.getCmp("useridx").setValue(pts1);
						}, this);
			},
			getselectWin : function() {
				return new com.zoomlion.hjsrm.wtfkComboWindow({
				currentRolecode : this.currentRolecode});
			}
		})
Ext.reg("wtfkCombo", com.zoomlion.hjsrm.wtfkCombo);
// demo:
// { xtype : 'selectParticipateField',
// name : 'pts',
// fieldLabel : '参与者',
// maxLength : 500,
// currentRolecode : '00062',//可以传值也可以不传值
// currentOrgcode : '',//可以传值也可以不传值
// colspan : 2
// }
