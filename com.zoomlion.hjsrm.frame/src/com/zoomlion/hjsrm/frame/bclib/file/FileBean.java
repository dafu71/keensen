package com.zoomlion.hjsrm.frame.bclib.file;

import java.net.URLDecoder;

import com.eos.foundation.common.utils.FileUtil;
import com.primeton.ext.access.http.IUploadFile;
import com.zoomlion.hjsrm.clib.util.SrmConfig;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl;

/**
 * **************************************************
 * 描    述：  实现文件处理功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class FileBean {
	
	private FileDao fileDao;
	
	/**
	 * 方法描述: 上传文件
	 * @author 侯杰
	 * @param fileupload
	 * @return
	 * @throws Exception 
	 * @return String
	 */
	public String uploadFile(IUploadFile fileupload)throws Exception {
		TAtFileuploadImpl file  = new TAtFileuploadImpl();
		file.setFileName(fileupload.getClientFileName());
		file.setFileNewName(fileupload.getFileName());
		file.setFilePath(fileupload.getFilePath());
		file.setFileSize(fileupload.getSize());
		file.setFileType(fileupload.getContentType());
		file.setFileSave("1");//TODO 业务字典
		fileDao.getPrimaryKey(file); 
		Long operatorid =(Long) Common.getCurrentUseObject().getAttributes().get("operatorid");
		String operatorname =(String) Common.getCurrentUseObject().getAttributes().get("operatorname");
		file.setOperatorid(operatorid);
		file.setOperatorname(operatorname);
		file.setDataorgid(Integer.parseInt(Common.getCurrentUserDataOrgId()));
		fileDao.insertEntity(file);
		return file.getFileId();
	}
	
	/**
	 * 方法描述: 添加文件记录到数据库
	 * @author 侯杰
	 * @param tatFileupload
	 * @return
	 * @throws Exception 
	 * @return String
	 */
	public String addFile(TAtFileupload tatFileupload) throws Exception {
		fileDao.getPrimaryKey(tatFileupload); //getAttributes().get("dataorgid")
		Long operatorid =(Long) Common.getCurrentUseObject().getAttributes().get("operatorid");
		String operatorname =(String) Common.getCurrentUseObject().getAttributes().get("operatorname");
		tatFileupload.setOperatorid(operatorid);
		tatFileupload.setOperatorname(operatorname);
		tatFileupload.setDataorgid(Integer.parseInt(Common.getCurrentUserDataOrgId()));
		String v = moveUploadFileToCatalog(tatFileupload);
		tatFileupload.setFilePath(v);
		fileDao.insertEntity(tatFileupload);
		return tatFileupload.getFileId();
	}
	
	/**
	 * 方法描述: 添加文件记录到数据库
	 * @author dafu
	 * @param tatFileupload
	 * @return
	 * @throws Exception 
	 * @return String
	 */
	public String addFile(TAtFileupload tatFileupload,String dataorgid2,String operatorid2,String operatorname2) throws Exception {
		fileDao.getPrimaryKey(tatFileupload); //getAttributes().get("dataorgid")
		if(null != Common.getCurrentUseObject().getAttributes().get("operatorid")){
			return this.addFile(tatFileupload);
		}else{
			Long operatorid =Long.parseLong(operatorid2);
			String operatorname =operatorname2;
			tatFileupload.setOperatorid(operatorid);
			if(operatorname!=null){
				tatFileupload.setOperatorname(URLDecoder.decode(operatorname,"UTF-8"));
			}			
			tatFileupload.setDataorgid(Integer.parseInt(dataorgid2));
			String v = moveUploadFileToCatalog(tatFileupload);
			tatFileupload.setFilePath(v);
			fileDao.insertEntity(tatFileupload);
			return tatFileupload.getFileId();
		}
		
		
		
	}

	/**
	 * 方法描述: 添加文件记录到数据库(批量)
	 * @author 侯杰
	 * @param upFiles
	 * @param groupId
	 * @param relationId
	 * @throws Exception 
	 * @return void
	 */
	public void addFileBatch(IUploadFile [] upFiles,String groupId,String relationId) throws Exception {
		for (int i = 0; i < upFiles.length; i++) {
			TAtFileuploadImpl file  =new TAtFileuploadImpl();
			file.setFileName(upFiles[i].getClientFileName());
			file.setFileNewName(upFiles[i].getFileName());
			file.setFilePath(upFiles[i].getFilePath());
			file.setFileSize(upFiles[i].getSize());
			file.setFileType(upFiles[i].getContentType());
			file.setFileSave("1");//TODO 业务字典
			file.setGroupId(groupId);
			file.setRelationId(relationId);
			this.addFile(file);
		}
	}

	/**
	 * 方法描述: 添加文件到服务器指定目录
	 * @author 侯杰
	 * @param tatfileuploade
	 * @return
	 * @throws Exception 
	 * @return String
	 */
	public String moveUploadFileToCatalog(TAtFileupload tatfileuploade)throws Exception {
		String uploadSysLoad = SrmConfig.getAppConfigValue("srmframe-config", "uploadfile-config", "defaultDirPath");// 从配置文件中读取文件上传目录
		return FileUploadUtil.moveUploadFileToCatalog(uploadSysLoad, tatfileuploade);
	}

	/**
	 * 方法描述: 删除文件 包括删除数据库file记录和服务器中具体文件
	 * @author 侯杰
	 * @param fileId
	 * @throws Exception 
	 * @return void
	 */
	public void deleteFile(String fileId)throws Exception {
		TAtFileupload file = queryFilesById(fileId);
		file.setFileId(fileId);
		fileDao.deleteFile(file);//删除数据库中文件记录
		FileUtil.deleteFile(file.getFilePath());// 删除服务器中文件
	}

	/**
	 * 方法描述: 仅删除服务器中文件
	 * @author 侯杰
	 * @param filePath
	 * @throws Exception 
	 * @return void
	 */
	public void deleteSYSFile(String filePath) throws Exception {
		FileUtil.delete(filePath);
	}

	/** 
	 * 方法描述: 删除 (依据主键) 仅删除数据库中DB文件
	 * @author 侯杰
	 * @param file
	 * @throws Exception 
	 * @return void
	 */
	public void deleteDBFile(TAtFileupload file) throws Exception {
		fileDao.deleteFile(file);
	}

	/**
	 * 方法描述: 根据参数Data 查询出下载文件列表GroupId,RelationId
	 * @author 侯杰
	 * @param groupId
	 * @param relationId
	 * @return
	 * @throws Exception 
	 * @return TAtFileupload[]
	 */
	public TAtFileupload[] queryFiles(String groupId, String relationId)throws Exception {
		return fileDao.queryListFiles(groupId, relationId);
	}

	/**
	 * 方法描述: 依据附件ID查询附件
	 * @author 侯杰
	 * @param fileId
	 * @return
	 * @throws Exception 
	 * @return TAtFileupload
	 */
	public TAtFileupload queryFilesById(String fileId) throws Exception {
		TAtFileupload file = new TAtFileuploadImpl();
		file.setFileId(fileId);
		fileDao.expandEntity(file);
		if (file != null) {
			return file;
		}
		return null;
	}

	public void setFileDao(FileDao fileDao) {
		this.fileDao = fileDao;
	}
}
