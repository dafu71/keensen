/*
 * 示例ui 
 * @author rye
 */
com.zoomlion.hjsrm.dict.DictEntryMgr = function(){

	this.initPanel =  function(){
		this.initListPanel();
	}
	
	this.initListPanel = function(){
	
		var statusData = [["1", "有效"], ["2", "无效"]];
		
		var selModel =  new Ext.grid.CheckboxSelectionModel({});
				
		var saveUrl = 'com.zoomlion.hjsrm.frame.tools.dict.DictManage.saveEosDictEntrys.biz.ext';
		
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
				}]
			});
		
		var colModel = new Ext.grid.ColumnModel([selModel,{
				header : "字典类型",
				dataIndex : "dicttypeid",
				sortable : true,
				width:120,
				editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							allowBlank : false
						}))
			}, {
				header : "字典项",
				dataIndex : "dictid",
				sortable : true,
				width:50,
				editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							allowBlank : false
						}))
			}, {
				name : 'dictid_old',
				dataIndex : "dictid_old",
				hidden : true
			}, {
				header : "字典值",
				type : 'String',
				width:80,
				dataIndex : "dictname",
				editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							allowBlank : false
				}))

			}, {
				header : "状态",
				dataIndex : "status",
				width:50,
				renderer: function(value) {
			      return  value == null ? "" : statusData[value - 1][1];
			   },
				//xtype:'combo',
				editor : new Ext.grid.GridEditor(new Ext.form.ComboBox({
					triggerAction : "all",
					lazyRender : true,
					store : new Ext.data.SimpleStore({
								fields : ["value", "text"],
								data : statusData
							}),
					name : "status",
					mode : "local",
					anchor : '100%',
					editable : false,
					displayField : "text",
					valueField : "value",
					forceSelection : true,
					allowBlank : false,
					emptyText : "请选择状态"


				}))
				
			}, {
				header : "业务过滤",
				dataIndex : "filter1",
				sortable : true,
				width:70,
				editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							allowBlank : true
						}))
			}, {
				id : 'sortno',
				header : "排序",
				dataIndex : "sortno",
				sortable : true,
				width:40,				
				editor : new Ext.grid.GridEditor(new Ext.form.TextField({
							allowBlank : true,
							regex:/^[1-9]\d*$/,
							regexText:"不合法的数据格式"
							
						}))
			}, {
				dataIndex : 'orgname',
				header : '所属机构',
				sortable : true,
				width:60,
				renderer: function(value) {
			    	  return  value=="0"?"系统级":value;;
			   }
			},{
				dataIndex : 'dataorgid',
				hidden : true
			}]);
		
		var store = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.frame.tools.dict.DictManage.queryEosDictEntry.biz.ext',
			root : 'datas',
			sortInfo:{field:'sortno',direction:'ASC'} ,
			fields : [{
						name : 'dicttypeid'
					}, {
						name : 'dictid'
					}, {
						name : 'dictid_old'
					}, {
						name : 'dictname'
					}, {
						name : 'status'
					}, {
						name : 'sortno'
					}, {
						name : 'rank'
					}, {
						name : 'parentid'
					}, {
						name : 'filter1'// 
					}, {
						name : 'filter2'// 
					}, {
						name : 'orgname'// 
					}, {
						name : 'dataorgid',// 
						type:'string'
					}]
		});
		
		this.listPanel = new Ext.fn.EditListPanel({
			title:'业务字典值管理',
			saveUrl:saveUrl,
			cm:colModel,
			sm:selModel,
			store:store,
			tbar:tbar,
			hsPage:false,
			subAll:false,
			viewConfig: { 
           	forceFit:true 
        	}
		});	
		
	}
}