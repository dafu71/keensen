/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.Business;

import com.eos.data.sdo.IObjectFactory;

import commonj.sdo.DataObject;
import commonj.sdo.Type;
import commonj.sdo.helper.DataFactory;
import commonj.sdo.helper.TypeHelper;

import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getWorkitemid <em>Workitemid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getBusitype <em>Busitype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getIscorrect <em>Iscorrect</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getCorrectdesc <em>Correctdesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getConclusiontype <em>Conclusiontype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getConclusionother <em>Conclusionother</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getCorrectdate <em>Correctdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getCorrectoptr <em>Correctoptr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getCorrectoptrname <em>Correctoptrname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getArchfileid <em>Archfileid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getCreateorgid <em>Createorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getPlaninfopkid <em>Planinfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getWorklistinfopkid <em>Worklistinfopkid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TBsRemakeinfo extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.Business", "TBsRemakeinfo");

	public final static IObjectFactory<TBsRemakeinfo> FACTORY = new IObjectFactory<TBsRemakeinfo>() {
		public TBsRemakeinfo create() {
			return (TBsRemakeinfo) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Pkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Pkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Pkid</em>' attribute.
	 * @see #setPkid(java.lang.String)
	 */
	public String getPkid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getPkid <em>Pkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pkid</em>' attribute.
	 * @see #getPkid()
	 */
	public void setPkid(String pkid);

	/**
	 * Returns the value of the '<em><b>Workitemid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Workitemid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Workitemid</em>' attribute.
	 * @see #setWorkitemid(long)
	 */
	public long getWorkitemid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getWorkitemid <em>Workitemid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Workitemid</em>' attribute.
	 * @see #getWorkitemid()
	 */
	public void setWorkitemid(long workitemid);

	/**
	 * Returns the value of the '<em><b>Busitype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Busitype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Busitype</em>' attribute.
	 * @see #setBusitype(java.lang.String)
	 */
	public String getBusitype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getBusitype <em>Busitype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busitype</em>' attribute.
	 * @see #getBusitype()
	 */
	public void setBusitype(String busitype);

	/**
	 * Returns the value of the '<em><b>Iscorrect</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Iscorrect</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Iscorrect</em>' attribute.
	 * @see #setIscorrect(java.lang.String)
	 */
	public String getIscorrect();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getIscorrect <em>Iscorrect</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Iscorrect</em>' attribute.
	 * @see #getIscorrect()
	 */
	public void setIscorrect(String iscorrect);

	/**
	 * Returns the value of the '<em><b>Correctdesc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Correctdesc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Correctdesc</em>' attribute.
	 * @see #setCorrectdesc(java.lang.String)
	 */
	public String getCorrectdesc();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getCorrectdesc <em>Correctdesc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Correctdesc</em>' attribute.
	 * @see #getCorrectdesc()
	 */
	public void setCorrectdesc(String correctdesc);

	/**
	 * Returns the value of the '<em><b>Conclusiontype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Conclusiontype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Conclusiontype</em>' attribute.
	 * @see #setConclusiontype(java.lang.String)
	 */
	public String getConclusiontype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getConclusiontype <em>Conclusiontype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Conclusiontype</em>' attribute.
	 * @see #getConclusiontype()
	 */
	public void setConclusiontype(String conclusiontype);

	/**
	 * Returns the value of the '<em><b>Conclusionother</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Conclusionother</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Conclusionother</em>' attribute.
	 * @see #setConclusionother(java.lang.String)
	 */
	public String getConclusionother();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getConclusionother <em>Conclusionother</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Conclusionother</em>' attribute.
	 * @see #getConclusionother()
	 */
	public void setConclusionother(String conclusionother);

	/**
	 * Returns the value of the '<em><b>Correctdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Correctdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Correctdate</em>' attribute.
	 * @see #setCorrectdate(java.util.Date)
	 */
	public Date getCorrectdate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getCorrectdate <em>Correctdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Correctdate</em>' attribute.
	 * @see #getCorrectdate()
	 */
	public void setCorrectdate(Date correctdate);

	/**
	 * Returns the value of the '<em><b>Correctoptr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Correctoptr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Correctoptr</em>' attribute.
	 * @see #setCorrectoptr(java.lang.String)
	 */
	public String getCorrectoptr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getCorrectoptr <em>Correctoptr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Correctoptr</em>' attribute.
	 * @see #getCorrectoptr()
	 */
	public void setCorrectoptr(String correctoptr);

	/**
	 * Returns the value of the '<em><b>Correctoptrname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Correctoptrname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Correctoptrname</em>' attribute.
	 * @see #setCorrectoptrname(java.lang.String)
	 */
	public String getCorrectoptrname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getCorrectoptrname <em>Correctoptrname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Correctoptrname</em>' attribute.
	 * @see #getCorrectoptrname()
	 */
	public void setCorrectoptrname(String correctoptrname);

	/**
	 * Returns the value of the '<em><b>Archfileid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Archfileid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Archfileid</em>' attribute.
	 * @see #setArchfileid(java.lang.String)
	 */
	public String getArchfileid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getArchfileid <em>Archfileid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Archfileid</em>' attribute.
	 * @see #getArchfileid()
	 */
	public void setArchfileid(String archfileid);

	/**
	 * Returns the value of the '<em><b>Remark</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Remark</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Remark</em>' attribute.
	 * @see #setRemark(java.lang.String)
	 */
	public String getRemark();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getRemark <em>Remark</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Remark</em>' attribute.
	 * @see #getRemark()
	 */
	public void setRemark(String remark);

	/**
	 * Returns the value of the '<em><b>Stand</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stand</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stand</em>' attribute.
	 * @see #setStand(java.lang.String)
	 */
	public String getStand();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand);

	/**
	 * Returns the value of the '<em><b>Createby</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createby</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createby</em>' attribute.
	 * @see #setCreateby(java.lang.String)
	 */
	public String getCreateby();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getCreateby <em>Createby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createby</em>' attribute.
	 * @see #getCreateby()
	 */
	public void setCreateby(String createby);

	/**
	 * Returns the value of the '<em><b>Createorgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createorgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createorgid</em>' attribute.
	 * @see #setCreateorgid(int)
	 */
	public int getCreateorgid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getCreateorgid <em>Createorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createorgid</em>' attribute.
	 * @see #getCreateorgid()
	 */
	public void setCreateorgid(int createorgid);

	/**
	 * Returns the value of the '<em><b>Createtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createtime</em>' attribute.
	 * @see #setCreatetime(java.util.Date)
	 */
	public Date getCreatetime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getCreatetime <em>Createtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createtime</em>' attribute.
	 * @see #getCreatetime()
	 */
	public void setCreatetime(Date createtime);

	/**
	 * Returns the value of the '<em><b>Modifyby</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifyby</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifyby</em>' attribute.
	 * @see #setModifyby(java.lang.String)
	 */
	public String getModifyby();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getModifyby <em>Modifyby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifyby</em>' attribute.
	 * @see #getModifyby()
	 */
	public void setModifyby(String modifyby);

	/**
	 * Returns the value of the '<em><b>Updatetime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Updatetime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Updatetime</em>' attribute.
	 * @see #setUpdatetime(java.util.Date)
	 */
	public Date getUpdatetime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getUpdatetime <em>Updatetime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Updatetime</em>' attribute.
	 * @see #getUpdatetime()
	 */
	public void setUpdatetime(Date updatetime);

	/**
	 * Returns the value of the '<em><b>Dataorgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Dataorgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Dataorgid</em>' attribute.
	 * @see #setDataorgid(int)
	 */
	public int getDataorgid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);

	/**
	 * Returns the value of the '<em><b>Delflag</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Delflag</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Delflag</em>' attribute.
	 * @see #setDelflag(java.lang.String)
	 */
	public String getDelflag();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getDelflag <em>Delflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Delflag</em>' attribute.
	 * @see #getDelflag()
	 */
	public void setDelflag(String delflag);

	/**
	 * Returns the value of the '<em><b>Planinfopkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Planinfopkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Planinfopkid</em>' attribute.
	 * @see #setPlaninfopkid(java.lang.String)
	 */
	public String getPlaninfopkid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getPlaninfopkid <em>Planinfopkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Planinfopkid</em>' attribute.
	 * @see #getPlaninfopkid()
	 */
	public void setPlaninfopkid(String planinfopkid);

	/**
	 * Returns the value of the '<em><b>Worklistinfopkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Worklistinfopkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Worklistinfopkid</em>' attribute.
	 * @see #setWorklistinfopkid(java.lang.String)
	 */
	public String getWorklistinfopkid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo#getWorklistinfopkid <em>Worklistinfopkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Worklistinfopkid</em>' attribute.
	 * @see #getWorklistinfopkid()
	 */
	public void setWorklistinfopkid(String worklistinfopkid);


}