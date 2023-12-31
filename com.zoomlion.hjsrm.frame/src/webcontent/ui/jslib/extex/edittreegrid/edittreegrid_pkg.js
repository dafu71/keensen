Ext.ns("Ext.ux.tree");
Ext.ux.tree.TreeGridSorter = Ext.extend(Ext.tree.TreeSorter, {
			sortClasses : ["sort-asc", "sort-desc"],
			sortAscText : "Sort Ascending",
			sortDescText : "Sort Descending",
			constructor : function(A, B) {
				if (!Ext.isObject(B)) {
					B = {
						property : A.columns[0].dataIndex || "text",
						folderSort : true
					}
				}
				Ext.ux.tree.TreeGridSorter.superclass.constructor.apply(this,
						arguments);
				this.tree = A;
				A.on("headerclick", this.onHeaderClick, this);
				A.ddAppendOnly = true;
				me = this;
				this.defaultSortFn = function(L, D) {
					var H = me.dir && me.dir.toLowerCase() == "desc";
					var G = me.property || "text";
					var C = me.sortType;
					var E = me.folderSort;
					var K = me.caseSensitive === true;
					var F = me.leafAttr || "leaf";
					if (E) {
						if (L.attributes[F] && !D.attributes[F]) {
							return 1
						}
						if (!L.attributes[F] && D.attributes[F]) {
							return -1
						}
					}
					var I = C ? C(L) : (K ? L.attributes[G] : L.attributes[G]
							.toUpperCase());
					var J = C ? C(D) : (K ? D.attributes[G] : D.attributes[G]
							.toUpperCase());
					if (I < J) {
						return H ? +1 : -1
					} else {
						if (I > J) {
							return H ? -1 : +1
						} else {
							return 0
						}
					}
				};
				A.on("afterrender", this.onAfterTreeRender, this, {
							single : true
						});
				A.on("headermenuclick", this.onHeaderMenuClick, this)
			},
			onAfterTreeRender : function() {
				if (this.tree.hmenu) {
					this.tree.hmenu.insert(0, {
								itemId : "asc",
								text : this.sortAscText,
								cls : "xg-hmenu-sort-asc"
							}, {
								itemId : "desc",
								text : this.sortDescText,
								cls : "xg-hmenu-sort-desc"
							})
				}
				this.updateSortIcon(0, "asc")
			},
			onHeaderMenuClick : function(B, C, A) {
				if (C === "asc" || C === "desc") {
					this.onHeaderClick(B, null, A);
					return false
				}
			},
			onHeaderClick : function(D, A, B) {
				if (D && !this.tree.headersDisabled) {
					var C = this;
					C.property = D.dataIndex;
					C.dir = D.dir = (D.dir === "desc" ? "asc" : "desc");
					C.sortType = D.sortType;
					C.caseSensitive === Ext.isBoolean(D.caseSensitive)
							? D.caseSensitive
							: this.caseSensitive;
					C.sortFn = D.sortFn || this.defaultSortFn;
					this.tree.root.cascade(function(E) {
								if (!E.isLeaf()) {
									C.updateSort(C.tree, E)
								}
							});
					this.updateSortIcon(B, D.dir)
				}
			},
			updateSortIcon : function(B, A) {
				var D = this.sortClasses;
				var C = this.tree.innerHd.select("td").removeClass(D);
				C.item(B).addClass(D[A == "desc" ? 1 : 0])
			}
		});
