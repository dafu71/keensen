Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.defectWindow
 * @extends Ext.Window
 *          <p>
 *          新增不良弹出窗
 */
function formatTime(date) {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	// 使用模板字符串进行格式化
	return year + '-' + month.toString().padStart(2, '0') + '-'
			+ day.toString().padStart(2, '0') + ' '
			+ hours.toString().padStart(2, '0') + ':'
			+ minutes.toString().padStart(2, '0') + ':'
			+ seconds.toString().padStart(2, '0');
}
com.keensen.ump.defectWindow = Ext.extend(Ext.Window, {
	title : "新增不良",
	resizable : false,
	modal : true,
	maximizable : false,
	closeAction : "close",
	buttonAlign : "center",
	autoScroll : true,
	width : 800,
	height : 600,
	layout : 'border',

	// 自定义属性
	dutyTacheCode : '',// 不良类型：TM、ZM
	recTacheCode : '',// 不良记录类型：TM、CM
	relationListId : null, // 关联的listid

	initComponent : function() {

		this.buildListPanel();

		this.buildInputPanel();

		this.items = [this.listPanel, this.inputPanel];
		this.buttons = [{
			text : "保存",
			scope : this,
			handler : function() {
				var A = this.listPanel;
				var records = A.store.getRange();
				var details = [];
				Ext.each(records, function(r) {
							if (!Ext.isEmpty(r.data['loss'])) {
								var d = {
									'defectItemId' : r.data['recordId'],
									'loss' : r.data['loss']
								}
								details.push(d);
							}

						});

				if (details.length == 0) {
					Ext.Msg.alert("系统提示", "没有填写任何不良损失，请检查");
					return;
				} else {
					if (!this.inputPanel.form.isValid()) {
						return;
					}
					var _this = this;
					var tumoBatchNo = this.inputPanel.form
							.findField('tumoBatchNo').getValue();
					var tumoRecordId = this.inputPanel.form
							.findField('tumoRecordId').getValue();
					var produceDt = this.inputPanel.form.findField('produceDt')
							.getValue();

					produceDt = formatTime(produceDt);

					var remark = this.inputPanel.form.findField('remark')
							.getValue();

					if (Ext.isEmpty(tumoRecordId)) {
						Ext.Msg.alert("系统提示", "请先校验涂膜批号");
						return;
					}
					var mk = new Ext.LoadMask(this.id, {
								msg : '正在保存，请稍候!',
								removeMask : true
							});
					mk.show();

					var saveUrl = 'com.keensen.ump.qinsen.quality.saveCdmDefect.biz.ext';

					if (this.dutyTacheCode == 'ZM' && this.recTacheCode == 'ZM') {
						saveUrl = 'com.keensen.ump.qinsen.quality.saveZmDefect.biz.ext';
					}
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : saveUrl,
						jsonData : {
							"details" : details,
							"map/tumoBatchNo" : tumoBatchNo,
							"map/produceDt" : produceDt,
							"map/remark" : remark,
							"map/tumoRecordId" : tumoRecordId
						},
						success : function(response, action) {
							mk.hide();
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.success) {
								Ext.Msg.alert("系统提示", "保存成功!", function() {
											_this.hide();
											// _this.listPanel.store.removeAll();
											_this.listPanel.store.reload({});
											_this.inputPanel.form.reset();
											if (!Ext
													.isEmpty(_this.relationListId)) {
												Ext
														.getCmp(_this.relationListId).store
														.reload({});
											}

										}, _this);
							} else {
								Ext.Msg.alert("系统提示", "保存失败!", function() {
											_this.hide();
											// _this.listPanel.store.removeAll();
											_this.listPanel.store.reload({});
											_this.inputPanel.form.reset();
										}, _this);
							}

						},
						failure : function(resp, opts) {
							mk.hide();
						}
					});

				}
			}
		}, {
			text : "关闭",
			scope : this,
			handler : function() {
				this.hide();
				this.listPanel.store.reload();
				this.inputPanel.form.reset();
			}
		}];
		com.keensen.ump.defectWindow.superclass.initComponent.call(this);
	},
	buildListPanel : function() {
		var title = this.dutyTacheCode == 'TM'
				? '【 涂膜不良列表 】'
				: this.dutyTacheCode == 'ZM' ? '【 铸膜不良列表 】' : '【 发货不良列表 】';
		var dutyTacheCode = this.dutyTacheCode;
		var recTacheCode = this.recTacheCode;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.EditListPanel({
			region : 'center',
			title : title,
			clicksToEdit : 1,
			hsPage : false,
			selModel : selModel,
			delUrl : '...',
			viewConfig : {
				forceFit : false
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'defectName',
						width : 150,
						header : '不良项目'
					}, {
						dataIndex : 'loss',
						header : '损失(m)',
						width : 70,
						sortable : true,
						css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : true,
									scope : this,
									allowNegative : false,
									allowDecimals : true,
									minValue : 0,
									maxValue : 999.9,
									listeners : {
										'specialkey' : function() {
											return false;
										}
									}
								}))
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.qinsen.inst.queryCdmDefectItemList.biz.ext',
				root : 'data',
				autoLoad : true,
				fields : [{
							name : 'recordId'
						}, {
							name : 'defectName'
						}],
				baseParams : {
					'condition/dutyTacheCode' : dutyTacheCode,
					'condition/recTacheCode' : recTacheCode,
					'condition/state' : 'A'
				},
				listeners : {
					scope : this,
					'load' : function() {

					}

				}
			})
		});
	},
	buildInputPanel : function() {
		var _this = this;

		var fieldLabel = '膜片批次';

		if (this.dutyTacheCode == 'ZM' && this.recTacheCode == 'ZM') {
			fieldLabel = '底膜批次';
		}

		this.inputPanel = new Ext.fn.InputPanel({
			ref : '../inputPanel',
			height : 120,
			pgrid : '',
			region : 'south',
			// baseCls:'',
			columns : 2,
			autoHide : false,
			border : true,
			saveUrl : '....biz.ext',
			fields : [{
				xtype : 'textfield',
				anchor : '95%',
				allowBlank : false,
				name : 'tumoBatchNo',
				ref : '../tumoBatchNo',
				fieldLabel : fieldLabel,
				listeners : {
					scope : this,
					specialkey : function(C, D) {
						if (D.getKey() == Ext.EventObject.ENTER) {

							var queryUrl = 'com.keensen.ump.qinsen.inst.queryTmRecordIdByBatchNo.biz.ext';
							if (this.dutyTacheCode == 'ZM'
									&& this.recTacheCode == 'ZM') {
								queryUrl = 'com.keensen.ump.qinsen.inst.queryZmRecordIdByBatchNo.biz.ext';
							}

							var obj = this.inputPanel.tumoBatchNo;
							var batchNo = obj.getValue();
							if (Ext.isEmpty(batchNo)) {
								Ext.Msg.alert("系统提示", "请输入批号！");
								return;
							}
							Ext.Ajax.request({
										method : "post",
										scope : this,
										url : queryUrl,
										jsonData : {
											"map/batchNo" : batchNo
										},
										success : function(response, action) {
											var result = Ext
													.decode(response.responseText);
											var recordId = result.recordId;
											if (Ext.isEmpty(recordId)) {
												Ext.Msg.alert("系统提示",
														'膜片批次不存在，请检查！');
											} else {
												_this.inputPanel.tumoRecordId
														.setValue(recordId);
												_this.inputPanel.produceDt
														.focus();

											}
										}
									});
						}

					}
				}
			}, {
				xtype : 'datetimefield',
				anchor : '95%',
				ref : '../produceDt',
				name : 'produceDt',
				allowBlank : false,
				fieldLabel : '不良产生时间',
				format : "Y-m-d H:i:00",
				value : new Date(),
				maxValue : new Date() + 1
			}, {
				xtype : 'displayfield',
				fieldLabel : ' ',
				value : Ext.isEmpty(this.relationListId)
						? ''
						: '<p style="color:red;">光标置于此框内后扫码，或手工录入后按回车键</p>',
				labelSeparator : '',// 去掉冒号
				colspan : 2
			}, {
				xtype : 'textarea',
				anchor : '95%',
				colspan : 2,
				ref : '../remark',
				name : 'remark',
				allowBlank : true,
				fieldLabel : '备注'
			}, {
				xtype : 'hidden',
				name : 'tumoRecordId',
				ref : '../tumoRecordId'
			}]

		})
	}

})