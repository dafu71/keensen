/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 描 述： 修改密码策略 创建日期： 2014-9-18 补丁编号： G3_P_20140915_01_249 作 者：
 * 吕俊涛
 ******************************************************************************/
// ==============================修改历史===========================
// 补丁编号 修改人 日期 区域 备注
// G3_P_20140915_01_249 吕俊涛 2014-9-18 集团
//
// =================================================================
Ext.ns("Frame.ui");
ThemePicker = Ext.extend(Ext.ColorPalette, {
	constructor : function(B) {
		Ext.apply(this, B);
		ThemePicker.superclass.constructor.call(this, {
			autoShow : true,
			colors : ["BDD3EF", "000000", "545554", "ABADAF", "D8D8D8",
					"424370", "52567E", "5E7189", "D1C5FF", "9ACD68", "9CD4C1",
					"FC6161", "E2B4D5", "C49E92", "FFB5B5", "FF8C37"],
			listeners : {
				"select" : function(A, D) {
					switch (D) {
						case "BDD3EF" :
							Ext.util.CSS
									.swapStyleSheet("theme",
											"frame/ui/jslib/ext_340/resources/css/ext-all.css");
							break;
						case "000000" :
							Ext.util.CSS.swapStyleSheet("theme",
									"frame/ui/css/theme/xtheme-black.css");
							break;
						case "545554" :
							Ext.util.CSS.swapStyleSheet("theme",
									"frame/ui/css/theme/xtheme-slickness.css");
							break;
						case "ABADAF" :
							Ext.util.CSS.swapStyleSheet("theme",
									"frame/ui/css/theme/xtheme-darkgray.css");
							break;
						case "D8D8D8" :
							Ext.util.CSS.swapStyleSheet("theme",
									"frame/ui/css/theme/xtheme-gray.css");
							break;
						case "424370" :
							Ext.util.CSS.swapStyleSheet("theme",
									"frame/ui/css/theme/xtheme-midnight.css");
							break;
						case "52567E" :
							Ext.util.CSS.swapStyleSheet("theme",
									"frame/ui/css/theme/xtheme-indigo.css");
							break;
						case "5E7189" :
							Ext.util.CSS.swapStyleSheet("theme",
									"frame/ui/css/theme/xtheme-slate.css");
							break;
						case "D1C5FF" :
							Ext.util.CSS.swapStyleSheet("theme",
									"frame/ui/css/theme/xtheme-purple.css");
							break;
						case "9ACD68" :
							Ext.util.CSS.swapStyleSheet("theme",
									"frame/ui/css/theme/xtheme-olive.css");
							break;
						case "9CD4C1" :
							Ext.util.CSS.swapStyleSheet("theme",
									"frame/ui/css/theme/xtheme-green.css");
							break;
						case "FC6161" :
							Ext.util.CSS.swapStyleSheet("theme",
									"frame/ui/css/theme/xtheme-red5.css");
							break;
						case "FFB5B5" :
							Ext.util.CSS.swapStyleSheet("theme",
									"frame/ui/css/theme/xtheme-peppermint.css");
							break;
						case "E2B4D5" :
							Ext.util.CSS.swapStyleSheet("theme",
									"frame/ui/css/theme/xtheme-pink.css");
							break;
						case "C49E92" :
							Ext.util.CSS.swapStyleSheet("theme",
									"frame/ui/css/theme/xtheme-chocolate.css");
							break;
						case "FF8C37" :
							Ext.util.CSS.swapStyleSheet("theme",
									"frame/ui/css/theme/xtheme-orange.css");
							break
					}
					Ext.getCmp("indexLayout").items.itemAt(0).get("head")
							.doLayout();

					if (DATAORGID == '81') {
						Ext.Msg.alert("系统提示", "非UMP系统用户不能保存设置!");

					} else {
						Ext.Ajax.request({
							url : "com.zoomlion.hjsrm.frame.auth.login.LoginManager.setTheme.biz.ext?theme="
									+ D,
							success : function(C) {

							}
						})

					}
				}

			}
		})
	}
});
Ext.ux.ColorField = Ext.extend(Ext.form.TriggerField, {
	invalidText : "'{0}' is not a valid color - it must be in a the hex format (# followed by 3 or 6 letters/numbers 0-9 A-F)",
	triggerClass : "x-form-color-trigger",
	defaultAutoCreate : {
		tag : "input",
		type : "text",
		size : "10",
		maxlength : "7",
		autocomplete : "off"
	},
	maskRe : /[#a-f0-9]/i,
	initComponent : function() {
		Ext.form.ComboBox.superclass.initComponent.call(this);
		this.addEvents("colorchange")
	},
	validateValue : function(C) {
		if (!Ext.ux.ColorField.superclass.validateValue.call(this, C)) {
			return false
		}
		if (C.length < 1) {
			this.setColor("");
			return true
		}
		var D = this.parseColor(C);
		if (!C || (D == false)) {
			this.markInvalid(String.format(this.invalidText, C));
			return false
		}
		this.setColor(C);
		return true
	},
	setColor : function(B) {
		if (B == "" || B == undefined) {
			if (this.emptyText != "" && this.parseColor(this.emptyText)) {
				B = this.emptyText
			} else {
				B = "transparent"
			}
		}
		if (this.trigger) {
			this.trigger.setStyle({
						"background-color" : B
					})
		} else {
			this.on("render", function() {
						this.setColor(B)
					}, this)
		}
	},
	validateBlur : function() {
		return !this.menu || !this.menu.isVisible()
	},
	getValue : function() {
		return Ext.ux.ColorField.superclass.getValue.call(this) || ""
	},
	setValue : function(B) {
		Ext.ux.ColorField.superclass.setValue.call(this, this.formatColor(B));
		this.setColor(this.formatColor(B))
	},
	parseColor : function(B) {
		return (!B || (B.substring(0, 1) != "#"))
				? false
				: (B.length == 4 || B.length == 7)
	},
	formatColor : function(B) {
		if (!B || this.parseColor(B)) {
			return B
		}
		if (B.length == 3 || B.length == 6) {
			return "#" + B
		}
		return ""
	},
	menuListeners : {
		select : function(D, C) {
			this.setValue(C);
			this.fireEvent("colorchange", D, C)
		},
		show : function() {
			this.onFocus()
		},
		hide : function() {
			this.focus.defer(10, this);
			var B = this.menuListeners;
			this.menu.un("select", B.select, this);
			this.menu.un("show", B.show, this);
			this.menu.un("hide", B.hide, this)
		}
	},
	onTriggerClick : function() {
		if (this.disabled) {
			return
		}
		if (this.menu == null) {
			this.menu = new Ext.menu.ColorMenu()
		}
		this.menu.on(Ext.apply({}, this.menuListeners, {
					scope : this
				}));
		this.menu.show(this.el, "tl-bl?")
	}
});
Ext.reg("colorfield", Ext.ux.ColorField);

Frame.ui.OrgSelectionWin = Ext.extend(Ext.Window, {
	// x : 0,
	// y : 0,
	closable : true,
	width : 395,
	// width : 1,
	title : '请选择业务机构',
	height : 272,
	// height : 1,
	layout : "form",
	autoScroll : true,
	resizable : false,
	modal : true,
	OrgArr : [],
	orgsel : '',
	closeAction : "hide",
	initComponent : function() {
		this.buildItems();
		Frame.ui.OrgSelectionWin.superclass.initComponent.call(this);
		this.orgview = this.get("organizationview");
		this.relayEvents(this.orgview, ["click"]);
		this.on({
			scope : this,
			beforeshow : function() {
				var D = this;
				var C = this.get("organizationview");
				this.orgview.store.load({
					callback : function(B, G, H) {
						var A = this.reader.jsonData;
						if (A.isSysAdmin) {
							D.hide();
							C.setOrg();
							return true
						} else {
							if (B.length == 0) {
								D.hide(Ext.getBody(), function() {
									Ext.Msg.show({
										title : "提示",
										icon : Ext.Msg.WARNING,
										buttons : Ext.Msg.OK,
										msg : "您未登陆 或者暂时没有归属机构",
										fn : function() {
											location.href = "/default/frame/ui/page/login.jsp"
										}
									})
								}, D);
								return true
							}
							if (B.length == 1) {
								D.hide();
								C.setOrg(B[0]);
								return true
							}
							D.OrgArr = B
						}
					}
				})
			},
			"click" : function(G, E, F, H) {
				G.setOrg(this.OrgArr[E]);
				this.hide();
			}
		})
	},
	buildItems : function() {
		var _this = this;
		var seekorgname = Ext.id();
		this.items = [

		{
			xtype : 'panel',
			layout : "form",
			labelAlign : "right",
			buttonAlign : "center",
			items : [{
						xtype : "textfield",
						fieldLabel : '单位名称',
						id : seekorgname
					}],
			buttons : [{
						text : '查找',
						handler : function() {
							var store = _this.get("organizationview").store;
							var arr = [];
							store.filterBy(function(record) {
										var text = record.get("orgname");
										var value = Ext.getCmp(seekorgname)
												.getValue();
										if (text.indexOf(value) != -1) {
											arr.push(record);
										}
										return (text.indexOf(value) != -1);
									});
							_this.OrgArr = arr;
						}
					}]
		},

		{
			xtype : "organizationview",
			itemId : "organizationview"
		}]
	}
});
Ext.reg("orgselectionwin", Frame.ui.OrgSelectionWin);
Frame.ui.OrganizationView = Ext.extend(Ext.DataView, {
	itemSelector : "li",// hidden :true,
	selectedClass : "selected",
	layout : "fit",
	singleSelect : true,
	multiSelect : false,
	autoScroll : true,
	initComponent : function() {
		this.buildStore();
		this.buildTemplate();
		Frame.ui.OrganizationView.superclass.initComponent.call(this)
	},
	buildStore : function() {
		this.store = new Ext.data.JsonStore({
			url : "com.zoomlion.hjsrm.frame.org.organization.OrgManager.getOrgByUser.biz.ext",
			root : "data",
			fields : [{
						name : "orgid"
					}, {
						name : "orgname"
					}, {
						name : "orgcode"
					}, {
						name : "orgnames"// 分公司名字
					}, {
						name : "dataorgid"
					}, {
						name : "orgseq"
					}]
		})
	},
	buildTemplate : function() {
		this.tpl = new Ext.XTemplate(
				"<ul>",
				'<tpl for=".">',
				"<li id={orgid} style='cursor: pointer;margin:12px 10px 5px 10px;float:left;width:352px;background: #ffffff url(frame/ui/img/orgbg1.png) no-repeat;border:1px solid #cecece;line-height: 30px;overflow: hidden;height:32px;color: #333333;'>",
				'<strong style="display: block;text-align:left;font-size:15px;color: #000099;padding-left:40px;">{orgname}[{orgnames}]</strong>',
				'<span style="display:none">{orgid}</span>', "</li>", "</tpl>",
				"</ul>")
	},
	setOrg : function(C) {
		var D = Ext.getCmp("indexLayout").items.itemAt(0).get("head");
		if (C) {
			var foot = Ext.getCmp("indexLayout").items.itemAt(1).get("foot");
			foot.data.orgnames = C.data.orgname;
			foot.tpl.overwrite(foot.body, foot.data);
			// 切换机构时选择了一个机构后,关闭原有的tab页,如果只有一个机构则不关闭
			var spacepanel = Ext.getCmp("spacepanel");
			spacepanel.items.each(function(item) {
						// 不关闭首页tab
						if (item.id != 'welcome') {
							spacepanel.remove(item);
						}
					});
			D.loadData(C);
			Ext.getCmp("indexLayout").items.itemAt(0).get("head").doLayout();
			Ext.getCmp("indexLayout").items.itemAt(1).get("navigate")
					.loadFavorite();
			// loadBizmap();

		} else {
			D.loadData({});
			Ext.getCmp("indexLayout").items.itemAt(0).get("head").doLayout();
			Ext.getCmp("indexLayout").items.itemAt(1).get("navigate")
					.loadFavorite();
			// loadBizmap();
		}
		D.orgsel = C;
	}
});
Ext.reg("organizationview", Frame.ui.OrganizationView);
function loadMenus(resid) {
	var lis = document.getElementById("menu_ul").getElementsByTagName("li");
	var o = Ext.getCmp('navigateId');
	o.expand();
	for (var i = 0; i < lis.length; i++) {
		var a = lis[i].getElementsByTagName("a")[0];
		if (a) {
			a.className = 'nocurrent';
		}

	}
	document.getElementById("m_" + resid).className = 'current';
	Ext.getCmp("indexLayout").items.itemAt(1).get("navigate").loadMenu(resid);
}
function loadMenusbyHide(resid) {
	var as = document.getElementById("hiddenMenu").getElementsByTagName("a");
	var o = Ext.getCmp('navigateId');
	o.expand();
	for (var i = 0; i < as.length; i++) {
		if (as[i]) {
			as[i].className = 'nocurrent';
		}
	}
	document.getElementById("m_" + resid).className = 'current';
	Ext.getCmp("indexLayout").items.itemAt(1).get("navigate").loadMenu(resid);
}

function loadDesktop() {
	var o = Ext.getCmp('navigateId');
	o.expand();
	setTimeout(function() {
		var lis = document.getElementById("menu_ul").getElementsByTagName("li");
		for (var i = 0; i < lis.length; i++) {
			var a = lis[i].getElementsByTagName("a")[0];
			if (a) {
				a.className = 'nocurrent';
			}
		}
		document.getElementById("m_0").className = 'current';
		Ext.getCmp("indexLayout").items.itemAt(1).get("navigate")
				.loadFavorite();
	}, 400);
}

function changeStyle() {
	var F = new ThemePicker({});
	var D = new Ext.Panel({
				header : false,
				region : "center",
				id : "themepanel",
				items : [F]
			});
	var E = new Ext.Window({
				iconCls : "config-icon",
				title : "设置主题",
				layout : "border",
				width : 180,
				height : 90,
				items : [D]
			});
	E.show()
}
// 刘鑫，连接邮件菜单
function notice() {
	var spacepanel = Ext.getCmp('spacepanel');
	var myid = Ext.id();
	var itemId = "menu" + myid;
	var url = "/frame/tools/notice/noticemanager.jsp";
	spacepanel.remove(spacepanel.getItem(itemId));
	spacepanel.open({
				id : '702060000',
				text : '我的邮件',
				attributes : {
					respath : url
				}
			});

}
Frame.ui.Header = Ext.extend(Ext.Panel, {
	layout : 'fit',
	// frame:true,
	// floating: true,
	initComponent : function() {
		Frame.ui.Header.superclass.initComponent.call(this);
	},
	loadNotice : function() {
		this.noticeStore = new Ext.data.JsonStore({
			url : "com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.getNoticeInfos.biz.ext",
			autoLoad : false,
			root : "data",
			fields : ["noticeid", "title", "content"]
		});
		var Q = new Ext.Template(
				'<div class="icon_read_mail" >',
				'<a href="javascript:notice()"> '
						+ '<img id="email_img" src="frame/ui/img/email.gif" alt class="msg" ext:qtip="邮件" >'
						+ '</a>', '<span id="newsnum">({num})</span>', "</div>");
		Q.compile();

		this.noticeStore.on("load", function(C, D, E) {
					var B = Ext.get("readmail");
					var A = B.first();
					if (A) {
						A.remove()
					}
					Q.append(B, {
								num : D.length
							})
				});

		var S = new Ext.data.ArrayStore({
					idProperty : "noticeid",
					fields : ["noticeid", "title", "content", "readed"],
					idIndex : 0
				});

		// var Y = new Frame.ui.ToastWindow({
		// store : S,
		// listeners : {
		// "pagechange" : function(E, D, C) {
		// var B = D.total - C;
		// var F = String.format("({0})", B);
		// var A = Ext.get("newsnum");
		// A.update(F);
		// if (B == 0) {
		// updateImg(false)
		// }
		// },
		// "afterRead" : function(B, A) {
		// Ext.Ajax.request({
		// url :
		// "com.zoomlion.hjsrm.frame.tools.notice.NoticeManage.setNoticeReaded.biz.ext",
		// params : {
		// noticeid : A.get("noticeid")
		// }
		// })
		// }
		// }
		// });

		var X = 0;
		var R = 0;
		updateImg = function(C) {
			var B = Ext.get("email_img");
			var A = "";
			if (C) {
				A = "frame/ui/img/email.gif"
			} else {
				A = "frame/ui/img/email_no_read.gif"
			}
			B.dom.src = A
		};
		var T = function() {
			if (S.getCount() > 0) {

			} else {
				updateImg(false)
			}
		};

		var noticeTask = {
			run : function() {
				this.noticeStore.load({
							callback : function(A) {
								if (A && A.length > 0) {
									var B = [];
									this.noticeStore.each(function(C) {
												B.push([C.get("noticeid"),
														C.get("title"),
														C.get("content")])
											});
									S.loadData(B)
								} else {
									updateImg(false)
								}
							},
							scope : this
						})
			},
			interval : 3000000,
			scope : this
		};
		Ext.TaskMgr.start(noticeTask);

	},

	buildTpl : function(mydata) {
		if (mydata.logoimg == null || mydata.logoimg == ''
				|| mydata.logoimg == 'null') {
			mydata.logoimg = 'frame/ui/img/logo.png';
		}
		// <div class="left"><img src="{logoimg}" width=107% height=50/></div>
		var tpl = new Ext.XTemplate('<div class="top" >'
				+ '<div class="right">'
				+ '<div id="menu" class="menu"><ul id="menu_ul"><li><a id="m_0"  href="javascript:loadDesktop()" >我的桌面</a></li>'
				+ '<tpl for="apps">'
				+ '<tpl if="xindex<=6"><li class="js">|</li><li><a id="m_{resid}" href="javascript:loadMenus({resid})">{reslabel}</a></li>'
				+ '</tpl></tpl><li class="js">|</li><li class="hdmn"><li><a href="javascript: function myvoid(){return;};" onmouseover="mopen()" onmouseout="mclosetime()">其他</a></li>'
				+ '</li></ul>' + '</div>' + '</div>' + '</div></div>');
		var hm = document.getElementById("hiddenMenu");
		var hl = '';
		for (var i = 0; i < mydata.apps.length; i++) {
			if (i > 5) {
				hl += '<a id="m_' + mydata.apps[i].resid
						+ '" href="javascript:loadMenusbyHide('
						+ mydata.apps[i].resid + ')">'
						+ mydata.apps[i].reslabel + '</a>';
			}
		}
		hm.innerHTML = hl;
		tpl.compile();
		tpl.overwrite(this.body, mydata);
	},
	loadData : function(org) {
		var _this = this;
		Ext.Ajax.request({
			url : 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.loadApp.biz.ext',
			jsonData : {
				loginOrgInfo : org.data || {}
			},
			success : function(response, action) {
				var result = Ext.decode(response.responseText);
				if (result.success) {
					if (result.apps == null || result.apps == "") {
						result.apps = []
					}
					var data = {
						userid : userid,
						username : username,
						apps : result.apps,
						logoimg : logoimg
					};
					_this.buildTpl(data);
				}
			},
			callback : function() {
				_this.loadNotice();
			}
		});
	}
});
Ext.reg("head", Frame.ui.Header);
Frame.ui.Footer = Ext.extend(Ext.Panel, {
	layout : 'fit',
	data : {
		sysname : sysname,
		version : version,
		hotline : hotline,
		username : username,
		orgnames : orgnames
	},
	initComponent : function() {
		this.buildTpl();
		Frame.ui.Header.superclass.initComponent.call(this);
	},
	buildTpl : function() {
		this.tpl = new Ext.XTemplate('<table width="100%" class="menufsl" cellpadding="0" cellspacing="0" >'
				+ '<tr valign="middle">'
				+ '<td valign="middle" width="50%" align="left"> '
				+ '{sysname}  {version} | 技术支持:  {hotline} <span>当前用户：{username}</span><span>业务机构：{orgnames}</span>'
				+ '<span><div id="readmail" class="icon_read_mail">  </div></span>'
				+ '</td>'
				+ '<td valign="middle" width="20%" align="center"> '
				+ '<span id="myClock"></span>'
				+ '</td>'
				+ '<td width="30%" height="20" align="right" id="btm_menu">'
				// + '<span><a href="javascript:modifypass()">修改密码</a></span>'
				// + '<span>|</span><span><a
				// href="javascript:switchorg()">切换机构</a></span>'
				+ '<span>|</span><span><a href="javascript:login_Phase_I()">一期系统</a></span>'
				+ '<span>|</span><span><a href="javascript:loginOut()" class="loginout-icon">注销登录</a></span>'
				+ '<span>|</span><span><a href="javascript:changeStyle()">更换主题</a></span>'
				+ '</td></tr>' + '</table>');
	}
});
Ext.reg("foot", Frame.ui.Footer);

var kicktime = 0;

function display() {
	var now = new Date(); // 创建Date对象
	var nowdata = now.toLocaleDateString();// 获取当前的日期(2013年4月3日)
	var day = now.getDay(); // 获取星期(0-6)
	var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
	var nowweek = arr_week[day]; // 获取中文的星期
	var nowtime = now.toLocaleTimeString();// 获取当前的时间(包括补位的时分秒10:27:44)
	if (nowdata.indexOf("星期") > 0) {
		var time = nowdata + " " + nowtime; // 拼接显示时间(2013年4月3日 星期三
	} else {
		var time = nowdata + " " + nowweek + " " + nowtime; // 拼接显示时间(2013年4月3日
		// 星期三
	}
	if (kicktime > 30) {
		kicktime = 0;

		url = 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.isLogin.biz.ext';
		result = Ext.ex.XMLHttpRequestEx.synchRequest("POST", url);
		ret = Ext.decode(result);
		if (ret.ret == false) {
			Ext.Msg.alert("系统提示", "已有其他用户使用现有账号登录,请确认", function() {
						location.href = "/default/frame/ui/page/kick.jsp";
					})

		}

		/*
		 * Ext.Ajax.request({ url :
		 * 'com.zoomlion.hjsrm.frame.auth.login.LoginManager.isLogin.biz.ext',
		 * asynl:ture, success : function(response, action) { var result =
		 * Ext.decode(response.responseText); if (result.ret == false) {
		 * Ext.Msg.alert("系统提示", "已有其他用户使用现有账号登录,请确认", function() {
		 * location.href = "/default/frame/ui/page/kick.jsp"; }) } }, callback :
		 * function() { } });
		 */

	} else {
		kicktime += 1;

	}
	// 10:28:38)
	document.getElementById('myClock').innerHTML = time; // 显示时间
}
window.onload = function() {
	if (redirect == "1") {
		location.href = "/default/frame/ui/page/login.jsp"
	}
	window.setInterval("display()", 1000);

}

function modifypass() {
	/*
	 * if (DATAORGID == '81') { Ext.Msg.alert("系统提示", "非SRM系统用户不能修改密码!"); } else {
	 */
	Ext.getCmp("modifyWindow").show();

	/* } */

}
function phoneCenter() {
	// callWin.show();
}
function switchorg() {
	// Ext.getCmp("OrgSelectionWin").show()
}

function login_Phase_I() {
	/*var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://172.16.1.253:18080/qinsen/login/loginValid.do?password=xiaobin520&staffCode=XXB');
	xhr.withCredentials = true;
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			// use xhr.responseText
			alert(xhr.responseText);
		}
	}
	xhr.send();*/
	window.open('http://172.16.1.253:18080/qinsen/');


}

function loginOut() {
	Ext.Msg.show({
		title : "系统提示",
		msg : "您确定要注销？",
		icon : Ext.Msg.QUESTION,
		buttons : Ext.Msg.OKCANCEL,
		fn : function(B) {
			if (B == "ok") {
				Ext.Ajax.request({
					url : "com.zoomlion.hjsrm.frame.auth.login.LoginManager.logout.biz.ext",
					success : function(A) {
						location.href = "/default/frame/ui/page/login.jsp"
					}
				})
			}
		}
	})
}

Frame.ui.IndexLayout = Ext.extend(Ext.Viewport, {
	layout : "border",
	initComponent : function() {
		this.items = [new Ext.Container({
			layout : "anchor",
			region : "north",
			height : 50,
			margins : "0 0 0 4",
			style : 'overflow:hidden;',
			items : [{
						itemId : "head",
						margins : "0 0 0 4",
						bodyStyle : 'padding:0 0 0 0',
						height : 50,
						border : false,
						xtype : 'head'
					}, new Ext.Toolbar({
						buttonAlign : 'center',
						height : 30,
						hidden : true,
						style : "background-color:white",
						items : [{
							xtype : 'tbtext',
							text : '<div class="icon-application_gather" onclick="phonePanelSwitchFun(this)" title="收起话务机控件"></div>'
						}]
					})]
		}), new Ext.Container({
					layout : "border",
					region : "center",
					items : [{
								id : 'navigateId',
								xtype : "navigatepanel",
								itemId : "navigate",
								region : "west",
								header : false,
								collapseMode : "mini",
								collapsible : true,
								split : true,
								margins : "0 0 5 4",
								cmargins : "0 5 5 4",
								rootVisible : false,
								autoScroll : true,
								animate : false,
								width : 200
							}, {
								xtype : "spacepanel",
								id : "spacepanel",
								region : "center",
								margins : "0 0 5 0",
								cmargins : "0 5 5 0",
								minTabWidth : 150,
								tabWidth : 150,
								enableTabScroll : true,
								resizeTabs : true,
								plugins : new Ext.ux.TabCloseMenu()
							}, {
								region : "south",
								xtype : "foot",
								itemId : "foot",
								split : false,
								// height : 20,
								header : false,
								border : false,
								margins : "0 0 0 4"
							}]
				})];
		Frame.ui.IndexLayout.superclass.initComponent.call(this);
		this.head = this.items.itemAt(0).getComponent("head");
		this.navigate = this.items.itemAt(1).getComponent("navigate");
		this.foot = this.items.itemAt(1).getComponent("foot");
		this.workspaceTabPanel = this.items.itemAt(1)
				.getComponent("spacepanel");
		// *******************菜单折叠时调整工作空间的大小************************************
		this.navigate.mon(this.navigate, 'collapse', function() {
					resetWindow();
				}, this);
		this.navigate.mon(this.navigate, 'expand', function() {
					var task = new Ext.util.DelayedTask(resetWindow);
					task.delay(500);
				}, this);
		this.navigate.on("menuClick", function(D, C) {
					if (setpassword == "1") {
						Ext.getCmp("modifyWindow").show();
						Ext.getCmp("modifyWindow").setTitle("密码过于简单，请立即修改！");
						return
					}
					if (D.isLeaf()) {
						this.workspaceTabPanel.open(D);
					}
				}, this);
		this.navigate.on("favoriteMenuClick", function(D, C) {
					if (D.isLeaf()) {
						this.workspaceTabPanel.open(D)
					}
				}, this);
		this.navigate.on("quickMenuChange", function(C, D) {
					this.workspaceTabPanel.open(D)
				}, this)
	}
});
Ext.onReady(function() {
			currentWorkSpace = null;
			var W = new Frame.ui.IndexLayout({
						id : "indexLayout"
					});
			currentWorkSpace = W.workspaceTabPanel;
			_logonwin = new Frame.ui.LoginWindow({
						id : "logonwin",
						width : 460,
						height : 300,
						loadMask : true,
						redirect : false,
						hasvcode : hasvcode,
						remoteIP : remoteIP,
						animateTarget : Ext.getBody()
					});
			var N = new Ext.Panel({
						title : "主页",
						id : "welcome",
						iconCls : "icon-application_home",
						autoLoad : {
							url : "frame/ui/page/portal.jsp",
							callback : function() {
							},
							scripts : true
						},
						tabTip : "主页"
					});
			currentWorkSpace.add(N);
			currentWorkSpace.setActiveTab("welcome");
			var o = Ext.getCmp('navigateId');
			o.collapse();
			var U = new Ext.Window({
						id : "modifyWindow",
						title : "修改密码",
						width : 350,
						height : 155,
						modal : true,
						closeAction : "hide",
						items : [{
									xtype : "modifyFormPanel"
								}],
						animateTarget : "logon"
					});

		});

Frame.ui.NavigatePanel = Ext.extend(Ext.Panel, {
	layout : "fit",
	chutLoad : false,
	menuMap : new Ext.util.MixedCollection(),
	leafMenuStore : new Ext.data.JsonStore({
				proxy : new Ext.data.MemoryProxy([]),
				fields : ["resid", "resname", "fullname", "respath"]
			}),
	// menuMap : undefined,
	hasFavorite : true,
	layoutConfig : {
		titleCollapse : true,
		animate : false,
		activeOnTop : false,
		hideCollapseTool : false
	},
	initComponent : function() {
		this.buildItems();
		this.buildBbar();
		Frame.ui.NavigatePanel.superclass.initComponent.call(this);
		this.addEvents("quickMenuChange", "menuClick", "openMenuNewTabClick",
				"favoriteMenuClick", "afterMenuLoad");
		this.on('bodyresize', function(p, w, h) {
					if (Ext.getCmp("spacepanel")) {
						var task = new Ext.util.DelayedTask(resetWindow);
						task.delay(400);
					}

				}, this)
	},
	buildItems : function() {
		var D = this;
		var C = {
			menus : []
		};
		D.buildMenu(C)
	},
	loadShortcut : function() {
		var _this = this;
		var G = [];
		Ext.Ajax.request({
			url : "com.zoomlion.hjsrm.frame.rights.resource.ResourceManage.loadAllRights.biz.ext",
			success : function(A) {
				var B = Ext.decode(A.responseText);
				Ext.each(B.data, function(A) {
							if (A.isleaf.toUpperCase() == "Y") {
								A.fullname = A.reslabel;
								G[G.length] = A
							}
						});
				_this.leafMenuStore.loadData(G);
				_this.chutLoad = true;
			}

		})
	},
	menuProcess : function(E) {
		var H = this;
		H.menuMap = new Ext.util.MixedCollection();
		var G = [];
		var F = 0;
		Ext.each(E.menus, function(A) {
					var B = new Ext.tree.TreeNode(Ext.apply({
								text : A.reslabel,
								expanded : false,
								iconCls : A.iconCls
										|| (A.isleaf.toUpperCase() == "Y"
												? "icon-functionFun"
												: null),
								leaf : A.isleaf.toUpperCase() == "Y",
								href : A.respath,
								id : A.resid
							}, A));
					H.menuMap.add(A.resid, B);
				});
	},
	buildFavorite : function() {
		var B = new Frame.ui.FavoriteTreePanel({
					itemId : "favoritetreepanel"
				});;
		this.favoriteTreePanel = B;
		B.on("click", function(A, D) {
					D.stopEvent();
					this.fireEvent("favoriteMenuClick", A);
					if (!A.isLeaf()) {
						if (A.isExpanded()) {
							A.collapse()
						} else {
							A.expand()
						}
					}
				}, this);
		B.on("openMenuNewTabClick", function(A) {
					this.fireEvent("openMenuNewTabClick", A)
				}, this);
		this.removeAll(true);
		this.items.add(B);
		if (!this.chutLoad) {
			this.loadShortcut();
		}
	},
	buildMenu : function(C) {
		var D = this;
		Ext.each(C.menus, function(B) {
					var A = undefined;
					if (B.parentresid != 0) {
						A = D.menuMap.get(B.parentresid)
					}
					var I = D.menuMap.get(B.resid);
					if (A && B.parentresid != null && A != I) {
						A.appendChild(I)
					}
					if (B.parentresid == null || B.parentresid == 0) {
						var J = new Ext.tree.TreePanel({
									// title : B.reslabel,
									autoScroll : true,
									iconCls : "icon-functionTab",
									border : false,
									expandAll : true,
									itemId : B.resid,
									animate : false,
									rootVisible : false,
									border : false,
									bodyStyle : "background:#ECF5FF",
									root : D.menuMap.get(B.resid)
								});
						D.items.add(J);
						D.menu = J;
						J.on("click", function(E, F) {
									F.stopEvent();
									D.fireEvent("menuClick", E);
									if (!E.isLeaf()) {
										if (E.isExpanded()) {
											E.collapse()
										} else {
											E.expand()
										}
									}
								}, this);
						var H = new Ext.menu.Menu({
									items : [{
										text : "添加到我的桌面",
										scope : this,
										iconCls : "icon-award_star_add",
										handler : function() {
											var E = J.getSelectionModel()
													.getSelectedNode();
											if (E) {
												D.favoriteTreePanel.onAdd(E)
											}
										}
									}]
								});
						J.on("contextmenu", function(E, F) {
									F.stopEvent();
									if (E.isLeaf()) {
										E.select();
										H.showAt(F.getXY())
									}
								}, this)

					}
				});
		D.doLayout();
		D.fireEvent("afterMenuLoad")
	},
	buildBbar : function() {
		var B = new Ext.form.ComboBox({
			xtype : "combo",
			typeAhead : true,
			triggerAction : "query",
			id : "SRM_HOME_NAV_QUICKMENUCOMBO",
			forceSelection : true,
			selectOnFocus : true,
			hideTrigger : true,
			mode : "local",
			valueField : "resid",
			displayField : "fullname",
			width : 130,
			store : this.leafMenuStore,
			listClass : "listClass",
			tpl : '<tpl for="."><div class="x-combo-list-item"><span>{fullname}</span></div></tpl>',
			listeners : {
				scope : this,
				select : function(A, E, F) {
					var node = this.menuMap.get(E.data["resid"]);
					if (node) {
						this.fireEvent("quickMenuChange", A, node);
					} else {
						var B = new Ext.tree.TreeNode({
									text : E.data["resname"],
									expanded : false,
									iconCls : "icon-functionFun",
									leaf : 'Y',
									href : E.data["respath"],
									id : E.data["resid"]
								});
						B.attributes["respath"] = E.data["respath"];
						this.fireEvent("quickMenuChange", A, B);

					}

					A.clearValue()
				},
				expand : function() {
					B.list.setWidth(200);
					B.innerList.setWidth(B.list.width)
				},
				beforequery : function(e) {
					var combo = e.combo;
					if (!e.forceAll) {
						var input = e.query;
						var regExp = new RegExp(".*" + input + ".*");
						combo.store.filterBy(function(record, id) {
									var text = record.get(combo.displayField);
									return regExp.test(text);
								});
						combo.expand();
						return false;
					}
				}
			}
		});
		this.tbar = [B, "-", {
					iconCls : "icon-expand-all",
					tooltip : "展开所有",
					scope : this,
					handler : function() {
						this.menu.root.expand(true)
					},
					scope : this
				}, "-", {
					iconCls : "icon-collapse-all",
					tooltip : "关闭所有",
					handler : function() {
						this.menu.root.collapse(true)
					},
					scope : this
				}]
	},
	loadMenu : function(C) {
		var D = this;
		this.removeAll(true);
		Ext.Ajax.request({
			url : D.url
					|| "com.zoomlion.hjsrm.frame.auth.login.LoginManager.loadMenu.biz.ext",
			jsonData : {
				parentresid : C
			},
			success : function(A) {
				var B = Ext.decode(A.responseText);
				var F = B.menus;

				if (F == null || F.length == 0) {
					Ext.Msg.show({
								title : "提示",
								msg : "登录超时，请重新登录！",
								icon : Ext.Msg.INFO,
								buttons : Ext.Msg.OK,
								fn : function() {
									Ext.getCmp("logonwin").show()
								}
							})
				}
				D.fireEvent("refreshframe", D);
				D.menuProcess(B);
				D.buildMenu(B);
			}
		})
	},
	loadFavorite : function() {
		var B = this;
		this.buildFavorite();
		this.doLayout();

	}
});
Ext.reg("navigatepanel", Frame.ui.NavigatePanel);

Frame.ui.FavoriteTreePanel = Ext.extend(Ext.tree.TreePanel, {
	useArrows : false,
	autoScroll : true,
	iconCls : "icon-star",
	border : false,
	animate : false,
	rootVisible : false,
	border : false,
	bodyStyle : "background:#ECF5FF",
	// title : "我的桌面",
	root : {
		text : "我的桌面",
		expanded : true
	},

	initComponent : function() {
		this.loadData();
		Frame.ui.FavoriteTreePanel.superclass.initComponent.call(this);
		this.addEvents("openMenuNewTabClick");
		var B = new Ext.menu.Menu({
					items : [{
								text : "从我的桌面中移除",
								scope : this,
								iconCls : "icon-award_star_delete",
								handler : function() {
									var A = this.getSelectionModel()
											.getSelectedNode();
									if (A) {
										this.onRemove(A)
									}
								}
							}]
				});
		this.on("contextmenu", function(A, D) {
					D.stopEvent();
					if (A.isLeaf()) {
						A.select();
						B.showAt(D.getXY())
					}
				}, this)
	},
	loadData : function() {
		var B = this;
		Ext.Ajax.request({
			url : "com.zoomlion.hjsrm.frame.tools.shortcut.OperShortCutManage.queryShortCutByOperator.biz.ext",
			success : function(A, G) {
				var H = Ext.decode(A.responseText);
				var F = H.data;
				if (F) {
					B.menuProcces(F);
					B.buildMenu()
				}
			}
		})
	},
	menuProcces : function(E) {
		var F = this;
		this.leafMenuData = [];
		var D = 0;
		Ext.each(E, function(B) {
					var A = new Ext.tree.TreeNode(Ext.apply({
								text : B.reslabel,
								expanded : false,
								iconCls : B.iconCls
										|| (B.isleaf.toUpperCase() == "Y"
												? "icon-functionFun"
												: null),
								leaf : B.isleaf.toUpperCase() == "Y",
								href : B.respath,
								id : B.resid
							}, B));
					this.leafMenuData[this.leafMenuData.length] = A
				}, this)
	},
	buildMenu : function(B) {
		this.root.removeAll();
		this.root.appendChild(this.leafMenuData);
		this.doLayout()
	},
	onAdd : function(H) {
		var I = this;
		var G = {
			resid : H.attributes.resid
		};
		var I = this;
		var F = "com.zoomlion.hjsrm.frame.tools.shortcut.OperShortCutManage.addShortCut.biz.ext";
		Ext.Ajax.request({
					url : F,
					jsonData : {
						shortcut : G
					},
					success : function(B, A) {
						var C = Ext.decode(B.responseText);
						if (C.success) {
							if (C.num != 0) {
								Ext.Msg.show({
											title : "系统提示",
											msg : "该快捷方式已存在",
											icon : Ext.Msg.INFO,
											buttons : Ext.Msg.OK
										})
							} else {
								Ext.Msg.show({
											title : "系统提示",
											msg : "成功添加到我的桌面",
											icon : Ext.Msg.INFO,
											buttons : Ext.Msg.OK,
											fn : function() {
												I.loadData()
											}
										})
							}

						}
					}
				})
	},
	onRemove : function(H) {
		var F = this;
		var E = {
			resid : H.attributes.resid
		};
		var G = "com.zoomlion.hjsrm.frame.tools.shortcut.OperShortCutManage.deleteShortCut.biz.ext";
		Ext.Ajax.request({
					url : G,
					jsonData : {
						template : E
					},
					success : function() {
						Ext.Msg.show({
									title : "系统提示",
									msg : "成功从我的桌面中移除",
									icon : Ext.Msg.INFO,
									buttons : Ext.Msg.OK,
									fn : function() {
										F.loadData()
									}
								})
					}
				})
	}

});
Ext.reg("favoritetreepanel", Frame.ui.FavoriteTreePanel);

Ext.QuickTips.init();
Frame.ui.modifyFormPanel = Ext.extend(Ext.form.FormPanel, {
	id : "modifyform",
	autoScroll : true,
	frame : true,
	autoHeight : true,
	labelAlign : "right",
	labelWidth : 90,
	defaults : {
		width : 150
	},
	buttonAlign : "center",
	initComponent : function() {
		this.pass1 = new Ext.form.TextField({
					fieldLabel : "输入原密码",
					minLength : 6,
					maxLength : 100,
					minLengthText : '最小长度为6个字符，请检查...',
					maxLengthText : '最大长度为100个字符，请检查...',
					inputType : "password",
					allowBlank : false,
					listeners : {
						scope : this,
						specialkey : function(C, D) {
							if (D.getKey() == Ext.EventObject.ENTER) {
								this.getPass()
							}
						}
					}
				});
		this.pass2 = new Ext.form.TextField({
					fieldLabel : "输入新密码",
					minLength : 6,
					maxLength : 100,
					minLengthText : '最小长度为6个字符，请检查...',
					maxLengthText : '最大长度为100个字符，请检查...',
					regex : /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/,
					regexText : '密码必须包含字母和数字，请检查...',
					inputType : "password",
					vtype : 'charno',
					allowBlank : false,
					listeners : {
						scope : this,
						specialkey : function(C, D) {
							if (D.getKey() == Ext.EventObject.ENTER) {
								this.getPass()
							}
						}
					}
				});
		this.pass3 = new Ext.form.TextField({
					fieldLabel : "重复新密码",
					minLength : 6,
					maxLength : 100,
					minLengthText : '最小长度为6个字符，请检查...',
					maxLengthText : '最大长度为100个字符，请检查...',
					regex : /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/,
					regexText : '密码必须包含字母和数字，请检查...',
					inputType : "password",
					vtype : 'charno',
					allowBlank : false,
					listeners : {
						scope : this,
						specialkey : function(C, D) {
							if (D.getKey() == Ext.EventObject.ENTER) {
								this.getPass()
							}
						}
					}
				});
		this.buildItems();
		this.buildButtons();
		Frame.ui.modifyFormPanel.superclass.initComponent.call(this)
	},
	buildItems : function() {
		this.items = [this.pass1, this.pass2, this.pass3]
	},
	buildButtons : function() {
		this.buttons = {
			buttons : [{
						text : "保存",
						listeners : {
							scope : this,
							click : function() {
								this.getPass()
							}
						}
					}, {
						text : "关闭",
						scope : this,
						handler : this.resetForm
					}]
		}
	},
	resetForm : function() {
		this.form.reset();
		Ext.getCmp("modifyWindow").hide()
	},
	getPass : function() {
		password1 = this.pass1.getValue().replace(/(^\s*)|(\s*$)/g, "");
		password2 = this.pass2.getValue().replace(/(^\s*)|(\s*$)/g, "");
		password3 = this.pass3.getValue().replace(/(^\s*)|(\s*$)/g, "");
		Ext.Msg.getDialog().setWidth(500);
		if (password1.length == 0) {
			Ext.Msg.alert("操作提示", "请输入原始密码!", function() {
						this.pass1.focus(true, 100)
					});
			return false
		} else {
			if (password1.length < 6) {
				Ext.Msg.alert("操作提示", "密码长度为6-100位!请重新输入原始密码!", function() {
							this.pass1.focus(true, 100)
						});
				return false
			}
		}
		if (password2.length == 0) {
			Ext.Msg.alert("操作提示", "请输入新密码!", function() {
						this.pass2.focus(true, 100)
					});
			return false
		} else {
			if (password2.length < 6) {
				Ext.Msg.alert("操作提示", "密码长度为6-100位!请重新输入新密码", function() {
							this.pass2.focus(true, 100)
						});
				return false
			}
		}
		if (password3.length == 0) {
			Ext.Msg.alert("操作提示", "请输入重复新密码", function() {
						this.pass3.focus(true, 100)
					});
			return false
		} else {
			if (password3.length < 6) {
				Ext.Msg.alert("操作提示", "密码长度为6-100位!请重新输入重复新密码!", function() {
							this.pass3.focus(true, 100)
						});
				return false
			}
		}
		if (password2 != password3) {
			Ext.Msg.alert("操作提示", "两次输入的新密码不一致,请重新输入!", function() {
						this.pass3.focus(true, 100)
					});
			return false
		}
		// var C = /^(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{8,}$/;
		var C = /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;
		if (!C.exec(password3)) {
			Ext.Msg.alert("操作提示", "密码必须包含数字和字母!", function() {
						this.pass2.focus(true, 100)
					});
			return false
		}
		Ext.Msg.confirm().getDialog().setWidth(500);
		Ext.Msg.confirm("提示", "确定要修改密码?", function D(A) {
			var B = this.form;
			var H = this.pass1.getValue();
			var G = this.pass2.getValue();
			if (A == "yes") {
				Ext.Ajax.request({
					method : "post",
					url : "com.zoomlion.hjsrm.frame.auth.login.LoginManager.modifyPwd.biz.ext",
					jsonData : {
						pwd1 : H,
						pwd2 : G
					},
					success : function(J, F) {
						setpassword = 0;
						var E = Ext.util.JSON.decode(J.responseText);
						if (E.ret) {
							Ext.Msg.alert("系统提示", "密码修改成功！", function() {
										B.reset();
										Ext.getCmp("modifyWindow").hide()
									})
						}
					}
				})
			} else {
				if (A == "no") {
				}
			}
		}, this)
	}
});
Ext.reg("modifyFormPanel", Frame.ui.modifyFormPanel);
(function() {
	var B = Ext.Toolbar;
	Frame.ui.MsgToolBar = Ext.extend(Ext.Toolbar, {
				displayMsg : " {0}/{1}",
				emptyMsg : "没有数据",
				firstText : "第一条",
				prevText : "前一条",
				nextText : "下一条",
				lastText : "最后一条",
				initComponent : function() {
					var A = this.buildItems();
					var D = this.items || this.buttons || [];
					if (this.prependButtons) {
						this.items = D.concat(A)
					} else {
						this.items = A.concat(D)
					}
					delete this.buttons;
					if (this.displayInfo) {
						this.items.push("->");
						this.items.push(this.displayItem = new B.TextItem({}))
					}
					Frame.ui.MsgToolBar.superclass.initComponent.call(this);
					this.addEvents("change", "beforechange");
					this.cursor = 1;
					this.readedNum = 0;
					this.bindStore(this.store, true)
				},
				buildItems : function() {
					return [this.first = new B.Button({
										tooltip : this.firstText,
										overflowText : this.firstText,
										iconCls : "x-tbar-page-first",
										disabled : true,
										handler : this.moveFirst,
										hidden : true,
										scope : this
									}), this.prev = new B.Button({
										tooltip : this.prevText,
										overflowText : this.prevText,
										text : "上一条",
										iconCls : "icon-bullet_left",
										disabled : true,
										handler : this.movePrevious,
										scope : this
									}), "-", this.wait = new B.Button({
										text : "稍后提醒",
										iconCls : "icon-status_away",
										scope : this,
										handler : this.onHolded
									}), "-", this.next = new B.Button({
										tooltip : this.nextText,
										overflowText : this.nextText,
										text : "下一条",
										iconCls : "icon-bullet_right",
										disabled : true,
										handler : this.moveNext,
										scope : this
									}), this.last = new B.Button({
										tooltip : this.lastText,
										hidden : true,
										overflowText : this.lastText,
										iconCls : "x-tbar-page-last",
										disabled : true,
										handler : this.moveLast,
										scope : this
									})]
				},
				onFirstLayout : function() {
					this.onLoad.apply(this)
				},
				onHolded : function(A, D) {
					this.fireEvent("holdedclick", A, D)
				},
				updateInfo : function(A) {
					if (this.displayItem) {
						var E = this.store.getCount();
						var F = E == 0 ? this.emptyMsg : String.format(
								this.displayMsg, A, this.store.getCount());
						this.displayItem.setText(F)
					}
				},
				onLoad : function() {
					var A = this.store.getCount();
					this.first.setDisabled(this.cursor == 1);
					this.prev.setDisabled(this.cursor == 1);
					this.next.setDisabled(this.cursor == A);
					this.last.setDisabled(this.cursor == A);
					this.updateInfo(this.cursor);
					this.fireEvent("change", this, this.getPageData())
				},
				getPageData : function() {
					var D = this.store.getCount();
					var A = this.store.getAt(this.cursor - 1);
					return {
						total : D,
						activePage : this.store.getAt(this.cursor - 1)
					}
				},
				onLoadError : function() {
					if (!this.rendered) {
						return
					}
				},
				moveFirst : function() {
					this.cursor = 1;
					this.onLoad()
				},
				movePrevious : function() {
					this.cursor--;
					this.cursor = Math.max(0, this.cursor);
					this.onLoad()
				},
				moveNext : function() {
					this.cursor++;
					this.cursor = Math.min(this.cursor, this.store.getCount());
					this.onLoad()
				},
				moveLast : function() {
					this.cursor = this.store.getCount();
					this.onLoad()
				},
				bindStore : function(A, D) {
					if (!D && this.store) {
						if (A !== this.store && this.store.autoDestroy) {
							this.store.destroy()
						} else {
							this.store.un("load", this.onLoad, this);
							this.store.un("exception", this.onLoadError, this)
						}
						if (!A) {
							this.store = null
						}
					}
					if (A) {
						A = Ext.StoreMgr.lookup(A);
						A.on({
									scope : this,
									load : function() {
										this.cursor = 1;
										this.readedNum = 0;
										this.onLoad()
									},
									exception : this.onLoadError
								})
					}
					this.store = A
				},
				unbind : function(A) {
					this.bindStore(null)
				},
				bind : function(A) {
					this.bindStore(A)
				},
				onDestroy : function() {
					this.bindStore(null);
					Frame.ui.MsgToolBar.superclass.onDestroy.call(this)
				}
			})
})();

Frame.ui.ToastWindowMgr = {
	positions : []
};
Frame.ui.ToastWindow = Ext.extend(Ext.Window, {
			width : 268,
			height : 158,
			closeAction : "hide",
			delay : 5000,
			autoScroll : true,
			autoDestroy : true,
			plain : false,
			shadow : false,
			store : undefined,
			initComponent : function() {
				var B = new Frame.ui.MsgToolBar({
							store : this.store || new Ext.data.ArrayStore({}),
							displayInfo : true
						});
				this.bbar = B;
				this.task = new Ext.util.DelayedTask(this.hide, this);
				Frame.ui.ToastWindow.superclass.initComponent.call(this);
				this.mon(B, "change", function(F, A) {
							var E = A.activePage;
							if (!E.get("readed")) {
								F.readedNum++;
								E.set("readed", true);
								this.fireEvent("afterRead", this, E)
							}
							E.commit();
							this.setTitle(E.get("title"));
							this.setMessage(E.get("content"));
							this.fireEvent("pagechange", this, A, F.readedNum)
						}, this);
				this.mon(B, "holdedclick", function(A, D) {
							this.hide()
						}, this)
			},
			setMessage : function(B) {
				this.body.update(B)
			},
			setTitle : function(D, C) {
				Frame.ui.ToastWindow.superclass.setTitle.call(this, D, C
								|| this.iconCls)
			},
			onRender : function(C, D) {
				Frame.ui.ToastWindow.superclass.onRender.call(this, C, D)
			},
			animShow : function() {
				this.pos = 0;
				while (Frame.ui.ToastWindowMgr.positions.indexOf(this.pos) > -1) {
					this.pos++
				}
				Frame.ui.ToastWindowMgr.positions.push(this.pos);
				this.el.alignTo(document, "br-br", [-20,
								-20 - ((this.getSize().height + 10) * 0)]);
				this.el.slideIn("b", {
							duration : 2,
							callback : Ext.emptyFn(),
							scope : this
						})
			},
			animHide : function() {
				this.el.ghost("b", {
							duration : 2,
							remove : false,
							scope : this,
							callback : Ext.emptyFn()
						})
			}
		});