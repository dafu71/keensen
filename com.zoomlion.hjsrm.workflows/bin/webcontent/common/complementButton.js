Ext.namespace('Srm.workflows');
/**
 * 
 * @class Srm.workflows.ComplementView
 * @extends Ext.Window
 * <p>补话信息窗口
 */
Srm.workflows.ComplementView = Ext.extend(Ext.Window,{
	title:'补话信息',
	/**
	 * 关联按钮
	 * @cfg 
	 */
	button:undefined,
	layout:'fit',closeAction:'hide',
	height:300,width:600,
	modal:true,minimizable:true,maximizable:true,
	url:undefined,
	initComponent:function(){
		this.buildStore();
		this.pagingToolbar = new Ext.ex.PagingToolbarEx({
								xtype : "pagingtoolbarex",
								pageSize : this.pageSize||15,
								store : this.store
							});
		this.bbar = this.pagingToolbar;
		this.buildItems();
		Srm.workflows.ComplementView.superclass.initComponent.call(this);
		this.dataView = this.getComponent('Dataview');
		this.mon(this.store,'load',function(store,records,opt){
			var total = records.length;
			if(total>0){
				this.button.updateComplement(true,total);
			}else{
				this.button.updateComplement(false,0);
			}
		},this);
	},
	buildItems:function(){
		this.items= [{
                    xtype: 'dataview',
                    itemId:'Dataview',
                    autoScroll:true,
                    style:{
                    	'background-color': '#fff'
                    },
                    store:this.store,
                    //overClass:'my-row-over',
                    selectedClass:'my-row-selected',
                    itemSelector:'div.row-view',
                    emptyText:'<p> 无补话信息</p>',
                    tpl: new Ext.XTemplate(
                        '<tpl for=".">',
                        '<div class="row-view" style="height:80px;">',
                        	'<div class="row-field">',
                        		'<div class="x-form-item col-view" tabindex="-1">',
	                        		'<label  style="width:100px;" class="x-form-item-label cl_text">联系人:</label>',
	                        		'<div class="x-form-element" style="padding-left:105px">',
	                        			'<div  class=" x-form-display-field">{contact}</div>',
	                        		'</div>',
                        		'</div>',
                        		'<div class="x-form-item  col-view" tabindex="-1" >',
	                        		'<label  style="width:100px;" class="x-form-item-label cl_text" >联系电话:</label>',
	                        		'<div class="x-form-element" style="padding-left:105px">',
	                        			'<div  class=" x-form-display-field">{contacttel}</div>',
	                        		'</div>',
                        		'</div>',
                        	'</div>',
                        	'<div class="x-form-item cl_content ">',
                        		'<label  style="width:100px;" class="x-form-item-label cl_text" >补话内容:</label>',
                        		'<div class="x-form-element" style="padding-left:105px">',
	                        			'<div  class=" x-form-display-field">{content}</div>',
	                        	'</div>',
                        	'</div>',
                        '</div>',
                        '</tpl>'
                    )
                }
            ]
	},
	doLoad:function(val){
		val = val||{};
		Ext.apply(this.store.baseParams, val);
		this.store.load({
						params : {
							"pageCond/begin" : 0,
							 'pageCond/isCount':true,
							"pageCond/length" : this.pagingToolbar.pageSize
						}
					});
	},
	buildStore:function(){
		this.store = new Ext.data.JsonStore({
			url:this.url || 'com.zoomlion.hjsrm.workflows.ticket.Ticket.queryComplementByApply.biz.ext',
			root:'data',
			totalCount:'total',
			fields:['contact','contacttel','content']
		})
	}
});
Ext.namespace('Srm.workflows.common');

/**
 * 
 * @class Srm.workflows.common.WorkSheetTab
 * @extends Ext.TabPanel
 * <p> 附件图标的 tabpanel
 * <code><pre>
 * 	<li class="x-tab-with-icon">
  		<span class="icon-handler">&nbsp;&nbsp;(0)</span>
  		<span> (0)</span>
	</li>
  </pre></code>
 */
Srm.workflows.common.WorkSheetTab = Ext.extend(Ext.TabPanel,{
	complementId:undefined,
	applyinfopkid:'BS130903103542941112',
	loaded:false,
	initComponent:function(){
		this.win = new Srm.workflows.ComplementView({button:this});
		Srm.workflows.common.WorkSheetTab.superclass.initComponent.call(this);
		this.win.doLoad({applyinfopkid:this.applyinfopkid});
	},
	updateComplement :function(loaded,nums){
		this.loaded = loaded;
		this.updateNums(nums);
	},
	updateNums:function(num){
		var el = Ext.get(this.numId);
		el.update(String.format('&nbsp;&nbsp;({0})',num));
	},
	onRender  :function(ct,position){
		Srm.workflows.common.WorkSheetTab.superclass.onRender.call(this,ct,position);
		this.complementId = Ext.id();
		this.numId = Ext.id();
		this.complementEl = this.strip.createChild({
							id:this.complementId,
							tag : 'li',
							cls : 'x-tab-with-icon',
							cn : [{
								tag:'a', 
								cn:[{
										id:this.numId,
										tag : 'span',
										'ext:qtip':'补话信息',
										cls : 'user_complement',
										cn : '&nbsp;&nbsp;(0)'
									}]
							}]
							},this.edge,true);
	},
	 findTargets : function(e){
        var item = null,
            itemEl = e.getTarget('li:not(.x-tab-edge)', this.strip);
        if(itemEl){
        	if(itemEl.id==this.complementId){
        		if(this.loaded){
        			this.win.show();	
        		}
        		return itemEl;
        	}else{
        		return Srm.workflows.common.WorkSheetTab.superclass.findTargets.call(this,e);
        	}
        }
    }
});