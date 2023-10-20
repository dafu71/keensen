/**
 * 
 */
package com.zoomlion.hjsrm.pub.file.excelutil;

import java.io.File;
import java.util.HashMap;

import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import commonj.sdo.DataObject;

/**
 * @author 肖钢
 * 
 */
public class ExcelBean extends BaseBean {

	/**
	 * 将Excel文件转换成DataObject[]实例数组
	 * 
	 * @param filePath
	 *            excel文件绝对路径
	 * @param entityName
	 *            DataObject的实体名称（必须是实体的全称），如果为null或者""，
	 *            则用com.primeton.das.datatype.AnyType类型。
	 * @param propertyList
	 *            excel中的字段映射格式：[property[:index]][,property[:index]]
	 *            index默认从1开始，1代表excel中的A列，
	 *            如果没有写index，就表示是上一个字段的index+1，第一个字段中没有index则为1。
	 *            property表示当前实体中的定义属性名，可以用Xpath，如导入员工中包含机构编号，则为"org/orgName"。
	 * @param startLine
	 *            数据导入起始行，默认从1开始， 例如startLine为2，代表从第2行开始读取数据，第1行数据将被忽略。
	 * @return 转换以后的DataObject实例数组
	 * @return
	 * @throws BusinessException
	 */
	public DataObject[] importExcelToDataObject(String filePath,
			String entityName, String propertyList, int startLine)
			throws BusinessException {
		try {
			return ExcelUtil.importExcelToDataObject(filePath, entityName,
					propertyList, startLine);
		} catch (Exception e) {
			SrmLog.error("Excel转换DataObject失败！", e);
			throw new BusinessException("Excel转换DataObject失败！", e.getMessage());
		}
	}
	public String Excelfilename(String downloadFile) throws BusinessException {

		try {
			File fl = new File(downloadFile);
			String fname = fl.getName();
			//int pos = fname.i
			return fname;

			
		} catch (Throwable e) {
			throw new BusinessException("大件导出异常!", e.getMessage());
		}

		
	}
}
