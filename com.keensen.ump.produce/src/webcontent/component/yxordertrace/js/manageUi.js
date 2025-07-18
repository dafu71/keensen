com.keensen.ump.produce.component.yxordertraceMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		this.initEditWindow4CloseState();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'componentyxordertracemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		
		var _this = this;

		this.closeStateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['正常关闭', '正常关闭'], ['异常关闭', '异常关闭']]
				});
				
		this.closeStateStore2 = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['未关闭', '未关闭'],['正常关闭', '正常关闭'], ['异常关闭', '异常关闭']]
				});

		this.warnStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['风险警报', '风险警报'], ['逾期警报', '逾期警报']]
				});

		this.applyStateStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['未投料', '未投料'], ['进行中', '进行中'], ['完成', '完成']]
				});

		this.queryPanel = new Ext.fn.QueryPanel({
			height : 180,
			columns : 3,
			border : true,
			// collapsible : true,
			titleCollapse : false,
			// title : '【营销订单查询】',
			fields : [{
						xtype : 'textfield',
						name : 'condition/orderNo2',
						anchor : '75%',
						fieldLabel : '订单号'
					}, {
						xtype : 'prodspeccombobox',
						hiddenName : 'condition/materSpecId',
						anchor : '75%',
						fieldLabel : '生产型号 '
					}, {
						xtype : "dateregion",
						colspan : 1,
						anchor : '75%',
						nameArray : ['condition/orderDateStart',
								'condition/orderDateEnd'],
						fieldLabel : "订单日期",
						format : "Y-m-d"
					}, {
						xtype : 'displayfield',
						height : '3',
						colspan : 3
					}, {
						xtype : "dateregion",
						colspan : 1,
						anchor : '75%',
						nameArray : ['condition/demandStockDateStart',
								'condition/demandStockDateEnd'],
						fieldLabel : "生产交期",
						format : "Y-m-d"
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '警报查询',
						ref : '../warn',
						hiddenName : 'condition/warn',
						anchor : '75%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.warnStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.queryPanel.warn.reset()
							}
						}
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : '判定状态',
						ref : '../applyState',
						hiddenName : 'condition/applyState',
						anchor : '75%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.applyStateStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.queryPanel.applyState.reset()
							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : ' ',
						value : '<p style="color:red;">多个订单号请用逗号分隔，或一行一个订单号</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 2
					}, {
						xtype : 'textarea',
						ref : '../orderNoStr',
						height : 50,
						colspan : 2,
						anchor : '75%',
						fieldLabel : '多订单号查询'
					}, {
						xtype : 'combobox',
						forceSelection : true,
						mode : 'local',
						fieldLabel : '关闭状态',
						ref : '../closeState',
						hiddenName : 'condition/closeState',
						anchor : '75%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.closeStateStore2,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						}
					}, {
						xtype : 'hidden',
						name : 'condition/orderNos',
						ref : '../orderNos'
					}]
		});

		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					rescode : '10003669',
					handler : this.exportExcel
				});

		this.queryPanel.addButton({
					text : "更新元件序列",
					scope : this,
					iconCls : 'icon-application_excel',
					// rescode:'10003669',
					handler : this.modifySn
				});

	}

	this.initListPanel = function() {
		var _this = this;

		var smLock = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					handleMouseDown : function(g, rowIndex, e) {
						if (e.button !== 0 || this.isLocked()) {
							return;
						}
						var view = this.grid.getView();
						if (e.shiftKey && !this.singleSelect
								&& this.last !== false) {
							var last = this.last;
							this.selectRange(last, rowIndex, e.ctrlKey);
							this.last = last;
							view.focusRow(rowIndex);
						} else {
							var isSelected = this.isSelected(rowIndex);
							if (isSelected) {
								this.deselectRow(rowIndex);
							} else if (!isSelected || this.getCount() > 1) {
								this.selectRow(rowIndex, true);
								view.focusRow(rowIndex);
							}
						}
					},
					isLocked : Ext.emptyFn,
					initEvents : function() {
						Ext.grid.CheckboxSelectionModel.superclass.initEvents
								.call(this);
						this.grid.on('render', function() {
									var view = this.grid.getView();
									view.mainBody.on('mousedown',
											this.onMouseDown, this);
									Ext.fly(view.lockedInnerHd).on('mousedown',
											this.onHdMouseDown, this);
								}, this);
					}
				});
		smLock.sortLock();

		var columns = new Ext.ux.grid.LockingColumnModel([
				new Ext.grid.RowNumberer({
							locked : true,
							width : 30
						}), smLock, {
					dataIndex : 'closeState',
					locked : true,
					header : '关闭状态',
					renderer : function(v, m, r, i) {
						if (!Ext.isEmpty(v) && v == '异常关闭') {
							return "<span style='color:red;text-decoration:none'>"
									+ v + "</span>"
						}
						return v;
					}
				}, {
					dataIndex : 'applyState',
					locked : true,
					header : '完成判定',
					renderer : function(v, m, r, i) {
						if (v == '完成') {
							return "<span style='color:green;text-decoration:none'>完成</span>"
						}
						return v;
					}
				}, {
					dataIndex : 'orderNo',
					width : 150,
					locked : true,
					header : '订单编号'
				}, {
					dataIndex : 'orderType',
					locked : true,
					header : '订单类型'
				}, {
					dataIndex : 'demandStockDate',
					locked : true,
					header : '要求入库日期'
				}, {
					dataIndex : 'materSpecName2',
					locked : true,
					header : '订单下达型号'
				}, {
					dataIndex : 'materSpecName',
					locked : true,
					header : '规格型号'
				}, {
					dataIndex : 'dryWet',
					width : 60,
					locked : true,
					header : '干膜/湿'
				}, {
					dataIndex : 'prodAmount',
					locked : true,
					header : '需生产<br>或入库数量'
				}, {
					dataIndex : 'cdmAmount',
					header : '裁叠膜<br>生产数量（支）'
				}, {
					dataIndex : 'cdmFinish',
					header : '完成比例'
				}, {
					dataIndex : 'jmAmount',
					header : '卷膜<br>生产数量（支）'
				}, {
					dataIndex : 'jmFinish',
					header : '完成比例'
				}, {
					dataIndex : 'inAmount',
					header : '改订单号<br>进入元件数（支）'
				}, {
					dataIndex : 'outAmount',
					header : '改订单号<br>移出元件数（支）'
				}, {
					dataIndex : 'qjAmount',
					header : '切边气检<br>生产数量（支）'
				}, {
					dataIndex : 'qualifiedAmount',
					header : '气检合格<br>数量（支）'
				}, {
					dataIndex : 'theoryAmount',
					header : '理论可贴标<br>元件数（支）'
				}, {
					dataIndex : 'prodLabelAmount',
					header : '贴标签数量（张）'
				}, {
					dataIndex : 'labelAmount',
					header : '贴本订单<br>标签数量（张）'
				}, {
					dataIndex : 'notLabelAmount',
					header : '未贴标数（张）'
				}, {
					dataIndex : 'qjFinish',
					header : '完成比例'
				}/*
					 * , { dataIndex : 'qjFinish', header : '完成比例' }
					 */, {
					dataIndex : 'rsAmount',
					header : '绕丝<br>生产数量（支）'
				}, {
					dataIndex : 'rsFinish',
					header : '完成比例'
				}/*
					 * , { dataIndex : 'orderDate', header : '订单日期' }, {
					 * dataIndex : 'hpmc', header : '货品名称' }, { dataIndex :
					 * 'dw', header : '单位' }
					 *//*
					 * , { dataIndex : 'dfh', header : '待发货（发库存）' }, { dataIndex :
					 * 'xsc', header : '需生产或入库数量' }, { dataIndex :
					 * 'performance', header : '产品性能' }, { dataIndex : 'remark',
					 * header : '其它备注' }
					 *//*
					 * , { dataIndex : 'jhwcsj', header : '计划完成时间' }, {
					 * dataIndex : 'scwcrq', header : '生产完成日期' }
					 */, {
					dataIndex : 'applyAmount',
					header : '请检总数量'
				}, {
					dataIndex : 'applyPercent',
					header : '完成比例',
					renderer : function(v, m, r, i) {
						return v + '%'
					}
				}, {
					dataIndex : 'diff',
					header : '风险报警',
					renderer : function(v, m, r, i) {
						var applyPercent = r.get('applyPercent');
						if (applyPercent >= 100)
							return;

						if (!Ext.isEmpty(r.get('orderAmount'))
								&& !Ext.isEmpty(r.get('labelAmount'))) {
							var orderAmount = r.get('orderAmount');
							var labelAmount = r.get('labelAmount');
							if (parseInt(labelAmount) >= parseInt(orderAmount))
								return;
						}

						// 入库日期-当前日期≥2天时显黄灯
						if (v <= 2 && v > 0) {
							return '<img src="produce/component/semifinished/img/'
									+ 'yellow' + '.png" class="myimg"">';
						}

					}
				}, {
					dataIndex : 'diff2',
					header : '逾期报警',
					renderer : function(v, m, r, i) {
						var applyPercent = r.get('applyPercent');
						if (applyPercent >= 100)
							return;
						// 当前日期-入库日期≥1天时显红灯
						if (v >= 1) {
							return '<img src="produce/component/semifinished/img/'
									+ 'red' + '.png" class="myimg"">';
						}

					}
				}, {
					dataIndex : 'bq',
					header : '标签'
				}, {
					dataIndex : 'bag',
					header : '真空包装袋'
				}, {
					dataIndex : 'box',
					header : '包装箱'
				}, {
					dataIndex : 'mark',
					header : '唛头'
				}, {
					dataIndex : 'pack',
					header : '打包方式'
				}, {
					dataIndex : 'performance',
					header : '产品性能'
				}, {
					dataIndex : 'remark',
					header : '其它备注'
				}, {
					dataIndex : 'closeRemark',
					header : '关闭说明'
				}, {
					dataIndex : 'closeUserName',
					header : '关闭人'
				}, {
					dataIndex : 'closeTime',
					header : '关闭时间'
				}]);

		var store = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.component.neworder.queryYxOrderTraceByPage.biz.ext',
			root : 'data',
			autoLoad : false,
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
						name : 'scfs'
					}, {
						name : 'bm'
					}, {
						name : 'sffh'
					}, {
						name : 'orderType'
					}, {
						name : 'type'
					}, {
						name : 'khxj'
					}, {
						name : 'cpxj'
					}, {
						name : 'ddxj'
					}, {
						name : 'orderNo'
					}, {
						name : 'orderDate'
					}, {
						name : 'hpmc'
					}, {
						name : 'dw'
					}, {
						name : 'materSpecName'
					}, {
						name : 'cpgg'
					}, {
						name : 'dryWet'
					}, {
						name : 'orderAmount'
					}, {
						name : 'dfh'
					}, {
						name : 'xsc'
					}, {
						name : 'sbkcgm'
					}, {
						name : 'sbkcsm'
					}, {
						name : 'bq'
					}, {
						name : 'bag'
					}, {
						name : 'box'
					}, {
						name : 'mark'
					}, {
						name : 'pack'
					}, {
						name : 'performance'
					}, {
						name : 'remark'
					}, {
						name : 'demandStockDate'
					}, {
						name : 'rksl'
					}, {
						name : 'jhwcsj'
					}, {
						name : 'scwcrq'
					}, {
						name : 'cdmAmount'
					}, {
						name : 'jmAmount'
					}, {
						name : 'qjAmount'
					}, {
						name : 'rsAmount'
					}, {
						name : 'cdmFinish'
					}, {
						name : 'jmFinish'
					}, {
						name : 'qjFinish'
					}, {
						name : 'rsFinish'
					}, {
						name : 'applyAmount'
					}, {
						name : 'applyPercent'
					}, {
						name : 'qualifiedAmount'
					}, {
						name : 'labelAmount'
					}, {
						name : 'diff'
					}, {
						name : 'diff2'
					}, {
						name : 'materSpecName2'
					}, {
						name : 'notLabelAmount'
					}, {
						name : 'prodAmount'
					}, {
						name : 'inAmount'
					}, {
						name : 'outAmount'
					}, {
						name : 'applyState'
					}, {
						name : 'theoryAmount'
					}, {
						name : 'prodLabelAmount'
					}, {
						name : 'closeState'
					}, {
						name : 'closeUserId'
					}, {
						name : 'closeUserName'
					}, {
						name : 'closeRemark'
					}, {
						name : 'closeTime'
					}]
		});

		this.listPanel = new Ext.fn.ListPanel({
					viewConfig : {
						forceFit : true
					},
					hsPage : true,
					view : new Ext.ux.grid.LockingGridView({
								enableRowBody : true
							}),

					sm : smLock,
					stripeRows : true,
					delUrl : '1.biz.ext',
					colModel : columns,
					store : store,
					tbar : [{
								text : '订单关闭',
								scope : this,
								iconCls : 'icon-application_edit',
								handler : this.onCloseOrder
							}]
				})

	}

	this.initEditWindow4CloseState = function() {

		this.editWindow4CloseState = this.editWindow4CloseState
				|| new Ext.fn.FormWindow({
					title : '订单关闭',
					height : 600,
					width : 800,
					resizable : false,
					minimizable : false,
					maximizable : false,
					items : [{
						xtype : 'editpanel',
						baseCls : "x-plain",
						pgrid : this.listPanel,
						columns : 1,
						loadUrl : '1.biz.ext',
						saveUrl : 'com.keensen.ump.produce.component.neworder.saveYxOrderCloseState2.biz.ext',
						fields : [{
									xtype : 'combobox',
									forceSelection : true,
									allowBlank : false,
									// allowBlank : false,
									mode : 'local',
									fieldLabel : '关闭状态',
									ref : '../../closeState',
									hiddenName : 'entity/closeState',
									anchor : '95%',
									colspan : 1,
									emptyText : '--请选择--',
									editable : false,
									store : this.closeStateStore,
									displayField : "name",
									valueField : "code",
									listeners : {
										"expand" : function(A) {
											this.reset()
										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 1
								}, {
									xtype : 'textarea',
									name : 'entity/closeRemark',
									allowBlank : false,
									value : '-',
									fieldLabel : '处理意见',
									anchor : '95%',
									colspan : 1
								}, {
									xtype : 'hidden',
									ref : '../../ids',
									name : 'entity/ids'
								}]
					}]
				});
	}

}