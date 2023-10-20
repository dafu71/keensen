package com.zoomlion.hjsrm.sapinterface.SapJiesuan;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Properties;

import com.sap.mw.jco.IFunctionTemplate;
import com.sap.mw.jco.JCO;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead;
import com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList;
import com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMara;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMaraImpl;
import com.zoomlion.hjsrm.sapinterface.db.SapConfig;

public class SapJiesuanBean extends BaseBean{

	private SapJiesuanDao sapJiesuanDao;
	
	/**
	 * 方法描述: 结算凭证确认接口
	 * 创建日期： 2014/12/09
	 * @author 黄平
	 * @param datas
	 * @throws BusinessException 
	 * @return HashMap
	 */
	@SuppressWarnings("unchecked")
	public HashMap syncJiesuanDan(HashMap[] datas ) throws BusinessException{
 
		String strMsgtx = new String();
		String strMsgty = new String();
		HashMap returnObj = new HashMap();
		SimpleDateFormat df = new SimpleDateFormat("yyyyMMdd");
		SimpleDateFormat tf = new SimpleDateFormat("HHmmss");
		try{
			if (null == datas || datas.length == 0 ) {
				returnObj.put("msgty", "E");
				returnObj.put("msgtx", "选择数据条目数为零");
				return returnObj;
			}
			
			if (datas.length == 1){
				if (datas[0] == null)
				{
					returnObj.put("msgty", "E");
					returnObj.put("msgtx", "选择数据条目数为零");
					return returnObj;
				}
			}
			//属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			//获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				//要调用的SAP函数名称
				String strFunc = "ZHJSRM0010";//结算凭证确认接口
				JCO.Repository myRepository = new JCO.Repository("myRepository", // 只是一个名字
					myConnection); // 活动的连接
				//从“仓库”中获得一个指定函数名的函数模板
				IFunctionTemplate ft = myRepository.getFunctionTemplate(strFunc
						.toUpperCase());
				//从这个函数模板获得该SAP函数的对象
				JCO.Function function = ft.getFunction();
				//获得函数的import参数列表
				JCO.ParameterList inputTable = function.getTableParameterList();
				
				//获得函数的export参数列表
				JCO.ParameterList output = function.getExportParameterList();		
				JCO.Table jshead = inputTable.getTable("ET_HEAD");
				JCO.Table jslist = inputTable.getTable("ET_LIST");

				for(int i = 0;i < datas.length; i++){
					String jspz = datas[i].get("jspz").toString();
					String mjahr = datas[i].get("mjahr").toString();
					HashMap paramObj = new HashMap();
					paramObj.put("jspz", jspz);
					paramObj.put("mjahr", mjahr);
					
					GenlInvoiceHead[] qh= this.sapJiesuanDao.queryJiesuanHead(paramObj);
					for(int j = 0;j < qh.length; j++){
						String sjspz = qh[j].getJspz().toString();
						String smjahr = qh[j].getMjahr().toString();
						String bukrs = qh[j].getBukrs().toString();
						String werks = qh[j].getWerks().toString();
						String lifnr = qh[j].getLifnr().toString();
						String jsje  = qh[j].getJsje().toString();
						String mwskz = qh[j].getMwskz().toString();
						String taxrt = qh[j].getTaxrt().toString();
						String flje  = qh[j].getFlje().toString();
						String yfje = qh[j].getYfje().toString();
						String qtkkje = qh[j].getQtkkje().toString();
						String tax = qh[j].getTax().toString();
						String usnam = qh[j].getUsnam().toString();
						String datum = df.format(qh[j].getDatum()).toString();
						
						jshead.appendRow();
						jshead.setValue(sjspz, "JSPZ");
						jshead.setValue(smjahr, "MJAHR");
						jshead.setValue(bukrs, "BUKRS");
						jshead.setValue(werks, "WERKS");
						jshead.setValue(lifnr, "LIFNR");
						jshead.setValue(jsje, "JSJE");
						jshead.setValue(mwskz, "MWSKZ");
						jshead.setValue(taxrt, "TAXRT");
						jshead.setValue(flje, "FLJE");
						jshead.setValue(yfje, "YFJE");
						jshead.setValue(qtkkje, "QTKKJE");
						jshead.setValue(tax, "TAX");
						jshead.setValue(usnam, "USNAM");
						jshead.setValue(datum, "DATUM");
					}
					
					GenlInvoiceList[] ql = this.sapJiesuanDao.queryJiesuanList(paramObj);
					for(int h = 0;h < ql.length; h++){
						String ljspz = ql[h].getJspz().toString();
						String lmjahr = ql[h].getMjahr().toString();
						String jspzh = ql[h].getJspzh().toString();
						String mblnr = ql[h].getMblnr().toString();
						String zeile = ql[h].getZeile().toString();
						String budat = df.format(ql[h].getBudat()).toString();
						String shkzg = ql[h].getShkzg().toString();
						String bwart = ql[h].getBwart().toString();
						String djssl = ql[h].getDjssl().toString();
						String djssl_ck = ql[h].getDjsslCk().toString();
						String meins = new String();
						if (ql[h].getMeins() != null&& ql[h].getMeins() != ""){
							 meins = ql[h].getMeins().toString();
						}else{
							meins ="";
						}
						String hjsje = ql[h].getHjsje().toString();
						String jsdj  = ql[h].getJsdj().toString();
						String jsdw  = String.valueOf(ql[h].getJsdw());
						String kbetr = ql[h].getKbetr().toString();
						String kpein = String.valueOf(ql[h].getKpein());
						String kmein = new String();
						if (ql[h].getKmein() != null&&ql[h].getKmein() != ""){
							 kmein = ql[h].getKmein().toString();
						}else{
							 kmein = "";
						}
						String flag_htj = ql[h].getFlagHtj().toString();
						//String kalsm = new String();
						//if (ql[h].getKalsm() == null && ql[h].getKalsm() != ""){
						//	kalsm = ql[h].getKalsm().toString();
						//}else{
						//	kalsm = "";
						//}
						String hqtkkje = ql[h].getHqtkkje().toString();
						String hflje = ql[h].getHflje().toString();
						String hyfje = ql[h].getHyfje().toString();
						//String hkkje = ql[h].getHkkje().toString();
						String zcdf  = ql[h].getZcdf().toString();
						String lfbnr = ql[h].getLfbnr().toString();
						String lfpos = ql[h].getLfpos().toString();
						String lfgja = ql[h].getLfgja().toString();
						//String shqtk = ql[h].getShqtk().toString();
						//String hshqtk = ql[h].getHshqtk().toString();
						//String shqtkbh = ql[h].getShqtkbh().toString();
						String waers = ql[h].getWaers().toString();
						//String belnr = ql[h].getBelnr().toString();
						//String buzei = ql[h].getBuzei().toString();
						//String gjahr = ql[h].getGjahr().toString();
						String ekorg = ql[h].getEkorg().toString();
						String ekgrp = ql[h].getEkgrp().toString();
						String ebeln = new String();
						if ( ql[h].getEbeln() != null &&  ql[h].getEbeln() != ""){
							ebeln = ql[h].getEbeln().toString();
						}else{
							ebeln = "";
						}
						String ebelp = new String();
						if(ql[h].getEbelp() != null && ql[h].getEbelp() != ""){
							ebelp = ql[h].getEbelp().toString();
						}else{
							ebelp = "";
						}
						String matnr = new String();
						if (ql[h].getMatnr() != null && ql[h].getMatnr() != ""){
							matnr = ql[h].getMatnr().toString();
						}else{
							matnr = "";
						}
						
						//String matkl = ql[h].getMatkl().toString();
						String aufnr = new String();
						if (ql[h].getAufnr() != null && ql[h].getAufnr() != ""){
							aufnr = ql[h].getAufnr().toString();
						}else{
							aufnr = "";
						}
						String menge = ql[h].getMenge().toString();
						String zwrildt = df.format(ql[h].getZwrildt()).toString();
						String zwriltm = tf.format(ql[h].getZwrildt()).toString();
						String zwriusr = ql[h].getZwriusr().toString();
						
						jslist.appendRow();
						jslist.setValue(ljspz, "JSPZ");
						jslist.setValue(lmjahr, "MJAHR");
						jslist.setValue(jspzh, "JSPZH");
						jslist.setValue(mblnr, "MBLNR");
						jslist.setValue(zeile, "ZEILE");
						jslist.setValue(budat, "BUDAT");
						jslist.setValue(shkzg, "SHKZG");
						jslist.setValue(bwart, "BWART");
						jslist.setValue(djssl, "DJSSL");
						jslist.setValue(djssl_ck, "DJSSL_CK");
						jslist.setValue(meins, "MEINS");
						jslist.setValue(hjsje, "HJSJE");
						jslist.setValue(jsdj, "JSDJ");
						jslist.setValue(jsdw, "JSDW");
						jslist.setValue(kbetr, "KBETR");
						jslist.setValue(kpein, "KPEIN");
						jslist.setValue(kmein, "KMEIN");
						jslist.setValue(flag_htj, "FLAG_HTJ");
						//jslist.setValue(kalsm, "KALSM");
						jslist.setValue(hqtkkje, "HQTKKJE");
						jslist.setValue(hflje, "HFLJE");
						jslist.setValue(hyfje, "HYFJE");
						//jslist.setValue(hkkje, "HKKJE");
						jslist.setValue(zcdf, "ZCDF");
						jslist.setValue(lfbnr, "LFBNR");
						jslist.setValue(lfpos, "LFPOS");
						jslist.setValue(lfgja, "LFGJA");
						jslist.setValue(waers, "WAERS");
						jslist.setValue(ekorg, "EKORG");
						jslist.setValue(ekgrp, "EKGRP");
						jslist.setValue(ebeln, "EBELN");
						jslist.setValue(ebelp, "EBELP");
						jslist.setValue(matnr, "MATNR");
						//jslist.setValue(matkl, "MATKL");
						jslist.setValue(aufnr, "AUFNR");
						jslist.setValue(menge, "MENGE");
						jslist.setValue(zwrildt, "ZWRILDT");
						jslist.setValue(zwriltm, "ZWRILTM");
						jslist.setValue(zwriusr, "ZWRIUSR");
					}
				}

				myConnection.execute(function);
				strMsgtx = output.getValue("EC_MSGTX").toString();
				strMsgty = output.getValue("EC_MSGTY").toString();
				myConnection.disconnect();
				System.out.println("===" + strMsgty + "===");
				System.out.println("===" + strMsgtx + "===");
			}
		}catch(Exception e){
			strMsgtx = null;
			SrmLog.error("结算凭证确认异常！", e);
			throw new BusinessException("结算凭证确认异常！", e.getMessage());  	
		}
		
