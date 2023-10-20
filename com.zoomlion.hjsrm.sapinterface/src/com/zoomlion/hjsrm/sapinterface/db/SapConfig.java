package com.zoomlion.hjsrm.sapinterface.db;

import java.util.Properties;

public class SapConfig {

	/*
	 * public static Properties getlogonProperties() { Properties
	 * logonProperties = new Properties();
	 * logonProperties.put("jco.client.ashost", "172.30.1.225");
	 * logonProperties.put("jco.client.client", "300");
	 * logonProperties.put("jco.client.sysnr", "00");
	 * logonProperties.put("jco.client.user", "RFCID01");
	 * logonProperties.put("jco.client.passwd", "123456"); return
	 * logonProperties; } public static Properties getlogonProperties() {
	 * Properties logonProperties = new Properties();
	 * logonProperties.put("jco.client.ashost", "172.30.1.226");
	 * logonProperties.put("jco.client.client", "230");
	 * logonProperties.put("jco.client.sysnr", "00");
	 * logonProperties.put("jco.client.user", "RFCID01");
	 * logonProperties.put("jco.client.passwd", "123456"); return
	 * logonProperties; }
	 */
	public static Properties getlogonProperties() {
		Properties logonProperties = new Properties();
		logonProperties.put("jco.client.ashost", "10.87.225.14");
		logonProperties.put("jco.client.client", "230");
		logonProperties.put("jco.client.sysnr", "00");
		logonProperties.put("jco.client.user", "RFCID01");
		logonProperties.put("jco.client.passwd", "123456");
		return logonProperties;
	}
	/**
	 * @return
	 */

	// public static Properties getlogonProperties() {
	// Properties logonProperties = new Properties();
	// logonProperties.put("jco.client.ashost", "10.87.225.11");
	// logonProperties.put("jco.client.client", "800");
	// logonProperties.put("jco.client.sysnr", "01");
	// logonProperties.put("jco.client.user", "SRM_RFC");
	// logonProperties.put("jco.client.passwd", "a1234567");
	// return logonProperties;
	// }
}
