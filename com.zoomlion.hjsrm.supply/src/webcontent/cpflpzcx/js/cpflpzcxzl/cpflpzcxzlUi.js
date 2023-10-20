/*
 * @author 刘鑫
 */
com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxzlMgr = function() {

	this.initPanel = function() {
		this.initListPanel();
	}

	this.initListPanel = function() {

		var selModel = new Ext.grid.CheckboxSelectionModel({});

		var saveUrl = 'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.savecplbzlxl.biz.ext';

		var tbar = new Ext.Toolbar({
					items : [{
								xtype : 'button',
								text : "新增",
								rescode : '00504',
								iconCls : 'icon-application_add',
								scope : this,
								handler : this.onAdd
							}, "-", {
								xtype : 'button',
								text : "保存",
								rescode : '00504',
								iconCls : 'icon-page_save',
								scope : this,
								handler : this.onSave
							}, "-", {
								xtype : 'button',
								text : "删除",
								rescode : '00504',
								iconCls : 'icon-application_delete',
								scope : this,
								handler : this.onDel
							}]
				});

		var colModel = new Ext.grid.ColumnModel([selModel, {
					dataIndex : 'id',
					header : 'ID',
					hidden : true
				}, {
					dataIndex : 'sjdm',
					header : '上级代码',
					align : 'right',
					width : 80
				}, {
					dataIndex : 'fldm',
					header : '类型代码',
					sortable : true,
					align : 'left',
				    editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							allowBlank : true,
							regex:/^[0-9]\d*$/,
							regexText:"不合法的数据格式"
							
						}))
				}, {
					dataIndex : 'flmc',
					header : '中类名称',
					sortable : true,
					editor : new Ext.grid.GridEditor(new Ext.form.TextField({
								allowBlank : false
							}))
				}, {
					dataIndex : 'sjid',
					header : '上级ID',
					hidden : true
				}, {
					dataIndex : 'ssdj',
					header : '所属等级',
					hidden : true
				}]);

		var store = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.querycpflpzcxzxl.biz.ext',
			root : 'data',
			autoLoad : false,
			fields : [{
						name : 'id'
					}, {
						name : 'fldm'
					}, {
						name : 'flmc'
					}, {
						name : 'sjid'
					}, {
						name : 'ssdj'
					}, {
						name : 'sjdm'
					}]
		})

		this.listPanel = new Ext.fn.EditListPanel({
					title : '产品中类维护列表',
					saveUrl : saveUrl,
					cm : colModel,
					sm : selModel,
					store : store,
					width : 400,
					id:zllistPanel,
					tbar : tbar,
					hsPage : false,
					subAll : false,
					viewConfig : {
						forceFit : true
					}
				});

	}
}