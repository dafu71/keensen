com.keensen.ump.produce.component.reworkMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentreworkmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【营销订单查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/code',
								//anchor : '85%',
								fieldLabel : '编号'
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo',
								//anchor : '85%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/materSpecName',
								//anchor : '85%',
								fieldLabel : '规格型号 '
							}, {
								xtype : "dateregion",
								colspan : 1,
								//anchor : '85%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "发起日期",
								format : "Y-m-d"
							}]
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【营销订单列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : mylistid,
tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '->', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'code',
						header : '文件编号'
					}, {
						dataIndex : 'happenDate',
						header : '日期'
					}, {
						dataIndex : 'tache',
						header : '发生工序'
					}, {
						dataIndex : 'describe',
						header : '不良现象'
					}, {
						dataIndex : 'orderNo',
						header : '订单编号'
					}, {
						dataIndex : 'prodSpecId',
						header : '元件型号ID'
					}, {
						dataIndex : 'defectType',
						header : '不良类型'
					}, {
						dataIndex : 'defectAmount',
						header : '不良数量'
					}, {
						dataIndex : 'batchNoStr',
						header : '返工批号'
					}, {
						dataIndex : 'step',
						header : '当前环节'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.neworder.queryReworkByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
						}, {
							name : 'createTime'
						}, {
							name : 'createUserId'
						}, {
							name : 'createName'
						}, {
							name : 'updateTime'
						}, {
							name : 'updateUserId'
						}, {
							name : 'updateName'
						}, {
							name : 'code'
						}, {
							name : 'happenDate'
						}, {
							name : 'tache'
						}, {
							name : 'describe'
						}, {
							name : 'orderNo'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'defectType'
						}, {
							name : 'defectAmount'
						}, {
							name : 'batchNoStr'
						}, {
							name : 'firstId'
						}, {
							name : 'firstName'
						}, {
							name : 'reworkMethod'
						}, {
							name : 'reworkDeal'
						}, {
							name : 'secondId'
						}, {
							name : 'secondName'
						}, {
							name : 'secondTime'
						}, {
							name : 'reworkResponse'
						}, {
							name : 'reworkIncentive'
						}, {
							name : 'planFinishDate'
						}, {
							name : 'reworkOrderNo'
						}, {
							name : 'thirdId'
						}, {
							name : 'thirdName'
						}, {
							name : 'thirdTime'
						}, {
							name : 'ifOntime'
						}, {
							name : 'notOntime'
						}, {
							name : 'ifOk'
						}, {
							name : 'fourthId'
						}, {
							name : 'fourthName'
						}, {
							name : 'fourthTime'
						}]
			})
		})
	}

}