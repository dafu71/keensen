com.zoomlion.hjsrm.cgzqreport.DprkreportMgr.prototype.initEvent = function() {
	// 查询
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var _this = this;
		var store = this.store;
		store.baseParams = vals;
		store.load();
		this.listPanel1.msg1.setValue();	
		this.listPanel2.msg2.setValue();	
	}, this);
	this.queryPanel.mon(this.queryPanel, 'queryday', function(form, vals) {
				var _this = this;
				var store = this.store;
				vals["condition/querystartdate"] = sysdate;
				vals["condition/queryendate"] = sysdate;
				store.baseParams = vals;
				store.load();
				this.listPanel1.msg1.setValue();	
		        this.listPanel2.msg2.setValue();	
			}, this);
	this.queryPanel.mon(this.queryPanel, 'queryweak', function(form, vals) {
				var _this = this;
				var store = this.store;

				vals["condition/querystartdate"] = "werk";
				vals["condition/queryendate"] = sysdate;
				store.baseParams = vals;
				store.load();
				this.listPanel1.msg1.setValue();	
		        this.listPanel2.msg2.setValue();	
			}, this);
	this.queryPanel.mon(this.queryPanel, 'querymonth', function(form, vals) {
				var _this = this;
				var store = this.store;
				vals["condition/querystartdate"] = "month"
				vals["condition/queryendate"] = sysdate;
				store.baseParams = vals;
				store.load();
				this.listPanel1.msg1.setValue();	
		        this.listPanel2.msg2.setValue();	
			}, this);
	this.queryPanel.mon(this.queryPanel, 'queryyear', function(form, vals) {
				var _this = this;				
				var store = this.store;
				vals["condition/querystartdate"] = "year";
				vals["condition/queryendate"] = sysdate;
				store.baseParams = vals;
				store.load();
				this.listPanel1.msg1.setValue();	
		        this.listPanel2.msg2.setValue();	
			}, this);
	this.store.on({
		scope : this,
		'load' : function(o) {
		    var _this = this;		
			var res = o.getRange();
			var cool = '';
			var cool2 = '';
			Ext.each(res, function(r) {
                     cool = cool+'<set name='+'"'+r.data.name1+'"'+'value='+'"'+r.data.dmbtr+'"/>'
				});
			Ext.each(res, function(r) {
                     cool2 = cool2+'<set name='+'"'+r.data.name1+'"'+'value='+'"'+r.data.erfmg+'"/>'
				});
				cool = '<graph caption="底盘入库金额总计（K:千;M:百万）"  unescapeLinks="0" showNames="2" decimalPrecision="2" baseFontSize = "12">'+cool+'</graph>';	
				cool2 = '<graph caption="底盘入库数量总计"  unescapeLinks="0" showNames="2" decimalPrecision="2" baseFontSize = "12">'+cool2+'</graph>';		
				_this.listPanel1.items.items[0].load({
			    url : 'report/cgtjreport/js/dprkreport/dprkreportchart.jsp?dataXml=' + encodeURI(cool),
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

com.zoomlion.hjsrm.cgzqreport.DprkreportMgr.prototype.exportExcel = function() {
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
