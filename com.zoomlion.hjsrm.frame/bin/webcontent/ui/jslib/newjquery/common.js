/*!
 * =====================================================
 * 共通 JavaScript脚本
 * =====================================================
 */
window.App = {
		env: "production", // 模式：development（开发）/production（发布）
		dcf: false, // 防止二次提交
		isDebug: function() {
			return "development" == this.env;
		}
	},
	function($, app) { // 常用方法模块
		$.extend(app, {
			reg_space: /( )|(　)/g,
			reg_pass: /^(?![0-9]+$)(?![a-zA-Z]+$).{6,20}$/,
			reg_html: /(\w+)\.html/,
			reg_phone: /^1[3|4|5|7|8](\d{9})$/,
			reg_sim: /^\d{13}$/,
			reg_fax: /^(0[0-9]{2,3}-)([2-9][0-9]{6,7})+(-[0-9]{1,4})?$/,
			reg_number: /^(([0-9]+)|([0-9]+\.[0-9]{1,3}))$/,
			reg_alphaNumeric: /^[a-zA-Z0-9]*$/,
			reg_alphaNumSign: /^[0-9a-zA-Z\u0000-\u00FF]+$/,
			reg_email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
			trim: function(value) { // 去空格（全半角）
				return value.replace(this.reg_space, '');
			},
			isNull: function(exp) { // 验证空值
				if (exp == undefined ||
					exp == null ||
					exp == 'null' ||
					exp == 'undefined') {
					return true;
				}

				return ('string' == typeof exp) && this.trim(exp) == '' || false;
			},
			checkAlphaNumSign: function(value) { // 验证英数字
				value = value.replace(this.reg_space, '');
				return this.reg_alphaNumSign.test(value);
			},
			checkPass: function(pass) { // 验证密码
				var result = false;
				if (!this.checkAlphaNumSign(pass)) {
					app.alert("密码只能输入半角英数字以及半角字符！")
				} else if (!this.reg_pass.test(pass)) {
					app.alert("密码必须为6到20位并且不能全为数字或者字母！");
				} else {
					result = true;
				}
				return result
			},
			isNotNull: function(exp) { // 验证不空值
				return !this.isNull(exp);
			},
			escapeNull: function(exp, defaultValue) { // 回避空值
				if (exp == undefined ||
					exp == null ||
					exp == 'null' ||
					exp == 'undefined') {
					return defaultValue || '';
				}
				return exp;
			},
			hideStr: function(value, showLength) { // 隐藏部分文字，显示为...
				value = this.escapeNull(value);
				if (value.length <= showLength) {
					return value;
				}
				return value.substr(0, showLength) + '...';
			},
			checkMobilePhone: function(value) { // 验证手机号
				return this.reg_phone.test(value);
			},
			checkSim: function(value) { // 验证物联网卡
				return this.reg_sim.test(value);
			},
			checkFax: function(value) { // 验证传真号
				return this.reg_fax.test(value);
			},
			checkPhoneNumber: function(value) { // 验证电话号码

				var result = false;
				var value = this.trim(value);

				var markReg = /(\()|(\))|(\-)/g;
				var phoneReg = /^(0(10|2[1-3]|[3-9]\d{2}))?[1-9]\d{6,7}$/;
				var mpReg = /^1[3|4|5|7|8](\d{9})$/;
				var numberReg = /^[0-9]*$/;
				// 存在（）-
				if (markReg.test(value)) {
					var pIndex = value.lastIndexOf('-');
					var lIndex = value.lastIndexOf('(');
					var rIndex = value.lastIndexOf(')');

					// 只有左括号
					if (lIndex != -1 && rIndex == -1) {
						app.alert("请输入正确的电话号码");
					} else if (lIndex == -1 && rIndex != -1) { // 只有右括号
						app.alert("请输入正确的电话号码");
					} else if (lIndex == -1 && rIndex == -1) { // 没有括号
						if (pIndex != 3 && pIndex != 4) { // -位置不正确
							app.alert("请输入正确的电话号码");
						} else {
							value = value.replace(markReg, '');
							if (!numberReg.test(value)) {
								app.alert("请输入正确的电话号码");
							} else {
								if (phoneReg.test(value) || mpReg.test(value)) {
									result = true;
								} else {
									app.alert("请输入正确的电话号码");
								}
							}
						}
					} else { // 有括号

						// 左括号位置不正确
						if (lIndex != 0) {
							app.alert("请输入正确的电话号码");
						} else if (rIndex != 4 && rIndex != 5) { // 右括号位置不正确
							app.alert("请输入正确的电话号码");
						} else if (pIndex != -1) { // 存在-

							if (pIndex < rIndex) { // -的位置在右括号前
								app.alert("请输入正确的电话号码");
							} else if (pIndex != 5 && pIndex != 6) { // -位置不正确
								app.alert("请输入正确的电话号码");
							} else {
								value = value.replace(markReg, '');
								if (!numberReg.test(value)) {
									app.alert("请输入正确的电话号码");
								} else {
									if (phoneReg.test(value) || mpReg.test(value)) {
										result = true;
									} else {
										app.alert("请输入正确的电话号码");
									}
								}
							}
						} else {
							value = value.replace(markReg, '');
							if (!numberReg.test(value)) {
								app.alert("请输入正确的电话号码");
							} else {
								if (phoneReg.test(value) || mpReg.test(value)) {
									result = true;
								} else {
									app.alert("请输入正确的电话号码");
								}
							}
						}
					}
				} else {
					// 不是纯数字，包含特殊字符
					if (!numberReg.test(value)) {
						app.alert("请输入正确的电话号码");
					} else {
						// 手机号或者电话号码
						if (phoneReg.test(value) || mpReg.test(value)) {
							result = true;
						} else {
							app.alert("请输入正确的电话号码");
						}
					}
				}

				return result;
			},
			checkNumber: function(value) { // 验证数字
				value = value.replace(this.reg_space, '');
				return this.reg_number.test(value);
			},
			checkAlphaNumeric: function(value) { // 验证英数字
				value = value.replace(this.reg_space, '');
				return this.reg_alphaNumeric.test(value);
			},
			checkEmail: function(value) { // 验证邮箱地址
				value = value.replace(this.reg_space, '');
				return this.reg_email.test(value);
			},
			checkDate: function(date) { // 验证日期(yyyy-MM-dd或者yyyy/MM/dd)
				return (new Date(date).getDate() == date.substring(date.length - 2));
			},
			setItem: function(key, value, isLocal) { // 设置Storage储存值
				if (typeof value == 'object') { // 对象转换成String
					value = JSON.stringify(value);
				}

				if (isLocal) { // 是否保存到localStorage
					return localStorage.setItem(key, value);
				}

				return sessionStorage.setItem(key, value);
			},
			getItem: function(key, isLocal) { // 取得Storage储存值
				var value;

				if (isLocal) { // 是否取得localStorage
					value = this.escapeNull(localStorage.getItem(key));
				} else { // 默认取得sessionStorage
					value = this.escapeNull(sessionStorage.getItem(key));
				}

				try {
					return $.parseJSON(value);
				} catch (e) {
					return value;
				}
			},
			removeItem: function(key, isLocal) { // 删除Storage储存值
				if (isLocal) { // 是否删除localStorage
					return localStorage.removeItem(key);
				} else { // 默认删除sessionStorage
					return sessionStorage.removeItem(key);
				}
			},
			clearItem: function(isLocal) { // 清除所有Storage储存值
				if (isLocal) { // 是否清除localStorage
					return localStorage.clear();
				} else { // 默认清除sessionStorage
					return sessionStorage.clear();
				}
			},
			getCurrentDate: function(date) { // 获取当前日期（YYYY-MM-DD）
				return this.formatDate('YYYY-MM-DD', date);
			},
			getCurrentTime: function(date) { // 获取当期时间（YYYY-MM-DD HH:mm:ss）
				return this.formatDate('YYYY-MM-DD HH:mm:ss', date);
			},
			getCurrentZeroTime: function(date) { // 获取当前时间（YYYY-MM-DD 00:00:00）
				return this.formatDate('YYYY-MM-DD', date) + ' 00:00:00';
			},
			addMinutes: function(minutes, format, date) {
				return this.addTime('minutes', minutes || 0, format || 'YYYY-MM-DD HH:mm:ss', date);
			},
			addHours: function(hours, format, date) {
				return this.addTime('hours', hours || 0, format || 'YYYY-MM-DD HH:mm:ss', date);
			},
			addDays: function(days, format, date) { // 增加天数
				return this.addTime('days', days || 0, format || 'YYYY-MM-DD', date);
			},
			addMonths: function(months, format, date) { // 增加月数
				return this.addTime('months', months || 0, format || 'YYYY-MM-DD', date);
			},
			addYears: function(years, format, date) { // 增加年数
				return this.addTime('years', years || 0, format || 'YYYY-MM-DD', date);
			},
			addTime: function(key, numbers, format, date) { // 时间处理
				return date && moment(date).add(numbers, key).format(format) || moment().add(numbers, key).format(format);
			},
			formatDate: function(format, date) { // 时间格式化
				format = format || 'YYYY-MM-DD';
				return date && moment(date).format(format) || moment().format(format);
			},
			setCookie: function (name, value) {//两个参数，一个是cookie的名子，一个是值
				var Days = 30; //此 cookie 将被保存 30 天
				var exp = new Date(); //new Date("December 31, 9998");
				exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
				document.cookie = name + "=" + escape(value) + ";expires="
						+ exp.toGMTString();
			},
			getCookie: function (name){//取cookies函数
				var arr = document.cookie.match(new RegExp("(^| )" + name
						+ "=([^;]*)(;|$)"));
				if (arr != null)
					return unescape(arr[2]);
				return null;

			},
			delCookie: function (name) {//删除cookie
				var exp = new Date();
				exp.setTime(exp.getTime() - 1);
				var cval = this.getCookie(name);
				if (cval != null)
					document.cookie = name + "=" + cval + ";expires="
							+ exp.toGMTString();
			}
		});
	}(jQuery, App),
	function($, app) { // 业务模块
		$.extend(app, {
			outputFile: function(filesrc) { // 导出下载文件
				var outputFrame = window.parent.document.getElementById('outputFrame');
				if (outputFrame && filesrc) {
					outputFrame.src = filesrc;
				}
			},
			show: function(buttonId, id) {
				if (App.hasAuth(id)) {
					$("#" + buttonId).show();
				}
			},
			hasAuth: function(id) {
				var menuButtonList = App.getItem('menuButtonList');
				var result = false;
				$.each(menuButtonList, function(index, content) {
					if (content == id) {
						result = true;
						return;
					}
				});
				return result;
			},
		});
	}(jQuery, App),
	function($, app) { // UI模块
		$.extend(app, {
			find: function(selector) {
				if (window.parent) {
					return $(window.parent.document).find(selector);
				}
				return $(selector);
			},
			on: function(eventType, selector, callback) {
				return app.find(selector).unbind().bind(eventType, callback);
			},
			alert: function(content, callback, closeBtnFlg) { // 提示框
				var options = {
					title: ['提示', 'font-size:16px;background-color:#667D26;color:#FFFFFF;'],
					closeBtn: app.isNull(closeBtnFlg) ? 1 : 0,
					move: false
				};

				if (window.parent) {
					return window.parent.window.layer.alert(content, options, function(index) {
						window.parent.window.layer.close(index);
						callback && callback();
					});
				}
				return layer.alert(content, options, function(index) {
					layer.close(index);
					callback && callback();
				});
			},
			confirm: function(content, callback) { // 确认框
				var options = {
					title: ['确认', 'font-size:16px;background-color:#667D26;color:#FFFFFF;'],
					move: false
				};

				if (window.parent) {
					return window.parent.window.layer.confirm(content, options, function(index) {
						window.parent.window.layer.close(index);
						callback && callback();
					});
				}

				return layer.confirm(content, options, function(index) {
					layer.close(index);
					callback && callback();
				});
			},
			showWaiting: function(delay) { // 等待框
				if (delay) {
					return layer.load(2, {
						time: delay
					});
				}
				return layer.load(2);
			},
			closeWaiting: function(index) { // 关闭等待框
				layer.close(index);
			},
			showModal: function(id, height, width) {

				if (window.parent) {
					var topDocument = $(window.parent.document.body);

					topDocument.find('#' + id).modal({
						backdrop: 'static',
						keyboard: false
					});
					topDocument.find('#' + id).draggable({   
					    handle: ".modal-header",   
					    cursor: 'move',   
					    refreshPositions: false  
					});
					$('.modal-backdrop').appendTo(topDocument);

					var ph = topDocument.height();
					var pw = topDocument.width();

					setTimeout(function() {
						var top = (ph - (height || topDocument.find('#' + id + ' .modal-content').height())) / 2;
						var left = (pw - (width || topDocument.find('#' + id + ' .modal-content').width())) / 2;
						top = (top < 0 ? 0 : top);
						left = (left < 0 ? 0 : left);
						topDocument.find('#' + id + ' .modal-dialog').attr('style', 'margin-top:' + top + 'px; margin-left:' + left + 'px;');
					}, 150);
					return;
				}

				$("#" + id).modal({
					backdrop: 'static',
					keyboard: false
				});
				$("#" + id).draggable({   
				    handle: ".modal-header",   
				    cursor: 'move',   
				    refreshPositions: false  
				}); 
				setTimeout(function() {
					var top = ($(document.body).height() - (height || $('#' + id + ' .modal-content').height())) / 2;
					var left = ($(document.body).width() - (width || $('#' + id + ' .modal-content').width())) / 2;
					top = (top < 0 ? 0 : top);
					left = (left < 0 ? 0 : left);
					$('#' + id + ' .modal-dialog').attr('style', 'margin-top:' + top + 'px; margin-left:' + left + 'px;');
				}, 150);
			},
			vehiclePopup: function(callback) { // 单车画面初始化
				if (window.parent) {
					window.parent.window.App.CommonVehiclePopup.init(callback);
					return;
				}
				app.CommonVehiclePopup.init(callback);
			},
			showVehiclePopup: function(vehcileId) { // 显示单车画面
				if (window.parent) {
					window.parent.window.App.CommonVehiclePopup.show(vehcileId);
					return;
				}
				app.CommonVehiclePopup.show(vehcileId);
			},
			sysDicPopup: function(callback) { // 数据字典画面初始化
				if (window.parent) {
					window.parent.window.App.SysDicPopup.init(callback);
					return;
				}
				app.CommonEmployeePopup.init(callback);
			},
			showSysDicPopup: function(employeeId) { // 显示数据字典画面
				if (window.parent) {
					window.parent.window.App.SysDicPopup.show(employeeId);
					return;
				}
				app.CommonEmployeePopup.show(employeeId);
			},
			employeePopup: function(callback) { // 员工画面初始化
				if (window.parent) {
					window.parent.window.App.CommonEmployeePopup.init(callback);
					return;
				}
				app.CommonEmployeePopup.init(callback);
			},
			showEmployeePopup: function(employeeId) { // 显示员工画面
				if (window.parent) {
					window.parent.window.App.CommonEmployeePopup.show(employeeId);
					return;
				}
				app.CommonEmployeePopup.show(employeeId);
			},
			staffConfigurationPopup: function(callback) { // 员工画面初始化
				if (window.parent) {
					window.parent.window.App.CommonEmployeePopup.init(callback);
					return;
				}
				app.CommonEmployeePopup.init(callback);
			},
			showStaffConfigurationPopup: function(employeeId) { // 显示员工画面
				if (window.parent) {
					window.parent.window.App.CommonEmployeePopup.show(employeeId);
					return;
				}
				app.CommonEmployeePopup.show(employeeId);
			},
			companyPicker: function() { // 选择机构画面初始化
				if (window.parent) {
					window.parent.window.App.CompanyPicker.init();
					return;
				}
				app.CompanyPicker.init();
			},
			showCompanyPicker: function(callback) { // 显示选择机构画面
				if (window.parent) {
					window.parent.window.App.CompanyPicker.show(callback);
					return;
				}
				app.CompanyPicker.show(callback);
			},
			terminalPicker: function() { // 选择终端画面初始化
				if (window.parent) {
					window.parent.window.App.TerminalPicker.init();
					return;
				}
				app.TerminalPicker.init();
			},
			showTerminalPicker: function(sciId, ttiIsWire, callback) { // 显示选择终端画面
				if (window.parent) {
					window.parent.window.App.TerminalPicker.show(sciId, ttiIsWire, callback);
					return;
				}
				app.TerminalPicker.show(sciId, ttiIsWire, callback);
			},
			initPopup: function(popup) {
				app[popup + 'Popup'].init();
			},
			showPopup: function(popup, options) {
				if (window.parent) {
					window.parent.window.App[popup + 'Popup'].show(options);
					return;
				}
				app[popup + 'Popup'].show(options);
			},
			
			showDutyPopup: function(popup, options) {
				if (window.parent) {
					window.parent.window.App[popup + 'Popup'].showDuty(options);
					return;
				}
				app[popup + 'Popup'].showDuty(options);
			},
			showCardPopup: function(popup, options) {
				if (window.parent) {
					window.parent.window.App[popup + 'Popup'].showCard(options);
					return;
				}
				app[popup + 'Popup'].showCard(options);
			},
			
			getSelectedRowVals: function(gridId, idStr) {
				var ids = $("#" + gridId).bootgrid("getSelectedRows");
				var vals = $("#" + gridId).bootgrid("getCurrentRows");
				var retList = [];
				if (App.isNull(idStr)) {
					idStr = 'id';
				}
				for (var i = 0; i < ids.length; i++) {
					for (var j = 0; j < vals.length; j++) {
						var val = eval("vals[j]." + idStr);
						if (ids[i] == val) {
							retList[i] = vals[j];
						}
					}
				}
				return retList;
			}
		});
	}(jQuery, App),
	function($, app) { // ajax请求模块

		/* jquery全局设定 */
		$.ajaxSetup({
			timeout: 30000,
			cache: false,
			crossDomain: true,
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				app.dcf = false;

				if (window.parent) {
					window.parent.window.layer.closeAll('loading');
				} else {
					layer.closeAll('loading');
				}
				
				if('timeout' == textStatus) {
					app.alert('请求超时，请刷新页面。');
				} else if('parsererror' == textStatus) {
					app.alert('系统出现异常，请与企业的平台管理员联系。');
					console.error('请求参数格式不正确');
				} else {
					console.error(textStatus + ' ' + errorThrown);
				}
			},
			beforeSend: function(xhr) {
				app.dcf = true;
				if (app.isDebug()) {
					console.log("params: " + this.data);
				}
			},
			complete: function(xhr, status) {
				app.dcf = false;
				if (status === "success") {
					var response = JSON.parse(xhr.responseText);

					if (app.isDebug()) {
						console.log("response: " + JSON.stringify(response));
					}

					// 共通处理异常
					if (response.status == "failure") {
						var msg = response.msg;
						if (msg.msgCode == "W00001") {
							setTimeout(function() {
								window.parent.location.href = "login.do";
							}, 1500);
						}
					}
				}
			}
		});

		$.extend(app, {
			ajax: function(method, params, callback) { // post请求

				if (app.dcf) {
					return;
				}

				if ('object' == typeof method) { // options参数
					$.ajax(method);
				} else {
					return $.post(method, params, callback);
				}
			},
			ajaxUpload: function(method, form, callback) { // 上传文件
				$.ajax({
					type: "POST",
					url: method,
					data: form,
					contentType: false,
					processData: false,
					enctype: "multipart/form-data",
					success: function(data) {
						callback && callback(data);
					}
				});
			},
			ajaxGrid: function(gridId, options) { // 一览请求
				// 一览ID没有
				if (app.isNull(gridId) || gridId.indexOf('#') == 0) {
					app.alert('一览控件不存在');
					return;
				}

				// ajax执行成功的回调函数
				var rspHandler = options.responseHandler;
				var post = options.post;

				// 一览
				app[gridId + '_Grid_Params'] = options.post && options.post() || {};
				// 获取检索参数
				var params = post && post() || {};
				// 防止翻页时修改检索条件导致数据不正确，先把一览销毁，在新生成
				if (document.getElementById(gridId)) {
					$('#' + gridId).bootgrid("destroy");
				} else {
					app.find('#' + gridId).bootgrid("destroy");
				}

				// 默认配置
				var gridOptions = {
					selection: options.selection || false,
					sorting:options.sorting ||false,
					multiSelect: options.multiSelect ||true,
					rowSelect: options.rowSelect ||true,
					keepSelection: options.keepSelection || false,
					post: function() {
						return $.extend(app[gridId + '_Grid_Params'], params);
					},
					labels: {
						all: "全部",
						infos: "当前 {{ctx.start}} 到 {{ctx.end}} 条， 总共 {{ctx.total}} 条",
						loading: "加载中...",
						noResults: "没有相关数据",
						refresh: "刷新中...",
						search: "查询中..."
					},
					responseHandler: function(response) { // 响应结果处理
						// 共通处理异常
						if (response.status == "failure") {
							var msg = response.msg;
							app.alert(msg.msgContent);
							if (msg.msgCode == "W00001") {
								setTimeout(function() {
									window.parent.location.href = "login.do";
								}, 1500);
							}
						}
						// 显示页清空
						app[gridId + '_Grid_Params'].page = 0;

						return rspHandler && rspHandler(response) || response;
					}
				}

				// 显示参数
				$.extend(options, gridOptions);

				// 一览执行
				if (document.getElementById(gridId)) {
					return $('#' + gridId).bootgrid(options);
				} else {
					return app.find('#' + gridId).bootgrid(options);
				}
			},
			reloadGrid: function(gridId, page) { // 一览再加载

				// 一览ID没有
				if (app.isNull(gridId) || gridId.indexOf('#') == 0) {
					app.alert('一览控件不存在');
					return;
				}

				// 参数设置
				app[gridId + '_Grid_Params'].page = page && page || $('#' + gridId).bootgrid("getCurrentPage");

				$('#' + gridId).bootgrid("reload");
			},
			ajaxOutput: function(method, params, callback) { // 导出
				// 参数使用gridId时用grid的检索参数
				if ('string' == typeof params) {
					// 还没有检索过，结束导出
					if (!app[params + '_Grid_Params']) {
						return;
					}

					params = app[params + '_Grid_Params'];
				}

				// 成功回调
				var successFn = function(data) {
					// 成功
					if ('success' == data.status) {
						App.outputFile(data.file);
						callback && callback(data);
					} else { // 失败
						if (App.isNotNull(data.msg) && App.isNotNull(data.msg.msgContent)) {
							app.alert(data.msg.msgContent);
						}
					}
				}

				// 提交
				app.ajax(method, params, successFn);
			},
			treeview: function(id, options) { // 树结构
				$.extend(options, {
					color: '#000', // 字体颜色
					backColor: '#fff', // 背景颜色
					selectedColor: '#fff', // 选中节点字体颜色
					selectedBackColor: '#667D26' // 选中节点背景颜色
				});
				if (document.getElementById(id) != null) {
					$('#' + id).treeview(options);
				} else {
					$(window.parent.document.getElementById(id)).treeview(options);
				}
			}
		});
	}(jQuery, App);

/**
 * 禁用backspace进行浏览器历史履历切换
 * 
 * @param {Object} event
 */
function banBackSpace(event) {
	var ev = event || window.event;
	var obj = ev.target || ev.srcElement; //获取事件源   
	var t = obj.type || obj.getAttribute('type'); //获取事件源类型  
	//获取作为判断条件的事件类型
	var vReadOnly = obj.getAttribute('readonly');
	//处理null值情况
	vReadOnly = (vReadOnly == "") ? false : vReadOnly;
	//当敲Backspace键时，事件源类型为密码或单行、多行文本的，
	//并且readonly属性为true或enabled属性为false的，则退格键失效
	var flag1 = (ev.keyCode == 8 && (t == "password" || t == "text" || t == "textarea") && vReadOnly == "readonly") ? true : false;
	//当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效
	var flag2 = (ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea") ? true : false;

	//判断
	if (flag2) {
		return false;
	}
	if (flag1) {
		return false;
	}
};

window.onload = function() {

	//禁止后退键 作用于Firefox、Opera
	document.onkeypress = banBackSpace;
	//禁止后退键  作用于IE、Chrome
	document.onkeydown = banBackSpace;
}