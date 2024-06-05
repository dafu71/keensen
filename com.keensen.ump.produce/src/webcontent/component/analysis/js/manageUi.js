com.keensen.ump.produce.component.analysisMgr = function() {

	this.initPanel = function() {
		var me = this;
		var store = new Ext.data.SimpleStore({
					fields : ['id', 'name'],
					data : [['膜片AB仓', '膜片AB仓'], ['膜片C仓', '膜片C仓'], ['膜片发货仓', '膜片发货仓'],
							['研发1号仓', '研发1号仓'], ['半成品仓', '半成品仓']]
				});
		this.storagecombo = new Ext.form.ComboBox({
			store : store,
			anchor : '100%',
			fieldLabel : '仓库',
			displayField : 'name',
			valueField : 'id',
			myvalue : '',
			typeAhead : true,
			mode : 'local',
			// name : 'condition/storageIds',
			// hiddenName: 'condition/storageIds',
			tpl : '<tpl for="."><div class="x-combo-list-item"><span><input type="checkbox" {[values.check?"checked":""]} value="{[values.id]}" /></span><span >{name}</span></div></tpl>',
			triggerAction : 'all',
			emptyText : '--请选择仓库--',
			selectOnFocus : true,

			onSelect : function(record, index) {
				if (me.storagecombo.fireEvent('beforeselect', me.storagecombo,
						record, index) !== false) {
					record.set('check', !record.get('check'));
					var str = [];// 页面显示的值
					var strvalue = [];// 传入后台的值
					me.storagecombo.store.each(function(rc) {
								if (rc.get('check')) {
									str.push(rc.get('name'));
									strvalue.push(rc.get('id'));
								}
							});
					me.storagecombo.setValue(str.join());
					me.storagecombo.myvalue = strvalue.join();
					me.storagecombo.fireEvent('select', me.storagecombo,
							record, index);
				}
			}
		});

		this.initQueryPanel();
		this.initListPanel();
		this.buildExcelUploadWin();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "analysismgr",
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {

		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{

						xtype : 'combo',
						mode : "local",
						forceSelection : true,
						triggerAction : "all",
						hiddenName : 'condition/mpType',
						store : [['BW', 'BW'], ['ULP', 'ULP'], ['NF', 'NF'],
								['SW', 'SW']],
						emptyText : "--请选择--",
						fieldLabel : '膜片类型',
						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						}

					}, {
						xtype : 'combo',
						mode : "local",
						forceSelection : true,
						triggerAction : "all",
						hiddenName : 'condition/prodType',
						store : [['8寸', '8寸'], ['4寸', '4寸']],
						emptyText : "--请选择--",
						fieldLabel : '元件类型',
						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						}
					}, {
						xtype : 'textfield',
						name : 'condition/prodSize',
						// anchor : '75%',
						fieldLabel : '尺寸规格'
					}, {
						xtype : 'prodspeccombobox',
						hiddenName : 'condition/prodSpecId',
						// anchor : '85%',
						fieldLabel : '元件型号 '
					}]
				});

		this.queryPanel.addButton({
					text : "计划模板下载",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onDown
				});

		this.queryPanel.addButton({
					text : "计划导入",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.importExcel
				});
		/*
		 * this.queryPanel.addButton({ text : "导出", scope : this, iconCls :
		 * 'icon-application_excel', handler : this.exportExcel });
		 */
	}

	this.initListPanel = function() {
		var _this = this;
		// var selModel = new Ext.grid.CheckboxSelectionModel({
		// singleSelect : true,
		// header : ''
		// });
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : true
			},
			tbar : [{
						text : "重新计算",
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onCalculate
					}, '-', this.storagecombo, {
						text : "按仓库重新计算",
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onCalculate2
					}, '->', {
						text : "导出计划",
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
					}, '-', {
						text : '导出膜片明细',
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel2
					}],
			hsPage : true,
			id : listid,
			// selModel : selModel,
			delUrl : '111.biz.ext',
			columns : [
					new Ext.grid.RowNumberer(), // selModel,
					{
						dataIndex : 'mpType',
						header : '膜片类型'
					}, {
						dataIndex : 'priority',
						header : '优先级顺序'
					}, {
						dataIndex : 'prodType',
						header : '元件类型'
					}, {
						dataIndex : 'prodSize',
						header : '尺寸规格'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'pageSize',
						header : '单只元件<br>膜片数量（米）'
					}, {
						dataIndex : 'stockLength',
						header : '库存可用<br>膜片数量（米）'
					}, {
						dataIndex : 'stockAmount',
						header : '库存可卷制<br>元件数量（支）'
					}, {
						dataIndex : 'planLength',
						header : '计划消耗<br>膜片数量（米）'
					}, {
						dataIndex : 'planAmount',
						header : '计划卷制<br>数量（支）'
					}, {
						dataIndex : 'arrangeLength',
						header : '实际消耗<br>膜片数量（米）'
					}, {
						xtype : 'dictcolumn',
						sortable : true,
						dictData : KS_YESORNO,
						dataIndex : 'ifok',
						header : '是否满足计划'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.analysis.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',

				baseParams : {},
				fields : [{
							name : 'id'
						}, {
							name : 'stockLength'
						}, {
							name : 'stockAmount'
						}, {
							name : 'planLength'
						}, {
							name : 'planAmount'
						}, {
							name : 'ifok'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'mpType'
						}, {
							name : 'price'
						}, {
							name : 'priority'
						}, {
							name : 'prodType'
						}, {
							name : 'prodSize'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'numPerWad'
						}, {
							name : 'blankingSize'
						}, {
							name : 'pageSize'
						}, {
							name : 'arrangeLength'
						}]
			})
		})
	}

	// 导入excel面板
	this.buildExcelUploadWin = function() {
		this.excelUploadWin = new Ext.Window({
			title : '导入Excel',
			collapsible : false,
			modal : true,
			closeAction : 'hide',
			buttonAlign : 'center',
			layout : 'fit',
			width : 480,
			height : 120,
			items : [{
				xtype : 'columnform',
				itemId : 'uploadForm',
				saveUrl : 'com.keensen.ump.produce.component.importProdPlanAmount.flow',
				columns : 1,
				fileUpload : true,
				fields : [{
							name : 'uploadFile',
							fieldLabel : '选择文件',
							allowBlank : false,
							inputType : 'file'
						}]
			}],
			buttons : [{
						text : '上传',
						handler : this.doUpload,
						scope : this
					}, {
						text : '关闭',
						scope : this,
						handler : function() {
							this.excelUploadWin.hide();
						}
					}]
		});
	}
}