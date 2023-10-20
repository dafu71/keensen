package com.zoomlion.hjsrm.frame.tools;

import java.util.Map;

import client.SendMessageDataClient;

import com.zoomlion.hjsrm.core.exception.BusinessException;

public class DXSendUtil {
	private static SendMessageDataClient client = null;

	public DXSendUtil() {
		if (client == null) {
			client = new SendMessageDataClient();
			client.initSms("HWSMS", "hw123456");
		}
	}

	/**
	 * 方法描述:发送短信
	 */
	public static void sendMessage(Map paradata) throws Exception {
		String content = paradata.get("content").toString();
		String busType = paradata.get("busType") == null ? "服务信息" : paradata
				.get("busType").toString();
		String[] userids = paradata.get("userid").toString().split(",");
		String[] phones = paradata.get("mobileno").toString().split(",");

		if (userids.length != phones.length) {
			throw new BusinessException("发送短信异常!", "有用户没有设置电话号码!");
		}

		// String[] phones = new String[userids.length];
		try {
			for (int i = 0; i < userids.length; i++) {
				if (userids[i].equals("")) {
					throw new Exception("发送短信失败,userid不能为空!");
				}
				// String temp = this.getPhoneByOperatorid(userids[i]);
				if (phones[i] == null || "".equals(phones[i])) {
					throw new BusinessException("发送短信异常!", "发送短信失败,工号为"
							+ userids[i] + "没有设置电话号码!");
				}
				// phones[i] = temp;*/
			}
			if (content != null && !"null".equals(content)
					&& !"".equals(content)) {
				client.sendSms(phones, content, busType);
				System.out.println("发送到总部短信接口成功====" + phones[0]);
			}

		} catch (Exception e) {
			throw new BusinessException("发送短信异常!", e.getMessage());

		}
	}
}
