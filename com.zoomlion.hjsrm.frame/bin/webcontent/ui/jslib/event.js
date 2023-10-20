Ext.onReady(function() {
	var loadMask = new Ext.LoadMask(Ext.getBody(), {
				msg : "请稍后..."
			});

	Ext.Ajax.on("beforerequest", function(C, E) {
				var F = E.url;
				if (E.mask) {
					loadMask.msg = E.mask.msg || loadMask.msg;
					loadMask.show()
				}
				if (E.loadMask) {
					E.loadMask.show();
				}
				var D = "";
				var A = {
					authentication : "登录",
					logout : "注销"
				};
				var G = false;
				for (var B in A) {
					if (F.indexOf(B) != -1) {
						G = true;
						D = A[B]
					}
				}
				if (G) {
					Ext.Msg.show({
								title : "提示",
								width : 300,
								wait : true,
								waitConfig : {
									interval : 200,
									text : D + "操作正在进行.."
								}
							})
				}
			}, this);
	Ext.Ajax.on("requestcomplete", function(B, C, option) {
				loadMask.hide();
				if (option.loadMask) {
					option.loadMask.hide();
				}
				Ext.MessageBox.hide();
				if (C.responseText.substr(0, 1) == "{") {
					var D = Ext.decode(C.responseText);
					if (D.exception) {
						var E = "【" + D.exception.message + "】";
						var A;
						if (D.exception.extype == "biz") {
							A = Ext.Msg.WARNING
						} else {
							A = Ext.Msg.ERROR
						}
						Ext.Msg.show({
									width : 350,
									title : "操作提示",
									msg : E,
									icon : A,
									buttons : Ext.Msg.OK
								})
					}
					if (D.authorized != undefined && !D.authorized) {
						_logonwin.setTitle("<font color=red>系统超时，请重新登录</font>");
						if (!_logonwin.isVisible()) {
							_logonwin.accountField.value = userid;
							_logonwin.pwdField.reset();
							_logonwin.accountField.readOnly = true;
							_logonwin.show();
						}
	(function			() {
							_logonwin.pwdField.focus(true)
						}).defer(1000)
					}
				} else {
				}
			}, this);
	Ext.Ajax.on("requestexception", function(A, C, B) {
				loadMask.hide()
				if (B.loadMask) {
					B.loadMask.hide();
				}
				Ext.Msg.show({
							width : 250,
							title : "提示",
							msg : "错误:" + C.statusText,
							icon : Ext.Msg.ERROR,
							buttons : Ext.Msg.OK
						});
			}, this);
});

// 提供设置权限和获取权限的方法
(function() {
	srm = {
		setRight : setRight,
		getRight : getRight

	}
	var rl = [];
	function setRight() {
		Ext.Ajax.request({
			url : "com.zoomlion.hjsrm.frame.auth.login.LoginManager.loadRights.biz.ext",
			success : function(B) {
				var A = Ext.decode(B.responseText);
				// rightList = A.data
				rl = A.data;
			}
		});

	}
	function getRight() {
		return rl;

	}

})();

srm.setRight();

// var rightList = [];
/*
 * Ext.Ajax.request({ url :
 * "com.zoomlion.hjsrm.frame.auth.login.LoginManager.loadRights.biz.ext",
 * success : function(B) { var A = Ext.decode(B.responseText); //rightList =
 * A.data srm.setRight(A.data); } });
 */
