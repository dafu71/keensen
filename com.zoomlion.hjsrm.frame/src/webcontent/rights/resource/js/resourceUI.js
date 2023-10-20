com.zoomlion.hjsrm.rights.resourceMgr = function() {
	this.initPanel = function() {
		this.createResTreePanel();
		this.createResEditPanel();
		return new Ext.fn.fnLayOut({
					renderTo : 'resourceMgr',
					layout : 'we',
					border : false,
					panels : [this.resTreePanel, this.editPanel]
				});
	}, this.createResTreePanel = function() {
		this.treeMenu = new Ext.menu.Menu({
					items : [{
								iconCls : 'add-org',
								id:'myadd',
								text : '新增资源',
								scope : this,
								handler : this.onAdd
							}, {
								iconCls : 'modify-org',
								text : '修改资源',
								scope : this,
								handler : this.onEdit
							}, {
								iconCls : 'delete-org',
								text : '删除资源',
								scope : this,
								handler : this.onDel
							}]
				});
		this.resTreePanel = new Ext.fn.ExTreePanel({
			title : '资源列表',
			margins : '5 5 5 50',
			width : 300,
			loadUrl : 'com.zoomlion.hjsrm.frame.rights.resource.ResourceManage.loadAllResources.biz.ext',
			rootNode : 'data',
			parentField : 'parentresid',
			childField : 'resid',
			textField : 'reslabel',
			checkModel : 'childCascade',
			enableDD : true,
			contextMenu : this.treeMenu,
			isChecked : false,
			rootVisible : false,
			leafOnly : true,
			border : true,
			split : true
		});
	};
	this.createResEditPanel = function() {
		this.editPanel = new Ext.fn.InputPanel({
			title : '资源维护',
			baseCls : "x-panel",
			saveUrl : 'com.zoomlion.hjsrm.frame.rights.resource.ResourceManage.saveResource.biz.ext',
			columns : 2,
			fields : [{
						xtype : 'hidden',
						dataIndex : 'nodeid',
						name : 'res/nodeid'
					}, {
						xtype : 'hidden',
						dataIndex : 'resid',
						name : 'res/resid'
					}, {
						xtype : 'hidden',
						dataIndex : 'parentresid',
						name : 'res/parentresid'
					}, {
						xtype : 'hidden',
						dataIndex : 'reslevel',
						name : 'res/reslevel'
					}, {
						name : 'res/resname',
						dataIndex : 'resname',
						allowBlank : false,
						maxLength : 50,
						fieldLabel : '资源名称'
					}, {
						dataIndex : 'rescode',
						fieldLabel : '资源编码',
						maxLength : 30,
						allowBlank : false,
						name : 'res/rescode',
						readOnly : true
					}, {
						dataIndex : 'parentresname',
						fieldLabel : '父级资源',
						maxLength : 30,
						name : 'res/parentresname',
						readOnly : true
					}, {
						dataIndex : 'resseq',
						fieldLabel : '资源序列',
						maxLength : 1000,
						name : 'res/resseq',
						readOnly : true
					}, {
						dataIndex : 'restype',
						fieldLabel : '资源类型',
						maxLength : 30,
						hiddenName : 'res/restype',
						allowBlank : false,
						xtype : 'dictcombobox',
						dictData : AC_RESTYPE
					}, {
						xtype : 'numberfield',
						dataIndex : 'displayorder',
						fieldLabel : '资源排序',
						maxLength : 2,
						name : 'res/displayorder'
					}, {
						xtype : 'checkbox',
						name : 'res/isbizmap',
						dataIndex : 'isbizmap',
						fieldLabel : '是否导航菜单'
					}, {
						dataIndex : 'isleaf',
						fieldLabel : '是否叶子节点',
						maxLength : 30,
						name : 'res/isleaf',
						xtype : 'checkbox'
					}, {
						name : 'res/respath',
						dataIndex : 'respath',
						fieldLabel : '资源地址',
						maxLength : 100,
						colspan : 2
					}, {
						xtype : 'textarea',
						name : 'res/resdesc',
						dataIndex : 'resdesc',
						fieldLabel : '资源描述',
						maxLength : 300,
						colspan : 2
					}],
			buttons : [{
						text : "保存",
						ref : "../queryButton",
						iconCls : "icon-application_form_magnify",
						scope : this,
						handler : this.onSave
					}, {
						text : "重置",
						ref : "../restButton",
						iconCls : "icon-application_reset",
						scope : this,
						handler : this.onReset
					}]
		});
	};
}