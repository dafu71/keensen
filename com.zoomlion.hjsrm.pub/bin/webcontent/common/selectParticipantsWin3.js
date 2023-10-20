Ext.ns("com.zoomlion.hjsrm");
/**
 * 
 * @class com.zoomlion.hjsrm.selectParticipantsWindow3
 * @extends Ext.Window
 *          <p>
 *          选择参与者弹出框
 */
com.zoomlion.hjsrm.selectParticipantsWindow3 = Ext.extend(Ext.Window, {
	title : '选择参与者',// 标题栏
	partTitle : '参与者',// 参与者显示值
	divisionFront : "(",// 前面的分割符号
	divisionBack : "),",// 后面的分割符号
	closeAction : 'hide',
	layout : 'border',
	sendListPanel : undefined,
	modal : true,
	collapsible : true,
	maximizable : true,
	width : 800,
	height : 600,
	buttonAlign : 'center',
	currentParticipant : {},
	currentRolecode : undefined, // 角色编码
	currentOrgcode : undefined, // 机构编码
	initComponent : function() {
		this.buildParticipantsList();
		this.buildParticipantsEditPanel();
		this.buildParticipantsEditListPanel();
		this.buildParticipantsOrgTreepanel();
		this.orgTree.mon(this.orgTree, 'click', function(node) {
					this.orgnamesquery.setValue(node.text);
					// TODO查询当前激活tab页的查询事件
					// 查询某机构下的人员
					Ext.apply(this.currentParticipant, {
								alluseid : this.participantsEditPanel.form
										.findField("ptStrs").getValue(),
								//orgnames : node.text,
								orgid:node.attributes['orgid'],
								rolecode : this.currentRolecode,
								orgcode : this.currentOrgcode
							})
					this.participantsListPanel.doQuery(this.currentParticipant);

				}, this);
		var o = this.participantsEditPanel;
		var grid = this.participantsListPanel;
		this.participantsListPanel.store.addListener('load', function() {
					var store = this.participantsListPanel.store;
					var records = [];
					for (var i = 0; i < store.getCount(); i++) {
						var record = store.getAt(i);
						if (record.data.flag == 1) {
							records.push(record);
						}
					}
					if (records.length > 0) {
						grid.selModel.selectRecords(records);
					}

				}, this);
		this.participantsListPanel.selModel.on("rowselect", function(sm,
						rowIndex, record) {

					var pts = o.form.findField("ptStrs").getValue();
					var temp = record.get("operatorname") + '('
							+ record.get("userid") + '),';
					if (pts.indexOf(temp) < 0) {
						pts = pts + temp;
					}
					// alert(count);
					o.form.findField("ptStrs").setValue(pts);

				}, this);
		this.participantsListPanel.selModel.on("rowdeselect", function(sm,
						rowIndex, record) {

					var pts = o.form.findField("ptStrs").getValue();

					var temp = record.get("operatorname") + '('
							+ record.get("userid") + '),';

					if (pts.indexOf(temp) > -1) {
						var start = pts.indexOf(temp);
						var end = start + temp.length;
						var len = pts.length;
						var temp1 = pts.substring(0, start);
						var temp2 = pts.substring(end, len);
						pts = temp1 + temp2;
					}
					o.form.findField("ptStrs").setValue(pts);

				}, this);

		// this.participantsEditPanel.form.findField('ptStrs')
		// .setValue();
		// this.participantsListPanel.store.removeAll();
		this.items = [
				this.orgTree,this.participantsEditlistPanel]
		this.tbar = [{
					xtype : 'label',
					text : '登录ID:'
				}, '-', {
					xtype : 'textfield',
					ref : '../useridquery',
					name : 'userid'
				}, {
					xtype : 'label',
					text : '姓名:'
				}, '-', {
					xtype : 'textfield',
					ref : '../operatornamequery',
					name : 'operatorname'
				}, {
					xtype : 'label',
					text : '机构:'
				}, '-', {
					xtype : 'textfield',
					ref : '../orgnamesquery',
					name : 'orgnames'
				},{
					xtype : 'label',
					text : '公司:'
				}, '-', {
					xtype : 'textfield',
					ref : '../orgnamequery',
					name : 'orgname'
				}, '-', {
					text : '查询',
					scope : this,
					handler : function() {
						var _userid = this.useridquery.getValue();
						var _operatorname = this.operatornamequery.getValue();
						var _orgnames = this.orgnamesquery.getValue();
						var _orgname = this.orgnamequery.getValue();
						var _alluseid = this.participantsEditPanel.form
								.findField("ptStrs").getValue();
						Ext.apply(this.currentParticipant, {
									userid : _userid,
									operatorname : _operatorname,
									orgnames : _orgnames,
									orgname : _orgname,
									alluseid : _alluseid,
									orgid:'',
									rolecode : this.currentRolecode,
									orgcode : this.currentOrgcode
								})
						this.participantsListPanel
								.doQuery(this.currentParticipant);
					}
				}, '-', {
					text : '重置',
					scope : this,
					handler : function() {
						this.useridquery.setValue();
						this.operatornamequery.setValue();
						this.orgnamesquery.setValue();
					}
				}]
		this.buttons = [{
			text : '确认',
			scope : this,
			handler : function() {
				var pts = this.participantsEditPanel.form.findField("ptStrs")
						.getValue();
				if (pts == null || pts == "") {
					alert("已选择" + this.partTitle + "不能空！")
					return false;
				} else {
					// 响应返回事件，如需要在父窗口取得pts,则在父窗口，配置callback事件即可
					this.fireEvent('callback', pts);
					this.participantsListPanel.selModel.clearSelections();
					this.hide();
				}
			}
		}, {
			text : '关闭',
			scope : this,
			handler : function() {
				this.participantsListPanel.selModel.clearSelections();
				this.hide();
			}
		}]
		com.zoomlion.hjsrm.selectParticipantsWindow3.superclass.initComponent
				.call(this);
		// 构建window时就执行查询，必须写在这句话后面
		this.participantsListPanel.store.baseParams = {
			'person/userid' : '',
			'person/operatorname' : '',
			'person/orgnames' : '',
			'person/orgname' : '',
			'person/orgid' : '',
			'person/alluseid' : '',
			'person/rolecode' : this.currentRolecode,
			'person/orgcode' : this.currentOrgcode
		};
		this.participantsListPanel.store.load();
	},
	buildParticipantsList : function() {
		var participantsSelModel = new Ext.grid.CheckboxSelectionModel({});
		this.participantsListPanel = new Ext.fn.ListPanel({
			title : this.partTitle + '列表',
			hsPage : false,
			selModel : participantsSelModel,
			autoExpandColumn : '5',
			height : 400,

			/*
			 * tbar : [{ text : '选择', scope : this, iconCls :
			 * 'icon-application_add', handler : function() { var selectrs =
			 * participantsSelModel.getSelections(); var count =
			 * participantsSelModel.getCount(); if (count <= 0) {
			 * alert("没有选定数据，请选定数据行！"); return false; } var pts =
			 * this.participantsEditPanel.form .findField("ptStrs").getValue();
			 * for (var i = 0; i < count; i++) {
			 * 
			 * var temp = selectrs[i].get("operatorname") + this.divisionFront +
			 * selectrs[i].get("userid") + this.divisionBack;
			 * 
			 * if (pts.indexOf(temp) < 0) { pts = pts + temp; } } //
			 * alert(count); this.participantsEditPanel.form.findField("ptStrs")
			 * .setValue(pts); } }, { text : '取消', scope : this, iconCls :
			 * 'icon-application_delete', handler : function() { var selectrs =
			 * participantsSelModel.getSelections(); var count =
			 * participantsSelModel.getCount(); if (count <= 0) {
			 * alert("没有选定数据，请选定数据行！"); return false; } for (var i = 0; i <
			 * count; i++) {
			 * 
			 * var pts = this.participantsEditPanel.form
			 * .findField("ptStrs").getValue();
			 * 
			 * var temp = selectrs[i].get("operatorname") + this.divisionFront +
			 * selectrs[i].get("userid") + this.divisionBack;
			 * 
			 * if (pts.indexOf(temp) > -1) { var start = pts.indexOf(temp); var
			 * end = start + temp.length; var len = pts.length; var temp1 =
			 * pts.substring(0, start); var temp2 = pts.substring(end, len); pts =
			 * temp1 + temp2; }
			 * this.participantsEditPanel.form.findField("ptStrs")
			 * .setValue(pts); } } }],
			 */
			columns : [new Ext.grid.RowNumberer(), participantsSelModel, {
						header : "操作员名称",
						autoWidth : true,
						dataIndex : "operatorname"
					}, {
						header : "登陆用户名",
						autoWidth : true,
						dataIndex : "userid"
					}, {
						header : "所属公司",
						dataIndex : "orgname",
						id : 'orgname',
						autoWidth : true,
						sortable : true
					}, {
						header : "业务机构",
						autoWidth : true,
						dataIndex : "orgnames"
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryParticipantsByRoleOrOrg2.biz.ext',
				root : 'data',
				totalProperty : 'totalCount',
				fields : [{
							name : 'operatorid'// 操作员ID
						}, {
							name : 'userid'// 登陆用户名
						}, {
							name : 'operatorname'// 操作员名称

						}, {
							name : 'orgname'// 所属机构

						}, {
							name : 'dataorgid'// 数据归属

						}, {
							name : 'orgnames'// 业务机构

						}, {
							name : 'flag'// 业务机构

						}]
			}),
			doQuery : function(val) {
				var val = val || {};
				this.store.baseParams = {
					'person/userid' : val.userid,
					'person/operatorname' : val.operatorname,
					'person/orgnames' : val.orgnames,
					'person/orgname' : val.orgname,
					'person/orgid' : val.orgid,
					'person/alluseid' : val.alluseid,
					'person/rolecode' : val.rolecode
				};
				this.store.load({
						});
			}

		});
	},
	buildParticipantsEditListPanel : function() {
		this.participantsEditlistPanel = new Ext.Panel({
					region : 'center',
					width : 560,
					saveUrl : '...',
					columns : 1,
					items : [this.participantsListPanel,
							this.participantsEditPanel]
				});
	},
	buildParticipantsEditPanel : function() {
		this.participantsEditPanel = new Ext.fn.InputPanel({
					xtype : 'inputpanel',
					pgrid : this.participantsListPanel,
					saveUrl : '...',
					columns : 1,
					tbar : [{
						text : '清空',
						scope : this,
						handler : function() {
							this.participantsEditPanel.form.findField("ptStrs")
									.setValue();
						}
					}],
					fields : [{
								xtype : 'textarea',
								hideLabel : true,
								name : "ptStrs",
								ref : "../ptStrs",
								readOnly : true,
								hidden : false
							}]
				});
	},
	buildParticipantsOrgTreepanel : function() {
		com.zoomlion.hjsrm.OrgIndexTree = Ext.extend(Ext.tree.TreePanel, {
					title : '组织机构树',
					rootVisible : false,
					margin : 5,
					useArrows : true,
					autoScroll : true,
					collapsible : true,
					animate : true,
					pathSeparator : '.',
					enableDD : false,
					containerScroll : true,
					initComponent : function() {
						this.buildRoot();
						this.buildTools();
						this.buildTbar();
						com.zoomlion.hjsrm.OrgIndexTree.superclass.initComponent
								.call(this);
						this.on({
									scope : this,
									'contextmenu' : function(node, e) {
										node.select();
										var _attr = node.attributes;
										var c = node.getOwnerTree().contextMenu;// 菜单
										if (c) {
											c.showAt(e.getXY());
										}

									},
									'containercontextmenu' : function(tree, e) {// root节点添加机构
										if (currentDataorgid == '0') {
											var _root = tree.getRootNode();
											var ss = _root.getPath();
											tree.selectPath('.0');
											// 当前第一个子节点为分公司
											var c = tree.containerMenu;
											if (c) {
												c.showAt(e.getXY());
											}
										}
									}
								});
					},
					/**
					 * @private
					 */
					buildRoot : function() {
						this.root = new Ext.tree.AsyncTreeNode({
									text : 'root',
									qtip : '根节点',
									'dataorgid' : 0,// 默认无业务机构设置为0
									editable : false
								});
					},
					buildTbar : function() {
						this.tbar = [{
									iconCls : 'icon-expand-all',
									tooltip : '展开所有',
									scope : this,
									text : '展开所有',
									itemId : 'expandtool',
									handler : function() {
										var mk = new Ext.LoadMask(
												document.body, {
													msg : '正在展开所有,请稍候！',
													removeMask : true
												});
										mk.show();
										var _selNode = this.getSelectNode();
										if (_selNode.id) {
											var _path = _selNode.getPath();
											_selNode.expand(true);
											mk.hide();
										} else {
											this.expandAll();
											mk.hide();
										}
									}
								}, '-', {
									itemId : 'closetool',
									scope : this,
									text : '关闭所有',
									handler : function() {
										this.collapseAll();
									},
									iconCls : 'icon-collapse-all',
									tooltip : '关闭所有'
								}];
					},
					buildTools : function() {
						this.tools = [{
							id : 'unpin',
							qtip : '查询时,不绑定机构树',
							scope : this,
							handler : function(event, toolEl, panel, tc) {
								this.tools['pin'].setDisplayed(true);
								this.tools['unpin'].setDisplayed(false);
								// 查询时 绑定所在机构
								this.fireEvent('bindorgtree', this
												.getSelectionModel()
												.getSelectedNode());
							}
						}, {
							id : 'pin',
							qtip : '查询时,绑定机构树',
							hidden : true,
							scope : this,
							handler : function(event, toolEl, panel, tc) {
								this.tools['unpin'].setDisplayed(true);
								this.tools['pin'].setDisplayed(false);
								// //查询时 不绑定所在机构
								this.fireEvent('unbindorgtree', this);
							}
						}]
					},
					/**
					 * @public
					 * @param {String}
					 *            path 可以是.1.2也可以是orgseq
					 * @description 通过路径定位节点
					 */
					locatorNode : function(path) {
						if (path) {
							var _path = path;
							var _isSeq = path.substring(path.length - 1,
									path.length);
							if (/\./.test(_isSeq)) {// 如果是序列
								_path = path.substring(0, path.length - 1);// 去掉"."
							}
							this.expandPath(_path);
							this.selectPath(_path);
						}
					},
					/**
					 * 是否绑定树
					 * 
					 * @return {Boolean}
					 */
					isBinding : function() {
						return this.tools['unpin'].isVisible();
					},
					/**
					 * 获取当前工作目录
					 * 
					 * @return {Object}obj
					 */
					getWorkContent : function() {
						var selnode = this.getSelectNode();
						if (selnode) {// 当前选择节点
							var selAttr = selnode.attributes;
							var obj = {};
							if (selAttr.type == 'org') {
								var _orglevel = selAttr.orglevel + 1;
								var _orgid = selnode.attributes.orgid;
								var _orgname = selnode.attributes.orgname;
								var _orgseq = selnode.attributes.orgseq;
								var _orgtype = selnode.attributes.orgtype;
								obj = {
									parentorgid : _orgid,
									parentorgname : _orgname,
									orglevel : _orglevel,
									orgseq : _orgseq,
									orgtype : _orgtype
								};
							} else if (selAttr.type == 'pos') {
								var _positionid = selnode.attributes.positionid;
								var _posiname = selnode.attributes.posiname;
								obj = {
									positionid : _positionid,
									posiname : _posiname
								};
							} else {
								obj = {
									orglevel : 1
								};
							}
							var _dataorgid = selAttr.dataorgid;
							var _busiorgname = '';
							var _busiorgnode = this.getNodeById(_dataorgid);
							if (_busiorgnode) {// 如果业务机构节点存在
								_busiorgname = _busiorgnode.attributes.orgname;
							}
							Ext.apply(obj, {
										dataorgid : _dataorgid,
										busiorgname : _busiorgname
									});
							return obj;
						}
					},
					/**
					 * 获取当前选中节点
					 */
					getSelectNode : function() {
						var _selnode = this.getSelectionModel()
								.getSelectedNode();
						_selnode = _selnode || {};
						return _selnode;
					}
				})
		com.zoomlion.hjsrm.orgTreeLoader = new Ext.extend(Ext.tree.TreeLoader,
				{
					isASyncTree : false,
					dataUrl : 'com.zoomlion.hjsrm.frame.org.organization.OrgManager.getAllOrganizationTree.biz.ext',
					constructor : function(config) {
						com.zoomlion.hjsrm.orgTreeLoader.superclass.constructor
								.call(this, config);
						this.on({
							scope : this,
							'beforeload' : function(treeLoader, node) {
								this.baseParams.parentsid = node.attributes.orgid
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
							var _collections = response.responseData
									|| Ext.decode(json);// List对象
							node.beginUpdate();
							// 动态树
							if (this.isASyncTree) {// 是否同步树
								Ext.each(_collections.data, function(org) {// 机构节点数组
											var baseParams = {
												id : org.orgid,
												text : org.orgname,
												leaf : false,
												iconCls : org.orgtype <= 2
														? 'icon-folder_home'
														: 'icon-folder_user',
												type : 'org'
											}
											Ext.applyIf(org, baseParams);// 附加属性
											var orgnode = this.createNode(org);
											if (orgnode) {
												node.appendChild(orgnode);
											}
										}, this);
							} else {
								// 静态树
								var nodeMap = new Ext.util.MixedCollection();
								Ext.each(_collections.data, function(org) {// 机构节点数组
											var baseParams = {
												id : org.orgid,
												text : org.orgname,
												leaf : false,
												iconCls : org.orgtype <= 2
														? 'icon-folder_home'
														: 'icon-folder_user',
												type : 'org'
											}
											Ext.applyIf(org, baseParams);// 附加属性
											var orgnode = new Ext.tree.TreeNode(org);
											nodeMap.add("" + orgnode.id,
													orgnode);
										}, this);

								Ext.each(_collections.data, function(org) {
											var prentNode = nodeMap.get(""
													+ org.parentorgid);
											var thisnode = nodeMap.get(""
													+ org.orgid);
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
		this.orgTreeLoader = new com.zoomlion.hjsrm.orgTreeLoader();
		this.orgTree = new com.zoomlion.hjsrm.OrgIndexTree({
					region : 'west',
					width : 220,
					split : true,
					loader : this.orgTreeLoader,
					collapsible : true
				});
	}

});

com.zoomlion.hjsrm.selectParticipateField3 = Ext.extend(Ext.form.TriggerField, {
			fieldLabel : this.partTitle,
			hideTrigger : false,
			editable : false,
			triggerClass : "x-form-search-trigger",
			currentRolecode : undefined, // 角色编码
			currentOrgcode : undefined, // 机构编码
			initComponent : function() {
				this.powWindow = this.getselectWin();
				com.zoomlion.hjsrm.selectParticipateField3.superclass.initComponent
						.call(this);
			},
			onTriggerClick : function() {
                this.powWindow.items.items[1].items.items[1].form.findField('ptStrs').setValue(this.getValue());
				this.powWindow.useridquery.setValue();
				this.powWindow.operatornamequery.setValue();
				this.powWindow.orgnamesquery.setValue();
				this.powWindow.orgnamequery.setValue();
				this.powWindow.items.items[1].items.items[0].store.removeAll();			
			    this.powWindow.show();
				// 返回事件
				this.powWindow.mon(this.powWindow, 'callback', function(pts) {
							this.setValue(pts);
						}, this);
			},
			getselectWin : function() {
				return new com.zoomlion.hjsrm.selectParticipantsWindow3({
							currentRolecode : this.currentRolecode,
							currentOrgcode : this.currentOrgcode
						});
			}
		})
Ext.reg('selectParticipateField3', com.zoomlion.hjsrm.selectParticipateField3);
// demo:
// { xtype : 'selectParticipateField',
// name : 'pts',
// fieldLabel : '参与者',
// maxLength : 500,
// currentRolecode : '00062',//可以传值也可以不传值
// currentOrgcode : '',//可以传值也可以不传值
// colspan : 2
// }
