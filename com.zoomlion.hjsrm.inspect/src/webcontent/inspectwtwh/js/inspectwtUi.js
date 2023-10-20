/*
 * 示例ui @author rye
 */
com.zoomlion.hjsrm.inspect.Inspectwtmgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'inspectwtmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 130,
					width : 500,
					columns : 3,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 质检故障查询 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								columns : 1,
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : 'textfield',
								columns : 1,
								name : 'condition/zjwtid',
								fieldLabel : '故障代码'
							}, {
								xtype : 'textfield',
								columns : 1,
								name : 'condition/zjwtms',
								fieldLabel : '故障描述'
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 质检故障列表 】',
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
			delUrl : 'com.zoomlion.hjsrm.inspect.inspectwtwh.delinspectwtwh.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'werks',
						header : '工厂'
					}, {
						dataIndex : 'zjwtid',
						header : '故障代码'
					}, {
						dataIndex : 'zjwtms',
						header : '故障描述'
					}, {
						dataIndex : 'tranu',
						header : '维护人'
					}, {
						dataIndex : 'trant',
						header : '维护时间'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.queryinspectwtwh.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : 'totalCount',
						fields : [ {
									name : 'werks'
								}, {
									name : 'bukrs'
								}, {
									name : 'zjwtid'
								}, {
									name : 'zjwtms'
								},  {
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
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增质检故障',
			height : 120,
			width : 800,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
						xtype : 'inputpanel',
						pgrid : this.listPanel,
						columns : 2,
						// saveUrl :
						// 'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.addAnnounce.biz.ext',
						saveUrl : 'com.zoomlion.hjsrm.inspect.inspectwtwh.addinspectwtwh.biz.ext',
						fields : [{
									xtype : 'factorycombobox',
									defaultValue : '3000',
									hiddenName : 'zjwtwh/werks',
									allowBlank : false,
									fieldLabel : '工厂',
									colspan : 1
								},{
									xtype : 'textfield',
									name : 'zjwtwh/zjwtms',
									fieldLabel : '故障描述',
									allowBlank:false,
									colspan : 1
								}]
					}]
		});
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '编辑质检故障',
			height : 120,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 3,
				loadUrl : 'com.zoomlion.hjsrm.inspect.inspectwtwh.loadinspectwtwh.biz.ext',
				saveUrl : 'com.zoomlion.hjsrm.inspect.inspectwtwh.saveinspectwtwh.biz.ext',
				fields : [{
							xtype : 'factorycombobox',
							defaultValue : '3000',
							hiddenName : 'zjwtwh/werks',
							dataIndex : 'werks',
							allowBlank : false,
							fieldLabel : '工厂',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'zjwtwh/zjwtid',
							dataIndex : 'zjwtid',
							fieldLabel : '故障代码',
							readOnly : true,
							colspan : 1						
						}, {
							xtype : 'textfield',
							name : 'zjwtwh/zjwtms',
							dataIndex : 'zjwtms',
							fieldLabel : '故障描述',
							colspan : 1
						}]
			}]
		});
	}

}
