Ext.namespace('Srm.workflows');
/**
 * 
 * @class Srm.workflows.TurnUpWin
 * @extends Ext.Window
 *          <p>
 *          封装转派工作
 */
Srm.workflows.TurnUpWin = Ext.extend(Ext.Window, {
	title : '转派(设置参与者)',
	closeAction : 'hide',
	width : 600,
	height : 125,
	layout:'fit',
	buttonAlign : 'center',
	modal : true,
	resizable:false,
	minimizable : true,
	maximizable : true,
	workItemIds : [],
	pgrid : undefined,
	initComponent : function() {
		this.buildItems();
		this.buildButtons();
		Srm.workflows.TurnUpWin.superclass.initComponent.call(this);
		/**
		 * 转派窗口-转派部门-选择事件
		 */
		this.form = this.getComponent('formpanel').getForm();
		this.orgtree = this.form.findField('orgtreecombo');
		this.operator = this.form.findField('operator');
		this.orgtree.mon(this.orgtree, 'getselectnode', function(tree, node) {
					var oldOrg = this.operator.extraParams['condition/dataOrgId']
					// 更改选项时,清空人员下拉列表值
					if (node.attributes['orgid'] != oldOrg) {
						this.operator.clearValue();
						this.operator.extraParams = {
							'condition/orgid' : node.attributes['orgid']
						};
					}

				}, this);
	},
	buildItems : function() {
		this.items = [{
					xtype : 'columnform',
					itemId:'formpanel',
					columns:2,
					fields : [{
								fieldLabel : '转派部门',
								xtype : 'orgtreecombo',
								dataIndex : 'orgtreecombo',
								hiddenName : 'orgid',
								name : 'orgtreecombo',
								queryType : 'dataorg',
								anchor : '90%'
							}, {
								xtype : "combogrid",
								fieldLabel : '转派人员',
								dataIndex:'operator',
								name : 'operator',
								valueField : 'userid',
								hiddenName : 'optids',
								displayField : 'operatorname',
								anchor : '90%',
								gridWidth : 330,
								gridHeight : 280
							}]
				}]
	},
	/**
	 * 设置工作项Id
	 * @param {} recs
	 */
	setWorkItems : function(recs) {
		var workItems = this.pgrid.getSelectionModel().getSelections();
		this.workItemIds = []
		Ext.each(workItems,function(rec){
			this.workItemIds.push(rec.get('workitemid'));
		},this);
		
	},
	onSave : function() {
		// 工作项改派给多个参与者
		var orgid = this.orgtree.getValue();
		if (orgid) {
			var participants = [];
			
			var userIds = this.operator.getValue();
			var operatorNames = this.operator.getRawValue();
			if (userIds) {// 转派给多人
				var arrayIds = userIds.split(',');
				var arrayNames = operatorNames.split(',');
				for (var i = 0; i < arrayIds.length; i++) {
					participants.push({
						id : arrayIds[i],
						name : arrayNames[i],
						typeCode : 'person'
					});
				}
			} else {// 转派给公司
				participants = [{
							id : orgid,
							name : orgid,
							typeCode : 'organization'
						}];
			}
			this.mk = new Ext.LoadMask(document.body, {
						msg : '后台正在操作，请稍候！',
						removeMask : true
					});
			this.mk.show();
			Ext.Ajax.request({
				scope : this,
				url : 'com.zoomlion.hjsrm.workflows.common.WorkinCommon.reassignWorkItemEx.biz.ext',
				jsonData : {
					participantArr : participants,
					workItemID : this.workItemIds
				},
				success : function(response, action) {
					var result = Ext.decode(response.responseText);
					this.mk.hide();
					if (result.success) {
						Ext.Msg.alert("系统提示", "转派成功", function() {
									this.hide();
									this.pgrid.refresh();
								}, this)
					}
				}
			});
		} else {
			Ext.Msg.alert('提示', '请选择转派部门或转派人员')
		}

	},
	destroy:function(){
		if(this.mk){
			this.mk.destroy();
		}
		Srm.workflows.TurnUpWin.superclass.destroy.call(this);
	},
	buildButtons : function() {
		this.buttons = [{
					text : '确定',
					scope : this,
					handler : this.onSave
				}, {
					text : '关闭',
					scope : this,
					handler : function() {
						this.hide();
					}
				}]
	}
});