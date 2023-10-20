com.zoomlion.hjsrm.kcgl.PlanqueryMgr.prototype.initEvent = function() {
	var _this = this;
	this.queryPanel.mon(this.queryPanel, 'query', function() {
			var _val = this.queryPanel.getForm().getValues() || {};
			this.listPanel.store.baseParams = _val;
			this.listPanel.store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listPanel.pagingToolbar.pageSize
						}
					});
		}, this);
		
	
	this.queryResultPanel.mon(this.queryResultPanel, 'query', function() {
			
			var _val = this.queryResultPanel.getForm().getValues() || {};
			this.listResultPanel.store.baseParams = _val;
			this.listResultPanel.store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listResultPanel.pagingToolbar.pageSize
						}
					});
		}, this);
		
	this.queryViewPanel.mon(this.queryViewPanel, 'query', function() {
			var _val = this.queryViewPanel.getForm().getValues() || {};
			this.listViewPanel.store.baseParams = _val;
			this.listViewPanel.store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listViewPanel.pagingToolbar.pageSize
						}
					});
		}, this);
		
	this.viewWindow.loadData = function(){
		_this.listViewPanel.store.reload();
	};
	
	this.resultWindow.loadData = function(){
		_this.listResultPanel.store.reload();
	};
	
	this.listPanel.mon(this.listPanel, 'rowdblclick', function(o, i, e) {
				this.onCalc();
			}, this);
			
	this.listResultPanel.mon(this.listResultPanel, 'rowdblclick', function(o, i, e) {
				this.onDetail();
			}, this);
			
	this.viewOptWindow.loadData = function(){
		_this.listViewOptPanel.store.reload();
	};
	
	this.viewOptWindow.loadData = function(){
		_this.listViewNoAnswerPanel.store.reload();
	};
			
}

com.zoomlion.hjsrm.kcgl.PlanqueryMgr.prototype.onView = function() {
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			view_relationid = B[0].get('pkid');
			view_pmatnr = '';
			view_line = '';
			this.listViewPanel.store.baseParams = {'condition/relationid': view_relationid};
			this.queryViewPanel.relationid2.setValue(view_relationid);
			this.queryViewPanel.pmatnr.setValue(view_pmatnr);
			this.queryViewPanel.line.setValue(view_line);
			this.queryViewPanel.mytitle.hide();
			this.listViewPanel.store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listViewPanel.pagingToolbar.pageSize
						}
					});
			this.viewWindow.show();
			this.viewWindow.maximize();
		}
	} else {
		//Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
		//查询所有计划明细
		view_relationid = '';
		view_pmatnr = '';
		view_line = '';
		this.queryViewPanel.mytitle.show();
		this.listViewPanel.store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listViewPanel.pagingToolbar.pageSize
						}
					});
		this.viewWindow.show();
		this.viewWindow.maximize();
	}
};

com.zoomlion.hjsrm.kcgl.PlanqueryMgr.prototype.onRenderAnswer = function(v1,v2) {
	if(v1<v2){
		return "<font style='color:red'>" + v1 + "</font>"; 
	}else{
		return v1;
	}
};

com.zoomlion.hjsrm.kcgl.PlanqueryMgr.prototype.onCalc = function() {
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			result_relationid = B[0].get('pkid');
			view_relationid = B[0].get('pkid');
			this.queryResultPanel.relationid.setValue(result_relationid);
			this.queryViewPanel.relationid2.setValue(view_relationid);
			var _val = {'condition/relationid' : result_relationid};
			this.listResultPanel.store.baseParams = _val;
	
			this.listResultPanel.store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listResultPanel.pagingToolbar.pageSize
						}
					});

			this.resultWindow.show();
			//this.resultWindow.maximize();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
};

