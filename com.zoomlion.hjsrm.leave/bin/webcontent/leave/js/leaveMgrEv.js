com.zoomlion.hjsrm.settleaccounts.ManageMgr.prototype.initEvent = function() {

	var _me = this;
	// 查询
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {

		var ekorg = this.queryPanel.ekorg.getValue();
		if (Ext.isEmpty(ekorg)) {

			Ext.Msg.alert("系统提示", "请选择采购组织!");
			return;
		} else {

			var start = vals['condition/ruksjstartdate'];
			var end = vals['condition/ruksjendate'];
			if (start == null || start == "") {

				Ext.Msg.alert("系统提示", "请选择参考凭证过账起始日期！");
				return;
			}

			if (end == null || end == "") {

				Ext.Msg.alert("系统提示", "请选择参考凭证过账结束日期！");
				return;
			}

			var datediff = (new Date(end)) - (new Date(start));
			datediff = datediff / 24 / 60 / 60 / 1000;
			if (datediff > 365) {
				Ext.Msg.alert("系统提示", "参考凭证过账间隔日期不能大于12个月！");
				return;
			}

			var store = this.listPanel.store;

			var matnr2 = this.queryPanel.matnr2.getValue();

			// 换行符替换
			var regEx = new RegExp("\\n", "gi");
			matnr2 = matnr2.replace(regEx, ",");

			// 单引号替换
			var regEx = new RegExp("'", "gi");
			matnr2 = matnr2.replace(regEx, "");

			// 中文逗号替换
			var regEx = new RegExp("，", "gi");
			matnr2 = matnr2.replace(regEx, ",");

			// 空格替换
			var regEx = new RegExp("\\s", "gi");
			matnr2 = matnr2.replace(regEx, ",");

			// 多个逗号替换
			var regEx = new RegExp(",,", "gi");
			matnr2 = matnr2.replace(regEx, ",");

			if (!Ext.isEmpty(matnr2)) {

				var arr = [];
				arr = matnr2.split(",");

				var str = "";
				for (var i = 0; i < arr.length; i++) {
					str += "'" + arr[i] + "',";
				}

				str += "'0'";
				this.queryPanel.matnrs.setValue(str);
				vals["condition/matnrs"] = str;

			}

			var mblnr2 = this.queryPanel.mblnr2.getValue();

			var regEx = new RegExp("\\n", "gi");

			mblnr2 = mblnr2.replace(regEx, ",");
			var regEx = new RegExp("\\s", "gi");
			mblnr2 = mblnr2.replace(regEx, ",");

			var regEx = new RegExp(",,", "gi");
			mblnr2 = mblnr2.replace(regEx, ",");

			this.queryPanel.mblnrs.setValue(mblnr2);
			vals["condition/mblnrs"] = mblnr2;

			store.baseParams = vals;
			store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listPanel.pagingToolbar.pageSize
						}
					});
		}

	}, this);

	// 查询列表选择
	this.selModel.on('rowselect', function(o, i, r) {

				var myid = r.get('myid');
				for (var i = 0; i < this.sel.length; i++) {
					if (myid == this.sel[i]) {
						return false;
					}
				}
				this.sel.push(myid);

			}, this);

	// 查询列表取消选择
	this.selModel.on('rowdeselect', function(o, i, r) {

				var myid = r.get('myid');
				this.sel.remove(myid);

			}, this);

	// 选择待处理记录
	this.selModel2.on('rowselect', function(o, i, r) {

				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);

			}, this);

	// 分页时保持选中
	this.listPanel.store.on("load", function(me, records) {

				var arr = _me.sel;
				if (!records || records.length == 0 || arr.length == 1)
					return;

				var selModel = _me.selModel;

				for (var j = 0; j < arr.length; j++) {
					for (var i = 0; i < records.length; i++) {
						var record = records[i];
						if (record.get("myid") == arr[j]) {
							var rs = [record];
							selModel.selectRecords(rs, true); // 选中record
						}
					}
				}
			})
}

// 弹出创建窗口
com.zoomlion.hjsrm.settleaccounts.ManageMgr.prototype.onSelect = function() {
	if (this.sel == "0") {
		Ext.Msg.alert("系统提示", "没有选择数据!");
		return;
	} else {
		// alert(this.sel);

		var store = this.listPanel2.store;

		store.removeAll();
		var myids = this.sel.join(",");
		var daochu = this.queryPanel.getForm().getValues();
		var start = daochu['condition/ruksjstartdate'];
		var end = daochu['condition/ruksjendate'];
		if (start == null || start == "") {

			Ext.Msg.alert("系统提示", "请选择参考凭证过账起始日期！");
			return;
		}

		if (end == null || end == "") {

			Ext.Msg.alert("系统提示", "请选择参考凭证过账结束日期！");
			return;
		}

		var datediff = (new Date(end)) - (new Date(start));
		datediff = datediff / 24 / 60 / 60 / 1000;
		if (datediff > 365) {
			Ext.Msg.alert("系统提示", "参考凭证过账间隔日期不能大于12个月！");
			return;
		}

		store.baseParams = {
			"condition/myids" : myids,
			"condition/ruksjstartdate" : start,
			"condition/ruksjendate" : end
		};
		store.load({});

		store.sort("lfpos", "asc");
		store.sort("lfbnr", "asc");
		store.sort("lfbja", "asc");

		this.createWindow.show();
	}
}

