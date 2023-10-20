package com.zoomlion.hjsrm.inspect;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

public class InspectDao extends BaseDao {

	public DataObject[] queryinspectwtwh(Map condition, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectwtwh",
				pageCond, condition);
	}

	public DataObject[] queryinspectlbwh(Map condition, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectlbwh",
				pageCond, condition);
	}

	public DataObject[] queryinspectcjqjrecord(Map condition, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectzjqjrecord",
						pageCond, condition);
	}

	public DataObject[] queryinspectnotzjlb(Map condition, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectnotzjlb",
						pageCond, condition);
	}

	public DataObject[] queryinspectnotzjlbdaochu(Map condition)
			throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectnotzjlb",
						condition);
	}

	public DataObject[] getinspectzjcjrecordmx(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.getinspectzjcjrecordmx",
						condition);
	}

	public DataObject[] getinspectzjqjrecordmx(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.getinspectzjqjrecordmx",
						condition);
	}

	public DataObject[] queryinspectqjzb(Map condition, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectqjbz",
				pageCond, condition);
	}

	public void deleteInspectlbwh(Map condition) {
		this
				.executeNamedSql(
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.deleteInspectlbwh",
						condition);
	}

	public void delInspectcjdetail(Map condition) {
		this
				.executeNamedSql(
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.delInspectcjdetail",
						condition);
	}

	public void delInspectqjdetail(Map condition) {
		this
				.executeNamedSql(
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.delInspectqjdetail",
						condition);
	}

	public void delInspectcjdetail1(Map condition) {
		this
				.executeNamedSql(
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.delInspectcjdetail1",
						condition);
	}

	public void delInspectqjdetail1(Map condition) {
		this
				.executeNamedSql(
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.delInspectqjdetail1",
						condition);
	}

	public void delInspectcjnote(Map condition) {
		this.executeNamedSql(
				"com.zoomlion.hjsrm.inspect.queryinspectwtwh.delInspectcjnote",
				condition);
	}

	public void delInspectqjnote(Map condition) {
		this.executeNamedSql(
				"com.zoomlion.hjsrm.inspect.queryinspectwtwh.delInspectqjnote",
				condition);
	}

	public void deleteInspectqjbzmx(Map condition) {
		this
				.executeNamedSql(
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.deleteInspectqjbzmx",
						condition);
	}

	public DataObject[] queryinspectlbwhyz(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectlbwhyz",
						condition);
	}

	public DataObject[] queryinspectwtwh2(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectwtwh2",
						condition);
	}

	public DataObject[] queryinspectqjbzmx(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectqjbzmx",
						condition);
	}

	public DataObject[] queryinspectwltmyz(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectwltmyz",
						condition);
	}

	public DataObject[] querypurchaenotedetail(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.querypurchaenotedetail",
						condition);
	}

	public DataObject[] inspectshrkshujuyz(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectrc",
				condition);
	}

	public DataObject[] queryInspectrc(Map condition, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectrc",
				pageCond, condition);
	}

	public DataObject[] queryinspectqjbzxz(Map condition, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectqjbzmx",
						pageCond, condition);
	}

	public DataObject[] queryinspectwltmsb(Map condition, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectwltmsb",
						pageCond, condition);
	}

	public DataObject[] queryinspectwltmsb2(Map condition, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectwltmsb2",
						pageCond, condition);
	}

	public DataObject[] queryinspectwxlljynote(Map condition, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectwxlljynote",
						pageCond, condition);
	}

	public DataObject[] queryinspectwglljynote(Map condition, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectwglljynote",
						pageCond, condition);
	}

	public DataObject[] queryinspectsbtknote(Map condition, PageCond pageCond)
			throws Exception {
		return this
				.queryByNamedSqlWithPage(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectsbtknote",
						pageCond, condition);
	}

	public DataObject[] queryInspectsbtknotedaochu(Map condition)
			throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectsbtknote",
						condition);
	}

	public DataObject[] queryinspectwglljynotedaochu(Map condition)
			throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectwglljynotedaochu",
						condition);
	}

	public DataObject[] queryinspectwxlljynotedaochu(Map condition)
			throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.queryinspectwxlljynotedaochu",
						condition);
	}

	public DataObject[] querystorematnr(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.inspect.queryinspectwtwh.querystorematnr",
				condition);
	}
	public DataObject[] querystorematnrgzxt(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.inspect.queryinspectwtwh.querystorematnrgzxt",
				condition);
	}

	public DataObject[] querystorelifnr(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.inspect.queryinspectwtwh.querystorelifnr",
				condition);
	}
	public DataObject[] querystoregzxspx(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.inspect.queryinspectwtwh.querystoregzxspx",
				condition);
	}

	public DataObject[] querystorezjlb(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.inspect.queryinspectwtwh.querystorezjlb",
				condition);
	}

	public DataObject[] querywggzxtstore(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.inspect.queryinspectwtwh.querywggzxtstore",
				condition);
	}

	public DataObject[] querywggzjgstore(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.inspect.queryinspectwtwh.querywggzjgstore",
				condition);
	}

	public DataObject[] querystoreqjlx(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.inspect.queryinspectwtwh.querystoreqjlx",
				condition);
	}

	public DataObject[] querystorewtsx(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.inspect.queryinspectwtwh.querystorewtsx",
				condition);
	}

	public DataObject[] loadinspectwxlljydetail(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.loadinspectwxlljydetail",
						condition);
	}
	public DataObject[] loadinspectwglljydetail(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.loadinspectwglljydetail",
						condition);
	}

	public void delInspectwllldetail1(Map condition) {
		this
				.executeNamedSql(
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.delInspectwllldetail1",
						condition);
	}
	public void delInspectwglldetail1(Map condition) {
		this
				.executeNamedSql(
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.delInspectwglldetail1",
						condition);
	}
	public DataObject[] querysbtkjyzatwrt(Map condition) throws Exception {
		return this
				.queryByNamedSql(
						DataObject.class,
						"com.zoomlion.hjsrm.inspect.queryinspectwtwh.querysbtkjyzatwrt",
						condition);
	}
}