com.zoomlion.hjsrm.kcgl.PlanqueryMgr.prototype.onDetail = function() {
	var _this = this;
	var B = this.listResultPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			
			this.queryViewPanel.mytitle.hide();
			view_relationid = B[0].get('relationid');
			view_pmatnr = B[0].get('pmatnr');
			view_line = B[0].get('line'); 
			this.queryViewPanel.relationid2.setValue(view_relationid);
			this.queryViewPanel.pmatnr.setValue(view_pmatnr);
			this.queryViewPanel.line.setValue(view_line);
			
			this.listViewPanel.store.baseParams = {'condition/relationid': B[0].get('relationid'),
													'condition/pmatnr': B[0].get('pmatnr'),
													'condition/line': B[0].get('line')};
			
			this.listViewPanel.store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listViewPanel.pagingToolbar.pageSize
						}
					});
			this.viewWindow.show();
			this.viewWindow.maximize();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
};

com.zoomlion.hjsrm.kcgl.PlanqueryMgr.prototype.onExport = function() {
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
			this.requestMask.show();
			Ext.Ajax.request({
				method : "post",
				scope : this,		
				url : 'com.zoomlion.hjsrm.kcgl.stockmanage.exportPlanlist.biz.ext',
				jsonData : {'condition/relationid': B[0].get('pkid')},
				success : function(response, action) {
								this.requestMask.hide();
								// 返回值处理
								var res = Ext.decode(response.responseText);
								var fname = res.fname;
								window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
											+ fname;
				},
				failure : function(resp, opts) {
					this.requestMask.hide();
				}
						
			});
			
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
		return;
	}

};

com.zoomlion.hjsrm.kcgl.PlanqueryMgr.prototype.onExportResult = function() {
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
			this.requestMask.show();
			Ext.Ajax.request({
				method : "post",
				scope : this,		
				url : 'com.zoomlion.hjsrm.kcgl.stockmanage.exportPlanresult.biz.ext',
				jsonData : {'condition/relationid': B[0].get('pkid')},
				success : function(response, action) {
								this.requestMask.hide();
								// 返回值处理
								var res = Ext.decode(response.responseText);
								var fname = res.fname;
								window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
											+ fname;
				},
				failure : function(resp, opts) {
					this.requestMask.hide();
				}
						
			});
			
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
		return;
	}

};

com.zoomlion.hjsrm.kcgl.PlanqueryMgr.prototype.onViewOpt = function() {
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			this.listViewOptPanel.store.baseParams = {'condition/relationid': B[0].get('pkid')};
			this.listViewOptPanel.store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listViewOptPanel.pagingToolbar.pageSize
						}
					});
			this.viewOptWindow.show();
			//this.viewOptWindow.maximize();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
};

com.zoomlion.hjsrm.kcgl.PlanqueryMgr.prototype.onViewOpt4Lifnr = function() {
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			this.listViewOptPanel.store.baseParams = {'condition/relationid': B[0].get('pkid'),
														'condition/opt': '11'};
			this.listViewOptPanel.store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listViewOptPanel.pagingToolbar.pageSize
						}
					});
			this.viewOptWindow.show();
			//this.viewOptWindow.maximize();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
};

com.zoomlion.hjsrm.kcgl.PlanqueryMgr.prototype.onViewNoAnswer = function() {
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			this.listViewNoAnswerPanel.store.baseParams = {'condition/relationid': B[0].get('pkid')};
			this.listViewNoAnswerPanel.store.load({
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.listViewNoAnswerPanel.pagingToolbar.pageSize
						}
					});
			this.viewNoAnswerWindow.show();
			//this.viewOptWindow.maximize();
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
	}
};

com.zoomlion.hjsrm.kcgl.PlanqueryMgr.prototype.onResetViewPanel = function() {
	this.queryViewPanel.getForm().reset();
	this.queryViewPanel.relationid2.setValue(view_relationid);
	this.queryViewPanel.pmatnr.setValue(view_pmatnr);
	this.queryViewPanel.line.setValue(view_line);
};

com.zoomlion.hjsrm.kcgl.PlanqueryMgr.prototype.onResetResultPanel = function() {
	this.queryResultPanel.getForm().reset();
	this.queryResultPanel.relationid.setValue(result_relationid);
	this.queryViewPanel.relationid2.setValue(view_relationid);
};


