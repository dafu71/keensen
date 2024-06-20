<%@page pageEncoding="UTF-8"%>
<%@include file="/common/common.jsp"%>
<%@page import="com.eos.web.taglib.util.XpathUtil"%>
<%@page import="commonj.sdo.DataObject"%>

<html>
<!-- 
  - Author(s): dafu
  - Date: 2024-06-12 10:50:39
  - Description:
-->
<%
			com.eos.data.datacontext.IUserObject userObject = (com.eos.data.datacontext.IUserObject) request
			.getSession()
			.getAttribute(
			com.eos.data.datacontext.IUserObject.KEY_IN_CONTEXT);

	Object rootObj = XpathUtil.getDataContextRoot("request",
			pageContext);
	String operatorname = (String) userObject.getAttributes().get(
			"operatorname");
	
%>
<head>
    <meta charset="UTF-8">
    <title>pda录入</title>
    <!-- 引入layui的核心css文件 -->
    <link rel="stylesheet" type="text/css" href="/default/base/layui/css/layui.css">
    
    <style type="text/css">
	<!--
   	.layui-table-cell {
		height: auto;
		overflow: visible;
		text-overflow: inherit;
		white-space: normal;
		word-break: break-all;
	}

	.layui-table-cell a {
		text-decoration: underline;
	}

	.layui-table-cell div {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		min-height: 30px;
		line-height: 30px;
	}
    
    -->
    </style>
    
</head>
<body>

   
    <!-- 固定宽度（两侧留白效果）.layui-container -->
    <!-- 完整宽度（占据屏幕宽度的100%）.layui-fluid -->
    <div class="layui-fluid">
       <br>
        <div class="layui-row">
            <!-- 小屏幕占12列，中屏幕占8列 -->
            <%--<div class="layui-col-sm12" align="right">
            <%=operatorname %>,你好！
            </div>--%>
            <br><br>
            <div class="layui-col-sm12" style="">
            	<div class="layui-col-sm1" style="">
            	&nbsp;
            	</div>
			  	<div class="layui-col-sm9" style=""> 			  	
				<input type="text" name="orderNo" required lay-verify="required" placeholder="请输入订单号" autocomplete="off" class="layui-input" />				
				</div>
				<div class="layui-col-sm1" style=""> 
				<button class="layui-btn layui-btn-radius" lay-on="query">查询</button>
				</div>
				
				<div class="layui-col-sm1" style="">
            	&nbsp;
            	</div>
            </div>
        </div>
        
		<table id="demo" lay-filter="test" class="layui-table"></table>
		
        

    </div>


<script src="/default/base/layui/layui.js" type="text/javascript" charset="UTF-8"></script>
<script>
	function nl2br(str, is_xhtml) {
		var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
		return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
	}
</script>
<script type="text/javascript">
	layui.use(['util', 'layer','table','form'],function(){		
  		var layer = layui.layer;
  		var util = layui.util;
  		var table = layui.table;
  		var form = layui.form;
  		var $ = layui.$;
  		
  		$(function(){
		   //输入框的值改变时触发
		  $("input[name='orderNo']").on("input",function(e){
		    //获取input输入的值
		    //console.log(e.delegateTarget.value);
		  });
		  
		  $("input[name='orderNo']").on("focus",function(e){
		     $("input[name='orderNo']").select();
		    
		  });
		});
  		
  		
  
  		
        
  		util.on('lay-on', {
    		'query': function(){
    		    var orderNo = $("input[name='orderNo']").val();
    		    if (orderNo === '') {
				    // 输入框为空
				    layer.open({
            			type: 0,						  // 0为信息框
            			//title:"系统消息",
            			// title: false,  				   //不显示标题
            			title: ['系统消息', 'color:red;'],   // 自定义标题区域样式
  				        content: "请输入订单号"
        			});

				    //layer.alert('请输入订单号');
				}else{
					//layer.alert(orderNo);
					table.render({
		                elem: "#demo",
		                url: 'com.keensen.ump.produce.component.makprint.queryJuanmo.biz.ext?condition/orderNo='+orderNo, // 数据接口
		                //height: 315, // 容器高度
		                page:false, // 开启分页
		                cols: [[  // 设置表头
		                	{field:'aa',type:"numbers",width:'5%'},
		                    {field: 'batchNo', title: '膜片批次',width:'35%'		                    	
		                    },
		                    {field: 'prodSpecName', title: '元件型号',width:'15%'		                    	
		                    },
		                    {field: 'cnt', title: '数量',width:'10%'},
		                    {field: 'txt', title: '周转车号',edit:'text',width:'17%'},
		                    {field: 'txt2', title: '烘房位置号',edit:'text',width:'18%'}
		                ]], 
		                text: {none: '无数据'}
		                ,skin: 'row' //行边框风格line
  						,even: true //开启隔行背景
  						//,size: 'sm' //小尺寸的表格
		            })
				}
			     			
      		}
    	})
    	
    	table.on('edit(test)', function(obj) {
                console.log(obj);
                // 获取修改后的值
                var value = obj.value;
                // 得到当前修改的tr对象
                var data = obj.data;
                // 得到修改的字段名
                var field = obj.field;

                //layer.msg("膜片批次" + data.batchNo + "字段名" + field + "字段的值修改为：" + value);
                $.post('com.keensen.ump.produce.component.makprint.savePda.biz.ext', {
					  'params/batchNo': data.batchNo,
					  'params/field': field,
					  'params/value': value
					}, function(response) {
					  // 在这里处理返回的数据
					  console.log(response);
					  if (response.success) {
					    layer.msg('更新成功！');
					  } else {
					    layer.msg('更新失败：' + response.message);
					  }
					}, 'json');
            });
  		
  })
  
 </script> 
</body>
</html>
