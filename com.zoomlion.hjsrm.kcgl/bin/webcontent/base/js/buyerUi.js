com.zoomlion.hjsrm.kcgl.BuyerMgr = function() {
	
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
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
					title : '【 采购组查询 】', 
					fields : [{
								xtype : 'textfield',
								name : 'condition/userid',
								fieldLabel : '采购员id'
							}, {
								xtype : 'textfield',
								name : 'condition/username',
								fieldLabel : '采购员姓名'
							},{
								xtype : 'textfield',
								name : 'condition/lifnr',
								fieldLabel : '供应商编码'
							},{
								xtype : 'textfield',
								name : 'condition/name1',
								fieldLabel : '供应商'
							}]
				});
	}
	
	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel(
				{   header : '',
					singleSelect : true});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 采购组列表 】',
			region : 'center',
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.zoomlion.hjsrm.kcgl.stockmanage.deleteBuyer.biz.ext',
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'userid',
						header : '采购员id'
					},{
						dataIndex : 'username',
						header : '采购员姓名'
					},{
						dataIndex : 'lifnr',
						header : '供应商编码'		
					},{
						dataIndex : 'name1',
						header : '供应商'		
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.kcgl.stockmanage.queryBuyer.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'userid'
						}, {
							name : 'username'
						}, {
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'pkid'
						}]
			})
		});
	}
	
	//新增窗口
	this.initInputWindow = function() {
		var _this = this;
		
		this.inputPanel = this.inputPanel || new Ext.FormPanel({
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
							name : 'buyer/userid',
							allowBlank : false,						
							fieldLabel : '采购员id'
						}]
						
					}, {
						columnWidth : .5,
						layout : 'form',
						border : false,
						items :[{
							xtype : 'textfield',
							width : 150,
							name : 'buyer/username',
							//allowBlank : false,
							fieldLabel : '采购员姓名'
						}]
					},{
						columnWidth : .5,
						layout : 'form',
						border : false,
						items :[{
							xtype : 'textfield',
							width : 150,
							name : 'buyer/lifnr',
							allowBlank : false,						
							fieldLabel : '供应商编码'
						}]
						
					}, {
						columnWidth : .5,
						layout : 'form',
						border : false,
						items :[{
							xtype : 'textfield',
							width : 150,
							name : 'buyer/name1',
							//allowBlank : false,
							fieldLabel : '供应商'
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
			title : '新增',
			height : 180,
			width : 600,
			resizable : true,//窗口边框和托动大小
			minimizable : false,//设置窗口不能最小化
			maximizable : true,//设置窗口能最大化
			modal:true,
			items : [this.inputPanel]
		});
	}
	
	//修改窗口
	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 180,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			modal:true,
			items : [{
				xtype : 'editpanel',
				//ref:'../../../editpanel',
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.zoomlion.hjsrm.kcgl.stockmanage.loadBuyer.biz.ext',
				saveUrl : 'com.zoomlion.hjsrm.kcgl.stockmanage.updateBuyer.biz.ext',
				fields : [{
						xtype : 'displayfield',
						value : '&nbsp;',
						columnWidth : .5
					}, {
						xtype : 'displayfield',
						value : '&nbsp;',
						columnWidth : .5
					},{
						xtype : 'textfield',
						width : 150,
						name : 'buyer/userid',
						dataIndex : 'userid',
						allowBlank : false,						
						fieldLabel : '采购员id'
					},{
						xtype : 'textfield',
						width : 150,
						name : 'buyer/username',
						dataIndex : 'username',
						fieldLabel : '采购员姓名'
					},{
						xtype : 'textfield',
						width : 150,
						name : 'buyer/lifnr',
						dataIndex : 'lifnr',
						allowBlank : false,						
						fieldLabel : '供应商编码'
					}, {
						xtype : 'textfield',
						width : 150,
						name : 'buyer/name1',
						dataIndex : 'name1',
						fieldLabel : '供应商'
					}, {
						xtype : 'hidden',
						name : 'buyer/pkid',
						dataIndex : 'pkid'
					}]
			}]

		});
	}
}