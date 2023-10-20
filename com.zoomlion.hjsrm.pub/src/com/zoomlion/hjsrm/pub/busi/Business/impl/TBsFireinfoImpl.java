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
import com.zoomlion.hjsrm.pub.busi.Business.TBsFireinfo;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getPlaninfopkid <em>Planinfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getWorklistinfopkid <em>Worklistinfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getWorkitemid <em>Workitemid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getBusitype <em>Busitype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getFiredesc <em>Firedesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getFiredate <em>Firedate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getFireconclusion <em>Fireconclusion</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getCockcount <em>Cockcount</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getCreateorgid <em>Createorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getFireoptr <em>Fireoptr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getFirename <em>Firename</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getFiredepartment <em>Firedepartment</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getMeterdate <em>Meterdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getSecurityid <em>Securityid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getMeterinfopkid <em>Meterinfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getBallvalvecount <em>Ballvalvecount</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getYdcf <em>Ydcf</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getGydcf <em>Gydcf</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getTtbj <em>Ttbj</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getTtbjsl <em>Ttbjsl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getGlqxh <em>Glqxh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getGyglq <em>Gyglq</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getTyqxh <em>Tyqxh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getGytyq <em>Gytyq</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsFireinfoImpl#getRhfs <em>Rhfs</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TBsFireinfo;
 */

