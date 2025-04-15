com.keensen.ump.produce.component.workorder.jmdutyMgr.prototype.initEvent = function() {

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
	
	// 查询事件
	this.queryPanel4ChooseCdm.mon(this.queryPanel4ChooseCdm, 'query', function(form, vals) {
		var store = this.listPanel4ChooseCdm.store;
		if (Ext.isEmpty(vals)) {
			vals = {

			};
		}
		vals['nameSqlId'] = 'com.keensen.ump.produce.component.workorder.queryJmChooseCdm';

		store.baseParams = vals;

		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel4ChooseCdm.pagingToolbar.pageSize
					}
				});
	}, this);

	this.listPanel3.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);

	this.planDayListPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec2 = r;
				}).defer(100);
			}, this);

	/*
	 * this.listPanel2.on("celldblclick", function(o, rowIndex, columnIndex, e) {
	 * if (!this.planDayWindow.hidden) {
	 * 
	 * var record = this.listPanel2.store.getAt(rowIndex); var code =
	 * record.data.code; var B = this.planDayListPanel; var recs =
	 * B.getSelectionModel().getSelections(); var rec = recs[0]; var pkid =
	 * rec.data.id; rec.set('jmCode', code); rec.commit(); var mk = new
	 * Ext.LoadMask(document.body, { msg : '正在保存数据，请稍候！', removeMask : true });
	 * mk.show(); Ext.Ajax.request({ method : "post", scope : this, url :
	 * 'com.keensen.ump.produce.component.workorder2.modifyCdmCode.biz.ext',
	 * jsonData : { 'entity/id' : pkid, 'entity/jmCode' : code }, success :
	 * function(response, action) { mk.hide(); // 返回值处理 var result =
	 * Ext.decode(response.responseText);
	 * this.listPanel2.getSelectionModel().clearSelections();
	 * this.chooseWindow.hide(); } }); } }, this);
	 */

	this.jmcombo.mon(this.jmcombo, 'select', function(record, index) {
				// Ext.getCmp('jmCodeComb')
				// .setValue(this.jmcombo.myvalue);
			}, this);
			
	this.listPanel.store.on('load', function() {
				var records = _this.listPanel.store.getRange();
				var r = records[0];
				var jmCount = r.get('jmCount');
				var realityCount = r.get('realityCount');
				var rate = r.get('rate');
				Ext.getCmp(jmCountId).setValue('计划卷膜合计:'
								+ jmCount);
				Ext.getCmp(realityCountId).setValue('实际卷膜合计:'
								+ realityCount);
				Ext.getCmp(rateId).setValue('计划完成率:'
								+ rate);
			})
}

com.keensen.ump.produce.component.workorder.jmdutyMgr.prototype.saveBatchNoJm = function(
		id, newValue, oldValue) {
	var mk = new Ext.LoadMask(document.body, {
				msg : '正在保存数据，请稍候！',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.workorder2.modifyJmCode.biz.ext',
		jsonData : {
			'entity/id' : id,
			'entity/jmCode' : newValue
		},
		success : function(response, action) {
			mk.hide();
			// 返回值处理
			this.chooseWindow.hide();
		}
	});

}

com.keensen.ump.produce.component.workorder.jmdutyMgr.prototype.onArrange = function() {
	var planDate = this.queryPanel.form.findField("condition/planDateStart")
			.getValue();
	var planDate2 = this.queryPanel.form.findField("condition/planDateEnd")
			.getValue();
	var arrangeDate = this.queryPanel.arrangeDate.getValue();

	if ((Ext.isEmpty(planDate) || Ext.isEmpty(planDate2))
			&& Ext.isEmpty(arrangeDate)) {
		Ext.Msg.alert("系统提示", "请输入计划日期或排班日期！");
		return false;
	}

	planDate = Ext.isEmpty(planDate) ? null : formatDate(planDate);
	planDate2 = Ext.isEmpty(planDate2) ? null : formatDate(planDate2);
	arrangeDate = Ext.isEmpty(arrangeDate) ? null : formatDate(arrangeDate);

	var store = this.listPanel3.store;
	store.load({
				params : {
					'condition/jmState' : 0,
					'condition/planDateStart' : planDate,
					'condition/planDateEnd' : planDate2,
					'condition/arrangeDate' : arrangeDate
				}
			});
	this.arrangeWindow.show();
}

