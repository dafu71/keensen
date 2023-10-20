package com.zoomlion.hjsrm.interfaces.print;

import java.util.ArrayList;
import java.util.List;

import com.eos.runtime.core.ApplicationContext;

/**
 * <pre>
 *      Title: 套打模板处理类
 *      Description: 牛XX的算法，慎改。
 * </pre>
 * 
 * 
 * @author Chenmin (mailto:chenmin@primeton.com)
 * @version 1.00.00
 * 
 */
public class PrintTools {

	static PrintTools pt = null;

	// 获取应用名称
	private static String CONTEXTPATH = "/"
			+ ApplicationContext.getInstance().getAppName();

	/**
	 * 禁止new 此工具类
	 */
	private PrintTools() {
	}

	/**
	 * 创建单例对象 方法描述:
	 * 
	 * @author Chenmin
	 * @return 返回PrintTools单例对象
	 * @return PrintTools
	 */
	public static PrintTools get() {
		if (pt == null) {
			pt = new PrintTools();
		}
		return pt;
	}

	/**
	 * 根据模板代码翻译成调用代码
	 * 
	 * @param templateid
	 * @param printparam
	 * @param source
	 * @return
	 */
	public String translate(String templateid, String printparam, String source) {
		// 预定义5个函数头
		String initFunction = "create_print_init_" + templateid + "(LODOP)";
		
		String addFunction = "_add_print_" + templateid + "(LODOP," + printparam
				+ ")";//改为私有方法
		String createFunction = "_create_print_" + templateid + "(LODOP,"
				+ printparam + ")";//改为私有方法
		
		String addObjectFunction = "add_print_object_" + templateid
		+ "(LODOP,o)";
		String createObjectFunction = "create_print_object_" + templateid
				+ "(LODOP,o)";

		String remark = source;
		if (source == null || source.length() == 0) {
			String error = "模板" + templateid + "还未准备好,请进入模版设计页面修改后保存！";
			String errorCode = "";
			errorCode += "function " + createFunction + "{\n\talert('" + error
					+ "');\r\n}\n\r";
			errorCode += "function " + addFunction + "{\n\talert('" + error
					+ "');\r\n}\n\r";
			errorCode += "function " + initFunction + "{\n\talert('" + error
					+ "');\r\n}\n\r";
			errorCode += "function " + addObjectFunction + "{\n\talert('"
					+ error + "');\r\n}\n\r";
			errorCode += "function " + createObjectFunction + "{\n\talert('"
					+ error + "');\r\n}\n\r";
			return errorCode;
		}
		String[] params = printparam.split(",");
		for (String p : params) {
			remark = remark.replaceAll("\"" + p + "\"", p);
		}
		remark = "\t" + remark;
		remark = remark.replaceAll("\n", "\n\t");
		remark = remark.substring(0, remark.length() - 1);

		// init 和 add 方法 分开
		List<String> initList = new ArrayList<String>();
		List<String> addList = new ArrayList<String>();
		String[] codes = remark.split("\n");
		String[] initKey = initKey();
		boolean isInitCode = false;
		for (String c : codes) {
			isInitCode = false;
			for (String k : initKey) {
				if (c.indexOf(k) != -1) {
					isInitCode = true;
				}
			}
			if (isInitCode == true) {
				initList.add(c);
			} else {
				addList.add(c);
			}
		}
		// init 方法体输出
		String initCode = "";
		for (String init : initList) {
			initCode += init;
			initCode += "\n";
		}
		initCode = "function " + initFunction + "{\n" + initCode + "}\n\r";
		// add 方法体输出
		String addCode = "\tLODOP.NewPage();\n";// 分页
		for (String add : addList) {
			addCode += add;
			addCode += "\n";
		}
		addCode = "function " + addFunction + "{\n" + addCode + "}\n\r";
		// add Object方法体输出
		String addObjectCode = "";
		// 分离函数“（”
		addObjectCode = addFunction.substring(0, addFunction.indexOf(",") + 1);
		// 拼接对象式调用参数
		String objectprintparam = printparam;
		// 替换参数为变量成员
		objectprintparam = objectprintparam.replaceAll(",", ",o.");
		objectprintparam = "o." + objectprintparam;
		addObjectCode += objectprintparam;
		// 拼接“）”
		addObjectCode += ")";
		addObjectCode = "function " + addObjectFunction + "{\n\t"
				+ addObjectCode + "\n}\n\r";
		// create 方法体调用以上函数输出
		String createCode = "function " + createFunction + "{\n\t"
				+ initFunction + ";\n\t" + addFunction + ";\n}\n\r";

		// createObject 方法体调用以上函数输出
		String createObjectCode = "function " + createObjectFunction + "{\n\t"
				+ initFunction + ";\n\t" + addObjectFunction + ";\n}\n\r";
		String initCodeComment = "//打印控件初始化含背景图片纸张信息初始化，仅在批量打印时使用，[循环外使用]\n";
		String addCodeComment = "//根据参数内容新增一页文档，形成多页文档，仅在批量打印时使用[循环内使用]\n";
		String createCodeComment = "//根据参数内容打印文件\n";
		String addObjectComment = "//根据参数【对象】内容新增一页文档，形成多页文档，仅在批量打印时使用[循环内使用]\n";
		String createObjectComment = "//根据参数【对象】内容打印文件\n";
		String code = "";
		code += initCodeComment;
		code += initCode;
		code += addCodeComment;
		code += addCode;
		code += createCodeComment;
		code += createCode;
		code += addObjectComment;
		code += addObjectCode;
		code += createObjectComment;
		code += createObjectCode;
		return code;
	}

