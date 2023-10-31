/**
 * com.zoomlion.hjsrm.interfaces.TJkPrinttemplateMgr 套打模板管理的所有事件方法
 * 
 * @author Chenmin (mailto:chenmin@primeton.com)
 * @date 2012-11-5 - 上午03:56:17
 * @class com.zoomlion.hjsrm.TemplateMgr 套打模板管理的事件
 */
/**
 * com.zoomlion.hjsrm.interfaces.TJkPrinttemplateMgr 的初始化事件
 */
com.zoomlion.hjsrm.interfaces.TJkPrinttemplateMgr.prototype.initEvent = function() {
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
				this.listPanel.doQuery(vals);
			}, this);

	this.listPanel.mon(this.listPanel, 'update', function(gird, record) {
				this.editWin.show();
				this.editWin.loadData(record);
			}, this);
			
	//模板名称和编号唯一约束-->start
	this.editPanel = this.editWin.items.get(0);
	this.templateid = this.editWin.form.findField('templateid');
	this.templatename = this.editWin.form.findField('templatename');
	this.editPanel.mon(this.editPanel, 'beforeload', function(panel, vals) {
				this.templateid.originalValue = vals.templateid;
				this.templatename.originalValue = vals.templatename;
			}, this);
	//模板名称和编号唯一约束	-->end	
	
	//执行保存前，获得打印控件代码并且隐藏打印控件
	this.designPanel = this.designWin.items.get(0);
	this.designPanel.mon(this.designPanel, 'beforesave', function(panel, vals) {
		var ob = this.designPanel.form.findField("tJkPrinttemplate/template");
				var code = this.wp.get_code();
		ob.setValue(code);
		Ext.getCmp("designPanel").hide();
		 return true;
	}, this);
	
	//执行打印机控件的内容，如果模板为空自动生成内容
	this.createWebPrint = function(vals){
		var template = vals.template;
		var printparam = vals.printparam;
		var templatename = vals.templatename;
		var pps = printparam.split(',');
		var step = 30;
		if(template==null && pps.length>0 ){
			//如果第一次设计默认 根据参数名称自动插入 文本框
			if(vals.picturewidth!=null&&vals.pictureheight!=null){
				//如果有图片宽高，就初始化为相同画布,相同纸张
				this.wp.print_inita(0,0,vals.picturewidth+"mm",vals.pictureheight+"mm",templatename+"_"+vals.templateid);
				this.wp.set_print_pagesize(1,vals.picturewidth+"mm",vals.pictureheight+"mm","");
			}else{
				this.wp.print_init(templatename+"_"+vals.templateid);
			}
			var cols = -1;
			var maxRow = 10;
			var row = 0;
			for(var i = 0; i< pps.length ; i++){
				var cs = pps[i];
				if(i%maxRow == 0){
					cols++;
					row = 0;
				}else{
					row++;
				}
				this.wp.add_print_text(30+step*row,13+110*cols,100,20,cs);
			}
			//如果图片不为空，添加图片模板
			if(vals.picturename!=null){
				var path = vals.templatefolder + vals.picturename
				if(this.wp.checkContextPath())
					path = contextPath + path;
				this.wp.set_show_mode("BKIMG_IN_PREVIEW",true);
				this.wp.add_print_setup_bkimg("<img border='0' src='"+path+"'>");
				if(vals.picturewidth!=null)
					this.wp.set_show_mode("BKIMG_WIDTH",vals.picturewidth+"mm");
				if(vals.pictureheight!=null)
					this.wp.set_show_mode("BKIMG_HEIGHT",vals.pictureheight+"mm");
			}
		}else{
			this.wp.exec(template);
		}
	}
	//创建调用的js代码
	this.createJs = function(templateid,printparam){
		var jscode = "";
		jscode +='<js:load scriptPath="interfaces/print/common.js"/>//建议业务页面不要引用，请仅在框架jsp页面引用一次！';
		jscode +='\r\n';
		jscode +='<lpt:loadprinttpl tplId="'+templateid+'"/>';
		jscode +='\r\n';
		jscode +='var wp = new webPrint();//创建打印控件对象';
		jscode +='\r\n';
		jscode +='wp.init();//打印对象初始化';
		jscode +='\r\n';
		jscode +='var op = {};//创建要打印的数据对象，此对象应当由逻辑流动态生成JSON对象';
		jscode +='\r\n';
		jscode +='            //以下为程序手工生成JSON对象仅供演示';
		jscode +='\r\n';
		var pps = printparam.split(',');
		for(var i = 0; i< pps.length ; i++){
			var cs = pps[i];
			jscode +=('op.'+cs+'="'+cs+'的值";');
			jscode +='\r\n';
		}
		jscode +='create_print_object_'+templateid+'(wp.LODOP,op);//根据参数内容打印文件';
		jscode +='\r\n';
		jscode +='//create_print_init_'+templateid+'(wp.LODOP);//初始化批量打印,仅在批量打印时使用，[循环外使用]';
		jscode +='\r\n';
		jscode +='//add_print_object_'+templateid+'(wp.LODOP,op);//根据参数内容新增一页文档，形成多页文档，仅在批量打印时使用[循环内使用]';
		jscode +='\r\n';
		jscode +='wp.preview();//打印预览';
		jscode +='\r\n';
		jscode +='//wp.setup();//打印维护';
		jscode +='\r\n';
		jscode +='//wp.print();//直接打印';
		return jscode;
	}
	
	//设计加载数据完成后，初始化打印控件内容
	this.designPanel.mon(this.designPanel, 'afterload', function(panel, vals) {
		this.createWebPrint(vals);//执行打印机控件的内容，如果模板为空自动生成内容
		this.wp.set_show_mode("DESIGN_IN_BROWSE", 1);
		this.wp.set_show_mode("DESIGN_ENABLESS","1111111111110");//隐藏关闭按钮
		this.wp.set_show_mode("SETUP_ENABLESS","11111111000000");//隐藏关闭(叉)按钮
		this.wp.set_show_mode("HIDE_QBUTTIN_DESIGN",1);
		this.wp.design();
		 return true;
	}, this);
	
	//执行更新前，获得打印控件代码并且隐藏打印控件
	this.setupPanel = this.setupWin.items.get(0);
	this.setupPanel.mon(this.setupPanel, 'beforesave', function(panel, vals) {
		var ob = this.setupPanel.form.findField("tJkPrinttemplate/template");
				var code = this.wp.get_code();
		ob.setValue(code);
		Ext.getCmp("setupPanel").hide();
		 return true;
	}, this);
	//维护加载数据完成后，初始化打印控件内容
	this.setupPanel.mon(this.setupPanel, 'afterload', function(panel, vals) {
		this.createWebPrint(vals);//执行打印机控件的内容，如果模板为空自动生成内容
		this.wp.set_show_mode("SETUP_IN_BROWSE", 1);
		this.wp.set_show_mode("HIDE_QBUTTIN_SETUP",1);//隐藏关闭按钮
		this.wp.set_show_mode("SETUP_ENABLESS","11111111000000");//隐藏关闭(叉)按钮
		//this.wp.set_show_mode("HIDE_ABUTTIN_SETUP",1);//隐藏应用按钮
		this.wp.setup();
		 return true;
	}, this);
	
	//预览加载数据完成后，初始化打印控件内容
	this.previewPanel = this.previewWin.items.get(0);
	this.previewPanel.mon(this.previewPanel, 'afterload', function(panel, vals) {
		this.createWebPrint(vals);//执行打印机控件的内容，如果模板为空自动生成内容
		this.wp.set_show_mode("PREVIEW_IN_BROWSE",1);
		this.wp.set_show_mode("HIDE_PAPER_BOARD",1);
		this.wp.set_show_mode("HIDE_QBUTTIN_PREVIEW",1);//隐藏关闭按钮
		this.wp.set_show_mode("SETUP_ENABLESS","11111111000000");//隐藏关闭(叉)按钮
		this.wp.preview();
		var saveButtons = this.previewWin.buttons[0];
		saveButtons.hide();
		//创建调用代码到输入框
		var js = this.createJs(vals.templateid,vals.printparam);
		var ob = this.previewPanel.form.findField("tJkPrinttemplate/remark");
		ob.setValue(js);
		 return true;
	}, this);
	

}
/**
 * 添加模板事件
 */
