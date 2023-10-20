package com.zoomlion.hjsrm.frame.tools.tag;

import java.io.IOException;
import java.util.List;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.BodyTagSupport;

import com.eos.data.datacontext.DataContextManager;
import com.eos.data.datacontext.IMUODataContext;
import com.eos.data.datacontext.IUserObject;
import com.eos.server.dict.DictEntry;
import com.eos.server.dict.DictManager;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.data.tools.Tools.EosDictEntry;
import com.zoomlion.hjsrm.frame.auth.loader.DictCacheManager;
/***
 * **************************************************
 * 描    述：  查询数据字典  把查询到的结果集形成javascript的数组 存放在页面中
 * 			 操作员读取的数据字段只能读该操作员的数据归属 以及以上的数据归属数据可和系统级数据：
 * 			 例如  .1.2  为汉口  汉口数据归属的操作员可以读取 .1(武汉),.2(汉口)  0（系统级的数据）。  .1 为武汉  可读武汉以及系统级的数据  0为系统级 可以读取系统级的数据
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class DictTag4JSArray extends BodyTagSupport {
	
	private static final long serialVersionUID = 1L;
	
	private String property = null;    // 数组名称 默认以该值加上"DictData"形成数组名称
	
	private String filterField = "dictid";   //过滤字段：默认值为dictid。可以为：（dictid，filter）
	
	private String dictTypeId = null;     // 如果有指定dictTypeId值  则以dictTypeId为字典类型。否则认为property为字典类型。
	
	private String filterOp = null;  //过滤类型：业务字典取值时过滤用操作符，有下面几种： 	=, !=, >, >=, <, <=, in, !in, between, !between, like, !like, match, !match 
	
	private String filterStr = null;  //过滤条件：于构造过滤条件的过滤字符串，只用filterField字段进行过滤。

	private String filter = null;     //暂时无用字段
	
	private boolean locale = true;   //是否调用其他机构字典数据
	
	private String dataorgid = null;	//	数据隔离
	
	private boolean byGroup = false;
	
	public int doStartTag() throws JspException {
		
		if(dictTypeId==null || dictTypeId.equals("")){
			dictTypeId=property; // 如果有指定dictTypeId值  则以dictTypeId为字典类型。否则认为property为字典类型。
		}
		if(!filterField.equalsIgnoreCase("dictid")){
			filterField="filter1";//只有两种：（dictid，filter1） 不是dictid  就设置为filter1
		}
		// 获取业务字典对象
		List<EosDictEntry> types = null;
		if ((filterOp != null) && (filterStr != null)&& (filterField != null)) { //填了过滤操作 则过滤
			try {
				types = DictCacheManager.getDictEntries(dictTypeId, filterOp, filterField,filterStr);
			} catch (RuntimeException e) {
				//如果报错 则认为查询结果为空（报错原因可能为 该字典；类型的filter1为空）
				types=null;
			}
		} else {
			types = DictCacheManager.getDictEntries(dictTypeId);
		}
		String dataOrgSeq;
		try {
			IMUODataContext muo = DataContextManager.current().getMUODataContext();
			IUserObject user = muo.getUserObject();
			dataOrgSeq=(String)user.getAttributes().get("dataorgseq");
			int userOrgid = Integer.parseInt(String.valueOf(user.getAttributes().get("dataorgid")));;
			if(dataOrgSeq==null)dataOrgSeq=".0.";
			JspWriter out = pageContext.getOut();
			String st = "";
			String nt = "";
			st += "<script type='text/javascript'>";
			st +="var " + property + "= [";
			if(types!=null && types.size()>0){
				//迭代部分
				//System.out.println("DICTSIZE:"+types.size());
				for (int i = 0; i < types.size(); i++) {
					EosDictEntry d = types.get(i);
					//如果不是管理员，过滤参数
				//	System.out.println(userOrgid+"|"+d.getFilter2());
					if(!"0".equals(dataorgid)){
						//不调用系统级数据
						if(!locale){
							if(userOrgid !=d.getDataorgid()){
								continue;
							}
						}else{							 
							if(d.getDataorgid()!=0&& dataOrgSeq.indexOf("."+d.getDataorgid()+".") <0){
								//不为系统级数据  并且  该字典值的数据归属没有出现在当前操作员的dataorgseq中
								continue;
							}
						}
					}
					
					nt +="{";
					nt +=" DICTID : '" + d.getDictid() + "',";
					if(byGroup == true){//是否分组
						nt +=" GROUP : '" + d.getFilter1() + "',";
					}
					nt +=" DICTNAME :  '" + d.getDictname()+ "'";
					nt +="}";
					nt +=",";
					
				}
			}
			if(!nt.equals("")){
				nt = nt.substring(0, nt.length()-1);
			}
			st = st+nt;
			st +="]";
			st +="</script>";
			//System.out.println(st);
			out.print(st);

		} catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return super.doStartTag();
	}

	public String getProperty() {
		return property;
	}

	public void setProperty(String property) {
		this.property = property;
	}

	public String getDictTypeId() {
		return dictTypeId;
	}

	public void setDictTypeId(String dictTypeId) {
		this.dictTypeId = dictTypeId;
	}

	public String getFilter() {
		return filter;
	}

	public void setFilter(String filter) {
		this.filter = filter;
	}

	public String getFilterField() {
		return filterField;
	}

	public void setFilterField(String filterField) {
		this.filterField = filterField;
	}

	public String getFilterOp() {
		return filterOp;
	}

	public void setFilterOp(String filterOp) {
		this.filterOp = filterOp;
	}

	public String getFilterStr() {
		return filterStr;
	}

	public void setFilterStr(String filterStr) {
		this.filterStr = filterStr;
	}


	
	public boolean isLocale() {
		return locale;
	}

	public void setLocale(boolean locale) {
		this.locale = locale;
	}

	public String getDataorgid() {
		return dataorgid;
	}

	public void setDataorgid(String dataorgid) {
		this.dataorgid = dataorgid;
	}

	public boolean isByGroup() {
		return byGroup;
	}

	public void setByGroup(boolean byGroup) {
		this.byGroup = byGroup;
	}

	

}
