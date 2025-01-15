com.keensen.ump.base.materClassSpecMgr.prototype.initEvent = function() {

	var _this = this;
	this.materTree.mon(this.materTree, 'click', function(node) {
				// alert('node.text=' + node.text + ',node.id=' + node.id)
				var store = this.listPanel.store;
				this.materClassId = node.id;

				this.queryPanel.materClassId.setValue(this.materClassId);

				store.load({
							params : {
								"condition/materClassId" : node.id
							}
						});
			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var materClassId = cell.get('materClassId');
				switch (materClassId) {
					case 25519 :// 膜片
					case 100030022 :// 膜片SW系列
					case 100030023 :// 膜片BW系列
					case 100030024 :// 膜片ULP系列
					case 100030025 :// 膜片NF系列
						this.editWindow2.show();
						this.editWindow2.loadData(cell);
						break;
					break;
				case 100030027 :// 工业膜元件
					this.editWindow3.show();
					this.editWindow3.loadData(cell);
					break;
				default :
					this.editWindow.show();
					this.editWindow.loadData(cell);
			}
			}, this);

	this.inputWindow.activeItem.mon(this.inputWindow.activeItem, 'afterSave',
			function() {
				var store = this.listPanel.store;
				store.load({
							params : {
								"condition/materClassId" : _this.materClassId
							}
						});
			}, this);

	this.inputWindow2.activeItem.mon(this.inputWindow2.activeItem, 'afterSave',
			function() {
				var store = this.listPanel.store;
				store.load({
							params : {
								"condition/materClassId" : _this.materClassId
							}
						});
			}, this);

	this.inputWindow3.activeItem.mon(this.inputWindow3.activeItem, 'afterSave',
			function() {
				var store = this.listPanel.store;
				store.load({
							params : {
								"condition/materClassId" : _this.materClassId
							}
						});
			}, this);

	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function() {
				var store = this.listPanel.store;
				store.load({
							params : {
								"condition/materClassId" : _this.materClassId
							}
						});
			}, this);

	this.editWindow2.activeItem.mon(this.editWindow2.activeItem, 'afterSave',
			function() {
				var store = this.listPanel.store;
				store.load({
							params : {
								"condition/materClassId" : _this.materClassId
							}
						});
			}, this);

	this.editWindow3.activeItem.mon(this.editWindow3.activeItem, 'afterSave',
			function() {
				var store = this.listPanel.store;
				store.load({
							params : {
								"condition/materClassId" : _this.materClassId
							}
						});
			}, this);

	this.listPanel.store.on('load', function() {
				var myGrid = _this.listPanel;
				var obj = {
					materSpecId : 2,
					materSpecCode : 3,
					materSpecName : 4,
					mpBatchCode : 5,
					qtJudgeFlag : 6,
					numPerWad : 7,
					blankingSize : 8,
					denseNet : 9,
					area : 10,
					pageWidth : 11,
					stateName : 12,
					measurementUnitName : 13,
					safetyStock : 14
				};
				// myGrid.getColumnModel().setHidden(i,true);方式动态显示列/隐藏列
				// return;
				switch (_this.materClassId) {
					case 25519 :// 膜片
					case 100030022 :// 膜片SW系列
					case 100030023 :// 膜片BW系列
					case 100030024 :// 膜片ULP系列
					case 100030025 :// 膜片NF系列
						myGrid.getColumnModel().setHidden(obj.mpBatchCode,
								false);
						myGrid.getColumnModel().setHidden(obj.qtJudgeFlag,
								false);
						myGrid.getColumnModel().setHidden(obj.numPerWad, true);
						myGrid.getColumnModel().setHidden(obj.blankingSize,
								true);
						myGrid.getColumnModel().setHidden(obj.denseNet, true);
						myGrid.getColumnModel().setHidden(obj.area, true);
						myGrid.getColumnModel().setHidden(obj.pageWidth, true);
						break;
					case 100030027 :// 工业膜元件
						myGrid.getColumnModel()
								.setHidden(obj.mpBatchCode, true);
						myGrid.getColumnModel()
								.setHidden(obj.qtJudgeFlag, true);
						myGrid.getColumnModel().setHidden(obj.numPerWad, false);
						myGrid.getColumnModel().setHidden(obj.blankingSize,
								false);
						myGrid.getColumnModel().setHidden(obj.denseNet, false);
						myGrid.getColumnModel().setHidden(obj.area, false);
						myGrid.getColumnModel().setHidden(obj.pageWidth, false);
						break;
					default :

						myGrid.getColumnModel()
								.setHidden(obj.mpBatchCode, true);
						myGrid.getColumnModel()
								.setHidden(obj.qtJudgeFlag, true);
						myGrid.getColumnModel().setHidden(obj.numPerWad, true);
						myGrid.getColumnModel().setHidden(obj.blankingSize,
								true);
						myGrid.getColumnModel().setHidden(obj.denseNet, true);
						myGrid.getColumnModel().setHidden(obj.area, true);
						myGrid.getColumnModel().setHidden(obj.pageWidth, true);
				}
			})
}

com.keensen.ump.base.materClassSpecMgr.prototype.onAdd = function() {
	if (Ext.isEmpty(this.materClassId)) {
		Ext.Msg.alert("系统提示", "请选择一个树节点以在其下添加物料规格！");
		return;
	}

	var _this = this;
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.base.mater.getNewMaterSpecCode.biz.ext",
		method : "post",
		jsonData : {
			'condition/materClassId' : this.materClassId
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var materSpecCode = ret.data.materSpecCode;
				switch (_this.materClassId) {
					case 25519 :// 膜片
					case 100030022 :// 膜片SW系列
					case 100030023 :// 膜片BW系列
					case 100030024 :// 膜片ULP系列
					case 100030025 :// 膜片NF系列
						_this.inputWindow2.materSpecCode
								.setValue(materSpecCode);
						_this.inputWindow2.materClassId
								.setValue(_this.materClassId);
						_this.inputWindow2.show();
						break;
					break;
				case 100030027 :// 工业膜元件
					_this.inputWindow3.materSpecCode.setValue(materSpecCode);
					_this.inputWindow3.materClassId
							.setValue(_this.materClassId);
					_this.inputWindow3.show();
					break;
				default :
					_this.inputWindow.materSpecCode.setValue(materSpecCode);
					_this.inputWindow.materClassId.setValue(_this.materClassId);
					_this.inputWindow.show();
			}
		}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})

}

com.keensen.ump.base.materClassSpecMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}

com.keensen.ump.base.materClassSpecMgr.prototype.onExport = function() {
	var materClassId = this.queryPanel.materClassId.getValue();
	if (!Ext.isEmpty(materClassId)) {
		this.queryWindow.show();
		doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '常规物料',
				'com.keensen.ump.base.mater.queryMaterSpecList', '0,1');
		this.queryWindow.hide();
	}

}

com.keensen.ump.base.materClassSpecMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.editWindow2.destroy();
	this.inputWindow2.destroy();
	this.editWindow3.destroy();
	this.inputWindow3.destroy();
}