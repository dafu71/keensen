com.keensen.ump.produce.quality.C21RangeMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'c21rangemgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					titleCollapse : false,
					fields : [{
						xtype : 'combo',
						fieldLabel : '膜片型号',
						ref : '../materClassCode',
						hiddenName : 'condition/materClassCode',
						emptyText : '--请选择--',
						anchor : '90%',
						store : [['BW', 'BW'], ['ULP', 'ULP'], ['SW', 'SW'],
								['NF', 'NF']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.materClassCode.reset();
							}
						}
					}, {

						xtype : 'combo',
						fieldLabel : '是否外销',
						ref : '../isWx',
						hiddenName : 'condition/isWx',
						emptyText : '--请选择--',
						anchor : '90%',
						store : [['Y', '是'], ['N', '否']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.isWx.reset();
							}
						}
					}]
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			// title : '【产品水测标准列表】',
			id : mylistid,
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '更新',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onModify
					}],
			selModel : selModel,
			delUrl : '123.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'materClassCode',
						header : '膜片系列'
					}, {
						dataIndex : 'isWx',
						header : '是否外销',
						renderer : function(v, m, r, i) {
							return v == 'Y' ? '是' : '否';
						}
					}, {
						dataIndex : 'qualified',
						header : '合格标准'
					}, {
						dataIndex : 'feedback',
						header : '反馈标准'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality2.queryC21RangeByPage.biz.ext',
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
							name : 'materClassCode'
						}, {
							name : 'isWx'
						}, {
							name : 'qualified'
						}, {
							name : 'feedback'
						}, {
							name : 'remark'
						}]
			})
		})
	}

	this.initEditWindow = function() {
		var _this = this;
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '更新C21范围标准',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				successFn : function(i, r) {
					Ext.getCmp(mylistid).store.load();
					_this.editWindow.hide();
				},
				columns : 1,
				loadUrl : 'com.keensen.ump.produce.quality.quality2.expandC21Range.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.quality2.SaveC21Range.biz.ext',
				fields : [{
							xtype : 'textfield',
							dataIndex : 'materClassCode',
							fieldLabel : '膜片系列',
							readOnly : true,
							anchor : '75%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {

							xtype : 'combo',
							fieldLabel : '是否外销',
							dataIndex : 'isWx',
							readOnly : true,
							anchor : '75%',
							store : [['Y', '是'], ['N', '否']]
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/qualified',
							dataIndex : 'qualified',
							fieldLabel : '合格浓度',
							allowBlank : false,
							anchor : '75%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/feedback',
							dataIndex : 'feedback',
							allowBlank : false,
							fieldLabel : '反馈标准',
							anchor : '75%',
							colspan : 1
						}, {
							xtype : 'textarea',
							name : 'entity/remark',
							dataIndex : 'remark',
							allowBlank : false,
							fieldLabel : '备注',
							anchor : '75%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'hidden',
							dataIndex : 'id',
							name : 'entity/id',
							anchor : '75%',
							colspan : 1
						}]
			}]
		});
	}

}