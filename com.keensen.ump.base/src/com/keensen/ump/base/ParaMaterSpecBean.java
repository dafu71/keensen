package com.keensen.ump.base;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import javax.net.ssl.HttpsURLConnection;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;

import java.net.URL;

import com.zoomlion.hjsrm.clib.dao.BaseBean;

public class ParaMaterSpecBean extends BaseBean {
	private ParaMaterSpecDao paramaterspecDao;

	public ParaMaterSpecDao getParamaterspecDao() {
		return paramaterspecDao;
	}

	public void setParamaterspecDao(ParaMaterSpecDao paramaterspecDao) {
		this.paramaterspecDao = paramaterspecDao;
	}

	public String getTocken(String staffCode, String password) {
		String tocken = "";
		String str = "";
		try {
			// 定义接口URL
			String apiUrl = "http://172.16.1.253:18080/qinsen/login/loginValid.do?password="
					+ password + "&staffCode=" + staffCode;

			// 创建URL对象
			URL url = new URL(apiUrl);

			// 打开连接
			HttpURLConnection connection = (HttpURLConnection) url
					.openConnection();

			// 设置HTTP请求方法（GET, POST, PUT, DELETE等）
			connection.setRequestMethod("GET");

			// 可选：设置请求头信息
			connection.setRequestProperty("Content-Type", "application/json");
			connection.setRequestProperty("Authorization",
					"Bearer your_token_here");

			// 获取响应代码
			int responseCode = connection.getResponseCode();
			System.out.println("Response Code: " + responseCode);

			// 读取响应内容
			BufferedReader reader = new BufferedReader(new InputStreamReader(
					connection.getInputStream()));
			StringBuilder response = new StringBuilder();
			String line;

			while ((line = reader.readLine()) != null) {
				response.append(line);
			}
			reader.close();

			// 输出响应内容
			// System.out.println("Response Content: " + response.toString());

			// 关闭连接
			connection.disconnect();
			str = response.toString();
			if (str.indexOf("true") > -1) {
				String[] arr = str.split(",");
				tocken = arr[2];
				String[] arr2 = tocken.split(":");
				tocken = arr2[1].replace("}", "");
				tocken = tocken.replace("\"", "");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return tocken;
	}

	public String getCarList(String pageNum, String pageSize,
			String carNumLikeStr) {

		String str = "";
		try {
			// 定义接口URL
			String apiUrl = "https://172.16.5.252:443/evo-apigw/ipms/car/list?pageNum="
					+ pageNum
					+ "&pageSize="
					+ pageSize
					+ "&carNumLikeStr="
					+ carNumLikeStr;

			// 创建URL对象
			URL url = new URL(apiUrl);

			// 打开连接
			HttpsURLConnection connection = (HttpsURLConnection) url
					.openConnection();

			// 创建自定义的 HostnameVerifier
			HostnameVerifier hv = new HostnameVerifier() {
				public boolean verify(String urlHostName, SSLSession session) {
					System.out.println("Warning: URL Host: " + urlHostName
							+ " vs. " + session.getPeerHost());
					return true; // 总是返回 true 来忽略主机名验证
				}
			};

			// 设置自定义的 HostnameVerifier
			connection.setHostnameVerifier(hv);

			// 设置HTTP请求方法（GET, POST, PUT, DELETE等）
			connection.setRequestMethod("GET");
			connection.setRequestProperty("User-Agent",
					"Java-HttpsURLConnection");

			// 可选：设置请求头信息
			connection.setRequestProperty("Content-Type", "application/json");
			connection.setRequestProperty("Authorization",
					"bearer 3:oj5PjBnZM6MFDY15OgMdvN4gs3mofu8V");
			connection.setRequestProperty("User-Id", "1");

			// 获取响应代码
			int responseCode = connection.getResponseCode();
			System.out.println("Response Code: " + responseCode);

			// 读取响应内容
			BufferedReader reader = new BufferedReader(new InputStreamReader(
					connection.getInputStream()));
			StringBuilder response = new StringBuilder();
			String line;

			while ((line = reader.readLine()) != null) {
				response.append(line);
			}
			reader.close();

			// 输出响应内容
			// System.out.println("Response Content: " + response.toString());

			// 关闭连接
			connection.disconnect();
			str = response.toString();

		} catch (Exception e) {
			e.printStackTrace();
		}
		return str;
	}

}
