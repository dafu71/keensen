Ext.FnpanelGroup = function() {
	var list = {};
	var accessList = [];
	return {
		register : function(panel) {
			list[panel.id] = panel;
			accessList.push(panel);
		},

		unregister : function(panel) {
			delete list[panel.id];
			accessList.remove(panel);
		},
		each : function(fn, scope) {
			for (var id in list) {
				if (list[id] && typeof list[id] != "function") {
					if (fn.call(scope || list[id], list[id]) === false) {
						return;
					}
				}
			}
		}

	};
};

Ext.FnlayoutMgr = new Ext.FnpanelGroup();
// columnFormPanel
Ext.ns("Ext.fn");
Ext.fn.ColumnFormPanel = Ext.extend(Ext.FormPanel, {
			padding : "5 5 5 5",
			buttonAlign : "center",
			titleCollapse : true,
			frame : false,
			border : false,
			defaults : {
				xtype : "textfield",
				anchor : "100%",
				width : 110
			},
			footerStyle : 'background-color: #dfe8f6;',
			layout : "column",
			fields : undefined,
			labelAlign : "right",
			initComponent : function() {
				this.frame = false;
				this.border = true;
				if (this.fields && this.columns) {
					this.items = this.buildItems(this.fields, this.columns);
					delete this.fields
				}
				Ext.fn.ColumnFormPanel.superclass.initComponent.call(this)
			},
			buildItems : function(fields, columns) {
				var widthPrecent = 1 / columns;
				var cw = 0;
				var hiddenFields = [];
				var items = [];
				for (var i = 0; i < fields.length; i++) {
					if (fields[i].xtype == "hidden" || fields[i].hidden == true) {
						hiddenFields
								.push(Ext.applyIf(fields[i], this.defaults));
						if (i == fields.length - 1) {
							var lastContainer = items.pop();
							var lastItems = lastContainer.items
									.concat(hiddenFields);
							lastContainer.items = lastItems;
							items.push(lastContainer)
						}
					} else {
						if (fields[i].xtype == "fieldset") {
							var colspan = fields[i].colspan || 1;
							cw = colspan * widthPrecent;
							delete fields[i].colspan;
							Ext.applyIf(fields[i], {
										columnWidth : cw,
										layout : "column",
										items : []
									});
							with (fields[i]) {
								if (fields && fields.length > 0 && columns) {
									var ret = this.buildItems(fields, columns);
									items = ret
								}
							}
							delete fields[i].fields;
							items.push(fields[i])
						} else {
							var colspan = fields[i].colspan || 1;
							cw = colspan * widthPrecent;
							delete fields[i].colspan;
							var subItem = {
								columnWidth : cw,
								layout : "form",
								xtype : "container",
								items : []
							};
							var childItems = hiddenFields;
							hiddenFields = [];
							childItems.push(Ext.applyIf(fields[i],
									this.defaults));
							subItem.items = childItems;
							items.push(subItem)
						}
					}
				}
				return items
			}
		});
