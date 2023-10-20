package com.zoomlion.hjsrm.clib.util;

/**
 * **************************************************
 * 描    述：  加解密类
 * @author   bingyu
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public class SrmEncrypt {

	//可逆加解密密钥
	private static String keyString="_hjsrm_des_key_";  
	
	/**
	 * 方法描述: 可逆加密
	 * @author bingyu
	 * @param plainText
	 * @return 
	 * @return String
	 */
	public static String encrypt(String plainText){
		String digestString ="";
		digestString = com.eos.foundation.common.utils.CryptoUtil.encryptByDES(plainText ,keyString);
		return digestString ;
	}
	
	/**
	 * 方法描述: 可逆解密
	 * @author bingyu
	 * @param digestString
	 * @return 
	 * @return String
	 */
	public static String decrypt(String digestString){
		String plainText  ="";
		plainText = com.eos.foundation.common.utils.CryptoUtil.decryptByDES(digestString,keyString);
		return plainText  ;
	}
	
	/**
	 * 方法描述: 不可逆加密
	 * @author bingyu
	 * @param plainText
	 * @return 
	 * @return String
	 */
	public static String encryptIrreversible(String plainText){
		String digestString ="";
		digestString = com.eos.foundation.common.utils.CryptoUtil.digestByMD5(plainText);
		return digestString ;
	}
}
