/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 采购收货入库管理主页面
 * 创建日期： 2014-11-26  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.kcgl.KcglMgr = function(){
	this.initPanel = function(){
		
		 this.lay = new Ext.fn.fnLayOut({
          layout : 'fit',
          border : false,
          renderTo : 'kcglMgr',
          panels : [this.createWlpzcxShrkCkthPanel()]
        });
          
        return this.lay;        
	};
	
	
        this.createWlpzcxShrkCkthPanel = function(){
        this.wlpzcxShrkCkthPanel = new Ext.fn.TabPanel({
        	activeTab:0,
          	items:[this.createShrkPanel(),this.createWlpzcxPanel(),this.createCkthPanel()]
        });
        return this.wlpzcxShrkCkthPanel;
    };
     this.createWlpzcxPanel = function(){
     this.wlpzcx = new com.zoomlion.hjsrm.kcgl.WlpzcxMgr(this.lay);
      this.wlpzcxPanel =  this.wlpzcx.initPanel();
      this.wlpzcx.initEvent();
      return  this.wlpzcxPanel;
    };
  
    this.createShrkPanel = function(){
      this.shrk = new com.zoomlion.hjsrm.kcgl.ShrkMgr(this.lay);
      this.shrkPanel =this.shrk.initPanel();
      this.shrk.initEvent();
      return this.shrkPanel;
    };
    this.createCkthPanel = function(){
      this.ckth = new com.zoomlion.hjsrm.kcgl.CkthMgr(this.lay);
      this.ckthPanel =this.ckth.initPanel();
      this.ckth.initEvent();
      return this.ckthPanel;
    };

};	
