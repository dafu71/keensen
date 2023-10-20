/*
 * 示例ui @author rye
 */
com.zoomlion.hjsrm.inspect.Inspectlbwhmgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.buildExcelUploadWin();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'inspectlbwhmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 170,
					width : 500,
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : true,
					title : '【 质检类别查询 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								columns : 1,
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : 'textfield',
								columns : 1,
								name : 'condition/lifnr',
								fieldLabel : '供应商'
							}, {
								xtype : 'textfield',
								columns : 1,
								name : 'condition/name1',
								fieldLabel : '供应商描述'
							},{
								xtype : 'dictcombobox',
								name : 'condition/zjlb',
								dataIndex : 'condition/zjlb',
								hiddenName : 'condition/zjlb',
								fieldLabel : '质检类别',
								emptyText : '',
								dictData : GE_INSPECT_ZJLB
							},{
								xtype : 'textfield',
								columns : 1,
								name : 'condition/maktx',
								fieldLabel : '物料描述'
							},{
								xtype : 'textarea',
								height : '50',
								ref : "../matnr2",
								name : 'condition/matnr2',
								fieldLabel : '物料编码'
							}, {
								xtype : 'hidden',
								ref : "../matnr",
								name : 'condition/matnr'
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 质检类别列表 】',
			hsPage : true,
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
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}, '-', {
						text : '模版下载',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.downFile
					}, '-', {
						text : '导入',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onImportExcel
					}],
			selModel : selModel,
			delUrl : 'com.zoomlion.hjsrm.inspect.inspectwtwh.delinspectlbwh.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'werks',
						width:48,
						header : '工厂'
					}, {
						dataIndex : 'matnr',
						header : '物料编码',
						width:140
					}, {
						dataIndex : 'maktx',
						width:240,
						header : '物料描述'
					}, {
						dataIndex : 'lifnr',
						header : '供应商编码'
					}, {
						dataIndex : 'name1',
						width:200,
						header : '供应商名称'
					},{
						dataIndex : 'zeinr',
						header : '工艺属性'
					},{
						xtype : 'dictcolumn',
						dictData : GE_INSPECT_ZJLB,
						dataIndex : 'zjlb',
						header : '质检类别'
					},   {
						dataIndex : 'tranu',
						header : '维护人'
					}, {
						dataIndex : 'trant',
						header : '维护时间'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.queryinspectlbwh.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						fields : [ {
									name : 'werks'
								}, {
									name : 'matnr'
								}, {
									name : 'maktx'
								}, {
									name : 'lifnr'
								},  {
									name : 'name1'
								},{
									name : 'zeinr'
								},{
									name : 'zjlb'
								},{
									name : 'tranu'
								}, {
									name : 'trant'
								}]
					})
		});
	}
	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增质检类别',
			height : 150,
			width : 800,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
						xtype : 'inputpanel',
						pgrid : this.listPanel,
						columns : 2,
						// saveUrl :
						// 'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.addAnnounce.biz.ext',
						saveUrl : 'com.zoomlion.hjsrm.inspect.inspectwtwh.addinspectlbwh.biz.ext',
						fields : [{
							xtype : 'factorycombobox',
							defaultValue : '3000',
							hiddenName : 'zjlbwh/werks',
							allowBlank : false,
							fieldLabel : '工厂',
							colspan : 1
						}, {
							xtype : 'matnrallCombo',
							name : 'zjlbwh/matnr',
							allowBlank : false,
							fieldLabel : '物料编码',
							colspan : 1
						}, {
							xtype : 'lifnrallCombo',
							name : 'zjlbwh/lifnr',
							allowBlank : false,
							fieldLabel : '供应商编码',
							colspan : 1
						}, {
							xtype : 'dictcombobox',
							name : 'zjlbwh/zjlb',
							hiddenName : 'zjlbwh/zjlb',
							allowBlank : false,
							fieldLabel : '质检类别',
							dictData : GE_INSPECT_ZJLB,
							colspan : 1
						}]
					}]
		});
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改质检类别',
			height : 150,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.zoomlion.hjsrm.inspect.inspectwtwh.loadinspectlbwh.biz.ext',
				saveUrl : 'com.zoomlion.hjsrm.inspect.inspectwtwh.saveinspectlbwh.biz.ext',
				fields : [{
							xtype : 'factorycombobox',
							defaultValue : '3000',
							hiddenName : 'zjlbwh/werks',
							allowBlank : false,
							dataIndex : 'werks',
							fieldLabel : '工厂',
							colspan : 1
						}, {
							xtype : 'matnrallCombo',
							name : 'zjlbwh/matnr',
							dataIndex : 'matnr',
							allowBlank : false,
							readOnly : true,
							fieldLabel : '物料编码',
							colspan : 1
						}, {
							xtype : 'lifnrallCombo',
							name : 'zjlbwh/lifnr',
							allowBlank : false,
							dataIndex : 'lifnr',
							readOnly : true,
							fieldLabel : '供应商编码',
							colspan : 1
						}, {
							xtype : 'dictcombobox',
							name : 'zjlbwh/zjlb',
							hiddenName : 'zjlbwh/zjlb',
							allowBlank : false,
							fieldLabel : '质检类别',
							dataIndex : 'zjlb',
							dictData : GE_INSPECT_ZJLB,
							colspan : 1
						}]
			}]
		});
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
						saveUrl : 'com.zoomlion.hjsrm.inspect.uploadInspectlbwh.flow',
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
