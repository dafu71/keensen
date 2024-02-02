com.keensen.ump.produce.quality.concessionSixthMgr = function() {
	this.initPanel = function() {
		this.initInputPanel();

		this.initViewPanel();

		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					autoScroll : true,
					renderTo : 'concessionsixthmgr',
					panels : [this.inputPanel, this.viewPanel, this.listPanel]
				});
	}

	this.initInputPanel = function() {
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
					height : 160,
					pgrid : '',
					columns : 1,
					autoHide : false,
					border : true,
					saveUrl : '....biz.ext',
					fields : [{
								xtype : 'textarea',
								anchor : '80%',
								colspan : 1,
								name : 'advise',
								allowBlank : false,
								fieldLabel : '最终判定结果'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 1
							}, {
								xtype : 'dictcombobox',
								allowBlank : false,
								colspan : 1,
								name : 'ifok2',
								hiddenName : 'ifok2',
								fieldLabel : '判定是否合格',
								anchor : '30%',
								dictData : ABF_YESORNO
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 1
							}, {
								xtype : "hidden",
								ref : '../processinstid',
								value : processinstid,
								name : 'processinstid'
							}, {
								xtype : "hidden",
								ref : '../workitemid',
								value : workitemid,
								name : 'workitemid'
							}, {
								xtype : "hidden",
								name : 'id'
							}],
					buttons : [{
								text : "提交",
								scope : this,
								ref : '../saveBtn',
								handler : this.onSave
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.onClose();
								}
							}]

				});

	}

	this.initViewPanel = function() {
		var _this = this;

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});

		this.listPanel = this.listPanel || new Ext.fn.ListPanel({
			title : '【异常状态描述】',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			autoScroll : false,
			height : '200',
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						header : '膜片批次'
					}, {
						dataIndex : 'outLength',
						header : '实发长度(m)'
					}, {
						dataIndex : 'usefulLength',
						header : '可用长度m'
					}, {
						dataIndex : 'fGfdAvg',
						header : '初检膜通量'
					}, {
						dataIndex : 'fSaltRejection',
						header : '初检脱盐率%'
					}, {
						dataIndex : 'rGfdAvg',
						header : '复测膜通量'
					}, {
						dataIndex : 'rSaltRejection',
						header : '复测脱盐率'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality.queryTumoOrigin.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'batchNo'
						}, {
							name : 'rSaltRejection'
						}, {
							name : 'rGfdAvg'
						}, {
							name : 'fGfdAvg'
						}, {
							name : 'fSaltRejection'
						}, {
							name : 'usefulLength'
						}, {
							name : 'outLength'
						}]
			})
		})

		this.viewPanel = this.viewPanel || new Ext.fn.ViewPanel({
			height : 240,
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 2,
			loadUrl : 'com.keensen.ump.produce.quality.concession.expand.biz.ext',
			fields : [{
						xtype : 'textfield',
						dataIndex : 'orderNo',
						readOnly : true,
						fieldLabel : '客户/订单号',
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'mpspeccombobox',
						dataIndex : 'prodSpecId',
						name :'prodSpecId',
						readOnly : true,
						anchor : '95%',
						fieldLabel : '膜片型号 '
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'textfield',
						dataIndex : 'dept',
						fieldLabel : '申请部门',
						readOnly : true,
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'numberfield',
						dataIndex : 'num',
						readOnly : true,
						fieldLabel : '数量',
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'dictcheckboxgroup',
						dataIndex : 'myitems',
						readOnly : true,
						fieldLabel : '放行类型',
						anchor : '95%',
						dictData : KS_QUALITY_JUDGE_ITEM,
						colspan : 1
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'ifKey',
						fieldLabel : '是否关键特性',
						readOnly : true,
						dictData : ABF_YESORNO,
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'textarea',
						dataIndex : 'reason',
						readOnly : true,
						fieldLabel : '让步接收理由',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'displayfield',
						ref:'../picturePanel',
						height : '30',
						colspan : 2
					}, {
						xtype : 'hidden',
						dataIndex : 'myitems'
					}, {
						xtype : 'hidden',
						name : 'reserve1',
						dataIndex : 'reserve1'
					}, {
						xtype : 'hidden',
						name : 'id',
						dataIndex : 'id'
					}, {
						xtype : 'hidden',
						dataIndex : 'pictureUrl',
						ref:'../pictureUrl',
						name : 'pictureUrl'

					}, {
						xtype : 'hidden',
						dataIndex : 'pictureUrl2',
						ref:'../pictureUrl2',
						name : 'pictureUrl2'

					}, {
						xtype : 'hidden',
						dataIndex : 'pictureUrl3',
						ref:'../pictureUrl3',
						name : 'pictureUrl3'

					}]

		})
	}
}