com.keensen.ump.produce.marketing.BoxMgr = function() {

	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		this.buildUploadWin();
		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'marketingboxmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.stateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['0', '停用'], ['1', '在用']]
				});

	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 90,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/boxDrawingCode',
								fieldLabel : '包装箱图纸编号'
							}, {
								xtype : 'textfield',
								name : 'condition/materName',
								fieldLabel : '物料名称'
							}, {
								xtype : 'textfield',
								name : 'condition/specName',
								fieldLabel : '规格型号'
							}, {
								xtype : 'combobox',
								forceSelection : true,
								mode : 'local',
								fieldLabel : '使用状态',
								ref : '../state',
								hiddenName : 'condition/state',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : _this.stateStore,
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
					hidden : true,
					handler : this.exportExcel
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
					}, '->', {
						text : '变更使用状态',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onChangeState
					}, '-', {
						text : '修改带受控章图例',
						scope : this,
						iconCls : 'icon-application_edit',
						// disabled : (uid != 'KS00610') && (uid != 'KS01313')
						// && (uid != 'KS00524'),
						handler : this.onModifyUrl
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.marketing.appearance.deleteBox.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'boxDrawingCode',
						header : '包装箱图纸编号'
					}, {
						dataIndex : 'materCode',
						header : '物料号'
					}, {
						dataIndex : 'materName',
						header : '物料名称'
					}, {
						dataIndex : 'specName',
						header : '规格型号'
					}, {
						dataIndex : 'url',
						header : '带受控章图例',
						renderer : function(value, metaData, rec, rowIndex,
								colIndex, store, view) {
							if (!!value) {

								return '<img src="'
										+ markRootUrl
										+ value
										+ '?ver='
										+ rec.data.id
										+ '" style="width:auto; height:auto; max-width:98%; max-height:140px;" />';

							}
						}
					}, {
						dataIndex : 'state',
						header : '使用状态',
						renderer : function(value, metaData, rec, rowIndex,
								colIndex, store, view) {
							return value == '0'
									? "<span style='color:red'>停用</span>"
									: '在用'
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.marketing.appearance.queryBoxByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'boxDrawingCode'
						}, {
							name : 'materCode'
						}, {
							name : 'materName'
						}, {
							name : 'specName'
						}, {
							name : 'url'
						}, {
							name : 'state'
						}, {
							name : 'id'
						}]
			})
		})
	}

	this.initInputWindow = function() {

		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增',
			height : 480,
			width : 600,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.marketing.appearance.saveBox.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/boxDrawingCode',
							allowBlank : false,
							fieldLabel : '包装箱图纸编号',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/materCode',
							allowBlank : false,
							fieldLabel : '物料号',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/materName',
							allowBlank : false,
							fieldLabel : '物料名称',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/specName',
							allowBlank : false,
							fieldLabel : '规格型号',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							ref : '../../url2',
							fieldLabel : '带受控章图例',
							allowBlank : false,
							colspan : 2,
							// anchor : '95%',
							editable : false,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onUploadWindowShow(1);
							}
						}, {
							xtype : 'hidden',
							ref : '../../url',
							name : 'entity/url'
						}, {
							xtype : 'hidden',
							value : '1',
							name : 'entity/state'
						}]
			}]
		});
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
				loadUrl : 'com.keensen.ump.produce.marketing.appearance.expandBox.biz.ext',
				saveUrl : 'com.keensen.ump.produce.marketing.appearance.saveBox.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/boxDrawingCode',
							dataIndex : 'boxDrawingCode',
							allowBlank : false,
							fieldLabel : '包装箱图纸编号',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/materCode',
							dataIndex : 'materCode',
							allowBlank : false,
							fieldLabel : '物料号',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/materName',
							dataIndex : 'materName',
							allowBlank : false,
							fieldLabel : '物料名称',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/specName',
							dataIndex : 'specName',
							allowBlank : false,
							fieldLabel : '规格型号',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

	// 上传面板
	this.buildUploadWin = function() {

		var _this = this;
		this.uploadWin = new Ext.Window({
			title : '上传文件',
			collapsible : false,
			modal : true,
			closeAction : 'hide',
			buttonAlign : 'center',
			layout : 'fit',
			width : 480,
			height : 120,
			myflag : 0,
			items : [{
				xtype : 'columnform',
				itemId : 'uploadForm',
				saveUrl : 'com.keensen.ump.produce.marketing.uploadBoxAndBag.flow',
				columns : 1,
				fileUpload : true,
				fields : [{
							name : 'uploadFile',
							fieldLabel : '选择文件',
							allowBlank : false,
							id : marktemplateupload,
							inputType : 'file',
							listeners : {
								'render' : function(e) {
									const fileId = e.autoEl.id
									var f = document.getElementById(fileId);
									f.addEventListener('change',
											function(event) {
												// const file =
												// event.target.files[0];
												// alert(file)
												_this.pretreatment(event,
														fileId);

											});

								}
							}
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
							this.uploadWin.hide();
						}
					}]
		});
	}
}