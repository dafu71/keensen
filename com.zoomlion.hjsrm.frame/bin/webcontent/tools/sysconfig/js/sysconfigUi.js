/*
 * 示例ui @author rye
 */
com.zoomlion.hjsrm.sysconfig.SysconfigMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		this.initInputWindow();
		return new Ext.fn.fnLayOut({
					layout : 'ns',
					border : false,
					renderTo : 'sysconfigMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
			columns : 3,
			saveUrl : '...',
			border : true,
			height : 140,
			title : '参数查询',
			fields : [{
				xtype : 'combo',
				fieldLabel : '所属公司',
				valueField : 'orgid',
				dataIndex : 'org',
				displayField : 'orgname',
				hiddenName : 'query/dataorgid',
				triggerAction : "all",
				emptyText : "请选择",
				mode : "local",
				allowBlank : false,
				blankText : "请选择公司",
				lastQuery : ' ',
				store : new Ext.data.JsonStore({
					baseParams : this.params,
					url : 'com.zoomlion.hjsrm.frame.bclib.OrganizationManager.queryCompanys.biz.ext',
					root : "data",
					successProperty : "success",
					fields : [{
								name : "orgid"
							}, {
								name : "orgcode"
							}, {
								name : "orgname"
							}, {
								name : "orgtype"
							}]
				})
			}, {
				xtype : 'dictcombobox',
				hiddenName : 'query/configtype',
				fieldLabel : '应用模块',
				editable : true,
				dictData : TCIS_OM_CONFIGTYPE
			}, {
				xtype : 'textfield',
				name : 'query/paramname',
				fieldLabel : '参数名称'
			}, {
				xtype : 'textfield',
				name : 'query/paramid',
				fieldLabel : '参数编码'
			}, {
				xtype : 'textfield',
				name : 'query/paramvalue',
				fieldLabel : '参数值'
			}

			]
		});
	}

	this.initListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({

		});
		var saveUrl = 'com.zoomlion.hjsrm.frame.tools.sysconfig.SysconfigManage.updateSysconfigs.biz.ext';
		var tbar = new Ext.Toolbar({
					items : [{
								xtype : 'button',
								text : "修改参数",
								iconCls : 'icon-application_edit',
								scope : this,
								handler : this.onEdit
							}, "-", {
								xtype : 'button',
								text : "更新缓存",
								iconCls : 'icon-application_delete',
								scope : this,
								handler : this.reloadRache
							}]
				});

		var colModel = new Ext.grid.ColumnModel([selModel, {
					header : "参数名称",
					dataIndex : "paramname",
					sortable : true,
					width : 80
				}, {
					header : "参数编码",
					dataIndex : "paramid",
					sortable : true,
					width : 80
				}, {
					header : "参数类型",
					dataIndex : "paramtype",
					sortable : true,
					align : 'center',
					width : 80
				}, {
					header : "参数说明",
					type : 'String',
					width : 150,
					dataIndex : "paramdesc"
				}, {
					header : "参数值",
					dataIndex : "paramvalue",
					sortable : true,
					width : 150,
					renderer : function(value, metadata, record, rowIndex,
							columnIndex, store) {
						if (record.data.paramtype == 'image' && value != null) {
							metadata.attr = 'ext:qtip="图片预览:<br/><img width=200 src=/default/'
									+ value + ' />"';
							if (value != '' && value != null) {
								return Ext.util.Format.htmlEncode("......");
							} else {
								return Ext.util.Format.htmlEncode(value);
							}

						}

						return Ext.util.Format.htmlEncode(value);
					}
				}, {
					header : "公司名称",
					dataIndex : "dataorgname",
					sortable : true,
					width : 150
				}]);

		var store = new Ext.data.JsonStore({
			url : 'com.zoomlion.hjsrm.frame.tools.sysconfig.SysconfigManage.querySysconfigs.biz.ext',
			root : 'data',
			totalProperty : 'totalCount',
			fields : [{
						name : 'paramid'
					}, {
						name : 'paramname'
					}, {
						name : 'paramtype'
					}, {
						name : 'paramconfig'
					}, {
						name : 'paramvalue'
					}, {
						name : 'paramdesc'
					}, {
						name : 'configtype'
					}, {
						name : 'dataorgid'
					}, {
						name : 'dataorgname'
					}]
		});

		this.listPanel = new Ext.fn.ListPanel({
					title : '参数配置',
					cm : colModel,
					hsPage : false,
					sm : selModel,
					store : store,
					tbar : tbar,
					viewConfig : {
						forceFit : true
					}
				});
	}

	this.initInputWindow = function() {
		this.inputWindow = this.inputWindow || new Ext.fn.FormWindow({
			title : '图片上传',
			width : 350,
			height : 120,
			items : [{
						xtype : 'inputpanel',
						fileUpload : true,
						saveUrl : 'com.zoomlion.hjsrm.frame.bclib.file.FileUpload.flow',
						columns : 1,
						fields : [{
									xtype : 'textfield',
									allowBlank : false,
									fieldLabel : '选择文件',
									inputType : 'file',
									name : 'uploadFile'
								}]
					}]
		})
	}

	this.getEditWindow = function(type) {
		var configField;

		if (type == 'text') {
			configField = {
				name : 'sv/paramvalue',
				allowBlank : false,
				dataIndex : 'paramvalue',
				maxLength : 80,
				anchor : '90%',
				fieldLabel : '参数值',
				colspan : 1,
				stripCharsRe : /^\s+|\s+$/g
			}
		}
		if (type == 'image') {
			configField = {
				xtype : "compositefield",
				anchor : '90%',
				items : [{
							xtype : 'textfield',
							fieldLabel : '图片地址',
							flex : 1,
							dataIndex : 'paramvalue',
							name : 'sv/paramvalue',
							readOnly : true
						}, {
							xtype : 'button',
							width : 80,
							text : "点我上传",
							scope : this,
							handler : function() {
								this.upImage();
							}
						}]
			}
		}
		if (type == 'number') {
			configField = {
				xtype : 'numberfield',
				name : 'sv/paramvalue',
				allowBlank : false,
				maxLength : 20,
				dataIndex : 'paramvalue',
				anchor : '90%',
				fieldLabel : '参数值',
				colspan : 1
			}
		}
		if (type == 'dict') {
			configField = {
				xtype : 'dictcombobox',
				hiddenName : 'sv/paramvalue',
				dataIndex : 'paramvalue',
				allowBlank : false,
				fieldLabel : '参数值',
				anchor : '90%',
				editable : true,
				dictData : CONFIGTEMP
			}
		}

		return new Ext.fn.FormWindow({
			title : '修改参数值',
			height : 300,
			width : 500,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listPanel,
				layout : 'form',
				columns : 1,
				loadUrl : 'com.zoomlion.hjsrm.frame.tools.sysconfig.SysconfigManage.loadSysconfig.biz.ext',
				saveUrl : 'com.zoomlion.hjsrm.frame.tools.sysconfig.SysconfigManage.saveSysconfig.biz.ext',
				fields : [{
							xtype : 'textfield',
							dataIndex : 'dataorgid',
							name : 'sv/dataorgid',
							hidden : true,
							colspan : 1
						}, {
							xtype : 'textfield',
							fieldLabel : '所属公司',
							dataIndex : 'dataorgname',
							name : 'sv/dataorgname',
							readOnly : true,
							anchor : '90%',
							colspan : 1
						}, {
							xtype : 'textfield',
							fieldLabel : '参数名称',
							dataIndex : 'paramname',
							name : 'sv/paramname',
							readOnly : true,
							anchor : '90%',
							colspan : 1
						}, {
							xtype : 'textfield',
							fieldLabel : '参数编码',
							dataIndex : 'paramid',
							name : 'sv/paramid',
							readOnly : true,
							anchor : '90%',
							colspan : 1
						}, configField]
			}]
		});
	}
}