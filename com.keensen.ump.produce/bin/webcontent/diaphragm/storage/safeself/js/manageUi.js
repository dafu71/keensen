com.keensen.ump.produce.diaphragm.storage.SafeselfMgr = function() {
	this.initPanel = function() {

		this.initListPanel();
		this.initEditWindow();
		
		this.initSafeselfPanel();

		return new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : 'safeselfmgr',
					panels : [this.listPanel]
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			tbar : [{
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '->', {
						text : '图示',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onEcharts
					}, '-', {
						text : '导出',
						scope : this,
						iconCls : 'icon-application_excel',
						hidden:true,
						handler : this.onExportExcel
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'materSpecName',
						header : '内部型号'
					}, {
						dataIndex : 'amountStd',
						header : '安全库存标准'
					}, {
						dataIndex : 'amountStock',
						header : '时点（AB仓+C仓）<br>库存（米）'
					}, {
						dataIndex : 'amountOrder',
						header : '有元件订单对应膜片（米）'
					}, {
						dataIndex : 'amountDull',
						header : '呆滞且不能直接<br>使用的膜片数量'
					}, {
						dataIndex : 'amountSafe',
						header : '自用膜片安全库存的数量'
					}, {
						dataIndex : 'amountDiff',
						header : '安全库存差量'
					}, {
						dataIndex : 'countermeasure',
						header : '对策'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.storage.safestorage.queryStockSelfCount.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : '',
				baseParams : {

			}	,
				fields : [{
							name : 'materSpecName'
						}, {
							name : 'amountStd'
						}, {
							name : 'amountStock'
						}, {
							name : 'materSpecId'
						}, {
							name : 'amountOrder'
						}, {
							name : 'amountDull'
						}, {
							name : 'amountSafe'
						}, {
							name : 'amountDiff'
						}, {
							name : 'countermeasure'
						}]
			})
		})
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.diaphragm.storage.safestorage.expandSafeself.biz.ext',
				saveUrl : 'com.keensen.ump.produce.diaphragm.storage.safestorage.saveSafeself.biz.ext',
				fields : [{
							xtype : 'textfield',
							dataIndex : 'materSpecName',
							name : 'entity/materSpecName',
							readOnly : true,
							fieldLabel : '内部型号',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/amount',
							dataIndex : 'amount',
							allowBlank : false,
							fieldLabel : '有元件订单对应膜片（米）',
							minValue : 0,
							allowDecimals : false,
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/amount2',
							dataIndex : 'amount2',
							allowBlank : false,
							fieldLabel : '呆滞且不能直接使用的膜片数量',
							minValue : 0,
							allowDecimals : false,
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'entity/countermeasure',
							dataIndex : 'countermeasure',
							allowBlank : true,
							fieldLabel : '对策',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'entity/materSpecId',
							dataIndex : 'materSpecId'
						}]
			}]
		});
	}

	this.initSafeselfPanel = function() {
		this.safeselfPanel = new Ext.Panel({
			height : 550,
			html : '<div id="' + safeselfId + '" style = "width:100%;height:550px;margin:0 auto">安全库存图示</div>'

		})

		this.safeselfWindow = this.safeselfWindow || new Ext.Window({
					title : '安全库存图示',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 1024,
					height : 600,
					layout : 'fit',
					items : [this.safeselfPanel],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.safeselfWindow.hide();
								}
							}]

				});
	};
}