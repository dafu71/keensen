package com.zoomlion.hjsrm.interfaces.print;

import java.io.File;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.StreamCorruptedException;

import org.apache.commons.io.FileUtils;

import com.eos.das.entity.DASManager;
import com.eos.das.entity.IDASCriteria;
import com.eos.das.entity.criteria.CriteriaType;
import com.eos.data.datacontext.IUserObject;
import com.eos.foundation.PageCond;
import com.eos.runtime.core.ApplicationContext;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.interfaces.Interfaces.TJkPrinttemplate;
import com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl;

/**
 * <pre>
 *     Title: 套打模板处理类
 *     Description: 处理相关数据业务
 * </pre>
 * 
 * 
 * @author Chenmin (mailto:chenmin@primeton.com)
 * @version 1.00.00
 * 
 */
public class TJkPrinttemplateBean extends BaseBean {
	public static final String TEMP_FILE = ApplicationContext.getInstance()
			.getWarRealPath()
			+ "template_bak.zip";

	private TJkPrinttemplateDao tjkprinttemplateDao;

	public void setTjkprinttemplateDao(TJkPrinttemplateDao tjkprinttemplateDao) {
		this.tjkprinttemplateDao = tjkprinttemplateDao;
	}

	/**
	 * 新增方法
	 * 
	 * @param tJkPrinttemplates
	 * @throws Exception
	 */
	public void addTJkPrinttemplate(TJkPrinttemplate tJkPrinttemplate)
			throws BusinessException {
		try {
			tJkPrinttemplate.setPkid(Common.getBusinessNo("JK"));
			IUserObject userObject = Common.getCurrentUseObject();
			tJkPrinttemplate.setCreateby(userObject.getUserName());
			tJkPrinttemplate.setCreatetime(Common.getCurrentTime());
			// 翻译模板代码保存到remark//防止未设计直接调用空模板
			try {
				String remark = PrintTools.get().translate(
						tJkPrinttemplate.getTemplateid(),
						tJkPrinttemplate.getPrintparam(),
						tJkPrinttemplate.getTemplate());
				tJkPrinttemplate.setRemark(remark);
			} catch (Exception e) {
				SrmLog.error("翻译模板代码失败！", e);
				throw new BusinessException("翻译模板代码失败！", e.getMessage());
			}

			// 去掉 CONTEXTPATH
			if (tJkPrinttemplate.getTemplatefolder() != null)
				tJkPrinttemplate.setTemplatefolder(PrintTools.get()
						.autoRemoveContextPath(
								tJkPrinttemplate.getTemplatefolder()));
			tjkprinttemplateDao.insertEntity(tJkPrinttemplate);
		} catch (Exception e) {
			SrmLog.error("新增套打模板信息失败！", e);
			throw new BusinessException("新增套打模板信息失败！", e.getMessage());
		}
	}

	public void deleteTJkPrinttemplate(TJkPrinttemplate[] tJkPrinttemplates)
			throws BusinessException {
		try {
			tjkprinttemplateDao.deleteEntityBatch(tJkPrinttemplates);
		} catch (Exception e) {
			SrmLog.error("删除套打模板信息失败！", e);
			throw new BusinessException("删除套打模板信息失败！", e.getMessage());
		}
	}

	/**
	 * 修改时加载数据方法
	 * 
	 * @param tJkPrinttemplate
	 * @throws Exception
	 */
	public void getTJkPrinttemplate(TJkPrinttemplate tJkPrinttemplate)
			throws BusinessException {
		try {
			tjkprinttemplateDao.expandEntity(tJkPrinttemplate);
			if (!"".equals(tJkPrinttemplate.getPkid())) {
				tjkprinttemplateDao.expandLobProperty(tJkPrinttemplate,
						"printparam");

				tjkprinttemplateDao.expandLobProperty(tJkPrinttemplate,
						"template");
				tjkprinttemplateDao.expandLobProperty(tJkPrinttemplate,
						"remark");
			}
			tJkPrinttemplate.setTemplate(PrintTools.get()
					.autoReplaceContextPath(tJkPrinttemplate.getTemplate()));
			tJkPrinttemplate.setRemark(PrintTools.get().autoReplaceContextPath(
					tJkPrinttemplate.getRemark()));
		} catch (Exception e) {
			SrmLog.error("加载套打模板信息失败！", e);
			throw new BusinessException("加载套打模板信息失败！", e.getMessage());
		}
	}

