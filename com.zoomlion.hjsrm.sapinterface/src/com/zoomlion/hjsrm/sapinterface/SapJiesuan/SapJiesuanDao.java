package com.zoomlion.hjsrm.sapinterface.SapJiesuan;

import java.util.Map;

import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead;
import com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList;

import commonj.sdo.DataObject;

public class SapJiesuanDao extends BaseDao {
	
	/**
	 * 方法描述: 查询结算抬头数据
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public GenlInvoiceHead[] queryJiesuanHead(Map paramObj) throws Exception {
		return this.queryByNamedSql(GenlInvoiceHead.class,
				"com.zoomlion.hjsrm.sapinterface.SapJiesuan.sapjiesuan.queryJiesuanHead",
				paramObj);
	}
	
	/**
	 * 方法描述: 查询结算行项目数据
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public GenlInvoiceList[] queryJiesuanList(Map paramObj) throws Exception {
		return this.queryByNamedSql(GenlInvoiceList.class,
				"com.zoomlion.hjsrm.sapinterface.SapJiesuan.sapjiesuan.queryJiesuanList",
				paramObj);
	}

}
