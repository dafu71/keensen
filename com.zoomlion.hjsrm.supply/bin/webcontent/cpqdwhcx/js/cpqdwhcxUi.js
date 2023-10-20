
com.zoomlion.hjsrm.cpflpzcxdl.CpqdwhcxMgr = function() {
	if (Ext.isEmpty(lifnr)) {
		var OR = false
	} else {
		var OR = true
	}
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListNotePanel();
		this.buildExcelUploadWin();
		this.initInputWindow();
		this.initEditWindow();
		this.initqpqdViewWindow();
		this.initViewWindow();
		this.initStorecool();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'cpqdwhcxMgr',
					panels : [this.queryPanel,this.listNotePanel]
				});
	}
    this.initStorecool = function() {
		this.storecool = new Ext.data.JsonStore({
					url : 'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.queryname1.biz.ext',
					root : 'data',
					fields : [{
								name : 'lifnr'
							}, {
								name : 'name1'
							}]
				})
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 190,
					columns : 3,
					//region : 'north',
					collapsible : true,
					titleCollapse : false,
					border : true,
					title : '【 产品清单查询 】',
					fields : [ {
								xtype : 'textfield',
								hidden : OR,
								name : 'condition/lifnr',
								fieldLabel : '供应商编码'
							}, {
								xtype : 'textfield',
								hidden : OR,
								name : 'condition/name1',
								fieldLabel : '供应商描述'
							}, {
								xtype : 'textfield',
								name : 'condition/cpmc',
								fieldLabel : '产品名称'
							},{
								xtype : 'textfield',
								name : 'condition/cpxh',
								fieldLabel : '产品型号'
							},{
								xtype : 'textfield',
								name : 'condition/cpgg',
								fieldLabel : '产品规格'
							},{
								xtype : 'textfield',
								name : 'condition/zyjscs',
								fieldLabel : '主要技术参数'
							},{
								xtype : 'cplbcombobox',
								name : 'condition/ssdl',
								ssdj:'1',
								editable : true,
								fieldLabel : '大类名称',
								dataIndex : 'condition/ssdl',
								hiddenName : 'condition/ssdl'
							},{
								xtype : 'cplbcombobox',
								name : 'condition/sszl',
								ssdj:'2',
								editable : true,
								fieldLabel : '中类名称',
								dataIndex : 'condition/sszl',
								hiddenName : 'condition/sszl'
							},{
								xtype : 'cplbcombobox',
								name : 'condition/sscl',
								ssdj:'3',
								editable : true,
								fieldLabel : '小类名称',
								dataIndex : 'condition/ssxl',
								hiddenName : 'condition/ssxl'
							},{
								xtype : "dateregion",
								width : 200,
								nameArray : ['condition/modifytimesdate',
										'condition/modifytimeedate'],
								fieldLabel : "更改时间",
								format : "Y-m-d"
							},{
								xtype : 'textfield',
								name : 'condition/operatorname',
								fieldLabel : '更改人姓名'
							}]
				});
	}

	this.initListNotePanel = function() {
		this.selModel2 = new Ext.grid.CheckboxSelectionModel({});
		var _this = this;
		this.listNotePanel = new Ext.fn.ListPanel({
			title : '【 产品清单列表 】',
			hsPage : true,
			pageSizeComboStore:[10, 15, 20],
			tbar : [{
						text : "新增",
						scope : this,
						rescode : '00506',
						iconCls : 'icon-application_add',
						handler : this.onAdd
					},{
						text : "修改",
						scope : this,
						rescode : '00506',
						iconCls : 'icon-application_edit',
						handler : this.onEdit
					},/*{
						text : "导出",
						scope : this,
						rescode : '00505',
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
					},*/{
						text : "模板下载",
						scope : this,
						rescode : '00506',
						iconCls : 'icon-application_excel',
						handler : this.xzMb
					},{
						text : "导入",
						scope : this,
						rescode : '00506',
						iconCls : 'icon-application_excel',
						handler : this.onImportExcel
					},{
						text : '删除',
						scope : this,
						rescode : '00506',
						iconCls : 'icon-application_delete',
						handler : this.onDel
					},{
						text : '查看',
						scope : this,
						rescode : '00505',
						iconCls : 'icon-application_form_magnify',
						handler : this.onquery
					}],
			selModel : this.selModel2,
			delUrl : 'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.delcpqdwhcx.biz.ext',
			columns : [new Ext.grid.RowNumberer(), this.selModel2,  {
				header : 'ID',
				dataIndex : 'id',
				hidden:true
			},{
				header : '供应商帐号',
				dataIndex : 'lifnr'
				/*,
				renderer : function(value, p, record, rowIndex, colIndex) {
					return '<a href="javascript:supplyShowxx(' + "1" + value
							+ ')">' + value + '</a>';
				}*/
			}, {
				header : '供应商名称',
				dataIndex : 'name1'
			},{
				header : '产品名称',
				dataIndex : 'cpmc'
			},{
				header : '产品型号',
				dataIndex : 'cpxh'
			},{
				header : '产品规格',
				dataIndex : 'cpgg'
			},{
				header : '所属大类',
				dataIndex : 'ssdl',
				hidden : true
			},{
				header : '所属大类名称',
				dataIndex : 'ssdlmc'
			},{
				header : '所属中类',
				dataIndex : 'sszl',
				hidden : true
			},{
				header : '所属中类名称',
				dataIndex : 'sszlmc'
			},{
				header : '所属小类',
				dataIndex : 'ssxl',
				hidden : true
			},{
				header : '所属小类名称',
				dataIndex : 'ssxlmc'
			},{
				header : '年提供量',
				dataIndex : 'ntgl'
			},{
				header : '关键质量点',
				dataIndex : 'gjzld'
			},{
				header : '主要技术参数',
				dataIndex : 'zyjscs'
			}, {
				header : '备注',
				dataIndex : 'text'
			},{
				dataIndex : 'statu',
				header : '状态',
				hidden:true
			}, {
				dataIndex : 'userid',
				header : '更改人id',
				hidden :true
			},{
				dataIndex : 'operatorname',
				header : '更改人姓名'
			}, {
				dataIndex : 'modifytime',
				header : '更改时间'
			}],
			store : new Ext.data.JsonStore({
						url : 'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.querycpqdwhcx.biz.ext',
						root : 'data',
						// autoLoad : true,
						totalProperty : 'totalCount',
						fields : [ {
									name : 'id'
								}, {
									name : 'lifnr'
								}, {
									name : 'name1'
								},{
									name : 'cpmc'
								}, {
									name : 'cpxh'
								}, {
									name : 'cpgg'
								}, {
									name : 'ssdl'
								}, {
									name : 'sszl'
								}, {
									name : 'ssxl'
								},{
									name : 'ssdlmc'
								}, {
									name : 'sszlmc'
								}, {
									name : 'ssxlmc'
								}, {
									name : 'ntgl'
								}, {
									name : 'gjzld'
								}, {
									name : 'zyjscs'
								}, {
									name : 'text'
								}, {
									name : 'statu'
								}, {
									name : 'userid'
								}, {
									name : 'operatorname'
								},{
									name : 'modifytime'
								}]
					})
		});
	}
	
	// 导入excel面板
	this.buildExcelUploadWin = function() {
		this.excelUploadWin = new Ext.Window({
			title : '导入Excel',
			collapsible : false,
			modal : true,
			closeAction : 'hide',
			buttonAlign : 'center',
			layout : 'fit',
			width : 480,
			height : 120,
			items : [{
						xtype : 'columnform',
						itemId : 'uploadForm',
						saveUrl : 'com.zoomlion.hjsrm.supply.manager.supply.uploadcpqdxx.flow',
						columns : 1,
						fileUpload : true,
						fields : [{
									name : 'uploadFile',
									fieldLabel : '选择文件',
									allowBlank : false,
									inputType : 'file'
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
							this.excelUploadWin.hide();
						}
					}]
		});
	}
this.initInputWindow = function(){
	var _this = this;
	var ssdl = Ext.id();
	var sszl = Ext.id();
	var ssxl = Ext.id();
	var inputwindow = Ext.id();
		this.inputWindow = this.inputWindow|| new Ext.fn.FormWindow({
			title:'新增产品清单',
			id : inputwindow,
			height:600,
			width:800,
			items:[{
				xtype:'inputpanel',
				pgrid:this.listNotePanel,
				columns : 2,
				saveUrl:'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.addcpqdwhcx.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'cpqd/lifnr',
							allowBlank : false,
							fieldLabel : '供应商代码',
							listeners : {
								'change' : function(o, newValue, oldValue) {
                                     var l = 10 - newValue.length;
		                              for (var i = 0; i < l; i++) {
			                                newValue = "0" + newValue;
		                                  }
									var name1 = "未找到";
									_this.storecool.queryBy(function(r) {
												if (r.get('lifnr') == newValue) {
													name1 = r
															.get('name1');
													return;
												}
											})
									Ext.getCmp(inputwindow).items.items[0].form
											.findField('cpqd/name1')
											.setValue(name1);
								}
							},
							colspan : 1							
						},{
							xtype : 'textfield',
							name : 'cpqd/name1',
							readOnly: true,
							fieldLabel : '供应商名称',
							colspan : 1							
						}, {
							xtype : 'textfield',
							name : 'cpqd/cpmc',
							allowBlank : false,						
							fieldLabel : '产品名称',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'cpqd/cpxh',
							allowBlank : false,						
							fieldLabel : '产品型号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'cpqd/cpgg',
							allowBlank : false,						
							fieldLabel : '产品规格',
							colspan : 1
						}, {
							id : ssdl,
							xtype : 'cplbcombobox',
							name : 'cpqd/ssdl',
							dataIndex : 'cpqd/ssdl',
							hiddenName : 'cpqd/ssdl',
							ssdj:'1',
							allowBlank : false,
							//anchor : '90%',
							fieldLabel : '所属大类',
							listeners : {										
							'change' : function(o, newValue,oldValue) {
								  	Ext.getCmp(sszl).store.load({
					                       params : {
					                    "condition/ssdj": '2',
			                 		    "condition/hbdm": newValue
					                          }
			                             	});
				
	
							            }											
									},
							colspan : 1
						},{
							id : sszl,
							xtype : 'cplbcombobox',
							name : 'cpqd/sszl',
							dataIndex : 'cpqd/sszl',
							hiddenName : 'cpqd/sszl',							
							ssdj:'2',
							allowBlank : false,							
							fieldLabel : '所属中类',
							listeners : {
						    'beforeselect' : function(){
							  if (Ext.getCmp(ssdl).getValue() == null
											|| Ext.getCmp(ssdl).getValue() == "") {
										Ext.Msg.alert("系统提示", "请先选择产品大类!");
										return false;
									}
								},
							'change' : function(o, newValue,oldValue) {
								  	Ext.getCmp(ssxl).store.load({
					                       params : {
					                    "condition/ssdj": '3',
			                 		    "condition/hbdm": newValue
					                          }
			                             	});
							            }											
									},
							colspan : 1
						}, {
							id : ssxl,
							xtype : 'cplbcombobox',
							name : 'cpqd/ssxl',
							dataIndex : 'cpqd/ssxl',
							hiddenName : 'cpqd/ssxl',
							ssdj:'3',
							allowBlank : false,
							fieldLabel : '所属小类',
							listeners : {
						    'beforeselect' : function(){
							  if (Ext.getCmp(sszl).getValue() == null
											|| Ext.getCmp(sszl).getValue() == "") {
										Ext.Msg.alert("系统提示", "请先选择产品中类!");
										return false;
									}
								}								
									},
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'cpqd/ntgl',						
							fieldLabel : '年提供量',
							colspan : 1
						}, {
							xtype : 'textarea',
							height:130,
							name : 'cpqd/gjzld',							
							fieldLabel : '关键质量点',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'cpqd/zyjscs',
							height:130,
							fieldLabel : '主要技术参数',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'cpqd/text',							
							fieldLabel : '备注',
							height:130,
							colspan : 2
						}]
			}]
		});
	}
