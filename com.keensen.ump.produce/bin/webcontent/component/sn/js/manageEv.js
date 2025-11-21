com.keensen.ump.produce.component.snMgr.prototype.initEvent = function() {

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

}

com.keensen.ump.produce.component.snMgr.prototype.onCreate = function() {

	this.inputWindow.setTitle('生成序列号');

	var C = this.listPanel.getSelectionModel().getSelections();
	var l = C.length;
	if (l == 0) {
		Ext.Msg.alert('系统提示', '请选择序列号');
		return false;
	}
	this.inputWindow.prefix.setValue('');
	this.inputWindow.prodSpecName.setValue('');
	this.inputWindow.useType.setValue('');
	this.inputWindow.digit.setValue('');
	this.inputWindow.rule.setValue('');
	this.inputWindow.reserve1.setValue('');
	this.inputWindow.reserve2.setValue('');
	this.inputWindow.drawingCode.setValue('');
	this.inputWindow.pkid.setValue('');

	this.inputWindow.num.setValue('');
	this.inputWindow.num.setVisible(true);
	this.inputWindow.digit.setVisible(false);
	this.inputWindow.rule.setVisible(false);
	var l = C.length;
	if (l > 0) {
		this.inputWindow.prefix.setValue(C[0].get('prefix'));
		this.inputWindow.useType.setValue(C[0].get('useType'));
		this.inputWindow.prodSpecName.setValue(C[0].get('prodSpecName'));
		this.inputWindow.digit.setValue(C[0].get('digit'));
		this.inputWindow.rule.setValue(C[0].get('rule'));

		this.inputWindow.reserve1.setValue(C[0].get('reserve1'));
		this.inputWindow.reserve2.setValue(C[0].get('reserve2'));
		this.inputWindow.drawingCode.setValue(C[0].get('drawingCode'));

		this.inputWindow.pkid.setValue(C[0].get('id'));

		this.inputWindow.prefix.setReadOnly(true);
		this.inputWindow.useType.setReadOnly(true);
		this.inputWindow.prodSpecName.setReadOnly(true);
		this.inputWindow.digit.setReadOnly(true);
		this.inputWindow.rule.setReadOnly(true);

		this.inputWindow.reserve1.setReadOnly(true);
		this.inputWindow.reserve2.setReadOnly(true);
		this.inputWindow.drawingCode.setReadOnly(true);
		this.inputWindow.digit.setReadOnly(true);
		this.inputWindow.rule.setReadOnly(true);

		if (C[0].get('useType') == '非常规') {
			this.inputWindow.digit.setVisible(true);
			this.inputWindow.rule.setVisible(true);

		}
	}
	this.inputWindow.show();
}

com.keensen.ump.produce.component.snMgr.prototype.onSave = function() {
	var _this = this;
	if (this.inputPanel.form.isValid()) {
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();

		var num = this.inputWindow.num.getValue();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.component.sn.createSn.biz.ext",
			method : "post",
			jsonData : {
				'condition/id' : this.inputWindow.pkid.getValue(),
				'condition/num' : this.inputWindow.num.getValue(),
				'condition/prefix' : this.inputWindow.prefix.getValue(),
				'condition/useType' : this.inputWindow.useType.getValue(),
				'condition/prodSpecName' : this.inputWindow.prodSpecName
						.getValue(),
				'condition/digit' : this.inputWindow.digit.getValue(),
				'condition/rule' : this.inputWindow.rule.getValue(),
				'condition/reserve1' : this.inputWindow.reserve1.getValue(),
				'condition/reserve2' : this.inputWindow.reserve2.getValue(),
				'condition/drawingCode' : this.inputWindow.drawingCode
						.getValue()
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					_this.listPanel.store.reload();
					_this.inputPanel.form.reset();
					_this.inputWindow.hide();
					var fname = ret.fname;
					if (Ext.isEmpty(fname)) {
						Ext.Msg.alert("系统提示", ret.msg);
						return
					} else {
						if (num > 0) {
							if (Ext.isIE) {
								window
										.open('/default/deliverynote/seek/down4IE.jsp?fname='
												+ fname);
							} else {
								window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
										+ fname;
							}
						}
					}
				}

			},
			failure : function(resp, options) {
				// var ret = Ext.decode(resp.responseText);
				Ext.MessageBox.alert('失败', '请求超时或网络故障');
			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
}

com.keensen.ump.produce.component.snMgr.prototype.exportExcel = function() {
	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '元件序列号',
			'com.keensen.ump.produce.component.sn.query');
}

