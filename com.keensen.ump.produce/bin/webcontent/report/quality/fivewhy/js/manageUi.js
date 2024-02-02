com.keensen.ump.produce.report.quality.FivewhyMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.buildUploadWin();
		this.initEditWindow();
		this.initFollowWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'fivewhymgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【5why分析报告查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/code',
								fieldLabel : '管理编号'
							}, {
								xtype : 'textfield',
								name : 'condition/dept',
								fieldLabel : '主导部门'
							}, {
								xtype : 'textfield',
								name : 'condition/prodSpecName',
								fieldLabel : '产品型号'
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
			title : '【5why分析报告列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						disabled: applyflag!='true',
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						disabled: applyflag!='true',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						disabled: applyflag!='true',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}, '-', {
						text : '跟进',
						scope : this,
						disabled: followflag!='true',
						iconCls : 'icon-application_edit',
						handler : this.onFollow
					}, '-', {
						text : '查看报告',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onReport
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.report.quality.delete5whyHead.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'code',
						header : '管理编号'
					}, {
						dataIndex : 'dept',
						header : '主导部门'
					}, {
						dataIndex : 'happenPlace',
						xtype : 'dictcolumn',
						dictData : KS_HAPPEN_PLACE,
						header : '发生地点'
					}, {
						dataIndex : 'prodSpecName',
						header : '产品型号'
					}, {
						dataIndex : 'happenDt',
						header : '发生日期'
					}, {
						dataIndex : 'productClassify',
						xtype : 'dictcolumn',
						dictData : KS_PRODUCT_CLASSIFY,
						header : '现品区分'
					}, {
						dataIndex : 'poorClassify',
						xtype : 'dictcolumn',
						dictData : KS_POOR_CLASSIFY,
						header : '不良分类'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.report.quality.query5whyByPage.biz.ext',
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
							name : 'code'
						}, {
							name : 'dept'
						}, {
							name : 'happenPlace'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'happenDt'
						}, {
							name : 'productClassify'
						}, {
							name : 'poorClassify'
						}, {
							name : 'poorClassifyOther'
						}, {
							name : 'poorDescribe'
						}, {
							name : 'poorUrl'
						}, {
							name : 'productInfo'
						}, {
							name : 'followUserId'
						}, {
							name : 'followName'
						}, {
							name : 'followDt'
						}]
			})
		})
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改5why分析报告',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'editpanel',
				id : 'fivewhyEdit',
				pgrid : this.listPanel,
				columns : 4,
				loadUrl : 'com.keensen.ump.produce.report.quality.expand5whyHead.biz.ext',
				saveUrl : 'com.keensen.ump.produce.report.quality.modify5whyHead.biz.ext',
				fields : [{
							xtype : 'textfield',
							dataIndex : 'code',
							readOnly : true,
							fieldLabel : '管理编号',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/dept',
							dataIndex : 'dept',
							allowBlank : false,
							fieldLabel : '主导部门',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>不良信息</span>",
							colspan : 4
						}, {
							xtype : 'dictcheckboxgroup',
							name : 'happenPlace',
							dataIndex : 'happenPlace',
							dictData : KS_HAPPEN_PLACE,
							allowBlank : false,
							fieldLabel : '发生地点',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/prodSpecName',
							dataIndex : 'prodSpecName',
							allowBlank : false,
							fieldLabel : '产品型号',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'datefield',
							format : "Y-m-d",
							name : 'entity/happenDt',
							dataIndex : 'happenDt',
							allowBlank : false,
							fieldLabel : '发生日期',
							colspan : 2
						}, {
							xtype : 'dictcheckboxgroup',
							name : 'productClassify',
							dataIndex : 'productClassify',
							dictData : KS_PRODUCT_CLASSIFY,
							allowBlank : false,
							fieldLabel : '现品区分',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'dictcheckboxgroup',
							name : 'poorClassify',
							dataIndex : 'poorClassify',
							dictData : KS_POOR_CLASSIFY,
							allowBlank : false,
							fieldLabel : '不良分类',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/poorClassifyOther',
							dataIndex : 'poorClassifyOther',
							allowBlank : true,
							fieldLabel : '不良分类其它',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'textarea',
							name : 'entity/poorDescribe',
							dataIndex : 'poorDescribe',
							allowBlank : false,
							fieldLabel : '不良现象',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'trigger',
							name : 'entity/reserve5',
							dataIndex : 'reserve5',
							fieldLabel : '不良现象图片',
							colspan : 4,
							editable : false,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onUploadWindowShow(_this);
							}
						}, {
						xtype : 'displayfield',
						html : '<a href="javascript:deletePicture();" >'
								+ '删除不良图片' + "</a>",
						colspan : 4
					}, {
							xtype : 'hidden',
							dataIndex : 'id',
							name : 'entity/id'
						}, {
							xtype : 'hidden',
							dataIndex : 'happenPlace',
							name : 'entity/happenPlace'
						}, {
							xtype : 'hidden',
							dataIndex : 'productClassify',
							name : 'entity/productClassify'
						}, {
							xtype : 'hidden',
							dataIndex : 'poorClassify',
							name : 'entity/poorClassify'
						}, {
							xtype : 'hidden',
							dataIndex : 'poorUrl',
							name : 'entity/poorUrl'
						}]
			}]
		});
	}

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增5why分析报告',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				id : 'fivewhyInput',
				pgrid : this.listPanel,
				columns : 4,
				saveUrl : 'com.keensen.ump.produce.report.quality.insert5whyHead.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/dept',
							allowBlank : false,
							fieldLabel : '主导部门',
							colspan : 2
						}, {
							xtype : 'displayfield',
							fieldLabel : "<span style='color:red;'>不良信息</span>",
							colspan : 4
						}, {
							xtype : 'dictcheckboxgroup',
							name : 'happenPlace',
							dictData : KS_HAPPEN_PLACE,
							allowBlank : false,
							fieldLabel : '发生地点',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/prodSpecName',
							allowBlank : false,
							fieldLabel : '产品型号',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'datefield',
							format : "Y-m-d",
							name : 'entity/happenDt',
							allowBlank : false,
							fieldLabel : '发生日期',
							colspan : 2
						}, {
							xtype : 'dictcheckboxgroup',
							name : 'productClassify',
							dictData : KS_PRODUCT_CLASSIFY,
							allowBlank : false,
							fieldLabel : '现品区分',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'dictcheckboxgroup',
							name : 'poorClassify',
							dictData : KS_POOR_CLASSIFY,
							allowBlank : false,
							fieldLabel : '不良分类',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/poorClassifyOther',
							allowBlank : true,
							fieldLabel : '不良分类其它',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'textarea',
							name : 'entity/poorDescribe',
							allowBlank : false,
							fieldLabel : '不良现象',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'trigger',
							name : 'entity/reserve5',
							fieldLabel : '不良现象图片',
							colspan : 4,
							editable : false,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.onUploadWindowShow(_this);
							}
						}, {
						xtype : 'displayfield',
						html : '<a href="javascript:deletePicture2();" >'
								+ '删除不良图片' + "</a>",
						colspan : 4
					}, {
							xtype : 'hidden',
							name : 'entity/id'
						}, {
							xtype : 'hidden',
							name : 'entity/happenPlace'
						}, {
							xtype : 'hidden',
							name : 'entity/productClassify'
						}, {
							xtype : 'hidden',
							name : 'entity/poorClassify'
						}, {
							xtype : 'hidden',
							name : 'entity/poorUrl'
						}]
			}]
		});
	}

	// 上传面板
	this.buildUploadWin = function() {
		this.uploadWin = new Ext.Window({
			title : '上传文件',
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
				saveUrl : 'com.keensen.ump.produce.report.quality.upload5why.biz.ext',
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
							this.uploadWin.hide();
						}
					}]
		});
	}

	this.initFollowWindow = function() {
		this.viewPanel = this.viewPanel || new Ext.fn.ViewPanel({
			height : 250,
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 4,
			loadUrl : 'com.keensen.ump.produce.report.quality.expand5whyHead.biz.ext',
			fields : [{
						xtype : 'textfield',
						dataIndex : 'code',
						readOnly : true,
						fieldLabel : '管理编号',
						colspan : 2
					}, {
						xtype : 'textfield',
						dataIndex : 'dept',
						readOnly : true,
						fieldLabel : '主导部门',
						colspan : 2
					}, {
						xtype : 'displayfield',
						fieldLabel : "<span style='color:red;'>不良信息</span>",
						colspan : 4
					}, {
						xtype : 'dictcheckboxgroup',
						dataIndex : 'happenPlace',
						dictData : KS_HAPPEN_PLACE,
						readOnly : true,
						fieldLabel : '发生地点',
						colspan : 2
					}, {
						xtype : 'textfield',
						dataIndex : 'prodSpecName',
						readOnly : true,
						fieldLabel : '产品型号',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 4
					}, {
						xtype : 'datefield',
						format : "Y-m-d",
						dataIndex : 'happenDt',
						readOnly : true,
						fieldLabel : '发生日期',
						colspan : 2
					}, {
						xtype : 'dictcheckboxgroup',
						dataIndex : 'productClassify',
						dictData : KS_PRODUCT_CLASSIFY,
						readOnly : true,
						fieldLabel : '现品区分',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 4
					}, {
						xtype : 'dictcheckboxgroup',
						dataIndex : 'poorClassify',
						dictData : KS_POOR_CLASSIFY,
						readOnly : true,
						fieldLabel : '不良分类',
						colspan : 2
					}, {
						xtype : 'textfield',
						dataIndex : 'poorClassifyOther',
						readOnly : true,
						fieldLabel : '不良分类其它',
						colspan : 2
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 4
					}, {
						xtype : 'textarea',
						dataIndex : 'poorDescribe',
						readOnly : true,
						fieldLabel : '不良现象',
						colspan : 4
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 4
					}, {
						xtype : 'displayfield',
						id : 'fivewhyPicture',
						html : '<a href="javascript:showPicture();" >'
								+ '查看不良图片' + "</a>",
						colspan : 4
					}, {
						xtype : 'hidden',
						dataIndex : 'poorUrl',
						id : 'fivewhyPoorUrl'
					}, {
						xtype : 'hidden',
						dataIndex : 'id',
						name : 'relationId'
					}]
		})

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.measureListPanel = this.measureListPanel || new Ext.fn.ListPanel({
			title : '【围堵措施】',
			height : 200,
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddMeasure
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelMeasure
					}],
			selModel : selModel2,
			delUrl : 'com.keensen.ump.produce.report.quality.delete5whyMeasure.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'classify',
						header : '类型'
					}, {
						dataIndex : 'num',
						header : '数量'
					}, {
						dataIndex : 'deal',
						header : '处理措施'
					}, {
						dataIndex : 'responsible',
						header : '责任人'
					}, {
						dataIndex : 'finishDt',
						header : '完成日期'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.report.quality.query5whyMeasure.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
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
							name : 'classify'
						}, {
							name : 'num'
						}, {
							name : 'deal'
						}, {
							name : 'responsible'
						}, {
							name : 'finishDt'
						}, {
							name : 'relationId'
						}]
			})
		})

		this.measureWindow = this.measureWindow || new Ext.fn.FormWindow({
			title : '新增围堵措施',
			height : 300,
			width : 480,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.measureListPanel,
				columns : 4,
				saveUrl : 'com.keensen.ump.produce.report.quality.save5whyMeasure.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/classify',
							dataIndex : 'classify',
							allowBlank : false,
							fieldLabel : '类型',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/num',
							dataIndex : 'num',
							allowBlank : false,
							fieldLabel : '数量',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'textarea',
							name : 'entity/deal',
							dataIndex : 'deal',
							allowBlank : false,
							fieldLabel : '处理措施',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/responsible',
							dataIndex : 'responsible',
							allowBlank : false,
							fieldLabel : '责任人',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'datefield',
							name : 'entity/finishDt',
							dataIndex : 'finishDt',
							format : "Y-m-d",
							allowBlank : false,
							fieldLabel : '完成日期',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'entity/id'
						}, {
							xtype : 'hidden',
							name : 'entity/relationId'
						}]
			}]
		});

		this.productPanel = this.productPanel || new Ext.fn.EditPanel({
			// baseCls : "x-plain",
			title : '【生产信息调查】',
			height : 150,
			pgrid : this.listPanel,
			columns : 4,
			loadUrl : 'com.keensen.ump.produce.report.quality.expand5whyHead.biz.ext',
			saveUrl : 'com.keensen.ump.produce.report.quality.modify5whyHead.biz.ext',
			fields : [{
						xtype : 'textarea',
						name : 'entity/productInfo',
						dataIndex : 'productInfo',
						allowBlank : false,
						fieldLabel : '生产信息',
						anchor : '95%',
						colspan : 4
					}, {
						xtype : 'hidden',
						name : 'entity/id',
						dataIndex : 'id'
					}],
			buttons : [{
						text : "保存调查",
						scope : this,
						handler : this.onSaveProduct
					}]
		});

		var selModel3 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.reasonListPanel = this.reasonListPanel || new Ext.fn.ListPanel({
			title : '【原因分析】',
			height : 200,
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddReason
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelReason
					}],
			selModel : selModel3,
			delUrl : 'com.keensen.ump.produce.report.quality.delete5whyReason.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel3, {
						dataIndex : 'phenomenon',
						header : '不良现象'
					}, {
						dataIndex : 'why1',
						header : '1WHY'
					}, {
						dataIndex : 'why2',
						header : '2WHY'
					}, {
						dataIndex : 'why3',
						header : '3WHY'
					}, {
						dataIndex : 'why4',
						header : '4WHY'
					}, {
						dataIndex : 'why5',
						header : '5WHY'
					}, {
						dataIndex : 'answer',
						header : '再发防止对策'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.report.quality.query5whyReason.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
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
							name : 'phenomenon'
						}, {
							name : 'why1'
						}, {
							name : 'why2'
						}, {
							name : 'why3'
						}, {
							name : 'why4'
						}, {
							name : 'why5'
						}, {
							name : 'answer'
						}, {
							name : 'relationId'
						}]
			})
		})

		this.reasonWindow = this.reasonWindow || new Ext.fn.FormWindow({
			title : '新增原因分析',
			height : 300,
			width : 480,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.reasonListPanel,
				columns : 4,
				saveUrl : 'com.keensen.ump.produce.report.quality.save5whyReason.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/phenomenon',
							dataIndex : 'phenomenon',
							allowBlank : false,
							fieldLabel : '不良现象',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/why1',
							dataIndex : 'why1',
							allowBlank : false,
							fieldLabel : '1WHY',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/why2',
							dataIndex : 'why2',
							allowBlank : false,
							fieldLabel : '2WHY',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/why3',
							dataIndex : 'why3',
							allowBlank : false,
							fieldLabel : '3WHY',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/why4',
							dataIndex : 'why4',
							allowBlank : false,
							fieldLabel : '4WHY',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/why5',
							dataIndex : 'why5',
							allowBlank : false,
							fieldLabel : '5WHY',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/answer',
							dataIndex : 'answer',
							allowBlank : false,
							fieldLabel : '再发防止对策',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'hidden',
							name : 'entity/id'
						}, {
							xtype : 'hidden',
							name : 'entity/relationId'
						}]
			}]
		});

		var selModel4 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.answerListPanel = this.answerListPanel || new Ext.fn.ListPanel({
			title : '【改善对策】',
			height : 200,
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddAnswer
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelAnswer
					}],
			selModel : selModel4,
			delUrl : 'com.keensen.ump.produce.report.quality.delete5whyAnswer.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel4, {
						dataIndex : 'answer',
						header : '改善对策'
					}, {
						dataIndex : 'responsible',
						header : '责任人'
					}, {
						dataIndex : 'finishDt',
						header : '完成日期'
					}, {
						dataIndex : 'confirm',
						header : '实施确认'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.report.quality.query5whyAnswer.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : '',
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
							name : 'answer'
						}, {
							name : 'responsible'
						}, {
							name : 'finishDt'
						}, {
							name : 'confirm'
						}, {
							name : 'relationId'
						}]
			})
		})

		this.answerWindow = this.answerWindow || new Ext.fn.FormWindow({
			title : '新增改善对策',
			height : 300,
			width : 480,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.answerListPanel,
				columns : 4,
				saveUrl : 'com.keensen.ump.produce.report.quality.save5whyAnswer.biz.ext',
				fields : [{
							xtype : 'textarea',
							name : 'entity/answer',
							dataIndex : 'answer',
							allowBlank : false,
							fieldLabel : '改善对策',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'textfield',
							name : 'entity/responsible',
							dataIndex : 'responsible',
							allowBlank : false,
							fieldLabel : '责任人',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'datefield',
							format : "Y-m-d",
							name : 'entity/finishDt',
							dataIndex : 'finishDt',
							allowBlank : false,
							fieldLabel : '完成日期',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : 5,
							colspan : 4
						}, {
							xtype : 'textarea',
							name : 'entity/confirm',
							dataIndex : 'confirm',
							allowBlank : false,
							fieldLabel : '实施确认',
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'hidden',
							name : 'entity/id'
						}, {
							xtype : 'hidden',
							name : 'entity/relationId'
						}]
			}]
		});

		this.followWindow = this.followWindow || new Ext.Window({
					title : '跟进',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					modal : true,
					width : 800,
					height : 600,
					layout : 'form',
					items : [this.viewPanel, this.measureListPanel,
							this.productPanel, this.reasonListPanel,this.answerListPanel],
					buttons : [ {
								text : '关闭',
								scope : this,
								handler : function() {
									this.followWindow.hide();
								}
							}]

				});
	}
}