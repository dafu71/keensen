Ext.namespace('Srm.workflows');
/**
 * 
 * @class Srm.workflows.OverTimeWin
 * @extends Ext.Window
 * <p>封装超时说明
 */
Srm.workflows.OverTimeWin = Ext.extend(Ext.Window, {
	title : '超时说明',
	height : 400,
	width : 800,
	collapsible : false,
	minimizable : true,
	maximizable : true,
	buttonAlign : 'center',
	closeAction : 'hide',
	modal : true,
	layout : 'border',
	initComponent : function() {
		this.buildListPanel();
		this.buildEditFormPanel();
		this.buildItems();
		this.buildButtons();
		Srm.workflows.OverTimeWin.superclass.initComponent.call(this);
	},
	buildButtons : function() {
		this.buttons = [{
					text : '保存',
					scope : this,
					handler : this.onSave
				}, {
					text : '关闭',
					scope : this,
					handler : function() {
						this.hide();
					}
				}]
	},
	onSave : function() {
		this.editPanel.saveData();
	},
	buildItems : function() {
		this.items = [this.editPanel, this.listPanel];
	},
	buildListPanel : function() {
		this.listPanel = new Ext.fn.ListPanel({
			region : 'center',
			title : '已有超时说明',
			hsPage : false,
			viewConfig : {// 设置默认列宽
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), {
						header : "业务流水号",
						dataIndex : "pkid"
					}, {
						header : "接收时间",
						dataIndex : "acceptime"
					}, {
						header : "超期说明",
						width : 200,
						dataIndex : "timeoutdesc"
					}],
			store : new Ext.data.JsonStore({
				url : "com.zoomlion.hjsrm.workflows.remain.RemainManager.queryTimeOutExplain.biz.ext",
				root : 'data',
				fields : ['pkid', 'timeoutdesc', 'acceptime']
			})
		});
	},
	/**
	 * 创建超时说明编辑面板
	 */
	buildEditFormPanel : function() {
		this.editPanel = new Ext.fn.InputPanel({
			region : 'north',
			columns : 1,
			height : 95,
			saveUrl : 'com.zoomlion.hjsrm.workflows.remain.RemainManager.addTimeOutExplain.biz.ext',
			fields : [{
						xtype : 'hidden',
						dataIndex : "workitemid",
						name : 'entity/workitemid'
					}, {
						xtype : 'textarea',
						name : 'entity/timeoutdesc',
						fieldLabel : '超期说明',
						allowBlank : false
					}]
		});
	},
	loadData : function(data) {
		this.editPanel.form.loadRecord(new Ext.data.Record(data));
	},
	doQuery : function(vals) {
		this.listPanel.doQuery(vals);
	}
})