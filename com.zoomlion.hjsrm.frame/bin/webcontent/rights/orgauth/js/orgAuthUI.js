com.zoomlion.hjsrm.rights.orgAuthMgr = function() {
	this.initPanel = function() {
		this.createListPanel();
		this.createAuthTreePanel();
		this.lay = new Ext.fn.fnLayOut({
					renderTo : 'orgAuthMgr',
					// title:'机构授权',
					layout : 'we',
					panels : [this.gridPanel, this.authTreePanel]
				});
		return this.lay;
	};
	this.createListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel();
		this.gridPanel = new Ext.fn.ListPanel({
			title : '公司列表',
			width : 450,
			sm : selModel,
			hsPage : false,
			store : new Ext.data.JsonStore({
				autoLoad : true,
				url : 'com.zoomlion.hjsrm.frame.rights.orgauth.OrgAuthManage.queryCompanys.biz.ext',
				fields : [{
							name : 'orgid'
						}, {
							name : 'orgcode'
						}, {
							name : 'orgname'
						}],
				root : 'data'
			}),
			columns : [new Ext.grid.RowNumberer(), {
						dataIndex : 'orgname',
						header : '公司名称',
						sortable : false,
						width : 230
					}, {
						dataIndex : 'orgcode',
						header : '公司编码',
						sortable : false,
						width : 170
					}]
		});
	};

	this.createAuthTreePanel = function() {
		var _this = this;
		this.authTreePanel = new Ext.tree.TreePanel({
			renderTo : document.body,
			title : '应用资源授权',
			text : '应用资源授权',
			checkModel : 'cascade', // 对树的级联多选
			onlyLeafCheckable : false,// 对树所有结点都可选
			animate : false,
			rootVisible : false,
			autoScroll : true,
			leafOnly : true,
			isOver : true,
			loader : new Ext.tree.TreeLoader({
				listeners : {
					beforeload : function(tree, node) {
						if (_this.gridPanel
								&& _this.gridPanel.getSelectedRecord()) {
							var sels = _this.gridPanel.getSelectedRecord();
							this.baseParams.orgid = sels.get("orgid");
						} else {
							this.baseParams.orgid = null;
						}
						this.baseParams.parentid = node.id;

					}
				},
				autoLoad : false,
				url : 'com.zoomlion.hjsrm.frame.rights.orgauth.OrgAuthManage.loadResAuth.biz.ext',
				baseAttrs : {
					uiProvider : Ext.ux.TreeCheckNodeUI
				},
				processResponse : function(response, node, callback, scope) {
					var json = response.responseText;
					try {
						var o = response.responseData || Ext.decode(json);
						o = o.data;
						node.beginUpdate();
						for (var i = 0, len = o.length; i < len; i++) {
							if (o[i].checked == "0" || o[i].checked == "false") {
								o[i].checked = false;
							}
							if (o[i].checked == "1" || o[i].checked == "true") {
								o[i].checked = true;
							}
							if (o[i].leaf == "y" || o[i].leaf == "true") {
								o[i].leaf = true;
							}
							if (o[i].leaf == "n" || o[i].leaf == "false") {
								o[i].leaf = false;
							}
							var n = this.createNode(o[i]);
							if (n) {
								node.appendChild(n);
							}
						}
						node.endUpdate();
						this.runCallback(callback, scope || node, [node]);
					} catch (e) {
						this.handleFailure(response);
					}
				}
			}),
			root : new Ext.tree.AsyncTreeNode({
						id : '0'
					}),
			tbar : [{
						text : '收起',
						scope : this,
						iconCls : 'icon-collapse-all',
						handler : this.doCollapseAll
					}, {
						text : '展开',
						scope : this,
						iconCls : 'icon-expand-all',
						handler : this.doExpandAll
					}, {
						text : '保存',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSaveRes
					}]
		});

	}
}