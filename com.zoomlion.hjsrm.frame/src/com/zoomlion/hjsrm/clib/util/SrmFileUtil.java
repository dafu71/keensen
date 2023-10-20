package com.zoomlion.hjsrm.clib.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.OutputStream;
import java.net.SocketException;
import javax.servlet.http.HttpServletResponse;

import com.zoomlion.hjsrm.core.common.Common;
/**
 * **************************************************
 * 描 述： 普通文件工具类
 * @author bingyu
 * @version 1.0
 * @see HISTORY 
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public class SrmFileUtil {
	public static final String FILE_OPERMODE_SIMPLE = "simple";

	public static final String FILE_OPERMODE_FTP = "ftp";

	public static final String UPLOAD_TYPE_ATTACH = "1";

	public static final String UPLOAD_TYPE_IMAGE = "2";

	public static final String UPLOAD_TYPE_EXPORT = "3";

	public static final String UPLOAD_TYPE_IMPORT = "4";

	public static final String UPLOAD_TYPE_TEMP = "5";

	public static final String UPLOAD_TYPE_EXPORT_FAIL = "6";

	public static final String UPLOAD_KIND_USER = "1";

	public static final String UPLOAD_KIND_SYSTEM = "2";

	public static final String FILE_TYPE_JPEG = "JPEG";

	public static final String FILE_TYPE_JPG = "JPG";

	public static final String FILE_TYPE_GIF = "GIF";

	public static final String FILE_TYPE_PNG = "PNG";

	public static final String FILE_TYPE_DOC = "DOC";

	public static final String FILE_TYPE_XLS = "XLS";

	public static final String FILE_TYPE_PPT = "PPT";

	public static final String FILE_TYPE_PDF = "PDF";

	public static final String CONTENT_TYPE_IMAGE_JPEG = "image/jpeg";

	public static final String CONTENT_TYPE_IMAGE_GIF = "image/gif";

	public static final String CONTENT_TYPE_IMAGE_PNG = "image/png";

	public static final String CONTENT_TYPE_WORD = "application/vnd.msword";

	public static final String CONTENT_TYPE_EXCEL = "application/vnd.ms-excel";

	public static final String CONTENT_TYPE_POWERPOINT = "application/vnd.ms-powerpoint";

	public static final String CONTENT_TYPE_PDF = "application/pdf";

	public static String getOperMode() throws Exception {
		return SrmConfig.getAppConfigValue("srmfileman", "opertype_config",
				"opertype");
	}

	public static String getUploadPath(String upload_type) {
		if ("1".equals(upload_type))
			return "attach";
		if ("2".equals(upload_type))
			return "image";
		if ("3".equals(upload_type))
			return "export";
		if ("4".equals(upload_type))
			return "import";
		if ("5".equals(upload_type))
			return "temp";
		return null;
	}

	private static void flush(OutputStream out) throws Exception {
		try {
			out.flush();
		} catch (SocketException e) {
		}
	}

	/**
	 * 方法描述: 返回文件的ContentType
	 * @author bingyu
	 * @param file_type
	 * @return 
	 * @return String
	 */
	public static String getContentType(String file_type) {
		String content_type = null;
		if (("JPG".equals(file_type)) || ("JPEG".equals(file_type)))
			content_type = "image/jpeg";
		if ("GIF".equals(file_type))
			content_type = "image/gif";
		if ("PNG".equals(file_type))
			content_type = "image/png";
		if ("DOC".equals(file_type))
			content_type = "application/msword";
		if ("DOCX".equals(file_type))
			content_type = "application/msword";
		if ("XLS".equals(file_type))
			content_type = "application/vnd.ms-excel";
		if ("XLSX".equals(file_type))
			content_type = "application/vnd.ms-excel";
		if ("PPT".equals(file_type))
			content_type = "application/vnd.ms-powerpoint";
		if ("PPTX".equals(file_type))
			content_type = "application/vnd.ms-powerpoint";
		if ("PDF".equals(file_type))
			content_type = "application/pdf";
		return content_type;
	}

	public static String getMainFileName(String file_name) {
		if (file_name.lastIndexOf(".") == -1)
			return file_name;
		return file_name.substring(0, file_name.lastIndexOf("."));
	}

	public static String getExpandFileName(String file_name) {
		if (file_name.lastIndexOf(".") == -1)
			return null;
		return file_name.substring(file_name.lastIndexOf(".") + 1, file_name.length());
	}

	/**
	 * 方法描述: 返回文件类型
	 * @author bingyu
	 * @param file_name
	 * @return 
	 * @return String
	 */
	public static String getFileType(String file_name) {
		if (file_name.lastIndexOf(".") == -1)
			return null;
		String file_type = file_name.substring(file_name.lastIndexOf(".") + 1, file_name.length());
		return file_type.toUpperCase();
	}

	/**
	 * 方法描述: 返回文件的ContentType
	 * @author bingyu
	 * @param file_name
	 * @return 
	 * @return String
	 */
	public static String getContentTypeByFileName(String file_name) {
		return getContentType(getFileType(file_name));
	}

	/**
	 * 方法描述: 根据文件全路径返回文件名
	 * @author bingyu
	 * @param file_name
	 * @return 
	 * @return String
	 */
	public static String getFileName(String file_name) {
		file_name = file_name.replaceAll("\\\\", "/");
		int index = file_name.lastIndexOf("/");
		return index == -1 ? file_name : file_name.substring(index + 1);
	}

	/**
	 * 方法描述: 根据文件全路径返回文件路径
	 * @author bingyu
	 * @param file_name
	 * @return 
	 * @return String
	 */
	public static String getFilePath(String file_name) {
		file_name = file_name.replaceAll("\\\\", "/");
		int index = file_name.lastIndexOf("/");
		return index == -1 ? null : file_name.substring(0, index);
	}

	/**
	 * 方法描述: 获取路径下的所有文件列表
	 * @author bingyu
	 * @param path
	 * @return
	 * @throws Exception 
	 * @return File[]
	 */
	public static File[] getFileList(String path) throws Exception {
		File file = new File(path);
		return file.exists() ? file.listFiles() : null;
	}

	/**
	 * 方法描述: 删除文件，参数为File类型
	 * @author bingyu
	 * @param file
	 * @throws Exception 
	 * @return void
	 */
	public static void deleteFiles(File file) throws Exception {
		if (file.exists()) {
			if (file.isDirectory()) {
				File[] fileList = file.listFiles();
				for (int i = 0; i < fileList.length; i++)
					deleteFiles(fileList[i]);
			} else {
				file.delete();
			}
			file.delete();
		}
	}

	/**
	 * 方法描述: 获取文件下载输出流
	 * @author bingyu
	 * @param response
	 * @param file_name
	 * @return
	 * @throws Exception 
	 * @return OutputStream
	 */
	public static OutputStream getOutputStreamByDown(HttpServletResponse response, String file_name) throws Exception {
		response.setContentType("application/octet-stream; charset=GBK");
		response.setHeader("Content-Disposition", "attachment; filename=\"" + Common.encodeCharset(file_name) + "\"");
		return response.getOutputStream();
	}

	/**
	 * 方法描述: 返回文件显示输出流
	 * @author bingyu
	 * @param response
	 * @param contenet_type
	 * @return
	 * @throws Exception 
	 * @return OutputStream
	 */
	public static OutputStream getOutputStreamByShow(HttpServletResponse response, String contenet_type)throws Exception {
		response.setContentType(contenet_type);
		response.setHeader("Pragma", "No-cache");
		response.setHeader("Cache-Control", "no-cache");
		response.setDateHeader("Expires", 0L);
		return response.getOutputStream();
	}

	/**
	 * 方法描述: 将输入流内容写入输出流
	 * @author bingyu
	 * @param in
	 * @param out
	 * @throws Exception 
	 * @return void
	 */
	public static void writeInputToOutput(InputStream in, OutputStream out)throws Exception {
		writeInputToOutput(in, out, false);
	}

	/**
	 * 方法描述: 将输入流内容写入输出流，带参数：是否继续保持流
	 * @author bingyu
	 * @param in
	 * @param out
	 * @param ispersist
	 * @throws Exception 
	 * @return void
	 */
	public static void writeInputToOutput(InputStream in, OutputStream out, boolean ispersist) throws Exception {
		int bufferSize = 1024;
		byte[] buffer = new byte[bufferSize];
		int len = -1;
		while ((len = in.read(buffer)) != -1) {
			out.write(buffer, 0, len);
			flush(out);
		}
		if (!ispersist) {
			in.close();
			out.close();
		}
	}

	/**
	 * 方法描述: 显示文件
	 * @author bingyu
	 * @param response
	 * @param full_name
	 * @param real_name
	 * @throws Exception 
	 * @return void
	 */
	public static void showFile(HttpServletResponse response, String full_name, String real_name) throws Exception {
		String file_name = real_name == null ? full_name : real_name;
		File file = getFile(full_name);
		OutputStream out = getOutputStreamByShow(response, getContentTypeByFileName(file_name));
		writeInputToOutput(new FileInputStream(file), out);
	}

	/**
	 * 方法描述: 下载文件
	 * @author bingyu
	 * @param response
	 * @param full_name
	 * @throws Exception 
	 * @return void
	 */
	public static void downFile(HttpServletResponse response, String full_name) throws Exception {
		downFile(response, full_name, null);
	}

	/**
	 * 方法描述: 根据全路径文件名获取文件，返回File对象
	 * @author bingyu
	 * @param full_name
	 * @return
	 * @throws Exception 
	 * @return File
	 */
	public static File getFile(String full_name) throws Exception {
		File file = new File(full_name);
		if (!file.exists())
			Common.error("文件 " + full_name + " 未找到!");
		return file;
	}

	/**
	 * 方法描述: 下载文件
	 * @author bingyu
	 * @param response
	 * @param full_name
	 * @param real_name
	 * @throws Exception 
	 * @return void
	 */
	public static void downFile(HttpServletResponse response, String full_name, String real_name) throws Exception {
		String file_name = real_name == null ? full_name : real_name;
		File file = getFile(full_name);
		OutputStream out = getOutputStreamByDown(response, file_name);
		writeInputToOutput(new FileInputStream(file), out);
	}

	/**
	 * 方法描述: 删除文件，参数为文件全路径
	 * @author bingyu
	 * @param full_name
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public static boolean deleteFile(String full_name) throws Exception {
		File file = new File(full_name);
		if (file.exists())
			return file.delete();
		return false;
	}

	/**
	 * 方法描述: 删除路径下的名为filename的文件
	 * @author bingyu
	 * @param file_path
	 * @param file_name
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public static boolean deleteFile(String file_path, String file_name)throws Exception {
		File file = new File(file_path, file_name);
		if (file.exists())
			return file.delete();
		return false;
	}

	/**
	 * 方法描述: 将文件内容写到Object对象中，参数为OutputStream流对象
	 * @author bingyu
	 * @param out
	 * @param obj
	 * @throws Exception 
	 * @return void
	 */
	public static void writeObject(OutputStream out, Object obj)throws Exception {
		ObjectOutputStream oout = new ObjectOutputStream(out);
		oout.writeObject(obj);
		out.close();
		oout.close();
	}

	/**
	 * 方法描述: 将文件内容写到Object对象中，参数为File对象
	 * @author bingyu
	 * @param file
	 * @param obj
	 * @throws Exception 
	 * @return void
	 */
	public static void writeObject(File file, Object obj) throws Exception {
		writeObject(new FileOutputStream(file), obj);
	}

	/**
	 * 方法描述: 将文件内容写到Object对象中，参数为文件名
	 * @author bingyu
	 * @param file_name
	 * @param obj
	 * @throws Exception 
	 * @return void
	 */
	public static void writeObject(String file_name, Object obj) throws Exception {
		writeObject(new File(file_name), obj);
	}

	/**
	 * 方法描述: 将文件内容读到Object对象中，参数为InputStream对象
	 * @author bingyu
	 * @param in
	 * @return
	 * @throws Exception 
	 * @return Object
	 */
	public static Object readObject(InputStream in) throws Exception {
		ObjectInputStream oin = new ObjectInputStream(in);
		Object obj = oin.readObject();
		in.close();
		oin.close();
		return obj;
	}

	/**
	 * 方法描述: 将文件内容读到Object对象中,参数为File对象
	 * @author bingyu
	 * @param file
	 * @return
	 * @throws Exception 
	 * @return Object
	 */
	public static Object readObject(File file) throws Exception {
		return readObject(new FileInputStream(file));
	}

	/**
	 * 方法描述: 将文件内容读到Object对象中
	 * @author bingyu
	 * @param file_name
	 * @return
	 * @throws Exception 
	 * @return Object
	 */
	public static Object readObject(String file_name) throws Exception {
		File file = getFile(file_name);
		return readObject(file);
	}

	/**
	 * 方法描述: 创建目录
	 * @author bingyu
	 * @param file_path
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public static boolean createDirectory(String file_path) throws Exception {
		File dir = new File(file_path);
		if (!dir.exists())
			return dir.mkdir();
		return true;
	}

	/**
	 * 方法描述: 删除目录
	 * @author bingyu
	 * @param file_path
	 * @param isall
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public static boolean removeDirectory(String file_path, boolean isall) throws Exception {
		File file = new File(file_path);
		if (!file.exists())
			return false;
		if (isall) {
			File[] fileList = file.listFiles();
			for (int i = 0; i < fileList.length; i++) {
				File fileItem = fileList[i];
				if (fileItem.isDirectory())
					removeDirectory(fileItem.getPath(), isall);
				else {
					fileItem.delete();
				}
			}
		}
		return file.delete();
	}
}