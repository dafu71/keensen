com.keensen.ump.produce.marketing.LabelMgr = function() {

	this.initPanel = function() {

		this.rec4ChooseLabel = {};
		
		this.initStore();
		this.initQueryPanel();
		this.initListPanel();
		
		this.initInputWindow();
		this.buildUploadWin4ChooseLable();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'marketinglabelmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.statusStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['0', '停用'], ['1', '在用']]
				});

		this.labelDrawingLogoStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.marketing.appearance.queryLabelDrawingLogo.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {},
			fields : [{
						name : 'logo'
					}]
		})

		this.labelDrawingSpecNameStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.marketing.appearance.queryLabelDrawingSpecName.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {},
			fields : [{
						name : 'specName'
					}]
		})

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
								xtype : 'combobox',
								forceSelection : true,
								mode : 'local',
								fieldLabel : '贴牌型号',
								// ref : '../../specNameLabel',
								hiddenName : 'condition/specName',
								anchor : '100%',
								colspan : 1,
								emptyText : '',
								editable : false,
								store : _this.labelDrawingSpecNameStore,
								displayField : "specName",
								valueField : "specName"
							}, {
								xtype : 'textfield',
								mode : 'local',
								fieldLabel : '%-图纸编号-%',
								// ref : '../../logoLabel',
								name : 'condition/drawingCode',
								anchor : '100%',
								colspan : 1
							}, {
								xtype : 'textfield',
								mode : 'local',
								fieldLabel : '%-贴牌型号-%',
								ref : '../specNameLabel',
								name : 'condition/specName2',
								anchor : '100%',
								colspan : 1
							}, {
								xtype : 'combobox',
								forceSelection : true,
								mode : 'local',
								fieldLabel : '使用状态',
								ref : '../status',
								hiddenName : 'condition/status',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : _this.statusStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										this.reset()
									}
								}
							}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					// rescode : '10002661',
					hidden:true,
					handler : this.exportExcel
				});
	}

	this.initListPanel = function() {
		
		var _this = this;
		
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = this.listPanel || new Ext.fn.EditListPanel({
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			selModel : selModel,
			clicksToEdit : 1,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddLable
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelLable
					}, '-', {
						text : '修改图纸样例',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onModifyLableUrl
					}, '->', {
						text : '变更使用状态',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onChangeLabelStatus
					}],
			delUrl : 'com.keensen.ump.produce.marketing.appearance.deleteLabelDrawing.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel, {
						dataIndex : 'drawingName',
						header : '图纸名称',
						hidden : true,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var id = _this.rec4ChooseLabel.data['id'];
											_this.saveLabel(id, 'drawingName',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'drawingCode',
						header : '图纸编号',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var id = _this.rec4ChooseLabel.data['id'];
											_this.saveLabel(id, 'drawingCode',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'materCode',
						header : '物料号',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var id = _this.rec4ChooseLabel.data['id'];
											_this.saveLabel(id, 'materCode',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'logo',
						header : '标签LOGO',
						// hidden : true,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var id = _this.rec4ChooseLabel.data['id'];
											_this.saveLabel(id, 'logo',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'specName',
						header : '贴牌型号',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var id = _this.rec4ChooseLabel.data['id'];
											_this.saveLabel(id, 'specName',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'labelSize',
						header : '标签尺寸',
						// hidden : true,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									scope : this,
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var id = _this.rec4ChooseLabel.data['id'];
											_this.saveLabel(id, 'labelSize',
													newValue, oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'url',
						header : '图例',
						renderer : function(value, metaData, rec, rowIndex,
								colIndex, store, view) {
							if (!Ext.isEmpty(value)) {

								return '<img src="'
										+ markRootUrl
										+ value
										+ '?ver='
										+ rec.data.id
										+ '" style="width:auto; height:auto; max-width:98%; max-height:140px;" />';

							}
						}
					}, {
						dataIndex : 'status',
						header : '使用状态',
						renderer : function(value, metaData, rec, rowIndex,
								colIndex, store, view) {
							return value == '0'
									? "<span style='color:red'>停用</span>"
									: '在用'
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.marketing.appearance.queryLabelDrawingByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'drawingCode'
						}, {
							name : 'logo'
						}, {
							name : 'specName'
						}, {
							name : 'drawingName'
						}, {
							name : 'materCode'
						}, {
							name : 'labelSize'
						}, {
							name : 'id'
						}, {
							name : 'url'
						}, {
							name : 'status'
						}]
			})
		})
	}
	
	this.initInputWindow = function(){
		
		var _this = this;
		
		this.inputWindow = this.inputWindow
				|| new Ext.fn.FormWindow({
					title : '新增',
					height : 480,
					width : 600,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'inputpanel',
						baseCls : "x-plain",
						// pgrid : _this.listPanel4ChooseLable,
						columns : 1,
						saveUrl : 'com.keensen.ump.produce.marketing.appearance.saveLabelDrawing.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}/*
									 * , { xtype : 'textfield', ref :
									 * '../../drawingName', name :
									 * 'entity/drawingName', allowBlank : false,
									 * fieldLabel : '图纸名称', anchor : '95%',
									 * colspan : 1 }
									 */, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../drawingCode',
									name : 'entity/drawingCode',
									allowBlank : false,
									fieldLabel : '图纸编号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../materCode',
									name : 'entity/materCode',
									allowBlank : false,
									fieldLabel : '物料号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}/*
									 * , { xtype : 'textfield', ref :
									 * '../../logo', name : 'entity/logo',
									 * allowBlank : false, fieldLabel :
									 * '标签LOGO', anchor : '95%', colspan : 1 }, {
									 * xtype : 'displayfield', height : '5',
									 * colspan : 1 }
									 */, {
									xtype : 'textfield',
									ref : '../../specName',
									name : 'entity/specName',
									allowBlank : false,
									fieldLabel : '贴牌型号',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'trigger',
									name : 'entity/urlname',
									fieldLabel : '标签图样',
									allowBlank : false,
									colspan : 1,
									anchor : '95%',
									editable : false,
									hideTrigger : false,
									scope : this,
									onTriggerClick : function() {
										_this.onUploadWindowShow4ChooseLable();
									}
								}, {
									xtype : 'hidden',
									name : 'entity/url'
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../logo',
									name : 'entity/logo',
									allowBlank : false,
									fieldLabel : '标签LOGO',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textfield',
									ref : '../../labelSize',
									name : 'entity/labelSize',
									allowBlank : false,
									fieldLabel : '标签尺寸',
									anchor : '95%',
									colspan : 1
								}]
					}]
				});
	}
	
	// 上传面板
	this.buildUploadWin4ChooseLable = function() {
		
		this.uploadWin4ChooseLable = new Ext.Window({
			title : '上传文件',
			collapsible : false,
			modal : true,
			closeAction : 'hide',
			buttonAlign : 'center',
			myflag : 0,
			layout : 'fit',
			width : 480,
			height : 120,
			items : [{
				xtype : 'columnform',
				itemId : 'uploadForm',
				saveUrl : 'com.keensen.ump.produce.component.uploadLabelTemplate.flow',
				columns : 1,
				fileUpload : true,
				fields : [{
							name : 'uploadFile',
							fieldLabel : '选择文件',
							allowBlank : false,
							// id : 'marktemplateupload4ChooseLable',
							inputType : 'file'
						}]
			}],
			buttons : [{
						text : '上传',
						handler : this.doUpload4ChooseLable,
						scope : this
					}, {
						text : '关闭',
						scope : this,
						handler : function() {
							this.uploadWin4ChooseLable.hide();
						}
					}]
		});
	}
}