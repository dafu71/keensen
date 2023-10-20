package com.zoomlion.hjsrm.pub.file.excelutil;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Random;

import com.eos.foundation.common.io.FileUtil;
import com.eos.foundation.eoscommon.ConfigurationUtil;
import com.eos.runtime.core.ApplicationContext;
import com.eos.spring.BeanFactory;
import com.eos.system.annotation.Bizlet;
import com.eos.system.annotation.BizletParam;
import com.eos.system.annotation.ParamType;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload;
import com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl;
import com.zoomlion.hjsrm.pub.common.AcctGlobal;
import commonj.sdo.DataObject;

/**
 * 
 * Excel文件操作工具类<BR>
 * 
 * @author primeton wengzr (mailto:)
 */
@Bizlet("Excel工具操作类")
public class ExcelUtil {
	private ExcelUtil() {
		// 工具类不允许实例化
	}

	/**
	 * 将Excel数据导入到数据库指定的表，默认每500条数据执行一次批处理导入
	 * 
	 * @param excelFile
	 *            Excel文件名
	 * @param entityFullName
	 *            导入的实体全名
	 * @return
	 * @throws Exception
	 */
	@Bizlet(value = "将Excel数据导入到数据库指定的表", params = { @BizletParam(index = 0, paramAlias = "excelFile", type = ParamType.CONSTANT),
			@BizletParam(index = 1, paramAlias = "entityFullName", type = ParamType.CONSTANT) })
	public static int importExcel(String excelFile, String entityFullName) throws Exception {
		ExcelTemplate template = new ExcelTemplate();
		return template.importData(excelFile, entityFullName, 500);
	}

	/**
	 * 将Excel文件转换成DataObject[]数组
	 * 
	 * @param filePath
	 *            excel文件绝对路径
	 * @param entityName
	 *            DataObject的实体名称（必须是实体的全称），如果为null或者""， 则用com.primeton.das.datatype.AnyType类型。
	 * @param propertyList
	 *            excel中的字段映射格式：[property[:index]][,property[:index]] index默认从1开始，1代表excel中的A列，
	 *            如果没有写index，就表示是上一个字段的index+1，第一个字段中没有index则为1。
	 *            property表示当前实体中的定义属性名，可以用Xpath，如导入员工中包含机构编号，则为"org/orgName"。
	 * @param startLine
	 *            数据导入起始行
	 * @return 转换以后的DataObject实例数组
	 * @throws Exception
	 */
	@Bizlet(value = "将Excel数据转换成DataObject[]", params = { @BizletParam(index = 0, paramAlias = "filePath", type = ParamType.CONSTANT),
			@BizletParam(index = 1, paramAlias = "entityName", type = ParamType.CONSTANT),
			@BizletParam(index = 2, paramAlias = "propertyList", type = ParamType.CONSTANT),
			@BizletParam(index = 3, paramAlias = "startLine", type = ParamType.CONSTANT) })
	public static DataObject[] importExcelToDataObject(String filePath, String entityName, String propertyList, int startLine) throws Exception {
		ExcelTemplate template = new ExcelTemplate();
		startLine = startLine <= 0 ? 1 : startLine;
		return template.importExcelToDataObject(filePath, entityName, propertyList, startLine);
	}

	/**
	 * 将指定的对象数组exportObjects导出到指定模板的Excel文件
	 * 
	 * @param exportObjects
	 *            待导出的对象数组
	 * @param exportInfo
	 *            模板文件的其他附加信息(非结果集内容)
	 * @param templateFilename
	 *            模板文件名(不带扩展名),对应到在user-config.xml配置路径下的模板文件
	 * @return 返回生成的Excel文件下载路径
	 * @throws Exception
	 */
	@Bizlet(value = "将指定的对象数组导出到指定模板的Excel文件", params = { @BizletParam(index = 0, paramAlias = "exportObjects", type = ParamType.VARIABLE),
			@BizletParam(index = 1, paramAlias = "exportInfo", type = ParamType.VARIABLE),
			@BizletParam(index = 2, paramAlias = "templateFilename", type = ParamType.CONSTANT) })
	public static String exportExcel(DataObject[] exportObjects, DataObject exportInfo, String templateFilename) throws Exception {
		return exportExcel(exportObjects, exportInfo, templateFilename, false, false);
	}

