com.keensen.ump.produce.diaphragm.make.report.APlusMgr = function() {
	this.initPanel = function() {

		this.initStore();
		this.initQueryPanel();
		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'aplusmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {

		this.materClassStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.mater.queryMaterClass4Tm.biz.ext',
					root : 'data',
					autoLoad : true,
					totalProperty : '',
					baseParams : {

		}			,
					fields : [{
								name : 'materClassId'
							}, {
								name : 'materClassName'
							}]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 110,
					columns : 24,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
						xtype : 'datetimefield',
						name : 'condition/produceDtStart',
						fieldLabel : '生产时间',
						colspan : 8,
						anchor : '90%',
						// allowBlank : false,
						editable : true,
						format : 'Y-m-d H:i',
						value : new Date().add(Date.DAY, -30)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'datetimefield',
						name : 'condition/produceDtEnd',
						fieldLabel : '至',
						colspan : 8,
						anchor : '90%',
						editable : true,
						format : 'Y-m-d H:i',
						// allowBlank : false,
						value : new Date().add(Date.DAY, 0)
								.format('Y-m-d 00:00')
					}, {
						xtype : 'linecombobox',
						prodTacheId : '100',
						hiddenName : 'condition/lineId',
						colspan : 8,
						anchor : '90%',
						fieldLabel : '生产线 '
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 24
					}, {
						xtype : 'mpspeccombobox',
						hiddenName : 'condition/specId',
						colspan : 8,
						anchor : '90%',
						fieldLabel : '膜片型号 '
					}, {
						xtype : 'combobox',
						anchor : '90%',
						colspan : 8,
						name : 'condition/materClassId',
						ref : '../../materClassId',
						hiddenName : 'condition/materClassId',
						fieldLabel : '膜片系列',
						triggerAction : "all",
						store : _this.materClassStore,
						mode : "local",
						editable : false,
						displayField : "materClassName",
						valueField : "materClassId",
						forceSelection : true,
						emptyText : "--请选择--"
					}, {

						xtype : 'combo',
						fieldLabel : '生产类型',
						ref : '../prodFlagId',
						hiddenName : 'condition/prodFlagId',
						emptyText : '--请选择--',
						anchor : '90%',
						colspan : 8,
						store : [[null, '全部'], ['300027', '量产'],
								['300028', '实验'], ['300140', '试量产']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.queryPanel.prodFlagId.reset();
							}
						}
					}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					hidden : uid != 'dafu' && uid != 'KS00017',
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
			selModel : selModel,
			// delUrl :
			// 'com.keensen.ump.produce.diaphragm.make.make.deleteZmxEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'teamName',
						header : '生产班组'
					}, {
						dataIndex : 'outLength',
						header : '长度(m)'
					}, {
						dataIndex : 'aPlusLength',
						header : 'A+合格品长度(m)'
					}, {
						dataIndex : 'rate',
						header : 'A+合格率'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.make.report.queryAPlusReport.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'teamName'
						}, {
							name : 'outLength'
						}, {
							name : 'aPlusLength'
						}, {
							name : 'rate'
						}

				]
			})
		})
	}

}