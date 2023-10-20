package com.zoomlion.hjsrm.sapinterface.SapSrmPurchase;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.TreeMap;

import com.eos.foundation.eoscommon.ScheduleUtil;
import com.primeton.ext.common.schedule.ITaskDetail;
import com.primeton.ext.common.schedule.ITrigger;
import com.primeton.ext.common.schedule.ScheduleManager;
import com.primeton.ext.common.schedule.TaskFactory;
import com.primeton.ext.common.schedule.TriggerFactory;
import com.sap.mw.jco.IFunctionTemplate;
import com.sap.mw.jco.JCO;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyList;
import com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseEket;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseEkkn;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseEkko;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseEkpo;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseKonv;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEketImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkknImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkpoImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseKonvImpl;
import com.zoomlion.hjsrm.sapinterface.db.SapConfig;

public class SapSrmPurchaseBean extends BaseBean {

	private SapSrmPurchaseDao sapSrmPurchaseDao;

	/**
	 * 方法描述: 即时同步SAP主物料数据与工厂物料数据 传输逻辑：SAP主动CALL SRM输入参数seconds定时器 30秒后执行 poSn
	 * 采购订单号 创建日期： 2014/11/12
	 * 
	 * @author 黄平
	 * @param seconds
	 * @param poSn
	 * @param schedulerName
	 * @throws BusinessException
	 * @return void
	 */
	public static void getExecuteTimeOne(int seconds, String poSn)
			throws BusinessException {
		Calendar cal = Calendar.getInstance();
		Date temp = cal.getTime();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String currentdate = sdf1.format(temp);
		String currenttime = sdf.format(temp);
		System.out.println("当前时间==" + currentdate + currenttime);

		// 获取经过seconds秒后的时间
		Calendar cal1 = Calendar.getInstance();
		cal1.add(Calendar.SECOND, seconds);
		Date tempTime = cal1.getTime();
		String excuteTime = sdf.format(tempTime);
		System.out.println("触发器执行时间===" + poSn + excuteTime);
		// 设置调度器任务
		String[] Object = new String[2];
		Object[0] = "default";
		Object[1] = poSn;
		try {
			ITaskDetail detail = TaskFactory
					.getLogicflowTask(
							poSn,
							"com.zoomlion.hjsrm.sapinterface.SapSrmPurchase.SyncSrmPurchase",
							"syncSrmPurchase", Object, true);
			// 设置调度器任务触发时间
			ScheduleManager st = new ScheduleManager();
			ITrigger[] triggers = TriggerFactory
					.getFixTimeTrigger(new Date[] { sdf.parse(excuteTime) });
			// 新增调度器
			st.addTask("default", detail, triggers, true, true);
		} catch (Exception e) {
			SrmLog.error("SAP 调用WebService异常!", e);
			throw new BusinessException("SAP 调用WebService异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述:删除设置定时器 创建日期：2014/11/14
	 * 
	 * @author 黄平
	 * @param poSn
	 * @param schedulerName
	 * @throws BusinessException
	 * @return void
	 */
	public void deleteTask(String poSn) throws BusinessException {
		// 定时器状态
		String triggerState = new String();

		try {
			Map<String, Object> attrubuteMap = new TreeMap<String, Object>();

			attrubuteMap = ScheduleUtil.get("default", poSn);
			List<Map<String, Object>> test = (List<Map<String, Object>>) attrubuteMap
					.get("triggerList");
			for (int i = 0; i < test.size(); i++) {
				triggerState = test.get(i).get("triggerState").toString();
			}
		} catch (Exception e) {
			SrmLog.error("获取调度器任务状态异常!", e);
			throw new BusinessException("获取调度器任务状态异常!", e.getMessage());
		}

		try {
			if (!triggerState.equals("0")) {
				ScheduleManager.deleteTask("default", poSn);
				System.out.println("删除调度器任务" + poSn);
			}
		} catch (Exception e) {
			SrmLog.error("删除调度器任务异常!", e);
			throw new BusinessException("删除调度器任务异常!", e.getMessage());
		}
	}

	/**
	 * 方法描述:获取SAP采购订单(poSn)的具体信息 创建日期：2014/11/14
	 * 
	 * @author 黄平
	 * @param poSn
	 * @throws BusinessException
	 * @return void
	 */
	public void getSapPO(String poSn) throws BusinessException {
		Calendar cal = Calendar.getInstance();
		Date temp = cal.getTime();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String currentdate = df.format(temp);
		System.out.println(currentdate + " 采购订单（" + poSn + "）SRM更新开始......");
		try {
			// 属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			// 获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				// 要调用的SAP函数名称
				String strFunc = "ZHJSRM0004";// 采购订单改动后的详细信息获取接口
				JCO.Repository myRepository = new JCO.Repository(
						"myRepository", // 只是一个名字
						myConnection); // 活动的连接
				// 从“仓库”中获得一个指定函数名的函数模板
				IFunctionTemplate ft = myRepository.getFunctionTemplate(strFunc
						.toUpperCase());
				// 从这个函数模板获得该SAP函数的对象
				JCO.Function function = ft.getFunction();
				// 获得函数的import参数列表
				JCO.ParameterList input = function.getImportParameterList();
				// 获得函数的export参数列表
				JCO.ParameterList output = function.getTableParameterList();
				// 参数1，采购订单号IN_EBELN
				input.setValue(poSn, "IN_EBELN");
				// 执行函数
				myConnection.execute(function);
				myConnection.disconnect();

				// 获取采购订单抬头信息
				getPOhead(output);
				// 获取采购订单行项目信息
				getPOitem(output);
				// 获取采购订单帐号设置信息
				getPOEkkn(output);
				// 获取采购订单计划行
				getPOEket(output);
				getPOKonv(output);
			}
		} catch (Exception e) {
			SrmLog.error("获取SAP采购订单" + poSn + "异常！", e);
			throw new BusinessException("获取SAP采购订单" + poSn + "异常！", e
					.getMessage());
		}
	}
	
	
	/**
	 * 方法描述:手动或即时获取当天SAP采购申请信息
	 * 
	 * @param flag
	 * @throws BusinessException
	 */
	public void getSapApplyOrder(String flag) throws BusinessException {
		Calendar cal = Calendar.getInstance();
		Date temp = cal.getTime();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		SimpleDateFormat dz = new SimpleDateFormat("yyyyMMdd");
		//String currentdate = df.format(temp);
		String IV_DATE = dz.format(temp);
		System.out.println(" 当天SAP采购申请信息更新开始......");
		try {
			// 属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			// 获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				// 要调用的SAP函数名称
				String strFunc = "ZHJSRM0017";
				JCO.Repository myRepository = new JCO.Repository(
						"myRepository", // 只是一个名字
						myConnection); // 活动的连接
				// 从“仓库”中获得一个指定函数名的函数模板
				IFunctionTemplate ft = myRepository.getFunctionTemplate(strFunc
						.toUpperCase());
				// 从这个函数模板获得该SAP函数的对象
				JCO.Function function = ft.getFunction();
				// 获得函数的import参数列表
				JCO.ParameterList input = function.getImportParameterList();
				// 参数1，采购订单号IN_EBELN
				input.setValue(IV_DATE, "IV_DATE");
				// 参数2，触发形式
				input.setValue(flag, "LC_MODE");
				// 获得函数的export参数列表
				JCO.ParameterList output = function.getTableParameterList();
				// 执行函数
				myConnection.execute(function);
				myConnection.disconnect();
				this.saveApplyOrder(output,flag);
			}
		} catch (Exception e) {
			SrmLog.error("获取SAP采购申请异常！", e);
			throw new BusinessException("获取SAP采购申请异常！", e.getMessage());
		}
	}

	/**
	 * 保存数据到采购申请列表
	 * 
	 * @param output
	 * @throws BusinessException
	 */
	@SuppressWarnings("unchecked")
	public void saveApplyOrder(JCO.ParameterList output,String flag)
			throws BusinessException {
		try {
			// 读取返回值 ET_EKKO
			JCO.Table outST = output.getTable("ET_DATA");
			for (int i = 0; i < outST.getNumRows(); i++) {
				outST.setRow(i);
				String banfn = outST.getString("BANFN").toString(); //采购申请编号
				String bnfpo = outST.getString("BNFPO").toString(); //采购申请的项目编号 
				String erdat = outST.getString("ERDAT").toString(); //记录的创建日期 
				String lifnr = outST.getString("LIFNR").toString(); //供应商或债权人的帐号
				String matnr = outST.getString("MATNR").toString(); //物料号 
				String maktx = outST.getString("MAKTX").toString(); //物料描述（短文本） 
				String menge = outST.getString("MENGE").toString(); //采购申请数量
				String lfdat = outST.getString("LFDAT").toString(); //交货日期
				String meins = outST.getString("MEINS").toString(); //基本计量单位
				String lgort = outST.getString("LGORT").toString(); //库存地点
				String bstyp = outST.getString("BSTYP").toString(); //采购凭证类别
				String knttp = outST.getString("KNTTP").toString(); //科目分配类别
				String ekgrp = outST.getString("EKGRP").toString(); //采购组 
				String ekorg = outST.getString("EKORG").toString(); //采购组织
				String bednr = outST.getString("BEDNR").toString(); //需求跟踪号
				String aufnr = outST.getString("AUFNR").toString(); //订单号 
				String kostl = outST.getString("KOSTL").toString(); //成本中心
				String loekz = outST.getString("LOEKZ").toString(); //资产类别作删除标记 
				String werks = outST.getString("WERKS").toString(); //工厂
				
				GenlPurchaseApplyList gpal = new GenlPurchaseApplyListImpl();
				if("M".equals(flag)){//手动触发
					gpal.setCreateby(Common.getCurrentUserId());
					gpal.setCreatebyname(Common.getCurrentUseObject().getUserName());
				}
				gpal.setCreatetime(new Date());
				gpal.setBanfn(banfn);
				gpal.setBnfpo(bnfpo);
				gpal.setErdat(erdat);
				gpal.setLifnr(lifnr);
				gpal.setMatnr(matnr);
				gpal.setMaktx(maktx);
				gpal.setMenge(menge);
				gpal.setLfdat(lfdat);
				gpal.setMeins(meins);
				gpal.setLgort(lgort);
				gpal.setBstyp(bstyp);
				gpal.setKnttp(knttp);
				gpal.setEkgrp(ekgrp);
				gpal.setEkorg(ekorg);
				gpal.setBednr(bednr);
				gpal.setAufnr(aufnr);
				gpal.setKostl(kostl);
				gpal.setLoekz(loekz);
				gpal.setWerks(werks);
				gpal.setFlag(flag);
				this.sapSrmPurchaseDao.getPrimaryKey(gpal);
				this.sapSrmPurchaseDao.saveEntity(gpal);				

			}
			//新增采购申请汇总
			String createby = "";
			String createbyname = "";
			if("M".equals(flag)){//手动触发
				createby = Common.getCurrentUserId();
				createbyname = Common.getCurrentUseObject().getUserName(); 
			}
			HashMap param = new HashMap();
			param.put("createby",createby);
			param.put("createbyname",createbyname);
			param.put("createtime",new Date());
			this.sapSrmPurchaseDao.addApplyData(param);
			System.out
			.println("=====ET_DAT===" + outST.getNumRows() + "=====");
		} catch (Exception e) {
			SrmLog.error("保存数据到采购申请列表异常！", e);
			throw new BusinessException("保存数据到采购申请列表异常！", e.getMessage());
		}
	}

	/**
	 * 方法描述:手动或即时获取当天SAP采购订单的具体信息 创建日期：2014/11/14
	 * 
	 * @author 黄平
	 * @param poSn
	 * @throws BusinessException
	 * @return void
	 */
	public void getSapPOList() throws BusinessException {
		Calendar cal = Calendar.getInstance();
		Date temp = cal.getTime();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		SimpleDateFormat dz = new SimpleDateFormat("yyyyMMdd");
		String currentdate = df.format(temp);
		String IV_DATE = dz.format(temp);
		System.out.println(currentdate + " 采购订单SRM更新开始......");
		try {
			// 属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			// 获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				// 要调用的SAP函数名称
				String strFunc = "ZHJSRM0005";// 采购订单改动后的详细信息获取接口
				JCO.Repository myRepository = new JCO.Repository(
						"myRepository", // 只是一个名字
						myConnection); // 活动的连接
				// 从“仓库”中获得一个指定函数名的函数模板
				IFunctionTemplate ft = myRepository.getFunctionTemplate(strFunc
						.toUpperCase());
				// 从这个函数模板获得该SAP函数的对象
				JCO.Function function = ft.getFunction();
				// 获得函数的import参数列表
				JCO.ParameterList input = function.getImportParameterList();
				// 获得函数的export参数列表
				JCO.ParameterList output = function.getTableParameterList();
				// 参数1，采购订单号IN_EBELN
				input.setValue(IV_DATE, "IV_DATE");
				// 执行函数
				myConnection.execute(function);
				myConnection.disconnect();

				// 获取采购订单抬头信息
				getPOhead(output);
				// 获取采购订单行项目信息
				getPOitem(output);
				// 获取采购订单帐号设置信息
				getPOEkkn(output);
				// 获取采购订单计划行
				getPOEket(output);
				getPOKonv(output);
			}
		} catch (Exception e) {
			SrmLog.error("获取SAP采购订单异常！", e);
			throw new BusinessException("获取SAP采购订单异常！", e.getMessage());
		}
	}