	/**
	 * 查询方法
	 * 
	 * @param criteriaType
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public TJkPrinttemplate[] queryTJkPrinttemplates(CriteriaType criteriaType,
			PageCond pageCond) throws BusinessException {
		try {
			criteriaType.set_entity(TJkPrinttemplate.class.getName());
			IDASCriteria dasCriteria = tjkprinttemplateDao
					.criteriaTypeToDASCriteria(criteriaType);
			dasCriteria.desc("updatetime");
			TJkPrinttemplate[] es = tjkprinttemplateDao
					.queryEntitiesByCriteriaEntityWithPage(
							TJkPrinttemplate.class, dasCriteria, pageCond);
			for (TJkPrinttemplate e : es) {
				// 展开大字段
				tjkprinttemplateDao.expandLobProperty(e, "printparam");
				// tjkprinttemplateDao.expandLobProperty(e, "template");
				// tjkprinttemplateDao.expandLobProperty(e, "remark");
				e.setTemplate(PrintTools.get().autoReplaceContextPath(
						e.getTemplate()));
				e.setRemark(PrintTools.get().autoReplaceContextPath(
						e.getRemark()));
			}
			return es;
		} catch (Exception e) {
			SrmLog.error("查询套打模板信息失败！", e);
			throw new BusinessException("查询套打模板信息失败！", e.getMessage());
		}
	}

	/**
	 * 保存方法
	 * 
	 * @param tJkPrinttemplate
	 * @throws Exception
	 */
	public void saveTJkPrinttemplate(TJkPrinttemplate tJkPrinttemplate)
			throws BusinessException {

		String templateid = null;
		String template = null;
		String printparam = null;
		try {
			IUserObject userObject = Common.getCurrentUseObject();
			tJkPrinttemplate.setModifyby(userObject.getUserName());
			tJkPrinttemplate.setUpdatetime(Common.getCurrentTime());

			templateid = tJkPrinttemplate.getTemplateid();
			template = tJkPrinttemplate.getTemplate();
			printparam = tJkPrinttemplate.getPrintparam();
		} catch (Exception e) {
			SrmLog.error("系统属性取值失败！", e);
			throw new BusinessException("系统属性取值失败！", e.getMessage());
		}
		// 根据图片宽度，高度，文件夹和图片名称更新模板代码
		try {
			template = PrintTools.get().adjustPage(
					tJkPrinttemplate.getPicturewidth(),
					tJkPrinttemplate.getPictureheight(),
					tJkPrinttemplate.getTemplatefolder(),
					tJkPrinttemplate.getPicturename(), template, templateid,
					tJkPrinttemplate.getTemplatename());
		} catch (Exception e) {
			SrmLog.error("根据图片宽度，高度，文件夹和图片名称更新模板代码失败！", e);
			throw new BusinessException("根据图片宽度，高度，文件夹和图片名称更新模板代码失败！", e
					.getMessage());
		}

		// 根据参数的变化智能删减 文本框
		try {
			template = PrintTools.get().adjust(printparam, template);
		} catch (Exception e) {
			SrmLog.error("根据参数的变化智能删减 文本框失败！", e);
			throw new BusinessException("根据参数的变化智能删减 文本框失败！", e.getMessage());
		}

		// 如果模板为空，不更新代码
		if (template == null || template.length() == 0) {
		} else {
			tJkPrinttemplate.setTemplate(PrintTools.get()
					.autoRemoveContextPath(template));
		}

		// 翻译模板代码保存到remark
		try {
			String remark = PrintTools.get().translate(templateid, printparam,
					template);
			tJkPrinttemplate.setRemark(PrintTools.get().autoRemoveContextPath(
					remark));
		} catch (Exception e) {
			SrmLog.error("翻译模板代码失败！", e);
			throw new BusinessException("翻译模板代码失败！", e.getMessage());
		}

		// 去掉 CONTEXTPATH
		if (tJkPrinttemplate.getTemplatefolder() != null)
			tJkPrinttemplate
					.setTemplatefolder(PrintTools.get().autoRemoveContextPath(
							tJkPrinttemplate.getTemplatefolder()));
		if (tJkPrinttemplate.getTemplate() != null)
			tJkPrinttemplate.setTemplate(PrintTools.get()
					.autoRemoveContextPath(tJkPrinttemplate.getTemplate()));
		try {
			tjkprinttemplateDao.saveEntity(tJkPrinttemplate);
		} catch (Exception e) {
			SrmLog.error("更新套打模板信息失败！", e);
			throw new BusinessException("更新套打模板信息失败！", e.getMessage());
		}
	}

