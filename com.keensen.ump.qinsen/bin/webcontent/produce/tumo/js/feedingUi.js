com.keensen.ump.qinsen.produce.FeedingMgr = function() {

	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'feedingmgr',
					panels : [this.queryFeedingPanel, this.feedingPanel]
				});
	}

	this.initStore = function() {

		this.feedingItemStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['C21', 'C21'], ['C22', 'C22'], ['C23', 'C23'],
							['C24', 'C24'], ['C27', 'C27'], ['C28', 'C28'],
							['C29', 'C29'], ['C30', 'C30'], ['RO水', 'RO水'],
							['水相液排料', '水相液排料'], ['C22-A', 'C22-A'],
							['C24', 'C24'], ['C51', 'C51'], ['C71', 'C71'],
							['C72', 'C72']]
				});
		// 正常生产加料、工艺调整加料、异常报废加料
		this.reasonStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['正常生产加料', '正常生产加料'], ['工艺调整加料', '工艺调整加料'],
							['操作异常报废', '操作异常报废'], ['工艺异常报废', '工艺异常报废'],
							['设备异常报废', '设备异常报废']]
				});
	}

	this.initQueryPanel = function() {

		var _this = this;

		this.queryFeedingPanel = this.queryFeedingPanel
				|| new Ext.fn.QueryPanel({
							height : 110,
							columns : 4,
							border : true,
							region : 'north',
							titleCollapse : false,
							fields : [{
										xtype : 'textfield',
										name : 'condition/batchNo2',
										fieldLabel : '膜片批次%-%'
									}, {
										xtype : 'linecombobox',
										prodTacheId : '100',
										hiddenName : 'condition/lineId',
										fieldLabel : '生产线 '
									}, {
										xtype : 'mpspeccombobox',
										hiddenName : 'condition/specId',
										fieldLabel : '膜片型号 '
									}, {
										xtype : 'combo',
										fieldLabel : '加料项目',
										hiddenName : 'condition/item',
										ref : '../item',
										mode : 'local',
										editable : false,
										displayField : "name",
										valueField : "code",
										emptyText : '--请选择--',
										store : _this.feedingItemStore,
										listeners : {
											'expand' : function(A) {
												_this.queryFeedingPanel.item
														.reset();
											}
										}
									}, {
										xtype : 'displayfield',
										height : '5',
										colspan : 24
									}, {
										xtype : 'combo',
										fieldLabel : '加料原因',
										hiddenName : 'condition/reason',
										ref : '../reason',
										mode : 'local',
										editable : false,
										displayField : "name",
										valueField : "code",
										emptyText : '--请选择--',
										store : _this.reasonStore,
										listeners : {
											'expand' : function(A) {
												_this.queryFeedingPanel.reason
														.reset();
											}
										}
									}, {
										xtype : 'datetimefield',
										name : 'condition/createTimeStart',
										fieldLabel : '操作时间',
										// allowBlank : false,
										editable : true,
										format : 'Y-m-d H:i',
										value : new Date().add(Date.DAY, -1)
												.format('Y-m-d 00:00')
									}, {
										xtype : 'datetimefield',
										name : 'condition/createTimeEnd',
										fieldLabel : '至',
										editable : true,
										format : 'Y-m-d H:i',
										// allowBlank : false,
										value : new Date().add(Date.DAY, 1)
												.format('Y-m-d 00:00')
									}]
						});

		this.queryFeedingPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					handler : this.exportFeeding
				});
	}

	this.initListPanel = function() {

		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.feedingPanel = this.feedingPanel || new Ext.fn.ListPanel({
			region : 'center',
			cls : 'custom-row-height', // 应用自定义的CSS类
			viewConfig : {
				forceFit : true
			},
			tbar : [{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;&nbsp;&nbsp;加料重量合计(KG):&nbsp;&nbsp;'
					}, {
						xtype : 'displayfield',
						id : weightTotalId
					}],
			delUrl : '1.biz.ext',
			hsPage : true,
			autoScroll : true,
			selModel : selModel2,
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						dataIndex : 'method',
						header : '调整类型'
					}, {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'lineName',
						header : '生产线'
					},

					{
						dataIndex : 'specName',
						header : '膜片型号'
					}, {
						dataIndex : 'area',
						header : '加料区域'
					}, {
						dataIndex : 'item',
						header : '加料项目'
					}, {
						dataIndex : 'weight',
						header : '加料重量（KG）'
					}, {
						dataIndex : 'reason',
						header : '加料原因'
					}, {
						dataIndex : 'createName',
						header : '记录人'
					}, {
						dataIndex : 'createTime',
						header : '操作时间'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.qinsen.tumo.queryFeedingByPage.biz.ext',
						root : 'data',
						autoLoad : false,
						totalProperty : 'totalCount',
						baseParams : {

			}			,
						fields : [{
									name : 'method'
								}, {
									name : 'batchId'
								}, {
									name : 'batchNo'
								}, {
									name : 'lineId'
								}, {
									name : 'lineName'
								}, {
									name : 'specId'
								}, {
									name : 'specName'
								}, {
									name : 'area'
								}, {
									name : 'item'
								}, {
									name : 'weight'
								}, {
									name : 'reason'
								}, {
									name : 'createName'
								}, {
									name : 'createTime'
								}, {
									name : 'weightTotal'
								}]
					})
		})
	}
}