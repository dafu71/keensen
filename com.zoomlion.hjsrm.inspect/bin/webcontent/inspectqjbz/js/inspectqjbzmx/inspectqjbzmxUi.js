/*
 * 示例ui 
 * @author rye
 */
com.zoomlion.hjsrm.inspect.Inspectqjbzmxmgr = function(){

	this.initPanel =  function(){
		this.initListPanel();
	}
	
	this.initListPanel = function(){
		var selModel =  new Ext.grid.CheckboxSelectionModel({});
				
		var saveUrl = 'com.zoomlion.hjsrm.inspect.inspectwtwh.saveinspectqjbzmx.biz.ext';
		
		var tbar= new Ext.Toolbar({
				items : [{
					xtype : 'button',
					text : "新增",
					iconCls : 'icon-application_add',
					scope : this,
					handler : this.onAdd
				},
				"-", {
					xtype : 'button',
					text : "保存",
					iconCls:'icon-page_save',
					scope : this,
					handler : this.onSave
				},
				"-", {
					xtype : 'button',
					text : "删除",
					iconCls:'icon-application_delete',
					scope : this,
					handler : this.onDel
				},'-', {
						text : '维护临时全检标准表',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onLsqjbz
				},'->',
					   {
					   	xtype : 'displayfield',
						value : "",
						id:lsqjwhtext,
						ref:'../lstext',
						style:'color:red'

					}]
			});
		
		var colModel = new Ext.grid.ColumnModel([selModel,{
				header : "物料",
				dataIndex : "matnr",
				sortable : true,
				width:120,
				hidden:true,
				editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							allowBlank : false
						}))
			}, {
				header : "检验项目",
				dataIndex : "jyxm",
				sortable : true,
				width:180,
				editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							allowBlank : false
						}))
			}, {
				name : 'jyxm_old',
				dataIndex : "jyxm_old",
				hidden : true
			},{
				header : "检验标准",
				width:240,
				dataIndex : "jybz",
				editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							allowBlank : false
				}))

			}, {
				header : "工厂",
				width:80,
				hidden : true,
				dataIndex : "werks",
				editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							allowBlank : false
				}))

			},{
				header : "检测方法",
				dataIndex : "text",
				sortable : true,
				width:180,
				editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							allowBlank : true
						}))
			}]);
		
		var store = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.inspect.inspectwtwh.queryinspectqjbzmx.biz.ext',
			root : 'datas',
			fields : [{
						name : 'matnr'
					}, {
						name : 'jyxm'
					}, {
						name : 'jyxm_old'
					},{
						name : 'jybz'
					},{
						name : 'werks'
					}, {
						name : 'text'
					}]
		});
		
		this.listPanel = new Ext.fn.EditListPanel({
			title:'全检物料质检标准维护',
			saveUrl:saveUrl,
			cm:colModel,
			sm:selModel,
			store:store,
			tbar:tbar,
			hsPage:false,
			subAll:false
			//viewConfig: { 
           //	forceFit:true 
        	//}
		});	
		
	}
}