// 刷新记录
com.zoomlion.hjsrm.settleaccounts.ManageMgr.prototype.onRefreshRecord = function(
		myid, field, newValue, flag) {
	// 生成结算凭证store
	var tostore = Ext.getCmp(listid).store;

	tostore.each(function(r) {
				if (flag) {// 相同参考凭证+行号+年度
					if (r.data.myid == myid) {
						r.data[field] = newValue;
						if (field == 'm_jsdj' || field == 'm_jsdw') {// 如果修改的是结算单价或结算价格单位
							var m_jsdj = parseFloat(r.data['m_jsdj']);// 结算单价
							var m_jsdw = parseFloat(r.data['m_jsdw']);// 结算价格单位
							var kbetr = parseFloat(r.data['kbetr']);// 合同价
							var kpein = parseFloat(r.data['kpein']);// 合同价格单位

							if (m_jsdj * kpein == m_jsdw * kbetr) {// 结算单价*合同价格单位
								// <> 结算价格单位*合同价
								r.data['m_flag_htj'] = "Y";
							} else {
								r.data['m_flag_htj'] = "N";
							}
						}

					}
				} else {
					r.data[field] = newValue;

				}
			}, this);

}

// 生成结算凭证
com.zoomlion.hjsrm.settleaccounts.ManageMgr.prototype.onSave = function() {

	if (this.inputPanel.form.isValid()) {
		var _this = this;

		// 生成结算凭证store
		var tostore = this.listPanel2.store;
		if (tostore.getCount() == 0) {
			Ext.Msg.alert("系统提示", "没有待结算凭证数据！");
			return;
		}
		tostore.each(function(r) {// 计算税率
					var m_taxrt = r.data.m_taxrt;
					for (var i = 0; i < GE_PRUCHASE_TARIFF.length; i++) {
						if (GE_PRUCHASE_TARIFF[i].DICTID == m_taxrt) {
							var tax = GE_PRUCHASE_TARIFF[i].DICTNAME;
							r.data.tax = tax;

						}
					}

				}, this);

		var flje = this.inputPanel.flje.getValue();
		var yfje = this.inputPanel.yfje.getValue();
		var qtkkje = this.inputPanel.qtkkje.getValue();

		var records = tostore.getRange();
		var datas = [];
		// lgorts.push(records[0].get("lgort"));
		Ext.each(records, function(r) {
					datas.push(r.data);
				});

		var mk = new Ext.LoadMask(this.inputWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();

		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.settleaccounts.accounts.createSettleAccountNew.biz.ext',
			jsonData : {
				datas : datas,
				"flje" : flje,
				"yfje" : yfje,
				"qtkkje" : qtkkje
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					var ret = result.ret;
					var str = "生成结算凭证：<br>" + ret;
					Ext.Msg.alert("系统提示", str, function() {
								_this.inputPanel.form.reset();
								_this.inputWindow.hide();
								_this.listPanel.store.reload();
								_this.listPanel2.store.removeAll();
								_this.createWindow.hide();
							});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});

	} else {
		Ext.Msg.alert("系统提示", "金额输入有误!");
		return;
	}

}

// 取消选定
com.zoomlion.hjsrm.settleaccounts.ManageMgr.prototype.onDselect = function() {
	var A = this.listPanel2;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var record = C[0];
		var myid = record.data.myid;
		// 生成结算凭证store
		var tostore = this.listPanel2.store;
		// 轮询生成结算凭证store
		// 插入待生成结算凭证store
		tostore.each(function(r) {
					if (r.data.myid == myid) {
						// 删除生成结算凭证store
						tostore.remove(r);

					}
				}, this);

	}
}

com.zoomlion.hjsrm.settleaccounts.ManageMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();
	var ekorg = this.queryPanel.ekorg.getValue();
	if (Ext.isEmpty(ekorg)) {
		Ext.Msg.alert("系统提示", "请选择采购组织!");
		return;
	} else {
		var store = this.listPanel.store;
		var matnr2 = this.queryPanel.matnr2.getValue();
		var regEx = new RegExp("\\n", "gi");
		matnr2 = matnr2.replace(regEx, ",");
		var regEx = new RegExp("'", "gi");
		matnr2 = matnr2.replace(regEx, "");
		var regEx = new RegExp("，", "gi");
		matnr2 = matnr2.replace(regEx, ",");
		var regEx = new RegExp("\\s", "gi");
		matnr2 = matnr2.replace(regEx, ",");
		var regEx = new RegExp(",,", "gi");
		matnr2 = matnr2.replace(regEx, ",");
		if (!Ext.isEmpty(matnr2)) {
			var arr = [];
			arr = matnr2.split(",");
			var str = "";
			for (var i = 0; i < arr.length; i++) {
				str += "'" + arr[i] + "',";
			}
			str += "'0'";
			this.queryPanel.matnrs.setValue(str);
			daochu["condition/matnrs"] = str;
		}
		var mblnr2 = this.queryPanel.mblnr2.getValue();
		var regEx = new RegExp("\\n", "gi");
		mblnr2 = mblnr2.replace(regEx, ",");
		var regEx = new RegExp("\\s", "gi");
		mblnr2 = mblnr2.replace(regEx, ",");
		var regEx = new RegExp(",,", "gi");
		mblnr2 = mblnr2.replace(regEx, ",");
		this.queryPanel.mblnrs.setValue(mblnr2);
		daochu["condition/mblnrs"] = mblnr2;
		var templatename = "DscjspzdcMgr";
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "正在执行操作..."
						});
		this.requestMask.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.settleaccounts.accounts.queryJiesuanPagedaochu.biz.ext',
			jsonData : daochu,
			success : function(response, action) {
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcel.biz.ext',
						jsonData : {
							excels : result.data,
							templatename : templatename
						},
						success : function(response, action) {
							this.requestMask.hide();
							// 返回值处理
							var res = Ext.decode(response.responseText);
							if (res.success) {
								var fname = res.fname;
								window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
										+ fname;
							}
						},
						failure : function(resp, opts) {
							this.requestMask.hide();
						}
					});
				}
			}
		});

	}
}
