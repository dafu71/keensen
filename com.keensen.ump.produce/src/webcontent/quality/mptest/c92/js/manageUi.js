com.keensen.ump.produce.quality.mptest.C92Mgr = function() {
	this.initPanel = function() {

		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		this.initStore();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'mptestc92mgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		this.stdStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.quality.quality2.queryC92Std4Solution.biz.ext',
			root : 'data',
			autoLoad : true,
			baseParams : {},
			fields : [{
						name : 'densityLow'
					}, {
						name : 'densityUp'
					}, {
						name : 'a'
					}, {
						name : 'b'
					}]
		})
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 2,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								ref : '../batchNo',
								name : 'condition/batchNo',
								anchor : '85%',
								xtype : 'textfield',
								fieldLabel : '原液批次',
								allowBlank : true
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '85%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "测试时间",
								format : "Y-m-d"
							}]
				});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportExcel
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : true
			},
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
			delUrl : 'com.keensen.ump.produce.quality.quality2.deleteC92Solution.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						header : '原液批次'
					}, {
						dataIndex : 'a',
						header : 'a值'
					}, {
						dataIndex : 'b',
						header : 'b值'
					}, {
						dataIndex : 'densityLow',
						header : '浓度下限'
					}, {
						dataIndex : 'densityUp',
						header : '浓度上限'
					}, {
						dataIndex : 'weightBefore',
						header : '原液稀释前重量'
					}, {
						dataIndex : 'weightAfter',
						header : '原液稀释后重量'
					}, {
						dataIndex : 'light',
						header : '原液吸光度'
					}, {
						dataIndex : 'density',
						header : '原液C92浓度'
					}, {
						dataIndex : 'result',
						header : '原液判定结果',
						renderer : function(v, m, r, i) {
							return v.indexOf('不合格') > -1
									? "<span style='color:red'>" + v
											+ "</span>"
									: v;

						}
					}, {
						dataIndex : 'createTime',
						header : '测试时间'
					}, {
						dataIndex : 'operatorName',
						header : '分析员姓名'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality2.queryC92SolutionByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
						}, {
							name : 'createTime'
						}, {
							name : 'createUserId'
						}, {
							name : 'createName'
						}, {
							name : 'updateTime'
						}, {
							name : 'updateUserId'
						}, {
							name : 'updateName'
						}, {
							name : 'reserve1'
						}, {
							name : 'reserve2'
						}, {
							name : 'reserve3'
						}, {
							name : 'reserve4'
						}, {
							name : 'reserve5'
						}, {
							name : 'orgId'
						}, {
							name : 'status'
						}, {
							name : 'batchNo'
						}, {
							name : 'a'
						}, {
							name : 'b'
						}, {
							name : 'weightBefore'
						}, {
							name : 'weightAfter'
						}, {
							name : 'light'
						}, {
							name : 'density'
						}, {
							name : 'result'
						}, {
							name : 'operatorName'
						}, {
							name : 'densityLow'
						}, {
							name : 'densityUp'
						}]
			})
		})
	}

	this.initInputWindow = function() {

		var _this = this;

		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 12,
				saveUrl : 'com.keensen.ump.produce.quality.quality2.saveC92Solution.biz.ext',
				fields : [{
							ref : '../../batchNo',
							name : 'entity/batchNo',
							anchor : '85%',
							xtype : 'textfield',
							fieldLabel : '原液批次',
							allowBlank : false,
							colspan : 12
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">C92 系数</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'textfield',
							dataIndex : 'a',
							ref : '../../a',
							name : 'entity/a',
							fieldLabel : 'A值',
							readOnly : true,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',
							dataIndex : 'b',
							ref : '../../b',
							name : 'entity/b',
							fieldLabel : 'B值',
							readOnly : true,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">C92浓度范围</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'textfield',
							dataIndex : 'densityUp',
							ref : '../../densityUp',
							name : 'entity/densityUp',
							fieldLabel : '浓度上限',
							readOnly : true,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',
							dataIndex : 'densityLow',
							ref : '../../densityLow',
							name : 'entity/densityLow',
							fieldLabel : '浓度下限',
							readOnly : true,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">原液</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'numberfield',
							dataIndex : 'weightBefore',
							ref : '../../weightBefore',
							name : 'entity/weightBefore',
							allowBlank : false,
							fieldLabel : '稀释前重量',
							minValue : 0.000001,
							decimalPrecision : 4,
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							dataIndex : 'weightAfter',
							ref : '../../weightAfter',
							name : 'entity/weightAfter',
							allowBlank : false,
							fieldLabel : '稀释后重量',
							decimalPrecision : 4,
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							dataIndex : 'light',
							ref : '../../light',
							name : 'entity/light',
							allowBlank : false,
							fieldLabel : '吸光度',
							decimalPrecision : 4,
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'trigger',
							name : 'entity/density',
							emptyText : '单击旁边按钮计算',
							dataIndex : 'density',
							ref : '../../density',
							editable : false,
							allowBlank : false,
							fieldLabel : 'C92浓度',
							anchor : '95%',
							colspan : 6,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.calcC92();
							}
						}, {
							xtype : 'textfield',
							dataIndex : 'result',
							ref : '../../result',
							name : 'entity/result',
							fieldLabel : '判定结果',
							allowBlank : false,
							readOnly : true,
							anchor : '95%',
							colspan : 6
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 12,
				loadUrl : 'com.keensen.ump.produce.quality.quality2.expandC92Solution.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.quality2.saveC92Solution.biz.ext',
				fields : [{
							ref : '../../batchNo',
							name : 'entity/batchNo',
							dataIndex : 'batchNo',
							anchor : '85%',
							xtype : 'textfield',
							fieldLabel : '原液批次',
							allowBlank : false,
							colspan : 12
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">C92 系数</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'textfield',
							dataIndex : 'a',
							ref : '../../a',
							name : 'entity/a',
							fieldLabel : 'A值',
							readOnly : true,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',
							dataIndex : 'b',
							ref : '../../b',
							name : 'entity/b',
							fieldLabel : 'B值',
							readOnly : true,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">C92浓度范围</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'textfield',
							dataIndex : 'densityUp',
							ref : '../../densityUp',
							name : 'entity/densityUp',
							fieldLabel : '浓度上限',
							readOnly : true,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'textfield',
							dataIndex : 'densityLow',
							ref : '../../densityLow',
							name : 'entity/densityLow',
							fieldLabel : '浓度下限',
							readOnly : true,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'displayfield',
							fieldLabel : '<p style="color:red;">原液</p>',
							labelSeparator : '',// 去掉冒号
							colspan : 12
						}, {
							xtype : 'numberfield',
							dataIndex : 'weightBefore',
							ref : '../../weightBefore',
							name : 'entity/weightBefore',
							allowBlank : false,
							fieldLabel : '稀释前重量',
							minValue : 0.000001,
							decimalPrecision : 4,
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							dataIndex : 'weightAfter',
							ref : '../../weightAfter',
							name : 'entity/weightAfter',
							allowBlank : false,
							fieldLabel : '稀释后重量',
							decimalPrecision : 4,
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'numberfield',
							dataIndex : 'light',
							ref : '../../light',
							name : 'entity/light',
							allowBlank : false,
							fieldLabel : '吸光度',
							decimalPrecision : 4,
							anchor : '95%',
							colspan : 4
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 12
						}, {
							xtype : 'trigger',
							name : 'entity/density',
							emptyText : '单击旁边按钮计算',
							dataIndex : 'density',
							ref : '../../density',
							editable : false,
							allowBlank : false,
							fieldLabel : 'C92浓度',
							anchor : '95%',
							colspan : 6,
							hideTrigger : false,
							scope : this,
							onTriggerClick : function() {
								_this.calcC92();
							}
						}, {
							xtype : 'textfield',
							dataIndex : 'result',
							ref : '../../result',
							name : 'entity/result',
							fieldLabel : '判定结果',
							allowBlank : false,
							readOnly : true,
							anchor : '95%',
							colspan : 6
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

}