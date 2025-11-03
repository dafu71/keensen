com.keensen.ump.base.AppearancenotstdMgr = function() {
	this.initPanel = function() {

		this.initStore();

		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'appearancenotstdmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initStore = function() {
		this.standStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['公司标准', '公司标准'], ['非标工业膜', '非标工业膜'],
							['非标家用膜', '非标家用膜']]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					// title : '【物料规格查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/jmSpecName',
								fieldLabel : '卷膜型号%-%'
							},{
								xtype : 'textfield',
								name : 'condition/specName',
								fieldLabel : '内部型号%-%'
							}/*, {
								xtype : 'combobox',
								mode : 'local',
								fieldLabel : '司标/非司标',
								ref : '../reserve1',
								hiddenName : 'condition/reserve1',
								anchor : '100%',
								colspan : 1,
								emptyText : '--请选择--',
								editable : false,
								store : this.standStore,
								displayField : "name",
								valueField : "code",
								listeners : {
									"expand" : function(A) {
										_this.queryPanel.reserve1.reset()
									}
								}
							}*/]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
					// hidden : true,
					handler : this.exportExcel
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : false
			},
			hsPage : true,
			/*
			 * tbar : [{ text : '修改', scope : this, iconCls :
			 * 'icon-application_edit', handler : this.onEdit }],
			 */
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'specId',
						header : '物料编号'
					}, {
						dataIndex : 'state',
						header : '状态'
					}, {
						dataIndex : 'reserve1',
						header : '司标/非司标'
					}, {
						dataIndex : 'jmSpecName',
						sortable:true,
						header : '卷膜型号'
					}, {
						dataIndex : 'specName',
						sortable:true,
						header : '生产内部型号'
					}, {
						dataIndex : 'diameter',
						header : '白膜直径(mm)'
					}, {
						dataIndex : 'linker',
						header : '连接器材质'
					}, {
						dataIndex : 'pack',
						header : '包装端盖材质'
					}, {
						dataIndex : 'lid',
						header : '元件端盖'
					}, {
						dataIndex : 'yDistance',
						header : 'Y型圈距进水端面<br>距离(mm)'
					}, {
						dataIndex : 'tapeColor',
						header : '卷膜胶带颜色'
					}, {
						dataIndex : 'prodType',
						header : '产品类型'
					}, {
						dataIndex : 'tape',
						header : '胶带'
					}, {
						dataIndex : 'labelSize',
						header : '标签尺寸'
					}, {
						dataIndex : 'labelDrawingCode',
						header : '标签图纸编号'
					}, {
						dataIndex : 'coverLabelSize',
						header : '覆盖标签尺寸'
					}, {
						dataIndex : 'coverLabelDrawingCode',
						header : '覆盖标签图纸号'
					}, {
						dataIndex : 'bagSize',
						header : '真空装袋尺寸'
					}, {
						dataIndex : 'bagDrawingCode',
						header : '真空装图纸编号'
					}, {
						dataIndex : 'boxDrawingSize',
						header : '包装箱尺寸'
					}, {
						dataIndex : 'boxDrawingCode',
						header : '包装箱图纸编号'
					}, {
						dataIndex : 'boxMarkSize',
						header : '箱体唛头尺寸'
					}, {
						dataIndex : 'markDrawingCode',
						header : '唛头图纸编号'
					}, {
						dataIndex : 'countPerBox',
						header : '支数/箱'
					}, {
						dataIndex : 'countPerFloor',
						header : '箱数/层'
					}, {
						dataIndex : 'countFloor',
						header : '层数'
					}, {
						dataIndex : 'traySize',
						header : '托盘尺寸（m）'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.base.appearancestd.queryAppearanceNotStdByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'specName'
						}, {
							name : 'prodType'
						}, {
							name : 'lid'
						}, {
							name : 'tape'
						}, {
							name : 'labelSize'
						}, {
							name : 'labelDrawingCode'
						}, {
							name : 'coverLabelSize'
						}, {
							name : 'coverLabelDrawingCode'
						}, {
							name : 'bagSize'
						}, {
							name : 'bagDrawingCode'
						}, {
							name : 'boxDrawingSize'
						}, {
							name : 'boxDrawingCode'
						}, {
							name : 'boxMarkSize'
						}, {
							name : 'markDrawingCode'
						}, {
							name : 'countPerBox'
						}, {
							name : 'countPerFloor'
						}, {
							name : 'countFloor'
						}, {
							name : 'traySize'
						}, {
							name : 'specId'
						}, {
							name : 'id'
						}, {
							name : 'state'
						}, {
							name : 'jmSpecName'
						}, {
							name : 'diameter'
						}, {
							name : 'reserve1'
						}, {
							name : 'linker'
						}, {
							name : 'pack'
						}, {
							name : 'yDistance'
						}, {
							name : 'tapeColor'
						}]
			})
		})
	}

}