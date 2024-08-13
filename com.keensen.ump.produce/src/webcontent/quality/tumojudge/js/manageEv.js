com.keensen.ump.produce.quality.timojudgeMgr.prototype.initEvent = function() {

	var _this = this;

	this.queryPanel.form.findField(['condition/produceDtStart'])
			.setValue(new Date().add(Date.DAY, -1).format('Y-m-d'));
	this.queryPanel.form.findField(['condition/produceDtEnd'])
			.setValue(new Date().add(Date.DAY, +1).format('Y-m-d'));
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

	this.listPanel2.store.on('load', function(o) {
				var isBatchQualified = _this.editPanel.form
						.findField('isBatchQualified2').getValue();
				var isBatchQualified2 = _this.editPanel.form
						.findField('entity/isQualified').getValue();
				if (Ext.isEmpty(isBatchQualified)) {
					_this.editPanel.form.findField('isBatchQualified2')
							.setValue(isBatchQualified2);
				}
				/*var store = _this.listPanel2.store;
				var records = store.getRange();
				Ext.each(records, function(r) {
							var perfIsQualified = r.data['perfIsQualified'];
							if (perfIsQualified == 'N') {
								_this.editPanel.perfIsQualified.setValue('N');
							}
						})*/

			})

	this.inputWindow.items.items[0].mon(this.inputWindow.items.items[0],
			'aftersave', function() {
				this.listPanel.store.reload();
				this.inputWindow.hide();
				return false;
			}, this);

	this.editPanel.mon(this.editPanel, 'afterload', function() {

				var recordId = _this.editPanel.form
						.findField('entity/recordId').getValue();
				var perfFlagId = _this.editPanel.perfFlagId.getValue();
				var isBatchQualified = _this.editPanel.isBatchQualified
						.getValue();
				var isKeep = _this.editPanel.isKeep.getValue();
				var isWx = _this.editPanel.isWx.getValue();
				var trendText = _this.editPanel.trend.getValue();
				var qualifidLength = _this.editPanel.qualifidLength.getValue();
				var produceRemark = _this.editPanel.produceRemark.getValue();
				var tagNum = _this.editPanel.tagNum.getValue();
				var tagLength = _this.editPanel.tagLength.getValue();
				
				//c21
				var mpd = _this.editPanel.mpd.getValue();
				if(!Ext.isEmpty(mpd) && parseFloat(mpd)>=10)
					_this.editPanel.mpdIsQualified.setValue('N')
				else
					_this.editPanel.mpdIsQualified.setValue('Y')
				var mpdIsQualified = _this.editPanel.mpdIsQualified.getValue();
				if (Ext.isEmpty(trendText)) {
					_this.editPanel.trend.setValue(trend(perfFlagId,
							isBatchQualified, isKeep, isWx, qualifidLength,
							produceRemark, tagNum, tagLength,mpdIsQualified));
					
					
				}
				
				
				
				
				_this.listPanel2.store.load({
							params : {
								"condition/batchId" : recordId
							}
						}, this);
				/*
				 * // 外观判定 var appearanceIsQualified = _this.editPanel.form
				 * .findField('entity/appearanceIsQualified').getValue(); var
				 * tagNum = _this.editPanel.form.findField('tagNum')
				 * .getValue(); var tagLength =
				 * _this.editPanel.form.findField('tagLength') .getValue(); if
				 * (Ext.isEmpty(appearanceIsQualified)) { if
				 * (Ext.isEmpty(tagNum) && Ext.isEmpty(tagLength)) {
				 * _this.editPanel.form
				 * .findField('entity/appearanceIsQualified') .setValue('Y'); }
				 * else { if (Ext.isEmpty(tagNum) || Ext.isEmpty(tagLength)) {
				 * _this.editPanel.form
				 * .findField('entity/appearanceIsQualified') .setValue('N'); }
				 * else { if (tagNum <= 6 && tagLength <= 5) {
				 * _this.editPanel.form
				 * .findField('entity/appearanceIsQualified') .setValue('Y'); }
				 * else { _this.editPanel.form
				 * .findField('entity/appearanceIsQualified') .setValue('N'); } } } } //
				 */})

	/*
	 * this.editpanel.form.mon(this.editpanel.form, 'aftersave', function() {
	 * this.listPanel.store.reload();
	 * 
	 * var judgerName = this.editWindow.items.items[0].judgerName .getValue();
	 * 
	 * if (Ext.isEmpty(judgerName) || judgerName == '系统自动') {
	 * this.editWindow.items.items[0].judgercombobox.setValue(optId); } },
	 * this);
	 */

}

