com.keensen.ump.produce.component.linecheck.IndustryMgr = function() {

	this.initPanel = function() {

		this.initQueryPanel();
		this.initEditPanel();

		return new Ext.fn.fnLayOut({
					layout : 'new',
					border : false,
					border : false,
					renderTo : 'linecheckindustrymgr',
					panels : [this.queryPanel, new Ext.Panel({}),
							this.editPanel]
				});
	}

	this.initQueryPanel = function() {

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					width : 600,
					columns : 1,
					fields : [{
								xtype : 'textfield',
								anchor : '85%',
								style : '{font-weight:bold;font-size:18px;}',
								allowBlank : false,
								ref : '../code',
								fieldLabel : '请检单编号',
								colspan : 1
							}]
				});
	};

	this.initEditPanel = function() {

		var _this = this;

		this.judgeStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['合格', '合格'], ['不合格', '不合格']]
				});

		this.ynStore = new Ext.data.SimpleStore({
					fields : ['code', 'name'],
					data : [['是', '是'], ['否', '否']]
				});

		this.editPanel = this.editPanel || new Ext.fn.EditPanel({
			width : 600,
			pgrid : '',
			columns : 2,
			autoHide : false,
			autoScroll : true,
			baseCls : "x-plain",
			border : true,
			saveUrl : 'com.keensen.ump.produce.component.linecheck.saveCheck.biz.ext',
			loadUrl : 'com.keensen.ump.produce.component.linecheck.expandCheckJudge.biz.ext',
			fields : [{
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:16px;">订单信息</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 2
					}, {
						xtype : 'textfield',
						// name : 'entity/orderNo',
						anchor : '85%',
						readOnly : true,
						dataIndex : 'orderNo',
						fieldLabel : '订单号',
						colspan : 1
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/orderType',
						readOnly : true,
						dataIndex : 'orderType',
						fieldLabel : '订单类型',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 2
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/orderAmount',
						readOnly : true,
						dataIndex : 'orderAmount',
						fieldLabel : '订单数量',
						colspan : 1
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/jmSpecName',
						readOnly : true,
						dataIndex : 'jmSpecName',
						fieldLabel : '生产规格型号',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 2
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/applyAmount',
						readOnly : true,
						dataIndex : 'applyAmount',
						fieldLabel : '请检数量',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:16px;">贴标信息</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 2
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/tape',
						readOnly : true,
						dataIndex : 'tape',
						fieldLabel : '卷膜胶带',
						colspan : 1
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/lid',
						readOnly : true,
						dataIndex : 'lid',
						fieldLabel : '端盖',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 2
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/snRegular',
						readOnly : true,
						dataIndex : 'snRegular',
						fieldLabel : '序列号是否固定',
						colspan : 1
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/makeLabel',
						readOnly : true,
						dataIndex : 'makeLabel',
						fieldLabel : '标签制作方式',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 2
					}, {
						xtype : 'displayfield',
						ref : '../labelDrawing',
						fieldLabel : '第一标签图纸',
						colspan : 1
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/labelDrawingCode2',
						readOnly : true,
						dataIndex : 'labelDrawingCode2',
						fieldLabel : '第二标签图纸',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'combobox',
						anchor : '85%',
						forceSelection : true,
						allowBlank : false,
						mode : 'local',
						fieldLabel : '贴标判定',
						ref : '../judgeStore',
						hiddenName : 'entity/labelJudge',
						dataIndex : 'labelJudge',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.judgeStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:16px;">包装信息</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 2
					}, {
						xtype : 'displayfield',
						ref : '../markDrawing',
						fieldLabel : '第一唛头图纸',
						colspan : 1
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/labelDrawingCode2',
						readOnly : true,
						dataIndex : 'logoMark2',
						fieldLabel : '第二唛头图纸',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 2
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/snRegular',
						readOnly : true,
						dataIndex : 'ifphoto',
						fieldLabel : '是否需要拍照',
						colspan : 1
					}, {
						xtype : 'button',
						text : '照片检视',
						anchor : "50%",
						scope : this,
						handler : this.viewPhotos,
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 2
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/snRegular',
						readOnly : true,
						dataIndex : 'bagDrawingCode',
						fieldLabel : '真空包装袋图纸编号',
						colspan : 1
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/snRegular',
						readOnly : true,
						dataIndex : 'box',
						fieldLabel : '膜元件包装箱',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 2
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/snRegular',
						readOnly : true,
						dataIndex : 'packingNum',
						fieldLabel : '装箱标准',
						colspan : 1
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/snRegular',
						readOnly : true,
						dataIndex : 'tray',
						fieldLabel : '托盘材质',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						colspan : 2
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/snRegular',
						readOnly : true,
						dataIndex : 'traySize',
						fieldLabel : '托盘尺寸',
						colspan : 1
					}, {
						xtype : 'textfield',
						anchor : '85%',
						// name : 'entity/snRegular',
						readOnly : true,
						dataIndex : 'packingLayer',
						fieldLabel : '打包层数',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'combobox',
						anchor : '85%',
						forceSelection : true,
						allowBlank : false,
						mode : 'local',
						fieldLabel : '包装判定',
						ref : '../judgeStore',
						hiddenName : 'entity/packageJudge',
						dataIndex : 'packageJudge',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.judgeStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:16px;">其他信息</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 2
					}, {
						xtype : 'combobox',
						anchor : '85%',
						forceSelection : true,
						allowBlank : false,
						mode : 'local',
						fieldLabel : '元件外观判定',
						ref : '../judgeStore',
						hiddenName : 'entity/appearanceJudge',
						dataIndex : 'appearanceJudge',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.judgeStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						}
					}, {
						xtype : 'combobox',
						anchor : '85%',
						forceSelection : true,
						allowBlank : false,
						mode : 'local',
						fieldLabel : '元件直径判定',
						ref : '../judgeStore',
						hiddenName : 'entity/diameterJudge',
						dataIndex : 'diameterJudge',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.judgeStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						}
					}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:16px;">最终判定</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 2
					}, {
						xtype : 'combobox',
						anchor : '85%',
						forceSelection : true,
						allowBlank : false,
						mode : 'local',
						fieldLabel : '综合判定',
						ref : '../judgeStore',
						hiddenName : 'entity/comprehensiveJuege',
						dataIndex : 'comprehensiveJuege',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.judgeStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								this.reset()
							}
						}
					}, {
						xtype : 'combobox',
						mode : 'local',
						fieldLabel : 'C等品',
						ref : '../isC',
						hiddenName : 'entity/isC',
						dataIndex : 'isC',
						anchor : '85%',
						colspan : 1,
						emptyText : '--请选择--',
						editable : false,
						store : this.ynStore,
						displayField : "name",
						valueField : "code",
						listeners : {
							"expand" : function(A) {
								_this.editPanel.isC.reset()
							}
						}
					}, {
						xtype : 'displayfield',
						height : '5',
						colspan : 2
					}, {
						xtype : 'dictcombobox',
						dataIndex : 'storage',
						hiddenName : 'entity/storage',
						allowBlank : false,
						fieldLabel : '入库仓位',
						dictData : KS_PROD_STORAGE,
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'hidden',
						ref : '../labelDrawingUrl',
						dataIndex : 'labelDrawingUrl'
					}, {
						xtype : 'hidden',
						ref : '../markDrawingUrl',
						dataIndex : 'markDrawingUrl'
					}, {
						xtype : 'hidden',
						ref : '../urlPhotoApply',
						dataIndex : 'urlPhotoApply'
					}, {
						xtype : 'hidden',
						ref : '../urlPhotoApply2',
						dataIndex : 'urlPhotoApply2'
					}, {
						xtype : 'hidden',
						ref : '../urlPhotoApply3',
						dataIndex : 'urlPhotoApply3'
					}, {
						xtype : 'hidden',
						ref : '../urlPhotoApply4',
						dataIndex : 'urlPhotoApply4'
					}, {
						xtype : 'hidden',
						ref : '../urlPhotoApply5',
						dataIndex : 'urlPhotoApply5'
					}, {
						xtype : 'hidden',
						ref : '../urlPhotoApply6',
						dataIndex : 'urlPhotoApply6'
					}, {
						xtype : 'hidden',
						ref : '../checkId',
						name : 'entity/id',
						dataIndex : 'checkId'
					}]
		})

		this.editPanel.addButton({
					text : "保存",
					scope : this,
					iconCls : 'icon-application_edit',
					handler : this.onSave
				});
	}

}