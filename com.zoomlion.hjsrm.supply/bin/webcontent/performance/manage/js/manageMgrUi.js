com.zoomlion.hjsrm.supply.ManageMgr = function() {
	this.initPanel = function() {

		this.initInputPanel();
		this.buildExcelUploadWin();
		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					renderTo : 'performancemanageMgr',
					panels : [this.inputPanel]
				});
	}
	this.initInputPanel = function() {
		var store = new Ext.data.ArrayStore({
					fields : ['mykey', 'myvalue'],
					data : [["1", "月度绩效"], ["2", "半年绩效"], ["3", "年度绩效"]]
				});
		this.combo = new Ext.form.ComboBox({
					store : store,
					displayField : 'myvalue',
					valueField : 'mykey',
					typeAhead : true,
					mode : 'local',
					forceSelection : true,
					anchor : '80%',
					triggerAction : 'all',
					emptyText : '--请选择--',
					fieldLabel : '类型',
					selectOnFocus : true
				});
		this.inputPanel = this.inputPanel || new Ext.FormPanel({
					height : 150,
					title : '【 供应商绩效导入 】',
					buttonAlign : 'center',
					labelAlign : "right",
					layout : 'column',
					autoHide : false,
					border : true,
					// saveUrl : '....biz.ext',
					items : [{
								xtype : 'displayfield',
								value : '&nbsp;',
								columnWidth : .33
							}, {
								xtype : 'displayfield',
								value : '&nbsp;',
								columnWidth : .33
							}, {
								xtype : 'displayfield',
								value : '&nbsp;',
								columnWidth : .33
							}, {
								layout : 'form',
								border : false,
								columnWidth : .33,
								items : [{
											xtype : 'companycombobox',
											defaultValue : '3000',
											anchor : '80%',
											ref : '../bukrs',
											hiddenName : 'condition/bukrs',
											fieldLabel : '公司'
										}]
							}, {
								layout : 'form',
								border : false,
								columnWidth : .33,
								items : [{
											xtype : 'factorycombobox',
											columnWidth : .33,
											defaultValue : '3000',
											anchor : '80%',
											ref : '../werks',
											hiddenName : 'condition/werks',
											fieldLabel : '工厂'
										}]
							}, {
								layout : 'form',
								columnWidth : .33,
								border : false,
								items : this.combo
							}],
					buttons : [{
								text : "导入Excel",
								scope : this,
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
				saveUrl : 'com.zoomlion.hjsrm.supply.manager.supply.uploadPerformance.flow',
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
