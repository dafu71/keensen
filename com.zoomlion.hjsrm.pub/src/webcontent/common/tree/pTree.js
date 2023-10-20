Ext.namespace("com.zoomlion.hjsrm");
/**
 * 地区树
 * 
 * @extends Ext.tree.TreePanel
 * 
 * <pre><code>
 * Examples : new com.zoomlion.hjsrm.matnrtree({
 * 			loader : loader
 * 		});
 * </code></pre>
 */
com.zoomlion.hjsrm.MatnrTree = Ext.extend(Ext.tree.TreePanel, {
	title : '产品树',
	roottext:'',
	rootid:0,
	rootVisible : true,
	margin:5,
	useArrows : true,
	autoScroll : true,
	collapsible : true,
	animate : true,
	pathSeparator : '.',
	enableDD : false,
	containerScroll : true,
	initComponent : function() {
		this.buildRoot();
		//this.buildTools();
		this.buildTbar();
		com.zoomlion.hjsrm.MatnrTree.superclass.initComponent.call(this);
		
//		this.on({
//					scope : this,
//					'contextmenu' : function(node, e) {
//                        node.select();
//						var _attr = node.attributes;
//						var c = node.getOwnerTree().contextMenu;// 菜单
//						if(c){
//							c.showAt(e.getXY());
//						}
//                        
//					},
//					'containercontextmenu':function(tree,e){//root节点添加机构
//							if(currentDataorgid=='0'){
//								var _root =tree.getRootNode();
//								var ss =_root.getPath();
//								tree.selectPath('.0');
//								//当前第一个子节点为分公司
//								var c = tree.containerMenu;
//								if(c){
//									c.showAt(e.getXY());
//								}
//							}
//					}
//				});
	},
	/**
	 * @private
	 */
	buildRoot : function() {
		this.root = new Ext.tree.AsyncTreeNode({
					text : this.roottext,
					typename :'matnr',
					listid:this.rootid,
					qtip : '物料编码',
					editable : false
				});
	},
	buildTbar : function() {
		this.tbar = [
//				{
//					iconCls : 'icon-expand-all',
//					tooltip : '展开所有',
//					scope : this,
//					text:'展开所有',
//					itemId : 'expandtool',
//					handler : function() {
//						var mk = new Ext.LoadMask(document.body, {
//									msg : '正在展开所有,请稍候！',
//									removeMask : true
//								});
//						mk.show();
//						var _selNode =this.getSelectNode();
//						if(_selNode.id){
//							var _path =_selNode.getPath();
//							_selNode.expand(true);
//							mk.hide();
//						}else{
//							this.expandAll();
//							mk.hide();
//						}
//					}
//				}, '-',
					{
					itemId : 'closetool',
					scope : this,
					text:'关闭所有',
					handler : function() {
						this.collapseAll();
					},
					iconCls : 'icon-collapse-all',
					tooltip : '关闭所有'
				}];
	},
//	buildTools : function() {
//		this.tools = [{
//			id : 'unpin',
//			qtip : '查询时,不绑定机构树',
//			scope : this,
//			handler : function(event, toolEl, panel, tc) {
//				this.tools['pin'].setDisplayed(true);
//				this.tools['unpin'].setDisplayed(false);
//				// 查询时 绑定所在机构
//				this.fireEvent('bindorgtree', this.getSelectionModel()
//								.getSelectedNode());
//			}
//		}, {
//			id : 'pin',
//			qtip : '查询时,绑定机构树',
//			hidden : true,
//			scope : this,
//			handler : function(event, toolEl, panel, tc) {
//				this.tools['unpin'].setDisplayed(true);
//				this.tools['pin'].setDisplayed(false);
//				// //查询时 不绑定所在机构
//				this.fireEvent('unbindorgtree', this);
//			}
//		}]
//	}
//	/**
//	 * @public
//	 * @param {String}
//	 *            path 可以是.1.2也可以是orgseq
//	 * @description 通过路径定位节点
//	 */
//	locatorNode : function(path) {
//		if (path) {
//			var _path = path;
//			var _isSeq = path.substring(path.length - 1, path.length);
//			if (/\./.test(_isSeq)) {// 如果是序列
//				_path = path.substring(0, path.length - 1);// 去掉"."
//			}
//			this.expandPath(_path);
//			this.selectPath(_path);
//		}
//	},
//	/**
//	 * 刷新节点
//	 * 
//	 * @public
//	 * @param {Ext.tree.TreeNode}
//	 *            node
//	 */
//	reflushNode : function(node) {
//		this.loader.load(node);
//		node.expand();
//	},
//	/**
//	 * 在指定节点下新增节点
//	 * 
//	 * @public
//	 * @param {String}
//	 *            parentNodeId
//	 * @param {Object[]}
//	 *            objs
//	 */
//	addNode : function(parentNodeId, objs) {
//		var _parentNode = this.getNodeById(parentNodeId);
//
//		if (_parentNode) {// 如果节点存在于tree
//			_parentNode.leaf = false;
//			_parentNode.expand();
//			Ext.each(objs, function(obj) {
//						if (obj.orgcode) {// 如果是org表单
//							Ext.applyIf(obj, {
//										id : obj.orgid,
//										text : obj.orgname,
//										isleaf : true,
//										iconCls : 'icon-expand-all',
//										type : 'org'
//									});
//							_parentNode.appendChild(new Ext.tree.TreeNode(obj));
//						}
//						if (obj.positionid) {// 如果是pos表单
//							Ext.applyIf(obj, {
//										id : obj.positionid,
//										text : obj.posiname,
//										isleaf : true,
//										iconCls : 'x-tree-pos',
//										type : 'pos'
//									});
//							_parentNode.appendChild(new Ext.tree.TreeNode(obj));
//						}
//					}, this);
//
//		}
//
//	},
//	/**
//	 * 更新节点
//	 * 
//	 * @public
//	 * @param {String}
//	 *            parentNodeId
//	 * @param {Object}
//	 *            obj
//	 */
//	replaceNode : function(parentNodeId, obj) {
//		var _parentNode = this.getNodeById(parentNodeId);
//		if (_parentNode) {// 如果节点存在于tree
//			var _oldNode = undefined;
//			if (obj.posiname) {// 如果是岗位节点
//				_oldNode = _parentNode.findChild('positionid', obj.positionid);
//				Ext.apply(obj, {
//							text : obj.posiname
//						});
//			} else if (obj.orgcode) {// 如果是机构节点
//				_oldNode = _parentNode.findChild('orgid', obj.orgid);
//				Ext.apply(obj, {
//							text : obj.orgname
//						});
//			}
//			if (_oldNode) {
//				var _attrs = Ext.apply(_oldNode.attributes, obj);
//				var _newNode = new Ext.tree.TreeNode(_attrs);
//				_parentNode.replaceChild(_newNode, _oldNode);// 替换节点
//			}
//		}
//
//	},
//	/**
//	 * 删除节点
//	 * 
//	 * @public
//	 * @param {String}
//	 *            parentNodeId
//	 * @param {String[]}
//	 *            nodeIds
//	 */
//	removeNode : function(parentNodeId, nodeIds) {
//		var _parentNode = this.getNodeById(parentNodeId);
//		if (_parentNode && _parentNode.isExpanded()) {
//			Ext.each(nodeIds, function(nodeId) {
//						var _node = this.getNodeById(nodeId)
//								|| _parentNode.findChild('positionid', nodeId);
//						if (_node) {// 如果删除节点存在于tree
//							_parentNode.removeChild(_node);
//						}
//					}, this);
//		}
//
//	},
//	/**
//	 * 依据节点ID刷新
//	 * 
//	 * @public
//	 * @param {Ext.tree.TreeNode}
//	 *            node
//	 */
//	refreshNodeById : function(nodeid) {
//		var node = this.getNodeById(nodeid);
//		if (node) {
//			if (!node.isExpanded()) {
//				this.expandPath(node.getPath());//选中
//			} 
//			this.loader.load(node, function(newnode) {
//							if (newnode.text == 'root') {
//								if (newnode.firstChild) {
//									var firstnode = newnode.firstChild;
//									this.selectPath(firstnode.getPath());
//								}
//							} else {
//								this.selectPath(newnode.getPath());
//							}
//							node.expand();
//						},this);
//		}else{
//			//Ext.Msg.alert('提示:','您未选择机构进行操作,请选择机构节点');
//		}
//	},
//	/**
//	 * 是否绑定树
//	 * 
//	 * @return {Boolean}
//	 */
//	isBinding : function() {
//		return this.tools['unpin'].isVisible();
//	},
//	/**
//	 * 获取当前工作目录
//	 * @return {Object}obj
//	 */
//	getWorkContent : function() {
//		var selnode = this.getSelectNode();
//		if (selnode) {//当前选择节点
//			var selAttr = selnode.attributes;
//			var obj={};
//			if(selAttr.type=='org'){
//				var _orglevel =selAttr.orglevel+1;
//				var _orgid = selnode.attributes.orgid;
//				var _orgname = selnode.attributes.orgname;
//				var _orgseq=selnode.attributes.orgseq;
//				var _orgtype =selnode.attributes.orgtype;
//				obj = {
//					parentorgid : _orgid,
//					parentorgname : _orgname,
//					orglevel : _orglevel,
//					orgseq:_orgseq,
//					orgtype:_orgtype
//				};
//			}else if(selAttr.type=='pos'){
//				var _positionid = selnode.attributes.positionid;
//				var _posiname = selnode.attributes.posiname;
//				obj={positionid:_positionid,posiname:_posiname};
//			}else{
//				obj = {
//					orglevel : 1
//				};
//			}
//			var _dataorgid =selAttr.dataorgid;
//			var _busiorgname ='';
//			var _busiorgnode =this.getNodeById(_dataorgid);
//			if(_busiorgnode){//如果业务机构节点存在
//				_busiorgname =_busiorgnode.attributes.orgname;
//			}
//			Ext.apply(obj,{dataorgid:_dataorgid,busiorgname:_busiorgname});
//			return obj;
//		}
//	},
	/**
	 * 获取当前选中节点
	 */
	getSelectNode : function() {
		var _selnode = this.getSelectionModel().getSelectedNode();
        _selnode = _selnode || {};
		return _selnode;
	}
});
Ext.reg("matnrtree", com.zoomlion.hjsrm.MatnrTree);