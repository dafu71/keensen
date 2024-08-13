com.keensen.ump.qinsen.produce.compqueryMgr.prototype.initEvent = function() {
	var _this = this;
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		// var start = vals['condition/produceDtStart'];
		// var end = vals['condition/produceDtEnd'];
		// if (dayDiff(start, end) > 93) {
		// Ext.Msg.alert("系统提示", "查询间隔日期不能大于3个月！");
		// return false;

		// }
		var store = this.listPanel.store;

		store.baseParams = this.queryPanel.getForm().getValues();
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

}

com.keensen.ump.qinsen.produce.compqueryMgr.prototype.exportExcel = function() {
	var _this = this;
	var vals = this.queryPanel.form.getValues();
	// var start = vals['condition/orderDateStart'];
	// var end = vals['condition/orderDateEnd'];
	/*
	 * if (Ext.isEmpty(start) || Ext.isEmpty(end)) { Ext.Msg.alert("系统提示",
	 * "请选择订单日期时间段！"); return false; } if (dayDiff(start, end) > 31) {
	 * Ext.Msg.alert("系统提示", "查询间隔日期不能大于1个月！"); return false; }
	 */

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.qinsen.compquery.queryRecords.biz.ext",
		method : "post",
		responseType : 'blob',
		jsonData : vals,
		// jsonData : {
		// 'condition/orderDateStart' : start,
		// 'condition/orderDateEnd' : end
		// },
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);

			if (ret.success) {
				if (!Ext.isEmpty(ret.data)) {
					var length = ret.length;
					var excelExportRowLimit = 10000;
					if (length > excelExportRowLimit) {
						Ext.Msg.alert('系统提示', '为减轻系统负荷，请将导出数量控制在'
										+ excelExportRowLimit + '条以内');
						return;
					}

					var str = '<style>td{border:1px black solid;}</style>'
							+ '<table class="table-data table-bordered table"><tr>';

					str += '<td align="center" colspan=21>气检</td><td align="center" colspan=14>卷膜</td>';

					str += '</tr><tr>'

					str += '<td align=center>元件序号</td>'
							+ '<td align=center>生产线</td>'
							+ '<td align=center>订单号</td>'
							+ '<td align=center>元件型号</td>'
							+ '<td align=center>检测气压</td>'
							+ '<td align=center>泄压值</td>'
							+ '<td align=center>泄压合格</td>'
							+ '<td align=center>首/复检</td>'
							+ '<td align=center>气检时间</td>'
							+ '<td align=center>合格入库</td>'
							+ '<td align=center>请检时间</td>'
							+ '<td align=center>不良类型</td>'
							+ '<td align=center>质检合格</td>'
							+ '<td align=center>不良原因</td>'
							+ '<td align=center>质检员</td>'
							+ '<td align=center>判定时间</td>'
							+ '<td align=center>叠膜栈板号</td>'
							+ '<td align=center>膜片批次</td>'
							+ '<td align=center>底膜批次</td>'
							+ '<td align=center>气检操作工</td>'
							+ '<td align=center>备注</td>'
							+ '<td align=center>卷膜序号</td>'
							+ '<td align=center>生产线</td>'
							+ '<td align=center>订单号</td>'
							+ '<td align=center>元件型号</td>'
							+ '<td align=center>试卷</td>'
							+ '<td align=center>生产时间</td>'
							+ '<td align=center>膜页数</td>'
							+ '<td align=center>混卷</td>'
							+ '<td align=center>页数组成</td>'
							+ '<td align=center>下料尺寸</td>'
							+ '<td align=center>浓网</td>'
							+ '<td align=center>页宽</td>'
							+ '<td align=center>操作工</td>'
							+ '<td align=center>备注</td>'

							+ '</tr>';

					Ext.each(ret.data, function(r) {

								str += '<tr><td align="center">'
										+ formatStr(r.batchNo)
										+ '</td><td align="center">'
										+ r.lineCode
										+ '</td><td align="center">'
										+ r.orderNo
										+ '</td><td align="center">'
										+ r.prodSpecName
										+ '</td><td align="center">'
										+ formatStr(r.presure)
										+ '</td><td align="center">'
										+ formatStr(r.checkResult) + '</td>'
										+ '<td align="center">'

										+ formatStr(r.isQualifiedName)

										+ '</td>' + '<td align="center">'
										+ formatStr(r.isFirstName) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.produceDate) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.applyJudgeResult)
										+ '</td>' + '<td align="center">'
										+ formatStr(r.applyTime) + '</td>'

										+ '</td>' + '<td align="center">'
										+ formatStr(r.ngReasonName) + '</td>'

										+ '<td align="center">'
										+ formatStr(r.judgeFlagName) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.ngItem) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.judgerName) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.judgeDate) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.cdmBatchStr) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.tumoBatchStr) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.dimoBatchStr) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.workerName) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.remark) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.juanmoBatchNo) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.juanmoLineCode) + '</td>'

										+ '<td align="center">'
										+ formatStr(r.juanmoOrderNo) + '</td>'

										+ '<td align="center">'
										+ formatStr(r.juanmoSpecName) + '</td>'

										+ '<td align="center">'
										+ formatStr(r.isTrialName) + '</td>'

										+ '<td align="center">'
										+ formatStr(r.juanmoDate) + '</td>'

										+ '<td align="center">'
										+ formatStr(r.pageCnt) + '</td>'

										+ '<td align="center">'
										+ formatStr(r.isMixStr) + '</td>'

										+ '<td align="center">'
										+ formatStr(r.pageCntStr) + '</td>'

										+ '<td align="center">'
										+ formatStr(r.blankingSize) + '</td>'

										+ '<td align="center">'
										+ formatStr(r.denseNet) + '</td>'

										+ '<td align="center">'
										+ formatStr(r.pageWidth) + '</td>'

										+ '<td align="center">'
										+ formatStr(r.juanmoWorkerName)
										+ '</td>'

										+ '<td align="center">'
										+ formatStr(r.juanmoRemark) + '</td>'

										+ '</tr>';
							})
					str += '</table>';

					// application/vnd.ms-excel;charset=utf-8
					var blob = new Blob(["\ufeff", str], {
								type : 'application/vnd.ms-excel;charset=utf-8'
							});
					var link = document.createElement('a');
					var url = URL.createObjectURL(blob);
					link.href = url;
					link.download = 'exported-data.xls'; // 指定导出文件的名称
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				} else {
					Ext.Msg.alert("系统提示", "没有查询到数据!");
				}
			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.qinsen.produce.compqueryMgr.prototype.onView = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var rec = C[0];
		var juanmoBatchId = rec.data.juanmoBatchId;
		var batchNo = rec.data.batchNo;

		if (Ext.isEmpty(juanmoBatchId)) {
			Ext.Msg.alert("系统提示", "没有查询到数据!");
			return;
		}
		var tumostore = this.tumolistPanel.store;
		tumostore.load({
					params : {
						"condition/juanmoBatchId" : juanmoBatchId
					}
				});

		var tumocheckstore = this.tumochecklistPanel.store;
		tumocheckstore.load({
					params : {
						"condition/juanmoBatchId" : juanmoBatchId
					}
				});
		var cdmstore = this.cdmlistPanel.store;
		cdmstore.load({
					params : {
						"condition/juanmoBatchId" : juanmoBatchId
					}
				});
		var juanmodetailstore = this.juanmodetailGrid.store;
		juanmodetailstore.load({
					params : {
						"condition/juanmoBatchId" : juanmoBatchId
					}
				});
		var waterteststore = this.watertestlistPanel.store;
		waterteststore.load({
					params : {
						"condition/juanmoBatchId" : juanmoBatchId
					}
				});

		var qjchangestore = this.qjchangelistPanel.store;
		qjchangestore.load({
					params : {
						"condition/juanmoBatchId" : juanmoBatchId
					}
				});

		if (!Ext.isEmpty(batchNo)) {
			var raosistore = this.raosilistPanel.store;
			raosistore.load({
						params : {
							"condition/batchNo" : batchNo
						}
					});
			var applystore = this.applylistPanel.store;
			applystore.load({
						params : {
							"condition/batchNo" : batchNo
						}
					});		
					
		}
		
		this.viewWindow.show();
	}

}

com.keensen.ump.qinsen.produce.compqueryMgr.prototype.destroy = function() {
	this.viewWindow.destroy();
	
}