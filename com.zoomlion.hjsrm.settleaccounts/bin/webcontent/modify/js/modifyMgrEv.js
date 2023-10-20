com.zoomlion.hjsrm.settleaccounts.ModifyMgr.prototype.initEvent = function() {
	
	this.queryPanel.werks.mon(this.queryPanel.werks,'callback',function(){	
		var r = this.queryPanel.werks.store.getAt(0);
		this.queryPanel.werks.setValue(r.data['werks']);
	},this)
	
	this.queryPanel.bukrs.mon(this.queryPanel.bukrs,'select',function(c,r,i){
		var bukrs = r.data['bukrs'];
		if(!Ext.isEmpty(bukrs)){
			this.queryPanel.werks.store.removeAll();
			this.queryPanel.werks.store.baseParams = {"param/bukrs":bukrs};
			this.queryPanel.werks.store.load();
		}
		},this)
		
	this.queryPanel.bukrs.mon(this.queryPanel.bukrs,'callback',function(){	
		var r = this.queryPanel.bukrs.store.getAt(0);
		this.queryPanel.bukrs.setValue(r.data['bukrs']);
		this.queryPanel.werks.store.removeAll();
		this.queryPanel.werks.store.baseParams = {"param/bukrs":r.data['bukrs']};
		this.queryPanel.werks.store.load();
	},this)
	// 查询
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

	// 双击查看
	this.listPanel.mon(this.listPanel, 'rowdblclick', function(o, i, e) {
				this.onView();
			}, this);

	// 双击选定
	this.listPanel3.mon(this.listPanel3, 'rowdblclick', function(o, i, e) {
				this.onSelect();
			}, this);

	// 双击取消选定
	this.listPanel4.mon(this.listPanel4, 'rowdblclick', function(o, i, e) {
				this.onDselect();
			}, this);

	this.selModel4.on('rowselect', function(o, i, r) {

							var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
				

			}, this);
}

com.zoomlion.hjsrm.settleaccounts.ModifyMgr.prototype.onDelete = function() {
	this.listPanel.onDel();
};

com.zoomlion.hjsrm.settleaccounts.ModifyMgr.prototype.destroy = function() {
	this.popWindow.destroy();
	this.modifyWindow.destroy();
	this.conditionWindow.destroy();
}

// 查看
com.zoomlion.hjsrm.settleaccounts.ModifyMgr.prototype.onView = function() {
	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var C = A.getSelectionModel().getSelections();
		if (C.length > 1) {// 撤销
			Ext.Msg.alert("系统提示", "请选择单行数据！");
			return;
		} else {
			var store = this.listPanel2.store;
			var jspz = C[0].data.jspz;
			var mjahr = C[0].data.mjahr;
			store.baseParams = {
				"condition/jspz" : jspz,
				"condition/mjahr" : mjahr
			};
			store.load({});
			this.popWindow.show();
		}

	}
}

// 查询条件弹窗
com.zoomlion.hjsrm.settleaccounts.ModifyMgr.prototype.onCondition = function() {
	this.conditionPanel.form.reset();

	this.conditionWindow.show();
}

com.zoomlion.hjsrm.settleaccounts.ModifyMgr.prototype.onEdit = function() {
	this.conditionWindow.hide();

	var A = this.listPanel;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var C = A.getSelectionModel().getSelections();
		if (C.length > 1) {// 撤销
			Ext.Msg.alert("系统提示", "请选择单行数据！");
			return;
		} else {

			var store = this.listPanel3.store;
			var store2 = this.listPanel4.store;
			store.removeAll();
			store2.removeAll();
			this.inputPanel.flje.setValue(C[0].data.flje);
			this.inputPanel.yfje.setValue(C[0].data.yfje);
			this.inputPanel.qtkkje.setValue(C[0].data.qtkkje);

			this.inputPanel.mwskz.setValue(C[0].data.mwskz);// 销售税代码
			this.inputPanel.taxrt.setValue(C[0].data.taxrt);// 税率
			var mwskz = this.inputPanel.mwskz.getValue();// 税率

			var jspz = C[0].data.jspz;
			var mjahr = C[0].data.mjahr;
			var ekorg = C[0].data.ekorg;

			var matnr = this.conditionPanel.matnr.getValue();// 物料编码

			var ruksjstartdate = this.conditionPanel.form
					.findField("ruksjstartdate").getValue();
			var ruksjendate = this.conditionPanel.form.findField("ruksjendate")
					.getValue();

			this.inputPanel.mjahr.setValue(mjahr);// 结算凭证年度
			this.inputPanel.jspz.setValue(jspz);// 结算凭证号

			store.baseParams = {
				"condition/flag" : 1,
				"condition/jspz" : jspz,
				"condition/mjahr" : mjahr,
				"condition/ekorg" : ekorg,
				"condition/ruksjstartdate" : ruksjstartdate,
				"condition/ruksjendate" : ruksjendate,
				"condition/matnr" : matnr

			};
			store.load({});

			store2.baseParams = {
				"condition/jspz" : jspz,
				"condition/mjahr" : mjahr
			};
			store2.load({});

			this.modifyWindow.show();
		}
	}

}

