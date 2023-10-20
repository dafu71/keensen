/*
 * 创建机构面板
 */
com.zoomlion.hjsrm.org.OrgMgr = function() {
	this.initPanel = function() {
		// 初始化代码
      this.lay = new Ext.fn.fnLayOut({
          layout : 'we',
          border : false,
          renderTo : 'orgDiv',
          panels : [this.createOrgTreepanel(), this.createOrgMgrPanel()]
        });
      
        return this.lay;
	};
    /*
     * 创建组织树面板
     */
	this.createOrgTreepanel = function() {
       this.orgTreeLoader =  new com.zoomlion.hjsrm.org.OrgSingleLoader();
       this.orgTreeMenu = this.orgTreeMenu || new Ext.menu.Menu({
            items:[ {iconCls : 'add-org', text : '新增机构',scope:this,handler:this.onAddOrg},
                    {iconCls : 'delete-org', text : '注销机构',scope:this,handler:this.onDelOrg},
                    {iconCls : 'modify-org', text : '修改机构',scope:this,handler:this.onModifyOrg},
                    {iconCls : 'add-emp', text : '新增员工',scope:this,handler:this.onAddEmp},
                    {iconCls : 'reflesh', text : '刷新',  scope:this,handler:this.onReflesh}
                   ]
       });
       this.containerMenu = new Ext.menu.Menu({
            items:[{iconCls : 'add-org',text : '新增机构',scope:this,handler:this.onAddRootOrg}]
            
       });
	   this.orgTree = new com.zoomlion.hjsrm.org.OrgIndexTree({
					width : 240,
					split : true,
					contextMenu : this.orgTreeMenu,
					containerMenu : this.containerMenu,
					loader : this.orgTreeLoader,
					collapsible : true
				});
		return this.orgTree;
	};
	/*
	 * 创建机构管理面板(主面板)
	 */
    this.createOrgMgrPanel = function(){
        this.orgMgrPanel = new Ext.fn.TabPanel({
        	activeTab:0,
          	items:[this.createDeptMgrPanel(),this.createEmpMgrpanel()]
        });
        return this.orgMgrPanel;
    };
    /*
     * 创建部门面板
     */
     this.createDeptMgrPanel = function(){
     this.deptMgr = new com.zoomlion.hjsrm.org.departmentMgr(this.lay);
      this.deptMgrPanel =  this.deptMgr.initPanel();
      this.deptMgr.initEvent();
      this.deptMgr.orgTree = this.orgTree;
      return  this.deptMgrPanel;
    };
    /*
     * 创建员工面板管理页面
     */
    this.createEmpMgrpanel = function(){
      this.empMgr = new com.zoomlion.hjsrm.org.empMgr(this.lay);
      this.empMgrPanel =this.empMgr.initPanel();
      this.empMgr.initEvent();
      return this.empMgrPanel;
    };
};