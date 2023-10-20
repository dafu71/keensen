package com.zoomlion.hjsrm.sapinterface.SapSrmSupply;

import java.text.SimpleDateFormat;
import java.util.Properties;

import com.sap.mw.jco.IFunctionTemplate;
import com.sap.mw.jco.JCO;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfa1;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfm1;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfb1Impl;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfm1Impl;
import com.zoomlion.hjsrm.sapinterface.db.SapConfig;

public class SapSrmSupplyBean extends BaseBean{
	
	private SapSrmSupplyDao sapSrmSupplyDao;
	
	/**
	 * 方法描述: 获取SAP供应商数据
	 * 创建日期： 2014/11/13
	 * @author 黄平
	 * @throws BusinessException
	 * @return void
	 */
	public void getSupplyData() throws Exception {
		try{
			//属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			//获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				//要调用的SAP函数名称
				String strFunc = "ZHJSRM0002";
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
				
				SimpleDateFormat fz = new SimpleDateFormat("yyyy-MM-dd");
				//获取SAP供应商主数据（一般地区）（LFA1）信息
				JCO.Table outST = output.getTable("ET_LFA1");
				for (int i = 0; i < outST.getNumRows(); i++) {
					
					outST.setRow(i);
					String lifnr = outST.getString("LIFNR").toString();//供应商编号
					String name1 = outST.getString("NAME1").toString();//供应商描述
					String ort01 = outST.getString("ORT01").toString();//城市
					String pstlz = outST.getString("PSTLZ").toString();//邮政编码
					String telf1 = outST.getString("TELF1").toString();//电话号码
					String stras = outST.getString("STRAS").toString();//住宅号及街道
					String ernam = outST.getString("ERNAM").toString();//记录创建人
					String erdat = outST.getString("ERDAT").toString();//记录创建日期
					String bankl = outST.getString("BANKL").toString();//银行代码
					String bankn = outST.getString("BANKN").toString();//银行账户号码
					String koinh = outST.getString("KOINH").toString();//银行账户持有人姓名
					String sortl = outST.getString("SORTL").toString();//供应商缩写
					//因CALL SAP 帐号为固定
					String zwriusr = "SAPRFC";
					
					BaseSupplyLfa1 saveDataLfa1 = new BaseSupplyLfa1Impl();
					saveDataLfa1.setLifnr(lifnr);
					saveDataLfa1.setName1(name1);
					saveDataLfa1.setOrt01(ort01);
					saveDataLfa1.setPstlz(pstlz);
					saveDataLfa1.setTelf1(telf1);
					saveDataLfa1.setStras(stras);
					saveDataLfa1.setErnam(ernam);
					saveDataLfa1.setErdat(fz.parse(erdat));
					saveDataLfa1.setBankl(bankl);
					saveDataLfa1.setBankn(bankn);
					saveDataLfa1.setKoinh(koinh);
					saveDataLfa1.setSortl(sortl);
					saveDataLfa1.setTranu(zwriusr);
					this.sapSrmSupplyDao.saveLfa1List(saveDataLfa1);
				}
				System.out.println("====供应商主数据（一般地区）====" + outST.getNumRows());
				
				//获取SAP供应商主记录购买组织数据（LFM1）信息
				JCO.Table outSTLfm1 = output.getTable("ET_LFM1");
				for (int i = 0; i < outSTLfm1.getNumRows(); i++) {
					
					outSTLfm1.setRow(i);
					String lifnr = outSTLfm1.getString("LIFNR").toString();//供应商编号
					String ekorg = outSTLfm1.getString("EKORG").toString();//采购组织
					String erdat = outSTLfm1.getString("ERDAT").toString();//记录创建日期
					String ernam = outSTLfm1.getString("ERNAM").toString();//记录创建人
					String verkf = outSTLfm1.getString("VERKF").toString();//销售员号码
					String telf1 = outSTLfm1.getString("TELF1").toString();//销售员电话
					
					BaseSupplyLfm1 saveDataLfm1 = new BaseSupplyLfm1Impl();
					saveDataLfm1.setLifnr(lifnr);
					saveDataLfm1.setEkorg(ekorg);
					saveDataLfm1.setErdat(fz.parse(erdat));
					saveDataLfm1.setErnam(ernam);
					saveDataLfm1.setVerkf(verkf);
					saveDataLfm1.setTelf1(telf1);
					this.sapSrmSupplyDao.saveLfm1List(saveDataLfm1);
				}
				System.out.println("====供应商主记录购买组织数据====" + outST.getNumRows());
				
				//获取SAP供应商主记录(公司代码)（LFB1）信息
				JCO.Table outSTLfb1 = output.getTable("ET_LFB1");
				for (int i = 0; i < outSTLfb1.getNumRows(); i++) {
					
					outSTLfb1.setRow(i);
					String lifnr = outSTLfb1.getString("LIFNR").toString();//供应商编号
					String bukrs = outSTLfb1.getString("BUKRS").toString();//公司代码
					String erdat = outSTLfb1.getString("ERDAT").toString();//记录创建日期
					String ernam = outSTLfb1.getString("ERNAM").toString();//记录创建人
					String sperr = outSTLfb1.getString("SPERR").toString();//对公司过账代码冻结
					String loevm = outSTLfb1.getString("LOEVM").toString();//主记录删除标志
					String akont = outSTLfb1.getString("AKONT").toString();//总账科目

					BaseSupplyLfb1 saveDataLfb1 = new BaseSupplyLfb1Impl();
					saveDataLfb1.setLifnr(lifnr);
					saveDataLfb1.setBukrs(bukrs);
					saveDataLfb1.setErdat(fz.parse(erdat));
					saveDataLfb1.setErnam(ernam);
					saveDataLfb1.setSperr(sperr);
					saveDataLfb1.setLoevm(loevm);
					saveDataLfb1.setAkont(akont);
					this.sapSrmSupplyDao.saveLfb1List(saveDataLfb1);
				}

				System.out.println("====供应商主记录(公司代码)====" + outST.getNumRows());
				
			}
		}catch (Exception e) {
			SrmLog.error("导入供应商数据异常!", e);
			throw new BusinessException("导入供应商数据异常!", e.getMessage());
		}
	}

	public SapSrmSupplyDao getSapSrmSupplyDao() {
		return sapSrmSupplyDao;
	}

	public void setSapSrmSupplyDao(SapSrmSupplyDao sapSrmSupplyDao) {
		this.sapSrmSupplyDao = sapSrmSupplyDao;
	}

}
