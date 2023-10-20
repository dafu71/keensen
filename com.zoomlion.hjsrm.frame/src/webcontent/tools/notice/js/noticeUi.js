/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 邮件收发
 * 创建日期： 2014-11-26  
 * 作 者： 刘鑫
 ******************************************************************************/
com.zoomlion.hjsrm.notice.NoticeMgr = function(){
	this.initPanel = function(){
		
		 this.lay = new Ext.fn.fnLayOut({
          layout : 'fit',
          border : false,
          renderTo : 'noticeMgr',
          panels : [this.createRecvusesSendPanel()]
        });
          
        return this.lay;        
	};
	
	
        this.createRecvusesSendPanel = function(){
        this.recvusesSendPanel = new Ext.fn.TabPanel({
        	activeTab:0,
          	items:[this.createRecvusesPanel(),this.createSendPanel(),this.createLajiPanel()]
        });
        return this.recvusesSendPanel;
    };
     this.createRecvusesPanel = function(){
     this.recvuse = new com.zoomlion.hjsrm.notice.RecvuseMgr(this.lay);
      this.recvusePanel =  this.recvuse.initPanel();
      this.recvuse.initEvent();
      return  this.recvusePanel;
    };
  
    this.createSendPanel = function(){
      this.send = new com.zoomlion.hjsrm.notice.SendMgr(this.lay);
      this.sendPanel =this.send.initPanel();
      this.send.initEvent();
      return this.sendPanel;
    };
    this.createLajiPanel = function(){
      this.laji = new com.zoomlion.hjsrm.notice.LajiMgr(this.lay);
      this.lajiPanel =this.laji.initPanel();
      this.laji.initEvent();
      return this.lajiPanel;
    };

};	
