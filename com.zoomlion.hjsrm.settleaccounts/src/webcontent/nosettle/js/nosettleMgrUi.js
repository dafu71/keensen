com.zoomlion.hjsrm.settleaccounts.NosettleMgr = function() {

	this.initPanel = function() {

		this.initQueryPanel();

		this.initListPanel();

		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'nosettleMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	// 查询
	this.initQueryPanel = function() {

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 135,
					columns : 2,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 查询凭证 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								anchor : '95%',
								columns : 1,
								ref : '../werks',
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							},{
								xtype : 'textfield',
								name : 'condition/lifnr',
								anchor : '95%',
								columns : 1,
								ref : '../lifnr',
								hidden : !Ext.isEmpty(lifnr) ? true : false,
								fieldLabel : '供应商编码',
								value : lifnr
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '95%',
								nameArray : ['condition/ruksjstartdate',
										'condition/ruksjendate'],
								fieldLabel : "参考凭证过账日期",
								format : "Y-m-d"
							}]
				});
	}

	// 查询列表
	this.initListPanel = function() {

		this.listPanel = new Ext.fn.ListPanel({
			title : '【 查询列表 】',
			hsPage : false,
			// pageSize : 200,

			// autoHeight:true,
			height : 300,
			delUrl : '...',
			viewConfig : {
		// autoFill:true

			},
			tbar : [{
						text : '导出',
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
					}],
			autoExpandColumn : '3',
			columns : [new Ext.grid.RowNumberer({
								width : 30
							}),
					// {
					// dataIndex : 'flag',
					// header : '可选择',
					// width : 60,
					// renderer : function(v, m, r, i) {
					//
					// if (v == "1") {
					// return "<span style='color:red'>是</span>";
					// } else {
					// return "<span style='color:blue'>否</span>";
					// }
					// }
					//
					// },
					{
						dataIndex : 'mblnr',
						header : '物料凭证号'
					}, {
						dataIndex : 'zeile',
						header : '物料凭证行号'
					}, {
						dataIndex : 'mjahr',
						header : '物料凭证年度'
					}, {
						dataIndex : 'budat',
						header : '过账日期'
					}, {
						dataIndex : 'matnr',
						header : '物料号'
					}, {
						dataIndex : 'txz01',
						header : '物料描述'
					}, {
						header : '收货数量',
						dataIndex : 'erfmg'
					}, {
						header : '单位',
						dataIndex : 'erfme'
					}, {
						header : '待结算数量',
						dataIndex : 'djssl'
					}, {
						header : '合同价',
						dataIndex : 'kbetr'
					}, {
						header : '合同价格单位',
						dataIndex : 'kpein'
					}, {
						header : '合同计量单位',
						dataIndex : 'kmein'
					}, {
						header : '结算单价（含税）',
						dataIndex : 'jsdj'
					}, {
						header : '结算价格单位',
						dataIndex : 'jsdw'
					}, {
						header : '与合同价一致',
						dataIndex : 'flag_htj'
					}, {
						header : '移动类型',
						dataIndex : 'bwart'
					}, {
						header : '借贷标识',
						dataIndex : 'shkzg'
					}, {
						header : '货币码',
						dataIndex : 'waers'
					}, {
						header : '采购订单号',
						dataIndex : 'ebeln'
					}, {
						header : '采购订单行号',
						dataIndex : 'ebelp'
					}, {
						header : '生产订单号',
						dataIndex : 'aufnr'
					}, {
						header : '成本中心',
						dataIndex : 'kostl'
					}, {
						header : '参考凭证号',
						dataIndex : 'lfbnr'
					}, {
						header : '参考凭证行号',
						dataIndex : 'lfpos'
					}, {
						header : '参考凭证年度',
						dataIndex : 'lfbja'
					}, {
						header : '供应商编码',
						dataIndex : 'lifnr'
					}, {
						header : '供应商名称',
						dataIndex : 'name1'
					}, {
						header : '公司',
						dataIndex : 'butxt'
					}, {
						header : '工厂',
						dataIndex : 'werksname'
					}, {
						header : '采购组织',
						dataIndex : 'ekotx'
					}, {
						header : '采购组',
						dataIndex : 'eknam'
					}, {
						header : '提示',
						dataIndex : 'tishi'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.settleaccounts.accounts.queryNosettle.biz.ext',
				root : 'data',
				// autoLoad : true,
				//totalProperty : 'totalCount',
				/*baseParams : {
					"condition/ekorg" : 3001,
					'condition/bukrs' : 3000,
					'condition/werks' : 3000,
					'condition/flag' : 0
				},*/
				fields : [{
							name : 'mblnr'
						}, {
							name : 'zeile'
						}, {
							name : 'mjahr'
						}, {
							name : 'budat'
						}, {
							name : 'matnr'
						}, {
							name : 'txz01'
						}, {
							name : 'erfmg'
						}, {
							name : 'erfme'
						}, {
							name : 'djssl'
						}, {
							name : 'djssl_ck'
						}, {
							name : 'kbetr'
						}, {
							name : 'kpein'
						}, {
							name : 'kmein'
						}, {
							name : 'jsdj'
						}, {
							name : 'jsdw'
						}, {
							name : 'flag_htj'
						}, {
							name : 'bwart'
						}, {
							name : 'shkzg'
						}, {
							name : 'waers'
						}, {
							name : 'ebeln'
						}, {
							name : 'ebelp'
						}, {
							name : 'aufnr'
						}, {
							name : 'kostl'
						}, {
							name : 'lfpos'
						}, {
							name : 'lfbnr'
						}, {
							name : 'lfbja'
						}, {
							name : 'lifnr'
						}, {
							name : 'bukrs'
						}, {
							name : 'werks'
						}, {
							name : 'ekorg'
						}, {
							name : 'ekgrp'
						}, {
							name : 'amount'
						}, {
							name : 'name1'
						}, {
							name : 'flag'
						}, {
							name : 'myid'
						}, {
							name : 'tishi'
						}, {
							name : 'ekotx'
						}, {
							name : 'eknam'
						}, {
							name : 'm_ztext'
						}, {
							name : 'm_djssl'
						}, {
							name : 'm_jsdj'
						}, {
							name : 'm_jsdw'
						}, {
							name : 'm_flag_htj'
						}, {
							name : 'm_hkkje'
						}, {
							name : 'm_mwskz'
						}, {
							name : 'butxt'
						}, {
							name : 'werksname'
						}, {
							name : 'chayi'
						}, {
							name : 'mein'
						}, {
							name : 'menge'
						}]
			})
		});
	}

}