Ext.tree.ColumnResizer = Ext.extend(Ext.util.Observable, {
	minWidth : 14,
	constructor : function(A) {
		Ext.apply(this, A);
		Ext.tree.ColumnResizer.superclass.constructor.call(this)
	},
	init : function(A) {
		this.tree = A;
		A.on("render", this.initEvents, this)
	},
	initEvents : function(A) {
		A.mon(A.innerHd, "mousemove", this.handleHdMove, this);
		this.tracker = new Ext.dd.DragTracker({
					onBeforeStart : this.onBeforeStart.createDelegate(this),
					onStart : this.onStart.createDelegate(this),
					onDrag : this.onDrag.createDelegate(this),
					onEnd : this.onEnd.createDelegate(this),
					tolerance : 3,
					autoStart : 300
				});
		this.tracker.initEl(A.innerHd);
		A.on("beforedestroy", this.tracker.destroy, this.tracker)
	},
	handleHdMove : function(A, C) {
		var F = 5, H = A.getPageX(), G = A.getTarget(".x-treegrid-hd", 3, true);
		if (G) {
			var B = G.getRegion(), D = G.dom.style, I = G.dom.parentNode;
			if (H - B.left <= F && G.dom !== I.firstChild) {
				var E = G.dom.previousSibling;
				while (E && Ext.fly(E).hasClass("x-treegrid-hd-hidden")) {
					E = E.previousSibling
				}
				if (E) {
					this.activeHd = Ext.get(E);
					D.cursor = Ext.isWebKit ? "e-resize" : "col-resize"
				}
			} else {
				if (B.right - H <= F) {
					var J = G.dom;
					while (J && Ext.fly(J).hasClass("x-treegrid-hd-hidden")) {
						J = J.previousSibling
					}
					if (J) {
						this.activeHd = Ext.get(J);
						D.cursor = Ext.isWebKit ? "w-resize" : "col-resize"
					}
				} else {
					delete this.activeHd;
					D.cursor = ""
				}
			}
		}
	},
	onBeforeStart : function(A) {
		this.dragHd = this.activeHd;
		return !!this.dragHd
	},
	onStart : function(A) {
		this.tree.headersDisabled = true;
		this.proxy = this.tree.body.createChild({
					cls : "x-treegrid-resizer"
				});
		this.proxy.setHeight(this.tree.body.getHeight());
		var B = this.tracker.getXY()[0];
		this.hdX = this.dragHd.getX();
		this.hdIndex = this.tree.findHeaderIndex(this.dragHd);
		this.proxy.setX(this.hdX);
		this.proxy.setWidth(B - this.hdX);
		this.maxWidth = this.tree.outerCt.getWidth()
				- this.tree.innerBody.translatePoints(this.hdX).left
	},
	onDrag : function(A) {
		var B = this.tracker.getXY()[0];
		this.proxy.setWidth((B - this.hdX).constrain(this.minWidth,
				this.maxWidth))
	},
	onEnd : function(C) {
		var A = this.proxy.getWidth(), B = this.tree;
		this.proxy.remove();
		delete this.dragHd;
		B.columns[this.hdIndex].width = A;
		B.updateColumnWidths();
		setTimeout(function() {
					B.headersDisabled = false
				}, 100)
	}
});
Ext.ux.tree.TreeGridNodeUI = Ext.extend(Ext.tree.TreeNodeUI, {
	isTreeGridNodeUI : true,
	renderElements : function(F, J, D, K) {
		var C = F.getOwnerTree(), E = C.columns, I = E[0], H, G, A;
		this.indentMarkup = F.parentNode
				? F.parentNode.ui.getChildIndent()
				: "";
		G = ['<tbody class="x-tree-node">', '<tr ext:tree-node-id="', F.id,
				'" class="x-tree-node-el x-tree-node-leaf ', J.cls, '">',
				'<td class="x-treegrid-col">',
				'<span class="x-tree-node-indent">', this.indentMarkup,
				"</span>", '<img src="', this.emptyIcon,
				'" class="x-tree-ec-icon x-tree-elbow">', '<img src="',
				J.icon || this.emptyIcon, '" class="x-tree-node-icon',
				(J.icon ? " x-tree-node-inline-icon" : ""),
				(J.iconCls ? " " + J.iconCls : ""), '" unselectable="on">',
				'<a hidefocus="on" class="x-tree-node-anchor" href="',
				J.href ? J.href : "#", '" tabIndex="1" ',
				J.hrefTarget ? ' target="' + J.hrefTarget + '"' : "", ">",
				'<span unselectable="on">',
				(I.tpl ? I.tpl.apply(J) : J[I.dataIndex] || I.text),
				"</span></a>", "</td>"];
		for (H = 1, A = E.length; H < A; H++) {
			I = E[H];
			G.push('<td class="x-treegrid-col ', (I.cls ? I.cls : ""), '">',
					'<div unselectable="on" class="x-treegrid-text"', (I.align
							? ' style="text-align: ' + I.align + ';"'
							: ""), ">", (I.tpl
							? I.tpl.apply(J)
							: J[I.dataIndex]), "</div>", "</td>")
		}
		G
				.push(
						'</tr><tr class="x-tree-node-ct"><td colspan="',
						E.length,
						'">',
						'<table class="x-treegrid-node-ct-table" cellpadding="0" cellspacing="0" style="table-layout: fixed; display: none; width: ',
						C.innerCt.getWidth(), 'px;"><colgroup>');
		for (H = 0, A = E.length; H < A; H++) {
			G.push('<col style="width: ', (E[H].hidden ? 0 : E[H].width),
					'px;" />')
		}
		G.push("</colgroup></table></td></tr></tbody>");
		if (K !== true && F.nextSibling && F.nextSibling.ui.getEl()) {
			this.wrap = Ext.DomHelper.insertHtml("beforeBegin",
					F.nextSibling.ui.getEl(), G.join(""))
		} else {
			this.wrap = Ext.DomHelper.insertHtml("beforeEnd", D, G.join(""))
		}
		this.elNode = this.wrap.childNodes[0];
		this.ctNode = this.wrap.childNodes[1].firstChild.firstChild;
		var B = this.elNode.firstChild.childNodes;
		this.indentNode = B[0];
		this.ecNode = B[1];
		this.iconNode = B[2];
		this.anchor = B[3];
		this.textNode = B[3].firstChild
	},
	animExpand : function(A) {
		this.ctNode.style.display = "";
		Ext.ux.tree.TreeGridNodeUI.superclass.animExpand.call(this, A)
	}
});
Ext.ux.tree.TreeGridRootNodeUI = Ext.extend(Ext.tree.TreeNodeUI, {
			isTreeGridNodeUI : true,
			render : function() {
				if (!this.rendered) {
					this.wrap = this.ctNode = this.node.ownerTree.innerCt.dom;
					this.node.expanded = true
				}
				if (Ext.isWebKit) {
					var A = this.ctNode;
					A.style.tableLayout = null;
(function			() {
						A.style.tableLayout = "fixed"
					}).defer(1)
				}
			},
			destroy : function() {
				if (this.elNode) {
					Ext.dd.Registry.unregister(this.elNode.id)
				}
				delete this.node
			},
			collapse : Ext.emptyFn,
			expand : Ext.emptyFn
		});
Ext.ux.tree.TreeGridLoader = Ext.extend(Ext.ex.ResTreeLoader, {
			createNode : function(A) {
				if (!A.uiProvider) {
					A.uiProvider = Ext.ux.tree.TreeGridNodeUI
				}
				return Ext.ex.ResTreeLoader.prototype.createNode.call(this, A)
			}
		});
