Ext.namespace('Srm.workflows');
/**
 * 
 * @class Srm.workflows.DispatchWin
 * @extends Ext.Window
 *          <p>
 *          封装派工
 */
Srm.workflows.DispatchWin = Ext.extend(Ext.Window, {
	title : '工作单派工',
	minimizable : true,
	maximizable : true,
	closeAction : 'hide',
	modal : true,
	animCollapse : false,
	layout : 'fit',
	width : 922,
	border : false,
	height : 424,
	buttonAlign : 'center',
	initComponent : function() {
		this.buildUnpatchList();
		this.buildTbar();
		this.buildButtons();
		this.items = [this.unpatchListPanel];
		Srm.workflows.DispatchWin.superclass.initComponent.call(this);
		/**
		 * 派工窗口-派工部门-选择事件
		 */
//		this.orgtree.mon(this.orgtree, 'getselectnode', function(tree, node) {
//					var oldOrg = this.operator.extraParams['condition/dataOrgId']
//					// 更改选项时,清空人员下拉列表值
//					if (node.attributes['orgid'] != oldOrg) {
//						this.operator.clearValue();
//						this.operator.extraParams = {
//							'condition/orgid' : node.attributes['orgid']
//						};
//					}
//				}, this);
		
		this.orgtree.mon(this.orgtree, 'select', function() {
					var oldOrg = this.operator.extraParams['condition/dataOrgId']
					// 更改选项时,清空人员下拉列表值
					if (this.orgtree.getValue() != oldOrg) {
						this.operator.clearValue();
						this.operator.extraParams = {
							'condition/orgid' : this.orgtree.getValue()
						};
					}
				}, this);
		
		
	},
	onDispatch : function() {
		var orgId = this.orgtree.getValue();
		var orgName = this.orgtree.getRawValue();
		if (!orgId) {
			Ext.Msg.alert("系统提示", "请选择待定派工部门或人员!");
			return;
		}
		var selections = this.unpatchModel.getSelections();
		if (selections < 1) {
			Ext.Msg.alert("系统提示", "请选择可分配工作单!");
			return;
		}
		Ext.Msg.confirm("系统提示", "您确定要分配选中的工作单吗？", function(option) {
			if (option == "yes") {

				// 被派工部门id
				var dispatchOrgId = orgId;
				//被派工部门name
				var dispatchOrgName = orgName;
				// 被派人员id
				var dispatchUserId = this.operator.getValue();
				// 被派人员名称
				var dispatchUserName = this.operator.getRawValue();
				// 派工类型
				var dispatchType = '';
				if (dispatchUserId) {
					// 派工给多人
					dispatchType = busiattrUser;
				} else {
					// 派工给部门
					dispatchType = busiattrDepartment;
				}

				// 构建WFParticipant[]
				var participants = [];

				if (dispatchUserId) {// 转派给多人
					var arrayIds = dispatchUserId.split(',');
					var arrayNames = dispatchUserName.split(',');
					for (var i = 0; i < arrayIds.length; i++) {
						participants.push({
									id : arrayIds[i],
									name : arrayNames[i],
									typeCode : 'person'
								});
					}
				} else {// 转派给公司
					participants = [{
								id : dispatchOrgId,
								name : dispatchOrgName,
								typeCode : 'organization'
							}];
				}

				
				// 工单id数组
				var pkids = [];
				var workitemids = [];
				var busitypes = [];
				var unpatchWorkItems = this.unpatchModel.getSelections();
				for (var i = 0; i < unpatchWorkItems.length; i++) {
					pkids[i] = unpatchWorkItems[i].get('worklistinfopkid');
					workitemids[i] = unpatchWorkItems[i].get('workitemid');
					busitypes[i] = unpatchWorkItems[i].get('busitype');
				}
				Ext.Ajax.request({
					url : 'com.zoomlion.hjsrm.workflows.remain.RemainManager.doDispatchingWorkItem.biz.ext',
					/*params : {

						'condition/destorg' : dispatchOrgId,
						'condition/destoptr' : dispatchUserId,
						'condition/destoptrname' : dispatchUserName,
						'condition/dispatchType' : dispatchType,
						'busiTypes' : busitypes,
						'workitemIds' : workitemids,
						'ticketIds' : pkids
					},*/
					jsonData : {
						participantArr : participants,
						'condition/destorg' : dispatchOrgId,
						'condition/destoptr' : dispatchUserId,
						'condition/destoptrname' : dispatchUserName,
						'condition/dispatchType' : dispatchType,
						'busiTypes' : busitypes,
						'workitemIds' : workitemids,
						'ticketIds' : pkids
					},
					scope : this,
					success : function(resp) {
						var ret = Ext.decode(resp.responseText);
						if (ret.success) {
							Ext.Msg.alert("系统提示", "工作单派工成功!", function() {
										this.unpatchListPanel.refresh();
									}, this);
						}
					}
				});
			}
		}, this);
	},
	onUnpatch : function() {
		var selections = this.dispatchedModel.getSelections();
		if (selections.length > 0) {
			Ext.Msg.confirm("系统提示", "您确定要取消选中的派工吗？", function(option) {
				if (option == "yes") {
					var pkids = "";
					for (var i = 0; i < slength; i++) {
						pkids += "'" + selections[i].get('pkid') + "'";
						if (i < slength - 1) {
							pkids += ","
						}
					}
					// 发送请求
					Ext.Ajax.request({
						url : 'com.zoomlion.hjsrm.workflows.remain.RemainManager.doCancelDispatchedWorkItem.biz.ext',
						jsonData : {
							pkids : pkids
						},
						scope : this,
						success : function(resp) {
							var ret = Ext.decode(resp.responseText);
							if (ret.success) {
								Ext.Msg.alert("系统提示", "工作单撤消派工成功!", function() {
											this.unpatchListPanel.refresh();
										}, this);
							}
						}
					});
				}
			}, this);
		} else {
			Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
		}
	},
	buildButtons : function() {
		this.buttons = [{
					text : '关闭',
					scope : this,
					handler : function() {
						this.hide();
					}
				}]
	},
	buildTbar : function() {
		this.tbar = [
		//'待定派工部门：', 
//			{
//					xtype : 'orgtreecombo',
//					itemId : 'orgtreecombo',
//					ref : '../orgtree',
//					hiddenName : 'orgid',
//					name : 'orgtreecombo',
//					queryType : 'dataorg',
//					width : 270
//				}
				
				{
						xtype : 'combo',
						fieldLabel : '待定派工部门',
						triggerAction : 'all',
						ref : '../orgtree',
						minChars : 0,
						emptyText : '--请选择--',
						typeAhead : false,
						forceSelection : true,
						tpl : '<tpl for="."><div class="x-combo-list-item"><span>{orgname}</span></div></tpl>',
						lazyRender : true,
						queryParam : 'entity/orgname',
						mode : 'remote',
						store : new Ext.data.JsonStore({
							url : 'com.zoomlion.hjsrm.pub.busi.busibpsconfig.BusiProcessDefineMgr.queryDepartByCombox.biz.ext',
							root : 'data',
							fields : [{
										name : 'orgid'
									}, {
										name : 'orgname'
									}]
						}),

						hiddenName : 'orgid',
						displayField : 'orgname',
						valueField : 'orgid',
						width : 270
					}
				
				
				
				, '-', '待定派工人员：', {
					xtype : "combogrid",
					name : 'operator',
					ref : '../operator',
					valueField : 'userid',
					hiddenName : 'optids',
					displayField : 'operatorname',
					gridWidth : 330,
					gridHeight : 280,
					width : 330
				}]
	},
	onRemove : function() {
		if (this.unpatchModel.hasSelection()) {
			var records = this.unpatchModel.getSelections();
			this.unpatchListPanel.store.remove(records);
			var workitemids = [];
			for(var i=0;i<this.unpatchListPanel.store.getCount();i++){
				workitemids.push(this.unpatchListPanel.store.getAt(i).data.workitemid);
			}
			this.doQuery({
				'condition/workitemids' : workitemids.join(',')
			});
			//this.unpatchListPanel.getView().refresh();
		} else {
			Ext.Msg.alert('提示', '未选择数据，请至少选择一行数据')
		}

	},
	buildUnpatchList : function() {
		this.unpatchModel = new Ext.grid.CheckboxSelectionModel();
		this.unpatchListPanel = new Ext.fn.ListPanel({
			tbar : [
					'<span style="color:#15428B;font-weight:bold;">可进行分配的工作单</span>',
					'->', {
						text : '从列表中移除',
						scope : this,
						iconCls : 'icon-application_remove',
						handler : this.onRemove
					}, {
						text : '分配',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onDispatch
					}],
			anchor : '100% 50%',
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), this.unpatchModel, {
						header : "业务类型",
						dataIndex : "busitypename"
					}, {
						header : "环节名称",
						dataIndex : "activityinstname"
					}, {
						header : "户号",
						dataIndex : "userid"
					}, {
						header : "户名",
						dataIndex : "username"
					}, {
						header : "工作项状态",
						dataIndex : "workstate"
					}],
			sm : this.unpatchModel,
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.workflows.remain.RemainManager.queryDispatchingWithPage.biz.ext',
				root : 'data',
				totalProperty : 'totalCount',
				fields : ['processdefid', 'worklistinfopkid', 'busitype',
						'processinstid', 'workitemid', 'busitypename',
						'activityinstname', 'activityinstid',
						'processinstname', 'userid', 'username', 'workstate']
			})
		});
	},
	doQuery : function(vals) {
		this.unpatchListPanel.doQuery(vals);
	}
});