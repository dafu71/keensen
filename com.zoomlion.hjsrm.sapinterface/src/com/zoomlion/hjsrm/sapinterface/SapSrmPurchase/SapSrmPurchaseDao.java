package com.zoomlion.hjsrm.sapinterface.SapSrmPurchase;

import java.util.Map;

import com.eos.system.exception.EOSRuntimeException;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseEket;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseEkkn;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseEkko;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseEkpo;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseKonv;

import commonj.sdo.DataObject;

public class SapSrmPurchaseDao extends BaseDao{
	
	/**
	 * 方法描述: 保存采购订单抬头（EKKO）信息
	 * 创建日期： 2014/11/14
	 * @author 黄平
	 * @param genlPurchaseEkko
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void savePOHead(GenlPurchaseEkko genlPurchaseEkko) throws EOSRuntimeException {
		this.saveEntity(genlPurchaseEkko);
	}
	
	/**
	 * 方法描述: 保存采购订单行项目（EKPO）信息
	 * 创建日期： 2014/11/14
	 * @author 黄平
	 * @param genlPurchaseEkpo
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void savePOItem(GenlPurchaseEkpo genlPurchaseEkpo) throws EOSRuntimeException {
		this.saveEntity(genlPurchaseEkpo);
	}
	
	/**
	 * 方法描述: 保存采购订单账户设置(EKKN)信息
	 * 创建日期： 2014/11/14
	 * @author 黄平
	 * @param genlPurchaseEkkn
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void savePOEkkn(GenlPurchaseEkkn genlPurchaseEkkn) throws EOSRuntimeException {
		this.saveEntity(genlPurchaseEkkn);
	}
	
	/**
	 * 方法描述: 保存采购订单账户设置(EKKN)信息
	 * 创建日期： 2014/11/14
	 * @author 黄平
	 * @param genlPurchaseEket
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void savePOEket(GenlPurchaseEket genlPurchaseEket) throws EOSRuntimeException {
		this.saveEntity(genlPurchaseEket);
	}
	
	/**
	 * 方法描述: 保存合同KONV信息
	 * 创建日期： 2014/12/08
	 * @author 黄平
	 * @param genlContractKonv
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void savePOKonv(GenlPurchaseKonv genlPurchaseKonv) throws EOSRuntimeException {
		this.saveEntity(genlPurchaseKonv);
	}
	
	/**
	 * 新增采购申请汇总
	 * 
	 * @param condition
	 * @throws Exception
	 */
	public void addApplyData(Map condition) throws Exception {
		this
				.executeNamedSql(
						"com.zoomlion.hjsrm.purchase.query.queryPurchase.addApplyData",
						condition);
	}
}
