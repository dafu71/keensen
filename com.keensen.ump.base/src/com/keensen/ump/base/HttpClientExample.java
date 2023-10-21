package com.keensen.ump.base;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

//import com.sun.net.ssl.HttpsURLConnection;

public class HttpClientExample {
    public static void main(String[] args) {
        try {
            // 定义接口URL
            String apiUrl = "http://172.16.1.253:18080/qinsen/login/loginValid.do?password=xiaobin520&staffCode=XXB";

            // 创建URL对象
            URL url = new URL(apiUrl);

            // 打开连接
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            //HttpsURLConnection connection2 = (HttpsURLConnection) url.openConnection();  

            // 设置HTTP请求方法（GET, POST, PUT, DELETE等）
            connection.setRequestMethod("GET");

            // 可选：设置请求头信息
            connection.setRequestProperty("Content-Type", "application/json");
            connection.setRequestProperty("Authorization", "Bearer your_token_here");

            // 获取响应代码
            int responseCode = connection.getResponseCode();
            System.out.println("Response Code: " + responseCode);

            // 读取响应内容
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            StringBuilder response = new StringBuilder();
            String line;

            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            // 输出响应内容
            System.out.println("Response Content: " + response.toString());

            // 关闭连接
            connection.disconnect();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}