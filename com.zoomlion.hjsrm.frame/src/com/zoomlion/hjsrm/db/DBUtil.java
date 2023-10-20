package com.zoomlion.hjsrm.db;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.eos.spring.DASDataSource;

public class DBUtil {
	
	// 默认数据源名
	public static final String DEFAULT_DATASOURCE = "default";
	
	public static final Map<String, DASDataSource> dss = new HashMap();
	
	/**
	 * 方法描述: 使用命名SQL 返回指定类型的数组
	 * @author 陈今伟
	 * @return 
	 * @return DASDataSource
	 */
	public static DASDataSource getDataSource(){		
		if(dss!=null&&dss.get(DEFAULT_DATASOURCE)!=null){
			return dss.get(DEFAULT_DATASOURCE);
		}else{
			DASDataSource ds = new DASDataSource();
			ds.setDataSourceName(DEFAULT_DATASOURCE);
			dss.put(DEFAULT_DATASOURCE,ds);
			return ds;
		}
	}
	
	public static DASDataSource getDataSource(String dsname){		
		if(dss!=null&&dss.get(dsname)!=null){
			return dss.get(dsname);
		}else{
			DASDataSource ds = new DASDataSource();
			ds.setDataSourceName(dsname);
			dss.put(dsname,ds);
			return ds;
		}
	}
}
