Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.MenuComboBox
 * @extends Ext.form.ComboBox
 *          <p>
 *          菜单查询下拉框组件
 */
com.keensen.ump.MenuComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : false,
			triggerAction : "all",

			// 自定义属性
			state : '',

			// 增量查询
			typeAhead : true,
			lazyRender : true,
			minChars : 1,
			queryDelay : 200,// 查询延时，毫秒,
			editable : true,
			listeners : {
				'select' : function(combo, record, index) {
					var itemId = record.get('itemId');
					var id = record.get('id');
					var text = record.get('text');
					var url = record.get('url');
					var spacepanel = Ext.getCmp('spacepanel');

					spacepanel.remove(spacepanel.getItem(itemId));
					spacepanel.open({
								id : id,
								text : text,
								attributes : {
									respath : url
								}
							});

				},
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
							var regExp = new RegExp(".*" + input.toUpperCase()
									+ ".*");
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
			displayField : "text",
			defaultValue : '',
			// resizable : false,
			forceSelection : true,
			emptyText : "--查找菜单--",
			initComponent : function() {
				this.buildStore();
				com.keensen.ump.MenuComboBox.superclass.initComponent
						.call(this);
				// this.store.load();

			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url : 'com.keensen.ump.base.base.queryMenu.biz.ext',
							root : 'data',
							autoLoad : true,
							baseParams : {},
							fields : [{
										name : "id"
									}, {
										name : "itemId"
									}, {
										name : "url"
									}, {
										name : "text"
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
Ext.reg("menucombobox", com.keensen.ump.MenuComboBox);