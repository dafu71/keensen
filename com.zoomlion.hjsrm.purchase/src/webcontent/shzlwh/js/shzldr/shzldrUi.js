/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 送货指令导入
 * 创建日期： 2014-11-26  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.purchase.shzldrMgr = function() {
	this.initPanel = function() {
		this.initInputPanel();
		this.buildExcelUploadWin();
		return new Ext.fn.fnLayOut({
					 title : '送货指令导入',
					 layout : 'form',
					border : false,
					panels : [this.inputPanel]
				});
	}
	this.initInputPanel = function() {
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
					height : 100,
					title : '   ',
					pgrid : '',
					columns : 2,
					autoHide : false,
					border : true,
					saveUrl : '....biz.ext',
					fields : [{
								xtype : 'companycombobox',
								defaultValue : '3000',
								anchor : '80%',
								ref : '../bukrs',
								hiddenName : 'condition/bukrs',
								fieldLabel : '公司'
							}, {
								xtype : 'factorycombobox',
								defaultValue : '3000',
								anchor : '80%',
								ref : '../werks',
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}],
					tbar : [{
								text : "导入Excel",
								scope : this,
								rescode : '00642',
								handler : this.onImportExcel
							}, {
								text : "模板下载",
								scope : this,
								handler : this.downFile
							}]

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
						saveUrl : 'com.zoomlion.hjsrm.purchase.shzl.uploadShzldr.flow',
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
