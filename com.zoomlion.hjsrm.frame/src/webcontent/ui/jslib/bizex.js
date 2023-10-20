/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 修改组织机构模型
 * 创建日期： 2014-9-24
 * 补丁编号： G3_P_20140915_01_238 
 * 作 者： 吕俊涛
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号                 修改人  日期          区域   备注
// G3_P_20140915_01_238 吕俊涛   2014-9-24  集团
//
// =================================================================
// comselect
Ext.form.StaffFuzzyCombox = Ext.extend(Ext.form.ComboBox, {
			typeAhead : true,
			triggerAction : "query",
			forceSelection : true,
			selectOnFocus : true,
			//hideTrigger : true,
			xtype : "combo",
			mode : 'local',
			valueField : "userid",
			loadParams:{},
			displayField : "operatorname",
			maxHeight:150,
			store:new Ext.data.JsonStore({
				proxy : new Ext.data.MemoryProxy([]),
				fields : ["empid", "empcode","empname","operatorname","userid","mobileno"]
			}),
			listeners : {
				scope : this,
				beforequery:function(e){                     
	                var combo = e.combo;    
	                if(!e.forceAll){    
	                    var input = e.query; 
	                    var regExp = new RegExp(".*" + input + ".*");  
	                    combo.store.filterBy(function(record,id){     
	                        var text = record.get(combo.displayField);    
	                        return regExp.test(text);   
	                    });  
	                    combo.expand();    
	                    return false;  
	                }  
            }
			},
			listClass : "listClass",			
			initComponent : function() {				
				this.tpl = '<div style="height:'+this.maxHeight+'px;overflow: auto;"><tpl for="."><div class="x-combo-list-item"><span>{'+this.displayField+'}</span></div></tpl></div>';
				Ext.form.StaffFuzzyCombox.superclass.initComponent.call(this);
				this.loadData(this.loadParams);
			},
			loadData:function(params){
				var G = [];
				var _this = this;
				Ext.Ajax.request({
					url : this.url || "com.zoomlion.hjsrm.frame.bclib.EmployeeManager.queryEmpopersByDataorgId.biz.ext",
					params:params,
					success : function(A) {
						var B = Ext.decode(A.responseText);				
						Ext.each(B.data, function(C) {					
								G[G.length] = C
						});
						_this.store.loadData(G);
					}
					
				})
			}
		});
Ext.reg("stafffuzzycombox", Ext.form.StaffFuzzyCombox);
Ext.ns("Ext.bz.common");
/**
 * 
 * @class Ext.bz.common.CommonSelectField
 * @extends Ext.form.TwinTriggerField
 * <p> 通用选择组件
 * <p>用法:
 * <pre><code>
 * {
 * hiddenName:'',
 * displayField:'',
 * valueField:''
 * }
 * </code></pre>
 */