	/**
	 * 将指定的对象数组exportObjects导出到指定模板的Excel文件
	 * 
	 * @param exportObjects
	 *            待导出的对象数组
	 * @param exportInfo
	 *            模板文件的其他附加信息(非结果集内容)
	 * @param templateFilename
	 *            模板文件名(不带扩展名),对应到在user-config.xml配置路径下的模板文件
	 * @return 返回生成的Excel文件下载路径
	 * @throws Exception
	 */
	@Bizlet(value = "将指定的对象数组导出到指定模板的Excel文件", params = { @BizletParam(index = 0, paramAlias = "exportObjects", type = ParamType.VARIABLE),
			@BizletParam(index = 1, paramAlias = "exportInfo", type = ParamType.VARIABLE),
			@BizletParam(index = 2, paramAlias = "templateFilename", type = ParamType.CONSTANT) })
	public static String createExcel(List exportObjects, String templateFilename) throws Exception {
		return exportExcel(exportObjects, templateFilename);
	}

	/**
	 * 将指定的对象数组exportObjects导出到指定模板的Excel文件,并使用FTP下载
	 * 
	 * @param exportObjects
	 *            待导出的对象数组
	 * @param exportInfo
	 *            模板文件的其他附加信息(非结果集内容)
	 * @param templateFilename
	 *            模板文件名(不带扩展名),对应到在user-config.xml配置路径下的模板文件
	 * @return 返回生成的Excel文件下载路径
	 * @throws Exception
	 */
	@Bizlet(value = "将指定的对象数组导出到指定模板的Excel文件", params = { @BizletParam(index = 0, paramAlias = "exportObjects", type = ParamType.VARIABLE),
			@BizletParam(index = 1, paramAlias = "exportInfo", type = ParamType.VARIABLE),
			@BizletParam(index = 2, paramAlias = "templateFilename", type = ParamType.CONSTANT) })
	public static String exportExcelWithFTP(DataObject[] exportObjects, DataObject exportInfo, String templateFilename) throws Exception {
		return exportExcelWithFTP(exportObjects, exportInfo, templateFilename, false, false);
	}

	/**
	 * 分页将对象数组导出到指定的模板Excel文件,注意：此时模板文件必需包含Excel表格的分页符
	 * 
	 * @param exportObjects
	 *            待导出的对象数组
	 * @param exportInfo
	 *            模板文件的其他附加信息(非结果集内容)
	 * @param templateFilename
	 *            模板文件名(不带扩展名),对应到在user-config.xml配置路径下的模板文件
	 * @return 返回生成的Excel文件下载路径
	 * @throws Exception
	 */
	@Bizlet(value = "分页将对象数组导出到指定的模板Excel文件", params = { @BizletParam(index = 0, paramAlias = "exportObjects", type = ParamType.VARIABLE),
			@BizletParam(index = 1, paramAlias = "exportInfo", type = ParamType.VARIABLE),
			@BizletParam(index = 2, paramAlias = "templateFilename", type = ParamType.CONSTANT) })
	public static String exportExcelWithPagnation(DataObject[] exportObjects, DataObject exportInfo, String templateFilename) throws Exception {
		return exportExcel(exportObjects, exportInfo, templateFilename, true, false);
	}

	/**
	 * 分工作表将对象数组导出到指定的模板Excel文件，默认情况下输出工作表最大行:20000
	 * 
	 * @param exportObjects
	 *            待导出的对象数组
	 * @param exportInfo
	 *            模板文件的其他附加信息(非结果集内容)
	 * @param templateFilename
	 *            模板文件名(不带扩展名),对应到在user-config.xml配置路径下的模板文件
	 * @return 返回生成的Excel文件下载路径
	 * @throws Exception
	 */
	@Bizlet(value = "分工作表将对象数组导出到指定的模板Excel文件", params = { @BizletParam(index = 0, paramAlias = "exportObjects", type = ParamType.VARIABLE),
			@BizletParam(index = 1, paramAlias = "exportInfo", type = ParamType.VARIABLE),
			@BizletParam(index = 2, paramAlias = "templateFilename", type = ParamType.CONSTANT) })
	public static String exportExcelWithSheet(DataObject[] exportObjects, DataObject exportInfo, String templateFilename) throws Exception {
		return exportExcel(exportObjects, exportInfo, templateFilename, false, true);
	}

