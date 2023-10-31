com.keensen.ump.produce.diaphragm.make.FixMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();
		this.initEditWindow2();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'makefixmgr',
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
					title : '【铸膜混料记录查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/batchNo',
								fieldLabel : '混料批次'
							}, {
								xtype : 'textfield',
								name : 'condition/fixUsername',
								fieldLabel : '混料人'
							}, {
								xtype : 'textfield',
								name : 'condition/hitUsername',
								fieldLabel : '打料人'
							}, {
								xtype : "dateregion",
								colspan : 1,
								//anchor : '75%',
								nameArray : ['condition/createTimeStart',
										'condition/createTimeEnd'],
								fieldLabel : "记录日期",
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
			title : '【铸膜混料记录列表】',
			hsPage : true,
			tbar : [{
						text : '新增混料',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '混料记录',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '打料记录',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit2
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.diaphragm.make.make.deleteFixEntity.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						header : '混料批次'
					}, {
						dataIndex : 'c11',
						header : 'C11重量'
					}, {
						dataIndex : 'c12',
						header : 'C12重量'
					}, {
						dataIndex : 'fixStarttime',
						header : '混料开始时间'
					}, {
						dataIndex : 'hottime',
						header : '开始加热时间'
					}, {
						dataIndex : 'reachtime',
						header : '料液达到70℃时间'
					}, {
						dataIndex : 'keepDuration',
						header : '保持70-80℃时长'
					}, {
						dataIndex : 'fixUsername',
						header : '混料人'
					}, {
						dataIndex : 'hitStarttime',
						header : '打料开始时间'
					}, {
						dataIndex : 'hitOvertime',
						header : '打料结束时间'
					}, {
						dataIndex : 'loopStarttime',
						header : '内循环开始时间'
					}, {
						dataIndex : 'loopOvertime',
						header : '内循环结束时间'
					}, {
						dataIndex : 'jarNo',
						header : '脱气罐编号'
					}, {
						dataIndex : 'jarVacuum',
						header : '脱气罐 真空度'
					}, {
						dataIndex : 'vacuumDuration',
						header : '真空保持时长'
					}, {
						dataIndex : 'usetime',
						header : '料液使用时间'
					}, {
						dataIndex : 'hitUsername',
						header : '打料人'
					}, {
						dataIndex : 'remark',
						header : '备注'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.diaphragm.make.make.queryFixByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {
			// 'condition/werks' : 3000
				},
				fields : [{
							name : 'id'
						}, {
							name : 'createTime'
						}, {
							name : 'createUserId'
						}, {
							name : 'createName'
						}, {
							name : 'updateTime'
						}, {
							name : 'updateUserId'
						}, {
							name : 'updateName'
						}, {
							name : 'reserve1'
						}, {
							name : 'reserve2'
						}, {
							name : 'reserve3'
						}, {
							name : 'reserve4'
						}, {
							name : 'reserve5'
						}, {
							name : 'orgId'
						}, {
							name : 'status'
						}, {
							name : 'batchNo'
						}, {
							name : 'c11'
						}, {
							name : 'c12'
						}, {
							name : 'fixStarttime'
						}, {
							name : 'hottime'
						}, {
							name : 'reachtime'
						}, {
							name : 'keepDuration'
						}, {
							name : 'fixUserid'
						}, {
							name : 'hitStarttime'
						}, {
							name : 'hitOvertime'
						}, {
							name : 'loopStarttime'
						}, {
							name : 'loopOvertime'
						}, {
							name : 'jarNo'
						}, {
							name : 'jarVacuum'
						}, {
							name : 'vacuumDuration'
						}, {
							name : 'usetime'
						}, {
							name : 'hitUserid'
						}, {
							name : 'remark'
						}, {
							name : 'fixUsername'
						}, {
							name : 'hitUsername'
						}, {
							name : 'diff'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		var _this = this;
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增铸膜混料',
			height : 480,
			width : 600,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 2,
				saveUrl : 'com.keensen.ump.produce.diaphragm.make.make.saveEntity4Fix.biz.ext',
				fields : [{
							xtype : 'textfield',
							allowBlank : false,
							name : 'entity/batchNo',
							fieldLabel : '混料批次',
							anchor : '47%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/c11',
							fieldLabel : 'C11重量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/c12',
							fieldLabel : 'C12重量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datetimefield',
							name : 'entity/fixStarttime',
							fieldLabel : '混料开始时间',
							anchor : '95%',
							format : "Y-m-d H:i:s",
							colspan : 1
						}, {
							xtype : 'datetimefield',
							name : 'entity/hottime',
							fieldLabel : '开始加热时间',
							anchor : '95%',
							format : "Y-m-d H:i:s",
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datetimefield',
							format : "Y-m-d H:i:s",
							name : 'entity/reachtime',
							fieldLabel : '料液达70℃时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/keepDuration',
							fieldLabel : '保持70-80℃时长',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '混料人',
							name : 'entity/fixUsername',
							anchor : '95%',
							colspan : 1

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'entity/remark',
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'hidden',
							name : 'entity/fixUserid'
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '混料记录',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.diaphragm.make.make.expandFixEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.diaphragm.make.make.saveEntity4Fix.biz.ext',
				fields : [{
							xtype : 'textfield',
							allowBlank : false,
							name : 'entity/batchNo',
							dataIndex : 'batchNo',
							fieldLabel : '混料批次',
							anchor : '47%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'numberfield',
							name : 'entity/c11',
							dataIndex : 'c11',
							fieldLabel : 'C11重量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/c12',
							dataIndex : 'c12',
							fieldLabel : 'C12重量',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datetimefield',
							name : 'entity/fixStarttime',
							dataIndex : 'fixStarttime',
							fieldLabel : '混料开始时间',
							anchor : '95%',
							format : "Y-m-d H:i:s",
							colspan : 1
						}, {
							xtype : 'datetimefield',
							name : 'entity/hottime',
							dataIndex : 'hottime',
							fieldLabel : '开始加热时间',
							anchor : '95%',
							format : "Y-m-d H:i:s",
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datetimefield',
							format : "Y-m-d H:i:s",
							name : 'entity/reachtime',
							dataIndex : 'reachtime',
							fieldLabel : '料液达70℃时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/keepDuration',
							dataIndex : 'keepDuration',
							fieldLabel : '保持70-80℃时长',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							readOnly : true,
							fieldLabel : '混料人',
							name : 'entity/fixUsername',
							dataIndex : 'fixUsername',
							anchor : '95%',
							colspan : 1

						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'entity/remark',
							dataIndex : 'remark',
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'hidden',
							dataIndex : 'fixUserid',
							name : 'entity/fixUserid'
						}, {
							xtype : 'hidden',
							dataIndex : 'id',
							name : 'entity/id'
						}]
			}]
		});
	}

	this.initEditWindow2 = function() {
		this.editWindow2 = this.editWindow2 || new Ext.fn.FormWindow({
			title : '打料记录',
			height : 480,
			width : 600,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 2,
				loadUrl : 'com.keensen.ump.produce.diaphragm.make.make.expandFixEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.diaphragm.make.make.saveEntity4Fix.biz.ext',
				fields : [{
							xtype : 'textfield',
							allowBlank : false,
							name : 'entity/batchNo',
							dataIndex : 'batchNo',
							fieldLabel : '混料批次',
							anchor : '47%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datetimefield',
							format : 'Y-m-d H:i:s',
							name : 'entity/hitStarttime',
							dataIndex : 'hitStarttime',
							fieldLabel : '打料开始时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'datetimefield',
							format : 'Y-m-d H:i:s',
							name : 'entity/hitOvertime',
							dataIndex : 'hitOvertime',
							fieldLabel : '打料结束时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'datetimefield',
							format : 'Y-m-d H:i:s',
							name : 'entity/loopStarttime',
							dataIndex : 'loopStarttime',
							fieldLabel : '内循环开始时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'datetimefield',
							format : 'Y-m-d H:i:s',
							name : 'entity/loopOvertime',
							dataIndex : 'loopOvertime',
							fieldLabel : '内循环结束时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/jarNo',
							dataIndex : 'jarNo',
							fieldLabel : '脱气罐编号',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/jarVacuum',
							dataIndex : 'jarVacuum',
							fieldLabel : '脱气罐 真空度',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							name : 'entity/vacuumDuration',
							dataIndex : 'vacuumDuration',
							fieldLabel : '真空保持时长',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'datetimefield',
							format : 'Y-m-d H:i:s',
							name : 'entity/usetime',
							dataIndex : 'usetime',
							fieldLabel : '料液使用时间',
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textfield',
							dataIndex : 'hitUsername',
							name : 'entity/hitUsername',
							readOnly:true,
							fieldLabel : '打料人',
							anchor : '47%',
							colspan : 2
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'entity/remark',
							dataIndex : 'remark',
							fieldLabel : '备注',
							anchor : '95%',
							colspan : 2
						}, {
							xtype : 'hidden',
							dataIndex : 'id',
							name : 'entity/id'
						}, {
							xtype : 'hidden',
							dataIndex : 'hitUserid',
							name : 'entity/hitUserid'
						}]
			}]
		});
	}
}