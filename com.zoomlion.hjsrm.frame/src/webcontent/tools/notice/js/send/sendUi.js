/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 邮件发送 创建日期： 2014-11-26 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.notice.SendMgr = function() {

	this.initPanel = function() {
		this.initsendQueryPanel();
		this.initsendSendPanel();
		this.initsendListPanel();
		this.initsendInputWindow();
		this.initViewSendWindow();
		this.initsendReadWindow();
		this.initsendnotReadWindow();
		
		this.initUploadWindow();
		
		return new Ext.fn.fnLayOut({
					title : '发件箱',
					layout : 'ns',
					border : false,
					panels : [this.sendqueryPanel, this.sendlistPanel]
				});
	};
	this.initsendQueryPanel = function() {
		this.sendqueryPanel = new Ext.fn.QueryPanel({
					height : 130,
					width : 700,
					columns : 3,
					title : '【 邮件查询 】',
					fields : [{
								name : 'query/title',
								fieldLabel : '邮件主题',
								colspan : 1
							}, {
								xtype : 'textfield',
								name : 'query/recvusername',
								fieldLabel : '接收人',
								colspan : 1
							}, {
								xtype : "dateregion",
								name : "entity",
								fieldLabel : "发布时间",
								format : "Y-m-d"
							}]
				});
	};
	this.initsendSendPanel = function() {
		this.attachId = Ext.id();
		this.pts = Ext.id();
		this.sendsendPanel = this.sendsendPanel || new Ext.fn.InputPanel({
					columns : 1,
					saveUrl : '...',
					border : false,
					fields : [{
								xtype : 'selectParticipateField2',
								name : 'operatorname',
								selModel : 'merger',
								fieldLabel : '接收人',
								anchor : '90%',
								id : this.pts,
								displayField : 'operatorname',// 必填
								hiddenName : 'userid',// 必填
								valueField : 'userid',
								isSingleSelect : false,
								// colspan : 2,
								allowBlank : false,
								blankText : "请选择接收人员！"
							}, {
								xtype : 'textfield',
								name : 'noticeid',
								dataIndex : 'noticeid',
								hidden : true
							}, {
								xtype : 'datetimefield',
								name : 'noticetime',
								fieldLabel : '发送时间',
								// colspan : 1,
								anchor : '90%',
								format : 'Y-m-d H:i:s',
								hidden : true,
								value : new Date()
							}, {
								xtype : 'textarea',
								name : 'title',
								fieldLabel : '主题',
								// colspan : 1,
								anchor : '90%',
								allowBlank : false,
								blankText : "请输入主题！",
								height : 50
							}, {
								xtype : 'htmleditor',
								allowBlank : false,
								fieldLabel : '内容',
								anchor : '90%',
								name : 'content',
								dataIndex : 'content',
								height : 250
							}, {
								colspan : 2,
								width : 700,
								isUploaded : false,
								xtype : 'attachmentlist',
								name : 'attachlist',
								ref : '../attachlist',
								id : this.attachId,
								postParams : {
									relationId : 0,
									groupId : 'noticefile',
									dataorgid : dataorgid,
									operatorid : operatorid,
									operatorname : operatorname
								},
								isDownload : this.isDownload,
								fieldLabel : '附件列表',
								title : '附件列表',
								itemId : 'attachmentlist'
							}]
				});
	}

	this.initsendInputWindow = function() {
		var _this = this;
		this.sendinputWindow = this.sendinputWindow || new Ext.fn.FormWindow({
					title : '发送邮件',
					xtype : 'inputpanel',
					pgrid : this.sendsendPanel,
					height : 550,
					width : 800,
					items : [_this.sendsendPanel],
					buildButtons : function() {
						this.buttons = [{
									text : '发送',
									scope : this,
									handler : function() {
										_this.onSendOk();
									}
								}, {
									text : '关闭',
									scope : this,
									handler : function() {
										this.hide();
									}
								}]
					}
				})
	};

	this.initViewSendWindow = function() {
		this.veattachId = Ext.id();
		this.viewsendWindow = this.viewsendWindow || new Ext.fn.ShowWindow({
			id : 'noticesendShow',
			fid : this.veattachId,
			title : '查阅邮件',
			height : 550,
			width : 800,
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'viewpanel',
				columns : 1,
				autoScroll : true,
				loadUrl : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.getNoticeInfobyidsend.biz.ext',
				fields : [{
							name : 'notice/title',
							dataIndex : 'title',
							style : 'padding-top:3px;padding-left:10px;',
							allowBlank : true,
							fieldLabel : '主题',
							anchor : '90%',
							xtype : 'displayfield'
						}, {
							name : 'notice/content',
							dataIndex : 'content',
							style : 'padding-top:3px;padding-left:10px;border:2px solid #D2D2D2;',
							anchor : '90%',
							fieldLabel : '内容',
							xtype : 'displayfield',
							autoScroll : true,
							height : 300,
							html : ""
						}, {
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.veattachId,
							postParams : {
								relationId : 0,
								groupId : 'noticefile'
							},
							isDownload : true,
							fieldLabel : '附件列表',
							title : '附件列表',
							itemId : 'attachmentlist'
						}]
			}]
		});
	};

	this.initsendListPanel = function() {
		var width = Ext.getCmp('spacepanel').getWidth() - 25;
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.sendlistPanel = new Ext.fn.ListPanel({
			title : '【 发件箱 】',
			// 屏蔽选中变色
			disableSelection : true,
			// 屏蔽鼠标移动时高亮显示
			trackMouseOver : false,
			border : false,
			id:sendlistPanel,
			stripeRows : false,
			selModel : selModel,
			delUrl : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.delsendnotice.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
				dataIndex : 'title',
				width : 400,
				header : '邮件主题',
				renderer : function(value, cellmeta, record, rowIndex,
						columnIndex, store) {
					return '<a  style="text-decoration:none" href="javascript:showNoticesend('
							+ record.get("noticeid")
							+ ')"> '
							+ '<img  src="frame/ui/img/readmail.gif" >'
							+ '&nbsp&nbsp&nbsp' + value + '</a>';
				}
			}, {
				dataIndex : 'recvusername',
				header : '接收人',
				width : 400
			}, {
				dataIndex : 'sendtime',
				header : '发送时间',
				width : 300
			}, {
				dataIndex : 'title',
				width : 100,
				header : '查阅情况',
				renderer : function(value, cellmeta, record, rowIndex,
						columnIndex, store) {
					return '<a href="javascript:showNoticesendread('
							+ record.get("noticeid")
							+ ')"> '
							+ '<img  src="frame/ui/img/vote_item.gif" ext:qtip="点击查询查阅信息">'
							+ '</a>';
				}
			}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.getNoticehissend.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'noticeid'
						}, {
							name : 'title'
						}, {
							name : 'sendtime'
						}, {
							name : 'recvusername'
						}]
			}),
			tbar : [{
						text : '写邮件',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSend
					}, {
						text : '撤销邮件',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDelsend
					}, {
						text : '删除邮件',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}]
		});
	};
	this.initsendReadWindow = function() {
		this.noticesendReadWindow = this.noticesendReadWindow
				|| new Ext.fn.ShowWindow({
					id : 'noticesendreadShow',
					title : '邮件查阅记录',
					height : 450,
					width : 800,
					resizable : true,
					minimizable : false,
					maximizable : true,
					defaults : {
						autoScroll : true
					},
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
										queryNoticesendread(
												Ext
														.getCmp("noticesendreadShow").items.items[0].orgname
														.getValue(), ggnoticeid)
									}
								}, '-', {
									text : '重置',
									scope : this,
									handler : function() {
										Ext.getCmp("noticesendreadShow").items.items[0].orgname
												.setValue();
									}
								}],
						store : new Ext.data.JsonStore({
							url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.getNoticereadrecond2.biz.ext',
							root : 'data',
							// autoLoad : true,
							totalProperty : 'totalCount',
							fields : [{
										name : "noticeid"
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
										showNoticesendnotread(ggnoticeid)
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
	};

	this.initsendnotReadWindow = function() {
		this.noticesendnotReadWindow = this.noticesendnotReadWindow
				|| new Ext.fn.ShowWindow({
					id : 'noticenotReadShow',
					title : '邮件未查阅记录',
					height : 450,
					width : 800,
					resizable : true,
					minimizable : false,
					maximizable : true,
					defaults : {
						autoScroll : true
					},
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
									header : '未查阅人',
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
									ref : "../orgnames"
								}, {
									text : '查询',
									scope : this,
									iconCls : 'icon-application_edit',
									handler : function() {
										queryNoticenotRead(
												Ext.getCmp("noticenotReadShow").items.items[0].orgnames
														.getValue(), ggnoticeid)
									}
								}, '-', {
									text : '重置',
									scope : this,
									handler : function() {
										Ext.getCmp("noticenotReadShow").items.items[0].orgnames
												.setValue();
									}
								}],
						store : new Ext.data.JsonStore({
							url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.getNoticenotreadrecond.biz.ext',
							root : 'data',
							// autoLoad : true,
							totalProperty : 'totalCount',
							fields : [{
										name : "noticeid"
									}, {
										name : "orgnames"
									}, {
										name : "nr"
									}]
						})
					}]

				})
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
								value : 'noticefile'
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
							_this.uploadForm.getForm().submit({
								clientValidation : true,
								success : function(form, response) {
									Ext.Msg.alert('操作提示', '上传成功!');
									var fileId = response.result.fileId;
									var fileName = response.result.fileName;
									var store = _this.sendsendPanel.attachlist
											.getStore();
									var F = new Ext.data.Record({
												id : fileId,
												filename : fileName
											});
									store.add(F)

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