	/**
	 * 导出Excel文件,根据指定路径下的模板生成输出的Excel文件
	 * 
	 * @param exportObjects
	 *            待导出的对象数组
	 * @param exportInfo
	 *            模板文件的其他附加信息(非结果集内容)
	 * @param templateFilename
	 *            模板文件名(不带扩展名),对应到在user-config.xml配置路径下的模板文件
	 * @param autoPagination
	 *            是否分页
	 * @param autoSheet
	 *            是否分工作表
	 * @return 返回生成的Excel文件下载路径
	 * @throws Exception
	 */
	private static String exportExcel(DataObject[] exportObjects, DataObject exportInfo, String templateFilename, boolean autoPagination, boolean autoSheet)
			throws Exception {
		String filename = templateFilename;
		if (filename.indexOf(".xls") == -1) {
			filename += ".xls";
		}
		// 临时路径是服务器当前war下面的excel-config目录
		System.out.println("app:" + ApplicationContext.getInstance().getAppName());
		String templateDir = ApplicationContext.getInstance().getWarRealPath()
				+ ConfigurationUtil.getContributionConfig(UtilConfiguration.CONTRIBUTION_ABFRAME_UTILS, UtilConfiguration.MODULE_ABFRAME,
						UtilConfiguration.GROUP_EXCEL, UtilConfiguration.EXCEL_TEMPLATE_PATH);
		templateDir = templateDir.replace("\\/", "\\");
		String excelExportMaxnum = ConfigurationUtil.getContributionConfig(UtilConfiguration.CONTRIBUTION_ABFRAME_UTILS, UtilConfiguration.MODULE_ABFRAME,
				UtilConfiguration.GROUP_EXCEL, UtilConfiguration.EXCEL_EXPORT_MAXNUM);

		if (!templateDir.endsWith("/")) {
			templateDir += "/";
		}
		String tempDir = templateDir + "output/";
		File file = new File(tempDir);
		if (!file.exists()) {
			// 创建临时目录
			FileUtil.mkDir(tempDir);
			// file.createNewFile();
		}
		String templateFile = templateDir + filename;
		String fileName = generateOutputExcelFile(filename);
		String outputFile = tempDir + fileName;
		System.out.println(outputFile);
		ExcelTemplate template = new ExcelTemplate(templateFile, outputFile);
		template.setAutoPagination(autoPagination);
		template.setAutoSheet(autoSheet);
		int excelExportMaxnumInt = 0;
		try {
			excelExportMaxnumInt = Integer.parseInt(excelExportMaxnum);
		} catch (Exception e) {
			e.printStackTrace();
		}
		template.setMaxRow(excelExportMaxnumInt);
		template.generate(Arrays.asList(exportObjects), exportInfo);
		String returnFilePath = "excel-config/template/output/" + fileName;

		// TODO : 服务器上线后路径会变化>?不需要带项目名
		returnFilePath = "/" + ApplicationContext.getInstance().getWebContextPath() + "/" + returnFilePath;

		return returnFilePath;
	}

	/**
	 * 导出Excel文件,根据指定路径下的模板生成输出的Excel文件
	 * 
	 * @param exportObjects
	 *            待导出的对象数组
	 * @param exportInfo
	 *            模板文件的其他附加信息(非结果集内容)
	 * @param templateFilename
	 *            模板文件名(不带扩展名),对应到在user-config.xml配置路径下的模板文件
	 * @param autoPagination
	 *            是否分页
	 * @param autoSheet
	 *            是否分工作表
	 * @return 返回生成的Excel文件下载路径
	 * @throws Exception
	 */
	private static String exportExcel(List exportObjects, String templateFilename) throws Exception {
		String filename = templateFilename;
		if (filename.indexOf(".xls") == -1) {
			filename += ".xls";
		}
		// 临时路径是服务器当前war下面的excel-config目录
		System.out.println("app:" + ApplicationContext.getInstance().getAppName());
		String templateDir = ApplicationContext.getInstance().getWarRealPath()
				+ ConfigurationUtil.getContributionConfig(UtilConfiguration.CONTRIBUTION_ABFRAME_UTILS, UtilConfiguration.MODULE_ABFRAME,
						UtilConfiguration.GROUP_EXCEL, UtilConfiguration.EXCEL_TEMPLATE_PATH);
		String excelExportMaxnum = ConfigurationUtil.getContributionConfig(UtilConfiguration.CONTRIBUTION_ABFRAME_UTILS, UtilConfiguration.MODULE_ABFRAME,
				UtilConfiguration.GROUP_EXCEL, UtilConfiguration.EXCEL_EXPORT_MAXNUM);

		if (!templateDir.endsWith("/")) {
			templateDir += "/";
		}
		String tempDir = templateDir + "output/";
		File file = new File(tempDir);
		if (!file.exists()) {
			// 创建临时目录
			FileUtil.mkDir(tempDir);
			// file.createNewFile();
		}
		String templateFile = templateDir + filename;
		String fileName = generateOutputExcelFile(filename);
		String outputFile = tempDir + fileName;
		System.out.println(outputFile);
		ExcelTemplate template = new ExcelTemplate(templateFile, outputFile);
		template.setAutoPagination(false);
		template.setAutoSheet(false);
		int excelExportMaxnumInt = 0;
		try {
			excelExportMaxnumInt = Integer.parseInt(excelExportMaxnum);
		} catch (Exception e) {
			e.printStackTrace();
		}
		template.setMaxRow(excelExportMaxnumInt);
		template.generate(exportObjects, null);
		String returnFilePath = "excel-config/template/output/" + fileName;

		// TODO : 服务器上线后路径会变化>?不需要带项目名
		returnFilePath = "/" + ApplicationContext.getInstance().getWebContextPath() + "/" + returnFilePath;

		return returnFilePath;
	}