Ext.bz.common.CommonSelectField = Ext.extend(Ext.form.TwinTriggerField, {
			hiddenName : undefined,
			valueField : undefined,
			displayField : undefined,
			editable:false,
			name : undefined,
			selModel : "single",
			gridXtype : undefined,
			queryToolbar : [],
			exParams : {},
			baseParams : {},
			trigger1Class : "x-form-clear-trigger",
			trigger2Class : "x-form-search-trigger",
			validationEvent : false,
			validateOnBlur : false,
			hideTrigger1 : true,
			initComponent : function() {
				this.selWinTbar = this.buildTbar(this.queryToolbar);
				this.selWin = this.getselectWin();
				Ext.bz.common.CommonSelectField.superclass.initComponent
						.call(this);
				this.grid = this.selWin.getComponent("innergrid");
				this.addEvents("selected", "valueclear");
				this.grid.on({
							scope : this,
							"rowdblclick" : function(D, B, A) {
								var C = D.getSelectionModel().getSelected();
								this.onSelectBtnHandler()
							}
						})
			},
			reset : function() {
				if (this.hiddenField) {
					this.hiddenField.value = ""
				}
				if (this.rendered && this.triggers) {
					this.showTrig(this.triggers[1]);
					this.hideTrig(this.triggers[0]);
				}
				Ext.bz.common.CommonSelectField.superclass.reset.call(this)
			},
			dosingle : function(B, A) {
				if (A.length > 1) {
					Ext.Msg.alert("系统提示", "只能选择一条记录");
					return false
				}
				var C = A[0];
				this.setValue(C.data[this.displayField || "empname"]);
				this.hiddenField.value = C.data[this.valueField || "empid"];
				return true
			},
			domultiple : function(B, A) {
				var C = [];
				var D = [];
				Ext.each(A, function(E) {
							C[C.length] = E.data[this.displayField || "empname"];
							D[D.length] = E.data[this.valueField || "empid"]
						}, this);
				this.setValue(C.join(";"));
				this.hiddenField.value = D;
				return true
			},
			domerger : function(B, A) {
				var C = [];
				var D = [];
				Ext.each(A, function(E) {
							C[C.length] = E.data[this.displayField || "empname"];
							D[D.length] = E.data[this.valueField || "empid"]
						}, this);
				this.setValue(C.join(";"));
				this.hiddenField.value = D.join(";");
				return true
			},
			buildTbar : function(D) {
				var C = D;
				if (C.length == 0) {
					C.push({
								xtype : "label",
								text : "员工编号:"
							});
					C.push({
								xtype : "textfield",
								name : "emp/empcode",
								ref : "../empcode"
							});
					C.push({
								xtype : "label",
								text : "员工姓名:"
							});
					C.push({
								xtype : "textfield",
								name : "emp/empname",
								ref : "../empname"
							});
				}
				var B = [];
				Ext.each(C, function(E) {
							if (E.ref) {
								var F = E.ref;
								var F = F.substr(F.indexOf("/") + 1);
								B[B.length] = F
							}
						}, this);
				var A = [C, {
							xtype : "buttongroup",
							columns : 3,
							items : [{
										ref : "../../queryBtn",
										text : "查询",
										scope : this,
										handler : function() {
											var E = {};
											Ext.each(B, function(G) {
														var H = this[G]
																.getName();
														var F = this[G]
																.getValue();
														if (H) {
															E[H] = F
														}
													}, this.selWin);
											this.loadData(E)
										}
									}, {
										text : "重置",
										scope : this,
										handler : function() {
											Ext.each(B, function(E) {
														this[E].reset()
													}, this.selWin)
										}
									}]
						}];
				return A
			},
			showTrig:function(trigger){
				trigger.dom.style.display = '';
			},
			hideTrig:function(trigger){
				trigger.dom.style.display = 'none';
			},
			onRender : function(B, A) {
				Ext.form.TwinTriggerField.superclass.onRender.call(this, B, A);
				if (this.hiddenName) {
					this.hiddenField = this.el.insertSibling({
								tag : "input",
								type : "hidden",
								name : this.hiddenName,
								id : (this.hiddenId || Ext.id())
							}, "before", true)
				}
				if (Ext.isGecko) {
					this.el.dom.setAttribute("autocomplete", "off")
				}
			},
			onTrigger1Click : function() {
				this.setValue(undefined);
				this.hiddenField.value = "";
				this.fireEvent("valueclear", this);
				this.triggers[0].hide();
				this.triggers[1].show()
			},
			onTrigger2Click : function() {
				this.selWin.show();
				this.loadData()
			},
			onSelectBtnHandler : function() {
				var A = this.grid.getSelectionModel().getSelections();
				if (A.length == 0) {
					Ext.Msg.alert("提示", "请至少选择一条记录");
					return
				}
				this.fireEvent("selected", this, A);
				if (this["do" + this.selModel](this.selWin, A)) {
					this.selWin.hide();
					this.triggers[0].show();
					this.triggers[1].hide()
				}
			},
			onCloseBtnHandler : function() {
				this.selWin.hide()
			},
			loadData : function(A) {
				A = A || {};
				Ext.applyIf(A, this.exParams);
				this.grid.store.baseParams = A;
				this.grid.store.load({
							params : {
								"pageCond/begin" : 0,
								"pageCond/length" : this.grid.pagingToolbar.pageSize
							}
						})
			},
			getselectWin : function() {
				return new Ext.Window({
							title : this.title,
							//animateTarget : Ext.getBody(),
							modal:true,
							closeAction : "hide",
							buttonAlign : "center",
							width : 678,
							height : 357,
							layout : "fit",
							items : [{
										xtype : this.gridXtype || "empgrid",
										url : this.url,
										singleSelect : this.singleSelect,
										itemId : "innergrid"
									}],
							tbar : this.selWinTbar,
							buttons : [{
										text : "选择",
										scope : this,
										handler : this.onSelectBtnHandler
									}, {
										text : "关闭",
										scope : this,
										handler : this.onCloseBtnHandler
									}]
						})
			}
		});
Ext.reg("commonselectfield", Ext.bz.common.CommonSelectField);
// DictCheckboxGroup
Ext.ns("Ext.bz.dict");
/**
 * 
 * @class Ext.bz.dict.DictCheckboxGroup
 * @extends Ext.ex.AuotCheckboxGroup
 * <p> 业务字典复选框组件
 * <p>用法:
 * <pre><code>
 * {
 * 	xtype:'dictcheckboxgroup',
 * dictData:[]
 * }
 * </code></pre>
 * 
 */
Ext.bz.dict.DictCheckboxGroup = Ext.extend(Ext.ex.AuotCheckboxGroup, {
			dictData : undefined,
			initComponent : function() {
				this.labelFiled = "DICTNAME";
				this.valueFiled = "DICTID";
				this.data = this.dictData;
				Ext.bz.dict.DictCheckboxGroup.superclass.initComponent
						.call(this)
			}
		});
