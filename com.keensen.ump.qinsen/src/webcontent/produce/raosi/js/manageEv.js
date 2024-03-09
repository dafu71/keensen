com.keensen.ump.qinsen.produce.raosiMgr.prototype.initEvent = function() {
	var _this = this;
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var start = vals['condition/produceBeginDate'];
		var end = vals['condition/produceEndDate'];
		if (dayDiff(start, end) > 31) {
			Ext.Msg.alert("系统提示", "查询间隔日期不能大于1个月！");
			return false;

		}
		var store = this.listPanel.store;

		store.baseParams = this.queryPanel.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	this.raosiAddWindow.teamId.store.on('load', function() {
				if (teamId && teamId != 'null') {
					_this.raosiAddWindow.teamId.setValue(teamId);
				}
			})

	this.raosiAddWindow.lineId.store.on('load', function() {
				var cookieLineId = Ext.util.Cookies
						.get('raosiInput.lineSel.defaultValue');
				if (cookieLineId && cookieLineId != 'null') {
					_this.raosiAddWindow.lineId.setValue(cookieLineId);
				}
			})

	this.raosiAddWindow.lineId.mon(this.raosiAddWindow.lineId, "change",
			function(thisFiled, newValue, oldValue) {
				var now = new Date();
				var expiry = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);// 保存一年
				Ext.util.Cookies.set('raosiInput.lineSel.defaultValue',
						newValue, expiry);// 写入cookie
			});

	this.listPanel.mon(this.listPanel, 'beforedel', function(gird, cell) {
				var C = gird.getSelectionModel().getSelections();
				var r = C[0];
				var recordId = r.data.recordId;
				recordId = recordId + '';

				if (recordId.substr(0, 1) != '2') {
					Ext.Msg.alert('系统提示', '一期数据不能删除');
					return false;
				}
			})

	this.raosiEditWindow.activeItem.mon(this.raosiEditWindow.activeItem, 'afterload',
			function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.produceDt) {
					data.produceDt = data.produceDt.split('.')[0];
					var date1 = data.produceDt.replace(regEx, "/");
					this.raosiEditWindow.items.items[0].form
							.findField('entity/produceDt')
							.setValue(new Date(date1));
				}
				
			}, this);
			
	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				var recordId = cell.data.recordId;
				recordId = recordId + '';
				if (recordId.substr(0, 1) != '2') {
					Ext.Msg.alert('系统提示', '一期数据不能修改');
					return false;
				}
				this.raosiEditWindow.show();
				this.raosiEditWindow.loadData(cell);
			}, this);
}

com.keensen.ump.qinsen.produce.raosiMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

com.keensen.ump.qinsen.produce.raosiMgr.prototype.onAdd = function() {
	this.raosiAddWindow.show();
	this.raosiAddWindow.batchNo.focus();
}

com.keensen.ump.qinsen.produce.raosiMgr.prototype.saveRecInfo = function() {
	this.raosiAddWindow.saveData();
}

com.keensen.ump.qinsen.produce.raosiMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}

com.keensen.ump.qinsen.produce.raosiMgr.prototype.destroy = function() {
	this.raosiAddWindow.destroy();
	this.raosiEditWindow.destroy();
}

com.keensen.ump.qinsen.produce.raosiMgr.prototype.exportExcel = function() {
	var _this = this;

	var start = this.queryPanel.getForm()
			.findField(['condition/produceBeginDate']).getValue();
	var end = this.queryPanel.getForm().findField(['condition/produceEndDate'])
			.getValue();
	if (dayDiff(start, end) > 31) {
		Ext.Msg.alert("系统提示", "查询间隔日期不能大于1个月！");
		return false;

	}
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
			namingsql : 'com.keensen.ump.qinsen.raosi.queryRecords',
			templateFilename : 'ks_inst_raosi'
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