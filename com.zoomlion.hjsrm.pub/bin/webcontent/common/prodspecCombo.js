Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.ProdspecComboBox
 * @extends Ext.form.ComboBox
 *          <p>
 *          元件型号查询下拉框组件
 * 
 * this.queryPanel.prodSpecSel.mon(this.queryPanel.prodSpecSel, 'select',
 * function(fcombo, record, eOpts) { alert(record.data.blankingSize);
 * alert(record.data.denseNet); alert(record.data.pageWidth); }, this);
 * 
 * 
 */
com.keensen.ump.ProdspecComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : false,
			triggerAction : "all",
			// 增量查询
			typeAhead : true,
			lazyRender : true,
			minChars : 1,
			queryDelay : 200,// 查询延时，毫秒,
			editable : true,
			listeners : {
				'focus' : {
					fn : function(e) {
						e.expand();
						this.doQuery(this.allQuery, true);
					},
					buffer : 200
				},
				"expand" : function(A) {
					// this.reset()
				},
				'beforequery' : function(e) {
					var combo = this, size = 15, idx = 1;

					if (e.query === '' || e.query == null) {// 当输入框删除内容后，清除过滤器，
						// 显示原本store数据,使其能够再次检索
						combo.store.clearFilter();
						combo.expand();

					} else {
						if (!e.forceAll) {

							combo.store.clearFilter();// 使每次输入都能进行检索，不用担心输入过慢
							var input = e.query;
							// 检索的正则
							var regExp = new RegExp(".*" + input.toUpperCase() + ".*");
							// 执行检索
							combo.store.filterBy(function(record, id) {
										if (idx > size) {
											return false;
										}
										var text = record
												.get(combo.displayField);
										var flag = regExp.test(text);
										if (flag) {
											idx++;
										}
										return flag;
									});
							combo.expand();
							return false;
						}
					}
				}
			},

			mode : "local",
			valueField : "id",
			displayField : "name",
			defaultValue : '',
			// resizable : false,
			forceSelection : true,
			emptyText : "--请选择--",
			initComponent : function() {
				this.buildStore();
				com.keensen.ump.ProdspecComboBox.superclass.initComponent
						.call(this);
				// this.store.load();

			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url : 'com.keensen.ump.base.base.queryProdspec.biz.ext',
							root : 'data',
							autoLoad : true,
							fields : [{
										name : "id"
									}, {
										name : "name"
									}, {
										name : "blankingSize"
									}, {
										name : "denseNet"
									}, {
										name : "pageWidth"
									}, {
										name : "numPerWad"
									}],
							listeners : {
								scope : this,
								load : function() {
									this.setValue(this.defaultValue);
									this.fireEvent('callback', this);
								}

							}
						});
				//
			}
		});
Ext.reg("prodspeccombobox", com.keensen.ump.ProdspecComboBox);