com.zoomlion.hjsrm.interfaces.TJkPrinttemplateMgr.prototype.onAdd = function() {
	this.inputWin.show();
	var form = this.inputWin.items.get(0).getForm();
	form.reset();
};
/**
 * 删除模板事件
 */
com.zoomlion.hjsrm.interfaces.TJkPrinttemplateMgr.prototype.onDel = function() {
	this.listPanel.onDel();
}
/**
 * 修改模板事件
 */
com.zoomlion.hjsrm.interfaces.TJkPrinttemplateMgr.prototype.onEdit = function() {
	this.listPanel.onEdit();
}
/**
 * 设计模板事件
 */
com.zoomlion.hjsrm.interfaces.TJkPrinttemplateMgr.prototype.onDesign = function() {
	var rows = this.listPanel.getSelectionModel().getSelections();
	if (rows && rows.length != 0) {
		if (rows.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return;
		}
		else {
			var mk = new Ext.LoadMask(document.body, {
									msg : '后台正在操作，请稍候！',
									removeMask : true
								});
			mk.show();
			var row = rows[0];
			var wp = new webPrint();// 创建打印控件对象
			alert(wp);
			this.designWin.show();
			Ext.getCmp("designPanel").show();
			this.wp = wp;
			
			var param = 'entity/pkid=' + row.data.pkid;
			var result = Ext.ex.XMLHttpRequestEx.synchRequest("POST",
					'com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateMgr.getTJkPrinttemplate.biz.ext?'
							+ encodeURI(param));
			mk.hide();
			wp.initLODOP("design");
			var obj = Ext.decode(result);
			var vals = obj.data;
			
			this.createWebPrint(vals);//执行打印机控件的内容，如果模板为空自动生成内容
			this.wp.set_show_mode("DESIGN_IN_BROWSE", 1);
			this.wp.set_show_mode("DESIGN_ENABLESS","1111111111110");//隐藏关闭按钮
			this.wp.set_show_mode("SETUP_ENABLESS","11111111000000");//隐藏关闭(叉)按钮
			this.wp.set_show_mode("HIDE_QBUTTIN_DESIGN",1);
			this.wp.design();
			
			//this.designWin.loadData(row);
			this.designPanel.form.loadRecord(new Ext.data.Record(vals));
		}
	}
	else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
	}

}
/**
 * 维护模板事件
 */