	/**
	 * 方法描述:获取SAP采购订单抬头信息 创建日期：2014/11/14
	 * 
	 * @author 黄平
	 * @param output
	 * @throws BusinessException
	 * @return void
	 */
	public void getPOhead(JCO.ParameterList output) throws BusinessException {
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
		try {
			// 读取返回值 ET_EKKO
			JCO.Table outST = output.getTable("ET_EKKO");
			for (int i = 0; i < outST.getNumRows(); i++) {

				outST.setRow(i);
				String ebeln = outST.getString("EBELN").toString(); // 采购凭证号
				String bukrs = outST.getString("BUKRS").toString(); // 公司代码
				String bstyp = outST.getString("BSTYP").toString(); // 采购凭证类别
				String bsart = outST.getString("BSART").toString(); // 采购凭证类型
				String loekz = outST.getString("LOEKZ").toString(); // 采购凭证中的删除标识
				String aedat = outST.getString("AEDAT").toString(); // 记录的创建日期
				String ernam = outST.getString("ERNAM").toString(); // 创建对象的人员名称
				String lifnr = outST.getString("LIFNR").toString(); // 供应商账户号
				String spras = outST.getString("SPRAS").toString(); // 语言代码
				String ekorg = outST.getString("EKORG").toString(); // 采购组织
				String ekgrp = outST.getString("EKGRP").toString(); // 采购组
				String waers = outST.getString("WAERS").toString(); // 货币码
				String bedat = outST.getString("BEDAT").toString(); // 采购凭证日期
				String kdatb = outST.getString("KDATB").toString(); // 有效起始日期
				String kdate = outST.getString("KDATE").toString(); // 有效截止日期
				String ihrez = outST.getString("IHREZ").toString(); // 您的参考
				String verkf = outST.getString("VERKF").toString(); // 供应商办公室的责任销售
				String knumv = outST.getString("KNUMV").toString();
				String tranu = "SAPRFC";

				GenlPurchaseEkko saveData = new GenlPurchaseEkkoImpl();
				saveData.setEbeln(ebeln);
				saveData.setBukrs(bukrs);
				saveData.setBstyp(bstyp);
				saveData.setBsart(bsart);
				saveData.setLoekz(loekz);
				saveData.setAedat(ft.parse(aedat));
				saveData.setErnam(ernam);
				saveData.setLifnr(lifnr);
				saveData.setSpras(spras);
				saveData.setEkorg(ekorg);
				saveData.setEkgrp(ekgrp);
				saveData.setWaers(waers);
				saveData.setBedat(ft.parse(bedat));
				saveData.setKdatb(ft.parse(kdatb));
				saveData.setKdate(ft.parse(kdate));
				saveData.setIhrez(ihrez);
				saveData.setVerkf(verkf);
				saveData.setTranu(tranu);
				saveData.setKnumv(knumv);
				this.sapSrmPurchaseDao.savePOHead(saveData);
			}
			System.out
					.println("=====ET_EKKO===" + outST.getNumRows() + "=====");
		} catch (Exception e) {
			SrmLog.error("获取SAP采购订单抬头异常！", e);
			throw new BusinessException("获取SAP采购订单抬头异常！", e.getMessage());
		}
	}

