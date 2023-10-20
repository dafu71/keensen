com.zoomlion.hjsrm.cgzqreport.CgtjreportMgr = function(){
	this.initPanel = function(){		
		 this.lay = new Ext.fn.fnLayOut({
          layout : 'fit',
          border : false,
          renderTo : 'cgtjreportMgr',
          panels : [this.CreatecgtjreportPanel()]
        });
          
        return this.lay;        
	};
	
	
        this.CreatecgtjreportPanel = function(){
        this.cgtjreportPanel = new Ext.fn.TabPanel({
        	activeTab:0,
          	items:[this.CreatedprkreportPanel(),this.CreatecgrkreportPanel()]
        });
        return this.cgtjreportPanel;
    };
     this.CreatedprkreportPanel = function(){
     this.dprkreport = new com.zoomlion.hjsrm.cgzqreport.DprkreportMgr(this.lay);
      this.dprkreportPanel =  this.dprkreport.initPanel();
      this.dprkreport.initEvent();
      return  this.dprkreportPanel;
    };
     this.CreatecgrkreportPanel = function(){
     this.cgrkreport = new com.zoomlion.hjsrm.cgzqreport.CgrkreportMgr(this.lay);
      this.cgrkreportPanel =  this.cgrkreport.initPanel();
      this.cgrkreport.initEvent();
      return  this.cgrkreportPanel;
    };

};	