this.initEditWindow = function() {
		var _this = this;
	    var ssdl1 = Ext.id();
	    var sszl1 = Ext.id();
	    var ssxl1 = Ext.id();
	    var editwindow = Ext.id();
		this.editWindow = this.editWindow || new Ext.fn.FormWindow({
			title : '编辑产品清单',
			height : 600,
			width : 800,
			id : editwindow,
			resizable : false,
			minimizable : false,
			maximizable : false,
			items : [{
				xtype : 'editpanel',
				pgrid : this.listNotePanel,
				columns : 2,
				loadUrl : 'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.loadcpqdwhcx.biz.ext',
				saveUrl : 'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.addcpqdwhcx.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'cpqd/id',
							allowBlank : false,
							dataIndex : 'id',
							fieldLabel : 'id',
							hidden:true,
							colspan : 1							
						},{
							xtype : 'textfield',
							name : 'cpqd/lifnr',
							allowBlank : false,
							dataIndex : 'lifnr',
							listeners : {
								'change' : function(o, newValue, oldValue) {
                                     var l = 10 - newValue.length;
		                              for (var i = 0; i < l; i++) {
			                                newValue = "0" + newValue;
		                                  }
									var name1 = "未找到";
									_this.storecool.queryBy(function(r) {
												if (r.get('lifnr') == newValue) {
													name1 = r
															.get('name1');
													return;
												}
											})
									Ext.getCmp(editwindow).items.items[0].form
											.findField('cpqd/name1')
											.setValue(name1);
								}
							},
							fieldLabel : '供应商代码',
							colspan : 1							
						},{
							xtype : 'textfield',
							name : 'cpqd/name1',
							dataIndex : 'name1',
							readOnly: true,
							fieldLabel : '供应商名称',
							colspan : 1							
						}, {
							xtype : 'textfield',
							name : 'cpqd/cpmc',
							dataIndex : 'cpmc',
							allowBlank : false,						
							fieldLabel : '产品名称',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'cpqd/cpxh',
							dataIndex : 'cpxh',
							allowBlank : false,						
							fieldLabel : '产品型号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'cpqd/cpgg',
							dataIndex : 'cpgg',
							allowBlank : false,						
							fieldLabel : '产品规格',
							colspan : 1
						}, {
							id : ssdl1,
							xtype : 'cplbcombobox',
							name : 'cpqd/ssdl',
							dataIndex : 'ssdl',
							hiddenName : 'cpqd/ssdl',
							ssdj:'1',
							allowBlank : false,
							//anchor : '90%',
							fieldLabel : '所属大类',
							listeners : {										
							'change' : function(o, newValue,oldValue) {
								  	Ext.getCmp(sszl1).store.load({
					                       params : {
					                    "condition/ssdj": '2',
			                 		    "condition/hbdm": newValue
					                          }
			                             	});				
							            }											
									},
							colspan : 1
						},{
							id : sszl1,
							xtype : 'cplbcombobox',
							name : 'cpqd/sszl',
							dataIndex : 'sszl',
							hiddenName : 'cpqd/sszl',							
							ssdj:'2',
							allowBlank : false,							
							fieldLabel : '所属中类',
							listeners : {
						    'beforeselect' : function(){
							  if (Ext.getCmp(ssdl1).getValue() == null
											|| Ext.getCmp(ssdl1).getValue() == "") {
										Ext.Msg.alert("系统提示", "请先选择产品大类!");
										return false;
									}
								},
							/*'focus':function(){
								Ext.getCmp(sszl1).store.load({params : {
						                    "condition/ssdj": '2',
			                                "condition/hbdm": Ext.getCmp(ssdl1).getValue()
					                 }});
							},*/
							'change' : function(o, newValue,oldValue) {
								  	Ext.getCmp(ssxl1).store.load({
					                       params : {
					                    "condition/ssdj": '3',
			                 		    "condition/hbdm": newValue
					                          }
			                             	});
			                            Ext.getCmp(ssxl1).setReadOnly(false);
							            }											
									},
							colspan : 1
						}, {
							id : ssxl1,
							xtype : 'cplbcombobox',
							name : 'cpqd/ssxl',
							dataIndex : 'ssxl',
							hiddenName : 'cpqd/ssxl',
							ssdj:'3',
							allowBlank : false,
							fieldLabel : '所属小类',
							listeners : {
						    'beforeselect' : function(){
							  if (Ext.getCmp(sszl1).getValue() == null
											|| Ext.getCmp(sszl1).getValue() == "") {
										Ext.Msg.alert("系统提示", "请先选择产品中类!");
										return false;
									}
								}
							/*'focus':function(){
								Ext.getCmp(ssxl1).store.load({params : {
						                    "condition/ssdj": '3',
			                                "condition/hbdm": Ext.getCmp(sszl1).getValue()
					                 }});
							}*/
									},
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'cpqd/ntgl',	
							dataIndex : 'ntgl',
							fieldLabel : '年提供量',
							colspan : 1
						}, {
							xtype : 'textarea',
							name : 'cpqd/gjzld',
							dataIndex : 'gjzld',
							height:130,
							fieldLabel : '关键质量点',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'cpqd/zyjscs',
							dataIndex : 'zyjscs',
							height:130,
							fieldLabel : '主要技术参数',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'cpqd/text',
							dataIndex : 'text',
							height:130,
							fieldLabel : '备注',
							colspan : 2
						}]
			}]
		});
	}
	this.initqpqdViewWindow = function() {
		this.viewqpqdWindow = this.viewqpqdWindow || new Ext.fn.ShowWindow({
			title : '查看产品清单信息',
			height : 600,
		    id : 'viewcpqdWindow',
			width : 800,
			resizable : false,
			minimizable : false,
			maximizable : false,
			defaults:{autoScroll : true},
			items : [{
				xtype : 'viewpanel',
				columns : 2,
				loadUrl : 'com.zoomlion.hjsrm.supply.manager.supply.cpflqdMgr.loadcpqdwhcx.biz.ext',
				fields : [{
							xtype : 'textfield',
							name : 'cpqd/id',
							dataIndex : 'id',
							fieldLabel : 'id',
							hidden:true,
							colspan : 1							
						},{
							xtype : 'textfield',
							name : 'cpqd/lifnr',
							dataIndex : 'lifnr',
							fieldLabel : '供应商代码',
							colspan : 1							
						},{
							xtype : 'textfield',
							name : 'cpqd/name1',
							dataIndex : 'name1',
							readOnly: true,
							fieldLabel : '供应商名称',
							colspan : 1							
						},{
							xtype : 'textfield',
							name : 'cpqd/cpmc',
							dataIndex : 'cpmc',					
							fieldLabel : '产品名称',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'cpqd/cpxh',
							dataIndex : 'cpxh',					
							fieldLabel : '产品型号',
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'cpqd/cpgg',
							dataIndex : 'cpgg',					
							fieldLabel : '产品规格',
							colspan : 1
						}, {
						
							xtype : 'cplbcombobox',
							name : 'cpqd/ssdl',
							dataIndex : 'ssdl',
							hiddenName : 'cpqd/ssdl',
							ssdj:'1',
							//anchor : '90%',
							fieldLabel : '所属大类',
							colspan : 1
						},{
							
							xtype : 'cplbcombobox',
							name : 'cpqd/sszl',
							dataIndex : 'sszl',
							hiddenName : 'cpqd/sszl',							
							ssdj:'2',							
							fieldLabel : '所属中类',
							colspan : 1
						}, {

							xtype : 'cplbcombobox',
							name : 'cpqd/ssxl',
							dataIndex : 'ssxl',
							hiddenName : 'cpqd/ssxl',
							ssdj:'3',
							fieldLabel : '所属小类',						
							colspan : 1
						}, {
							xtype : 'textfield',
							name : 'cpqd/ntgl',	
							dataIndex : 'ntgl',
							fieldLabel : '年提供量',
							colspan : 1
						}, {
							xtype : 'textarea',
							name : 'cpqd/gjzld',
							dataIndex : 'gjzld',
							height:130,
							fieldLabel : '关键质量点',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'cpqd/zyjscs',
							dataIndex : 'zyjscs',
							height:130,
							fieldLabel : '主要技术参数',
							colspan : 2
						}, {
							xtype : 'textarea',
							name : 'cpqd/text',
							dataIndex : 'text',
							height:130,
							fieldLabel : '备注',
							colspan : 2
						}]
			}]
		});
	}
	this.storeTelxx = this.storeTelxx || new Ext.data.JsonStore({
		autoLoad : false,
		url : 'com.zoomlion.hjsrm.supply.manager.supply.FormalSupplyMgr.loadSupplyTel.biz.ext',
		root : 'datatel',
		colspan : 4,
		height : 150,
		fields : [{
					name : 'zttel'
				}, {
					name : 'ztext'
				}, {
					name : 'zname'
				}, {
					name : 'zmtel'
				}, {
					name : 'zptel'
				}, {
					name : 'email'
				}]
	});

	var colListxx = new Ext.grid.ColumnModel([{
				header : "编号",
				dataIndex : "zttel",
				sortable : true,
				hide : true,
				width : 10
			}, {
				header : "职务",
				dataIndex : "ztext",
				sortable : true,
				width : 50
			}, {
				header : "姓名",
				dataIndex : "zname",
				sortable : true,
				width : 40
			}, {
				header : "座机",
				dataIndex : "zmtel",
				sortable : true,
				width : 60
			}, {
				header : "手机",
				dataIndex : "zptel",
				sortable : true,
				width : 60
			}, {
				header : "邮件地址",
				dataIndex : "email",
				sortable : true,
				width : 110
			}]);
	this.supplyQueryTelxx = new Ext.fn.ListPanel({
		cm : colListxx,
		id : 'supplyTelPanelxx',
		store : this.storeTelxx,
		width : 320,
		colspan : 4,
		fieldLabel : '联系人明细',
		height : 163,
		clicksToEdit : 1,
		hsPage : false,
		subAll : false,
		viewConfig : {
			forceFit : true
		}
		});	
	
	this.initViewWindow = function() {
		var _this = this;
		this.cpattachId = Ext.id();
		this.cpattachId1 = Ext.id();
		this.cpattachId2 = Ext.id();
		this.cpattachId3 = Ext.id();
		this.cpattachId4 = Ext.id();
		this.cpattachId5 = Ext.id();
		this.viewWindow = this.viewWindow || new Ext.fn.ShowWindow({
			id : 'showSupplyInfoxx',
			title : '查看供应商信息',
			height : 550,
			fid : this.cpattachId,
			fid1 : this.cpattachId1,
			fid2 : this.cpattachId2,
			fid3 : this.cpattachId3,
			fid4 : this.cpattachId4,
			fid5 : this.cpattachId5,
			width : 800,
			resizable : true,
			minimizable : true,
			maximizable : true,
			items : [{
				xtype : 'viewpanel',
				columns : 4,
				autoScroll : true,
				loadUrl : 'com.zoomlion.hjsrm.supply.manager.supply.FormalSupplyMgr.loadSupply.biz.ext',
				fields : [{
							name : 'formalsupply/lifnr',
							dataIndex : 'lifnr',
							fieldLabel : '供应商编号',
							style : 'padding-top:3px;padding-left:10px;',
							anchor : '90%',
							xtype : 'displayfield',
							colspan : 2
						}, {
							name : 'formalsupply/name1',
							dataIndex : 'name1',
							fieldLabel : '供应商名称',
							style : 'padding-top:3px;padding-left:10px;',
							anchor : '90%',
							xtype : 'displayfield',
							colspan : 4
						}, {
							xtype : 'displayfield',
							style : 'padding-top:3px;padding-left:10px;',
							name : 'formalsupply/pstlz',
							fieldLabel : '邮政编码',
							dataIndex : 'pstlz',
							anchor : '90%',
							colspan : 1
						}, {
							xtype : 'displayfield',
							name : 'formalsupply/stras',
							style : 'padding-top:3px;padding-left:10px;',
							fieldLabel : '供应商地址',
							dataIndex : 'stras',
							anchor : '90%',
							colspan : 3
						}, {
							xtype : 'dictdisplayfield',
							style : 'padding-top:3px;padding-left:10px;',
							dictData : GE_SUPPLY_PROPERTY,
							dataIndex : 'lprop',
							fieldLabel : '供应商属性',
							colspan : 1
						}, {
							fieldLabel : '供应商类型',
							xtype : 'dictdisplayfield',
							style : 'padding-top:3px;padding-left:10px;',
							dataIndex : 'ltype',
							dictData : GE_SUPPLY_MASSTYPE,
							colspan : 1
						}, {
							fieldLabel : '供应商批量',
							xtype : 'dictdisplayfield',
							style : 'padding-top:3px;padding-left:10px;',
							dataIndex : 'batch',
							dictData : GE_SUPPLY_REGIMENTATION,
							colspan : 1
						}, {
							fieldLabel : '供应商分级',
							xtype : 'dictdisplayfield',
							style : 'padding-top:3px;padding-left:10px;',
							dataIndex : 'lsyst',
							dictData : GE_SUPPLY_SYSTEMATICS,
							colspan : 1
						},{
							fieldLabel : '主供物资类别',
							xtype : 'dictdisplayfield',
							style : 'padding-top:3px;padding-left:10px;',
							dataIndex : 'lsort',
							dictData : GE_SUPPLY_MATERIALTYPE,
							colspan : 4
						},  this.supplyQueryTelxx, {
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.cpattachId,
							postParams : {
								relationId : 0,
								groupId : 'swdjpaperwork'
							},
							isDownload : true,
							fieldLabel : '税务登记证',
							title : '税务登记证',
							itemId : 'attachmentlist'
						}, {
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.cpattachId1,
							postParams : {
								relationId : 0,
								groupId : 'zzjgparperwork'
							},
							isDownload : true,
							fieldLabel : '组织机构代码证',
							title : '组织机构代码证',
							itemId : 'attachmentlist'
						}, {
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.cpattachId2,
							postParams : {
								relationId : 0,
								groupId : 'yyzzpaperwork'
							},
							isDownload : true,
							fieldLabel : '营业执照',
							title : '营业执照',
							itemId : 'attachmentlist'
						}, {
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.cpattachId3,
							postParams : {
								relationId : 0,
								groupId : 'txrzpaperwork'
							},
							isDownload : true,
							fieldLabel : '体系认证',
							title : '体系认证',
							itemId : 'attachmentlist'
						}, {
							xtype : 'textarea',
							fieldLabel : '公司业务范围',
							dataIndex : 'zzyyw',
							anchor : '90%',
							height : 80,
							colspan : 4
						},{
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.cpattachId4,
							postParams : {
								relationId : 0,
								groupId : 'gsjjpaperwork'
							},
							isDownload : true,
							fieldLabel : '公司简介文档',
							title : '公司业务范围',
							itemId : 'attachmentlist'
						}, {
							colspan : 4,
							width : 700,
							heigh : 100,
							isUploaded : false,
							xtype : 'attachmentlist',
							name : 'attachlist',
							id : this.cpattachId5,
							postParams : {
								relationId : 0,
								groupId : 'qtfjpaperwork'
							},
							isDownload : true,
							fieldLabel : '其它附件',
							title : '其它附件',
							itemId : 'attachmentlist'
						}]
			}]
		});
	}
}