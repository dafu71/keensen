package com.zoomlion.hjsrm.interfaces.common;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPFile;

import com.zoomlion.hjsrm.clib.util.SrmFileUtil;

/**
 * 回调接口
 * 
 * @author Chenmin (mailto:chenmin@primeton.com)
 * @version 1.00.00
 * 
 */
interface CallBack {
	void execult(FTPClient ftpClient) throws Exception;
}

/**
 * <pre>
 *              Title: FTP工具类
 *              Description: 处理FTP相关数据业务
 * </pre>
 * 
 * @author Chenmin (mailto:chenmin@primeton.com)
 * @version 1.00.00
 * 
 */
public class FtpClient {

	private String server = "10.100.42.36";

	private String port = "21";

	private String username = "administrator";

	private String password = "test";

	private String homepath = "dbffilles";

	private String localpath = "c:\\";

	/**
	 * 本类测试专用构造函数，请勿使用
	 */
	protected FtpClient() {
		super();
	}

	/**
	 * FTP工具类
	 * 
	 * @param server
	 *            服务地址
	 * @param port
	 *            端口
	 * @param username
	 *            账号
	 * @param password
	 *            密码
	 * @param homepath
	 *            服务器工作地址
	 * @param localpath
	 *            本机工作地址
	 */
	public FtpClient(String server, String port, String username,
			String password, String homepath, String localpath) {
		super();
		this.server = server;
		this.port = port;
		this.username = username;
		this.password = password;
		this.homepath = homepath;
		this.localpath = localpath;
	}

	/**
	 * 执行FTP任务
	 * 
	 * @param callBack
	 * @return
	 * @throws Exception
	 */
	private boolean execultTask(CallBack callBack) throws Exception {
		// 初始化客户端对象。
		FTPClient ftpClient = new FTPClient();
		Integer port2 = Integer.parseInt(port);
		try {
			// 与服务器建立连接。
			ftpClient.connect(server, port2);
		} catch (Exception e) {
			try {
				// 与服务器建立连接。
				ftpClient.connect(server, port2);
			} catch (Exception e2) {
				return false;
			}
		}
		try {
			// 登录到服务器。
			ftpClient.login(username, password);
			// 切换到具体的工作目录。
			ftpClient.changeWorkingDirectory(homepath);
			// 设置要上传的文件类型。
			ftpClient.setFileType(FTP.BINARY_FILE_TYPE);
			callBack.execult(ftpClient);
		} catch (Exception e) {
			return false;
		} finally {
			try {
				ftpClient.disconnect();
			} catch (Exception e) {
			}
		}

		return true;
	}

	/**
	 * 将本地文件上传到ftp服务器。（本地文件名字和服务器文件名字一致）
	 * 
	 * @param localFileName
	 *            本地文件名。
	 * @return 成功返回true，失败返回false。
	 */
	public boolean uploadFile(String localFileName) throws Exception {
		return uploadFile(null, localFileName);
	}

	/**
	 * 将本地文件上传到ftp服务器。（本地文件名字和服务器文件名字不一致）
	 * 
	 * @param remoteFileName
	 *            服务器上文件名。
	 * @param localFileName
	 *            本地文件名。
	 * @return 成功返回true，失败返回false。
	 */
	public boolean uploadFile(final String remoteFileName,
			final String localFileName) throws Exception {
		CallBack callBack = new CallBack() {

			public void execult(FTPClient ftpClient) throws Exception {
				File file = new File(localpath + File.separator + localFileName);
				// 上传文件。
				if (remoteFileName == null || remoteFileName.length() == 0) {
					ftpClient.storeFile(file.getName(), new FileInputStream(
							file));
				} else {
					ftpClient.storeFile(remoteFileName, new FileInputStream(
							file));
				}
			}

		};
		return this.execultTask(callBack);
	}

