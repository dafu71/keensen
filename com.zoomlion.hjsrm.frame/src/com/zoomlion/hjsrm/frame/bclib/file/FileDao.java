package com.zoomlion.hjsrm.frame.bclib.file;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl;
/**
 * **************************************************
 * 描    述：  实现文件处理功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 陈今伟 创建文件
 * **************************************************
 */
public class FileDao extends BaseDao {

	/**
	 * 方法描述: 根据参数Data 查询出下载文件列表GroupId,RelationId
	 * @author 侯杰
	 * @param groupId
	 * @param relationId
	 * @return
	 * @throws Exception 
	 * @return TAtFileupload[]
	 */
	public TAtFileupload[] queryListFiles(String groupId,String relationId) throws Exception {
		TAtFileupload template = new TAtFileuploadImpl();
		template.setGroupId(groupId);
		template.setRelationId(relationId);
		return queryEntitiesByTemplate(TAtFileupload.class, template);
	}
	/**
	 * 方法描述: 删除文件记录 根据主键
	 * @author 侯杰
	 * @param file
	 * @throws Exception 
	 * @return void
	 */
	public void deleteFile(TAtFileupload file) throws Exception {
		deleteEntity(file);
	}

	/**
	 * 方法描述: 删除文件记录（依据模版）
	 * @author 侯杰
	 * @param template
	 * @return
	 * @throws Exception 
	 * @return int
	 */
	public int  deleteFileByTemplate(TAtFileupload template)throws Exception {
		return deleteByTemplate(template);
	}
}
