com.keensen.ump.produce.quality.mpwetrecordMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'mpwetrecordmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 120,
					columns : 1,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					//title : '【膜片湿含量检测记录查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/batchNo',
								anchor : '50%',
								fieldLabel : '底膜批号'

							}]
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			//title : '【膜片湿含量检测记录列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '新增',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}, '-', {
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler : this.onDel
					}],
			selModel : selModel,
			delUrl : 'com.keensen.ump.produce.quality.quality2.deleteMpWetRecord.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'createTime',
						header : '日期'
					}, {
						dataIndex : 'batchNo',
						header : '底膜批号'
					}, {
						dataIndex : 'waterContent',
						header : '含水量'
					}, {
						dataIndex : 'waterFlux',
						header : '水通量'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality2.queryMpWetRecordByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
						}, {
							name : 'batchNo'
						}, {
							name : 'waterContent'
						}, {
							name : 'waterFlux'
						}, {
							name : 'createTime'
						}]
			})
		})
	}
	
	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增膜片湿含量检测记录',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'inputpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.quality.quality2.saveMpWetRecord.biz.ext',
				fields : [{
							xtype : 'textfield',
							fieldLabel : '底膜批号',
							name : 'entity/batchNo',
							allowBlank : false,
							readOnly : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/waterContent',
							fieldLabel : '含水量',
							allowBlank : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/waterFlux',
							fieldLabel : '水通量',
							allowBlank : false,
							anchor : '95%',
							colspan : 1
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改膜片湿含量检测记录',
			height : 600,
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				baseCls : "x-plain",
				pgrid : this.listPanel,
				columns : 1,
				loadUrl : 'com.keensen.ump.produce.quality.quality2.ExpandMpWetRecord.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.quality2.saveMpWetRecord.biz.ext',
				fields : [{
							xtype : 'textfield',
							fieldLabel : '底膜批号',
							name : 'entity/batchNo',
							dataIndex : 'batchNo',
							allowBlank : false,
							readOnly : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/waterContent',
							dataIndex : 'waterContent',
							fieldLabel : '含水量',
							allowBlank : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/waterFlux',
							dataIndex : 'waterFlux',
							fieldLabel : '水通量',
							allowBlank : false,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

}