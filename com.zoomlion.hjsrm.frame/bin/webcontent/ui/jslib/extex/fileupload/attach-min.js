/**
 * keel 主架 包括 uploadPanel  结构 uploadPanel-- gp(子节点)
 * 												  ---tbar(子节点)
 * 													-- swfupload(子节点)
 * 				 uploadPanel 的属性有：swfupload ( new SWFUpload)
 * 									 gp (Ext.grid.GridPanel) 上传列表
 * @type 
 */
var keel = {};
keel.UploadPanel = function(B) {
	Ext.apply(this, B);
	this.gp = new Ext.grid.GridPanel({
				border : false,
				sm : new Ext.grid.RowSelectionModel({
							singleSelect : true
						}),
				store : new Ext.data.ArrayStore({
							fields : ["id", "fileid", "filename", "type",
									"size", "state", "percent", "filepath"]
						}),
				columns : [new Ext.grid.RowNumberer(), {
							header : "文件名",
							width : 240,
							sortable : true,
							dataIndex : "filename",
							menuDisabled : true
						}, {
							header : "类型",
							width : 50,
							sortable : true,
							dataIndex : "type",
							menuDisabled : true
						}, {
							header : "大小",
							width : 60,
							sortable : true,
							dataIndex : "size",
							menuDisabled : true,
							renderer : this.formatFileSize
						}, {
							header : "进度",
							width : 150,
							sortable : true,
							dataIndex : "percent",
							menuDisabled : true,
							renderer : this.formatProgressBar,
							scope : this
						}, {
							header : "状态",
							width : 70,
							sortable : true,
							dataIndex : "state",
							menuDisabled : true,
							renderer : this.formatFileState,
							scope : this
						}]
			});
	this.setting = {
		returnValue : this.returnValue,
		upload_url : this.uploadUrl,
		flash_url : this.flashUrl,
		file_size_limit : this.fileSize || (1024 * 20),
		file_post_name : this.filePostName,
		file_types : this.fileTypes || "*.*",
		file_types_description : "All Files",
		file_upload_limit : "0",
		post_params : this.postParams || {
			savePath : "upload\\"
		},
		use_query_string : true,
		debug : false,
		button_cursor : SWFUpload.CURSOR.HAND,
		button_window_mode : SWFUpload.WINDOW_MODE.TRANSPARENT,
		custom_settings : {
			scope_handler : this
		},
		file_queued_handler : this.onFileQueued,
		swfupload_loaded_handler : function() {
		},
		file_dialog_start_handler : function() {
		},
		file_dialog_complete_handler : this.onDiaogComplete,
		upload_start_handler : this.onUploadStart,
		upload_success_handler : this.onUploadSuccess,
		swfupload_loaded_handler : function() {
		},
		upload_progress_handler : this.uploadProgress,
		upload_complete_handler : this.onUploadComplete,
		upload_error_handler : this.onUploadError,
		file_queue_error_handler : this.onFileError
	};
	keel.UploadPanel.superclass.constructor.call(this, {
				tbar : [{
							text : "添加文件",
							ref : "../addBtn"
						}, "-", {
							text : "开始上传",
							ref : "../uploadBtn",
							handler : this.startUpload,
							scope : this
						}, "-", {
							text : "停止上传",
							ref : "../stopBtn",
							handler : this.stopUpload,
							scope : this,
							disabled : true
						}, "-", {
							text : "删除",
							scope : this,
							ref : "../delBtn",
							handler : this.doDel
						},' ',{
							xtype:'label',
							html:'  <font color="red">( 注意 : 文件大小限制为20M)</font>'
						}],
				layout : "fit",
				items : [this.gp],
				listeners : {
					"afterrender" : function() {
						var A = this.getTopToolbar().get(0).el.child("em");
						var D = Ext.id();
						A.setStyle({
									position : "relative",
									display : "block"
								});
						A.createChild({
									tag : "div",
									id : D
								});
						this.swfupload = new SWFUpload(Ext.apply(this.setting,
								{
									button_width : A.getWidth(),
									button_height : A.getHeight(),
									button_placeholder_id : D
								}));
						this.swfupload.uploadStopped = false;
						Ext.get(this.swfupload.movieName).setStyle({
									position : "absolute",
									top : 0,
									left : -2
								})
					},
					scope : this,
					delay : 100
				}
			})
};
/**
 * 组件管理器,继承Ext.Panel 
 * @class keel.UploadPanel
 * @extends Ext.Panel
 */
