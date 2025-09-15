com.keensen.ump.produce.component.markprintlistMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		
		this.initviewOrderWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : "componentmarkprintlistmgr",
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {

		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 4,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					fields : [{
								xtype : 'textfield',
								name : 'condition/prodBatchNo',
								anchor : '85%',
								fieldLabel : '元件序号'
							}, {
								xtype : 'textfield',
								name : 'condition/orderNo',
								anchor : '85%',
								fieldLabel : '订单号'
							}, {
								xtype : 'textfield',
								name : 'condition/prodSpecName2',
								anchor : '85%',
								fieldLabel : '订单生产型号'
							}, {
								xtype : 'textfield',
								name : 'condition/templateName',
								anchor : '85%',
								fieldLabel : '唛头图纸编号'
							}, {
								xtype : 'displayfield',
								height : '5',
								colspan : 4
							}, {
								xtype : 'numberfield',
								name : 'condition/printCnt',
								anchor : '85%',
								fieldLabel : '打印次数'
							}, {
								xtype : 'dictcombobox',
								name : 'condition/ifPrint',
								hiddenName : 'condition/ifPrint',
								fieldLabel : '是否可打印',
								anchor : '85%',
								dictData : KS_YESORNO
							}]
				});
		/*
		 * this.queryPanel.addButton({ text : "导出", scope : this, iconCls :
		 * 'icon-application_excel', handler : this.exportExcel });
		 */

		this.queryPanel.addButton({
					text : "多元件查询",
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onQueryByBatchNos
				});

		this.queryPanel.addButton({
					text : "多卷膜查询",
					scope : this,
					iconCls : 'icon-application_form_magnify',
					handler : this.onQueryByJmBatchNos
				});
	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.listPanel = new Ext.fn.ListPanel({
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			id : listid,
			tbar : [{
						text : '打印',
						scope : this,
						iconCls : 'icon-printer',
						handler : this.onPrint
					}, '-', {
						text : '打印五星',
						scope : this,
						iconCls : 'icon-printer',
						handler : this.onPrint2
					}, '-', {
						text : '打印效果预览',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						// disabled : (uid != 'KS00610') && (uid != 'KS01313')
						// && (uid != 'KS00524'),
						handler : this.onPreView
					}, '->', {
						text : '查看订单',
						scope : this,
						iconCls : 'icon-application_form_magnify',
						handler : this.onViewOrder
					}],
			selModel : selModel,
			delUrl : '1.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'ifPrint',
						header : '是否可打印',
						sortable : true
					}, {
						dataIndex : 'juanmoBatchNo',
						header : '卷膜序号',
						sortable : true
					}, {
						dataIndex : 'prodBatchNo',
						header : '元件序号',
						sortable : true
					}, {
						dataIndex : 'orderNo',
						header : '订单号',
						sortable : true
					}, {
						dataIndex : 'prodSpecName2',
						header : '订单生产型号',
						sortable : true
					}, {
						dataIndex : 'prodSpecName',
						header : '生产型号',
						sortable : true
					}, {
						dataIndex : 'dryWet',
						header : '订单干/湿膜',
						sortable : true
					}, {
						dataIndex : 'dryWet2',
						header : '生产干/湿膜',
						sortable : true
					}, {
						dataIndex : 'templateName',
						header : '唛头图纸编号',
						sortable : true
					}, {
						dataIndex : 'printCnt',
						header : '打印次数',
						sortable : true
					}, {
						dataIndex : 'maxPrintDate',
						header : '最近打印时间',
						sortable : true
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.component.makprint.queryMarkPrintListByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {},
				fields : [{
							name : 'juanmoBatchId'
						}, {
							name : 'prodBatchNo'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'orderNo'
						}, {
							name : 'juanmoBatchNo'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'prodSpecName2'
						}, {
							name : 'templateName'
						}, {
							name : 'url'
						}, {
							name : 'templateId'
						}, {
							name : 'dryWet'
						}, {
							name : 'dryWet2'
						}, {
							name : 'mark'
						}, {
							name : 'waterBatchId'
						}, {
							name : 'code'
						}, {
							name : 'printCnt'
						}, {
							name : 'ifPrint'
						}, {
							name : 'maxPrintDate'
						}]
			})
		})
	}

	this.initviewOrderWindow = function() {

		var _this = this;		

		this.viewOrderPanel = this.viewOrderPanel || new Ext.fn.EditPanel({
			//height : 400,
			region : 'center',
			baseCls : "x-panel",
			autoHide : false,
			autoScroll : false,
			border : true,
			columns : 3,
			loadUrl : 'com.keensen.ump.produce.component.workorder2.queryViewOrder.biz.ext',
			saveUrl : '1.biz.ext',
			fields : [{
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:16px;">订单信息</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '订单号',
						ref : '../orderNo',
						readOnly : true,
						dataIndex : 'orderNo',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '订单类型',
						ref : '../orderType',
						readOnly : true,
						dataIndex : 'orderType',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '订单下达型号',
						ref : '../materSpecName2',
						readOnly : true,
						dataIndex : 'materSpecName2',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '订单数量',
						ref : '../orderAmount',
						readOnly : true,
						dataIndex : 'orderAmount',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '生产规格型号',
						ref : '../materSpecName',
						readOnly : true,
						dataIndex : 'materSpecName',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '已请检数',
						ref : '../checkNum',
						readOnly : true,
						dataIndex : 'checkNum',
						anchor : '85%',
						colspan : 1
					}, {
							xtype : 'displayfield',
							ref : '../displayfield1',
							height : 5,
							colspan : 3
						}, {
							xtype : 'displayfield',
							ref : '../prodRemark',
							dataIndex : 'prodRemark',
							readOnly : true,
							anchor : '95%',
							fieldLabel : '订单生产备注',
							colspan : 3
						}, {
						xtype : 'displayfield',
						fieldLabel : '<p style="color:red;font-size:16px;">贴标信息</p>',
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '卷膜胶带',
						ref : '../tape',
						readOnly : true,
						dataIndex : 'tape',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '端盖',
						ref : '../lid',
						readOnly : true,
						dataIndex : 'lid',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '序列号是否固定',
						ref : '../snRegular',
						readOnly : true,
						dataIndex : 'snRegular',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '标签制作方式',
						ref : '../makeLabel',
						readOnly : true,
						dataIndex : 'makeLabel',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '双标签',
						ref : '../labelDouble',
						readOnly : true,
						dataIndex : 'labelDouble',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '标签图纸',
						ref : '../picturePanel',
						height : '60',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '唛头编号',
						ref : '../markDrawingCode',
						readOnly : true,
						dataIndex : 'markDrawingCode',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '第二唛头编号',
						ref : '../markDrawingCode2',
						readOnly : true,
						dataIndex : 'markDrawingCode2',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : '唛头图纸',
						ref : '../picturePanel4firsrMarkUrl',
						height : '60',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : '第二唛头图纸',
						ref : '../picturePanel4secondMarkUrl',
						height : '60',
						anchor : '100%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : ' 需要标准拍照',
						ref : '../ifphoto',
						readOnly : true,
						dataIndex : 'ifphoto',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : ' 真空包装袋型号',
						ref : '../bag',
						readOnly : true,
						dataIndex : 'bag',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : ' 真空包装袋<br>图纸编号',
						ref : '../bagDrawingCode',
						readOnly : true,
						dataIndex : 'bagDrawingCode',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : ' 包装箱型号',
						ref : '../box',
						readOnly : true,
						dataIndex : 'box',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : ' 装箱支数要求',
						ref : '../packingNum',
						readOnly : true,
						dataIndex : 'packingNum',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : ' 中芯管打磨',
						ref : '../ifpolish',
						readOnly : true,
						dataIndex : 'ifpolish',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						height : 5,
						labelSeparator : '',// 去掉冒号
						colspan : 3
					}, {
						xtype : 'displayfield',
						fieldLabel : ' 托盘材质',
						ref : '../tray',
						readOnly : true,
						dataIndex : 'tray',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : ' 托盘尺寸',
						ref : '../traySize',
						readOnly : true,
						dataIndex : 'traySize',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'displayfield',
						fieldLabel : ' 打包层数',
						ref : '../packingLayer',
						readOnly : true,
						dataIndex : 'packingLayer',
						anchor : '85%',
						colspan : 1
					}, {
						xtype : 'hidden',
						name : 'labelUrl',
						dataIndex : 'labelUrl'

					}, {
						xtype : 'hidden',
						name : 'firsrMarkUrl',
						dataIndex : 'firsrMarkUrl'

					}, {
						xtype : 'hidden',
						name : 'secondMarkUrl',
						dataIndex : 'secondMarkUrl'

					}],
			buttons : [{
						text : "关闭",
						scope : this,
						handler : function() {
							this.viewOrderWindow.hide();
						}
					}]

		})

		this.viewOrderWindow = this.viewOrderWindow || new Ext.Window({
					title : '订单信息',
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : false,
					modal : true,
					width : 1024,
					height : 600,
					layout : 'border',
					items : [this.viewOrderPanel]

				});

	}
}