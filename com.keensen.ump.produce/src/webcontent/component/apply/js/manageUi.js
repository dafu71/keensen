com.keensen.ump.produce.component.applyMgr = function() {

	this.initPanel = function() {

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initChooseWindow();
		this.initEditWindow();
		this.initEditWindow2();
		this.initViewWindow();
		this.initModifyWindow();

		this.initExaminWindow();
		this.initCStockWindow();

		this.lay = new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "componentapplymgr",
					panels : [this.queryPanel, this.listPanel]
				});

		return this.lay;
	}

	this.initStore = function() {

		this.yseOrNoStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['Y', '是'], ['N', '否']]
				});

		this.prodSpecNameStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.base.common.query.biz.ext',
			root : 'data',
			autoLoad : false,
			baseParams : {
				nameSqlId : 'com.keensen.ump.produce.component.apply.queryOrderSpecName'
			},
			fields : [{
						name : 'prodSpecName'
					}]
		})

		this.prodSpecStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.base.queryProdspec.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {
						'condition/state' : 'Y'
					},
					fields : [{
								name : "id"
							}, {
								name : "name"
							}, {
								name : "blankingSize"
							}, {
								name : "denseNet"
							}, {
								name : "pageWidth"
							}, {
								name : "numPerWad"
							}, {
								name : 'mpSize'
							}, {
								name : 'mpWidth'
							}, {
								name : 'denseNetType'
							}, {
								name : 'denseNetWidth'
							}, {
								name : 'denseNetCdm'
							}, {
								name : 'lightNetType'
							}, {
								name : 'lightNetLongPage'
							}, {
								name : 'lightNetShortPage'
							}, {
								name : 'juanmo'
							}, {
								name : 'cut'
							}, {
								name : 'raosi'
							}, {
								name : 'package'
							}, {
								name : 'pipe'
							}]
				})

	}

	this.initQueryPanel = function() {

		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 140,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '100%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/code',
								anchor : '100%',
								fieldLabel : '栈板号 '
							}, {
								xtype : 'textfield',
								name : 'condition/markSpecCode',
								anchor : '100%',
								fieldLabel : '唛头显示型号 '
							}, {
								xtype : 'textfield',
								name : 'condition/prodSpecName',
								anchor : '100%',
								fieldLabel : '元件型号 '
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'dictcombobox',
								name : 'condition/ifConfirm',
								hiddenName : 'condition/ifConfirm',
								fieldLabel : '是否已确认',
								anchor : '100%',
								dictData : KS_YESORNO
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '100%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "请检日期",
								format : "Y-m-d"
							}, {
								xtype : 'textfield',
								name : 'condition/batchNo',
								anchor : '100%',
								fieldLabel : '元件序列号 '
							}, {
								xtype : 'dictcombobox',
								dataIndex : 'storage',
								hiddenName : 'condition/storage',
								fieldLabel : '入库仓位',
								dictData : KS_PROD_STORAGE,
								emptyText : "",
								anchor : '100%'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'dictcombobox',
								name : 'condition/ifcstock',
								hiddenName : 'condition/ifcstock',
								fieldLabel : '已确认入C仓',
								anchor : '100%',
								dictData : KS_YESORNO
							}]
				});

		this.queryPanel.addButton({
					text : "批量导出请检元件",
					scope : this,
					hidden : exportflag == '0',
					// rescode : '10002781',
					iconCls : 'icon-application_excel',
					handler : this.exportExcelBatch
				});
		/*
		 * this.queryPanel.addButton({ text : "导出", scope : this, iconCls :
		 * 'icon-application_excel', handler : this.exportExcel });
		 */
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
			id : listid,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onModify
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						disabled : (uid != 'KS00610') && (uid != 'KS01313')
								&& (uid != 'KS00524') && (uid != 'XXB')
								&& (uid != 'KS00307'),
						handler : this.onDeleteOrder
					}, '-', {
						text : '审核',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onExamine
					}, '-', {
						text : '检验',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onCheck
					}, '-', {
						text : '确认',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onConfirm
					}, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}, '-', {
						text : '导出元件清单',
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
					}, '->', {
						text : '确认入C仓',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onCStock
					}, '-', {
						text : '打印',
						scope : this,
						iconCls : 'icon-printer',
						handler : this.onPrint
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.component.apply.deleteHead.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel, {
						dataIndex : 'code',
						sortable : true,
						header : '栈板号'
					}, {
						dataIndex : 'orderNo',
						sortable : true,
						header : '订单号',
						renderer : function(v, m, r, i) {
							var confirmDate = r.get('confirmDate');
							if (!Ext.isEmpty(confirmDate)) {
								return "<span style='color:red'>" + v
										+ "</span>";
							} else {
								return v;
							}
						}
					}, {
						dataIndex : 'ifcstock',
						sortable : true,
						header : '已确认入C仓'
					}, {
						dataIndex : 'orderType',
						sortable : true,
						header : '订单类型'
					}, {
						dataIndex : 'markSpecCode',
						sortable : true,
						header : '唛头显示型号'
					}, {
						dataIndex : 'prodSpecName',
						sortable : true,
						header : '元件型号'
					}, {
						dataIndex : 'orderAmount',
						sortable : true,
						header : '订单数量'
					}, {
						dataIndex : 'applyAmount',
						sortable : true,
						header : '请检数量'
					}, {
						dataIndex : 'storage',
						xtype : 'dictcolumn',
						dictData : KS_PROD_STORAGE,
						sortable : true,
						header : '入库'
					}, {
						dataIndex : 'printCnt',
						sortable : true,
						header : '打印次数'
					}, {
						dataIndex : 'applyAmountTotal',
						sortable : true,
						header : '请检总数量'
					}, {
						dataIndex : 'performance',
						sortable : true,
						header : '性能'
					}, {
						dataIndex : 'applyUserName',
						sortable : true,
						header : '请检人'
					}, {
						dataIndex : 'createTime',
						sortable : true,
						header : '请检时间'
					}, {
						xtype : 'dictcolumn',
						sortable : true,
						dictData : KS_YESORNO,
						dataIndex : 'isExamine',
						header : '是否已审核'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.apply.queryByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
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
							name : 'orderNo'
						}, {
							name : 'code'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'orderAmount'
						}, {
							name : 'applyAmount'
						}, {
							name : 'checkUserId'
						}, {
							name : 'checkUserName'
						}, {
							name : 'applyDate'
						}, {
							name : 'applyUserId'
						}, {
							name : 'applyUserName'
						}, {
							name : 'lid'
						}, {
							name : 'prodClassFlag'
						}, {
							name : 'tape'
						}, {
							name : 'markSpecialFlag'
						}, {
							name : 'markTypeFlag'
						}, {
							name : 'markSpecCode'
						}, {
							name : 'markIsok'
						}, {
							name : 'labelIsok'
						}, {
							name : 'apperanceIsok'
						}, {
							name : 'diameter'
						}, {
							name : 'final'
						}, {
							name : 'deal'
						}, {
							name : 'deal1'
						}, {
							name : 'deal2'
						}, {
							name : 'deal3'
						}, {
							name : 'storage'
						}, {
							name : 'manageUserId'
						}, {
							name : 'manageUserName'
						}, {
							name : 'orderType'
						}, {
							name : 'confirmDate'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'printCnt'
						}, {
							name : 'applyAmountTotal'
						}, {
							name : 'isExamine'
						}, {
							name : 'performance'
						}, {
							name : 'ifcstock'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			// title : '【请检元件清单】',
			region : 'center',
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			tbar : [{
						text : '选择元件',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onChoose
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel3
					}],
			autoScroll : false,
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel2, {
						dataIndex : 'batchNo',
						header : '元件序列号'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'tumoBatchStr',
						header : '膜片批次'
					}, {
						dataIndex : 'tape',
						header : '卷膜胶带'
					}, {
						dataIndex : 'lid',
						header : '端盖'
					}, {
						dataIndex : 'label',
						header : '标签'
					}, {
						dataIndex : 'box',
						header : '包装箱'
					}, {
						dataIndex : 'markTypeFlag',
						header : '唛头'
					}, {
						dataIndex : 'state',
						header : '状态'
					}, {
						dataIndex : 'diameter',
						header : '上端直径'
					}, {
						dataIndex : 'diameter',
						header : '下端直径'
					}, {
						dataIndex : 'checkResult',
						header : '气检值'
					}, {
						dataIndex : 'gpdAvg',
						header : '产水量，GPD'
					}, {
						dataIndex : 'saltAvg',
						header : '脱盐率，%'
					}, {
						dataIndex : 'fcode',
						header : '元件返工单号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.apply.queryList.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'tape'
						}, {
							name : 'lid'
						}, {
							name : 'label'
						}, {
							name : 'box'
						}, {
							name : 'markTypeFlag'
						}, {
							name : 'gpdAvg'
						}, {
							name : 'saltAvg'
						}, {
							name : 'fcode'
						}, {
							name : 'batchNo'
						}, {
							name : 'state'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'tumoBatchStr'
						}, {
							name : 'checkResult'
						}, {
							name : 'diameter'
						}, {
							name : 'diameter2'
						}]
			})
		})

		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
					height : 400,
					region : 'north',
					// baseCls : "x-panel",
					autoHide : false,
					autoScroll : false,
					border : true,
					columns : 12,
					saveUrl : 'com.keensen.ump.produce.component.apply.add.biz.ext',
					fields : [{
						xtype : 'combobox',
						anchor : '95%',
						colspan : 6,
						allowBlank : false,
						name : 'orderType',
						dataIndex : 'orderType',
						hiddenName : 'orderType',
						fieldLabel : '订单类型',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									fields : ['mykey', 'myvalue'],
									data : [['公司标准', '公司标准'],
											['非公司标准', '非公司标准']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "--请选择--"
					}, {
						xtype : 'trigger',
						emptyText : '输入订单号，单击旁边按钮选择元件',
						name : 'orderNo',
						ref : '../orderNo',
						allowBlank : false,
						fieldLabel : '订单号',
						anchor : '95%',
						colspan : 6,
						editable : true,
						hideTrigger : false,
						scope : this,
						onTriggerClick : function() {
							_this.onChoose();
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'numberfield',
						name : 'orderAmount',
						allowBlank : false,
						fieldLabel : '订单数量',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'numberfield',
						ref : '../applyAmount',
						name : 'applyAmount',
						allowBlank : false,
						fieldLabel : '请检数量',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">订单要求  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {

						anchor : '95%',
						colspan : 6,
						xtype : 'combo',
						mode : 'local',
						ref : '../prodSpecName',
						displayField : 'name',
						valueField : 'name',
						hiddenName : 'prodSpecName',
						allowBlank : false,
						fieldLabel : '元件型号',
						store : _this.prodSpecStore,
						listeners : {
							'expand' : function(A) {
								_this.inputPanel.prodSpecName.reset();
							},
							'select' : function(combo, record, index) {
								if (index > -1) {
									var package2 = record.get('package');
									_this.inputPanel.package2
											.setValue(package2);
								}
							}
						}

					}, {
						xtype : 'dictcombobox',
						name : 'prodClassFlag',
						hiddenName : 'prodClassFlag',
						allowBlank : false,
						fieldLabel : '元件类型',
						dictData : KS_PROD_CLASS_FLAG,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						name : 'lid',
						hiddenName : 'lid',
						allowBlank : false,
						fieldLabel : '端盖',
						dictData : KS_PROD_LID,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'dictcombobox',
						name : 'markTypeFlag',
						hiddenName : 'markTypeFlag',
						allowBlank : false,
						fieldLabel : '唛头情况',
						dictData : KS_PROD_MARK_TYPE_FLAG,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textfield',
						name : 'markSpecCode',
						fieldLabel : '唛头显示型号',
						allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'dictcombobox',
						name : 'tape',
						hiddenName : 'tape',
						fieldLabel : '膜体所裹胶带',
						allowBlank : false,
						dictData : KS_PROD_TAPE,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						name : 'markSpecialFlag',
						hiddenName : 'markSpecialFlag',
						allowBlank : false,
						fieldLabel : '加贴特殊唛头',
						dictData : KS_YESORNO,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'textfield',
						name : 'performance',
						fieldLabel : '性能',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dictData : KS_COMPONENT_INDUSTRY_BOX,
						name : 'box',
						hiddenName : 'box',
						fieldLabel : '包装箱',
						// allowBlank : false,
						anchor : '95%',
						colspan : 4
					}, {
						xtype : 'combobox',
						name : 'tray',
						anchor : '95%',
						colspan : 4,
						hiddenName : 'tray',
						ref : '../tray',
						fieldLabel : '托盘',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									id : 0,
									fields : ['mykey', 'myvalue'],
									data : [['木托盘', '木托盘'], ['塑料托盘', '塑料托盘'],
											['免熏蒸托盘', '免熏蒸托盘'], ['其它', '其它']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "--请选择--",
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.inputPanel.tray.reset();
							}
						}
					}, {
						xtype : 'dictcombobox',
						name : 'label',
						hiddenName : 'label',
						fieldLabel : '标签',
						// allowBlank : false,
						anchor : '95%',
						colspan : 4,
						dictData : KS_COMPONENT_INDUSTRY_LABEL
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">外观不合格信息  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'dictcheckboxgroup',
						columns : 6,
						ref : '../myabnormal',
						// hiddenName : 'abnormal',
						fieldLabel : '外观异常类型',
						anchor : '95%',
						colspan : 12,
						dictData : KS_COMPONENT_INDUSTRY_ABNORMAL
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textarea',
						name : 'abnormalExplain',
						fieldLabel : '外观异常说明',
						// allowBlank : false,
						height : 50,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'textarea',
						name : 'abnormalOther',
						fieldLabel : '其他异常备注',
						// allowBlank : false,
						height : 50,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						// name : 'entity/remark',
						ref : '../package2',
						height : 30,
						xtype : 'textarea',
						readOnly : true,
						fieldLabel : '包装特殊要求',
						colspan : 12,
						anchor : '95%'
					}, {
						xtype : 'hidden',
						ref : '../abnormal',
						name : 'abnormal'
					}],
					buttons : [{
								text : "保存",
								scope : this,
								handler : this.onSave
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.inputPanel.form.reset();
									this.inputWindow.hide();
								}
							}]

				})

		this.inputWindow = this.inputWindow || new Ext.Window({
					title : '新增',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.inputPanel, this.listPanel2]

				});

	}

	this.initChooseWindow = function() {

		var _this = this;
		var prodStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.produce.component.apply.queryProd.biz.ext',
					root : 'data',
					autoLoad : false,
					totalProperty : '',
					baseParams : {},
					fields : [{
								name : 'id',
								name : 'name'
							}]
				})
		this.prodcombo = new Ext.form.ComboBox({
			store : prodStore,
			anchor : '100%',
			fieldLabel : '元件型号',
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
				if (_this.prodcombo.fireEvent('beforeselect', _this.prodcombo,
						record, index) !== false) {
					record.set('check', !record.get('check'));
					var str = [];// 页面显示的值
					var strvalue = [];// 传入后台的值
					_this.prodcombo.store.each(function(rc) {
								if (rc.get('check')) {
									str.push(rc.get('name'));
									strvalue.push(rc.get('id'));
								}
							});
					_this.prodcombo.setValue(str.join());
					_this.prodcombo.myvalue = strvalue.join();
					_this.prodcombo.fireEvent('select', _this.prodcombo,
							record, index);
				}
			}
		});

		var selModel3 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					handleMouseDown : Ext.emptyFn
				});

		this.listPanel3 = this.listPanel3 || new Ext.fn.ListPanel({
			region : 'center',
			id : listid3,
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			selModel : selModel3,
			tbar : [{
						text : '确定选择',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSelect
					}],
			delUrl : '111.biz.ext',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel3, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'batchNo',
						header : '元件序号'
					}, {
						dataIndex : 'tumoBatchStr',
						header : '涂膜批次'
					}, {
						dataIndex : 'tape',
						header : '卷膜胶带'
					}, {
						dataIndex : 'lid',
						header : '端盖'
					}, {
						dataIndex : 'label',
						header : '标签'
					}, {
						dataIndex : 'box',
						header : '包装箱'
					}, {
						dataIndex : 'markTypeFlag',
						header : '唛头'
					}, {
						dataIndex : 'state',
						header : '状态'
					}, {
						dataIndex : 'diameter',
						header : '上端直径'
					}, {
						dataIndex : 'diameter',
						header : '下端直径'
					}, {
						dataIndex : 'checkResult',
						header : '气检值'
					}, {
						dataIndex : 'gpdAvg',
						header : '产水量，GPD'
					}, {
						dataIndex : 'saltAvg',
						header : '脱盐率，%'
					}, {
						dataIndex : 'fcode',
						header : '元件返工单号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.apply.queryComponent.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'tape'
						}, {
							name : 'lid'
						}, {
							name : 'label'
						}, {
							name : 'box'
						}, {
							name : 'markTypeFlag'
						}, {
							name : 'gpdAvg'
						}, {
							name : 'saltAvg'
						}, {
							name : 'fcode'
						}, {
							name : 'orderNo'
						}, {
							name : 'batchNo'
						}, {
							name : 'state'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'tumoBatchStr'
						}, {
							name : 'checkResult'
						}, {
							name : 'diameter'
						}, {
							name : 'diameter2'
						}]
			})
		})

		this.queryPanel3 = this.queryPanel3 || new Ext.fn.QueryPanel({
					height : 80,
					columns : 3,
					border : true,
					region : 'north',
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/orderNo',
								ref : '../orderNo',
								readOnly : true,
								// anchor : '85%',
								fieldLabel : '订单号'
							}, this.prodcombo, {
								xtype : "dateregion",
								// anchor : '100%',
								colspan : 1,
								nameArray : ['condition/produceDtStart',
										'condition/produceDtEnd'],
								fieldLabel : "元件生产日期",
								format : "Y-m-d"
							}, {
								xtype : 'hidden',
								name : 'condition/prodSpecName'
							}]
				})

		this.queryPanel3.addButton({
					text : "关闭",
					scope : this,
					handler : function() {
						this.chooseWindow.hide();
					}

				});

		this.chooseWindow = this.chooseWindow || new Ext.Window({
					title : '请检元件查询',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 900,
					height : 600,
					layout : 'border',
					items : [this.queryPanel3, this.listPanel3]

				})
	}

	this.initEditWindow = function() {
		var _this = this;

		var selModel4 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4 = this.listPanel4 || new Ext.fn.ListPanel({
			// title : '【请检元件清单】',
			region : 'center',
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			delUrl : 'com.keensen.ump.produce.component.apply.deleteList.biz.ext',
			tbar : [{
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			autoScroll : false,
			selModel : selModel4,
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel4, {
						dataIndex : 'batchNo',
						header : '元件序列号'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'tumoBatchStr',
						header : '膜片批次'
					}, {
						dataIndex : 'tape',
						header : '卷膜胶带'
					}, {
						dataIndex : 'lid',
						header : '端盖'
					}, {
						dataIndex : 'label',
						header : '标签'
					}, {
						dataIndex : 'box',
						header : '包装箱'
					}, {
						dataIndex : 'markTypeFlag',
						header : '唛头'
					}, {
						dataIndex : 'state',
						header : '状态'
					}, {
						dataIndex : 'diameter',
						header : '上端直径'
					}, {
						dataIndex : 'diameter',
						header : '下端直径'
					}, {
						dataIndex : 'checkResult',
						header : '气检值'
					}, {
						dataIndex : 'gpdAvg',
						header : '产水量，GPD'
					}, {
						dataIndex : 'saltAvg',
						header : '脱盐率，%'
					}, {
						dataIndex : 'fcode',
						header : '元件返工单号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.apply.queryList.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'tape'
						}, {
							name : 'lid'
						}, {
							name : 'label'
						}, {
							name : 'box'
						}, {
							name : 'markTypeFlag'
						}, {
							name : 'gpdAvg'
						}, {
							name : 'saltAvg'
						}, {
							name : 'fcode'
						}, {
							name : 'batchNo'
						}, {
							name : 'state'
						}, {
							name : 'id'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'tumoBatchStr'
						}, {
							name : 'checkResult'
						}, {
							name : 'diameter'
						}, {
							name : 'diameter2'
						}]
			})
		})

		this.editPanel = this.editPanel || new Ext.fn.EditPanel({
			height : 470,
			region : 'north',
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 12,
			saveUrl : 'com.keensen.ump.produce.component.apply.saveHead.biz.ext',
			loadUrl : 'com.keensen.ump.produce.component.apply.expandHead.biz.ext',
			fields : [{
						xtype : 'combobox',
						anchor : '95%',
						colspan : 6,
						readOnly : true,
						dataIndex : 'orderType',
						hiddenName : 'orderType',
						fieldLabel : '订单类型',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									fields : ['mykey', 'myvalue'],
									data : [['公司标准', '公司标准'],
											['非公司标准', '非公司标准']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "--请选择--"
					}, {
						xtype : 'textfield',
						dataIndex : 'orderNo',
						ref : '../orderNo',
						readOnly : true,
						fieldLabel : '订单号',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'numberfield',
						dataIndex : 'orderAmount',
						readOnly : true,
						fieldLabel : '订单数量',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'numberfield',
						ref : '../applyAmount',

						dataIndex : 'applyAmount',
						name : 'entity/applyAmount',
						readOnly : true,
						fieldLabel : '请检数量',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">订单要求  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'prodSpecName',
						name : 'prodSpecName',
						fieldLabel : '元件型号',
						readOnly : true,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'prodClassFlag',
						readOnly : true,
						fieldLabel : '元件类型',
						dictData : KS_PROD_CLASS_FLAG,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'lid',
						fieldLabel : '端盖',
						readOnly : true,
						dictData : KS_PROD_LID,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'markTypeFlag',
						readOnly : true,
						fieldLabel : '唛头情况',
						dictData : KS_PROD_MARK_TYPE_FLAG,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'markSpecCode',
						readOnly : true,
						fieldLabel : '唛头显示型号',
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'tape',
						readOnly : true,
						fieldLabel : '膜体所裹胶带',
						dictData : KS_PROD_TAPE,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'markSpecialFlag',
						readOnly : true,
						fieldLabel : '加贴特殊唛头',
						dictData : KS_YESORNO,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'textfield',
						dataIndex : 'performance',
						fieldLabel : '性能',
						readOnly : true,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dictData : KS_COMPONENT_INDUSTRY_BOX,
						name : 'box',
						hiddenName : 'box',
						dataIndex : 'box',
						fieldLabel : '包装箱',
						readOnly : true,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'combobox',
						dataIndex : 'tray',
						anchor : '95%',
						readOnly : true,
						ref : '../tray',
						fieldLabel : '托盘',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									id : 0,
									fields : ['mykey', 'myvalue'],
									data : [['木托盘', '木托盘'], ['塑料托盘', '塑料托盘'],
											['免熏蒸托盘', '免熏蒸托盘'], ['其它', '其它']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						name : 'label',
						dataIndex : 'label',
						readOnly : true,
						fieldLabel : '标签',
						// allowBlank : false,
						anchor : '95%',
						colspan : 3,
						dictData : KS_COMPONENT_INDUSTRY_LABEL
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">外观不合格信息  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'dictcheckboxgroup',
						columns : 6,
						readOnly : true,
						dataIndex : 'abnormal',
						fieldLabel : '外观异常类型',
						anchor : '95%',
						colspan : 12,
						dictData : KS_COMPONENT_INDUSTRY_ABNORMAL
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textarea',
						readOnly : true,
						height : 35,
						dataIndex : 'abnormalExplain',
						fieldLabel : '外观异常说明',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'textarea',
						readOnly : true,
						height : 35,
						dataIndex : 'abnormalOther',
						fieldLabel : '其他异常备注',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">外观和尺寸检查  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'markIsok',
						hiddenName : 'entity/markIsok',
						allowBlank : false,
						fieldLabel : '包装箱唛头',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "是否合格",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'labelIsok',
						hiddenName : 'entity/labelIsok',
						allowBlank : false,
						fieldLabel : '元件标签',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "是否合格",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'apperanceIsok',
						hiddenName : 'entity/apperanceIsok',
						allowBlank : false,
						fieldLabel : '元件外观',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "是否合格",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'diameter',
						hiddenName : 'entity/diameter',
						allowBlank : false,
						fieldLabel : '元件直径',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "是否合格",
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'final',
						hiddenName : 'entity/final',
						allowBlank : false,
						fieldLabel : '最终判定',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "是否合格",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'deal',
						hiddenName : 'entity/deal',
						// allowBlank : false,
						fieldLabel : '不合格处理方式',
						dictData : KS_PROD_APPLY_DEAL,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'storage',
						hiddenName : 'entity/storage',
						allowBlank : false,
						fieldLabel : '入库仓位',
						dictData : KS_PROD_STORAGE,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">不合格处理方式  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'deal1',
						ref : '../deal1',
						hiddenName : 'entity/deal1',
						// allowBlank : false,
						fieldLabel : '返工重新<br>检验结果',
						dictData : KS_YESORNO,
						anchor : '100%%',
						emptyText : "是否合格",
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'deal2',
						ref : '../deal2',
						name : 'entity/deal2',
						// allowBlank : false,
						fieldLabel : '让步接收品质<br>异常单编号',
						anchor : '100%%',
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'deal3',
						ref : '../deal3',
						name : 'entity/deal3',
						// allowBlank : false,
						fieldLabel : '待处理建议<br>元件型号',
						anchor : '100%%',
						colspan : 4
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'combo',
						mode : 'local',
						fieldLabel : '直径是否放行',
						hidden : false,
						disabled : true,
						allowBlank : false,
						ref : '../diameterCheckResult',
						hiddenName : 'entity/diameterCheckResult',
						dataIndex : 'diameterCheckResult',
						anchor : '100%',
						colspan : 4,
						emptyText : '--请选择--',
						editable : false,
						store : this.yseOrNoStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.editPanel.diameterCheckResult.reset()
							}
						}
					}, {
						xtype : 'hidden',
						name : 'entity/id',
						ref : '../pkid',
						dataIndex : 'id'
					}],
			buttons : [{
						text : "保存",
						scope : this,
						handler : this.onSaveCheck
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.editPanel.form.reset();
							this.editWindow.hide();
						}
					}]

		})

		this.editWindow = this.editWindow || new Ext.Window({
					title : '检验',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.editPanel, this.listPanel4]

				});

	}

	this.initEditWindow2 = function() {
		var _this = this;

		var selModel5 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel5 = this.listPanel5 || new Ext.fn.ListPanel({
			// title : '【请检元件清单】',
			region : 'center',
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			autoScroll : false,
			selModel : selModel5,
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel5, {
						dataIndex : 'batchNo',
						header : '元件序列号'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'tumoBatchStr',
						header : '膜片批次'
					}, {
						dataIndex : 'tape',
						header : '卷膜胶带'
					}, {
						dataIndex : 'lid',
						header : '端盖'
					}, {
						dataIndex : 'label',
						header : '标签'
					}, {
						dataIndex : 'box',
						header : '包装箱'
					}, {
						dataIndex : 'markTypeFlag',
						header : '唛头'
					}, {
						dataIndex : 'state',
						header : '状态'
					}, {
						dataIndex : 'diameter',
						header : '上端直径'
					}, {
						dataIndex : 'diameter',
						header : '下端直径'
					}, {
						dataIndex : 'checkResult',
						header : '气检值'
					}, {
						dataIndex : 'gpdAvg',
						header : '产水量，GPD'
					}, {
						dataIndex : 'saltAvg',
						header : '脱盐率，%'
					}, {
						dataIndex : 'fcode',
						header : '元件返工单号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.apply.queryList.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'tape'
						}, {
							name : 'lid'
						}, {
							name : 'label'
						}, {
							name : 'box'
						}, {
							name : 'markTypeFlag'
						}, {
							name : 'gpdAvg'
						}, {
							name : 'saltAvg'
						}, {
							name : 'fcode'
						}, {
							name : 'batchNo'
						}, {
							name : 'state'
						}, {
							name : 'id'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'tumoBatchStr'
						}, {
							name : 'checkResult'
						}, {
							name : 'diameter'
						}, {
							name : 'diameter2'
						}]
			})
		})

		this.editPanel2 = this.editPanel2 || new Ext.fn.EditPanel({
			height : 470,
			region : 'north',
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 12,
			saveUrl : 'com.keensen.ump.produce.component.apply.saveHead.biz.ext',
			loadUrl : 'com.keensen.ump.produce.component.apply.expandHead.biz.ext',
			fields : [{
						xtype : 'combobox',
						anchor : '95%',
						colspan : 6,
						readOnly : true,
						dataIndex : 'orderType',
						hiddenName : 'orderType',
						fieldLabel : '订单类型',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									fields : ['mykey', 'myvalue'],
									data : [['公司标准', '公司标准'],
											['非公司标准', '非公司标准']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "--请选择--"
					}, {
						xtype : 'textfield',
						dataIndex : 'orderNo',
						ref : '../orderNo',
						readOnly : true,
						fieldLabel : '订单号',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'numberfield',
						dataIndex : 'orderAmount',
						readOnly : true,
						fieldLabel : '订单数量',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'numberfield',
						ref : '../applyAmount',
						dataIndex : 'applyAmount',
						readOnly : true,
						fieldLabel : '请检数量',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">订单要求  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'prodSpecName',
						// name : 'prodSpecName',
						fieldLabel : '元件型号',
						readOnly : true,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'prodClassFlag',
						readOnly : true,
						fieldLabel : '元件类型',
						dictData : KS_PROD_CLASS_FLAG,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'lid',
						fieldLabel : '端盖',
						readOnly : true,
						dictData : KS_PROD_LID,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'markTypeFlag',
						readOnly : true,
						fieldLabel : '唛头情况',
						dictData : KS_PROD_MARK_TYPE_FLAG,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'markSpecCode',
						readOnly : true,
						fieldLabel : '唛头显示型号',
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'tape',
						readOnly : true,
						fieldLabel : '膜体所裹胶带',
						dictData : KS_PROD_TAPE,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'markSpecialFlag',
						readOnly : true,
						fieldLabel : '加贴特殊唛头',
						dictData : KS_YESORNO,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'textfield',
						dataIndex : 'performance',
						fieldLabel : '性能',
						readOnly : true,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dictData : KS_COMPONENT_INDUSTRY_BOX,
						name : 'box',
						hiddenName : 'box',
						dataIndex : 'box',
						fieldLabel : '包装箱',
						readOnly : true,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'combobox',
						dataIndex : 'tray',
						anchor : '95%',
						readOnly : true,
						ref : '../tray',
						fieldLabel : '托盘',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									id : 0,
									fields : ['mykey', 'myvalue'],
									data : [['木托盘', '木托盘'], ['塑料托盘', '塑料托盘'],
											['免熏蒸托盘', '免熏蒸托盘'], ['其它', '其它']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						name : 'label',
						dataIndex : 'label',
						readOnly : true,
						fieldLabel : '标签',
						// allowBlank : false,
						anchor : '95%',
						colspan : 3,
						dictData : KS_COMPONENT_INDUSTRY_LABEL
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">外观不合格信息  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'dictcheckboxgroup',
						columns : 6,
						readOnly : true,
						dataIndex : 'abnormal',
						fieldLabel : '外观异常类型',
						anchor : '95%',
						colspan : 12,
						dictData : KS_COMPONENT_INDUSTRY_ABNORMAL
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textarea',
						readOnly : true,
						height : 35,
						dataIndex : 'abnormalExplain',
						fieldLabel : '外观异常说明',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'textarea',
						readOnly : true,
						height : 35,
						dataIndex : 'abnormalOther',
						fieldLabel : '其他异常备注',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">外观和尺寸检查  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'markIsok',
						hiddenName : 'entity/markIsok',
						allowBlank : false,
						fieldLabel : '包装箱唛头',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "是否合格",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'labelIsok',
						hiddenName : 'entity/labelIsok',
						allowBlank : false,
						fieldLabel : '元件标签',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "是否合格",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'apperanceIsok',
						hiddenName : 'entity/apperanceIsok',
						allowBlank : false,
						fieldLabel : '元件外观',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "是否合格",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'diameter',
						hiddenName : 'entity/diameter',
						allowBlank : false,
						fieldLabel : '元件直径',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "是否合格",
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'final',
						hiddenName : 'entity/final',
						allowBlank : false,
						fieldLabel : '最终判定',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "是否合格",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'deal',
						hiddenName : 'entity/deal',
						// allowBlank : false,
						fieldLabel : '不合格处理方式',
						dictData : KS_PROD_APPLY_DEAL,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'storage',
						hiddenName : 'entity/storage',
						allowBlank : false,
						fieldLabel : '入库仓位',
						dictData : KS_PROD_STORAGE,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">不合格处理方式  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'deal1',
						ref : '../deal1',
						hiddenName : 'entity/deal1',
						// allowBlank : false,
						fieldLabel : '返工重新<br>检验结果',
						dictData : KS_YESORNO,
						anchor : '100%%',
						emptyText : "是否合格",
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'deal2',
						ref : '../deal2',
						name : 'entity/deal2',
						// allowBlank : false,
						fieldLabel : '让步接收品质<br>异常单编号',
						anchor : '100%%',
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'deal3',
						ref : '../deal3',
						name : 'entity/deal3',
						// allowBlank : false,
						fieldLabel : '待处理建议<br>元件型号',
						anchor : '100%%',
						colspan : 4
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'combo',
						mode : 'local',
						fieldLabel : '直径是否放行',
						ref : '../diameterCheckResult',
						hiddenName : 'entity/diameterCheckResult',
						dataIndex : 'diameterCheckResult',
						anchor : '100%',
						colspan : 4,
						emptyText : '--请选择--',
						editable : false,
						store : this.yseOrNoStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.editPanel.diameterCheckResult.reset()
							}
						}
					}, {
						xtype : 'hidden',
						name : 'entity/id',
						ref : '../pkid',
						dataIndex : 'id'
					}, {
						xtype : 'hidden',
						name : 'entity/opt',
						value : 'confirm'
					}],
			buttons : [{
						text : "确认",
						scope : this,
						handler : this.onSaveConfirm
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.editPanel2.form.reset();
							this.editWindow2.hide();
						}
					}]

		})

		this.editWindow2 = this.editWindow2 || new Ext.Window({
					title : '确认',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.editPanel2, this.listPanel5]

				});

	}

	this.initViewWindow = function() {
		var _this = this;

		var selModel6 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel6 = this.listPanel6 || new Ext.fn.ListPanel({
			// title : '【请检元件清单】',
			region : 'center',
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			autoScroll : false,
			selModel : selModel6,
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel6, {
						dataIndex : 'batchNo',
						header : '元件序列号'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'tumoBatchStr',
						header : '膜片批次'
					}, {
						dataIndex : 'tape',
						header : '卷膜胶带'
					}, {
						dataIndex : 'lid',
						header : '端盖'
					}, {
						dataIndex : 'label',
						header : '标签'
					}, {
						dataIndex : 'box',
						header : '包装箱'
					}, {
						dataIndex : 'markTypeFlag',
						header : '唛头'
					}, {
						dataIndex : 'state',
						header : '状态'
					}, {
						dataIndex : 'diameter',
						header : '上端直径'
					}, {
						dataIndex : 'diameter',
						header : '下端直径'
					}, {
						dataIndex : 'checkResult',
						header : '气检值'
					}, {
						dataIndex : 'gpdAvg',
						header : '产水量，GPD'
					}, {
						dataIndex : 'saltAvg',
						header : '脱盐率，%'
					}, {
						dataIndex : 'fcode',
						header : '元件返工单号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.apply.queryList.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'tape'
						}, {
							name : 'lid'
						}, {
							name : 'label'
						}, {
							name : 'box'
						}, {
							name : 'markTypeFlag'
						}, {
							name : 'gpdAvg'
						}, {
							name : 'saltAvg'
						}, {
							name : 'fcode'
						}, {
							name : 'batchNo'
						}, {
							name : 'state'
						}, {
							name : 'id'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'tumoBatchStr'
						}, {
							name : 'checkResult'
						}, {
							name : 'diameter'
						}, {
							name : 'diameter2'
						}]
			})
		})

		this.editPanel3 = this.editPanel3 || new Ext.fn.EditPanel({
			height : 470,
			region : 'north',
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 12,
			saveUrl : '1.biz.ext',
			loadUrl : 'com.keensen.ump.produce.component.apply.expandHead.biz.ext',
			fields : [{
						xtype : 'combobox',
						anchor : '95%',
						colspan : 6,
						readOnly : true,
						dataIndex : 'orderType',
						hiddenName : 'orderType',
						fieldLabel : '订单类型',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									fields : ['mykey', 'myvalue'],
									data : [['公司标准', '公司标准'],
											['非公司标准', '非公司标准']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : ""
					}, {
						xtype : 'textfield',
						dataIndex : 'orderNo',
						ref : '../orderNo',
						readOnly : true,
						fieldLabel : '订单号',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'numberfield',
						dataIndex : 'orderAmount',
						readOnly : true,
						fieldLabel : '订单数量',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'numberfield',
						ref : '../applyAmount',
						dataIndex : 'applyAmount',
						readOnly : true,
						fieldLabel : '请检数量',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">订单要求  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'prodSpecName',
						// name : 'prodSpecName',
						fieldLabel : '元件型号',
						readOnly : true,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'prodClassFlag',
						readOnly : true,
						fieldLabel : '元件类型',
						dictData : KS_PROD_CLASS_FLAG,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'lid',
						fieldLabel : '端盖',
						readOnly : true,
						dictData : KS_PROD_LID,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'markTypeFlag',
						readOnly : true,
						fieldLabel : '唛头情况',
						dictData : KS_PROD_MARK_TYPE_FLAG,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'markSpecCode',
						readOnly : true,
						fieldLabel : '唛头显示型号',
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'tape',
						readOnly : true,
						fieldLabel : '膜体所裹胶带',
						dictData : KS_PROD_TAPE,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'markSpecialFlag',
						readOnly : true,
						fieldLabel : '加贴特殊唛头',
						dictData : KS_YESORNO,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'textfield',
						dataIndex : 'performance',
						fieldLabel : '性能',
						readOnly : true,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dictData : KS_COMPONENT_INDUSTRY_BOX,
						name : 'box',
						hiddenName : 'box',
						dataIndex : 'box',
						fieldLabel : '包装箱',
						readOnly : true,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'combobox',
						dataIndex : 'tray',
						anchor : '95%',
						readOnly : true,
						ref : '../tray',
						fieldLabel : '托盘',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									id : 0,
									fields : ['mykey', 'myvalue'],
									data : [['木托盘', '木托盘'], ['塑料托盘', '塑料托盘'],
											['免熏蒸托盘', '免熏蒸托盘'], ['其它', '其它']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						// name : 'label',
						dataIndex : 'label',
						readOnly : true,
						fieldLabel : '标签',
						// allowBlank : false,
						anchor : '95%',
						colspan : 3,
						dictData : KS_COMPONENT_INDUSTRY_LABEL
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">外观不合格信息  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'dictcheckboxgroup',
						columns : 6,
						readOnly : true,
						dataIndex : 'abnormal',
						fieldLabel : '外观异常类型',
						anchor : '95%',
						colspan : 12,
						dictData : KS_COMPONENT_INDUSTRY_ABNORMAL
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textarea',
						readOnly : true,
						height : 35,
						dataIndex : 'abnormalExplain',
						fieldLabel : '外观异常说明',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'textarea',
						readOnly : true,
						height : 35,
						dataIndex : 'abnormalOther',
						fieldLabel : '其他异常备注',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">外观和尺寸检查  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'markIsok',
						hiddenName : 'entity/markIsok',
						readOnly : true,
						fieldLabel : '包装箱唛头',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'labelIsok',
						hiddenName : 'entity/labelIsok',
						readOnly : true,
						fieldLabel : '元件标签',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'apperanceIsok',
						hiddenName : 'entity/apperanceIsok',
						readOnly : true,
						fieldLabel : '元件外观',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'diameter',
						hiddenName : 'entity/diameter',
						readOnly : true,
						fieldLabel : '元件直径',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "",
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'final',
						hiddenName : 'entity/final',
						readOnly : true,
						fieldLabel : '最终判定',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'deal',
						hiddenName : 'entity/deal',
						readOnly : true,
						fieldLabel : '不合格处理方式',
						dictData : KS_PROD_APPLY_DEAL,
						emptyText : "",
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'storage',
						hiddenName : 'entity/storage',
						readOnly : true,
						fieldLabel : '入库仓位',
						dictData : KS_PROD_STORAGE,
						emptyText : "",
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">不合格处理方式  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'deal1',
						ref : '../deal1',
						hiddenName : 'entity/deal1',
						readOnly : true,
						fieldLabel : '返工重新<br>检验结果',
						dictData : KS_YESORNO,
						anchor : '100%%',
						emptyText : "",
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'deal2',
						ref : '../deal2',
						name : 'entity/deal2',
						readOnly : true,
						fieldLabel : '让步接收品质<br>异常单编号',
						anchor : '100%%',
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'deal3',
						ref : '../deal3',
						name : 'entity/deal3',
						readOnly : true,
						fieldLabel : '待处理建议<br>元件型号',
						anchor : '100%%',
						colspan : 4
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'combo',
						mode : 'local',
						fieldLabel : '直径是否放行',
						ref : '../diameterCheckResult',
						dataIndex : 'diameterCheckResult',
						anchor : '100%',
						colspan : 4,
						emptyText : '',
						editable : false,
						readOnly : true,
						store : this.yseOrNoStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.editPanel3.diameterCheckResult.reset()
							}
						}
					}],
			buttons : [{
						text : "关闭",
						scope : this,
						handler : function() {
							this.editWindow3.hide();
						}
					}]

		})

		this.editWindow3 = this.editWindow3 || new Ext.Window({
					title : '查看',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.editPanel3, this.listPanel6]

				});

	}

	this.initModifyWindow = function() {
		var _this = this;
		var selModel6 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel7 = this.listPanel7 || new Ext.fn.ListPanel({
			// title : '【请检元件清单】',
			region : 'center',
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			delUrl : 'com.keensen.ump.produce.component.apply.deleteList.biz.ext',
			tbar : [{
						text : '选择元件',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onChoose
					}, {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel2
					}],
			autoScroll : false,
			selModel : selModel6,
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel6, {
						dataIndex : 'batchNo',
						header : '元件序列号'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'tumoBatchStr',
						header : '膜片批次'
					}, {
						dataIndex : 'tape',
						header : '卷膜胶带'
					}, {
						dataIndex : 'lid',
						header : '端盖'
					}, {
						dataIndex : 'label',
						header : '标签'
					}, {
						dataIndex : 'box',
						header : '包装箱'
					}, {
						dataIndex : 'markTypeFlag',
						header : '唛头'
					}, {
						dataIndex : 'state',
						header : '状态'
					}, {
						dataIndex : 'diameter',
						header : '上端直径'
					}, {
						dataIndex : 'diameter',
						header : '下端直径'
					}, {
						dataIndex : 'checkResult',
						header : '气检值'
					}, {
						dataIndex : 'gpdAvg',
						header : '产水量，GPD'
					}, {
						dataIndex : 'saltAvg',
						header : '脱盐率，%'
					}, {
						dataIndex : 'fcode',
						header : '元件返工单号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.apply.queryList.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'tape'
						}, {
							name : 'lid'
						}, {
							name : 'label'
						}, {
							name : 'box'
						}, {
							name : 'markTypeFlag'
						}, {
							name : 'gpdAvg'
						}, {
							name : 'saltAvg'
						}, {
							name : 'fcode'
						}, {
							name : 'batchNo'
						}, {
							name : 'state'
						}, {
							name : 'id'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'tumoBatchStr'
						}, {
							name : 'checkResult'
						}, {
							name : 'diameter'
						}, {
							name : 'diameter2'
						}]
			})
		})

		this.modifyPanel = this.modifyPanel || new Ext.fn.EditPanel({
			height : 380,
			region : 'north',
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 12,
			saveUrl : 'com.keensen.ump.produce.component.apply.saveHead.biz.ext',
			loadUrl : 'com.keensen.ump.produce.component.apply.expandHead.biz.ext',
			fields : [{
						xtype : 'combobox',
						anchor : '95%',
						colspan : 6,
						dataIndex : 'orderType',
						hiddenName : 'orderType',
						// readOnly : true,
						fieldLabel : '订单类型',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									fields : ['mykey', 'myvalue'],
									data : [['公司标准', '公司标准'],
											['非公司标准', '非公司标准']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "--请选择--"
					}, {
						xtype : 'textfield',
						dataIndex : 'orderNo',
						// name : 'orderNo',
						ref : '../orderNo',
						readOnly : true,
						fieldLabel : '订单号',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'numberfield',
						dataIndex : 'orderAmount',
						name : 'orderAmount',
						// readOnly : true,
						fieldLabel : '订单数量',
						allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'numberfield',
						ref : '../applyAmount',
						dataIndex : 'applyAmount',
						name : 'applyAmount',
						allowBlank : false,
						fieldLabel : '请检数量',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">订单要求  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {

						anchor : '95%',
						colspan : 6,
						xtype : 'combo',
						mode : 'local',
						ref : '../prodSpecName',
						dataIndex : 'prodSpecName',
						displayField : 'prodSpecName',
						valueField : 'prodSpecName',
						hiddenName : 'prodSpecName',
						allowBlank : false,
						fieldLabel : '元件型号',
						store : _this.prodSpecNameStore,
						listeners : {
							'expand' : function(A) {
								_this.modifyPanel.prodSpecName.reset();
							}
						}

					}, {
						xtype : 'dictcombobox',
						dataIndex : 'prodClassFlag',
						hiddenName : 'prodClassFlag',
						allowBlank : false,
						fieldLabel : '元件类型',
						dictData : KS_PROD_CLASS_FLAG,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'lid',
						hiddenName : 'lid',
						fieldLabel : '端盖',
						// readOnly : true,
						dictData : KS_PROD_LID,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'markTypeFlag',
						hiddenName : 'markTypeFlag',
						// readOnly : true,
						fieldLabel : '唛头情况',
						dictData : KS_PROD_MARK_TYPE_FLAG,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'markSpecCode',
						name : 'markSpecCode',
						// readOnly : true,
						fieldLabel : '唛头显示型号',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'tape',
						hiddenName : 'tape',
						// readOnly : true,
						fieldLabel : '膜体所裹胶带',
						dictData : KS_PROD_TAPE,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'markSpecialFlag',
						hiddenName : 'markSpecialFlag',
						// readOnly : true,
						fieldLabel : '加贴特殊唛头',
						dictData : KS_YESORNO,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'textfield',
						dataIndex : 'performance',
						name : 'performance',
						fieldLabel : '性能',
						// readOnly : true,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dictData : KS_COMPONENT_INDUSTRY_BOX,
						name : 'box',
						hiddenName : 'box',
						dataIndex : 'box',
						fieldLabel : '包装箱',
						// readOnly : true,
						anchor : '95%',
						colspan : 4
					}, {
						xtype : 'combobox',
						dataIndex : 'tray',
						hiddenName : 'tray',
						anchor : '95%',
						colspan : 4,
						// readOnly : true,
						ref : '../tray',
						fieldLabel : '托盘',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									id : 0,
									fields : ['mykey', 'myvalue'],
									data : [['木托盘', '木托盘'], ['塑料托盘', '塑料托盘'],
											['免熏蒸托盘', '免熏蒸托盘'], ['其它', '其它']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "--请选择--",
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.inputPanel.tray.reset();
							}
						}

					}, {
						xtype : 'dictcombobox',
						name : 'label',
						dataIndex : 'label',
						fieldLabel : '标签',
						// allowBlank : false,
						anchor : '95%',
						colspan : 4,
						dictData : KS_COMPONENT_INDUSTRY_LABEL
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">外观不合格信息  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'dictcheckboxgroup',
						columns : 6,
						ref : '../myabnormal',
						// name : 'abnormal',
						// hiddenName : 'abnormal',
						dataIndex : 'abnormal',
						fieldLabel : '外观异常类型',
						anchor : '95%',
						colspan : 12,
						dictData : KS_COMPONENT_INDUSTRY_ABNORMAL
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textarea',
						name : 'abnormalExplain',
						dataIndex : 'abnormalExplain',
						fieldLabel : '外观异常说明',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'textarea',
						name : 'abnormalOther',
						dataIndex : 'abnormalOther',
						fieldLabel : '其他异常备注',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'hidden',
						name : 'id',
						ref : '../pkid',
						dataIndex : 'id'
					}, {
						xtype : 'hidden',
						name : 'opt',
						value : 'modify'
					}, {
						xtype : 'hidden',
						ref : '../abnormal',
						name : 'abnormal'
					}],
			buttons : [{
						text : "保存",
						scope : this,
						handler : this.onSaveModify
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.modifyPanel.form.reset();
							this.modifyWindow.hide();
						}
					}]

		})

		this.modifyWindow = this.modifyWindow || new Ext.Window({
					title : '修改',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.modifyPanel, this.listPanel7]

				});
	}

	this.initExaminWindow = function() {
		var _this = this;

		var examinSelModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.examineListPanel = this.examineListPanel || new Ext.fn.ListPanel({
			// title : '【请检元件清单】',
			region : 'center',
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			delUrl : '1.biz.ext',
			autoScroll : false,
			selModel : examinSelModel,
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), examinSelModel, {
						dataIndex : 'batchNo',
						header : '元件序列号'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'tumoBatchStr',
						header : '膜片批次'
					}, {
						dataIndex : 'tape',
						header : '卷膜胶带'
					}, {
						dataIndex : 'lid',
						header : '端盖'
					}, {
						dataIndex : 'label',
						header : '标签'
					}, {
						dataIndex : 'box',
						header : '包装箱'
					}, {
						dataIndex : 'markTypeFlag',
						header : '唛头'
					}, {
						dataIndex : 'state',
						header : '状态'
					}, {
						dataIndex : 'diameter',
						header : '上端直径'
					}, {
						dataIndex : 'diameter',
						header : '下端直径'
					}, {
						dataIndex : 'checkResult',
						header : '气检值'
					}, {
						dataIndex : 'gpdAvg',
						header : '产水量，GPD'
					}, {
						dataIndex : 'saltAvg',
						header : '脱盐率，%'
					}, {
						dataIndex : 'fcode',
						header : '元件返工单号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.apply.queryList.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'tape'
						}, {
							name : 'lid'
						}, {
							name : 'label'
						}, {
							name : 'box'
						}, {
							name : 'markTypeFlag'
						}, {
							name : 'gpdAvg'
						}, {
							name : 'saltAvg'
						}, {
							name : 'fcode'
						}, {
							name : 'batchNo'
						}, {
							name : 'state'
						}, {
							name : 'id'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'tumoBatchStr'
						}, {
							name : 'checkResult'
						}, {
							name : 'diameter'
						}, {
							name : 'diameter2'
						}]
			})
		})

		this.examinePanel = this.examinePanel || new Ext.fn.EditPanel({
			height : 380,
			region : 'north',
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 12,
			saveUrl : 'com.keensen.ump.produce.component.apply.saveHead.biz.ext',
			loadUrl : 'com.keensen.ump.produce.component.apply.expandHead.biz.ext',
			fields : [{
						xtype : 'combobox',
						anchor : '95%',
						colspan : 6,
						readOnly : true,
						dataIndex : 'orderType',
						hiddenName : 'orderType',
						fieldLabel : '订单类型',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									fields : ['mykey', 'myvalue'],
									data : [['公司标准', '公司标准'],
											['非公司标准', '非公司标准']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "--请选择--"
					}, {
						xtype : 'textfield',
						dataIndex : 'orderNo',
						ref : '../orderNo',
						readOnly : true,
						fieldLabel : '订单号',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'numberfield',
						dataIndex : 'orderAmount',
						readOnly : true,
						fieldLabel : '订单数量',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'numberfield',
						ref : '../applyAmount',

						dataIndex : 'applyAmount',
						name : 'entity/applyAmount',
						readOnly : true,
						fieldLabel : '请检数量',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">订单要求  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'prodSpecName',
						name : 'prodSpecName',
						fieldLabel : '元件型号',
						readOnly : true,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'prodClassFlag',
						readOnly : true,
						fieldLabel : '元件类型',
						dictData : KS_PROD_CLASS_FLAG,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'lid',
						fieldLabel : '端盖',
						readOnly : true,
						dictData : KS_PROD_LID,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'markTypeFlag',
						readOnly : true,
						fieldLabel : '唛头情况',
						dictData : KS_PROD_MARK_TYPE_FLAG,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'markSpecCode',
						readOnly : true,
						fieldLabel : '唛头显示型号',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'tape',
						readOnly : true,
						fieldLabel : '膜体所裹胶带',
						dictData : KS_PROD_TAPE,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'markSpecialFlag',
						readOnly : true,
						fieldLabel : '加贴特殊唛头',
						dictData : KS_YESORNO,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'textfield',
						dataIndex : 'performance',
						fieldLabel : '性能',
						readOnly : true,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'box',
						fieldLabel : '包装箱',
						readOnly : true,
						anchor : '95%',
						colspan : 4
					}, {
						xtype : 'combobox',
						dataIndex : 'tray',
						anchor : '95%',
						readOnly : true,
						ref : '../tray',
						fieldLabel : '托盘',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									id : 0,
									fields : ['mykey', 'myvalue'],
									data : [['木托盘', '木托盘'], ['塑料托盘', '塑料托盘'],
											['免熏蒸托盘', '免熏蒸托盘'], ['其它', '其它']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "",
						colspan : 4
					}, {
						xtype : 'dictcombobox',
						// name : 'label',
						dataIndex : 'label',
						readOnly : true,
						fieldLabel : '标签',
						// allowBlank : false,
						anchor : '95%',
						colspan : 4,
						dictData : KS_COMPONENT_INDUSTRY_LABEL
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">外观不合格信息  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'dictcheckboxgroup',
						columns : 6,
						// name : 'abnormal',
						readOnly : true,
						hiddenName : 'abnormal',
						dataIndex : 'abnormal',
						fieldLabel : '外观异常类型',
						anchor : '95%',
						colspan : 12,
						dictData : KS_COMPONENT_INDUSTRY_ABNORMAL
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textarea',
						// name : 'abnormalExplain',
						readOnly : true,
						dataIndex : 'abnormalExplain',
						fieldLabel : '外观异常说明',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'textarea',
						// name : 'abnormalOther',
						readOnly : true,
						dataIndex : 'abnormalOther',
						fieldLabel : '其他异常备注',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'hidden',
						name : 'entity/id',
						ref : '../pkid',
						dataIndex : 'id'
					}, {
						xtype : 'hidden',
						name : 'entity/opt',
						value : 'examine'
					}],
			buttons : [{
						text : "审核确认",
						scope : this,
						handler : this.onSaveExamine
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.examinePanel.form.reset();
							this.examineWindow.hide();
						}
					}]

		})

		this.examineWindow = this.examineWindow || new Ext.Window({
					title : '审核',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.examinePanel, this.examineListPanel]

				});

	}

	// 入C仓确认
	this.initCStockWindow = function() {
		var _this = this;

		var selModel5 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel8 = this.listPanel8 || new Ext.fn.ListPanel({
			region : 'center',
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			autoScroll : false,
			selModel : selModel5,
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}), selModel5, {
						dataIndex : 'batchNo',
						header : '元件序列号'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'tumoBatchStr',
						header : '膜片批次'
					}, {
						dataIndex : 'tape',
						header : '卷膜胶带'
					}, {
						dataIndex : 'lid',
						header : '端盖'
					}, {
						dataIndex : 'label',
						header : '标签'
					}, {
						dataIndex : 'box',
						header : '包装箱'
					}, {
						dataIndex : 'markTypeFlag',
						header : '唛头'
					}, {
						dataIndex : 'state',
						header : '状态'
					}, {
						dataIndex : 'diameter',
						header : '上端直径'
					}, {
						dataIndex : 'diameter',
						header : '下端直径'
					}, {
						dataIndex : 'checkResult',
						header : '气检值'
					}, {
						dataIndex : 'gpdAvg',
						header : '产水量，GPD'
					}, {
						dataIndex : 'saltAvg',
						header : '脱盐率，%'
					}, {
						dataIndex : 'fcode',
						header : '元件返工单号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.apply.queryList.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'tape'
						}, {
							name : 'lid'
						}, {
							name : 'label'
						}, {
							name : 'box'
						}, {
							name : 'markTypeFlag'
						}, {
							name : 'gpdAvg'
						}, {
							name : 'saltAvg'
						}, {
							name : 'fcode'
						}, {
							name : 'batchNo'
						}, {
							name : 'state'
						}, {
							name : 'id'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'tumoBatchStr'
						}, {
							name : 'checkResult'
						}, {
							name : 'diameter'
						}, {
							name : 'diameter2'
						}]
			})
		})

		this.editPanel8 = this.editPanel8 || new Ext.fn.EditPanel({
			height : 450,
			region : 'north',
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 12,
			saveUrl : '111.biz.ext',
			loadUrl : 'com.keensen.ump.produce.component.apply.expandHead.biz.ext',
			fields : [{
						xtype : 'combobox',
						anchor : '95%',
						colspan : 6,
						readOnly : true,
						dataIndex : 'orderType',
						hiddenName : 'orderType',
						fieldLabel : '订单类型',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									fields : ['mykey', 'myvalue'],
									data : [['公司标准', '公司标准'],
											['非公司标准', '非公司标准']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "--请选择--"
					}, {
						xtype : 'textfield',
						dataIndex : 'orderNo',
						ref : '../orderNo',
						readOnly : true,
						fieldLabel : '订单号',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'numberfield',
						dataIndex : 'orderAmount',
						readOnly : true,
						fieldLabel : '订单数量',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'numberfield',
						ref : '../applyAmount',
						dataIndex : 'applyAmount',
						readOnly : true,
						fieldLabel : '请检数量',
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">订单要求  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'prodSpecName',
						// name : 'prodSpecName',
						fieldLabel : '元件型号',
						readOnly : true,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'prodClassFlag',
						readOnly : true,
						fieldLabel : '元件类型',
						dictData : KS_PROD_CLASS_FLAG,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'lid',
						fieldLabel : '端盖',
						readOnly : true,
						dictData : KS_PROD_LID,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'markTypeFlag',
						readOnly : true,
						fieldLabel : '唛头情况',
						dictData : KS_PROD_MARK_TYPE_FLAG,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'markSpecCode',
						readOnly : true,
						fieldLabel : '唛头显示型号',
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'tape',
						readOnly : true,
						fieldLabel : '膜体所裹胶带',
						dictData : KS_PROD_TAPE,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'markSpecialFlag',
						readOnly : true,
						fieldLabel : '加贴特殊唛头',
						dictData : KS_YESORNO,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'textfield',
						dataIndex : 'performance',
						fieldLabel : '性能',
						readOnly : true,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textfield',
						dataIndex : 'box',
						fieldLabel : '包装箱',
						readOnly : true,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'combobox',
						dataIndex : 'tray',
						anchor : '95%',
						readOnly : true,
						ref : '../tray',
						fieldLabel : '托盘',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									id : 0,
									fields : ['mykey', 'myvalue'],
									data : [['木托盘', '木托盘'], ['塑料托盘', '塑料托盘'],
											['免熏蒸托盘', '免熏蒸托盘'], ['其它', '其它']]
								}),
						mode : "local",
						editable : false,
						displayField : "myvalue",
						valueField : "mykey",
						forceSelection : true,
						emptyText : "",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						name : 'label',
						dataIndex : 'label',
						readOnly : true,
						fieldLabel : '标签',
						// allowBlank : false,
						anchor : '95%',
						colspan : 3,
						dictData : KS_COMPONENT_INDUSTRY_LABEL
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">外观不合格信息  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'dictcheckboxgroup',
						columns : 6,
						readOnly : true,
						dataIndex : 'abnormal',
						fieldLabel : '外观异常类型',
						anchor : '95%',
						colspan : 12,
						dictData : KS_COMPONENT_INDUSTRY_ABNORMAL
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'textarea',
						readOnly : true,
						height : 35,
						dataIndex : 'abnormalExplain',
						fieldLabel : '外观异常说明',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'textarea',
						readOnly : true,
						height : 35,
						dataIndex : 'abnormalOther',
						fieldLabel : '其他异常备注',
						// allowBlank : false,
						anchor : '95%',
						colspan : 6
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">外观和尺寸检查  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'markIsok',
						hiddenName : 'entity/markIsok',
						allowBlank : false,
						fieldLabel : '包装箱唛头',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "是否合格",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'labelIsok',
						hiddenName : 'entity/labelIsok',
						allowBlank : false,
						fieldLabel : '元件标签',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "是否合格",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'apperanceIsok',
						hiddenName : 'entity/apperanceIsok',
						allowBlank : false,
						fieldLabel : '元件外观',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "是否合格",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'diameter',
						hiddenName : 'entity/diameter',
						allowBlank : false,
						fieldLabel : '元件直径',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "是否合格",
						colspan : 3
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'final',
						hiddenName : 'entity/final',
						allowBlank : false,
						fieldLabel : '最终判定',
						dictData : KS_YESORNO,
						anchor : '95%',
						emptyText : "是否合格",
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'deal',
						hiddenName : 'entity/deal',
						// allowBlank : false,
						fieldLabel : '不合格处理方式',
						dictData : KS_PROD_APPLY_DEAL,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'storage',
						hiddenName : 'entity/storage',
						allowBlank : false,
						fieldLabel : '入库仓位',
						dictData : KS_PROD_STORAGE,
						anchor : '95%',
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;">不合格处理方式  </p>',
						labelSeparator : '',// 去掉冒号
						colspan : 12
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'deal1',
						ref : '../deal1',
						hiddenName : 'entity/deal1',
						// allowBlank : false,
						fieldLabel : '返工重新<br>检验结果',
						dictData : KS_YESORNO,
						anchor : '100%%',
						emptyText : "是否合格",
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'deal2',
						ref : '../deal2',
						name : 'entity/deal2',
						// allowBlank : false,
						fieldLabel : '让步接收品质<br>异常单编号',
						anchor : '100%%',
						colspan : 4
					}, {
						xtype : 'textfield',
						dataIndex : 'deal3',
						ref : '../deal3',
						name : 'entity/deal3',
						// allowBlank : false,
						fieldLabel : '待处理建议<br>元件型号',
						anchor : '100%%',
						colspan : 4
					}, {
						xtype : 'hidden',
						name : 'entity/id',
						ref : '../pkid',
						dataIndex : 'id'
					}, {
						xtype : 'hidden',
						name : 'entity/opt',
						value : 'cstock'
					}],
			buttons : [{
						text : "确认入C仓",
						scope : this,
						handler : this.onSaveCStcok
					}, {
						text : "关闭",
						scope : this,
						handler : function() {
							this.editPanel8.form.reset();
							this.cstockWindow.hide();
						}
					}]

		})

		this.cstockWindow = this.cstockWindow || new Ext.Window({
					title : '入C仓确认',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 800,
					height : 600,
					layout : 'border',
					items : [this.editPanel8, this.listPanel8]

				});

	}

}