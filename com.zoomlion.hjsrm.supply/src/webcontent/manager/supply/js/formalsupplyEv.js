com.zoomlion.hjsrm.formalsupply.FormalsupplyMgr.prototype.destroy = function() {
	this.viewWindow.destroy();
	this.editWindow.destroy();
	this.storeTel.destroy();
	this.supplyQuerySetPanel.destroy();
	this.supplyQueryTel.destroy();
	this.storeMulti.destroy();
	this.selectMulti.destroy();
	
}
com.zoomlion.hjsrm.formalsupply.FormalsupplyMgr.prototype.initEvent = function() {

	// 增加查询事件
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

	this.storeMulti.on('load', function() {
				// Ext.getCmp(mySupplyMaterialid).selectAll(); // 全选
				Ext.getCmp(mySupplyMaterialid).setValue(str); // 默认选中王五
			});

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {

				str = cell.data.lsort;
				this.editWindow.show();
				this.editWindow.loadData(cell);
				this.storeMulti.load();

				this.storeTel.baseParams = {
					"entity/lifnr" : cell.data.lifnr
				};
				this.storeTel.load();
				var attachmentParams = {
					relationId : cell.data.lifnr,
					groupId : 'swdjpaperwork'
				};
				Ext.getCmp(this.eattachId).setPostParams(attachmentParams);
				Ext.getCmp(this.eattachId).loadParams = attachmentParams;
				Ext.getCmp(this.eattachId).loadAttachmentRemote();

				var attachmentParams1 = {
					relationId : cell.data.lifnr,
					groupId : 'zzjgparperwork'
				};
				Ext.getCmp(this.eattachId1).setPostParams(attachmentParams1);
				Ext.getCmp(this.eattachId1).loadParams = attachmentParams1;
				Ext.getCmp(this.eattachId1).loadAttachmentRemote();

				var attachmentParams2 = {
					relationId : cell.data.lifnr,
					groupId : 'yyzzpaperwork'
				};
				Ext.getCmp(this.eattachId2).setPostParams(attachmentParams2);
				Ext.getCmp(this.eattachId2).loadParams = attachmentParams2;
				Ext.getCmp(this.eattachId2).loadAttachmentRemote();

				var attachmentParams3 = {
					relationId : cell.data.lifnr,
					groupId : 'txrzpaperwork'
				};
				Ext.getCmp(this.eattachId3).setPostParams(attachmentParams3);
				Ext.getCmp(this.eattachId3).loadParams = attachmentParams3;
				Ext.getCmp(this.eattachId3).loadAttachmentRemote();

				var attachmentParams4 = {
					relationId : cell.data.lifnr,
					groupId : 'gsjjpaperwork'
				};
				Ext.getCmp(this.eattachId4).setPostParams(attachmentParams4);
				Ext.getCmp(this.eattachId4).loadParams = attachmentParams4;
				Ext.getCmp(this.eattachId4).loadAttachmentRemote();

				var attachmentParams5 = {
					relationId : cell.data.lifnr,
					groupId : 'qtfjpaperwork'
				};
				Ext.getCmp(this.eattachId5).setPostParams(attachmentParams5);
				Ext.getCmp(this.eattachId5).loadParams = attachmentParams5;
				Ext.getCmp(this.eattachId5).loadAttachmentRemote();
			}, this);

	com.zoomlion.hjsrm.formalsupply.FormalsupplyMgr.prototype.onSaveOk = function() {

		var _this = this;
		ValObj = {
			lifnr : Ext.getCmp(this.lifnr).getValue(),
			lprop : Ext.getCmp(this.lprop).getValue(),
			ltype : Ext.getCmp(this.ltype).getValue(),
			batch : Ext.getCmp(this.batch).getValue(),
			lsyst : Ext.getCmp(this.lsyst).getValue(),
			zzyyw : Ext.getCmp(this.zzyyw).getValue(),
			lsort : Ext.getCmp(mySupplyMaterialid).getValue()
		}

		var store = _this.listPanel.store;
		var records = this.storeTel.getRange();
		var supplys = [];
		Ext.each(records, function(r) {
					supplys.push(r.data);
				});

		var mk = new Ext.LoadMask(this.editWindow.id, {
					msg : '正在保存，请稍候!',
					removeMask : true
				});
		mk.show();
		Ext.Ajax.request({
			method : "post",
			scope : this,
			url : 'com.zoomlion.hjsrm.supply.manager.supply.FormalSupplyMgr.saveFromalSupply.biz.ext',
			jsonData : {
				formalsupply : ValObj,
				list : supplys
			},
			success : function(response, action) {
				mk.hide();
				// 返回值处理
				var result = Ext.decode(response.responseText);
				if (result.success) {
					_this.editWindow.hide();
					Ext.Msg.alert("系统提示", "保存成功", function() {
								store.reload();
								//_this.listPanel.getForm().reset();
							});
				}
			},
			failure : function(resp, opts) {
				mk.hide();
			}
		});
	};
};
com.zoomlion.hjsrm.formalsupply.FormalsupplyMgr.prototype.onadd = function() {
	var _this = this;
	var store = _this.listPanel.store;
	 var mk = new Ext.LoadMask(document.body, {
				msg : '正在更新数据，请稍候！',
				removeMask : true
			});
			mk.show();
	 Ext.Ajax.request({
		 method : "post",
		 scope:this,
		 url : 'com.zoomlion.hjsrm.sapinterface.SapSrmSupply.SrmSupplySynchronous.syncSrmSypply.biz.ext',	
		 success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {	
				mk.hide();
			    store.reload();
			    //_this.listPanel.getForm().reset();
			} else {						
				Ext.Msg.alert('系统提示', '更新失败');
			}
		 }
	 },this);
};	
/*
 * 绑定修改按钮方法
 */