Ext.reg("dictcheckboxgroup", Ext.bz.dict.DictCheckboxGroup);
// DictColumn
Ext.ns("Ext.bz.dict");
/**
 * 
 * @class Ext.bz.dict.DictColumn
 * @extends Ext.grid.Column
 * <p>业务字典列字段组件
 * <p>
 */
Ext.bz.dict.DictColumn = Ext.extend(Ext.grid.Column, {
			dictData : undefined,
			labelField : "DICTID",
			valueField : "DICTNAME",
			constructor : function(A) {
				Ext.grid.BooleanColumn.superclass.constructor.call(this, A);
				var B = this.undefinedText;
				this.renderer = function(D) {
					if (this.dictData === undefined || D === undefined) {
						return B
					}
					D = D || "";
					varray = D.split(",");
					vStrs = [];
					for (var C = 0; C < varray.length; C++) {
						vStrs[C] = this.getDictValue(varray[C])
					}
					return vStrs.join(",")
				}
			},
			getDictValue : function(C) {
				var D = "";
				if (C) {
					for (var A = 0; A < this.dictData.length; A++) {
						var B = this.dictData[A];
						if (B[this.labelField] == C) {
							D = B[this.valueField]
						}
					}
				}
				return D
			}
		});
Ext.apply(Ext.grid.Column.types, {
			dictcolumn : Ext.bz.dict.DictColumn
		});
// DictComboBox
Ext.ns("Ext.bz.dict");
/**
 * 
 * @class Ext.bz.dict.DictComboBox
 * @extends Ext.form.ComboBox
 * <p>业务字典下拉框组件
 */
Ext.bz.dict.DictComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : false,
			triggerAction : "all",
			mode : "local",
			valueField : "DICTID",
			displayField : "DICTNAME",
			resizable : false,
			forceSelection : true,
			emptyText : "--请选择--",
			dictData : undefined,
			initComponent : function() {
				this.buildStore();
				Ext.bz.dict.DictComboBox.superclass.initComponent.call(this);
				this.addEvents("valueChange")
			},
			setValue : function(A) {
				Ext.bz.dict.DictComboBox.superclass.setValue.call(this, A);
				if (A) {
					this.fireEvent("valueChange", this, A)
				}
			},
			listeners : {
				"expand" : function(A) {
					this.reset()
				}
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							proxy : new Ext.data.MemoryProxy(this.dictData),
							autoLoad : true,
							fields : [{
										name : "DICTID"
									}, {
										name : "DICTNAME"
									}, {
										name : "FULLNAME"
									}]
						});
				this.store.load()
			}
		});
Ext.reg("dictcombobox", Ext.bz.dict.DictComboBox);
// DictDisplayField
Ext.ns("Ext.bz.dict");

Ext.bz.dict.ComboBox = Ext.extend(Ext.form.ComboBox, {
		});
Ext.reg("combobox", Ext.bz.dict.ComboBox);
// DictDisplayField
Ext.ns("Ext.bz.dict");
/**
 * 
 * @class Ext.bz.dict.DictDisplayField
 * @extends Ext.form.DisplayField
 * <p>业务字段展示组件
 */
Ext.bz.dict.DictDisplayField = Ext.extend(Ext.form.DisplayField, {
			dictData : undefined,
			initComponent : function() {
				Ext.bz.dict.DictDisplayField.superclass.initComponent
						.call(this)
			},
			labelField : "DICTID",
			valueField : "DICTNAME",
			setValue : function(B) {
				B = B || "";
				varray = B.split(",");
				vStrs = [];
				for (var A = 0; A < varray.length; A++) {
					vStrs[A] = this.getDictValue(varray[A])
				}
				return Ext.bz.dict.DictDisplayField.superclass.setValue.call(
						this, vStrs.join(","))
			},
			getDictValue : function(C) {
				var D = "";
				if (C) {
					for (var A = 0; A < this.dictData.length; A++) {
						var B = this.dictData[A];
						if (B[this.labelField] == C) {
							D = B[this.valueField]
						}
					}
				}
				return D
			}
		});
Ext.reg("dictdisplayfield", Ext.bz.dict.DictDisplayField);
// EmployeeComboBox
Ext.ns("Ext.bz.org");
/**
 * 
 * @class Ext.bz.org.EmployeeComboBox
 * @extends Ext.form.ComboBox
 * <p>人员选择组件
 */