	/**
	 * 导出Excel文件,根据指定路径下的模板生成输出的Excel文件,并使用FTP下载
	 * 
	 * @param exportObjects
	 *            待导出的对象数组
	 * @param exportInfo
	 *            模板文件的其他附加信息(非结果集内容)
	 * @param templateFilename
	 *            模板文件名(不带扩展名),对应到在user-config.xml配置路径下的模板文件
	 * @param autoPagination
	 *            是否分页
	 * @param autoSheet
	 *            是否分工作表
	 * @return 返回生成的Excel文件下载路径
	 * @throws Exception
	 */
	private static String exportExcelWithFTP(DataObject[] exportObjects, DataObject exportInfo, String templateFilename, boolean autoPagination,
			boolean autoSheet) throws Exception {
		String filename = templateFilename;
		if (filename.indexOf(".xls") == -1) {
			filename += ".xls";
		}
		// 临时路径是服务器当前war下面的excel-config目录
		System.out.println("app:" + ApplicationContext.getInstance().getAppName());
		String templateDir = ApplicationContext.getInstance().getWarRealPath()
				+ ConfigurationUtil.getContributionConfig(UtilConfiguration.CONTRIBUTION_ABFRAME_UTILS, UtilConfiguration.MODULE_ABFRAME,
						UtilConfiguration.GROUP_EXCEL, UtilConfiguration.EXCEL_TEMPLATE_PATH);
		String excelExportMaxnum = ConfigurationUtil.getContributionConfig(UtilConfiguration.CONTRIBUTION_ABFRAME_UTILS, UtilConfiguration.MODULE_ABFRAME,
				UtilConfiguration.GROUP_EXCEL, UtilConfiguration.EXCEL_EXPORT_MAXNUM);

		if (!templateDir.endsWith("/")) {
			templateDir += "/";
		}
		String tempDir = templateDir + "output/";
		File file = new File(tempDir);
		if (!file.exists()) {
			// 创建临时目录
			FileUtil.mkDir(tempDir);
			// file.createNewFile();
		}
		String templateFile = templateDir + filename;
		String fileName = generateOutputExcelFile(filename);
		String outputFile = tempDir + fileName;
		System.out.println(outputFile);
		ExcelTemplate template = new ExcelTemplate(templateFile, outputFile);
		template.setAutoPagination(autoPagination);
		template.setAutoSheet(autoSheet);
		int excelExportMaxnumInt = 0;
		try {
			excelExportMaxnumInt = Integer.parseInt(excelExportMaxnum);
		} catch (Exception e) {
			e.printStackTrace();
		}
		template.setMaxRow(excelExportMaxnumInt);
		template.generate(Arrays.asList(exportObjects), exportInfo);
		String returnFilePath = "excel-config/template/output/" + fileName;

		// TODO : 服务器上线后路径会变化>?不需要带项目名
		returnFilePath = "/" + ApplicationContext.getInstance().getWebContextPath() + "/" + returnFilePath;

		String fileid = Common.getBusinessNo(AcctGlobal.APP_NAME_ACCT);
		// TODO : 用FTP方式 先存文件再返回id
		TAtFileupload fileload = new TAtFileuploadImpl();
		fileload.setFileId(fileid);
		fileload.setFileName(fileName);
		fileload.setFileNewName(fileName);
		fileload.setFilePath(outputFile);
		fileload.setFileSave("1"); // 文件系统
		fileload.setRelationId(fileid);
		fileload.setFileType("application/xls");
		fileload.setGroupId("excelfile");
		fileload.setDataorgid(Integer.parseInt(Common.getCurrentUserDataOrgId()));
		ExcelDao excelDao = BeanFactory.newInstance().getBean("excelDao");
		excelDao.insertEntity(fileload);
		// withHoldDao.insertEntity(fileload);
		// WalkChargeDao walkChargeDao = BeanFactory.newInstance().getBean("walkChargeDao");
		// walkChargeDao.insertEntity(fileload);
		return fileid;
	}
	