Ext.reg("columnform", Ext.fn.ColumnFormPanel);
// fnlayout
Ext.ns("Ext.fn");
Ext.fn.fnLayOut = Ext.extend(Ext.Panel, {
	border : false,
	defaults : {
		xtype : "container",
		margins : "5 5 5 5",
		border : false,
		layout : "fit"
	},
	panels : [],
	layout : "ns",
	initComponent : function() {
		var space = Ext.getCmp("spacepanel");
		if (space.isXType('spacepanel')) {
			this.height = space.getHeight() - 30;
		} else {
			this.height = space.getHeight();
		}
		this.buildItems();
		Ext.fn.fnLayOut.superclass.initComponent.call(this);
		Ext.FnlayoutMgr.register(this);
	},
	beforeDestroy : function() {
		Ext.FnlayoutMgr.unregister(this);
		Ext.fn.fnLayOut.superclass.beforeDestroy.call(this);
	},
	refresh : function() {
	},
	buildItems : function() {
		switch (this.layout || this.panels.length > 0) {
			case "collapse" :
				Ext.applyIf(this.panels[0], {
							region : 'north'
						});
				Ext.applyIf(this.panels[1], {
							region : 'center'
						});
				this.content = new Ext.Panel({
							layout : "fit",
							items : [new Ext.Container({
										layout : "border",
										items : [this.panels[0], this.panels[1]]
									})]
						});
				this.items = [this.content];
				this.layout = "fit";
				break;

			case "ns" :
				this.items = [{
							region : "north",
							height : this.panels[0].height,
							width : this.panels[0].width,
							items : [this.panels[0]]
						}, {
							region : "center",
							height : this.panels[1].height,
							width : this.panels[1].width,
							items : [this.panels[1]]
						}];
				this.layout = "border";
				break;
			case "nwe" :
				this.items = [{
							region : "north",
							height : this.panels[0].height,
							width : this.panels[0].width,
							items : [this.panels[0]]
						}, {
							region : "west",
							height : this.panels[1].height,
							width : this.panels[1].width,
							items : [this.panels[1]],
							collapseMode : "mini",
							collapsible : true,
							margins : "5 2 5 5",
							animate : false,
							header : false,
							split : true,
							xtype : "panel"
						}, {
							region : "center",
							height : this.panels[2].height,
							width : this.panels[2].width,
							items : [this.panels[2]],
							margins : "5 5 5 2"
						}];
				this.layout = "border";
				break;
			// newc 为刘鑫添加，谨慎使用！- - ！
			case "newc" :
				this.panels[0].region = "north";
				this.panels[2].region = "center";
				this.panels[1].region = "west";
				this.panels[3].region = "center";
				this.items = [{
							region : "west",
							height : this.panels[0].height,
							width : this.panels[0].width,
							layout : "border",
							xtype : "panel",
							collapseMode : "mini",
							collapsible : true,
							animate : false,
							header : false,
							split : true,
							margins : "5 2 5 5",
							items : [this.panels[0], this.panels[2]]
						}, {
							region : "center",
							height : this.panels[1].height,
							layout : "border",
							xtype : "panel",
							collapseMode : "mini",
							collapsible : true,
							animate : false,
							header : false,
							split : true,
							margins : "5 5 5 2",
							items : [this.panels[1], this.panels[3]]
						}];
				this.layout = "border";
				break;
			case "wes" :
				this.items = [{
							region : "west",
							height : this.panels[0].height,
							width : this.panels[0].width,
							items : [this.panels[0]],
							collapseMode : "mini",
							collapsible : true,
							animate : false,
							xtype : "panel",
							header : false,
							split : true
						}, {
							region : "center",
							height : this.panels[1].height,
							width : this.panels[1].width,
							items : [this.panels[1]]
						}, {
							region : "south",
							height : this.panels[2].height,
							width : this.panels[2].width,
							items : [this.panels[2]]
						}];
				this.layout = "border";
				break;
			case "we" :
				this.items = [{
							region : "west",
							height : this.panels[0].height,
							width : this.panels[0].width,
							items : [this.panels[0]],
							collapseMode : "mini",
							collapsible : true,
							animate : false,
							header : false,
							split : true,
							margins : "5 2 5 5",
							xtype : "panel"
						}, {
							region : "center",
							height : this.panels[1].height,
							width : this.panels[1].width,
							margins : "5 5 5 2",
							items : [this.panels[1]]
						}];
				this.layout = "border";
				break;
			case "new" :
				this.panels[0].region = "north";
				this.panels[2].region = "center";
				this.items = [{
							region : "west",
							height : this.panels[0].height,
							width : this.panels[0].width,
							layout : "border",
							xtype : "panel",
							collapseMode : "mini",
							collapsible : true,
							animate : false,
							header : false,
							split : true,
							margins : "5 2 5 5",
							items : [this.panels[0], this.panels[2]]
						}, {
							region : "center",
							height : this.panels[1].height,
							width : this.panels[1].width,
							margins : "5 5 5 2",
							items : [this.panels[1]]
						}];
				this.layout = "border";
				break;
			case "wns" :
				this.panels[1].region = "north";
				this.panels[2].region = "center";
				this.items = [{
							region : "center",
							width : this.panels[1].width,
							layout : "border",
							items : [this.panels[1], this.panels[2]]
						}, {
							region : "west",
							height : this.panels[1].height,
							width : this.panels[0].width,
							items : [this.panels[0]],
							collapseMode : "mini",
							collapsible : true,
							animate : false,
							xtype : "panel",
							header : false,
							split : true
						}];
				this.layout = "border";
				break;
			case "fit" :
				this.items = [{
							layout : "fit",
							items : [this.panels[0]]
						}];
				break;
			case "form" :
				this.items = [];
				for (var A = 0; A < this.panels.length; A++) {
					this.items.push({
								height : this.panels[A].height,
								margins : "5 5 5 5",
								cmargins : "5 5 5 5",
								items : [this.panels[A]]
							})
				}
				break;
			default :
				return
		}
		this.panels = null
	}
});
Ext.reg("fnlayout", Ext.fn.fnLayOut);
// viewPanel
Ext.ns("Ext.fn");
Ext.fn.ViewPanel = Ext.extend(Ext.fn.ColumnFormPanel, {
			loadUrl : "",
			frame : true,
			defaults : {
				xtype : "textfield",
				anchor : "100%",
				width : 110,
				readOnly : true,
				frame : true
			},
			initComponent : function() {
				Ext.fn.ViewPanel.superclass.initComponent.call(this);
				this.form = this.getForm();
				this.addEvents("beforeload", "afterload")
			},
			loadData : function(A) {
				this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "正在执行操作..."
								});
				this.requestMask.show();
				Ext.Ajax.request({
							url : this.loadUrl,
							scope : this,
							jsonData : {
								entity : A.data
							},
							success : function(C) {
								var B = Ext.decode(C.responseText);
								if (B.success) {
									this.fireEvent("beforeload", this.form,
											B.data);
									this.form
											.loadRecord(new Ext.data.Record(B.data));
									this.fireEvent("afterload", this.form,
											B.data)
								}
							},
							callback : function() {
								this.requestMask.hide()
							}
						})
			}
		});
Ext.reg("viewpanel", Ext.fn.ViewPanel);
// tabpanel
Ext.ns("Ext.fn");
Ext.fn.TabPanel = Ext.extend(Ext.TabPanel, {
	border : false,
	initComponent : function() {
		this.height = Ext.getCmp("spacepanel").getHeight() - 25, Ext.fn.TabPanel.superclass.initComponent
				.call(this)
	}
});
Ext.reg("extabpanel", Ext.fn.TabPanel);

