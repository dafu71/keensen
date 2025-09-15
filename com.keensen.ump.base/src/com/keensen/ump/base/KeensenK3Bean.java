package com.keensen.ump.base;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;

import java.security.cert.X509Certificate;

import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.JSONArray;
import com.eos.foundation.data.DataObjectUtil;

import commonj.sdo.DataObject;
import com.zoomlion.hjsrm.clib.dao.BaseBean;

public class KeensenK3Bean extends BaseBean {

	private static final String authorityCode = "7a8240f0239b35149515bb85f373d467175e0a90f615110e";

	private KeensenK3Dao keensenK3Dao;

	public KeensenK3Dao getkeensenK3Dao() {
		return keensenK3Dao;
	}

	public void setkeensenK3Dao(KeensenK3Dao keensenK3Dao) {
		this.keensenK3Dao = keensenK3Dao;
	}

	// 登录令牌获取接口
	public String getUserToken() {
		String ret = null;
		String token = null;
		try {
			// 定义接口URL
			String apiUrl = "http://172.16.1.253:88/K3API/Token/Create?authorityCode=";

			// 创建URL对象
			URL url = new URL(apiUrl + authorityCode);

			// 打开连接
			HttpURLConnection connection = (HttpURLConnection) url
					.openConnection();
			// HttpsURLConnection connection2 = (HttpsURLConnection)
			// url.openConnection();

			// 设置HTTP请求方法（GET, POST, PUT, DELETE等）
			connection.setRequestMethod("GET");

			// 可选：设置请求头信息
			connection.setRequestProperty("Content-Type", "application/json");
			connection.setRequestProperty("Authorization",
					"Bearer your_token_here");

			// 获取响应代码
			int responseCode = connection.getResponseCode();
			//System.out.println("Response Code: " + responseCode);

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
			//System.out.println("Response Content: " + response.toString());

			// 关闭连接
			connection.disconnect();
			ret = response.toString();
			JSONObject result = JSONObject.parseObject(ret);
			if (result.getIntValue("StatusCode") == 200) {// 成功
				JSONObject Data = result.getJSONObject("Data");
				token = Data.getString("Token");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return token;
	}

	public DataObject[] getBOM(String token) {
		String ret = null;
		DataObject[] exportObjs = null;
		// 定义接口URL
		String apiUrl = "http://172.16.1.253:88/K3API/BOM/GetList?token=";

		try {
			// 1. 创建URL对象
			URL url = new URL(apiUrl + token);

			// 2. 打开连接
			HttpURLConnection connection = (HttpURLConnection) url
					.openConnection();

			// 3. 设置请求方法为POST
			connection.setRequestMethod("POST");

			// 4. 设置请求头
			connection.setRequestProperty("Content-Type",
					"application/x-www-form-urlencoded; charset=UTF-8");
			connection.setRequestProperty("User-Agent", "Mozilla/5.0");

			// 5. 启用输出流
			connection.setDoOutput(true);

			// 6. 准备请求参数
			String postData = "{ \"Data\": {\"Top\": \"1000\",\"PageSize\": \"1000\",\"PageIndex\": \"1\",\"Filter\":"
					+ " \"[FBOMNumber] like '%%' \",\"OrderBy\": \"[FBOMNumber] asc\",\"SelectPage\": \"1\",\"Fields\": \"FBOMNumber,FItemName\"}}";

			// 7. 发送请求参数
			DataOutputStream wr = new DataOutputStream(connection
					.getOutputStream());
			wr.writeBytes(postData);
			wr.flush();
			wr.close();

			// 8. 获取响应码
			int responseCode = connection.getResponseCode();
			//System.out.println("Response Code: " + responseCode);

			// 9. 读取响应内容
			BufferedReader in = new BufferedReader(new InputStreamReader(
					connection.getInputStream(), "UTF-8"));
			String inputLine;
			StringBuffer response = new StringBuffer();

			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();

			ret = response.toString();
			JSONObject result = JSONObject.parseObject(ret);

			JSONObject Data = result.getJSONObject("Data");
			//System.out.println(Data);
			JSONArray arr = Data.getJSONArray("DATA");
			exportObjs = new DataObject[arr.size()];

			for (int i = 0; i < arr.size(); i++) {
				DataObject dl = DataObjectUtil
						.createDataObject("commonj.sdo.DataObject");
				String d = arr.get(i).toString();
				JSONObject dd = JSONObject.parseObject(d);
				dl.set("FItemName", dd.getString("FItemName"));
				dl.set("FBOMNumber", dd.getString("FBOMNumber"));
				exportObjs[i] = dl;
			}

			// 10. 打印结果
			//System.out.println(exportObjs);

		} catch (Exception e) {
			e.printStackTrace();
		}

		return exportObjs;
	}
	
//	BOM分组分页查询接口 
	public DataObject[] selectBomGroup() {
		String ret = null;
		DataObject[] exportObjs = null;
		// 定义接口URL
		String apiUrl = "http://172.16.1.253:8185/qinsen/selectBomGroup";

		try {
			// 1. 创建URL对象
			URL url = new URL(apiUrl);

			// 2. 打开连接
			HttpURLConnection connection = (HttpURLConnection) url
					.openConnection();

			// 3. 设置请求方法为POST
			connection.setRequestMethod("POST");

			// 4. 设置请求头
			connection.setRequestProperty("Content-Type",
					"application/json; charset=UTF-8");
			connection.setRequestProperty("User-Agent", "Mozilla/5.0");

			// 5. 启用输出流
			connection.setDoOutput(true);

			// 6. 准备请求参数
			String postData = "{}";

			// 7. 发送请求参数
			DataOutputStream wr = new DataOutputStream(connection
					.getOutputStream());
			wr.writeBytes(postData);
			wr.flush();
			wr.close();

			// 8. 获取响应码
			int responseCode = connection.getResponseCode();
			//System.out.println("Response Code: " + responseCode);

			// 9. 读取响应内容
			BufferedReader in = new BufferedReader(new InputStreamReader(
					connection.getInputStream(), "UTF-8"));
			String inputLine;
			StringBuffer response = new StringBuffer();

			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();

			ret = response.toString();
			//System.out.println(ret);
			JSONObject result = JSONObject.parseObject(ret);

			JSONObject data = result.getJSONObject("data");
			//System.out.println(data);
			JSONArray arr = data.getJSONArray("records");
			exportObjs = new DataObject[arr.size()];

			for (int i = 0; i < arr.size(); i++) {
				DataObject dl = DataObjectUtil
						.createDataObject("commonj.sdo.DataObject");
				String d = arr.get(i).toString();
				JSONObject dd = JSONObject.parseObject(d);
				dl.set("fname", dd.getString("fname"));
				dl.set("fnumber", dd.getString("fnumber"));
				dl.set("finterId", dd.getString("finterID"));
				dl.set("fparentId", dd.getString("fparentID"));
				dl.set("fbootId", dd.getString("fbootID"));
				exportObjs[i] = dl;
			}

			// 10. 打印结果
			//System.out.println(exportObjs);

		} catch (Exception e) {
			e.printStackTrace();
		}

		return exportObjs;
	}

//	按BOM组查询BOM 
	public DataObject[] selectBomByGroup(String finterId) {
		String ret = null;
		DataObject[] exportObjs = null;
		// 定义接口URL
		String apiUrl = "http://172.16.1.253:8185/qinsen/selectBomByGroup";

		try {
			// 1. 创建URL对象
			URL url = new URL(apiUrl);

			// 2. 打开连接
			HttpURLConnection connection = (HttpURLConnection) url
					.openConnection();

			// 3. 设置请求方法为POST
			connection.setRequestMethod("POST");

			// 4. 设置请求头
			connection.setRequestProperty("Content-Type",
					"application/json; charset=UTF-8");
			connection.setRequestProperty("User-Agent", "Mozilla/5.0");

			// 5. 启用输出流
			connection.setDoOutput(true);

			// 6. 准备请求参数
			String postData = "{\"finterId\": \" " + finterId + "\"}";

			// 7. 发送请求参数
			DataOutputStream wr = new DataOutputStream(connection
					.getOutputStream());
			wr.writeBytes(postData);
			wr.flush();
			wr.close();

			// 8. 获取响应码
			int responseCode = connection.getResponseCode();
			//System.out.println("Response Code: " + responseCode);

			// 9. 读取响应内容
			BufferedReader in = new BufferedReader(new InputStreamReader(
					connection.getInputStream(), "UTF-8"));
			String inputLine;
			StringBuffer response = new StringBuffer();

			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();

			ret = response.toString();
			//System.out.println(ret);
			JSONObject result = JSONObject.parseObject(ret);

			JSONObject data = result.getJSONObject("data");
			//System.out.println(data);
			JSONArray arr = data.getJSONArray("records");
			exportObjs = new DataObject[arr.size()];

			for (int i = 0; i < arr.size(); i++) {
				DataObject dl = DataObjectUtil
						.createDataObject("commonj.sdo.DataObject");
				String d = arr.get(i).toString();
				JSONObject dd = JSONObject.parseObject(d);
				dl.set("fbomnumber", dd.getString("fbomnumber"));
				dl.set("fnumber", dd.getString("fnumber"));
				dl.set("finterId", dd.getString("finterID"));
				dl.set("fparentId", dd.getString("fparentID"));
				dl.set("fname", dd.getString("fname"));
				dl.set("fmodel", dd.getString("fmodel"));
				dl.set("fqty", dd.getString("fqty"));
				dl.set("funitname", dd.getString("funitname"));
				dl.set("fversion", dd.getString("fversion"));
				dl.set("fstatusEnum", dd.getString("fstatus_enum"));
				dl.set("fcheckerStatus", dd.getString("fcheckerStatus"));
				dl.set("fauxPropIdEnum", dd.getString("fauxPropID_enum"));
				dl.set("ferpClsIdEnum", dd.getString("ferpClsID_enum"));
				dl.set("fbillNO", dd.getString("fbillNO"));
				dl.set("froutingName", dd.getString("froutingName"));
				dl.set("fyield", dd.getString("fyield"));
				dl.set("fnote", dd.getString("fnote"));
				dl.set("fpdmimportDate", dd.getString("fpdmimportDate"));
				dl.set("hasSourceMaterial", dd.getString("hasSourceMaterial"));
				dl.set("fbomskipEnum", dd.getString("fbomskip_enum"));
				dl.set("lastUpdateName", dd.getString("lastUpdateName"));
				dl.set("fenterTime", dd.getString("fenterTime"));
				dl.set("lastUseName", dd.getString("lastUseName"));
				dl.set("fuseDate", dd.getString("fuseDate"));
				
				dl.set("fitemId", dd.getString("fitemID"));//物料内码
				
				exportObjs[i] = dl;
			}

			// 10. 打印结果
			//System.out.println(exportObjs);

		} catch (Exception e) {
			e.printStackTrace();
		}

		return exportObjs;
	}

	//	按BOM组查询BOM物料信息 
	public DataObject[] selectBOMAndChildrenByBom(String finterId) {
		String ret = null;
		DataObject[] exportObjs = null;
		// 定义接口URL
		String apiUrl = "http://172.16.1.253:8185/qinsen/selectBOMAndChildrenByBom";

		try {
			// 1. 创建URL对象
			URL url = new URL(apiUrl);

			// 2. 打开连接
			HttpURLConnection connection = (HttpURLConnection) url
					.openConnection();

			// 3. 设置请求方法为POST
			connection.setRequestMethod("POST");

			// 4. 设置请求头
			connection.setRequestProperty("Content-Type",
					"application/json; charset=UTF-8");
			connection.setRequestProperty("User-Agent", "Mozilla/5.0");

			// 5. 启用输出流
			connection.setDoOutput(true);

			// 6. 准备请求参数
			String postData = "{\"finterId\": \" " + finterId + "\"}";

			// 7. 发送请求参数
			DataOutputStream wr = new DataOutputStream(connection
					.getOutputStream());
			wr.writeBytes(postData);
			wr.flush();
			wr.close();

			// 8. 获取响应码
			int responseCode = connection.getResponseCode();
			//System.out.println("Response Code: " + responseCode);

			// 9. 读取响应内容
			BufferedReader in = new BufferedReader(new InputStreamReader(
					connection.getInputStream(), "UTF-8"));
			String inputLine;
			StringBuffer response = new StringBuffer();

			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();

			ret = response.toString();
			//System.out.println(ret);
			JSONObject result = JSONObject.parseObject(ret);

			JSONObject data = result.getJSONObject("data");
			
			JSONArray arr = data.getJSONArray("records");
			
			String record = arr.get(0).toString();
			
			//System.out.println(record);
			
			JSONObject childBom = JSONArray.parseObject(record);
			
			JSONArray childBomList = childBom.getJSONArray("childBomList");
			
			exportObjs = new DataObject[childBomList.size()];

			for (int i = 0; i < childBomList.size(); i++) {
				DataObject dl = DataObjectUtil
						.createDataObject("commonj.sdo.DataObject");
				String d = childBomList.get(i).toString();
				JSONObject dd = JSONObject.parseObject(d);
				//dl.set("fbomnumber", dd.getString("fbomnumber"));
				dl.set("fnumber", dd.getString("fnumber"));
				dl.set("finterId", dd.getString("finterID"));
				//dl.set("fparentId", dd.getString("fparentID"));
				dl.set("fname", dd.getString("fname"));
				dl.set("fmodel", dd.getString("fmodel"));
				dl.set("fqty", dd.getString("fqty"));
				dl.set("funitname", dd.getString("funitname"));
				dl.set("fauxPropIdEnum", dd.getString("fauxPropID_enum"));
				dl.set("fmaterielChildType", dd.getString("fmaterielChildType"));
				dl.set("fmarshalTypeEnum", dd.getString("fmarshalType_enum"));
				dl.set("fbeginDay", dd.getString("fbeginDay"));
				dl.set("fendDay", dd.getString("fendDay"));
				dl.set("fpercent", dd.getString("fpercent"));
				dl.set("fscrap", dd.getString("fscrap"));
				dl.set("fpositionNo", dd.getString("fpositionNo"));
				dl.set("fitemSize", dd.getString("fitemSize"));
				dl.set("fitemSuite", dd.getString("fitemSuite"));
				dl.set("foperSn", dd.getString("foperSN"));
				
				dl.set("foperName", dd.getString("foperName"));
				dl.set("fmachinePos", dd.getString("fmachinePos"));
				
				dl.set("foffSetDay", dd.getString("foffSetDay"));
				dl.set("fbackFlushEnum", dd.getString("fbackFlush_enum"));
				dl.set("fisKeyItemEnum", dd.getString("fisKeyItem_enum"));
				dl.set("fuseStateEnum", dd.getString("fuseState_enum"));
				dl.set("fdeletedEnum", dd.getString("fdeleted_enum"));
				
				dl.set("fstockName", dd.getString("fstockName"));
				dl.set("fspfullName", dd.getString("fspfullName"));
				
				dl.set("fnote", dd.getString("fnote"));
				dl.set("fnote1", dd.getString("fnote1"));
				dl.set("fnote2", dd.getString("fnote2"));
				dl.set("fnote3", dd.getString("fnote3"));
				dl.set("fpdmimportDate", dd.getString("fpdmimportDate"));
				
				dl.set("fhasCharEnum", dd.getString("fhasChar_enum"));
				dl.set("hasSubstitute", dd.getString("hasSubstitute"));
				dl.set("itemNote", dd.getString("itemNote"));
				dl.set("fcostPercentage", dd.getString("fcostPercentage"));
				
				dl.set("fparentId", dd.getString("fparentID"));
				dl.set("fitemId", dd.getString("fitemID"));//物料内码
				
				
				
				
				exportObjs[i] = dl;
			}

			// 10. 打印结果
			//System.out.println(exportObjs);

		} catch (Exception e) {
			e.printStackTrace();
		}

		return exportObjs;
	}

	
	
	
	
}
