com.zoomlion.hjsrm.product.techChange.productTreeMgr = function() {
	this.initPanel = function() {
		this.initViewPanel();
		return new Ext.fn.fnLayOut({
					layout : 'form',
					border : false,
					renderTo : 'productTreeDiv',
					panels : [this.productTree]
				});

	}

	this.initViewPanel = function() {
		this.productLoader = new com.zoomlion.hjsrm.ProductLoader({
					ifcheckbox : true,// 是否有复选框
					isASyncTree : true
				});

		this.productTree = new com.zoomlion.hjsrm.ProductTree({
			width : 280,
			height : 600,
			// region : 'center',

			split : true,
			loader : this.productLoader,
			collapsible : true,
			listeners : ({
				scope : this,
				'click' : function(node, e) {
					var _attr = node.attributes;
					var self_id = _attr.self_id;
					var typename = _attr.typename;
					if(typename=="matnr"){
						var t = [];
						t = (_attr.text).split("|");
						alert(self_id + "-------------------" + t[1]);
					}
					
				}
			})
				// listeners : {
				// scope : this,
				// 'contextmenu' : function(node, e) {
				// node.select();
				// this.menuNode = node;
				// var _attr = node.attributes;
				// var listtype = _attr.listtype;
				// var childtype = _attr.childtype;
				// if (childtype == 's') {
				// this.sysMenu.showAt(e.getXY());
				// } else if (listtype == 's' && childtype == 'p') {
				// this.struMenu.showAt(e.getXY());
				// } else if (listtype == 'p') {
				// this.phenoMenu.showAt(e.getXY());
				// }
				//
				// }
				// }

			});

		return this.productTree;
	}
}