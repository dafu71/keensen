package com.zoomlion.hjsrm.frame.tools.tag;

import java.io.IOException;
import java.util.List;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.BodyTagSupport;

import com.eos.server.dict.DictEntry;
import com.eos.server.dict.DictManager;
/**
 * **************************************************
 * 描    述：  业务字典Ext标签类
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class ExtjsTag extends BodyTagSupport {
	
	private static final long serialVersionUID = 1L;
	
	private String property = null;

	private String filter = null;

	private String locale = null;

	private int level = 0;

	private String filterField = "dictid";

	private String dictTypeId = null;

	private String filterOp = null;

	private String filterStr = null;
	
	/**
	 * 方法描述: 如果有指定dictTypeId值  则以dictTypeId为字典类型。否则认为property为字典类型
	 * @author 侯杰
	 * @return 
	 * @return IUserObject
	 */
	public int doStartTag() throws JspException {
		if(dictTypeId==null || dictTypeId.equals("")){
			dictTypeId=property;
		}
		// 获取业务字典对象
		List<DictEntry> types = null;
		if ((filterOp != null) && (filterStr != null)) {
			types = DictManager.getDictEntries(dictTypeId, filterOp, filterField, filterStr);
		} else if (level != 0) {
			types = DictManager.getDictEntries(dictTypeId, level);
		} else if ((filterOp != null) && (filterStr != null) && (level != 0)) {
			types = DictManager.getDictEntries(dictTypeId, filterOp, filterField, filterStr, level);
		} else {
			types = DictManager.getDictEntries(dictTypeId);
		}
		try {
			JspWriter out = pageContext.getOut();
			out.println("<script type='text/javascript'>");
			out.println("var " + property + "DictData= [");
			// 迭代部分
			for (int i = 0; i < types.size(); i++) {
				DictEntry d = types.get(i);
				out.println("{");
				out.println(" DICTID : '" + d.getDictId() + "',");
				out.println(" DICTNAME :  '" + d.getDictName() + "'");
				out.print("}");
				if (types.size() != (i + 1)) {
					out.println(",");
				}
			}
			out.println("]");
			out.println("</script>");
		} catch (IOException e) {
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

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public String getLocale() {
		return locale;
	}

	public void setLocale(String locale) {
		this.locale = locale;
	}

}