Ext.bz.org.EmployeeComboBox = Ext.extend(Ext.form.ComboBox, {
	displayField : "operatorname",
	valueField : "userid",
	triggerAction : "all",
	emptyText : "请选择",
	mode : "remote",
	url : undefined,
	store : undefined,
	triggerClass : "x-form-search-trigger",
	params : {},
	initComponent : function() {
		this.store = this.store || this.buildStore();
		Ext.bz.org.EmployeeComboBox.superclass.initComponent.call(this);
		this.addEvents("valueChange")
	},
	setValue : function(A) {
		Ext.bz.org.OperatorComboBox.superclass.setValue.call(this, A);
		if (A) {
			this.fireEvent("valueChange", this, A)
		}
	},
	buildStore : function() {
		return new Ext.data.JsonStore({
			baseParams : this.params,
			url : this.url
					|| "com.zoomlion.hjsrm.frame.bclib.EmployeeManager.queryEmpopersByOrgId.biz.ext",
			root : "data",
			successProperty : "success",
			fields : [this.displayField, this.valueField]
		})
	}
});
Ext.reg("empcombo", Ext.bz.org.EmployeeComboBox);
// EmpGridPanel
Ext.ns("Ext.bz.emp");
Ext.bz.emp.EmpGridPanel = Ext.extend(Ext.grid.GridPanel, {
	stripeRows : true,
	columnLines : true,
	loadMask : true,
	url : undefined,
	isSingleSelect : true,
	initComponent : function() {
		this.buildColumns();
		this.buildStore();
		this.pagingToolbar = new Ext.ex.PagingToolbarEx({
					xtype : "pagingtoolbarex",
					store : this.store
				});
		this.bbar = this.pagingToolbar;
		Ext.bz.emp.EmpGridPanel.superclass.initComponent.call(this)
	},
	buildStore : function() {
		this.store = new Ext.data.JsonStore({
			url : this.url
					|| "com.zoomlion.hjsrm.frame.bclib.org.EmployeeBclib.queryOrgEmp.biz.ext",
			root : "data",
			totalProperty : "totalCount",
			fields : [{
						name : "empid"
					}, {
						name : "empcode"
					}, {
						name : "empname"
					}, {
						name : "gender"
					}, {
						name : "empstatus"
					}, {
						name : "mainorgid"
					}, {
						name : "mainorgname"
					}, {
						name : "positionid"
					}, {
						name : "positionname"
					}, {
						name : "userid"
					}, {
						name : "orgname"
					}, {
						name : "orgid"
					}]
		})
	},
	buildColumns : function() {
		this.selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : this.isSingleSelect
				});
		this.cm = new Ext.grid.ColumnModel({
					defaults : {
						width : 120,
						sortable : true,
						menuDisabled : true
					},
					columns : [new Ext.grid.RowNumberer(), this.selModel, {
								dataIndex : "empid",
								header : "人员ID",
								hidden : true,
								sortable : true
							}, {
								dataIndex : "empcode",
								header : "人员代码",
								sortable : true
							}, {
								dataIndex : "empname",
								header : "人员姓名",
								sortable : true
							}, {
								dataIndex : "orgid",
								hidden : true,
								sortable : false
							}, {
								dataIndex : "orgname",
								header : "直接隶属机构"
							}, {
								dataIndex : "mainorgname",
								header : "主机构",
								sortable : false
							}, {
								dataIndex : "userid",
								header : "用户登录名",
								sortable : false
							}, {
								dataIndex : "mainorgid",
								header : "主机构",
								hidden : true,
								sortable : true
							}]
				})
	}
});
Ext.reg("empgrid", Ext.bz.emp.EmpGridPanel);
Ext.bz.emp.EmpSelectField = Ext.extend(Ext.bz.common.CommonSelectField, {
			name : "empname",
			hiddenName : "empid",
			displayName : "empname",
			gridXtype : "empgrid",
			title:'选择员工'

		});
