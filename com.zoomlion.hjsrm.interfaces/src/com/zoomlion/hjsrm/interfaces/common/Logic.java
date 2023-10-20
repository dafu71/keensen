package com.zoomlion.hjsrm.interfaces.common;

import java.util.HashMap;
import java.util.Map;

import com.eos.data.datacontext.DataContextManager;
import com.eos.data.datacontext.IMUODataContext;
import com.eos.data.datacontext.IUserObject;
import com.eos.data.datacontext.UserObject;
import com.eos.engine.component.ILogicComponent;
import com.primeton.ext.common.muo.MUODataContextHelper;
import com.primeton.ext.engine.component.LogicComponentFactory;

public class Logic {
	public static Object[] callLogicBusiness(String componentName,
			String operationName, Object[] params) throws Throwable {
		createSession();
		Object[] result;
		ILogicComponent logicComponent = LogicComponentFactory
				.create(componentName);
		result = logicComponent.invoke(operationName, params);
		return result;
	}

	public static void createSession() {
		Map<String, UserObject> userMap = new HashMap<String, UserObject>();
		UserObject userObject = new UserObject();// 用户的身份
		userMap.put(IUserObject.KEY_IN_CONTEXT, userObject);
		IMUODataContext muo = MUODataContextHelper.create(userMap);
		// 设置其他的MUO属性
		DataContextManager.current().setMUODataContext(muo);
	}
}
