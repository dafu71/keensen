/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 邮件接收 创建日期： 2014-11-26 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.notice.RecvuseMgr = function() {
	this.initPanel = function() {
		this.initrecvuseQueryPanel();
		this.initrecvuseSendPanel();
		this.initrecvuseListPanel();
		this.initrecvuseInputWindow();
		this.initrecvuseViewWindow();

		this.initUploadWindow();
		return new Ext.fn.fnLayOut({
					title : '收件箱',
					layout : 'ns',
					border : false,
					panels : [this.recvusequeryPanel, this.recvuselistPanel]
				});
	};
	this.initrecvuseSendPanel = function() {
		this.attachId = Ext.id();
		this.pts = Ext.id();
		this.recvusesendPanel = this.recvusesendPanel
				|| new Ext.fn.InputPanel({
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
										ref : '../attachlist',
										xtype : 'attachmentlist',
										name : 'attachlist',
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

	this.initrecvuseInputWindow = function() {
		var _this = this;
		this.recvuseinputWindow = this.recvuseinputWindow
				|| new Ext.fn.FormWindow({
							title : '发送邮件',
							xtype : 'inputpanel',
							pgrid : this.recvusesendPanel,
							height : 550,
							width : 800,
							items : [_this.recvusesendPanel],
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
	this.initrecvuseQueryPanel = function() {
		this.recvusequeryPanel = new Ext.fn.QueryPanel({
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
								name : 'query/sendusername',
								fieldLabel : '发送人',
								colspan : 1
							}, {
								name : 'query/readstatus',
								fieldLabel : '阅读状态',
								xtype : 'dictcombobox',
								dataIndex : 'query/readstatus',
								hiddenName : 'query/readstatus',
								layout : 'fit',
								dictData : AT_NOTICEINFOREADSTATUS
							}, {
								xtype : "dateregion",
								name : "entity",
								fieldLabel : "发布时间",
								format : "Y-m-d",
								width : 2000
							}]
				});
	};
	this.initrecvuseListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.recvuselistPanel = new Ext.fn.ListPanel({
			title : '【 收件箱 】',
			// 屏蔽选中变色
			disableSelection : true,
			// 屏蔽鼠标移动时高亮显示
			trackMouseOver : false,
			id : recvuselistPanel,
			selModel : selModel,
			delUrl : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.delrecvusenotice.biz.ext',
			border : false,
			stripeRows : false,
			pageSize : 15,
			columns : [new Ext.grid.RowNumberer(), selModel, {
				dataIndex : 'title',
				width : 400,
				header : '邮件主题',
				renderer : function(value, cellmeta, record, rowIndex,
						columnIndex, store) {

					if (record.get('readstatus') == '1') {
						return '<a style="text-decoration:none" href="javascript:showNotice('
								+ record.get("noticeid")
								+ ')"> '
								+ '<img  src="frame/ui/img/new_mail.gif" ext:qtip="未读">'
								+ '&nbsp&nbsp&nbsp' + value + '</a>';
					} else {
						return '<a style="text-decoration:none" href="javascript:showNotice('
								+ record.get("noticeid")
								+ ')"> '
								+ '<img  src="frame/ui/img/readmail.gif" ext:qtip="已读">'
								+ '&nbsp&nbsp&nbsp' + value + '</a>';
					}

				}
			}, {
				dataIndex : 'sendusername',
				header : '发送人',
				width : 400
			}, {
				dataIndex : 'sendtime',
				header : '发送时间',
				width : 400
			}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.getNoticeHis.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'noticeid'
						}, {
							name : 'title'
						}, {
							name : 'sendusername'
						}, {
							name : 'sendtime'
						}, {
							name : 'recvusername'
						}, {
							name : 'content'
						}, {
							name : 'readstatus'
						}]
			}),
			tbar : [{
						text : '写邮件',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSend
					}, {
						text : '删除邮件',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}]
		});
	};

	this.initrecvuseViewWindow = function() {
		this.verattachId = Ext.id();
		this.recvuseviewWindow = this.recvuseviewWindow
				|| new Ext.fn.ShowWindow({
					id : 'noticeShow',
					fid : this.verattachId,
					title : '查阅邮件',
					height : 550,
					width : 800,
					resizable : true,
					minimizable : false,
					maximizable : true,
					defaults : {
						autoScroll : true
					},
					items : [{
						xtype : 'viewpanel',
						columns : 1,
						loadUrl : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.getNoticeInfobyid.biz.ext',
						fields : [{
							name : 'notice/title',
							dataIndex : 'title',
							allowBlank : true,
							fieldLabel : '主题',
							style : 'padding-top:3px;padding-left:10px;border:2px solid #D2D2D2;',
							anchor : '90%',
							xtype : 'displayfield'
						}, {
							name : 'notice/noticetime',
							dataIndex : 'noticetime',
							allowBlank : true,
							fieldLabel : '发送时间',
							style : 'padding-top:3px;padding-left:10px;border:2px solid #D2D2D2;',
							anchor : '90%',
							// format : 'Y-m-d H:i:s',
							xtype : 'displayfield'
						}, {
							name : 'notice/sendusername',
							dataIndex : 'sendusername',
							ref : '../sendusername',
							allowBlank : true,
							fieldLabel : '发送人',
							style : 'padding-top:3px;padding-left:10px;border:2px solid #D2D2D2;',
							anchor : '90%',
							xtype : 'displayfield'
						}, {
							name : 'notice/senduserid',
							dataIndex : 'senduserid',
							ref : '../senduserid',
							allowBlank : true,
							fieldLabel : '发送人ID',
							hidden : true,
							style : 'padding-top:3px;padding-left:10px;border:2px solid #D2D2D2;',
							anchor : '90%',
							xtype : 'displayfield'
						}, {
							id : 'noticeContent',
							name : 'notice/content',
							dataIndex : 'content',
							style : 'padding-top:3px;padding-left:10px;border:2px solid #D2D2D2;',
							anchor : '90%',
							fieldLabel : '内容',
							xtype : 'container',
							autoScroll : true,
							html : ""
						}, {
							isUploaded : false,
							xtype : 'attachmentlist',
							ref : '../attachlist',
							name : 'attachlist',
							id : this.verattachId,
							postParams : {
								relationId : 0,
								groupId : 'noticefile'
							},
							isDownload : true,
							fieldLabel : '附件列表',
							title : '附件列表',
							itemId : 'attachmentlist'
						}]
					}],
					buildButtons : function() {
						this.buttons = [{
							text : "回复",
							scope : this,
							handler : function() {
								answeremail(
										Ext.getCmp("noticeShow").items.items[0].sendusername
												.getValue(),
										Ext.getCmp("noticeShow").items.items[0].senduserid
												.getValue())
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
									var store = _this.recvusesendPanel.attachlist
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