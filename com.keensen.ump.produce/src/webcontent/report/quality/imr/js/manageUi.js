com.keensen.ump.produce.report.quality.imr.imrMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initXPanel();
		this.initRPanel();
		this.initViewPanel();

		return new Ext.fn.fnLayOut({
					layout : 'form',
					autoScroll : true,
					border : false,
					renderTo : 'imrmgr',
					panels : [this.queryPanel, this.listPanel, this.viewPanel]
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
					// title : '【Xbar-R控制图查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '90%',
								//allowBlank : false,
								fieldLabel : '订单号'
							}, {
								xtype : 'prodspeccombobox',
								hiddenName : 'condition/prodSpecId',
								anchor : '95%',
								fieldLabel : '元件型号 ',
								typeAhead : true,
								allowBlank : false,
								typeAheadDelay : 100,
								minChars : 1,
								queryMode : 'local',
								lastQuery : '',
								editable : true,
								listeners : {
									'specialkey' : function() {
										return false;
									}
								}
							}, {
								xtype : "dateregion",
								anchor : '100%',
								allowBlank : true,
								colspan : 1,
								nameArray : ['condition/produceDtStart',
										'condition/produceDtEnd'],
								fieldLabel : "气检日期",
								format : "Y-m-d"
							}]
				});
		//this.queryPanel.addButton({
		//			text : "导出",
		//			scope : this,
		//			iconCls : 'icon-application_excel',
		//			handler : this.exportExcel
		//		});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【Xbar-R控制图列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			height : 300,
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 50
							}), selModel, {
						dataIndex : 'batchNo',
						header : '元件序号'
					}, {
						dataIndex : 'orderNo',
						header : '订单编号'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'checkResult',
						header : '泄压值'
					}, {
						dataIndex : 'produceDt',
						header : '气检时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.report.quality3.queryIMR.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
				baseParams : {

			}	,
				fields : [{
							name : 'batchNo'
						}, {
							name : 'recordId'
						}, {
							name : 'orderNo'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'checkResult'
						}, {
							name : 'produceDt'
						}, {
							name : 'x'
						}]
			})
		})
	}

	this.initXPanel = function() {
		this.xPanel = new Ext.Panel({
			height : 300,
			html : '<div id="main3" style = "width:100%;height:300px;margin:0 auto">单值控制图</div>'

		})
	};

	this.initRPanel = function() {
		this.rPanel = new Ext.Panel({
			height : 300,
			html : '<div id="main4" style = "width:100%;height:300px;margin:0 auto">极差控制图</div>'

		})
	};

	this.initViewPanel = function() {
		Ext.applyIf(this.xPanel, {
					region : 'center'
				});
		Ext.applyIf(this.rPanel, {
					region : 'south'
				});
		this.viewPanel = new Ext.Panel({
					height : 600,
					layout : 'fit',
					items : [new Ext.Container({
								layout : "border",
								autoScroll : true,
								items : [this.xPanel, this.rPanel]
							})]
				})
	}
}