com.keensen.ump.produce.component.snMgr.prototype.onModify = function() {

	var C = this.listPanel.getSelectionModel().getSelections();
	var l = C.length;
	if (l == 0) {
		Ext.Msg.alert("系统提示", "请选择数据行!");
		return
	}

	this.inputWindow.setTitle('修改规则');

	this.inputWindow.prefix.setReadOnly(false);
	this.inputWindow.useType.setReadOnly(false);
	this.inputWindow.prodSpecName.setReadOnly(false);
	this.inputWindow.digit.setReadOnly(false);
	this.inputWindow.rule.setReadOnly(false);

	this.inputWindow.reserve1.setReadOnly(false);
	this.inputWindow.reserve2.setReadOnly(false);
	this.inputWindow.drawingCode.setReadOnly(false);
	this.inputWindow.digit.setReadOnly(false);
	this.inputWindow.rule.setReadOnly(false);

	this.inputWindow.prefix.setValue('');
	this.inputWindow.prodSpecName.setValue('');
	this.inputWindow.useType.setValue('');
	this.inputWindow.digit.setValue('');
	this.inputWindow.rule.setValue('');
	this.inputWindow.reserve1.setValue('');
	this.inputWindow.reserve2.setValue('');
	this.inputWindow.drawingCode.setValue('');
	this.inputWindow.pkid.setValue('');

	this.inputWindow.num.setValue(0);
	this.inputWindow.num.setVisible(false);

	this.inputWindow.digit.setVisible(true);
	this.inputWindow.rule.setVisible(true);

	if (l > 0) {
		this.inputWindow.prefix.setValue(C[0].get('prefix'));
		this.inputWindow.useType.setValue(C[0].get('useType'));
		this.inputWindow.prodSpecName.setValue(C[0].get('prodSpecName'));
		this.inputWindow.digit.setValue(C[0].get('digit'));
		this.inputWindow.rule.setValue(C[0].get('rule'));

		this.inputWindow.reserve1.setValue(C[0].get('reserve1'));
		this.inputWindow.reserve2.setValue(C[0].get('reserve2'));
		this.inputWindow.drawingCode.setValue(C[0].get('drawingCode'));

		this.inputWindow.pkid.setValue(C[0].get('id'));

		if (C[0].get('useType') == '非常规') {
			this.inputWindow.digit.setVisible(true);
			this.inputWindow.rule.setVisible(true);
		}
	}
	this.inputWindow.show();
	this.getExample();
}

