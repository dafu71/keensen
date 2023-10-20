package com.zoomlion.hjsrm.report;

import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import commonj.sdo.DataObject;

public class MblnrreportDao extends BaseDao {
	public DataObject[] queryMblnrreport(Map condition, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.report.report.queryMblnrreport", pageCond,
				condition);
	}

	public DataObject[] queryEbelnreport(Map condition, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.report.report.queryEbelnreport", pageCond,
				condition);
	}

	public DataObject[] queryEbelnreportdaochu(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.report.report.queryEbelnreport", condition);
	}

	public DataObject[] queryMblnrreportdaochu(Map condition) throws Exception {
		return this.queryByNamedSql(DataObject.class,
				"com.zoomlion.hjsrm.report.report.queryMblnrreport", condition);
	}
	
	public DataObject[] querycgzqreport(Map paramObj, PageCond pageCond)
			throws Exception {
		return this.queryByNamedSqlWithPage(DataObject.class,
				"com.zoomlion.hjsrm.report.report.queryCgzqreport",
				pageCond, paramObj);
	}
	public DataObject[] querycgzqreportdaochu(Map paramObj)
	     throws Exception {
         return this.queryByNamedSql(DataObject.class,
		         "com.zoomlion.hjsrm.report.report.queryCgzqreport",
		          paramObj);
    }
	public DataObject[] querydprkreport(Map paramObj)
          throws Exception {
           return this.queryByNamedSql(DataObject.class,
	               "com.zoomlion.hjsrm.report.report.querydprkreport",
	                 paramObj);
   }
	public DataObject[] querycgrkreport(Map paramObj)
    throws Exception {
     return this.queryByNamedSql(DataObject.class,
             "com.zoomlion.hjsrm.report.report.querycgrkreport",
               paramObj);
   }
}
