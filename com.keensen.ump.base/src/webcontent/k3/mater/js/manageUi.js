com.keensen.ump.base.k3.K3BomMgr = function() {

	this.initPanel = function() {

		this.initStore();
		this.initPanel4Group();
		this.initPanel4Bom();

		return new Ext.fn.fnLayOut({
					layout : 'we',
					border : false,
					renderTo : 'k3bommgr',
					panels : [this.listPanel4Group, this.panel4Bom]
				});

	}

	this.initStore = function() {
		this.groupStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.k3.queryBomGroup.biz.ext',
					root : 'data',
					autoLoad : true,
					baseParams : {},
					fields : [{
								name : 'fname'
							}, {
								name : 'finterId'
							}, {
								name : 'fnumber'
							}, {
								name : 'text'
							}]
				})

		this.bomByGroupStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.k3.selectBomByGroup.biz.ext',
					root : 'datas',
					autoLoad : false,
					baseParams : {},
					fields : [{
								name : 'fbomnumber'
							}, {
								name : 'finterId'
							}, {
								name : 'fnumber'
							}, {
								name : 'fparentId'
							}, {
								name : 'fname'
							}, {
								name : 'fmodel'
							}, {
								name : 'funitname'
							}, {
								name : 'fqty'
							}, {
								name : 'fversion'
							}, {
								name : 'fstatusEnum'
							}, {
								name : 'fcheckerStatus'
							}, {
								name : 'fauxPropIdEnum'
							}, {
								name : 'ferpClsIdEnum'
							}, {
								name : 'fbillNO'
							}, {
								name : 'froutingName'
							}, {
								name : 'fyield'
							}, {
								name : 'fnote'
							}, {
								name : 'fpdmimportDate'
							}, {
								name : 'hasSourceMaterial'
							}, {
								name : 'fbomskipEnum'
							}, {
								name : 'lastUpdateName'
							}, {
								name : 'fenterTime'
							}, {
								name : 'lastUseName'
							}, {
								name : 'fuseDate'
							}, {
								name : 'fitemId'
							}]
				})

		this.bomHeadStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.k3.selectBomByGroup.biz.ext2',
					root : 'datas',
					autoLoad : false,
					baseParams : {},
					fields : [{
								name : 'fbomnumber'
							}, {
								name : 'finterId'
							}, {
								name : 'fnumber'
							}, {
								name : 'fparentId'
							}, {
								name : 'fname'
							}, {
								name : 'fmodel'
							}, {
								name : 'funitname'
							}, {
								name : 'fqty'
							}, {
								name : 'fversion'
							}, {
								name : 'fstatusEnum'
							}, {
								name : 'fcheckerStatus'
							}, {
								name : 'fauxPropIdEnum'
							}, {
								name : 'ferpClsIdEnum'
							}, {
								name : 'fbillNO'
							}, {
								name : 'froutingName'
							}, {
								name : 'fyield'
							}, {
								name : 'fnote'
							}, {
								name : 'fpdmimportDate'
							}, {
								name : 'hasSourceMaterial'
							}, {
								name : 'fbomskipEnum'
							}, {
								name : 'lastUpdateName'
							}, {
								name : 'fenterTime'
							}, {
								name : 'lastUseName'
							}, {
								name : 'fuseDate'
							}, {
								name : 'fitemId'
							}]
				})

		this.bomListStore = new Ext.data.JsonStore({
					url : 'com.keensen.ump.base.k3.selectBOMAndChildrenByBom.biz.ext',
					root : 'datas',
					autoLoad : false,
					baseParams : {},
					fields : [{
								name : 'finterId'
							}, {
								name : 'fnumber'
							}, {
								name : 'fname'
							}, {
								name : 'fmodel'
							}, {
								name : 'funitname'
							}, {
								name : 'fqty'
							}, {
								name : 'fauxPropIdEnum'
							}, {
								name : 'fmaterielChildType'
							}, {
								name : 'fmarshalTypeEnum'
							}, {
								name : 'fbeginDay'
							}, {
								name : 'fendDay'
							}, {
								name : 'fpercent'
							}, {
								name : 'fscrap'
							}, {
								name : 'fpositionNo'
							}, {
								name : 'fitemSize'
							}, {
								name : 'fitemSuite'
							}, {
								name : 'foperSn'
							}, {
								name : 'foperName'
							}, {
								name : 'fmachinePos'
							}, {
								name : 'foffSetDay'
							}, {
								name : 'fbackFlushEnum'
							}, {
								name : 'fisKeyItemEnum'
							}, {
								name : 'fuseStateEnum'
							}, {
								name : 'fdeletedEnum'
							}, {
								name : 'fstockName'
							}, {
								name : 'fspfullName'
							}, {
								name : 'fnote'
							}, {
								name : 'fnote1'
							}, {
								name : 'fnote2'
							}, {
								name : 'fnote3'
							}, {
								name : 'fpdmimportDate'
							}, {
								name : 'fhasCharEnum'
							}, {
								name : 'hasSubstitute'
							}, {
								name : 'itemNote'
							}, {
								name : 'fcostPercentage'
							}, {
								name : 'fitemId'
							}]
				})

	}

	this.initPanel4Group = function() {
		var _this = this;

		var selModel4Group = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4Group = new Ext.fn.ListPanel({
			width : 240,
			viewConfig : {
				forceFit : false
			},
			hsPage : false,
			selModel : selModel4Group,
			tbar : [{
						xtype : 'displayfield',
						value : '&nbsp;&nbsp;BOM组:'
					}, new Ext.form.ComboBox({
								width : 180,
								ref : '../bomGroup',
								triggerAction : "all",
								lazyRender : true,
								store : this.groupStore,
								hiddenName : "condition/finterId",
								mode : "local",
								anchor : '100%',
								editable : false,
								displayField : "text",
								valueField : "finterId",
								forceSelection : true,
								allowBlank : false,
								emptyText : "--请选择--",
								listeners : {
									select : function(combo, record) {
										var modal = _this.listPanel4Head.modal
												.getValue();
										modal = modal == true ? 'Y' : 'N';
										var finterId = record.get('finterId');
										var store = _this.listPanel4Group.store;
										store.baseParams = {
											'finterId' : finterId,
											'modal' : modal
										}
										store.load();

									},
									change : function(cmb, newValue, oldValue) {
										if (newValue == oldValue)
											return;
										_this.listPanel4Head.store.removeAll();
										_this.listPanel4List.store.removeAll();
									}
								}
							})],

			delUrl : '1.biz.ext',
			columns : [selModel4Group, {
						dataIndex : 'fbomnumber',
						sortable : true,
						header : 'BOM编码'
					}, {
						dataIndex : 'fname',
						sortable : true,
						header : '物料名称'
					}, {
						dataIndex : 'fmodel',
						sortable : true,
						header : '规格型号'
					}, {
						dataIndex : 'fnumber',
						sortable : true,
						header : '物料代码'
					}],
			store : this.bomByGroupStore
		})
	}

	this.initPanel4Bom = function() {

		var selModel4Head = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel4Head = new Ext.fn.ListPanel({
					height : 120,
					region : "north",
					viewConfig : {
						forceFit : false
					},
					tbar : [{
								xtype : 'displayfield',
								value : '&nbsp;&nbsp;'
							}, {
								xtype : 'checkbox',
								boxLabel : '更新本地库',
								checked : true,
								ref : '../modal',
								inputValue : 'Y',
								anchor : '100%'
							}],
					hsPage : false,
					delUrl : '1.biz.ext',
					selModel : selModel4Head,
					columns : [selModel4Head, {
								dataIndex : 'fbomnumber',
								sortable : true,
								header : 'BOM编码'
							}, {
								dataIndex : 'fversion',
								width : 60,
								sortable : true,
								header : '版本'
							}, {
								dataIndex : 'fstatusEnum',
								width : 60,
								sortable : true,
								header : '状态'
							}, {
								dataIndex : 'fcheckerStatus',
								sortable : true,
								width : 60,
								header : '审核'
							}, {
								dataIndex : 'fnumber',
								sortable : true,
								header : '物料代码'
							}, {
								dataIndex : 'fname',
								sortable : true,
								header : '物料名称'
							}, {
								dataIndex : 'fmodel',
								sortable : true,
								header : '规格型号'
							}, {
								dataIndex : 'fauxPropIdEnum',
								sortable : true,
								header : '辅助属性'
							}, {
								dataIndex : 'ferpClsIdEnum',
								sortable : true,
								header : '物料属性'
							}, {
								dataIndex : 'fqty',
								sortable : true,
								header : '数量'
							}, {
								dataIndex : 'funitname',
								sortable : true,
								header : '单位'
							}, {
								dataIndex : 'fbillNO',
								sortable : true,
								header : '工艺路线代码'
							}, {
								dataIndex : 'froutingName',
								sortable : true,
								header : '工艺路线名称'
							}, {
								dataIndex : 'fyield',
								sortable : true,
								header : '成品率(%)'
							}, {
								dataIndex : 'fnote',
								sortable : true,
								header : '备注'
							}, {
								dataIndex : 'fpdmimportDate',
								sortable : true,
								header : 'PDM导入时间'
							}, {
								dataIndex : 'hasSourceMaterial',
								width : 110,
								sortable : true,
								header : '是否有特性来源物料',
								renderer : function(v) {
									if (Ext.isEmpty(v))
										return '';
									return v == '0' ? '无' : '有';
								}
							}, {
								dataIndex : 'fbomskipEnum',
								sortable : true,
								header : '跳层'
							}, {
								dataIndex : 'lastUpdateName',
								sortable : true,
								header : '最后更新人员'
							}, {
								dataIndex : 'fenterTime',
								sortable : true,
								header : '最后更新日期',
								renderer : function(v) {
									if (Ext.isEmpty(v))
										return '';
									return v.substr(0, 10);
								}
							}, {
								dataIndex : 'lastUseName',
								sortable : true,
								header : '使用人员'
							}, {
								dataIndex : 'fuseDate',
								sortable : true,
								header : '使用日期',
								renderer : function(v) {
									if (Ext.isEmpty(v))
										return '';
									return v.substr(0, 10);
								}
							}, {
								dataIndex : 'fitemId',
								sortable : true,
								header : '物料内码'
							}, {
								dataIndex : 'finterId',
								sortable : true,
								header : 'BOM内码'
							}],
					store : this.bomHeadStore
				})

		var selModel4List = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel4List = new Ext.fn.ListPanel({
					region : "center",
					viewConfig : {
						forceFit : false
					},
					hsPage : false,
					selModel : selModel4List,
					delUrl : '1.biz.ext',
					columns : [new Ext.grid.RowNumberer({
										width : 30
									}), selModel4List, {
								dataIndex : 'fnumber',
								sortable : true,
								header : '物料代码'
							}, {
								dataIndex : 'fname',
								sortable : true,
								header : '物料名称'
							}, {
								dataIndex : 'fmodel',
								width : 200,
								sortable : true,
								header : '规格型号'
							}, {
								dataIndex : 'fauxPropIdEnum',
								sortable : true,
								header : '辅助属性'
							}, {
								dataIndex : 'fmaterielChildType',
								sortable : true,
								header : '子项类型'
							}, {
								dataIndex : 'fmarshalTypeEnum',
								sortable : true,
								header : '配置属性'
							}, {
								dataIndex : 'funitname',
								sortable : true,
								header : '基本单位'
							}, {
								dataIndex : 'fqty',
								sortable : true,
								header : '基本用量'
							}, {
								dataIndex : 'funitname',
								sortable : true,
								header : '单位'
							}, {
								dataIndex : 'fqty',
								sortable : true,
								header : '用量'
							}, {
								dataIndex : 'fbeginDay',
								sortable : true,
								header : '生效日期',
								renderer : function(v) {
									if (Ext.isEmpty(v))
										return '';
									return v.substr(0, 10);
								}
							}, {
								dataIndex : 'fendDay',
								sortable : true,
								header : '失效日期',
								renderer : function(v) {
									if (Ext.isEmpty(v))
										return '';
									return v.substr(0, 10);
								}
							}, {
								dataIndex : 'fpercent',
								sortable : true,
								header : '计划百分比(%)'
							}, {
								dataIndex : 'fscrap',
								sortable : true,
								header : '损耗率(%)'
							}, {
								dataIndex : 'fpositionNo',
								sortable : true,
								header : '位置号'
							}, {
								dataIndex : 'fitemSize',
								sortable : true,
								header : '坯料尺寸'
							}, {
								dataIndex : 'fitemSuite',
								sortable : true,
								header : '坯料数'
							}, {
								dataIndex : 'foperSn',
								sortable : true,
								header : '工序号'
							}, {
								dataIndex : 'foperName',
								sortable : true,
								header : '工序'
							}, {
								dataIndex : 'fmachinePos',
								sortable : true,
								header : '工位'
							}, {
								dataIndex : 'foffSetDay',
								sortable : true,
								header : '提前期偏置'
							}, {
								dataIndex : 'fbackFlushEnum',
								sortable : true,
								header : '是否倒冲'
							}, {
								dataIndex : 'fisKeyItemEnum',
								sortable : true,
								header : '关键件'
							}, {
								dataIndex : 'fuseStateEnum',
								sortable : true,
								header : '使用状态'
							}, {
								dataIndex : 'fdeletedEnum',
								sortable : true,
								header : '是否禁用'
							}, {
								dataIndex : 'fstockName',
								sortable : true,
								header : '发料仓库'
							}, {
								dataIndex : 'fspfullName',
								sortable : true,
								header : '发料仓位'
							}, {
								dataIndex : 'fnote',
								sortable : true,
								header : '备注'
							}, {
								dataIndex : 'fnote1',
								sortable : true,
								header : '备注1'
							}, {
								dataIndex : 'fnote2',
								sortable : true,
								header : '备注2'
							}, {
								dataIndex : 'fnote3',
								sortable : true,
								header : '备注3'
							}, {
								dataIndex : 'fpdmimportDate',
								sortable : true,
								header : 'PDM导入时间',
								renderer : function(v) {
									if (Ext.isEmpty(v))
										return '';
									return v.substr(0, 10);
								}
							}, {
								dataIndex : 'fhasCharEnum',
								sortable : true,
								header : '是否有特性'
							}, {
								dataIndex : 'hasSubstitute',
								sortable : true,
								header : '存在替代关系'
							}, {
								dataIndex : 'itemNote',
								sortable : true,
								header : '特性描述'
							}, {
								dataIndex : 'fcostPercentage',
								sortable : true,
								header : '拆卸成本拆分比例'
							}, {
								dataIndex : 'fitemId',
								sortable : true,
								header : '物料内码'
							}, {
								dataIndex : 'finterId',
								sortable : true,
								header : 'BOM内码'
							}],
					store : this.bomListStore
				})

		this.panel4Bom = this.panel || new Ext.Panel({
					layout : 'border',
					items : [this.listPanel4Head, this.listPanel4List]

				});

	}
}