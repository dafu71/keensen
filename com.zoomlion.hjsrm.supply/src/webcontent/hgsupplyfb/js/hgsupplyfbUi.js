/*
 *  刘鑫--合格供应商名录发布
 */
com.zoomlion.hjsrm.supply.HgsupplyfbMgr = function() {
    //初始化Panel
	this.initPanel = function() {
		this.initQueryPanel();
		this.buildExcelUploadWin();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',//collape 带查询条件板收缩的ns布局！布局请参考frame/ui/jslib/widge.js
					border : false,//无边框设定
					renderTo : 'hgsupplyfbMgr',//jsp指向容器ID
					panels : [this.queryPanel, this.listPanel]
				});
	}
	//查询条件输入框
	this.initQueryPanel = function() {
		var mydate = new Date();
		//getFullYear() 获取具体时间的年份
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,//定义查询panel的高度
					columns : 4,//定义查询panel的列数
					border : true,//边框设置
					collapsible : true,//查询panel收缩设置
					titleCollapse : false,//禁止标题收缩
					title : '【 合格供应商名录查询 】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/yearr',
								fieldLabel : '年度',
								value : mydate.getFullYear(),
								colspan : 1
							}, {
								xtype : 'textfield',
								name : 'condition/lifnr',
								fieldLabel : '供应商'
							}, {
								xtype : 'textfield',
								name : 'condition/name1',
								fieldLabel : '供应商名称'
							}, {
								xtype : 'dictcombobox',
								name : 'condition/ekorg',
								hiddenName : 'condition/ekorg',
								ref : '../ekorg',
								fieldLabel : '采购组织',
								emptyText : '',
								dictData : GE_SUPPLY_WGWX
							}, {
								xtype : 'dictcombobox',
								name : 'condition/wzlx',
								dataIndex : 'condition/wzlx',
								hiddenName : 'condition/wzlx',
								fieldLabel : '物资类型',
								emptyText : '',
								dictData : GE_SUPPLY_WZLX
							}, {
								xtype : 'dictcombobox',
								name : 'condition/wzlb',
								dataIndex : 'condition/wzlb',
								hiddenName : 'condition/wzlb',
								fieldLabel : '物资类别',
								emptyText : '',
								dictData : GE_SUPPLY_WZLB
							}, {
								xtype : 'dictcombobox',
								name : 'condition/gyslx',
								dataIndex : 'condition/gyslx',
								hiddenName : 'condition/gyslx',
								fieldLabel : '供应商类型',
								emptyText : '',
								dictData : GE_SUPPLY_GYSLX
							}, {
								xtype : 'textfield',
								name : 'condition/zgcp',
								fieldLabel : '主供产品'
							}]
				});
	}
    //查询列表
	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 合格供应商名录列表】',
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',//按钮样式
						rescode : '00585',//按钮权限控制
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',//按钮样式
						rescode : '00585',//按钮权限控制
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',//按钮样式
						rescode : '00585',//按钮权限控制
						handler : this.onDel
					}, '-', {
						text : "模板下载",
						scope : this,
						iconCls : 'icon-application_excel',//按钮样式
						rescode : '00585',//按钮权限控制
						handler : this.xzMb
					}, '-', {
						text : "导入",
						scope : this,
						iconCls : 'icon-application_excel',//按钮样式
						rescode : '00585',//按钮权限控制
						handler : this.onImportExcel
					}],
			selModel : selModel,
			delUrl : 'com.zoomlion.hjsrm.supply.manager.supply.hgsupplyfb.delhgsupplyfb.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'yearr',
						header : '年度',
						width : 60
					}, {
						dataIndex : 'ekorgx',
						header : '外购/外协'
					}, {
						dataIndex : 'jydy',
						header : '经营单元',
						width : 150
					}, {
						dataIndex : 'lifnr',
						header : '供应商编号'
					}, {
						dataIndex : 'name1',
						header : '供应商名称',
						width : 150
					}, {
						dataIndex : 'gyslx',
						header : '供应商类型'
					}, {
						dataIndex : 'zgcp',
						header : '主供产品'
					}, {
						dataIndex : 'wzlx',
						header : '物资类型'
					}, {
						dataIndex : 'wzlb',
						header : '物资类别'
					}, {
						dataIndex : 'gysdz',
						header : '供应商详细地址'
					}, {
						dataIndex : 'gyslxr',
						header : '供应商联系人'
					}, {
						dataIndex : 'gyslxdh',
						header : '供应商联系电话'
					}, {
						dataIndex : 'text1',
						header : '备注1'
					}, {
						dataIndex : 'text2',
						header : '备注2'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.supply.manager.supply.hgsupplyfb.queryhgsupplyfb.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'yearr'
						}, {
							name : 'ekorg'
						}, {
							name : 'ekorgx'
						}, {
							name : 'jydy'
						}, {
							name : 'gyslx'
						}, {
							name : 'zgcp'
						}, {
							name : 'wzlx'
						}, {
							name : 'wzlb'
						}, {
							name : 'gysdz'
						}, {
							name : 'gyslxr'
						}, {
							name : 'gyslxdh'
						}, {
							name : 'text1'
						}, {
							name : 'text2'
						}, {
							name : 'createtime'
						}, {
							name : 'createuserid'
						}, {
							name : 'updatetime'
						}, {
							name : 'updateuserid'
						}, {
							name : 'delflag'
						}, {
							name : 'bukrs'
						}]
			})
		});
	}
	//新增窗口
	this.initInputWindow = function() {
		var _this = this;
		var mydate = new Date();
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增合格供应商名录',
			height : 300,
			width : 800,
			resizable : true,//窗口边框和托动大小
			minimizable : false,//设置窗口不能最小化
			maximizable : true,//设置窗口能最大化
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 3,
				saveUrl : 'com.zoomlion.hjsrm.supply.manager.supply.hgsupplyfb.addhgsupplyfb.biz.ext',
				fields : [{
							xtype : 'companycombobox',
							name : 'hgsupply/bukrs',
							defaultValue : '3000',
							hiddenName : 'hgsupply/bukrs',
							allowBlank : false,
							fieldLabel : '公司',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'hgsupply/yearr',
							allowBlank : false,
							fieldLabel : '年度',
							value : mydate.getFullYear(),
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'hgsupply/jydy',
							allowBlank : false,
							fieldLabel : '经营单元',
							colspan : 1
						}, {
							xtype : 'lifnrallCombo',
							name : 'hgsupply/lifnr',
							hiddenName : 'hgsupply/lifnr',
							allowBlank : false,
							fieldLabel : '供应商',
							colspan : 1
						}, {
							xtype : 'dictcombobox',
							name : 'hgsupply/ekorg',
							hiddenName : 'hgsupply/ekorg',
							ref : '../ekorg',
							allowBlank : false,
							fieldLabel : '采购组织',
							emptyText : '',
							colspan : 1,
							dictData : GE_SUPPLY_WGWX
						}, {
							xtype : 'dictcombobox',
							name : 'hgsupply/gyslx',
							hiddenName : 'hgsupply/gyslx',
							ref : '../gyslx',
							allowBlank : false,
							fieldLabel : '供应商类型',
							emptyText : '',
							colspan : 1,
							dictData : GE_SUPPLY_GYSLX
						}, {
							xtype : 'dictcombobox',
							name : 'hgsupply/wzlx',
							hiddenName : 'hgsupply/wzlx',
							ref : '../wzlx',
							allowBlank : false,
							fieldLabel : '物资类型',
							emptyText : '',
							colspan : 1,
							dictData : GE_SUPPLY_WZLX
						}, {
							xtype : 'dictcombobox',
							name : 'hgsupply/wzlb',
							hiddenName : 'hgsupply/wzlb',
							ref : '../wzlb',
							allowBlank : false,
							fieldLabel : '物资类别',
							emptyText : '',
							colspan : 1,
							dictData : GE_SUPPLY_WZLB
						}, {
							xtype : 'textfield',
							name : 'hgsupply/zgcp',
							allowBlank : false,
							fieldLabel : '主供/代理产品',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'hgsupply/gysdz',
							allowBlank : false,
							fieldLabel : '供应商详细地址',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'hgsupply/gyslxr',
							allowBlank : false,
							fieldLabel : '供应商联系人',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'hgsupply/gyslxdh',
							allowBlank : false,
							fieldLabel : '供应商联系电话',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'hgsupply/text1',
							fieldLabel : '备注1',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'hgsupply/text2',
							fieldLabel : '备注2',
							colspan : 3
						}]
			}]
		});
	}
    //编辑窗口
	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '编辑合格供应商名录',
			height : 300,//设置窗口高度
			width : 800,//设置窗口宽度
			resizable : false,//禁止窗口的手动拉伸
			minimizable : false,//禁止窗口最小化
			maximizable : false,//禁止窗口最大化
			items : [{
				xtype : 'editpanel',//定义编辑panel
				pgrid : this.listPanel,
				columns : 3,//定义panel的列数
				loadUrl : 'com.zoomlion.hjsrm.supply.manager.supply.hgsupplyfb.loadhgsupplyfb.biz.ext',
				saveUrl : 'com.zoomlion.hjsrm.supply.manager.supply.hgsupplyfb.savehgsupplyfb.biz.ext',
				fields : [{
							xtype : 'companycombobox',
							name : 'hgsupply/bukrs',
							defaultValue : '3000',
							dataIndex : "bukrs",
							hiddenName : 'hgsupply/bukrs',
							allowBlank : false,
							fieldLabel : '公司',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'hgsupply/yearr',
							allowBlank : false,
							fieldLabel : '年度',
							readOnly : true,
							dataIndex : "yearr",
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'hgsupply/jydy',
							allowBlank : false,
							dataIndex : "jydy",
							fieldLabel : '经营单元',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'hgsupply/name1',
							allowBlank : false,
							readOnly : true,
							dataIndex : "name1",
							fieldLabel : '供应商名称',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'hgsupply/lifnr',
							allowBlank : false,
							dataIndex : "lifnr",
							readOnly : true,
							hidden : true,
							fieldLabel : '供应商',
							colspan : 1
						}, {
							xtype : 'dictcombobox',
							name : 'hgsupply/ekorg',
							hiddenName : 'hgsupply/ekorg',
							ref : '../ekorg',
							allowBlank : false,
							dataIndex : "ekorg",
							readOnly : true,
							fieldLabel : '采购组织',
							emptyText : '',
							colspan : 1,
							dictData : GE_SUPPLY_WGWX
						}, {
							xtype : 'dictcombobox',
							name : 'hgsupply/gyslx',
							hiddenName : 'hgsupply/gyslx',
							ref : '../gyslx',
							dataIndex : "gyslx",
							allowBlank : false,
							fieldLabel : '供应商类型',
							emptyText : '',
							colspan : 1,
							dictData : GE_SUPPLY_GYSLX
						}, {
							xtype : 'dictcombobox',
							name : 'hgsupply/wzlx',
							hiddenName : 'hgsupply/wzlx',
							ref : '../wzlx',
							allowBlank : false,
							dataIndex : "wzlx",
							fieldLabel : '物资类型',
							emptyText : '',
							colspan : 1,
							dictData : GE_SUPPLY_WZLX
						}, {
							xtype : 'dictcombobox',
							name : 'hgsupply/wzlb',
							hiddenName : 'hgsupply/wzlb',
							ref : '../wzlb',
							dataIndex : "wzlb",
							allowBlank : false,
							fieldLabel : '物资类别',
							emptyText : '',
							colspan : 1,
							dictData : GE_SUPPLY_WZLB
						}, {
							xtype : 'textfield',
							name : 'hgsupply/zgcp',
							allowBlank : false,
							dataIndex : "zgcp",
							fieldLabel : '主供/代理产品',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'hgsupply/gysdz',
							allowBlank : false,
							dataIndex : "gysdz",
							fieldLabel : '供应商详细地址',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'hgsupply/gyslxr',
							allowBlank : false,
							dataIndex : "gyslxr",
							fieldLabel : '供应商联系人',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'hgsupply/gyslxdh',
							allowBlank : false,
							dataIndex : "gyslxdh",
							fieldLabel : '供应商联系电话',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'hgsupply/text1',
							fieldLabel : '备注1',
							dataIndex : "text1",
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'hgsupply/text2',
							fieldLabel : '备注2',
							dataIndex : "text2",
							colspan : 3
						}]
			}]
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
			height : 120,
			items : [{
				xtype : 'columnform',
				itemId : 'uploadForm',
				saveUrl : 'com.zoomlion.hjsrm.supply.manager.supply.uploadhgsupply.flow',
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
