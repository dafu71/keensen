com.zoomlion.hjsrm.techChange.First = function() {

	this.initPanel = function() {
		this.initEditPanel();
		this.initMaterialPanel();
		this.initRolePanel();
		this.initRoleWindow();
		this.initButtonPanel();

		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					autoScroll : true,
					renderTo : 'techChangeFirst',
					panels : [this.inputPanel, this.listPanel2, this.rolePanel,
							this.buttonPanel]
				});
	}

	// 基础数据
	this.initEditPanel = function() {
		this.attachId = Ext.id();
		// 基础信息
		this.inputPanel = this.inputPanel || new Ext.fn.EditPanel({
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
						value : 0,
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
						value : uid,
						fieldLabel : '工  号'
					}, {
						xtype : 'textfield',
						readOnly : true,
						anchor : '80%',
						colspan : 1,
						value : uorg,
						name : 'orgname',
						ref : '../orgname',
						fieldLabel : '所在部门'
					}, {
						xtype : 'textfield',
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
						dataIndex : 'productno',
						ref : '../productno',
						name : 'productno',
						fieldLabel : '车型代号',
						listeners : {
							scope : this,
							'select' : function(o, r, i) {
								var matnr = r.get("materialno");
								this.inputPanel.matnr.setValue(matnr);
								this.roottext = r.get("materialno") + "|"
										+ r.get("text");
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
									combo.expand();
									return false;
								}
							}
						}
					}, {
						xtype : 'textfield',
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
						value : techChangeFirst.techId,
						name : 'techId'
					}, {
						xtype : "hidden",
						ref : '../productno2'
					}]

		});

	}

	// 物料编辑面板
	this.initMaterialPanel = function() {
		var selModel2 = new Ext.grid.CheckboxSelectionModel({});

		this.listPanel2 = new Ext.fn.ListPanel({
			hsPage : false,
			selModel : selModel2,
			height : 150,
			// autoHeight : true,
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

	}

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
	// 角色编辑面板
	this.initRolePanel = function() {
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
				url : 'com.zoomlion.hjsrm.techChange.techChange.querySj.biz.ext',
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
				url : 'com.zoomlion.hjsrm.techChange.techChange.queryJs.biz.ext',
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
													'techId' : techChangeFirst.techId,
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
													'techId' : techChangeFirst.techId,
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
													'techId' : techChangeFirst.techId,
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
	this.initButtonPanel = function() {
		this.buttonPanel = this.buttonPanel || new Ext.Panel({
					height : 50,
					buttonAlign : 'center',
					border : false,
					layout : 'fit',
					buttons : [{
								text : "提交",
								scope : this,
								ref : '../btnSave',
								handler : this.onSave
							}, {
								text : "关闭",
								scope : this,
								handler : function() {
									this.onClose();
								}
							}]
				});
	}
}
