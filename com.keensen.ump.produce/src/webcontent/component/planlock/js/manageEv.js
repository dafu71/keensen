com.keensen.ump.produce.component.planlockMgr.prototype.initEvent = function() {
	var _this = this;

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var batchNoStr = this.queryPanel.form
				.findField("condition/batchNoStr2").getValue();
		var regEx = new RegExp("\\n", "gi");
		batchNoStr = batchNoStr.replace(regEx, ",");
		batchNoStr = batchNoStr.replaceAll('，', ',');
		batchNoStr = batchNoStr.replaceAll(' ', '');
		var arr = [];
		arr = batchNoStr.split(',');
		var arr2 = [];
		for (var i = 0; i < arr.length; i++) {
			arr2.push("'" + arr[i] + "'");
		}

		this.queryPanel.getForm().findField('condition/batchNoStr')
				.setValue(arr2.join(",") == "''" ? null : arr2.join(","));
				
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

com.keensen.ump.produce.component.planlockMgr.prototype.destroy = function() {

}

//com.keensen.ump.produce.component.planlockMgr.prototype.exportExcel = function() {
	/*var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSqlLimited.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			'map/limited' : '2000',
			namingsql : 'com.keensen.ump.produce.component.order.queryYxOrderTrace',
			templateFilename : 'ks_component_yxordertrace_export'
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
	})*/
//}

com.keensen.ump.produce.component.planlockMgr.prototype.onPrint = function() {

	var planDate = this.queryPanel.planDate.getValue();

	if (Ext.isEmpty(planDate)) {
		Ext.Msg.alert("系统提示", "请输入作业日期！");
		return false;
	}
	planDate = formatDate(planDate);
	window
			.open(
					'com.keensen.ump.produce.component.planlock.flow?condition/size=8&condition/planDate='
							+ planDate, "top");

};

com.keensen.ump.produce.component.planlockMgr.prototype.onPrint2 = function() {

	var planDate = this.queryPanel.planDate.getValue();

	if (Ext.isEmpty(planDate)) {
		Ext.Msg.alert("系统提示", "请输入作业日期！");
		return false;
	}
	planDate = formatDate(planDate);
	window
			.open(
					'com.keensen.ump.produce.component.planlock.flow?condition/size=4&condition/planDate='
							+ planDate, "top");

};

com.keensen.ump.produce.component.planlockMgr.prototype.onConfirm = function() {
	this.onConfirmDo(0);
}

com.keensen.ump.produce.component.planlockMgr.prototype.onConfirm2 = function() {
	this.onConfirmDo(1);
}

com.keensen.ump.produce.component.planlockMgr.prototype.onConfirm3 = function() {
	this.onConfirmDo(2);
}

com.keensen.ump.produce.component.planlockMgr.prototype.onConfirmDo = function(
		v) {
	var confirmStatusArr = ['已裁完', '未裁完在现场', '未裁完退仓'];
	var _this = this;
	var records = this.listPanel.getSelectionModel().getSelections();
	if (records && records.length != 0) {

		var list = [];

		Ext.each(records, function(r) {
					var d = {
						'batchNo' : r.data['batchNo'],
						'length' : r.data['residue'],
						'id' : r.data['id'],
						'confirmStatus' : confirmStatusArr[v],
						'deleted' : parseInt(v) == 1 ? 'N' : 'Y',
						'prodSpecId' : r.data['materSpecId'],
						'storageName' : '线边仓'
					}
					list.push(d);

				});
		var mk = new Ext.LoadMask(Ext.getBody(), {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.keensen.ump.produce.component.neworder.confirmPlanDayBatch.biz.ext',
			jsonData : {
				"list" : list
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					// _this.listPanel.store.load();
					_this.listPanel.refresh();
				} else {
					mk.hide();
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});

	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
}

com.keensen.ump.produce.component.planlockMgr.prototype.exportExcel = function() {
	var _this = this;
	var vals = this.queryPanel.form.getValues();
	var start = vals['condition/orderDateStart'];
	var end = vals['condition/orderDateEnd'];
	/*if (Ext.isEmpty(start) || Ext.isEmpty(end)) {
		Ext.Msg.alert("系统提示", "请选择订单日期时间段！");
		return false;
	}
	if (dayDiff(start, end) > 31) {
		Ext.Msg.alert("系统提示", "查询间隔日期不能大于1个月！");
		return false;

	}*/

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.produce.component.neworder.queryPlanDay.biz.ext",
		method : "post",
		responseType : 'blob',
		jsonData : vals,
		//jsonData : {
		//	'condition/orderDateStart' : start,
		//	'condition/orderDateEnd' : end
		//},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
	
			if (ret.success) {
				if (!Ext.isEmpty(ret.data)) {
					var str = '<style>td{border:1px black solid;}</style>'
							+ '<table class="table-data table-bordered table"><tr>';
							
					str += '<td align="center" colspan=22>日锁定计划(' + 	start + '至' + end + ')</td></tr><tr>'	
							
					str += '<td align="center">订单号</td>' 
							
							+ '<td align="center">规格型号</td>'
							+ '<td align="center">尺寸</td>'
							+ '<td align="center">卷膜数量</td>'
							+ '<td align="center">订单交期</td>'
							+ '<td align="center">订单备注</td>'
							+ '<td align="center">膜片批次</td>'
							+ '<td align="center">物料编码</td>'
							+ '<td align="center">米数</td>' 							
							
							+ '<td align="center">剩余米数</td>'
							+ '<td align="center">仓库</td>'
							+ '<td align="center">库位</td>'
							+ '<td align="center">作业日期</td>'
							+ '<td align="center">膜片备注</td>'
							+ '<td align="center">裁膜人员</td>'
							
							+ '<td align="center">生产顺序</td>'
							+ '<td align="center">卷制元件型号</td>'
							+ '<td align="center">按试卷型号换算平均产水量</td>'
							+ '<td align="center">按试卷型号换算脱盐率</td>'
							+ '<td align="center">试卷元件型号</td>'
							+ '<td align="center">试卷膜批号</td>'
							+ '<td align="center">试卷元件产水</td>'
							+ '<td align="center">试卷元件脱盐</td>'
							
							
							+ '</tr>';

					Ext.each(ret.data, function(r) {
								var cnt2 = r.cnt2;
								str += '<tr><td align="center">' + r.orderNo
								        
										+ '</td><td align="center">'
										+ r.materSpecName
										+ '</td><td align="center">'
										+ r.size
										+ '</td><td align="center">'
										+ r.jmAmount
										+ '</td><td align="center">'
										+ formatStr(r.orderDate)
										+ '</td><td align="center">'
										+ formatStr(r.orderRemark) + '</td>' 										
										+ '<td align="center">'

										+ formatStr(r.batchNo) 

										+ '</td>'
										
										+ '<td align="center">'
										+ r.materSpecCode
										+ '</td>'
										
										+ '<td align="center">'
										+ formatStr(r.meterAmount) + '</td>' 
										+ '<td align="center">'
										+ formatStr(r.residue) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.storageName) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.storagePosition) + '</td>'
										+ '<td align="center">'
										+ r.planDate + '</td>'
										+ '<td align="center">'
										+ formatStr(r.mpRemark) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.cmWorker) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.productOrder) + '</td>'
										+ '<td align="center">'
										+ formatStr(r.prodSpecName) + '</td>' 
										+ '<td align="center">'
										+ formatStr(r.testAvgGpd) + '</td>' 
										+ '<td align="center">'
										+ formatStr(r.saltRejection) + '</td>' 
										+ '<td align="center">'
										+ formatStr(r.testMaterSpec) + '</td>' 
										+ '<td align="center">'
										+ formatStr(r.testBatchNo) + '</td>' 
										+ '<td align="center">'
										+ formatStr(r.testGpd) + '</td>' 
										+ '<td align="center">'
										+ formatStr(r.testSaltRejection2) + '</td>' 
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

function formatDate(date) {
	const year = date.getFullYear()
	const month = (date.getMonth() + 1 + '').padStart(2, '0')
	const day = (date.getDate() + '').padStart(2, '0')
	return year + '-' + month + '-' + day;
}
