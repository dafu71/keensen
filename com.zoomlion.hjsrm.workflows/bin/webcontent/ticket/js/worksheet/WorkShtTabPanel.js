Ext.namespace('Ext.ex');
/**
 * 
 * @class Ext.ex.WorkSheetLoadPanel
 * @extends Ext.Panel
 * <p> 工单加载面板
 * <p>用法：
 * <pre><code>
 * {
	respath : '',
	fnKey : Ext.id(),
	xtype : 'workshtloadpanel',
	sheetParams : this.sheetParams
}
 * </code></pre>
 */
Ext.ex.WorkShtLoadPanel = Ext.extend(Ext.Panel, {
			fnKey : undefined,
			layout : 'fit',
			respath : undefined,
			sheetParams : undefined,
			initComponent : function() {
				Ext.ex.WorkShtLoadPanel.superclass.initComponent.call(this);
				this.mon(this, 'activate', function(cmp) {
					var isLoad = this.fireEvent("beforetabload", this);
						if (isLoad) {
							this.loadPanel(this.fnKey, this.respath);
						}
				}, this);
				this.enableBubble('beforetabload');
			},
			/**
			 * 加载面板显示数据
			 * 
			 * @param {String}
			 *            fnKey 存放key
			 * @param {String}
			 *            sheetUrl 资源路径
			 */
			loadPanel : function(fnKey, sheetUrl) {
				this.removeAll(true);
				if(this.viewMgr && this.viewMgr.destroy){//销毁窗口
					this.viewMgr.destroy();
				}
				if (sheetUrl) {
					this.showIndicator();
					this.load({
								url : contextPath + sheetUrl,
								callback : function(el, success, response, opt) {
									this.hideIndicator();
									var newfn = TicketFunctionMgr.get(fnKey);
									if (newfn) {
										this.callConStructFn(newfn);// 重新构建
									}
								},
								params : {
									fnKey : fnKey
								},
								scripts : true,
								scope : this
							})
				}
			},
			showIndicator:function(){
				var loadingBox = document.getElementById('loading-mask');
						if(loadingBox){
							loadingBox.style.display = "";
					}
			},
			hideIndicator:function(){
				var loadingBox = document.getElementById('loading-mask');
				if(loadingBox){
					loadingBox.style.display = "none";
				}
			},
			/**
			 * 调用构造函数 初始化面板 初始化事件
			 * 
			 * @param {}
			 *            fn
			 */
			callConStructFn : function(fn) {
				if (Ext.isFunction(fn)) {
					var readOnly = false;
					if(!this.enableSave){
						readOnly = true;
					}
					this.viewMgr = new fn(this.sheetParams,readOnly);
					var mgr = this.viewMgr;
					if (mgr.initPanel) {
						var layout = mgr.initPanel();// 传递参数
						if (layout) {// 添加到容器中
							this.add(layout);
							this.doLayout();
						}
					}
					if (mgr.initEvent) {
						mgr.initEvent();
					}
					if (mgr.initData) {
						mgr.initData();
					}
					if(!this.enableSave && mgr.disableAllItems){
						mgr.disableAllItems();
					}
				}
			}
		});
Ext.reg('workshtloadpanel',Ext.ex.WorkShtLoadPanel);
/**
 * 
 * @class Ext.ex.WorkShtTabPanel
 * @extends Ext.Panel
 * <p>工单环节配置页面
 */
