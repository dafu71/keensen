com.keensen.ump.produce.component.PdastocktakingMgr = function() {

	this.initPanel = function() {
		this.initInputWindow();
		this.buildExcelUploadWin();

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
					columns : 2,
					border : true,
					region : "north",
					// collapsible : true,
					titleCollapse : false,
					// title : '【盘库查询】',
					fields : [{

						anchor : "75%",
						colspan : 1,
						xtype : 'combo',
						ref : '../reserve1',
						hiddenName : 'condition/reserve1',
						fieldLabel : '区域',
						store : [['0', '裁叠膜工序'], ['1', '卷膜工序'], ['2', '气检工序'],
								['3', '新基地水测工序'], ['4', '老基地水测工序'],
								['5', '绕丝工序'], ['6', '包装工序'], ['7', '保留区'],
								['8', '走廊存放区'], ['9', '历史呆滞品区'], ['10', '白膜仓库']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.reserve1.reset();
							}
						}

					}, {
						xtype : 'textfield',
						name : 'condition/batchNo',
						anchor : '75%',
						fieldLabel : '序号/批号'
					}]
				});
				
		this.queryPanel.addButton({
					text : "模板下载",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.onDown
				});
		this.queryPanel.addButton({
					text : "导入盘库",
					scope : this,
					iconCls : 'icon-application_excel',
					rescode : '10003201',
					handler : this.importExcel
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden:uid != 'KS00307',
					handler : this.exportExcel
				});

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【未盘点库存列表】',
			// title : '【盘点库存列表】',
			region : "center",
			viewConfig : {
				// forceFit : true
			},
			hsPage : true,
			
			tbar : [ '->', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			id : listid,
			clicksToEdit : 1,
			selModel : selModel,
			delUrl:'com.keensen.ump.produce.component.stocktaking.deleteEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo2',
						header : '导入序号',
						width:100
					}, {
						dataIndex : 'batchNo',
						header : '元件序号',
						width:100
					}, {
						dataIndex : 'juanmoBatchNo',
						header : '卷膜批号',
						width:100
					}, {
						dataIndex : 'materSpecName',
						header : '生产规格型号',
						width:100
					}, {
						dataIndex : 'orderMaterSpecName',
						header : '订单下达型号',
						width:100
					}/*, {
						dataIndex : 'markSpecCode',
						header : '唛头标签型号',
						width:100
					}*/, {
						dataIndex : 'produceDt',
						header : '卷膜日期',
						width:100
					}, {
						dataIndex : 'step',
						header : '工序',
						width:100
					}, {
						dataIndex : 'createTime',
						header : '盘库时间',
						width:120
					}, {
						dataIndex : 'createName',
						header : '盘库人',
						width:100
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
						}, {
							name : 'step'
						}, {
							name : 'createTime'
						}, {
							name : 'createName'
						}, {
							name : 'materSpecName'
						}, {
							name : 'orderMaterSpecName'
						}, {
							name : 'produceDt'
						}, {
							name : 'markSpecCode'
						}, {
							name : 'id'
						}, {
							name : 'batchNo2'
						}]
			})
		})
		this.panel = this.panel || new Ext.Panel({
					layout : 'border',
					items : [this.queryPanel, this.listPanel]

				});
		this.panel2 = this.panel2 || new Ext.Panel({
					height : '500',
					baseCls : "x-plain"
				});
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			// baseCls : "x-plain",

			width : '600',
			height : '280',
			// title : '生产入库',
			pgrid : '',
			columns : 2,
			autoHide : false,
			border : true,
			saveUrl : 'com.keensen.ump.produce.component.stocktaking.saveEntity.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '50',
						colspan : 2
					},{
						xtype : 'displayfield',
						ref : '../lastBatchNo',
						fieldLabel:'<p style="color:red;font-size:12px;">上支元件</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 1
					},{
						xtype : 'displayfield',
						fieldLabel:'<p style="color:red;font-size:12px;">总数量</p>',
						labelSeparator : '',// 去掉冒号
						ref : '../count',
						colspan : 1
					},{
						xtype : 'displayfield',
						height : 10,
						colspan : 2
					}, {
						xtype : 'radiogroup',
						colspan : 2,
						columns : 3,
						name : 'reserve1',
						ref : '../reserve1',
						allowBlank : false,
						fieldLabel : '区域<span style="color:red">*</span>',
						anchor : '100%',
						items : [{
									boxLabel : '裁叠膜工序',
									name : 'entity/reserve1',
									inputValue : '0',
									checked : true
								}, {
									boxLabel : '卷膜工序',
									name : 'entity/reserve1',
									inputValue : '1'
								}, {
									boxLabel : '气检工序',
									name : 'entity/reserve1',
									inputValue : '2'
								}, {
									boxLabel : '新基地水测工序',
									name : 'entity/reserve1',
									inputValue : '3'
								}, {
									boxLabel : '老基地水测工序',
									name : 'entity/reserve1',
									inputValue : '4'
								}, {
									boxLabel : '绕丝工序',
									name : 'entity/reserve1',
									inputValue : '5'
								}, {
									boxLabel : '包装工序',
									name : 'entity/reserve1',
									inputValue : '6'
								}, {
									boxLabel : '保留区',
									name : 'entity/reserve1',
									inputValue : '7'
								}, {
									boxLabel : '走廊存放区',
									name : 'entity/reserve1',
									inputValue : '8'
								}, {
									boxLabel : '历史呆滞品区',
									name : 'entity/reserve1',
									inputValue : '9'
								}, {
									boxLabel : '白膜仓库',
									name : 'entity/reserve1',
									inputValue : '10'
								}]
					}, {
						xtype : 'displayfield',
						height : '10',
						colspan : 2
					}, {
						xtype : 'textfield',
						name : 'entity/batchNo',
						style : '{font-weight:bold;}',
						allowBlank : false,
						fieldLabel : '批号',
						ref : '../batchNo',
						anchor : '80%',
						colspan : 2,
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
						colspan : 2
					}],
			buttons : [{
						text : "确定",
						scope : this,
						handler : this.onSave
					}]
		})

	}
	
	// 导入excel面板
	this.buildExcelUploadWin = function() {
		this.excelUploadWin = new Ext.Window({
			title : '导入Excel',
			collapsible : false,
			modal : true,
			closeAction : 'hide',
			buttonAlign : 'center',
			layout : 'fit',
			width : 480,
			height : 120,
			items : [{
						xtype : 'columnform',
						itemId : 'uploadForm',
						saveUrl : 'com.keensen.ump.produce.component.importStocktaking.flow',
						columns : 1,
						fileUpload : true,
						fields : [{
									name : 'uploadFile',
									fieldLabel : '选择文件',
									allowBlank : false,
									inputType : 'file'
								}]
					}],
			buttons : [{
						text : '上传',
						handler : this.doUpload,
						scope : this
					}, {
						text : '关闭',
						scope : this,
						handler : function() {
							this.excelUploadWin.hide();
						}
					}]
		});
	}

}