(function() {
	Ext.override(Ext.list.Column, {
				init : function() {
					var B = Ext.data.Types, A = this.sortType;
					if (this.type) {
						if (Ext.isString(this.type)) {
							this.type = Ext.data.Types[this.type.toUpperCase()]
									|| B.AUTO
						}
					} else {
						this.type = B.AUTO
					}
					if (Ext.isString(A)) {
						this.sortType = Ext.data.SortTypes[A]
					} else {
						if (Ext.isEmpty(A)) {
							this.sortType = this.type.sortType
						}
					}
				}
			});
	Ext.tree.Column = Ext.extend(Ext.list.Column, {});
	Ext.tree.NumberColumn = Ext.extend(Ext.list.NumberColumn, {});
	Ext.tree.DateColumn = Ext.extend(Ext.list.DateColumn, {});
	Ext.tree.BooleanColumn = Ext.extend(Ext.list.BooleanColumn, {});
	Ext.tree.DictColumn = Ext.extend(Ext.list.Column, {
				constructor : function(A) {
					_data = [];
					A.tpl = A.tpl
							|| new Ext.XTemplate("{" + A.dataIndex
									+ ":this.format}");
					A.tpl.format = function(C) {
						_data = A.dictData;
						for (var B = 0; B < _data.length; B++) {
							if (C === _data[B].DICTID) {
								return _data[B].DICTNAME
							}
							if (C === "" || C === null || C === undefined) {
								return ""
							}
						}
					};
					Ext.tree.DictColumn.superclass.constructor.call(this, A)
				}
			});
	Ext.reg("tgcolumn", Ext.tree.Column);
	Ext.reg("tgnumbercolumn", Ext.tree.NumberColumn);
	Ext.reg("tgdatecolumn", Ext.tree.DateColumn);
	Ext.reg("tgbooleancolumn", Ext.tree.BooleanColumn);
	Ext.reg("tgdictcolumn", Ext.tree.DictColumn)
})();
Ext.ux.tree.TreeGrid = Ext.extend(Ext.tree.TreePanel, {
	rootVisible : false,
	useArrows : true,
	lines : false,
	borderWidth : Ext.isBorderBox ? 0 : 2,
	cls : "x-treegrid",
	columnResize : true,
	enableSort : true,
	reserveScrollOffset : true,
	enableHdMenu : true,
	columnsText : "Columns",
	initComponent : function() {
		if (!this.root) {
			this.root = new Ext.tree.AsyncTreeNode({
						resid : "0",
						id : "r0",
						text : "Root"
					})
		}
		var A = this.loader;
		if (!A) {
			A = new Ext.ux.tree.TreeGridLoader({
						dataUrl : this.dataUrl,
						requestMethod : this.requestMethod,
						store : this.store
					})
		} else {
			if (Ext.isObject(A) && !A.load) {
				A = new Ext.ux.tree.TreeGridLoader(A)
			} else {
				if (A) {
					A.createNode = function(C) {
						if (!C.uiProvider) {
							C.uiProvider = Ext.ux.tree.TreeGridNodeUI
						}
						return Ext.ex.ResTreeLoader.prototype.createNode.call(
								this, C)
					}
				}
			}
		}
		this.loader = A;
		Ext.ux.tree.TreeGrid.superclass.initComponent.call(this);
		this.initColumns();
		if (this.enableSort) {
			this.treeGridSorter = new Ext.ux.tree.TreeGridSorter(this,
					this.enableSort)
		}
		if (this.columnResize) {
			this.colResizer = new Ext.tree.ColumnResizer(this.columnResize);
			this.colResizer.init(this)
		}
		var B = this.columns;
		if (!this.internalTpl) {
			this.internalTpl = new Ext.XTemplate(
					'<div class="x-grid3-header">',
					'<div class="x-treegrid-header-inner">',
					'<div class="x-grid3-header-offset">',
					'<table cellspacing="0" cellpadding="0" border="0"><colgroup><tpl for="columns"><col /></tpl></colgroup>',
					'<thead><tr class="x-grid3-hd-row">',
					'<tpl for="columns">',
					'<td class="x-grid3-hd x-grid3-cell x-treegrid-hd" style="text-align: {align};" id="',
					this.id,
					'-xlhd-{#}">',
					'<div class="x-grid3-hd-inner x-treegrid-hd-inner" unselectable="on">',
					this.enableHdMenu
							? '<a class="x-grid3-hd-btn" href="#"></a>'
							: "",
					'{header}<img class="x-grid3-sort-icon" src="',
					Ext.BLANK_IMAGE_URL,
					'" />',
					"</div>",
					"</td></tpl>",
					"</tr></thead>",
					"</div></table>",
					"</div></div>",
					"</div>",
					'<div class="x-treegrid-root-node">',
					'<table class="x-treegrid-root-table" cellpadding="0" cellspacing="0" style="table-layout: fixed;"></table>',
					"</div>")
		}
		if (!this.colgroupTpl) {
			this.colgroupTpl = new Ext.XTemplate('<colgroup><tpl for="columns"><col style="width: {width}px"/></tpl></colgroup>')
		}
	},
	initColumns : function() {
		var B = this.columns, C = B.length, E = [], A, D;
		for (A = 0; A < C; A++) {
			D = B[A];
			if (!D.isColumn) {
				D.xtype = D.xtype ? (/^tg/.test(D.xtype) ? D.xtype : "tg"
						+ D.xtype) : "tgcolumn";
				D = Ext.create(D)
			}
			D.init(this);
			E.push(D);
			if (this.enableSort !== false && D.sortable !== false) {
				D.sortable = true;
				this.enableSort = true
			}
		}
		this.columns = E
	},
	onRender : function() {
		Ext.tree.TreePanel.superclass.onRender.apply(this, arguments);
		this.el.addClass("x-treegrid");
		this.outerCt = this.body.createChild({
					cls : "x-tree-root-ct x-treegrid-ct "
							+ (this.useArrows ? "x-tree-arrows" : this.lines
									? "x-tree-lines"
									: "x-tree-no-lines")
				});
		this.internalTpl.overwrite(this.outerCt, {
					columns : this.columns
				});
		this.mainHd = Ext.get(this.outerCt.dom.firstChild);
		this.innerHd = Ext.get(this.mainHd.dom.firstChild);
		this.innerBody = Ext.get(this.outerCt.dom.lastChild);
		this.innerCt = Ext.get(this.innerBody.dom.firstChild);
		this.colgroupTpl.insertFirst(this.innerCt, {
					columns : this.columns
				});
		if (this.hideHeaders) {
			this.header.dom.style.display = "none"
		} else {
			if (this.enableHdMenu !== false) {
				this.hmenu = new Ext.menu.Menu({
							id : this.id + "-hctx"
						});
				if (this.enableColumnHide !== false) {
					this.colMenu = new Ext.menu.Menu({
								id : this.id + "-hcols-menu"
							});
					this.colMenu.on({
								scope : this,
								beforeshow : this.beforeColMenuShow,
								itemclick : this.handleHdMenuClick
							});
					this.hmenu.add({
								itemId : "columns",
								hideOnClick : false,
								text : this.columnsText,
								menu : this.colMenu,
								iconCls : "x-cols-icon"
							})
				}
				this.hmenu.on("itemclick", this.handleHdMenuClick, this)
			}
		}
	},
	setRootNode : function(A) {
		A.attributes.uiProvider = Ext.ux.tree.TreeGridRootNodeUI;
		A = Ext.ux.tree.TreeGrid.superclass.setRootNode.call(this, A);
		if (this.innerCt) {
			this.colgroupTpl.insertFirst(this.innerCt, {
						columns : this.columns
					})
		}
		return A
	},
	clearInnerCt : function() {
		if (Ext.isIE) {
			var A = this.innerCt.dom;
			while (A.firstChild) {
				A.removeChild(A.firstChild)
			}
		} else {
			Ext.ux.tree.TreeGrid.superclass.clearInnerCt.call(this)
		}
	},
	initEvents : function() {
		Ext.ux.tree.TreeGrid.superclass.initEvents.apply(this, arguments);
		this.mon(this.innerBody, "scroll", this.syncScroll, this);
		this.mon(this.innerHd, "click", this.handleHdDown, this);
		this.mon(this.mainHd, {
					scope : this,
					mouseover : this.handleHdOver,
					mouseout : this.handleHdOut
				})
	},
	onResize : function(E, A) {
		Ext.ux.tree.TreeGrid.superclass.onResize.apply(this, arguments);
		var C = this.innerBody.dom;
		var F = this.innerHd.dom;
		if (!C) {
			return
		}
		if (Ext.isNumber(A)) {
			C.style.height = this.body.getHeight(true) - F.offsetHeight + "px"
		}
		if (Ext.isNumber(E)) {
			var B = Ext.num(this.scrollOffset, Ext.getScrollBarWidth());
			if (this.reserveScrollOffset
					|| ((C.offsetWidth - C.clientWidth) > 10)) {
				this.setScrollOffset(B)
			} else {
				var D = this;
				setTimeout(function() {
							D
									.setScrollOffset(C.offsetWidth
											- C.clientWidth > 10 ? B : 0)
						}, 10)
			}
		}
	},
	updateColumnWidths : function() {
		var D = this.columns, H = D.length, E = this.outerCt.query("colgroup"), A = E.length, G, I, F, B;
		for (F = 0; F < H; F++) {
			G = D[F];
			for (B = 0; B < A; B++) {
				I = E[B];
				I.childNodes[F].style.width = (G.hidden ? 0 : G.width) + "px"
			}
		}
		for (F = 0, E = this.innerHd.query("td"), len = E.length; F < len; F++) {
			G = Ext.fly(E[F]);
			if (D[F] && D[F].hidden) {
				G.addClass("x-treegrid-hd-hidden")
			} else {
				G.removeClass("x-treegrid-hd-hidden")
			}
		}
		var C = this.getTotalColumnWidth();
		Ext.fly(this.innerHd.dom.firstChild).setWidth(C
				+ (this.scrollOffset || 0));
		this.outerCt.select("table").setWidth(C);
		this.syncHeaderScroll()
	},
	getVisibleColumns : function() {
		var D = [], B = this.columns, C = B.length, A;
		for (A = 0; A < C; A++) {
			if (!B[A].hidden) {
				D.push(B[A])
			}
		}
		return D
	},
	getTotalColumnWidth : function() {
		var B = 0;
		for (var A = 0, C = this.getVisibleColumns(), D = C.length; A < D; A++) {
			B += C[A].width
		}
		return B
	},
	setScrollOffset : function(A) {
		this.scrollOffset = A;
		this.updateColumnWidths()
	},
	handleHdDown : function(E, D) {
		var F = E.getTarget(".x-treegrid-hd");
		if (F && Ext.fly(D).hasClass("x-grid3-hd-btn")) {
			var A = this.hmenu.items, B = this.columns, C = this
					.findHeaderIndex(F), G = B[C], H = G.sortable;
			E.stopEvent();
			Ext.fly(F).addClass("x-grid3-hd-menu-open");
			this.hdCtxIndex = C;
			this.fireEvent("headerbuttonclick", A, G, F, C);
			this.hmenu.on("hide", function() {
						Ext.fly(F).removeClass("x-grid3-hd-menu-open")
					}, this, {
						single : true
					});
			this.hmenu.show(D, "tl-bl?")
		} else {
			if (F) {
				var C = this.findHeaderIndex(F);
				this.fireEvent("headerclick", this.columns[C], F, C)
			}
		}
	},
	handleHdOver : function(B, C) {
		var D = B.getTarget(".x-treegrid-hd");
		if (D && !this.headersDisabled) {
			index = this.findHeaderIndex(D);
			this.activeHdRef = C;
			this.activeHdIndex = index;
			var A = Ext.get(D);
			this.activeHdRegion = A.getRegion();
			A.addClass("x-grid3-hd-over");
			this.activeHdBtn = A.child(".x-grid3-hd-btn");
			if (this.activeHdBtn) {
				this.activeHdBtn.dom.style.height = (D.firstChild.offsetHeight - 1)
						+ "px"
			}
		}
	},
	handleHdOut : function(A, B) {
		var C = A.getTarget(".x-treegrid-hd");
		if (C && (!Ext.isIE || !A.within(C, true))) {
			this.activeHdRef = null;
			Ext.fly(C).removeClass("x-grid3-hd-over");
			C.style.cursor = ""
		}
	},
	findHeaderIndex : function(D) {
		D = D.dom || D;
		var B = D.parentNode.childNodes;
		for (var A = 0, C; C = B[A]; A++) {
			if (C == D) {
				return A
			}
		}
		return -1
	},
	beforeColMenuShow : function() {
		var C = this.columns, A = C.length, B, D;
		this.colMenu.removeAll();
		for (B = 1; B < A; B++) {
			D = C[B];
			if (D.hideable !== false) {
				this.colMenu.add(new Ext.menu.CheckItem({
							itemId : "col-" + B,
							text : D.header,
							checked : !D.hidden,
							hideOnClick : false,
							disabled : D.hideable === false
						}))
			}
		}
	},
	handleHdMenuClick : function(A) {
		var B = this.hdCtxIndex, C = A.getItemId();
		if (this.fireEvent("headermenuclick", this.columns[B], C, B) !== false) {
			B = C.substr(4);
			if (B > 0 && this.columns[B]) {
				this.setColumnVisible(B, !A.checked)
			}
		}
		return true
	},
	setColumnVisible : function(B, A) {
		this.columns[B].hidden = !A;
		this.updateColumnWidths()
	},
	scrollToTop : function() {
		this.innerBody.dom.scrollTop = 0;
		this.innerBody.dom.scrollLeft = 0
	},
	syncScroll : function() {
		this.syncHeaderScroll();
		var A = this.innerBody.dom;
		this.fireEvent("bodyscroll", A.scrollLeft, A.scrollTop)
	},
	syncHeaderScroll : function() {
		var A = this.innerBody.dom;
		this.innerHd.dom.scrollLeft = A.scrollLeft;
		this.innerHd.dom.scrollLeft = A.scrollLeft
	},
	registerNode : function(A) {
		Ext.ux.tree.TreeGrid.superclass.registerNode.call(this, A);
		if (!A.uiProvider && !A.isRoot && !A.ui.isTreeGridNodeUI) {
			A.ui = new Ext.ux.tree.TreeGridNodeUI(A)
		}
	}
});
Ext.reg("treegrid", Ext.ux.tree.TreeGrid);
Ext.ux.tree.TreeRowEditor = Ext.extend(Ext.Panel, {
	hidden : true,
	floating : true,
	shadow : false,
	layout : "hbox",
	cls : "x-small-editor",
	buttonAlign : "center",
	baseCls : "x-row-editor",
	elements : "header,footer,body",
	frameWidth : 5,
	buttonPad : 3,
	monitorValid : true,
	focusDelay : 250,
	saveText : "保存",
	cancelText : "取消",
	adjustHeight : 35,
	adjustButtonHeight : 7,
	columnButton : true,
	defaults : {
		normalWidth : true
	},
	initComponent : function() {
		if (this.columnButton) {
			this.adjustHeight = this.adjustButtonHeight;
			this.buttonWidth = this.buttonWidth || 50
		} else {
			this.buttonWidth = this.buttonWidth || this.minButtonWidth
		}
		Ext.ux.tree.TreeRowEditor.superclass.initComponent.call(this);
		this.addEvents("beforeedit", "canceledit", "validateedit", "afteredit")
	},
	init : function(A) {
		this.tree = A;
		this.ownerCt = A;
		Ext.applyIf(A, {
					editNode : this.editNode.createDelegate(this)
				});
		A.on({
					scope : this,
					beforedestroy : this.beforeDestroy,
					destroy : this.destroy,
					bodyscroll : {
						buffer : 250,
						fn : this.positionButtons
					}
				})
	},
	beforeDestroy : function() {
		this.stopEditing(false);
		this.node = null;
		Ext.destroy(this.saveBtn, this.cancelBtn);
		if (this.btns) {
			Ext.destroy(this.btns)
		}
	},
	refreshFields : function() {
		this.initFields();
		this.verifyLayout()
	},
	isDirty : function() {
		var A;
		this.items.each(function(B) {
					if (String(this.values[B.id]) !== String(B.getValue())) {
						A = true;
						return false
					}
				}, this);
		return A
	},
	startEditing : function(J, M) {
		if (this.editing) {
			return
		}
		if (this.fireEvent("beforeedit", J) !== false) {
			this.editing = true;
			var E = this.tree, L = E.innerBody;
			this.node = J;
			this.values = {};
			if (!this.rendered) {
				this.render(L)
			}
			var D = E.innerCt.getWidth();
			this.setSize(D);
			if (!this.initialized) {
				this.initFields()
			}
			var F = E.columns, P, O = this.items.items, B, H;
			for (var K = 0, G = F.length; K < G; K++) {
				P = F[K], B = O[K];
				if (!P.buttons && this.isField(B)) {
					H = this.preEditValue(J, P.dataIndex);
					B.setValue(H);
					this.values[B.id] = Ext.isEmpty(H) ? "" : H
				}
			}
			this.verifyLayout(J, true);
			var C = Ext.fly(J.ui.elNode).getXY(), A = Ext.fly(J.ui.elNode)
					.getHeight(), N = L.getXY()[1] + L.getHeight();
			var I = C[1] + A + this.adjustHeight;
			if (I > N) {
				L.scroll("b", I);
				C = Ext.fly(J.ui.elNode).getXY();
				I = C[1] + A + this.adjustHeight;
				if (I > N) {
					C[1] = N - A - this.adjustHeight
				}
			}
			if (!this.isVisible()) {
				this.setPagePosition(C)
			} else {
				this.el.setXY(C, {
							duration : 0.15
						})
			}
			if (!this.isVisible()) {
				this.show().doLayout()
			}
			if (M !== false) {
				this.doFocus.defer(this.focusDelay, this)
			}
		}
	},
	stopEditing : function(J) {
		this.editing = false;
		if (!this.isVisible()) {
			return
		}
		if (J === false || !this.isValid()) {
			this.hide();
			this.fireEvent("canceledit", this.node);
			return
		}
		var L = {}, F = this.node, E = false, C = this.tree.columns, I, K = this.items.items;
		for (var G = 0, A = C.length; G < A; G++) {
			I = C[G];
			if (!I.hidden && !I.buttons) {
				var B = I.dataIndex;
				var H = F.attributes[B], D = this.postEditValue(
						K[G].getValue(), H, F, B);
				if (String(H) !== String(D)) {
					L[B] = D;
					E = true
				}
			}
		}
		if (E && this.fireEvent("validateedit", F, L) !== false) {
			Ext.apply(F.attributes, L);
			Ext.iterate(L, function(O, Q) {
						var N = 0, R;
						for (var M = 0, P = C.length; M < P; M++) {
							R = C[M];
							if (R.dataIndex == O) {
								N = M;
								break
							}
						}
						if (N == 0) {
							F.ui.textNode.innerHTML = R.tpl ? R.tpl
									.apply(F.attributes) : Q
						} else {
							F.ui.elNode.childNodes[N].firstChild.innerHTML = R.tpl
									? R.tpl.apply(F.attributes)
									: Q
						}
					});
			this.fireEvent("afteredit", F, L)
		}
		this.hide()
	},
	verifyLayout : function(F, B) {
		if (this.el && (this.isVisible() || B === true)) {
			var C = F.ui.elNode;
			this.setSize(Ext.fly(C).getWidth(), Ext.isIE ? Ext.fly(C)
							.getHeight()
							+ 9 : undefined);
			var D = this.tree.columns, I = this.items.items, A;
			for (var E = 0, H = D.length; E < H; E++) {
				A = I[E];
				if (A && this.isField(A)) {
					var G = 0;
					if (E === (H - 1)) {
						G += 3
					} else {
						G += 1
					}
					A.setWidth(D[E].width - G)
				}
			}
			this.doLayout();
			this.positionButtons()
		}
	},
	slideHide : function() {
		this.hide()
	},
	initFields : function() {
		var F = this.tree.columns, C = Ext.layout.ContainerLayout.prototype.parseMargins;
		this.removeAll(false);
		for (var B = 0, D = F.length; B < D; B++) {
			var E = F[B], A = E.editor;
			if (this.columnButton) {
				if (B == D - 1) {
					this.cancelBtn.margins = C("0 0 2 2");
					this.add([this.saveBtn, this.cancelBtn]);
					continue
				} else {
					if (E.buttons) {
						A = new Ext.BoxComponent()
					}
				}
			} else {
				if (E.buttons) {
					continue
				}
			}
			if (!A) {
				A = E.displayEditor || new Ext.form.DisplayField()
			}
			if (B == 0) {
				A.margins = C("0 1 2 1")
			} else {
				if (B == D - 1) {
					A.margins = C("0 0 2 1")
				} else {
					A.margins = C("0 1 2")
				}
			}
			A.setWidth(E.width);
			A.column = E;
			if (A.ownerCt !== this) {
				A.on("specialkey", this.onKey, this)
			}
			this.insert(B, A)
		}
		this.initialized = true
	},
	onKey : function(B, A) {
		if (A.getKey() === A.ENTER) {
			this.stopEditing(true);
			A.stopPropagation()
		}
	},
	editNode : function(A) {
		this.startEditing(A, true)
	},
	onRender : function() {
		Ext.ux.tree.TreeRowEditor.superclass.onRender.apply(this, arguments);
		this.el.swallowEvent(["keydown", "keyup", "keypress"]);
		this.saveBtn = new Ext.Button({
					ref : "saveBtn",
					itemId : "saveBtn",
					text : this.saveText,
					width : this.buttonWidth,
					handler : this.stopEditing.createDelegate(this, [true])
				});
		this.cancelBtn = new Ext.Button({
					text : this.cancelText,
					width : this.buttonWidth,
					handler : this.stopEditing.createDelegate(this, [false])
				});
		if (!this.columnButton) {
			this.btns = new Ext.Panel({
						baseCls : "x-plain",
						cls : "x-btns",
						elements : "body",
						layout : "table",
						width : (this.buttonWidth * 2) + (this.frameWidth * 2)
								+ (this.buttonPad * 4),
						items : [this.saveBtn, this.cancelBtn]
					});
			this.btns.render(this.bwrap)
		}
	},
	afterRender : function() {
		Ext.ux.tree.TreeRowEditor.superclass.afterRender.apply(this, arguments);
		this.positionButtons();
		if (this.monitorValid) {
			this.startMonitoring()
		}
	},
	onShow : function() {
		if (this.monitorValid) {
			this.startMonitoring()
		}
		Ext.ux.tree.TreeRowEditor.superclass.onShow.apply(this, arguments)
	},
	onHide : function() {
		Ext.ux.tree.TreeRowEditor.superclass.onHide.apply(this, arguments);
		this.stopMonitoring()
	},
	positionButtons : function() {
		if (this.btns) {
			var D = this.tree, A = this.el.dom.clientHeight, C = D.innerBody.dom.scrollLeft, B = this.btns
					.getWidth(), E = D.getWidth();
			this.btns.el.shift({
						left : (E / 2) - (B / 2) + C,
						top : A - 2,
						stopFx : true,
						duration : 0.2
					})
		}
	},
	preEditValue : function(B, C) {
		var A = B.attributes[C];
		return this.autoEncode && typeof A === "string" ? Ext.util.Format
				.htmlDecode(A) : A
	},
	postEditValue : function(C, A, B, D) {
		return this.autoEncode && typeof C == "string" ? Ext.util.Format
				.htmlEncode(C) : C
	},
	doFocus : function() {
		if (this.isVisible()) {
			var D = this.tree.columns, C;
			for (var A = 0, B = D.length; A < B; A++) {
				C = D[A];
				if (!C.hidden && C.editor) {
					C.editor.focus();
					break
				}
			}
		}
	},
	startMonitoring : function() {
		if (!this.bound && this.monitorValid) {
			this.bound = true;
			Ext.TaskMgr.start({
						run : this.bindHandler,
						interval : this.monitorPoll || 200,
						scope : this
					})
		}
	},
	stopMonitoring : function() {
		this.bound = false
	},
	isValid : function() {
		var A = true;
		this.items.each(function(B) {
					if (this.isField(B) && !B.isValid(true)) {
						A = false;
						return false
					}
				}, this);
		return A
	},
	isField : function(A) {
		return !!A.setValue && !!A.getValue && !!A.markInvalid
				&& !!A.clearInvalid
	},
	bindHandler : function() {
		if (!this.bound) {
			return false
		}
		var A = this.isValid();
		this.saveBtn.setDisabled(!A);
		this.fireEvent("validation", this, A)
	}
});
Ext.preg("ptreeroweditor", Ext.ux.tree.TreeRowEditor);
Ext.ux.tree.EditTreeGrid = Ext.extend(Ext.ux.tree.TreeGrid, {
	idProperty : "id",
	enableSort : false,
	enableHdMenu : false,
	highlightColor : "#d9e8fb",
	depth : Number.MAX_VALUE,
	rowEdit : true,
	delConfirm : "Confirm",
	delConfirmMsg : "Are you sure you want to do that?",
	isTreeEditor : true,
	initComponent : function() {
		this.enableHdMenu = false;
		if (this.rowEdit) {
			this.animate = false;
			this.editor = new Ext.ux.tree.TreeRowEditor({
						listeners : {
							scope : this,
							canceledit : this.cancelEdit,
							afteredit : this.saveNode
						}
					});
			this.plugins = this.plugins || [];
			this.plugins.push(this.editor)
		}
		Ext.ux.tree.EditTreeGrid.superclass.initComponent.call(this)
	},
	beforeDestroy : function() {
		Ext.destroy(this.editor);
		Ext.ux.tree.EditTreeGrid.superclass.beforeDestroy.call(this)
	},
	initColumns : function() {
		var C = this.columns, D = C.length, F = [], A, E, B;
		for (A = 0; A < D; A++) {
			E = C[A];
			if (!E.isColumn) {
				E.xtype = E.xtype ? (/^tg/.test(E.xtype) ? E.xtype : "tg"
						+ E.xtype) : "tgcolumn";
				if (E.buttons) {
					E.buttons = Ext.isArray(E.buttons)
							? E.buttons
							: [E.buttons];
					E.buttonIconCls = Ext.isDefined(E.buttonIconCls) ? (Ext
							.isArray(E.buttonIconCls)
							? E.buttonIconCls
							: [E.buttonIconCls]) : [];
					E.buttonText = Ext.isDefined(E.buttonText) ? (Ext
							.isArray(E.buttonText)
							? E.buttonText
							: [E.buttonText]) : [];
					E.buttonTips = Ext.isDefined(E.buttonTips) ? (Ext
							.isArray(E.buttonTips)
							? E.buttonTips
							: [E.buttonTips]) : [];
					if (this.rowEdit) {
						E.buttonHandler = []
					} else {
						E.buttonHandler = E.buttonHandler || [];
						E.buttonHandler = Ext.isArray(E.buttonHandler)
								? E.buttonHandler
								: [E.buttonHandler]
					}
					B = [];
					Ext.each(E.buttons, function(G, H) {
						G = Ext.util.Format.lowercase(G);
						B
								.push('<div gridbtn="', G,
										'" class="x-treegrid-button-item x-toolbar"></div>');
						if (this.rowEdit) {
							E.buttonHandler.push(this[G + "Node"])
						}
					}, this);
					E.tpl = new Ext.XTemplate(B);
					E.dataIndex = this.idProperty;
					E.editable = false
				}
				E = Ext.create(E)
			}
			E.init(this);
			F.push(E);
			if (this.enableSort !== false && E.sortable !== false) {
				E.sortable = true;
				this.enableSort = true
			}
		}
		this.columns = F
	},
	updateColumnWidths : function() {
		var D = this.columns, H = D.length, E = this.outerCt.query("colgroup"), A = E.length, G, I, F, B;
		for (F = 0; F < H; F++) {
			G = D[F];
			for (B = 0; B < A; B++) {
				I = E[B];
				I.childNodes[F].style.width = (G.hidden ? 0 : G.width) + "px"
			}
		}
		for (F = 0, E = this.innerHd.query("td"), len = E.length; F < len; F++) {
			G = Ext.fly(E[F]);
			if (D[F] && D[F].hidden) {
				G.addClass("x-treegrid-hd-hidden")
			} else {
				G.removeClass("x-treegrid-hd-hidden")
			}
		}
		var C = this.getTotalColumnWidth();
		Ext.fly(this.innerHd.dom.firstChild).setWidth(C
				+ (this.scrollOffset || 0));
		this.outerCt.select("table").each(function(J, L, K) {
					if (!J.hasClass("x-btn")) {
						J.setWidth(C)
					}
				}, this);
		this.syncHeaderScroll()
	},
	addNodeByPid : function(B, D) {
		var C = this.getNodeById(B);
		if (C) {
			C.leaf = false;
			if (!this.getNodeById(D.id)) {
				if (!D.uiProvider) {
					D.uiProvider = Ext.ux.tree.TreeGridNodeUI
				}
				var A = new Ext.tree.TreeNode(D);
				C.expand(false, false, function() {
							C.appendChild(A);
							Ext.fly(A.ui.elNode).highlight(this.highlightColor)
						}, this)
			}
		}
	},
	addNode : function(A) {
		if (this.editor.editing || A.getDepth() + 1 > this.depth) {
			return
		}
		var B = {
			_isNewTreeGridNode : true
		};
		B[this.idProperty] = "";
		var E = this.columns, F = E.length, G;
		for (i = 0; i < F; i++) {
			G = E[i];
			if (G.dataIndex) {
				B[G.dataIndex] = ""
			}
		}
		var C = new Ext.tree.TreeNode(B);
		if (A.isLeaf()) {
			A.leaf = false
		} else {
			if (A.lastChild) {
				var D = this.getButton(A.lastChild, "degrade");
				if (D) {
					D.enable()
				}
			}
		}
		A.expand(false, false, function() {
					A.appendChild(C);
					Ext.fly(C.ui.elNode).highlight(this.highlightColor);
					this.editNode(C)
				}, this)
	},
	updateNode : function(A) {
		if (this.editor.editing) {
			return
		}
		this.editNode(A)
	},
	cancelEdit : function(B) {
		if (B.attributes._isNewTreeGridNode) {
			var A = B.parentNode;
			if (A.childNodes.length == 1) {
				A.leaf = true
			}
			B.remove();
			if (A.childNodes.length < 1) {
				this.updateLeafIcon(A)
			} else {
				var C = this.getButton(A.lastChild, "degrade");
				if (C) {
					C.disable()
				}
			}
		}
	},
	saveNode : function(A, D) {
		Ext.fly(A.ui.elNode).highlight(this.highlightColor);
		var E = {}, C = {
			node : A,
			changes : D
		};
		Ext.applyIf(E, A.attributes);
		E.parentNodeId = A.parentNode.id;
		var B = this.columns;
		Ext.iterate(D, function(H, J) {
					var G = 0, K;
					for (var F = 0, I = B.length; F < I; F++) {
						K = B[F];
						if (K.dataIndex == H) {
							G = F;
							break
						}
					}
					Ext.fly(A.ui.elNode.childNodes[G])
							.addClass("x-grid3-dirty-cell")
				});
		this.doRequest(A.attributes._isNewTreeGridNode ? "add" : "update", this
						.filterParams(E), this.processSave, C)
	},
	processSave : function(F, C) {
		try {
			var A = C.node, D = C.changes;
			if (A.attributes._isNewTreeGridNode) {
				var E = Ext.decode(F.responseText);
				A.attributes._isNewTreeGridNode = false;
				if (E.id) {
					A.setId(E.id)
				}
				if (E[this.idProperty]) {
					A.attributes[this.idProperty] = E[this.idProperty]
				}
			}
			var B = this.columns;
			Ext.iterate(D, function(J, L) {
						var I = 0, M;
						for (var H = 0, K = B.length; H < K; H++) {
							M = B[H];
							if (M.dataIndex == J) {
								I = H;
								break
							}
						}
						Ext.fly(A.ui.elNode.childNodes[I])
								.removeClass("x-grid3-dirty-cell")
					})
		} catch (G) {
		}
	},
	removeNode : function(B) {
		if (this.editor.editing) {
			return
		}
		var A = B.parentNode, E = B.previousSibling, F = B.nextSibling;
		if (A.childNodes.length == 1) {
			A.leaf = true
		}
		B.remove();
		if (A.childNodes.length < 1) {
			this.updateLeafIcon(A)
		} else {
			if (E && E.isLast()) {
				var D = this.getButton(E, "degrade");
				if (D) {
					D.disable()
				}
			}
			if (F && F.isFirst()) {
				var C = this.getButton(F, "upgrade");
				if (C) {
					C.disable()
				}
			}
		}
		var G = {
			id : B.id,
			parentNodeId : A.id
		};
		G[this.idProperty] = B.attributes[this.idProperty];
		this.doRequest("remove", this.filterParams(G))
	},
	upgradeNode : function(A) {
		if ((this.editor && this.editor.editing) || A.isFirst()) {
			return
		}
		A.parentNode.insertBefore(A, A.previousSibling);
		if (A.isFirst()) {
			this.getButton(A, "upgrade").disable();
			this.getButton(A, "degrade").enable();
			this.getButton(A.nextSibling, "upgrade").enable();
			if (A.nextSibling.isLast()) {
				this.getButton(A.nextSibling, "degrade").disable()
			}
		} else {
			this.getButton(A, "degrade").enable();
			this.getButton(A.nextSibling, "upgrade").enable();
			if (A.nextSibling.isLast()) {
				this.getButton(A.nextSibling, "degrade").disable()
			}
		}
		Ext.fly(A.ui.elNode).highlight(this.highlightColor);
		var B = {
			id : A.id,
			parentNodeId : A.parentNode.id
		};
		B[this.idProperty] = A.attributes[this.idProperty];
		this.doRequest("upgrade", this.filterParams(B))
	},
	degradeNode : function(A) {
		if ((this.editor && this.editor.editing) || A.isLast()) {
			return
		}
		A.parentNode.insertBefore(A, A.nextSibling.nextSibling);
		if (A.isLast()) {
			this.getButton(A, "upgrade").enable();
			this.getButton(A, "degrade").disable();
			if (A.previousSibling.isFirst()) {
				this.getButton(A.previousSibling, "upgrade").disable()
			}
			this.getButton(A.previousSibling, "degrade").enable()
		} else {
			this.getButton(A, "upgrade").enable();
			this.getButton(A, "degrade").enable();
			if (A.previousSibling.isFirst()) {
				this.getButton(A.previousSibling, "upgrade").disable()
			}
			this.getButton(A.previousSibling, "degrade").enable()
		}
		Ext.fly(A.ui.elNode).highlight(this.highlightColor);
		var B = {
			id : A.id,
			parentNodeId : A.parentNode.id
		};
		B[this.idProperty] = A.attributes[this.idProperty];
		this.doRequest("degrade", this.filterParams(B))
	},
	doRequest : function(A, D, C, B) {
		if (!this.requestApi || !this.requestApi[A]) {
			return
		}
		D = Ext.apply({
					requestAction : A
				}, D);
		B = Ext.applyIf(B || {}, {
					params : D
				});
		if (Ext.isString(this.requestApi[A])) {
			B.url = this.requestApi[A]
		} else {
			Ext.applyIf(B, this.requestApi[A])
		}
		if (C) {
			if (B.success) {
				B.success = C.createDelegate(this).createSequence(B.success)
			} else {
				if (B.callback) {
					B.callback = C.createDelegate(this)
							.createSequence(B.callback)
				} else {
					B.success = C.createDelegate(this)
				}
			}
		}
		Ext.Ajax.request(B)
	},
	getButton : function(A, B) {
		return A.buttons.get(B)
	},
	updateLeafIcon : function(A) {
		if (A.ui.elNode) {
			Ext.fly(A.ui.elNode).replaceClass("x-tree-node-collapsed",
					"x-tree-node-leaf")
		}
	},
	filterParams : function(A) {
		delete A.uiProvider;
		delete A.iconCls;
		delete A.loader;
		delete A.leaf;
		delete A.children;
		delete A._isNewTreeGridNode;
		return A
	},
	disableButton : function(A, B) {
		A = Ext.isString(A) ? this.getNodeById(A) : A;
		A.disableButton(B)
	},
	enableButton : function(A, B) {
		A = Ext.isString(A) ? this.getNodeById(A) : A;
		A.enableButton(B)
	},
	hideButton : function(A, B) {
		A = Ext.isString(A) ? this.getNodeById(A) : A;
		A.hideButton(B)
	},
	showButton : function(A, B) {
		A = Ext.isString(A) ? this.getNodeById(A) : A;
		A.showButton(B)
	}
});
Ext.reg("edittreegrid", Ext.ux.tree.EditTreeGrid);
Ext.apply(Ext.ux.tree.TreeGridNodeUI.prototype, {
	renderElements : function(G, K, E, L) {
		var C = G.getOwnerTree(), F = C.columns, J = F[0], I, H, A;
		this.indentMarkup = G.parentNode
				? G.parentNode.ui.getChildIndent()
				: "";
		H = ['<tbody class="x-tree-node">', '<tr ext:tree-node-id="', G.id,
				'" class="x-tree-node-el x-tree-node-leaf ', K.cls, '">',
				'<td class="x-treegrid-col">',
				'<span class="x-tree-node-indent">', this.indentMarkup,
				"</span>", '<img src="', this.emptyIcon,
				'" class="x-tree-ec-icon x-tree-elbow">', '<img src="',
				K.icon || this.emptyIcon, '" class="x-tree-node-icon',
				(K.icon ? " x-tree-node-inline-icon" : ""),
				(K.iconCls ? " " + K.iconCls : ""), '" unselectable="on">',
				'<a hidefocus="on" class="x-tree-node-anchor" href="',
				K.href ? K.href : "#", '" tabIndex="1" ',
				K.hrefTarget ? ' target="' + K.hrefTarget + '"' : "", ">",
				'<span unselectable="on">',
				(J.tpl ? J.tpl.apply(K) : K[J.dataIndex] || J.text),
				"</span></a>", "</td>"];
		for (I = 1, A = F.length; I < A; I++) {
			J = F[I];
			H.push('<td class="x-treegrid-col ', (J.cls ? J.cls : ""), '">',
					'<div unselectable="on" class="', J.buttons
							? "x-treegrid-button"
							: "x-treegrid-text", '"', (J.align
							? ' style="text-align: ' + J.align + ';"'
							: ""), ">", (J.tpl
							? J.tpl.apply(K)
							: K[J.dataIndex]), "</div>", "</td>")
		}
		H
				.push(
						'</tr><tr class="x-tree-node-ct"><td colspan="',
						F.length,
						'">',
						'<table class="x-treegrid-node-ct-table" cellpadding="0" cellspacing="0" style="table-layout: fixed; display: none; width: ',
						C.innerCt.getWidth(), 'px;"><colgroup>');
		for (I = 0, A = F.length; I < A; I++) {
			H.push('<col style="width: ', (F[I].hidden ? 0 : F[I].width),
					'px;" />')
		}
		H.push("</colgroup></table></td></tr></tbody>");
		if (L !== true && G.nextSibling && G.nextSibling.ui.getEl()) {
			this.wrap = Ext.DomHelper.insertHtml("beforeBegin",
					G.nextSibling.ui.getEl(), H.join(""))
		} else {
			this.wrap = Ext.DomHelper.insertHtml("beforeEnd", E, H.join(""))
		}
		if (!G.buttons) {
			G.buttons = new Ext.util.MixedCollection(false, function(M) {
						return M.itemId
					})
		}
		var D = Ext.get(this.wrap);
		for (I = 0, A = F.length; I < A; I++) {
			J = F[I];
			if (J.buttons) {
				Ext.each(J.buttons, function(N, O) {
					var M = J.buttonHandler[O];
					var P = new Ext.Button({
								itemId : N,
								disabled : (G.attributes[N + "BtnDisabled"] === true)
										|| (N == "add" && G.getDepth() == C.depth),
								hidden : (G.attributes[N + "BtnHidden"] === true),
								iconCls : J.buttonIconCls[O],
								text : J.buttonText[O],
								tooltip : J.buttonTips[O],
								handler : function() {
									if (N == "remove") {
										Ext.MessageBox.confirm(C.delConfirm,
												C.delConfirmMsg, function(Q) {
													if (Q == "yes") {
														M.call(C, G)
													}
												});
										return
									}
									M.call(C, G)
								},
								scope : C
							});
					if ((N == "upgrade" && G.isFirst())
							|| (N == "degrade" && G.isLast())) {
						P.disable()
					}
					G.buttons.add(P);
					P.render(D.child("[gridbtn=" + N + "]"))
				}, this)
			}
		}
		this.elNode = this.wrap.childNodes[0];
		this.ctNode = this.wrap.childNodes[1].firstChild.firstChild;
		var B = this.elNode.firstChild.childNodes;
		this.indentNode = B[0];
		this.ecNode = B[1];
		this.iconNode = B[2];
		this.anchor = B[3];
		this.textNode = B[3].firstChild
	}
});
Ext.apply(Ext.tree.TreeNode.prototype, {
			disableButton : function(A) {
				if (A == "upgrade" || A == "degrade") {
					return
				}
				if (A) {
					this.buttons.get(A).disable()
				}
			},
			enableButton : function(A) {
				if (A == "upgrade" || A == "degrade") {
					return
				}
				if (A) {
					this.buttons.get(A).enable()
				}
			},
			hideButton : function(A) {
				if (A) {
					this.buttons.get(A).hide()
				}
			},
			showButton : function(A) {
				if (A) {
					this.buttons.get(A).show()
				}
			},
			originalTreeNodeDestroy : Ext.tree.TreeNode.prototype.destroy,
			destroy : function(A) {
				if (this.buttons) {
					this.buttons.each(function(B) {
								Ext.destroy(B)
							}, this);
					this.buttons.clear()
				}
				this.originalTreeNodeDestroy.call(this, A)
			}
		});