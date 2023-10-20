Ext.ns("com.zoomlion.hjsrm");
/**
 * 
 * @class com.zoomlion.hjsrm.empnewCombox
 * @extends Ext.Window
 *          <p>
 *          选择参与者弹出框
 */
com.zoomlion.hjsrm.empnewComboxWindow = Ext.extend(Ext.Window, {
	title : '选择机构',// 标题栏
	partTitle : '机构',// 参与者显示值
	divisionFront : "[",// 前面的分割符号
	divisionBack : "],",// 后面的分割符号
	singleSelect : false,

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
	orgid : undefined, // 角色编码
	initComponent : function() {
		this.buildParticipantsList();
		this.buildParticipantsEditPanel();
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
					var temp = record.get("orgname") + '['
							+ record.get("orgid") + '],';
					if (pts.indexOf(temp) < 0) {
						pts = pts + temp;
					}
					// alert(count);
					o.form.findField("ptStrs").setValue(pts);

				}, this);
		this.participantsListPanel.selModel.on("rowdeselect", function(sm,
						rowIndex, record) {

					var pts = o.form.findField("ptStrs").getValue();

					var temp = record.get("orgname") + '['
							+ record.get("orgid") + '],';

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

		this.items = [this.participantsListPanel, this.participantsEditPanel]
		
			this.tbar = [{
					xtype : 'label',
					text : '机构:'
				}, '-', {
					xtype : 'textfield',
					ref : '../orgnamequery',
					name : 'orgname'
				}, '-', {
					text : '查询',
					scope : this,
					handler : function() {
						var _orgname = this.orgnamequery.getValue();
						var _alluseid = this.participantsEditPanel.form
								.findField("ptStrs").getValue();
						Ext.apply(this.currentParticipant, {
									orgname : _orgname,
									alluseid : _alluseid,
									orgid:Ext.getCmp(orgidx).getValue()
								})
						this.participantsListPanel
								.doQuery(this.currentParticipant);
					}
				}, '-', {
					text : '重置',
					scope : this,
					handler : function() {
						this.orgnamequery.setValue();
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
					var temp = pts.split(",");
					var id = temp[0].substring(temp[0].indexOf('[') + 1,
							temp[0].indexOf("]"));
					var name = temp[0].substring(0, temp[0].indexOf("["));
					if(temp.length > 2){
				    for ( i = 1; i < temp.length -1; i++) {
					var id1 = temp[i].substring(temp[i].indexOf('[') + 1,
							temp[i].indexOf("]"));
					var name1 = temp[i].substring(0, temp[i].indexOf("["));
					var id = id + ','+ id1 + '';
					var name = name + ','+ name1 + '';
					}
					}
					// 响应返回事件，如需要在父窗口取得pts,则在父窗口，配置callback事件即可
					this.fireEvent('callback', pts,id);
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
		com.zoomlion.hjsrm.empnewComboxWindow.superclass.initComponent
				.call(this);
		// 构建window时就执行查询，必须写在这句话后面
		this.items.items[0].store.baseParams = {
			'empnew/orgid' : '',
			'empnew/orgname' : ''
		};
		this.items.items[0].store.load();
	},
	buildParticipantsList : function() {
		var participantsSelModel = new Ext.grid.CheckboxSelectionModel({});
		this.participantsListPanel = new Ext.fn.ListPanel({
			title : this.partTitle + '列表',
			hsPage : false,
			selModel : participantsSelModel,
			autoExpandColumn : '3',
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
						header : "机构ID",
						autoWidth : true,
						dataIndex : "orgid"
					}, {
						header : "业务机构",
						autoWidth : true,
						dataIndex : "orgname"
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.pub.busi.common.srmcommon.queryEmpnewCombo.biz.ext',
				root : 'data',
				totalProperty : 'totalCount',
				fields : [{
							name : 'orgid'// 操作员ID
						}, {
							name : 'orgname'// 所属机构
						}, {
							name : 'flag'// 业务机构

						}]
			}),
			doQuery : function(val) {
				var val = val || {};
				this.store.baseParams = {
					'empnew/orgname' : val.orgname,
					'empnew/orgid' : val.orgid,
					'empnew/alluseid' : val.alluseid
				};
				this.store.load({
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
	}
});

com.zoomlion.hjsrm.empnewCombox = Ext.extend(Ext.form.TriggerField, {
			fieldLabel : this.partTitle,
			hideTrigger : false,
			editable : false,
			triggerClass : "x-form-search-trigger",
			orgid : undefined, // 机构id
			initComponent : function() {
				this.powWindow = this.getselectWin();
				com.zoomlion.hjsrm.empnewCombox.superclass.initComponent
						.call(this);
			},
			onTriggerClick : function() {
				if (Ext.getCmp(orgidx).getValue() == null
						|| Ext.getCmp(orgidx).getValue() == "") {
					Ext.Msg.alert("系统提示", "请先选择所属公司!", function() {
								return false;
							});
				} else {
				this.powWindow.items.items[1].form.findField('ptStrs')
							.setValue(this.getValue());
				this.powWindow.orgnamequery.setValue();
				this.powWindow.items.items[0].store.removeAll();		
					this.powWindow.show();
				}

				// 返回事件
				this.powWindow.mon(this.powWindow, 'callback', function(pts,id) {
							this.setValue(pts);
							Ext.getCmp("bizorgidsxx").setValue(id);
						}, this);
			},
			getselectWin : function() {
				return new com.zoomlion.hjsrm.empnewComboxWindow({
							orgid : Ext.getCmp(orgidx).getValue()
						});
			}
		})
Ext.reg('empnewCombox', com.zoomlion.hjsrm.empnewCombox);
// demo:
// { xtype : 'selectParticipateField',
// name : 'pts',
// fieldLabel : '参与者',
// maxLength : 500,
// currentRolecode : '00062',//可以传值也可以不传值
// currentOrgcode : '',//可以传值也可以不传值
// colspan : 2
// }
