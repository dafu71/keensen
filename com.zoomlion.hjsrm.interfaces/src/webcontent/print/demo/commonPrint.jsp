<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): Chenmin
  - Date: 2012-11-02 09:51:52
  - Description:
-->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>文件平打</title>
<script language="javascript" type="text/javascript">   
	var LODOP,P_ID,t,c=0; //声明为全局变量 
	
	function CreateWebPage1(){
		var wp = new webPrint();//创建打印控件对象
		wp.init();//打印对象初始化
		wp.print_init("网页文件打印");//初始化打印任务
		wp.add_print_url(0,0,"100%","100%","http://www.baidu.com");//在指定位置添加一个网页
		wp.preview();//打印预览
	}
	
	function CreateOneFormPage(){
		var wp = new webPrint();//创建打印控件对象
		wp.init();//打印对象初始化
		wp.print_init("打印控件功能演示_网页局部内容");//初始化打印任务
		for(var iii = 0; iii < 5; iii++){
			wp.newpage();
			wp.add_print_text(50,231,260,39,"打印页面部分内容");//在指定位置添加一个文本
			wp.add_print_htm(88,200,350,600,document.getElementById("form2").innerHTML);//在指定位置添加一个HTML对象
		}
		wp.catch_print_status();
	 	P_ID = wp.printa();//打印预览
		LODOP = wp.LODOP;
		if (P_ID!="") {
			c = 0;
			WaitFor();
		}
	}
	
	function WaitFor(){     
		c = c + 1;    
		document.getElementById('T12').value = "正等待(JOB代码是"+P_ID+")打印结果："+c+"秒"+LODOP.GET_VALUE("PRINT_STATUS_ID",P_ID)+"--"+LODOP.GET_VALUE("PRINT_STATUS_OK",P_ID);
		t = setTimeout("WaitFor()",10);    
	}
		
	function CreateSetupPage1(){
		var wp = new webPrint();//创建打印控件对象
		wp.init();//打印对象初始化
		wp.print_init("打印控件功能演示_网页局部内容");//初始化打印任务
		wp.add_print_text(50,231,260,39,"打印页面部分内容");//在指定位置添加一个文本
		wp.add_print_htm(88,200,350,600,document.getElementById("form2").innerHTML);//在指定位置添加一个HTML对象
		wp.setup();//打印维护
	}
	function CreateOneCodePage(){
		var pagecode=document.getElementById("codeValue").value;
		var pagetype=document.getElementById("codeType").value;		
		if(""!=pagecode && pagecode!=null){		   
		    if(!isNaN(pagecode)){		
				var wp = new webPrint();//创建打印控件对象
				wp.init();//打印对象初始化				
				wp.print_inita(0,0,800,300,"打印条码");//初始化打印任务
				wp.add_print_code(50,131,350,88,pagetype,pagecode);//设置条码类型和条码值				
				wp.add_print_text(150,130,350,30,"条码描述内容wwww111111111");//在指定位置添加一个文本	
				wp.print_stylea(2,"FontSize",12);//设置文本字体	
				wp.preview();//打印维护
			}else{
				alert("请输入数值才能打印条码值！");
			}
		}else{
			alert("请输入条码值！");
		}		
	}
</script>
</head>
<body>

<div id="s2">
<button onclick="CreateWebPage1();">打印预览网页</button>
<br />
<button onclick="CreateOneFormPage()">直接本页面的局部网页</button>
<br />
<button onclick="CreateSetupPage1()">打印维护，界面“应用”后，将会保存维护后的信息在客户端</button>
<br />
<br />
<input type="hidden" id="codeType" value="Code93">
条码值：<input type="text" id="codeValue" size="60">
<br />
<button onclick="CreateOneCodePage()">一维条码打印</button>
</div>
<br />
<input type="text" id="T12" size="40">

<div id="form2">
<table border="1" width="100%" id="tb01" bgcolor="#CCFFCC">
	<tr>
		<td width="133" id="mtb001"><font face="黑体" color="#FF0000"
			size="3">《表单》&copy;</font></td>
	</tr>
</table>
<table border="1" width="100%" height="106" cellspacing="0"
	bgcolor="#CCFFFF" style="border-collapse:collapse">
	<tr>
		<td width="66" height="16"><font color="#0000FF">X</font><font
			color="#0000FF">等</font></td>
		<td width="51" height="16"><font color="#0000FF">Y等</font></td>
		<td width="51" height="16"><font color="#0000FF">Z等</font></td>
	</tr>
	<tr>
		<td width="66" height="12"><span
			style="font-family:Wingdings;font-size:25px;">&#254;</span>X001</td>
		<td width="51" height="12"><strike>Y001</strike></td>
		<td width="51" height="44" rowspan="3">
		<ol style="list-style-type:upper-alpha;list-style-position:inside;">
			<li>Z001</li>
			<li>Z002</li>
			<li>Z003</li>
			<li>Z004</li>
			<li>Z005</li>
		</ol>
		</td>
	</tr>
	<tr>
		<td width="66" height="16"><strong>X002</strong></td>
		<td width="51" height="16"><u>Y002</u><span
			style="visibility: hidden">hidesome</span></td>
	</tr>
	<tr>
		<td width="66" height="16"><span
			style="text-decoration: overline">X003</span></td>
		<td width="51" height="16"><em>Y003</em></td>
	</tr>
</table>
</div>

</body>
</html>