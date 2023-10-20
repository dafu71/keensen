package com.zoomlion.hjsrm.sapinterface.SrmWarehouse;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import commonj.sdo.DataObject;
import com.sap.mw.jco.IFunctionTemplate;
import com.sap.mw.jco.JCO;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlVnCoincident;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlVnCoincidentImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseEkko;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlAsnMseg;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMkpf;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMkpfCrte;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlSaveMseg;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlAsnMsegImpl;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlMblnrVnbmImpl;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMkpfCrteImpl;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMkpfImpl;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlSaveMsegImpl;
import com.zoomlion.hjsrm.sapinterface.db.SapConfig;

public class SapSrmWarehouseBean extends BaseBean{
	
	private SapSrmWarehouseDao sapSrmWarehouseDao;
	/**
	 * 方法描述: 收货入库接口
	 * 创建日期： 2014/12/02
	 * @author 黄平
	 * @param asnSo
	 * @param mBudat
	 * @param mBldat
	 * @param vt
	 * @throws BusinessException 
	 * @return String
	 */
	public String createMblnr(String asnSo,Date mBudat,Date mBldat,String bgTxt,Vwarehourse[] vt ) throws BusinessException{	
		String strMsgtx = new String();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		try{
			//属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			//获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				//要调用的SAP函数名称
				String strFunc = "ZHJSRM0006";//收货入库接口
				JCO.Repository myRepository = new JCO.Repository("myRepository", // 只是一个名字
					myConnection); // 活动的连接
				//从“仓库”中获得一个指定函数名的函数模板
				IFunctionTemplate ft = myRepository.getFunctionTemplate(strFunc
						.toUpperCase());
				//从这个函数模板获得该SAP函数的对象
				JCO.Function function = ft.getFunction();
				//获得函数的import参数列表
				JCO.ParameterList input = function.getImportParameterList();
				JCO.ParameterList inputTable = function.getTableParameterList();
				
				//获得函数的export参数列表
				JCO.ParameterList output = function.getExportParameterList();		
				JCO.Table mbinfo = inputTable.getTable("LT_GM_I");
				JCO.Structure m = input.getStructure("LS_GM_H");
				m.setValue(sdf.format(mBudat).toString(), "PSTNG_DATE");
				m.setValue(sdf.format(mBldat).toString(), "DOC_DATE");
				m.setValue(bgTxt,"HEADER_TXT");

				for(int i = 0;i < vt.length; i++){
					String ebeln = vt[i].getEbeln().toString();//采购订单号
					String ebelp = vt[i].getEbelp().toString();//采购订单行号
					String charg = new String();
					if(vt[i].getCharg() != null && vt[i].getCharg() != ""){
						 charg = vt[i].getCharg().toString();//批次
					}
 					String menge = new String();
				    if (vt[i].getMenge() != null && vt[i].getMenge() != ""){
				    	 menge = vt[i].getMenge().toString();//数量
				    }else{
				    	 menge = "0";
				    }
					String bwart = "101";//移动类型
					String lgort = new String();
					if(vt[i].getLgort() != null && vt[i].getLgort() != ""){
						 lgort = vt[i].getLgort().toString();//库存地点
					}
					
					//对SAP参数进行赋值
					mbinfo.appendRow();
					mbinfo.setValue(ebeln, "PO_NUMBER");
					mbinfo.setValue(ebelp, "PO_ITEM");
					mbinfo.setValue(menge, "ENTRY_QNT");
					mbinfo.setValue('B', "MVT_IND");
					if(vt[i].getCharg() != null && vt[i].getCharg() != ""){
						mbinfo.setValue(charg,"BATCH");
					}
					if(vt[i].getLgort() != null && vt[i].getLgort() != ""){
						mbinfo.setValue(lgort,"STGE_LOC");
					}
					
					mbinfo.setValue(bwart, "MOVE_TYPE");	
					if (vt[i].getSgtxt() != null &&vt[i].getSgtxt()!= ""){
						mbinfo.setValue(vt[i].getSgtxt().toString(), "ITEM_TEXT");
					}
				}

				myConnection.execute(function);
				strMsgtx = output.getValue("EC_MSGTX").toString();
				String strMblnr = output.getValue("LC_MBLNR").toString();
				String strMjahr = output.getValue("LN_MJAHR").toString();
				if( strMblnr != null && !strMblnr.equals("")){
					//用于保存送货单号与生成物料凭证关系
					GenlAsnMseg  asnMseg = new GenlAsnMsegImpl();
					asnMseg.setMblnr(strMblnr);
					asnMseg.setMjahr(strMjahr);
					asnMseg.setZasnh(asnSo);
					asnMseg.setTranu(Common.getCurrentUserId());
					asnMseg.setTrant(Common.getCurrentTime());
					this.sapSrmWarehouseDao.saveEntity(asnMseg);
					//用户保存物料凭证操作记录
					GenlReceiptsMkpfCrte mkpfCrte = new GenlReceiptsMkpfCrteImpl();
					mkpfCrte.setMblnr(strMblnr);
					mkpfCrte.setMjahr(strMjahr);
					mkpfCrte.setTranu(Common.getCurrentUserId());
					//mkpfCrte.setTrant(Common.getCurrentTime());
					this.sapSrmWarehouseDao.saveEntity(mkpfCrte);
					//用于同步数据
					GenlSaveMseg saveMseg = new GenlSaveMsegImpl();
					saveMseg.setMblnr(strMblnr);
					saveMseg.setMjahr(strMjahr);
					this.sapSrmWarehouseDao.saveEntity(saveMseg);
					
				}
				myConnection.disconnect();
				System.out.println("===" + strMsgtx + "===");
			}
		}catch(Exception e){
			strMsgtx = null;
			SrmLog.error("生成物料凭证异常！", e);
			throw new BusinessException("生成物料凭证异常！", e.getMessage());  	
		}
		
