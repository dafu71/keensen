package com.zoomlion.hjsrm.sapinterface.SapMaterialStock;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import com.sap.mw.jco.IFunctionTemplate;
import com.sap.mw.jco.JCO;
import com.zoomlion.hjsrm.clib.dao.BaseBean;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.sapinterface.db.SapConfig;
import commonj.sdo.DataObject;
import java.util.ArrayList;


public class SapMaterialStockBean extends BaseBean{
	private SapMaterialStockDao sapMaterialStockDao;

	
	/**
	 * 方法描述: 获取供应商编号
	 * 创建日期： 2014/12/16
	 * @author 刘鑫
	 * @throws Exception 
	 * @return  String
	 */	
@SuppressWarnings("unchecked")
public String getlifnr() throws Exception {
	String lifnr = Common.getCurrentUseObject().getAttributes().get(
	"lifnr").toString();
			if(null != lifnr && !"".equals(lifnr)){
			return lifnr;
			}else{
			return null;
			}
			
}
/**
 * 方法描述: 验证查找物料号
 * 创建日期： 2014/12/16
 * @author 刘鑫
 * @param strMatnr
 * @param werks
 * @param strMaktx
 * @throws BusinessException 
 * @return  DataObject[]
 */
@SuppressWarnings("unchecked")
	public DataObject[] getMaterial(String strMatnr,String werks,String strMaktx )throws BusinessException{
		DataObject[] exportObjs = null;
		//String[] str = new String[];
		try {
			Map condition = new HashMap();
			try {
				if (strMatnr != null
						&& !strMatnr.equals("")) {
					String liu2 = strMatnr.replace("\r", "");
					String liu1 = liu2.replace("\t", "");
					String liu = liu1.replace("\n", ",");
					String[] tmp = liu.split(",");
					String b = "";
					String v = "";
					int a = tmp.length;
					if(a==0){
						return exportObjs;
					}
					if(a==1){
						 v = tmp[0]; 
					}
					if(a==2){
						 v = tmp[0]+"','"+tmp[1];
					}
					if(a>2){
					for (int i=0;i <a-1;i++){
						  b = b+tmp[i]+"','";
					     }
					      v = b + tmp[a-1]; 
					     }	
					String t = "'"+ v +"'";
					condition.put("matnr", t);
				}
				if (strMaktx != null
						&& !strMaktx.equals("")) {
					condition.put("maktx", strMaktx.toString());
				}
				if (werks != null
						&& !werks.equals("")) {
					condition.put("werks", werks.toString());
				}
			} catch (Exception e) {
				SrmLog.error("载入物料号异常!", e);
				throw new BusinessException("载入物料号异常!", e.getMessage());
			}
			return sapMaterialStockDao.queryMaterial(condition);
		} catch (Exception e) {
			SrmLog.error("载入物料号异常!", e);
			throw new BusinessException("载入物料号异常!", e.getMessage());
		}
	}
	
	/**
	 * 方法描述: 获取即时库存
	 * 创建日期： 2014/12/15
	 * @author 黄平
	 * @param werks
	 * @param lifnr
	 * @param lt
	 * @throws BusinessException 
	 * @return  ArrayList
	 */
	public ArrayList<HashMap> getMaterialStockList(String werks,String lifnr,DataObject[] lt ) throws BusinessException{	
		
		DataObject[] exportObjs = null;
		ArrayList<HashMap> list = new ArrayList<HashMap>();
		try{	
			//属性设置
			Properties logonProperties = SapConfig.getlogonProperties();
			JCO.Client myConnection = JCO.createClient(logonProperties);
			//获得一个到SAP系统的连接
			myConnection.connect();
			if (myConnection != null && myConnection.isAlive()) {
				System.out.println("连接成功!");
				//要调用的SAP函数名称
				String strFunc = "ZHJSRM0012";//查询物料即时库存
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
				JCO.ParameterList outputTable = function.getTableParameterList();		
				JCO.Table mbinfo = inputTable.getTable("ET_MATNR");
				if (werks == null || werks == ""){
					werks = "3000";
				}
				input.setValue(werks, "IC_WERKS");
				if (lifnr != null && !lifnr.equals("")){
					input.setValue(lifnr, "IC_LIFNR");
				}
				
				for(int i = 0;i < lt.length; i++){
				  if (lt[i] != null ){
					String matnr = lt[i].getString("MATNR").toString();
					mbinfo.appendRow();
					mbinfo.setValue(matnr, "MATNR");
				  }	
				}

				myConnection.execute(function);
				JCO.Table outST = outputTable.getTable("ET_MARD");
				for (int i = 0; i < outST.getNumRows(); i++) {

					outST.setRow(i);

					String iwerks = outST.getString("WERKS").toString(); //工厂
					String matnr = outST.getString("MATNR").toString(); //物料号
					String maktx = outST.getString("MAKTX").toString(); //物料描述
					String lgort = outST.getString("LGORT").toString(); //库存地点	
					String labst = outST.getString("LABST").toString(); //可用库存	
					String speme = outST.getString("SPEME").toString(); //冻结库存
					String meins = outST.getString("MEINS").toString(); //单位	
						
					HashMap<String, Object> listObj = new HashMap<String, Object>();

					listObj.put("werks",iwerks);
					listObj.put("matnr",matnr);
					listObj.put("maktx",maktx);
					listObj.put("lgort",lgort);
					listObj.put("labst",labst);
					listObj.put("speme",speme);
					listObj.put("meins",meins);
				    list.add(listObj);
					}
				
				//断开连接
				myConnection.disconnect();
				System.out.println(list.size());
				//exportObjs = new DataObject[list.size()];
				//list.toArray(exportObjs);
			}
		}catch(Exception e){
			SrmLog.error("获取即时库存异常！", e);
			throw new BusinessException("获取即时库存异常！", e.getMessage());  	
		}
		return list;
	}

	public SapMaterialStockDao getSapMaterialStockDao() {
		return sapMaterialStockDao;
	}

	public void setSapMaterialStockDao(SapMaterialStockDao sapMaterialStockDao) {
		this.sapMaterialStockDao = sapMaterialStockDao;
	}

}
