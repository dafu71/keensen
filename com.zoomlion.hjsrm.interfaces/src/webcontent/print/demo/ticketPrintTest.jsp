<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): Chenmin
  - Date: 2012-11-02 09:51:52
  - Description:
  <lpt:loadprinttpl tplId="1232" />
-->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>文件套打</title>

<script language="javascript" type="text/javascript">   
	//弹出窗口预览
	function CreateWebPage(){
		//创建打印控件对象
		var wp = new webPrint();
		//打印对象初始化
		wp.init();
		//创建要打印的数据对象，此对象有程序动态生成JSON对象
		var op = {};
		//以下为程序手工生成JSON对象演示
		op.a1 = "a1的值";
		op.a2 = "a2的值";
		op.a3 = "a3的值";
		//根据参数内容打印文件
		create_print_object(wp.LODOP,op);
		//打印预览
		wp.preview();
	};
	//打印维护
	function CreateSetupPage(){
		//创建打印控件对象
		var wp = new webPrint();
		//打印对象初始化
		wp.init();
		//创建要打印的数据对象，此对象有程序动态生成JSON对象
		var op = {};
		//以下为程序手工生成JSON对象演示
		op.a1 = "a1的值";
		op.a2 = "a2的值";
		op.a3 = "a3的值";
		//根据参数内容打印文件
		create_print_object(wp.LODOP,op);
		//打印维护
		wp.setup();
	};
	//内嵌页面显示
	function showWebPage(){
		//创建打印控件对象
		var wp = new webPrint();
		//打印对象初始化
		wp.init("TEST");
		//创建要打印的数据对象，此对象有程序动态生成JSON对象
		var op = {};
		//以下为程序手工生成JSON对象演示
		op.a1 = "a1的值";
		op.a2 = "a2的值";
		op.a3 = "a3的值";
		//根据参数内容打印文件
		create_print_object(wp.LODOP,op);
		//内嵌页面显示
		wp.set_show_mode("PREVIEW_IN_BROWSE",1);
		//打印预览
		wp.preview();
	};
	
	//批量打印
	function showManyWebPage(){
		//创建打印控件对象
		var wp = new webPrint();
		//打印对象初始化
		wp.init("TEST");
		//创建要打印的数据对象，此对象由程序动态生成JSON对象
		var op = {};
		//以下为程序手工生成JSON对象演示
		for (var i = 1; i <= 50; i++) {
			//初始化批量打印,仅在批量打印时使用
			create_print_init_1232(wp.LODOP);
			for(var j = 1; j <= 10; j++){
				op.a1 = "a1的值" + i + j;
				op.a2 = "a2的值" + i + j;
				op.a3 = "a3的值" + i + j;
				//根据参数内容新增一页文档，形成多页文档，仅在批量打印时使用
				add_print_object(wp.LODOP,op);
			}
			//为每个打印单独设置任务名
			wp.set_print_mode("CUSTOM_TASK_NAME","TEST"+i);
			wp.print();//直接打印
		}
	};

</script>
</head>
<body>

<div id="s2">
<button onclick="CreateWebPage()">测试套打预览</button>
<button onclick="showWebPage()">内嵌套打预览</button>
<br />
<button onclick="showManyWebPage()">批量套打</button>
<br />
<button onclick="CreateSetupPage()">打印维护，界面“应用”后，将会保存维护后的信息在客户端</button>

<br />
<object id="TEST_OB" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=800 height=450>
	<embed id="TEST_EM" type="application/x-print-lodop" width=800 height=450></embed>
</object>

</div>

</body>
</html>
