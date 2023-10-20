package com.zoomlion.hjsrm.clib.util;
/**
 * **************************************************
 * 描    述：  邮件发送类
 * @author   bingyu
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public class SrmMail {

	/**
	 * 方法描述: 简单邮件发送
	 * @author bingyu
	 * @param title
	 * @param content
	 * @param mailToAddr
	 * @throws Exception 
	 * @return void
	 */
	public static void sendMail(String title,String content,String mailToAddr)throws Exception{
		commonj.sdo.DataObject info=com.primeton.ext.data.sdo.helper.ExtendedDataFactory.eINSTANCE.create("com.eos.foundation.MailInfo");
		String from = SrmConfig.getAppConfigValue("mail-config", "mail", "from");
		String smtpHost = SrmConfig.getAppConfigValue("mail-config", "mail", "smtpHost");
		String smtpPort = SrmConfig.getAppConfigValue("mail-config", "mail", "smtpPort");
		String userName = SrmConfig.getAppConfigValue("mail-config", "mail", "userName");
		String password = SrmConfig.getAppConfigValue("mail-config", "mail", "password");
		if(password.startsWith("{3DES}")) {
			//密码已被加密，先解密
			password = password.substring("{3DES}".length());
			password = SrmEncrypt.decrypt(password);
		} else {
			//密码未被加密，要加密，再写回文件
			String newPassword = (new StringBuilder()).append("{3DES}").append(SrmEncrypt.encrypt(password)).toString();
			SrmConfig.setAppConfigValue("mail-config", "mail", "password",newPassword);
			//保存
			SrmConfig.save();
			//重载
			SrmConfig.reload();
		}
		//to:收件人地址列表，可以支持多个地址；
		info.set("to", mailToAddr);
		//from：发件人地址；
		info.set("from", from);
//		cc：抄送人地址，可以支持多个地址； 
//		bcc：暗送人地址，可以支持多个地址；  说明

		//subject：邮件主题
		info.set("subject",title);
		//smtpHost、smtpPort：smtp的地址（必须提供）和端口；
		info.set("smtpHost",smtpHost);
		info.set("smtpPort",smtpPort);
//		replyTo：回复人地址，可以支持多个
		
		//userName：发送邮箱用户名；
		info.set("userName",userName);
		//password：发送邮箱密码； 
		info.set("password",password);
		//message：邮件消息； 
		info.set("message",content);
//		attachFilePaths：附件文件地址，支持多个，必须是绝对路径； 
//		charset：字符编码，例如：UTF-8、GBK等； 
//		inclineFilePaths：内嵌资源列表，支持多个，必须是绝对路径。 
		com.eos.foundation.eoscommon.MailUtil.sendMail(info);
	}
}
