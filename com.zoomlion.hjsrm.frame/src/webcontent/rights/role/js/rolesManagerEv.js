
/*
 * 角色管理事件处理
 */
com.zoomlion.hjsrm.role.RolesManagerMgr.prototype.initEvent = function() {

	//查询角色关联的操作员
	this.roleListPanel.mon(this.roleListPanel, 'rowclick', function(pgrid) {
		var roleid = pgrid.selModel.getSelected().get('roleid');
		var dataorgid = pgrid.selModel.getSelected().get('dataorgid');
		var orgid = pgrid.selModel.getSelected().get('orgid');
		Ext.apply(this.popWindow.currentRole,{'roleid':roleid});
		Ext.apply(this.popWindow.currentRole,{'orgid':orgid});
		if(dataorgid!=''&&dataorgid!='0'&&dataorgid!=0){
			Ext.apply(this.popWindow.currentRole,{'dataorgid':dataorgid});
		}else{
			Ext.apply(this.popWindow.currentRole,{'dataorgid':null});
		}
		this.operatorInRoleListPanel.doQuery(roleid);

	}, this);
   this.roleListPanel.mon(this.roleListPanel,'setresource',function(grid,record){
        this.resMgr.RoleSet(record.get('roleid'));
   },this);		
};
