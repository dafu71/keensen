com.keensen.ump.produce.quality.diaphragmApplyMgr.prototype.initEvent = function() {
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
	
	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				var isJudged = r.data.isJudged;
				var createUserId = r.data.createUserId;

				if (isJudged == 'Y') {
					Ext.Msg.alert('系统提示', '已检记录不能删除');
					return false;
				}
				if (uid != createUserId) {
					Ext.Msg.alert('系统提示', '非本人请检单不能删除');
					return false;
				}
			})

}

com.keensen.ump.produce.quality.diaphragmApplyMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.quality.diaphragmApplyMgr.prototype.onUpdateApplyIsJudged = function() {
	var _this = this;
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在更新操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.quality.apply.updateApplyIsJudged.biz.ext",
		method : "post",
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				Ext.Msg.alert("系统提示", "请检单状态更新成功!", function() {
							_this.listPanel.store.load();

						});
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.produce.quality.diaphragmApplyMgr.prototype.onView = function() {

	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			this.viewWindow.show();
			var store = this.listPanel2.store;
			if (Ext.isEmpty(A.data.id))
				return;
			store.load({
						params : {
							'condition/applyId' : A.data.id
						}
					});
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.keensen.ump.produce.quality.diaphragmApplyMgr.prototype.exportExcel = function() {
	var _this = this;
	var B = this.listPanel2.getSelectionModel().getSelections();
	var arr =[];
	if (B && B.length != 0) {
		
		Ext.each(B, function(r) {
					var recordId = r.data.recordId;
					arr.push(recordId);
				})

	}
	if(arr && arr.length==0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
		return false;
	}

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map/condition/recordIds' : arr.join(','),
			namingsql : 'com.keensen.ump.produce.diaphragm.ship.ship.queryTumoOrigin',
			templateFilename : 'ks_mp_qjd'
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

com.keensen.ump.produce.quality.diaphragmApplyMgr.prototype.onReport = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var r = C[0];
		var id = r.data.id;
		window.open('com.keensen.ump.produce.quality.applyreport.flow?map/id='
				+ id)

	}

}

com.keensen.ump.produce.quality.diaphragmApplyMgr.prototype.exportExcelByPlanNo = function() {
	var planNo = this.queryPanel.planNo.getValue();

	if(Ext.isEmpty(planNo.trim())) {
		Ext.Msg.alert("系统提示", "请输入计划单号!");
		return false;
	}

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map/condition/planNo2' : planNo,
			namingsql : 'com.keensen.ump.produce.diaphragm.ship.ship.queryTumoOrigin',
			templateFilename : 'ks_mp_qjd'
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
