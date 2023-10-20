Ext.namespace('Srm.testxsy');

/*
 * 按角色和机构查询选择参与者
 */
Srm.testxsy.selectParticipantsTemp = Ext.extend(Ext.Window, {
	title : '选择参与者',
	closeAction : 'hide',
	layout : 'anchor',
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
		this.items = [this.participantsListPanel, this.participantsEditPanel]
		this.tbar = [{
					xtype : 'label',
					text : '工号:'
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
				}, '-', {
					text : '查询',
					scope : this,
					handler : function() {
						var _userid = this.useridquery.getValue();
						var _operatorname = this.operatornamequery.getValue();
						Ext.apply(this.currentParticipant, {
									userid : _userid,
									operatorname : _operatorname,
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
					}
				}]
		this.buttons = [{
			text : '确认',
			scope : this,
			handler : function() {
				var pts = this.participantsEditPanel.form.findField("ptStrs")
						.getValue();
				if (pts == null || pts == "") {
					alert("已选择参与者不能空！")
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
		Srm.testxsy.selectParticipantsTemp.superclass.initComponent.call(this);
		// 构建window时就执行查询，必须写在这句话后面
		this.items.items[0].store.baseParams = {
			'person/userid' : '',
			'person/operatorname' : '',
			'person/rolecode' : this.currentRolecode,
			'person/orgcode' : this.currentOrgcode
		};
		this.items.items[0].store.load();
	},
	buildParticipantsList : function() {
		var participantsSelModel = new Ext.grid.CheckboxSelectionModel({});
		this.participantsListPanel = new Ext.fn.ListPanel({
			title : '参与者列表',
			hsPage : true,
			selModel : participantsSelModel,
			height : 400,
			tbar : [{
				text : '选择',
				scope : this,
				iconCls : 'icon-application_add',
				handler : function() {
					var selectrs = participantsSelModel.getSelections();
					var count = participantsSelModel.getCount();
					if (count <= 0) {
						alert("没有选定数据，请选定数据行！");
						return false;
					}
					var pts = this.participantsEditPanel.form
							.findField("ptStrs").getValue();
					for (var i = 0; i < count; i++) {
						var temp = selectrs[i].get("operatorname") + "("
								+ selectrs[i].get("userid") + "),";
						if (pts.indexOf(temp) < 0) {
							pts = pts + temp;
						}
					}
					// alert(count);
					this.participantsEditPanel.form.findField("ptStrs")
							.setValue(pts);

				}
			}, {
				text : '取消',
				scope : this,
				iconCls : 'icon-application_delete',
				handler : function() {
					var selectrs = participantsSelModel.getSelections();
					var count = participantsSelModel.getCount();
					if (count <= 0) {
						alert("没有选定数据，请选定数据行！");
						return false;
					}
					for (var i = 0; i < count; i++) {

						var pts = this.participantsEditPanel.form
								.findField("ptStrs").getValue();
						var temp = selectrs[i].get("operatorname") + "("
								+ selectrs[i].get("userid") + "),";
						if (pts.indexOf(temp) > -1) {
							var start = pts.indexOf(temp);
							var end = start + temp.length;
							var len = pts.length;
							var temp1 = pts.substring(0, start);
							var temp2 = pts.substring(end, len);
							pts = temp1 + temp2;
						}
						this.participantsEditPanel.form.findField("ptStrs")
								.setValue(pts);
					}

				}
			}],
			columns : [new Ext.grid.RowNumberer(), participantsSelModel, {
						hiddenName : 'name',
						dataIndex : 'operatorname',
						header : '姓名',
						sortable : false,
						autoWidth : true
					}, {
						hiddenName : 'id',
						dataIndex : 'userid',
						header : '工号',
						sortable : false,
						autoWidth : true
					}, {
						dataIndex : 'mobileno',
						header : '联系方式',
						sortable : false,
						autoWidth : true
					}, {
						dataIndex : 'orgname',
						header : '机构',
						sortable : false,
						autoWidth : true
					}, {
						dataIndex : 'typeCode',
						header : '',
						sortable : false,
						hidden : true,
						value : 'person',
						autoWidth : true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.testxsy.publiccomponent.queryParticipantsByRoleOrOrg.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				fields : [{
							name : 'operatorid'
						}, {
							name : 'operatorname'
						}, {
							name : 'userid'
						}, {
							name : 'mobileno'
						}, {
							name : 'roleid'
						}, {
							name : 'rolecode'
						}, {
							name : 'rolename'
						}, {
							name : 'orgid'
						}, {
							name : 'orgcode'
						}, {
							name : 'orgname'
						}, {
							name : 'pid'
						}]
			}),
			doQuery : function(val) {
				var val = val || {};
				this.store.baseParams = {
					'person/userid' : val.userid,
					'person/operatorname' : val.operatorname,
					'person/rolecode' : val.rolecode,
					'person/orgid' : val.orgid
				};
				this.store.load({
							params : {
								"pageCond/begin" : 0,
								"pageCond/length" : this.pagingToolbar.pageSize
							}
						});
			}

		});
	},
	buildParticipantsEditPanel : function() {
		this.participantsEditPanel = new Ext.fn.InputPanel({
					xtype : 'inputpanel',
					pgrid : this.participantsListPanel,
					saveUrl : '...',
					columns : 1,
					fields : [{
								xtype : 'textarea',
								fieldLabel : '已选择参与者',
								name : "ptStrs",
								readOnly : true,
								hidden : false
							}]
				});
	}
});

Srm.testxsy.selectParticipateField = Ext.extend(Ext.form.TriggerField, {
			fieldLabel : '参与者',
			hideTrigger : false,
			editable : false,
			triggerClass : "x-form-search-trigger",
			currentRolecode : undefined, // 角色编码
			currentOrgcode : undefined, // 机构编码
			initComponent : function() {
				this.powWindow = this.getselectWin();
				Srm.testxsy.selectParticipateField.superclass.initComponent
						.call(this);
			},
			onTriggerClick : function() {
				this.powWindow.items.items[1].form.findField('ptStrs')
						.setValue(this.getValue());
				this.powWindow.show();				
				this.powWindow.mon(this.powWindow, 'callback', function(pts) {
							this.setValue(pts);
						}, this);
			},
			getselectWin : function() {
				return new Srm.testxsy.selectParticipantsTemp({
							currentRolecode : this.currentRolecode,
							currentOrgcode : this.currentOrgcode
						});
			}
		})
Ext.reg('selectParticipateField', Srm.testxsy.selectParticipateField);