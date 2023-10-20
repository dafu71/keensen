package com.zoomlion.hjsrm.sapinterface.SapMaterialStock;

import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

public class SapMaterialStockDao extends BaseDao {
	
	/**
	 * 方法描述: 查询数据
	 * @author 刘鑫
	 */
	public DataObject[] queryMaterial(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.sapinterface.SapMaterialStock.srmmaterialstock.querymaterial",condition);
	}
}