function resetWindow() {
	var spacepanel = Ext.getCmp("spacepanel");
	if (spacepanel.getXType() == 'spacepanel') {
		var height = spacepanel.getInnerHeight();
		var width = spacepanel.getInnerWidth();
		var fnlayout = spacepanel.getActiveTab().fnlayout;
		if (fnlayout) {
			fnlayout.setSize(width, height);
		}
	}
}

Ext.EventManager.onWindowResize(function(B, A) {
			var task = new Ext.util.DelayedTask(resetWindow);
			task.delay(400);
		});

// spacepanel
Ext.ns("Ext.fn");
Ext.fn.SpacePanel = Ext.extend(Ext.TabPanel, {
			isLoading : false,
			constructor : function(A) {
				A = A == undefined ? {} : A;
				Ext.fn.SpacePanel.superclass.constructor.call(this, A);
				Ext.apply(this, A);
				this.on('tabchange', function(tabPanel, newCard, oldCard) {
							if (newCard.fnclass && newCard.fnclass.refresh) {
								newCard.fnclass.refresh();
							}
						});
			},
			openWithCfg : function(C) {
				var A = "menu" + C.id;
				if (this.isLoading) {
					return;
				}
				if (this.getItem(A)) {
					this.setActiveTab(A);
					return
				}
				this.isLoading = true;
				var loadingBox = document.getElementById('loading-mask');
				if (loadingBox) {
					loadingBox.style.display = "";
				}
				var _this = this;
				// var date1= new Date();
				if (tabnum && this.items.length - 1 >= tabnum) {
					if (loadingBox) {
						loadingBox.style.display = "none";
					}
					_this.isLoading = false;
					Ext.Msg.alert("系统提示", "当前设置仅允许打开" + tabnum + "功能TAB页！")
					return
				}
				this.add({
							closable : true,
							xtype : "panel",
							layout : "fit",
							anchor : "100%",
							iconCls : "icon-functionSpa",
							title : C.text,
							id : A,
							autoLoad : {
								url : contextPath + C.respath,
								params : C.params,
								nocache : true,
								callback : function() {
									_this.isLoading = false;
									if (loadingBox) {
										loadingBox.style.display = "none";
									}
									// alert((new
									// Date()).getTime()-date1.getTime());
								},
								scripts : true
							},
							tabTip : C.text
						});
				var B = this.getItem(A);
				B.mon(B, "close", function() {
							_this.isLoading = false;
							if (loadingBox) {
								loadingBox.style.display = "none";
							}
							this.getItem(A).destroy();
						}, this);
				this.setActiveTab(A);
			},
			open : function(C) {
				var A = "menu" + C.id;
				if (this.isLoading) {
					return;
				}
				if (this.getItem(A)) {
					this.setActiveTab(A);
					this.getItem(A).fnlayout.refresh();
					return
				}
				this.isLoading = true;
				var loadingBox = document.getElementById('loading-mask');
				if (loadingBox) {
					loadingBox.style.display = "";
				}
				var _this = this;
				// var date1= new Date();
				if (tabnum && this.items.length - 1 >= tabnum) {
					if (loadingBox) {
						loadingBox.style.display = "none";
					}
					_this.isLoading = false;
					Ext.Msg.alert("系统提示", "当前设置仅允许打开" + tabnum + "功能TAB页！")
					return
				}
				this.add({
							closable : true,
							xtype : "panel",
							layout : "fit",
							anchor : "100%",
							iconCls : "icon-functionSpa",
							title : C.text,
							id : A,
							autoLoad : {
								url : contextPath + C.attributes["respath"],
								params : C.params,
								nocache : true,
								callback : function() {
									_this.isLoading = false;
									if (loadingBox) {
										loadingBox.style.display = "none";
									}
									// alert((new
									// Date()).getTime()-date1.getTime());
								},
								scripts : true
							},
							tabTip : C.text
						});
				var B = this.getItem(A);
				B.mon(B, "close", function() {
							_this.isLoading = false;
							if (loadingBox) {
								loadingBox.style.display = "none";
							}
							this.getItem(A).destroy();
						}, this);

				this.setActiveTab(A);
			},
			reload : function(B) {
				var A = this.getItem("workPanel");
				A.load({
							url : contextPath + B.attributes["respath"],
							callback : function() {
							},
							scripts : true
						});
				this.setActiveTab("workPanel");
			},
			closeTab : function(tabid) {
				var s = Ext.getCmp(tabid);
				this.remove(s);
			}
		});
