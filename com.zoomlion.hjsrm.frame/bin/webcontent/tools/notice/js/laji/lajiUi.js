/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 邮件接收 创建日期： 2014-11-26 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.notice.LajiMgr = function() {
	this.initPanel = function() {
		this.initlajiQueryPanel();
		this.initlajiListPanel();
		this.initlajiViewWindow();
		return new Ext.fn.fnLayOut({
					title : '垃圾箱',
					layout : 'ns',
					border : false,
					panels : [this.lajiqueryPanel, this.lajilistPanel]
				});
	};
	this.initlajiQueryPanel = function() {
		this.lajiqueryPanel = new Ext.fn.QueryPanel({
					height : 120,
					width : 700,
					columns : 3,
					title : '【 邮件查询 】',
					fields : [{
								name : 'condition/title',
								fieldLabel : '邮件主题',
								colspan : 1
							}, {
								xtype : 'textfield',
								name : 'condition/sendusername',
								fieldLabel : '发送人',
								colspan : 1
							}, {
								xtype : "dateregion",
								nameArray : ['condition/startdate',
										'condition/enddate'],
								fieldLabel : "发布时间",
								format : "Y-m-d",
								width : 200
							}]
				});
	};
	this.initlajiListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.lajilistPanel = new Ext.fn.ListPanel({
			title : '【 垃圾箱 】',
			// 屏蔽选中变色
			disableSelection : true,
			// 屏蔽鼠标移动时高亮显示
			trackMouseOver : false,
			border : false,
			id:lajilistPanel,
			stripeRows : false,
			selModel : selModel,
			pageSize : 15,
			columns : [new Ext.grid.RowNumberer(), selModel, {
				dataIndex : 'title',
				width : 400,
				header : '邮件主题',
				renderer : function(value, cellmeta, record, rowIndex,
						columnIndex, store) {
					return '<a  style="text-decoration:none"> '
							+ '<img  src="frame/ui/img/finsh.gif" >'
							+ '&nbsp&nbsp&nbsp' + value + '</a>';
				}
			}, {
				dataIndex : 'sendusername',
				header : '发送人',
				width : 400
			}, {
				dataIndex : 'sendtime',
				header : '发送时间',
				width : 400
			},{
				dataIndex : 'flag',
				header : '标志',
				hidden : true
			}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.querylajinotice.biz.ext',
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
							name : 'flag'
						}]
			}),
			tbar : [{
						text : '彻底删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					},{
						text : '还原',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onReturn
					}]
		});
	};

	this.initlajiViewWindow = function() {
		this.lerattachId = Ext.id();
		this.lajiviewWindow = this.lajiviewWindow || new Ext.fn.ShowWindow({
			id : 'noticelajiShow',
			fid : this.lerattachId,
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
					id : this.lerattachId,
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
	}

}