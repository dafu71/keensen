com.keensen.ump.produce.quality.review.MpMgr = function() {

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
					renderTo : 'qualityreviewmpmgr',
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
								name : 'condition/client',
								fieldLabel : '客户名称'
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo',
								fieldLabel : '订单号'
							}, {
								xtype : 'mpspeccombobox',
								valueField : "id",
								displayField : "name",
								fieldLabel : '膜片型号',
								ref : '../specId',
								hiddenName : 'condition/specId',
								emptyText : '--请选择--',
								allowBlank : true,
								editable : false,
								anchor : '100%',
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.queryPanel.specId.reset();
									}
								}
							}, {
								xtype : "dateregion",
								colspan : 1,
								// anchor : '95%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "日期",
								format : "Y-m-d"
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
						hidden : pgLimit != 1,
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						hidden : pgLimit != 1,
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '变更检测报告',
						hidden : pgLimit != 1,
						scope : this,
						iconCls : 'icon-application_edit',
						// disabled : (uid != 'KS00610') && (uid != 'KS01313')
						// && (uid != 'KS00524'),
						handler : this.onModifyUrl
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'createTime',
						header : '日期'
					}, {
						dataIndex : 'client',
						header : '客户名称'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'specName',
						header : '膜片型号'
					}, {
						dataIndex : 'amount',
						header : '数量'
					}, {
						dataIndex : 'url',
						header : '检测报告',
						renderer : function(value, metaData, rec, rowIndex,
								colIndex, store, view) {
							if (!!value) {
								var v = markRootUrl + value;
								//console.log('<a href="javascript:void(0)" onclick="down(' + "'" + v + "'" + ')">检测报告</a>')
								return '<a href="javascript:void(0)" onclick="down(' + "'" + v + "'" + ')">检测报告下载</a>';
								
								/*return '<a href="' + markRootUrl + value
										+ '" target = "_blank">' + '检测报告'
										+ '</a>';*/
							}
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.review.queryMpDeliveryrecord.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'client'
						}, {
							name : 'orderNo'
						}, {
							name : 'specId'
						}, {
							name : 'specName'
						}, {
							name : 'amount'
						}, {
							name : 'url'
						}, {
							name : 'createTime'
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
				saveUrl : 'com.keensen.ump.produce.quality.review.saveMpDeliveryrecord.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/client',
							allowBlank : false,
							fieldLabel : '客户名称',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							allowBlank : false,
							fieldLabel : '订单号',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'mpspeccombobox',
							valueField : "id",
							displayField : "name",
							fieldLabel : '膜片型号',
							ref : '../../specId',
							hiddenName : 'entity/specId',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							// anchor : '95%',
							colspan : 2,
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.specId.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/amount',
							allowBlank : false,
							fieldLabel : '数量',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'trigger',
							ref : '../../url2',
							fieldLabel : '检测报告',
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
				loadUrl : 'com.keensen.ump.produce.quality.review.expandMpDeliveryrecord.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.review.saveMpDeliveryrecord.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'entity/client',
							dataIndex : 'client',
							allowBlank : false,
							fieldLabel : '客户名称',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/orderNo',
							dataIndex : 'orderNo',
							allowBlank : false,
							fieldLabel : '订单号',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'mpspeccombobox',
							dataIndex : 'specId',
							valueField : "id",
							displayField : "name",
							fieldLabel : '膜片型号',
							ref : '../../specId',
							hiddenName : 'entity/specId',
							emptyText : '--请选择--',
							allowBlank : false,
							editable : false,
							// anchor : '95%',
							colspan : 2,
							listeners : {
								scope : this,
								'expand' : function(A) {
									this.inputWindow.specId.reset();
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							dataIndex : 'amount',
							name : 'entity/amount',
							allowBlank : false,
							fieldLabel : '数量',
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
						saveUrl : 'com.keensen.ump.produce.quality.uploadReview.flow',
						columns : 1,
						fileUpload : true,
						fields : [{
							name : 'uploadFile',
							fieldLabel : '选择pdf文件',
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