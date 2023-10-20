com.zoomlion.hjsrm.cgzqreport.CgzqreportMgr = function() {
	if (Ext.isEmpty(lifnr)) {
		var OR = false
	} else {
		var OR = true
	}
	this.initPanel = function() {
		this.isChassis = false;
		this.initQueryPanel();
		this.initListNotePanel();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'cgzqreportMgr',
					panels : [this.queryPanel,this.listNotePanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : !Ext.isEmpty(lifnr) ? 140 : 170,
					columns : 3,
					//region : 'north',
					collapsible : true,
					titleCollapse : false,
					border : true,
					title : '【 采购周期查询 】',
					fields : [ {
								xtype : 'textfield',
								hidden : OR,
								name : 'condition/lifnr',
								fieldLabel : '供应商编码'
							}, {
								xtype : 'textfield',
								hidden : OR,
								name : 'condition/name1',
								fieldLabel : '供应商描述'
							}, {
								xtype : 'textfield',
								name : 'condition/txz01',
								fieldLabel : '物料编码描述'
							}, {
								xtype : "dateregion2",
								width : 200,
								nameArray : ['condition/querystartdate',
										'condition/queryendate'],
								fieldLabel : "查询时间区间",
								value1: now,
								value2:sysdate,
								format : "Y-m-d"
							}, {
								xtype : 'textarea',
								height : '50',
								ref : "../matnr2",
								name : 'condition/matnr2',
								fieldLabel : '物料编码'
							}, {
								xtype : 'hidden',
								ref : "../matnr",
								name : 'condition/matnr'
							}]
				});
	}

	this.initListNotePanel = function() {
		this.selModel2 = new Ext.grid.CheckboxSelectionModel({});
		var _this = this;
		this.listNotePanel = new Ext.fn.ListPanel({
			title : '【 采购周期列表 】',
			hsPage : true,
			tbar : [{
						text : "导出",
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
					}],
			selModel : this.selModel2,
			columns : [new Ext.grid.RowNumberer(), this.selModel2,  {
				header : '供应商帐号',
				dataIndex : 'lifnr'
			}, {
				header : '供应商名称',
				dataIndex : 'name1'
			},{
				dataIndex : 'matnr',
				header : '物料编码',
				width : 160
			}, {
				dataIndex : 'txz01',
				header : '物料描述',
				width : 330
			}, {
				dataIndex : 'querenzhouqi',
				header : '确认周期'
			}, {
				dataIndex : 'beihuozhouqi',
				header : '备货周期'
			}, {
				dataIndex : 'zaituzhouqi',
				header : '在途周期'
			}, {
				dataIndex : 'caigouzhouqi',
				header : '采购周期'
			}],
			store : new Ext.data.JsonStore({
						url : 'com.zoomlion.hjsrm.report.cgzqreport.cgzqreportquery.biz.ext',
						root : 'data',
						// autoLoad : true,
						totalProperty : 'totalCount',
						fields : [ {
									name : 'lifnr'
								}, {
									name : 'name1'
								}, {
									name : 'matnr'
								}, {
									name : 'txz01'
								}, {
									name : 'querenzhouqi'
								}, {
									name : 'beihuozhouqi'
								}, {
									name : 'zaituzhouqi'
								}, {
									name : 'caigouzhouqi'
								}]
					})
		});
	}
}