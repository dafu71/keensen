/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.Business.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.busi.Business.TBsRemakeinfo;

import commonj.sdo.Type;

import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getWorkitemid <em>Workitemid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getBusitype <em>Busitype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getIscorrect <em>Iscorrect</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getCorrectdesc <em>Correctdesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getConclusiontype <em>Conclusiontype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getConclusionother <em>Conclusionother</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getCorrectdate <em>Correctdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getCorrectoptr <em>Correctoptr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getCorrectoptrname <em>Correctoptrname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getArchfileid <em>Archfileid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getCreateorgid <em>Createorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getPlaninfopkid <em>Planinfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRemakeinfoImpl#getWorklistinfopkid <em>Worklistinfopkid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TBsRemakeinfo;
 */

public class TBsRemakeinfoImpl extends ExtendedDataObjectImpl implements TBsRemakeinfo {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_WORKITEMID = 1;
	public final static int INDEX_BUSITYPE = 2;
	public final static int INDEX_ISCORRECT = 3;
	public final static int INDEX_CORRECTDESC = 4;
	public final static int INDEX_CONCLUSIONTYPE = 5;
	public final static int INDEX_CONCLUSIONOTHER = 6;
	public final static int INDEX_CORRECTDATE = 7;
	public final static int INDEX_CORRECTOPTR = 8;
	public final static int INDEX_CORRECTOPTRNAME = 9;
	public final static int INDEX_ARCHFILEID = 10;
	public final static int INDEX_REMARK = 11;
	public final static int INDEX_STAND = 12;
	public final static int INDEX_CREATEBY = 13;
	public final static int INDEX_CREATEORGID = 14;
	public final static int INDEX_CREATETIME = 15;
	public final static int INDEX_MODIFYBY = 16;
	public final static int INDEX_UPDATETIME = 17;
	public final static int INDEX_DATAORGID = 18;
	public final static int INDEX_DELFLAG = 19;
	public final static int INDEX_PLANINFOPKID = 20;
	public final static int INDEX_WORKLISTINFOPKID = 21;
	public final static int SDO_PROPERTY_COUNT = 22;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsRemakeinfoImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsRemakeinfoImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

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
	public String getPkid() {
		return DataUtil.toString(super.getByIndex(INDEX_PKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPkid <em>Pkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pkid</em>' attribute.
	 * @see #getPkid()
	 */
	public void setPkid(String pkid) {
		super.setByIndex(INDEX_PKID, pkid);
	}

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
	public long getWorkitemid() {
		return DataUtil.toLong(super.getByIndex(INDEX_WORKITEMID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWorkitemid <em>Workitemid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Workitemid</em>' attribute.
	 * @see #getWorkitemid()
	 */
	public void setWorkitemid(long workitemid) {
		super.setByIndex(INDEX_WORKITEMID, workitemid);
	}

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
	public String getBusitype() {
		return DataUtil.toString(super.getByIndex(INDEX_BUSITYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBusitype <em>Busitype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busitype</em>' attribute.
	 * @see #getBusitype()
	 */
	public void setBusitype(String busitype) {
		super.setByIndex(INDEX_BUSITYPE, busitype);
	}

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
	public String getIscorrect() {
		return DataUtil.toString(super.getByIndex(INDEX_ISCORRECT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIscorrect <em>Iscorrect</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Iscorrect</em>' attribute.
	 * @see #getIscorrect()
	 */
	public void setIscorrect(String iscorrect) {
		super.setByIndex(INDEX_ISCORRECT, iscorrect);
	}

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
	public String getCorrectdesc() {
		return DataUtil.toString(super.getByIndex(INDEX_CORRECTDESC, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCorrectdesc <em>Correctdesc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Correctdesc</em>' attribute.
	 * @see #getCorrectdesc()
	 */
	public void setCorrectdesc(String correctdesc) {
		super.setByIndex(INDEX_CORRECTDESC, correctdesc);
	}

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
	public String getConclusiontype() {
		return DataUtil.toString(super.getByIndex(INDEX_CONCLUSIONTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getConclusiontype <em>Conclusiontype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Conclusiontype</em>' attribute.
	 * @see #getConclusiontype()
	 */
	public void setConclusiontype(String conclusiontype) {
		super.setByIndex(INDEX_CONCLUSIONTYPE, conclusiontype);
	}

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
	public String getConclusionother() {
		return DataUtil.toString(super.getByIndex(INDEX_CONCLUSIONOTHER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getConclusionother <em>Conclusionother</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Conclusionother</em>' attribute.
	 * @see #getConclusionother()
	 */
	public void setConclusionother(String conclusionother) {
		super.setByIndex(INDEX_CONCLUSIONOTHER, conclusionother);
	}

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
	public Date getCorrectdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_CORRECTDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCorrectdate <em>Correctdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Correctdate</em>' attribute.
	 * @see #getCorrectdate()
	 */
	public void setCorrectdate(Date correctdate) {
		super.setByIndex(INDEX_CORRECTDATE, correctdate);
	}

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
	public String getCorrectoptr() {
		return DataUtil.toString(super.getByIndex(INDEX_CORRECTOPTR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCorrectoptr <em>Correctoptr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Correctoptr</em>' attribute.
	 * @see #getCorrectoptr()
	 */
	public void setCorrectoptr(String correctoptr) {
		super.setByIndex(INDEX_CORRECTOPTR, correctoptr);
	}

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
	public String getCorrectoptrname() {
		return DataUtil.toString(super.getByIndex(INDEX_CORRECTOPTRNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCorrectoptrname <em>Correctoptrname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Correctoptrname</em>' attribute.
	 * @see #getCorrectoptrname()
	 */
	public void setCorrectoptrname(String correctoptrname) {
		super.setByIndex(INDEX_CORRECTOPTRNAME, correctoptrname);
	}

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
	public String getArchfileid() {
		return DataUtil.toString(super.getByIndex(INDEX_ARCHFILEID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getArchfileid <em>Archfileid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Archfileid</em>' attribute.
	 * @see #getArchfileid()
	 */
	public void setArchfileid(String archfileid) {
		super.setByIndex(INDEX_ARCHFILEID, archfileid);
	}

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
	public String getRemark() {
		return DataUtil.toString(super.getByIndex(INDEX_REMARK, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRemark <em>Remark</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Remark</em>' attribute.
	 * @see #getRemark()
	 */
	public void setRemark(String remark) {
		super.setByIndex(INDEX_REMARK, remark);
	}

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
	public String getStand() {
		return DataUtil.toString(super.getByIndex(INDEX_STAND, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand) {
		super.setByIndex(INDEX_STAND, stand);
	}

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
	public String getCreateby() {
		return DataUtil.toString(super.getByIndex(INDEX_CREATEBY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreateby <em>Createby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createby</em>' attribute.
	 * @see #getCreateby()
	 */
	public void setCreateby(String createby) {
		super.setByIndex(INDEX_CREATEBY, createby);
	}

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
	public int getCreateorgid() {
		return DataUtil.toInt(super.getByIndex(INDEX_CREATEORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreateorgid <em>Createorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createorgid</em>' attribute.
	 * @see #getCreateorgid()
	 */
	public void setCreateorgid(int createorgid) {
		super.setByIndex(INDEX_CREATEORGID, createorgid);
	}

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
	public Date getCreatetime() {
		return DataUtil.toDate(super.getByIndex(INDEX_CREATETIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreatetime <em>Createtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createtime</em>' attribute.
	 * @see #getCreatetime()
	 */
	public void setCreatetime(Date createtime) {
		super.setByIndex(INDEX_CREATETIME, createtime);
	}

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
	public String getModifyby() {
		return DataUtil.toString(super.getByIndex(INDEX_MODIFYBY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifyby <em>Modifyby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifyby</em>' attribute.
	 * @see #getModifyby()
	 */
	public void setModifyby(String modifyby) {
		super.setByIndex(INDEX_MODIFYBY, modifyby);
	}

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
	public Date getUpdatetime() {
		return DataUtil.toDate(super.getByIndex(INDEX_UPDATETIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUpdatetime <em>Updatetime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Updatetime</em>' attribute.
	 * @see #getUpdatetime()
	 */
	public void setUpdatetime(Date updatetime) {
		super.setByIndex(INDEX_UPDATETIME, updatetime);
	}

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
	public int getDataorgid() {
		return DataUtil.toInt(super.getByIndex(INDEX_DATAORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid) {
		super.setByIndex(INDEX_DATAORGID, dataorgid);
	}

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
	public String getDelflag() {
		return DataUtil.toString(super.getByIndex(INDEX_DELFLAG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDelflag <em>Delflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Delflag</em>' attribute.
	 * @see #getDelflag()
	 */
	public void setDelflag(String delflag) {
		super.setByIndex(INDEX_DELFLAG, delflag);
	}

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
	public String getPlaninfopkid() {
		return DataUtil.toString(super.getByIndex(INDEX_PLANINFOPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPlaninfopkid <em>Planinfopkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Planinfopkid</em>' attribute.
	 * @see #getPlaninfopkid()
	 */
	public void setPlaninfopkid(String planinfopkid) {
		super.setByIndex(INDEX_PLANINFOPKID, planinfopkid);
	}

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
	public String getWorklistinfopkid() {
		return DataUtil.toString(super.getByIndex(INDEX_WORKLISTINFOPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWorklistinfopkid <em>Worklistinfopkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Worklistinfopkid</em>' attribute.
	 * @see #getWorklistinfopkid()
	 */
	public void setWorklistinfopkid(String worklistinfopkid) {
		super.setByIndex(INDEX_WORKLISTINFOPKID, worklistinfopkid);
	}


}