Ext.reg("spacepanel", Ext.fn.SpacePanel);
// querypanel
Ext.ns("Ext.fn");
Ext.fn.QueryPanel = Ext.extend(Ext.fn.ColumnFormPanel, {
	padding : "10 5 10 5",
	bodyStyle : "background:#ECF5FF",
	initComponent : function() {
		this.buildButtons();
		Ext.fn.QueryPanel.superclass.initComponent.call(this);
		this.form = this.getForm()
	},

	buildButtons : function() {
		this.buttons = [{
					text : "查询",
					ref : "../queryButton",
					iconCls : "icon-application_form_magnify",
					scope : this,
					handler : function() {
						var A = this.getForm().getValues();
						var fs = Ext.lib.Ajax
								.serializeForm(this.getForm().el.dom);
						if (this.form.isValid()) {
							this.fireEvent("query", this, A)
						}
					}
				}, {
					text : "重置",
					ref : "../restButton",
					iconCls : "icon-application_reset",
					scope : this,
					handler : function() {
						var A = this.getForm().getValues();
						var B = this.fireEvent("reset", this, A);
						if (B) {
							this.getForm().reset();
							var sdname = "";
							var sdvalue = "";
							Ext.each(this.findByType("datefield"),
									function(dfd) {
										if (dfd.name.indexOf("/startDate") > -1) {
											sdname = dfd.name;
											sdname = sdname.substring(0, sdname
															.indexOf("/")
															+ 1);
											sdvalue = dfd.value;
										}
										if (dfd.name
												.indexOf(sdname + "endDate") > -1) {
											dfd.setMinValue(sdvalue);
										}
									});
						}
					}
				}]
	}
});
Ext.reg("querypanel", Ext.fn.QueryPanel);
// listpanel
Ext.ns("Ext.fn");
Ext.fn.ListPanel = Ext.extend(Ext.grid.GridPanel, {
			delUrl : "",
			hsPage : true,
			stripeRows : true,
			autoWidth : true,
			titleCollapse : true,
			loadMask : true,
			pageSizeComboStore : undefined,
			enableHdMenu : false,
			columnLines : true,
			initComponent : function() {
				this.buildColumns();
				this.buildStore();
				this.buildTbar();
				if (this.hsPage) {
					this.pagingToolbar = new Ext.ex.PagingToolbarEx({
								xtype : "pagingtoolbarex",
								pageSize : this.pageSize || 15,
								store : this.store,
								pageSizeComboStore : this.pageSizeComboStore
							});
					this.bbar = this.pagingToolbar;
					var store = this.store;
					Ext.applyIf(this.store.baseParams, {
								"pageCond/isCount" : true,
								"pageCond/length" : this.pageSize || 15
							})
				}
				Ext.fn.ListPanel.superclass.initComponent.call(this);
				this.addEvents("beforedel", "afterdel", "update")
			},
			buildTbar : function() {
			},
			getSelectedRecord : function() {
				return this.selModel.getSelected()
			},
			buildColumns : function() {
			},
			buildStore : function() {
			},
			onEdit : function() {
				var B = this.getSelectionModel().getSelections();
				if (B && B.length != 0) {
					if (B.length > 1) {
						Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
						return
					} else {
						var A = B[0];
						this.fireEvent("update", this, A)
					}
				} else {
					Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!")
				}
			},
			onDel : function(msg) {
				var A = this;
				try {
					if (!this.getSelectionModel().getSelected()) {
						Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
					} else {
						Ext.Msg.confirm("系统提示", msg || "您确定要删除当前数据吗？",
								function(E) {
									if (E == "yes") {
										var D = this.getSelectionModel()
												.getSelections();
										var F = [];
										for (var C = 0; C < D.length; C++) {
											r = D[C];
											F = F.concat(r.data)
										}
										var G = this.fireEvent("beforedel", A,
												F);
										if (!G) {
											return
										}
										if (F) {
											this.doDel(F)
										}
									}
								}, this)
					}
				} catch (B) {
					Ext.Msg.alert("系统提示", B.discription)
				}
			},
			doDel : function(B) {
				var A = this;
				this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "正在执行操作..."
								});
				this.requestMask.show();
				Ext.Ajax.request({
							url : this.delUrl,
							jsonData : {
								entitys : B
							},
							success : function(D) {
								var C = Ext.decode(D.responseText);
								if (C.success) {
									A.requestMask.hide();
									Ext.Msg.alert("系统提示", "操作成功！", function() {
												A.store.reload();
												A.fireEvent("afterdel", A, B)
											})
								}
							},
							callback : function() {
								A.requestMask.hide()
							}
						})
			},
			refresh : function() {
				this.store.reload();
			},
			checkSelection : function(C, B) {
				if (this.selModel.hasSelection()) {
					if (Ext.isFunction(B)) {
						var A = this.selModel.getSelections();
						return B(A)
					}
					return true
				} else {
					Ext.Msg.alert("系统提示", C || "没有选定数据，请选择数据行！");
					return false
				}
			},
			doQuery : function(B) {
				B = B || {};
				var A = {
					params : {}
				};
				if (this.hsPage) {
					A = {
						params : {
							"pageCond/begin" : 0,
							"pageCond/length" : this.pagingToolbar.pageSize
						}
					}
				}
				Ext.apply(this.store.baseParams, B);
				this.store.load(A)
			},
			removeFromStore : function() {
				if (!this.getSelectionModel().getSelected()) {
					Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
				} else {
					Ext.Msg.confirm("系统提示", "您确定要删除当前数据吗？", function(B) {
								if (B == "yes") {
									var A = this.getSelectionModel()
											.getSelections();
									this.store.remove(A)
								}
							}, this)
				}
			},
			listeners : {
				'afterrender' : function() {
					var store = this.getStore(); // Capture the Store.
					var view = this.getView(); // Capture the GridView.
					this.tip = new Ext.ToolTip({
								target : view.mainBody, // The overall target
														// element.
								delegate : '.x-grid3-cell', // Each grid row
															// causes its own
															// seperate show and
															// hide.
								trackMouse : true, // Moving within the row
													// should not hide the tip.
								renderTo : document.body, // Render
															// immediately so
															// that tip.body can
															// be referenced
															// prior to the
															// first show.
								listeners : { // Change content dynamically
												// depending on which element
												// triggered the show.
									beforeshow : function updateTipBody(tip) {
										var rowIndex = view
												.findRowIndex(tip.triggerElement);
										var cellIndex = view
												.findCellIndex(tip.triggerElement);
										var cell = view.getCell(rowIndex,
												cellIndex);
										var temp = cell.innerHTML.replace(
												/<[^>]+>/g, "")
										if (temp.length > 11) {
											tip.body.dom.innerHTML = temp;
										} else {
											return false;
										}
									}
								}
							});
				}
			}
		});
