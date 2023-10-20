package com.zoomlion.hjsrm.sapinterface.SapSrmMaterial;

import java.text.SimpleDateFormat;
import java.util.Properties;

import com.sap.mw.jco.IFunctionTemplate;
import com.sap.mw.jco.JCO;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMara;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMaraImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialZt76Impl;
import com.zoomlion.hjsrm.sapinterface.db.SapConfig;

public class SapSrmMaterialBean extends BaseBean {

	private SapSrmMaterialDao sapSrmMaterialDao;

	/**
	 * 方法描述: 获取SAP物料主数据与工厂物料数据 创建日期： 2014/11/13
	 * 
	 * @author 黄平
	 * @throws BusinessException
	 * @return void
	 */
	public void getMaterialData() throws BusinessException {
		try {
			// 属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			// 获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				// 要调用的SAP函数名称
				String strFunc = "ZHJSRM0001";
				JCO.Repository myRepository = new JCO.Repository(
						"myRepository", myConnection); // 活动的连接
				// 从“仓库”中获得一个指定函数名的函数模板
				IFunctionTemplate ft = myRepository.getFunctionTemplate(strFunc
						.toUpperCase());
				// 从这个函数模板获得该SAP函数的对象
				JCO.Function function = ft.getFunction();
				// 获得函数的export参数列表
				JCO.ParameterList output = function.getTableParameterList();
				// 执行函数
				myConnection.execute(function);
				// 断开连接
				myConnection.disconnect();
				// 获取SAP物料主数据（MARA）信息
				SimpleDateFormat fz = new SimpleDateFormat("yyyy-MM-dd");
				JCO.Table outST = output.getTable("ET_MARA");
				for (int i = 0; i < outST.getNumRows(); i++) {

					outST.setRow(i);
					String matnr = outST.getString("MATNR").toString();// 物料号
					String maktx = outST.getString("MAKTX").toString();// 物料描述
					String ersda = outST.getString("ERSDA").toString();// 创建日期
					String laeda = outST.getString("LAEDA").toString();// 上次更改日期
					String lvorm = outST.getString("LVORM").toString();// 在客户级标记要删除物料
					String mtart = outST.getString("MTART").toString();// 物料类型
					String meins = outST.getString("MEINS").toString();// 基本计量单位
					String zeinr = outST.getString("ZEINR").toString();// 工艺属性
					String mstae = outST.getString("MSTAE").toString();// 跨工厂物料状态
					// String zwrildt = outST.getString("ZWRILDT").toString();
					// //创建日期
					// String zwriltm = outST.getString("ZWRILTM").toString();
					// //创建时间
					// String zwriusr = outST.getString("ZWRIUSR").toString();
					// //创建人
					// 因CALL SAP 帐号为固定
					String zwriusr = "SAPRFC";
					// 数据库设置取当前时间
					// String createTime = zwrildt.concat(" ").concat(zwriltm);

					BaseMaterialMara saveData = new BaseMaterialMaraImpl();
					saveData.setMatnr(matnr);
					saveData.setMaktx(maktx);
					saveData.setErsda(fz.parse(ersda));
					saveData.setLaeda(fz.parse(laeda));
					saveData.setLvorm(lvorm);
					saveData.setMtart(mtart);
					saveData.setMeins(meins);
					saveData.setZeinr(zeinr);
					saveData.setMstae(mstae);
					saveData.setTranu(zwriusr);

					this.sapSrmMaterialDao.saveMaraList(saveData);
				}
				System.out.println("====物料主数据====" + outST.getNumRows());

				// 获取SAP工厂物料主数据（MARC）信息
				JCO.Table outSTMarc = output.getTable("ET_MARC");
				for (int i = 0; i < outSTMarc.getNumRows(); i++) {

					outSTMarc.setRow(i);
					String matnr = outSTMarc.getString("MATNR").toString();// 物料号
					String werks = outSTMarc.getString("WERKS").toString();// 工厂代码
					String lvorm = outSTMarc.getString("LVORM").toString();// 在工厂级标记要删除物料
					String mmsta = outSTMarc.getString("MMSTA").toString();// 工厂特定的物料状态
					String ekgrp = outSTMarc.getString("EKGRP").toString();// 采购组
					String lgfsb = outSTMarc.getString("LGFSB").toString();// 外部采购的缺省仓储位置
					String maabc = outSTMarc.getString("MAABC").toString();
					String dismm = outSTMarc.getString("DISMM").toString();
					String minbe = outSTMarc.getString("MINBE").toString();
					String bstmi = outSTMarc.getString("BSTMI").toString();
					String bstma = outSTMarc.getString("BSTMA").toString();
					String mabst = outSTMarc.getString("MABST").toString();
					String lgpro = outSTMarc.getString("LGPRO").toString();
					String plifz = outSTMarc.getString("PLIFZ").toString();
					String eisbe = outSTMarc.getString("EISBE").toString();
					String eislo = outSTMarc.getString("EISLO").toString();

					BaseMaterialMarc saveDatam = new BaseMaterialMarcImpl();
					saveDatam.setMatnr(matnr);
					saveDatam.setWerks(werks);
					saveDatam.setLvorm(lvorm);
					saveDatam.setMmsta(mmsta);
					saveDatam.setEkgrp(ekgrp);
					saveDatam.setLgfsb(lgfsb);
					saveDatam.setMaabc(maabc);
					saveDatam.setDismm(dismm);
					saveDatam.setMinbe(minbe);
					saveDatam.setBstmi(bstmi);
					saveDatam.setBstma(bstma);
					saveDatam.setMabst(mabst);
					saveDatam.setLgpro(lgpro);
					saveDatam.setPlifz(plifz);
					saveDatam.setEisbe(eisbe);
					saveDatam.setEislo(eislo);

					this.sapSrmMaterialDao.saveMarcList(saveDatam);
				}
				System.out.println("====工厂物料主数据====" + outSTMarc.getNumRows());

				// 获取SAP工厂物料货位信息
				JCO.Table outSTZT76 = output.getTable("ET_ZT76");
				for (int i = 0; i < outSTZT76.getNumRows(); i++) {

					outSTZT76.setRow(i);
					String matnr = outSTZT76.getString("MATNR").toString();// 物料号
					String werks = "3000";// 工厂代码
					String zhwbm = outSTZT76.getString("ZHWBM").toString();
					String zwriusr = outSTZT76.getString("ZWRIUSR").toString();
					String zwrildt = outSTZT76.getString("ZWRILDT").toString();
					// 是否超六期 X 是 空为否
					String zsfclq = outSTZT76.getString("ZSFCLQ").toString();

					BaseMaterialZt76 saveDatah = new BaseMaterialZt76Impl();
					saveDatah.setMatnr(matnr);
					saveDatah.setWerks(werks);
					saveDatah.setZhwbm(zhwbm);
					saveDatah.setZwrildt(fz.parse(zwrildt));
					saveDatah.setZwriusr(zwriusr);
					saveDatah.setTranu("SAPRFC");
					saveDatah.setZsfclq(zsfclq);
					
					this.sapSrmMaterialDao.saveEntity(saveDatah);
				}
				System.out.println("====工厂物料货位信息====" + outSTZT76.getNumRows());
			}
		} catch (Exception e) {
			SrmLog.error("导入物料基本数据异常!", e);
			throw new BusinessException("导入物料基本数据异常!", e.getMessage());
		}

	}

	public SapSrmMaterialDao getSapSrmMaterialDao() {
		return sapSrmMaterialDao;
	}

	public void setSapSrmMaterialDao(SapSrmMaterialDao sapSrmMaterialDao) {
		this.sapSrmMaterialDao = sapSrmMaterialDao;
	}

}
