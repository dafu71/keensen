/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 外协大件库存状态维护
 * 创建日期： 2014-12-15  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.kcgl.WxdjkcztwhMgr = function() {
	this.initPanel = function() {
		this.initCxlbqdshowWindow();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'fit',
					border : false,
					renderTo : 'WxdjkcztwhMgr',
					panels : [this.listPanel]
				});
	}


this.initListPanel = function() {
	    this.amount = 0;
		this.listPanel = new Ext.fn.EditListPanel({
			title : '【 外协大件库存状态维护 】',
			hsPage : false,
			tbar : [{
						text : '保存',
						scope : this,
						iconCls : 'icon-application_add',
						handler : this.onSaveok
					},{
						text : "导出",
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
						}],	
			columns : [new Ext.grid.RowNumberer(),{
						dataIndex : 'zleibname',
						header : '车型类别',
						renderer : function(v, m, r, i) {
							var str = "<a  href='javascript:showCxlbqd("
									+ Ext.encode(v) + "," + i + ");' ";
							str += " title='车型清单：" + r.get('nr');
							str += "'>" + v + "</a>";

							return str;
				         }
						
					},{
						dataIndex : 'zdaji_name',
						header : '大件名称'/*,
						renderer : function(v, m, r, i) {
							if(r.data.flag && (parseInt(r.data.flag)%2)==1){
								return "<style='background:red'>" + v + "</style>";
							}else{
								return "<style='background:blue'>" + v + "</style>";;
							}
						}*/
					},{
						dataIndex : 'nr',
						header : '车型清单',
						hidden:true
						
					},{
						dataIndex : 'menge_a_z',
						width:102,
						header : '未完成计划数(总)'
					},{
						dataIndex : 'menge_b_z',
						width:55,
						header : '投料(总)'
					},{
						dataIndex : 'menge_c_z',
						width:66,
						header : '半成品(总)'
					},{
						dataIndex : 'menge_d_z',
						width:91,
						header : '待表面处理(总)'
					},{
						dataIndex : 'menge_e_z',
						width:81,
						header : '送货状态(总)'
					},{
						dataIndex : 'menge_a',
						header : '未完成计划数',
						width:82,
						css : 'background:#B9B9FF;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									decimalPrecision :0,
									allowNegative : false
								}))
					},{
						dataIndex : 'menge_b',
						header : '投料',
						width:38,
						css : 'background:#FC9563;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									decimalPrecision :0,
									allowNegative : false
								}))
					},{
						dataIndex : 'menge_c',
						header : '半成品',
						width:51,
						css : 'background:#B9B9FF;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									decimalPrecision :0,
									allowNegative : false
								}))
					},{
						dataIndex : 'menge_d',
						header : '待表面处理',
						width:79,
						css : 'background:#FC9563;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									decimalPrecision :0,
									allowNegative : false
								}))
					},{
						dataIndex : 'menge_e',
						header : '送货状态',
						width:65,
						css : 'background:#B9B9FF;',
						editor : new Ext.grid.GridEditor(new Ext.form.NumberField(
								{
									allowBlank : false,
									scope : this,
									decimalPrecision :0,
									allowNegative : false
								}))
					}],
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.kcgl.kcglkcgl.querykcglwxdjkcztwh.biz.ext',
				root : 'data',
				autoLoad : true,
				fields : [{
							name : 'zleib'
						},{
							name : 'nr'
						},{
							name : 'zleibname'
						},{
							name : 'zdaji'
						},{
							name : 'zdaji_name'
						}, {
							name : 'menge_a_z'
						}, {
							name : 'menge_b_z'
						}, {
							name : 'menge_c_z'
						}, {
							name : 'menge_d_z'
						}, {
							name : 'menge_e_z'
						}, {
							name : 'menge_a'
						}, {
							name : 'menge_b'
						}, {
							name : 'menge_c'
						}, {
							name : 'menge_d'
						}, {
							name : 'menge_e'
						}]
			})
		});		
	}
	this.initCxlbqdshowWindow = function() {
		 this.cxlbqdshowWindow = this.cxlbqdshowWindow || new Ext.fn.ShowWindow({
			id:'cxlbqdShow',
			title:'车型清单',
			height:180,
			resizable : true,
			minimizable : true,
			maximizable : true,
			items:[{
			xtype:'viewpanel',
				columns:1,
				autoScroll : true,
				loadUrl:'com.zoomlion.hjsrm.kcgl.kcglDaji.querycxlbqd.biz.ext',		
				fields : [{
							name : 'cxlbqd/nr',
							dataIndex : 'nr',
							fieldLabel : '车型清单',
							style:'padding-top:3px;padding-left:10px;',
							allowBlank : true,
							anchor : '90%',
							colspan : 1,
							 xtype: 'displayfield'
						}]
			}]
		});
		
	}
}