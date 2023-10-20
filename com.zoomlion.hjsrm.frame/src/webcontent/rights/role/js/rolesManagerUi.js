
/*
 * 角色管理
 */
com.zoomlion.hjsrm.role.RolesManagerMgr = function() {

	this.initPanel = function() {
		
		var roles = new com.zoomlion.hjsrm.role.RolesMgr();//角色管理
		roles.initPanel();
		roles.initEvent();
		
		var operatorInRole = new com.zoomlion.hjsrm.role.OperatorInRoleMgr();//角色操作员管理
		operatorInRole.initPanel();
		operatorInRole.initEvent();
        
		this.roleQueryPanel = roles.queryPanel;
		this.roleListPanel= roles.listPanel;
		this.operatorInRoleListPanel = operatorInRole.listPanel;
		this.popWindow = operatorInRole.popWindow;

		return new Ext.fn.fnLayOut({
				layout:'new',
				border:false,				
				renderTo:'rolesMgr',
				panels:[this.roleQueryPanel,this.operatorInRoleListPanel,this.roleListPanel]
		});

	};

}