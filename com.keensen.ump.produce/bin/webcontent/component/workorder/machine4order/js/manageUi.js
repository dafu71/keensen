com.keensen.ump.produce.component.workorder.Machine4orderMgr = function() {

	this.initPanel = function() {

		this.rec = {};
		this.nameSqlId = 'com.keensen.ump.produce.component.workorder.queryMachine4Order';

		this.sizeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['4', '4寸'], ['8', '8寸']]
				});
				
		this.initQueryPanel();
		this.initListPanel();
		
		this.initChooseWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'machine4ordermgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {

		var _this = this;

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					region : "north",
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo2',
								colspan : 1,
								fieldLabel : '订单号%-%'
							}, {
								xtype : 'prodspeccombobox',
								dataIndex : 'materSpecId',
								hiddenName : 'condition/materSpecId',
								ref : '../materSpecId',
								anchor : '100%',
								colspan : 1,
								fieldLabel : '生产型号 ',
								typeAhead : true,
								typeAheadDelay : 100,
								minChars : 1,
								queryMode : 'local',
								lastQuery : '',
								editable : true
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '尺寸',
								ref : '../size',
								hiddenName : 'condition/size',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.sizeStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.size.reset()
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/machineCode',
								colspan : 1,
								fieldLabel : '生产机台'
							}]
				});

	}

	this.initListPanel = function() {

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.EditListPanel({
			region : "center",
			viewConfig : {
				forceFit : true
			},
			tbar : [{
						text : '设置机台',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onArrange
					}],
			autoExpandColumn : '2',
			delUrl : '1.biz.ext',
			// id : 'project-confirm-list',
			hsPage : true,
			clicksToEdit : 1,
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'materSpecName',
						header : '生产型号'
					}, {
						dataIndex : 'cdmCodes',
						header : '裁叠膜机台'
					}, {
						dataIndex : 'jmCodes',
						header : '卷膜机台'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.common.queryByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {
							'nameSqlId' : this.nameSqlId
						},
						fields : [{
									name : 'orderNo'
								}, {
									name : 'materSpecName'
								}, {
									name : 'cdmCodes'
								}, {
									name : 'jmCodes'
								}, {
									name : 'materSpecId'
								}, {
									name : 'orderId'
								}]
					})
		})
	}

	this.initChooseWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					handleMouseDown : Ext.emptyFn
				});

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			selModel : selModel2,
			tbar : [{
						text : '确定选择',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSaveArrange
					}, '-', {
						text : '关闭',
						scope : this,
						handler : function() {
							this.chooseWindow.hide();
						}
					}],
			delUrl : '111.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel2, {
						dataIndex : 'code',
						header : '机台编码'
					}, {
						dataIndex : 'name',
						header : '机台名称'
					}, {
						dataIndex : 'ip',
						header : 'IP'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.workorder.queryMachineByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					//'condition/type' : '卷膜'
				},
				fields : [{
							name : 'code'
						}, {
							name : 'name'
						}, {
							name : 'type'
						}, {
							name : 'ip'
						}]
			})
		})

		this.chooseWindow = this.chooseWindow || new Ext.Window({
					title : '机台分配',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 600,
					height : 480,
					layout : 'border',
					items : [this.listPanel2]

				})
	}
}