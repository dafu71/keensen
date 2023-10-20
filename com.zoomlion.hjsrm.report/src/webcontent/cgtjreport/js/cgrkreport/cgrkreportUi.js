com.zoomlion.hjsrm.cgzqreport.CgrkreportMgr = function() {
	this.initPanel = function() {
		this.initQueryPanel();
		this.initListPanel();
		return new Ext.fn.fnLayOut({
					layout : 'collapse',
					border : false,
					title : '外协外购入库统计报表',
					panels : [this.queryPanel, this.listPanel]
				});
	}

	this.initQueryPanel = function() {
		var _this = this;
		this.queryPanel = new Ext.fn.QueryPanel({
					height : 140,
					columns : 3,
					collapsible : true,
					titleCollapse : false,
					border : true,
					title : '【 外协外购入库统计报表查询 】',
					fields : [{
								xtype : 'factorycombobox',
								defaultValue : '3000',
								name : 'condition/werks',
								fieldLabel : '工厂',
								dataIndex : 'condition/werks',
								hiddenName : 'condition/werks'
							},  {
								xtype : 'textfield',
								name : 'condition/queryyear',
								fieldLabel : '年度'
							}]
				});
	}

	this.initListPanel = function() {
		var _this = this;
				this.store = new Ext.data.JsonStore({
					url : 'com.zoomlion.hjsrm.report.cgtjreport.querycgrkreport.biz.ext',
						root : 'data',
						//autoLoad : true,
						fields : [ {
									name : 'qn1y'
								}, {
									name : 'qn2y'
								}, {
									name : 'qn3y'
								}, {
									name : 'qn4y'
								},{
									name : 'qn5y'
								}, {
									name : 'qn6y'
								}, {
									name : 'qn7y'
								}, {
									name : 'qn8y'
								},{
									name : 'qn9y'
								}, {
									name : 'qn10y'
								}, {
									name : 'qn11y'
								}, {
									name : 'qn12y'
								},{
									name : 'jn1y'
								}, {
									name : 'jn2y'
								}, {
									name : 'jn3y'
								}, {
									name : 'jn4y'
								},{
									name : 'jn5y'
								}, {
									name : 'jn6y'
								}, {
									name : 'jn7y'
								}, {
									name : 'jn8y'
								},{
									name : 'jn9y'
								}, {
									name : 'jn10y'
								}, {
									name : 'jn11y'
								}, {
									name : 'jn12y'
								}]
				});
				/*var dataXml = '<graph xaxisname="Continent" yaxisname="Export" hovercapbg="DEDEBE" hovercapborder="889E6D" rotateNames="0" yAxisMaxValue="100" numdivlines="9" divLineColor="CCCCCC" divLineAlpha="80" decimalPrecision="0" showAlternateHGridColor="1" AlternateHGridAlpha="30" AlternateHGridColor="CCCCCC" caption="Global Export" subcaption="In Millions Tonnes per annum pr Hectare"><categories font="Arial" fontSize="11" fontColor="000000"><category name="N. America" hoverText="North America"/><category name="Asia"/><category name="Europe"/><category name="Australia"/><category name="Africa"/></categories><dataset seriesname="Rice" color="FDC12E"><set value="30"/><set value="26"/><set value="29"/><set value="31"/><set value="34"/></dataset><dataset seriesname="Wheat" color="56B9F9"><set value="67"/><set value="98"/><set value="79"/><set value="73"/><set value="80"/></dataset><dataset seriesname="Grain" color="C9198D"><set value="27"/><set value="25"/><set value="28"/><set value="26"/><set value="10"/></dataset></graph>'
			*/	 
			
                 //html : "<div id='myChartDiv'></div>"
                 
                /* var myChart = new FusionCharts("frame/ui/jslib/ext_340/adapter/fusionchartsfree/FCF_MSColumn3D.swf", "myChartId", "650", "590");
                 myChart.setDataXML(dataXml);
                 myChart.render("myChartDiv"); 
                 alert(document.getElementById("myChartDiv"));*/
                 
				this.listPanel1 = new Ext.Panel({					
					title : '底盘入库金额总计',
					width : 608,
					height : 400,
					region : "west",
					tbar : [ '->',
					   {
						xtype : 'displayfield',
						ref : "../msg1",
						style:'color:red'
					}],
					//renderTo : 'container'
					items : [{
					    width : 608,
					    height : 400,
					    region : 'north',
					    fieldLabel :'底盘入库金额总计',
						xtype : 'panel'
					},{
						xtype : 'listpanel',
						region : 'south',
						hidden : true,
						hsPage : false,
						height : 375,
						columns : [new Ext.grid.RowNumberer(), {
									dataIndex : 'name1',
									header : '供应商名称',
									width : 250
								}, {
									dataIndex : 'dmbtr',
									header : '金额',
									sortable : true
									
								}],
						store : this.store
					}]
				});
				this.listPanel2 = new Ext.Panel({					
					title : '底盘入库数量总计',
					region : "center",
					tbar : ['->',
					   {
						xtype : 'displayfield',
						ref : "../msg2",
						style:'color:red'
					}],
					//renderTo : 'container'
					items : [{
						fieldLabel : '底盘入库数量总计',
					    width : 608,
					    height : 400,
					    region : 'north',
						xtype : 'panel'
					},{
						xtype : 'listpanel',
						region : 'south',
						hidden : true,
						hsPage : false,
						height : 375,
						columns : [new Ext.grid.RowNumberer(), {
									dataIndex : 'name1',
									header : '供应商名称',
									width : 250
								}, {
									dataIndex : 'erfmg',
									header : '数量',
									sortable : true
								}],
						store : this.store
					}]
				});
		
		this.listPanel = new Ext.Panel({					
					title : '底盘入库金额总计',
					//renderTo : 'container'
					layout:"border",
					tbar : [{
						text : "图表与列表切换",
						scope : this,
						iconCls : 'icon-application_excel',
						handler : this.exportExcel
					}],
					items : [this.listPanel1,this.listPanel2]
				});
	}
}