com.keensen.ump.produce.quality.diamstandMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'diamstandmgr',
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
					title : '【白膜直径质检标准查询】',
					fields : [{
								xtype : 'prodspeccombobox',
								hiddenName : 'condition/materSpecId',
								anchor : '50%',
								fieldLabel : '元件型号 ',
								typeAhead : true,
								typeAheadDelay : 100,
								minChars : 1,
								queryMode : 'local',
								lastQuery : '',
								editable : true,
								listeners : {
									'specialkey' : function() {
										return false;
									}
								}
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
			title : '【白膜直径质检标准列表】',
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
			delUrl : 'com.keensen.ump.produce.quality.quality.deleteDiamStand.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'materSpecName',
						header : '元件型号'
					}, {
						dataIndex : 'stand',
						header : '检测标准'
					}, {
						dataIndex : 'toplimit',
						header : '上限'
					}, {
						dataIndex : 'bottomlimit',
						header : '下限'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality.queryDiamStandByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
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
							name : 'materSpecId'
						}, {
							name : 'materSpecName'
						}, {
							name : 'stand'
						}, {
							name : 'toplimit'
						}, {
							name : 'bottomlimit'
						}]
			})
		})
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '新增白膜直径质检标准',
			height : 600,
			width : 800,
			// itemCls:'required',
			// style:'margin-top:10px',
			resizable : true,
			minimizable : false,
			maximizable : true,
			items : [{
				xtype : 'inputpanel',
				pgrid : this.listPanel,
				columns : 1,
				saveUrl : 'com.keensen.ump.produce.quality.quality.saveDiamStand.biz.ext',
				fields : [{
							xtype : 'prodspeccombobox',
							allowBlank : false,
							hiddenName : 'entity/materSpecId',
							name : 'entity/materSpecId',
							fieldLabel : '元件型号',
							anchor : '95%',
							colspan : 1,
							typeAhead : true,
							typeAheadDelay : 100,
							minChars : 1,
							queryMode : 'local',
							lastQuery : '',
							editable : true,
							listeners : {
								'specialkey' : function() {
									return false;
								}
							}
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/stand',
							allowBlank : false,
							fieldLabel : '检测标准',
							anchor : '95%',
							colspan : 1,
							regex : /^\d+(\±\d+)?mm$/,
							regexText : '格式为数字加上正负号加上数字及mm，请检查...'
						}]
			}]
		});
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改白膜直径质检标准',
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
				loadUrl : 'com.keensen.ump.produce.quality.quality.expandDiamStandEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.quality.saveDiamStand.biz.ext',
				fields : [{
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/materSpecId',
							name : 'entity/materSpecId',
							fieldLabel : '元件型号',
							dataIndex : 'materSpecId',
							allowBlank : false,
							readOnly : true,
							anchor : '95%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'entity/stand',
							dataIndex : 'stand',
							fieldLabel : '检测标准',
							allowBlank : false,
							anchor : '95%',
							colspan : 1,
							regex : /^\d+(\±\d+)?mm$/,
							regexText : '格式为数字加上正负号加上数字及mm，请检查...'
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}]
			}]
		});
	}

}