	/**
	 * 创建Excel文件,根据指定路径下的模板生成输出的Excel文件
	 * 
	 * @param exportObjects
	 *            待导出的对象数组
	 * @param exportInfo
	 *            模板文件的其他附加信息(非结果集内容)
	 * @param templateFilename
	 *            模板文件名(不带扩展名),对应到在user-config.xml配置路径下的模板文件
	 * param  fileid
	 * @return 返回生成的Excel文件下载路径
	 * @throws Exception
	 */
	public static String createExcel(List exportObjects, String templateFilename, String fileid) throws Exception {
		String filename = templateFilename;
		if (filename.indexOf(".xls") == -1) {
			filename += ".xls";
		}
		// 临时路径是服务器当前war下面的excel-config目录
		System.out.println("app:" + ApplicationContext.getInstance().getAppName());
		String templateDir = ApplicationContext.getInstance().getWarRealPath()
				+ ConfigurationUtil.getContributionConfig(UtilConfiguration.CONTRIBUTION_ABFRAME_UTILS, UtilConfiguration.MODULE_ABFRAME,
						UtilConfiguration.GROUP_EXCEL, UtilConfiguration.EXCEL_TEMPLATE_PATH);
		String excelExportMaxnum = ConfigurationUtil.getContributionConfig(UtilConfiguration.CONTRIBUTION_ABFRAME_UTILS, UtilConfiguration.MODULE_ABFRAME,
				UtilConfiguration.GROUP_EXCEL, UtilConfiguration.EXCEL_EXPORT_MAXNUM);

		if (!templateDir.endsWith("/")) {
			templateDir += "/";
		}
		String tempDir = templateDir + "output/";
		File file = new File(tempDir);
		if (!file.exists()) {
			// 创建临时目录
			FileUtil.mkDir(tempDir);
			// file.createNewFile();
		}
		String templateFile = templateDir + filename;
		String fileName = generateOutputExcelFile(filename);
		String outputFile = tempDir + fileName;
		System.out.println(outputFile);
		ExcelTemplate template = new ExcelTemplate(templateFile, outputFile);
		template.setAutoPagination(false);
		template.setAutoSheet(false);
		int excelExportMaxnumInt = 0;
		try {
			excelExportMaxnumInt = Integer.parseInt(excelExportMaxnum);
		} catch (Exception e) {
			e.printStackTrace();
		}
		template.setMaxRow(excelExportMaxnumInt);
		template.generate(exportObjects, null);
		String returnFilePath = "excel-config/template/output/" + fileName;

		// TODO : 服务器上线后路径会变化>?不需要带项目名
		returnFilePath = "/" + ApplicationContext.getInstance().getWebContextPath() + "/" + returnFilePath;

		// TODO : 用FTP方式 先存文件再返回id
		TAtFileupload fileload = new TAtFileuploadImpl();
		fileload.setFileId(fileid);
		fileload.setFileName(fileName);
		fileload.setFileNewName(fileName);
		fileload.setFilePath(outputFile);
		fileload.setFileSave("1"); // 文件系统
		fileload.setRelationId(fileid);
		fileload.setFileType("application/xls");
		fileload.setGroupId("excelfile");
		fileload.setDataorgid(Integer.parseInt(Common.getCurrentUserDataOrgId()));
		ExcelDao excelDao = BeanFactory.newInstance().getBean("excelDao");
		excelDao.insertEntity(fileload);
		// withHoldDao.insertEntity(fileload);
		// WalkChargeDao walkChargeDao = BeanFactory.newInstance().getBean("walkChargeDao");
		// walkChargeDao.insertEntity(fileload);
		return fileid;
	}	
	
	

	/**
	 * 生成EXCEL输出文件，默认带时间戳
	 * 
	 * @param templateFilename
	 *            文件名
	 * @return
	 */
	private static String generateOutputExcelFile(String templateFilename) {
		String filename = templateFilename;
		if (templateFilename.endsWith(".xls")) {
			filename = templateFilename.substring(0, templateFilename.length() - 4);
		}
		SimpleDateFormat format = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		String datetimeString = format.format(new Date());
		filename = filename + "_" + datetimeString + ".xls";
		//Random random = new Random(1000);
		//System.out.println("random name : " + random.nextInt());
		return filename;
	}
}