	/**
	 * 返回 打印控件初始化的关键字
	 * 
	 * @return
	 */
	public String[] initKey() {
//		String key = "PRINT_INIT,SET_PRINT_PAGESIZE,ADD_PRINT_SETUP_BKIMG,SET_SHOW_MODE";
		String key = "PRINT_INIT,ADD_PRINT_SETUP_BKIMG,SET_SHOW_MODE";
		return key.split(",");
	}

	/**
	 * 智能校正 参数增删和 打印模板关系
	 * 
	 * @param printparam
	 * @param template
	 * @return
	 */
	public String adjust(String printparam, String template) {
		if (template == null || template.length() == 0) {
			return "";
		}
		String[] params = printparam.split(",");
		List<String> no = new ArrayList<String>();
		// 检测遗漏的
		for (String p : params) {
			if (template.indexOf("\"" + p + "\"") == -1) {
				no.add(p);
			}
		}
		int index = 0;
		int first = 27;
		int rand = (int) (Math.random() * 100);
		for (String n : no) {
			String temp = "LODOP.ADD_PRINT_TEXT(" + (27 + first * index) + ","
					+ (100 + rand) + ",100,20,\"" + n + "\");\r\n";
			template += temp;
			index++;
		}
		// 删除多余的
		String[] temp = template.split("\n");
		String newTemp = "";
		for (String t : temp) {
			// 如果是“添加文本框”.
			if (t.indexOf("LODOP.ADD_PRINT_TEXT") != -1) {
				// 获取参数
				int w = t.indexOf("\"");
				// 删除“");”
				String ps = t.substring(w + 1);
				ps = ps.replace("\");", "");
				ps = ps.replace("\r", "");
				if (ps.indexOf("#") != -1) {
					// 这是个特殊的例外
					newTemp += t;
					newTemp += "\n";
					continue;
				}
				// 循环参数，如果有此参数，添加到新代码
				for (String p : params) {
					if (p.equals(ps)) {
						newTemp += t;
						newTemp += "\n";
					}
				}
			} else {
				newTemp += t;
				newTemp += "\n";
			}
		}
		return newTemp;
	}

