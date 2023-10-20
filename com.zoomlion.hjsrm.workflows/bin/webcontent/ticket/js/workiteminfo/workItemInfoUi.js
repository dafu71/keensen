/**
 * 历史环节tab 信息
 * @param {} params
 */
com.zoomlion.hjsrm.workflows.WorkItemInfo = function(params) {
	this.params = params;
	this.initPanel = function() {
		this.createUserInfoPanel();
		this.createProfessionPanel();
		this.initInfoPanel();
		return new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					margins:'0',
					title : params.noTitle? '': '工单信息',
					panels : [this.initInfo]
				});
	};
	
	this.initInfoPanel = function() {
		this.initInfo = new Ext.Panel({
					layout : 'exborder',
					border : false,
					items : [this.userInfoPanel, this.professionPanel]
				});
	};

	// 创建客户信息模块
	this.createUserInfoPanel = function() {
		var _this = this;
		this.userInfoPanel = new Ext.fn.ViewPanel({
			title : '客户/项目信息',
			columns : 4,
			height : 120,
			region : 'north',
			border : false,
			collapsible : true,
			collapsed : false,
			titleCollapse : false,
			loadUrl : 'com.zoomlion.hjsrm.workflows.remain.RemainManager.queryRemainSheet.biz.ext',
			fields : [{
						name : "username",
						fieldLabel : "用户/项目名称"
					}, {
						name : 'orgname',
						fieldLabel : "归属"
					}, {
						name : "bookdate",
						fieldLabel : "预约时间"
					}, {
						name : "userid",
						fieldLabel : "用户/项目编号"
					}, {
						name : "createtime",
						fieldLabel : "业务受理时间"
					}, {
						name : "contactname",
						fieldLabel : "联系人"
					}, {
						name : "mobile",
						fieldLabel : "手机"
					}, {
						name : "contactphone",
						fieldLabel : "联系电话"
					}, {
						name : "gasaddress",
						fieldLabel : "用户地址",
						colspan : 2
					}, {
						name : "operator",
						fieldLabel : "执行人"
					}, {
						name : "optrcontact",
						fieldLabel : "执行人手机"
					}, {
						xtype : "hidden",
						name : "pkid"
					}, {
						xtype : "hidden",
						name : "applyinfopkid"
					}, {
						xtype : "hidden",
						name : "worklistinfopkid"
					}, {
						xtype : "hidden",
						name : "workitemid"
					}, {
						xtype : "hidden",
						name : "activitydefid"
					}, {
						xtype : "hidden",
						name : "processinstid"
					}, {
						xtype : "hidden",
						name : "busitype"
					}, {
						xtype : "hidden",
						name : "batchid"
					}, {
						xtype : "hidden",
						name : "state"
					}, {
						xtype : "hidden",
						ref : '../oldaddrdetail',
						name : "addrdetail"
					}]
		});
	}
	
	// 创建业务信息
	this.createProfessionPanel = function() {
		TicketFunctionMgr = new Ext.util.MixedCollection(true);
		var sheetParams = new Object();
		Ext.apply(sheetParams, this.params);
		this.professionPanel = new Ext.ex.WorkShtTabPanel({
					region : 'center',
					border : false,
					readPanel:true,//历史面板 
					sheetUrl : sheetParams.url,
					sheetParams : sheetParams
				});
	}
}