function checkRight(A) {
	var rightList = [];
	if (!!srm && srm.hasOwnProperty('setRight')
			&& srm.hasOwnProperty('getRight')) {
		rightList = srm.getRight();
	} else {
		// 重新设置srm
		// 提供设置权限和获取权限的方法
		(function() {
			srm = {
				setRight : setRight,
				getRight : getRight

			}
			var rl = [];
			function setRight() {
				Ext.Ajax.request({
					url : "com.zoomlion.hjsrm.frame.auth.login.LoginManager.loadRights.biz.ext",
					success : function(B) {
						var A = Ext.decode(B.responseText);
						// rightList = A.data
						rl = A.data;
					}
				});

			}
			function getRight() {
				return rl;

			}

		})();

		srm.setRight();
		rightList = srm.getRight();
	}

	for (i = 0; i < rightList.length; i++) {
		if (rightList[i].rescode == A) {
			return true
		}
	}
	return false
}
Ext.Component.prototype.render = function(D, A) {
	var B = this;
	var C = this.rescode;
	if (C) {
		if (!checkRight(C)) {
			B.disabled = true;
			B.disable(true)
		}
	}
	if (!this.rendered && this.fireEvent("beforerender", this) !== false) {
		if (!D && this.el) {
			this.el = Ext.get(this.el);
			D = this.el.dom.parentNode;
			this.allowDomMove = false
		}
		this.container = Ext.get(D);
		if (this.ctCls) {
			this.container.addClass(this.ctCls)
		}
		this.rendered = true;
		if (A !== undefined) {
			if (Ext.isNumber(A)) {
				A = this.container.dom.childNodes[A]
			} else {
				A = Ext.getDom(A)
			}
		}
		this.onRender(this.container, A || null);
		if (this.autoShow) {
			this.el.removeClass(["x-hidden", "x-hide-" + this.hideMode])
		}
		if (this.cls) {
			this.el.addClass(this.cls);
			delete this.cls
		}
		if (this.style) {
			this.el.applyStyles(this.style);
			delete this.style
		}
		if (this.overCls) {
			this.el.addClassOnOver(this.overCls)
		}
		this.fireEvent("render", this);
		var F = this.getContentTarget();
		if (this.html) {
			F.update(Ext.DomHelper.markup(this.html));
			delete this.html
		}
		if (this.contentEl) {
			var E = Ext.getDom(this.contentEl);
			Ext.fly(E).removeClass(["x-hidden", "x-hide-display"]);
			F.appendChild(E)
		}
		if (this.tpl) {
			if (!this.tpl.compile) {
				this.tpl = new Ext.XTemplate(this.tpl)
			}
			if (this.data) {
				this.tpl[this.tplWriteMode](F, this.data);
				delete this.data
			}
		}
		this.afterRender(this.container);
		if (this.hidden) {
			this.doHide()
		}
		if (this.disabled) {
			this.disable(true)
		}
		if (this.stateful !== false) {
			this.initStateEvents()
		}
		this.fireEvent("afterrender", this)
	}
	return this
};
// nameSpace
var BIZ = new Object();
BIZ.ns = function(ns) {
	var nsArray = ns.split(".");
	var sEval = "";
	var sNS = "";
	for (var i = 0; i < nsArray.length; i++) {
		if (i != 0) {
			sNS += "."
		}
		sNS += nsArray[i];
		sEval += "if (typeof(" + sNS + ")=='undefined'){ " + sNS
				+ "=new Object(); }";
		continue
	}
	if (sEval.length > 0) {
		eval(sEval)
	}
};

