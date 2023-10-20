package com.zoomlion.hjsrm.pub.businessclib.busi.common;
/**
 * 
 * <pre>
 *     Title: MsgEntity
 *     Description: 校验消息实体
 * </pre>
 * @author How
 * @date 2013-8-29
 * @version 1.0
 */
/*=======================修改历史==============================
 * 补丁号            修改人             时间                 区域            备注
 * 修改一次添加一条修改记录
 */
public class MsgEntity {
	private  String errormsg;
	private boolean passed;
	private String errorlvl;
	
	public String getErrorlvl() {
		return errorlvl;
	}
	public void setErrorlvl(String errorlvl) {
		this.errorlvl = errorlvl;
	}
	public void setPassed(boolean passed) {
		this.passed = passed;
	}
	public boolean isPassed() {
		return passed;
	}
	public String getErrormsg() {
		return errormsg;
	}
	public void setErrormsg(String errormsg) {
		this.errormsg = errormsg;
	}
}