	/**
	 * 根据模板编号，获得生成代码
	 * 
	 * @param templateid
	 * @return
	 */
	public String getCode(String templateid) {
		TJkPrinttemplate tJkPrinttemplate = new TJkPrinttemplateImpl();
		tJkPrinttemplate.setTemplateid(templateid);
		TJkPrinttemplate ds[] = tjkprinttemplateDao.queryEntitiesByTemplate(
				TJkPrinttemplate.class, tJkPrinttemplate);
		if (ds != null && ds.length > 0) {
			TJkPrinttemplate d = ds[0];
			tjkprinttemplateDao.expandLobProperty(d, "remark");
			String remark = d.getRemark();
			remark = PrintTools.get().autoReplaceContextPath(remark);// 替换
			// ContextPath
			// 以适应
			// 各种部署环境
			return remark;
		}
		return "";
	}

	/**
	 * 导出所有模板到指定文件路径
	 * 
	 * @return
	 * 
	 * @throws BusinessException
	 */
	public String exportTJkPrinttemplates() throws BusinessException {
		IDASCriteria dasCriteria = DASManager
				.createCriteria(TJkPrinttemplate.class.getName());

		TJkPrinttemplate[] entitys = tjkprinttemplateDao
				.queryEntitiesByCriteriaEntity(TJkPrinttemplate.class,
						dasCriteria);

		try {
			ObjectOutputStream os = new ObjectOutputStream(FileUtils
					.openOutputStream(new File(TEMP_FILE)));
			os.writeInt(entitys.length);
			for (TJkPrinttemplate e : entitys) {
				// 展开大字段
				tjkprinttemplateDao.expandLobProperty(e, "printparam");
				tjkprinttemplateDao.expandLobProperty(e, "template");
				// 不导出remark，导入时候重新生成 代码
				// tjkprinttemplateDao.expandLobProperty(e, "remark");
				os.writeObject(e);
			}
			os.flush();
			os.close();
			return "模板文件已经备份到服务器端：<br />" + TEMP_FILE;
			// System.out.println(TEMP_FILE);
			// tjkprinttemplateDao.deleteEntityBatch(entitys);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "模板文件备份失败！";
	}

	/**
	 * 导入指定路径文件到数据库，先删后增方式
	 * 
	 * @throws BusinessException
	 */
	public String importTJkPrinttemplates() throws BusinessException {
		try {
			ObjectInputStream is = new ObjectInputStream(FileUtils
					.openInputStream(new File(TEMP_FILE)));
			int len = is.readInt();
			// System.out.println("len:" + len);
			TJkPrinttemplate a[] = new TJkPrinttemplate[len];
			for (int i = 0; i < len; i++) {
				TJkPrinttemplate e = (TJkPrinttemplate) is.readObject();
				// 去掉 CONTEXTPATH
				if (e.getTemplatefolder() != null)
					e.setTemplatefolder(PrintTools.get().autoRemoveContextPath(
							e.getTemplatefolder()));
				if (e.getTemplate() != null)
					e.setTemplate(PrintTools.get().autoRemoveContextPath(
							e.getTemplate()));
				// 重新生成 代码
				String remark = PrintTools.get().translate(e.getTemplateid(),
						e.getPrintparam(), e.getTemplate());
				e.setRemark(remark);

				a[i] = e;
			}
			is.close();
			tjkprinttemplateDao.deleteEntityBatch(a);
			tjkprinttemplateDao.insertEntityBatch(a);
			return TEMP_FILE + "<br />文件已经还原成功！";
		} catch (StreamCorruptedException e) {
			e.printStackTrace();
			return "" + TEMP_FILE + "<br />文件格式不正确！";
		} catch (IOException e) {
			e.printStackTrace();
			return "请确认" + TEMP_FILE + "文件是否存在？";
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			return "" + TEMP_FILE + "<br />文件格式不正确！";
		}
	}

}
