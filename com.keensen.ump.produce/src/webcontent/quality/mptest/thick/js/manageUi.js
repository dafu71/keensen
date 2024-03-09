com.keensen.ump.produce.quality.mptest.thickMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initThickListStore();
		this.initInputWindow();
		this.initEditWindow();
		this.initViewWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'mptestthickmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【底膜厚度查询】',
					fields : [{

						xtype : 'combobox',
						fieldLabel : '膜片类型',
						ref : '../mptype',
						hiddenName : 'condition/mptype',
						emptyText : '--请选择--',
						allowBlank : true,
						editable : false,
						anchor : '85%',
						store : [['BW', 'BW'], ['ULP', 'ULP'], ['SW', 'SW'],
								['NF', 'NF']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.mptype.reset();
							}
						}
					}, {
						ref : '../batchNo',
						name : 'condition/batchNo',
						anchor : '85%',
						xtype : 'textfield',
						fieldLabel : '膜片批号',
						allowBlank : true
					}, {
						ref : '../wfBatchNo',
						name : 'condition/wfBatchNo',
						anchor : '85%',
						xtype : 'textfield',
						fieldLabel : '无纺布批号',
						allowBlank : true
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
			title : '【底膜厚度列表】',
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
					}, '-', {
						text : '查看',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onView
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.mptest3.deleteThickEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'createTime',
						header : '日期'
					}, {
						dataIndex : 'mptype',
						header : '膜片类型'
					}, {
						dataIndex : 'batchNo',
						header : '膜片批号'
					}, {
						dataIndex : 'wfBatchNo',
						header : '无纺布批号'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.mptest3.queryThickByPage.biz.ext',
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
							name : 'wfBatchNo'
						}, {
							name : 'batchNo'
						}, {
							name : 'mptype'
						}]
			})
		})
	}

	this.initThickListStore = function() {
		this.thickListStore = new Ext.data.JsonStore({
			url : 'com.keensen.ump.produce.quality.mptest3.queryThickList.biz.ext',
			root : 'data',
			autoLoad : false,
			totalProperty : '',
			baseParams : {},
			fields : [{
						name : 'id'
					}, {
						name : 'itype'
					}, {
						name : 'thick1'
					}, {
						name : 'thick2'
					}, {
						name : 'thick3'
					}, {
						name : 'thick4'
					}, {
						name : 'thick5'
					}, {
						name : 'thick6'
					}, {
						name : 'thick7'
					}, {
						name : 'thick8'
					}, {
						name : 'thick9'
					}, {
						name : 'thick10'
					}, {
						name : 'relationId'
					}, {
						name : 'batchNo'
					}, {
						name : 'wfBatchNo'
					}, {
						name : 'mptype'
					}, {
						name : 'avg'
					}, {
						name : 'createTime'
					}]
		})
	}

	this.initInputWindow = function() {
		var _this = this;
		var selModel2 = new Ext.grid.CheckboxSelectionModel({
			singleSelect : false
				// header : ''
			});
		this.listPanel2 = this.listPanel2 || new Ext.fn.EditListPanel({
			title : '【明细】',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			clicksToEdit : 1,
			region : 'center',
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'itype',
						header : '类型',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									readOnly : true
								}))
					}, {
						dataIndex : 'thick1',
						header : '厚度1',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick2',
						header : '厚度2',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick3',
						header : '厚度3',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick4',
						header : '厚度4',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick5',
						header : '厚度5',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick6',
						header : '厚度6',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick7',
						header : '厚度7',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick8',
						header : '厚度8',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick9',
						header : '厚度9',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick10',
						header : '厚度10',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}],
			store : this.thickListStore
		})

		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			height : 150,
			region : 'north',
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 4,
			saveUrl : 'com.keensen.ump.produce.quality.mptest3.saveThick.biz.ext',
			fields : [{
						ref : '../batchNo',
						name : 'batchNo',
						anchor : '85%',
						xtype : 'textfield',
						fieldLabel : '底膜编号',
						colspan : 4,
						allowBlank : false
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						ref : '../wfBatchNo',
						name : 'wfBatchNo',
						anchor : '85%',
						xtype : 'textfield',
						fieldLabel : '无纺布批号',
						colspan : 4,
						allowBlank : false
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {

						xtype : 'combobox',
						fieldLabel : '膜片类型',
						ref : '../mptype',
						hiddenName : 'mptype',
						emptyText : '--请选择--',
						allowBlank : false,
						editable : false,
						anchor : '85%',
						colspan : 4,
						store : [['BW', 'BW'], ['ULP', 'ULP'], ['SW', 'SW'],
								['NF', 'NF']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.inputPanel.mptype.reset();
							}
						}
					}]
		})

		this.inputWindow = this.inputWindow || new Ext.Window({
					title : '新增',
					height : 600,
					width : 800,
					resizable : false,
					minimizable : false,
					maximizable : false,
					closeAction : 'hide',
					layout : 'border',
					buttonAlign : 'center',
					items : [this.inputPanel, this.listPanel2],
					buttons : [{
								text : "保存",
								scope : this,
								ref : '../saveBtn',
								handler : this.onSave
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.inputWindow.hide();
								}
							}]
				});
	}

	this.initEditWindow = function() {
		var _this = this;
		var selModel3 = new Ext.grid.CheckboxSelectionModel({
			singleSelect : false
				// header : ''
			});
		this.listPanel3 = this.listPanel3 || new Ext.fn.EditListPanel({
			title : '【明细】',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			clicksToEdit : 1,
			region : 'center',
			selModel : selModel3,
			columns : [new Ext.grid.RowNumberer(), selModel3, {
						dataIndex : 'itype',
						header : '类型',
						editor : new Ext.grid.GridEditor(new Ext.form.TextField(
								{
									allowBlank : false,
									readOnly : true
								}))
					}, {
						dataIndex : 'thick1',
						header : '厚度1',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick2',
						header : '厚度2',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick3',
						header : '厚度3',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick4',
						header : '厚度4',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick5',
						header : '厚度5',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick6',
						header : '厚度6',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick7',
						header : '厚度7',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick8',
						header : '厚度8',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick9',
						header : '厚度9',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}, {
						dataIndex : 'thick10',
						header : '厚度10',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									minValue : 0,
									maxValue : 999,
									decimalPrecision : 1
								}))
					}],
			store : this.thickListStore
		})

		this.editPanel = this.editPanel || new Ext.fn.EditPanel({
			height : 150,
			region : 'north',
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 4,
			loadUrl : 'com.keensen.ump.produce.quality.mptest3.expandThickEntity.biz.ext',
			saveUrl : 'com.keensen.ump.produce.quality.mptest3.modifyThick.biz.ext',
			fields : [{
						ref : '../batchNo',
						name : 'batchNo',
						dataIndex : 'batchNo',
						anchor : '85%',
						xtype : 'textfield',
						fieldLabel : '底膜编号',
						colspan : 4,
						allowBlank : false
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {
						ref : '../wfBatchNo',
						name : 'wfBatchNo',
						dataIndex : 'wfBatchNo',
						anchor : '85%',
						xtype : 'textfield',
						fieldLabel : '无纺布批号',
						colspan : 4,
						allowBlank : false
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 4
					}, {

						xtype : 'combobox',
						fieldLabel : '膜片类型',
						ref : '../mptype',
						hiddenName : 'mptype',
						dataIndex : 'mptype',
						emptyText : '--请选择--',
						allowBlank : false,
						editable : false,
						anchor : '85%',
						colspan : 4,
						store : [['BW', 'BW'], ['ULP', 'ULP'], ['SW', 'SW'],
								['NF', 'NF']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.editPanel.mptype.reset();
							}
						}
					}, {
						xtype : 'hidden',
						name : 'id',
						dataIndex : 'id'
					}]
		})

		this.editWindow = this.editWindow || new Ext.Window({
					title : '修改',
					height : 600,
					width : 800,
					resizable : false,
					minimizable : false,
					maximizable : false,
					closeAction : 'hide',
					layout : 'border',
					buttonAlign : 'center',
					items : [this.editPanel, this.listPanel3],
					buttons : [{
								text : "保存",
								scope : this,
								ref : '../saveBtn',
								handler : this.onSave2
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.editWindow.hide();
								}
							}]
				});
	}

	this.initViewWindow = function() {
		var _this = this;

		var selModel6 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});

		this.listPanel6 = this.listPanel6 || new Ext.fn.ListPanel({
					title : '【详情】',
					region : 'center',
					viewConfig : {
						forceFit : false
					},
					tbar : [],
					hsPage : false,
					autoScroll : true,
					selModel : selModel6,
					columns : [new Ext.grid.RowNumberer(), selModel6, {
								dataIndex : 'createTime',
								header : '日期'
							}, {
								dataIndex : 'mptype',
								header : '膜片类型'
							}, {
								dataIndex : 'batchNo',
								header : '膜片批号'
							}, {
								dataIndex : 'wfBatchNo',
								header : '无纺布批号'
							}, {
								dataIndex : 'itype',
								header : '类型'
							}, {
								dataIndex : 'avg',
								header : '平均值'
							}, {
								dataIndex : 'thick1',
								header : '厚度1'
							}, {
								dataIndex : 'thick2',
								header : '厚度2'
							}, {
								dataIndex : 'thick3',
								header : '厚度3'
							}, {
								dataIndex : 'thick4',
								header : '厚度4'
							}, {
								dataIndex : 'thick5',
								header : '厚度5'
							}, {
								dataIndex : 'thick6',
								header : '厚度6'
							}, {
								dataIndex : 'thick7',
								header : '厚度7'
							}, {
								dataIndex : 'thick8',
								header : '厚度8'
							}, {
								dataIndex : 'thick9',
								header : '厚度9'
							}, {
								dataIndex : 'thick10',
								header : '厚度10'
							}],
					store : this.thickListStore
				})

		this.viewWindow = this.viewWindow || new Ext.Window({
					title : '明细',
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
					items : [this.listPanel6],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {
									this.viewWindow.hide();
								}
							}]

				});

	}
}