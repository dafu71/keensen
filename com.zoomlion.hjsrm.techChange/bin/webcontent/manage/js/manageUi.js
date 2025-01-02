com.zoomlion.hjsrm.techChange.Manage = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initCreateWindow();
		this.initRoleWindow();

		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'techChangeMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {

		var statusData = [["发起流程", "发起流程"], ["研发审核", "研发审核"], ["业务确认", "业务确认"],
				["研发修改", "研发修改"], ["工艺核查", "工艺核查"], ["已完成", "已完成"]];

		this.queryPanel = new Ext.fn.QueryPanel({
			height : 150,
			columns : 3,
			border : true,
			collapsible : true,
			titleCollapse : false,
			title : '【 查询条件 】',
			fields : [{
						xtype : 'textfield',
						name : 'condition/createbyName',
						anchor : '95%',
						colspan : 1,
						fieldLabel : '发起人'
					}, {
						xtype : 'textfield',
						name : 'condition/productno',
						anchor : '95%',
						colspan : 1,
						fieldLabel : '车型代号'
					}, {
						xtype : 'textfield',
						name : 'condition/matnr',
						anchor : '95%',
						colspan : 1,
						fieldLabel : '整机编码'
					}, {
						xtype : "dateregion",
						colspan : 1,
						anchor : '95%',
						nameArray : ['condition/startdate', 'condition/endate'],
						fieldLabel : "创建日期",
						format : "Y-m-d"
					}, {
						xtype : 'combobox',
						colspan : 1,
						anchor : '95%',
						name : 'condition/status',
						hiddenName : 'condition/status',
						fieldLabel : '流程状态',
						triggerAction : "all",
						store : new Ext.data.ArrayStore({
									id : 0,
									fields : ['key', 'text'],
									data : statusData
								}),
						mode : "local",
						editable : true,
						displayField : "text",
						valueField : "key",
						forceSelection : true,
						emptyText : "--请选择--"
					}]
		});
	}

	this.initListPanel = function() {
		this.selModel = this.selModel || new Ext.grid.CheckboxSelectionModel({
					header : '',
					singleSelect : true
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 工艺技术变更列表 】',
			hsPage : true,
			selModel : this.selModel,
			// region : 'center',
			delUrl : '...',
			tbar : [{
						text : '查看',
						scope : this,
						ref : '../btnView',
						iconCls : 'icon-application_lightning',
						handler : this.onView
					}, {
						text : '创建',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}
			// , {
			// text : '修改问题流程',
			// scope : this,
			// iconCls : 'icon-application_edit',
			// handler : this.onFirst
			// }, {
			// text : '技术变更',
			// scope : this,
			// iconCls : 'icon-application_edit',
			// handler : this.onSecond
			// }, {
			// text : '业务确认',
			// scope : this,
			// iconCls : 'icon-application_edit',
			// handler : this.onThird
			// }, {
			// text : '研发修改',
			// scope : this,
			// iconCls : 'icon-application_edit',
			// handler : this.onFourth
			// }, {
			// text : '工艺核查',
			// scope : this,
			// iconCls : 'icon-application_edit',
			// handler : this.onFifth
			// }
			],
			viewConfig : {
				autoFill : true

			},
			// autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(), this.selModel, {
						header : '发起人',
						dataIndex : 'createby_name'
					}, {
						header : '工  号',
						dataIndex : 'createby'
					}, {
						header : '日  期',
						dataIndex : 'createtime'
					}, {
						header : '问题类别',
						dataIndex : 'problem_type'
					}, {
						header : '车型代号',
						dataIndex : 'productno'
					}, {
						header : '整机编码',
						dataIndex : 'matnr'
					}, {
						header : '流程状态',
						dataIndex : 'status'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.techChange.techChange.queryFlowTechList.biz.ext',
				root : 'data',
				// autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'createby_name'
						}, {
							name : 'createby'
						}, {
							name : 'createtime'
						}, {
							name : 'problem_type'
						}, {
							name : 'productno'
						}, {
							name : 'matnr'
						}, {
							name : 'status'
						}, {
							name : 'tech_id'
						}, {
							name : 'processinstid'
						}]
			})
		});
	}

	// 新增弹窗
	this.initCreateWindow = function() {
		var _this = this;

		this.roottext = '';// 树根节点文字
		this.attachId = Ext.id();
		this.pkid = '';// 业务流水号

		// 基础信息
		this.inputPanel = this.inputPanel || new Ext.fn.InputPanel({
			height : 250,
			// title : "基础信息",
			pgrid : '',
			columns : 2,
			autoHide : false,
			border : true,
			saveUrl : '....biz.ext',
			fields : [{
						xtype : 'datetimefield',
						name : 'createtime',
						ref : '../createtime',
						allowBlank : false,
						fieldLabel : '日  期',
						anchor : '40%',
						colspan : 2,
						value : new Date(),
						readOnly : true,
						format : 'Y-m-d'
					}, {
						xtype : 'textfield',
						allowBlank : false,
						readOnly : true,
						anchor : '80%',
						colspan : 1,
						name : 'createbyName',
						ref : '../createbyName',
						value : uname,
						fieldLabel : '发起人'
					}, {
						xtype : 'textfield',
						allowBlank : false,
						readOnly : true,
						anchor : '80%',
						colspan : 1,
						name : 'createby',
						ref : '../createby',
						value : uid,
						fieldLabel : '工  号'
					}, {
						xtype : 'textfield',
						allowBlank : false,
						readOnly : true,
						anchor : '80%',
						colspan : 1,
						name : 'orgname',
						ref : '../orgname',
						value : uorg,
						fieldLabel : '所在部门'
					}, {
						xtype : 'textfield',
						// allowBlank : false,
						// readOnly : true,
						colspan : 1,
						anchor : '80%',
						name : 'phone',
						fieldLabel : '联系电话'
					}, {
						xtype : 'radiogroup',
						name : 'problemType',
						allowBlank : false,
						colspan : 1,
						anchor : '80%',
						fieldLabel : '问题类别<font style="color:red">*</font>',
						items : [{
									boxLabel : '设计错误',
									name : 'problemType',
									inputValue : '设计错误',
									checked : true
								}, {
									boxLabel : '设计优化',
									name : 'problemType',
									inputValue : '设计优化'
								}]
					}, {
						xtype : 'radiogroup',
						name : 'importance',
						allowBlank : false,
						colspan : 1,
						anchor : '80%',
						fieldLabel : '重要性<font style="color:red">*</font>',
						items : [{
									boxLabel : 'A(关键)',
									name : 'importance',
									inputValue : 'A(关键)',
									checked : true
								}, {
									boxLabel : 'B(重要)',
									name : 'importance',
									inputValue : 'B(重要)'
								}, {
									boxLabel : 'C(一般)',
									name : 'importance',
									inputValue : 'C(一般)'
								}]
					}, {
						xtype : 'radiogroup',
						name : 'effection',
						allowBlank : false,
						colspan : 2,
						anchor : '80%',
						fieldLabel : '影响点<font style="color:red">*</font>',
						items : [{
									boxLabel : 'Q(质量)',
									name : 'effection',
									inputValue : 'Q(质量)',
									checked : true
								}, {
									boxLabel : 'C(成本)',
									name : 'effection',
									inputValue : 'C(成本)'
								}, {
									boxLabel : 'D(交期)',
									name : 'effection',
									inputValue : 'D(交期)'
									// checked : true
							}	, {
									boxLabel : 'S(安全)',
									name : 'effection',
									inputValue : 'S(安全)'
								}, {
									boxLabel : 'M(人员)',
									name : 'effection',
									inputValue : 'M(人员)'
									// checked : true
							}	, {
									boxLabel : 'E(环境)',
									name : 'effection',
									inputValue : 'E(环境)'
								}]
					}, {
						xtype : 'textarea',
						allowBlank : false,
						anchor : '90%',
						colspan : 2,
						name : 'problem',
						fieldLabel : '问题描述及<br>处理意见'
					}, {
						colspan : 2,
						anchor : '90%',
						isUploaded : true,
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
						xtype : 'productnocombobox',
						allowBlank : false,
						anchor : '80%',
						colspan : 1,
						hiddenName : 'productno',
						name : 'productno',
						fieldLabel : '车型代号',
						listeners : {
							scope : this,
							'select' : function(o, r, i) {
								var matnr = r.get("materialno");
								this.inputPanel.matnr.setValue(matnr);
								// this.roottext = r.get("materialno") + "|"+
								// r.get("text");
							},
							'beforequery' : function(e) {
								var combo = e.combo;
								if (!e.forceAll) {
									var value = e.query;
									value = value.toLowerCase();
									combo.store.filterBy(function(record) {
												var text = record
														.get(combo.displayField);
												text = text.toLowerCase();
												return (text.indexOf(value) != -1);
											});
								}
							}
						}
					}, {
						xtype : 'textfield',
						allowBlank : false,
						//readOnly : true,
						anchor : '80%',
						colspan : 1,
						name : 'matnr',
						ref : '../matnr',
						fieldLabel : '整机编码'
					}, {
						xtype : "hidden",
						name : 'orgid',
						ref : '../orgid',
						value : uorgid
					}, {
						xtype : "hidden",
						ref : '../techId',
						name : 'techId'
					}]

		});

		// 物料编码和名称
		var selModel2 = new Ext.grid.CheckboxSelectionModel({});

		this.listPanel2 = new Ext.fn.ListPanel({
					hsPage : false,
					selModel : selModel2,
					height : 150,
					delUrl : '...',
					tbar : [{
								text : '选择新增',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onInsert
							}, {
								text : '输入新增',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onInsert2
							}, {
								text : '删除',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDel
							}],
					viewConfig : {
						autoFill : true

					},
					// autoExpandColumn : '4',
					columns : [new Ext.grid.RowNumberer(), selModel2, {
								header : '物料编码',
								dataIndex : 'matnr'
							}, {
								header : '物料名称',
								dataIndex : 'maktx'
							}],
					store : new Ext.data.JsonStore({
								url : 'aaa.biz.ext',
								root : 'data',
								// autoLoad : true,
								totalProperty : 'totalCount',
								fields : [{
											name : 'matnr'
										}, {
											name : 'maktx'
										}, {
											name : 'techId'
										}]
							})
				});

		// 输入新增弹窗
		this.entryPanel = this.entryPanel || new Ext.fn.InputPanel({
					height : 150,
					// title : "基础信息",
					width : 400,
					pgrid : '',
					columns : 2,
					autoHide : false,
					border : true,
					saveUrl : '....biz.ext',
					fields : [{
								xtype : 'textfield',
								allowBlank : false,
								anchor : '80%',
								colspan : 2,
								name : 'matnr',
								ref : '../matnr',
								fieldLabel : '物料编码'
							}, {
								xtype : 'textfield',
								allowBlank : false,
								anchor : '80%',
								colspan : 2,
								name : 'maktx',
								ref : '../maktx',
								fieldLabel : '物料名称'
							}]
				});

		this.entryWindow = this.entryWindow || new Ext.Window({
					title : "新增物料信息",
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					modal : true,
					autoScroll : true,
					width : 400,
					height : 150,
					layout : 'fit',
					items : [this.entryPanel],
					buttons : [{
								text : "确定",
								scope : this,
								handler : this.onEntry

							}, {
								text : "确定并关闭",
								scope : this,
								handler : this.onEntry2
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.entryWindow.hide();
								}
							}]

				});

		// 设计工程师列表
		var selModel3 = new Ext.grid.CheckboxSelectionModel({});

		this.sjPanel = new Ext.fn.ListPanel({
					hsPage : false,
					selModel : selModel3,
					height : 150,
					// width : 300,
					delUrl : '...',
					tbar : [{
								text : '选择设计工程师',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onInsertSj
							}, {
								text : '删除',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDelSj
							}],
					viewConfig : {
						autoFill : true

					},
					// autoExpandColumn : '4',
					columns : [new Ext.grid.RowNumberer(), selModel3, {
								header : '工号',
								dataIndex : 'userid'
							}, {
								header : '姓名',
								dataIndex : 'username'
							}],
					store : new Ext.data.JsonStore({
								url : 'aaa.biz.ext',
								root : 'data',
								// autoLoad : true,
								fields : [{
											name : 'userid'
										}, {
											name : 'username'
										}, {
											name : 'techId'
										}, {
											name : 'rolecode'
										}, {
											name : 'rolename'
										}]
							})
				});

		// 总装技术人员或供应商技术人员列表
		var selModel4 = new Ext.grid.CheckboxSelectionModel({});

		this.zzPanel = new Ext.fn.ListPanel({
					hsPage : false,
					selModel : selModel4,
					height : 150,
					// width : 300,
					delUrl : '...',
					tbar : [{
								text : '选择总装技术人员',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onInsertZz
							}, {
								text : '选择供应商技术人员',
								scope : this,
								iconCls : 'icon-application_add',
								handler : this.onInsertGys
							}, {
								text : '删除',
								scope : this,
								iconCls : 'icon-application_delete',
								handler : this.onDelZz
							}],
					viewConfig : {
						autoFill : true

					},
					// autoExpandColumn : '4',
					columns : [new Ext.grid.RowNumberer(), selModel4, {
								header : '工号',
								dataIndex : 'userid'
							}, {
								header : '姓名',
								dataIndex : 'username'
							}],
					store : new Ext.data.JsonStore({
								url : 'aaa.biz.ext',
								root : 'data',
								// autoLoad : true,
								fields : [{
											name : 'userid'
										}, {
											name : 'username'
										}, {
											name : 'techId'
										}, {
											name : 'rolecode'
										}, {
											name : 'rolename'
										}]
							})
				});

		// 角色选择
		this.rolePanel = new Ext.Panel({
					height : 150,
					// layout : 'border',
					layout : 'column',
					autoScroll : true,
					items : [{
								columnWidth : .5,
								items : this.sjPanel
							}, {
								columnWidth : .5,
								items : this.zzPanel
							}]
				});

		this.inputWindow = this.inputWindow || new Ext.Window({
					title : "新增工艺技术变更",
					id : Ext.id(),
					resizable : true,
					minimizable : false,
					maximizable : true,
					closeAction : "hide",
					buttonAlign : "center",
					modal : true,
					autoScroll : true,
					width : 800,
					height : 620,
					layout : 'form',
					items : [this.inputPanel, this.listPanel2, this.rolePanel],
					buttons : [{
								text : "提交",
								scope : this,
								handler : this.onSave
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.inputWindow.hide();
								}
							}]

				});
	}

	// 选择角色弹窗
	this.initRoleWindow = function() {
		var _this = this;
		// 设计工程师弹窗
		this.sjWindow = this.sjWindow
				|| new com.zoomlion.hjsrm.selectParticipantsWindow({
					title : '选择设计工程师',
					partTitle : '设计工程师',
					divisionFront : "|",
					divisionBack : ',',
					defaultValue : '',
					currentRolecode : "sjgcs",
					listeners : {
						'callback' : function(v) {
							store = _this.sjPanel.store;
							if (v) {
								var readers = Ext.util.Format.substr(v, 0,
										v.length - 1);
								var uids = [];
								var unames = [];
								if (readers.indexOf(",") > 0) {
									var arr = readers.split(",");
									for (var i = 0; i < arr.length; i++) {
										var temp = arr[i].split("|");
										uids.push(temp[1]);
										unames.push(temp[0]);
									}

								} else {
									var temp = readers.split("|");
									uids.push(temp[1]);
									unames.push(temp[0]);
								}

								for (var i = 0; i < uids.length; i++) {
									var flag = true;
									store.each(function(r) {
										if (flag && (r.data.userid == uids[i])) {
											flag = false;

										}
									}, _this);

									if (flag) {
										var r = new Ext.data.Record({
													'userid' : uids[i],
													'username' : unames[i],
													'techId' : _this.pkid,
													'rolecode' : 'sjgcs',
													'rolename' : '设计工程师'
												});

										store.add(r);
									}
								}

								store.sort("userid", "asc");
							}

						}
					}
				});

		// 总装技术人员弹窗
		this.zzWindow = this.zzWindow
				|| new com.zoomlion.hjsrm.selectParticipantsWindow({
					title : '选择总装技术人员',
					partTitle : '总装技术人员',
					divisionFront : "|",
					divisionBack : ',',
					defaultValue : '',
					currentRolecode : "zzjs",
					listeners : {
						'callback' : function(v) {
							store = _this.zzPanel.store;
							if (v) {
								var readers = Ext.util.Format.substr(v, 0,
										v.length - 1);
								var uids = [];
								var unames = [];
								if (readers.indexOf(",") > 0) {
									var arr = readers.split(",");
									for (var i = 0; i < arr.length; i++) {
										var temp = arr[i].split("|");
										uids.push(temp[1]);
										unames.push(temp[0]);
									}

								} else {
									var temp = readers.split("|");
									uids.push(temp[1]);
									unames.push(temp[0]);
								}

								for (var i = 0; i < uids.length; i++) {
									var flag = true;
									store.each(function(r) {
										if (flag && (r.data.userid == uids[i])) {
											flag = false;

										}
									}, _this);

									if (flag) {
										var r = new Ext.data.Record({
													'userid' : uids[i],
													'username' : unames[i],
													'techId' : _this.pkid,
													'rolecode' : 'zzjs',
													'rolename' : '总装技术人员'
												});

										store.add(r);
									}
								}

								store.sort("userid", "asc");
							}

						}
					}
				});

		// 供应商技术工程师弹窗
		this.gysWindow = this.gysWindow
				|| new com.zoomlion.hjsrm.selectParticipantsWindow({
					title : '选择供应商技术工程师',
					partTitle : '供应商技术工程师',
					divisionFront : "|",
					divisionBack : ',',
					defaultValue : '',
					currentRolecode : "gysjs",
					listeners : {
						'callback' : function(v) {
							store = _this.zzPanel.store;
							if (v) {
								var readers = Ext.util.Format.substr(v, 0,
										v.length - 1);
								var uids = [];
								var unames = [];
								if (readers.indexOf(",") > 0) {
									var arr = readers.split(",");
									for (var i = 0; i < arr.length; i++) {
										var temp = arr[i].split("|");
										uids.push(temp[1]);
										unames.push(temp[0]);
									}

								} else {
									var temp = readers.split("|");
									uids.push(temp[1]);
									unames.push(temp[0]);
								}

								for (var i = 0; i < uids.length; i++) {
									var flag = true;
									store.each(function(r) {
										if (flag && (r.data.userid == uids[i])) {
											flag = false;

										}
									}, _this);

									if (flag) {
										var r = new Ext.data.Record({
													'userid' : uids[i],
													'username' : unames[i],
													'techId' : _this.pkid,
													'rolecode' : 'gysjs',
													'rolename' : '供应商技术工程师'
												});

										store.add(r);
									}
								}

								store.sort("userid", "asc");
							}

						}
					}
				});

	}

}