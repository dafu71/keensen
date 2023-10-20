

com.zoomlion.hjsrm.securitylog.SecuritylogMgr = function(){

	this.initPanel = function(){
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
				layout:'ns',
				border:false,				
				renderTo:'securitylogMgr',
				panels:[this.queryPanel,this.listPanel]
		});
	}
	
	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
						height:180,
						width:500,
						columns:2,
						border:true,
						title:'日志查询',
						fields:[{
										xtype : 'textfield',
										name : 'query/operator',
										fieldLabel : '操作人员',
										colspan : 1
									},{
										name : 'query',
										fieldLabel : '时间范围',
										xtype : 'dateregion',
										name : 'query',
										colspan : 1
									},{
										xtype : 'dictcheckboxgroup',
										name : 'query/opttype',
										fieldLabel : '操作类型',
										dictData:SRM_AC_ACOPTTYPE,
										colspan : 2,
										columns:6,
										value:'1,2,3,4,5,6,7,8'
									}]
						});	
	}


       
   		
   		
	this.initListPanel = function(){
		var selModel =  new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
						title:'日志列表',
						hsPage:true,
						selModel:selModel,
						autoExpandColumn:4,
						autoExpandMax:430,
						columns : [new Ext.grid.RowNumberer(),
								  {dataIndex : 'operatorname',header : '操作员名称'},
								 {dataIndex : 'userid',header : '操作员工号',width:80},
								 {dataIndex : 'opttype',header : '操作类型',width:80},
								 {dataIndex : 'operdesc',header : '操作描述',width:250},
								 {dataIndex : 'opertime',header : '操作时间',width:130},
								 {dataIndex : 'clientip',header : '登录IP',width:100},
								  {dataIndex : 'orgname',header : '所属公司',width:100}
								 ],
						store :  new Ext.data.JsonStore({
									url : 'com.zoomlion.hjsrm.frame.tools.securitylog.SecurityLogManage.querySecurityLogs.biz.ext',
									root : 'data',
									autoLoad:true,
									totalProperty : 'totalCount',
									fields : [{name : 'userid' }, {name : 'operatorname'}, 
											{name : 'opttype'}, {name : 'opertime'}, {name : 'clientip'},
											{name : 'operdesc'}, {name : 'exceptionmsg'},{name:'dataorgid'},{name:'orgname'}]
										})
						});
	}



}