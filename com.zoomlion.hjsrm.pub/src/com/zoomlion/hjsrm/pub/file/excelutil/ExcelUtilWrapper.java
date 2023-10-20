package com.zoomlion.hjsrm.pub.file.excelutil;

import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;

import commonj.sdo.DataObject;

public class ExcelUtilWrapper extends BaseBean {

	public String exportExcelWithFTP(DataObject[] exportObjects, DataObject exportInfo, String templateFilename) throws BusinessException {
		try {
			return ExcelUtil.exportExcelWithFTP(exportObjects, exportInfo, templateFilename);
		} catch (Exception e) {
			SrmLog.error("导出Excel失败！", e);
			throw new BusinessException("导出Excel失败！", e.getMessage());
		}
	}
}
