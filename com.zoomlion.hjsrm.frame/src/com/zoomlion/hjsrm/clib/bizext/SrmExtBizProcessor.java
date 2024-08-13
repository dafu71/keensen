package com.zoomlion.hjsrm.clib.bizext;

import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.InvocationTargetException;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONWriter;
import org.w3c.dom.Node;

import com.eos.data.datacontext.DataContextManager;
import com.eos.data.datacontext.IMUODataContext;
import com.eos.data.datacontext.IUserObject;
import com.eos.data.datacontext.UserObject;
import com.eos.runtime.core.TraceLoggerFactory;
import com.eos.system.exception.EOSException;
import com.eos.system.exception.EOSRuntimeException;
import com.eos.system.logging.Logger;
import com.eos.system.utility.ClassUtil;
import com.eos.system.utility.XmlUtil;
import com.primeton.engine.core.impl.process.parameter.ParameterBuilder;
import com.primeton.ext.access.http.ExceptionObject;
import com.primeton.ext.common.muo.MUOCallback;
import com.primeton.ext.common.muo.MUODataContextHelper;
import com.primeton.ext.common.muo.MUOTemplate;
import com.primeton.ext.data.serialize.ExtendedXMLSerializer;
import com.primeton.ext.data.serialize.SerializationConstants;
import com.primeton.ext.data.serialize.SerializeOption;
import com.primeton.ext.data.serialize.marshal.IMarshallingNode;
import com.primeton.ext.engine.core.IBizRuntimeContext;
import com.primeton.ext.engine.core.IParameterSet;
import com.primeton.ext.engine.core.processor.AbstractProcessor;
import com.primeton.ext.engine.core.processor.AccessRefusedExceptionHelper;
import com.primeton.ext.engine.core.processor.RichWebL7EHelper;
import com.zoomlion.hjsrm.core.exception.BusinessException;

