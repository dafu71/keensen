com.keensen.ump.produce.diaphragm.print.PrintMarkMgr = function() {

	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : true,
					renderTo : 'printmarkmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 180,
					columns : 1,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【涂膜记录查询】',
					fields : [{
								xtype : 'textarea',
								name : 'condition/batchNoStr',
								anchor : '75%',
								fieldLabel : '膜片批次'
							}, {
								xtype : 'displayfield',
								fieldLabel : ' ',
								value : '<p style="color:red;">请输入膜片批次,以逗号分隔</p>',
								labelSeparator : '',// 去掉冒号
								colspan : 1
							}]
				});

		this.queryPanel.addButton({
					text : "唛头打印",
					scope : this,
					iconCls : 'icon-printer',
					handler : this.onPrint
				});

	}

	this.initListPanel = function() {
		var _this = this;

		this.bar = this.bar || new Ext.Toolbar({
					items : [{
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							}, {
								xtype : 'displayfield',
								ref : '../label0',
								value : '膜片型号:'
							}, {
								xtype : 'textfield',
								itemId : 'param0',
								ref : '../param0'
							}/*{
								xtype : 'mpspeccombobox',
								itemId : 'param0',
								ref : '../param0',
								mode : "local",
								editable : true
							}, {
								text : '重置型号',
								handler : function(){
									_this.bar.getComponent('param0').setValue('');
								}
							}*/,{
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							}, {
								xtype : 'displayfield',
								hidden : true,
								itemId : 'label1',
								ref : '../label1',
								value : '曼胡料号:'
							}, {
								xtype : 'textfield',
								hidden : true,
								itemId : 'param1',
								ref : '../param1',
								name : 'param1'
							}, {
								xtype : 'displayfield',
								hidden : true,
								itemId : 'label2',
								ref : '../label2',
								value : '截留率:'
							}, {
								xtype : 'textfield',
								hidden : true,
								itemId : 'param2',
								ref : '../param2',
								name : 'param2'
							}, {
								xtype : 'displayfield',
								hidden : true,
								itemId : 'label3',
								ref : '../label3',
								value : '生产日期:'
							}, {
								xtype : 'datefield',
								format : "Y.m.d",
								hidden : true,
								itemId : 'param3',
								ref : '../param3',
								name : 'param3'
							},{
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;&nbsp;&nbsp;'
							}, {
								xtype : 'displayfield',
								hidden : true,
								itemId : 'label4',
								ref : '../label4',
								value : '客户料号:'
							}, {
								xtype : 'textfield',
								hidden : true,
								itemId : 'param4',
								ref : '../param4',
								name : 'param4'
							}, {
								xtype : 'displayfield',
								hidden : true,
								itemId : 'label5',
								ref : '../label5',
								value : '尺寸:'
							}, {
								xtype : 'textfield',
								hidden : true,
								itemId : 'param5',
								ref : '../param5',
								name : 'param5'
							}, {
								xtype : 'displayfield',
								hidden : true,
								itemId : 'label6',
								ref : '../label6',
								value : '脱盐率:'
							}, {
								xtype : 'textfield',
								hidden : true,
								itemId : 'param6',
								ref : '../param6',
								name : 'param6'
							}]
				});

		var templateData = [
				["produce/diaphragm/print/img/mpmark1.png", "常用模板"],
				["produce/diaphragm/print/img/mpmark0.png", "Reverse Osmosis sheet模板"],
				["produce/diaphragm/print/img/mpmark3.png", "SW模板"],
				["produce/diaphragm/print/img/mpmark4.png", "ULP-2模板"],
				["produce/diaphragm/print/img/mpmark10.png", "BW-FR SHEET模板"],
				["produce/diaphragm/print/img/mpmark9.png", "BW SHEET模板"],
				["produce/diaphragm/print/img/mpmark6.png",
						"MEMBRANE FLAT SHEET模板"],
				["produce/diaphragm/print/img/mpmark5.png", "Mang loc R.O.模板"],
				["produce/diaphragm/print/img/mpmark2.png", "ULP-2 Membrane模板"]];

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel = new Ext.fn.ListPanel({
			title : '【涂膜记录列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			// id : listid,
			tbar : [{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '纸宽:'
					}, {
						xtype : 'numberfield',
						width : 50,
						ref : '../paperwidth',
						value : '82'

					}, {
						xtype : 'displayfield',
						value : '纸高:'
					}, {
						xtype : 'numberfield',
						width : 50,
						ref : '../paperheight',
						value : '60'

					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, new Ext.form.ComboBox({
								ref : '../templateValue',
								triggerAction : "all",
								lazyRender : true,
								store : new Ext.data.SimpleStore({
											fields : ["value", "text"],
											data : templateData
										}),
								name : "templateValue",
								mode : "local",
								anchor : '100%',
								editable : false,
								displayField : "text",
								valueField : "value",
								forceSelection : true,
								allowBlank : false,
								emptyText : "请选择模板",
								listeners : {
									select : function(combo, record) {
										_this.listPanel.paperwidth.setValue(82);
										_this.listPanel.paperheight.setValue(60);
										if (record.get('text') == 'ULP-2 Membrane模板') {
											_this.bar.getComponent('label1')
													.setVisible(true);
											_this.bar.getComponent('label2')
													.setVisible(true);
											_this.bar.getComponent('label3')
													.setVisible(true);
											_this.bar.getComponent('param1')
													.setVisible(true);
											_this.bar.getComponent('param2')
													.setVisible(true);
											_this.bar.getComponent('param3')
													.setVisible(true);
										} else {
											_this.bar.getComponent('label1')
													.setVisible(false);
											_this.bar.getComponent('label2')
													.setVisible(false);
											_this.bar.getComponent('label3')
													.setVisible(false);
											_this.bar.getComponent('param1')
													.setVisible(false);
											_this.bar.getComponent('param2')
													.setVisible(false);
											_this.bar.getComponent('param3')
													.setVisible(false);
										}
										if (record.get('text') == 'Reverse Osmosis sheet模板') {
											_this.listPanel.paperwidth.setValue(100);
											_this.listPanel.paperheight.setValue(80);
											_this.bar.getComponent('label4')
													.setVisible(true);
											_this.bar.getComponent('label5')
													.setVisible(true);
											_this.bar.getComponent('label6')
													.setVisible(true);
											_this.bar.getComponent('param4')
													.setVisible(true);
											_this.bar.getComponent('param5')
													.setVisible(true);
											_this.bar.getComponent('param6')
													.setVisible(true);
										} else {
											_this.bar.getComponent('label4')
													.setVisible(false);
											_this.bar.getComponent('label5')
													.setVisible(false);
											_this.bar.getComponent('label6')
													.setVisible(false);
											_this.bar.getComponent('param4')
													.setVisible(false);
											_this.bar.getComponent('param5')
													.setVisible(false);
											_this.bar.getComponent('param6')
													.setVisible(false);
										}
									}
								}

							}), {
						text : '查看模板',
						scope : this,
						handler : this.onTemplate
					}

			/*
			 * { text : '打印', scope : this, iconCls : 'icon-printer', handler :
			 * this.onPrint }, { text : '选择LOGO', scope : this, iconCls :
			 * 'icon-printer', handler : this.onChoose }
			 */],

			listeners : {
				// 第二行工具栏
				render : function() {
					scope : this, _this.bar.render(_this.listPanel.tbar);
				}
			},
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'outBatchNo',
						header : '膜片卷号'
					}, {
						dataIndex : 'produceDt',
						header : '生产日期'
					}, {
						dataIndex : 'outLength',
						header : '长度(米)'
					}, {
						dataIndex : 'usefulLength',
						header : '可用长度(米)'
					}, {
						dataIndex : 'qualifidLength',
						header : '合格长度(米)'
					}, {
						dataIndex : 'loss',
						header : '不良(米)'
					}, {
						dataIndex : 'dimoBatchNo',
						header : '底膜批次'
					}, {
						dataIndex : 'lineCode',
						header : '生产线'
					}, {
						dataIndex : 'materClassCode',
						header : '膜片系列'
					}, {
						dataIndex : 'materSpecCode',
						header : '膜片型号'
					}, {
						dataIndex : 'supName',
						header : '无纺布供应商'
					}, {
						dataIndex : 'planNo',
						header : '计划单号'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'perfFlagName',
						header : '等级'
					}, {
						xtype : 'dictcolumn',
						dataIndex : 'isQualified',
						header : '合格',
						dictData : ABF_YESORNO
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.ship.choose.queryTumoByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'batchNo'
						}, {
							name : 'usefulLength'
						}, {
							name : 'outLength'
						}, {
							name : 'perfFlagName'
						}, {
							name : 'planNo'
						}, {
							name : 'orderNo'
						}, {
							name : 'produceDt'
						}, {
							name : 'recordId'
						}, {
							name : 'shipflag'
						}, {
							name : 'materClassCode'
						}, {
							name : 'materSpecCode'
						}, {
							name : 'supName'
						}, {
							name : 'lineCode'
						}, {
							name : 'dimoBatchNo'
						}, {
							name : 'ddflag'
						}, {
							name : 'qualifidLength'
						}, {
							name : 'loss'
						}, {
							name : 'isQualified'
						}, {
							name : 'outBatchNo'
						}]
			})
		})
	}

}