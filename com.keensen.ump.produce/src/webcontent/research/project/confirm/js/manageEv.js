com.keensen.ump.research.project.ProjectConfirmnMgr.prototype.initEvent = function() {

	var _this = this;

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		if (Ext.isEmpty(vals)) {
			vals = {

			};
		}
		vals['nameSqlId'] = 'com.keensen.ump.produce.reseach.project.queryProjectWork';

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
}

com.keensen.ump.research.project.ProjectConfirmnMgr.prototype.onConfirm = function() {
	this.doConfirm(0);
}

com.keensen.ump.research.project.ProjectConfirmnMgr.prototype.onConfirm2 = function() {
	this.doConfirm(1);
}

com.keensen.ump.research.project.ProjectConfirmnMgr.prototype.doConfirm = function(
		flag) {
	var A = this.listPanel;
	var _this = this;
	if (!A.getSelectionModel().getSelected()) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！");
		return;
	} else {
		var records = A.getSelectionModel().getSelections();
		var works = [];
		var projectId = records[0].data['projectId']
		Ext.each(records, function(r) {

					var d = {
						'projectId' : r.data['projectId'],
						'userId' : r.data['userId'],
						'workDate' : r.data['workDate'],
						'flag' : flag
					}
					works.push(d);
				});

		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "后台正在操作,请稍候!"
						});
		this.requestMask.show();
		Ext.Ajax.request({
			url : "com.keensen.ump.produce.reseach.project.confirmBatch.biz.ext",
			method : "post",
			jsonData : {
				works : works

			},
			success : function(resp) {
				var ret = Ext.decode(resp.responseText);
				if (ret.success) {
					if (ret.success) {
						var vals = {};
						vals['nameSqlId'] = _this.nameSqlId;
						vals['condition/projectId'] = projectId;
						_this.listPanel.store.baseParams = vals;
						_this.listPanel.store.reload();
					}
				}

			},
			callback : function() {
				_this.requestMask.hide()
			}
		})
	}
}

function confirm(projectId, userId, workDate, flag) {

	var A = Ext.getCmp('project-confirm-list');
	// var title = flag == '1' ? "是否取消确认选定工时?" : "是否确认选定工时?";
	// Ext.Msg.confirm("系统提示", title, function(btnText) {
	// if (btnText == "yes") {
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.reseach.project.confirm.biz.ext',
		jsonData : {
			"projectId" : projectId,
			"userId" : userId,
			"workDate" : workDate,
			"flag" : flag
		},
		success : function(response, action) {
			var vals = {};
			vals['nameSqlId'] = 'com.keensen.ump.produce.reseach.project.queryProjectWork';
			vals['condition/projectId'] = projectId;
			A.store.baseParams = vals;
			A.store.reload();
			/*
			 * A.store.load({ params : { "pageCond/begin" : 0, "pageCond/length" :
			 * A.pagingToolbar.pageSize } });
			 */

		}
	});
	// }
	// })

}

com.keensen.ump.research.project.ProjectConfirmnMgr.prototype.exportExcel = function() {
	// doQueryAndExport(this, this.queryPanel, this.listPanel, '订单物料',
	// 'com.keensen.ump.base.mater.queryBaswMater.biz.ext');
	if (this.queryPanel.form.isValid()) {
		doQuerySqlAndExport(this, this.queryPanel, this.listPanel, '研发工时',
				this.nameSqlId, "0,1,2");
	}

}

com.keensen.ump.research.project.ProjectConfirmnMgr.prototype.onArrange = function() {
	var projectId = this.queryPanel.projectId.getValue();
	if (Ext.isEmpty(projectId)) {
		Ext.Msg.alert("系统提示", "请先选择项目！");
		return;
	}

	this.projectUserWindow.projectId = projectId;
	this.queryProjectUserPanel.fireEvent('query', this.queryProjectUserPanel);
	this.projectUserWindow.show();
}

com.keensen.ump.research.project.ProjectConfirmnMgr.prototype.onAddUser = function() {
	this.chooseUserWindow.projectId = this.projectUserWindow.projectId;
	this.queryChooseUserPanel.fireEvent('query', this.queryChooseUserPanel);
	this.chooseUserWindow.show();

}

com.keensen.ump.research.project.ProjectConfirmnMgr.prototype.onDelUser = function() {
	this.projectUserListPanel.onDel();
}

com.keensen.ump.research.project.ProjectConfirmnMgr.prototype.onChooseUser = function() {
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
					// _this.listPanel.store.reload();
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

com.keensen.ump.research.project.ProjectConfirmnMgr.prototype.exportUser = function() {
	this.queryProjectUserPanel.projectId
			.setValue(this.projectUserWindow.projectId);
	doQuerySqlAndExport(this, this.queryProjectUserPanel,
			this.projectUserListPanel, '研发项目人员',
			'com.keensen.ump.produce.reseach.project.queryProjectUser');

}