Ext.reg("empselectfield", Ext.bz.emp.EmpSelectField);
// optSelectField
Ext.ns("Ext.bz.opt");
Ext.bz.opt.OptGridPanel = Ext.extend(Ext.grid.GridPanel, {
	stripeRows : true,
	columnLines : true,
	loadMask : true,
	url : undefined,
	isSingleSelect : true,
	initComponent : function() {
		this.buildColumns();
		this.buildStore();
		this.pagingToolbar = new Ext.ex.PagingToolbarEx({
					xtype : "pagingtoolbarex",
					pageSize : 10,
					store : this.store
				});
		this.bbar = this.pagingToolbar;
		Ext.bz.opt.OptGridPanel.superclass.initComponent.call(this)
	},
	buildStore : function() {
		this.store = new Ext.data.JsonStore({
			url : "com.zoomlion.hjsrm.frame.bclib.OperatorManager.queryOperators.biz.ext",
			root : "data",
			totalProperty : "totalCount",
			fields : [{
						name : "operatorid"
					}, {
						name : "userid"
					}, {
						name : "operatorname"
					}, {
						name : "empid"
					}, {
						name : "empcode"
					}, {
						name : "empname"
					}, {
						name : "orgnames"
					}]
		})
	},
	buildColumns : function() {
		this.selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : false
				});
		this.cm = new Ext.grid.ColumnModel({
					defaults : {
						width : 120,
						sortable : true,
						menuDisabled : true
					},
					columns : [new Ext.grid.RowNumberer(), this.selModel, {
								dataIndex : "empcode",
								header : "员工编号",
								sortable : true
							}, {
								dataIndex : "empname",
								header : "员工姓名",
								width : 200
							}, {
								dataIndex : "orgnames",
								header : "业务机构",
								width : 200
							}]
				})
	},
	getselectWin : function() {
		return new Ext.Window({
					title : "选择操作员",
					animateTarget : Ext.getBody(),
					closeAction : "hide",
					buttonAlign : "center",
					width : 678,
					height : 357,
					layout : "fit",
					items : [{
								xtype : this.gridXtype || "optgrid",
								url : this.url,
								singleSelect : this.singleSelect,
								itemId : "innergrid"
							}],
					tbar : this.selWinTbar,
					buttons : [{
								text : "选择",
								scope : this,
								handler : this.onSelectBtnHandler
							}, {
								text : "关闭",
								scope : this,
								handler : this.onCloseBtnHandler
							}]
				})
	}
});
Ext.reg("optgrid", Ext.bz.opt.OptGridPanel);
/**
 * 
 * @class Ext.bz.opt.OptSelectField
 * @extends Ext.bz.common.CommonSelectField
 * <P>操作员选择组件
 */
Ext.bz.opt.OptSelectField = Ext.extend(Ext.bz.common.CommonSelectField, {
			name : "operatorname",
			hiddenName : "userid",
			displayName : "operatorname",
			gridXtype : "optgrid"
		});
Ext.reg("optselectfield", Ext.bz.opt.OptSelectField);
// OperatorComboBox
Ext.ns("Ext.bz.org");
Ext.bz.org.OperatorComboBox = Ext.extend(Ext.form.ComboBox, {
			displayField : "operatorname",
			valueField : "operatorid",
			triggerAction : "all",
			emptyText : "请选择",
			mode : "remote",
			url : undefined,
			store : undefined,
			triggerClass : "x-form-search-trigger",
			params : {},
			initComponent : function() {
				this.store = this.store || this.buildStore();
				Ext.bz.org.OperatorComboBox.superclass.initComponent.call(this);
				this.addEvents("valueChange")
			},
			setValue : function(A) {
				Ext.bz.org.OperatorComboBox.superclass.setValue.call(this, A);
				if (A) {
					this.fireEvent("valueChange", this, A)
				}
			},
			buildStore : function() {
				return new Ext.data.JsonStore({
							baseParams : this.params,
							url : this.url
									|| "frame/ui/jslib/bizex/opt/testData.js",
							root : "operators",
							successProperty : "success",
							fields : [this.displayField, this.valueField]
						})
			}
		});
Ext.reg("operatorcombo", Ext.bz.org.OperatorComboBox);
// orgFieldPkg
Ext.ns("Ext.bz.org");
Ext.bz.org.OrgGridPanel = Ext.extend(Ext.grid.GridPanel, {
	stripeRows : true,
	columnLines : true,
	loadMask : true,
	isSingleSelect : true,
	url : undefined,
	initComponent : function() {
		this.buildColumns();
		this.buildStore();
		this.pagingToolbar = new Ext.ex.PagingToolbarEx({
					xtype : "pagingtoolbarex",
					store : this.store
				});
		this.bbar = this.pagingToolbar;
		Ext.bz.org.OrgGridPanel.superclass.initComponent.call(this)
	},
	buildStore : function() {
		this.store = new Ext.data.JsonStore({
			url : this.url
					|| "com.zoomlion.hjsrm.frame.bclib.org.OrgnizationBclib.queryOrganizationByCriteriaWithPage.biz.ext",
			root : "orgs",
			autoLoad : true,
			totalProperty : "totalCount",
			fields : [{
						name : "orgid"
					}, {
						name : "orgcode"
					}, {
						name : "orgname"
					}, {
						name : "orgtype"
					}, {
						name : "orglevel"
					}, {
						name : "dataorgid"
					}, {
						name : "busiorgname"
					}, {
						name : "orgseq"
					}, {
						name : "parentorgid"
					}, {
						name : "parentorgname"
					}]
		})
	},
	buildColumns : function() {
		this.selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : this.isSingleSelect
				});
		this.columns = [new Ext.grid.RowNumberer(), this.selModel, {
					dataIndex : "orgcode",
					header : "机构编码",
					sortable : true
				}, {
					dataIndex : "orgname",
					header : "机构名称",
					sortable : true
				}, {
					xtype : "dictcolumn",
					dictData : OM_ORGTYPE,
					dataIndex : "orgtype",
					header : "机构类别"
				}, {
					dataIndex : "orglevel",
					header : "机构级别"
				}, {
					dataIndex : "orgseq",
					hidden : true
				}]
	},
	doQuery : function(A) {
		A = A || {};
		this.store.baseParams = A;
		this.store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.pagingToolbar.pageSize
					}
				})
	}
});
Ext.reg("orggrid", Ext.bz.org.OrgGridPanel);
Ext.bz.org.OrgSelectField = Ext.extend(Ext.bz.common.CommonSelectField, {
			name : "orgname",
			hiddenName : "orgid",
			displayName : "orgname",
			gridXtype : "orggrid"
		});
