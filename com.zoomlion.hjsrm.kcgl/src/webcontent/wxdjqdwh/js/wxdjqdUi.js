/*
 * 示例ui @author rye
 */
com.zoomlion.hjsrm.kcgl.DjqdwhMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'djqdwhMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					width : 500,
					columns : 2,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 大件清单查询 】', 
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								columns : 1,
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							},{
								xtype : 'textfield',
								columns : 1,
								name : 'condition/cxmc',
								fieldLabel : '车型名称'
							}, {
								xtype : 'textfield',
								columns : 1,
								name : 'condition/matnr',
								fieldLabel : '物料编码'
							},{
								xtype : 'textfield',
								columns : 1,
								name : 'condition/maktx',
								fieldLabel : '物料描述'
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 大件清单列表 】',
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
					}],
			selModel : selModel,
			delUrl : 'com.zoomlion.hjsrm.kcgl.kcglDaji.delwxdjqd.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'werks',
						header : '工厂'
					},{
						dataIndex : 'matnr',
						header : '物料编码',
						width : 200
					},{
						dataIndex : 'maktx',
						header : '物料描述',
						width : 300
					},{
						dataIndex : 'stprs',
						header : '标准价格'
					},{
						dataIndex : 'peinh',
						header : '价格单位'
					},{
						dataIndex : 'cxmc',
						header : '车型名称'		
					},{
						dataIndex : 'tranu',
						header : '维护人'		
					},{
						dataIndex : 'trant',
						header : '维护时间'		
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.kcgl.kcglDaji.querywxdjqd.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'matnr'
						},{
							name : 'werks'
						},{
							name : 'bukrs'
						},{
							name : 'stprs'
						},{
							name : 'peinh'
						},{
							name : 'maktx'
						}, {
							name : 'cxdm'
						}, {
							name : 'cxmc'
						}, {
							name : 'statu'
						}, {
							name : 'tranu'
						}, {
							name : 'trant'
						}]
			})
		});
	}
	this.initInputWindow = function() {
		this.attachId = Ext.id();
		var companyid = Ext.id();
		var orgid = Ext.id();
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增大件清单',
			height : 120,
			width : 800,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 3,
				// saveUrl :
				// 'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.addAnnounce.biz.ext',
				saveUrl : 'com.zoomlion.hjsrm.kcgl.kcglDaji.addwxdjqd.biz.ext',
				fields : [ {
								xtype : 'factorycombobox',
								defaultValue : '3000',
								hiddenName : 'djqd/werks',
								allowBlank : false,
								fieldLabel : '工厂',
								colspan : 1
							},{
							xtype : 'matnrCombo',
							name : 'djqd/matnr',
							allowBlank : false,
							fieldLabel : '物料编码',
							colspan : 1
						   },{
						    xtype : 'djqdCombo',
							name : 'djqd/cxmc',
							allowBlank : false,
							fieldLabel : '车型名称',
							colspan : 1
						  },{
						    xtype : 'textfield',
							name : 'djqd/cxdm',
							id :'cxdmxxx',
                            hidden:true,
							fieldLabel : '车型代码',
							colspan : 1
						  }]
			}]
		});
	}

	this.initEditWindow = function() {
		this.eattachId = Ext.id();
		var companyid = Ext.id();
		var orgid = Ext.id();
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '编辑大件清单',
			height : 120,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 3,
				loadUrl : 'com.zoomlion.hjsrm.kcgl.kcglDaji.loadwxdjqd.biz.ext',
				saveUrl : 'com.zoomlion.hjsrm.kcgl.kcglDaji.addwxdjqd.biz.ext',
				fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								hiddenName : 'djqd/werks',
								dataIndex : 'werks',
								allowBlank : false,
								fieldLabel : '工厂',
								colspan : 1
							},{
							xtype : 'textfield',
							name : 'djqd/matnr',
							allowBlank : false,
							dataIndex : 'matnr',
							readOnly:true,
							fieldLabel : '物料编码',
							colspan : 1
						},{
						    xtype : 'djqdCombo',
							name : 'djqd/cxmc',
							allowBlank : false,
							dataIndex : 'cxmc',
							fieldLabel : '车型名称',
							colspan : 1
						},{
						    xtype : 'textfield',
							name : 'djqd/cxdm',
							id :'cxdmxxx2',
                            hidden:true,
                            dataIndex : 'cxdm',
							fieldLabel : '车型代码',
							colspan : 1
						  }]
			}]
		});
	}




}
