/*
 * 示例ui @author rye
 */
com.zoomlion.hjsrm.announce.AnnounceMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initViewWindow();
		this.initReadWindow();

		this.initUploadWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'announceMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					width : 500,
					columns : 3,
					border : true,
					title : '【 公告制度查询 】',
					fields : [{
								xtype : 'textfield',
								name : 'announce/title',
								fieldLabel : '标题'
							}, {
								xtype : "dateregion",
								name : "entity",
								fieldLabel : "发布时间",
								format : "Y-m-d"
							}, {
								name : 'query/announcetype',
								fieldLabel : '分类',
								xtype : 'dictcombobox',
								hiddenName : 'announce/announcetype',
								dictData : AT_ANNOUNCETYPE
							}]
				});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 公告制度列表 】',
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						rescode : '00401',
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						rescode : '00401',
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						rescode : '00401',
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.delAnnounce.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						xtype : 'dictcolumn',
						dataIndex : 'announcetype',
						header : '类型',
						dictData : AT_ANNOUNCETYPE,
						sortable : false
					}, {
						dataIndex : 'flag',
						header : '标题',
						width : 600,
						renderer : function(v, p, record, rowIndex, colIndex) {
							if (v == '0') {
								return '<a style="text-decoration:none" href="javascript:showAnnounce('
										+ record.get("announceid")
										+ ')">'
										+ record.get("title")
										+ '</a><a style="text-decoration:none" href="javascript:showAnnounceReader('
										+ record.get("announceid")
										+ ')"> '
										+ '<img  src="frame/ui/img/new.gif"  style="width:28px;height:11px;">'
										+ '<img  src="frame/ui/img/vote_item.gif" ext:qtip="点击查询查阅信息">'
										+ '</a>';
							} else {
								return '<a style="text-decoration:none" href="javascript:showAnnounce('
										+ record.get("announceid")
										+ ')">'
										+ record.get("title")
										+ '</a><a style="text-decoration:none" href="javascript:showAnnounceReader('
										+ record.get("announceid")
										+ ')"> '
										+ '<img  src="frame/ui/img/vote_item.gif" ext:qtip="点击查询查阅信息">'
										+ '</a>';
							}
						}
					}, {
						dataIndex : 'username',
						header : '发布人'
					}, {
						dataIndex : 'title',
						header : '隐藏标题',
						hidden : true
					}, {
						dataIndex : 'announcetime',
						header : '发布时间',
						width : 200
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.queryAnnounces.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'announceid'
						}, {
							name : 'title'
						}, {
							name : 'userid'
						}, {
							name : 'username'
						}, {
							name : 'announcetime'
						}, {
							name : 'announcetype'
						}, {
							name : 'status'
						}, {
							name : 'dataorgid'
						}, {
							name : 'endtime'
						}, {
							name : 'orgid'
						}, {
							name : 'flag'
						}]
			})
		});
	}
	this.initInputWindow = function() {
		this.attachId = 'announceinputfile';
		var companyid = Ext.id();
		var orgid = Ext.id();
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增公告制度',
			height : 600,
			width : 800,
			id : 'announceinputwindow',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.addAnnounces.biz.ext',
				fields : [{
							name : 'announce/orgid',
							fieldLabel : '机构ID',
							hidden : true
						}, {
							xtype : 'textfield',
							name : 'announce/announceid',
							dataIndex : 'announceid',
							hidden : true
						}, {
							xtype : 'textfield',
							name : 'announce/title',
							allowBlank : false,
							fieldLabel : '标题',
							maxLength : 100,
							colspan : 2
						}, {
							xtype : 'datetimefield',
							name : 'announce/announcetime',
							fieldLabel : '发布时间',
							colspan : 1,
							value : new Date(),
							editable : true,
							format : 'Y-m-d H:i:s'
						}, {
							xtype : 'datetimefield',
							name : 'announce/endtime',
							fieldLabel : '截至时间',
							colspan : 1,
							editable : true,
							format : 'Y-m-d H:i:s'
						}, {
							xtype : 'dictcombobox',
							name : 'announce/announcetype',
							fieldLabel : '分类',
							dataIndex : 'announcetype',
							hiddenName : 'announce/announcetype',
							dictData : AT_ANNOUNCETYPE
						}, {
							id : orgid,
							xtype : 'orgtreecombo',
							fieldLabel : '所属公司',
							valueField : 'orgid',
							displayField : 'orgname',
							hiddenName : 'orgid',
							ref : '../../orgid',
							name : 'announce/orgid',
							queryType : 'company',
							dataIndex : 'orgid',
							allowBlank : false,
							blankText : "请选择机构！",
							listeners : {
								'getselectnode' : function(obj, node) {
									Ext.getCmp(companyid).loader.baseParams = {
										'query/dataorgid' : node.attributes['orgid'],
										'query/status' : 'running',
										'query/delflag' : 'n'
									};
									Ext.getCmp(companyid).setReadOnly(false);
								}
							}
						}, {
							id : companyid,
							xtype : 'orgtreecombo',
							ref : '../../orgid2',
							fieldLabel : '业务机构',
							valueField : 'orgid',
							displayField : 'orgname',
							selectType : 'multiple',
							hiddenName : 'announce/bizorgids',
							dataIndex : 'bizorgids',
							allowBlank : false,
							blankText : "请选择机构！",
							readOnly : true,
							listeners : {
								'beforequery' : function(obj, node) {
									if (Ext.getCmp(orgid).getValue() == null
											|| Ext.getCmp(orgid).getValue() == "") {
										Ext.Msg.alert("系统提示", "请先选择所属公司!");
										return false;
									}
								}
							}
						}, {
							xtype : 'checkbox',
							fieldLabel : '是否群发',
							ref : '../../allflag',
							checked : false

						}, {
							xtype : 'htmleditor',
							allowBlank : false,
							name : 'announce/content',
							maxLength : 4000,
							colspan : 2
						}, {
							colspan : 2,
							width : 700,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.attachId,
							postParams : {
								relationId : 0,
								groupId : 'announcefile',
								dataorgid : dataorgid,
								operatorid : operatorid,
								operatorname : operatorname
							},
							isDownload : this.isDownload,
							fieldLabel : '附件列表',
							title : '附件列表',
							itemId : 'attachmentlist'
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		this.eattachId = 'announceeditfile';
		var companyid = Ext.id();
		var orgid = Ext.id();
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '编辑公告制度',
			id : 'announceeditwindow',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.loadAnnounce.biz.ext',
				saveUrl : 'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.saveAnnounce.biz.ext',
				fields : [{
							name : 'announce/orgid',
							fieldLabel : '机构ID',
							hidden : true
						}, {
							xtype : 'textfield',
							name : 'announce/title',
							allowBlank : false,
							dataIndex : 'title',
							fieldLabel : '标题',
							maxLength : 100,
							colspan : 2
						}, {
							xtype : 'datetimefield',
							name : 'announce/announcetime',
							fieldLabel : '发布时间',
							colspan : 1,
							dataIndex : 'announcetime',
							editable : true,
							format : 'Y-m-d H:i:s'

						}, {
							xtype : 'datetimefield',
							name : 'announce/endtime',
							fieldLabel : '截至时间',
							dataIndex : 'endtime',
							colspan : 1,
							editable : true,
							format : 'Y-m-d H:i:s'
						}, {
							name : 'announce/announcetype',
							fieldLabel : '分类',
							xtype : 'dictcombobox',
							dataIndex : 'announcetype',
							hiddenName : 'announce/announcetype',
							layout : 'fit',
							dictData : AT_ANNOUNCETYPE
						}, {
							id : orgid,
							xtype : 'orgtreecombo',
							fieldLabel : '所属公司',
							valueField : 'orgid',
							displayField : 'orgname',
							hiddenName : 'orgid',
							ref : '../../orgid',
							queryType : 'company',
							dataIndex : 'orgid',
							hidden : true,
							blankText : "请选择机构！",
							listeners : {
								'getselectnode' : function(obj, node) {
									Ext.getCmp(companyid).loader.baseParams = {
										'query/dataorgid' : node.attributes['orgid'],
										'query/status' : 'running',
										'query/delflag' : 'n'
									};
									Ext.getCmp(companyid).setReadOnly(false);
								}
							}
						}, {
							id : companyid,
							xtype : 'orgtreecombo',
							fieldLabel : '业务机构',
							valueField : 'orgid',
							displayField : 'orgname',
							selectType : 'multiple',
							hiddenName : 'announce/bizorgids',
							dataIndex : 'bizorgids',
							hidden : true,
							blankText : "请选择机构！",
							readOnly : true,
							listeners : {
								'beforequery' : function(obj, node) {
									if (Ext.getCmp(orgid).getValue() == null
											|| Ext.getCmp(orgid).getValue() == "") {
										Ext.Msg.alert("系统提示", "请先选择所属公司!");
										return false;
									}
								}
							}
						}, {
							xtype : 'htmleditor',
							allowBlank : false,
							name : 'announce/content',
							dataIndex : 'content',
							maxLength : 4000,
							colspan : 2
						}, {
							colspan : 2,
							width : 700,
							isUploaded : false,
							isDelete : true,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.eattachId,
							postParams : {
								relationId : 0,
								groupId : 'announcefile',
								dataorgid : dataorgid,
								operatorid : operatorid,
								operatorname : operatorname
							},
							isDownload : this.isDownload,
							fieldLabel : '附件列表',
							title : '附件列表',
							itemId : 'attachmentlist'
						}, {
							xtype : 'textfield',
							name : 'announce/announceid',
							dataIndex : 'announceid',
							hidden : true
						}, {
							xtype : 'textfield',
							name : 'announce/userid',
							dataIndex : 'userid',
							hidden : true
						}, {
							xtype : 'textfield',
							name : 'announce/status',
							dataIndex : 'status',
							hidden : true
						}, {
							xtype : 'textfield',
							name : 'announce/createby',
							dataIndex : 'createby',
							hidden : true
						}, {
							xtype : 'textfield',
							name : 'announce/dataorgid',
							dataIndex : 'dataorgid',
							hidden : true
						}]
			}]
		});
	}

	this.initViewWindow = function() {
		this.veattachId = Ext.id();
		this.viewWindow = this.viewWindow || new Ext.fn.ShowWindow({
			id : 'announceShow',
			fid : this.veattachId,
			title : '查阅公告制度',
			height : 550,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			defaults : {
				autoScroll : true
			},
			items : [{
				xtype : 'viewpanel',
				columns : 1,
				loadUrl : 'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.readAnnounce.biz.ext',
				fields : [{
							name : 'announce/title',
							dataIndex : 'title',
							style : 'padding-top:3px;padding-left:10px;',
							allowBlank : true,
							fieldLabel : '标题',
							anchor : '90%',
							xtype : 'displayfield'
						}, {
							id : 'announceContent',
							dataIndex : 'content',
							style : 'padding-top:3px;padding-left:10px;',
							anchor : '90%',
							fieldLabel : '内容',
							style : 'padding-top:3px;padding-left:10px;border:2px solid #D2D2D2',
							xtype : 'container',
							autoScroll : true,
							html : ""
						}, {
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.veattachId,
							postParams : {
								relationId : 0,
								groupId : 'announcefile'
							},
							isDownload : true,
							fieldLabel : '附件列表',
							title : '附件列表',
							itemId : 'attachmentlist'
						}]
			}]
		});
	}

	this.initReadWindow = function() {
		this.announceReadWindow = this.announceReadWindow
				|| new Ext.fn.ShowWindow({
					id : 'announceReaderShow',
					title : '公告制度查阅记录',
					height : 450,
					width : 800,
					resizable : false,
					minimizable : false,
					maximizable : true,
					items : [{
						xtype : 'listpanel',
						region : 'south',
						hsPage : true,
						height : 300,
						pageSize : 10,
						columns : [new Ext.grid.RowNumberer(), {
									dataIndex : 'orgnames',
									header : '机构名称'
								}, {
									dataIndex : 'nr',
									header : '查阅人及时间',
									width : 600,
									renderer : function(value, meta, record) {
										meta.attr = 'style="white-space:normal;"';
										var kvalue = value.replace(/,/g,
												'&nbsp&nbsp&nbsp');
										return kvalue;
									}
								}],
						tbar : [{
									text : '机构名称:',
									scope : this
								}, {
									xtype : 'textfield',
									scope : this,
									ref : "../orgname"
								}, {
									text : '查询',
									scope : this,
									iconCls : 'icon-application_edit',
									handler : function() {
										queryAnnounceRead(
												Ext
														.getCmp("announceReaderShow").items.items[0].orgname
														.getValue(),
												ggannounceid)
									}
								}, '-', {
									text : '重置',
									scope : this,
									handler : function() {
										Ext.getCmp("announceReaderShow").items.items[0].orgname
												.setValue();
									}
								}],
						store : new Ext.data.JsonStore({
							url : 'com.zoomlion.hjsrm.frame.tools.announce.AnnounceMananger.queryAnnouncereader2.biz.ext',
							root : 'data',
							// autoLoad : true,
							totalProperty : 'totalCount',
							fields : [{
										name : "announceid"
									}, {
										name : "orgnames"
									}, {
										name : "nr"
									}]
						})
					}],
					buildButtons : function() {
						this.buttons = [{
									text : "查看未查阅人员",
									scope : this,
									handler : function() {
										showAnnouncenotRead(ggannounceid)
									}
								}, {
									text : "刷新",
									scope : this,
									handler : function() {
										this.loadData()
									}
								}, {
									text : "关闭",
									scope : this,
									handler : function() {
										this.hide()
									}
								}]
					}
				});

	}

	this.initUploadWindow = function() {
		var _this = this;
		this.uploadForm = this.uploadForm || new Ext.form.FormPanel({
					labelAlign : 'right',
					buttonAlign : "center",
					title : '文件上传',
					labelWidth : 60,
					frame : true,
					url : "com.zoomlion.hjsrm.frame.bclib.file.UploadFileBackId.flow",
					width : 360,
					height : 100,
					fileUpload : true,
					items : [{
								xtype : 'textfield',
								fieldLabel : '文件名',
								name : 'uploadFile',
								inputType : 'file'// 文件类型
							}, {
								xtype : 'hidden',
								ref : '../relationId',
								name : 'relationId'
							}, {
								xtype : 'hidden',
								name : 'groupId',
								value : ''
							}, {
								xtype : 'hidden',
								name : 'dataorgid',
								value : dataorgid
							}, {
								xtype : 'hidden',
								name : 'operatorid',
								value : operatorid
							}, {
								xtype : 'hidden',
								name : 'operatorname',
								value : operatorname
							}]
				});

		this.uploadWindow = this.uploadWindow || new Ext.Window({
			id : 'announceuploadwindow',
			width : 360,
			modal : true,
			height : 150,
			buttonAlign : "center",
			closeAction : "hide",
			layout : "fit",
			items : [this.uploadForm],
			buttons : [{
				text : '上传',
				handler : function() {
					var groupId = _this.uploadForm.getForm()
							.findField('groupId').getValue();
					_this.uploadForm.getForm().submit({
						clientValidation : true,
						success : function(form, response) {
							Ext.Msg.alert('操作提示', '上传成功!');
							/*
							 * var fileId = response.result.fileId; var fileName =
							 * response.result.fileName; var size =
							 * response.result.fileSize; var type =
							 * response.result.fileType; var store =
							 * Ext.getCmp(_this.veattachId).getStore(); var F =
							 * new Ext.data.Record({ id : fileId, filename :
							 * fileName, size : size, type : type });
							 * store.add(F)
							 */
							if (Ext.getCmp('announceeditwindow').hidden) {
								var store = Ext.getCmp('announceinputfile')
										.getStore();
							} else {
								var store = Ext.getCmp('announceeditfile')
										.getStore();
							}

							Ext.Ajax.request({
								url : "com.zoomlion.hjsrm.frame.bclib.file.FileBclib.queryFileList.biz.ext",
								jsonData : {
									'groupId' : 'announcefile',
									'relationId' : _this.uploadForm.getForm()
											.findField('relationId').getValue()
								},
								success : function(B) {
									var A = Ext.decode(B.responseText);
									var J = A.files;
									if (J) {
										var I = [];
										for (var H = 0; H < J.length; H++) {
											var fileName = J[H].fileName;
											var fileType = fileName
													.substr(fileName
															.lastIndexOf('.'));
											I.push([J[H].fileId, J[H].fileId,
													J[H].fileName, fileType,
													J[H].fileSize, -4, 100,
													J[H].filePath])
										}
										store.removeAll();
										store.loadData(I);
										_this.uploadWindow.hide();
									}
								}
							})

						},
						failure : function(form, response) {
							Ext.Msg.alert('操作提示', '上传失败!');
						}
					});
				}
			}, {
				text : "关闭",
				handler : function() {
					_this.uploadWindow.hide()
				}
			}]
		})
	}
}
