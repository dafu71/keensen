/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 外协大件库存状态维护
 * 创建日期： 2015-05-21  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.kcgl.WxdjkcztwhnewMgr = function() {
	this.initPanel = function() {
		this.initListPanel();
		this.buildExcelUploadWin();
		return new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : 'WxdjkcztwhnewMgr',
					panels : [this.listPanel]
				});
	}


this.initListPanel = function() {
	    this.amount = 0;
		this.listPanel = new Ext.fn.EditListPanel({
			title : '【 外协大件库存状态维护 】',
			hsPage : false,
			tbar : [{
						text : '保存',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSaveok
					},{
						text : "导出",
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
						},{
						text : "导入",
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.importExcel
						}],	
			columns : [new Ext.grid.RowNumberer(),{
						dataIndex : 'cxmc',
						header : '车型名称',
						width:120
					},{
						dataIndex : 'matnr',
						header : '物料编码',
						width:150
					},{
						dataIndex : 'maktx',
						header : '物料描述',
						width:250
						
					},{
						dataIndex : 'cxdm',
						header : '车型代码',
						hidden : true
						
					},{
						dataIndex : 'lifnr',
						header : '供应商',
						hidden : true
						
					},{
						dataIndex : 'menge_a_z',
						width:102,
						header : '未完成计划数(总)'
					},{
						dataIndex : 'menge_b_z',
						width:55,
						header : '投料(总)'
					},{
						dataIndex : 'menge_c_z',
						width:66,
						header : '半成品(总)'
					},{
						dataIndex : 'menge_d_z',
						width:91,
						header : '待表面处理(总)'
					},{
						dataIndex : 'menge_e_z',
						width:81,
						header : '送货状态(总)'
					},{
						dataIndex : 'menge_a',
						header : '未完成计划数',
						width:82,
						css : 'background:#B9B9FF;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									decimalPrecision :0,
									allowNegative : false
								}))
					},{
						dataIndex : 'menge_b',
						header : '投料',
						width:38,
						css : 'background:#FC9563;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									decimalPrecision :0,
									allowNegative : false
								}))
					},{
						dataIndex : 'menge_c',
						header : '半成品',
						width:51,
						css : 'background:#B9B9FF;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									decimalPrecision :0,
									allowNegative : false
								}))
					},{
						dataIndex : 'menge_d',
						header : '待表面处理',
						width:79,
						css : 'background:#FC9563;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									decimalPrecision :0,
									allowNegative : false
								}))
					},{
						dataIndex : 'menge_e',
						header : '送货状态',
						width:65,
						css : 'background:#B9B9FF;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									decimalPrecision :0,
									allowNegative : false
								}))
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.kcgl.kcglDaji.querykcglwxdjkcztwhnew.biz.ext',
				root : 'data',
				autoLoad : true,
				fields : [{
							name : 'cxmc'
						},{
							name : 'lifnr'
						},{
							name : 'cxdm'
						},{
							name : 'matnr'
						},{
							name : 'maktx'
						},{
							name : 'menge_a_z'
						}, {
							name : 'menge_b_z'
						}, {
							name : 'menge_c_z'
						}, {
							name : 'menge_d_z'
						}, {
							name : 'menge_e_z'
						}, {
							name : 'menge_a'
						}, {
							name : 'menge_b'
						}, {
							name : 'menge_c'
						}, {
							name : 'menge_d'
						}, {
							name : 'menge_e'
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
						saveUrl : 'com.zoomlion.hjsrm.kcgl.uploadwxdjwh.flow',
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