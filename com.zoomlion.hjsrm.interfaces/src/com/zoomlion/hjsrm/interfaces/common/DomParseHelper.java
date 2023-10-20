package com.zoomlion.hjsrm.interfaces.common;

import java.io.ByteArrayInputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

/**
 * 
 * <pre>
 *       Title: WebService DOM解析类
 *       Description: 程序功能的描述
 * </pre>
 * 
 * @author 肖斌
 * @version 1.0
 * 
 */
/*
 * 修改历史,方法中重大的变动需要有历史记录，格式：2012-12-28 修改人 修改内容***
 * 
 */
public class DomParseHelper {

	/**
	 * 
	 * 方法描述:解析DOM Head
	 * 
	 * @author 肖斌
	 * @param xml
	 * @return 描述******
	 * @return Map<String,String>
	 */
	@SuppressWarnings("unchecked")
	public static Map<String, String> parseHead(String xml) {
		Map<String, String> head = new HashMap<String, String>();
		Document doc = null;
		SAXReader reader = null;

		try {
			reader = new SAXReader();
			doc = reader.read(new ByteArrayInputStream(xml.getBytes("UTF-8")));
		} catch (UnsupportedEncodingException e) {
			try {
				doc = reader.read(new ByteArrayInputStream(xml.getBytes()));
			} catch (DocumentException ue) {
			}
		} catch (DocumentException e) {
		}

		Element rootElement = doc.getRootElement();
		Element prefix = rootElement.element("HEAD");
		List<Element> list = prefix.elements();

		Iterator<Element> it = list.iterator();
		while (it.hasNext()) {
			Element e = it.next();
			head.put(e.getName().trim(), e.getStringValue().trim());
		}
		return head;
	}

	/**
	 * 
	 * 方法描述:解析DOM Body
	 * 
	 * @author 肖斌
	 * @param xml
	 *            带解析xml字符串
	 * @return 描述******
	 * @return List<Map<String,String>>
	 */
	public static List<Map<String, String>> parseBody(String xml) {
		return parseBody(xml, null);
	}

	/**
	 * 
	 * 方法描述: 根据指定节点解析DOM Body
	 * 
	 * @author 肖斌
	 * @param xml
	 *            带解析的xml字符串
	 * @param node
	 *            指定开始解析的节点（DATA/节点名/...）
	 * @return 描述******
	 * @return List<Map<String,String>>
	 */
	@SuppressWarnings("unchecked")
	public static List<Map<String, String>> parseBody(String xml, String node) {
		List<Map<String, String>> bodys = new ArrayList<Map<String, String>>();
		Document doc = null;
		Element root = null;
		SAXReader reader = null;

		try {
			reader = new SAXReader();
			doc = reader.read(new ByteArrayInputStream(xml.getBytes("UTF-8")));
		} catch (UnsupportedEncodingException e) {
			try {
				doc = reader.read(new ByteArrayInputStream(xml.getBytes()));
			} catch (DocumentException ue) {
			}
		} catch (DocumentException e) {
		}
		
		root = doc.getRootElement();
		List<Element> rows = null;
		if (node != null && !"".equals(node)) {
			if (node.indexOf("/") > -1) {
				String[] n = node.split("/");
				Element ele = null;
				for (int i = 0, j = n.length; i < j; i++) {
					if (i == 0) {
						ele = root.element(n[i]);
					} else {
						ele = ele.element(n[i]);
					}
				}
				rows = ele.elements();
			} else {
				rows = root.element("DATA").element(node).elements();
			}
		} else {
			rows = root.element("DATA").elements();
		}
		
		for (int i = 0, ii = rows.size(); i < ii; i++) {
			List<Element> list = rows.get(i).elements();
			Map<String, String> map = new HashMap<String, String>();
			for (int j = 0, jj = list.size(); j < jj; j++) {
				Element e = list.get(j);
				map.put(e.getName().trim(), e.getStringValue().trim());
			}
			bodys.add(map);
		}
		return bodys;
	}
	
	public static void main(String[] args) {
		String xml = "<FEEDBACK><DATA>"+
				"<ROW>"+
      "<RESULT>1(成功:1,异常:0)</RESULT>"+
      "<MSG>备注信息,可以放入系统异常信息内容</MSG>"+
 "<DATA NAME='NEWMETER'>"+
          "<ROW>"+
             "<STARTREADING>新表起始码</STARTREADING>"+
          "</ROW>"+
       "</DATA>"+
"</ROW>"+
 "</DATA></FEEDBACK>";

		List<Map<String, String>> s = parseBody(xml);
		System.out.println(s);
	}
}