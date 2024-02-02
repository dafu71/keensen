com.keensen.ump.produce.diaphragm.make.report.tmMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					title : '涂膜不良',
					layout : 'ns',
					border : false,
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
					title : '【涂膜不良查询】',
					fields : [{
						xtype : "dateregion",
						anchor : '100%',
						allowBlank : false,
						colspan : 1,
						nameArray : ['condition/productDtStart',
								'condition/productDtEnd'],
						fieldLabel : "生产日期",
						format : "Y-m-d"
					}]
				});
		this.queryPanel.addButton({
					text : "导出",
					scope : this,
					iconCls : 'icon-application_excel',
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
			title : '【涂膜不良列表】',
			viewConfig : {
				forceFit : false
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
						header : '长度'
					}, {
						dataIndex : 'usefulLength',
						header : '可用长度'
					}, {
						dataIndex : 'qualifidLength',
						header : '合格长度'
					}, {
						dataIndex : 'd01',
						header : 'D1-涂膜折痕'
					}, {
						dataIndex : 'd03',
						header : 'D3-成膜不良'
					}, {
						dataIndex : 'd04',
						header : 'D4-膜片擦伤'
					}, {
						dataIndex : 'd05',
						header : 'D5-膜片脏污'
					}, {
						dataIndex : 'd07',
						header : 'D7-亮条纹'
					}, {
						dataIndex : 'd15',
						header : 'D15-涂膜其他'
					}, {
						dataIndex : 'd14',
						header : 'D14-转家用待处理'
					}, {
						dataIndex : 'd10',
						header : 'D10-常规取样'
					}, {
						dataIndex : 'd11',
						header : 'D11-涂膜换卷'
					}, {
						dataIndex : 'd09',
						header : 'D9-工艺取样'
					}, {
						dataIndex : 'd13',
						header : 'D13-裁切损耗'
					}, {
						dataIndex : 'c09',
						header : 'C9-末尾取样'
					}, {
						dataIndex : 'c10',
						header : 'C10-底膜剩余'
					}, {
						dataIndex : 'c11',
						header : 'C11-换卷裁切'
					}, {
						dataIndex : 'c12',
						header : 'C12-涂膜设备不良'
					}, {
						dataIndex : 'c01',
						header : 'C1-涂膜折痕'
					}, {
						dataIndex : 'c03',
						header : 'C3-成膜不良'
					}, {
						dataIndex : 'c04',
						header : 'C4-膜片擦伤'
					}, {
						dataIndex : 'c05',
						header : 'C5-膜片脏污'
					}, {
						dataIndex : 'c06',
						header : 'C6-亮条纹'
					}, {
						dataIndex : 'c08',
						header : 'C8-工艺取样'
					}, {
						dataIndex : 'c02',
						header : 'C2-膜片反绕'
					}, {
						dataIndex : 'c07',
						header : 'C7-膜片粘坏'
					}, {
						dataIndex : 'c13',
						header : 'C13-涂膜其他'
					}, {
						dataIndex : 'd02',
						header : 'D2-膜片反绕'
					}, {
						dataIndex : 'd06',
						header : 'D6-膜片变色'
					}, {
						dataIndex : 'd08',
						header : 'D8-膜片粘坏'
					}, {
						dataIndex : 'd12',
						header : 'D12-换卷裁切'
					}, {
						dataIndex : 'total',
						header : '合计'
					}, {
						dataIndex : 'poor',
						header : '不良率'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.make.report.queryTmPoorByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'd01'
						}, {
							name : 'd03'
						}, {
							name : 'd04'
						}, {
							name : 'd05'
						}, {
							name : 'd07'
						}, {
							name : 'd15'
						}, {
							name : 'd14'
						}, {
							name : 'd10'
						}, {
							name : 'd11'
						}, {
							name : 'd09'
						}, {
							name : 'd13'
						}, {
							name : 'c09'
						}, {
							name : 'c10'
						}, {
							name : 'c11'
						}, {
							name : 'c12'
						}, {
							name : 'c01'
						}, {
							name : 'c03'
						}, {
							name : 'c04'
						}, {
							name : 'c05'
						}, {
							name : 'c06'
						}, {
							name : 'c08'
						}, {
							name : 'c02'
						}, {
							name : 'c07'
						}, {
							name : 'c13'
						}, {
							name : 'd02'
						}, {
							name : 'd06'
						}, {
							name : 'd08'
						}, {
							name : 'd12'
						}, {
							name : 'teamId'
						}, {
							name : 'teamName'
						}, {
							name : 'total'
						}, {
							name : 'poor'
						}, {
							name : 'outLength'
						}, {
							name : 'usefulLength'
						}, {
							name : 'qualifidLength'
						}

				]
			})
		})
	}

}