<%@page pageEncoding="UTF-8"%>
<%@page import="com.eos.spring.BeanFactory"%>
<%@page import="com.zoomlion.hjsrm.interfaces.print.*"%>
<%-- 
  - Author(s): Chenmin
  - Date: 2012-11-07 11:18:54
  - Description:根据模板编号来获得最终代码。
--%>
<%
	String id = request.getParameter("id");
	if(id == null || id.length() == 0){
		out.println("alert('编号参数不存在，非法调用！');");
		return;
	}
	BeanFactory beanFactory = BeanFactory.newInstance();
	TJkPrinttemplateBean bean = (TJkPrinttemplateBean) beanFactory
			.getBean("tJkPrinttemplateBean");
	String code = bean.getCode(id);
	if (code == null || code.length() == 0) {
		out.println("alert('编号为"+id+"此模板不存在,或者已经删除！');");
	} else {
		out.println(code);
		//System.out.println(code);
	}
%>
