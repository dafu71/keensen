com.zoomlion.hjsrm.kcgl.MaterialcomponentMgr = function() {
	
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		//this.initEditWindow();
		this.initSupplierWindow();
	}
	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					//width : 500,
					region : 'north',
					columns : 4,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 大件物料查询 】', 
					fields : [{
								xtype : 'textfield',
								name : 'condition/matnr',
								fieldLabel : '物料编码'
							}, {
								xtype : 'textfield',
								name : 'condition/pmatnr',
								fieldLabel : '车型物料编码'
							}, {
								xtype : 'textfield',
								name : 'condition/zcpcx',
								fieldLabel : '车型'
							},{
								xtype : 'textfield',
								name : 'condition/maktx',
								fieldLabel : '物料描述'
							}]
				});
	}
	
	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel(
				{   header : '',
					singleSelect : true});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 大件物料列表 】',
			region : 'center',
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}/*, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}*/, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}, '-', {
						text : '新增大件供应商',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAddSupplier
					}],
			selModel : selModel,
			delUrl : 'com.zoomlion.hjsrm.kcgl.stockmanage.deleteComponent.biz.ext',
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'matnr',
						header : '物料编码'
					},{
						dataIndex : 'pmatnr',
						header : '车型物料编码'
					},{
						dataIndex : 'zcpcx',
						header : '车型'
					},{
						dataIndex : 'maktx',
						header : '物料描述'		
					},{
						dataIndex : 'fullname',
						header : '操作员',
						renderer : function(v, m, r, i) {
							if(v=='()'){
								return '';
							}else{
								return v;
							}
						}
						
					},{
						dataIndex : 'modifytime',
						header : '操作时间'		
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.kcgl.stockmanage.queryComponent.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'matnr'
						}, {
							name : 'zcpcx'
						}, {
							name : 'maktx'
						}, {
							name : 'pmatnr'
						}, {
							name : 'fullname'
						}, {
							name : 'modifytime'
						}]
			})
		});
	}
	
	//新增窗口
	this.initInputWindow = function() {
		var _this = this;
		
		this.inputPanel = this.inputPanel || new Ext.FormPanel({
			height : 150,
			buttonAlign : 'center',
			labelAlign : "right",
			layout : 'column',
			autoHide : false,
			border : true,
			items : [{
						xtype : 'displayfield',
						value : '&nbsp;',
						columnWidth : .5
					}, {
						xtype : 'displayfield',
						value : '&nbsp;',
						columnWidth : .5
					},{
						columnWidth : .5,
						layout : 'form',
						border : false,
						items :[{
							xtype : 'textfield',
							width : 150,
							name : 'component/matnr',
							allowBlank : false,						
							fieldLabel : '大件物料编码'
						}]
						
					}, {
						columnWidth : .5,
						layout : 'form',
						border : false,
						items :[{
							xtype : 'textfield',
							width : 150,
							name : 'component/pmatnr',
							allowBlank : false,
							fieldLabel : '车型物料编码'
						}]
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onInsert
						}, {
						text : "取消",
						scope : this,
						handler : function(){
							this.inputPanel.form.reset();
							this.inputWindow.hide();
						}
					}]
		});
			

		
		this.inputWindow = this.inputWindow || new Ext.Window({
			title : '新增大件物料',
			height : 180,
			width : 600,
			resizable : true,//窗口边框和托动大小
			minimizable : false,//设置窗口不能最小化
			maximizable : true,//设置窗口能最大化
			modal:true,
			items : [this.inputPanel]
		});
	}
	
	//新增供应商窗口
	this.initSupplierWindow = function() {
		var _this = this;
		
		this.supplierPanel = this.supplierPanel || new Ext.FormPanel({
			height : 150,
			//title : '【 车型物料 】',
			buttonAlign : 'center',
			labelAlign : "right",
			layout : 'column',
			autoHide : false,
			border : true,
			items : [{
						xtype : 'displayfield',
						value : '&nbsp;',
						columnWidth : .5
					}, {
						xtype : 'displayfield',
						value : '&nbsp;',
						columnWidth : .5
					},{
						columnWidth : .5,
						layout : 'form',
						border : false,
						items :[{
							xtype : 'textfield',
							width : 150,
							name : 'supplier/matnr',
							allowBlank : false,	
							readOnly : true,
							fieldLabel : '大件物料编码'
						}]
						
					}, {
						columnWidth : .5,
						layout : 'form',
						border : false,
						items :[{
							xtype : 'lifnrallCombo',
							width : 150,
							name : 'supplier/lifnr',
							allowBlank : false,
							fieldLabel : '供应商编码'
						}]
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onInsertSupplier
						}, {
						text : "取消",
						scope : this,
						handler : function(){
							this.supplierPanel.form.reset();
							this.supplierWindow.hide();
						}
					}]
		});
			

		
		this.supplierWindow = this.supplierWindow || new Ext.Window({
			title : '新增大件供应商',
			height : 180,
			width : 600,
			resizable : true,//窗口边框和托动大小
			minimizable : false,//设置窗口不能最小化
			maximizable : true,//设置窗口能最大化
			modal:true,
			items : [this.supplierPanel]
		});
	}
}