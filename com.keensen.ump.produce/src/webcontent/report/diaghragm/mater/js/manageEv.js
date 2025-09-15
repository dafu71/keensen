com.keensen.ump.produce.report.diaghragm.MaterMgr.prototype.initEvent = function() {

	this.mainPanel.queryPanel.productDtStart.mon(
			this.mainPanel.queryPanel.productDtStart, 'change', function(o,
					newvalue, oldvalue) {		
				
				var d = formatDate(new Date(newvalue));
				this.oilPanel.queryPanel.productDtStart.setValue(d);				
				this.waterPanel.queryPanel.productDtStart.setValue(d);
				this.pvaPanel.queryPanel.productDtStart.setValue(d);
				this.zmyPanel.queryPanel.productDtStart.setValue(d);
			}, this);
			
	this.mainPanel.queryPanel.productDtEnd.mon(
			this.mainPanel.queryPanel.productDtEnd, 'change', function(o,
					newvalue, oldvalue) {		
				
				var d = formatDate(new Date(newvalue));
				this.oilPanel.queryPanel.productDtEnd.setValue(d);				
				this.waterPanel.queryPanel.productDtEnd.setValue(d);
				this.pvaPanel.queryPanel.productDtEnd.setValue(d);
				this.zmyPanel.queryPanel.productDtEnd.setValue(d);
			}, this);
			
	this.mainPanel.queryPanel.lineId.mon(
			this.mainPanel.queryPanel.lineId, 'change', function(o,
					newvalue, oldvalue) {		
				
				var d = newvalue;
				this.oilPanel.queryPanel.lineId.setValue(d);				
				this.waterPanel.queryPanel.lineId.setValue(d);
				this.pvaPanel.queryPanel.lineId.setValue(d);
				this.zmyPanel.queryPanel.lineId.setValue(d);
			}, this);
			
	this.mainPanel.queryPanel.specId.mon(
			this.mainPanel.queryPanel.specId, 'change', function(o,
					newvalue, oldvalue) {		
				
				var d = newvalue;
				this.oilPanel.queryPanel.specId.setValue(d);				
				this.waterPanel.queryPanel.specId.setValue(d);
				this.pvaPanel.queryPanel.specId.setValue(d);
				this.zmyPanel.queryPanel.specId.setValue(d);
			}, this);
			
	this.mainPanel.queryPanel.orderNo.mon(
			this.mainPanel.queryPanel.orderNo, 'change', function(o,
					newvalue, oldvalue) {		
				
				var d = newvalue;
				this.oilPanel.queryPanel.orderNo.setValue(d);				
				this.waterPanel.queryPanel.orderNo.setValue(d);
				this.pvaPanel.queryPanel.orderNo.setValue(d);
				this.zmyPanel.queryPanel.orderNo.setValue(d);
			}, this);
			
	this.mainPanel.queryPanel.prodFlagId.mon(
			this.mainPanel.queryPanel.prodFlagId, 'change', function(o,
					newvalue, oldvalue) {		
				
				var d = newvalue;
				this.oilPanel.queryPanel.prodFlagId.setValue(d);				
				this.waterPanel.queryPanel.prodFlagId.setValue(d);
				this.pvaPanel.queryPanel.prodFlagId.setValue(d);
				this.zmyPanel.queryPanel.prodFlagId.setValue(d);
			}, this);
			
	this.mainPanel.queryPanel.batchNo.mon(
			this.mainPanel.queryPanel.batchNo, 'change', function(o,
					newvalue, oldvalue) {		
				
				var d = newvalue;
				this.oilPanel.queryPanel.batchNo.setValue(d);				
				this.waterPanel.queryPanel.batchNo.setValue(d);
				this.pvaPanel.queryPanel.batchNo.setValue(d);
				this.zmyPanel.queryPanel.batchNo.setValue(d);
			}, this);
			
			
	

}

function formatDate(date) {
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');
  var hours = date.getHours().toString().padStart(2, '0');
  var minutes = date.getMinutes().toString().padStart(2, '0');
  var seconds = date.getSeconds().toString().padStart(2, '0');

  return year + '-' + month + '-' + day + ' ' + hours +':' + minutes;
}

