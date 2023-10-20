package com.zoomlion.hjsrm.supply.manager.supply;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.eos.system.exception.EOSRuntimeException;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyData;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyTtel;


import commonj.sdo.DataObject;

public class FormalSupplyManagerDao extends BaseDao{
	
	/**
	 * 方法描述: 查询正式供应商信息
	 * 创建日期： 2014/11/18
	 * @author 黄平
	 * @param condition
	 * @param pageCond
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] querySupplyManager(Map condition,PageCond pageCond)throws Exception{
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.supply.manager.supply.srmsupplymgr.querySupplyManager",pageCond,condition);
	}
	
	/**
	 * 方法描述: 查询供应商联系人信息
	 * 创建日期： 2014/11/20
	 * @author 黄平
	 * @param condition
	 * @param pageCond
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] querySupplyTel(Map condition,PageCond pageCond)throws Exception{
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.supply.manager.supply.srmsupplymgr.querySupplyTel",pageCond,condition);
	}
	
	/**
	 * 方法描述: 保存供应商数据联系人(SRM加载信息)
	 * 创建日期： 2014/11/22
	 * @author 黄平
	 * @param genlSupplyTtel
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void saveSupplyTtel(GenlSupplyTtel genlSupplyTtel) throws EOSRuntimeException {
		this.saveEntity(genlSupplyTtel);
	}
	
	/**
	 * 方法描述: 保存供应商数据(SRM加载信息)
	 * 创建日期： 2014/11/22
	 * @author 黄平
	 * @param genlSupplyTtel
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void saveSypplyinfo(GenlSupplyData genlSupplyData) throws EOSRuntimeException {
		this.saveEntity(genlSupplyData);
	}
	
	/**
	 * 方法描述: 查询正式供应商主供物资类别信息
	 * 创建日期： 2014/11/24
	 * @author 黄平
	 * @param condition
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] querySupplyMaterial(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.supply.manager.supply.srmsupplymgr.querySupplyMaterial",condition);
	}
	
	/**
	 * 方法描述: 查询产品类别大类信息
	 * 创建日期： 2015/08/27
	 * @author 刘鑫
	 * @param condition
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] querycpflpzcxdl(Map condition,PageCond pageCond)throws Exception{
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.supply.manager.supply.cpflqd.querycpflpzcxdl",pageCond,condition);
	}
	/**
	 * 方法描述: 查询产品类别中小类信息
	 * 创建日期： 2015/08/31
	 * @author 刘鑫
	 * @param condition
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] querycpflpzcxzxl(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.supply.manager.supply.cpflqd.querycpflpzcxdl",condition);
	}
	/**
	 * 方法描述: 产品清单下载模版
	 * 创建日期： 2015/08/31
	 * @author 刘鑫
	 * @param condition
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] querycpqdwhcxxzMb(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.supply.manager.supply.cpflqd.querycpqdwhcxxzMb",condition);
	}
	/**
	 * 方法描述: 查询供应商
	 * 创建日期： 2015/09/8
	 * @author 刘鑫
	 * @param condition
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryname1(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.supply.manager.supply.cpflqd.queryname1",condition);
	}
	/**
	 * 方法描述: 删除中类时删除小类
	 * 创建日期： 2015/08/31
	 * @author 刘鑫
	 * @param condition
	 * @throws Exception 
	 */
	public void deletecpflxl(Map condition) {
		this.executeNamedSql(
				"com.zoomlion.hjsrm.supply.manager.supply.cpflqd.deletecpflxl",
				condition);
	}
	
	/**
	 * 方法描述: 删除中类时删除小类
	 * 创建日期： 2015/08/31
	 * @author 刘鑫
	 * @param condition
	 * @throws Exception 
	 */
	public void deletecpfldl(Map condition) {
		this.executeNamedSql(
				"com.zoomlion.hjsrm.supply.manager.supply.cpflqd.deletecpfldl",
				condition);
	}
	
	/**
	 * 方法描述: 查询产品清单
	 * 创建日期： 2015/09/01
	 * @author 刘鑫
	 * @param condition
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] querycpqdwhcx(Map condition,PageCond pageCond)throws Exception{
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.supply.manager.supply.cpflqd.querycpqdwhcx",pageCond,condition);
	}
	
	/**
	 * 方法描述: 查询产品清单导出
	 * 创建日期： 2015/09/06
	 * @author 刘鑫
	 * @param condition
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] querycpqdwhcxdaochu(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.supply.manager.supply.cpflqd.querycpqdwhcx",condition);
	}
	/**
	 * 方法描述: 查询合格供应商名录
	 * 创建日期： 2016/03/18
	 * @author 刘鑫
	 * @param condition
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] queryhgsupplyml(Map condition,PageCond pageCond)throws Exception{
		return this.queryByNamedSqlWithPage(DataObject.class, "com.zoomlion.hjsrm.supply.manager.supply.srmsupplymgr.queryHgsupply",pageCond,condition);
	}
	
	/**
	 * 方法描述: 字典校验
	 * 创建日期： 2016/03/21
	 * @author 刘鑫
	 * @param condition
	 * @throws Exception 
	 * @return DataObject[]
	 */
	public DataObject[] querydictjy(Map condition)throws Exception{
		return this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.supply.manager.supply.srmsupplymgr.dictjy",condition);
	}

}
