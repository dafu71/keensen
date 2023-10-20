com.zoomlion.hjsrm.formalsupply.FormalsupplyMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow();
		this.initViewWindow();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'formalsupplyMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 140,
					width : 50,
					columns : 4,
					border : true,
					collapsible : true,
					collapsed :!Ext.isEmpty(lifnr) ? true : false,
					titleCollapse : false,
					title : '【 供应商查询 】',
					fields : [{
								xtype : 'textfield',
								name : 'formalsupply/lifnr',
								fieldLabel : '供应商帐号'
							}, {
								xtype : 'textfield',
								name : 'formalsupply/name1',
								fieldLabel : '供应商名称'
							}, {
								xtype : 'dictcombobox',
								name : 'formalsupply/lsort',
								fieldLabel : '主物资类别',
								dataIndex : 'formalsupply/lsort',
								hiddenName : 'formalsupply/lsort',
								dictData : GE_SUPPLY_MATERIALTYPE
							}, {
								xtype : 'dictcombobox',
								name : 'formalsupply/lprop',
								fieldLabel : '供应商属性',
								dataIndex : 'formalsupply/lprop',
								hiddenName : 'formalsupply/lprop',
								dictData : GE_SUPPLY_PROPERTY
							}, {
								xtype : 'dictcombobox',
								name : 'formalsupply/lsyst',
								fieldLabel : '供应商分级',
								dataIndex : 'formalsupply/lsyst',
								hiddenName : 'formalsupply/lsyst',
								dictData : GE_SUPPLY_SYSTEMATICS
							},{
								xtype : 'dictcombobox',
								name : 'formalsupply/batch',
								fieldLabel : '供应商批量',
								dataIndex : 'formalsupply/batch',
								hiddenName : 'formalsupply/batch',
								dictData : GE_SUPPLY_REGIMENTATION
							}, {
								xtype : 'textfield',
								name : 'formalsupply/zzyyw',
								fieldLabel : '公司业务范围'
							}, {
								xtype : 'dictcombobox',
								name : 'formalsupply/whzt',
								fieldLabel : '维护状态',
								dataIndex : 'formalsupply/whzt',
								hiddenName : 'formalsupply/whzt',
								dictData : GE_INSPECT_QJBZ
							}]
				});
	}

	this.initListPanel = function() {
		
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 供应商列表 】',
			hsPage : true,
			tbar : [{
						text : '修改',
						rescode : '00481',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					},{
						text : '手动更新数据',
						rescode : '00321',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onadd
					}],
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
				dataIndex : 'lifnr',
				header : '供应商帐号',
				renderer : function(value, p, record, rowIndex, colIndex) {
					return '<a href="javascript:supplyShow(' + "1" + value
							+ ')">' + value + '</a>';
				}

			}, {
				dataIndex : 'name1',
				header : '供应商名称'
			}, {
				dataIndex : 'pstlz',
				header : '邮政编码'
			}, {
				dataIndex : 'stras',
				header : '地址'
			}, {
				xtype : 'dictcolumn',
				dictData : GE_SUPPLY_PROPERTY,
				dataIndex : 'lprop',
				header : '属性'
			}, {
				xtype : 'dictcolumn',
				dictData : GE_SUPPLY_MASSTYPE,
				dataIndex : 'ltype',
				header : '类型'
			}, {
				xtype : 'dictcolumn',
				dictData : GE_SUPPLY_REGIMENTATION,
				dataIndex : 'batch',
				header : '批量类型'
			}, {
				xtype : 'dictcolumn',
				dictData : GE_SUPPLY_SYSTEMATICS,
				dataIndex : 'lsyst',
				header : '分级'
			}, {
				xtype : 'dictcolumn',
				dictData : GE_SUPPLY_MATERIALTYPE,
				dataIndex : 'lsort',
				header : '主物资类别'
			}, {
				dataIndex : 'creid',
				header : '维护人'
			}, {
				dataIndex : 'cretm',
				header : '维护时间'
			}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.supply.manager.supply.FormalSupplyMgr.queryFromalSupply.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'pstlz'
						}, {
							name : 'stras'
						}, {
							name : 'lprop'
						}, {
							name : 'ltype'
						}, {
							name : 'batch'
						}, {
							name : 'lsyst'
						},{
							name : 'lsort'
						}, {
							name : 'zzyyw'
						}, {
							name : 'creid'
						}, {
							name : 'cretm'
						}]
			})
		});
	}

	var selModel = new Ext.grid.CheckboxSelectionModel({});
	var colModel = new Ext.grid.ColumnModel([selModel, {
				header : "编号",
				dataIndex : "zttel",
				sortable : true,
				hide : true,
				width : 10,
				editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							disabled : true
						}))
			}, {
				header : "职务",
				dataIndex : "ztext",
				sortable : true,
				width : 50,
				editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							disabled : true
						}))
			}, {
				header : "姓名",
				dataIndex : "zname",
				sortable : true,
				width : 40,
				editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							allowBlank : false
						}))
			}, {
				header : "座机",
				dataIndex : "zmtel",
				sortable : true,
				width : 60,
				editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							vtype : 'tel'
						}))
			}, {
				header : "手机",
				dataIndex : "zptel",
				sortable : true,
				width : 60,
				editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							vtype : 'phone'
						}))
			}, {
				header : "邮件地址",
				dataIndex : "email",
				sortable : true,
				width : 110,
				editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							vtype : 'email'
						}))
			}]);

	this.storeTel = this.storeTel || new Ext.data.JsonStore({
		autoLoad : false,
		url : 'com.zoomlion.hjsrm.supply.manager.supply.FormalSupplyMgr.loadSupplyTel.biz.ext',
		root : 'datatel',
		colspan : 4,
		height : 150,
		fields : [{
					name : 'zttel'
				}, {
					name : 'ztext'
				}, {
					name : 'zname'
				}, {
					name : 'zmtel'
				}, {
					name : 'zptel'
				}, {
					name : 'email'
				}]
	});

	this.supplyQuerySetPanel = new Ext.fn.EditListPanel({
		cm : colModel,
		sm : selModel,
		store : this.storeTel,
		width : 320,
		colspan : 4,
		fieldLabel : '联系人明细',
		height : 155,
		// tbar : tbar,
		clicksToEdit : 1,
		hsPage : false,
		subAll : false,
		viewConfig : {
			forceFit : true
		}
			/*
			 * columns : [new Ext.grid.RowNumberer(), selModel, { dataIndex :
			 * 'ztext', header : '职务' }, { dataIndex : 'zname', header : '姓名' }, {
			 * dataIndex : 'zmtel', header : '座机' }, { dataIndex : 'zptel',
			 * header : '手机' }, { dataIndex : 'email', header : '邮件地址' }]
			 */
		});

	// -------------------------------------------------------------
	this.initEditWindow = function() {
		var _this = this;
		this.eattachId = Ext.id();
		this.eattachId1 = Ext.id();
		this.eattachId2 = Ext.id();
		this.eattachId3 = Ext.id();
		this.eattachId4 = Ext.id();
		this.eattachId5 = Ext.id();
		this.lifnr = Ext.id();
		this.lprop = Ext.id();
		this.lsyst = Ext.id();
		this.batch = Ext.id();
		this.ltype = Ext.id();
		this.zzyyw = Ext.id();
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '编辑供应商信息',
			height : 480,
			width : 800,
			resizable : true,
			minimizable : true,
			maximizable : true,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				autoScroll : true,
				columns : 4,
				loadUrl : 'com.zoomlion.hjsrm.supply.manager.supply.FormalSupplyMgr.loadSupply.biz.ext',
				// saveUrl :
				// 'com.zoomlion.hjsrm.supply.manager.supply.FormalSupplyMgr.saveFromalSupply.biz.ext',
				saveUrl : '...',
				fields : [{
							name : 'formalsupply/lifnr',
							dataIndex : 'lifnr',
							fieldLabel : '供应商编号',
							anchor : '90%',
							id : this.lifnr,
							xtype : 'textfield',
							readOnly : true,
							colspan : 2
						}, {
							name : 'formalsupply/name1',
							dataIndex : 'name1',
							fieldLabel : '供应商名称',
							anchor : '90%',
							xtype : 'textfield',
							readOnly : true,
							colspan : 4
						}, {
							xtype : 'textfield',
							readOnly : true,
							name : 'formalsupply/pstlz',
							fieldLabel : '邮政编码',
							dataIndex : 'pstlz',
							anchor : '90%',
							colspan : 1
						}, {
							xtype : 'textfield',
							readOnly : true,
							name : 'formalsupply/stras',
							fieldLabel : '供应商地址',
							dataIndex : 'stras',
							anchor : '90%',
							colspan : 3
						}, {
							name : 'formalsupply/lprop',
							fieldLabel : '供应商属性',
							xtype : 'dictcombobox',
							id : this.lprop,
							dataIndex : 'lprop',
							hiddenName : 'formalsupply/lprop',
							layout : 'fit',
							dictData : GE_SUPPLY_PROPERTY,
							colspan : 1
						}, {
							name : 'formalsupply/ltype',
							fieldLabel : '供应商类型',
							xtype : 'dictcombobox',
							id : this.ltype,
							dataIndex : 'ltype',
							hiddenName : 'formalsupply/ltype',
							layout : 'fit',
							dictData : GE_SUPPLY_MASSTYPE,
							colspan : 1
						}, {
							name : 'formalsupply/batch',
							fieldLabel : '供应商批量',
							xtype : 'dictcombobox',
							id : this.batch,
							dataIndex : 'batch',
							hiddenName : 'formalsupply/batch',
							layout : 'fit',
							dictData : GE_SUPPLY_REGIMENTATION,
							colspan : 1
						}, {
							name : 'formalsupply/lsyst',
							fieldLabel : '供应商分级',
							xtype : 'dictcombobox',
							id : this.lsyst,
							dataIndex : 'lsyst',
							hiddenName : 'formalsupply/lsyst',
							layout : 'fit',
							dictData : GE_SUPPLY_SYSTEMATICS,
							colspan : 1
						}, this.selectMulti, this.supplyQuerySetPanel, {
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : true,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.eattachId,
							postParams : {
								relationId : 0,
								groupId : 'swdjpaperwork',
								dataorgid : dataorgid,
								operatorid : operatorid,
								operatorname : operatorname
							},
							isDownload : true,
							fieldLabel : '税务登记证',
							title : '税务登记证',
							itemId : 'attachmentlist'
						}, {
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : true,
							xtype : 'attachmentlist',
							name : 'attachlist1',
							id : this.eattachId1,
							postParams : {
								relationId : 0,
								groupId : 'zzjgparperwork',
								dataorgid : dataorgid,
								operatorid : operatorid,
								operatorname : operatorname
							},
							isDownload : true,
							fieldLabel : '组织机构代码证',
							title : '组织机构代码证',
							itemId : 'attachmentlist1'
						}, {
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : true,
							xtype : 'attachmentlist',
							name : 'attachlist1',
							id : this.eattachId2,
							postParams : {
								relationId : 0,
								groupId : 'yyzzpaperwork',
								dataorgid : dataorgid,
								operatorid : operatorid,
								operatorname : operatorname
							},
							isDownload : true,
							fieldLabel : '营业执照',
							title : '营业执照',
							itemId : 'attachmentlist2'
						}, {
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : true,
							xtype : 'attachmentlist',
							name : 'attachlist1',
							id : this.eattachId3,
							postParams : {
								relationId : 0,
								groupId : 'txrzpaperwork',
								dataorgid : dataorgid,
								operatorid : operatorid,
								operatorname : operatorname
							},
							isDownload : true,
							fieldLabel : '体系认证',
							title : '体系认证',
							itemId : 'attachmentlist3'
						},{
							xtype : 'textarea',
							name : 'formalsupply/zzyyw',
							fieldLabel : '公司业务范围',
							id : this.zzyyw,
							dataIndex : 'zzyyw',
							anchor : '90%',
							maxLength : 1000,
							emptyText :'超过一千字，请编辑为文档在下方上传',
							height : 80,
							colspan : 4
						},{
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : true,
							xtype : 'attachmentlist',
							name : 'attachlist1',
							id : this.eattachId4,
							postParams : {
								relationId : 0,
								groupId : 'gsjjpaperwork',
								dataorgid : dataorgid,
								operatorid : operatorid,
								operatorname : operatorname
							},
							isDownload : true,
							fieldLabel : '公司简介文档',
							title : '公司业务范围',
							itemId : 'attachmentlist4'
						}, {
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : true,
							xtype : 'attachmentlist',
							name : 'attachlist1',
							id : this.eattachId5,
							postParams : {
								relationId : 0,
								groupId : 'qtfjpaperwork',
								dataorgid : dataorgid,
								operatorid : operatorid,
								operatorname : operatorname
							},
							isDownload : true,
							fieldLabel : '其它附件',
							title : '其它附件',
							itemId : 'attachmentlist5'
						}]
			}],
			buildButtons : function() {
				this.buttons = [{
							text : '保存',
							scope : this,
							handler : function() {
								_this.onSaveOk();
							}
						}, {
							text : '关闭',
							scope : this,
							handler : function() {
								this.hide();
							}
						}]
			}
		});

	}

	var colList = new Ext.grid.ColumnModel([{
				header : "编号",
				dataIndex : "zttel",
				sortable : true,
				hide : true,
				width : 10
			}, {
				header : "职务",
				dataIndex : "ztext",
				sortable : true,
				width : 50
			}, {
				header : "姓名",
				dataIndex : "zname",
				sortable : true,
				width : 40
			}, {
				header : "座机",
				dataIndex : "zmtel",
				sortable : true,
				width : 60
			}, {
				header : "手机",
				dataIndex : "zptel",
				sortable : true,
				width : 60
			}, {
				header : "邮件地址",
				dataIndex : "email",
				sortable : true,
				width : 110
			}]);

	this.supplyQueryTel = new Ext.fn.ListPanel({
		cm : colList,
		id : 'supplyTelPanel',
		store : this.storeTel,
		width : 320,
		colspan : 4,
		fieldLabel : '联系人明细',
		height : 163,
		clicksToEdit : 1,
		hsPage : false,
		subAll : false,
		viewConfig : {
			forceFit : true
		}
			/*
			 * columns : [new Ext.grid.RowNumberer(), selModel, { dataIndex :
			 * 'ztext', header : '职务' }, { dataIndex : 'zname', header : '姓名' }, {
			 * dataIndex : 'zmtel', header : '座机' }, { dataIndex : 'zptel',
			 * header : '手机' }, { dataIndex : 'email', header : '邮件地址' }]
			 */
		});

	this.initViewWindow = function() {
		var _this = this;
		this.veattachId = Ext.id();
		this.veattachId1 = Ext.id();
		this.veattachId2 = Ext.id();
		this.veattachId3 = Ext.id();
		this.veattachId4 = Ext.id();
		this.veattachId5 = Ext.id();
		this.viewWindow = this.viewWindow || new Ext.fn.ShowWindow({
			id : 'showSupplyInfo',
			title : '查看供应商信息',
			height : 550,
			fid : this.veattachId,
			fid1 : this.veattachId1,
			fid2 : this.veattachId2,
			fid3 : this.veattachId3,
			fid4 : this.veattachId4,
			fid5 : this.veattachId5,
			width : 800,
			resizable : true,
			minimizable : true,
			maximizable : true,
			items : [{
				xtype : 'viewpanel',
				columns : 4,
				autoScroll : true,
				loadUrl : 'com.zoomlion.hjsrm.supply.manager.supply.FormalSupplyMgr.loadSupply.biz.ext',
				fields : [{
							name : 'formalsupply/lifnr',
							dataIndex : 'lifnr',
							fieldLabel : '供应商编号',
							style : 'padding-top:3px;padding-left:10px;',
							anchor : '90%',
							xtype : 'displayfield',
							colspan : 2
						}, {
							name : 'formalsupply/name1',
							dataIndex : 'name1',
							fieldLabel : '供应商名称',
							style : 'padding-top:3px;padding-left:10px;',
							anchor : '90%',
							xtype : 'displayfield',
							colspan : 4
						}, {
							xtype : 'displayfield',
							style : 'padding-top:3px;padding-left:10px;',
							name : 'formalsupply/pstlz',
							fieldLabel : '邮政编码',
							dataIndex : 'pstlz',
							anchor : '90%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							name : 'formalsupply/stras',
							style : 'padding-top:3px;padding-left:10px;',
							fieldLabel : '供应商地址',
							dataIndex : 'stras',
							anchor : '90%',
							colspan : 3
						}, {
							xtype : 'dictdisplayfield',
							style : 'padding-top:3px;padding-left:10px;',
							dictData : GE_SUPPLY_PROPERTY,
							dataIndex : 'lprop',
							fieldLabel : '供应商属性',
							colspan : 1
						}, {
							fieldLabel : '供应商类型',
							xtype : 'dictdisplayfield',
							style : 'padding-top:3px;padding-left:10px;',
							dataIndex : 'ltype',
							dictData : GE_SUPPLY_MASSTYPE,
							colspan : 1
						}, {
							fieldLabel : '供应商批量',
							xtype : 'dictdisplayfield',
							style : 'padding-top:3px;padding-left:10px;',
							dataIndex : 'batch',
							dictData : GE_SUPPLY_REGIMENTATION,
							colspan : 1
						}, {
							fieldLabel : '供应商分级',
							xtype : 'dictdisplayfield',
							style : 'padding-top:3px;padding-left:10px;',
							dataIndex : 'lsyst',
							dictData : GE_SUPPLY_SYSTEMATICS,
							colspan : 1
						},{
							fieldLabel : '主供物资类别',
							xtype : 'dictdisplayfield',
							style : 'padding-top:3px;padding-left:10px;',
							dataIndex : 'lsort',
							dictData : GE_SUPPLY_MATERIALTYPE,
							colspan : 4
						},  this.supplyQueryTel, {
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.veattachId,
							postParams : {
								relationId : 0,
								groupId : 'swdjpaperwork'
							},
							isDownload : true,
							fieldLabel : '税务登记证',
							title : '税务登记证',
							itemId : 'attachmentlist'
						}, {
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.veattachId1,
							postParams : {
								relationId : 0,
								groupId : 'zzjgparperwork'
							},
							isDownload : true,
							fieldLabel : '组织机构代码证',
							title : '组织机构代码证',
							itemId : 'attachmentlist'
						}, {
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.veattachId2,
							postParams : {
								relationId : 0,
								groupId : 'yyzzpaperwork'
							},
							isDownload : true,
							fieldLabel : '营业执照',
							title : '营业执照',
							itemId : 'attachmentlist'
						}, {
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.veattachId3,
							postParams : {
								relationId : 0,
								groupId : 'txrzpaperwork'
							},
							isDownload : true,
							fieldLabel : '体系认证',
							title : '体系认证',
							itemId : 'attachmentlist'
						}, {
							xtype : 'textarea',
							fieldLabel : '公司业务范围',
							dataIndex : 'zzyyw',
							anchor : '90%',
							height : 80,
							colspan : 4
						},{
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.veattachId4,
							postParams : {
								relationId : 0,
								groupId : 'gsjjpaperwork'
							},
							isDownload : true,
							fieldLabel : '公司简介文档',
							title : '公司业务范围',
							itemId : 'attachmentlist'
						}, {
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.veattachId5,
							postParams : {
								relationId : 0,
								groupId : 'qtfjpaperwork'
							},
							isDownload : true,
							fieldLabel : '其它附件',
							title : '其它附件',
							itemId : 'attachmentlist'
						}]
			}]
		});
	}
	// ===============================================================================
	// var data = [[1, "张三"], [2, "李四"], [3, "王五"], [4, "李龙"], [5, "天哥"],
	// [6, "随影"]];
	//
	// var proxy = new Ext.data.MemoryProxy(data);
	//
	// var columnName = new Ext.data.Record.create([{
	// name : "id",
	// type : "int"
	// }, {
	// name : "name",
	// type : "string"
	// }]);
	//
	// var reader = new Ext.data.ArrayReader({}, columnName);
	//
	// this.storeMulti = new Ext.data.Store({
	// proxy : proxy,
	// reader : reader,
	// autoLoad : false
	// });
	//
	// this.storeMulti.load();
	// // 设置默认值
	// this.storeMulti.on('load', function() {
	// // taskstatuscombo.selectAll(); //全选
	// taskstatuscombo.setValue("王五"); // 默认选中王五
	// });

	// ==============================================================================
	this.storeMulti = new Ext.data.JsonStore({
		url : 'com.zoomlion.hjsrm.supply.manager.supply.FormalSupplyMgr.loadSupplyMaterial.biz.ext', // 服务方法，这个是mvc的方法
		root : "dataMaterial",
		fields : [{
					name : 'dictid'
				}, {
					name : 'dictname'
				}],
		autoLoad : false
	});
	// ===================================================================
	this.selectMulti = new Ext.form.MultiSelect({
		colspan : 4,
		width : 600,
		id:mySupplyMaterialid,
		editable : false,
		store : this.storeMulti,
		valueField : 'dictid',
		fieldLabel : '主供物资类别',
		displayField : "dictname",
		mode : 'local',
		triggerAction : 'all',
		emptyText : '请选择',
		maxHeight : 200
			// 下拉框的最大高度
		});

}