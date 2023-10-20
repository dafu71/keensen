Ext.namespace('com.zoomlion.hjsrm');
/**
 * 树节点加载组件
 * 
 * @extends Ext.tree.TreeLoader
 * 
 */

// Examples : new com.zoomlion.hjsrm.ProductLoader({
// dataUrl : dataUrl
// param : undefined,//
// ifcheckbox : true,//是否有复选框
// });
com.zoomlion.hjsrm.ProductLoader = Ext.extend(Ext.tree.TreeLoader, {
	isASyncTree : false,
	dataUrl : "com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryProductTree.biz.ext",
	param : undefined,
	ifcheckbox : false,// 是否有复选框
	constructor : function(config) {
		com.zoomlion.hjsrm.ProductLoader.superclass.constructor.call(this,
				config);
		this.on({
					scope : this,
					'beforeload' : function(treeLoader, node) {
						this.baseParams.parentid = node.attributes.listid;
						this.baseParams.typename = node.attributes.typename;
						this.baseParams.text = node.attributes.text;
						this.baseParams.param = this.param;
					}
				});
	},
	/**
	 * 重写处理响应方法
	 * 
	 * @param {Response}
	 *            response 响应
	 * @param {Node}
	 *            node 父节点
	 * @param {Function}
	 *            callback
	 */
	processResponse : function(response, node, callback) {
		var json = response.responseText;
		try {
			var _collections = response.responseData || Ext.decode(json);// List对象
			node.beginUpdate();
			// 动态树
			if (this.isASyncTree) {// 是否同步树
				Ext.each(_collections.data, function(data) {// 节点数组
							if (this.ifcheckbox) {
								var baseParams = {
									id : data.listid,
									text : data.text,
									leaf : false,
									checked : (data.flag == '1'),// json里包含选中标识flag，1为选中
									iconCls : data.typename == 'product'
											? 'icon-application_appset'
											: data.typename == 'type'
													? 'icon-application_home'
													: data.typename == 'matnr'
															? 'icon-application'
															: 'icon-application_view_list',
									type : 'data'
								}
							} else {
								var baseParams = {
									id : data.listid,
									text : data.text,
									leaf : false,
									iconCls : data.typename == 'product'
											? 'icon-application_appset'
											: data.typename == 'type'
													? 'icon-application_home'
													: data.typename == 'matnr'
															? 'icon-application'
															: 'icon-application_view_list',
									type : 'data'
								}

							}
							Ext.applyIf(data, baseParams);// 附加属性
							var orgnode = this.createNode(data);
							if (orgnode) {
								node.appendChild(orgnode);
							}
						}, this);
			} else {
				// 静态树
				var nodeMap = new Ext.util.MixedCollection();
				Ext.each(_collections.data, function(data) {// 机构节点数组
							if (this.ifcheckbox) {
								var baseParams = {
									id : data.listid,
									text : data.text,
									leaf : false,
									checked : (org.flag == '1'),// json里包含选中标识flag，1为选中
									// iconCls : org.orgtype <= 2
									// ? 'icon-folder_home'
									// : 'icon-folder_user',
									type : 'data'
								}
							} else {
								var baseParams = {
									id : data.listid,
									text : data.text,
									leaf : false,
									// iconCls : org.orgtype <= 2
									// ? 'icon-folder_home'
									// : 'icon-folder_user',
									type : 'data'
								}
							}
							Ext.applyIf(data, baseParams);// 附加属性
							var orgnode = new Ext.tree.TreeNode(org);
							nodeMap.add("" + orgnode.id, orgnode);
						}, this);

				Ext.each(_collections.data, function(data) {
							var prentNode = nodeMap.get("" + data.parentid);
							var thisnode = nodeMap.get("" + data.myid);
							if (prentNode) {
								prentNode.appendChild(thisnode);
							} else {
								node.appendChild(thisnode);
							}

						}, this);
			}
			node.endUpdate();
			this.runCallback(callback, scope || node, [node]);
		} catch (e) {
			this.handleFailure(response);
		}
	}

});
Ext.reg("productloader", com.zoomlion.hjsrm.ProductLoader);
