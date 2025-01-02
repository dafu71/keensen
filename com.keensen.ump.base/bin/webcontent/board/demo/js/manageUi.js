com.keensen.ump.base.board.DemoMgr = function() {
	this.initPanel = function() {
		this.initViewPanel();

		this.lay= new Ext.fn.fnLayOut({
					layout : 'border',
					border : false,
					renderTo : 'boarddemomgr',
					items : [this.boardPanel]
				});
	
		return this.lay;
		
	}

	this.initViewPanel = function() {
		var _this = this;
		var mytable = '<table style="width: 100%;height: 100%;table-layout: fixed;">';
		mytable += ' <tr><td style="width: 33.33%; height: 50%;  border: 1px solid black;" align="center"><div id = "boardDemoPanel1" style="height: 100%; width: 100%; background-color: #2ecc71;">boardDemoPanel1</div></td>';
		mytable += ' <td style="width: 33.33%;height: 50%;  border: 1px solid black;" align="center"><div id = "boardDemoPanel2" style="height: 100%; width: 100%;">boardDemoPanel2</div></td>';
		mytable += ' <td style="width: 33.33%;height: 50%;  border: 1px solid black;" align="center"><div id = "boardDemoPanel3" style="height: 100%; width: 100%; background-color: #2ecc71;">boardDemoPanel3</div></td></tr>';
		mytable += ' <tr><td style="width: 33.33%;height: 50%;  border: 1px solid black;" align="center"><div id = "boardDemoPanel4" style="height: 100%; width: 100%; ">boardDemoPanel4</div></td>';
		mytable += ' <td style="width: 33.33%; height: 50%; border: 1px solid black;" align="center"><div id = "boardDemoPanel5" style="height: 100%; width: 100%; background-color: #2ecc71;">boardDemoPanel5</div></td>';
		mytable += ' <td style="width: 33.33%;height: 50%;  border: 1px solid black;" align="center"><div id = "boardDemoPanel6" style="height: 100%; width: 100%;">boardDemoPanel6</div></td></tr></table>';

		this.boardPanel = new Ext.Panel({
					header : false,
					region : 'center',
					split : false,
					autoDestroy : true,
					html : mytable
				});


	}
}