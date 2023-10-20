/*******************************************************************************
 * 版权所有： 中联重科环境产业公司 
 * 描 述： 邮件收发
 * 创建日期： 2014-11-26  
 * 作 者： 刘鑫
 ******************************************************************************/

	
com.zoomlion.hjsrm.notice.NoticeMgr.prototype.destroy = function() {
	this.recvuse.recvuseinputWindow.destroy();
this.recvuse.recvuseviewWindow.destroy();
this.recvuse.recvusesendPanel.destroy();
this.laji.lajiviewWindow.destroy();
this.send.noticesendReadWindow.destroy();
	this.send.viewsendWindow.destroy();
	this.send.sendinputWindow.destroy();
	this.send.sendsendPanel.destroy();
	this.noticesendnotReadWindow.destroy();
}




