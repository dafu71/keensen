com.keensen.ump.research.project.ProjectBaseMgr.prototype.initEvent = function() {
	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		if (Ext.isEmpty(vals)) {
			vals = {};
		}
		vals['nameSqlId'] = 'com.keensen.ump.produce.reseach.project.queryProjectBase';
		store.baseParams = vals;

		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	// 查询事件
	this.queryProjectUserPanel.mon(this.queryProjectUserPanel, 'query',
			function(form, vals) {
				var store = this.projectUserListPanel.store;
				var projectId = this.projectUserWindow.projectId;
				if (Ext.isEmpty(vals)) {
					vals = {
						'condition/projectId' : projectId
					};
				} else {
					vals['condition/projectId'] = projectId
				}
				vals['nameSqlId'] = 'com.keensen.ump.produce.reseach.project.queryProjectUser';
				store.baseParams = vals;

				store.load({
					params : {
						// 'nameSqlId':'com.keensen.ump.produce.reseach.project.queryProjectUser',
						"pageCond/begin" : 0,
						"pageCond/length" : this.projectUserListPanel.pagingToolbar.pageSize
					}
				});
			}, this);

	// 查询事件
	this.queryChooseUserPanel.mon(this.queryChooseUserPanel, 'query', function(
			form, vals) {
		var store = this.chooseUserListPanel.store;
		var projectId = this.chooseUserWindow.projectId;
		if (Ext.isEmpty(vals)) {
			vals = {
				'condition/projectId' : projectId
			};
		} else {
			vals['condition/projectId'] = projectId
		}
		vals['nameSqlId'] = 'com.keensen.ump.base.organduser.queryUser';

		store.baseParams = vals;

		store.load({
			params : {
				"pageCond/begin" : 0,
				"pageCond/length" : this.chooseUserListPanel.pagingToolbar.pageSize
			}
		});
	}, this);

	// 查询事件
	this.queryChooseSingleUserPanel.mon(this.queryChooseSingleUserPanel,
			'query', function(form, vals) {
				var store = this.chooseSingleUserListPanel.store;
				if (Ext.isEmpty(vals)) {
					vals = {};
				}
				vals['nameSqlId'] = 'com.keensen.ump.base.organduser.queryUser';

				store.baseParams = vals;

				store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.chooseSingleUserListPanel.pagingToolbar.pageSize
					}
				});
			}, this);

	// 增加修改事件
	this.listPanel.mon(this.listPanel, 'update', function(gird, cell) {
		if (this.opt == 'edit') {
			this.editWindow.show();
			cell.set('nameSqlId',
					'com.keensen.ump.produce.reseach.project.queryProjectBase');
			this.editWindow.loadData(cell);
		}
		if (this.opt == 'arrange') {
			var projectId = cell.get('id');
			this.projectUserWindow.projectId = projectId;
			this.queryProjectUserPanel.fireEvent('query',
					this.queryProjectUserPanel);
			this.projectUserWindow.show();
		}
	}, this);

	this.editWindow.activeItem.mon(this.editWindow.activeItem, 'afterload',
			function(win, data) {
				var projectStart = this.editWindow.projectStart.getValue();
				var projectEnd = this.editWindow.projectEnd.getValue();
				this.editWindow.items.items[0].form
						.findField(['entity/projectStart'])
						.setValue(projectStart);
				this.editWindow.items.items[0].form
						.findField(['entity/projectEnd']).setValue(projectEnd);
			}, this);

	this.viewWindow.items.items[0].mon(this.viewWindow.items.items[0],
			'afterload', function(win, data) {
				var projectStart = this.viewWindow.projectStart.getValue();
				var projectEnd = this.viewWindow.projectEnd.getValue();
				this.viewWindow.items.items[0].form
						.findField(['entity/projectStart'])
						.setValue(projectStart);
				this.viewWindow.items.items[0].form
						.findField(['entity/projectEnd']).setValue(projectEnd);
			}, this);
}

com.keensen.ump.research.project.ProjectBaseMgr.prototype.onDel = function() {
	this.listPanel.onDel();
};

com.keensen.ump.research.project.ProjectBaseMgr.prototype.onView = function() {
	var B = this.listPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		if (B.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return
		} else {
			var A = B[0];
			var materSpecCode = A.get('materSpecCode');
			A.set('nameSqlId',
					'com.keensen.ump.produce.reseach.project.queryProjectBase');
			this.viewWindow.items.items[0].loadData(A);
			this.viewWindow.show();

		}
	}
}

