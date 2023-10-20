Ext.namespace('Srm.workflows');
/**
 * 
 * @class Srm.workflows.ComplementWin
 * @extends Ext.Window
 *          <p>
 *          补话窗口
 */
Srm.workflows.ComplementWin = Ext.extend(Ext.Window, {
	title : '工作单补话信息',
	closeAction : 'hide',
	layout : 'anchor',
	sendListPanel : undefined,
	modal : true,
	collapsible : true,
	maximizable : true,
	width : 800,
	height : 400,
	buttonAlign : 'center',
	initComponent : function() {
		this.buildComplementList();
		this.buildComplementPanel();
		this.buildItems();
		this.buildButtons();
		this.buildEditComplementWin();
		Srm.workflows.ComplementWin.superclass.initComponent.call(this);
	},
	buildItems : function() {
		this.items = [this.inputPanel, this.listPanel];
	},
	buildButtons : function() {
		this.buttons = [{
					text : '关闭',
					scope : this,
					handler : function() {
						this.hide();
						this.sendListPanel.refresh();
					}
				}]
	},
	buildComplementList : function() {
		this.complementedModel = new Ext.grid.CheckboxSelectionModel();
		this.listPanel = new Ext.fn.ListPanel({
			title : '补话信息列表',
			hsPage : false,
			delUrl : 'com.zoomlion.hjsrm.pub.businessclib.demand.order.ComplementOrder.deleteComplement.biz.ext',
			tbar : ["->", {
						text : '补话',
						scope : this,
						iconCls : 'icon-text_complete',
						handler : function() {
							if (!this.inputPanel.getForm().isValid()) {
								return;
							}
							var _this = this;
							Ext.Msg.confirm("系统提示", "您确定要补话吗?", function(
											btnText) {
										if (btnText == "yes") {
											_this.inputPanel.saveData();
										}
									}, this);
						}
					}, "-", {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : function() {
							var selections = this.listPanel.getSelectionModel()
									.getSelections();
							for (var i = 0; i < selections.length; i++) {
								var state = selections[i].get("commstate");
								if (state == commState) {
									Ext.Msg.alert("系统提示", "补话状态为已查看，不能修改！");
									return false;
								}
							}
							if (selections.length < 1) {
								Ext.Msg.alert("系统提示", "请选择一条补话记录!");
								return false;
							} else if (selections.length > 1) {
								Ext.Msg.alert("系统提示", "只能选择一条补话记录!");
								return false;
							}
							this.editFillwordWin.show();
							this.editFillwordWin.loadData(new Ext.data.Record({
										'pkid' : selections[0].get("pkid")
									}));
						}
					}, "-", {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : function() {
							var records = this.listPanel.getSelectionModel()
									.getSelections();
							for (var i = 0; i < records.length; i++) {
								var state = records[i].get("commstate");
								if (state == commState) {
									Ext.Msg.alert("系统提示", "补话状态为已查看，不能删除！");
									return false;
								}
							}
							this.listPanel.onDel();
						}
					}],
			anchor : '100% 60%',
			columns : [new Ext.grid.RowNumberer(), this.complementedModel, {
						header : "补话状态",
						xtype : 'dictcolumn',
						width : 150,
						dictData : SQ_COMPLEMENT_COMMSTATE,
						dataIndex : "commstate"
					}, {
						header : "补话内容",
						width : 240,
						dataIndex : "content",
						renderer : function(value, metaData, record, rowIndex,
								colIndex, store) {
							if (!value) {
								return;
							}
							metaData.attr = 'ext:qtip=' + value
									+ ' ext:qwidth=300';
							return value;
						}
					}, {
						header : "操作员",
						width : 150,
						dataIndex : "createby"
					}, {
						header : "操作时间",
						width : 150,
						dataIndex : "createtime"
					}],
			sm : this.complementedModel,
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.pub.businessclib.demand.order.ComplementOrder.queryComplementByOrder.biz.ext',
				root : 'data',
				fields : ['pkid', 'content', 'commstate', 'createby',
						'createtime']
			})
		});
	},
	buildComplementPanel : function() {
		var _this = this;
		this.inputPanel = new Ext.fn.InputPanel({
			saveUrl : 'com.zoomlion.hjsrm.pub.businessclib.demand.order.ComplementOrder.addComplement.biz.ext',
			columns : 2,
			pgrid : this.listPanel,
			autoHide : false,
			anchor : '100% 40%',
			listeners : {
				'aftersave' : function() {
					_this.sendListPanel.refresh();
					_this.listPanel.refresh();
					_this.inputPanel.priority.setValue(5);
					_this.inputPanel.content.setValue("");
				}
			},
			fields : [{
						name : "entity/applyinfopkid",
						hidden : true
					}, {
						name : "entity/busipkid",
						hidden : true
					}, {
						fieldLabel : '优先级',
						ref:'../priority',
						xtype : "dictcombobox",
						dictData : SQ_PRIORITY,
						value : 5,
						colspan : 1,
						hiddenName : "entity/priority"
					}, {
						xtype : 'textarea',
						fieldLabel : '补话内容',
						ref:'../content',
						allowBlank : false,
						maxLength : 250,
						name : 'entity/content',
						colspan : 2
					}]
		});
	},
	buildEditComplementWin : function() {
		// 创建补话修改panel
		this.fillwordEditPanel = new Ext.fn.EditPanel({
			loadUrl : "com.zoomlion.hjsrm.pub.businessclib.demand.order.ComplementOrder.loadComplementByPkid.biz.ext",
			saveUrl : 'com.zoomlion.hjsrm.pub.businessclib.demand.order.ComplementOrder.updateComplement.biz.ext',
			pgrid : this.listPanel,
			columns : 2,
			fields : [{
						xtype : "textfield",
						name : "entity/pkid",
						dataIndex : 'pkid',
						hidden : true
					}, {
						fieldLabel : '优先级',
						xtype : "dictcombobox",
						dictData : SQ_PRIORITY,
						dataIndex : "priority",
						hiddenName : "entity/priority"
					}, {
						xtype : 'textarea',
						fieldLabel : '补话内容',
						allowBlank : false,
						maxLength : 250,
						name : 'entity/content',
						dataIndex : 'content',
						anchor : '90%',
						colspan : 2
					}]
		});
		// 创建补话信息打开窗口--点击补话修改按钮打开
		this.editFillwordWin = this.editFillwordWin || new Ext.fn.FormWindow({
					title : '补话修改',
					buttonAlign : 'center',
					height : 300,
					layout : 'fit',
					width : 800,
					modal : true,
					autoScroll : true,
					closeAction : 'hide',
					collapsible : true,
					padding : '5 5 5 5',
					animCollapse : false,
					items : [this.fillwordEditPanel]
				});
	}
});