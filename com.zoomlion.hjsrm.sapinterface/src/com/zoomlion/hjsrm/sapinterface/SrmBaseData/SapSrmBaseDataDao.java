package com.zoomlion.hjsrm.sapinterface.SrmBaseData;

import com.eos.system.exception.EOSRuntimeException;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseCompanyT001;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseFactoryT001w;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024e;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina;
public class SapSrmBaseDataDao extends BaseDao {
		
	/**
	 * 方法描述: 保存公司代码
	 * 创建日期： 2014/11/12
	 * @author 黄平
	 * @param BaseCompanyT001
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void saveCompanyT0011(BaseCompanyT001 baseCompanyT001) throws EOSRuntimeException {
		this.saveEntity(baseCompanyT001);
	}
	
	/**
	 * 方法描述: 保存工厂/分支机构
	 * 创建日期： 2014/11/12
	 * @author 黄平
	 * @param BaseFactoryT001w
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void saveFactoryT001w(BaseFactoryT001w baseFactoryT001w) throws EOSRuntimeException {
		this.saveEntity(baseFactoryT001w);
	}
	
	/**
	 * 方法描述: 保存SAP采购组织数据（T024E）信息
	 * 创建日期： 2014/11/12
	 * @author 黄平
	 * @param BasePurchaseT024e
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void savePurchaseT024e(BasePurchaseT024e basePurchaseT024e) throws EOSRuntimeException{
		this.saveEntity(basePurchaseT024e);
	}
	
	/**
	 * 方法描述: 保存SAP采购组数据（T024）信息
	 * 创建日期： 2014/11/12
	 * @author 黄平
	 * @param BasePurchaseT024
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void savePurchaseT024(BasePurchaseT024 basePurchaseT024) throws EOSRuntimeException{
		this.saveEntity(basePurchaseT024);
	}
	
	public void saveDatasMbew(BaseMaterialMbew baseMaterialMbew) throws EOSRuntimeException{
		this.saveEntity(baseMaterialMbew);
	}
	public void saveDatasEina(BasePurchaseEina basePurchaseEina) throws EOSRuntimeException{
		this.saveEntity(basePurchaseEina);
	}
	

}