Ext.ex.WorkShtTabPanel = Ext.extend(Ext.Panel, {
	plain : true,
	layout:'fit',
	border:false,
	model : "local",//or local
	sheetParams:null,
	/**
	 * @cfg {boolean}
	 * 是否只读面板  
	 */
	readPanel:false,
	autoScroll : true,
	tabData:null,
	initComponent : function() {
		//如业务类型为民现零星报装、环节为点火，则取项目号下的用户号放到工单中，以复用业务处理的点火环节tab页
		if('BS201' == this.sheetParams.busitype && 'BS20107' == this.sheetParams.activityId){
			var result = Ext.ex.XMLHttpRequestEx.synchRequest(
							'post',
							'com.zoomlion.hjsrm.pub.businessclib.install.common.InstallcommonManager.getUserinfoByCustid.biz.ext?'
							+ encodeURI('custid='+this.sheetParams.userId));
			var ret = Ext.decode(result);
			if (ret.success) {
				this.sheetParams.userId = ret.user.userid;
			}
		}
		
		if(this.sheetParams.url && this.sheetParams.url != "null" && "" != this.sheetParams.url){//自定义配置
			this.tabData = [{reslabel:this.sheetParams.activityName,
							 respath:this.sheetParams.url,
							 resid:this.sheetParams.activityInstId
							}]
		}else{
			this.tabData=$cfg$
		}
		this.loadMenuData(this.tabData);
		Ext.ex.WorkShtTabPanel.superclass.initComponent.call(this);
		this.singleItem = this.getComponent('singleItem');
		if(this.singleItem){
			this.mon(this.singleItem,'afterrender',function(){
			this.singleItem.fireEvent('activate',this.singleItem);
		},this);
		}
		//	如果校验成功才允许激活
		this.multiTab = this.getComponent('multiTab');
		if(this.multiTab){
			this.multiTab.mon(this.multiTab,'beforetabchange',function(tabPanel,newTab,currentTab){
				if(this.readPanel){//历史面板无需校验
					return true;
				}
				return this.checkRule(newTab);
			},this);
		}
	},
	/**
	 * 校验是否能激活
	 * @param {} pageCfg
	 * @return {Boolean}
	 */
	checkRule : function(pageCfg){
		var sheetCfg = pageCfg.sheetParams;
		var paramObj = {};
		for (var attr in sheetCfg) {
			if(sheetCfg.hasOwnProperty(attr)){
				paramObj['busiParams/'+attr] = sheetCfg[attr];	
			}
		}
		var paramStr = Ext.urlEncode(paramObj);
		if(pageCfg.isCheck === 'true' && pageCfg.checkUrl != 'null'){
			var result = Ext.ex.XMLHttpRequestEx.synchRequest("POST", pageCfg.checkUrl + '?'+paramStr);
			var ret = Ext.decode(result);
			if(ret.success){//未发生异常
				if (ret.data.success) {
					return true
				} else {
					//pageCfg.respath = '/busi/common/busiCheckFailFlow.jsp';
					Ext.Msg.alert("系统提示", ret.data.msg);
					return false;
				}
			}else{//异常
				Ext.Msg.show({
					title:'提示',
					icon:Ext.Msg.ERROR,
					msg:'系统发生错误请与管理员联系',
					buttons:Ext.Msg.OK
				})
				return false;
			}
			
		}else if(pageCfg.isCheck === 'true' && pageCfg.checkUrl == 'null'){
				Ext.Msg.alert("系统提示", "业务环节配置错误，请重试!");
				return false;
		}
		return true;
	},
	/**
	 * 构造数据
	 * @param {} menuData
	 */
	loadMenuData : function(menuData) {
		if (Ext.isArray(menuData)) {
			var menuMap = this.proccessMenu(menuData);
			this.buildMenu(menuMap, menuData)
		}
	},
	/**
	 * 获取激活项
	 * @return {}
	 */
	getActiveTab : function() {
		var activeTab = Ext.ex.WorkShtTabPanel.superclass.getActiveTab.call(this);
		return activeTab.getActiveTab();
	},
	/**
	 * tab构建
	 * @param Object[] data -> [{reslabel:'',respath:'',resid:''}]
	 * @return {}
	 */
	proccessMenu : function(data) {
		var menuMap = new Ext.util.MixedCollection();
		Ext.each(data, function(obj) {
					var tab = {
						title : obj.reslabel,
						autoScroll : true,
						respath:obj.respath,
						fnKey:Ext.id('workitem'),
						enableSave:this.readPanel?false:true,
						xtype:"workshtloadpanel",
						sheetParams:this.sheetParams
					};
					Ext.applyIf(tab, obj);
					menuMap.add(obj.resid + "", tab)
				}, this);
		return menuMap
	},
	/**
	 * 销毁窗体
	 * @param {}
	 * @return {}
	 */
	destroy : function (){
		var singleItem = this.getComponent('singleItem'); 
		if(singleItem && singleItem.viewMgr && singleItem.viewMgr.destroy){
			singleItem.viewMgr.destroy();
		}else{
			var tabPanel = this.items.get(0);
			tabPanel.items.each(function(pl){
			if(pl.viewMgr && pl.viewMgr.destroy){
				pl.viewMgr.destroy();
			}
			},this);
		}
		Ext.ex.WorkShtTabPanel.superclass.destroy.call(this);
	},
	/**
	 * 构造workshtpanel
	 * @param {} menuMap
	 * @param {} data
	 */
	buildMenu : function(menuMap, data) {
		this.items=[];
		if(menuMap && menuMap.getCount()>1){
			var tabItems = [];
			Ext.each(data, function(obj) {
				var topTab = menuMap.get(obj.resid);
			  	tabItems.push(topTab);
			}, this);
			this.items.push({
				xtype:'tabpanel',
				activeTab:0,
				itemId:'multiTab',
				items: tabItems
			})
		}else{
			var loadPanel =menuMap.get(0);
			 if(loadPanel){
			 	loadPanel.itemId="singleItem"
			 	this.items.push(loadPanel);
			 }
			
		}
	}
});
Ext.reg("workshttabpanel", Ext.ex.WorkShtTabPanel);		