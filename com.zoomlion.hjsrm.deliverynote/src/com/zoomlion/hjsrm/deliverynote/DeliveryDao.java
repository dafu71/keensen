package com.zoomlion.hjsrm.deliverynote;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

public class DeliveryDao extends BaseDao {

	/**
	 * 方法描述: 查询已确认订货单
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryOrders(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.queryOrders",
				pageCond, paramObj);
	}
	/**
	 * 方法描述: 查询已确认带VN号管理的送货单
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryVnOrders(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.queryVnOrders",
				pageCond, paramObj);
	}
	/**
	 * 方法描述: 导出已确认订货单
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryOrdersdaochu(Map paramObj)
			throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.queryOrders",
				 paramObj);
	}
	/**
	 * 方法描述: 查询打印次数
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryPrintNum(Map paramObj)
			throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.queryPrintNum",
				 paramObj);
	}
	/**
	 * 方法描述: 查询条码打印机300的供应商
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] query300lifnr(Map paramObj)
			throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.query300lifnr",
				 paramObj);
	}
	/**
	 * 方法描述: 查询待生成送货单数据
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryOrder4Create(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.queryOrder4Create",
				paramObj);
	}

	/**
	 * 方法描述: 查询待删除送货单数据
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryNote4Delete(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.queryNote4Delete",
				pageCond, paramObj);
	}
	/**
	 * 方法描述: 查询待删除VN送货单数据
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryVNNote4Delete(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.queryVnNote4Delete",
				pageCond, paramObj);
	}
	/**
	 * 方法描述: 查询物料打印条码
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] querymatnrbarcode(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.queryMatnrbarcode",
				pageCond, paramObj);
	}
	
	/**
	 * 方法描述: 查询待删除送货单导出数据
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryNote4Deletedaochu(Map paramObj)
			throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.queryNote4Delete",
				 paramObj);
	}

	/**
	 * 方法描述: 查询送货单明细数量
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryvndetailrows(Map paramObj)
			throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.vndetailrows",
				 paramObj);
	}

	/**
	 * 方法描述: 查询待删除送货单数据
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryNote4Delete(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.queryNote4Delete",
				paramObj);
	}
	
	/**
	 * 方法描述: 查询待删除送货单数据
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryNote5Delete(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.queryNote5Delete",
				paramObj);
	}

	/**
	 * 方法描述: 查询入库数量
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryStorage(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.queryStorage",
				paramObj);
	}
	/**
	 * 方法描述: 送货单删除是否有质检校验
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] shddeleteinspectjy(Map paramObj) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.shddeleteinspectjy",
				paramObj);
	}

	/**
	 * 方法描述: 查询送货单
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryNotes(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.queryNotes",
				pageCond, paramObj);
	}
	/**
	 * 方法描述: 查询使用vn号的送货单 用于vn维护
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryvnNotes(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.queryvnNotes",
				pageCond, paramObj);
	}
	/**
	 * 方法描述: 查询使用vn号的送货单明细 用于vn维护
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryvnDetail(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.queryVndetail",
				pageCond, paramObj);
	}
	/**
	 * 方法描述: 导出要输入的vn号的明细数据
	 * 
	 * @param paramObj
	 * @param pageCond
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryvnDetaildaochu(Map paramObj)
			throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.queryVndetaildaochu",paramObj);
	}
	/**
	 * 方法描述: 查询送货单
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryNotes2(Map paramObj) throws Exception {
		return this
				.queryByNamedSql(DataObject.class,
						"com.zoomlion.hjsrm.deliverynote.delivery.queryNotes2",
						paramObj);
	}

	/**
	 * 方法描述: 查询生成条码送货单
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryNotes4Barcode(Map paramObj) throws Exception {
		return this
				.queryByNamedSql(DataObject.class,
						"com.zoomlion.hjsrm.deliverynote.delivery.queryNotes4Barcode",
						paramObj);
	}
	
	
	/**
	 * 方法描述: 送货数量校验
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] checkAmount(Map paramObj) throws Exception {
		return this
				.queryByNamedSql(DataObject.class,
						"com.zoomlion.hjsrm.deliverynote.delivery.checkAmount",
						paramObj);
	}
	/**
	 * 方法描述: 查询条码打印机300的供应商
	 * 
	 * @param paramObj
	 * @return
	 * @throws Exception
	 */
	public DataObject[] querystorevnbm(Map paramObj)
			throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.deliverynote.delivery.querystorevnbm",
				 paramObj);
	}

}