// scriptLoader
Ext.onReady(function() {
			FunctionLoader = function() {
				this.timeout = 30;
				this.scripts = [];
				this.disableCaching = true;
			};
			FunctionLoader.prototype = {
				processSuccess : function(response) {
					this.scripts[response.argument.url] = true;
					window.execScript ? window
							.execScript(response.responseText) : window
							.eval(response.responseText);
					if (typeof response.argument.callback == "function") {
						response.argument.callback
								.call(response.argument.scope)
					}
				},
				processFailure : function(response) {
					Ext.MessageBox.show({
								title : "Application Error",
								msg : "Script library could not be loaded.",
								closable : false,
								icon : Ext.MessageBox.ERROR,
								minWidth : 200
							});
					setTimeout(function() {
								Ext.MessageBox.hide()
							}, 3000)
				},
				load : function(url, callback) {
					var cfg, callerScope;
					if (typeof url == "object") {
						cfg = url;
						url = cfg.url;
						callback = callback || cfg.callback;
						callerScope = cfg.scope;
						if (typeof cfg.timeout != "undefined") {
							this.timeout = cfg.timeout
						}
						if (typeof cfg.disableCaching != "undefined") {
							this.disableCaching = cfg.disableCaching
						}
					}
					Ext.Ajax.request({
								url : url,
								success : this.processSuccess,
								failure : this.processFailure,
								scope : this,
								timeout : (this.timeout * 1000),
								disableCaching : this.disableCaching,
								argument : {
									"url" : url,
									"scope" : callerScope || window,
									"callback" : callback,
									"options" : cfg
								}
							})
				}
			};
			FunctionLoaderMgr = function() {
				this.loader = new FunctionLoader();
				this.load = function(o) {
					if (o.scripts) {
						if (!Ext.isArray(o.scripts)) {
							o.scripts = [o.scripts]
						}
						o.url = o.scripts.shift();
						if (o.scripts.length == 0) {
							var callback = this.callback;
							this.loader.load(o, function() {
										callback(o);
									});
						} else {
							o.scope = this;
							this.loader.load(o, function() {
										this.load(o)
									});
						}
					} else {
						this.callback(o);
					}

				};
				this.message = function(tab, msg) {
					tab.setTitle(tab.title, 'icon-application_tab_error');
					tab.getUpdater().update({
								url : "frame/ui/page/message.jsp",
								params : {
									"msg" : msg
								},
								nocache : true,
								scope : true,
								scripts : true
							});
				};
				this.callback = function(o) {
					var spc = Ext.getCmp("spacepanel");
					var spacePanel = null;
					if (spc && spc.getXType() == 'spacepanel') {
						spacePanel = spc.getActiveTab();
					}
					if (!o.callback) {
						var fun = new o.mainfn(o.cfg);
						try {
							spacePanel.fnlayout = fun.initPanel();
							spacePanel.fnclass = fun;
						} catch (error) {
							delete fun;
							// spc.isLoading=false;
							// Ext.MessageBox.alert("功能初始化失败", "initPanel() run
							// error:"+error.message);
							this.message(spacePanel, "initPanel() run error："
											+ error.message + "...");
						}
						if (fun.initEvent) {
							try {
								fun.initEvent();
							} catch (error) {
								delete fun;
								// spc.isLoading=false;
								// Ext.MessageBox.alert("功能初始化失败", "initEvent()
								// run error:"+error.message);
								this.message(spacePanel,
										"initEvent() run error："
												+ error.message + "...");
							}
						}

						var lay = spacePanel.fnlayout;
						spacePanel.addListener("beforedestroy", function() {
									Ext.destroy(lay);
									try {
										fun.destroy();
									} catch (error) {

									}

									delete fun;
									spacePanel = null;
									return true;
								});

					} else {
						var call = o.callback;
						var mclass = call();
						if (!mclass) {
							return;
						}
						if (spc && spc.getXType() == 'spacepanel') {
							spacePanel.fnlayout = mclass.layout;
							spacePanel.fnclass = mclass;
							spacePanel.addListener("beforedestroy", function() {
										try {
											mclass.destroy();
											delete mclass;
										} catch (error) {

										}
									});
						}

					}

				}
			};
			FunctionMgr = new FunctionLoaderMgr()
		});

// sysconfig
Ext.Ajax.timeout = 180000;
var baseWindowWidth = 300;
var myPageSize = 15;
Ext.BLANK_IMAGE_URL = "frame/ui/jslib/ext_340/resources/images/default/s.gif";
Ext.QuickTips.init();
var map = new Ext.KeyMap(Ext.getBody(), [{
					key : [Ext.EventObject.L],
					alt : true,
					fn : function() {
						var A = top.Ext.getCmp("SRM_HOME_NAV_QUICKMENUCOMBO");
						if (A) {
							A.focus(true)
						}
					}
				}]);

