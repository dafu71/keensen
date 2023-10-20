com.zoomlion.hjsrm.techChange.View = function() {
	this.initPanel = function() {
		this.attachId = Ext.id();
		this.initViewPanel();

		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					autoScroll : true,
					renderTo : renderToDiv,
					panels : [this.basePanel, this.listPanel2,
							this.secondPanel, this.thirdPanel,
							this.fourthPanel, this.fifthPanel]
				});
	}

	this.initViewPanel = function() {

		// 基础信息
		this.basePanel = this.basePanel || new Ext.fn.EditPanel({
			height : 250,
			// title : "基础信息",
			pgrid : '',
			columns : 2,
			autoHide : false,
			border : true,
			loadUrl : 'com.zoomlion.hjsrm.techChange.techChange.viewWork.biz.ext',
			saveUrl : 'aaa.biz.ext',
			fields : [{
						xtype : 'datetimefield',
						name : 'createtime',
						ref : '../createtime',
						fieldLabel : '日  期',
						anchor : '40%',
						colspan : 2,
						readOnly : true,
						format : 'Y-m-d'
					}, {
						xtype : 'textfield',
						readOnly : true,
						anchor : '80%',
						colspan : 1,
						name : 'createbyName',
						ref : '../createbyName',
						fieldLabel : '发起人'
					}, {
						xtype : 'textfield',
						readOnly : true,
						anchor : '80%',
						colspan : 1,
						name : 'createby',
						ref : '../createby',
						fieldLabel : '工  号'
					}, {
						xtype : 'textfield',
						readOnly : true,
						anchor : '80%',
						colspan : 1,
						name : 'orgname',
						ref : '../orgname',
						fieldLabel : '所在部门'
					}, {
						xtype : 'textfield',
						readOnly : true,
						colspan : 1,
						anchor : '80%',
						name : 'phone',
						fieldLabel : '联系电话'
					}, {
						xtype : 'textfield',
						name : 'problemType',
						readOnly : true,
						colspan : 1,
						anchor : '80%',
						fieldLabel : '问题类别'
					}, {
						xtype : 'textfield',
						name : 'importance',
						readOnly : true,
						colspan : 1,
						anchor : '80%',
						fieldLabel : '重要性'
					}, {
						xtype : 'textfield',
						name : 'effection',
						readOnly : true,
						colspan : 1,
						anchor : '80%',
						fieldLabel : '影响点'
					}, {
						xtype : 'textarea',
						readOnly : true,
						anchor : '90%',
						colspan : 2,
						name : 'problem',
						fieldLabel : '问题描述及<br>处理意见'
					}, {
						colspan : 2,
						anchor : '90%',
						isUploaded : false,
						xtype : 'attachmentlist',
						name : 'attachlist',
						id : this.attachId,
						postParams : {
							relationId : 0,
							groupId : 'techchangefile',
							dataorgid : dataorgid,
							operatorid : operatorid,
							operatorname : operatorname
						},
						isDownload : true,
						fieldLabel : '附件列表',
						title : '附件列表',
						itemId : 'attachmentlist'
					}, {
						xtype : 'textfield',
						readOnly : true,
						anchor : '80%',
						colspan : 1,
						name : 'productno',
						fieldLabel : '车型代号'
					}, {
						xtype : 'textfield',
						readOnly : true,
						anchor : '80%',
						colspan : 1,
						name : 'matnr',
						ref : '../matnr',
						fieldLabel : '整机编码'
					}]

		});

		// 物料编码和名称
		// var selModel2 = new Ext.grid.CheckboxSelectionModel({});

		this.listPanel2 = new Ext.fn.ListPanel({
			hsPage : false,
			// selModel : selModel2,
			// height : 150,
			autoHeight : true,
			delUrl : '...',
			viewConfig : {
				autoFill : true

			},
			// autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(), {
						header : '物料编码',
						dataIndex : 'matnr'
					}, {
						header : '物料名称',
						dataIndex : 'maktx'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.techChange.techChange.queryMaterials.biz.ext',
				root : 'data',
				fields : [{
							name : 'matnr'
						}, {
							name : 'maktx'
						}, {
							name : 'techId'
						}]
			})
		});

		// 审批列表
		this.secondPanel = this.secondPanel || new Ext.fn.ListPanel({
			hsPage : false,
			// selModel : selModel2,
			// height : 150,
			autoHeight : true,
			delUrl : '...',
			viewConfig : {
		// autoFill : true

			},
			autoExpandColumn : '2',
			columns : [new Ext.grid.RowNumberer(), {
						header : '研发部门审核',
						dataIndex : 'flag',
						renderer : function(v, m, r, i) {
							if (v == "1") {
								return "同意";
							} else {
								return "驳回";
							}
						}
					}, {
						header : 'TC电子图修改期限',
						dataIndex : 'advise',
						renderer : function(value, meta, record) {
							meta.attr = 'style="white-space:normal;word-wrap:break-word;"';
							var kvalue = Ext.isEmpty(value) ? "" : value
									.replace(/,/g, '&nbsp&nbsp&nbsp');
							return kvalue;
						}
					}, {
						header : '工号',
						dataIndex : 'createby'
					}, {
						header : '操作员',
						dataIndex : 'createbyName'
					}, {
						header : '提交时间',
						dataIndex : 'createtime',
						format : "Y-m-d"
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.techChange.techChange.queryChecks.biz.ext',
				root : 'data',
				fields : [{
							name : 'flag'
						}, {
							name : 'advise'
						}, {
							name : 'createby'
						}, {
							name : 'createbyName'
						}, {
							name : 'createtime'
						}]
			})
		});

		// 确认列表
		this.thirdPanel = this.thirdPanel || new Ext.fn.ListPanel({
			hsPage : false,
			// selModel : selModel2,
			// height : 150,
			autoHeight : true,
			delUrl : '...',
			viewConfig : {
		// autoFill : true

			},
			autoExpandColumn : '2',
			columns : [new Ext.grid.RowNumberer(), {
						header : '供应商<br>(或内部)确认',
						dataIndex : 'flag',
						renderer : function(v, m, r, i) {
							if (v == "1") {
								return "图纸已完成修改";
							} else {
								return "不需修改";
							}
						}
					}, {
						header : '处理意见',
						dataIndex : 'advise',
						renderer : function(value, meta, record) {
							meta.attr = 'style="white-space:normal;word-wrap:break-word;"';
							var kvalue = Ext.isEmpty(value) ? "" : value
									.replace(/,/g, '&nbsp&nbsp&nbsp');
							return kvalue;
						}
					}, {
						header : '工号',
						dataIndex : 'createby'
					}, {
						header : '操作员',
						dataIndex : 'createbyName'
					}, {
						header : '提交时间',
						dataIndex : 'createtime',
						format : "Y-m-d"
					}, {
						header : '附件',
						dataIndex : 'mycount',
						renderer : function(v, m, r, i) {
							if (v > 0) {
								return "<a href='javascript:viewFiles("
										+ r.get('confirmId') + ")';>查看附件(" + v
										+ ")</a>";
							} else {
								return "没有附件";
							}
						}
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.techChange.techChange.queryConfirms.biz.ext',
				root : 'data',
				fields : [{
							name : 'flag'
						}, {
							name : 'advise'
						}, {
							name : 'createby'
						}, {
							name : 'createbyName'
						}, {
							name : 'createtime'
						}, {
							name : 'mycount'
						}, {
							name : 'confirmId'
						}]
			})
		});

		// 研发修改列表
		this.fourthPanel = this.fourthPanel || new Ext.fn.ListPanel({
			hsPage : false,
			// selModel : selModel2,
			// height : 150,
			autoHeight : true,
			delUrl : '...',
			viewConfig : {
		// autoFill : true

			},
			autoExpandColumn : '2',
			columns : [new Ext.grid.RowNumberer(), {
						header : '研发修改',
						dataIndex : 'flag',
						renderer : function(v, m, r, i) {
							if (v == "1") {
								return "已完成修改";
							} else {
								return "未完成修改";
							}
						}
					}, {
						header : '图样更改通知单编码',
						dataIndex : 'advise',
						renderer : function(value, meta, record) {
							meta.attr = 'style="white-space:normal;word-wrap:break-word;"';
							var kvalue = Ext.isEmpty(value) ? "" : value
									.replace(/,/g, '&nbsp&nbsp&nbsp');
							return kvalue;
						}
					}, {
						header : '工号',
						dataIndex : 'createby'
					}, {
						header : '操作员',
						dataIndex : 'createbyName'
					}, {
						header : '提交时间',
						dataIndex : 'createtime',
						format : "Y-m-d"
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.techChange.techChange.queryModifys.biz.ext',
				root : 'data',
				fields : [{
							name : 'flag'
						}, {
							name : 'advise'
						}, {
							name : 'createby'
						}, {
							name : 'createbyName'
						}, {
							name : 'createtime'
						}]
			})
		});

		// 工艺核查列表
		this.fifthPanel = this.fifthPanel || new Ext.fn.ListPanel({
			hsPage : false,
			// selModel : selModel2,
			// height : 150,
			autoHeight : true,
			delUrl : '...',
			viewConfig : {
		// autoFill : true

			},
			autoExpandColumn : '2',
			columns : [new Ext.grid.RowNumberer(), {
						header : '工艺核查',
						dataIndex : 'flag',
						renderer : function(v, m, r, i) {
							if (v == "1") {
								return "设计变更和前<br>期更改一致";
							} else {
								return "设计变更和前<br>期更改不一致";
							}
						}
					}, {
						header : '处理意见',
						dataIndex : 'advise',
						renderer : function(value, meta, record) {
							meta.attr = 'style="white-space:normal;word-wrap:break-word;"';
							var kvalue = Ext.isEmpty(value) ? "" : value
									.replace(/,/g, '&nbsp&nbsp&nbsp');
							return kvalue;
						}
					}, {
						header : '工号',
						dataIndex : 'createby'
					}, {
						header : '操作员',
						dataIndex : 'createbyName'
					}, {
						header : '提交时间',
						dataIndex : 'createtime',
						format : "Y-m-d"
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.techChange.techChange.queryInspects.biz.ext',
				root : 'data',
				fields : [{
							name : 'flag'
						}, {
							name : 'advise'
						}, {
							name : 'createby'
						}, {
							name : 'createbyName'
						}, {
							name : 'createtime'
						}]
			})
		});

	}

}