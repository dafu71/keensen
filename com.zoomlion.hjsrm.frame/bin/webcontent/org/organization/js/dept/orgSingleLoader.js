Ext.namespace('com.zoomlion.hjsrm.org');
/**
 * 树节点加载组件
 * @class Frame.org.organization.OrgTreeLoader
 * @extends Ext.tree.TreeLoader
 */
com.zoomlion.hjsrm.org.OrgSingleLoader = Ext.extend(Ext.tree.TreeLoader, {
	isASyncTree:false,
	dataUrl : 'com.zoomlion.hjsrm.frame.org.organization.OrgManager.getOrganizationTree.biz.ext',
	constructor : function(config) {
		com.zoomlion.hjsrm.org.OrgSingleLoader.superclass.constructor.call(this,
				config);
			this.on({
					scope : this,
					'beforeload':function(treeLoader, node){
						 this.baseParams.parentsid =  node.attributes.orgid
					}
				});
	},
	/**
	 * 重写处理响应方法
	 * @param {Response} response 响应
	 * @param {Node} node 父节点
	 * @param {Function} callback
	 */
	processResponse : function(response, node, callback) {
		var json = response.responseText;
		try {
			var _collections = response.responseData || Ext.decode(json);// List对象
			node.beginUpdate();
			//动态树
			if(this.isASyncTree){//是否同步树
				Ext.each(_collections.data, function(org) {// 机构节点数组
						var baseParams = {
							id : org.orgid,
							text : org.orgname,
							leaf : false,
							iconCls : org.orgtype<=2?'icon-folder_home':'icon-folder_user',
							type : 'org'
						}
						Ext.applyIf(org, baseParams);//附加属性
						var orgnode = this.createNode(org);
						if (orgnode) {
							node.appendChild(orgnode);
						}
					},this);
			} else {
				// 静态树
				var nodeMap = new Ext.util.MixedCollection();
				Ext.each(_collections.data, function(org) {// 机构节点数组
							var baseParams = {
								id : org.orgid,
								text : org.orgname,
								leaf : false,
								iconCls : org.orgtype<=2?'icon-folder_home':'icon-folder_user',
								type : 'org'
							}
							Ext.applyIf(org, baseParams);// 附加属性
							var orgnode = new Ext.tree.TreeNode(org);
							nodeMap.add(""+orgnode.id, orgnode);
						}, this);
						
				Ext.each(_collections.data, function(org) {
							var prentNode = nodeMap.get(""+org.parentorgid);
							var thisnode = nodeMap.get(""+org.orgid);
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
Ext.reg("orgsingleloader", com.zoomlion.hjsrm.org.OrgSingleLoader);