Ext.reg("listpanel", Ext.fn.ListPanel);
// inputpanel
Ext.ns("Ext.fn");
Ext.fn.InputPanel = Ext.extend(Ext.fn.ColumnFormPanel, {
	pgrid : undefined,
	saveUrl : "",
	successFn : undefined,
	autoHide : true,
	baseCls : "x-plain",
	initComponent : function() {
		if (this.saveUrl == null || this.saveUrl == ""
				|| typeof(this.saveUrl) === "undefined") {
			throw new Error("saveUrl is must not null")
		}
		Ext.fn.InputPanel.superclass.initComponent.call(this);
		this.form = this.getForm();
		this.addEvents("beforesave", "aftersave", "loaddata")
	},
	loadData : function() {
		this.fireEvent("loaddata", this)
	},
	saveData : function() {
		input = this;
		if (this.form.isValid()) {
			var A = input.fireEvent("beforesave", input);
			if (!A) {
				return
			}
			this.form.submit({
						method : "POST",
						url : this.saveUrl,
						waitTitle : "操作提示",
						waitMsg : "保存数据中",
						success : function(C, B) {
							var D = B.result;
							if (D.success) {
								if (typeof(input.successFn) != "undefined"
										&& typeof(input.successFn) == "function") {
									var tmfn = input.successFn;
									tmfn(input, D);
									input.fireEvent("aftersave", input)
								} else {
									Ext.MessageBox.alert("操作提示", "保存成功!",
											function() {
												var E = input.fireEvent(
														"aftersave", input, D);
												if (input.autoHide) {
													if (E) {
														input.getBubbleTarget()
																.hide();
														if (input.pgrid) {
															input.pgrid
																	.refresh();
														}
													}
												}
											})
								}

							} else {
								input.fireEvent("aftersave", input, D);
							}
						},
						failure : function(C, B) {
							if (B.result.exception) {
								var A, E;
								if (B.result.exception.extype == "biz") {
									E = "【" + B.result.exception.message + "】";
									A = Ext.Msg.WARNING;
								} else {
									A = Ext.Msg.ERROR;
									E = "【系统发生异常！请与管理员联系】";
								}
								Ext.Msg.show({
											width : 350,
											title : "操作提示",
											msg : E,
											icon : A,
											buttons : Ext.Msg.OK
										})
							}
						}
					})
		}
	}
});
Ext.reg("inputpanel", Ext.fn.InputPanel);
// ExTreePanel
Ext.ns("Ext.fn");
Ext.fn.ExTreePanel = Ext.extend(Ext.tree.TreePanel, {
			collapsible : false,
			containerScroll : true,
			rootVisible : true,
			autoScroll : true,
			buttonAlign : "center",
			loadUrl : undefined,
			rootNode : undefined,
			parentField : undefined,
			childField : undefined,
			textField : undefined,
			leafOnly : true,
			isChecked : true,
			initComponent : function() {
				this.buildRoot();
				this.buildLoader();
				Ext.fn.ExTreePanel.superclass.initComponent.call(this);
			},
			buildRoot : function() {
				this.root = new Ext.tree.AsyncTreeNode({
							text : this.text,
							resid : "0"
						});
				this.root.attributes[this.childField] = "0"
			},
			buildLoader : function() {
				var cfg = {};
				if (this.isChecked) {
					cfg = {
						uiProvider : Ext.ux.TreeCheckNodeUI
					};
				} else {
					cfg = {};
				}
				this.loader = new Ext.ex.TreeLoader({
							dataUrl : this.loadUrl,
							root : this.rootNode,
							parentField : this.parentField,
							childField : this.childField,
							textField : this.textField,
							checkModel : this.checkModel,
							onlyLeafCheckable : this.leafOnly,
							baseAttrs : cfg
						})
			},
			getCheckedNodesId : function() {
				var C = [];
				var B = this.getChecked();
				for (var A = 0; A < B.length; A++) {
					if (B[A].lastChild == null) {
						C.push(B[A].attributes[this.childField])
					}
				}
				return C
			},
			getCheckedNodes : function() {
				var C = [];
				var B = this.getChecked();
				for (var A = 0; A < B.length; A++) {
					B[A].attributes.uiProvider = Ext.ux.tree.TreeGridNodeUI;
					C.push(new Ext.tree.TreeNode(B[A].attributes))
				}
				return C
			},
			checkAll : function(B) {
				B = B || this.root;
				var A = [];
				var C = function() {
					this.attributes["checked"] = true;
					this.getUI().toggleCheck(true)
				};
				B.cascade(C);
				return A
			}
		});