com.zoomlion.hjsrm.kcgl.PlanqueryMgr.prototype.onExportOpt = function() {
	var _this = this;
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
			this.requestMask.show();
			Ext.Ajax.request({
				method : "post",
				scope : this,		
				url : 'com.zoomlion.hjsrm.kcgl.stockmanage.exportOpt.biz.ext',
				jsonData : {'condition/relationid': B[0].get('pkid')},
				success : function(response, action) {
								this.requestMask.hide();
								// 返回值处理
								var res = Ext.decode(response.responseText);
								var fname = res.fname;
								window.location.href = "com.zoomlion.hjsrm.kcgl.download.flow?fileName="
											+ fname;
				},
				failure : function(resp, opts) {
					this.requestMask.hide();
				}
						
			});
			
		}
	} else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
		return;
	}

};

//合并计算
com.zoomlion.hjsrm.kcgl.PlanqueryMgr.prototype.onMerge = function() {
	var _this = this;
	var B = this.listViewPanel.getSelectionModel().getSelections();
	if (B && B.length >1) {
		var arr = [];
		var pmatnr = B[0].get('pmatnr');
		var line = B[0].get('line');
		for(var i=0;i<B.length;i++){
			if(!Ext.isEmpty(B[i].get('stand'))){
				Ext.Msg.alert("系统提示", "请选择未合并的数据行!");
				return;
			}
			if(pmatnr != B[i].get('pmatnr')){
				Ext.Msg.alert("系统提示", "请选择相同车型的数据行!");
				return;
			}
			if(line != B[i].get('line')){
				Ext.Msg.alert("系统提示", "请选择相同产品线的数据行!");
				return;
			}
			arr.push(B[i].get('pkid'));
		}
		this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
		this.requestMask.show();
		Ext.Ajax.request({
				method : "post",
				scope : this,		
				url : 'com.zoomlion.hjsrm.kcgl.stockmanage.updateMerge.biz.ext',
				jsonData : {'pkids': arr.join(','),'stand':arr.join(',')},
				success : function(response, action) {
								_this.requestMask.hide();
								// 返回值处理
								_this.listViewPanel.store.reload();
								if(_this.resultWindow.isVisible()){
									_this.listResultPanel.store.reload();
								}
				},
				failure : function(resp, opts) {
					_this.requestMask.hide();
				}
						
			});
		
	}else {
		Ext.Msg.alert("系统提示", "没有选择待合并的数据行，请选择数据行!");
		return;
	}
}

//取消合并
com.zoomlion.hjsrm.kcgl.PlanqueryMgr.prototype.onCancelMerge = function() {
	var _this = this;
	var B = this.listViewPanel.getSelectionModel().getSelections();
	if (B && B.length >1) {
		var stand = B[0].get('stand');//取出第一条
		
		if(Ext.isEmpty(stand)){
			Ext.Msg.alert("系统提示", "请选择已合并的数据行!");
			return;
		}
		var arr = stand.split(',');
		if(arr.length != B.length){
			Ext.Msg.alert("系统提示", "请选择所有已合并的数据行!");
			return;
		}
		
		for(var i=0;i<B.length;i++){
			if(stand != B[i].get('stand')){
				Ext.Msg.alert("系统提示", "请选择关联的数据行!");
				return;
			}
			
		}
		
		this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "正在执行操作..."
			});
		this.requestMask.show();
		Ext.Ajax.request({
				method : "post",
				scope : this,		
				url : 'com.zoomlion.hjsrm.kcgl.stockmanage.updateMerge.biz.ext',
				jsonData : {'pkids': stand,'stand':''},
				success : function(response, action) {
								_this.requestMask.hide();
								// 返回值处理
								_this.listViewPanel.store.reload();
								if(_this.resultWindow.isVisible()){
									_this.listResultPanel.store.reload();
								}
				},
				failure : function(resp, opts) {
					_this.requestMask.hide();
				}
						
			});
	}else {
		Ext.Msg.alert("系统提示", "没有选择已合并的数据行，请选择数据行!");
		return;
	}
	
}