/**
 * **************************************************
 * 描    述：  逻辑流json数据的处理，加上UI前台（extjs）需要的相关属性
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class SrmExtBizProcessor extends AbstractProcessor {
	
	private static final Logger logger = TraceLoggerFactory.getLogger(SrmExtBizProcessor.class);
	
	/** 
	 * 方法描述: 处理参数转换
	 * @author 侯杰
	 * @param request
	 * @param response
	 * @return
	 * @throws 
	 * @return IParameterSet
	 */
	@Override
	public IParameterSet createParameterSet(HttpServletRequest request, HttpServletResponse response) {
		String contentType = request.getContentType();
		if (contentType != null) {
			if (contentType.indexOf("text/json") >= 0
					|| contentType.indexOf("application/json") >= 0
//					|| contentType.indexOf("multipart/form-data") >= 0
					|| contentType.indexOf("application/javascript") >= 0
					|| contentType.indexOf("text/javascript") >= 0) {
				//json的提交.
				return ParameterBuilder.createJSONParamSet(request);
			}
		}
		//认为是普通form的提交.
		return ParameterBuilder.createHttpParamSet(request);
	}
	
	/** 
	 * 方法描述: 处理返回数据
	 * @author 侯杰
	 * @param request
	 * @param response
	 * @param response
	 * @return
	 * @throws IOException
	 * @throws ServletException
	 * @return 
	 */
	@Override
	public void doProcess(HttpServletRequest request, HttpServletResponse response, final IParameterSet parameterSet)throws IOException, ServletException {
		response.setContentType("text/json;charset=UTF-8");
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		final JSONWriter writer = new JSONWriter(out);
		if (RichWebL7EHelper.check() == false) {
			try {
				writer.object();
				//add by bingyu 2011-11-22
					writer.key("authorized");
					writer.value(true);	
					writer.key("success");
					writer.value(false);
				//--end add
				writer.key("exception");
				writer.object();
				writer.key("code").value("");
				StringBuffer msg = new StringBuffer();
				writer.key("message").value(msg);
				writer.key("invalid").value(false);
				writer.key("loginPage").value(RichWebL7EHelper.getForwardPage(request));
				writer.endObject();
				writer.endObject();
			} catch (JSONException e1) {
				logger.error(e1);
			}
			return;
		}
		String[] uriPaths = request.getRequestURI().split("/");
		String bizAction = uriPaths[uriPaths.length - 1];
		bizAction = bizAction.replaceAll(getRequestSuffix(), "");
		final String componentName = bizAction.substring(0, bizAction.lastIndexOf("."));
		final String flowName = bizAction.substring(bizAction.lastIndexOf(".") + 1);
		String flowNames = "modifyDiameter,updateBatchStr,queryStock4View,insertSelect";
		
		
		
		boolean invalid = false;
		try {
			if (flowNames.indexOf(flowName)>-1){
				/*Map<String, UserObject> userMap = new HashMap<String, UserObject>();
				UserObject userObject = new UserObject();// 用户的身份
				userMap.put(IUserObject.KEY_IN_CONTEXT, userObject);			
				IMUODataContext muo = MUODataContextHelper.create(userMap);
				// 设置其他的MUO属性
				muo.set("userId", "guest");
				DataContextManager.current().setMUODataContext(muo);*/
 
			}			
			 
			MUOTemplate.execute(request.getSession(), new MUOCallback() {
				public Object run() throws Throwable {
					IBizRuntimeContext context = (IBizRuntimeContext) ClassUtil
							.invokeMethod(
									"com.primeton.ext.engine.component.LogicflowInvokerHelper",
									"invokeLogicflow", new Object[] {
											parameterSet, componentName,
											flowName });
					Object data = context.get("data");
					ExtendedXMLSerializer serializer = new ExtendedXMLSerializer();
					SerializeOption option = new SerializeOption();
					serializer.setOption(option);
					option.setDepth(6);
					IMarshallingNode node = serializer.marshallToNode(data,"data");
					writer.object();
					writer.key("authorized");
					writer.value(true);	
					writer.key("success");
					writer.value(true);
					List<IMarshallingNode> children = node.getChildren();
					for (IMarshallingNode child : children) {
						write(child, writer);
					}
					writer.endObject();
					return null;
				}
			});
		} catch (Throwable e) {
			logger.error(e);
			try {
				String extype = "";
				String title = "";
				String msg = "";
				if(e instanceof InvocationTargetException){
					e = ((InvocationTargetException)e).getTargetException();
					title = "系统发生错误请与管理员联系";
					msg = e.getMessage();
					extype = "comn";
				}
				if (e instanceof EOSException) {
					title = "系统发生错误请与管理员联系";
					msg = e.getMessage();
					extype = "eos";
				}
				if (e instanceof EOSRuntimeException) {
					title = "系统发生错误请与管理员联系";
					msg = e.getMessage();
					extype = "eosrun";
				}
				if (e instanceof BusinessException) {
					title = ((BusinessException) e).getTitle();
					msg = ((BusinessException) e).getMessage();
					extype = "biz";
				}
				String loginPage = AccessRefusedExceptionHelper.getLoginPage(e==null?e:e.getCause(),request);
				writer.object();
				writer.key("authorized");
				writer.value(true);	
				writer.key("success");
				writer.value(false);
				writer.key("exception");
				writer.object();
				writer.key("extype").value(extype);
				writer.key("message").value(title);
				writer.key("errors").value(msg);
				writer.key("invalid").value(invalid);
				writer.key("loginPage").value(loginPage);
				writer.endObject();
				writer.endObject();
			} catch (JSONException e1) {
				logger.error(e1);
			}
		}
	}
	
	private static void getSource(StringBuffer sb, Throwable t) {
		if((t instanceof InvocationTargetException)==false)
		sb.append(t + "\n");
		Throwable ourCause = t.getCause();
		if (ourCause != null)
			getSource(sb, ourCause);
	}
	
	
	/** 
	 * 方法描述: 未登录或失效时会抛出异常，此时的异常处理
	 * @author 侯杰
	 * @param dasCriteria
	 * @return
	 * @throws EOSRuntimeException 
	 * @return int
	 */
	@SuppressWarnings("deprecation")
	public void processException(HttpServletRequest request,
			HttpServletResponse response, ExceptionObject exObj) throws IOException,
			ServletException {
		response.setContentType("text/json;charset=UTF-8");
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");

		PrintWriter out = response.getWriter();
		final JSONWriter writer = new JSONWriter(out);
		Throwable e = exObj.getThrowable();
		
		try {
			String code = "";
			if(e instanceof InvocationTargetException){
				e = ((InvocationTargetException)e).getTargetException();
			}
			if (e instanceof EOSException) {
				code = ((EOSException) e).getCode();
			}
			if (e instanceof EOSRuntimeException) {
				code = ((EOSRuntimeException) e).getCode();
			}
			writer.object();
				writer.key("success");
				writer.value(false);
				//add by heqj start  session失效之类的异常 都认为是session失效或者未登录
				if(e.getMessage().indexOf("session")>=0){
					writer.key("authorized"); 
					writer.value(false);
				}
				//add by heqj end 
			//--end add
			writer.key("exception");
			writer.object();
			writer.key("code").value(code);
			StringBuffer msg = new StringBuffer();
			getSource(msg,e);
			writer.key("message").value(msg);
			writer.key("invalid").value(exObj.isInvalid());
			writer.key("loginPage").value(exObj.getForwardPage());
			writer.endObject();
			writer.endObject();
		} catch (JSONException e1) {
			logger.error(e1);
		}
	}

	/** 
	 * 方法描述: 处理输出流
	 * @author 侯杰
	 * @param node
	 * @param writer
	 * @return
	 * @throws JSONException
	 * @return 
	 */
	public void write(IMarshallingNode node, JSONWriter writer)throws JSONException {
		int type = getNodeType(node);
		List<IMarshallingNode> children = null;
		switch (type) {
		case 1:
			Object nodeValue = node.getValue();
			boolean writeValue = false;
			if (nodeValue == null || Boolean.class == nodeValue.getClass()
					|| Number.class.isAssignableFrom(nodeValue.getClass())) {
				writeValue = true;
			}
			if (node.isEntry()) {
				//集合里的简单类型
				writer.value(writeValue==true?nodeValue:node.getText());
			} else {
				writer.key(node.getName()).value(writeValue==true?nodeValue:node.getText());
			}
			break;
		case 2:
			if (!node.isEntry()) {
				writer.key(node.getName());
			}
			writer.array();
			children = node.getChildren();
			for (IMarshallingNode child : children) {
				write(child, writer);
			}
			writer.endArray();
			break;
		case 3:
			if (!node.isEntry()) {
				writer.key(node.getName());
			}
			writer.object();
			children = node.getChildren();
			for (IMarshallingNode child : children) {
				write(child, writer);
			}
			writer.endObject();
			break;
		case 4:
			String xml = XmlUtil.node2String((Node) node.getValue(), false,
					false, "UTF-8");
			if (node.isEntry()) {
				writer.value(xml);
			} else {
				writer.key(node.getName()).value(xml);
			}
			break;
		case -1:
			break;
		}
	}

	private int getNodeType(IMarshallingNode node) {
		if (node.isSet() == false) {
			return -1;
		}
		if(node.isXml()){
			return 4;
		}
		if (node.getChildren().size() <= 0) {
			if (node.getText() != null)
				return 1;//基本类型
			if (SerializationConstants.NULL.equals(node
					.getAttribute(SerializationConstants.IS_NULL_OR_EMPTY))) {
				return 1;//如果为null,则默认为基本类型.
			}
			if (SerializationConstants.EMPTY.equals(node
					.getAttribute(SerializationConstants.IS_NULL_OR_EMPTY))) {
				String type = node.getAttribute(SerializationConstants.TYPE);
				if (type == null) {
					return 3;
				}
				try {
					Class clazz = Class.forName(type
							.substring(SerializationConstants.JAVA_TYPE
									.length()));
					if (clazz != null
							&& (clazz.isArray() || Collection.class
									.isAssignableFrom(clazz))) {
						return 2;
					}
					return 3;
				} catch (ClassNotFoundException e) {
				}
			}
		} else if (node.getChildren().get(0).isEntry()) {
			return 2;//集合
		}
		return 3;//对象
	}
}
/*
 * 修改历史
 * $Log: ExtBizProcessor.java,v $
 * Revision 1.1  2010/01/26 01:35:15  wanglei
 * Add:迁移6.1CVS到6.2CVS上
 *
 * Revision 1.1  2009/11/18 07:11:06  wanglei
 * Add:提交到CVS。
 *
 * Revision 1.12  2009/06/29 07:00:18  wangwb
 * Update:NAZCA中对于有引用关系的对象序列化成json格式字符串的时候，对象层次太浅
 *
 * Revision 1.11  2008/12/23 09:40:29  yangbt
 * bug:15201
 * 对于 后缀是 .ext 的特殊http请求, 返回信息的 response header信息设置缺陷
 *
 * Revision 1.10  2008/12/19 06:30:23  wangwb
 * JIRA:EOS-3548 服务端与客户端 进行JSON通讯时, Content-Type 信息 需要进一步完善
 *
 * Revision 1.9  2008/12/19 05:57:35  wangwb
 * Update:json的request content type 改为 application/json
 *
 * Revision 1.8  2008/07/29 03:35:42  wangcq
 * Code Review：整理异常，修改资源权限问题
 *
 * Revision 1.7  2008/07/28 11:02:12  wangcq
 * JIRA：EOS-2418
 * WebUI需要根据License是否授权，决定是否WebUI功能可用
 *
 * Revision 1.6  2008/07/17 02:44:03  wangwb
 * JIRA:2202
 *
 * Revision 1.5  2008/07/11 05:21:18  wangwb
 * JIRA:2093
 *
 * Revision 1.4  2008/07/11 00:39:14  wangwb
 * Update:log exception
 *
 * Revision 1.3  2008/07/10 02:26:33  wangwb
 * Update:Ajax调用的时候,只打印异常message,不打印堆栈
 *
 * Revision 1.2  2008/07/10 01:49:21  wangwb
 * JIRA:2093
 *
 * Revision 1.1  2008/07/04 11:50:15  build
 * Added by Needle,Sxn,Sccot
 *
 * Revision 1.16  2008/05/28 09:41:55  wangwb
 * Update:修改processor发生异常时记录日志
 *
 * Revision 1.15  2008/05/23 00:46:27  wangwb
 * BUG:8898 修改记录异常栈
 *
 * Revision 1.14  2008/05/09 11:17:16  wangwb
 * Update:获取e.getCause()
 *
 * Revision 1.13  2008/05/09 11:01:42  wangwb
 * Update:增加AccessRefusedException的判断
 *
 * Revision 1.12  2008/05/08 07:44:37  wangwb
 * Update:增加loginPage
 *
 * Revision 1.11  2008/05/06 08:55:31  wangwb
 * Update:新增muo项目
 *
 * Revision 1.10  2008/05/06 05:18:19  wangwb
 * Update:修改MUO
 *
 * Revision 1.9  2008/05/05 08:41:07  wangwb
 * Update:修改MUO
 *
 * Revision 1.8  2008/05/04 04:52:56  wangcq
 * Update：该问题已经由测试验证通过，但目前版本在以下场景时，存在以下问题
 *
 * 1.当调用*.ext出错时，引擎返回的异常串如：
 *
 * {"exception":{"code":"","message":"the session is invalid or user not login!","invalid":"true"}}
 *
 * Revision 1.7  2008/04/25 05:24:17  wangcq
 * JIRA:EOS-1332代码与单元测试
 *
 * Revision 1.6  2008/04/17 02:20:26  wangwb
 * Update:解决json空对象，空数组转换的问题
 *
 * Revision 1.5  2008/04/16 07:13:24  wangwb
 * Update:修改json接入
 *
 * Revision 1.4  2008/04/11 06:47:27  wangwb
 * Update:修改异常
 *
 * Revision 1.3  2008/04/11 03:08:34  wangwb
 * Update:把MUODataContext放入DataContextManager
 *
 * Revision 1.2  2008/04/11 02:57:50  wangwb
 * Update:增加用户有效性交验
 *
 * Revision 1.1  2008/04/10 08:35:15  wangwb
 * Update:修改支持json接入
 * 
 */