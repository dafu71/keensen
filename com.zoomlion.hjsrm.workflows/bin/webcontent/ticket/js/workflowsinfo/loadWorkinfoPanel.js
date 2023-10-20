Ext.namespace('Srm.workflows');
/**
 * 
 * @class Srm.workflows.LoadWorkinfoPanel
 * @extends Ext.Panel
 *  * <p> 工单历史加载面板
 * <p>用法：
 * <pre><code>
	this.key = Ext.id();
		this.loadWorkinfoPanel = new Srm.workflows.LoadWorkinfoPanel({
			fnKey:this.key,
			sheetParams:this.params
		});
	this.loadWorkinfoPanel.loadPanel(....)	
 * </code></pre>
 */
Srm.workflows.LoadWorkinfoPanel = Ext.extend(Ext.Panel, {
			layout : 'fit',
			/**
			 * 传递参数 请参考流程传递参数说明文档
			 * @type 
			 */
			sheetParams : undefined,
			initComponent : function() {
				Srm.workflows.LoadWorkinfoPanel.superclass.initComponent.call(this);
			},
			/**
			 *  加载面板
			 * @param {} fnKey 存放key
			 * @param {} sheetUrl  资源路径
			 * @param {} busitype 业务类型
			 * @param {} activityDefId 活动示例ID
			 * @param {} cfgUrl 活动配置Url
			 */
			loadPanel : function(fnKey, sheetUrl,busitype,activityDefId,cfgUrl) {
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
									busitype:busitype,
									activityDefId:activityDefId,
									url:cfgUrl,
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
Ext.reg('loadworkinfopanel',Srm.workflows.LoadWorkinfoPanel);