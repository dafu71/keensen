com.zoomlion.hjsrm.srmclient.finishedMgr.prototype.initEvent = function() {
	
	// 增加查询事件
	this.queryPanel.mon(this.queryPanel, 'query', function(form, vals) {
		var store = this.listPanel.store;
		store.baseParams = vals;
		store.load({
					params : {
						"pageCond/begin" : 0,
						"pageCond/length" : this.listPanel.pagingToolbar.pageSize
					}
				});
	}, this);
	
	/*this.listPanel.store.on({
		scope : this,
		'load':function(){
			
			alert(this.listPanel.store.isFiltered());
		}
	
	});
*/
}


// 转阅
function sendread(v) {
	alert("转阅" + v);
}
