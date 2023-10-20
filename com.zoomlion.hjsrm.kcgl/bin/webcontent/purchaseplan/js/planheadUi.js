com.zoomlion.hjsrm.kcgl.PlanheadMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.buildExcelUploadWin();
		this.initEditWindow();
	}
	
	this.initQueryPanel = function() {

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					//width : 500,
					region : 'north',
					columns : 4,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 计划查询 】', 
					fields : [{
								xtype : 'textfield',
								name : 'condition/title',
								anchor : '100%',
								fieldLabel : '计划标题'
							}, {
								xtype : "dateregion",
								anchor : '100%',
								//width : 200,
								nameArray : ['condition/createstartdate',
										'condition/createendate'],
								fieldLabel : "创建日期",
								format : "Y-m-d"
							},{
								xtype : 'combobox',
								name : 'condition/confirm',
								hiddenName : 'condition/confirm',
								fieldLabel : '是否确认',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
									        id: 0,
											fields : ['mykey', 'myvalue'],
											data : [['N','未确认'], ['Y','已确认']]
										}),
								mode : "local",
								editable:false,
								displayField : "myvalue",
								valueField : "mykey",
								forceSelection : true,
								emptyText : "请选择"
							},{
								xtype : 'combobox',
								name : 'condition/archive',
								hiddenName : 'condition/archive',
								fieldLabel : '是否归档',
								triggerAction : "all",
								store : new Ext.data.ArrayStore({
									        id: 0,
											fields : ['mykey', 'myvalue'],
											data : [['N','未归档'], ['Y','已归档']]
										}),
								mode : "local",
								editable:false,
								displayField : "myvalue",
								valueField : "mykey",
								forceSelection : true,
								emptyText : "请选择"
							}]
				});
		this.queryPanel.addButton({
					text : "导入计划",
					iconCls : "icon-application_excel",
					scope : this,
					handler : this.onImportExcel
				});
		this.queryPanel.addButton({
					text : "导出模板",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onExportExcel
				});
	}
	
	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel(
				{   header : '',
					singleSelect : true});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 计划列表 】',
			region : 'center',
			hsPage : true,
			tbar : [{
						text : '修改标题',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}, '-', {
						text : '确认',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onConfirm
					}, '-', {
						text : '取消确认',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onUnConfirm
					}, '-', {
						text : '归档',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onArchive
					},'->',{
						xtype : 'displayfield',
						value :'<font style="color:red">提示：记录确认后供应商方可答交，取消确认后供应商不可答交，归档后计划将不可修改和答交&nbsp;&nbsp;&nbsp;&nbsp;</font>'
						
					}
					/*, '-', {
						text : '取消归档确认',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onUnArchive
					}*/],
			selModel : selModel,
			delUrl : 'com.zoomlion.hjsrm.kcgl.stockmanage.updateHeadDelflag.biz.ext',
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'title',
						header : '标题'
					},{
						dataIndex : 'fullname',
						header : '创建人'
					},{
						dataIndex : 'createtime',
						header : '创建时间'		
					}
					,{
						dataIndex : 'confirmname',
						header : '确认状态'		
					}
					,{
						dataIndex : 'archivename',
						header : '归档状态'		
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.kcgl.stockmanage.queryHead.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'title'
						}, {
							name : 'fullname'
						}, {
							name : 'confirmname'
						}, {
							name : 'archivename'
						}, {
							name : 'confirm'
						}, {
							name : 'archive'
						}, {
							name : 'pkid'
						}, {
							name : 'createtime'
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
			height : 160,
			items : [{
						xtype : 'columnform',
						itemId : 'uploadForm',
						saveUrl : 'com.zoomlion.hjsrm.kcgl.uploadPlan.flow',
						columns : 1,
						fileUpload : true,
						fields : [{
								xtype : 'textfield',
								name : 'title',
								allowBlank : false,
								fieldLabel : '计划标题'
							},{
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
	
	//修改窗口
	this.initEditWindow = function() {
		var _this = this;
		
		this.editPanel = this.editPanel || new Ext.FormPanel({
			height : 120,
			buttonAlign : 'center',
			labelAlign : "right",
			layout : 'form',
			autoHide : false,
			border : true,
			items : [{
							xtype : 'displayfield',
							value : '&nbsp;'
						},{
							xtype : 'textfield',
							width : 200,
							name : 'head/title',
							fieldLabel : '标题',
							allowBlank : false
					},{
							xtype : 'hidden',
							name : 'head/pkid'
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onUpdate
						}, {
						text : "取消",
						scope : this,
						handler : function(){
							this.editPanel.form.reset();
							this.editWindow.hide();
						}
					}]
		});
			

		
		this.editWindow = this.editWindow || new Ext.Window({
			title : '修改标题',
			height : 150,
			width : 400,
			resizable : true,//窗口边框和托动大小
			minimizable : false,//设置窗口不能最小化
			maximizable : true,//设置窗口能最大化
			modal:true,
			items : [this.editPanel]
		});
	}
}