com.keensen.ump.produce.quality.mptest.thickMgr.prototype.initEvent = function() {
	var _this = this;
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	this.editPanel.mon(this.editPanel, 'afterload', function() {
				var relationId = this.editPanel.form.findField('id').getValue();
				var store = _this.listPanel3.store;
				store.baseParams = {
					'condition/relationId' : relationId
				};
				store.load({});
			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				this.editWindow.show();
				this.editPanel.loadData(cell);

			}, this);
}

com.keensen.ump.produce.quality.mptest.thickMgr.prototype.onAdd = function() {
	this.thickListStore.removeAll();
	for (var i = 0; i < 2; i++) {
		arr = ['无纺布', '底膜']
		var r = new Ext.data.Record({
					itype : arr[i],
					thick1 : '0',
					thick2 : '0',
					thick3 : '0',
					thick4 : '0',
					thick5 : '0',
					thick6 : '0',
					thick7 : '0',
					thick8 : '0',
					thick9 : '0',
					thick10 : '0'
				})
		this.thickListStore.add(r);
	}

	this.inputPanel.form.reset();
	this.inputWindow.show();

}

com.keensen.ump.produce.quality.mptest.thickMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
}

com.keensen.ump.produce.quality.mptest.thickMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.produce.quality.mptest.thickMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.mptest.thickMgr.prototype.onSave = function() {
	var _this = this;
	var records = this.thickListStore.getRange();
	
	var datas = [];
	Ext.each(records, function(r) {
				datas.push(r.data);
			});

	if (this.inputPanel.form.isValid()) {
		_this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.quality.mptest3.saveThick.biz.ext",
			method : "post",
			jsonData : {
				'entity' : this.inputPanel.form.getValues(),
				'list' : datas
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					Ext.Msg.alert("系统提示", "保存成功！", function() {
						_this.inputWindow.hide();
						var store = _this.listPanel.store;
						store.baseParams = _this.queryPanel.form.getValues();
						store.load({
							params : {
								"pageCond/begin" : 0,
								"pageCond/length" : _this.listPanel.pagingToolbar.pageSize
							}
						});
					});
				}
			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
};

com.keensen.ump.produce.quality.mptest.thickMgr.prototype.onSave2 = function() {
	var _this = this;
	var records = this.thickListStore.getRange();
	
	var datas = [];
	Ext.each(records, function(r) {
				datas.push(r.data);
			});

	if (this.editPanel.form.isValid()) {
		_this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.quality.mptest3.modifyThick.biz.ext",
			method : "post",
			jsonData : {
				'entity' : this.editPanel.form.getValues(),
				'list' : datas
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					Ext.Msg.alert("系统提示", "保存成功！", function() {
						_this.editWindow.hide();
						var store = _this.listPanel.store;
						store.baseParams = _this.queryPanel.form.getValues();
						store.load({
							params : {
								"pageCond/begin" : 0,
								"pageCond/length" : _this.listPanel.pagingToolbar.pageSize
							}
						});
					});
				}
			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
};

com.keensen.ump.produce.quality.mptest.thickMgr.prototype.onView = function() {

	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			this.viewWindow.show();
			var store = this.listPanel6.store;
			if (Ext.isEmpty(A.data.id))
				return;
			store.load({
						params : {
							'condition/relationId' : A.data.id
						}
					});
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.keensen.ump.produce.quality.mptest.thickMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			namingsql : 'com.keensen.ump.produce.quality.mptest3.queryThickList',
			templateFilename : 'ks_mp_mptest_thick'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {

				var fname = ret.fname;
				if (Ext.isIE) {
					window.open('/default/deliverynote/seek/down4IE.jsp?fname='
							+ fname);
				} else {
					window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
							+ fname;
				}

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}