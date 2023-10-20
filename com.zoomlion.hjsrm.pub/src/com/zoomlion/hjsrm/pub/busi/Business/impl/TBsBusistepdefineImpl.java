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
import com.zoomlion.hjsrm.pub.busi.Business.TBsBusistepdefine;

import commonj.sdo.Type;

import java.math.BigDecimal;
import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getProcessdefinepkid <em>Processdefinepkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getOrgcode <em>Orgcode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getActivitydefid <em>Activitydefid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getActivitydefname <em>Activitydefname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getCandistr <em>Candistr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getState <em>State</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getUrglvl <em>Urglvl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getFinaldays <em>Finaldays</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getCycletype <em>Cycletype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getExtend1 <em>Extend1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getExtend2 <em>Extend2</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getExtend3 <em>Extend3</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getExtend4 <em>Extend4</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getCreateorgid <em>Createorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getEarlydays <em>Earlydays</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsBusistepdefineImpl#getEarlytype <em>Earlytype</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TBsBusistepdefine;
 */

public class TBsBusistepdefineImpl extends ExtendedDataObjectImpl implements TBsBusistepdefine {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_PROCESSDEFINEPKID = 1;
	public final static int INDEX_ORGCODE = 2;
	public final static int INDEX_ACTIVITYDEFID = 3;
	public final static int INDEX_ACTIVITYDEFNAME = 4;
	public final static int INDEX_CANDISTR = 5;
	public final static int INDEX_STATE = 6;
	public final static int INDEX_URGLVL = 7;
	public final static int INDEX_FINALDAYS = 8;
	public final static int INDEX_CYCLETYPE = 9;
	public final static int INDEX_EXTEND1 = 10;
	public final static int INDEX_EXTEND2 = 11;
	public final static int INDEX_EXTEND3 = 12;
	public final static int INDEX_EXTEND4 = 13;
	public final static int INDEX_REMARK = 14;
	public final static int INDEX_CREATEBY = 15;
	public final static int INDEX_CREATEORGID = 16;
	public final static int INDEX_CREATETIME = 17;
	public final static int INDEX_MODIFYBY = 18;
	public final static int INDEX_UPDATETIME = 19;
	public final static int INDEX_DATAORGID = 20;
	public final static int INDEX_DELFLAG = 21;
	public final static int INDEX_EARLYDAYS = 22;
	public final static int INDEX_EARLYTYPE = 23;
	public final static int SDO_PROPERTY_COUNT = 24;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsBusistepdefineImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsBusistepdefineImpl(Type type) {
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
	 * Returns the value of the '<em><b>Processdefinepkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Processdefinepkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Processdefinepkid</em>' attribute.
	 * @see #setProcessdefinepkid(java.lang.String)
	 */
	public String getProcessdefinepkid() {
		return DataUtil.toString(super.getByIndex(INDEX_PROCESSDEFINEPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getProcessdefinepkid <em>Processdefinepkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processdefinepkid</em>' attribute.
	 * @see #getProcessdefinepkid()
	 */
	public void setProcessdefinepkid(String processdefinepkid) {
		super.setByIndex(INDEX_PROCESSDEFINEPKID, processdefinepkid);
	}

	/**
	 * Returns the value of the '<em><b>Orgcode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Orgcode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Orgcode</em>' attribute.
	 * @see #setOrgcode(java.lang.String)
	 */
	public String getOrgcode() {
		return DataUtil.toString(super.getByIndex(INDEX_ORGCODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOrgcode <em>Orgcode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgcode</em>' attribute.
	 * @see #getOrgcode()
	 */
	public void setOrgcode(String orgcode) {
		super.setByIndex(INDEX_ORGCODE, orgcode);
	}

	/**
	 * Returns the value of the '<em><b>Activitydefid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Activitydefid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Activitydefid</em>' attribute.
	 * @see #setActivitydefid(java.lang.String)
	 */
	public String getActivitydefid() {
		return DataUtil.toString(super.getByIndex(INDEX_ACTIVITYDEFID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getActivitydefid <em>Activitydefid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Activitydefid</em>' attribute.
	 * @see #getActivitydefid()
	 */
	public void setActivitydefid(String activitydefid) {
		super.setByIndex(INDEX_ACTIVITYDEFID, activitydefid);
	}

	/**
	 * Returns the value of the '<em><b>Activitydefname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Activitydefname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Activitydefname</em>' attribute.
	 * @see #setActivitydefname(java.lang.String)
	 */
	public String getActivitydefname() {
		return DataUtil.toString(super.getByIndex(INDEX_ACTIVITYDEFNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getActivitydefname <em>Activitydefname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Activitydefname</em>' attribute.
	 * @see #getActivitydefname()
	 */
	public void setActivitydefname(String activitydefname) {
		super.setByIndex(INDEX_ACTIVITYDEFNAME, activitydefname);
	}

	/**
	 * Returns the value of the '<em><b>Candistr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Candistr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Candistr</em>' attribute.
	 * @see #setCandistr(java.lang.String)
	 */
	public String getCandistr() {
		return DataUtil.toString(super.getByIndex(INDEX_CANDISTR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCandistr <em>Candistr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Candistr</em>' attribute.
	 * @see #getCandistr()
	 */
	public void setCandistr(String candistr) {
		super.setByIndex(INDEX_CANDISTR, candistr);
	}

	/**
	 * Returns the value of the '<em><b>State</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>State</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>State</em>' attribute.
	 * @see #setState(java.lang.String)
	 */
	public String getState() {
		return DataUtil.toString(super.getByIndex(INDEX_STATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getState <em>State</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>State</em>' attribute.
	 * @see #getState()
	 */
	public void setState(String state) {
		super.setByIndex(INDEX_STATE, state);
	}

	/**
	 * Returns the value of the '<em><b>Urglvl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Urglvl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Urglvl</em>' attribute.
	 * @see #setUrglvl(java.lang.String)
	 */
	public String getUrglvl() {
		return DataUtil.toString(super.getByIndex(INDEX_URGLVL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUrglvl <em>Urglvl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Urglvl</em>' attribute.
	 * @see #getUrglvl()
	 */
	public void setUrglvl(String urglvl) {
		super.setByIndex(INDEX_URGLVL, urglvl);
	}

	/**
	 * Returns the value of the '<em><b>Finaldays</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Finaldays</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Finaldays</em>' attribute.
	 * @see #setFinaldays(java.math.BigDecimal)
	 */
	public BigDecimal getFinaldays() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_FINALDAYS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFinaldays <em>Finaldays</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Finaldays</em>' attribute.
	 * @see #getFinaldays()
	 */
	public void setFinaldays(BigDecimal finaldays) {
		super.setByIndex(INDEX_FINALDAYS, finaldays);
	}

	/**
	 * Returns the value of the '<em><b>Cycletype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Cycletype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Cycletype</em>' attribute.
	 * @see #setCycletype(java.lang.String)
	 */
	public String getCycletype() {
		return DataUtil.toString(super.getByIndex(INDEX_CYCLETYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCycletype <em>Cycletype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cycletype</em>' attribute.
	 * @see #getCycletype()
	 */
	public void setCycletype(String cycletype) {
		super.setByIndex(INDEX_CYCLETYPE, cycletype);
	}

	/**
	 * Returns the value of the '<em><b>Extend1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Extend1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Extend1</em>' attribute.
	 * @see #setExtend1(java.lang.String)
	 */
	public String getExtend1() {
		return DataUtil.toString(super.getByIndex(INDEX_EXTEND1, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExtend1 <em>Extend1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Extend1</em>' attribute.
	 * @see #getExtend1()
	 */
	public void setExtend1(String extend1) {
		super.setByIndex(INDEX_EXTEND1, extend1);
	}

	/**
	 * Returns the value of the '<em><b>Extend2</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Extend2</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Extend2</em>' attribute.
	 * @see #setExtend2(java.lang.String)
	 */
	public String getExtend2() {
		return DataUtil.toString(super.getByIndex(INDEX_EXTEND2, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExtend2 <em>Extend2</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Extend2</em>' attribute.
	 * @see #getExtend2()
	 */
	public void setExtend2(String extend2) {
		super.setByIndex(INDEX_EXTEND2, extend2);
	}

	/**
	 * Returns the value of the '<em><b>Extend3</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Extend3</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Extend3</em>' attribute.
	 * @see #setExtend3(java.lang.String)
	 */
	public String getExtend3() {
		return DataUtil.toString(super.getByIndex(INDEX_EXTEND3, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExtend3 <em>Extend3</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Extend3</em>' attribute.
	 * @see #getExtend3()
	 */
	public void setExtend3(String extend3) {
		super.setByIndex(INDEX_EXTEND3, extend3);
	}

	/**
	 * Returns the value of the '<em><b>Extend4</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Extend4</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Extend4</em>' attribute.
	 * @see #setExtend4(java.lang.String)
	 */
	public String getExtend4() {
		return DataUtil.toString(super.getByIndex(INDEX_EXTEND4, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExtend4 <em>Extend4</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Extend4</em>' attribute.
	 * @see #getExtend4()
	 */
	public void setExtend4(String extend4) {
		super.setByIndex(INDEX_EXTEND4, extend4);
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
	 * Returns the value of the '<em><b>Earlydays</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Earlydays</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Earlydays</em>' attribute.
	 * @see #setEarlydays(java.math.BigDecimal)
	 */
	public BigDecimal getEarlydays() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_EARLYDAYS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEarlydays <em>Earlydays</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Earlydays</em>' attribute.
	 * @see #getEarlydays()
	 */
	public void setEarlydays(BigDecimal earlydays) {
		super.setByIndex(INDEX_EARLYDAYS, earlydays);
	}

	/**
	 * Returns the value of the '<em><b>Earlytype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Earlytype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Earlytype</em>' attribute.
	 * @see #setEarlytype(java.lang.String)
	 */
	public String getEarlytype() {
		return DataUtil.toString(super.getByIndex(INDEX_EARLYTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEarlytype <em>Earlytype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Earlytype</em>' attribute.
	 * @see #getEarlytype()
	 */
	public void setEarlytype(String earlytype) {
		super.setByIndex(INDEX_EARLYTYPE, earlytype);
	}


}