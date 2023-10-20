com.zoomlion.hjsrm.settleaccounts.PrintMgr = function() {
	this.initPanel = function() {
		this.werksname="";
		this.initQueryPanel();

		this.initListPanel();

		this.initPopWindow();

		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					renderTo : 'accountsprintMgr',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		this.queryPanel = new Ext.fn.QueryPanel({
					height : Ext.isEmpty(lifnr) ? 180 : 150,
					// region : 'north',
					columns : 2,
					border : true,
					collapsible : true,
					titleCollapse : false,
					title : '【 查询凭证 】',
					fields : [{
								xtype : 'companycombobox',
								defaultValue : '3000',
								value : '3000',
								allowBlank : false,
								anchor : '95%',
								ref : '../bukrs',
								hiddenName : 'condition/bukrs',
								fieldLabel : '公司'
							}, {
								xtype : 'factorycombobox',
								//defaultValue : '3000',
								//value : '3000',
								allowBlank : false,
								anchor : '95%',
								ref : '../werks',
								autoload:false,
								hiddenName : 'condition/werks',
								fieldLabel : '工厂'
							}, {
								xtype : 'textfield',
								name : 'condition/lifnr2',
								anchor : '95%',
								hidden : Ext.isEmpty(lifnr) ? false : true,
								colspan : 1,
								fieldLabel : '供应商'
							}, {
								xtype : 'textfield',
								name : 'condition/name1',
								anchor : '95%',
								colspan : 1,
								hidden : Ext.isEmpty(lifnr) ? false : true,
								fieldLabel : '供应商名称'
							}, {
								xtype : 'textfield',
								name : 'condition/jspz',
								anchor : '95%',
								colspan : 1,
								fieldLabel : '结算凭证号'
							}, {
								xtype : "dateregion",
								colspan : 1,
								anchor : '95%',
								nameArray : ['condition/datumstartdate',
										'condition/datumendate'],
								fieldLabel : "凭证创建日期",
								format : "Y-m-d"
							}, {
								xtype : 'hidden',
								name : 'condition/statu',
								value : 1
							}]
				});
	}

	this.initListPanel = function() {
		this.selModel = this.selModel || new Ext.grid.CheckboxSelectionModel({
				// header : '',
				// singleSelect : true
				});
		this.listPanel = new Ext.fn.ListPanel({
			title : '【 查询列表 】',
			hsPage : true,
			selModel : this.selModel,
			// region : 'center',
			delUrl : '...',
			tbar : [{
						text : '查看',
						scope : this,
						ref : '../btnView',
						iconCls : 'icon-application_lightning',
						handler : this.onView
					}],
			autoExpandColumn : '4',
			columns : [new Ext.grid.RowNumberer(), this.selModel, {
						header : '供应商编码',
						dataIndex : 'lifnr'
					}, {
						header : '供应商名称',
						dataIndex : 'name1'
					}, {
						header : '结算凭证号',
						dataIndex : 'jspz'
					}, {
						header : '结算凭证日期',
						dataIndex : 'datum'
					}, {
						header : '结算总金额',
						dataIndex : 'jsje'
					}, {
						header : '税额',
						dataIndex : 'tax'
					}, {
						header : '返利总金额',
						dataIndex : 'flje'
					}, {
						header : '运费总金额',
						dataIndex : 'yfje'
					}, {
						header : '其他扣款总金额',
						dataIndex : 'qtkkje'
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.settleaccounts.accounts.queryUnConfirm.biz.ext',
				root : 'data',
				// autoLoad : true,
				totalProperty : 'totalCount',
				fields : [{
							name : 'lifnr'
						}, {
							name : 'name1'
						}, {
							name : 'jspz'
						}, {
							name : 'datum'
						}, {
							name : 'tax'
						}, {
							name : 'flje'
						}, {
							name : 'yfje'
						}, {
							name : 'qtkkje'
						}, {
							name : 'mjahr'
						}, {
							name : 'jsje'
						}, {
							name : 'statu'
						}]
			})
		});
	}

	this.initPopWindow = function() {

		this.printStore = this.printStore || new Ext.data.ArrayStore({
					fields : ['jspz']
				});
		this.combo = new Ext.form.ComboBox({
					store : this.printStore,
					displayField : 'jspz',
					valueField : 'jspz',
					typeAhead : true,
					editable : false,
					mode : 'local',
					forceSelection : true,
					anchor : '95%',
					triggerAction : 'all',
					emptyText : '--请选择--',
					hiddenName : 'jspz',
					fieldLabel : '结算单号：',
					selectOnFocus : true
				});

		this.popPanel = this.popPanel || new Ext.Panel({
			// id : "mypanel",

			frame : true,
			autoScroll : true,
			renderTo : Ext.getBody()
				// title : "查看"

			});
		this.tp1 = new Ext.XTemplate(
				'<table width="100%"  border="0" cellpadding="0" cellspacing="0" align="center" style="font-size:12px">',
				'<tbody><tpl for="head"><tr><td colspan="20" align="center"><font style="font-family: \'Zurich Bold\',sans-serif;font-weight:Bold;font-size: 18 ">{butxt}</font></td></tr>',
				'<tr><td colspan="20" align="center"><font style="font-family: \'Zurich Bold\',sans-serif;font-weight:Bold;font-size: 18 ">采购结算单</font></td></tr>',
				'<tr><td colspan="10" align="left" style="border-right: 0px;border-bottom: 0px;border-top: 1px solid #000000;border-left: 1px solid #000000;">&nbsp;&nbsp;供应商：{lifnr}&nbsp;&nbsp;{name1}</td><td colspan="10" align="left" style="border-left: 0px;border-bottom: 0px;border-top: 1px solid #000000;border-right: 1px solid #000000;">结算单号：{jspz}</td></tr>',
				'<tr><td colspan="10" align="left" style="border-left: 1px solid #000000;">&nbsp;&nbsp;联系人：{zname}</td><td colspan="10" align="left" style="border-right: 1px solid #000000;">采购单位：{werksname1}&nbsp;/&nbsp;{ekotx}</td></tr>',
				'<tr><td colspan="10" align="left"style="border-right: 0px;border-top: 0px;border-bottom: 0px ;border-left: 1px solid #000000;">&nbsp;&nbsp;联系电话：{zptel}</td><td colspan="10" align="left" style="border-left: 0px;border-top: 0px;border-bottom: 0px;border-right: 1px solid #000000;">结算员：{tranuname}</td></tr>',
				'<tr><td colspan="6" align="left"style="border: 1px solid #000000;">&nbsp;&nbsp;返利总金额：{flje}</td><td colspan="7" align="left" style="border: 1px solid #000000; border-left: 0px; border-right: 0px;">&nbsp;&nbsp;运费总金额：{yfje}</td><td colspan="7" align="left" style="border: 1px solid #000000;">&nbsp;&nbsp;其他扣款总金额：{qtkkje}</td></tr>',
				'<tr><td colspan="6" align="left"style="border: 1px solid #000000;  border-top: 0px;">&nbsp;&nbsp;单行扣款总金额：{zcdf}</td><td colspan="7" align="left" style="border: 1px solid #000000;  border-top: 0px;border-left: 0px; border-right: 0px;">&nbsp;&nbsp;税率：{mwskz}&nbsp;&nbsp;{taxrt}</td><td colspan="7" align="left" style="border: 1px solid #000000;  border-top: 0px;">&nbsp;&nbsp;税额：{tax}</td></tr>',
				'<tr><td colspan="6" align="left"style="border: 1px solid #000000;  border-top: 0px ;">&nbsp;&nbsp;应付款合计：{jsje}</td><td colspan="7" align="left" style="border: 1px solid #000000; border-top: 0px;border-left: 0px; border-right: 0px;">&nbsp;&nbsp;货币：{waers}</td><td colspan="7" align="left" style="border: 1px solid #000000; border-top: 0px">&nbsp;&nbsp;大写：{daxie}</td></tr>',
				'</tpl>',
				'<tr><td align="center" style="border: 1px solid #000000; border-top: 0px;">序</td><td align="center" style="border: 1px solid #000000; border-top: 0px;border-left: 0px; border-right: 0px;">物料凭证号</td>',
				'<td align="center" style="border: 1px solid #000000; border-top: 0px;">行号</td>',
				'<td align="center" width="80px" style="border: 1px solid #000000; border-top: 0px;border-left: 0px; border-right: 0px;">过账日期</td>',
				'<td align="center" style="border: 1px solid #000000; border-top: 0px;">物料编码</td>',
				'<td align="center" style="border: 1px solid #000000; border-top: 0px;border-left: 0px; border-right: 0px;">物料描述</td>',
				'<td align="center" style="border: 1px solid #000000; border-top: 0px;">采购订单</td>',
				'<td align="center" style="border: 1px solid #000000; border-top: 0px;border-left: 0px; border-right: 0px;">结算单价</td>',
				'<td align="center" style="border: 1px solid #000000; border-top: 0px;">结算价格单位</td>',
				'<td align="center" style="border: 1px solid #000000; border-top: 0px;border-left: 0px; border-right: 0px;">是否与合同价一致</td>',
				'<td align="center" style="border: 1px solid #000000; border-top: 0px;">结算数量</td>',
				'<td align="center" style="border: 1px solid #000000; border-top: 0px;border-left: 0px; border-right: 0px;">单位</td>',				
				'<td align="center" colspan=3 style="border: 1px solid #000000; border-top: 0px;">底盘VN码</td>',
				'<td align="center" style="border: 1px solid #000000; border-top: 0px;border-left: 0px; border-right: 0px;">单行扣款</td>',
				'<td align="center" style="border: 1px solid #000000; border-top: 0px;">结算金额</td>',
				'<td align="center" style="border: 1px solid #000000; border-top: 0px;border-left: 0px; border-right: 0px;">行税额</td>',
				'<td align="center" style="border: 1px solid #000000; border-top: 0px;">借/贷</td>',
				'<td align="center" style="border: 1px solid #000000; border-top: 0px;border-left: 0px;">备注</td>',
				'</tr><tpl for="list"><tr><td align="center" style="line-height: 50px;border: 1px solid #000000;border-top: 0px;">{jspzh}</td><td align="center" style="border: 1px solid #000000; border-left: 0px; border-right: 0px;border-top: 0px;">{mblnr}</td>',
				'<td align="center" style="border: 1px solid #000000;border-top: 0px;">{zeile}</td>',
				'<td align="center" style="border: 1px solid #000000; border-left: 0px; border-right: 0px;border-top: 0px;">{budat}</td>',
				'<td align="center" style="border: 1px solid #000000;border-top: 0px;">{matnr}</td>',
				'<td align="center" style="border: 1px solid #000000; border-left: 0px; border-right: 0px;border-top: 0px;">{txz01}</td>',
				'<td align="center" style="border: 1px solid #000000;border-top: 0px;">{ebeln}-{ebelp}</td>',
				'<td align="center" style="border: 1px solid #000000; border-left: 0px; border-right: 0px;border-top: 0px;">{jsdj}</td>',
				'<td align="center" style="border: 1px solid #000000;border-top: 0px;">{jsdw}</td>',
				'<td align="center" style="border: 1px solid #000000; border-left: 0px; border-right: 0px;border-top: 0px;">{flag_htj}</td>',
				'<td align="center" style="border: 1px solid #000000;border-top: 0px;">{djssl}</td>',
				'<td align="center" style="border: 1px solid #000000; border-left: 0px; border-right: 0px;border-top: 0px;">{meins}</td>',
				'<td align="center" colspan=3 style="border: 1px solid #000000;border-top: 0px;">{vnbm}</td>',
				'<td align="center" style="border: 1px solid #000000; border-left: 0px; border-right: 0px;border-top: 0px;">{zcdf}</td>',
				'<td align="center" style="border: 1px solid #000000;border-top: 0px;">{hjsje}</td>',
				'<td align="center" style="border: 1px solid #000000; border-left: 0px; border-right: 0px;border-top: 0px;">{hse}</td>',
				'<td align="center" style="border: 1px solid #000000;border-top: 0px;">{shkzg}</td>',
				'<td align="center" style="border: 1px solid #000000; border-left: 0px; border-top: 0px;">{ztext}</td>',
				'</tr></tpl></tbody>',
				'<tfoot><tr><td colspan="6" align="left">&nbsp;&nbsp;打印日期：{printdate}</td><td colspan="3" align="left">&nbsp;&nbsp;结算单号：{jsdh}</td><td colspan="2" align="right">&nbsp;&nbsp;第&nbsp;{print}&nbsp;次打印</td><td colspan="9" align="right">页数：<span tdata="pageNO" format="#">#</span>/<span tdata="pageCount" format="#">#</span>&nbsp;&nbsp;</td></tr></tfoot>',
				'</table>');

		this.popWindow = this.popWindow || new Ext.Window({
					title : "查看",
					jspz : '',
					resizable : false,
					// minimizable : false,
					modal : true,
					maximizable : false,
					maximized : true,
					closeAction : "hide",
					buttonAlign : "center",
					autoScroll : true,
					width : 800,
					height : 600,
					layout : 'fit',
					items : [this.popPanel],
					tbar : ['->', {
								xtype : 'displayfield',
								value : '结算单号：'
							}, this.combo],
					buttons : [{
								text : "关闭",
								scope : this,
								handler : function() {

									this.popWindow.hide();
								}
							}, {
								text : "打印",
								scope : this,
								handler : this.onPrint
							}]

				});

	}
}