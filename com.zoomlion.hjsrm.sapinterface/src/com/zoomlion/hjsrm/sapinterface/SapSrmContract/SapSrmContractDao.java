package com.zoomlion.hjsrm.sapinterface.SapSrmContract;

import com.eos.system.exception.EOSRuntimeException;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16;
import com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractEkko;
import com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractEkpo;
import com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp;
public class SapSrmContractDao extends BaseDao{
	
	/**
	 * 方法描述: 保存合同抬头（EKKO）信息
	 * 创建日期： 2014/12/08
	 * @author 黄平
	 * @param genlContractEkko
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void saveCOHead(GenlContractEkko genlContractEkko) throws EOSRuntimeException {
		this.saveEntity(genlContractEkko);
	}
	
	/**
	 * 方法描述: 保存合同行项目（EKPO）信息
	 * 创建日期： 2014/12/08
	 * @author 黄平
	 * @param genlContractEkpo
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void saveCOItem(GenlContractEkpo genlContractEkpo) throws EOSRuntimeException {
		this.saveEntity(genlContractEkpo);
	}
	
	/**
	 * 方法描述: 保存合同A016信息
	 * 创建日期： 2014/12/08
	 * @author 黄平
	 * @param genlContractA016
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void saveCOA016(GenlContractAo16 genlContractA016) throws EOSRuntimeException {
		this.saveEntity(genlContractA016);
	}
	
	/**
	 * 方法描述: 保存合同Konp信息
	 * 创建日期： 2014/12/08
	 * @author 黄平
	 * @param genlContractKonp
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void saveCOKonp(GenlContractKonp genlContractKonp) throws EOSRuntimeException {
		this.saveEntity(genlContractKonp);
	}
	
}
