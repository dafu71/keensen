com.keensen.ump.qinsen.produce.defectWinMgr = function(dutyTacheCode) {
	this.initPanel = function() {
		this.initInputWindow();
		this.initEditWindow();
	}

	this.initInputWindow = function() {
		var _this = this;
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
					height : 100,
					region : 'north',
					baseCls : "x-panel",
					pgrid : '',
					columns : 1,
					autoHide : false,
					border : true,
					saveUrl : '....biz.ext',
					fields : [{
								xtype : 'textfield',
								readOnly : true,
								name : 'tumoBatchNo',
								ref : '../tumoBatchNo',
								fieldLabel : '膜片批次'
							}, {
								xtype : 'datefield',
								ref : '../produceDt',
								name : 'produceDt',
								allowBlank : false,
								fieldLabel : '不良产生日期',
								format : "Y-m-d"
							}, {
								xtype : 'textarea',
								ref : '../remark',
								name : 'remark',
								allowBlank : true,
								fieldLabel : '备注'
							}]

				})
		alert(55);
		var selModel = new Ext.grid.CheckboxSelectionModel({
			singleSelect : false
				// header : ''
			});

		this.listPanel = this.listPanel || new Ext.fn.EditListPanel({
			title : '涂膜不良列表',
			region : 'center',
			viewConfig : {
				forceFit : true
			},
			hsPage : false,
			clicksToEdit : 1,
			tbar : [],
			selModel : selModel,
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'defectName',
						header : '不良项目'
					}, {
						dataIndex : 'loss',
						header : '损失(m)',
						width : 70,
						sortable : true,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									allowNegative : false,
									allowDecimals : true,
									minValue : 0,
									listeners : {
										'specialkey' : function() {
											return false;
										}
									}
								}))
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.ump.qinsen.inst.queryCdmDefectItemList.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : '',
				baseParams : {
					//'condition/dutyTacheCode' : dutyTacheCode
				},
				fields : [{
							name : 'recordId'
						}, {
							name : 'defectName'
						}]
			})
		})

		this.inputWindow = this.inputWindow || new Ext.Window({
					title : "新增不良",
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					modal : true,
					width : 800,
					height : 600,
					// layout : 'form',
					layout : 'border',
					items : [this.inputPanel, this.listPanel],
					buttons : [{
								text : "确定",
								scope : this,
								handler : this.onSave
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.inputPanel.form.reset();
									this.inputWindow.hide();
								}
							}]

				});

	}

	this.initEditWindow = function() {
		var _this = this;
	}
}