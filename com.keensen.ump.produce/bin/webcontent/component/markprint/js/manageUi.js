com.keensen.ump.produce.component.markprinttemplateMgr = function() {
	this.initPanel = function() {

		this.rec4ChooseLabel = {};

		this.initCodeStore();
		this.initQueryPanel();
		this.initListPanel();

		this.buildUploadWin();
		this.initInputWindow();
		this.initEditWindow();

		this.initChooseLableWindow();
		this.buildUploadWin4ChooseLable();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "componentmarkprinttemplatemgr",
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initCodeStore = function() {
		this.codeStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.makprint.queryTemplateCode.biz.ext',
			root : 'data',
			autoLoad : true,
			totalProperty : '',
			baseParams : {},
			fields : [{
						name : 'code'
					}, {
						name : 'text'
					}]
		})

		this.ynStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['Y', '是'], ['N', '否']]
				});
	}

	this.initQueryPanel = function() {

		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 110,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/templateName',
								anchor : '100%',
								fieldLabel : '唛头图纸编号'
							}, {

								xtype : 'combo',
								fieldLabel : '模板编号',
								displayField : 'text',
								valueField : 'code',
								triggerAction : "all",
								mode : "local",
								hiddenName : 'condition/code',
								emptyText : '--请选择--',
								anchor : '100%',
								colspan : 1,
								store : this.codeStore,
								listeners : {
									// scope : this,
									'expand' : function(A) {
										this.reset();
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/specName',
								anchor : '100%',
								fieldLabel : '贴牌型号'
							}, {
								xtype : 'textfield',
								name : 'condition/remark',
								anchor : '100%',
								fieldLabel : '备注说明'
							}, {
								xtype : 'displayfield',
								height : 5,
								colspan : 4
							}, {
								xtype : 'textfield',
								name : 'condition/batchNo',
								anchor : '100%',
								fieldLabel : '卷膜/元件批次'
							}]
				});
		/*
		 * this.queryPanel.addButton({ text : "导出", scope : this, iconCls :
		 * 'icon-application_excel', handler : this.exportExcel });
		 */
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
			id : listid,
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
						hidden : (uid != 'KS00307') && (uid != 'XXB'),
						// disabled : (uid != 'KS00610') && (uid != 'KS01313')
						// && (uid != 'KS00524'),
						handler : this.onDelete
					}, '-', {
						text : '打印效果预览',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						// disabled : (uid != 'KS00610') && (uid != 'KS01313')
						// && (uid != 'KS00524'),
						handler : this.onPreView
					}, '-', {
						text : '打印测试',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						// disabled : (uid != 'KS00610') && (uid != 'KS01313')
						// && (uid != 'KS00524'),
						handler : this.onView
					}, '->', {
						text : '测试照片上传',
						scope : this,
						iconCls : 'icon-application_edit',
						// disabled : (uid != 'KS00610') && (uid != 'KS01313')
						// && (uid != 'KS00524'),
						handler : this.onUploadTestPicture
					}, '-', {
						text : '标签图纸编号管理',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onChoose4Label
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.makprint.delete.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel, {
						dataIndex : 'templateName',
						header : '唛头图纸编号'
					}, {
						dataIndex : 'url',
						header : '标签背景图',
						renderer : function(value, metaData, rec, rowIndex,
								colIndex, store, view) {
							// if (value) {

							return '<img src="'
									+ markRootUrl
									+ value
									+ '?ver='
									+ rec.data.id
									+ '" style="width:auto; height:auto; max-width:98%; max-height:140px;" />';

							// }
						}
					}, {
						dataIndex : 'url2',
						header : '唛头示例图纸',
						renderer : function(value, metaData, rec, rowIndex,
								colIndex, store, view) {
							// if (value) {

							return '<img src="'
									+ markRootUrl
									+ value
									+ '?ver='
									+ rec.data.id
									+ '" style="width:auto; height:auto; max-width:98%; max-height:140px;" />';

							// }
						}
					}, {
						dataIndex : 'code',
						header : '模板编号',
						renderer : function(v, m, r, i) {
							var codeRemark = r.data.codeRemark
							return '模板' + v + '-' + codeRemark;
						}
					}, {
						dataIndex : 'specName',
						header : '贴牌型号'
					}, {
						dataIndex : 'reserve5',
						header : '测试照片',
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
						dataIndex : 'remark',
						header : '备注说明'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.makprint.queryMarkPrintByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'id'
						}, {
							name : 'templateName'
						}, {
							name : 'url'
						}, {
							name : 'remark'
						}, {
							name : 'url2'
						}, {
							name : 'code'
						}, {
							name : 'codeRemark'
						}, {
							name : 'specName'
						}, {
							name : 'reserve5'
						}]
			})
		})
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
				saveUrl : 'com.keensen.ump.produce.component.uploadMarkTemplate.flow',
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

	this.initInputWindow = function() {
		var _this = this;

		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			height : 280,
			region : 'center',
			// baseCls : "x-panel",
			pgrid : this.listPanel,
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 2,
			saveUrl : 'com.keensen.ump.produce.component.makprint.saveMarkPrint2.biz.ext',
			fields : [{
						xtype : 'textfield',
						name : 'entity/templateName',
						allowBlank : false,
						fieldLabel : '唛头图纸编号',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'trigger',
						name : 'url',
						fieldLabel : '标签背景图',
						allowBlank : false,
						colspan : 2,
						anchor : '95%',
						editable : false,
						hideTrigger : false,
						scope : this,
						onTriggerClick : function() {
							_this.onUploadWindowShow(1);
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'trigger',
						name : 'url2',
						fieldLabel : '唛头图纸',
						allowBlank : false,
						colspan : 2,
						anchor : '95%',
						editable : false,
						hideTrigger : false,
						scope : this,
						onTriggerClick : function() {
							_this.onUploadWindowShow(2);
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {

						xtype : 'combo',
						fieldLabel : '模板编号',
						allowBlank : false,
						displayField : 'text',
						valueField : 'code',
						triggerAction : "all",
						mode : "local",
						ref : '../code',
						hiddenName : 'entity/code',
						emptyText : '--请选择--',
						anchor : '95%',
						colspan : 2,
						store : this.codeStore,
						listeners : {
							// scope : this,
							'expand' : function(A) {
								this.reset();
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'textarea',
						name : 'entity/remark',
						dataIndex : 'remark',
						allowBlank : true,
						fieldLabel : '备注说明',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:16px;">台账</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 2
					}/*
						 * { xtype : 'textfield', name : 'entity/drawingName',
						 * allowBlank : false, fieldLabel : '图纸名称', anchor :
						 * '95%', colspan : 1 }
						 */, {
						xtype : 'textfield',
						name : 'entity/materCode',
						fieldLabel : '物料号（外购必填）',
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'textfield',
						name : 'entity/logo',
						allowBlank : false,
						fieldLabel : '唛头LOGO',
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'entity/specName',
						allowBlank : false,
						fieldLabel : '贴牌型号',
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'textfield',
						name : 'entity/labelSize',
						fieldLabel : '图纸尺寸',
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'hidden',
						dataIndex : 'url',
						name : 'entity/url'
					}, {
						xtype : 'hidden',
						dataIndex : 'url2',
						name : 'entity/url2'
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.inputPanel.form.reset();
							this.inputWindow.hide();
						}
					}]

		})

		this.inputWindow = this.inputWindow || new Ext.Window({
					title : '新增模板',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.inputPanel]

				});

	}

	this.initEditWindow = function() {
		var _this = this;

		this.editPanel = this.editPanel || new Ext.fn.EditPanel({
			height : 650,
			region : 'center',
			// baseCls : "x-panel",
			pgrid : this.listPanel,
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 4,
			saveUrl : 'com.keensen.ump.produce.component.makprint.saveMarkPrint2.biz.ext',
			loadUrl : 'com.keensen.ump.produce.component.makprint.expandTemplate.biz.ext',
			fields : [{
						xtype : 'textfield',
						name : 'entity/templateName',
						dataIndex : 'templateName',
						allowBlank : false,
						readOnly : true,
						fieldLabel : '唛头图纸编号',
						anchor : '95%',
						colspan : 4
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'trigger',
						name : 'localurl',
						fieldLabel : '新标签背景图',
						allowBlank : true,
						colspan : 4,
						anchor : '95%',
						editable : false,
						hideTrigger : false,
						scope : this,
						onTriggerClick : function() {
							_this.onUploadWindowShow(3);
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'trigger',
						name : 'localurl2',
						fieldLabel : '新唛头图纸',
						allowBlank : true,
						colspan : 4,
						anchor : '95%',
						editable : false,
						hideTrigger : false,
						scope : this,
						onTriggerClick : function() {
							_this.onUploadWindowShow(4);
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {

						xtype : 'combo',
						fieldLabel : '模板编号',
						triggerAction : "all",
						mode : "local",
						dataIndex : 'code',
						allowBlank : false,
						displayField : 'text',
						valueField : 'code',
						ref : '../code',
						hiddenName : 'entity/code',
						emptyText : '--请选择--',
						anchor : '95%',
						colspan : 4,
						store : this.codeStore,
						listeners : {
							// scope : this,
							'expand' : function(A) {
								this.reset();
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						name : 'entity/remark',
						dataIndex : 'remark',
						allowBlank : true,
						fieldLabel : '备注说明',
						anchor : '95%',
						colspan : 4
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:16px;">台账</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 4
					}/*
						 * ,{ xtype : 'textfield', name : 'entity/drawingName',
						 * dataIndex : 'drawingName', allowBlank : false,
						 * fieldLabel : '图纸名称', anchor : '95%', colspan : 1 }
						 */, {
						xtype : 'textfield',
						name : 'entity/materCode',
						dataIndex : 'materCode',
						fieldLabel : '物料号（外购必填）',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'entity/logo',
						dataIndex : 'logo',
						allowBlank : false,
						fieldLabel : '唛头LOGO',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						xtype : 'textfield',
						name : 'entity/specName',
						dataIndex : 'specName',
						allowBlank : false,
						fieldLabel : '贴牌型号',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'textfield',
						dataIndex : 'labelSize',
						name : 'entity/labelSize',
						fieldLabel : '标签尺寸',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:16px;">模板参数</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 4
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '是否打印<br>元件批次',
						dataIndex : 'ifPrintBatchNo',
						ref : '../ifPrintBatchNo',
						hiddenName : 'entity/ifPrintBatchNo',
						anchor : '100%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.ynStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.editPanel.ifPrintBatchNo.reset()
							}
						}
					}, {
						xtype : 'numberfield',
						dataIndex : 'yBatchNo',
						name : 'entity/yBatchNo',
						fieldLabel : '元件批次<br>纵坐标',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'numberfield',
						dataIndex : 'xBatchNo',
						name : 'entity/xBatchNo',
						fieldLabel : '元件批次<br>横坐标',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'numberfield',
						dataIndex : 'reserve1',
						name : 'entity/reserve1',
						fieldLabel : '元件批次<br>条码字体大小',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 4
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '是否打印<br>元件型号',
						dataIndex : 'ifPrintSpecName',
						ref : '../ifPrintSpecName',
						hiddenName : 'entity/ifPrintSpecName',
						anchor : '100%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.ynStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.editPanel.ifPrintSpecName.reset()
							}
						}
					}, {
						xtype : 'numberfield',
						dataIndex : 'yBatchSpecName',
						name : 'entity/yBatchSpecName',
						fieldLabel : '元件型号<br>纵坐标',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'numberfield',
						dataIndex : 'xBatchSpecName',
						name : 'entity/xBatchSpecName',
						fieldLabel : '元件型号<br>横坐标',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '是否打印<br>干湿膜',
						dataIndex : 'ifPrintDryWet',
						ref : '../ifPrintDryWet',
						hiddenName : 'entity/ifPrintDryWet',
						anchor : '100%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.ynStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.editPanel.ifPrintDryWet.reset()
							}
						}
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 4
					}, {
						xtype : 'numberfield',
						dataIndex : 'yDryImg',
						name : 'entity/yDryImg',
						fieldLabel : '干膜图片<br>纵坐标',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'numberfield',
						dataIndex : 'xDryImg',
						name : 'entity/xDryImg',
						fieldLabel : '干膜图片<br>横坐标',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'numberfield',
						dataIndex : 'yDrySpan',
						name : 'entity/yDrySpan',
						fieldLabel : '干膜文字<br>纵坐标',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'numberfield',
						dataIndex : 'xDrySpan',
						name : 'entity/xDrySpan',
						fieldLabel : '干膜文字<br>横坐标',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 4
					}, {
						xtype : 'numberfield',
						dataIndex : 'yWetImg',
						name : 'entity/yWetImg',
						fieldLabel : '湿膜图片<br>纵坐标',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'numberfield',
						dataIndex : 'xWetImg',
						name : 'entity/xWetImg',
						fieldLabel : '湿膜图片<br>横坐标',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'numberfield',
						dataIndex : 'yWetSpan',
						name : 'entity/yWetSpan',
						fieldLabel : '湿膜文字<br>纵坐标',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'numberfield',
						dataIndex : 'xWetSpan',
						name : 'entity/xWetSpan',
						fieldLabel : '湿膜文字<br>横坐标',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 4
					}, {
						xtype : 'numberfield',
						dataIndex : 'yStarImg',
						name : 'entity/yStarImg',
						fieldLabel : '星标图片<br>纵坐标',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'numberfield',
						dataIndex : 'xStarImg',
						name : 'entity/xStarImg',
						fieldLabel : '星标图片<br>横坐标',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 4
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '是否打印<br>日期码',
						dataIndex : 'ifPrintDayCode',
						ref : '../ifPrintDayCode',
						hiddenName : 'entity/ifPrintDayCode',
						anchor : '100%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.ynStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.editPanel.ifPrintDayCode.reset()
							}
						}
					}, {
						xtype : 'numberfield',
						dataIndex : 'yDayCodeSpan',
						name : 'entity/yDayCodeSpan',
						fieldLabel : '日期码<br>纵坐标',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'numberfield',
						dataIndex : 'xDayCodeSpan',
						name : 'entity/xDayCodeSpan',
						fieldLabel : '日期码<br>横坐标',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'hidden',
						dataIndex : 'baseId',
						name : 'entity/baseId'
					}, {
						xtype : 'hidden',
						dataIndex : 'url',
						name : 'entity/url'
					}, {
						xtype : 'hidden',
						dataIndex : 'url2',
						name : 'entity/url2'
					}, {
						xtype : 'hidden',
						dataIndex : 'id',
						name : 'entity/id'
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave2
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.editPanel.form.reset();
							this.editWindow.hide();
						}
					}]

		})

		this.editWindow = this.editWindow || new Ext.Window({
					title : '修改模板',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 650,
					layout : 'border',
					items : [this.editPanel]

				});

	}

	this.initChooseLableWindow = function() {
		var _this = this;

		var selModel4ChooseLable = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4ChooseLable = this.listPanel4ChooseLable
				|| new Ext.fn.EditListPanel({
					region : 'center',
					viewConfig : {
						forceFit : true
					},
					hsPage : true,
					selModel : selModel4ChooseLable,
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
							}],
					delUrl : 'com.keensen.ump.base.paramaterspec.deleteLabelDrawing.biz.ext',
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), selModel4ChooseLable, {
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
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec4ChooseLabel.data['id'];
													_this.saveLabel(id,
															'drawingName',
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
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec4ChooseLabel.data['id'];
													_this.saveLabel(id,
															'drawingCode',
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
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec4ChooseLabel.data['id'];
													_this.saveLabel(id,
															'materCode',
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
												'change' : function(o,
														newValue, oldValue) {
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
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec4ChooseLabel.data['id'];
													_this.saveLabel(id,
															'specName',
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
												'change' : function(o,
														newValue, oldValue) {
													if (newValue == oldValue)
														return false;
													var id = _this.rec4ChooseLabel.data['id'];
													_this.saveLabel(id,
															'labelSize',
															newValue, oldValue);
												}
											}
										}))
							}, {
								dataIndex : 'url',
								header : '图例',
								renderer : function(value, metaData, rec,
										rowIndex, colIndex, store, view) {
									if (!Ext.isEmpty(value)) {

										return '<img src="'
												+ markRootUrl
												+ value
												+ '?ver='
												+ rec.data.id
												+ '" style="width:auto; height:auto; max-width:98%; max-height:140px;" />';

									}
								}
							}],
					store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.paramaterspec.queryLabelDrawingByPage.biz.ext',
						root : 'data',
						autoLoad : false,
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
								}]
					})
				})

		this.labelDrawingLogoStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.paramaterspec.queryLabelDrawingLogo.biz.ext',
			root : 'data',
			autoLoad : false,
			baseParams : {},
			fields : [{
						name : 'logo'
					}]
		})

		this.labelDrawingSpecNameStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.paramaterspec.queryLabelDrawingSpecName.biz.ext',
			root : 'data',
			autoLoad : false,
			baseParams : {},
			fields : [{
						name : 'specName'
					}]
		})

		this.queryPanel4ChooseLable = this.queryPanel4ChooseLable
				|| new Ext.fn.QueryPanel({
							height : 80,
							columns : 3,
							border : true,
							region : 'north',
							// collapsible : true,
							titleCollapse : false,
							fields : [/*
										 * { xtype : 'combobox', forceSelection :
										 * true, mode : 'local', fieldLabel :
										 * '标签LOGO', // ref : '../../logoLabel',
										 * hiddenName : 'condition/logo', anchor :
										 * '100%', colspan : 1, emptyText : '',
										 * editable : false, store :
										 * this.labelDrawingLogoStore,
										 * displayField : "logo", valueField :
										 * "logo" },
										 */{
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
										store : this.labelDrawingSpecNameStore,
										displayField : "specName",
										valueField : "specName"
									}/*
										 * , { xtype : 'displayfield', height :
										 * '5', colspan : 2 }, { xtype :
										 * 'textfield', mode : 'local',
										 * fieldLabel : '%-标签LOGO-%', // ref :
										 * '../../logoLabel', name :
										 * 'condition/logo2', anchor : '100%',
										 * colspan : 1 }
										 */, {
										xtype : 'textfield',
										mode : 'local',
										fieldLabel : '%-贴牌型号-%',
										ref : '../specNameLabel',
										name : 'condition/specName2',
										anchor : '100%',
										colspan : 1
									}/*
										 * , { xtype : 'displayfield', height :
										 * '5', colspan : 2 }, { xtype :
										 * 'textfield', mode : 'local',
										 * fieldLabel : '%-图纸名称-%', // ref :
										 * '../../logoLabel', name :
										 * 'condition/drawingName', anchor :
										 * '100%', colspan : 1 }
										 */, {
										xtype : 'textfield',
										mode : 'local',
										fieldLabel : '%-图纸编号-%',
										// ref : '../../logoLabel',
										name : 'condition/drawingCode',
										anchor : '100%',
										colspan : 1
									}]
						})

		this.queryPanel4ChooseLable.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseLableWindow.hide();
					}

				});

		this.chooseLableWindow = this.chooseLableWindow || new Ext.Window({
					title : '标签图纸编号查询',
					// 自定义属性
					opt : '',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 900,
					height : 600,
					layout : 'border',
					items : [this.queryPanel4ChooseLable,
							this.listPanel4ChooseLable]

				})

		this.inputWindow4ChooseLable = this.inputWindow4ChooseLable
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
						saveUrl : 'com.keensen.ump.base.paramaterspec.saveLabelDrawing.biz.ext',
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