com.keensen.ump.research.project.ProjectClockinMgr.prototype.initEvent = function() {

	var _this = this;

	// 查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var selectUserId = this.inputPanel.userId.getValue();

		var store = this.listPanel.store;
		if (Ext.isEmpty(vals)) {
			vals = {
				'condition/userId' : selectUserId
			};
		} else {
			vals['condition/userId'] = selectUserId
		}
		vals['nameSqlId'] = _this.nameSqlId;
		store.baseParams = vals;

		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);

	this.listPanel.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					_this.rec = r;
				}).defer(100);
			}, this);

	this.projectUserDurationStore.on('load', function() {
				_this.inputPanel.buttons[0].setDisabled(false);
				var workDate = formatDate(new Date());
				var i = _this.projectUserDurationStore.find('workDate',
						workDate);
				if (i > -1) {
					var rec2 = _this.projectUserDurationStore.getAt(i);
					var confirmHours = rec2.get('confirmHours');
					var fillingHours = rec2.get('fillingHours');
					_this.inputPanel.fillingHours.setValue(fillingHours);
					_this.inputPanel.workDate.setValue(workDate);
					_this.inputPanel.confirmHours.setValue(confirmHours);
				} else {
					_this.inputPanel.workDate.setValue('');
					_this.inputPanel.confirmHours.setValue('');
				}
				var confirmHours = _this.inputPanel.confirmHours.getValue();
				_this.inputPanel.fillingHours.setReadOnly(!Ext
						.isEmpty(confirmHours));

			})

	this.inputPanel.mon(this.inputPanel, 'afterSave', function() {
				this.listPanel.store.reload();
			}, this);

	// 项目人员重新加载触发
	this.projectUserStore.on('load', function() {
		_this.inputPanel.userId.setValue(uid);
		var projectId = _this.inputPanel.projectId.getValue();
		var selectUserId = uid;

		var store = _this.listPanel.store;
		var vals = {
			'condition/projectId' : projectId,
			'condition/userId' : selectUserId
		};

		vals['nameSqlId'] = _this.nameSqlId;
		store.baseParams = vals;

		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : _this.listPanel.pagingToolbar.pageSize
					}
				});

		_this.projectUserDurationStore.load({
					params : {
						'condition/projectId' : projectId,
						'condition/userId' : selectUserId
					}
				});
	})
}

com.keensen.ump.research.project.ProjectClockinMgr.prototype.saveTestCondition = function(
		id, newValue, oldValue) {
	Ext.Ajax.request({
		method : "post",
		scope : this,
		url : 'com.keensen.ump.produce.component.testtrace.saveTestTrace.biz.ext',
		jsonData : {
			"entity/id" : id,
			"entity/testCondition" : newValue
		},
		success : function(response, action) {
			Ext.Msg.alert("系统提示", "修改成功！");
		}
	});
};

com.keensen.ump.research.project.ProjectClockinMgr.prototype.destroy = function() {

}

com.keensen.ump.research.project.ProjectClockinMgr.prototype.onSave = function() {

	this.inputPanel.saveData();
}
