com.keensen.ump.produce.quality.concessionFirstMgr = function() {
	this.initPanel = function() {
		this.initEditPanel();

		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					autoScroll : true,
					renderTo : 'concessionfirstmgr',
					panels : [this.editPanel, this.listPanel]
				});
	}
	
	this.initEditPanel = function() {
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

		this.editPanel = this.editPanel || new Ext.fn.EditPanel({
			height : 250,
			// baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 2,
			loadUrl : 'com.keensen.ump.produce.quality.concession.expand.biz.ext',
			saveUrl : 'com.keensen.ump.produce.quality.concession.expand.biz.ext',
			fields : [{
						xtype : 'textfield',
						dataIndex : 'orderNo',
						name : 'orderNo',
						allowBlank : false,
						fieldLabel : '客户/订单号',
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'mpspeccombobox',
						dataIndex : 'prodSpecId',
						name : 'prodSpecId',
						hiddenName : 'prodSpecId',
						allowBlank : false,
						anchor : '95%',
						fieldLabel : '膜片型号 '
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'textfield',
						dataIndex : 'dept',
						name : 'dept',
						fieldLabel : '申请部门',
						allowBlank : false,
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'numberfield',
						name : 'num',
						dataIndex : 'num',
						allowBlank : false,
						fieldLabel : '数量',
						anchor : '95%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'dictcheckboxgroup',
						name : 'myCheckboxGroup',
						dataIndex : 'myitems',
						allowBlank : false,
						fieldLabel : '放行类型',
						anchor : '95%',
						dictData : KS_QUALITY_JUDGE_ITEM,
						colspan : 1
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'ifKey',
						fieldLabel : '是否关键特性',
						allowBlank : false,
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
						name:'reason',
						allowBlank : false,
						fieldLabel : '让步接收理由',
						anchor : '95%',
						colspan : 2
					}, {
						xtype : 'hidden',
						name : 'myitems'
					}, {
						xtype : 'hidden',
						name : 'reserve1',
						dataIndex : 'reserve1'
					}, {
						xtype : 'hidden',
						name : 'id',
						dataIndex : 'id'
					}],
					buttons : [{
								text : "重新提交",
								scope : this,
								ref : '../saveBtn',
								handler : this.onSave
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.onClose();
								}
							}, {
								text : "作废申请",
								scope : this,
								handler : function() {
									this.onInvalid();
								}
							}]

		})
	}
}