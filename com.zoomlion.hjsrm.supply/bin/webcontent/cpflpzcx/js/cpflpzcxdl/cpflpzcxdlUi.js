/*
 * 示例ui 
 * @author rye
 */
com.zoomlion.hjsrm.cpflpzcxdl.CpflpzcxdlMgr = function(){

	this.initPanel = function(){
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
	}
	
	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
						height:120,
						width:400,
						columns:1,
						border:true,
						title:'产品分类配置查询',
						fields:[{
										xtype : 'textfield',
										name : 'condition/flmc',
										fieldLabel : '产品类别',
										colspan : 1
									}]
						});	
	}

	this.initListPanel = function(){
		var selModel =  new Ext.grid.CheckboxSelectionModel({

		});
		this.listPanel = new Ext.fn.ListPanel({
						title:'产品大类维护列表',
						hsPage:true,
						width:480,
					tbar:[{
							text : '新增',
							scope : this,
							rescode : '00504',
							iconCls : 'icon-application_add',
							handler : this.onAdd
						    }, '-', {
							text : '修改',
							scope : this,
							rescode : '00504',
							iconCls : 'icon-application_edit',
							handler : this.onEdit
						    }, '-', {
							text : '删除',
							scope : this,
							rescode : '00504',
							iconCls : 'icon-application_edit',
							handler : this.onDel
							}], 
						indexKey:'dicttypeid',
						selModel:selModel,
						delUrl: 'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.delcpflpzcxdl.biz.ext',
						columns : [new Ext.grid.RowNumberer(),selModel,
								 {dataIndex : 'id',header : 'ID',hidden : true},
								 {dataIndex : 'fldm',header : '类型代码',sortable : true},
								 {dataIndex : 'flmc',header : '大类名称',sortable : true},	
								 {dataIndex : 'sjid',header : '上级ID',hidden : true},
								 {dataIndex : 'ssdj',header : '所属等级',hidden : true}
								 ],
						store :  new Ext.data.JsonStore({
									url : 'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.queryCpflpzcxdl.biz.ext',
									root : 'data',
									baseParams : {
			                 		"condition/sjid": 0
			                      	},
									autoLoad:true,
									totalProperty : 'totalCount',
									fields : [{name : 'id' }, {name : 'fldm'}, 
											{name : 'flmc'}, {name : 'sjid'}, {name : 'ssdj'}]
										})
						});
	}
	this.initInputWindow = function(){
		this.inputWindow = this.inputWindow|| new Ext.fn.FormWindow({
			title:'新增产品大类',
			height:180,
			width:500,
			items:[{
				xtype:'inputpanel',
				pgrid:this.listPanel,
				layout:'form',
				columns:1,	
				saveUrl:'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.addCpflpzcxdl.biz.ext',
				fields : [{
							xtype : 'textfield',
							fieldLabel : '大类代码',
							maxLength : 2,
							minLength : 2,
							maxValue : 99,
							name : 'cpfl/fldm',
							//regex:/^[a-zA-Z0-9_]+$/,
							//regexText:'非法字符,必须为数字字母或下划线.',
							vtype : 'unique',
							vtypeText : '该编码已存在,请更换',
							tablename:'genl_cpflpz_list',
							allowBlank : false,
							regex:/^[0-9]\d*$/,
							regexText:"不合法的数据格式",
							blankText : "请输入类型代码！",
							//enableKeyEvents : true,
							anchor : '90%',
							skipValidation : false,
							colspan : 1
							
						}, {
							xtype : 'textfield',
							name : 'cpfl/flmc',
							allowBlank : false,
							maxLength : 40,
							anchor : '90%',
							fieldLabel : '大类名称',
							colspan : 1
						}]
			}]
		});
	}
	
	this.initEditWindow = function(){
		this.editWindow = this.editWindow|| new Ext.fn.FormWindow({
			title:'修改产品大类',
			height:180,
			width:500,
			items:[{
				xtype:'editpanel',
				pgrid:this.listPanel,
				layout:'form',
				columns:1,
				loadUrl:'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.loadcpflpzcxdl.biz.ext',		
				saveUrl:'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.savecpflpzcxdl.biz.ext', 
				fields : [{
							xtype : 'textfield',
							fieldLabel : 'ID号',
							dataIndex:'id',
							name : 'cpfl/id',
							anchor : '90%',
							colspan : 1,
							hidden : true
						}, {
							xtype : 'textfield',
							name : 'cpfl/fldm',
							allowBlank : false,
							dataIndex:'fldm',
							readOnly : true,
							maxLength : 40,
							anchor : '90%',
							fieldLabel : '大类编码',
							colspan : 1
						},{
							xtype : 'textfield',
							name : 'cpfl/flmc',
							allowBlank : false,
							dataIndex:'flmc',
							anchor : '90%',
							fieldLabel : '大类名称',
							colspan : 1
						} ]
			}]
		});
	}

}