        return strMsgtx;
	}
	/**
	 * 方法描述: 收货入库接口
	 * 创建日期： 2016/08/02
	 * @author 刘鑫
	 * @param asnSo
	 * @param mBudat
	 * @param mBldat
	 * @param vt
	 * @throws BusinessException 
	 * @return String
	 */
	public String createVnMblnr(String asnSo,Date mBudat,Date mBldat,String bgTxt,Vwarehourse[] vt ) throws BusinessException{	
		String strMsgtx = new String();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		try{
			//属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			//获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				//要调用的SAP函数名称
				String strFunc = "ZHJSRM0016";//收货入库接口
				JCO.Repository myRepository = new JCO.Repository("myRepository", // 只是一个名字
					myConnection); // 活动的连接
				//从“仓库”中获得一个指定函数名的函数模板
				IFunctionTemplate ft = myRepository.getFunctionTemplate(strFunc
						.toUpperCase());
				//从这个函数模板获得该SAP函数的对象
				JCO.Function function = ft.getFunction();
				//获得函数的import参数列表
				JCO.ParameterList input = function.getImportParameterList();
				JCO.ParameterList inputTable = function.getTableParameterList();
				JCO.ParameterList inputVnTable = function.getTableParameterList();
				//获得函数的export参数列表
				JCO.ParameterList output = function.getExportParameterList();		
				JCO.Table mbinfo = inputTable.getTable("LT_GM_I");
				JCO.Table vninfo = inputVnTable.getTable("LT_VN");
				JCO.Structure m = input.getStructure("LS_GM_H");
				m.setValue(sdf.format(mBudat).toString(), "PSTNG_DATE");
				m.setValue(sdf.format(mBldat).toString(), "DOC_DATE");
				m.setValue(bgTxt,"HEADER_TXT");

				for(int i = 0;i < vt.length; i++){
					String vbid = "";
					String ebeln = vt[i].getEbeln().toString();//采购订单号
					String ebelp = vt[i].getEbelp().toString();//采购订单行号
					String vnbm = null == vt[i].get("vnbm")?"":vt[i].get("vnbm").toString();//vn编码
					if(i==9){
						vbid = "0010";
					}else{
						vbid = "000"+(i+1);
					}
					String charg = new String();
					if(vt[i].getCharg() != null && vt[i].getCharg() != ""){
						 charg = vt[i].getCharg().toString();//批次
					}
 					String menge = new String();
				    if (vt[i].getMenge() != null && vt[i].getMenge() != ""){
				    	 menge = vt[i].getMenge().toString();//数量
				    }else{
				    	 menge = "0";
				    }
					String bwart = "101";//移动类型
					String lgort = new String();
					if(vt[i].getLgort() != null && vt[i].getLgort() != ""){
						 lgort = vt[i].getLgort().toString();//库存地点
					}
					
					//对SAP参数进行赋值
					mbinfo.appendRow();
					mbinfo.setValue(ebeln, "PO_NUMBER");
					mbinfo.setValue(ebelp, "PO_ITEM");
					mbinfo.setValue(menge, "ENTRY_QNT");
					mbinfo.setValue('B', "MVT_IND");
					if(vt[i].getCharg() != null && vt[i].getCharg() != ""){
						mbinfo.setValue(charg,"BATCH");
					}
					if(vt[i].getLgort() != null && vt[i].getLgort() != ""){
						mbinfo.setValue(lgort,"STGE_LOC");
					}
					
					mbinfo.setValue(bwart, "MOVE_TYPE");	
					if (vt[i].getSgtxt() != null &&vt[i].getSgtxt()!= ""){
						mbinfo.setValue(vt[i].getSgtxt().toString(), "ITEM_TEXT");
					}
					vninfo.appendRow();
					vninfo.setValue(vbid, "MATDOC_ITM");
					vninfo.setValue(vnbm, "SERIALNO");
				}

				myConnection.execute(function);
				strMsgtx = output.getValue("EC_MSGTX").toString();
				String strMblnr = output.getValue("LC_MBLNR").toString();
				String strMjahr = output.getValue("LN_MJAHR").toString();
				if( strMblnr != null && !strMblnr.equals("")){
					//用于保存送货单号与生成物料凭证关系
					GenlAsnMseg  asnMseg = new GenlAsnMsegImpl();
					asnMseg.setMblnr(strMblnr);
					asnMseg.setMjahr(strMjahr);
					asnMseg.setZasnh(asnSo);
					asnMseg.setTranu(Common.getCurrentUserId());
					asnMseg.setTrant(Common.getCurrentTime());
					this.sapSrmWarehouseDao.saveEntity(asnMseg);
					//用户保存物料凭证操作记录
					GenlReceiptsMkpfCrte mkpfCrte = new GenlReceiptsMkpfCrteImpl();
					mkpfCrte.setMblnr(strMblnr);
					mkpfCrte.setMjahr(strMjahr);
					mkpfCrte.setTranu(Common.getCurrentUserId());
					//mkpfCrte.setTrant(Common.getCurrentTime());
					this.sapSrmWarehouseDao.saveEntity(mkpfCrte);
					//用于同步数据
					GenlSaveMseg saveMseg = new GenlSaveMsegImpl();
					saveMseg.setMblnr(strMblnr);
					saveMseg.setMjahr(strMjahr);
					this.sapSrmWarehouseDao.saveEntity(saveMseg);
					
				}
				myConnection.disconnect();
				System.out.println("===" + strMsgtx + "===");
			}
		}catch(Exception e){
			strMsgtx = null;
			SrmLog.error("生成物料凭证异常！", e);
			throw new BusinessException("生成物料凭证异常！", e.getMessage());  	
		}
		
        return strMsgtx;
	}
	/**
	 * 方法描述: 冲销物料凭证接口
	 * 创建日期： 2014/12/02
	 * @author 黄平
	 * @param mBudat
	 * @param mBldat
	 * @param vt
	 * @throws BusinessException 
	 * @return String
	 */
	public String backMblnr(String lMblnr,String lMjahr,Date lDate,DataObject[] vt) throws BusinessException{	
		String strMsgtx = new String();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		try{
			//属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			//获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				//要调用的SAP函数名称
				String strFunc = "ZHJSRM0007";//冲销物料凭证接口
				JCO.Repository myRepository = new JCO.Repository("myRepository", // 只是一个名字
					myConnection); // 活动的连接
				//从“仓库”中获得一个指定函数名的函数模板
				IFunctionTemplate ft = myRepository.getFunctionTemplate(strFunc
						.toUpperCase());
				//从这个函数模板获得该SAP函数的对象
				JCO.Function function = ft.getFunction();
				//获得函数的import参数列表
				JCO.ParameterList input = function.getImportParameterList();
				JCO.ParameterList inputTable = function.getTableParameterList();
				
				//获得函数的export参数列表
				JCO.ParameterList output = function.getExportParameterList();		
				JCO.Table mbinfo = inputTable.getTable("LT_ITEM");
				input.setValue(lMblnr, "LC_MBLNR");
				input.setValue(lMjahr, "LN_MJAHR");
				input.setValue(sdf.format(lDate).toString(), "PSTNG_DATE");
				
				for(int i = 0;i < vt.length; i++){
					String mitem = vt[i].getString("zeile").toString();
					mbinfo.appendRow();
					mbinfo.setValue(mitem, "MATDOC_ITEM");		
				}

				myConnection.execute(function);
				strMsgtx = output.getValue("EC_MSGTX").toString();
				JCO.Structure m = output.getStructure("LS_HEADRET");
				String strMblnr = m.getValue("MAT_DOC").toString();
				String strMjahr = m.getValue("DOC_YEAR").toString();
				if( strMblnr != null && !strMblnr.equals("")){
					
					GenlSaveMseg saveMseg = new GenlSaveMsegImpl();
					saveMseg.setMblnr(strMblnr);
					saveMseg.setMjahr(strMjahr);
					this.sapSrmWarehouseDao.saveEntity(saveMseg);	
					
					//用户保存物料凭证操作记录
					GenlReceiptsMkpfCrte mkpfCrte = new GenlReceiptsMkpfCrteImpl();
					mkpfCrte.setMblnr(strMblnr);
					mkpfCrte.setMjahr(strMjahr);
					mkpfCrte.setTranu(Common.getCurrentUserId());
					//mkpfCrte.setTrant(Common.getCurrentTime());
					this.sapSrmWarehouseDao.saveEntity(mkpfCrte);
				}
				myConnection.disconnect();
				System.out.println("===" + strMsgtx + "===");
			}
		}catch(Exception e){
			strMsgtx = null;
			SrmLog.error("物料凭证冲销异常！", e);
			throw new BusinessException("物料凭证冲销异常！", e.getMessage());  	
		}
        return strMsgtx;
	}
	/**
	 * 方法描述: VN号冲销物料凭证接口
	 * 创建日期： 2016/8/11
	 * @author 刘鑫
	 * @param mBudat
	 * @param mBldat
	 * @param vt
	 * @throws BusinessException 
	 * @return String
	 */
	public String backVnMblnr(String lMblnr,String lMjahr,Date lDate,DataObject[] vt) throws BusinessException{	
		String strMsgtx = new String();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		try{
			//属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			//获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				//要调用的SAP函数名称
				String strFunc = "ZHJSRM0015";//冲销物料凭证接口
				JCO.Repository myRepository = new JCO.Repository("myRepository", // 只是一个名字
					myConnection); // 活动的连接
				//从“仓库”中获得一个指定函数名的函数模板
				IFunctionTemplate ft = myRepository.getFunctionTemplate(strFunc
						.toUpperCase());
				//从这个函数模板获得该SAP函数的对象
				JCO.Function function = ft.getFunction();
				//获得函数的import参数列表
				JCO.ParameterList input = function.getImportParameterList();
				JCO.ParameterList inputTable = function.getTableParameterList();
						
				
				//获得函数的export参数列表
				JCO.ParameterList output = function.getExportParameterList();	
				JCO.ParameterList output1 = function.getTableParameterList();	
				JCO.Table mbinfo = inputTable.getTable("LT_ITEM");
				input.setValue(lMblnr, "LC_MBLNR");
				input.setValue(lMjahr, "LN_MJAHR");
				input.setValue(sdf.format(lDate).toString(), "PSTNG_DATE");
				
				for(int i = 0;i < vt.length; i++){
					String mitem = vt[i].getString("zeile").toString();
					mbinfo.appendRow();
					mbinfo.setValue(mitem, "MATDOC_ITEM");		
				}								
				myConnection.execute(function);
				JCO.Table outST = output1.getTable("LT_DEL");							
				for (int i = 0; i < outST.getNumRows(); i++) {
					outST.setRow(i);
					Map condition = new HashMap();	
					String shkzg = outST.getString("SHKZG").toString(); //标准
					String sernr = outST.getString("SERNR").toString(); //vn编号
					if(shkzg.equals("S")){
				    GenlVnCoincident vncoincident = new GenlVnCoincidentImpl();
				    this.sapSrmWarehouseDao.getPrimaryKey(vncoincident);
					vncoincident.setVnbm(sernr);
					this.sapSrmWarehouseDao.saveEntity(vncoincident);
					}else if(shkzg.equals("H")){
					   condition.put("vnbm",sernr);
					   this.sapSrmWarehouseDao.delVnbm(condition);
					}					
				}
				strMsgtx = output.getValue("EC_MSGTX").toString();
				JCO.Structure m = output.getStructure("LS_HEADRET");
				String strMblnr = m.getValue("MAT_DOC").toString();
				String strMjahr = m.getValue("DOC_YEAR").toString();
				if( strMblnr != null && !strMblnr.equals("")){
					
					GenlSaveMseg saveMseg = new GenlSaveMsegImpl();
					saveMseg.setMblnr(strMblnr);
					saveMseg.setMjahr(strMjahr);
					this.sapSrmWarehouseDao.saveEntity(saveMseg);	
					
					//用户保存物料凭证操作记录
					GenlReceiptsMkpfCrte mkpfCrte = new GenlReceiptsMkpfCrteImpl();
					mkpfCrte.setMblnr(strMblnr);
					mkpfCrte.setMjahr(strMjahr);
					mkpfCrte.setTranu(Common.getCurrentUserId());
					//mkpfCrte.setTrant(Common.getCurrentTime());
					this.sapSrmWarehouseDao.saveEntity(mkpfCrte);
				}
				myConnection.disconnect();
				System.out.println("===" + strMsgtx + "===");
			}
		}catch(Exception e){
			strMsgtx = null;
			SrmLog.error("物料凭证冲销异常！", e);
			throw new BusinessException("物料凭证冲销异常！", e.getMessage());  	
		}
        return strMsgtx;
	}
	/**
	 * 方法描述: 退货接口
	 * 创建日期： 2014/12/02
	 * @author 黄平
	 * @param mBudat
	 * @param mBldat
	 * @param vt
	 * @throws BusinessException 
	 * @return String
	 */
	public String returnMblnr(Date mBudat,Date mBldat,String bgTxt,Vwarehourse[] vt ) throws BusinessException{	
		String strMsgtx = new String();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		try{
			//属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			//获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				//要调用的SAP函数名称
				String strFunc = "ZHJSRM0006";//退货接口
				JCO.Repository myRepository = new JCO.Repository("myRepository", // 只是一个名字
					myConnection); // 活动的连接
				//从“仓库”中获得一个指定函数名的函数模板
				IFunctionTemplate ft = myRepository.getFunctionTemplate(strFunc
						.toUpperCase());
				//从这个函数模板获得该SAP函数的对象
				JCO.Function function = ft.getFunction();
				//获得函数的import参数列表
				JCO.ParameterList input = function.getImportParameterList();
				JCO.ParameterList inputTable = function.getTableParameterList();
				
				//获得函数的export参数列表
				JCO.ParameterList output = function.getExportParameterList();		
				JCO.Table mbinfo = inputTable.getTable("LT_GM_I");
				JCO.Structure m = input.getStructure("LS_GM_H");
				m.setValue(sdf.format(mBudat).toString(), "PSTNG_DATE");
				m.setValue(sdf.format(mBldat).toString(), "DOC_DATE");
				m.setValue(bgTxt,"HEADER_TXT");

				for(int i = 0;i < vt.length; i++){
					String ebeln = vt[i].getEbeln().toString();//采购订单号
					String ebelp = vt[i].getEbelp().toString();//采购订单行项目
					String menge = vt[i].getMenge().toString();//
					String bwart = "122";//移动类型
					String lfbja = vt[i].getLfbja().toString();//物料凭证年度
					String lfbnr = vt[i].getLfbnr().toString();//物料凭证号
					String lfpos = vt[i].getLfpos().toString();//物料凭证行号
					String grund = new String();
					String charg = new String();
					if(vt[i].getCharg() != null && vt[i].getCharg() != ""){
						 charg = vt[i].getCharg().toString();//批次
					}
					if(vt[i].getGrund() != null && vt[i].getGrund() != ""){
						grund = vt[i].getGrund().toString();//移动原因
					}
					String lgort = new String();
					if(vt[i].getLgort() != null && vt[i].getLgort() != ""){
						 lgort = vt[i].getLgort().toString();//库存地点
					}
				
					mbinfo.appendRow();
					mbinfo.setValue(ebeln, "PO_NUMBER");
					mbinfo.setValue(ebelp, "PO_ITEM");
					mbinfo.setValue(menge, "ENTRY_QNT");
					mbinfo.setValue('B', "MVT_IND");
					mbinfo.setValue(bwart, "MOVE_TYPE");
					if(vt[i].getCharg() != null && vt[i].getCharg() != ""){
						mbinfo.setValue(charg,"BATCH");
					}
					if(vt[i].getGrund() != null && vt[i].getGrund() != ""){
						mbinfo.setValue(grund,"MOVE_REAS");
					}
					if(vt[i].getLgort() != null && vt[i].getLgort() != ""){
						mbinfo.setValue(lgort,"STGE_LOC");
					}
					
					if (vt[i].getSgtxt() != null &&vt[i].getSgtxt()!= ""){
						mbinfo.setValue(vt[i].getSgtxt().toString(), "ITEM_TEXT");
					}
					mbinfo.setValue(lfbja, "REF_DOC_YR");
					mbinfo.setValue(lfbnr, "REF_DOC");
					mbinfo.setValue(lfpos, "REF_DOC_IT");		
				}

				myConnection.execute(function);
				strMsgtx = output.getValue("EC_MSGTX").toString();
				String strMblnr = output.getValue("LC_MBLNR").toString();
				String strMjahr = output.getValue("LN_MJAHR").toString();
				if( strMblnr != null && !strMblnr.equals("")){
					
					//用户保存物料凭证操作记录
					GenlReceiptsMkpfCrte mkpfCrte = new GenlReceiptsMkpfCrteImpl();
					mkpfCrte.setMblnr(strMblnr);
					mkpfCrte.setMjahr(strMjahr);
					mkpfCrte.setTranu(Common.getCurrentUserId());
					//mkpfCrte.setTrant(Common.getCurrentTime());
					this.sapSrmWarehouseDao.saveEntity(mkpfCrte);
					
					GenlSaveMseg saveMseg = new GenlSaveMsegImpl();
					saveMseg.setMblnr(strMblnr);
					saveMseg.setMjahr(strMjahr);
					this.sapSrmWarehouseDao.saveEntity(saveMseg);		
				}
				myConnection.disconnect();
				System.out.println("===" + strMsgtx + "===");
			}
		}catch(Exception e){
			strMsgtx = null;
			SrmLog.error("物料凭证退货异常！", e);
			throw new BusinessException("物料凭证退货异常！", e.getMessage());  	
		}
        return strMsgtx;
	}
	/**
	 * 方法描述: Vn退货接口
	 * 创建日期： 2016/08/09
	 * @author 刘鑫
	 * @param mBudat
	 * @param mBldat
	 * @param vt
	 * @throws BusinessException 
	 * @return String
	 */
	public String returnVnMblnr(Date mBudat,Date mBldat,String bgTxt,Vwarehourse[] vt ) throws BusinessException{	
		String strMsgtx = new String();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		try{
			//属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			//获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				//要调用的SAP函数名称
				String strFunc = "ZHJSRM0016";//退货接口
				JCO.Repository myRepository = new JCO.Repository("myRepository", // 只是一个名字
					myConnection); // 活动的连接
				//从“仓库”中获得一个指定函数名的函数模板
				IFunctionTemplate ft = myRepository.getFunctionTemplate(strFunc
						.toUpperCase());
				//从这个函数模板获得该SAP函数的对象
				JCO.Function function = ft.getFunction();
				//获得函数的import参数列表
				JCO.ParameterList input = function.getImportParameterList();
				JCO.ParameterList inputTable = function.getTableParameterList();
				//JCO.ParameterList inputVnTable = function.getTableParameterList();							
				//获得函数的export参数列表
				JCO.ParameterList output = function.getExportParameterList();		
				JCO.Table mbinfo = inputTable.getTable("LT_GM_I");
				JCO.Structure m = input.getStructure("LS_GM_H");
				JCO.Table vninfo = inputTable.getTable("LT_VN");
				m.setValue(sdf.format(mBudat).toString(), "PSTNG_DATE");
				m.setValue(sdf.format(mBldat).toString(), "DOC_DATE");
				m.setValue(bgTxt,"HEADER_TXT");

				for(int i = 0;i < vt.length; i++){
					String ebeln = vt[i].getEbeln().toString();//采购订单号
					String ebelp = vt[i].getEbelp().toString();//采购订单行项目
					String menge = vt[i].getMenge().toString();//
					String bwart = "122";//移动类型
					String lfbja = vt[i].getLfbja().toString();//物料凭证年度
					String lfbnr = vt[i].getLfbnr().toString();//物料凭证号
					String lfpos = vt[i].getLfpos().toString();//物料凭证行号
					String grund = new String();
					String charg = new String();
					String vbid = vt[i].get("mblno").toString();//vn序号
					String vnbm = vt[i].get("vnbm").toString();//vn编码
					if(vt[i].getCharg() != null && vt[i].getCharg() != ""){
						 charg = vt[i].getCharg().toString();//批次
					}
					if(vt[i].getGrund() != null && vt[i].getGrund() != ""){
						grund = vt[i].getGrund().toString();//移动原因
					}
					String lgort = new String();
					if(vt[i].getLgort() != null && vt[i].getLgort() != ""){
						 lgort = vt[i].getLgort().toString();//库存地点
					}
				
					mbinfo.appendRow();
					mbinfo.setValue(ebeln, "PO_NUMBER");
					mbinfo.setValue(ebelp, "PO_ITEM");
					mbinfo.setValue(menge, "ENTRY_QNT");
					mbinfo.setValue('B', "MVT_IND");
					mbinfo.setValue(bwart, "MOVE_TYPE");
					if(vt[i].getCharg() != null && vt[i].getCharg() != ""){
						mbinfo.setValue(charg,"BATCH");
					}
					if(vt[i].getGrund() != null && vt[i].getGrund() != ""){
						mbinfo.setValue(grund,"MOVE_REAS");
					}
					if(vt[i].getLgort() != null && vt[i].getLgort() != ""){
						mbinfo.setValue(lgort,"STGE_LOC");
					}
					
					if (vt[i].getSgtxt() != null &&vt[i].getSgtxt()!= ""){
						mbinfo.setValue(vt[i].getSgtxt().toString(), "ITEM_TEXT");
					}
					mbinfo.setValue(lfbja, "REF_DOC_YR");
					mbinfo.setValue(lfbnr, "REF_DOC");
					mbinfo.setValue(lfpos, "REF_DOC_IT");
					vninfo.appendRow();
					vninfo.setValue(vbid, "MATDOC_ITM");
					vninfo.setValue(vnbm, "SERIALNO");
				}

				myConnection.execute(function);
				strMsgtx = output.getValue("EC_MSGTX").toString();
				String strMblnr = output.getValue("LC_MBLNR").toString();
				String strMjahr = output.getValue("LN_MJAHR").toString();
				if( strMblnr != null && !strMblnr.equals("")){
					
					//用户保存物料凭证操作记录
					GenlReceiptsMkpfCrte mkpfCrte = new GenlReceiptsMkpfCrteImpl();
					mkpfCrte.setMblnr(strMblnr);
					mkpfCrte.setMjahr(strMjahr);
					mkpfCrte.setTranu(Common.getCurrentUserId());
					//mkpfCrte.setTrant(Common.getCurrentTime());
					this.sapSrmWarehouseDao.saveEntity(mkpfCrte);
					
					GenlSaveMseg saveMseg = new GenlSaveMsegImpl();
					saveMseg.setMblnr(strMblnr);
					saveMseg.setMjahr(strMjahr);
					this.sapSrmWarehouseDao.saveEntity(saveMseg);		
				}
				myConnection.disconnect();
				System.out.println("===" + strMsgtx + "===");
			}
		}catch(Exception e){
			strMsgtx = null;
			SrmLog.error("物料凭证退货异常！", e);
			throw new BusinessException("物料凭证退货异常！", e.getMessage());  	
		}
        return strMsgtx;
	}
	/**
	 * 方法描述: 根据物料凭证清单从SAP抓取详细记录
	 * 创建日期： 2014/12/03
	 * @author 黄平
	 * @param mBudat
	 * @param mBldat
	 * @param vt
	 * @throws BusinessException 
	 * @return String
	 */
	public void getVnMblnrList() throws BusinessException{	
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		try{
			//属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			//获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				//要调用的SAP函数名称
				String strFunc = "ZHJSRM0008";//获取物料凭证清单
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
				JCO.ParameterList output = function.getTableParameterList();		
				JCO.Table mbinfo = inputTable.getTable("ET_DATA");
				Map condition = new HashMap();
				GenlSaveMseg[] genlSaveMseg = this.sapSrmWarehouseDao.queryMblnrList(condition);
				
				for(int i=0;i < genlSaveMseg.length;i++){
					String mblnr = genlSaveMseg[i].getMblnr().toString();
					String mjahr = genlSaveMseg[i].getMjahr().toString();
					mbinfo.appendRow();
					mbinfo.setValue(mblnr, "MBLNR");
					mbinfo.setValue(mjahr, "MJAHR");
				}
				
				myConnection.execute(function);
				myConnection.disconnect();
				saveMsegList(output);
				saveMkpfHead(output);
				saveWlpzvn(output);
			}
		}catch(Exception e){
			SrmLog.error("获取物料凭证成功！", e);
			throw new BusinessException("获取物料凭证成功！", e.getMessage());  	
		}

	}
	/**
	 * 方法描述: 根据物料凭证清单从SAP抓取详细记录
	 * 创建日期： 2014/12/03
	 * @author 黄平
	 * @param mBudat
	 * @param mBldat
	 * @param vt
	 * @throws BusinessException 
	 * @return String
	 */
	public void getMblnrList() throws BusinessException{	
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		try{
			//属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			//获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				//要调用的SAP函数名称
				String strFunc = "ZHJSRM0008";//获取物料凭证清单
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
				JCO.ParameterList output = function.getTableParameterList();		
				JCO.Table mbinfo = inputTable.getTable("ET_DATA");
				Map condition = new HashMap();
				GenlSaveMseg[] genlSaveMseg = this.sapSrmWarehouseDao.queryMblnrList(condition);
				
				for(int i=0;i < genlSaveMseg.length;i++){
					String mblnr = genlSaveMseg[i].getMblnr().toString();
					String mjahr = genlSaveMseg[i].getMjahr().toString();
					mbinfo.appendRow();
					mbinfo.setValue(mblnr, "MBLNR");
					mbinfo.setValue(mjahr, "MJAHR");
				}
				
				myConnection.execute(function);
				myConnection.disconnect();
				saveMsegList(output);
				saveMkpfHead(output);
			}
		}catch(Exception e){
			SrmLog.error("获取物料凭证成功！", e);
			throw new BusinessException("获取物料凭证成功！", e.getMessage());  	
		}

	}
	/**
	 * 方法描述:获取SAP物料凭证号抬头信息       
	 * 创建日期：2014/12/02
	 * @author 黄平
	 * @param  output
	 * @throws BusinessException
	 * @return void
	 */
	public void saveWlpzvn(JCO.ParameterList output) throws BusinessException {
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
		try{
			//读取返回值 LT_DEL
			JCO.Table outST = output.getTable("ET_VN");
			for (int i = 0; i < outST.getNumRows(); i++) {

				outST.setRow(i);
				String mblnr = outST.getString("MBLNR").toString(); //物料凭证号
				String mblno = outST.getString("ZEILE").toString(); //行项目
				String shkzg = outST.getString("SHKZG").toString(); //借贷标识
				String vnbm = outST.getString("SERNR").toString(); //vn码
				String lbbsa = outST.getString("LBBSA").toString(); //
				String lager = outST.getString("B_LAGER").toString(); //库存地点
				String werks = outST.getString("B_WERK").toString(); //工厂

				String tranu = Common.getCurrentUserId();
				if (tranu == null || tranu.equals("")){
					tranu = "SAPRFC";
				}
			
				GenlMblnrVnbm saveData = new GenlMblnrVnbmImpl();
				saveData.setMblnr(mblnr);
				saveData.setMblno(mblno);
				saveData.setVnbm(vnbm);	
				saveData.setShkzg(shkzg);
				saveData.setLbbsa(lbbsa);
				saveData.setLager(lager);
				saveData.setWerks(werks);
				saveData.setTranu(tranu);
				this.sapSrmWarehouseDao.saveEntity(saveData);
			}
			System.out.println("=====ET_VN===" + outST.getNumRows() + "=====");
		}catch(Exception e){
			SrmLog.error("获取SAP物料凭证号VN信息异常！", e);
			throw new BusinessException("获取SAP物料凭证号VN信息异常！", e.getMessage());
		}	
	}
	/**
	 * 方法描述:获取SAP物料凭证号抬头信息       
	 * 创建日期：2014/12/02
	 * @author 黄平
	 * @param  output
	 * @throws BusinessException
	 * @return void
	 */
	public void saveMkpfHead(JCO.ParameterList output) throws BusinessException {
		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
		try{
			//读取返回值 ET_MKPF
			JCO.Table outST = output.getTable("ET_MKPF");
			for (int i = 0; i < outST.getNumRows(); i++) {

				outST.setRow(i);
				String mblnr = outST.getString("MBLNR").toString(); //物料凭证号
				String mjahr = outST.getString("MJAHR").toString(); //物料凭证号年度
				String vgart = outST.getString("VGART").toString(); //交易事件
				String blart = outST.getString("BLART").toString(); //凭证类型
				String bldat = outST.getString("BLDAT").toString(); //凭证中的凭证日期
				String budat = outST.getString("BUDAT").toString(); //凭证中的过账日期
				String cpudt = outST.getString("CPUDT").toString(); //为SAP会计凭证如数日期
				String bktxt = outST.getString("BKTXT").toString(); //凭证抬头文本

				String tranu = Common.getCurrentUserId();
				if (tranu == null || tranu.equals("")){
					tranu = "SAPRFC";
				}
			
				GenlReceiptsMkpf saveData = new GenlReceiptsMkpfImpl();
				saveData.setMblnr(mblnr);
				saveData.setMjahr(mjahr);
				saveData.setVgart(vgart);
				saveData.setBlart(blart);
				saveData.setBldat(ft.parse(bldat));
				saveData.setBudat(ft.parse(budat));
				saveData.setCpudt(ft.parse(cpudt));
				saveData.setBktxt(bktxt);				
				saveData.setTranu(tranu);
				this.sapSrmWarehouseDao.saveEntity(saveData);
				
			    //删除已经下载的物料凭证清单
				Map<String,Object> conditions= new HashMap<String, Object>();
				conditions.put("mblnr", mblnr);
				conditions.put("mjahr", mjahr);
				this.sapSrmWarehouseDao.delMblnrList(conditions);
			}
			System.out.println("=====ET_MKPF===" + outST.getNumRows() + "=====");
		}catch(Exception e){
			SrmLog.error("获取SAP物料凭证号抬头异常！", e);
			throw new BusinessException("获取SAP物料凭证号抬头异常！", e.getMessage());
		}	
	}
	
	/**
	 * 方法描述:获取SAP物料凭证号行项目信息       
	 * 创建日期：2014/12/02
	 * @author 黄平
	 * @param  output
	 * @throws BusinessException
	 * @return void
	 */
	public void saveMsegList(JCO.ParameterList output) throws BusinessException {

		try{
			//读取返回值 ET_MSEG
			JCO.Table outST = output.getTable("ET_MSEG");
			for (int i = 0; i < outST.getNumRows(); i++) {

				outST.setRow(i);
				String mblnr = outST.getString("MBLNR").toString(); //物料凭证号
				String mjahr = outST.getString("MJAHR").toString(); //年度
				String zeile = outST.getString("ZEILE").toString(); //项目
				String bwart = outST.getString("BWART").toString(); //移动类型
				String matnr = outST.getString("MATNR").toString(); //物料号
				String werks = outST.getString("WERKS").toString(); //工厂
				String lgort = outST.getString("LGORT").toString(); //库存地点
				String charg = outST.getString("CHARG").toString(); //批号
				String lifnr = outST.getString("LIFNR").toString(); //供应商账户
				String shkzg = outST.getString("SHKZG").toString(); //借方/贷方标识
				String waers = outST.getString("WAERS").toString(); //货币码
				String menge = outST.getString("MENGE").toString(); //数量
				String meins = outST.getString("MEINS").toString(); //基本计量单位
				String erfmg = outST.getString("ERFMG").toString(); //数量
				String erfme = outST.getString("ERFME").toString(); //基本计量单位
				String ebeln = outST.getString("EBELN").toString(); //采购订单编号
				String ebelp = outST.getString("EBELP").toString(); //采购订单项目编号
				String lfbja = outST.getString("LFBJA").toString(); //参考凭证的会计年度
				String lfbnr = outST.getString("LFBNR").toString(); //参考凭证号
				String lfpos = outST.getString("LFPOS").toString(); //参考凭证项目
				String sjahr = outST.getString("SJAHR").toString(); //物料凭证年度
				String smbln = outST.getString("SMBLN").toString(); //物料凭证编号
				String smblp = outST.getString("SMBLP").toString(); //物料凭证项目
				String bukrs = outST.getString("BUKRS").toString(); //公司代码
				String dmbtr = outST.getString("DMBTR").toString(); //本位币金额
				String grund = outST.getString("GRUND").toString(); //移动原因
				String sgtxt = outST.getString("SGTXT").toString(); //项目文本
			
				GenlReceiptsMseg saveData = new GenlReceiptsMsegImpl();
				saveData.setMblnr(mblnr);
				saveData.setMjahr(mjahr);
				saveData.setZeile(zeile);
				saveData.setBwart(bwart);
				saveData.setMatnr(matnr);
				saveData.setWerks(werks);
				saveData.setLgort(lgort);
				saveData.setCharg(charg);
				saveData.setLifnr(lifnr);
				saveData.setShkzg(shkzg);
				saveData.setWaers(waers);
				saveData.setMenge(menge);
				saveData.setMeins(meins);
				saveData.setErfmg(erfmg);
				saveData.setErfme(erfme);
				saveData.setEbeln(ebeln);
				saveData.setEbelp(ebelp);
				saveData.setLfbja(lfbja);
				saveData.setLfbnr(lfbnr);
				saveData.setLfpos(lfpos);
				saveData.setSjahr(sjahr);
				saveData.setSmbln(smbln);
				saveData.setSmblp(smblp);
				saveData.setBukrs(bukrs);
				saveData.setDmbtr(dmbtr);
				saveData.setGrund(grund);
				saveData.setSgtxt(sgtxt);
				this.sapSrmWarehouseDao.saveEntity(saveData);
				
			}
			System.out.println("=====ET_MSEG===" + outST.getNumRows() + "=====");
		}catch(Exception e){
			SrmLog.error("获取SAP物料凭证号行项目信息异常！", e);
			throw new BusinessException("获取SAP物料凭证号行项目信息异常！", e.getMessage());
		}	
	}

	public SapSrmWarehouseDao getSapSrmWarehouseDao() {
		return sapSrmWarehouseDao;
	}

	public void setSapSrmWarehouseDao(SapSrmWarehouseDao sapSrmWarehouseDao) {
		this.sapSrmWarehouseDao = sapSrmWarehouseDao;
	}

}