public class TBsFireinfoImpl extends ExtendedDataObjectImpl implements TBsFireinfo {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_PLANINFOPKID = 1;
	public final static int INDEX_WORKLISTINFOPKID = 2;
	public final static int INDEX_WORKITEMID = 3;
	public final static int INDEX_BUSITYPE = 4;
	public final static int INDEX_USERID = 5;
	public final static int INDEX_FIREDESC = 6;
	public final static int INDEX_FIREDATE = 7;
	public final static int INDEX_FIRECONCLUSION = 8;
	public final static int INDEX_COCKCOUNT = 9;
	public final static int INDEX_REMARK = 10;
	public final static int INDEX_STAND = 11;
	public final static int INDEX_CREATEBY = 12;
	public final static int INDEX_CREATEORGID = 13;
	public final static int INDEX_CREATETIME = 14;
	public final static int INDEX_MODIFYBY = 15;
	public final static int INDEX_UPDATETIME = 16;
	public final static int INDEX_DATAORGID = 17;
	public final static int INDEX_DELFLAG = 18;
	public final static int INDEX_FIREOPTR = 19;
	public final static int INDEX_FIRENAME = 20;
	public final static int INDEX_FIREDEPARTMENT = 21;
	public final static int INDEX_METERDATE = 22;
	public final static int INDEX_SECURITYID = 23;
	public final static int INDEX_METERINFOPKID = 24;
	public final static int INDEX_BALLVALVECOUNT = 25;
	public final static int INDEX_YDCF = 26;
	public final static int INDEX_GYDCF = 27;
	public final static int INDEX_TTBJ = 28;
	public final static int INDEX_TTBJSL = 29;
	public final static int INDEX_GLQXH = 30;
	public final static int INDEX_GYGLQ = 31;
	public final static int INDEX_TYQXH = 32;
	public final static int INDEX_GYTYQ = 33;
	public final static int INDEX_RHFS = 34;
	public final static int SDO_PROPERTY_COUNT = 35;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsFireinfoImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsFireinfoImpl(Type type) {
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
	 * Returns the value of the '<em><b>Userid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Userid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Userid</em>' attribute.
	 * @see #setUserid(java.lang.String)
	 */
	public String getUserid() {
		return DataUtil.toString(super.getByIndex(INDEX_USERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUserid <em>Userid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Userid</em>' attribute.
	 * @see #getUserid()
	 */
	public void setUserid(String userid) {
		super.setByIndex(INDEX_USERID, userid);
	}

	/**
	 * Returns the value of the '<em><b>Firedesc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Firedesc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Firedesc</em>' attribute.
	 * @see #setFiredesc(java.lang.String)
	 */
	public String getFiredesc() {
		return DataUtil.toString(super.getByIndex(INDEX_FIREDESC, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFiredesc <em>Firedesc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Firedesc</em>' attribute.
	 * @see #getFiredesc()
	 */
	public void setFiredesc(String firedesc) {
		super.setByIndex(INDEX_FIREDESC, firedesc);
	}

	/**
	 * Returns the value of the '<em><b>Firedate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Firedate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Firedate</em>' attribute.
	 * @see #setFiredate(java.util.Date)
	 */
	public Date getFiredate() {
		return DataUtil.toDate(super.getByIndex(INDEX_FIREDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFiredate <em>Firedate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Firedate</em>' attribute.
	 * @see #getFiredate()
	 */
	public void setFiredate(Date firedate) {
		super.setByIndex(INDEX_FIREDATE, firedate);
	}

	/**
	 * Returns the value of the '<em><b>Fireconclusion</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Fireconclusion</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Fireconclusion</em>' attribute.
	 * @see #setFireconclusion(java.lang.String)
	 */
	public String getFireconclusion() {
		return DataUtil.toString(super.getByIndex(INDEX_FIRECONCLUSION, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFireconclusion <em>Fireconclusion</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Fireconclusion</em>' attribute.
	 * @see #getFireconclusion()
	 */
	public void setFireconclusion(String fireconclusion) {
		super.setByIndex(INDEX_FIRECONCLUSION, fireconclusion);
	}

	/**
	 * Returns the value of the '<em><b>Cockcount</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Cockcount</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Cockcount</em>' attribute.
	 * @see #setCockcount(int)
	 */
	public int getCockcount() {
		return DataUtil.toInt(super.getByIndex(INDEX_COCKCOUNT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCockcount <em>Cockcount</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cockcount</em>' attribute.
	 * @see #getCockcount()
	 */
	public void setCockcount(int cockcount) {
		super.setByIndex(INDEX_COCKCOUNT, cockcount);
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
	 * Returns the value of the '<em><b>Fireoptr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Fireoptr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Fireoptr</em>' attribute.
	 * @see #setFireoptr(java.lang.String)
	 */
	public String getFireoptr() {
		return DataUtil.toString(super.getByIndex(INDEX_FIREOPTR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFireoptr <em>Fireoptr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Fireoptr</em>' attribute.
	 * @see #getFireoptr()
	 */
	public void setFireoptr(String fireoptr) {
		super.setByIndex(INDEX_FIREOPTR, fireoptr);
	}

	/**
	 * Returns the value of the '<em><b>Firename</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Firename</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Firename</em>' attribute.
	 * @see #setFirename(java.lang.String)
	 */
	public String getFirename() {
		return DataUtil.toString(super.getByIndex(INDEX_FIRENAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFirename <em>Firename</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Firename</em>' attribute.
	 * @see #getFirename()
	 */
	public void setFirename(String firename) {
		super.setByIndex(INDEX_FIRENAME, firename);
	}

	/**
	 * Returns the value of the '<em><b>Firedepartment</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Firedepartment</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Firedepartment</em>' attribute.
	 * @see #setFiredepartment(java.lang.String)
	 */
	public String getFiredepartment() {
		return DataUtil.toString(super.getByIndex(INDEX_FIREDEPARTMENT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFiredepartment <em>Firedepartment</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Firedepartment</em>' attribute.
	 * @see #getFiredepartment()
	 */
	public void setFiredepartment(String firedepartment) {
		super.setByIndex(INDEX_FIREDEPARTMENT, firedepartment);
	}

	/**
	 * Returns the value of the '<em><b>Meterdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterdate</em>' attribute.
	 * @see #setMeterdate(java.util.Date)
	 */
	public Date getMeterdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_METERDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMeterdate <em>Meterdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterdate</em>' attribute.
	 * @see #getMeterdate()
	 */
	public void setMeterdate(Date meterdate) {
		super.setByIndex(INDEX_METERDATE, meterdate);
	}

	/**
	 * Returns the value of the '<em><b>Securityid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Securityid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Securityid</em>' attribute.
	 * @see #setSecurityid(java.lang.String)
	 */
	public String getSecurityid() {
		return DataUtil.toString(super.getByIndex(INDEX_SECURITYID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSecurityid <em>Securityid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Securityid</em>' attribute.
	 * @see #getSecurityid()
	 */
	public void setSecurityid(String securityid) {
		super.setByIndex(INDEX_SECURITYID, securityid);
	}

	/**
	 * Returns the value of the '<em><b>Meterinfopkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterinfopkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterinfopkid</em>' attribute.
	 * @see #setMeterinfopkid(java.lang.String)
	 */
	public String getMeterinfopkid() {
		return DataUtil.toString(super.getByIndex(INDEX_METERINFOPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMeterinfopkid <em>Meterinfopkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterinfopkid</em>' attribute.
	 * @see #getMeterinfopkid()
	 */
	public void setMeterinfopkid(String meterinfopkid) {
		super.setByIndex(INDEX_METERINFOPKID, meterinfopkid);
	}

	/**
	 * Returns the value of the '<em><b>Ballvalvecount</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ballvalvecount</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ballvalvecount</em>' attribute.
	 * @see #setBallvalvecount(int)
	 */
	public int getBallvalvecount() {
		return DataUtil.toInt(super.getByIndex(INDEX_BALLVALVECOUNT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBallvalvecount <em>Ballvalvecount</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ballvalvecount</em>' attribute.
	 * @see #getBallvalvecount()
	 */
	public void setBallvalvecount(int ballvalvecount) {
		super.setByIndex(INDEX_BALLVALVECOUNT, ballvalvecount);
	}

	/**
	 * Returns the value of the '<em><b>Ydcf</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ydcf</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ydcf</em>' attribute.
	 * @see #setYdcf(java.lang.String)
	 */
	public String getYdcf() {
		return DataUtil.toString(super.getByIndex(INDEX_YDCF, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getYdcf <em>Ydcf</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ydcf</em>' attribute.
	 * @see #getYdcf()
	 */
	public void setYdcf(String ydcf) {
		super.setByIndex(INDEX_YDCF, ydcf);
	}

	/**
	 * Returns the value of the '<em><b>Gydcf</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gydcf</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gydcf</em>' attribute.
	 * @see #setGydcf(java.lang.String)
	 */
	public String getGydcf() {
		return DataUtil.toString(super.getByIndex(INDEX_GYDCF, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGydcf <em>Gydcf</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gydcf</em>' attribute.
	 * @see #getGydcf()
	 */
	public void setGydcf(String gydcf) {
		super.setByIndex(INDEX_GYDCF, gydcf);
	}

	/**
	 * Returns the value of the '<em><b>Ttbj</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ttbj</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ttbj</em>' attribute.
	 * @see #setTtbj(java.lang.String)
	 */
	public String getTtbj() {
		return DataUtil.toString(super.getByIndex(INDEX_TTBJ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTtbj <em>Ttbj</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ttbj</em>' attribute.
	 * @see #getTtbj()
	 */
	public void setTtbj(String ttbj) {
		super.setByIndex(INDEX_TTBJ, ttbj);
	}

	/**
	 * Returns the value of the '<em><b>Ttbjsl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ttbjsl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ttbjsl</em>' attribute.
	 * @see #setTtbjsl(int)
	 */
	public int getTtbjsl() {
		return DataUtil.toInt(super.getByIndex(INDEX_TTBJSL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTtbjsl <em>Ttbjsl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ttbjsl</em>' attribute.
	 * @see #getTtbjsl()
	 */
	public void setTtbjsl(int ttbjsl) {
		super.setByIndex(INDEX_TTBJSL, ttbjsl);
	}

	/**
	 * Returns the value of the '<em><b>Glqxh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Glqxh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Glqxh</em>' attribute.
	 * @see #setGlqxh(java.lang.String)
	 */
	public String getGlqxh() {
		return DataUtil.toString(super.getByIndex(INDEX_GLQXH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGlqxh <em>Glqxh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Glqxh</em>' attribute.
	 * @see #getGlqxh()
	 */
	public void setGlqxh(String glqxh) {
		super.setByIndex(INDEX_GLQXH, glqxh);
	}

	/**
	 * Returns the value of the '<em><b>Gyglq</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gyglq</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gyglq</em>' attribute.
	 * @see #setGyglq(java.lang.String)
	 */
	public String getGyglq() {
		return DataUtil.toString(super.getByIndex(INDEX_GYGLQ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGyglq <em>Gyglq</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gyglq</em>' attribute.
	 * @see #getGyglq()
	 */
	public void setGyglq(String gyglq) {
		super.setByIndex(INDEX_GYGLQ, gyglq);
	}

	/**
	 * Returns the value of the '<em><b>Tyqxh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Tyqxh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Tyqxh</em>' attribute.
	 * @see #setTyqxh(java.lang.String)
	 */
	public String getTyqxh() {
		return DataUtil.toString(super.getByIndex(INDEX_TYQXH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTyqxh <em>Tyqxh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Tyqxh</em>' attribute.
	 * @see #getTyqxh()
	 */
	public void setTyqxh(String tyqxh) {
		super.setByIndex(INDEX_TYQXH, tyqxh);
	}

	/**
	 * Returns the value of the '<em><b>Gytyq</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gytyq</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gytyq</em>' attribute.
	 * @see #setGytyq(java.lang.String)
	 */
	public String getGytyq() {
		return DataUtil.toString(super.getByIndex(INDEX_GYTYQ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGytyq <em>Gytyq</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gytyq</em>' attribute.
	 * @see #getGytyq()
	 */
	public void setGytyq(String gytyq) {
		super.setByIndex(INDEX_GYTYQ, gytyq);
	}

	/**
	 * Returns the value of the '<em><b>Rhfs</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Rhfs</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Rhfs</em>' attribute.
	 * @see #setRhfs(java.lang.String)
	 */
	public String getRhfs() {
		return DataUtil.toString(super.getByIndex(INDEX_RHFS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRhfs <em>Rhfs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Rhfs</em>' attribute.
	 * @see #getRhfs()
	 */
	public void setRhfs(String rhfs) {
		super.setByIndex(INDEX_RHFS, rhfs);
	}


}