com.zoomlion.hjsrm.kcgl.PlanlistMgr.prototype.initEvent = function() {
	var self = this;
		this.queryPanel.mon(this.queryPanel, 'query', function() {
			var _this = this;
			var relationid = (this.queryPanel.relationid.getValue()).trim();
			if(Ext.isEmpty(relationid)){
				Ext.Msg.alert("系统提示", "请选择计划！",function(){
					_this.listPanel.store.removeAll();
					
				});
				return;
			}
			var _val = this.queryPanel.getForm().getValues() || {};
			
			

			var lifnr2 = _this.queryPanel.lifnr2.getValue();
			var regEx = new RegExp("\\n", "gi");
	
			lifnr2 = lifnr2.replace(regEx, ",");
			var regEx = new RegExp("\\s", "gi");
			lifnr2 = lifnr2.replace(regEx, ",");
	
			var regEx = new RegExp(",,", "gi");
			lifnr2 = lifnr2.replace(regEx, ",");
	
			_this.queryPanel.lifnr2.setValue(lifnr2);
			
			if(!Ext.isEmpty(lifnr2)){
				var newarr =[];
				var arr = [];
				lifnr2 = lifnr2.replace(/(^\s*)|(\s*$)/g,'');
				arr = lifnr2.split(',');
				for(var i=0;i<arr.length;i++){
					var tmp = '0000000000' + arr[i].replace('S','');
					tmp = "'" + tmp.slice(-10) + "'";
					newarr.push(tmp);
				}
				lifnr2 = newarr.join(",");
				
			}
			
			_val["condition/lifnr2"] = lifnr2;
			
			this.listPanel.store.baseParams = _val;
			this.listPanel.store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listPanel.pagingToolbar.pageSize
						}
					});
		}, this);
	
	this.queryHeadPanel.mon(this.queryHeadPanel, 'query', function() {
		var _val = this.queryHeadPanel.getForm().getValues() || {};
		this.listHeadPanel.store.baseParams = _val;
		this.listHeadPanel.store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listHeadPanel.pagingToolbar.pageSize
					}
				});
	}, this);
	
	this.queryPmatnrPanel.mon(this.queryPmatnrPanel, 'query', function() {
		var _val = this.queryPmatnrPanel.getForm().getValues() || {};
		this.listPmatnrPanel.store.baseParams = _val;
		this.listPmatnrPanel.store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPmatnrPanel.pagingToolbar.pageSize
					}
				});
	}, this);
	
	this.listHeadPanel.mon(this.listHeadPanel, 'rowdblclick', function(o, i, e) {
				this.onChoose();
			}, this);
			
	this.listPmatnrPanel.mon(this.listPmatnrPanel, 'rowdblclick', function(o, i, e) {
				this.onPmatnrChoose();
			}, this);
			
	 //修改
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
				//修改计划总数不能改大
				if(cell.data['plansum']>0){
					this.editWindow.plansum.maxValue = cell.data['plansum'];
				}
				this.editWindow.show();
				this.editWindow.loadData(cell);
			}, this);
			
	this.listPanel.mon(this.listPanel, 'rowdblclick', function(o, i, e) {
				this.onEdit();
			}, this);
			
	this.viewWindow.loadData = function(){
		var B = self.listPanel.getSelectionModel().getSelections();
		var record = new Ext.data.Record();
		record.set('pkid', B[0].get('pkid'));
		self.viewWindow.items.items[0].loadData(record);
		
	};
}

com.zoomlion.hjsrm.kcgl.PlanlistMgr.prototype.onChoose = function() {
	var records = this.listHeadPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "请选择数据！");
	} else {
		var title = records[0].get('title');
		var pkid = records[0].get('pkid');
		this.trigger.setValue(title);
		this.queryPanel.relationid.setValue(pkid);
		this.queryPanel.fireEvent('query',this.queryPanel);
		this.chooseHeadWindow.hide();
	}
}

com.zoomlion.hjsrm.kcgl.PlanlistMgr.prototype.onEdit = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B.length == 1) {
		var archive = B[0].get('archive');

		if(archive == 'Y'){
			Ext.Msg.alert("系统提示", "该计划已经归档，无法修改！");
			return;
		}
		this.listPanel.onEdit();
	} else {
		Ext.Msg.alert("系统提示", "请选择一条数据行!");
		return
	}
}