		returnObj.put("msgty", strMsgty);
		returnObj.put("msgtx", strMsgtx);
		return returnObj;
	}
	
	
	/**
	 * 方法描述: 结算凭证撤销确认接口
	 * 创建日期： 2014/12/09
	 * @author 黄平
	 * @param datas
	 * @throws BusinessException 
	 * @return HashMap
	 */
	@SuppressWarnings("unchecked")
	public HashMap removeJiesuanDan(String jspz,String mjahr ) throws BusinessException{
 
		String strMsgtx = new String();
		String strMsgty = new String();
		HashMap returnObj = new HashMap();
		try{
			if (null == jspz || jspz.equals("")|| null == mjahr || mjahr.equals("")) {
				returnObj.put("msgty", "E");
				returnObj.put("msgtx", "选择数据错误，请确认");
				return returnObj;
			}
			//属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			//获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				//要调用的SAP函数名称
				String strFunc = "ZHJSRM0011";//结算凭证撤销确认接口
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
				JCO.ParameterList output = function.getExportParameterList();		

				input.setValue(jspz, "LC_JSPZ");
				input.setValue(mjahr, "LC_MJAHR");

				myConnection.execute(function);
				strMsgtx = output.getValue("EC_MSGTX").toString();
				strMsgty = output.getValue("EC_MSGTY").toString();
				myConnection.disconnect();
				System.out.println("===" + strMsgty + "===");
				System.out.println("===" + strMsgtx + "===");
			}
		}catch(Exception e){
			strMsgtx = null;
			SrmLog.error("结算凭证撤销确认异常！", e);
			throw new BusinessException("结算凭证撤销确认异常！", e.getMessage());  	
		}
		
		returnObj.put("msgty", strMsgty);
		returnObj.put("msgtx", strMsgtx);
		return returnObj;
	}
	
	
	/**
	 * 方法描述: 结算凭证生成预制发票导入接口
	 * 创建日期： 2015/01/21
	 * @author 黄平
	 * @param datas
	 * @throws BusinessException 
	 * @return HashMap
	 */
	@SuppressWarnings("unchecked")
	public void saveBelnr() throws BusinessException{
		try{
			//属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			//获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				//要调用的SAP函数名称
				String strFunc = "ZHJSRM0013";//结算凭证生成预制发票导入
				JCO.Repository myRepository = new JCO.Repository("myRepository", // 只是一个名字
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
				//获取SAP预制发票信息
				JCO.Table outST = output.getTable("ET_ZTFP");
				for (int i = 0; i < outST.getNumRows(); i++) {
					
					outST.setRow(i);
					String jspz = outST.getString("JSPZ").toString();//结算凭证号
					String jspzh = outST.getString("JSPZH").toString().replaceAll("^(0+)", "");//结算凭证行号
					String mjahr = outST.getString("MJAHR").toString();//结算凭证年度
					String belnr = outST.getString("BELNR").toString();//预制发票号
					String buzei = outST.getString("BUZEI").toString();//预制发票行号
					String gjahr = outST.getString("GJAHR").toString();//预制发票年度
					
					GenlInvoiceList saveData = new GenlInvoiceListImpl();
					saveData.setJspz(jspz);
					saveData.setJspzh(jspzh);
					saveData.setMjahr(mjahr);
					saveData.setBelnr(belnr);
					saveData.setBuzei(buzei);
					saveData.setGjahr(gjahr);
					this.sapJiesuanDao.saveEntity(saveData);
				}
				System.out.println("===预制发票号更新条目" + outST.getNumRows() + "===");
			}
		}catch(Exception e){
			SrmLog.error("预制发票导入异常！", e);
			throw new BusinessException("预制发票导入异常！", e.getMessage());  	
		}
	}


	public SapJiesuanDao getSapJiesuanDao() {
		return sapJiesuanDao;
	}

	public void setSapJiesuanDao(SapJiesuanDao sapJiesuanDao) {
		this.sapJiesuanDao = sapJiesuanDao;
	}
}