com.zoomlion.hjsrm.formalsupply.FormalsupplyMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
};

function supplyShow(value) {

	var v = Ext.util.Format.substr(value, 1, 10);
	var fid = Ext.getCmp("showSupplyInfo").fid;
	var fid1 = Ext.getCmp("showSupplyInfo").fid1;
	var fid2 = Ext.getCmp("showSupplyInfo").fid2;
	var fid3 = Ext.getCmp("showSupplyInfo").fid3;
	var fid4 = Ext.getCmp("showSupplyInfo").fid4;
	var fid5 = Ext.getCmp("showSupplyInfo").fid5;
	var record = new Ext.data.Record({
				"lifnr" : v
			});
	Ext.getCmp("showSupplyInfo").items.items[0].loadData(record);
	Ext.getCmp("showSupplyInfo").show();

	var ds = Ext.getCmp('supplyTelPanel').getStore();
	ds.baseParams = {
		"entity/lifnr" : v
	};
	ds.load();

	var vattachmentParams = {
		relationId : v,
		groupId : 'swdjpaperwork'
	};

	Ext.getCmp(fid).setPostParams(vattachmentParams);
	Ext.getCmp(fid).loadParams = vattachmentParams;
	Ext.getCmp(fid).loadAttachmentRemote();
	var vattachmentParams1 = {
		relationId : v,
		groupId : 'zzjgparperwork'
	};
	Ext.getCmp(fid1).setPostParams(vattachmentParams1);
	Ext.getCmp(fid1).loadParams = vattachmentParams1;
	Ext.getCmp(fid1).loadAttachmentRemote();
	var vattachmentParams2 = {
		relationId : v,
		groupId : 'yyzzpaperwork'
	};
	Ext.getCmp(fid2).setPostParams(vattachmentParams2);
	Ext.getCmp(fid2).loadParams = vattachmentParams2;
	Ext.getCmp(fid2).loadAttachmentRemote();

	var vattachmentParams3 = {
		relationId : v,
		groupId : 'txrzpaperwork'
	};
	Ext.getCmp(fid3).setPostParams(vattachmentParams3);
	Ext.getCmp(fid3).loadParams = vattachmentParams3;
	Ext.getCmp(fid3).loadAttachmentRemote();

	var vattachmentParams4 = {
		relationId : v,
		groupId : 'gsjjpaperwork'
	};
	Ext.getCmp(fid4).setPostParams(vattachmentParams4);
	Ext.getCmp(fid4).loadParams = vattachmentParams4;
	Ext.getCmp(fid4).loadAttachmentRemote();

	var vattachmentParams5 = {
		relationId : v,
		groupId : 'qtfjpaperwork'
	};
	Ext.getCmp(fid5).setPostParams(vattachmentParams5);
	Ext.getCmp(fid5).loadParams = vattachmentParams5;
	Ext.getCmp(fid5).loadAttachmentRemote();
};