Ext.reg("extreePanel", Ext.fn.ExTreePanel);
// EditPanel
Ext.ns("Ext.fn");
Ext.fn.EditPanel = Ext.extend(Ext.fn.ColumnFormPanel, {
	pgrid : undefined,
	successFn : undefined,
	labelAlign : "right",
	saveUrl : "",
	loadUrl : "",
	autoHide : true,
	initComponent : function() {
		if (this.saveUrl == null || this.saveUrl == ""
				|| typeof(this.saveUrl) === "undefined") {
			throw new Error("saveUrl is must not null")
		}
		if (this.loadUrl == null || this.loadUrl == ""
				|| typeof(this.loadUrl) === "undefined") {
			throw new Error("loadUrl is must not null")
		}
		Ext.fn.EditPanel.superclass.initComponent.call(this);
		this.form = this.getForm();
		this.addEvents("beforesave", "aftersave", "beforeload", "afterload")
	},
	loadData : function(A) {
		this.requestMask = this.requestMask
				|| new Ext.LoadMask(Ext.getBody(), {
							msg : "正在执行操作..."
						});
		this.requestMask.show();
		Ext.Ajax.request({
					url : this.loadUrl,
					scope : this,
					jsonData : {
						entity : A.data
					},
					success : function(C) {
						var B = Ext.decode(C.responseText);
						if (B.success) {
							var D = this.fireEvent("beforeload", this, B.data);
							if (!D) {
								return
							}
							this.form.loadRecord(new Ext.data.Record(B.data));
							this.fireEvent("afterload", this, B.data)
						}
					},
					callback : function() {
						this.requestMask.hide()
					}
				})
	},
	saveData : function() {
		input = this;
		if (this.form.isValid()) {
			var A = input.fireEvent("beforesave", input);
			if (!A) {
				return
			}
			this.form.submit({
						method : "POST",
						url : this.saveUrl,
						waitTitle : "操作提示",
						waitMsg : "保存数据中",
						success : function(C, B) {
							var D = B.result;
							if (D.success) {
								if (typeof(input.successFn) != "undefined"
										&& typeof(input.successFn) == "function") {
									var tmfn = input.successFn;
									tmfn(input, D);
									input.fireEvent("aftersave", input)
								} else {
									Ext.MessageBox.alert("操作提示", "保存成功!",
											function() {
												var E = input.fireEvent(
														"aftersave", input);
												if (input.autoHide) {
													if (E) {
														input.getBubbleTarget()
																.hide();
														if (input.pgrid) {
															input.pgrid
																	.refresh()
														}
													}
												}
											})
								}
							} else {
								input.fireEvent("aftersave", input)
							}
						},
						failure : function(C, B) {
							if (B.result.exception) {
								var A, E;
								if (B.result.exception.extype == "biz") {
									E = "【" + B.result.exception.message + "】";
									A = Ext.Msg.WARNING;
								} else {
									A = Ext.Msg.ERROR;
									E = "【系统发生异常！请与管理员联系】";
								}
								Ext.Msg.show({
											width : 350,
											title : "操作提示",
											msg : E,
											icon : A,
											buttons : Ext.Msg.OK
										})
							}
						}
					})
		}
	}
});
Ext.reg("editpanel", Ext.fn.EditPanel);
// EditListPanel
Ext.ns("Ext.fn");
Ext.fn.EditListPanel = Ext.extend(Ext.grid.EditorGridPanel, {
			subAll : true,
			hsPage : true,
			loadMask : true,
			initComponent : function() {
				if (this.hsPage) {
					this.pagingToolbar = new Ext.ex.PagingToolbarEx({
								displayInfo : true,
								xtype : "pagingtoolbarex",
								pageSize : this.pageSize || 15,
								store : this.store
							});
					this.bbar = this.pagingToolbar
				}
				var store = this.store;
				this.store.on('beforeload', function(options) {
							var baseParams = store.baseParams;
							Ext.applyIf(baseParams, {
										"pageCond/length" : 15,
										"pageCond/isCount" : true
									});
							store.baseParams = baseParams;
						});
				Ext.fn.EditListPanel.superclass.initComponent.call(this);
				this.addEvents("delete", "aftersave", "beforesave")
			},
			rowclick : function(B, A) {
				this.currentindex = A
			},
			loadData : function(A) {
				this.store.rejectChanges();
				this.store.load({
							params : A
						})
			},
			addRow : function(A) {
				var B = this.store.recordType;
				this.insertindex = this.insertindex + 1;
				this.stopEditing();
				this.store.insert(0, new B(A));
				this.getView().refresh();
				this.startEditing(0, 0)
			},
			onDel : function() {
				var A = this;
				try {
					if (!this.getSelectionModel().getSelected()) {
						Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行！")
					} else {
						Ext.Msg.confirm("系统提示", "您确定要删除当前数据吗？", function(D) {
									if (D == "yes") {
										var C = A.getSelectionModel()
												.getSelections();
										var E = this.fireEvent("delete", this,
												C);
										if (E) {
											A.store.remove(C)
										}
									}
								}, this)
					}
				} catch (B) {
					Ext.Msg.alert("系统提示", "异常信息：" + B.discription)
				}
			},
			save : function() {
				var D = this;
				var E = D.fireEvent("beforesave", D);
				if (!E) {
					return
				}
				var B = [];
				if (!this.subAll) {
					B = D.store.getModifiedRecords()
				} else {
					B = D.store.getRange()
				}
				if (B.length == 0) {
					Ext.Msg.alert("系统提示", "没有提交待保存的数据");
					return
				}
				var C = [];
				for (var A = 0; A < B.length; A++) {
					r = B[A];
					C = C.concat(r.data)
				}
				this.requestMask = this.requestMask
						|| new Ext.LoadMask(Ext.getBody(), {
									msg : "正在执行操作,请稍候..."
								});
				this.requestMask.show();
				Ext.Ajax.request({
							method : "post",
							url : this.saveUrl,
							scope : this,
							jsonData : {
								datas : C
							},
							success : function(H, F) {
								var G = Ext.decode(H.responseText);
								if (G.success) {
									D.store.commitChanges();
									Ext.Msg.alert("系统提示", "保存成功", function() {
												D.fireEvent("aftersave", D);
											}, this);
								}
							},
							callback : function() {
								this.requestMask.hide()
							}
						})
			},
			saveData : function(B) {
				var A = this;
				var C = A.fireEvent("beforesave", A);
				if (!C) {
					return
				}
				Ext.Ajax.request({
							method : "post",
							url : this.saveUrl,
							jsonData : B,
							success : function(F, D) {
								var E = Ext.decode(F.responseText);
								if (E.success) {
									A.store.commitChanges();
									Ext.Msg.alert("系统提示", "保存成功", function() {
												A.fireEvent("aftersave", A);
											});
								}
							}
						})
			},
			isValid : function() {
				var L = this;
				var I = this.store;
				var E;
				if (!this.subAll) {
					E = I.getModifiedRecords()
				} else {
					E = I.getRange()
				}
				if (E.length < 1) {
					return true
				}
				for (var D = 0; D < E.length; D++) {
					var K = E[D];
					var J = K.fields.keys;
					for (var G = 0; G < J.length; G++) {
						var B = J[G];
						var F = K.data[B];
						var C = L.getColumnModel();
						var H = C.findColumnIndex(B);
						if (H == -1) {
							continue
						}
						var A = I.indexOfId(K.id);
						if (null != C.getCellEditor(H)) {
							C.getCellEditor(H).field.reset();
							var M = C.getCellEditor(H).field;
							if (!M.allowBlank && F == null) {
								// Ext.Msg.alert("提示", "数据不完整", function() {
								L.startEditing(A, H)
								// });
								return false
							}
							if (F != null && !M.validateValue(F)) {
								if (F == "0") {
									return true;
								} else {
									// Ext.Msg.alert("提示", "数据不完整", function() {
									L.startEditing(A, H)
									// });
									return false
								}
							}
						}
					}
				}
				return true
			},
			listeners : {
				'afterrender' : function() {
					var store = this.getStore(); // Capture the Store.
					var view = this.getView(); // Capture the GridView.
					this.tip = new Ext.ToolTip({
								target : view.mainBody, // The overall target
														// element.
								delegate : '.x-grid3-cell', // Each grid row
															// causes its own
															// seperate show and
															// hide.
								trackMouse : true, // Moving within the row
													// should not hide the tip.
								renderTo : document.body, // Render
															// immediately so
															// that tip.body can
															// be referenced
															// prior to the
															// first show.
								listeners : { // Change content dynamically
												// depending on which element
												// triggered the show.
									beforeshow : function updateTipBody(tip) {
										var rowIndex = view
												.findRowIndex(tip.triggerElement);
										var cellIndex = view
												.findCellIndex(tip.triggerElement);
										var cell = view.getCell(rowIndex,
												cellIndex);
										var temp = cell.innerHTML.replace(
												/<[^>]+>/g, "")
										if (temp.length > 11) {
											tip.body.dom.innerHTML = temp;
										} else {
											return false;
										}
									}
								}
							});
				}
			}
		});
