<%@ page contentType="text/html;charset=gb2312" %>
<%@ page import="java.net.*"%>

<%
	try{		
		String fileName = (String)request.getAttribute("fileName");
		
		String fileDir = "excel-config/template/output";
		//String fileName = (String)request.getAttribute("fileName");
		String realFileName = (String)request.getAttribute("realFileName");
		if(realFileName==null){
			realFileName = fileName;	
		}
		response.setContentType("application/x-download");//����Ϊ����application/x-download
		String filenamedisplay = fileName;//�����ļ�ʱ��ʾ���ļ���������
		String filenamedownload = "/"+fileDir+"/"+realFileName;//�������ص��ļ������·��
		filenamedisplay = URLEncoder.encode(filenamedisplay,"ISO-8859-1");
		out.clear();
		out = pageContext.pushBody();
		response.reset();
		byte[] fileNameBytes = fileName.getBytes("GBK");
		response.addHeader("Content-Disposition","attachment;filename="+new String(fileNameBytes,"ISO-8859-1"));
		RequestDispatcher dispatcher = application.getRequestDispatcher(filenamedownload);
		if(dispatcher != null){
	    	dispatcher.forward(request,response);
		}
		response.flushBuffer();
	}
	catch(Exception e){
	}
%>