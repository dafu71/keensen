Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.defectZmViewWindow
 * @extends Ext.Window
 *          <p>
 *          不良显示弹出窗
 */
com.keensen.ump.defectZmViewWindow = Ext.extend(Ext.Window, {
	title : "铸膜不良记录",
	resizable : false,
	modal : true,
	maximizable : false,
	closeAction : "hide",
	buttonAlign : "center",
	autoScroll : false,
	width : 800,
	height : 600,
	layout : 'border',

	// 自定义属性
	dmBatchNo : '',// 底膜批次

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
		com.keensen.ump.defectZmViewWindow.superclass.initComponent.call(this);
	},
	buildListPanel : function() {
		var title = '【不良列表 】';
		var dmBatchNo = this.dmBatchNo;
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
						dataIndex : 'dmBatchNo',
						header : '底膜批次'
					}, {
						header : '底膜类型',
						dataIndex : 'dimoType'
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
						header : '收卷位置',
						dataIndex : 'position'
					}, {
						header : '是否已扯',
						dataIndex : 'ifTear'
					}, {
						header : '记录人',
						dataIndex : 'recorder'
					}, {
						header : '不良产生时间',
						dataIndex : 'produceDate'
					}, {
						header : '备注',
						dataIndex : 'remark'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.keensen.ump.qinsen.quality.queryZmDefectByPage.biz.ext',
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
							name : 'dmBatchNo'
						}, {
							name : 'dimoType'
						}, {
							name : 'produceDate'
						}, {
							name : 'ifTear'
						}, {
							name : 'recorder'
						}, {
							name : 'position'
						}],
				baseParams : {
					'condition/dmBatchNo' : Ext.isEmpty(dmBatchNo)?"0":dmBatchNo
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