com.zoomlion.hjsrm.interfaces.TJkPrinttemplateMgr.prototype.onSetup = function() {
	var rows = this.listPanel.getSelectionModel().getSelections();
	if (rows && rows.length != 0) {
		if (rows.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return;
		}
		else {
			var mk = new Ext.LoadMask(document.body, {
									msg : '后台正在操作，请稍候！',
									removeMask : true
								});
			mk.show();
			var row = rows[0];
			var wp = new webPrint();// 创建打印控件对象
			this.setupWin.show();
			Ext.getCmp("setupPanel").show();
			this.wp = wp;
			var param = 'entity/pkid=' + row.data.pkid;
			var result = Ext.ex.XMLHttpRequestEx.synchRequest("POST",
					'com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateMgr.getTJkPrinttemplate.biz.ext?'
							+ encodeURI(param));
			mk.hide();
			wp.initLODOP("setup");
			var obj = Ext.decode(result);
			var vals = obj.data;
			
			this.createWebPrint(vals);//执行打印机控件的内容，如果模板为空自动生成内容
			this.wp.set_show_mode("SETUP_IN_BROWSE", 1);
			this.wp.set_show_mode("HIDE_QBUTTIN_SETUP",1);//隐藏关闭按钮
			this.wp.set_show_mode("SETUP_ENABLESS","11111111000000");//隐藏关闭(叉)按钮
			//this.wp.set_show_mode("HIDE_ABUTTIN_SETUP",1);//隐藏应用按钮
			this.wp.setup();
			//this.setupWin.loadData(row);
			this.setupPanel.form.loadRecord(new Ext.data.Record(vals));
		}
	}
	else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
	}

}
/**
 * 预览模板事件
 */