com.keensen.ump.produce.component.workorder.jmdutyMgr.prototype.onChooseCode = function() {
	this.chooseWindow.setTitle('选择机台');
	this.chooseWindow.show();
}

com.keensen.ump.produce.component.workorder.jmdutyMgr.prototype.onChooseCode2 = function() {
	this.chooseWindow
			.setTitle("选择机台<span style='color:red'>(可双击记录快速选择)</span>");
	this.chooseWindow.show();
}

com.keensen.ump.produce.component.workorder.jmdutyMgr.prototype.onSelectCode = function() {
	var A = this.listPanel2;
	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var arr = [];
		for (var i = 0; i < records.length; i++) {
			var code = records[i].data.code;
			arr.push(code);
		}

		var idx = this.rec.data['idx'];
		var i = this.listPanel3.store.find('idx', idx);
		var rec2 = this.listPanel3.store.getAt(i);
		this.listPanel2.getSelectionModel().clearSelections();
		this.chooseWindow.hide();
		rec2.set('jmCodes', arr.join(','));
		rec2.commit();
		this.listPanel2.refresh();

	} /*
		 * else { var records = A.getSelectionModel().getSelections(); if
		 * (records.length > 1) { Ext.Msg.alert("系统提示", "请选定一条数据！"); return; }
		 * var code = records[0].data.code; var B = this.planDayListPanel; var
		 * recs = B.getSelectionModel().getSelections(); var rec2 = recs[0]; var
		 * pkid = rec.data.id; // rec.set('jmCode', code); // rec.commit();
		 * 
		 * var mk = new Ext.LoadMask(document.body, { msg : '正在保存数据，请稍候！',
		 * removeMask : true }); mk.show(); Ext.Ajax.request({ method : "post",
		 * scope : this, url :
		 * 'com.keensen.ump.produce.component.workorder2.modifyCdmCode.biz.ext',
		 * jsonData : { 'entity/id' : pkid, 'entity/jmCode' : code }, success :
		 * function(response, action) { mk.hide(); // 返回值处理 var result =
		 * Ext.decode(response.responseText);
		 * _this.listPanel2.getSelectionModel().clearSelections();
		 * _this.chooseWindow.hide(); rec2.set('jmCode', code); rec2.commit();
		 * B.refresh(); } }); }
		 */
}

com.keensen.ump.produce.component.workorder.jmdutyMgr.prototype.onSaveArrange = function() {
	var _this = this;

	// var records = this.listPanel3.store.getRange();
	var records = this.listPanel3.getSelectionModel().getSelections();
	for (var i = 0; i < records.length; i++) {
		var j = i + 1;
		if (Ext.isEmpty(records[i].data.arrangeDate)) {
			Ext.Msg.alert('提示', '检查项目中第' + j + '行的排班日期为空！')
			return false
		}
		if (Ext.isEmpty(records[i].data.productOrder)) {
			Ext.Msg.alert('提示', '检查项目中第' + j + '行的生产顺序为空！')
			return false
		}
		if (Ext.isEmpty(records[i].data.jmCodes)) {
			Ext.Msg.alert('提示', '检查项目中第' + j + '行的生产机台为空！')
			return false
		}
	}
	var details = [];
	var duties = [];

	Ext.each(records, function(r) {
				var dt = {
					'orderId' : r.data['orderId'],
					'planDate' : r.data['planDate']
				};
				duties.push(dt);
				var jmCodes = r.data['jmCodes'];
				var arr = jmCodes.split(',');
				for (var i = 0; i < arr.length; i++) {
					var jmCode = arr[i];
					var d = {
						'jmCode' : jmCode,
						'orderId' : r.data['orderId'],
						'planDate' : r.data['planDate'],
						'productOrder' : r.data['productOrder'],
						'arrangeDate' : r.data['arrangeDate']
					}
					details.push(d);
				}

			});
	var mk = new Ext.LoadMask(document.body, {
				msg : '正在保存数据，请稍候！',
				removeMask : true
			});
	mk.show();
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.workorder2.saveJmDuties.biz.ext',
		jsonData : {
			entities : details,
			duties : duties
		},
		success : function(response, action) {
			mk.hide();
			// 返回值处理
			var result = Ext.decode(response.responseText);
			if (result.success) {
				Ext.Msg.alert("系统提示", "保存成功", function() {
							_this.listPanel.store.reload();
							_this.arrangeWindow.hide();
						});
			}
		}
	});
}