	/**
	 * 方法描述:获取SAP采购订单行项目信息 创建日期：2014/11/14
	 * 
	 * @author 黄平
	 * @param output
	 * @throws BusinessException
	 * @return void
	 */
	public void getPOitem(JCO.ParameterList output) throws BusinessException {
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
		try {
			// 读取返回值 ET_EKPO
			JCO.Table outST = output.getTable("ET_EKPO");
			for (int i = 0; i < outST.getNumRows(); i++) {

				outST.setRow(i);
				String ebeln = outST.getString("EBELN").toString(); // 采购凭证号
				String ebelp = outST.getString("EBELP").toString(); // 采购凭证的项目编号
				String loekz = outST.getString("LOEKZ").toString(); // 采购凭证中的删除标识
				String aedat = outST.getString("AEDAT").toString(); // 采购凭证项目的更改日期
				String txz01 = outST.getString("TXZ01").toString(); // 短文本
				String matnr = outST.getString("MATNR").toString(); // 物料号
				String ematn = outST.getString("EMATN").toString(); // 物料号
				String bukrs = outST.getString("BUKRS").toString(); // 公司代码
				String werks = outST.getString("WERKS").toString(); // 工厂
				String lgort = outST.getString("LGORT").toString(); // 库存地点
				String bednr = outST.getString("BEDNR").toString(); // 需求跟踪号
				String matkl = outST.getString("MATKL").toString(); // 物料组
				String menge = outST.getString("MENGE").toString(); // 采购订单数量
				String meins = outST.getString("MEINS").toString(); // 采购订单的计量单位
				String elikz = outST.getString("ELIKZ").toString(); // 交货已完成标识
				String erekz = outST.getString("EREKZ").toString(); // 最后发票标识
				String pstyp = outST.getString("PSTYP").toString(); // 采购凭证中的项目类别
				String knttp = outST.getString("KNTTP").toString(); // 科目分配类别
				String lmein = outST.getString("LMEIN").toString(); // 基本计量单位
				String mwskz = outST.getString("MWSKZ").toString(); // 销售税代码
				String statu = outST.getString("STATU").toString();
				String uebto = outST.getString("UEBTO").toString();
				String uebtk = outST.getString("UEBTK").toString();
				String untto = outST.getString("UNTTO").toString();

				GenlPurchaseEkpo saveData = new GenlPurchaseEkpoImpl();
				saveData.setEbeln(ebeln);
				saveData.setEbelp(ebelp);
				saveData.setLoekz(loekz);
				saveData.setAedat(ft.parse(aedat));
				saveData.setTxz01(txz01);
				saveData.setMatnr(matnr);
				saveData.setEmatn(ematn);
				saveData.setBukrs(bukrs);
				saveData.setWerks(werks);
				saveData.setLgort(lgort);
				saveData.setBednr(bednr);
				saveData.setMatkl(matkl);
				saveData.setMenge(menge);
				saveData.setMeins(meins);
				saveData.setElikz(elikz);
				saveData.setErekz(erekz);
				saveData.setPstyp(pstyp);
				saveData.setKnttp(knttp);
				saveData.setLmein(lmein);
				saveData.setMwskz(mwskz);
				saveData.setStatu(statu);
				saveData.setUebto(uebto);
				saveData.setUebtk(uebtk);
				saveData.setUntto(untto);
				this.sapSrmPurchaseDao.savePOItem(saveData);
			}
			System.out
					.println("=====ET_EKPO===" + outST.getNumRows() + "=====");
		} catch (Exception e) {
			SrmLog.error("获取SAP采购订单行项目异常！", e);
			throw new BusinessException("获取SAP采购订单行项目异常！", e.getMessage());
		}
	}

