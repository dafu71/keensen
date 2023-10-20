/**
 * 自定义布局类，为解决在收缩panel上加操作按钮
 * @class Ext.layout.exBorderLayout
 * @extends Ext.layout.BorderLayout
 */
Ext.layout.exBorderLayout = Ext.extend(Ext.layout.BorderLayout, {
	onLayout : function(ct, target) {
		var collapsed, i, c, pos, items = ct.items.items, len = items.length;
		if (!this.rendered) {
			collapsed = [];
			for (i = 0; i < len; i++) {
				c = items[i];
				pos = c.region;
				if (c.collapsed) {
					collapsed.push(c);
				}
				c.collapsed = false;
				if (!c.rendered) {
					c.render(target, i);
					c.getPositionEl().addClass('x-border-panel');
				}
				this[pos] = pos != 'center' && c.split
						? new Ext.layout.BorderLayout.SplitRegion(this,
								c.initialConfig, pos)
						: new Ext.layout.BorderLayout.exActionRegion(this,
								c.initialConfig, pos);
				this[pos].render(target, c);
			}
			this.rendered = true;
		}

		var size = this.getLayoutTargetSize();
		if (size.width < 20 || size.height < 20) { // display none?
			if (collapsed) {
				this.restoreCollapsed = collapsed;
			}
			return;
		} else if (this.restoreCollapsed) {
			collapsed = this.restoreCollapsed;
			delete this.restoreCollapsed;
		}

		var w = size.width, h = size.height, centerW = w, centerH = h, centerY = 0, centerX = 0, n = this.north, s = this.south, west = this.west, e = this.east, c = this.center, b, m, totalWidth, totalHeight;
		if (!c && Ext.layout.BorderLayout.WARN !== false) {
			throw 'No center region defined in BorderLayout ' + ct.id;
		}

		if (n && n.isVisible()) {
			b = n.getSize();
			m = n.getMargins();
			b.width = w - (m.left + m.right);
			b.x = m.left;
			b.y = m.top;
			centerY = b.height + b.y + m.bottom;
			centerH -= centerY;
			n.applyLayout(b);
		}
		if (s && s.isVisible()) {
			b = s.getSize();
			m = s.getMargins();
			b.width = w - (m.left + m.right);
			b.x = m.left;
			totalHeight = (b.height + m.top + m.bottom);
			b.y = h - totalHeight + m.top;
			centerH -= totalHeight;
			s.applyLayout(b);
		}
		if (west && west.isVisible()) {
			b = west.getSize();
			m = west.getMargins();
			b.height = centerH - (m.top + m.bottom);
			b.x = m.left;
			b.y = centerY + m.top;
			totalWidth = (b.width + m.left + m.right);
			centerX += totalWidth;
			centerW -= totalWidth;
			west.applyLayout(b);
		}
		if (e && e.isVisible()) {
			b = e.getSize();
			m = e.getMargins();
			b.height = centerH - (m.top + m.bottom);
			totalWidth = (b.width + m.left + m.right);
			b.x = w - totalWidth + m.left;
			b.y = centerY + m.top;
			centerW -= totalWidth;
			e.applyLayout(b);
		}
		if (c) {
			m = c.getMargins();
			var centerBox = {
				x : centerX + m.left,
				y : centerY + m.top,
				width : centerW - (m.left + m.right),
				height : centerH - (m.top + m.bottom)
			};
			c.applyLayout(centerBox);
		}
		if (collapsed) {
			for (i = 0, len = collapsed.length; i < len; i++) {
				collapsed[i].collapse(false);
			}
		}
		if (Ext.isIE && Ext.isStrict) { // workaround IE strict repainting issue
			target.repaint();
		}
		// Putting a border layout into an overflowed container is NOT correct and will make a second layout pass necessary.
		if (i = target.getStyle('overflow') && i != 'hidden'
				&& !this.adjustmentPass) {
			var ts = this.getLayoutTargetSize();
			if (ts.width != size.width || ts.height != size.height) {
				this.adjustmentPass = true;
				this.onLayout(ct, target);
			}
		}
		delete this.adjustmentPass;
	}
});
Ext.layout.BorderLayout.exActionRegion = Ext.extend(Ext.layout.BorderLayout.Region, {
	getCollapsedEl : function() {
		this.collapsedEl = Ext.layout.BorderLayout.exActionRegion.superclass.getCollapsedEl.call(this);
		if (this.collapsedEl && !this.exActionEl) {
			var tt = new Ext.Template('<div style="float:right;">',
				'<table id="ext-comp-1102" cellspacing="0" class="x-btn x-btn-noicon " style="width: 34px;">',
										'<tbody class="x-btn-small x-btn-icon-small-left">',
										'<tr><td class="x-btn-tl"><i>&nbsp;</i></td>',
											'<td class="x-btn-tc"></td>',
											'<td class="x-btn-tr"><i>&nbsp;</i></td>',
										'</tr>',
										'<tr>',
											'<td class="x-btn-ml"><i>&nbsp;</i></td>',
											'<td class="x-btn-mc">',
												'<em class unselectable="on">',
												'<button type="button" id="ext-gen59" class=" x-btn-text">{buttonText}</button>',
												'</em>',
											'</td>',
											'<td class="x-btn-mr"><i>&nbsp;</i></td></tr>',
										'<tr>',
											'<td class="x-btn-bl"><i>&nbsp;</i></td>',
											'<td class="x-btn-bc"></td>',
											'<td class="x-btn-br"><i>&nbsp;</i></td>',
										'</tr>',
										'</tbody>',
									'</table>',
									'</div>');
				tt.disableFormats = true;
				tt.compile();
			this.exActionEl = tt.append(this.collapsedEl.dom,{
				id:'query',
				buttonText:this.buttonText||'查询'
			},true);
			this.exActionEl.addClassOnOver("x-btn-over");
			this.exActionEl.on('click', this.panel.actionHandler, this.panel.scope || this, {
							stopEvent : true
			});
		}
		return this.collapsedEl;
	},
	destroy : function() {
        Ext.layout.BorderLayout.exActionRegion.superclass.destroy.call(this);
        Ext.destroyMembers(this,'exActionEl','collapsedEl');
    }
});
Ext.Container.LAYOUTS['exborder'] = Ext.layout.exBorderLayout;