com.keensen.ump.produce.quality.timojudgeMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();

	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请您稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.zoomlion.hjsrm.pub.file.excelutil.exportExcelMgr.exportExcelByNamingSql.biz.ext",
		method : "post",
		jsonData : {
			'map' : daochu,
			namingsql : 'com.keensen.ump.produce.quality.quality.queryTumoJudge',
			templateFilename : 'ks_quality_tumojudge'
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

com.keensen.ump.produce.quality.timojudgeMgr.prototype.onSave = function() {
	var _thispanel = this.editPanel;
	var _thislist = this.listPanel;
	var _this = this;
	if (_thispanel.form.isValid()) {
		_thispanel.form.submit({
					method : "POST",
					url : _thispanel.saveUrl,
					waitTitle : "操作提示",
					waitMsg : "保存数据中",
					success : function(C, B) {
						var D = B.result;
						if (D.success) {
							Ext.MessageBox.alert("操作提示", "保存成功!", function() {
										_thislist.store.reload();
										_this.editWindow.hide();
									})
						}
					},
					failure : function(C, B) {
						if (B.result.exception) {
							var A, E;
							if (B.result.exception.extype == "biz") {
								E = "【" + B.result.exception.message + "】";
								A = Ext.Msg.WARNING;
							} else {
								A = Ext.Msg.ERROR;
								E = "【系统发生异常！请与管理员联系】";
							}
							Ext.Msg.show({
										width : 350,
										title : "操作提示",
										msg : E,
										icon : A,
										buttons : Ext.Msg.OK
									})
						}
					}
				})
	}

}

com.keensen.ump.produce.quality.timojudgeMgr.prototype.onJudge = function() {
	// this.listPanel.onEdit();
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length == 1) {
			var r = B[0];

			this.editWindow.items.items[0].loadData(r);

			this.editWindow.show();
		} else {
			Ext.Msg.alert("系统提示", "请选择一条数据!");
		}
	} else {
		Ext.Msg.alert("系统提示", "请选择数据!");
		return
	}
}

function trend(perfFlagId, isBatchQualified, isKeep, isWx, qualifidLength,
		produceRemark, tagNum, tagLength,mpdIsQualified) {
	 //alert(perfFlagId + '---' + isBatchQualified + '---' + isKeep + '---' +
	 //isWx);
	// 发货膜片
	// A等品 合格 走向仓库发货仓
	// alert(perfFlagId);
	
	
			
	if(mpdIsQualified=='N'){
		perfFlagId = 300032;
		isBatchQualified = 'N'
	}
			
	var ret = '';
	if (isWx == 'Y' && perfFlagId == 300029 && isBatchQualified == 'Y') {
		ret = '仓库发货仓';
	}
	
	// C等品 不合格 走向待二次判定
	if (isWx == 'Y' && perfFlagId == 300032 && isBatchQualified == 'N') {
		ret = '待二次判定';
	}
	// 保留品 不合格 走向仓库C仓
	if (isWx == 'Y' && isKeep == 'Y' && isBatchQualified == 'N') {
		ret = '仓库C仓';
	}
	// 自用膜片
	// A/B等品 合格 走向仓库AB仓
	if (isWx == 'N' && (perfFlagId == 300029 || perfFlagId == 300030)
			&& isBatchQualified == 'Y') {
		ret = '仓库AB仓';
	}
	// C等品 不合格 走向仓库AB仓
	if (isWx == 'N' && perfFlagId == 300032 && isBatchQualified == 'N') {
		ret = '仓库AB仓';
	}
	// 保留品 不合格 走向仓库C仓
	if (isWx == 'N' && isKeep == 'Y' && isBatchQualified == 'N') {
		ret = '仓库C仓';
	}

	// 外销，合格长度小于300m入AB仓
	if (isWx == 'Y' && qualifidLength < 300) {
		ret = '仓库AB仓';
	}

	// 异常备注里面出现整卷，两个字，系统自动外观判定不合格+流向AB仓
	if (!Ext.isEmpty(produceRemark) && produceRemark.indexOf('整卷') > -1) {
		ret = '仓库AB仓';
	}
	// 发货请检单内瑕疵标签个数＞10个，瑕疵总长度＞30m，自动流向AB仓
	if (tagNum > 10 && tagLength > 30) {
		ret = '仓库AB仓';
	}
	return ret;

}

com.keensen.ump.produce.quality.timojudgeMgr.prototype.onUpdateApplyIsJudged = function() {
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

com.keensen.ump.produce.quality.timojudgeMgr.prototype.onReduce = function() {
	// this.listPanel.onEdit();
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		var arr = [];
		var arr2 = [];
		for (var i = 0; i < B.length; i++) {
			var recordId = B[i].get('recordId');
			arr.push(recordId);
			var batchNo = B[i].get('batchNo');
			arr2.push(batchNo);
		}
		this.inputWindow.batchNo.setValue(arr2.join(','));
		this.inputWindow.recordIds.setValue(arr.join(','));
		this.inputWindow.show();
	} else {
		Ext.Msg.alert("系统提示", "请选择数据!");
		return
	}
}

com.keensen.ump.produce.quality.timojudgeMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
}