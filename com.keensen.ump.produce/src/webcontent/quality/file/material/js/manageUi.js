com.keensen.ump.produce.quality.file.MaterialMgr = function() {
	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		this.buildPhotoUploadWin();
		this.initEditWindow();

		this.buildPictureUploadWin();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'qualityfilematerialmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.stateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['停用', '停用'], ['在用', '在用']]
				});

		this.fileTypeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['BQ', '标签'], ['MT', '唛头'], ['BZD', '包装袋'],
							['BZX', '包装箱'], ['ZXG', '中心管'], ['MYJDG', '膜元件端盖'],
							['MYJBZDG', '膜元件包装端盖'], ['MFQ', '密封圈'],
							['JD', '胶带']]
				});

	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					titleCollapse : false,
					fields : [{
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '图纸类型',
								ref : '../fileType',
								hiddenName : 'condition/fileType',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.fileTypeStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.fileType.reset()
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/fileName',
								fieldLabel : '图纸名称%-%'
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '使用状态',
								ref : '../state',
								hiddenName : 'condition/state',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.stateStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.state.reset()
									}
								}
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "上传日期",
								format : "Y-m-d"
							}]
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【产品水测标准列表】',
			id : mylistid,
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '上传',
						scope : this,
						hidden : uid != 'KS00561' && uid != 'KS00610'
								&& uid != 'dafu',
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						hidden : uid != 'KS00561' && uid != 'KS00610'
								&& uid != 'dafu',
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '上传截图',
						scope : this,
						hidden : uid != 'KS00561' && uid != 'KS00610'
								&& uid != 'dafu',
						iconCls : 'icon-application_edit',
						handler : this.onEdit2
					}, '-', {
						text : '删除',
						scope : this,
						hidden : uid != 'KS00610' && uid != 'dafu',
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.file.deleteFileMaterial.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'fileTypeName',
						header : '图纸类型'
					}, {
						dataIndex : 'controlCode',
						header : '受控编号'
					}, {
						dataIndex : 'state',
						header : '使用状态'
					}, {
						dataIndex : 'url',
						width : 200,
						header : '受控文件',
						renderer : function(value, metaData, rec, rowIndex,
								colIndex, store, view) {
							if (!!value) {
								var v = value;
								var fileName = rec.get('fileName');
								var str = '<a href="javascript:void(0)" onclick="down('
										+ "'"
										+ v
										+ "','"
										+ fileName
										+ "'"
										+ ')">' + fileName + '</a>';
								return str;

							}
						}
					}, {
						dataIndex : 'url2',
						header : '截图',
						renderer : function(value, metaData, rec, rowIndex,
								colIndex, store, view) {
							if (!!value) {

								var labelUrl = markRootUrl
										+ '/myupload/qualityfile/' + value
								return labelUrl = '<img title="单击查看完整图片" src="'
										+ labelUrl
										+ '?ver='
										+ rec.get('id')
										+ '" onclick= "javascript:window.open('
										+ "'"
										+ labelUrl
										+ "'"
										+ ');" style="cursor: pointer;width:auto; height:auto; max-width:98%; max-height:100px;" />';

							}
						}
					}, {
						dataIndex : 'createTime',
						header : '上传时间'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.file.queryFileMaterialByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
						}, {
							name : 'createTime'
						}, {
							name : 'createUserId'
						}, {
							name : 'createName'
						}, {
							name : 'updateTime'
						}, {
							name : 'updateUserId'
						}, {
							name : 'updateName'
						}, {
							name : 'reserve1'
						}, {
							name : 'reserve2'
						}, {
							name : 'reserve3'
						}, {
							name : 'reserve4'
						}, {
							name : 'reserve5'
						}, {
							name : 'orgId'
						}, {
							name : 'status'
						}, {
							name : 'controlCode'
						}, {
							name : 'state'
						}, {
							name : 'fileName'
						}, {
							name : 'url'
						}, {
							name : 'fileType'
						}, {
							name : 'fileTypeName'
						}, {
							name : 'url2'
						}]
			})
		})
	}

	// 上传图片面板
	this.buildPhotoUploadWin = function() {

		this.photoUploadWin = new Ext.Window({
					title : '上传CDR文件',
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
								saveUrl : '111.flow',
								columns : 1,
								fileUpload : true,
								fields : [{
											name : 'uploadFile',
											fieldLabel : 'CDR文件',
											allowBlank : false,
											inputType : 'file'
										}]
							}],
					buttons : [{
								text : '上传',
								handler : this.doUploadPhoto,
								scope : this
							}, {
								text : '关闭',
								scope : this,
								handler : function() {
									this.photoUploadWin.hide();
								}
							}]
				});

	}

	this.initEditWindow = function() {
		var _this = this;
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
				successFn : function(i, r) {
					Ext.getCmp(mylistid).store.load();
					_this.editWindow.hide();
				},
				columns : 1,
				loadUrl : 'com.keensen.ump.produce.quality.file.expandFileMaterial.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.file.saveFileMaterial.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/controlCode',
							dataIndex : 'controlCode',
							fieldLabel : '受控编号',
							allowBlank : false,
							anchor : '75%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							allowBlank : false,
							dataIndex : 'fileName',
							name : 'entity/fileName',
							fieldLabel : '图纸名称',
							anchor : '75%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'combobox',
							mode : 'local',
							fieldLabel : '使用状态',
							ref : '../../state',
							hiddenName : 'entity/state',
							dataIndex : 'state',
							anchor : '75%',
							colspan : 1,
							emptyText : '--请选择--',
							editable : false,
							store : this.stateStore,
							displayField : "name",
							valueField : "code",
							listeners : {
								"expand" : function(A) {
									_this.editWindow.state.reset()
								}
							}
						}, {
							xtype : 'hidden',
							dataIndex : 'id',
							name : 'entity/id'
						}]
			}]
		});
	}

	// 上传截图面板
	this.buildPictureUploadWin = function() {
		this.pictureUploadWin = new Ext.Window({
					title : '上传截图',
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
								saveUrl : '111.flow',
								columns : 1,
								fileUpload : true,
								fields : [{
											name : 'uploadFile',
											fieldLabel : '截图',
											allowBlank : false,
											inputType : 'file'
										}, {
											xtype : 'hidden',
											name : 'relationId',
											ref : '../../relationId'
										}]
							}],
					buttons : [{
								text : '上传',
								handler : this.doUploadPicture,
								scope : this
							}, {
								text : '关闭',
								scope : this,
								handler : function() {
									this.pictureUploadWin.hide();
								}
							}]
				});
	}
}