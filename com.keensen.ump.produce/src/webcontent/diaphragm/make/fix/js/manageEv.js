com.keensen.ump.produce.diaphragm.make.FixMgr.prototype.initEvent = function() {

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
				var createUserId = r.data.createUserId;
				var createName = r.data.createName;
				var hitUserid = r.data.hitUserid;
				var diff = r.data.diff;
				if (diff > 48) {
					Ext.Msg.alert('系统提示', '不能删除两天前的记录');
					return false;
				}
				if (uid != createUserId) {
					Ext.Msg.alert('系统提示', '不能删除' + createName + '的记录');
					return false;
				} else if (!Ext.isEmpty(hitUserid)) {
					Ext.Msg.alert('系统提示', '已有打料记录，不能删除');
					return false;
				}
			})

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				if (opt == 'fix' || opt == 'hit') {
					var diff = cell.get('diff');
					if (diff > 48) {
						Ext.Msg.alert('系统提示', '不能修改两天前的记录');
						return false;
					}
				}
				if (opt == 'fix') {
					var fixUserid = cell.get('fixUserid');
					var fixUsername = cell.get('fixUsername');
					if (uid != fixUserid) {
						Ext.Msg.alert('系统提示', '不能修改' + fixUsername + '的记录');
					} else {
						this.editWindow.show();
						this.editWindow.loadData(cell);
					}
				}
				if (opt == 'hit') {
					var hitUserid = cell.get('hitUserid');
					var hitUsername = cell.get('hitUsername');
					if (!Ext.isEmpty(hitUserid) && uid != hitUserid) {
						Ext.Msg.alert('系统提示', '不能修改' + hitUsername + '的记录');
					} else {
						this.editWindow2.show();
						this.editWindow2.loadData(cell);

					}
				}
				if (opt == 'modify') {
					var fixUserid = cell.get('fixUserid');
					var hitUserid = cell.get('hitUserid');
					if (Ext.isEmpty(fixUserid) || Ext.isEmpty(hitUserid)) {
						Ext.Msg.alert('系统提示', '不能修改没有打料或混料的记录');
						return;
					} else {
						this.editWindow3.show();
						this.editWindow3.loadData(cell);
					}
				}
			}, this);
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterSave',
			function(gird, cell) {
			}, this);

	// 混料修改加载数据后事件
	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterload',
			function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.fixStarttime) {
					data.fixStarttime = data.fixStarttime.split('.')[0];
					var date1 = data.fixStarttime.replace(regEx, "/");
					this.editWindow.items.items[0].form
							.findField('entity/fixStarttime')
							.setValue(new Date(date1));
				}
				if (data.hottime) {
					data.hottime = data.hottime.split('.')[0];
					var date1 = data.hottime.replace(regEx, "/");
					this.editWindow.items.items[0].form
							.findField('entity/hottime')
							.setValue(new Date(date1));
				}
				if (data.reachtime) {
					data.reachtime = data.reachtime.split('.')[0];
					var date1 = data.reachtime.replace(regEx, "/");
					this.editWindow.items.items[0].form
							.findField('entity/reachtime')
							.setValue(new Date(date1));
				}

			}, this);

	// 打料修改加载数据后事件
	this.editWindow2.activeItem.mon(this.editWindow2.activeItem, 'afterload',
			function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.hitStarttime) {
					data.hitStarttime = data.hitStarttime.split('.')[0];
					var date1 = data.hitStarttime.replace(regEx, "/");
					this.editWindow2.items.items[0].form
							.findField('entity/hitStarttime')
							.setValue(new Date(date1));
				}
				if (data.hitOvertime) {
					data.hitOvertime = data.hitOvertime.split('.')[0];
					var date1 = data.hitOvertime.replace(regEx, "/");
					this.editWindow2.items.items[0].form
							.findField('entity/hitOvertime')
							.setValue(new Date(date1));
				}
				if (data.loopStarttime) {
					data.loopStarttime = data.loopStarttime.split('.')[0];
					var date1 = data.loopStarttime.replace(regEx, "/");
					this.editWindow2.items.items[0].form
							.findField('entity/loopStarttime')
							.setValue(new Date(date1));
				}
				if (data.loopOvertime) {
					data.loopOvertime = data.loopOvertime.split('.')[0];
					var date1 = data.loopOvertime.replace(regEx, "/");
					this.editWindow2.items.items[0].form
							.findField('entity/loopOvertime')
							.setValue(new Date(date1));
				}

				if (data.usetime) {
					data.usetime = data.usetime.split('.')[0];
					var date1 = data.usetime.replace(regEx, "/");
					this.editWindow2.items.items[0].form
							.findField('entity/usetime')
							.setValue(new Date(date1));
				}
				if (Ext.isEmpty(data.hitUserid)) {
					this.editWindow2.form.findField("entity/hitUserid")
							.setValue(uid);
					this.editWindow2.form.findField("entity/hitUsername")
							.setValue(uname);
				}
			}, this);
	
			// 修改加载数据后事件
	this.editWindow3.activeItem.mon(this.editWindow3.activeItem, 'afterload',
			function(win, data) {
				var regEx = new RegExp("\\-", "gi");
				if (data.fixStarttime) {
					data.fixStarttime = data.fixStarttime.split('.')[0];
					var date1 = data.fixStarttime.replace(regEx, "/");
					this.editWindow3.items.items[0].form
							.findField('entity/fixStarttime')
							.setValue(new Date(date1));
				}
				if (data.hottime) {
					data.hottime = data.hottime.split('.')[0];
					var date1 = data.hottime.replace(regEx, "/");
					this.editWindow3.items.items[0].form
							.findField('entity/hottime')
							.setValue(new Date(date1));
				}
				if (data.reachtime) {
					data.reachtime = data.reachtime.split('.')[0];
					var date1 = data.reachtime.replace(regEx, "/");
					this.editWindow3.items.items[0].form
							.findField('entity/reachtime')
							.setValue(new Date(date1));
				}
				if (data.hitStarttime) {
					data.hitStarttime = data.hitStarttime.split('.')[0];
					var date1 = data.hitStarttime.replace(regEx, "/");
					this.editWindow3.items.items[0].form
							.findField('entity/hitStarttime')
							.setValue(new Date(date1));
				}
				if (data.hitOvertime) {
					data.hitOvertime = data.hitOvertime.split('.')[0];
					var date1 = data.hitOvertime.replace(regEx, "/");
					this.editWindow3.items.items[0].form
							.findField('entity/hitOvertime')
							.setValue(new Date(date1));
				}
				if (data.loopStarttime) {
					data.loopStarttime = data.loopStarttime.split('.')[0];
					var date1 = data.loopStarttime.replace(regEx, "/");
					this.editWindow3.items.items[0].form
							.findField('entity/loopStarttime')
							.setValue(new Date(date1));
				}
				if (data.loopOvertime) {
					data.loopOvertime = data.loopOvertime.split('.')[0];
					var date1 = data.loopOvertime.replace(regEx, "/");
					this.editWindow3.items.items[0].form
							.findField('entity/loopOvertime')
							.setValue(new Date(date1));
				}

				if (data.usetime) {
					data.usetime = data.usetime.split('.')[0];
					var date1 = data.usetime.replace(regEx, "/");
					this.editWindow3.items.items[0].form
							.findField('entity/usetime')
							.setValue(new Date(date1));
				}
				

			}, this);
}

com.keensen.ump.produce.diaphragm.make.FixMgr.prototype.onAdd = function() {

	this.inputWindow.form.findField("entity/fixUserid").setValue(uid);
	this.inputWindow.form.findField("entity/fixUsername").setValue(uname);
	this.inputWindow.show();

}

com.keensen.ump.produce.diaphragm.make.FixMgr.prototype.onEdit = function() {
	opt = 'fix';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.diaphragm.make.FixMgr.prototype.onEdit2 = function() {
	opt = 'hit';
	this.listPanel.onEdit();
};

com.keensen.ump.produce.diaphragm.make.FixMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.produce.diaphragm.make.FixMgr.prototype.exportExcel = function() {
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
			namingsql : 'com.keensen.ump.produce.diaphragm.make.make.queryFix',
			templateFilename : 'ks_zm_fix'
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

com.keensen.ump.produce.diaphragm.make.FixMgr.prototype.onEdit3 = function() {
	opt = 'modify';
	this.listPanel.onEdit();
};



