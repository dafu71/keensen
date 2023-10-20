Ext.ns("com.zoomlion.hjsrm");
/**
 * 
 * @class com.zoomlion.hjsrm.CplbComboBox
 * @extends Ext.form.ComboBox
 * @author 刘鑫
 * <p>产品类别下拉组件
 */
com.zoomlion.hjsrm.CplbComboBox = Ext.extend(Ext.form.ComboBox, {
			editable : false,
			triggerAction : "all",
			mode : "local",
			valueField : "hbdm",
			displayField : "flmc",
			defaultValue:'',
			ssdj:'',
			hbdm:'',
			//resizable : false,
			forceSelection : true,
			emptyText : "--请选择--",
			initComponent : function() {
				this.buildStore();
				com.zoomlion.hjsrm.CplbComboBox.superclass.initComponent.call(this);
				//this.store.load();
				
			},
			buildStore : function() {
				this.store = new Ext.data.JsonStore({
							url:'com.zoomlion.hjsrm.pub.busi.common.srmcommon.querycplxcombo.biz.ext',
							root : 'data',
							baseParams : {
			                 		"condition/ssdj": this.ssdj,
			                 		"condition/hbdm": this.hbdm
			                      	},
							autoLoad : true,
							fields : [{
										name : "flmc"
									}, {
										name : "hbdm"
									}],
							listeners : {
								scope : this,
								load:function(){
									this.setValue(this.defaultValue);
								}
							
							}
						});
				//
			}
		});
Ext.reg("cplbcombobox", com.zoomlion.hjsrm.CplbComboBox);