	/**
	 * 方法描述:获取采购订单账户设置(EKKN) 创建日期：2014/11/14
	 * 
	 * @author 黄平
	 * @param output
	 * @throws BusinessException
	 * @return void
	 */
	public void getPOEkkn(JCO.ParameterList output) throws BusinessException {
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
		try {
			// 读取返回值 ET_EKKN
			JCO.Table outST = output.getTable("ET_EKKN");
			for (int i = 0; i < outST.getNumRows(); i++) {

				outST.setRow(i);
				String ebeln = outST.getString("EBELN").toString(); // 采购凭证号
				String ebelp = outST.getString("EBELP").toString(); // 采购凭证项目编号
				String kostl = outST.getString("KOSTL").toString(); // 成本中心
				String aufnr = outST.getString("AUFNR").toString(); // 订单号
				String loekz = outST.getString("LOEKZ").toString(); // 删除标识：采购凭证账户分配
				String aedat = outST.getString("AEDAT").toString(); // 记录创建日期

				GenlPurchaseEkkn saveData = new GenlPurchaseEkknImpl();
				saveData.setEbeln(ebeln);
				saveData.setEbelp(ebelp);
				saveData.setKostl(kostl);
				saveData.setAufnr(aufnr);
				saveData.setLoekz(loekz);
				saveData.setAedat(ft.parse(aedat));
				this.sapSrmPurchaseDao.savePOEkkn(saveData);
			}
			System.out
					.println("=====ET_EKKN===" + outST.getNumRows() + "=====");
		} catch (Exception e) {
			SrmLog.error("获取SAP采购订单行项目异常！", e);
			throw new BusinessException("获取SAP采购订单行项目异常！", e.getMessage());
		}
	}

