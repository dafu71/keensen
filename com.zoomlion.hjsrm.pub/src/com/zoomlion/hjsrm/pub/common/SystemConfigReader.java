package com.zoomlion.hjsrm.pub.common;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.BodyTagSupport;

import com.eos.data.datacontext.DataContextManager;
import com.eos.data.datacontext.IMUODataContext;
import com.eos.data.datacontext.IUserObject;
import com.zoomlion.hjsrm.core.common.Common;


/**
 * <pre>
 *     Title: SystemConfigReader
 *     Description: 
 * </pre>
 * @author How
 * @date 2013-9-6
 * @version 1.0
 */
/*=======================修改历史==============================
 * 补丁号            修改人             时间                 区域            备注
 * 修改一次添加一条修改记录                
 */

public class SystemConfigReader extends BodyTagSupport {
	
	private static final long serialVersionUID = 1L;

	private String property = null;    // 数组名称 默认以该值加上"DictData"形成数组名称
	
	private String configName = null;     // 系统配置名称


	public int doStartTag() throws JspException {
		
		try {
			IMUODataContext muo = DataContextManager.current().getMUODataContext();
			IUserObject user = muo.getUserObject();
			String configValue = Common.getConfigValue(property, user);			
			JspWriter out = pageContext.getOut();
			StringBuffer sb = new StringBuffer();
			sb.append("<script type='text/javascript'>");
			sb.append("var " + property + "=" + configValue);
			sb.append("</script>");	
			out.print(sb.toString());
		}catch (Exception e) {
			e.printStackTrace();
		}
		return super.doStartTag();
	}

	
	public String getConfigName() {
		return configName;
	}


	public void setConfigName(String configName) {
		this.configName = configName;
	}


	public String getProperty() {
		return property;
	}


	public void setProperty(String property) {
		this.property = property;
	}
	

}
