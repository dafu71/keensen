Ext.namespace('Srm.workflows');
/**
 * 
 * @class Srm.workflows.NotifyWin
 * @extends Ext.Window
 *          <P>
 *          知会窗口
 *          <p>
 *          依赖业务字典 SQ_NOTIFYMSG_NOFITYSTATE
 */
Srm.workflows.NotifyWin = Ext.extend(Ext.Window, {
	title : '工作单知会信息',
	layout : 'border',
	sendListPanel : undefined,
	modal : true,
	collapsible : true,
	maximizable : true,
	closeAction : 'hide',
	width : 800,
	height : 400,
	buttonAlign : 'center',
	initComponent : function() {
		this.buildNotifyList();
		this.buildNotifyEditPanel();
		this.buildItems();
		this.buildButtons();
		this.buildEditNotifyWin();
		Srm.workflows.NotifyWin.superclass.initComponent.call(this);
	},
	buildItems : function() {
		this.items = [this.inputPanel, this.notifiedListPanel];
	},
	buildButtons : function() {
		this.buttons = [ {
						    text : '关闭',
						    scope : this,
						    handler : function() {
							   this.hide();
							   this.sendListPanel.refresh();
						    }
				       }]
	},
	buildNotifyEditPanel : function() {
		var _this = this;
		this.inputPanel = new Ext.fn.InputPanel({
			saveUrl : 'com.zoomlion.hjsrm.pub.businessclib.demand.order.NotifyOrder.addNotify.biz.ext',
			columns : 2,
			region:'north',
			height:120,
			autoHide : false,
			pgrid : this.notifyListPanel,
			listeners :{
				'aftersave':function (){
					_this.sendListPanel.refresh();
					_this.notifiedListPanel.refresh();
					//_this.inputPanel.content.setValue("");
				}
			},
			fields : [{
						xtype : "textfield",
						name : "entity/applyinfopkid",
						hidden : true
					}, {
						xtype : 'optselectfield',
						selModel : 'single',
						hiddenName : "entity/people",
						ref:'../people',
						fieldLabel : "知会人",
						allowBlank : false,
						isSingleSelect : true,
						valueField : 'userid',
						displayField : 'empname'
					}, {
						xtype : 'textarea',
						fieldLabel : '知会说明',
						allowBlank : false,
					    maxLength:250,
					    ref:'../content',
						name : 'entity/content',
						colspan : 2
					}]
		});
	},
	buildNotifyList : function() {
		this.notifiedModel = new Ext.grid.CheckboxSelectionModel();
		this.notifiedListPanel = new Ext.fn.ListPanel({
			title : '知会信息列表',
			hsPage : false,
			region : 'center',
			delUrl : 'com.zoomlion.hjsrm.pub.businessclib.demand.order.NotifyOrder.deleteNotify.biz.ext',
			tbar : ["->", {
						    text : '知会',
							scope : this,
							iconCls : 'icon-note_go',
							handler:function(){
								if(!this.inputPanel.getForm().isValid()){
										return;
									}
							    Ext.Msg.confirm("系统提示", "您确定知会吗?", function(btnText) {
								    if (btnText == "yes") {
								        this.inputPanel.saveData();
									}
				                },this);
							}
						}, "-",{
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler :function(){
							var selections = this.notifiedListPanel.getSelectionModel().getSelections();
							for (var i = 0; i < selections.length; i++) {
			                    var state = selections[i].get("nofitystate");
							    if(state == notifyState){
								    Ext.Msg.alert("系统提示", "知会状态为已查看，不能修改！");
								    return false;
								}
							}
							if (selections.length < 1) {
								Ext.Msg.alert("系统提示", "请选择一条知会信息!");
								return false;
							} else if (selections.length >1){
								Ext.Msg.alert("系统提示", "只能选择一条知会信息!");
								return false;
							}
						    this.editNotifyWin.show();
							this.editNotifyWin.loadData(new Ext.data.Record({'pkid' : selections[0].get("pkid")}));
						}
					}, "-",{
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler:function(){
							var records = this.notifiedListPanel.getSelectionModel().getSelections();
							for (var i = 0; i < records.length; i++) {
			                    var state = records[i].get("nofitystate");
							    if(state == notifyState){
								    Ext.Msg.alert("系统提示", "知会状态为已查看，不能删除！");
								    return false;
								}
							}
							this.notifiedListPanel.onDel();
				        }
					}],
			anchor : '100% 50%',
			columns : [new Ext.grid.RowNumberer(), this.notifiedModel, {
						header : "知会状态",
						width:150,
						xtype : 'dictcolumn',
						dictData : SQ_NOTIFYMSG_NOFITYSTATE,
						dataIndex : "nofitystate"
					}, {
						header : "知会人",
						width:150,
						dataIndex : "people"
					}, {
						header : "知会内容",
						width:240,
						dataIndex : "content",
						renderer:function(value, metaData, record, rowIndex, colIndex, store){
							if(!value){
								return;	
							}
							metaData.attr='ext:qtip='+value+' ext:qwidth=300';
							return value;
						}
					}, {
						header : "知会时间",
						width:150,
						dataIndex : "updatetime"
					}],
			sm : this.notifiedModel,
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.pub.businessclib.demand.order.NotifyOrder.queryNotifyByOrder.biz.ext',
				root : 'data',
				fields : ['pkid', 'nofitystate', 'people', 'content',
						'updatetime']
			})
		});
	},
	buildEditNotifyWin: function() {
		var scope = this;
		//创建知会修改panel
		this.notifyEditPanel = this.notifyEditPanel ||new Ext.fn.EditPanel({
			loadUrl : "com.zoomlion.hjsrm.pub.businessclib.demand.order.NotifyOrder.loadNotifyByPkid.biz.ext",
			saveUrl : 'com.zoomlion.hjsrm.pub.businessclib.demand.order.NotifyOrder.updateNotify.biz.ext',
			pgrid : this.notifiedListPanel,
			columns : 2,
			fields : [{
					xtype : "textfield",
					name : "entity/pkid",
					dataIndex : 'pkid',
					hidden : true
				}, {
					xtype : 'optselectfield',
			 		title:'知会信息',
					name:'entity/people2',
					hiddenName:'entity/people',
					fieldLabel : "知会人",
					allowBlank : false,
					ref:'../../people',
					dataIndex : 'people',
					valueField:'userid',
	                displayField:'empname',
	                hidden:true
				},{
					xtype : 'textarea',
					fieldLabel : '知会说明',
					allowBlank : false,
					maxLength:250,
					name : 'entity/content',
					dataIndex : 'content',
					colspan : 2
				}],
			listeners: {
				'beforesave':function(panel){
				   //this.panel.get
				//	var form = this.editNotifyWin.items.get(0).getForm();
		           // form.findField("entity/people").getValue();
				}
			}
		});
		//创建知会记录窗口--点击知会按钮打开
		this.editNotifyWin = this.editNotifyWin || new Ext.fn.FormWindow({
					title : '知会记录修改',
					buttonAlign : 'center',
					layout: 'fit',
					height : 250,
					width : 700,
					modal : true,
					autoScroll : true,
					closeAction : 'hide',
					collapsible : true,
					items : [this.notifyEditPanel]
		});
	}
});