	/**
	 * 根据图片宽度，高度，文件夹和图片名称更新模板代码
	 * 
	 * @param picturewidth
	 *            宽度
	 * @param pictureheight
	 *            高度
	 * @param templatefolder
	 *            文件夹
	 * @param picturename
	 *            图片名称
	 * @param template
	 *            模板代码
	 * @param templateid
	 *            模板编码
	 * @param templatename
	 *            模板名称
	 * @return
	 */
	public String adjustPage(long picturewidth, long pictureheight,
			String templatefolder, String picturename, String template,
			String templateid, String templatename) {
		if (template == null || template.length() == 0) {
			return "";
		}
		String newTemp = "";
		if (picturename == null || picturename.length() == 0) {
			// 删除图片
			String[] temp = template.split("\n");
			for (String t : temp) {
				// 删除 
				if (t.indexOf("LODOP.ADD_PRINT_SETUP_BKIMG(") != -1) {
				} else if (t.indexOf("LODOP.SET_SHOW_MODE(\"BKIMG_WIDTH\",") != -1) {
				} else if (t.indexOf("LODOP.SET_SHOW_MODE(\"BKIMG_HEIGHT\",") != -1) {
				} else {
					newTemp += t;
					newTemp += "\n";
				}
			}
			template = newTemp;
			newTemp = "";
		}
		// 如果有宽度和高度
		if (picturewidth != 0 || pictureheight != 0) {
			String[] temp = template.split("\n");
			for (String t : temp) {
				// 替换 
				if (t.indexOf("LODOP.PRINT_INIT") != -1) {
					newTemp += "LODOP.PRINT_INITA(0,0,\"" + picturewidth
							+ "mm\",\"" + pictureheight + "mm\",\""
							+ templatename + "_" + templateid + "\");";
					newTemp += "\r\n";
					// 如果第一次，没有LODOP.SET_PRINT_PAGESIZE
//					if (template.indexOf("LODOP.SET_PRINT_PAGESIZE") == -1) {
//						newTemp += "LODOP.SET_PRINT_PAGESIZE(1,\""
//								+ picturewidth + "mm\",\"" + pictureheight
//								+ "mm\",\"\");";
//						newTemp += "\r\n";
//					}
//				} else if (t.indexOf("LODOP.SET_PRINT_PAGESIZE(") != -1) {
//					newTemp += "LODOP.SET_PRINT_PAGESIZE(1,\"" + picturewidth
//							+ "mm\",\"" + pictureheight + "mm\",\"\");";
//					newTemp += "\r\n";
				} else {
					newTemp += t;
					newTemp += "\n";
				}
			}
		} else {
			return template;// 如果没有高度宽度，直接返回。
		}
		template = newTemp;
		// 如果有图片
		if (picturename != null && picturename.length() != 0) {
			newTemp = "";
			if (templatefolder == null || templatefolder.length() == 0) {
				templatefolder = "";
			}
			String[] temp = template.split("\n");
			for (String t : temp) {
				// 替换 
				if (t.indexOf("LODOP.ADD_PRINT_SETUP_BKIMG(") != -1) {
					newTemp += "LODOP.ADD_PRINT_SETUP_BKIMG(\"<img border='0' src='"
							+ templatefolder + picturename + "'>\");";
					newTemp += "\r\n";
				} else if (t.indexOf("LODOP.SET_SHOW_MODE(\"BKIMG_WIDTH\",") != -1) {
					newTemp += "LODOP.SET_SHOW_MODE(\"BKIMG_WIDTH\",\""
							+ picturewidth + "mm\");";
					newTemp += "\r\n";
				} else if (t.indexOf("LODOP.SET_SHOW_MODE(\"BKIMG_HEIGHT\",") != -1) {
					newTemp += "LODOP.SET_SHOW_MODE(\"BKIMG_HEIGHT\",\""
							+ pictureheight + "mm\");";
					newTemp += "\r\n";
				} else {
					newTemp += t;
					newTemp += "\n";
				}
			}
			// 如果第一次，没有LODOP.ADD_PRINT_SETUP_BKIMG
			if (template.indexOf("LODOP.ADD_PRINT_SETUP_BKIMG") == -1) {
				newTemp += "LODOP.ADD_PRINT_SETUP_BKIMG(\"<img border='0' src='"
						+ templatefolder + picturename + "'>\");";
				newTemp += "\r\n";
				newTemp += "LODOP.SET_SHOW_MODE(\"BKIMG_WIDTH\",\""
						+ picturewidth + "mm\");";
				newTemp += "\r\n";
				newTemp += "LODOP.SET_SHOW_MODE(\"BKIMG_HEIGHT\",\""
						+ pictureheight + "mm\");";
				newTemp += "\r\n";
				newTemp += "LODOP.SET_SHOW_MODE(\"BKIMG_IN_PREVIEW\",true);";
				newTemp += "\r\n";
			}
		} else {

		}
		return newTemp;
	}

	/**
	 * 替换 ContextPath 以适应 各种部署环境
	 * 
	 * @param s
	 * @return
	 */
	public String autoReplaceContextPath(String s) {
		if (s == null)
			return null;
		String t = "LODOP.ADD_PRINT_SETUP_BKIMG(\"<img border='0' src='";
		s = s.replace(t, t + CONTEXTPATH);
		return s;
	}

	public String autoRemoveContextPath(String s) {
		return s.replace(CONTEXTPATH, "");
	}

}
