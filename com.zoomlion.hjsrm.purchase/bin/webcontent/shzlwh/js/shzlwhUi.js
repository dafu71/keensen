/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 送货指令维护
 * 创建日期： 2014-12-08  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.purchase.shzlwhMgr = function(){
	this.initPanel = function(){
		
		 this.lay = new Ext.fn.fnLayOut({
          layout : 'fit',
          border : false,
          renderTo : 'shzlwhMgr',
          panels : [this.createshzlPanel()]
        });
          
        return this.lay;        
	};
	
	
        this.createshzlPanel = function(){
        this.shzlPanel = new Ext.fn.TabPanel({
        	activeTab:0,
          	items:[this.createshzldrPanel(),this.createshzlcxPanel()]
        });
        return this.shzlPanel;
    };
    
  
    this.createshzldrPanel = function() {
		this.shzldr = new com.zoomlion.hjsrm.purchase.shzldrMgr(this.lay);
		this.shzldrPanel = this.shzldr.initPanel();
		this.shzldr.initEvent();
		return this.shzldrPanel;
	};
     this.createshzlcxPanel = function(){
     this.shzlcx = new com.zoomlion.hjsrm.purchase.shzlcxMgr(this.lay);
      this.shzlcxPanel =  this.shzlcx.initPanel();
      this.shzlcx.initEvent();
      return  this.shzlcxPanel;
    };

};	