// 获取当前记录
com.zoomlion.hjsrm.settleaccounts.ModifyMgr.prototype.onGetCurRecord = function() {
	var list = Ext.getCmp(listid);
	var rec = list.getSelectionModel().getSelections();
	this.rec = rec[0];

}

// 选定
com.zoomlion.hjsrm.settleaccounts.ModifyMgr.prototype.onSelect = function() {
	var A = this.listPanel3;
	var mwskz = this.inputPanel.mwskz.getValue();// 税率

	var taxrt = this.inputPanel.taxrt.getValue();
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var record = C[0];
		var myid = record.data.myid;
		// 待生成结算凭证store
		var store = this.listPanel3.store;
		// 生成结算凭证store
		var tostore = this.listPanel4.store;
		
		//定义数组，保存可以操作的record
		var arrStore = [];
		// 轮询store
		// 行项目限制为300行
		var tostoreCount = tostore.getCount();
		var addCount = 0;
		store.each(function(r) {
					if (r.data.myid == myid) {
						addCount += 1;
						arrStore.push(r);

					}
				}, this);
		if (parseInt(addCount) + parseInt(tostoreCount) >= 300) {
			Ext.Msg.alert("系统提示", "行项目限制为300行", function() {
						return;
					}, this);
		} else {
			// 插入生成结算凭证store
			for(var i=0;i<arrStore.length;i++){
				var r = arrStore[i];
				// 删除待生成结算凭证store
				store.remove(r);
				
				// 插入生成结算凭证store
				r.data.m_taxrt = 'F8';// 税率
				r.data.m_zcdf = 0;// 单行扣款
				tostore.add(r);
				
				
			}
			/*store.each(function(r) {
						if (r.data.myid == myid) {
							r.data.m_taxrt = mwskz;// 税率
							r.data.m_zcdf = 0;// 单行扣款
							tostore.add(r);
							// 删除待生成结算凭证store
							store.remove(r);
						}
					}, this);*/
			tostore.sort("lfpos", "asc");
			tostore.sort("lfbnr", "asc");
			tostore.sort("lfbja", "asc");
			/*// 删除待生成结算凭证store
			store.each(function(r) {
						if (r.data.myid == myid) {
							store.remove(r);

						}
					}, this);*/
		}

	}
}

// 取消选定
com.zoomlion.hjsrm.settleaccounts.ModifyMgr.prototype.onDselect = function() {
	var A = this.listPanel4;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
	} else {
		var C = A.getSelectionModel().getSelections();
		var record = C[0];
		var myid = record.data.myid;
		// 待生成结算凭证store
		var store = this.listPanel3.store;
		// 生成结算凭证store
		var tostore = this.listPanel4.store;

		var mwskz = this.inputPanel.mwskz.getValue();
		var taxrt = this.inputPanel.taxrt.getValue();

		// 轮询生成结算凭证store
		// 插入待生成结算凭证store
		tostore.each(function(r) {
					if (r.data.myid == myid) {
						// 删除生成结算凭证store
						tostore.remove(r);
						
						r.data.m_ztext = "";
						r.data.m_djssl = r.data.djssl;
						r.data.m_jsdj = r.data.jsdj;
						r.data.m_jsdw = r.data.jsdw;
						r.data.m_flag_htj = r.data.flag_htj;
						r.data.m_hkkje = 0;
						r.data.m_mwskz = mwskz;
						r.data.m_taxrt = taxrt;
						store.add(r);
						

					}
				}, this);
		//store.sort("lfpos", "asc");
		//store.sort("lfbnr", "asc");
		//store.sort("lfbja", "asc");
		/*// 删除生成结算凭证store
		tostore.each(function(r) {
					if (r.data.myid == myid) {
						tostore.remove(r);

					}
				}, this);*/
	}
}

// 刷新记录
com.zoomlion.hjsrm.settleaccounts.ModifyMgr.prototype.onRefreshRecord = function(
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

// 保存结算凭证
com.zoomlion.hjsrm.settleaccounts.ModifyMgr.prototype.onSave = function() {

	if (this.inputPanel.form.isValid()) {
		var _this = this;

		var jspz = this.inputPanel.jspz.getValue();// 结算凭证号
		var mjahr = this.inputPanel.mjahr.getValue();// 结算凭证年度

		// 生成结算凭证store
		var tostore = this.listPanel4.store;
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
					r.data.jspz = jspz;// 记录中插入结算凭证号
					r.data.mjahr = mjahr;// 记录中插入结算凭证年度
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

		var mk = new Ext.LoadMask(this.modifyWindow.id, {
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
								_this.listPanel.store.reload();
								_this.modifyWindow.hide();
								_this.listPanel3.store.removeAll();
								_this.listPanel4.store.removeAll();
								_this.inputPanel.form.reset();
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