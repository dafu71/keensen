package com.keensen.ump.produce;

import com.alibaba.fastjson.JSONObject;
import com.keensen.ump.base.HttpClientUtil;
import com.zoomlion.hjsrm.clib.dao.BaseBean;

public class RcsBean extends BaseBean {
	
	private RcsDao rcsDao;

	public RcsDao getRcsDao() {
		return rcsDao;
	}

	public void setRcsDao(RcsDao rcsDao) {
		this.rcsDao = rcsDao;
	}
	/**
	 * 发送命令
	 * @param td
	 * @return
	 * @throws Exception
	 */
	public String dispatchOrder(Object td) throws Exception {
		String resultMsg = null;//获取服务端返回的参数
		String url = "http://localhost:8090/rcs/services/rest/hikRpcService/genAgvSchedulingTask";//调用生成任务单
		String param = JSONObject.toJSONString(td);//将对象转换为JSON格式
		resultMsg = HttpClientUtil.post(url, param);// 以post形式调用webservice
		if (null == resultMsg || resultMsg.toString().equals("")) {
			return null;
		}
		System.out.println(resultMsg);
		return resultMsg;
	}
}
