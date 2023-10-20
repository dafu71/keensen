package com.zoomlion.hjsrm.sapinterface.SrmBaseData;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Properties;

import com.sap.mw.jco.IFunctionTemplate;
import com.sap.mw.jco.JCO;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseCompanyT001;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseFactoryT001w;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024e;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BasePurchaseEinaImpl;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BaseMaterialMbewImpl;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BaseCompanyT001Impl;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BaseFactoryT001wImpl;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BasePurchaseT024Impl;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BasePurchaseT024eImpl;
import com.zoomlion.hjsrm.sapinterface.db.SapConfig;

public class SapSrmBaseDataBean extends BaseBean {
	
	private SapSrmBaseDataDao sapSrmBaseDataDao;
	
	/**
	 * 方法描述: 获取SAP基础数据中整表传输数据
	 * 创建日期： 2014/11/12
	 * @author 黄平
	 * @throws BusinessException
	 * @return void
	 */
	public void getBaseData() throws BusinessException {
		
		try {
            //属性设置usiness
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			//获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				//要调用的SAP函数名称
				String strFunc = "ZHJSRM0003";
				JCO.Repository myRepository = new JCO.Repository("myRepository",
					myConnection); // 活动的连接
				//从“仓库”中获得一个指定函数名的函数模板
				IFunctionTemplate ft = myRepository.getFunctionTemplate(strFunc
					.toUpperCase());
				//从这个函数模板获得该SAP函数的对象
				JCO.Function function = ft.getFunction();
				//获得函数的export参数列表
				JCO.ParameterList output = function.getTableParameterList();
				//执行函数
				myConnection.execute(function);
				//断开连接
				myConnection.disconnect();
			    
				//获取SAP公司代码（T001）信息并保存
				JCO.Table outST = output.getTable("ET_T001");
				//BaseCompanyT001[] saveDatas = new BaseCompanyT001[outST.getNumRows()];
				for (int i = 0; i < outST.getNumRows(); i++) {
					outST.setRow(i);
					BaseCompanyT001 datas = new BaseCompanyT001Impl();
					String bukrs = outST.getString("BUKRS").toString();//公司代码
					String butxt = outST.getString("BUTXT").toString();//公司描述
					String adrnr = outST.getString("ADRNR").toString();//地址
					String stceg = outST.getString("STCEG").toString();//组织机构代码/身份证号码

					datas.setBukrs(bukrs);
					datas.setButxt(butxt);
					datas.setAdrnr(adrnr);
					datas.setStceg(stceg);
					//saveDatas[i] = datas;
					this.sapSrmBaseDataDao.saveCompanyT0011(datas);	
				}
				//this.sapSrmBaseDataDao.saveCompanyT001(saveDatas);
				System.out.println("====公司代码====" + outST.getNumRows());	
				
				//获取SAP工厂/分支机构（T001W）信息并保存
				JCO.Table outSTT001w = output.getTable("ET_T001W");
				//BaseFactoryT001w[] saveDatasT001w = new BaseFactoryT001w[outSTT001w.getNumRows()];
				for (int j = 0; j < outSTT001w.getNumRows(); j++) {
			
					outSTT001w.setRow(j);
					String werks = outSTT001w.getString("WERKS").toString();//工厂代码
					String name1 = outSTT001w.getString("NAME1").toString();//工厂描述
					String bwkey = outSTT001w.getString("BWKEY").toString();//评估范围
					String stras = outSTT001w.getString("STRAS").toString();//住宅号及街道
					String pfach = outSTT001w.getString("PFACH").toString();//邮政信箱
					String pstlz = outSTT001w.getString("PSTLZ").toString();//邮政编码
					String ort01 = outSTT001w.getString("ORT01").toString();//城市
					
					BaseFactoryT001w saveDatasT001w = new BaseFactoryT001wImpl();
					saveDatasT001w.setWerks(werks);
					saveDatasT001w.setName1(name1);
					saveDatasT001w.setBwkey(bwkey);
					saveDatasT001w.setStras(stras);
					saveDatasT001w.setPfach(pfach);
					saveDatasT001w.setPstlz(pstlz);
					saveDatasT001w.setOrt01(ort01);
					this.sapSrmBaseDataDao.saveFactoryT001w(saveDatasT001w);
				}
				System.out.println("====工厂/分支机构====" + outSTT001w.getNumRows());
				
				//获取SAP采购组织数据（T024E）信息并保存
				JCO.Table outSTT024e = output.getTable("ET_T024E");
				for (int k = 0; k < outSTT024e.getNumRows(); k++) {
					
					outSTT024e.setRow(k);
					String ekorg = outSTT024e.getString("EKORG").toString();//采购组织代码
					String ekotx = outSTT024e.getString("EKOTX").toString();//采购组织描述
					
					BasePurchaseT024e saveDatasT024e = new BasePurchaseT024eImpl();
					saveDatasT024e.setEkorg(ekorg);
					saveDatasT024e.setEkotx(ekotx);
					this.sapSrmBaseDataDao.savePurchaseT024e(saveDatasT024e);
				}
				System.out.println("====采购组织数据====" + outSTT024e.getNumRows());
				
				//获取SAP采购组数据（T024）信息并保存
				JCO.Table outSTT024 = output.getTable("ET_T024");
				for (int t = 0; t < outSTT024.getNumRows(); t++) {
					
					outSTT024.setRow(t);
					String ekgrp = outSTT024.getString("EKGRP").toString();//采购组代码
					String eknam = outSTT024.getString("EKNAM").toString();//采购组描述
					String ektel = outSTT024.getString("EKTEL").toString();//采购组电话号码
					String telfx = outSTT024.getString("TELFX").toString();//传真号
					String tel_number = outSTT024.getString("TEL_NUMBER").toString();//电话号码: 拨区号 + 号码
					String tel_extens = outSTT024.getString("TEL_EXTENS").toString();//电话号码: 分机号
					String smtp_addr = outSTT024.getString("SMTP_ADDR").toString();//电子邮件地址

					BasePurchaseT024 dDataone = new BasePurchaseT024Impl();
					dDataone.setEkgrp(ekgrp);
					dDataone.setEknam(eknam);
					dDataone.setEktel(ektel);
					dDataone.setTelfx(telfx);
					dDataone.setTelNumber(tel_number);
					dDataone.setTelExtens(tel_extens);
					dDataone.setSmtpAddr(smtp_addr);
					this.sapSrmBaseDataDao.savePurchaseT024(dDataone);
				}
				System.out.println("====采购组数据====" + outSTT024.getNumRows());
			} 
		} catch (Exception e) {
			SrmLog.error("导入基本数据（公司、工厂、采购组，采购组织）异常!", e);
			throw new BusinessException("导入基本数据异常!", e.getMessage());
		}
	}
	/**
	 * 方法描述:获取物料评估标准价和采购信息记录表数据         
	 * 创建日期：2015/05/26
	 * @author liuxin
	 * @param  IX_DATE
	 * @throws BusinessException
	 * @return void
	 */
	public void getSapMbewEina(Date IX_DATE) throws BusinessException {
		Calendar cal = Calendar.getInstance();
		Date temp = cal.getTime();
		SimpleDateFormat dt = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		SimpleDateFormat dz = new SimpleDateFormat("yyyyMMdd");
		String currentdate = df.format(temp);
		String IV_DATA = dz.format(temp);
		System.out.println(currentdate + " 物料评估标准价,采购信息记录更新开始......");
		try{
			//属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			//获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				//要调用的SAP函数名称
				String strFunc = "ZHJSRM0014";//采购订单改动后的详细信息获取接口
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
				if(null != IX_DATE && !"".equals(IX_DATE)){
					 IV_DATA = dz.format(IX_DATE);
				}
				input.setValue(IV_DATA, "IV_DATA");
				//执行函数
				myConnection.execute(function);
				myConnection.disconnect();
				
				JCO.Table outSTMbew = output.getTable("ET_MBEW");
				for (int j = 0; j < outSTMbew.getNumRows(); j++) {
					
					outSTMbew.setRow(j);
					String matnr = outSTMbew.getString("MATNR").toString();//物料号
					String bwkey = outSTMbew.getString("BWKEY").toString();//评估范围
					String bwtar = outSTMbew.getString("BWTAR").toString();//评估类型
					String vprsv = outSTMbew.getString("VPRSV").toString();//价格控制指示符 
					String stprs = outSTMbew.getString("STPRS").toString();//标准价格
					String peinh = outSTMbew.getString("PEINH").toString();//价格单位
					String bklas = outSTMbew.getString("BKLAS").toString();//评估类
					String laepr = outSTMbew.getString("LAEPR").toString();//最新更改日期
					
					BaseMaterialMbew saveDatasMbew = new BaseMaterialMbewImpl();
					saveDatasMbew.setMatnr(matnr);
					saveDatasMbew.setBwkey(bwkey);
					saveDatasMbew.setBwtar(bwtar);
					saveDatasMbew.setVprsv(vprsv);
					saveDatasMbew.setStprs(new BigDecimal(stprs));
					saveDatasMbew.setPeinh(peinh);
					saveDatasMbew.setBklas(bklas);
					saveDatasMbew.setLaepr(dt.parse(laepr));
					this.sapSrmBaseDataDao.saveDatasMbew(saveDatasMbew);
				}
				System.out.println("====物料评估标准价====" + outSTMbew.getNumRows());
				
				
				JCO.Table outSTEina = output.getTable("ET_EINA");
				for (int t = 0; t < outSTEina.getNumRows(); t++) {
					
					outSTEina.setRow(t);
					String infnr = outSTEina.getString("INFNR").toString();//采购信息记录的编号
					String matnr = outSTEina.getString("MATNR").toString();//物料号
					String matkl = outSTEina.getString("MATKL").toString();//物料组 
					String lifnr = outSTEina.getString("LIFNR").toString();//供应商帐户号
					String loekz = outSTEina.getString("LOEKZ").toString();//删除标记
					String erdat = outSTEina.getString("ERDAT").toString();//创建日期
					String ernam = outSTEina.getString("ERNAM").toString();//创建人员
					String meins = outSTEina.getString("MEINS").toString();//计量单位

					BasePurchaseEina saveDatasEina = new BasePurchaseEinaImpl();
					saveDatasEina.setInfnr(infnr);
					saveDatasEina.setMatnr(matnr);
					saveDatasEina.setMatkl(matkl);
					saveDatasEina.setLifnr(lifnr);
					saveDatasEina.setLoekz(loekz);
					saveDatasEina.setErdat(dt.parse(erdat));
					saveDatasEina.setErnam(ernam);
					saveDatasEina.setMeins(meins);
					this.sapSrmBaseDataDao.saveDatasEina(saveDatasEina);
				}
				System.out.println("====采购信息记录====" + outSTEina.getNumRows());
			}
		}catch(Exception e){
			SrmLog.error("获取数据异常！", e);
			throw new BusinessException("获取数据异常", e.getMessage());
		}		
	}
	public SapSrmBaseDataDao getSapSrmBaseDataDao() {
		return sapSrmBaseDataDao;
	}

	public void setSapSrmBaseDataDao(SapSrmBaseDataDao sapSrmBaseDataDao) {
		this.sapSrmBaseDataDao = sapSrmBaseDataDao;
	}

}