com.keensen.ump.research.project.ProjectBaseMgr.prototype.exportExcel = function() {
	var _this = this;
	var daochu = _this.queryPanel.getForm().getValues();
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.base.storage.exportStorage.biz.ext",
		method : "post",
		jsonData : daochu,
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				if (ret.success) {
					var fname = ret.fname;
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

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.research.project.ProjectBaseMgr.prototype.onAdd = function() {
	this.inputWindow.show();

}

com.keensen.ump.research.project.ProjectBaseMgr.prototype.destroy = function() {
	this.editWindow.destroy();
	this.inputWindow.destroy();
	this.viewWindow.destroy();
	this.chooseUserWindow.destroy();
	this.chooseSingleUserWindow.destroy();

}

com.keensen.ump.research.project.ProjectBaseMgr.prototype.onEdit = function() {
	this.opt = 'edit';
	this.listPanel.onEdit();
};

com.keensen.ump.research.project.ProjectBaseMgr.prototype.exportExcel = function() {

	doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '研发项目',
			'com.keensen.ump.produce.reseach.project.queryProjectBase');

}

com.keensen.ump.research.project.ProjectBaseMgr.prototype.onArrange = function() {
	this.opt = 'arrange';
	this.listPanel.onEdit();
}

com.keensen.ump.research.project.ProjectBaseMgr.prototype.onAddUser = function() {
	this.chooseUserWindow.projectId = this.projectUserWindow.projectId;
	this.queryChooseUserPanel.fireEvent('query', this.queryChooseUserPanel);
	this.chooseUserWindow.show();

}

com.keensen.ump.research.project.ProjectBaseMgr.prototype.onChooseUser = function() {
	var _this = this;
	var B = this.chooseUserListPanel.getSelectionModel().getSelections();
	if (B && B.length != 0) {
		var arr = [];
		for (var i = 0; i < B.length; i++) {
			var userId = B[i].get('userId');
			arr.push(userId);
		}
		var userIds = arr.join(',');
		var projectId = this.chooseUserWindow.projectId;
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.reseach.project.insertProjectUsers.biz.ext",
			method : "post",
			jsonData : {
				userIds : userIds,
				projectId : projectId
			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					_this.queryProjectUserPanel.fireEvent('query',
							_this.queryProjectUserPanel);
					_this.listPanel.store.reload();
					_this.chooseUserWindow.hide();
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	} else {
		Ext.Msg.alert("系统提示", "请选择数据!");
		return
	}

}

com.keensen.ump.research.project.ProjectBaseMgr.prototype.onDelUser = function() {
	this.projectUserListPanel.onDel();
};

com.keensen.ump.research.project.ProjectBaseMgr.prototype.exportUserWork = function() {
	var _this = this;
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
				url : "com.keensen.ump.base.common.query.biz.ext",
				method : "post",
				jsonData : {
					'condition/projectCode' : this.queryPanel.projectCode
							.getValue(),
					'condition/projectName' : this.queryPanel.projectName
							.getValue(),
					nameSqlId : 'com.keensen.ump.produce.reseach.project.countUserWork'
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						var data = ret.data;
						var columns = [{
									header : '项目编号',
									key : 'projectCode'
								}, {
									header : '项目名称',
									key : 'projectName'
								}, {
									header : '人员名称',
									key : 'userName'
								}, {
									header : '填写工时',
									key : 'fillingHours'
								}, {
									header : '确认工时',
									key : 'confirmHours'
								}];

						doExprot('项目人员工时统计', data, columns);

					}

				},
				callback : function() {
					_this.requestMask.hide()
				}
			})
}

com.keensen.ump.research.project.ProjectBaseMgr.prototype.exportProjectUser = function() {
	var _this = this;
	this.requestMask = this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	this.requestMask.show();
	Ext.Ajax.request({
		url : "com.keensen.ump.base.common.query.biz.ext",
		method : "post",
		jsonData : {
			'condition/projectCode' : this.queryPanel.projectCode.getValue(),
			'condition/projectName' : this.queryPanel.projectName.getValue(),
			nameSqlId : 'com.keensen.ump.produce.reseach.project.queryProjectUser'
		},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {
				var data = ret.data;
				var columns = [{
							key : 'projectCode',
							header : '项目编码'
						}, {
							key : 'projectName',
							header : '项目名称'
						}, {
							key : 'userName',
							header : '人员名称'
						}, {
							key : 'userId',
							header : '登录账号'
						}];

				doExprot('项目人员统计', data, columns);

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

com.keensen.ump.research.project.ProjectBaseMgr.prototype.onChooseHeadman = function() {
	this.queryChooseSingleUserPanel.form.reset();
	this.chooseSingleUserWindow.show();
}

com.keensen.ump.research.project.ProjectBaseMgr.prototype.onChooseSingleUser = function() {
	var _this = this;
	
	var B = this.chooseSingleUserListPanel.getSelectionModel().getSelections();
	if (B && B.length == 1) {
		var userId = B[0].get('userId');
		var userName = B[0].get('userName');
		if(!this.editWindow.hidden){
			this.editWindow.headmanId.setValue(userId);
			this.editWindow.headmanName.setValue(userName);
		}
		if(!this.inputWindow.hidden){
			this.inputWindow.headmanId.setValue(userId);
			this.inputWindow.headmanName.setValue(userName);
		}
		this.chooseSingleUserWindow.hide();
	}
}

com.keensen.ump.research.project.ProjectBaseMgr.prototype.exportUser = function() {
	this.queryProjectUserPanel.projectId.setValue(this.projectUserWindow.projectId);
	doQuerySqlAndExport(this, this.queryProjectUserPanel, this.projectUserListPanel, '研发项目人员',
			'com.keensen.ump.produce.reseach.project.queryProjectUser');

}