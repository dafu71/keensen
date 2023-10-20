/*
 * 示例ui @author rye
 */
com.zoomlion.hjsrm.inspect.Inspectqjbztdmgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.buildExcelUploadWin();
	}
	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 170,
					width : 500,
					columns : 2,
					border : true,				
					title : '【 全检物料查询 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								columns : 1,
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : 'dictcombobox',
								name : 'condition/statu',
								dataIndex : 'condition/statu',
								hiddenName : 'condition/statu',
								fieldLabel : '是否维护',
								emptyText : '',
								dictData : GE_INSPECT_QJBZ
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
			width:480,
			id:zjlblistPanel,
			indexKey:'matnr',
			tbar : [{
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
			delUrl : '...',
			columns : [new Ext.grid.RowNumberer(), selModel,  {
						dataIndex : 'matnr',
						header : '物料编码',
						width:140
					}, {
						dataIndex : 'maktx',
						width:240,
						header : '物料描述'
					},{
						xtype : 'dictcolumn',
						dictData : GE_INSPECT_QJBZ,
						dataIndex : 'statu',
						header : '是否维护'
					} ,{
						dataIndex : 'meins',
						header : '计量单位'
					}, {
						dataIndex : 'werks',
						width:48,
						header : '工厂'
					},{
						dataIndex : 'zeinr',
						header : '工艺属性'
					} ],
			store : new Ext.data.JsonStore({
						url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.queryinspectqjbz.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						fields : [ {
									name : 'werks'
								}, {
									name : 'matnr'
								}, {
									name : 'maktx'
								},{
									name : 'zeinr'
								},{
									name : 'meins'
								},{
									name : 'statu'
								},{
									name : 'zjlb'
								}]
			})
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
						saveUrl : 'com.zoomlion.hjsrm.inspect.uploadInspectqjbz.flow',
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
