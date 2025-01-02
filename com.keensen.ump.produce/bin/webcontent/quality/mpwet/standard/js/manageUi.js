com.keensen.ump.produce.quality.mpwetstandMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'mpwetstandmgr',
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
					//title : '【膜片湿含量质检标准查询】',
					fields : [{
								xtype : 'textfield',
								name : 'condition/materSpecCode',
								anchor : '50%',
								fieldLabel : '膜片类型'

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
			//title : '【膜片湿含量质检标准列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}],
			selModel : selModel,
			delUrl : '111.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'materClassCode',
						header : '膜片类型'
					}, {
						dataIndex : 'waterContent',
						header : '含水量'
					}, {
						dataIndex : 'waterFlux',
						header : '水通量'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.quality2.queryMpWetStandByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'id'
						}, {
							name : 'materClassId'
						}, {
							name : 'waterContent'
						}, {
							name : 'waterFlux'
						}, {
							name : 'materClassCode'
						}]
			})
		})
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '修改膜片湿含量检标准',
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
				loadUrl : 'com.keensen.ump.produce.quality.quality2.expandMpWetStandEntity.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.quality2.saveMpWetStand.biz.ext',
				fields : [{
							xtype : 'textfield',
							fieldLabel : '膜片类型',
							dataIndex : 'materClassCode',
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