Ext.reg("orgselectfield", Ext.bz.org.OrgSelectField);
// orgTreeCombo
Ext.ns("Ext.bz.org");
Ext.bz.org.OrgSingleLoader = Ext.extend(Ext.tree.TreeLoader, {
			isASyncTree : false,
			constructor : function(A) {
				Ext.bz.org.OrgSingleLoader.superclass.constructor.call(this, A)
			},
			processResponse : function(G, D, A) {
				var F = G.responseText;
				try {
					var C = G.responseData || Ext.decode(F);
					D.beginUpdate();
					if (this.isASyncTree) {
						Ext.each(C.data, function(J) {
									var H = {
										id : 'org-'+J.orgid,
										text : J.orgname,
										leaf : false,
										iconCls : J.orgtype <= 2
												? "icon-folder_home"
												: "icon-folder_user",
										type : "org"
									};
									if(this.selectType=="multiple"){									
										Ext.applyIf(H, {checked:false});
									}
									Ext.applyIf(J, H);
									var I = this.createNode(J);
									if (I) {
										D.appendChild(I)
									}
								}, this)
					} else {
						var E = new Ext.util.MixedCollection();
						Ext.each(C.data, function(J) {
									var H = {
										id : 'org-tree'+J.orgid,
										text : J.orgname,
										leaf : false,
										iconCls : J.orgtype <= 2
												? "icon-folder_home"
												: "icon-folder_user",
										type : "org"
									};
									if(this.selectType=="multiple"){									
										Ext.applyIf(H, {checked:false});
									}
									Ext.applyIf(J, H);
									var I = new Ext.tree.TreeNode(J);
									E.add(I.id, I)
								}, this);
						Ext.each(C.data, function(H) {
									var J = E.get('org-tree'+H.parentorgid);
									var I = E.get('org-tree'+H.orgid);
									if (J) {
										J.appendChild(I)
									} else {
										D.appendChild(I)
									}
								}, this)
					}
					D.endUpdate();
					this.runCallback(A, scope || D, [D])
				} catch (B) {
					this.handleFailure(G)
				}
			}
		});
