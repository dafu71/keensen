package com.zoomlion.hjsrm.clib.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;

import com.zoomlion.hjsrm.clib.util.SrmFtpUtil;
import com.zoomlion.hjsrm.core.common.Common;

/**
 * ************************************************** 
 * 描 述： ftp下的文件工具类
 * @author bingyu
 * @version 1.0
 * @see HISTORY 
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public class SrmFtpFileUtil {
	
	private String opertype;

	private SrmFtpUtil ftputil;

	private boolean autorelease = true;

	public static final int BINARY_FILE_TYPE = FTP.BINARY_FILE_TYPE;

	public SrmFtpFileUtil(String name) throws Exception {
		if ((name == null) || ("".equals(name) || ("simple").equals(name))) {
			this.opertype = "simple";
		} else {
			this.opertype = "ftp";
			String server = SrmConfig.getAppConfigValue("srmfileman", "ftp", "server");
			String port = SrmConfig.getAppConfigValue("srmfileman", "ftp", "port");
			String username = SrmConfig.getAppConfigValue("srmfileman", "ftp", "username");
			String password = SrmConfig.getAppConfigValue("srmfileman", "ftp", "password");
			String homepath = SrmConfig.getAppConfigValue("srmfileman", "ftp", "homepath");
			this.ftputil = new SrmFtpUtil(server, Integer.parseInt(port), username, password, homepath);
			this.ftputil.setFileType(2);
		}
	}

	public SrmFtpFileUtil() throws Exception {
		this.opertype = SrmConfig.getAppConfigValue("srmfileman", "opertype_config", "opertype");
		if ("ftp".equals(this.opertype)) {
			String server = SrmConfig.getAppConfigValue("srmfileman", "ftp", "server");
			String port = SrmConfig.getAppConfigValue("srmfileman", "ftp", "port");
			String username = SrmConfig.getAppConfigValue("srmfileman", "ftp", "username");
			String password = SrmConfig.getAppConfigValue("srmfileman", "ftp", "password");
			String homepath = SrmConfig.getAppConfigValue("srmfileman", "ftp", "homepath");
			this.ftputil = new SrmFtpUtil(server, Integer.parseInt(port), username, password, homepath);
			this.ftputil.setFileType(2);
		}
	}

	/**
	 * 方法描述: 设置文件是否自动关闭
	 * @author bingyu
	 * @param autorelease
	 * @throws Exception 
	 * @return void
	 */
	public void setAutoRelease(boolean autorelease) throws Exception {
		this.autorelease = autorelease;
	}

	/**
	 * 方法描述: 创建目录
	 * @author bingyu
	 * @param file_path
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public boolean createDirectory(String file_path) throws Exception {
		if (this.ftputil != null)
			try {
				boolean bool = this.ftputil.createDirectory(file_path);
				return bool;
			} catch (Exception e) {
				Common.error(e);
			} finally {
				if (this.autorelease)
					this.ftputil.closeServer();
			}
		else {
			return SrmFileUtil.createDirectory(file_path);
		}
		return false;
	}

	/**
	 * 方法描述: 将文件取到输出流中
	 * @author bingyu
	 * @param out
	 * @param file_path
	 * @throws Exception 
	 * @return void
	 */
	public void retrieveFile(OutputStream out, String file_path)throws Exception {
		if (this.ftputil != null) {
			try {
				this.ftputil.downloadFile(file_path, out);
			} catch (Exception e) {
				Common.error(e);
			} finally {
				if (this.autorelease)
					this.ftputil.closeServer();
			}
		} else {
			File file = SrmFileUtil.getFile(file_path);
			SrmFileUtil.writeInputToOutput(new FileInputStream(file), out);
		}
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
	public void downloadFile(HttpServletResponse response, String full_name, String real_name) throws Exception {
		String file_name = real_name == null ? full_name : real_name;
		OutputStream out = SrmFileUtil.getOutputStreamByDown(response, file_name);
		retrieveFile(out, full_name);
	}

	/**
	 * 方法描述: 打开文件
	 * @author bingyu
	 * @param response
	 * @param full_name
	 * @param real_name
	 * @throws Exception 
	 * @return void
	 */
	public void showFile(HttpServletResponse response, String full_name, String real_name) throws Exception {
		String file_name = real_name == null ? full_name : real_name;
		OutputStream out = SrmFileUtil.getOutputStreamByShow(response, SrmFileUtil.getContentTypeByFileName(file_name));
		retrieveFile(out, full_name);
	}

	/**
	 * 方法描述: 上传文件
	 * @author bingyu
	 * @param in
	 * @param file_path
	 * @throws Exception 
	 * @return void
	 */
	public void uploadFile(InputStream in, String file_path) throws Exception {
		if (this.ftputil != null) {
			try {
				this.ftputil.uploadFile(in, file_path);
			} catch (Exception e) {
				Common.error(e);
			} finally {
				if (this.autorelease)
					this.ftputil.closeServer();
			}
		} else {
			File file = new File(file_path);
			SrmFileUtil.writeInputToOutput(in, new FileOutputStream(file));
		}
	}

	/**
	 * 方法描述: 删除文件
	 * @author bingyu
	 * @param file_path
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public boolean deleteFile(String file_path) throws Exception {
		if (this.ftputil != null)
			try {
				boolean bool = this.ftputil.deleteFile(file_path);
				return bool;
			} catch (Exception e) {
				Common.error(e);
			} finally {
				if (this.autorelease)
					this.ftputil.closeServer();
			}
		else {
			return SrmFileUtil.deleteFile(file_path);
		}
		return false;
	}

	/**
	 * 方法描述: 删除目录
	 * @author bingyu
	 * @param file_path
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public boolean removeDirectory(String file_path) throws Exception {
		return removeDirectory(file_path, false);
	}

	/**
	 * 方法描述: 删除目录，带参数：是否删除子目录
	 * @author bingyu
	 * @param file_path
	 * @param isall
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public boolean removeDirectory(String file_path, boolean isall) throws Exception {
		if (this.ftputil != null)
			try {
				boolean bool = this.ftputil.removeDirectory(file_path, isall);
				return bool;
			} catch (Exception e) {
				Common.error(e);
			} finally {
				if (this.autorelease)
					this.ftputil.closeServer();
			}
		else {
			return SrmFileUtil.removeDirectory(file_path, isall);
		}
		return false;
	}

	/**
	 * 方法描述: 获取文件输入流
	 * @author bingyu
	 * @param filePath
	 * @return
	 * @throws Exception 
	 * @return InputStream
	 */
	public InputStream getFileStream(String filePath) throws Exception {
		if (this.ftputil != null)
			try {
				InputStream localInputStream = this.ftputil.getFileStream(filePath);
				return localInputStream;
			} catch (Exception e) {
				Common.error(e);
			} finally {
				if (this.autorelease)
					this.ftputil.closeServer();
			}
		else {
			return new FileInputStream(SrmFileUtil.getFile(filePath));
		}
		return null;
	}

	public void releaseResourse() throws Exception {
		if (this.ftputil != null)
			this.ftputil.closeServer();
	}

	public void writeObject(String file_path, Object obj) throws Exception {
		if (this.ftputil != null)
			try {
				OutputStream out = this.ftputil.storeFileStream(file_path);
				if (out != null)
					SrmFileUtil.writeObject(out, obj);
			} catch (Exception e) {
				Common.error(e);
			} finally {
				if (this.autorelease)
					this.ftputil.closeServer();
			}
		else
			SrmFileUtil.writeObject(file_path, obj);
	}

	public Object readObject(String file_path) throws Exception {
		if (this.ftputil != null)
			try {
				InputStream in = this.ftputil.getFileStream(file_path);
				if (in != null) {
					Object localObject1 = SrmFileUtil.readObject(in);
					return localObject1;
				}
			} catch (Exception e) {
				Common.error(e);
			} finally {
				if (this.autorelease)
					this.ftputil.closeServer();
			}
		else {
			return SrmFileUtil.readObject(file_path);
		}
		return null;
	}

	/**
	 * 方法描述: 将本地文件上传到ftp服务器
	 * @author bingyu
	 * @param remoteFileName 服务器上文件名
	 * @param localFileName 本地文件名
	 * @param workDir 当前工作目录
	 * @param fileType 文件类型
	 * @return
	 * @throws Exception 
	 * @return String
	 */
	public static String uploadFile(String remoteFileName, String localFileName, String workDir, int fileType) throws Exception {
		// 初始化客户端对象。
		FTPClient ftpClient = new FTPClient();
		String server = SrmConfig.getAppConfigValue("srmfileman", "ftp", "server");
		String port = SrmConfig.getAppConfigValue("srmfileman", "ftp", "port");
		String username = SrmConfig.getAppConfigValue("srmfileman", "ftp", "username");
		String password = SrmConfig.getAppConfigValue("srmfileman", "ftp", "password");
		String homepath = SrmConfig.getAppConfigValue("srmfileman", "ftp", "homepath");
		String workdir = SrmConfig.getAppConfigValue("srmfileman", "ftp", "workdir");
		Integer port2 = Integer.parseInt(port);
		String tempUrl = server;
		try {
			// 与服务器建立连接。
			ftpClient.connect(server, port2);
		} catch (Exception e) {
			try {
				// 与服务器建立连接。
				ftpClient.connect(server, port2);
				tempUrl = server;
			} catch (Exception e2) {
				return null;
			}
		}
		try {
			// 登录到服务器。
			ftpClient.login(username, password);
			// 是否设置了域的根目录，如果设置则直接切换到该目录。
			if (isNotNull(homepath)) {
				ftpClient.changeWorkingDirectory(homepath);
			}
			// 切换到具体的工作目录。
			ftpClient.changeWorkingDirectory(workdir);
			// 设置要上传的文件类型。
			ftpClient.setFileType(fileType);
			// 上传文件。
			ftpClient.storeFile(remoteFileName, new FileInputStream(new File(localFileName)));
		} catch (Exception e) {
			// BillUtil.error("在ftp上传文件时发生错误！", e);
			return null;
		} finally {
			disconnect(ftpClient);
		}
		return tempUrl;
	}

	/**
	 * 方法描述: 根据文件名，工作目录拼接ftp下载的url
	 * @author bingyu
	 * @param url
	 * @param filename 文件名
	 * @param workDir 工作目录
	 * @param casetype
	 * @return
	 * @throws Exception 
	 * @return String[][]
	 */
	public static String[][] getFtpDownloadUrl(String[] url, String[] filename, String workDir, String casetype) throws Exception {
		String server = SrmConfig.getAppConfigValue("srmfileman", "ftp", "server");
		String port = SrmConfig.getAppConfigValue("srmfileman", "ftp", "port");
		String username = SrmConfig.getAppConfigValue("srmfileman", "ftp", "username");
		String password = SrmConfig.getAppConfigValue("srmfileman", "ftp", "password");
		String homepath = SrmConfig.getAppConfigValue("srmfileman", "ftp", "homepath");
		Integer port2 = Integer.parseInt(port);
		String[][] prefix = new String[2][5];
		prefix[0][0] = url[0];
		prefix[0][1] = Integer.toString(port2);
		prefix[0][2] = username;
		prefix[0][3] = password;
		prefix[1][1] = Integer.toString(port2);
		prefix[1][2] = username;
		prefix[1][3] = password;
		if (isNotNull(homepath)) {
			prefix[0][4] = ("/" + homepath);
		}
		prefix[0][4] = ("/" + "dbffilles" + "/" + filename[0]);
		prefix[1][4] = url[1];
		if (isNotNull(homepath)) {
			prefix[1][0] = ("/" + homepath);
		}
		prefix[1][4] = ("/" + "dbffilles" + "/" + filename[2]);
		return prefix;
	}

	/**
	 * 方法描述: 释放ftp连接
	 * @author bingyu
	 * @param ftpClient 
	 * @return void
	 */
	private static void disconnect(FTPClient ftpClient) {
		try {
			ftpClient.disconnect();
		} catch (Exception e) {
		}
	}

	/**
	 * 方法描述: 判断字符串是否非空。
	 * @author bingyu
	 * @param src
	 * @return 
	 * @return boolean
	 */
	public static boolean isNotNull(String src) {
		return (src != null && src.trim().length() > 0);
	}
}
