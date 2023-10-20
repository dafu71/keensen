Ext.ns("com.zoomlion.hjsrm");
/**
 * 
 * @class com.zoomlion.hjsrm.selectParticipantsWindow
 * @extends Ext.Window
 *          <p>
 *          短信发送弹出窗
 */
com.zoomlion.hjsrm.sendMsgWindow = Ext.extend(Ext.Window, {
	title : "短信",
	resizable : false,
	modal : true,
	maximizable : false,
	closeAction : "close",
	buttonAlign : "center",
	autoScroll : true,
	width : 800,
	height : 600,
	layout : 'border',

	// 自定义属性
	msgTitle : '',// 单号
	activityinstid : '',// 活动实例Id
	processtypename : '',// 流程类型
	processinstname : '',// 流程
	activityInstName : '',// 活动实例名称
	processinstid : '',// 流程实例Id
	optflag : 0,// 操作标识（提醒为0，催办为1）

	initComponent : function() {
		var temp = this.processtypename;
		
		if( Ext.util.Format.substr(temp, temp.length - 2,2)=='流程'){
			this.processtypename = Ext.util.Format.substr(temp, 0, temp.length - 2);
		}
		
		if (this.optflag == 0) {
			this.msg = "您好，【" + this.processtypename + " 流程】单号为【"
					+ this.msgTitle + "】，在【" + this.activityInstName
					+ "】环节有未处理完业务，请您及时处理，谢谢！";
		} else {
			this.msg = "您好，编号为【" + this.msgTitle + "】的【" + this.processtypename
					+ " 流程】已经停留在您这里，请您及时办理，谢谢！";
		}

		this.buildListMsgPanel();
		this.buildMsgPanel();
		this.items = [this.listMsgPanel, this.msgPanel];
		this.buttons = [{
			text : "发送",
			scope : this,
			handler : function() {
				var A = this.listMsgPanel;
				if (!A.getSelectionModel().getSelected()) {
					Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
					return;
				} else {
					if (!this.msgPanel.form.isValid()) {
						return;
					}
					var _this = this;
					var C = A.getSelectionModel().getSelections();
					var userid = "";
					var mobileno = "";
					var empname = "";
					var contractid = this.msgTitle;
					var content = this.msgPanel.content.getValue();
					var processinstid = this.processinstid;

					Ext.each(C, function(r) {
								userid += r.data.userid + ",";
								mobileno += r.data.mobileno + ",";
								empname += r.data.empname + ",";

							})
					userid = Ext.util.Format.substr(userid, 0, userid.length
									- 1);
					mobileno = Ext.util.Format.substr(mobileno, 0,
							mobileno.length - 1);
					var mk = new Ext.LoadMask(this.id, {
								msg : '正在发送，请稍候!',
								removeMask : true
							});
					mk.show();
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.srmclient.WorkflowClient.sendMessage.biz.ext',
						jsonData : {
							"paradata/userid" : userid,
							"paradata/mobileno" : mobileno,
							"paradata/empname" : empname,
							"paradata/contractid" : contractid,
							"paradata/content" : content,
							"paradata/processinstid" : processinstid
						},
						success : function(response, action) {
							mk.hide();
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.success) {
								Ext.Msg.alert("系统提示", "发送成功!", function() {
											_this.hide();
										}, _this);
							} else {
								Ext.Msg.alert("系统提示", "发送失败!", function() {
											_this.hide();
										}, _this);
							}

						},
						failure : function(resp, opts) {
							mk.hide();
						}
					});

				}
			}
		}, {
			text : "关闭",
			scope : this,
			handler : function() {
				this.hide();
			}
		}];
		com.zoomlion.hjsrm.sendMsgWindow.superclass.initComponent.call(this);
	},
	buildListMsgPanel : function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listMsgPanel = new Ext.fn.ListPanel({
			region : 'center',
			title : '【 参与者列表 】',
			hsPage : true,
			selModel : selModel,
			delUrl : '...',
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'userid',
						header : '工号',
						sortable : false
					}, {
						dataIndex : 'empname',
						header : '姓名'
					}, {
						dataIndex : 'mobileno',
						header : '手机号码'
					}],
			store : new Ext.data.JsonStore({
				url : this.optflag == 0
						? 'com.zoomlion.hjsrm.srmclient.WorkflowClient.queryActivityUsers.biz.ext'
						: 'com.zoomlion.hjsrm.srmclient.WorkflowClient.getMsgRemindUser.biz.ext',
				root : 'data',

				autoLoad : true,
				fields : [{
							name : 'userid'
						}, {
							name : 'empname'
						}, {
							name : 'mobileno'
						}],
				baseParams : {
					activityinstid : this.activityinstid,
					rootprocessinstid : this.processinstid
				},
				listeners : {
					scope : this,
					'load' : function() {
						this.listMsgPanel.selModel.selectAll();
					}

				}
			})
		});
	},
	buildMsgPanel : function() {
		this.msgPanel = new Ext.fn.InputPanel({
					height : 80,
					pgrid : '',
					region : 'south',
					// baseCls:'',
					columns : 2,
					autoHide : false,
					border : true,
					saveUrl : '....biz.ext',
					fields : [{
								xtype : 'textarea',
								fieldLabel : '短信内容',
								dataIndex : 'content',
								name : 'content',
								anchor : '95%',
								maxLength : 250,
								colspan : 2,
								ref : '../content',
								allowBlank : false,
								value : this.msg
							}]

				})
	}

})