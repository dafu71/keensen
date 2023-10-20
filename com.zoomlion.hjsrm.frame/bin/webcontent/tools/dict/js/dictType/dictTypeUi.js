/*
 * 示例ui 
 * @author rye
 */
com.zoomlion.hjsrm.dict.DictTypeMgr = function(){

	this.initPanel = function(){
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
	}
	
	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
						height:120,
						//width:500,
						columns:4,
						border:true,
						title:'业务字典类型查询',
						fields:[{
										xtype : 'textfield',
										name : 'query/dicttypeid',
										fieldLabel : '类型代码',
										colspan : 1
									},{
										xtype : 'textfield',
										name : 'query/dicttypename',
										fieldLabel : '类型名称',
										colspan : 1
									},{
										xtype : 'textfield',
										name : 'query/dictid',
										fieldLabel : '字典项',
										colspan : 1
									},{
										xtype : 'textfield',
										name : 'query/dictname',
										fieldLabel : '字典值',
										colspan : 1
									}]
						});	
	}

	this.initListPanel = function(){
		var selModel =  new Ext.grid.CheckboxSelectionModel({

		});
		this.listPanel = new Ext.fn.ListPanel({
						title:'业务字典类型列表',
						hsPage:true,
						width:480,
						tbar:[{text : '更新缓存',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.reloadCache
							}
						],
//						tbar:[{
//								text : '新增',
//								scope : this,
//								iconCls : 'icon-application_add',
//								handler : this.onAdd
//							}, '-', {
//								text : '修改',
//								scope : this,
//								iconCls : 'icon-application_edit',
//								handler : this.onEdit
//							}, '-', {
//								text : '删除',
//								scope : this,
//								iconCls : 'icon-application_edit',
//								handler : this.onDel
//							}, '-', {
//								text : '更新缓存',
//								scope : this,
//								iconCls : 'icon-application_edit',
//								handler : this.reloadCache
//							}], 
						indexKey:'dicttypeid',
						selModel:selModel,
						delUrl: 'com.zoomlion.hjsrm.frame.tools.dict.DictManage.deleteEosDictType.biz.ext',
						columns : [new Ext.grid.RowNumberer(),selModel,
								 {dataIndex : 'dicttypename',id:'dicttypename',header : '类型名称',sortable : true,width:200},
								 {dataIndex : 'dicttypeid',header : '类型代码',sortable : true,width:200}							 
								 ],
						store :  new Ext.data.JsonStore({
									url : 'com.zoomlion.hjsrm.frame.tools.dict.DictManage.queryEosDictType.biz.ext',
									root : 'data',
									autoLoad:true,
									totalProperty : 'totalCount',
									fields : [{name : 'dicttypeid' }, {name : 'dicttypename'}, 
											{name : 'rank'}, {name : 'parentid'}, {name : 'seqno'},
											{name : 'dataorgid'}, {name : 'orgname'}]
										})
						});
	}
	this.initInputWindow = function(){
		this.inputWindow = this.inputWindow|| new Ext.fn.FormWindow({
			title:'新增字典类型',
			height:300,
			width:500,
			items:[{
				xtype:'inputpanel',
				pgrid:this.listPanel,
				layout:'form',
				columns:1,	
				saveUrl:'com.zoomlion.hjsrm.frame.tools.dict.DictManage.saveEosDictType.biz.ext',
				fields : [{
							xtype : 'textfield',
							fieldLabel : '类型代码',
							maxLength : 40,
							name : 'acDicttype/dicttypeid',
							//regex:/^[a-zA-Z0-9_]+$/,
							//regexText:'非法字符,必须为数字字母或下划线.',
							vtype : 'unique',
							vtypeText : '该编码已存在,请更换',
							tablename:'eos_dict_type',
							allowBlank : false,
							blankText : "请输入类型代码！",
							//enableKeyEvents : true,
							anchor : '90%',
							skipValidation : false,
							colspan : 1
							
						}, {
							xtype : 'textfield',
							name : 'acDicttype/dicttypename',
							allowBlank : false,
							maxLength : 40,
							anchor : '90%',
							fieldLabel : '类型名称',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'acDicttype/oper',
							hidden:true,
							colspan : 1
						},{
							ref:'../dataorgseq',
							xtype:'textfield',
							name:'acDicttype/dataorgid',
							anchor : '90%',
							hidden:true,
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'acDicttype/opt',
							value:'insert',
							hidden:true,
							colspan : 1
						}]
			}]
		});
	}
	
	this.initEditWindow = function(){
		this.editWindow = this.editWindow|| new Ext.fn.FormWindow({
			title:'编辑字典类型',
			height:300,
			width:500,
			items:[{
				xtype:'editpanel',
				pgrid:this.listPanel,
				layout:'form',
				columns:1,
				loadUrl:'com.zoomlion.hjsrm.frame.tools.dict.DictManage.loadEosDictType.biz.ext',		
				saveUrl:'com.zoomlion.hjsrm.frame.tools.dict.DictManage.saveEosDictType.biz.ext', 
				fields : [{
							xtype : 'textfield',
							fieldLabel : '类型代码',
							dataIndex:'dicttypeid',
							name : 'acDicttype/dicttypeid',
							readOnly:true,
							anchor : '90%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'acDicttype/dicttypename',
							allowBlank : false,
							dataIndex:'dicttypename',
							maxLength : 40,
							anchor : '90%',
							fieldLabel : '类型名称',
							colspan : 1
						}, {
							xtype : 'textfield',
							dataIndex:'oper',
							name : 'acDicttype/oper',
							hidden:true,
							colspan : 1
						},{
							ref:'../dataorgseq',
							xtype:'textfield',
							name:'acDicttype/dataorgid',
							dataIndex:'dataorgid',
							anchor : '90%',
							hidden:true,
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'acDicttype/opt',
							value:'save',
							hidden:true,
							colspan : 1
						}]
			}]
		});
	}

}