package com.zoomlion.hjsrm.workflows.common;

import java.io.Serializable;

import com.zoomlion.hjsrm.pub.common.Globals;

/**
 * 
 * <pre>
 *     Title: 我的工作-每个模块建立一个本模块的 公共类，用以存放 数据字典值等公共变量
 *     Description: 工单代办方式-代办、协办
 * </pre>
 * 
 * @author 蔡慧文
 * @version 1.0
 * 
 */
/*
 * =======================修改历史==============================
 * 
 * 
 */
public class WorkinGlobal extends Globals implements Serializable {

	private static final long serialVersionUID = 4943371700623406825L;
	
	//以“表实体名+字段名+分类”的方式表现变量名
	
	//***********工单代办方式(WORKIN_DELEGATETYPE)************delegateType
	public static final String WORKIN_DELEGATETYPE_DELEG = "DELEG";	//代办
	
	public static final String WORKIN_DELEGATETYPE_HELP = "HELP";	//协办
	
}
