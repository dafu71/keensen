package com.zoomlion.hjsrm.sapinterface.SapSrmContract;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Properties;

import com.sap.mw.jco.IFunctionTemplate;
import com.sap.mw.jco.JCO;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16;
import com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractEkko;
import com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractEkpo;
import com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp;
import com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractAo16Impl;
import com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkkoImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractKonpImpl;
import com.zoomlion.hjsrm.sapinterface.db.SapConfig;

public class SapSrmContractBean extends BaseBean {
	
	private SapSrmContractDao sapSrmContractDao;
	
	/**
	 * 方法描述:手动或即时获取当天SAP采购订单的具体信息         
	 * 创建日期：2014/11/14
	 * @author 黄平
	 * @param  poSn
	 * @throws BusinessException
	 * @return void
	 */
	public void getSapCOList() throws BusinessException {
		Calendar cal = Calendar.getInstance();
		Date temp = cal.getTime();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		SimpleDateFormat dz = new SimpleDateFormat("yyyyMMdd");
		String currentdate = df.format(temp);
		String IV_DATE = dz.format(temp);
		System.out.println(currentdate + " 合同SRM更新开始......");
		try{
			//属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			//获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				//要调用的SAP函数名称
				String strFunc = "ZHJSRM0009";//合同改动后的详细信息获取接口
				JCO.Repository myRepository = new JCO.Repository("myRepository", // 只是一个名字
					myConnection); // 活动的连接
				//从“仓库”中获得一个指定函数名的函数模板
				IFunctionTemplate ft = myRepository.getFunctionTemplate(strFunc
						.toUpperCase());
				//从这个函数模板获得该SAP函数的对象
				JCO.Function function = ft.getFunction();
				//获得函数的import参数列表
				JCO.ParameterList input = function.getImportParameterList();
				//获得函数的export参数列表
				JCO.ParameterList output = function.getTableParameterList();
				//参数1，采购订单号IN_EBELN  
				input.setValue(IV_DATE, "IV_DATE");
				//执行函数
				myConnection.execute(function);
				myConnection.disconnect();
				
				//获取合同抬头信息
				getCOhead(output);
			    //获取合同行项目信息
				getCOitem(output);
				getCOA016(output);
				getCOKonp(output);
				
			}
		}catch(Exception e){
			SrmLog.error("获取SAP合同异常！", e);
			throw new BusinessException("获取SAP合同异常！", e.getMessage());
		}		
	}
	
	/**
	 * 方法描述:获取SAP合同抬头信息       
	 * 创建日期：2014/12/08
	 * @author 黄平
	 * @param  output
	 * @throws BusinessException
	 * @return void
	 */
	public void getCOhead(JCO.ParameterList output) throws BusinessException {
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
		try{
			//读取返回值 ET_EKKO
			JCO.Table outST = output.getTable("ET_EKKO");
			for (int i = 0; i < outST.getNumRows(); i++) {

				outST.setRow(i);
				String ebeln = outST.getString("EBELN").toString(); //合同号
				String bukrs = outST.getString("BUKRS").toString(); //公司代码
				String bstyp = outST.getString("BSTYP").toString(); //合同类别
				String bsart = outST.getString("BSART").toString(); //合同类型
				String loekz = outST.getString("LOEKZ").toString(); //合同中的删除标识
				String aedat = outST.getString("AEDAT").toString(); //记录的创建日期
				String ernam = outST.getString("ERNAM").toString(); //创建对象的人员名称
				String lifnr = outST.getString("LIFNR").toString(); //供应商账户号
				String spras = outST.getString("SPRAS").toString(); //语言代码
				String ekorg = outST.getString("EKORG").toString(); //采购组织
				String ekgrp = outST.getString("EKGRP").toString(); //采购组
				String waers = outST.getString("WAERS").toString(); //货币码
				String bedat = outST.getString("BEDAT").toString(); //采购凭证日期
				String kdatb = outST.getString("KDATB").toString(); //有效起始日期
				String kdate = outST.getString("KDATE").toString(); //有效截止日期
				String ihrez = outST.getString("IHREZ").toString(); //您的参考
				String verkf = outST.getString("VERKF").toString(); //供应商办公室的责任销售
				String knumv = outST.getString("KNUMV").toString();
				String frgrl = outST.getString("FRGRL").toString(); //合同审批标志
				String tranu = "SAPRFC";
			
				GenlContractEkko saveData = new GenlContractEkkoImpl();
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
				saveData.setFrgrl(frgrl);
				this.sapSrmContractDao.saveCOHead(saveData);
			}
			System.out.println("=====ET_EKKO===" + outST.getNumRows() + "=====");
		}catch(Exception e){
			SrmLog.error("获取SAP合同抬头异常！", e);
			throw new BusinessException("获取SAP合同抬头异常！", e.getMessage());
		}	
	}
	
	/**
	 * 方法描述:获取SAP合同行项目信息       
	 * 创建日期：2014/12/08
	 * @author 黄平
	 * @param  output
	 * @throws BusinessException
	 * @return void
	 */
	public void getCOitem(JCO.ParameterList output) throws BusinessException {
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
		try{
			//读取返回值 ET_EKPO
			JCO.Table outST = output.getTable("ET_EKPO");
			for (int i = 0; i < outST.getNumRows(); i++) {

				outST.setRow(i);
				String ebeln = outST.getString("EBELN").toString(); //合同号
				String ebelp = outST.getString("EBELP").toString(); //合同的项目编号
				String loekz = outST.getString("LOEKZ").toString(); //合同中的删除标识
				String aedat = outST.getString("AEDAT").toString(); //合同项目的更改日期
				String txz01 = outST.getString("TXZ01").toString(); //短文本
				String matnr = outST.getString("MATNR").toString(); //物料号
				String ematn = outST.getString("EMATN").toString(); //物料号
				String bukrs = outST.getString("BUKRS").toString(); //公司代码
				String werks = outST.getString("WERKS").toString(); //工厂
				String lgort = outST.getString("LGORT").toString(); //库存地点
				String bednr = outST.getString("BEDNR").toString(); //需求跟踪号
				String menge = outST.getString("MENGE").toString(); //采购订单数量
				String meins = outST.getString("MEINS").toString(); //采购订单的计量单位
				String elikz = outST.getString("ELIKZ").toString(); //交货已完成标识
				String erekz = outST.getString("EREKZ").toString(); //最后发票标识
				String pstyp = outST.getString("PSTYP").toString(); //采购凭证中的项目类别
				String knttp = outST.getString("KNTTP").toString(); //科目分配类别
				String lmein = outST.getString("LMEIN").toString(); //基本计量单位
				String mwskz = outST.getString("MWSKZ").toString(); //销售税代码
				String statu = outST.getString("STATU").toString(); 

				GenlContractEkpo saveData = new GenlContractEkpoImpl();
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
				saveData.setMenge(menge);
				saveData.setMeins(meins);
				saveData.setElikz(elikz);
				saveData.setErekz(erekz);
				saveData.setPstyp(pstyp);
				saveData.setKnttp(knttp);
				saveData.setLmein(lmein);
				saveData.setMwskz(mwskz);
				saveData.setStatu(statu);
				this.sapSrmContractDao.saveCOItem(saveData);
			}
			System.out.println("=====ET_EKPO===" + outST.getNumRows() + "=====");
		}catch(Exception e){
			SrmLog.error("获取SAP合同项目异常！", e);
			throw new BusinessException("获取SAP合同项目异常！", e.getMessage());
		}
	}
	
	/**
	 * 方法描述:获取SAP合同A016信息       
	 * 创建日期：2014/12/08
	 * @author 黄平
	 * @param  output
	 * @throws BusinessException
	 * @return void
	 */
	public void getCOA016(JCO.ParameterList output) throws BusinessException {
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
		try{
			//读取返回值 ET_A016
			JCO.Table outST = output.getTable("ET_A016");
			for (int i = 0; i < outST.getNumRows(); i++) {

				outST.setRow(i);
				String kappl = outST.getString("KAPPL").toString(); //应用程序
				String kschl = outST.getString("KSCHL").toString();//条件类型
				String evrtn = outST.getString("EVRTN").toString();//合同号
				String evrtp = outST.getString("EVRTP").toString();//合同的项目编号
				String datbi = outST.getString("DATBI").toString();//条件记录的有效截止日期
				String datab = outST.getString("DATAB").toString();//条件纪录的有效起始日期
				String knumh = outST.getString("KNUMH").toString();//条件记录号
				
				GenlContractAo16 saveData = new GenlContractAo16Impl();
				saveData.setKappl(kappl);
				saveData.setKschl(kschl);
				saveData.setEvrtn(evrtn);
				saveData.setEvrtp(evrtp);
				saveData.setDatbi(ft.parse(datbi));
				saveData.setDatab(ft.parse(datab));
				saveData.setKnumh(knumh);
				this.sapSrmContractDao.saveCOA016(saveData);
			}
			System.out.println("=====ET_A016===" + outST.getNumRows() + "=====");
		}catch(Exception e){
			SrmLog.error("获取SAP合同A016异常！", e);
			throw new BusinessException("获取SAP合同A016异常！", e.getMessage());
		}
	}
	
	/**
	 * 方法描述:获取SAP合同KONP信息       
	 * 创建日期：2014/12/08
	 * @author 黄平
	 * @param  output
	 * @throws BusinessException
	 * @return void
	 */
	public void getCOKonp(JCO.ParameterList output) throws BusinessException {

		try{
			//读取返回值 ET_KONP
			JCO.Table outST = output.getTable("ET_KONP");
			for (int i = 0; i < outST.getNumRows(); i++) {

				outST.setRow(i);
				String knumh = outST.getString("KNUMH").toString(); //条件记录号
				String kopos = outST.getString("KOPOS").toString(); //条件的序列号
				String kappl = outST.getString("KAPPL").toString(); //应用程序
				String kschl = outST.getString("KSCHL").toString(); //条件类型
				String kbetr = outST.getString("KBETR").toString(); //价格
				String konwa = outST.getString("KONWA").toString(); //比率单位
				String kpein = outST.getString("KPEIN").toString(); //条件定价单位
				String kmein = outST.getString("KMEIN").toString(); //条件单位
				String loevm_ko = outST.getString("LOEVM_KO").toString(); //删除标记
				GenlContractKonp saveData = new GenlContractKonpImpl();
				saveData.setKnumh(knumh);
				saveData.setKopos(kopos);
				saveData.setKappl(kappl);
				saveData.setKschl(kschl);
				saveData.setKbetr(kbetr);
				saveData.setKonwa(konwa);
				saveData.setKpein(kpein);
				saveData.setKmein(kmein);
				saveData.setLoevmKo(loevm_ko);
				this.sapSrmContractDao.saveCOKonp(saveData);
			}
			System.out.println("=====ET_KONP===" + outST.getNumRows() + "=====");
		}catch(Exception e){
			SrmLog.error("获取SAP合同KONP异常！", e);
			throw new BusinessException("获取SAP合同KONP异常！", e.getMessage());
		}
	}
	
	public SapSrmContractDao getSapSrmContractDao() {
		return sapSrmContractDao;
	}

	public void setSapSrmContractDao(SapSrmContractDao sapSrmContractDao) {
		this.sapSrmContractDao = sapSrmContractDao;
	}

}
