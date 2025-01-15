com.keensen.ump.produce.diaphragm.storage.StorageQueryMgr = function() {
	this.initPanel = function() {
		this.rec = {};
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow();

		this.initChoiceWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'storagequerymgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;

		// 黄灯预警，红灯超期
		var warnStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['yellow', '黄灯预警'], ['red', '红灯超期']]
				});

		var store = new Ext.data.SimpleStore({
					fields : ['id', 'name'],
					data : [['1', '膜片AB仓'], ['2', '膜片C仓'], ['3', '膜片发货仓'],
							['4', '试卷合格仓'], ['5', '半成品仓']]
				});

		this.storagecombo = new Ext.form.ComboBox({
			store : store,
			anchor : '100%',
			fieldLabel : '仓库',
			displayField : 'name',
			valueField : 'id',
			myvalue : '',
			typeAhead : true,
			mode : 'local',
			// name : 'condition/storageIds',
			// hiddenName: 'condition/storageIds',
			tpl : '<tpl for="."><div class="x-combo-list-item"><span><input type="checkbox" {[values.check?"checked":""]} value="{[values.id]}" /></span><span >{name}</span></div></tpl>',
			triggerAction : 'all',
			emptyText : '--请选择--',
			selectOnFocus : true,

			onSelect : function(record, index) {
				if (_this.storagecombo.fireEvent('beforeselect',
						_this.storagecombo, record, index) !== false) {
					record.set('check', !record.get('check'));
					var str = [];// 页面显示的值
					var strvalue = [];// 传入后台的值
					_this.storagecombo.store.each(function(rc) {
								if (rc.get('check')) {
									str.push(rc.get('name'));
									strvalue.push(rc.get('id'));
								}
							});
					_this.storagecombo.setValue(str.join());
					_this.storagecombo.myvalue = strvalue.join();
					_this.storagecombo.fireEvent('select', _this.storagecombo,
							record, index);
				}
			}
		});
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 210,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【库存查询】',
					fields : [this.storagecombo/*
												 * ,{ xtype : 'storagecombobox',
												 * hiddenName :
												 * 'condition/storageId', anchor :
												 * '75%', fieldLabel : '仓库' }
												 */,	{
								xtype : 'storageposcombobox',
								hiddenName : 'condition/position',
								typeAhead : true,
								typeAheadDelay : 100,
								minChars : 1,
								queryMode : 'local',
								lastQuery : '',
								editable : true,
								anchor : '75%',
								fieldLabel : '库位'
							}, {
								xtype : 'mplinecombobox',
								hiddenName : 'condition/lineId',
								anchor : '75%',
								fieldLabel : '生产线 '
							}, {
								xtype : 'mpspeccombobox',
								hiddenName : 'condition/specId',
								anchor : '75%',
								fieldLabel : '膜片型号 '
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'supcombobox',
								hiddenName : 'condition/supId',
								anchor : '75%',
								fieldLabel : '无纺布供应商'
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '75%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/planNo',
								anchor : '75%',
								fieldLabel : '计划单号'
							}, {
								xtype : 'mpperfcombobox',
								hiddenName : 'condition/perfFlagId',
								anchor : '75%',
								fieldLabel : '膜片等级'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'textarea',
								colspan : 2,
								name : 'condition/batchNoStr2',
								emptyText : '多个批次请用逗号分隔，或一行一个批次',
								anchor : '75%',
								fieldLabel : '批号'
							}, {
								xtype : 'dictcombobox',
								anchor : '75%',
								hiddenName : 'condition/ifChoice',
								fieldLabel : '是否备货',
								dictData : ABF_YESORNO,
								colspan : 1
							}, {
								fieldLabel : '不展示库存为零',
								xtype : 'checkbox',
								checked : true,
								name : 'condition/notZero',
								inputValue : 'Y',
								anchor : '75%'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '报警',
								ref : '../ifWarn',
								hiddenName : 'condition/ifWarn',
								anchor : '75%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : warnStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.ifWarn.reset()
									}
								}
							}, {
								xtype : 'hidden',
								name : 'condition/storageIds'
							}, {
								xtype : 'hidden',
								name : 'condition/batchNoStr'
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
			singleSelect : false
				// header : ''
			});
		this.listPanel = this.listPanel || new Ext.fn.EditListPanel({
			// title : '【库存列表】',
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			id : listid,
			clicksToEdit : 1,
			tbar : [{
						text : '调拨',
						scope : this,
						iconCls : 'icon-application_edit',
						hidden : modifyFlag != 1,
						handler : this.onEdit
					}, '-', {
						text : '备货',
						scope : this,
						iconCls : 'icon-application_edit',
						// hidden : modifyFlag != 1,
						handler : this.onChoice
					},{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'selfYellowCount'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'selfRedCount'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'selfYellowAmount'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'selfRedAmount'
					},{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'deliveryYellowCount'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'deliveryRedCount'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'deliveryYellowAmount'
					}, {
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						value : '',
						id : 'deliveryRedAmount'
					}],
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'storageName',
						header : '仓库名称'
					}, {
						dataIndex : 'position',
						header : '库位',
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new com.keensen.ump.StoragePosComboBox(
								{
									allowBlank : false,
									id : 'positionComb',
									scope : this,
									readOnly : modifyFlag != 1,
									hiddenName : 'code',
									typeAhead : true,
									typeAheadDelay : 100,
									minChars : 1,
									queryMode : 'local',
									lastQuery : '',
									editable : true,
									// valueField : 'code',
									// displayField : 'name',
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {
											if (newValue == oldValue)
												return false;
											var id = _this.rec.data['id'];
											_this.savePosition(id, newValue,
													oldValue);
										}
									}
								}))
					}, {
						dataIndex : 'batchNo',
						header : '批号'
					}, {
						dataIndex : 'amount',
						header : '库存数量'
					}, {
						dataIndex : 'produceDt',
						header : '生产日期'
					}, {
						dataIndex : 'outLength',
						header : '长度(米)'
					}, {
						dataIndex : 'ifWarn',
						// width : 60,
						header : '报警',
						renderer : function(v, m, r, i) {
							var ifWarn = r.get('ifWarn');
							if (!Ext.isEmpty(ifWarn)) {
								return '<img src="produce/component/semifinished/img/'
										+ ifWarn
										+ '.png" width="20" height="20">';

							}
						}
					}, {
						dataIndex : 'usefulLength',
						header : '可用长度(米)'
					}, {
						dataIndex : 'qualifidLength',
						header : '合格长度(米)'
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
						header : '初检测试台',
						width : 90,
						dataIndex : 'fMacName'
					}, {
						header : '初检膜通量',
						width : 90,
						dataIndex : 'fGfdAvg'
					}, {
						header : '初检脱盐率%',
						width : 90,
						dataIndex : 'fSaltRejection'
					}, {
						header : '复检测试台',
						width : 90,
						dataIndex : 'rMacName'
					}, {
						header : '复检膜通量',
						width : 90,
						dataIndex : 'rGfdAvg'
					}, {
						header : '复检脱盐率%',
						width : 90,
						dataIndex : 'rSaltRejection'
					}, {
						dataIndex : 'perfFlagName',
						header : '等级'
					}, {
						dataIndex : 'updateTime',
						header : '更新日期'
					}, {
						dataIndex : 'ifChoice',
						header : '是否备货',
						xtype : 'dictcolumn',
						dictData : ABF_YESORNO
					}, {
						dataIndex : 'clientName',
						header : '客户名称'
					}, {
						dataIndex : 'choiceDt',
						header : '备货日期'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.storage.query.queryStockByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
					'condition/notZero' : 'Y'
				},
				fields : [{
							name : 'storageName'
						}, {
							name : 'batchNo'
						}, {
							name : 'amount'
						}, {
							name : 'remark'
						}, {
							name : 'id'
						}, {
							name : 'updateTime'
						}, {
							name : 'usefulLength'
						}, {
							name : 'outLength'
						}, {
							name : 'perfFlagName'
						}, {
							name : 'storageName'
						}, {
							name : 'storageId'
						}, {
							name : 'planNo'
						}, {
							name : 'orderNo'
						}, {
							name : 'produceDt'
						}, {
							name : 'recordId'
						}, {
							name : 'materClassCode'
						}, {
							name : 'materSpecCode'
						}, {
							name : 'supName'
						}, {
							name : 'lineCode'
						}, {
							name : 'position'
						}, {
							name : 'qualifidLength'
						}, {
							name : 'fMacName'
						}, {
							name : 'fGfdAvg'
						}, {
							name : 'fSaltRejection'
						}, {
							name : 'rMacName'
						}, {
							name : 'rGfdAvg'
						}, {
							name : 'rSaltRejection'
						}, {
							name : 'ifChoice'
						}, {
							name : 'clientName'
						}, {
							name : 'choiceDt'
						}, {
							name : 'ifWarn'
						}]
			})
		})
	}

	this.initEditWindow = function() {
		var me = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '调拨',
			height : 200,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				successFn : function(i, r) {
					/*
					 * if (r.ret != '1') { Ext.Msg.show({ width : 350, title :
					 * "操作提示", msg : r.ret, icon : Ext.Msg.WARNING, buttons :
					 * Ext.Msg.OK, fn : function() {
					 * Ext.getCmp(listid).store.load(); } }) } else {
					 */
					// Ext.getCmp(listid).store.load();
					// me.editWindow.hide();
					// }
				},
				columns : 1,
				loadUrl : 'com.keensen.ump.produce.diaphragm.storage.query.expandEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.diaphragm.storage.allocate.allocateBatch.biz.ext',
				fields : [{
							xtype : 'textarea',
							name : 'batchNOs',
							readOnly : true,
							fieldLabel : '批号',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5'
						}/*
							 * , { xtype : 'storagecombobox', hiddenName :
							 * 'allocate/fromStorageId', readOnly : true, name :
							 * 'allocate/fromStorageId', dataIndex :
							 * 'storageId', fieldLabel : '源仓库' }, { xtype :
							 * 'displayfield', height : '5' }
							 */, {
							xtype : 'storagecombobox',
							hiddenName : 'toStorageId',
							allowBlank : false,
							name : 'toStorageId',
							fieldLabel : '目标仓库'
						}/*
							 * , { xtype : 'hidden', name : 'allocate/stockId',
							 * dataIndex : 'id' }
							 */, {
							xtype : 'hidden',
							name : 'ids'
						}]
			}]
		});
	}

	this.initChoiceWindow = function() {
		var _this = this;
		this.choiceWindow = this.choiceWindow || new Ext.fn.FormWindow({
					title : '备货',
					height : 240,
					width : 300,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
								xtype : 'inputpanel',
								baseCls : "x-plain",
								pgrid : this.listPanel,
								columns : 2,
								saveUrl : '1.biz.ext',
								fields : [{
											xtype : 'dictcombobox',
											anchor : '100%',
											ref : '../../ifChoice',
											hiddenName : 'param/ifChoice',
											fieldLabel : '是否备货',
											allowBlank : false,
											dictData : ABF_YESORNO,
											colspan : 2
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'textfield',
											ref : '../../clientName',
											name : 'param/clientName',
											fieldLabel : '客户名称',
											anchor : '100%',
											colspan : 2

										}, {
											xtype : 'displayfield',
											height : '5',
											colspan : 2
										}, {
											xtype : 'datefield',
											ref : '../../choiceDt',
											name : 'param/choiceDt',
											fieldLabel : '备货日期',
											format : "Y-m-d",
											value : new Date(),
											anchor : '100%',
											colspan : 2
										}, {
											xtype : 'hidden',
											name : 'param/ids',
											ref : '../../ids'
										}]
							}]
				});
		this.choiceWindow.buttons[0].hide();
		this.choiceWindow.buttons[1].hide();

		this.choiceWindow.addButton({
					text : "确定",
					scope : this,
					iconCls : 'icon-application_add',
					handler : this.onCreateChoice
				});

		this.choiceWindow.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.choiceWindow.hide();
					}
				});

	}
}