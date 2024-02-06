Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.defectViewWindow
 * @extends Ext.Window
 *          <p>
 *          不良显示弹出窗
 */
com.keensen.ump.defectViewWindow = Ext.extend(Ext.Window, {
	title : "不良记录",
	resizable : false,
	modal : true,
	maximizable : false,
	closeAction : "close",
	buttonAlign : "center",
	autoScroll : false,
	width : 800,
	height : 600,
	layout : 'border',

	// 自定义属性
	tumoBatchNo : '',// 涂膜批次

	initComponent : function() {
		this.buildListPanel();
		this.items = [this.listPanel];
		this.buttons = [ {
			text : "关闭",
			scope : this,
			handler : function() {
				this.hide();
				//this.listPanel.store.reload();
			}
		}];
		com.keensen.ump.defectViewWindow.superclass.initComponent.call(this);
	},
	buildListPanel : function() {
		var title = '【不良列表 】';
		var tumoBatchNo = this.tumoBatchNo;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			region : 'center',
			title : title,
			hsPage : false,
			selModel : selModel,
			delUrl : '...',
			viewConfig : {
				forceFit : true
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'tumoBatchNo',
						header : '膜片批次'
					}, {
						header : '膜片型号',
						dataIndex : 'mpSpecName'
					}, {
						header : '归属工序',
						dataIndex : 'dutyTacheName'
					}, {
						header : '记录工序',
						dataIndex : 'recTacheName'
					}, {
						header : '不良项目',
						dataIndex : 'defectName'
					}, {
						header : '损失(m)',
						dataIndex : 'loss'
					}, {
						header : '不良产生时间',
						dataIndex : 'produceDate'
					}, {
						header : '备注',
						dataIndex : 'remark'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.qinsen.quality.queryDefectByPage.biz.ext',
				root : 'data',
				autoLoad : false,
				fields : [{
							name : 'recordId'
						}, {
							name : 'tumoBatchId'
						}, {
							name : 'defectItemId'
						}, {
							name : 'loss'
						}, {
							name : 'workerId'
						}, {
							name : 'produceDt'
						}, {
							name : 'createDt'
						}, {
							name : 'changeDt'
						}, {
							name : 'creatorId'
						}, {
							name : 'changerId'
						}, {
							name : 'remark'
						}, {
							name : 'dutyTacheId'
						}, {
							name : 'recTacheId'
						}, {
							name : 'defectName'
						}, {
							name : 'dutyTacheCode'
						}, {
							name : 'dutyTacheName'
						}, {
							name : 'recTacheCode'
						}, {
							name : 'recTacheName'
						}, {
							name : 'tumoBatchNo'
						}, {
							name : 'mpSpecId'
						}, {
							name : 'mpSpecCode'
						}, {
							name : 'mpSpecName'
						}, {
							name : 'produceDate'
						}],
				baseParams : {
					'condition/tumoBatchNo' : Ext.isEmpty(tumoBatchNo)?"0":tumoBatchNo
				},
				listeners : {
					scope : this,
					'load' : function() {

					}

				}
			})
		});
	}

})