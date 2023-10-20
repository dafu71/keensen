/**
 * com.zoomlion.hjsrm.interfaces.TJkPrinttemplateMgr 套打模板管理的所有界面构造
 *$Id$
 * @author Chenmin (mailto:chenmin@primeton.com)
 * @date 2012-11-5 - 上午03:54:35
 * @class  com.zoomlion.hjsrm.interfaces.TJkPrinttemplateMgr 套打模板管理的界面
 */
com.zoomlion.hjsrm.interfaces.TJkPrinttemplateMgr = function() {
	this.initPanel = function() {
		//网页关闭后重新打开，原始对象未释放。
		var wp = new webPrint();// 创建打印控件对象
		wp.dropLODOP("design");//移除有可能重复的打印控件对象
		wp.dropLODOP("setup");//移除有可能重复的打印控件对象
		wp.dropLODOP("preview");//移除有可能重复的打印控件对象
		
		this.createQueryPanel();//查询面板
		this.createListPanel();//列表面板
		this.buildInputWin();//新增面板
		this.buildEditWin();//修改面板
		this.buildDesignWin();//设计面板
		this.buildSetupWin();//维护面板
		this.buildPreviewWin();//预览面板
		return new Ext.fn.fnLayOut({
					layout		: 'ns',
					border		: false,
					renderTo	: "TJkPrinttemplateDiv",
					panels		: [
						this.queryPanel, this.listPanel
					]
				});
	};
	/**
	 * 构建查询窗口
	 */
	this.createQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height	: 110,
					title	: "套打模板查询",
					columns	: '2',
					fields	: [

						{
							xtype		: "textfield",
							name		: "criteria/_expr[1]/templateid",
							fieldLabel	: "模板编号"
						}, {
							xtype		: "textfield",
							name		: "criteria/_expr[2]/templatename",
							fieldLabel	: "模板名称"
						}, {
							xtype	: 'hidden',
							name	: "criteria/_expr[1]/_op",
							value	: "="
						}, {
							xtype	: 'hidden',
							name	: "criteria/_expr[2]/_op",
							value	: "like"
						}, {
							xtype	: 'hidden',
							name	: "criteria/_expr[2]/_likeRule",
							value	: "all"
						}

					]
				});
	}

	/**
	 * 构建列表
	 */
	this.createListPanel = function() {
		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect	: true
				});
		this.listPanel = new Ext.fn.ListPanel({
					title	: '套打模板列表',
					delUrl	: "com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateMgr.deleteTJkPrinttemplate.biz.ext",
					sm		: selModel,
					tbar	: [
						{
							text	: '新增',
							scope	: this,
							ref		: '../addNewOrgBtn',
							iconCls	: 'icon-application_add',
							handler	: this.onAdd
						}, '-', {
							text	: '删除',
							scope	: this,
							iconCls	: 'icon-application_delete',
							handler	: this.onDel
						}, '-', {
							text	: '修改',
							scope	: this,
							iconCls	: 'icon-application_edit',
							handler	: this.onEdit
						}, '-', {
								text : '设计',
								scope : this,
								iconCls : 'icon-application_form_edit',
								handler : this.onDesign
						}, '-',{
								text : '维护',
								scope : this,
								iconCls : 'icon-application_form',
								handler : this.onSetup
						}, '-',{
								text : '预览',
								scope : this,
								iconCls : 'icon-application_form_magnify',
								handler : this.onPreview
						}, '-',{
								text : '备份',
								scope : this,
								iconCls : 'icon-database_export',
								handler : this.onExport
						}, '-',{
								text : '还原',
								scope : this,
								iconCls : 'icon-database_import',
								handler : this.onImport
						}
					],
					columns	: [
						new Ext.grid.RowNumberer(), selModel,
						{
							header		: 'pkid',
							hidden		: true,
							dataIndex	: 'pkid'
						},
						{
							header		: '模板编号',
							dataIndex	: 'templateid'
						}, {
							header		: '模板名称',
							dataIndex	: 'templatename'
						}, {
							header		: '打印参数',
							dataIndex	: 'printparam'
						}, {
							header		: '创建者',
							dataIndex	: 'createby'
						}, {
							sortable:true,
							header		: '创建时间',
							dataIndex	: 'createtime'
						}, {
							header		: '修改者',
							dataIndex	: 'modifyby'
						}, {
							sortable:true,
							header		: '更新时间',
							dataIndex	: 'updatetime'
						}
					],
					 autoExpandColumn :'5',//打印参数自动占满
					store	: new Ext.data.JsonStore({
								url				: "com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateMgr.queryTJkPrinttemplate.biz.ext",
								root			: "tJkPrinttemplates",
								totalProperty	: 'totalCount',
								fields			: [
									{
										name	: 'pkid'
									}, {
										name	: 'templateid'
									}, {
										name	: 'templatename'
									}, {
										name	: 'templatefolder'
									}, {
										name	: 'printparam'
									}, {
										name	: 'picturename'
									}, {
										name	: 'picturewidth'
									}, {
										name	: 'pictureheight'
									}, {
										name	: 'createtime'
									}, {
										name	: 'updatetime'
									}, {
										name	: 'createby'
									}, {
										name	: 'modifyby'
									}, {
										name	: 'remark'
									}, {
										name	: 'template'
									}
								]
								 
							})
				});
	}
	/**
	 * 构建新增窗口
	 */
	this.buildInputWin = function() {
		var wp = new webPrint();// 创建打印控件对象
		var defaultPath = '/resources/print/模块名称文件夹'
//		if(wp.checkContextPath())
//			defaultPath = contextPath + defaultPath;
			
		this.inputWin = new Ext.fn.FormWindow({
					title	: '套打模板录入',
					height	: 250,
					width	: 900,
					items	: [
						{
							xtype	: 'inputpanel',
							pgrid	: this.listPanel,
							columns	: 2,
							saveUrl	: "com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateMgr.addTJkPrinttemplate.biz.ext",
							fields	: [{
									xtype		: "textfield",
									name		: "tJkPrinttemplate/templateid",
									fieldLabel	: "模板编号",
									tablename:'t_jk_printtemplate',
									colname : 'templateid',
									allowBlank : false,
									maxLength	:20,
									blankText : "模板编号不能为空",
									validator : function(val) {
										// 唯一验证通过
										if (Ext.form.VTypes.unique(val, this)) {
											return true;
										}
										return '该编码已存在,请更换';
									},
									anchor		: '90%'
								}, {
									xtype		: "textfield",
									name		: "tJkPrinttemplate/templatename",
									fieldLabel	: "模板名称",
									allowBlank : false,
									maxLength	:20,
									blankText : "模板名称不能为空",
									anchor		: '90%'
								}, {
									xtype		: "textfield",
									name		: "tJkPrinttemplate/templatefolder",
									fieldLabel	: "模板文件夹",
									emptyText:defaultPath,
									maxLength	:100,
									colspan : 2,
									anchor		: '90%'
								}, {
									xtype		: "textfield",
									name		: "tJkPrinttemplate/picturename",
									fieldLabel	: "图片名称",
									maxLength	:100,
									colspan : 2,
									anchor		: '90%'
								}, {
									xtype		: "numberfield",
									allowDecimals : false,
									name		: "tJkPrinttemplate/picturewidth",
									fieldLabel	: "图片宽度(mm)",
									maxLength	:5,
									anchor		: '90%'
								}, {
									xtype		: "numberfield",
									allowDecimals : false,
									name		: "tJkPrinttemplate/pictureheight",
									fieldLabel	: "图片高度(mm)",
									maxLength	:5,
									anchor		: '90%'
								}, {
									xtype		: "textarea",
									name		: "tJkPrinttemplate/printparam",
									fieldLabel	: "打印参数",
									allowBlank : false,
									emptyText:"字母开头可以包含数字和下划线，以英文“,”分割并且“,”不能结尾。符合JavaScript变量命名规范。如“param1,param2”",
									blankText : "打印参数不能为空",
									colspan : 2,
									maxLength	:1000,
									validationEvent:'blur',
									regex :  /^([A-Za-z]+[A-Za-z_\d]*,)*([A-Za-z]+[A-Za-z_\d]*)+$/,
									regexText :'字母开头可以包含数字和下划线，以英文“,”分割并且“,”不能结尾。符合JavaScript变量命名规范。如“param1,param2”',
									anchor		: '90%'
								}, {
									xtype		: "hidden",
									name		: "tJkPrinttemplate/remark",
									fieldLabel	: "备注",
									colspan : 2,
									anchor		: '90%'
								}
							]
						}
					
					
					
					]

				});
	}
	/**
	 * 构件套打模板修改面板
	 */
	this.buildEditWin = function() {
		this.editWin = new Ext.fn.FormWindow({
					title	: "套打模板修改",
					height	: 250,
					width	: 900,
					items	: [
						{
							xtype	: 'editpanel',
							pgrid	: this.listPanel,
							loadUrl	: "com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateMgr.getTJkPrinttemplate.biz.ext",
							saveUrl	: "com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateMgr.updateTJkPrinttemplate.biz.ext",
							columns	: 2,
							fields	: [
								{
									xtype		: "hidden",
									name		: "tJkPrinttemplate/pkid",
									fieldLabel	: "ID",
									dataIndex	: "pkid",
									anchor		: '90%'
								}, {
									xtype		: "textfield",
									name		: "tJkPrinttemplate/templateid",
									fieldLabel	: "模板编号",
									dataIndex	: "templateid",
									tablename:'t_jk_printtemplate',
									colname : 'templateid',
									allowBlank : false,
									readOnly:true,
									blankText : "模板编号不能为空",
									validationEvent : 'blur',   
									validator : function(val) {
										// 唯一验证通过
										if (this.originalValue == val || Ext.form.VTypes.unique(val, this)) {
											return true;
										}
										return '该编码已存在,请更换';
									},
									anchor		: '90%'
								}, {
									xtype		: "textfield",
									name		: "tJkPrinttemplate/templatename",
									fieldLabel	: "模板名称",
									dataIndex	: "templatename",
									allowBlank : false,
									maxLength	:20,
									blankText : "模板名称不能为空",
									anchor		: '90%'
								}, {
									xtype		: "textfield",
									name		: "tJkPrinttemplate/templatefolder",
									fieldLabel	: "模板文件夹",
									maxLength	:100,
									dataIndex	: "templatefolder",
									colspan : 2,
									anchor		: '90%'
								}, {
									xtype		: "textfield",
									name		: "tJkPrinttemplate/picturename",
									fieldLabel	: "图片名称",
									dataIndex	: "picturename",
									maxLength	:100,
									colspan : 2,
									anchor		: '90%'
								}, {
									xtype		: "numberfield",
									allowDecimals : false,
									name		: "tJkPrinttemplate/picturewidth",
									fieldLabel	: "图片宽度(mm)",
									dataIndex	: "picturewidth",
									maxLength	:5,
									anchor		: '90%'
								}, {
									xtype		: "numberfield",
									allowDecimals : false,
									name		: "tJkPrinttemplate/pictureheight",
									fieldLabel	: "图片高度(mm)",
									dataIndex	: "pictureheight",
									maxLength	:5,
									anchor		: '90%'
								}, {
									xtype		: "textarea",
									name		: "tJkPrinttemplate/printparam",
									fieldLabel	: "打印参数",
									dataIndex	: "printparam",
									allowBlank : false,
									validationEvent:'blur',
									blankText : "打印参数不能为空",
									emptyText:"字母开头可以包含数字和下划线，以英文“,”分割并且“，”不能结尾。符合JavaScript变量命名规范。如“param1,param2”",
									regex :  /^([A-Za-z]+[A-Za-z_\d]*,)*([A-Za-z]+[A-Za-z_\d]*)+$/, 
									regexText :'字母开头可以包含数字和下划线，以英文“,”分割并且“,”不能结尾。符合JavaScript变量命名规范。如“param1,param2”',
									maxLength	:1000,
									colspan : 2,
									anchor		: '90%'
								}, {
									xtype		: "hidden",
									name		: "tJkPrinttemplate/template",
									fieldLabel	: "模板代码",
									dataIndex	: "template",
									colspan : 2,
									anchor		: '90%'
								}, {
									xtype		: "hidden",
									name		: "tJkPrinttemplate/remark",
									fieldLabel	: "备注",
									dataIndex	: "remark",
									colspan : 2,
									anchor		: '90%'
								}
							]
						}
					]

				});
	}
	/**
	 * 构件套打模板设计面板
	 */
	this.buildDesignWin = function() {
		this.designWin = new Ext.fn.FormWindow({
					title	: "套打模板设计",
					height	: 600,
					width	: 900,
					maximizable : false,//禁止最大化
					minimizable : false,
					draggable:false,// 禁用拖动 
					collapsible :false, // 禁用收缩
					resizable:false,// 禁用改变大小
					items	: [
						{
							xtype	: 'editpanel',
							pgrid	: this.listPanel,
							loadUrl	: "com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateMgr.getTJkPrinttemplate.biz.ext",
							saveUrl	: "com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateMgr.updateTJkPrinttemplate.biz.ext",
							columns	: 2,
							fields	: [
								{
									xtype:'panel',
									id:'designPanel',
									html:this.getLodopObjectHtml("design"),
									height	: 450,
									colspan : 2
							},
								{
									xtype		: "hidden",
									name		: "tJkPrinttemplate/pkid",
									fieldLabel	: "ID",
									dataIndex	: "pkid",
									anchor		: '90%'
								}, {
								 	xtype		: "hidden",
									name		: "tJkPrinttemplate/templateid",
									fieldLabel	: "templateid",
									dataIndex	: "templateid",
									anchor		: '90%'
								}, { 
									xtype		: "textarea",
									name		: "tJkPrinttemplate/printparam",
									fieldLabel	: "参数",
									dataIndex	: "printparam",
									allowBlank : false,
									readOnly:true,
									blankText : "打印参数不能为空",
									colspan : 2,
									anchor		: '100%'
								}, {
									xtype		: "hidden",
									name		: "tJkPrinttemplate/template",
									fieldLabel	: "模板",
									dataIndex	: "template",
									colspan : 2,
									anchor		: '90%'
								}, {
									xtype		: "hidden",
									name		: "tJkPrinttemplate/picturename",
									dataIndex	: "picturename",
									fieldLabel	: "图片名称",
									maxLength	:100,
									colspan : 2,
									anchor		: '90%'
								}
							]
						}
					]

				});
	}
	/**
	 * 构件套打模板维护面板
	 */
	this.buildSetupWin = function() {
		this.setupWin = new Ext.fn.FormWindow({
					title	: "套打模板维护",
					height	: 600,
					width	: 900,
					maximizable : false,//禁止最大化
					minimizable : false,
					draggable:false,// 禁用拖动 
					collapsible :false, // 禁用收缩
					resizable:false,// 禁用改变大小
					items	: [
						{
							xtype	: 'editpanel',
							pgrid	: this.listPanel,
							loadUrl	: "com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateMgr.getTJkPrinttemplate.biz.ext",
							saveUrl	: "com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateMgr.updateTJkPrinttemplate.biz.ext",
							columns	: 2,
							fields	: [
								{
									xtype:'panel',
									id:'setupPanel',
									html:this.getLodopObjectHtml("setup"),
									height	: 450,
									colspan : 2
							},
								{
									xtype		: "hidden",
									name		: "tJkPrinttemplate/pkid",
									fieldLabel	: "ID",
									dataIndex	: "pkid",
									anchor		: '90%'
								}, {
									xtype		: "hidden",
									name		: "tJkPrinttemplate/templateid",
									fieldLabel	: "templateid",
									dataIndex	: "templateid",
									anchor		: '90%'
								}, { 
									xtype		: "textarea",
									name		: "tJkPrinttemplate/printparam",
									fieldLabel	: "参数",
									dataIndex	: "printparam",
									allowBlank : false,
									blankText : "打印参数不能为空",
									readOnly:true,
									colspan : 2,
									anchor		: '100%'
								}, {
									xtype		: "hidden",
									name		: "tJkPrinttemplate/template",
									fieldLabel	: "模板",
									dataIndex	: "template",
									colspan : 2,
									anchor		: '90%'
								}, {
									xtype		: "hidden",
									name		: "tJkPrinttemplate/picturename",
									dataIndex	: "picturename",
									fieldLabel	: "图片名称",
									maxLength	:100,
									colspan : 2,
									anchor		: '90%'
								}
							]
						}
					]

				});
	}
	
	/**
	 * 构件套打模板预览面板
	 */
	this.buildPreviewWin = function() {
		this.previewWin = new Ext.fn.FormWindow({
					title	: "套打模板预览",
					height	: 600,
					width	: 900,
					maximizable : false,//禁止最大化
					minimizable : false,
					draggable:false,// 禁用拖动 
					collapsible :false, // 禁用收缩
					resizable:false,// 禁用改变大小
					items	: [
						{
							xtype	: 'editpanel',
							pgrid	: this.listPanel,
							loadUrl	: "com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateMgr.getTJkPrinttemplate.biz.ext",
							saveUrl	: "com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateMgr.updateTJkPrinttemplate.biz.ext",
							columns	: 2,
							fields	: [
								{
									xtype:'panel',
									id:'previewPanel',
									html:this.getLodopObjectHtml("preview"),
									height	: 450,
									colspan : 2
							},
								{
									xtype		: "hidden",
									name		: "tJkPrinttemplate/pkid",
									fieldLabel	: "ID",
									dataIndex	: "pkid",
									anchor		: '90%'
								}, {
								 
									xtype		: "textarea",
									name		: "tJkPrinttemplate/remark",
									fieldLabel	: "代码",
									dataIndex	: "remark",
									colspan : 2,
									anchor		: '100%'
								}, {
									xtype		: "hidden",
									name		: "tJkPrinttemplate/template",
									fieldLabel	: "模板",
									dataIndex	: "template",
									colspan : 2,
									anchor		: '90%'
								}
							]
						}
					]

				});
	}
	
	/**
	 * 返回打印机控件的HTML代码引入方法
	 * @argument lodopName：打印控件名称前缀，无参数为“LODOP” 
	 */
	this.getLodopObjectHtml = function(lodopName){
		if(lodopName=='undefined'||lodopName==null){
			lodopName = "LODOP";
		}
		var html = "";
		html += '<object id="'+lodopName+'_OB" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=870 height=450> ';
		html += '	<embed id="'+lodopName+'_EM" type="application/x-print-lodop" width=840 height=450></embed>';
		html += '</object>';
		return html;
	}
}
