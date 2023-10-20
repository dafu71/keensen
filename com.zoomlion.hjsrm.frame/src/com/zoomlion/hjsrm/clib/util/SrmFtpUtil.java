package com.zoomlion.hjsrm.clib.util;

import com.zoomlion.hjsrm.core.common.Common;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPFile;

/**
 * **************************************************
 * 描    述：  Ftp工具类
 * @author   bingyu
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public class SrmFtpUtil {
	
	public static final int FILE_TYPE_BINARY = 2;

	public static final int FILE_TYPE_ASCII = 0;

	protected FTPClient client;

	private String ftpserver = "10.100.42.36";

	private int ftpport = 21;

	private String ftpuser = "administrator";

	private String ftppasswd = "test";

	private String ftppath = "CBJCATCH";

	public SrmFtpUtil(String server, String user, String password) throws Exception {
		this(server, 21, user, password, null);
	}

	public SrmFtpUtil(String server, String user, String password, String path) throws Exception {
		this(server, 21, user, password, path);
	}

	public SrmFtpUtil(String server, int port, String user, String password, String path) throws Exception {
		this.ftpserver = server;
		this.ftpport = port;
		this.ftpuser = user;
		this.ftppasswd = password;
		this.ftppath = path;
		this.client = new FTPClient();
		connectServer(this.ftpserver, this.ftpport, this.ftpuser, this.ftppasswd, this.ftppath);
	}

	protected void connectServer(String server, int port, String user, String password, String path) throws Exception {
		SrmLog.debug("ftp>connected to " + server + ".");
		this.client.connect(server, port);
		SrmLog.debug("ftp>connection reply : " + this.client.getReplyCode());
		boolean loginrs = this.client.login(user, password);
		if (loginrs)
			SrmLog.debug("ftp>login successful.");
		else {
			Common.error("ftp>login incorrect,please check ftp user and password.");
		}
		if ((path != null) && (!"".equals(path)))
			this.client.changeWorkingDirectory(path);
	}

	/**
	 * 方法描述: 设置文件类型,0:ascii 2:binary
	 * @author bingyu
	 * @param fileType
	 * @throws Exception 
	 * @return void
	 */
	public void setFileType(int fileType) throws Exception {
		SrmLog.debug("ftp>set " + (fileType == 0 ? "assii" : "binary") + " file type.");
		this.client.setFileType(fileType);
	}

	/**
	 * 方法描述: 关闭server
	 * @author bingyu
	 * @throws Exception 
	 * @return void
	 */
	public void closeServer() throws Exception {
		if (this.client.isConnected()) {
			this.client.disconnect();
			SrmLog.debug("ftp>close " + this.ftpserver + "...");
		}
	}

	/**
	 * 方法描述: 改变路径
	 * @author bingyu
	 * @param path
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public boolean changeDirectory(String path) throws Exception {
		boolean result = this.client.changeWorkingDirectory(path);
		if (result)
			SrmLog.debug("ftp>change directory [" + path + "].");
		else {
			Common.error("ftp>change directory [" + path + "] failded.");
		}
		return result;
	}

	/**
	 * 方法描述: 创建目录
	 * @author bingyu
	 * @param path
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public boolean createDirectory(String path) throws Exception {
		boolean result = this.client.makeDirectory(path);
		if (result)
			SrmLog.debug("ftp>create directory [" + path + "].");
		else {
			Common.error("ftp>create directory [" + path + "] failded.");
		}
		return result;
	}

	/**
	 * 方法描述: 删除目录
	 * @author bingyu
	 * @param path
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public boolean removeDirectory(String path) throws Exception {
		boolean result = this.client.removeDirectory(path);
		if (result)
			SrmLog.debug("ftp>remove directory [" + path + "].");
		else {
			Common.error("ftp>remove directory [" + path + "] failded.");
		}
		return result;
	}

	/**
	 * 方法描述: 删除目录，带参数：是否删除子目录
	 * @author bingyu
	 * @param path
	 * @param isall
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public boolean removeDirectory(String path, boolean isall) throws Exception {
		if (!isall)
			return removeDirectory(path);
		FTPFile[] files = this.client.listFiles(path);
		if ((files == null) || (files.length == 0))
			return removeDirectory(path);
		SrmLog.debug("ftp>remove directory [" + path + "] and sub directory.");
		for (int i = 0; i < files.length; i++) {
			String name = files[i].getName();
			if (files[i].isDirectory())
				removeDirectory(path + "/" + name, true);
			else if (files[i].isFile()) {
				deleteFile(path + "/" + name);
			}
		}
		return this.client.removeDirectory(path);
	}

	/**
	 * 方法描述: 获取路径下的文件列表
	 * @author bingyu
	 * @param path
	 * @return
	 * @throws Exception 
	 * @return List
	 */
	@SuppressWarnings("unchecked")
	public List getFileList(String path) throws Exception {
		FTPFile[] files = this.client.listFiles(path);
		List list = new ArrayList();
		if ((files == null) || (files.length == 0)) {
			return list;
		}
		for (int i = 0; i < files.length; i++) {
			if (files[i].isFile()) {
				list.add(files[i].getName());
			}
		}
		return list;
	}

	/**
	 * 方法描述: 删除文件
	 * @author bingyu
	 * @param filePath
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public boolean deleteFile(String filePath) throws Exception {
		boolean result = this.client.deleteFile(filePath);
		if (result)
			SrmLog.debug("ftp>delete file [" + filePath + "].");
		else {
			Common.error("ftp>delete file [" + filePath + "] failded.");
		}
		return result;
	}

	/**
	 * 方法描述: 上传文件
	 * @author bingyu
	 * @param filePath
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public boolean uploadFile(String filePath) throws Exception {
		String fileName = SrmFileUtil.getFileName(filePath);
		SrmLog.debug("ftp>ready upload file [" + filePath + "] to [" + fileName + "]...");
		FileInputStream in = new FileInputStream(filePath);
		return uploadFile(in, fileName);
	}

	/**
	 * 方法描述: 上传文件，参数为文件名，并在server端重命名为serverfileName
	 * @author bingyu
	 * @param localfilePath
	 * @param serverfileName
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public boolean uploadFile(String localfilePath, String serverfileName) throws Exception {
		SrmLog.debug("ftp>ready upload file [" + localfilePath + "] to [" + serverfileName + "]...");
		FileInputStream in = new FileInputStream(localfilePath);
		return uploadFile(in, serverfileName);
	}

	/**
	 * 方法描述: 上传文件，参数为InputStream对象，并在server端重命名为serverfileName
	 * @author bingyu
	 * @param in
	 * @param serverfileName
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public boolean uploadFile(InputStream in, String serverfileName) throws Exception {
		boolean result = false;
		try {
			result = this.client.storeFile(serverfileName, in);
		} catch (Exception e) {
			throw e;
		} finally {
			in.close();
			if (result)
				SrmLog.debug("ftp>upload file to [" + serverfileName + "].");
			else {
				Common.error("ftp>upload file to [" + serverfileName + "] failded.");
			}
		}
		return result;
	}

	/**
	 * 方法描述: 下载server端文件至本地路径
	 * @author bingyu
	 * @param serverFilePath
	 * @param localFilePath
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public boolean downloadFile(String serverFilePath, String localFilePath) throws Exception {
		SrmLog.debug("ftp>ready download file [" + serverFilePath + "] to [" + localFilePath + "]...");
		File file = new File(localFilePath);
		return downloadFile(serverFilePath, new FileOutputStream(file));
	}

	/**
	 * 方法描述: 下载server端文件至输出流
	 * @author bingyu
	 * @param serverFilePath
	 * @param out
	 * @return
	 * @throws Exception 
	 * @return boolean
	 */
	public boolean downloadFile(String serverFilePath, OutputStream out) throws Exception {
		boolean result = false;
		try {
			result = this.client.retrieveFile(serverFilePath, out);
		} catch (Exception e) {
			throw e;
		} finally {
			out.close();
			if (result)
				SrmLog.debug("ftp>download file from [" + serverFilePath + "].");
			else {
				Common.error("ftp>download file from [" + serverFilePath + "] failded.");
			}
		}
		return result;
	}

	/**
	 * 方法描述: 返回服务端文件至输入流
	 * @author bingyu
	 * @param filePath
	 * @return
	 * @throws Exception 
	 * @return InputStream
	 */
	public InputStream getFileStream(String filePath) throws Exception {
		InputStream in = null;
		try {
			in = this.client.retrieveFileStream(filePath);
		} catch (Exception e) {
			throw e;
		} finally {
			if (in != null)
				SrmLog.debug("ftp>download file stream from [" + filePath + "].");
			else {
				Common.error("ftp>download file stream from [" + filePath + "] failded.");
			}
		}
		return in;
	}

	/**
	 * 方法描述: 保存文件至输出流
	 * @author bingyu
	 * @param filePath
	 * @return
	 * @throws Exception 
	 * @return OutputStream
	 */
	public OutputStream storeFileStream(String filePath) throws Exception {
		SrmLog.debug("ftp>store file stream from [" + filePath + "].");
		return this.client.storeFileStream(filePath);
	}

	/**
	 * 方法描述: 根据文件名，工作目录拼接ftp下载的url。
	 * @author bingyu
	 * @param url
	 * @param filename
	 * @param workDir
	 * @param casetype
	 * @return 
	 * @return String[][]
	 */
	public String[][] getFtpDownloadUrl(String[] url, String[] filename, String workDir, String casetype) {
		String[][] prefix = new String[2][5];
		prefix[0][0] = url[0];
		prefix[0][1] = Integer.toString(ftpport);
		prefix[0][2] = ftpuser;
		prefix[0][3] = ftppasswd;
		prefix[1][1] = Integer.toString(ftpport);
		prefix[1][2] = ftpuser;
		prefix[1][3] = ftppasswd;
		if (isNotNull(ftppath)) {
			prefix[0][4] = ("/" + ftppath);
		}
		prefix[0][4] = ("/" + "dbffilles" + "/" + filename[0]);
		prefix[1][4] = url[1];
		if (isNotNull(ftppath)) {
			prefix[1][0] = ("/" + ftppath);
		}
		prefix[1][4] = ("/" + "dbffilles" + "/" + filename[2]);
		return prefix;
	}

	/**
	 * 方法描述: 判断字符串是否非空
	 * @author bingyu
	 * @param src
	 * @return 
	 * @return boolean
	 */
	public static boolean isNotNull(String src) {
		return (src != null && src.trim().length() > 0);
	}
}
