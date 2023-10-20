Ext.namespace('Srm.workflows');
/**
 * 
 * @class Srm.workflows.setPriorWin
 * @extends Ext.fn.FormWindow
 * <p>封装 设置优先级
 * <p>依赖业务字典：BS_WORKPRIORITY
 */
Srm.workflows.setPriorWin = Ext.extend(Ext.fn.FormWindow,{
		title : '设置优先级',
		height : 108,width : 358,
		border:false,
		pgrid:undefined,
		initComponent:function(){
			this.buildItems();
			Srm.workflows.setPriorWin.superclass.initComponent.call(this);
		},
		buildItems : function(){
			this.items = [{
				xtype : 'editpanel',
				pgrid : this.pgrid,
				loadUrl : "com.zoomlion.hjsrm.workflows.remain.RemainManager.loadUrglvlByPkId.biz.ext",
				saveUrl : "com.zoomlion.hjsrm.workflows.remain.RemainManager.updateUrglvl.biz.ext",
				columns : 1,
				fields : [{
					xtype : 'dictcombobox',
					hiddenName : 'entity/urglvl',
					fieldLabel : '优先级',
					dictData:BS_WORKPRIORITY,
					dataIndex : "urglvl"
				}, {
					hidden : true,
					dataIndex : "pkid",
					name : 'entity/pkid'
				}]
			}]
		}
});