keel.adminMgr = Ext.extend(keel.UploadPanel, Ext.Panel, {
	/**
	 * 按钮状态切换
	 * @param {} B
	 */
	toggleBtn : function(B) {
		this.addBtn.setDisabled(B);
		this.uploadBtn.setDisabled(B);
		this.stopBtn.setDisabled(!B);
		this.delBtn.setDisabled(B)
	},
	/**
	 * 点击上传按钮处理:
	 * @param {} E
	 */
	onUploadStart : function(E) {
		var D = this.settings.post_params;
		Ext.apply(D, {
					fileName : encodeURIComponent(E.name)
				});
		var F = this.customSettings.scope_handler;
		Ext.apply(D, F.postParams);
		this.setPostParams(D)
	},
	/**
	 * 开始上传
	 * @param {} B
	 */
	startUpload : function(B) {
		if (this.swfupload) {
			if (this.swfupload.getStats().files_queued > 0) {
				this.swfupload.uploadStopped = false;
				this.toggleBtn(true);
				this.swfupload.startUpload()
			}
		}
	},
	/**
	 * 格式化文件长度
	 * @param {} E
	 * @param {} F
	 * @param {} D
	 * @return {}
	 */
	formatFileSize : function(E, F, D) {
		return Ext.util.Format.fileSize(E)
	},
	/**
	 * 格式化文件上传状态
	 * @param {} B
	 * @return {String}
	 */
	formatFileState : function(B) {
		switch (B) {
			case -1 :
				return "未上传";
				break;
			case -2 :
				return "正在上传";
				break;
			case -3 :
				return '<div style="color:red;">上传失败</div>';
				break;
			case -4 :
				return "上传成功";
				break;
			case -5 :
				return "取消上传";
				break;
			default :
				return B
		}
	},
	/**
	 * 格式化状态条(应用模版)
	 * @param {} D
	 * @return {}
	 */
	formatProgressBar : function(D) {
		var C = this.getTplStr(D);
		return C
	},
	/**
	 * 获取状态条样式
	 * @param {} D
	 * @return {}
	 */
	getTplStr : function(D) {
		var F = "orange";
		var E = "#008000";
		return String
				.format(
						'<div><div style="border:1px solid {0};height:10px;width:{1}px;margin:4px 0px 1px 0px;float:left;"><div style="float:left;background:{2};width:{3}%;height:10px;"><div></div></div></div><div style="text-align:center;float:right;width:40px;margin:3px 0px 1px 0px;height:10px;font-size:12px;">{3}%</div></div>',
						E, (90), F, D)
	},
	/**
	 * 上传完成处理：
	 * @param {} G
	 */
	onUploadComplete : function(G) {
		var I = this.customSettings.scope_handler;
		if (G.filestatus == -4) {
			var J = I.gp.store;
			for (var H = 0; H < J.getCount(); H++) {
				var F = J.getAt(H);
				if (F.get("id") == G.id) {
					F.set("percent", 100);
					if (F.get("state") != -3) {
						F.set("state", G.filestatus)
					}
					F.commit()
				}
			}
		}
		if (this.getStats().files_queued > 0 && this.uploadStopped == false) {
			this.startUpload()
		} else {
			I.toggleBtn(false)
		}
	},
	/**
	 * 文件队列
	 * @param {} E
	 */
	onFileQueued : function(E) {
		var D = this.customSettings.scope_handler;
		var F = new Ext.data.Record({
					id : E.id,
					filename : E.name,
					size : E.size,
					type : E.type,
					state : E.filestatus,
					percent : 0,
					filepath : ""
				});
		D.gp.getStore().add(F)
	},
	/**
	 * 上传成功处理
	 * @param {} P
	 * @param {} O
	 */
	onUploadSuccess : function(P, O) {
		var N = this.customSettings.scope_handler;
		var K = N.gp.store;
		O = O.toString();
		var J = O.substring(3, O.length - 1);
		J = J.replace(/[\r\n]+/, "");
		var I = J.split(";");
		if (O.length >0&&I.length==3 &&I[0]=='true') {
			for (var M = 0; M < K.getCount(); M++) {
				var L = K.getAt(M);
				if (L.get("id") == P.id) {
					L.set("state", P.filestatus);
					L.set("fileid", I[1]);
					L.set("filepath", I[2]);
					L.commit();
					N.fireEvent("uploadsuccess", N, L)
				}
			}
		} else {
			for (var M = 0; M < K.getCount(); M++) {
				var L = K.getAt(M);
				if (L.get("id") == P.id) {
					L.set("percent", 0);
					L.set("state", -3);
					L.commit()
				}
			}
		}
	},
	/**
	 * 上传处理
	 * @param {} P
	 * @param {} J
	 * @param {} K
	 */
	uploadProgress : function(P, J, K) {
		var N = this.customSettings.scope_handler;
		var M = Math.ceil((J / K) * 100);
		M = M == 100 ? 99 : M;
		var L = N.gp.store;
		for (var O = 0; O < L.getCount(); O++) {
			var I = L.getAt(O);
			if (I.get("id") == P.id) {
				I.set("percent", M);
				I.set("state", P.filestatus);
				I.commit()
			}
		}
	},
	/**
	 * 上传错误处理
	 * @param {} I
	 * @param {} H
	 * @param {} N
	 */
	onUploadError : function(I, H, N) {
		var K = this.customSettings.scope_handler;
		var M = K.gp.store;
		for (var L = 0; L < M.getCount(); L++) {
			var J = M.getAt(L);
			if (J.get("id") == I.id) {
				J.set("percent", 0);
				J.set("state", I.filestatus);
				J.commit()
			}
		}
	},
	/**
	 * 文件处理提示处理
	 * @param {} E
	 * @param {} D
	 */
	onFileError : function(E, D) {
		switch (D) {
			case -100 :
				F("待上传文件列表数量超限，不能选择！");
				break;
			case -110 :
				F("文件太大，不能选择！");
				break;
			case -120 :
				F("该文件大小为0，不能选择！");
				break;
			case -130 :
				F("该文件类型不可以上传！");
				break
		}
		function F(A) {
			Ext.Msg.show({
						title : "提示",
						msg : A,
						width : 280,
						icon : Ext.Msg.WARNING,
						buttons : Ext.Msg.OK
					})
		}
	},
	/**
	 * 
	 */
	onDiaogComplete : function() {
		var B = this.customSettings.scope_handler
	},
	stopUpload : function() {
		if (this.swfupload) {
			this.swfupload.uploadStopped = true;
			this.swfupload.stopUpload()
		}
	},
	deleteAll : function() {
		var H = this.gp.store;
		if(H){
			for (var F = 0; F < H.getCount(); F++) {
			var G = H.getAt(F);
			var E = G.get("id");
			this.swfupload.cancelUpload(E, false)
			}
			H.removeAll();	
		}
		if(this.swfupload){
			this.swfupload.uploadStopped = false	
		}
	},
	formatDelBtn : function(B) {
		return "<span id='"
				+ B
				+ "'style='color:blue;cursor:pointer' class='link-btn' ext:qtip='移除该文件'><button>删 除</span>"
	},
	/**
	 * 删除按钮点击处理: 1.已上传文件调用逻辑流删除，
	 * 				   2.未上传文件直接从stote中移除
	 */
	doDel : function() {
		var B = this.gp.getSelectionModel().getSelected();
		
		if (!B) {
			Ext.Msg.alert("提示", "请选择一个文件记录！")
		} else {
			if (B.get("fileid")) {
				this.doRemoveFile(B)
			} else {
				var ds = this.gp.store;
				ds.remove(B);
				this.gp.getView().refresh();
			}
		}
		this.swfupload.cancelUpload(B.get("id"), false)
	},
	/**
	 * 移除文件
	 * @private
	 * @param {} D
	 */
	doRemoveFile : function(D) {
		var C = this;
		Ext.Msg.confirm("操作确认", "您确实要删除这个文件吗?", function(A) {
			if (A == "yes") {
				Ext.Ajax.request({
					url : "com.zoomlion.hjsrm.frame.bclib.file.FileBclib.deleteFile.biz.ext",
					jsonData : {
						"fileId" : D.get("fileid")
					},
					success : function(F) {
						var B = Ext.decode(F.responseText);
						if (B.success) {
							var ds = C.gp.store;
							ds.remove(D);
							C.gp.getView().refresh();
							C.fireEvent("removedsuccess", C, D)
						}
					}
				})
			}
		})
	}
});
Ext.reg("uploadPanel", keel.UploadPanel);
Ext.namespace("Ext.ex");
/**
 * 附件列表 与上传组件 组合使用 属性：fileMgr 上传组件窗口
 * @class Ext.ex.AttachmentList
 * @extends Ext.ListView
 */
