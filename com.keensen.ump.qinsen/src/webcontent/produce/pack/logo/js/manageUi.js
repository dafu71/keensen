com.keensen.ump.qinsen.produce.marklogoMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();

		this.buildUploadWin();
		this.initLogoiEditWindow();

		this.lay = new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'marklogomgr',
					panels : [this.queryPanel, this.listPanel]
				});
		return this.lay;
	}

	this.initQueryPanel = function() {
		var _this = this;

		this.queryPanel = new Ext.fn.QueryPanel({
					height : 80,
					columns : 2,
					border : true,
					collapsible : false,
					titleCollapse : false,
					fields : [{
								xtype : 'combobox',
								fieldLabel : '状态',
								ref : '../state',
								hiddenName : 'condition/state',
								emptyText : '--请选择--',
								anchor : '50%',
								store : [['', '全部'], ['A', '在用'], ['X', '停用']],
								listeners : {
									scope : this,
									'expand' : function(A) {
										this.queryPanel.state.reset();
									}
								}
							}, {
								xtype : 'textfield',
								name : 'condition/logoCodeStr',
								anchor : '50%',
								fieldLabel : '%编码%'
							}]
				});

	}

	this.initListPanel = function() {
		var _this = this;
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header : ''
				});
		this.listPanel = new Ext.fn.ListPanel({
			hsPage : false,
			viewConfig : {
				forceFit : true
			},
			id : listid,
			tbar : [{
						text : '上传',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onAdd
					}, '-', {
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					}],
			selModel : selModel,
			delUrl : '111.biz.ext',
			columns : [new Ext.grid.RowNumberer(), selModel, {
						header : 'ID',
						dataIndex : 'recordId'
					}, {
						header : '编码',
						dataIndex : 'logoCode'
					}, {
						header : '状态',
						dataIndex : 'stateName'
					}, {
						header : '图片',
						dataIndex : 'imgUrl',
						renderer : function(value, metaData, rec, rowIndex,
								colIndex, store, view) {
							if (value) {
								if (rec.data.flag == 'first') {
									return '<img src="'
											+ value
											+ '?ver='
											+ rec.data.changeDt
											+ '" style="width:auto; height:auto; max-width:98%; max-height:140px;" />';
								} else {
									return '<img src="'
											+ rootUrl
											+ value
											+ '?ver='
											+ rec.data.changeDt
											+ '" style="width:auto; height:auto; max-width:98%; max-height:140px;" />';
								}

							}
						}
					}, {
						header : '说明',
						dataIndex : 'remark'
					}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.qinsen.pack.queryLogoRecords.biz.ext',
						root : 'data',
						autoLoad : true,
						totalProperty : '',
						baseParams : {},
						fields : [{
									name : 'recordId'
								}, {
									name : 'customerId'
								}, {
									name : 'logoCode'
								}, {
									name : 'logoName'
								}, {
									name : 'imgUri'
								}, {
									name : 'createDt'
								}, {
									name : 'changeDt'
								}, {
									name : 'creatorId'
								}, {
									name : 'changerId'
								}, {
									name : 'remark'
								}, {
									name : 'state'
								}, {
									name : 'stateName'
								}, {
									name : 'imgUrl'
								}, {
									name : 'flag'
								}]
					})
		})
	}

	// 上传面板
	this.buildUploadWin = function() {
		this.uploadWin = new Ext.Window({
			title : '上传文件',
			collapsible : false,
			modal : true,
			closeAction : 'hide',
			buttonAlign : 'center',
			layout : 'fit',
			width : 480,
			height : 300,
			items : [{
				xtype : 'columnform',
				itemId : 'uploadForm',
				saveUrl : 'com.keensen.ump.qinsen.uploadMarkLogo.flow',
				columns : 2,
				fileUpload : true,
				fields : [{
							xtype : 'textfield',
							name : 'logoCode',
							allowBlank : false,
							fieldLabel : '检索编码',
							colspan : 2
						}, {
							xtype : 'displayfield',
							colspan : 2,
							html : "<span style='color:red;'>建议不要使用中文、空格及等特殊字符(除下划线、横杠、括号外)，否则图片可能无法正常显示及下载</span>"
						}, {
							name : 'uploadFile',
							colspan : 2,
							fieldLabel : '图片',
							allowBlank : false,
							inputType : 'file'
						}, {
							xtype : 'displayfield',
							colspan : 2,
							html : "<span style='color:red;'>支持png、jpg图片</span>"
						}]
			}],
			buttons : [{
						text : '上传',
						handler : this.doUpload,
						scope : this
					}, {
						text : '关闭',
						scope : this,
						handler : function() {
							this.uploadWin.hide();
						}
					}]
		});
	}

	this.initLogoiEditWindow = function() {
		var _this = this;
		this.logoEditWindow = this.logoEditWindow || new Ext.fn.FormWindow({
					title : '唛头LOGO-修改',
					height : 600,
					width : 800,
					resizable : true,
					minimizable : false,
					maximizable : true,
					items : [{
						xtype : 'editpanel',
						pgrid : this.listPanel,
						columns : 2,
						saveUrl : 'com.keensen.ump.qinsen.pack.modiLogoRecord.biz.ext',
						loadUrl : 'com.keensen.ump.qinsen.pack.expandlogo.biz.ext',
						fields : [{
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'textfield',
									name : 'entity/logoCode',
									dataIndex : 'logoCode',
									anchor : '90%',
									ref : '../../logoCode',
									style : '{font-weight:bold;}',
									allowBlank : false,
									fieldLabel : '编码',
									colspan : 1
								}, {
									xtype : 'combobox',
									fieldLabel : '状态',
									dataIndex : 'state',
									ref : '../../state',
									hiddenName : 'entity/state',
									emptyText : '--请选择--',
									anchor : '50%',
									store : [['A', '在用'],
											['X', '停用']],
									listeners : {
										scope : this,
										'expand' : function(A) {
											this.logoEditWindow.state.reset();
										}
									}
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									name : 'entity/remark',
									ref : '../../remark',
									xtype : 'textarea',
									dataIndex : 'remark',
									fieldLabel : '备注',
									colspan : 2,
									anchor : '95%',
									allowBlank : true
								}, {
									xtype : 'displayfield',
									height : '5',
									colspan : 2
								}, {
									xtype : 'displayfield',
									height : '200',
									ref:'../../img',
									colspan : 2
								}, {
									name : 'entity/recordId',
									dataIndex : 'recordId',
									xtype : 'hidden'
								}]
					}]
				})
	}

}