Ext.form.DateField.prototype.editable = false;
Ext.form.DateField.prototype.altFormats = 'Ymd|Ym|Y-m-d|Y-m|Y/m/d|Y/m|m/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d';
Ext.form.DateField.prototype.safeParse = function(value, format) {
	if (Date.formatContainsHourInfo(format)) {
		return Date.parseDate(value, format);
	} else if ("Y-m" == format) {
		var parsedDate = Date.parseDate(value + '-01 ' + this.initTime, format
						+ '-d ' + this.initTimeFormat);
		if (parsedDate) {
			return parsedDate.clearTime();
		}
	} else if ("Ym" == format) {
		var parsedDate = Date.parseDate(value + '01 ' + this.initTime, format
						+ 'd ' + this.initTimeFormat);
		if (parsedDate) {
			return parsedDate.clearTime();
		}
	} else if ("Y/m" == format) {
		var parsedDate = Date.parseDate(value + '01 ' + this.initTime, format
						+ 'd ' + this.initTimeFormat);
		if (parsedDate) {
			return parsedDate.clearTime();
		}
	} else {
		// set time to 12 noon, then clear the time
		var parsedDate = Date.parseDate(value + ' ' + this.initTime, format
						+ ' ' + this.initTimeFormat);

		if (parsedDate) {
			return parsedDate.clearTime();
		}
	}
};
// Ext.form.Field.prototype.msgTarget = "side";
Ext.grid.RowSelectionModel.prototype.getSelectionsProperty = function(A) {
	var B = [];
	this.selections.each(function(C) {
				if (C.data[A]) {
					B = B.concat(C.data[A])
				}
			});
	return B
};
Ext.data.Store.prototype.getModifiedRecordsData = function(B) {
	var C = [];
	var D = this.getModifiedRecords();
	for (var A = 0; A < D.length; A++) {
		r = D[A];
		C = C.concat(r.data)
	}
	return C
};
Ext.form.DateField.prototype.editable = true;
Ext.form.DateField.prototype.fomart = 'y-m-d';
Ext.Msg.minWidth = 200;
Ext.override(Ext.form.TextField, {
			initComponent : Ext.form.TextField.prototype.initComponent
					.createInterceptor(function() {
								if (this.allowBlank === false
										&& this.fieldLabel) {
									this.fieldLabel += "<font color=red>*</font>"
								}
							}),
			setReadOnly : Ext.form.TextField.prototype.setReadOnly
					.createInterceptor(function() {
								if (this.readOnly) {
									// this.fieldClass = "x-form-field
									// x-item-disabled"
								}
							}),
			getStrLength : function(str) {// 中文处理
				if (Ext.isString(str)) {
					return str.replace(/[^\x00-\xff]/g, "**").length;
				}
				return str.length;
			},
			getErrors : function(C) {
				var A = Ext.form.TextField.superclass.getErrors.apply(this,
						arguments);
				C = C || this.processValue(this.getRawValue());
				if (C.length < 1 || C === this.emptyText) {
					if (this.allowBlank) {
						return A
					} else {
						A.push(this.blankText)
					}
				}
				if (!this.allowBlank && (C.length < 1 || C === this.emptyText)) {
					A.push(this.blankText)
				}
				var strLen = this.getStrLength(C);
				if (strLen < this.minLength) {
					A.push(String.format(this.minLengthText, this.minLength))
				}
				if (strLen > this.maxLength) {
					A.push(String.format(this.maxLengthText, this.maxLength))
				}
				if (this.regex && !this.regex.test(C)) {
					A.push(this.regexText)
				}
				if (this.vtype) {
					var B = Ext.form.VTypes;
					if (!B[this.vtype](C, this)) {
						A.push(this.vtypeText || B[this.vtype + "Text"])
					}
				}
				if (A.length > 0) {
					return A
				}
				if (Ext.isFunction(this.validator)) {
					var D = this.validator(C);
					if (D !== true) {
						A.push(D)
					}
				}
				return A
			}
		});
Ext.override(Ext.form.BasicForm, {

	getValues : function(asString) {
		var fs = Ext.lib.Ajax.serializeForm(this.el.dom);
		if (asString === true) {
			return fs;
		}
		var rs = Ext.urlDecode(fs);
		for (var x in rs) {
			if (rs[x] && rs[x] != ''
					&& (typeof(rs[x]) == 'string' || typeof(rs[x]) == 'number')) {
				rs[x] = rs[x].replace(/^\s+|\s+$/g, "");
			}
		}
		return rs;
	},
	reset : function() {
		this.items.each(function(f) {

					if (!(f.autoReset == false)) {
						f.reset();
					}

				});
		return this;
	}
});
Ext.override(Ext.form.Field, {

			getValue : function() {
				if (!this.rendered) {
					return this.value;
				}
				var v = this.el.getValue();
				if (v === this.emptyText || v === undefined) {
					v = '';
				} else {
					v = v.replace(/(^\s*)|(\s*$)/g, "");
				}
				return v;
			},

			onRender : function(ct, position) {
				if (!this.el) {
					var cfg = this.getAutoCreate();

					if (!cfg.name) {
						cfg.name = this.name || this.id;
					}
					if (this.inputType) {
						cfg.type = this.inputType;
					}
					this.autoEl = cfg;
				}
				Ext.form.Field.superclass.onRender.call(this, ct, position);
				if (this.submitValue === false) {
					this.el.dom.removeAttribute('name');
				}
				var type = this.el.dom.type;
				if (type) {
					if (type == 'password') {
						type = 'text';
					}
					this.el.addClass('x-form-' + type);
				}
				if (this.readOnly) {
					this.setReadOnly(true);
					this.el.addClass('readOnly-field');
				}
				if (this.tabIndex !== undefined) {
					this.el.dom.setAttribute('tabIndex', this.tabIndex);
				}

				this.el.addClass([this.fieldClass, this.cls]);
			}

		});