Ext.reg("editlistpanel", Ext.fn.EditListPanel);
// formwindow
Ext.ns("Ext.ex");
Ext.fn.FormWindow = Ext.extend(Ext.Window, {
			closeAction : "hide",
			modal : true,
			collapsible : true,
			maximizable : true,
			constrain : true,
			width : 680,
			height : 400,
			padding : 2,
			buttonAlign : "center",
			layout : "fit",
			activeItem : undefined,
			form : undefined,
			initComponent : function() {
				this.buildButtons();
				Ext.fn.FormWindow.superclass.initComponent.call(this);
				this.activeItem = this.getActiveFP();
				this.form = this.activeItem.form
			},
			listeners : {
				hide : function() {
					this.form.reset();
					this.hide()
				}
			},
			getActiveFP : function() {
				if (this.items.length == 1) {
					return this.items.items[0]
				}
			},
			buildButtons : function() {
				this.buttons = [{
							text : "保存",
							scope : this,
							handler : function() {
								this.saveData()
							}
						}, {
							text : "关闭",
							scope : this,
							handler : function() {
								this.form.reset();
								this.hide()
							}
						}]
			},
			loadData : function(A) {
				this.activeItem.loadData(A)
			},
			saveData : function() {
				this.activeItem.saveData()
			}
		});
Ext.reg("formwindow", Ext.fn.FormWindow);
// showwindow
Ext.ns("Ext.ex");
Ext.fn.ShowWindow = Ext.extend(Ext.Window, {
			closeAction : "hide",
			modal : true,
			collapsible : true,
			maximizable : true,
			constrain : true,
			width : 680,
			height : 400,
			padding : 2,
			buttonAlign : "center",
			layout : "fit",
			activeItem : undefined,
			form : undefined,
			initComponent : function() {
				this.buildButtons();
				Ext.fn.ShowWindow.superclass.initComponent.call(this)
			},
			buildButtons : function() {
				this.buttons = [{
							text : "刷新",
							scope : this,
							handler : function() {
								this.loadData()
							}
						}, {
							text : "关闭",
							scope : this,
							handler : function() {
								this.hide()
							}
						}]
			},
			loadData : function() {
			},
			saveData : function() {
			}
		});
