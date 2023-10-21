com.keensen.ump.produce.diaphragm.ship.ShipChooseMgr.prototype.initEvent = function() {

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

	this.listPanel.store.on('load', function() {
		var _me = _this;
		var vals = _this.queryPanel.getForm().getValues();

		_this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		_this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.diaphragm.ship.choose.queryTumoSum.biz.ext",
			method : "post",
			jsonData : {
				'map' : vals
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if(!Ext.isEmpty(ret.data)){
						var data = ret.data[0];
						Ext.getCmp('shipchooseoutlength').setValue('合计长度(m):' + data.outLength);
						Ext.getCmp('shipchooseusefullength').setValue('合计可用长度(m):' + data.usefulLength);
						Ext.getCmp('shipchoosequalifidLength').setValue('合计合格长度(m):' + data.qualifidLength);
						Ext.getCmp('shipchooseloss').setValue('合计不良长度(m):' + data.loss  );
						Ext.getCmp('shipchooseaqualifidlength').setValue('<span style="color:red;font-weight: bold;">合计A等长度(m):' + data.aqualifidLength + '</span>');
						Ext.getCmp('shipchoosebqualifidlength').setValue('<span style="color:blue;font-weight: bold;">合计B等长度(m):' + data.bqualifidLength + '</span>');
						Ext.getCmp('shipchoosecqualifidlength').setValue('<span style="color:#000000;font-weight: bold;">合计C等长度(m):' + data.cqualifidLength + '</span>');
					}else{
						Ext.getCmp('shipchooseoutlength').setValue('合计长度(m):');
						Ext.getCmp('shipchooseusefullength').setValue('合计可用长度(m):');
						Ext.getCmp('shipchoosequalifidLength').setValue('合计合格长度(m):');
						Ext.getCmp('shipchooseloss').setValue('合计不良长度(m):' );
						Ext.getCmp('shipchooseaqualifidlength').setValue('合计A等长度(m):' );
						Ext.getCmp('shipchoosebqualifidlength').setValue('合计B等长度(m):' );
						Ext.getCmp('shipchoosecqualifidlength').setValue('合计C等长度(m):' );
					}
				}
			},
			callback : function() {
				_me.requestMask.hide()
			}
		})
		
	});

}

function dealchoose2(shipflag, batchNo, index) {
	var A = Ext.getCmp('ship-choose-list');
	var title = shipflag == 'n' ? '是否生成发货单?' : '是否取消发货单?';
	Ext.Msg.confirm("系统提示", title, function(btnText) {
		if (btnText == "yes") {
			Ext.Ajax.request({
				method : "post",
				scope : this,
				url : 'com.keensen.ump.produce.diaphragm.ship.choose.createShip.biz.ext',
				jsonData : {
					"flag" : shipflag,
					"recordId" : index,
					"batchNo" : batchNo
				},
				success : function(response, action) {
					A.store.load({
								params : {
									"pageCond/begin" : 0,
									"pageCond/length" : A.pagingToolbar.pageSize
								}
							});
				}
			});
		}
	})

}

com.keensen.ump.produce.diaphragm.ship.ShipChooseMgr.prototype.exportExcel = function() {
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
			namingsql : 'com.keensen.ump.produce.diaphragm.ship.ship.queryTumo',
			templateFilename : 'ks_mp_fhd'
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