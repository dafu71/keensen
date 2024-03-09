com.keensen.ump.qinsen.produce.markprintMgr = function() {
	this.initPanel = function() {
		this.initInputPanel();
		this.initLogoQueryWindow();

		this.lay = new Ext.fn.fnLayOut({
					title : '打印唛头',
					layout : 'new',
					border : false,
					renderTo : 'markprintmgr',
					panels : [this.inputPanel, this.panel, this.panel2]
				});
		return this.lay;
	}

	this.initInputPanel = function() {
		var _this = this;
		this.panel = this.panel || new Ext.Panel({});
		this.panel2 = this.panel2 || new Ext.Panel({
					height : '300',
					baseCls : "x-plain"
				});
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			// baseCls : "x-plain",

			width : '600',
			height : '520',
			pgrid : '',
			columns : 2,
			autoHide : false,
			border : true,
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'prodspeccombobox',
						hiddenName : 'entity/markSpecName',
						valueField : 'name',
						ref : '../markSpecName',
						anchor : '85%',
						colspan : 2,
						fieldLabel : '唛头显示型号 ',
						typeAhead : true,
						typeAheadDelay : 100,
						minChars : 1,
						queryMode : 'local',
						lastQuery : '',
						editable : true,
						allowBlank : false,
						listeners : {
							'specialkey' : function() {
								return false;
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {

						xtype : 'combobox',
						fieldLabel : '打印星标',
						ref : '../withStar',
						hiddenName : 'entity/withStar',
						colspan : 2,
						emptyText : '--请选择--',
						allowBlank : false,
						anchor : '85%',
						store : [['N', '否'], ['Y', '是']],
						listeners : {
							scope : this,
							'expand' : function(A) {
								this.inputPanel.withStar.reset();
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						ref : '../batchNoStr2',
						allowBlank : false,
						xtype : 'textarea',
						colspan : 2,
						anchor : '85%',
						fieldLabel : '元件序号',
						name : 'entity/batchNoStr2',
						height : 260
					}, {
						xtype : 'displayfield',
						colspan : 2,
						html : "<span style='color:red;'>请按顺序将元件序号扫码，或手工输入并回车换行</span>"
					}, {
						xtype : 'displayfield',
						colspan : 2,
						anchor : '85%',
						height : '200',
						ref : '../img',
						value : 'logo图片:'
					}, {
						name : 'entity/logoId',
						ref : '../logoId',
						xtype : 'hidden'
					}, {
						name : 'entity/quantity',
						ref : '../quantity',
						xtype : 'hidden'
					}, {
						name : 'entity/logoUrl',
						ref : '../logoUrl',
						xtype : 'hidden'
					}, {
						name : 'entity/batchNoStr',
						ref : '../batchNoStr',
						xtype : 'hidden'
					}],
			buttons : [{
						text : "选择LOGO",
						scope : this,
						iconCls : 'icon-page_save',
						handler : this.chooseLogo

					}, {
						text : "打印",
						scope : this,
						iconCls : 'icon-printer',
						handler : this.dealBatches

					}]
		})

	}

	this.initLogoQueryWindow = function() {
		var selModel2 = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false,
					header : ''
				});

		this.listPanel2 = this.listPanel2 || new Ext.fn.ListPanel({
			region : 'center',
			hsPage : false,
			viewConfig : {
				forceFit : true
			},
			selModel : selModel2,
			delUrl : '1111.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel2, {
						header : 'ID',
						dataIndex : 'recordId'
					}, {
						header : '编码',
						dataIndex : 'logoCode'
					}, {
						header : '状态',
						dataIndex : 'stateName'
					}, {
						header : '图片',
						dataIndex : 'imgUrl',
						renderer : function(value, metaData, rec, rowIndex,
								colIndex, store, view) {
							if (value) {
								if (rec.data.flag == 'first') {
									return '<img src="'
											+ value
											+ '?ver='
											+ rec.data.changeDt
											+ '" style="width:auto; height:auto; max-width:98%; max-height:140px;" />';
								} else {
									return '<img src="'
											+ rootUrl
											+ value
											+ '?ver='
											+ rec.data.changeDt
											+ '" style="width:auto; height:auto; max-width:98%; max-height:140px;" />';
								}

							}
						}
					}, {
						header : '说明',
						dataIndex : 'remark'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.qinsen.pack.queryLogoRecords.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : '',
						baseParams : {
			// 'condition/werks' : 3000
						},
						fields : [{
									name : 'recordId'
								}, {
									name : 'customerId'
								}, {
									name : 'logoCode'
								}, {
									name : 'logoName'
								}, {
									name : 'imgUri'
								}, {
									name : 'createDt'
								}, {
									name : 'changeDt'
								}, {
									name : 'creatorId'
								}, {
									name : 'changerId'
								}, {
									name : 'remark'
								}, {
									name : 'state'
								}, {
									name : 'stateName'
								}, {
									name : 'imgUrl'
								}, {
									name : 'flag'
								}]
					})
		})

		this.queryPanel2 = this.queryPanel2 || new Ext.fn.QueryPanel({
					height : 80,
					columns : 1,
					border : true,
					region : 'north',
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								ref : '../logoCodeStr',
								name : 'condition/logoCodeStr',
								anchor : '50%',
								fieldLabel : '%编码%'
							}]
				});

		this.logoQueryWindow = this.logoQueryWindow || new Ext.Window({
					title : 'LOGO选择',
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
					items : [this.queryPanel2, this.listPanel2],
					buttons : [{
								text : "确定",
								scope : this,
								iconCls : 'icon-page_save',
								handler : this.onSelect

							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.logoQueryWindow.hide();
								}

							}]

				});
	}

}