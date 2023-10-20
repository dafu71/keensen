package com.zoomlion.hjsrm.interfaces.common;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.eos.server.dict.DictEntry;
import com.eos.server.dict.DictManager;

/**
 * <pre>
 *                    Title: 接口工具类
 *                    Description: 程序功能的描述
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
public class Tools {
	/**
	 * 
	 * 方法描述:创建目录
	 * 
	 * @author 肖斌
	 * @param dir
	 *            要创建的目录
	 * @return void
	 */
	public static void mkDirs(String dir) {
		File fileDir = new File(dir);
		if (!fileDir.exists()) {
			fileDir.mkdirs();
		}
	}

	/**
	 * 文件拷贝
	 * 
	 * @author 肖斌
	 * @param srcName
	 *            String：原始文件名
	 * @param desName
	 *            String：目标文件名
	 * @throws IOException
	 * @return boolean
	 */
	public static boolean copy(String srcName, String desName)
			throws IOException {
		FileInputStream sIn = null;
		FileOutputStream sOut = null;
		try {
			File fSrc = new File(srcName);
			File fDes = new File(desName);

			if (!fSrc.exists()) {
				fSrc.createNewFile();
			}
			if (!fDes.exists()) {
				fDes.createNewFile();
			}

			sIn = new FileInputStream(fSrc);
			sOut = new FileOutputStream(fDes);

			byte[] bytes = new byte[4096];
			int c;

			while ((c = sIn.read(bytes)) != -1) {
				sOut.write(bytes, 0, c);
			}

			return true;
		} finally {
			if (sIn != null) {
				try {
					sIn.close();
				} catch (IOException ioe) {
				}
			}

			if (sOut != null) {
				try {
					sOut.close();
				} catch (IOException ioe) {
				}
			}
		}
	}

	/**
	 * 获取请求的url，到协议和端口为止，不包括具体的uri
	 * 
	 * @author 肖斌
	 * @param req
	 *            请求对象
	 * @return 获取到的url
	 */
	public static String getURLNoURI(HttpServletRequest req) {
		// 获取到请求的url。
		String url = req.getRequestURL().toString();

		// 获取到协议。
		int index = url.indexOf("//");

		// 获取到最初出现“/”前的内容。
		String urlHeader = url.substring(0, index + 2);
		url = url.substring(index + 2);
		index = url.indexOf("/");
		index = url.indexOf("/", index + 1); // 第二个‘/’ ,因为有项目名
		if (index != -1) {
			url = url.substring(0, index);
		}
		url = urlHeader + url;
		// 返回获取的内容。
		return (url != null) ? url.trim() : "";
	}

	/**
	 * 
	 * 方法描述: 获得指定文件夹的所有文件
	 * 
	 * @author 肖斌
	 * @param path
	 * @return 描述******
	 * @return File[]
	 */
	public static File[] getFolderFiles(String path) {
		File[] files = null;
		try {
			(new File(path)).mkdirs(); // 如果文件夹不存在 则建立新文件夹
			File a = new File(path);
			String[] file = a.list();
			files = new File[file.length];
			File temp = null;
			for (int i = 0; i < file.length; i++) {
				if (path.endsWith(File.separator)) {
					temp = new File(path + file[i]);
				} else {
					temp = new File(path + File.separator + file[i]);
				}
				files[i] = temp;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return files;
	}

	/**
	 * 
	 * 方法描述: 删除包含指定标识的文件
	 * 
	 * @author 肖斌
	 * @param path
	 * @param flag
	 *            描述******
	 * @return void
	 */
	public static void deleteFiles(String path, String flag) {
		// 获得指定文件夹的所有文件
		File[] files = getFolderFiles(path);
		if (files != null) {
			for (int i = 0; i < files.length; i++) {
				// 删除包含指定标识的文件
				if ((files[i].getName()).indexOf(flag) > -1) {
					files[i].delete();
				}
			}
		}
	}

	/**
	 * 
	 * 方法描述:根据业务字典类型返回业务字典名值对Map
	 * 
	 * @author 肖斌
	 * @param dictId
	 * @return
	 * @throws Exception
	 *             描述******
	 * @return Map
	 */
	@SuppressWarnings("unchecked")
	public static Map getDictDataById(String dictId) throws Exception {
		Map dictData = new HashMap();
		List<DictEntry> types = DictManager.getDictEntries(dictId);
		for (int i = 0; i < types.size(); i++) {
			dictData.put(types.get(i).getDictId(), types.get(i).getDictName());
		}
		return dictData;
	}

	/**
	 * 
	 * 方法描述:取得当前时间
	 * 
	 * @author 肖斌
	 * @return 描述******
	 * @return String
	 */
	public static String getDateTime() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String sDate = sdf.format(new Date());
		return sDate;
	}

	/**
	 * 
	 * 方法描述:按指定格式取得当前时间
	 * 
	 * @author 肖斌
	 * @param strFormat
	 * @return 描述******
	 * @return String
	 */
	public static String getTimeFormat(String strFormat) {
		SimpleDateFormat sdf = new SimpleDateFormat(strFormat);
		String sDate = sdf.format(new Date());
		return sDate;
	}

	/**
	 * 
	 * 方法描述: 将日期格式化成指定格式
	 * 
	 * @author 肖斌
	 * @param date
	 * @param format
	 * @return 描述******
	 * @return String
	 */
	public static String formatDate(Object date, String format) {
		SimpleDateFormat sdf = new SimpleDateFormat(format);
		return date == null ? "" : sdf.format(date);
	}
}
