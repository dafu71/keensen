Ext.namespace('Ext.workflows.common');
/**
 * 列表组件
 * @param {} config
 */
Ext.workflows.common.ComboGridWediget = function(config) {
	config = Ext.apply(config, {
				autoScroll : true,
				containerScroll : true,
				sm : config.sm,
				loadMask : true,
				frame : true,
				bbar : config.bbar
			});
	Ext.workflows.common.ComboGridWediget.superclass.constructor.call(this, config);
}
Ext.extend(Ext.workflows.common.ComboGridWediget, Ext.grid.GridPanel, {});
/**
 * 
 * @class Ext.workflows.common.ComboGrid
 * @extends Ext.form.TriggerField
 * <p>下拉框 多选组件
 */
Ext.workflows.common.ComboGrid = Ext.extend(Ext.form.TriggerField, {
			shadow : 'frame',
			maxHeight : 300,
			hideTrigger : false,
			resizable : true,
			minListWidth : 70,
			handleHeight : 8,
			editable : false,
			lazyInit : true,
			hsPage:true,
			hiddenName : undefined,
			storeUrl:undefined,
			extraParams:{'condition/dataOrgId':undefined},
			initComponent : function() {
				this.buildStore();
				this.buildColumn();
				this.buildBar();
				Ext.workflows.common.ComboGrid.superclass.initComponent.call(this);
				this.addEvents('expend', 'collapse', 'select');
			},
			buildStore : function(){
				this.store = new Ext.data.JsonStore({
						url : this.storeUrl || 'com.zoomlion.hjsrm.workflows.common.WorkinCommon.queryOperatorByDataOrgIdWithPage.biz.ext',
						root : 'data',
						totalProperty : 'totalCount',
						fields : ['operatorid' , 'operatorname' , 'userid']
					});
				if(this.hsPage){
					this.pagingToolbar = new Ext.ex.PagingToolbarEx({
						xtype : "pagingtoolbarex",
						pageSize : 15,
						displayInfo : false,
						store : this.store
					});	
				}
			},
			buildColumn :function(){
				this.listSelectModel = new Ext.grid.CheckboxSelectionModel();
				this.cm = new Ext.grid.ColumnModel([this.listSelectModel,{
									header : "操作员名称",
									dataIndex : 'operatorname'
								}]);
			},
			buildBar : function(){
			this.listTbar = [{
									text : '确定',
									scope : this,
									handler : this.setValue
								}, {
									text : '清空',
									scope : this,
									handler : this.clearValue
								}]
			},
			setValue:function(){
				//遍历获取操作员列表，获取userid、operatorname的值
				var selections = this.listSelectModel.getSelections();
				var hiddenValue = '', rawValue = '';
				for (var i = 0; i < selections.length; i++) {
					hiddenValue += selections[i].get('userid');
					rawValue += selections[i].get('operatorname');
					if (i < selections.length - 1) {
						hiddenValue += ',';
						rawValue += ',';
					}
				}
				//设置派工人员下拉grid的值
				if(this.hiddenField){
					this.hiddenField.value = hiddenValue;	
				}
				Ext.workflows.common.ComboGrid.superclass.setValue.call(this,rawValue);
				this.collapse();
			},
			getValue :function(){
				if(this.hiddenField){
					return this.hiddenField.value;
				}
				var v = Ext.workflows.common.ComboGrid.superclass.getValue.call(this);
				return v;
			},
			onRender : function(ct, position) {
				Ext.workflows.common.ComboGrid.superclass.onRender.call(this, ct, position);
				if (this.hiddenName) {
					this.hiddenField = this.el.insertSibling({
								tag : 'input',
								type : 'hidden',
								name : this.hiddenName,
								id : (this.hiddenId || Ext.id())
							}, 'before', true);
				}
				if (Ext.isGecko) {
					this.el.dom.setAttribute('autocomplete', 'off');
				}
				this.initGridLayer();
			},
			initGridLayer : function() {
				if (!this.gridLayer) {
					var cls = 'x-combo-list';
					this.list = new Ext.Layer({
								shadow : this.shadow,
								cls : [cls].join(' '),
								constrain : false
							});

					var lw = this.listWidth || 
								Math.max(this.wrap.getWidth() - this.trigger.getWidth(), this.minListWidth);
					this.list.setWidth(100);
					this.list.swallowEvent('mousewheel');
					this.assetHeight = 0;

					this.grid = new Ext.workflows.common.ComboGridWediget({
								applyTo : this.list,
								sm : this.listSelectModel,
								viewConfig:{forceFit:true},
								ds : this.store,
								cm : this.cm,
								tbar : this.listTbar,
								bbar : this.pagingToolbar|| [],
								height : this.initialConfig.gridHeight,
								width : this.initialConfig.gridWidth
							});
					this.grid.on("celldblclick", this.onGridDBClick, this);
				}
			},
			doQuery:function(vals){
				vals = vals || {};
				var params = {
					params : {}
				};
				if (this.hsPage) {
					params = {
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.pagingToolbar.pageSize
						}
					}
				}
				Ext.apply(this.store.baseParams, vals);
				this.store.load(params)
			},
			onTriggerClick : function() {
				if (this.disabled) {
					return;
				}
				if (this.isExpanded()) {
					this.collapse();
					this.el.focus();
				} else {
					this.onFocus({});
					this.expand();
					this.doQuery(this.extraParams);
					this.el.focus();
				}
			},
			onGridDBClick : function(grid, rowIndex, columnIndex, e) {
				var record = grid.getStore().getAt(rowIndex);
				this.onSelect(record);
				this.list.hide();
				this.el.focus();
			},
			onSelect : function(record) {
				this.hiddenField.value = record.get(this.valueField);
				this.setValue(record.get(this.displayField));
				this.fireEvent('select', this, record);
			},
			isExpanded : function() {
				return this.list && this.list.isVisible();
			},
			expand : function() {
				if (this.isExpanded() || !this.hasFocus) {
					return;
				}
				this.list.alignTo(this.wrap, this.listAlign);
				this.list.show();
				Ext.getDoc().on('mousewheel', this.collapseIf, this);
				Ext.getDoc().on('mousedown', this.collapseIf, this);
				this.fireEvent('expand', this);
			},
			collapse : function() {
				if (!this.isExpanded()) {
					return;
				}
				this.list.hide();
				Ext.getDoc().un('mousewheel', this.collapseIf, this);
				Ext.getDoc().un('mousedown', this.collapseIf, this);
				this.fireEvent('collapse', this);
			},
			collapseIf : function(e) {
				if (!e.within(this.wrap) && !e.within(this.list)) {
					this.collapse();
				}
			},
			clearValue : function() {
				if (this.hiddenField) {
					this.hiddenField.value = '';
				}
				this.setValue('');
				this.applyEmptyText();
			},
			onDestroy : function() {
				if (this.grid) {
					this.grid.el.removeAllListeners();
					this.grid.el.remove();
					this.grid.purgeListeners();
				}
				if (this.grid) {
					this.grid.destroy();
				}
				Ext.workflows.common.ComboGrid.superclass.onDestroy.call(this);
			}
		});

Ext.reg('combogrid', Ext.workflows.common.ComboGrid);