	/**
	 * 方法描述:获取采购订单计划协议行(EKET) 创建日期：2014/11/27
	 * 
	 * @author 黄平
	 * @param output
	 * @throws BusinessException
	 * @return void
	 */
	public void getPOEket(JCO.ParameterList output) throws BusinessException {
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
		try {
			// 读取返回值 ET_EKKN
			JCO.Table outST = output.getTable("ET_EKET");
			for (int i = 0; i < outST.getNumRows(); i++) {

				outST.setRow(i);
				String ebeln = outST.getString("EBELN").toString(); // 采购凭证号
				String ebelp = outST.getString("EBELP").toString(); // 采购凭证项目编号
				String etenr = outST.getString("ETENR").toString(); // 计划交货行号
				String eindt = outST.getString("EINDT").toString(); // 项目交货日期
				String charg = outST.getString("CHARG").toString(); // 批次

				GenlPurchaseEket saveData = new GenlPurchaseEketImpl();
				saveData.setEbeln(ebeln);
				saveData.setEbelp(ebelp);
				saveData.setEtenr(etenr);
				saveData.setEindt(ft.parse(eindt));
				saveData.setCharg(charg);
				this.sapSrmPurchaseDao.savePOEket(saveData);
			}
			System.out
					.println("=====ET_EKET===" + outST.getNumRows() + "=====");
		} catch (Exception e) {
			SrmLog.error("获取SAP采购订单行计划协议行异常！", e);
			throw new BusinessException("获取SAP采购订单行计划协议行项目异常！", e.getMessage());
		}
	}

