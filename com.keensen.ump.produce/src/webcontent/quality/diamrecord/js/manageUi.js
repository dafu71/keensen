com.keensen.ump.produce.quality.diamrecordMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initEditWindow();

		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'diamrecordmgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 150,
					columns : 3,
					border : true,
					// collapsible : true,
					titleCollapse : false,
					title : '【白膜直径检测记录查询】',
					fields : [{
						xtype : "dateregion",
						colspan : 1,
						anchor : '95%',
						nameArray : ['condition/produceDtStart',
								'condition/produceDtEnd'],
						fieldLabel : "生产日期",
						format : "Y-m-d"
					}, {
						xtype : 'prodspeccombobox',
						hiddenName : 'condition/materSpecId',
						anchor : '75%',
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
					}, {
						xtype : 'linecombobox',
						prodTacheId : '102',
						hiddenName : 'condition/lineId',
						anchor : '75%',
						fieldLabel : '生产线 ',
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
						colspan : 3
					}, {
						xtype : 'textfield',
						name : 'condition/workerName',
						anchor : '75%',
						fieldLabel : '操作工'
					}, {
						xtype : 'textfield',
						name : 'condition/orderNo',
						anchor : '75%',
						fieldLabel : '订单号'
					}, {
						xtype : 'textfield',
						name : 'condition/tumoBatchStr',
						anchor : '75%',
						fieldLabel : '膜片批次'
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
			title : '【白膜直径检测记录列表】',
			viewConfig : {
				forceFit : true
			},
			hsPage : true,
			tbar : [{
						text : '直径检测',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}],
			selModel : selModel,
			delUrl : 'abc.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'batchNo',
						header : '卷膜序号'
					}, {
						dataIndex : 'produceDt',
						header : '生产时间'
					}, {
						dataIndex : 'prodSpecName',
						header : '元件规格'
					}, {
						dataIndex : 'lineCode',
						header : '生产线'
					}, {
						dataIndex : 'orderNo',
						header : '订单号'
					}, {
						dataIndex : 'tumoBatchStr',
						header : '膜片批次'
					}, {
						dataIndex : 'teamName',
						header : '班组'
					}, {
						dataIndex : 'workerName',
						header : '操作工'
					}, {
						dataIndex : 'stand',
						header : '直径标准'
					}, {
						dataIndex : 'leftDiam',
						header : '直径数据'
					}, {
						dataIndex : 'rightDiam',
						header : '直径数据（右）'
					}, {
						dataIndex : 'flag',
						header : '单品判定',
						renderer : function(v, m, r, i) {
							var leftDiam = r.get('leftDiam');
							var rightDiam = r.get('rightDiam');
							if(Ext.isEmpty(leftDiam) || Ext.isEmpty(rightDiam)){
								return '';
							}
							if(v=='n'){
								var style = "<span style='color:red;text-decoration:none'>";
								return style + '不合格' + '</span>'
							}else{
								return '合格';
							}							
						}
					
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.produce.quality.diamrecord.queryDiamRecordByPage.biz.ext',
				root : 'data',
				autoLoad : true,
				totalProperty : 'totalCount',
				baseParams : {

			}	,
				fields : [{
							name : 'recordId'
						}, {
							name : 'batchNo'
						}, {
							name : 'prodSpecId'
						}, {
							name : 'produceDt'
						}, {
							name : 'prodSpecName'
						}, {
							name : 'lineCode'
						}, {
							name : 'orderNo'
						}, {
							name : 'tumoBatchStr'
						}, {
							name : 'teamName'
						}, {
							name : 'workerName'
						}, {
							name : 'stand'
						}, {
							name : 'leftDiam'
						}, {
							name : 'rightDiam'
						}, {
							name : 'toplimit'
						}, {
							name : 'bottomlimit'
						}, {
							name : 'leftflag'
						}, {
							name : 'rightflag'
						}, {
							name : 'id'
						}, {
							name : 'flag'
						}]
			})
		})
	}

	this.initEditWindow = function() {
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '直径检测',
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
				loadUrl : 'com.keensen.ump.produce.quality.diamrecord.expandDiamRecord.biz.ext',
				saveUrl : 'com.keensen.ump.produce.quality.diamrecord.saveDiamRecord.biz.ext',
				fields : [{
							xtype : 'prodspeccombobox',
							hiddenName : 'entity/prodSpecId',
							name : 'entity/prodSpecId',
							fieldLabel : '元件型号',
							dataIndex : 'prodSpecId',
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
							readOnly : true,
							anchor : '95%',
							colspan : 1,
							regex : /^\d+(\±\d+)?mm$/,
							regexText : '格式为数字加上正负号加上数字及mm，请检查...'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/leftDiam',
							dataIndex : 'leftDiam',
							allowBlank : false,
							colspan : 1,
							anchor : '95%',
							fieldLabel : '直径数据（左）'
						}, {
							xtype : 'displayfield',
							height : '5',
							colspan : 1
						}, {
							xtype : 'numberfield',
							name : 'entity/rightDiam',
							dataIndex : 'rightDiam',
							allowBlank : false,
							colspan : 1,
							anchor : '95%',
							fieldLabel : '直径数据（右）'
						}, {
							xtype : 'hidden',
							name : 'entity/id',
							dataIndex : 'id'
						}, {
							xtype : 'hidden',
							name : 'entity/relationId',
							dataIndex : 'recordId'
						}]
			}]
		});
	}

}