	/**
	 * 将ftp服务器文件下载到本地。（本地文件名字和服务器文件名字一致）
	 * 
	 * @param remoteFileName
	 *            服务器上文件名。
	 * @return 成功返回true，失败返回false。
	 */
	public boolean downloadFile(String remoteFileName) throws Exception {
		return downloadFile(remoteFileName, null);
	}

	/**
	 * 将ftp服务器文件下载到本地。（本地文件名字和服务器文件名字不一致）
	 * 
	 * @param remoteFileName
	 *            服务器上文件名。
	 * @param localFileName
	 *            本地文件名。
	 * @return 成功返回true，失败返回false。
	 */
	public boolean downloadFile(final String remoteFileName,
			final String localFileName) throws Exception {
		CallBack callBack = new CallBack() {

			public void execult(FTPClient ftpClient) throws Exception {
				if (localFileName == null || localFileName.length() == 0) {
					SrmFileUtil.writeInputToOutput(ftpClient
							.retrieveFileStream(remoteFileName),
							new FileOutputStream(localpath + File.separator
									+ remoteFileName));
				} else {
					SrmFileUtil.writeInputToOutput(ftpClient
							.retrieveFileStream(remoteFileName),
							new FileOutputStream(localpath + File.separator
									+ localFileName));
				}
			}

		};
		return this.execultTask(callBack);
	}

	/**
	 * 删除服务器文件
	 * 
	 * @param remoteFileName
	 *            服务器上文件名。
	 * @param localFileName
	 *            本地文件名。
	 * @return 成功返回true，失败返回false。
	 */
	public boolean deleteFile(final String remoteFileName) throws Exception {
		CallBack callBack = new CallBack() {

			public void execult(FTPClient ftpClient) throws Exception {
				// 删除文件
				ftpClient.deleteFile(remoteFileName);
			}

		};
		return this.execultTask(callBack);
	}
	
	/**
	 * 检测服务器文件是否存在
	 * @param remoteFileName 服务器上文件名。
	 * @return 文件存在返回true，失败返回false。
	 * @throws Exception
	 */
	public boolean exists(final String remoteFileName) throws Exception {
		final Boolean r[] = new Boolean[1];
		CallBack callBack = new CallBack() {

			public void execult(FTPClient ftpClient) throws Exception {
				// 列出所有文件，检测是否存在
				FTPFile[] files = ftpClient.listFiles();
				boolean exists = false;
				for(FTPFile f:files){
					if(f.getName().equals(remoteFileName)){
						exists = true;
					}
				}
				r[0] = exists;
			}

		};
		boolean execultTask = this.execultTask(callBack);
		return execultTask&&r[0];
	}
	
	/**
	 * 检测服务器一类文件是否存在，若存在就返回文件名
	 * @param regex 服务器上文件子串。
	 * @return 返回存在的文件名
	 * @throws Exception
	 */
	public List existsMatchs(final String regex) throws Exception {
		final List<String> fileNames=new ArrayList<String>();
		CallBack callBack = new CallBack() {
			
			public void execult(FTPClient ftpClient) throws Exception {
				// 列出所有文件，检测是否存在
				FTPFile[] files = ftpClient.listFiles();
				for(FTPFile f:files){
					if(f.getName().indexOf(regex)!=-1){
						String fileName = f.getName();
						fileNames.add(fileName);
					}
				}
			}

		};
		this.execultTask(callBack);
		return fileNames;
	}
	
	public static void autoJob(){
		System.out.println("这是一个自动执行任务的测试:"+new Date());
	}

	/**
	 * 测试例子
	 * 
	 * @param args
	 * @throws Exception
	 */
	public static void main(String[] args) throws Exception {
		String server = "10.100.42.36";
		String port = "21";
		String username = "administrator";
		String password = "test";
		String homepath = "dbffilles";
		String localpath = "c:\\";
		FtpClient f = new FtpClient(server, port, username, password, homepath,
				localpath);
		f.downloadFile("t.xml");//下载文件
		f.deleteFile("t.xml");//删除文件
		f.uploadFile("t.xml");//上传文件
	}

}
