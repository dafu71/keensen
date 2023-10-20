package com.zoomlion.hjsrm.sapinterface.SrmWarehouse;

import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlSaveMseg;

public class SapSrmWarehouseDao extends BaseDao{
	/**
	 * 方法描述: 查询需要从SAP获取的物料凭证
	 * 创建日期： 2014/12/03
	 * @author 黄平
	 * @param condition
	 * @throws Exception 
	 * @return GenlSaveMseg[]
	 */
	public GenlSaveMseg[] queryMblnrList(Map condition)throws Exception{
		return this.queryByNamedSql(GenlSaveMseg.class, "com.zoomlion.hjsrm.sapinterface.SrmWarehouse.warehousesql.queryMblnrList",condition);
	}
	
	/**
	 * 方法描述: 删除需要从SAP获取的物料凭证
	 * 创建日期： 2014/12/03
	 * @author 黄平
	 * @param condition
	 * @throws Exception 
	 * @return void
	 */
	public void delMblnrList(Map<String, Object> condition)throws Exception{
		this.executeNamedSql("com.zoomlion.hjsrm.sapinterface.SrmWarehouse.warehousesql.delMblnrList",condition);
	}
	/**
	 * 方法描述: 删除对应Vn号
	 * 创建日期： 2016/8/11
	 * @author 刘鑫
	 * @param condition
	 * @throws Exception 
	 * @return void
	 */
	public void delVnbm(Map<String, Object> condition)throws Exception{
		this.executeNamedSql("com.zoomlion.hjsrm.sapinterface.SrmWarehouse.warehousesql.delVnbm",condition);
	}

}
