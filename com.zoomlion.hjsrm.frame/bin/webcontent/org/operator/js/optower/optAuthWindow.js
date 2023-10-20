com.zoomlion.hjsrm.opt.optAuthMgr = function() {
	this.initPanel = function() {
		this.getOptAuthSetWin();
		this.optauthgrid = this.optAuthWin.getComponent('colContainer').getComponent('optauthgrid');
		this.optauthtree = this.optAuthWin.getComponent('colContainer').getComponent('optAuthTreePanel');
	}
	this.getOptAuthSetWin = function() {
		this.optAuthWin = new Ext.Window({
			title : '特权维护',
			// closeAction : 'hide', // 默认窗口close
			modal : true,// 遮罩效果
			collapsible : true,// 允许上下收缩
			maximizable : true,// 允许最大化
			constrain : true,
			width : 1000,
			// height : 500,
			header : true,// 创建头部
			maximizable:false,//禁用最大化按钮
			id : 'optAuthSet',
			layout : 'form',
			buttonAlign : 'center',
			items : [{
				layout : 'column',
				itemId : 'colContainer',
				border : false,
				height : 500,
				items : [{
					xtype : 'extreePanel',
					id : 'optAuthTreePanel',
					border : false,
					columnWidth : .30,
					text : '系统资源菜单',
					title : '系统资源菜单',
					 rootVisible: false,
					checkModel : 'parentCascade',
					height : 500,
					loadUrl : 'com.zoomlion.hjsrm.frame.rights.resource.ResourceManage.queryResourceIsMenuByOrg.biz.ext',
					rootNode : 'data', // 树的根节点
					parentField : 'parentresid', // 父节点对应的字段
					childField : 'resid', // 子节点对应的字段
					textField : 'reslabel', // 用于节点名称显示的字段
					leafOnly : true
						// 是否只能选中叶子节点
				}, {
					xtype : 'edittreegrid',
					itemId : 'optauthgrid',
					title : '资源授权管理',
					columnWidth : .70,
					border : false,
					height : 500,
					enableDD : true,
					delConfirm : '系统提示',
					delConfirmMsg : '确定删除此授权信息?',
					depth : 100, // 最大节点深度
					loader : new Ext.ux.tree.TreeGridLoader({
						root : 'data', // 树的根节点
						parentField : 'parentresid', // 父节点对应的字段
						childField : 'resid', // 子节点对应的字段
						textField : 'reslabel', // 用于节点名称显示的字段
						dataUrl : 'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.queryEmpOperresByOPerid.biz.ext',
						baseParams : {
							method : 'load'
						}
					}),
					columns : [{
								header : '系统资源菜单',
								dataIndex : 'reslabel',
								width : 300
							}, {
								xtype : 'dictcolumn',
								header : '授权类型',
								dataIndex : 'authtype',
								dictData : ABF_FUNCAUTHTYPE,
								width : 100,
								editor : new Ext.bz.dict.DictComboBox({
											fieldLabel : '',
											dataIndex : 'authtype',
											hiddenName : 'authtype',
											columns : 1,
											dictData : ABF_FUNCAUTHTYPE
										})
							}, {
								header : '开始时间',
								dataIndex : 'startdate',
								width : 100,
								xtype : 'datecolumn',
								format : 'Y/m/d',
								editor : new Ext.form.DateField({
											emptyText : '请选择',
											allowBlank : false,
											format : 'Y/m/d'// 日期格式
										})
							}, {
								header : '结束日期',
								dataIndex : 'enddate',
								width : 100,
								xtype : 'datecolumn',
								format : 'Y/m/d',
								editor : new Ext.form.DateField({
											emptyText : '请选择',
											allowBlank : false,
											format : 'Y/m/d'// 日期格式
										})
							}, {
								header : '授权管理',
								width : 100,
								buttons : ['update', 'remove'],
								buttonText : ['编辑', '删除']
							}]
				}]
			}],
			buttons : [{
						text : '保存',
						scope : this,
						handler : this.onSave
					}, {
						text : '关闭',
						handler : function() {
							Ext.getCmp('optAuthSet').close();
						}
					}]

		})
	}

}
