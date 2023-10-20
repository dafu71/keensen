package com.zoomlion.hjsrm.frame.auth.loader;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.eos.common.cache.CacheFactory;
import com.eos.common.cache.CacheRuntimeException;
import com.eos.common.cache.ICache;
import com.eos.common.cache.ICacheLoader;
import com.eos.server.dict.impl.FilterExpressionUtil;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.data.tools.Tools.EosDictEntry;

import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  业务字典缓存管理器,实现对业务字典缓存的调用和更新
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-5-28 侯杰 创建文件
 * **************************************************
 */
public class DictCacheManager {

	public static final String CACHE_INSTANCE = Common.SRM_BIZDICT_CACHE;

	public static ICache getCache() {
		ICache icache = CacheFactory.getInstance().findCache(CACHE_INSTANCE);
		if (icache == null) {
			throw new CacheRuntimeException("not found cache \"" + CACHE_INSTANCE + "\"");
		}
		return icache;
	}
	
	/**
	 * 方法描述: 清除对应角色的缓存
	 * @author 陈今伟
	 * @param key 
	 * @return void
	 */
	public static void removeCache(Object key) {
		getCache().remove(key);
	}
	
	public static List<EosDictEntry> getDictEntries(String dicttypeid) {
		return (List) getCache().get(dicttypeid);
	}

	public static String getFilterValue(String filterField, EosDictEntry dict) {
	    if ((filterField == null) || (filterField.toLowerCase().equals("dictid")))
	      return dict.getDictid();
	    if (filterField.toLowerCase().equals("filter1"))
	      return dict.getFilter1();
	    if (filterField.toLowerCase().equals("filter2"))
	      return dict.getFilter2();
	    if (filterField.toLowerCase().equals("dictname")) {
	      return dict.getDictname();
	    }
	    return null;
	  }
	
	public static List getDictEntries(String dicttypeid, String filterOp, String filterField,String filterStr) {
		List dicts = (List) getCache().get(dicttypeid);
		List outlist = new ArrayList();
		if (filterOp.equals("="))
		      for (int i = 0; i < dicts.size(); i++) {
		        EosDictEntry dict = (EosDictEntry)dicts.get(i);
		        if (FilterExpressionUtil.eq(getFilterValue(filterField,dict), filterStr))
		          outlist.add(dict);
		      }
		    else if (filterOp.equals("!="))
		      for (int i = 0; i < dicts.size(); i++) {
		        EosDictEntry dict = (EosDictEntry)dicts.get(i);
		        if (FilterExpressionUtil.ne(getFilterValue(filterField,dict), filterStr))
		          outlist.add(dict);
		      }
		    else if (filterOp.equals("<"))
		      for (int i = 0; i < dicts.size(); i++) {
		        EosDictEntry dict = (EosDictEntry)dicts.get(i);
		        if (FilterExpressionUtil.lt(getFilterValue(filterField,dict), filterStr))
		          outlist.add(dict);
		      }
		    else if (filterOp.equals("<="))
		      for (int i = 0; i < dicts.size(); i++) {
		        EosDictEntry dict = (EosDictEntry)dicts.get(i);
		        if (FilterExpressionUtil.le(getFilterValue(filterField,dict), filterStr))
		          outlist.add(dict);
		      }
		    else if (filterOp.equals(">"))
		      for (int i = 0; i < dicts.size(); i++) {
		        EosDictEntry dict = (EosDictEntry)dicts.get(i);
		        if (FilterExpressionUtil.gt(getFilterValue(filterField,dict), filterStr))
		          outlist.add(dict);
		      }
		    else if (filterOp.equals(">="))
		      for (int i = 0; i < dicts.size(); i++) {
		        EosDictEntry dict = (EosDictEntry)dicts.get(i);
		        if (FilterExpressionUtil.ge(getFilterValue(filterField,dict), filterStr))
		          outlist.add(dict);
		      }
		    else if (filterOp.toLowerCase().equals("between"))
		      for (int i = 0; i < dicts.size(); i++) {
		        EosDictEntry dict = (EosDictEntry)dicts.get(i);
		        if (FilterExpressionUtil.between(getFilterValue(filterField,dict), filterStr))
		          outlist.add(dict);
		      }
		    else if (filterOp.toLowerCase().equals("!between"))
		      for (int i = 0; i < dicts.size(); i++) {
		        EosDictEntry dict = (EosDictEntry)dicts.get(i);
		        if (FilterExpressionUtil.notBetween(getFilterValue(filterField,dict), filterStr))
		          outlist.add(dict);
		      }
		    else if (filterOp.toLowerCase().equals("in"))
		      for (int i = 0; i < dicts.size(); i++) {
		        EosDictEntry dict = (EosDictEntry)dicts.get(i);
		        if (FilterExpressionUtil.in(getFilterValue(filterField,dict), filterStr))
		          outlist.add(dict);
		      }
		    else if (filterOp.toLowerCase().equals("!in"))
		      for (int i = 0; i < dicts.size(); i++) {
		        EosDictEntry dict = (EosDictEntry)dicts.get(i);
		        if (FilterExpressionUtil.notIn(getFilterValue(filterField,dict), filterStr))
		          outlist.add(dict);
		      }
		    else if (filterOp.toLowerCase().equals("like"))
		      for (int i = 0; i < dicts.size(); i++) {
		        EosDictEntry dict = (EosDictEntry)dicts.get(i);
		        if (FilterExpressionUtil.like(getFilterValue(filterField,dict), filterStr))
		          outlist.add(dict);
		      }
		    else if (filterOp.toLowerCase().equals("!like"))
		      for (int i = 0; i < dicts.size(); i++) {
		        EosDictEntry dict = (EosDictEntry)dicts.get(i);
		        if (FilterExpressionUtil.notLike(getFilterValue(filterField,dict), filterStr))
		          outlist.add(dict);
		      }
		    else if (filterOp.toLowerCase().equals("match"))
		      for (int i = 0; i < dicts.size(); i++) {
		        EosDictEntry dict = (EosDictEntry)dicts.get(i);
		        if (FilterExpressionUtil.matches(getFilterValue(filterField,dict), filterStr))
		          outlist.add(dict);
		      }
		    else if (filterOp.toLowerCase().equals("!match")) {
		      for (int i = 0; i < dicts.size(); i++) {
		        EosDictEntry dict = (EosDictEntry)dicts.get(i);
		        if (FilterExpressionUtil.notMatches(getFilterValue(filterField,dict), filterStr)) {
		          outlist.add(dict);
		        }
		      }
		    }
		    return outlist;
	}
	

	@SuppressWarnings("unchecked")
	public static void clearCache() {
		getCache().clear();
		ICacheLoader loader = new DictCacheLoader();
		getCache().putAll(loader.preLoad());
	}
}
