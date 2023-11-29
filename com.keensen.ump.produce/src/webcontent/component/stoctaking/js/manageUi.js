com.keensen.ump.produce.component.PdastocktakingMgr = function() {

	this.initPanel = function() {
		this.initInputWindow();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'pdastocktakingmgr',
					panels : [this.inputPanel, this.panel, this.panel2]
				});
	}
	this.initInputWindow = function() {
		var _this = this;
		
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 1,
					border : true,
					region : "north",
					// collapsible : true,
					titleCollapse : false,
					title : '【盘库查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/batchNo',
								anchor : '75%',
								fieldLabel : '序号/批号'
							}]
				});

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.EditListPanel({
			title : '【未盘点库存列表】',
			region : "center",
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			clicksToEdit : 1,
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						header : '元件序号'
					}, {
						dataIndex : 'juanmoBatchNo',
						header : '卷膜批号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.stocktaking.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'juanmoBatchNo'
						}, {
							name : 'batchNo'
						}]
			})
		})
		this.panel = this.panel || new Ext.Panel({
			layout : 'border',
			items:[this.queryPanel,this.listPanel]
		
		
		
		});
		this.panel2 = this.panel2 || new Ext.Panel({height : '500',baseCls : "x-plain"});
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			// baseCls : "x-plain",

			width : '600',
			height : '200',
			// title : '生产入库',
			pgrid : '',
			columns : 1,
			autoHide : false,
			border : true,
			saveUrl : 'com.keensen.ump.produce.component.stocktaking.saveEntity.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '50',
						colspan : 1
					},{
						xtype : 'textfield',
						name : 'entity/batchNo',
						style:'{font-weight:bold;}',
						allowBlank : false,
						fieldLabel : '批号',
						ref : '../batchNo',
						anchor : '80%',
						colspan : 1,
						listeners : {
							scope : this,
							specialkey : function(C, D) {
								if (D.getKey() == Ext.EventObject.ENTER) {
									this.onSave();

								}

							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave
					}]
		})

		

	}

}