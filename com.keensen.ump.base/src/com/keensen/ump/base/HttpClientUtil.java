package com.keensen.ump.base;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.PostMethod;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * HttpClientUtil
 *
 * @author shousenfeng
 * @date 2016/5/5
 */
public class HttpClientUtil {

    private static Logger LOGGER = LoggerFactory.getLogger(HttpClientUtil.class);

    @SuppressWarnings("deprecation")
	public static String post(String url,String requestParamStr) throws Exception {
        try {
            HttpClient client = new HttpClient();
            PostMethod method = new PostMethod(url);
            method.addRequestHeader("Accept", "application/json");
            method.addRequestHeader("Content-Type", "application/json");
            method.setRequestBody(requestParamStr);
            int statusCode = client.executeMethod(method);
            LOGGER.debug("statusCode:" + statusCode);
            if(statusCode  != HttpStatus.SC_OK){
                LOGGER.error("method faild," + method.getStatusLine());
            }
            byte[] responseBody = method.getResponseBody();
            String response = new String(responseBody);
            LOGGER.debug("post response:" + response);
            return response;
        } catch (Exception e) {
            LOGGER.error("POST failed",e);
            throw new Exception("POST failed",e);
        }
    }
    
}