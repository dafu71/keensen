package com.zoomlion.hjsrm.interfaces.common;

import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.BodyTagSupport;

import com.eos.spring.BeanFactory;
import com.zoomlion.hjsrm.interfaces.print.TJkPrinttemplateBean;

/**
 * 
 * <pre>
 * Title: 套打模板加载类
 * Description: 通过模板id动态加载套打的模板
 * </pre>
 * @author   肖斌
 * @version   1.0    
 * 
 */
 /*
 * 修改历史,方法中重大的变动需要有历史记录，格式：2012-12-28 修改人 修改内容***
 *
 */
public class PrintTplLoader extends BodyTagSupport {
	private static final long serialVersionUID = 1L;
	private String tplId;
	
	public int doStartTag() throws JspException {
		BeanFactory beanFactory = BeanFactory.newInstance();
		TJkPrinttemplateBean bean = (TJkPrinttemplateBean) beanFactory.getBean("tJkPrinttemplateBean");
		String jsCode = bean.getCode(tplId);
		JspWriter out = pageContext.getOut();
		if (jsCode == null || jsCode.length() == 0) {
			try {
				out.println("alert('编号为"+id+"此模板不存在,或者已经删除！');");
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			try {
				out.println("<script type='text/javascript'>");
				out.println(jsCode);
				out.println("</script>");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return super.doStartTag();
	}
	
	public String getTplId() {
		return tplId;
	}

	public void setTplId(String tplId) {
		this.tplId = tplId;
	}
	
}
