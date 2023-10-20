package com.zoomlion.hjsrm.kcgl.kcgl;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveData;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveZcpcxZleib;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveZdajiZleib;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveZleibLifnr;
import commonj.sdo.DataObject;

/**
 * ************************************************** 描 述： 实现采购收货入库功能
 * 
 * @author 刘鑫 **************************************************
 */
public class KcglkcglDao extends BaseDao {

	/**
	 * 方法描述: 查询数据
	 * 
	 * @author 刘鑫
	 */
	public DataObject[] queryKcglshrkManager(Map condition, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.querykcglshrk",
				pageCond, condition);
	}

	public DataObject[] queryKcglshrkshujuyz(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.querykcglshrkshujuyz",
				condition);
	}

	public DataObject[] queryKcglwlpzcxManager(Map condition, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.querykcglwlpzcx",
				pageCond, condition);
	}

	public DataObject[] queryKcglckthManager(Map condition, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.querykcglckth",
				pageCond, condition);
	}

	public DataObject[] queryKcglwxdjkcztwhManager(Map condition)
			throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.querykcglwxdjkcztwh",
				condition);
	}

	public DataObject[] queryKcglwxdjkcztwhnewManager(Map condition)
			throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.querykcglwxdjkcztwhnew",
				condition);
	}

	public GenlReserveData[] queryReserveData(GenlReserveData templatea)
			throws Exception {
		return this.queryByNamedSql(GenlReserveData.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.queryReserveData",
				templatea);
	}

	public GenlReserveZdajiZleib[] queryReserveZdajiZleib(
			GenlReserveZdajiZleib templateb) throws Exception {
		return this.queryByNamedSql(GenlReserveZdajiZleib.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.queryReserveZdajiZleib",
				templateb);
	}

	public GenlReserveZcpcxZleib[] queryReserveZcpcxZleib(
			GenlReserveZcpcxZleib templatec) throws Exception {
		return this.queryByNamedSql(GenlReserveZcpcxZleib.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.queryReserveZcpcxZleib",
				templatec);
	}

	public GenlReserveZleibLifnr[] queryReserveZleibLifnr(
			GenlReserveZleibLifnr templated) throws Exception {
		return this.queryByNamedSql(GenlReserveZleibLifnr.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.queryReserveZleibLifnr",
				templated);
	}

	public DataObject[] querycxlbqd(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.querycxlbqd", condition);
	}

	public DataObject[] shdshrkyz(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.shdshrkyz", condition);
	}

	public DataObject[] checkStoreMagAuth(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.checkStoreMagAuth",
				condition);
	}

	public DataObject[] wlpzcxdelyz(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.wlpzcxdelyz", condition);
	}

	public DataObject[] querywxdjcxqd(Map condition, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.querywxdjcxqd",
				pageCond, condition);
	}

	public DataObject[] querywxdjqd(Map condition, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.querywxdjqd", pageCond,
				condition);
	}

	public DataObject[] querymatnr(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.querymatnr", condition);
	}

	public void deleteWxdjqd(Map condition) {
		this
				.executeNamedSql(
						"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.deleteWxdjqd",
						condition);
	}

	public void delvncode(Map condition) {
		this
				.executeNamedSql(
						"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.deletevncode",
						condition);
	}

	public DataObject[] querywxdjwhyz(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.wxdjwhdryz", condition);
	}

	public DataObject[] querywxdjwhcx(Map condition, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.querykcglwxdjkcztwhcx",
				pageCond, condition);
	}

	public DataObject[] querywxdjwhcxsum(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.kcglkcgl.querykcglwxdjkcztwhcx",
				condition);
	}

	/**
	 * 查询采购计划
	 * 
	 * @param condition
	 * @return
	 * @throws Exception
	 */
	public DataObject[] queryWhole(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.kcgl.kcgl.stockmanage.queryWhole",
				condition);
	}

	/**
	 * 新增采购计划
	 * 
	 * @param condition
	 * @throws Exception
	 */
	public void addPlanlist(Map condition) throws Exception {
		this
				.executeNamedSql(
						"com.zoomlion.hjsrm.kcgl.kcgl.stockmanage.addPlanlist",
						condition);
	}
}
