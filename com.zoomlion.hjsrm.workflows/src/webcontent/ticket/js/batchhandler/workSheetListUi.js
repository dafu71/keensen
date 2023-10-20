/**
 * 工单批量处理
 * @param {} params
 */
com.zoomlion.hjsrm.workflows.TickeBatchHandler = function(params) {
	this.params = params;
	this.initPanel = function() {
		this.createUserinfoList();	
		this.createProfessionPanel();
		this.initInfoPanel();
		this.workSheetInfoPanel = new Ext.fn.fnLayOut({
					layout : 'fit',
					renderTo : divId,
					border : false,
					title : '工单信息',
					panels : [this.initInfo]
				});
	};
	this.destroy = function(){
		
	}
	this.initInfoPanel = function() {
		this.initInfo = new Ext.Panel({
					layout : 'exborder',
					border : false,
					items : [this.userInfoList,this.professionPanel]
				});
	};
	this.createUserinfoList = function(){
		this.userInfoList = new Ext.fn.ListPanel({
			buttonText : '传递',
			scope:this,
			title:'客户/项目信息',
			actionHandler:function(){
				this.doCheckFun();
			},
			height : 220,
			region : 'north',
			border : false,
			hsPage:false,
			collapsible : true,
			collapsed : false,
			titleCollapse : false,
			viewConfig:{forceFit:true},
			tbar : ['->', '-', {
						text : '传递',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.doCheckFun
					}],
			columns : [{
						dataIndex : "userid",
						header : "用户/项目编号"
					}, {
						dataIndex : "username",
						header : "用户/项目名称"
					}, {
						dataIndex : 'orgname',
						header : "归属"
					}, {
						dataIndex : "bookdate",
						header : "预约时间"
					}, {
						dataIndex : "createtime",
						header : "业务受理时间"
					}, {
						dataIndex : "gasaddress",
						header : "用户地址"
					}],
			store: new Ext.data.JsonStore({
				url:'com.zoomlion.hjsrm.workflows.remain.RemainManager.queryRemainWorkListItem.biz.ext',
				root:'data',
				fields:['username','orgname','bookdate','userid',
						'gasaddress','createtime','pkid',
						'applyinfopkid','worklistinfopkid','workitemid',
						'activitydefid','processinstid','busitype'
				]
			})		
		});
	}


	// 创建业务信息
	this.createProfessionPanel = function() {
		TicketFunctionMgr =  new Ext.util.MixedCollection(true);
		this.professionPanel = new Ext.ex.WorkShtTabPanel({
					region : 'center',
					border : false,
					sheetUrl : this.params.url,
					sheetParams : this.params
				});
	}
}