com.zoomlion.hjsrm.kcgl.PlanlistMgr.prototype.onAdd = function() {
	var relationid = (this.queryPanel.relationid.getValue()).trim();
	if(Ext.isEmpty(relationid)){
		Ext.Msg.alert("系统提示", "请选择计划！");
		return;
	}
	this.inputWindow.relationid.setValue(relationid);
	//var store = this.listPanel.store;
	//var storeCount = store.getCount();
	var rs = this.listPanel.getSelectionModel().getSelections();
	
	if(rs.length >0){
		//var r = store.getAt(0);
		var r = rs[0];
		var archive = r.get('archive');
		if(archive == 'Y'){
				Ext.Msg.alert("系统提示", "该计划已经归档，无法新增！");
				return;
		}
		
		//修改计划总数不能改大
		if(r.data['plansum']>0){
			this.inputWindow.plansum.maxValue = r.data['plansum'];
		}
		this.trigger4pmatnr.setValue(r.data.pmatnr);
		this.inputWindow.zcpcx.setValue(r.data.zcpcx);
		
		this.inputWindow.line.setValue(r.data.line);
		this.inputWindow.carno.setValue(r.data.carno);
		this.inputWindow.underamount.setValue(r.data.underamount);
		this.inputWindow.plansum.setValue(r.data.plansum);
		
		this.inputWindow.date1.setValue(r.data.date1);
		this.inputWindow.date2.setValue(r.data.date2);
		this.inputWindow.date3.setValue(r.data.date3);
		this.inputWindow.date4.setValue(r.data.date4);
		this.inputWindow.date5.setValue(r.data.date5);
		this.inputWindow.date6.setValue(r.data.date6);
		this.inputWindow.date7.setValue(r.data.date7);
		this.inputWindow.date8.setValue(r.data.date8);
		this.inputWindow.date9.setValue(r.data.date9);
		this.inputWindow.date10.setValue(r.data.date10);
		this.inputWindow.plan1.setValue(r.data.plan1);
		this.inputWindow.plan2.setValue(r.data.plan2);
		this.inputWindow.plan3.setValue(r.data.plan3);
		this.inputWindow.plan4.setValue(r.data.plan4);
		this.inputWindow.plan5.setValue(r.data.plan5);
		this.inputWindow.plan6.setValue(r.data.plan6);
		this.inputWindow.plan7.setValue(r.data.plan7);
		this.inputWindow.plan8.setValue(r.data.plan8);
		this.inputWindow.plan9.setValue(r.data.plan9);
		this.inputWindow.plan10.setValue(r.data.plan10);
	}
	this.inputWindow.show();
}

com.zoomlion.hjsrm.kcgl.PlanlistMgr.prototype.onPmatnrChoose = function() {
	var records = this.listPmatnrPanel.getSelectionModel().getSelections();
	if (records.length != 1) {
		Ext.Msg.alert("系统提示", "请选择数据！");
	} else {
		var pmatnr = records[0].get('matnr');
		var zcpcx = records[0].get('zcpcx');
		this.trigger4pmatnr.setValue(pmatnr);
		this.inputWindow.zcpcx.setValue(zcpcx);

		this.choosePmatnrWindow.hide();
	}
}

com.zoomlion.hjsrm.kcgl.PlanlistMgr.prototype.onDel = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B.length > 0) {
		var archive = B[0].get('archive');
		if(archive == 'Y'){
				Ext.Msg.alert("系统提示", "该计划已经归档，无法删除！");
				return;
		}
		this.listPanel.onDel();
	}
	
	
}

com.zoomlion.hjsrm.kcgl.PlanlistMgr.prototype.onView = function() {
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var record = new Ext.data.Record();
			record.set('pkid', B[0].get('pkid'));
			this.viewWindow.items.items[0].loadData(record);
			this.viewWindow.show();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
};

com.zoomlion.hjsrm.kcgl.PlanlistMgr.prototype.onChooseHeadWindowShow = function() {
	this.chooseHeadWindow.show();
	this.queryHeadPanel.fireEvent('query',this.queryHeadPanel);
}

com.zoomlion.hjsrm.kcgl.PlanlistMgr.prototype.onRenderAnswer = function(v1,v2) {
	if(v1<v2){
		return "<font style='color:red'>" + v1 + "</font>"; 
	}else{
		return v1;
	}
};