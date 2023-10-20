package com.zoomlion.hjsrm.frame.bclib.file;

import java.io.File;
import java.text.SimpleDateFormat;

import com.eos.foundation.common.utils.FileUtil;
import com.eos.runtime.core.ApplicationContext;
import com.eos.system.utility.StringUtil;
import com.kp.persistance.types.Date;
import com.zoomlion.hjsrm.clib.util.SystemInfo;
import com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload;
/**
 * **************************************************
 * 描    述：  文件上传工具类
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class FileUploadUtil {

	/**
	 * 方法描述: 移动上传文件到指定的分类目录
	 * @author 侯杰
	 * @param uploadSysLoad
	 * @param tatfileuploade
	 * @return 
	 * @return String
	 */
	public static String moveUploadFileToCatalog(String uploadSysLoad, TAtFileupload tatfileuploade) {
		// 取得分类目录
		String uploadPath = uploadSysLoad;
		Date t = new Date();
		SimpleDateFormat a = new SimpleDateFormat("yyyy");
		SimpleDateFormat b = new SimpleDateFormat("yyyyMM");
		String year = a.format(t);
		String nyr = b.format(t);
		String ywfl = tatfileuploade.getGroupId();
		if (uploadSysLoad == null || uploadSysLoad.equals("")) {
			// 如果没有传入上传目录
			uploadPath = ApplicationContext.getInstance().getApplicationWorkPath()+ SystemInfo.FILE_SEPARATOR + "upload";
		}
		String catalogPath = null;
		if (tatfileuploade.getFileCatalog() == null) {
			catalogPath = uploadPath + SystemInfo.FILE_SEPARATOR + year + SystemInfo.FILE_SEPARATOR + "srm" + SystemInfo.FILE_SEPARATOR + ywfl + SystemInfo.FILE_SEPARATOR + nyr;
		} else {
			catalogPath = uploadPath + SystemInfo.FILE_SEPARATOR + tatfileuploade.getFileCatalog();
		}
		File catalogDir = new File(catalogPath);
		if (!catalogDir.exists()) {
			catalogDir.mkdir();
		}
		File moveFile = new File(tatfileuploade.getFilePath());
		if (moveFile.exists()) {
			File targetFile = new File(catalogPath + SystemInfo.FILE_SEPARATOR + getFileName(tatfileuploade.getFilePath()));
			if (targetFile.exists()) {
				targetFile.delete();
			}
			FileUtil.moveFileToDir(tatfileuploade.getFilePath(), catalogPath);

		}
		return catalogPath + SystemInfo.FILE_SEPARATOR + tatfileuploade.getFileNewName();
	}

	/**
	 * 方法描述: 获取分类文件路径
	 * @author 侯杰
	 * @param fileCatalog
	 * @param filePath
	 * @return
	 * @return String
	 */
	public static String getCatalogFilePath(String fileCatalog, String filePath) {
		if (StringUtil.isNotNullAndBlank(fileCatalog)) {
			int lastIndex = filePath.lastIndexOf(SystemInfo.FILE_SEPARATOR);
			String fileName = filePath.substring(lastIndex + 1);
			return filePath.substring(0, lastIndex) + SystemInfo.FILE_SEPARATOR
					+ fileCatalog + SystemInfo.FILE_SEPARATOR + fileName;
		} else {
			return filePath;
		}
	}

	private static String getFileName(String filePath) {
		int lastIndex = filePath.lastIndexOf(SystemInfo.FILE_SEPARATOR);
		return filePath.substring(lastIndex + 1);
	}
}