com.keensen.ump.produce.component.snMgr.prototype.onAdd = function() {
	// var C = this.listPanel.getSelectionModel().getSelections();

	this.inputWindow.setTitle('新增规则');

	this.inputWindow.prefix.setReadOnly(false);
	this.inputWindow.useType.setReadOnly(false);
	this.inputWindow.prodSpecName.setReadOnly(false);
	this.inputWindow.digit.setReadOnly(false);
	this.inputWindow.rule.setReadOnly(false);

	this.inputWindow.reserve1.setReadOnly(false);
	this.inputWindow.reserve2.setReadOnly(false);
	this.inputWindow.drawingCode.setReadOnly(false);
	this.inputWindow.digit.setReadOnly(false);
	this.inputWindow.rule.setReadOnly(false);

	this.inputWindow.prefix.setValue('');
	this.inputWindow.prodSpecName.setValue('');
	this.inputWindow.useType.setValue('');
	this.inputWindow.digit.setValue('');
	this.inputWindow.rule.setValue('');
	this.inputWindow.reserve1.setValue('');
	this.inputWindow.reserve2.setValue('');
	this.inputWindow.drawingCode.setValue('');
	this.inputWindow.pkid.setValue('');

	this.inputWindow.num.setValue('0');
	this.inputWindow.num.setVisible(false);
	this.inputWindow.digit.setVisible(true);
	this.inputWindow.rule.setVisible(true);
	/*
	 * var l = C.length; if (l > 0) {
	 * this.inputWindow.prefix.setValue(C[0].get('prefix'));
	 * this.inputWindow.useType.setValue(C[0].get('useType'));
	 * this.inputWindow.prodSpecName.setValue(C[0].get('prodSpecName'));
	 * this.inputWindow.digit.setValue(C[0].get('digit'));
	 * this.inputWindow.rule.setValue(C[0].get('rule'));
	 * 
	 * this.inputWindow.reserve1.setValue(C[0].get('reserve1'));
	 * this.inputWindow.reserve2.setValue(C[0].get('reserve2'));
	 * this.inputWindow.drawingCode.setValue(C[0].get('drawingCode'));
	 * 
	 * this.inputWindow.pkid.setValue(C[0].get('id'));
	 * 
	 * if (C[0].get('useType') == '非常规') {
	 * this.inputWindow.digit.setVisible(true);
	 * this.inputWindow.rule.setVisible(true); } }
	 */
	this.inputWindow.show();
}

com.keensen.ump.produce.component.snMgr.prototype.onStop = function() {

	var _this = this;
	var pkid = '';

	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			pkid = A.data.id;
		}
	}
	Ext.Msg.confirm("操作确认", "您确实要停用吗?", function(A) {

		if (A == "yes") {
			_this.requestMask = _this.requestMask
					|| new Ext.LoadMask(Ext.getBody(), {
								msg : "后台正在操作,请稍候!"
							});
			_this.requestMask.show();
			Ext.Ajax.request({
				url : "com.keensen.ump.produce.component.sn.modifySnStatus.biz.ext",
				method : "post",
				jsonData : {
					'entitys/id' : pkid,
					'entitys/status' : 0
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						_this.listPanel.store.reload();
					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
		}
	})
}

com.keensen.ump.produce.component.snMgr.prototype.onModifyNum = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			var pkid = A.data.id;
			var num = A.data.num;
			this.modifyNumWindow.pkid.setValue(pkid);
			this.modifyNumWindow.num.setValue(num);
			this.modifyNumWindow.show();
		}
	}
}

com.keensen.ump.produce.component.snMgr.prototype.getExample = function() {

	var useType = this.inputWindow.useType.getValue();
	var prefix = this.inputWindow.prefix.getValue();
	var digit = this.inputWindow.digit.getValue();

	this.inputWindow.example.setValue(getSn(useType, prefix, digit));
}

function formatDate() {
	var date = new Date();
	var year = date.getFullYear();
	var month = String(date.getMonth() + 1).padStart(2, '0');
	var day = String(date.getDate()).padStart(2, '0');
	// var hours = String(date.getHours()).padStart(2, '0');
	// var minutes = String(date.getMinutes()).padStart(2, '0');
	// var seconds = String(date.getSeconds()).padStart(2, '0');

	return {
		year : year,
		month : month,
		day : day
	}
}

function padNumber(num, length) {
	return num.toString().padStart(length, '0');
}

function getSn(useType, prefix, digit) {

	if (Ext.isEmpty(useType) || Ext.isEmpty(prefix) || Ext.isEmpty(digit)) {
		return '';
	}
	var ret = '';
	var dt = formatDate();
	var ycode = dt.year - 2020;
	var m = dt.month;
	var mcode = ''
	switch (m) {
		case '10' :
			mcode = 'A';
			break;
		case '11' :
			mcode = 'B';
			break;
		case '12' :
			mcode = 'C';
			break;
		default :
			mcode = m;
	}
	if (useType == '家用') {
		ret = prefix + ycode + mcode + padNumber(1, digit);
	} else {
		ret = prefix + padNumber(1, digit);
	}
	return ret;
}