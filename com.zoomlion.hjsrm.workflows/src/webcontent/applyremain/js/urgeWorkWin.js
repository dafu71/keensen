Ext.namespace('Srm.workflows');
/**
 * 
 * @class Srm.workflows.UrgeWorkWin
 * @extends Ext.Window
 *          <p>
 *          催办管理 依赖业务字典: SQ_URGEREC_PRIORITY
 */
Srm.workflows.UrgeWorkWin = Ext.extend(Ext.Window, {
	title : '工作单催办信息',
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
		this.buildUrgeEditPanel();
		this.buildUrgeList();
		this.items = [this.urgeWorkPanel, this.urgeWorkList]
		this.buttons = [{
					text : '关闭',
					scope : this,
					handler : function() {
						this.hide();
						this.sendListPanel.refresh();
					}
				}]
		Srm.workflows.UrgeWorkWin.superclass.initComponent.call(this);
	},
	buildUrgeList : function() {
		this.urgerecedModel = new Ext.grid.CheckboxSelectionModel();
		this.urgeWorkList = new Ext.fn.ListPanel({
			title : '催办记录列表',
			hsPage : false,
			height : 200,
			tbar : ["->", {
						text : '催办',
						scope : this,
						iconCls : 'icon-user_tick',
						handler : function() {
							if(!this.urgeWorkPanel.getForm().isValid()){
										return;
									}
							Ext.Msg.confirm("系统提示", "您确定要催办吗?", function(
											btnText) {
										if (btnText == "yes") {
											this.urgeWorkPanel.saveData();
										}
									}, this);
						}
					}],
			columns : [this.urgerecedModel, {
						header : "催办时间",
						width : 180,
						dataIndex : "updatetime"
					}, {
						header : "受理员",
						width : 160,
						dataIndex : "processor"
					}, {
						header : "催办级别",
						xtype : 'dictcolumn',
						width : 150,
						dictData : SQ_URGEREC_PRIORITY,
						dataIndex : "priority"
					}, {
						header : "催办内容",
						width : 250,
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
					}],
			sm : this.urgerecedModel,
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.pub.businessclib.demand.order.UrgerecOrder.queryUrgerecByOrder.biz.ext',
				root : 'data',
				fields : ['content', 'processor', 'priority', 'updatetime']
			})
		});
	},
	buildUrgeEditPanel : function() {
		var _this = this;
		this.urgeWorkPanel = new Ext.fn.InputPanel({
			saveUrl : 'com.zoomlion.hjsrm.pub.businessclib.demand.order.UrgerecOrder.addUrgerec.biz.ext',
			columns : 2,
			pgrid : this.urgeWorkList,
			autoHide : false,
			listeners : {
				'aftersave' : function() {
					_this.sendListPanel.refresh();
					_this.urgeWorkList.refresh();
					_this.urgeWorkPanel.content.setValue();
				}
			},
			fields : [{
						name : "entity/applyinfopkid",
						hidden : true
					}, {
						name : "entity/processinstid",
						hidden : true
					}, {
						name : "entity/busipkid",
						hidden : true
					}, {
						fieldLabel : '优先级',
						xtype : "dictcombobox",
						value : '2',
						dictData : SQ_PRIORITY,
						hiddenName : "entity/urglvl"
					}, {
						fieldLabel : '催办级别',
						xtype : "dictcombobox",
						dictData : SQ_URGEREC_PRIORITY,
						allowBlank : false,
						hiddenName : "entity/priority"
					}, {
						xtype : 'optselectfield',
						selModel : 'single',
						hiddenName : "entity/processor",
						fieldLabel : "处理员",
						allowBlank : false,
						isSingleSelect : true,
						width : 213,
						valueField : 'userid',
						displayField : 'empname'
					}, {
						xtype : 'textarea',
						fieldLabel : '催办内容',
						ref:'../content',
						allowBlank : false,
						maxLength : 250,
						name : 'entity/content',
						colspan : 2
					}]
		});
	}
});