Ext.override(Ext.form.HtmlEditor, {
	getDocMarkup : function() {
		var h = Ext.fly(this.iframe).getHeight() - this.iframePad * 2;
		return String
				.format(
						'<html><head><style type="text/css">body{border: 0; margin: 0; padding: {0}px; height: {1}px; cursor: text;word-break:break-all}</style></head><body></body></html>',
						this.iframePad, h);
	}

});
Ext.override(Ext.grid.GridView, {
	cellTpl : new Ext.Template(
			'<td class="x-grid3-col x-grid3-cell x-grid3-td-{id} {css}" style="{style}" tabIndex="0" {cellAttr}>',
			'<div class="x-grid3-cell-inner x-grid3-col-{id}" {attr}>{value}</div>',
			'</td>')

});
renderDate = function(A) {
	return function(B) {
		if (typeof(B) == "string") {
			if (Ext.isEmpty(B)) {
				return ""
			} else {
				if (Ext.isEmpty(B.time)) {
					B = B.replace(/T/g, " ");
					JsonDateValue = Date.parseDate(B, "Y-m-d h:i:s.u")
				} else {
					JsonDateValue = new Date(B.time)
				}
			}
		} else {
			JsonDateValue = B
		}
		if (!JsonDateValue) {
			return null
		}
		return JsonDateValue.format(A || "Y-m-d H:i:s")
	}
};
// XMLHttpRequestEx
Ext.ns("Ext.ex");
Ext.ex.XMLHttpRequestEx = function() {
	var C = ["MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], B = "Content-Type";
	var A = {
		createXhrObject : function() {
			var D;
			try {
				D = new XMLHttpRequest()
			} catch (E) {
				for (var F = 0; F < C.length; ++F) {
					try {
						D = new ActiveXObject(C[F]);
						break
					} catch (E) {
					}
				}
			} finally {
				return D
			}
		},
		synchRequest : function(F, E, D) {
			var G = this.createXhrObject() || null;
			if (G) {
				G.open(F, E, false);
				G.send(D || null);
				return G.responseText
			}
		}
	};
	return A
}();

/*
 * Ext.EventManager.on(Ext.isIE ? document : window, 'keydown', function(e, t) {
 * if (e.getKey() == e.BACKSPACE) { if (e.browserEvent.srcElement.type != 'text' &&
 * e.browserEvent.srcElement.type != 'textarea' &&
 * e.browserEvent.srcElement.type != 'password') { e.stopEvent(); } else if
 * (e.browserEvent.srcElement.readOnly == true) { e.stopEvent(); }
 *  } });
 */

new Ext.KeyMap(document, [{
	key : Ext.EventObject.ENTER,
	ctrl : true,
	shift : true,
	fn : function() {
		new Ext.Window({
					title : '系统窗口管理器',
					height : 300,
					width : 500,
					items : [{
								xtype : 'tabpanel',
								activeItem : 0,
								items : [{
											xtype : 'panel',
											layout : 'fit',
											title : 'WINDOW',
											height : 300,
											items : [{
														xtype : 'htmleditor',
														id : 'debugWinHtmleditor',
														name : 'winStr',
														anchor : '90%'
													}]
										}, {
											xtype : 'panel',
											layout : 'fit',
											title : 'LAYOUT',
											height : 300,
											items : [{
														xtype : 'htmleditor',
														id : 'debugLayHtmleditor',
														name : 'layStr',
														anchor : '90%'
													}]
										}]
							}]
				}).show();
		var runner = new Ext.util.TaskRunner();
		runner.start(task);
	}
}]);
new Ext.KeyMap(document, [{
	key : Ext.EventObject.M,
	ctrl : true,
	shift : true,
	alt : true,
	fn : function() {
		new Ext.Window({
			title : '环境产业公司SRM纪念册',
			resizable :false,
			height : 300,
			width : 500,
			items : [{
				xtype : 'tabpanel',
				activeItem : 0,
				items : [{
					xtype : 'querypanel',
					title : '吴冲',
					columns : 4,
					height : 300,
					items : [{
						xtype : 'displayfield',
						style : 'color:red',
						colspan : 4,
						value : '头号记录者：吴冲！'
					},{
						xtype : 'displayfield',
						style : 'color:red',
						colspan : 4,
						width:470,
						value : '    &nbsp;&nbsp;&nbsp;&nbsp;环境产业公司SRM系统第一版的鼻祖，在执行项目经理吴冲全身心的带领及推动下，'
								+ '完成了领导的要求！今吴冲因个人原因即将离开公司，特留作纪念，祝前程似锦！望SRM后续开发及实施者，不忘初心！'
					}]
				},{
					xtype : 'querypanel',
					title : '黄平',
					columns : 4,
					height : 300,
					items : [{
						xtype : 'displayfield',
						style : 'color:red',
						colspan : 4,
						value : '永远的黄总！'
					},{
						xtype : 'displayfield',
						style : 'color:red',
						colspan : 4,
						width:470,
						value : '    &nbsp;&nbsp;&nbsp;&nbsp;环境产业公司核心开发人物，呕心沥血，兢兢业业，下能团结同事，上能拉拢领导，'
								+ '今因个人原因已离开公司，特留作纪念，祝前程似锦，财源滚滚！望后续开发及实施者，不忘初心！'
					}]
				},{
					xtype : 'querypanel',
					title : '刘鑫',
					columns : 4,
					height : 300,
					items : [{
						xtype : 'displayfield',
						style : 'color:red',
						colspan : 4,
						value : '霸气的鑫爷！'
					},{
						xtype : 'displayfield',
						style : 'color:red',
						colspan : 4,
						width:470,
						value : '    &nbsp;&nbsp;&nbsp;&nbsp;环境产业公司核心开发人物，幽默帅气，雄心勃勃，有胆识，有追求，'
								+ '今因个人原因已离开公司，特留作纪念，祝前程似锦，财源滚滚！望后续开发及实施者，不忘初心！'
					}]
				}]
			}]
		}).show();
	}
}]);
var updateEditorValue = function() {
	var debugWinHtmleditor = Ext.getCmp('debugWinHtmleditor');
	var debugLayHtmleditor = Ext.getCmp('debugLayHtmleditor');
	if (debugWinHtmleditor) {
		var winStr = "";
		Ext.WindowMgr.each(function(win) {
					winStr += "<p>" + win.id + "[" + win.title + "]</p>";
				});
		debugWinHtmleditor.setValue(winStr);
	}
	if (debugLayHtmleditor) {
		var layStr = "";
		Ext.FnlayoutMgr.each(function(panel) {
					layStr += "<p>" + panel.id + "[" + panel.title + "]</p>";
				});
		debugLayHtmleditor.setValue(layStr);
	}

}

Ext.override(Ext.tree.TreeNode, {
	deepExpand : function(anim, callback, scope) {
		// 先展开本节点
		this.expand(false, anim, function() {
			// 然后展开子节点
			var cs = this.childNodes, expanded = 0, len = cs.length, taskDone = function() {
				// 每展开成功一个子节点，计数+1
				expanded++;
				// 如果所有子节点都展开，调用最终回调
				if (expanded >= len) {
					this.runCallback(callback, scope || this, [this]);
				}
			};
			if (len <= 0) {
				taskDone.call(this);
				return;
			}
			// 递归展开
			for (var i = 0, len = cs.length; i < len; i++) {
				cs[i].deepExpand(anim, taskDone, this);
			}
		}, this);
	}
});

var task = {
	run : updateEditorValue,
	interval : 1000
}