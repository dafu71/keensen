package com.zoomlion.hjsrm.frame.tools.tag;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.BodyTagSupport;

public class LoadJs4JSp extends BodyTagSupport {
	
	private static final long serialVersionUID = 1L;
	
	private String scriptPath;
	
	private String replaceName;
	private String DBData;
	
	
	public int doStartTag() throws JspException {
		InputStream input =pageContext.getServletContext().getResourceAsStream("/"+scriptPath);
		byte[] buffer = new byte[1024];
		int len =0;
		ByteArrayOutputStream output = new ByteArrayOutputStream();
		
		try {
			while((len =input.read(buffer))!=-1){
				output.write(buffer,0,len);
			}
		} catch (IOException e1) {
			e1.printStackTrace();
		}
		byte [] bytes = output.toByteArray();
		String jsCode ="";
		try {
			jsCode = new String(bytes,"UTF-8");
			//字符串替换 $cfg$
			if(replaceName!=null && DBData!=null){
				jsCode = jsCode.replaceAll("\\$"+replaceName+"\\$", DBData);
			}
		} catch (UnsupportedEncodingException e1) {
			e1.printStackTrace();
		}
		try {
			JspWriter out = pageContext.getOut();
			out.println("<script type='text/javascript'>");
			out.println(jsCode);
			out.println("</script>");
		} catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return super.doStartTag();
	}

	public String getScriptPath() {
		return scriptPath;
	}

	public void setScriptPath(String scriptPath) {
		this.scriptPath = scriptPath;
	}

	public String getDBData() {
		return DBData;
	}

	public void setDBData(String data) {
		DBData = data;
	}

	public String getReplaceName() {
		return replaceName;
	}

	public void setReplaceName(String replaceName) {
		this.replaceName = replaceName;
	}
}
