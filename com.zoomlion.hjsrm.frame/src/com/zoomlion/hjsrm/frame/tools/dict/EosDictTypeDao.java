package com.zoomlion.hjsrm.frame.tools.dict;

import java.util.HashMap;
import java.util.Map;

import com.eos.foundation.PageCond;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.data.tools.Tools.EosDictType;
/**
 * **************************************************
 * 描    述：  实现字典类型维护功能
 * @author   陈今伟
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-28 陈今伟 创建文件
 * **************************************************
 */
public class EosDictTypeDao extends BaseDao {

	/**
	 * 方法描述: 查询字典类型
	 * @author 陈今伟
	 * @param query
	 * @param pageCond
	 * @return
	 * @throws Exception 
	 * @return EosDictType[]
	 */
	@SuppressWarnings({ "unused", "unchecked" })
	public EosDictType[] queryEosDictType(EosDictType query, PageCond pageCond)throws Exception {
		String dataorgid = Common.getCurrentUserDataOrgId();
		String dataorgsqe = Common.getCurrentUserDataOrgSeq();
		Map condtion = new HashMap();
		if(query.getDicttypeid()!=null){
			condtion.put("dicttypeid", query.getDicttypeid());
		}
		if(query.getDicttypename()!=null){
			condtion.put("dicttypename", query.getDicttypename());
		}
		if(query.get("dictid")!=null){
			condtion.put("dictid", query.get("dictid"));
		}
		if(query.get("dictname")!=null){
			condtion.put("dictname", query.get("dictname"));
		}
		return this.queryByNamedSqlWithPage(EosDictType.class, "com.zoomlion.hjsrm.frame.tools.dict.dict.queryDictTypes", pageCond, condtion);
	}
	
	/**
	 * 方法描述: 加载字典类型
	 * @author 陈今伟
	 * @param dicttype
	 * @return
	 * @throws Exception 
	 * @return EosDictType
	 */
	public EosDictType queryEosDictType(EosDictType dicttype) throws Exception {
		this.expandEntity(dicttype);
		return dicttype;
	}
	
	/**
	 * 方法描述: 更新字典类型
	 * @author 陈今伟
	 * @param eosdicttype
	 * @param opt
	 * @throws Exception 
	 * @return void
	 */
	public void updateEosDictType(EosDictType eosdicttype, String opt)throws Exception {
		this.updateEntity(eosdicttype);
	}
}