Ext.bz.org.OrgTreeCombo = Ext.extend(Ext.form.ComboBox, {
	displayField : "orgname",
	queryType : undefined,
	selectType :'single',//multiple
	valueField : "orgid",
	emptyText : "--请选择--",
	rootText : "组织机构",
	loader : undefined,
	tree : null,
	store : new Ext.data.SimpleStore({
				fields : [],
				data : [[]]
			}),
	constructor : function(A) {
		A = A || {};
		Ext.bz.org.OrgTreeCombo.superclass.constructor.call(this, Ext.apply({
							maxHeight : 300,
							editable : false,
							mode : "local",
							triggerAction : "all",
							rootVisible : false,
							selectMode : "all"
						}, A))
	},
	onViewClick : function(D) {
		var C = this.view.getSelectedIndexes()[0], B = this.store, A = B
				.getAt(C);
		if (A) {
			this.onSelect(A, C)
		}
		if (D !== false) {
			this.el.focus()
		}
	},
	reset : function() {
		Ext.form.ComboBox.superclass.reset.call(this);
		if(this.hiddenField){
			this.hiddenField.value = "";
		}
		Ext.form.ComboBox.superclass.setRawValue.call(this, "");
		this.applyEmptyText();
	},
	getValue:function(){
		if(this.hiddenField){
			return this.hiddenField.value;
		}else{
			Ext.bz.org.OrgTreeCombo.superclass.getValue.call(this);
		}
	},
	beforeBlur : function() {
	},
	setValue : function(B, C) {
		if(this.hiddenField){		
			this.hiddenField.value = Ext.value(B, "");
		}
		if (B !== "" && !Ext.isDefined(C)) {
			var A = this.tree.getRootNode();
			if (B == "0") {
				Ext.form.ComboBox.superclass.setValue.call(this, A.text)
			} else {
				this.tree.loader.load(A)
			}
		} else {
			Ext.form.ComboBox.superclass.setValue.call(this, C)
		}
	},
	initComponent : function() {
		var A = this;
		var B = "deptcombo_" + Math.floor(Math.random() * 1000) + this.tplId;
		this.treeWrapID = B;
		this.tpl = "<div style='overflow:hidden;height:" + A.maxHeight + "px;' id='" + B
				+ "'></div>";
		if (!Ext.isDefined(this.loader)) {
			if (!Ext.isDefined(this.queryType)) {
				this.loader = new Ext.bz.org.OrgSingleLoader({
					dataUrl : "com.zoomlion.hjsrm.frame.bclib.OrganizationManager.queryOrganizations.biz.ext",
					selectType:this.selectType
				})
			} else {
				if (this.queryType == "company") {
					this.loader = new Ext.bz.org.OrgSingleLoader({
						dataUrl : "com.zoomlion.hjsrm.frame.bclib.OrganizationManager.queryCompanys.biz.ext",
						selectType:this.selectType
					})
				}
				if (this.queryType == "companyAdd") {
					this.loader = new Ext.bz.org.OrgSingleLoader({
						dataUrl : "com.zoomlion.hjsrm.frame.bclib.OrganizationManager.queryCompanysAdd.biz.ext",
						selectType:this.selectType
					})
				}
				if (this.queryType == "dataorg") {
					this.loader = new Ext.bz.org.OrgSingleLoader({
						dataUrl : "com.zoomlion.hjsrm.frame.org.organization.OrgManager.getAllOrgInDataOrg.biz.ext",
						selectType:this.selectType
					})
				}
				if (this.queryType == "busiorg") {
					this.loader = new Ext.bz.org.OrgSingleLoader({
						dataUrl : "com.zoomlion.hjsrm.frame.bclib.OrganizationManager.queryDataOrgs.biz.ext",
						selectType:this.selectType
					})
				}
				if (this.queryType == "area") {
					this.loader = new Ext.bz.org.OrgSingleLoader({
						dataUrl : "com.zoomlion.hjsrm.frame.bclib.OrganizationManager.queryAreas.biz.ext",
						selectType:this.selectType
					})
				}
				if (this.queryType == "dataarea") {
					this.loader = new Ext.bz.org.OrgSingleLoader({
						dataUrl : "com.zoomlion.hjsrm.frame.bclib.OrganizationManager.queryDataAreas.biz.ext",
						selectType:this.selectType
					})
				}
				if (this.queryType == "client") {
					this.loader = new Ext.bz.org.OrgSingleLoader({
						dataUrl : "com.zoomlion.hjsrm.frame.bclib.OrganizationManager.queryDataClient.biz.ext",
						selectType:this.selectType
					})
				}
				if (this.queryType == "subcompany") {
					this.loader = new Ext.bz.org.OrgSingleLoader({
						dataUrl : "com.zoomlion.hjsrm.frame.bclib.OrganizationManager.querySubCompany.biz.ext",
						selectType:this.selectType
					})
				}
			}
		}
		this.tree = new Ext.tree.TreePanel({
					border : false,
					enableDD : false,
					enableDrag : false,
					rootVisible : A.rootVisible || false,
					autoScroll : true,
					trackMouseOver : true,
					height : A.maxHeight,
					width:A.width,
					lines : true,
					singleExpand : true,
					root : new Ext.tree.AsyncTreeNode({
								id : A.rootId || "0",
								text : A.rootText,
								leaf : false,
								border : false,
								draggable : false,
								singleClickExpand : false,
								hide : true
							}),
					loader : this.loader
				});
		Ext.bz.org.OrgTreeCombo.superclass.initComponent.call(this);
		this.tree.mon(this.tree, "click", function(C) {
					if(this.selectType !='single'){return;}
					if ((this.selectMode == "leaf" && C.leaf == true)
							|| this.selectMode == "all") {
						var D = C.text;
						var E = C.attributes[A.valueField];
						this.setValue(E, D);
						this.collapse();
						this.fireEvent("getselectnode", this, C)
					}
				}, this);
				
		this.tree.mon(this.tree, "checkchange", function(C) {	
						var nodes = this.tree.getChecked();
						var vs = [];
						var ds = [];
						for (var index = 0; index < nodes.length; index++) {
							vs.push(nodes[index].attributes[A.valueField]);
							ds.push(nodes[index].text);
						}
						Ext.form.ComboBox.superclass.setValue.call(this, ds);
						this.hiddenField.value=vs;
					}, this);
					
		this.on("expand", function(combo) {
					if (!this.tree.rendered) {
						this.tree.render(B);
					} else {
						this.loader.load(this.tree.getRootNode(), function() {}, this)
					}
					//设置treepanel宽度，解决不出现横向滚动条问题
					if(this.tree){
					  this.tree.setWidth(combo.getWidth());
					}
				});
				
		this.tree.mon(this.tree.loader, "load", function(G, D, F) {
					if (this.hiddenField) {
						if(this.selectType=="multiple"){
							if(this.hiddenField.value==""||this.hiddenField.value==null){
								return;
							}
							var hv = this.hiddenField.value.split(",");
							var texts = [];
							for (var index = 0; index < hv.length; index++) {
								var C = D.findChild(this.valueField,hv[index], true);
								if(C!=null){
									var v = C.attributes[this.displayField];
									texts.push(v);
									C.attributes["checked"] = true;
									C.getUI().toggleCheck(true);
								}								
							}
							Ext.form.ComboBox.superclass.setValue.call(this, texts);
							
						}else{
							if(this.hiddenField.value==""||this.hiddenField.value==null){
								return;
							}
							var C = D.findChild(this.valueField,this.hiddenField.value, true);
							if (C) {
								var E = C.attributes[this.displayField];
								Ext.form.ComboBox.superclass.setValue.call(this, E)
							} else {
								Ext.form.ComboBox.superclass.setValue.call(this, "")
							}
						}
						
					}
				}, this);
		this.addEvents("getselectnode")
	},
	selectNodeByHiddenValue : function(B) {
		var A = this.tree.getRootNode();
		var C = A.findChild(this.valueField, B, true);
		if (C) {
			C.select()
		}
	}
});
Ext.reg("orgtreecombo", Ext.bz.org.OrgTreeCombo);
//
Ext.namespace("Ext.bz.comn");
/**
 * 
 * @class Ext.bz.org.EmployeeComboBox
 * @extends Ext.form.ComboBox
 * <p> 级联选择组件,
 * <pre><code>
 *  {
 *      xtype:'empcombo',
 *      displayField:'empname',
 *      valueField:'userid',
 *      params:{orgid:'10'}
 *  }
 * </code></pre>
 */