Ext.reg("showwindow", Ext.fn.ShowWindow);
Ext.fn.MergeGridView = Ext.extend(Ext.grid.GridView, {
	tableid : "",
	initTemplates : function() {
		var A = this.templates || {};
		if (!A.master) {
			A.master = new Ext.Template(
					'<div class="x-grid3" hidefocus="true">',
					'<div class="x-grid3-viewport">',
					'<div class="x-grid3-header"><div class="x-grid3-header-inner"><div class="x-grid3-header-offset" style="{ostyle}">{header}</div></div><div class="x-clear"></div></div>',
					'<div class="x-grid3-scroller"><div class="x-grid3-body" style="{bstyle}">{body}</div><a href="#" class="x-grid3-focus" tabIndex="-1"></a></div>',
					"</div>",
					'<div class="x-grid3-resize-marker">&#160;</div>',
					'<div class="x-grid3-resize-proxy">&#160;</div>', "</div>")
		}
		if (!A.header) {
			A.header = new Ext.Template(
					'<table border="0" cellspacing="0" cellpadding="0" style="{tstyle}" width="100%" >',
					'<thead><tr class="x-grid3-hd-row">{cells}</tr></thead>',
					"</table>")
		}
		if (!A.hcell) {
			A.hcell = new Ext.Template(
					'<td class="x-grid3-hd x-grid3-cell x-grid3-td-{id} {css}" style="{style}"><div {tooltip} {attr} class="x-grid3-hd-inner x-grid3-hd-{id}" unselectable="on" style="{istyle}">',
					this.grid.enableHdMenu
							? '<a class="x-grid3-hd-btn" href="#"></a>'
							: " ",
					'{value}<img class="x-grid3-sort-icon" src="',
					Ext.BLANK_IMAGE_URL, '" />', "</div></td>")
		}
		if (!A.body) {
			A.body = new Ext.Template(
					'<table id="',
					this.tableid,
					'" border="0" cellspacing="0" cellpadding="0" width="100%" class="x-mergeGrid3-rowtb">{rows}</table>')
		}
		if (!A.row) {
			A.row = new Ext.Template("<tr >{cells}</tr>")
		}
		if (!A.cell) {
			A.cell = new Ext.Template(
					'<td class="x-grid3-col x-grid3-cell x-grid3-td-{id} x-selectable {css}" style="{style}" tabIndex="0" width="{width}" {cellAttr}>',
					'<div class="x-grid3-cell-inner x-grid3-col-{id}" title="{tip}" {attr}>{value}</div>',
					"</td>")
		}
		for (var C in A) {
			var B = A[C];
			if (B && typeof B.compile == "function" && !B.compiled) {
				B.disableFormats = true;
				B.compile()
			}
		}
		this.templates = A;
		this.colRe = new RegExp("x-grid3-td-([^\\s]+)", "")
	}
});
Ext.ns("Ext.fn");
Ext.fn.MergeCellGrid = Ext.extend(Ext.grid.GridPanel, {
			stripeRows : true,
			autowidth : true,
			loadMask : true,
			enableHdMenu : false,
			columnLines : true,
			mergeCells : "",
			initComponent : function() {
				var pid = Ext.id(this);
				this.view = new Ext.fn.MergeGridView({
							tableid : pid + "_tb"
						});
				if (this.hsPage) {
					this.pagingToolbar = new Ext.ex.PagingToolbarEx({
								xtype : "pagingtoolbarex",
								pageSize : this.pageSize || 15,
								store : this.store
							});
					this.bbar = this.pagingToolbar;
					var A = this.store;
					Ext.applyIf(this.store.baseParams, {
								"pageCond/isCount" : true,
								"pageCond/length" : this.pageSize || 15
							})
				}
				Ext.fn.MergeCellGrid.superclass.initComponent.call(this)
			},
			uniteTable : function() {
				var H = document.getElementById(this.id + "_tb");
				var F = 0;
				var C = 0;
				var K = H.rows.length;
				var I = H.rows[0].cells.length;
				var B = I;
				var J = null;
				var G = null;
				for (F = 0; F < K; F++) {
					for (C = 0; C < I; C++) {
						H.rows[F].cells[C].id = this.id + "tb__" + F.toString()
								+ "_" + C.toString()
					}
				}
				for (F = 0; F < I; F++) {
					if (F == B) {
						return
					}
					var E = this.mergeCells.split(",");
					var D = false;
					for (var A = 0; A < E.length; A++) {
						if (F == parseInt(E[A])) {
							D = true
						}
					}
					if (D == false) {
						continue
					}
					J = document.getElementById(this.id + "tb__0_"
							+ F.toString());
					for (C = 1; C < K; C++) {
						G = document.getElementById(this.id + "tb__"
								+ C.toString() + "_" + F.toString());
						if (J.innerText == G.innerText) {
							J.rowSpan++;
							G.parentNode.removeChild(G)
						} else {
							J = document.getElementById(this.id + "tb__"
									+ C.toString() + "_" + F.toString())
						}
					}
				}
			}
		});
Ext.reg("mergecellgrid", Ext.fn.MergeCellGrid);