com.zoomlion.hjsrm.interfaces.TJkPrinttemplateMgr.prototype.onPreview = function() {
	var rows = this.listPanel.getSelectionModel().getSelections();
	if (rows && rows.length != 0) {
		if (rows.length > 1) {
			Ext.Msg.alert("系统提示", "仅允许选择一条数据行!");
			return;
		}
		else {
			var mk = new Ext.LoadMask(document.body, {
									msg : '后台正在操作，请稍候！',
									removeMask : true
								});
			mk.show();
			var row = rows[0];
			var wp = new webPrint();// 创建打印控件对象
			this.previewWin.show();
			Ext.getCmp("previewPanel").show();
			this.wp = wp;
			var param = 'entity/pkid=' + row.data.pkid;
			var result = Ext.ex.XMLHttpRequestEx.synchRequest("POST",
					'com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateMgr.getTJkPrinttemplate.biz.ext?'
							+ encodeURI(param));
			mk.hide();
			wp.initLODOP("preview");
			var obj = Ext.decode(result);
			var vals = obj.data;
			
			this.createWebPrint(vals);//执行打印机控件的内容，如果模板为空自动生成内容
			this.wp.set_show_mode("PREVIEW_IN_BROWSE",1);
			this.wp.set_show_mode("HIDE_PAPER_BOARD",1);
			this.wp.set_show_mode("HIDE_QBUTTIN_PREVIEW",1);//隐藏关闭按钮
			this.wp.set_show_mode("SETUP_ENABLESS","11111111000000");//隐藏关闭(叉)按钮
			this.wp.preview();
			var saveButtons = this.previewWin.buttons[0];
			saveButtons.hide();
			//创建调用代码到输入框
			var js = this.createJs(vals.templateid,vals.printparam);
			var ob = this.previewPanel.form.findField("tJkPrinttemplate/remark");
			ob.setValue(js);
			
			//this.previewWin.loadData(row);
		}
	}
	else {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
	}

}


com.zoomlion.hjsrm.interfaces.TJkPrinttemplateMgr.prototype.onExport = function() {
	Ext.Msg.confirm("系统提示", "您确定要进行备份吗?", function(btnText) {
			if (btnText == "yes") {				
				var mk = new Ext.LoadMask(Ext.getBody(), {
								msg : '后台正在操作，请稍候！',
								removeMask : true
							});	
				mk.show();
				Ext.Ajax.request({
	            url:'com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateMgr.exportDB.biz.ext',
//	            jsonData:{
//	             	queryby:queryby,
//	             	ncname:ncname
//	             },
	             success:function(resp){
	                var ret = Ext.decode(resp.responseText);
	                if(ret.success){
	                	mk.hide();
	                	Ext.Msg.alert("系统提示", ret.msg);	
	                }else{
	                	mk.hide();
	                	Ext.Msg.alert('备份失败',ret.exception.message,this);
	                }
		             },
		             failure: function() { mk.hide(); } 
		         });
			}
		}, this);
}

com.zoomlion.hjsrm.interfaces.TJkPrinttemplateMgr.prototype.onImport = function() {
	var temp ="请在操作前确认模板备份文件已经上传到服务器端，并且文件路径在<br />"+temp_file;
	Ext.Msg.confirm("系统提示", "您确定要进行还原吗?<br />"+temp+"<br />此操作将不可逆，请谨慎操作！", function(btnText) {
			if (btnText == "yes") {				
				var mk = new Ext.LoadMask(Ext.getBody(), {
								msg : '后台正在操作，请稍候！',
								removeMask : true
							});	
				mk.show();
				Ext.Ajax.request({
	            url:'com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateMgr.importDB.biz.ext',
//	            jsonData:{
//	             	queryby:queryby,
//	             	ncname:ncname
//	             },
	             success:function(resp){
	                var ret = Ext.decode(resp.responseText);
	                if(ret.success){
	                	mk.hide();
	                	Ext.Msg.alert("系统提示", ret.msg);	
	                }else{
	                	mk.hide();
	                	Ext.Msg.alert('还原失败',ret.exception.message,this);
	                }
		             },
		             failure: function() { mk.hide(); } 
		         });
			}
		}, this);
	
}
 