Ext.ex.AttachmentList = Ext.extend(Ext.ListView, {
	style : "background-color: #FFFFFF;",
	emptyText : "",
	loadParams : {},
	postParams : {},
	deferEmptyText : false,
	isDelete:false,
	uploadUrl : undefined,
	loadRemoteUrl : undefined,
	frame : false,
	isUploaded : false,
	isDownload : false,
	readOnly : false,
	initComponent : function() {
		//if (this.isUploaded) {
			this.emptyText = '<span style="cursor:hand;">点击添加附件</span>'
		//}
		this.columns = this.buildColumns();
		this.store = this.buildStore();
		Ext.ex.AttachmentList.superclass.initComponent.call(this);
		
		this.fileMgr = this.buildFileMgr();
		this.uploadPanel = this.fileMgr.getComponent("uploadpanel");
		
		this.mon(this, "containerclick", function() {
					if (this.isUploaded) {						
						this.fileMgr.show();
						this.doLoadedBack()
					}else{
						this.fireEvent('upload');
					}
				}, this);
		this.mon(this, "dblclick", function() {
			        if (this.isUploaded) {						
						this.fileMgr.show();
						this.doLoadedBack()
					}else{
						this.fireEvent('upload');
					}
				}, this);
		this.mon(this.uploadPanel, "uploadsuccess", function(E, D) {
					var F = new this.store.recordType(D.data);
					this.store.add(F)
				}, this);
		this.mon(this.uploadPanel, "removedsuccess", function(E, F) {
					var G = this.store.find("id", F.get("id"));
					var H = this.store.getAt(G);
					this.store.remove(H)
				}, this)
	},
	beforeDestroy:function(){
		if(this.fileMgr){
			//销毁flash
			var uploadPanel = this.fileMgr.getComponent("uploadpanel");
			if(uploadPanel && uploadPanel.swfupload){
				uploadPanel.swfupload.destroy();	
			}
			//销毁窗口
			var win =  this.fileMgr;
			win.close();
		}
		Ext.ex.AttachmentList.superclass.beforeDestroy.call(this);
	},
	setReadOnly : function(B) {
		this.isUploaded = !B;
		this.isDownload = !B
	},
	doLoadedBack : function() {
		var E = this.fileMgr.getComponent("uploadpanel");
		if (this.store.getCount() <= 0) {
			E.deleteAll();
		} else {
			E.deleteAll();
			var D = this.store.getCount();
			for (var F = 0; F < D; F++) {
				E.gp.store.insert(F, this.store.getAt(F))
			}
		}
	},
	loadAttachmentLocal : function(E) {
		var F = this;
		var G = [];
		if (Ext.isArray(E)) {
			for (var H = 0; H < E.length; H++) {
				G.push([E[H]["id"], E[H]["filename"], E[H]["size"],
						E[H]["type"], E[H]["filepath"]])
			}
		} else {
			if (Ext.isObject()) {
				G.push(E["id"], E["filename"], E["size"], E["type"],
						E["filepath"])
			}
		}
		F.store.removeAll();
		F.store.loadData(G)
	},
	loadAttachmentRemote : function(C) {
		Ext.apply(this.loadParams, C);
		var D = this;
		Ext.Ajax.request({
			url : D.loadRemoteUrl
					|| "com.zoomlion.hjsrm.frame.bclib.file.FileBclib.queryFileList.biz.ext",
			jsonData : this.loadParams,
			success : function(B) {
				var A = Ext.decode(B.responseText);
				var J = A.files;
				if (J) {
					var I = [];
					for (var H = 0; H < J.length; H++) {
						var fileName = J[H].fileName;
						var fileType =  fileName.substr(fileName.lastIndexOf('.'));
						I.push([J[H].fileId, J[H].fileId, J[H].fileName,
								fileType, J[H].fileSize, -4, 100,
								J[H].filePath])
					}
					D.store.removeAll();
					D.store.loadData(I)
				}
			}
		})
	},
	getAttachments : function() {
		var H = this.store.data;
		var I = [];
		if (H) {
			for (var J = 0; J < H.length; J++) {
				var G = H.get(J).data;
				var F = {
					id : G.fileId,
					fileName : G.filename,
					filePath : G.filepath,
					fileSize : G.size,
					fileType : G.type
				};
				I[I.length] = F
			}
		}
		return I
	},
	buildColumns : function() {
		var B = [{
					header : "文件名",
					dataIndex : "filename",
					width : 0.5,
					tpl : '<span ext:qtip="{filename}">{filename}</span>'
				}, {
					header : "文件大小",
					align : "center",
					dataIndex : "size",
					width : 0.12,
					tpl : "{size:fileSize}"
				}, {
					header : "文件类型",
					align : "center",
					dataIndex : "type",
					width : 0.12
				}];
		if (this.isDownload) {
			B.push({
				header : "下载",
				align : "center",
				dataIndex : "fileid",
				width : 0.13,
				tpl : '<a href="com.zoomlion.hjsrm.frame.bclib.file.FileDownload.flow?fileid={fileid}" target="_blank" ><img src="frame/ui/css/icons/icons/downfile.png"></a>'
			})
		}
		
		if (this.isDelete) {
			B.push({
				header : "删除",
				align : "center",
				dataIndex : "fileid",
				width : 0.13,
				tpl : '<button onclick="delfile({fileid});" >删除</button>'
			})
		}
		return B
	},
	buildStore : function() {
		return new Ext.data.ArrayStore({
					fields : ["id", "fileid", "filename", "type", "size",
							"state", "percent", "filepath"]
				})
	},
	setPostParams : function(B) {
		Ext.apply(this.postParams, B)
	},
	buildFileMgr : function() {
		var B = this;
		Ext.applyIf(this.postParams, {
					savePath : "upload\\"
				});
		return this.fileMgr || new Ext.Window({
			width : 688,
			modal : true,
			height : 300,
			buttonAlign : "center",
			closeAction : "hide",
			layout : "fit",
			items : [{
				itemId : "uploadpanel",
				xtype : "uploadPanel",
				border : false,
				fileUpload : true,
				fileSize : 1024 * 20,
				uploadUrl : B.uploadUrl
						|| "com.zoomlion.hjsrm.frame.bclib.file.UploadFileBackId.flow",
				flashUrl : "frame/ui/jslib/extex/fileupload/swfupload.swf",
				filePostName : "uploadFile",
				fileTypes : this.fileTypes || "*.txt;*.xls;*.xlsx;*.doc;*.docx;*.pdf;*.rar;*.zip;*.jpg;*.png;*.bmp",
				postParams : this.postParams
			}],
			buttons : [{
						text : "关闭",
						handler : function() {
							B.fileMgr.hide()
						}
					}]
		})
	}
});
Ext.reg("attachmentlist", Ext.ex.AttachmentList);