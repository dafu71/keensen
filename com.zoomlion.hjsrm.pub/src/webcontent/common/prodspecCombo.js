Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.ProdspecComboBox
 * @extends Ext.form.ComboBox
 * <p>元件型号查询下拉框组件
 * 
 * this.queryPanel.prodSpecSel.mon(this.queryPanel.prodSpecSel, 'select', function(fcombo, record, eOpts) {
		alert(record.data.blankingSize);
		alert(record.data.denseNet);
		alert(record.data.pageWidth);
	}, this);
 * 
 * 
 */
com.keensen.ump.ProdspecComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : false,
			triggerAction : "all",
			mode : "local",
			valueField : "id",
			displayField : "name",
			defaultValue:'',
			//resizable : false,
			forceSelection : true,
			emptyText : "--请选择--",
			initComponent : function() {
				this.buildStore();
				com.keensen.ump.ProdspecComboBox.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.keensen.ump.base.base.queryProdspec.biz.ext',
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
									}],
							listeners : {
								scope : this,
								load:function(){
									this.setValue(this.defaultValue);
									this.fireEvent('callback',this);
								}
							
							}
						});
				//
			}
		});
Ext.reg("prodspeccombobox", com.keensen.ump.ProdspecComboBox);