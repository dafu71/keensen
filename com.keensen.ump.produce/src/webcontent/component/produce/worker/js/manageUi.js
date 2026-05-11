com.keensen.ump.produce.component.produce.WorkerMgr = function() {
	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentproduceworkermgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.crewStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['一班', '一班'], ['二班', '二班']]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/userName',
								colspan : 1,
								fieldLabel : '姓名%-%'
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '班组',
								ref : '../crew',
								hiddenName : 'condition/crew',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.crewStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.crew.reset()
									}
								}
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
			hsPage : true,
			viewConfig : {
				forceFit : true
			},
			tbar : [{
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						hidden : uid != 'KS00524' && uid != 'dafu',
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			delUrl : 'com.keensen.ump.produce.component.produce.deleteWorker.biz.ext',
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'userName',
						header : '姓名'
					}, {
						dataIndex : 'userId',
						header : '登录名'
					}, {
						dataIndex : 'crew',
						header : '班组'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.produce.queryWorkerByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'userId'
						}, {
							name : 'userName'
						}, {
							name : 'crew'
						}]
			})
		})
	}

	this.initEditWindow = function() {

		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				successFn : function(i, r) {

					_this.editWindow.items.items[0].form.reset();
					_this.editWindow.hide();
					_this.listPanel.refresh();

				},

				columns : 1,
				loadUrl : 'com.keensen.ump.produce.component.produce.expandWorker.biz.ext',
				saveUrl : 'com.keensen.ump.produce.component.produce.updateWorker.biz.ext',
				fields : [{
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '班组',
							ref : '../../crew',
							hiddenName : 'entity/crew',
							dataIndex : 'crew',
							anchor : '95%',
							colspan : 1,
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							store : this.crewStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.crew.reset()
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							// name : 'entity/materSpecName',
							readOnly : true,
							fieldLabel : '姓名',
							ref : '../../userName',
							dataIndex : 'userName',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'hidden',
							name : 'entity/userId',
							dataIndex : 'userId',
							ref : '../../userId'
						}]
			}]
		});
	}

}