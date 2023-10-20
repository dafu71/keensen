Ext.onReady(function() {
			new Ext.Viewport({
						enableTabScroll : true,
						layout : "border",
						items : [{
									title : "面板",
									region : "north",
									height : 50,
									html : "<h1>网站后台管理系统!</h1>"
								}, {
									title : "菜单",
									region : "west",
									width : 200,
									collapsible : true,
									html : "菜单栏"
								}, {
									xtype : "tabpanel",
									region : "center",
									items : [{
												title : "面板1"
											}, {
												title : "面板2"
											}]
								}]
					});
		});