	/**
	 * 方法描述:获取SAP采购订单KONV信息 创建日期：2014/12/08
	 * 
	 * @author 黄平
	 * @param output
	 * @throws BusinessException
	 * @return void
	 */
	public void getPOKonv(JCO.ParameterList output) throws BusinessException {

		try {
			// 读取返回值 ET_KONP
			JCO.Table outST = output.getTable("ET_KONV");
			for (int i = 0; i < outST.getNumRows(); i++) {

				outST.setRow(i);
				String knumv = outST.getString("KNUMV").toString();
				String kposn = outST.getString("KPOSN").toString();
				String kschl = outST.getString("KSCHL").toString();
				String kbetr = outST.getString("KBETR").toString();
				String kmein = outST.getString("KMEIN").toString();
				String kpein = outST.getString("KPEIN").toString();

				GenlPurchaseKonv saveData = new GenlPurchaseKonvImpl();
				saveData.setKnumv(knumv);
				saveData.setKposn(kposn);
				saveData.setKschl(kschl);
				saveData.setKbetr(kbetr);
				saveData.setKmein(kmein);
				saveData.setKpein(kpein);
				this.sapSrmPurchaseDao.savePOKonv(saveData);
			}
			System.out
					.println("=====ET_KONV===" + outST.getNumRows() + "=====");
		} catch (Exception e) {
			SrmLog.error("获取SAP合同KONV异常！", e);
			throw new BusinessException("获取SAP合同KONV异常！", e.getMessage());
		}
	}

	public SapSrmPurchaseDao getSapSrmPurchaseDao() {
		return sapSrmPurchaseDao;
	}

	public void setSapSrmPurchaseDao(SapSrmPurchaseDao sapSrmPurchaseDao) {
		this.sapSrmPurchaseDao = sapSrmPurchaseDao;
	}
}
