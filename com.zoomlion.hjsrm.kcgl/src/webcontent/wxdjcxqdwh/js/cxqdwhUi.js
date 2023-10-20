/*
 * 示例ui @author rye
 */
com.zoomlion.hjsrm.kcgl.CxqdwhMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'cxqdwhMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					width : 500,
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 车型清单查询 】', 
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : 'textfield',
								name : 'condition/cxdm',
								fieldLabel : '车型代码'
							},{
								xtype : 'textfield',
								name : 'condition/cxmc',
								fieldLabel : '车型名称'
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 车型清单列表 】',
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
			delUrl : 'com.zoomlion.hjsrm.kcgl.kcglDaji.delwxdjcxqd.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'werks',
						header : '工厂'
					},{
						dataIndex : 'cxdm',
						header : '车型代码'
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
				url : 'com.zoomlion.hjsrm.kcgl.kcglDaji.querywxdjcxqd.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'werks'
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
			title : '新增车型类别',
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
				saveUrl : 'com.zoomlion.hjsrm.kcgl.kcglDaji.addwxdjcxqd.biz.ext',
				fields : [ {
								xtype : 'factorycombobox',
								defaultValue : '3000',
								hiddenName : 'cxqd/werks',
								allowBlank : false,
								fieldLabel : '工厂',
								colspan : 1
							},{
							xtype : 'textfield',
							name : 'cxqd/cxdm',
							allowBlank : false,
							readOnly:true,
							fieldLabel : '车型代码',
							colspan : 1
						},{xtype : 'cxmcCombo',
							name : 'cxqd/cxmc',
							allowBlank : false,
							fieldLabel : '车型名称',
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
			title : '编辑车型清单',
			height : 120,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 3,
				loadUrl : 'com.zoomlion.hjsrm.kcgl.kcglDaji.loadwxdjcxqd.biz.ext',
				saveUrl : 'com.zoomlion.hjsrm.kcgl.kcglDaji.addwxdjcxqd.biz.ext',
				fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								hiddenName : 'cxqd/werks',
								dataIndex : 'werks',
								allowBlank : false,
								fieldLabel : '工厂',
								colspan : 1
							},{
							xtype : 'textfield',
							name : 'cxqd/cxdm',
							allowBlank : false,
							dataIndex : 'cxdm',
							readOnly:true,
							fieldLabel : '车型代码',
							colspan : 1
						},{
						    xtype : 'cxmcCombo',
							name : 'cxqd/cxmc',
							allowBlank : false,
							dataIndex : 'cxmc',
							fieldLabel : '车型名称',
							colspan : 1
						}]
			}]
		});
	}




}