Ext.bz.comn.UniteComboBox = Ext.extend(Ext.form.ComboBox, {
			/**
			 * @cfg
			 * 下级组件
			 * 
			 */
			subformField : undefined,
			/**
			 * @cfg
			 * 显示字段名
			 * 
			 */
			displayField : 'name',
			/**
			 * @cfg 
			 * 隐藏字段名
			 */
			valueField : 'id',
			triggerAction : 'all',
			/**
			 * @cfg
			 * 空提示
			 */
			emptyText : '请选择',
			/**
			 * @cfg
			 * 数据加载模式
			 */
			mode : 'remote',
			/**
			 * @cfg {String} 
			 * 数据加载url,默认的root:'operators',json数据 { operators:[]}
			 *  
			 */
			url : undefined,
			store : undefined,
			isFirst : false,

			// triggerClass:'x-form-search-trigger',
			/**
			 * @cfg 
			 * 加载数据时url参数,例如
			    {operatorname:'张三'} 
			 */
			params : {},
			listeners : {
				'select' : function(c, r, i) {
					this.afterSelect();
					this.setSubparams(r);
					if (this.subformField) {
						this.subformField.setDisabled(false);
					}
				}
			},
			/**
			 * @private
			 * 初始化函数
			 */
			initComponent : function() {
				this.child = [];
				this.parent = [];
				this.buildStore();
				this.store.on('beforeload', function() {
							this.store.baseParams = this.baseParams;
						}, this);
				Ext.bz.comn.UniteComboBox.superclass.initComponent.call(this);
				/**
				 * @event valueChange 
				 * 值变化时触发         
				 * @param {Ext.bz.org.OperatorComboBox} this
				 * @param {String} value       
				 */
				this.addEvents("valueChange");
				if (!this.isFirst) {
					this.setDisabled(true);
				}

			},
			/**
			 * 选择后级联下级节点
			 * @param {String} val
			 */
			afterSelect : function() {
				if (this.subformField) {
					this.subformField.reset();
					this.subformField.setDisabled(true);
					this.subformField.afterSelect();
				}
			},

			setParams : function(params) {
				this.baseParams = Ext.decode("{" + params + "}");
			},

			setSubparams : function(r) {
				if (this.subformField) {
					var data = this.paramsField;
					var param = '';
					for (var key in data) {
						param += key + ":'" + r.get(data[key]) + "',";
					}

					param = param.substring(0, param.length - 1);
					this.subformField.setParams(param);
					this.subformField.setDisabled(false);
				}
			},
			/**
			 * 设置value
			 * @param {String} val
			 */
			setValue : function(val) {
				Ext.bz.comn.UniteComboBox.superclass.setValue.call(this, val);
				if (val) {
					this.fireEvent("valueChange", this, val);
				}
			},
			/**
			 * @private 
			 * 构建默认数据源
			 * @return {Ext.data.JsonStore}
			 */
			buildStore : function() {
				if (this.exfields) {
					this.exfields.push(this.displayField);
					this.exfields.push(this.valueField);
				} else {
					this.exfields = [this.displayField, this.valueField];
				}
				this.store = new Ext.data.JsonStore({
							// baseParams:this.params,
							url : this.url,
							root : 'data',
							fields : this.exfields
						});
			}
		});
Ext.reg('uniteComb', Ext.bz.comn.UniteComboBox);
