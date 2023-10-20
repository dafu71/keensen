com.zoomlion.hjsrm.cgzqreport.CgrkreportMgr.prototype.initEvent = function() {
	// 查询
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var _this = this;
		var store = this.store;
		store.baseParams = vals;
		store.load();
	}, this);
	this.store.on({
		scope : this,
		'load' : function(o) {
		    var _this = this;		
			var res = o.getRange();
			var cool = '';
			var cool1 = '';
			var cool2 = '';	
                    cool = '<set value='+'"'+res[0].data['qn1y']+'"/>'+'<set value='+'"'+res[0].data['qn2y']+'"/>'+'<set value='+'"'+res[0].data['qn3y']+'"/>'+'<set value='+'"'+res[0].data['qn4y']+'"/>'
                    +'<set value='+'"'+res[0].data['qn5y']+'"/>'+'<set value='+'"'+res[0].data['qn6y']+'"/>'+'<set value='+'"'+res[0].data['qn7y']+'"/>'+'<set value='+'"'+res[0].data['qn8y']+'"/>'
                    +'<set value='+'"'+res[0].data['qn9y']+'"/>'+'<set value='+'"'+res[0].data['qn10y']+'"/>'+'<set value='+'"'+res[0].data['qn11y']+'"/>'+'<set value='+'"'+res[0].data['qn12y']+'"/>'
                   
                    cool1 = '<set value='+'"'+res[0].data['jn1y']+'"/>'+'<set value='+'"'+res[0].data['jn2y']+'"/>'+'<set value='+'"'+res[0].data['jn3y']+'"/>'+'<set value='+'"'+res[0].data['jn4y']+'"/>'
                    +'<set value='+'"'+res[0].data['jn5y']+'"/>'+'<set value='+'"'+res[0].data['jn6y']+'"/>'+'<set value='+'"'+res[0].data['jn7y']+'"/>'+'<set value='+'"'+res[0].data['jn8y']+'"/>'
                    +'<set value='+'"'+res[0].data['jn9y']+'"/>'+'<set value='+'"'+res[0].data['jn10y']+'"/>'+'<set value='+'"'+res[0].data['jn11y']+'"/>'+'<set value='+'"'+res[0].data['jn12y']+'"/>'
			Ext.each(res, function(r) {
                     cool2 = cool2+'<set name='+'"'+r.data.name1+'"'+'value='+'"'+r.data.erfmg+'"/>'
				});
				/*<graph baseFontSize ="12" decimalPrecision="1" xaxisname="月份" yaxisname="金" hovercapbg="DEDEBE" hovercapborder="889E6D" rotateNames="0" yAxisMaxValue="100" numdivlines="9" divLineColor="CCCCCC" divLineAlpha="80" decimalPrecision="0" showAlternateHGridColor="1" AlternateHGridAlpha="30" AlternateHGridColor="CCCCCC" caption="外购采购入库统计表" subcaption="M表示为百万">*/
				/*'<graph caption="Sales" PYAxisName="Revenue" SYAxisName="Quantity" numberPrefix="$" showvalues="0" numDivLines="4" formatNumberScale="0" decimalPrecision="0" anchorSides="10" anchorRadius="3" anchorBorderColor="009900">'*/
				cool = '<graph caption="Sales" PYAxisName="Revenue" SYAxisName="Quantity" numberPrefix="$" showvalues="0" numDivLines="4" formatNumberScale="0" decimalPrecision="0" anchorSides="10" anchorRadius="3" anchorBorderColor="009900">'
				+'<categories font="Arial" fontSize="11" fontColor="000000"><category name="一月"/><category name="二月"/><category name="三月"/><category name="四月"/><category name="五月"/><category name="六月"/><category name="七月"/><category name="八月"/><category name="九月"/><category name="十月"/><category name="十一月"/><category name="十二月"/></categories>'
				+'<dataset seriesname="去年" color="FDC12E" showValues="0">'+cool+'</dataset>'
				+'<dataset seriesname="今年" color="56B9F9" showValues="0">'+cool1+'</dataset>'
				
				+'<dataset seriesName="Total Quantity" color="8BBA00" showValues="0" parentYAxis="S"><set value="45000"/><set value="45000"/><set value="45000"/><set value="45000"/><set value="45000"/></dataset>'
				+'<trendlines><line startValue="22000" endValue="58000" color="3366FF" displayValue="Target" thickness="1" alpha="80"/></trendlines>'
				+'</graph>';	
				cool2 = '<graph caption="底盘入库数量总计"  unescapeLinks="0" showNames="2" decimalPrecision="2" baseFontSize = "12">'+cool2+'</graph>';		
				_this.listPanel1.items.items[0].load({
			    url : 'report/cgtjreport/js/cgrkreport/cgrkcolumn3Dchart.jsp?dataXml=' + encodeURI(cool),
			    scripts : true
		      })      
		      _this.listPanel2.items.items[0].load({
			    url : 'report/cgtjreport/js/dprkreport/dprkpie3dchart.jsp?dataXml=' + encodeURI(cool2),
			    scripts : true
		      })
		       if(res.length > 0){
		       	 var cool = 0;
		       	 var cool1 = 0;
		         for(i = 0;i<res.length;i++){
		         	cool = cool+res[i].get('dmbtr');
		         	cool1 = cool1+res[i].get('erfmg')
		         }
				this.listPanel1.msg1.setValue("底盘金额汇总："+cool);	
		        this.listPanel2.msg2.setValue("底盘数量汇总："+cool1);
				}
			}
	});
}

com.zoomlion.hjsrm.cgzqreport.CgrkreportMgr.prototype.exportExcel = function() {
	if (this.listPanel.items.items[0].items.items[0].hidden) {
		this.listPanel.items.items[0].items.items[0].show();
		this.listPanel.items.items[1].items.items[0].show();
		this.listPanel.items.items[0].items.items[1].hide();
		this.listPanel.items.items[1].items.items[1].hide();
	} else {
		this.listPanel.items.items[0].items.items[0].hide();
		this.listPanel.items.items[1].items.items[0].hide();
		this.listPanel.items.items[0].items.items[1].show();
		this.listPanel.items.items[1].items.items[1].show();
	}
}