com.keensen.ump.produce.component.workorder.jmdutyMgr.prototype.onDutyView = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var planDate = records[0].data.planDate;
		var orderId = records[0].data.orderId;
		var store = this.planDayListPanel.store;
		store.load({
					params : {

						'condition/planDate' : planDate,
						'condition/orderId' : orderId
					}
				});
		this.planDayWindow.show();

	}
}

// 膜片状态置为处理中
com.keensen.ump.produce.component.workorder.jmdutyMgr.prototype.onDutyState2Deal = function() {
	var _this = this;
	var A = this.planDayListPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var planDate = records[0].data.planDate;
		var orderId = records[0].data.orderId;
		var jmState = records[0].data.jmState;
		var pkid = records[0].data.id;

		// if (jmState == '1') {
		Ext.Msg.confirm("操作确认", "您确实要将膜片完成状态置为处理中吗?", function(A) {
			if (A == "yes") {
				var mk = new Ext.LoadMask(document.body, {
							msg : '正在保存数据，请稍候！',
							removeMask : true
						});
				mk.show();
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.keensen.ump.qinsen.juanmo.updateJmDutyState2Deal.biz.ext',
					jsonData : {
						planDate : planDate,
						orderId : orderId,
						id : pkid
					},
					success : function(response, action) {
						mk.hide();
						// 返回值处理
						var result = Ext.decode(response.responseText);
						if (result.success) {
							Ext.Msg.alert("系统提示", "保存成功", function() {
										_this.planDayListPanel.store.reload();
										_this.listPanel.store.reload();
									});
						}
					}
				});
			}
		})
		// } else {
		// Ext.Msg.alert("系统提示", "请选择膜片卷膜完成状态为完成的数据行！")
		// }

	}
}

// 膜片状态置为处理中
com.keensen.ump.produce.component.workorder.jmdutyMgr.prototype.onDutyState2Finish = function() {
	var _this = this;
	var A = this.planDayListPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var records = A.getSelectionModel().getSelections();
		var planDate = records[0].data.planDate;
		var orderId = records[0].data.orderId;
		var jmState = records[0].data.jmState;
		var pkid = records[0].data.id;

		// if (jmState == '1') {
		Ext.Msg.confirm("操作确认", "您确实要将膜片完成状态置为完成吗?", function(A) {
			if (A == "yes") {
				var mk = new Ext.LoadMask(document.body, {
							msg : '正在保存数据，请稍候！',
							removeMask : true
						});
				mk.show();
				Ext.Ajax.request({
					method : "post",
					scope : this,
					url : 'com.keensen.ump.qinsen.juanmo.updateJmDutyState2Finish.biz.ext',
					jsonData : {
						planDate : planDate,
						orderId : orderId,
						id : pkid
					},
					success : function(response, action) {
						mk.hide();
						// 返回值处理
						var result = Ext.decode(response.responseText);
						if (result.success) {
							Ext.Msg.alert("系统提示", "保存成功", function() {
										_this.planDayListPanel.store.reload();
										_this.listPanel.store.reload();
									});
						}
					}
				});
			}
		})
		// } else {
		// Ext.Msg.alert("系统提示", "请选择膜片卷膜完成状态为完成的数据行！")
		// }

	}
}

com.keensen.ump.produce.component.workorder.jmdutyMgr.prototype.onChooseCdm = function() {
	this.chooseCdmWindow.show();
}

com.keensen.ump.produce.component.workorder.jmdutyMgr.prototype.onAdd4ChooseCdm = function() {
	this.addCdmWindow.show();
}

com.keensen.ump.produce.component.workorder.jmdutyMgr.prototype.onDel4ChooseCdm = function() {
	this.listPanel4ChooseCdm.onDel();
}

function formatDate(date) {
	const year = date.getFullYear()
	const month = (date.getMonth() + 1 + '').padStart(2, '0')
	const day = (date.getDate() + '').padStart(2, '0')
	return year + '-' + month + '-' + day;
}