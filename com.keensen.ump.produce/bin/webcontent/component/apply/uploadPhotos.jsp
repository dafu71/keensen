<%@page pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@include file="/frame/ui/page/include.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<%@page import="java.net.URLEncoder"%>
<%
	String baseId = request.getParameter("baseId");
	String uploadwin = request.getParameter("uploadwin");

	//System.out.println("baseId=" + baseId);
	//System.out.println("uploadwin=" + uploadwin);
%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2023-11-17 16:59:24
  - Description:
-->
<head>
<title>多文件上传</title>
<base href="<%=basePath%>">
<!-- 样式文件 -->
<link rel="stylesheet" type="text/css"
	href="frame/ui/jslib/ext_340/resources/css/ext-all.css" />
<!-- EXT库 -->
<script type="text/javascript"
	src="frame/ui/jslib/ext_340/adapter/ext/ext-base.js"></script>
<script type="text/javascript"
	src="frame/ui/jslib/ext_340/ext-all.js.gzip"></script>
<script type="text/javascript"
	src="frame/ui/jslib/ext_340/ext-lang-zh_CN.js"></script>
</head>
<body>
<input type="file" id="fileInput"  accept="image/*" multiple>
<button onclick="uploadFiles()">上传文件</button>
</body>
<script type="text/javascript">
 function uploadFiles() {
 
 	
    const files = document.getElementById('fileInput').files;
    
    if(files.length<4){
    	Ext.Msg.alert("系统提示", "至少需要上传4张照片!");
		return
    }else{
    
	    const formData = new FormData();
	
	    for (let i = 0; i < files.length; i++) {
	    	if(i==0){
	    		formData.append('uploadFile', files[i]);
	    		continue;
	    	}
	    	if(i==1){
	    		formData.append('uploadFile2', files[i]);
	    		continue;
	    	}
	        formData.append('uploadFile' + (i + 1), files[i]);
	    }
		
		for (let i = 0; i < files.length; i++) {
			if(i==0){
				console.dir('uploadFile' + '=' + formData.get(('uploadFile' + i)));
				continue;
			}
			if(i==1){
				console.dir('uploadFile2' + '=' + formData.get(('uploadFile' + i)));
				continue;
			}
	    	console.dir('uploadFile' + (i + 1) + '=' + formData.get(('uploadFile' + i)))
	    }
	    
		fetch('com.keensen.ump.produce.component.uploadPhotosBatch.flow?baseId=<%=baseId %>', {
		  method: 'POST',
		  body: formData // 不需要手动设置 Content-Type，浏览器会自动设为 multipart/form-data
		})
		.then(res => res.json())
		//.then(data => alert('上传成功'));
		.then(data => function(){
			Ext.Msg.show({
			     title: '系统提示',
			     msg: '上传成功!!',
			     buttons: Ext.MessageBox.OK,			     
			     icon: Ext.Msg.INFO,
			     fn: function(btn) {
			         var win = parent.Ext.getCmp('<%=uploadwin %>');
					 if (win) {win.close();}
			     }
			 });
			}());
		//.then(data => console.log('上传成功:', data));
	}
	
    
}
</script>

</html>
