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
import com.zoomlion.hjsrm.pub.busi.Business.TBsTurninfo;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getPlaninfopkid <em>Planinfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getWorklistinfopkid <em>Worklistinfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getBatchid <em>Batchid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getBusitype <em>Busitype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getTurndate <em>Turndate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getTurnorg <em>Turnorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getToorg <em>Toorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getReasontype <em>Reasontype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getReasondetail <em>Reasondetail</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getState <em>State</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getCreateorgid <em>Createorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTurninfoImpl#getDelflag <em>Delflag</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TBsTurninfo;
 */

public class TBsTurninfoImpl extends ExtendedDataObjectImpl implements TBsTurninfo {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_PLANINFOPKID = 1;
	public final static int INDEX_WORKLISTINFOPKID = 2;
	public final static int INDEX_BATCHID = 3;
	public final static int INDEX_BUSITYPE = 4;
	public final static int INDEX_TURNDATE = 5;
	public final static int INDEX_TURNORG = 6;
	public final static int INDEX_TOORG = 7;
	public final static int INDEX_USERID = 8;
	public final static int INDEX_REASONTYPE = 9;
	public final static int INDEX_REASONDETAIL = 10;
	public final static int INDEX_STATE = 11;
	public final static int INDEX_STAND = 12;
	public final static int INDEX_REMARK = 13;
	public final static int INDEX_CREATEBY = 14;
	public final static int INDEX_CREATEORGID = 15;
	public final static int INDEX_CREATETIME = 16;
	public final static int INDEX_MODIFYBY = 17;
	public final static int INDEX_UPDATETIME = 18;
	public final static int INDEX_DATAORGID = 19;
	public final static int INDEX_DELFLAG = 20;
	public final static int SDO_PROPERTY_COUNT = 21;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsTurninfoImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsTurninfoImpl(Type type) {
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
	 * Returns the value of the '<em><b>Batchid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Batchid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Batchid</em>' attribute.
	 * @see #setBatchid(java.lang.String)
	 */
	public String getBatchid() {
		return DataUtil.toString(super.getByIndex(INDEX_BATCHID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBatchid <em>Batchid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Batchid</em>' attribute.
	 * @see #getBatchid()
	 */
	public void setBatchid(String batchid) {
		super.setByIndex(INDEX_BATCHID, batchid);
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
	 * Returns the value of the '<em><b>Turndate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Turndate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Turndate</em>' attribute.
	 * @see #setTurndate(java.util.Date)
	 */
	public Date getTurndate() {
		return DataUtil.toDate(super.getByIndex(INDEX_TURNDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTurndate <em>Turndate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Turndate</em>' attribute.
	 * @see #getTurndate()
	 */
	public void setTurndate(Date turndate) {
		super.setByIndex(INDEX_TURNDATE, turndate);
	}

	/**
	 * Returns the value of the '<em><b>Turnorg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Turnorg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Turnorg</em>' attribute.
	 * @see #setTurnorg(java.lang.String)
	 */
	public String getTurnorg() {
		return DataUtil.toString(super.getByIndex(INDEX_TURNORG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTurnorg <em>Turnorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Turnorg</em>' attribute.
	 * @see #getTurnorg()
	 */
	public void setTurnorg(String turnorg) {
		super.setByIndex(INDEX_TURNORG, turnorg);
	}

	/**
	 * Returns the value of the '<em><b>Toorg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Toorg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Toorg</em>' attribute.
	 * @see #setToorg(java.lang.String)
	 */
	public String getToorg() {
		return DataUtil.toString(super.getByIndex(INDEX_TOORG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getToorg <em>Toorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Toorg</em>' attribute.
	 * @see #getToorg()
	 */
	public void setToorg(String toorg) {
		super.setByIndex(INDEX_TOORG, toorg);
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
	 * Returns the value of the '<em><b>Reasontype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reasontype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reasontype</em>' attribute.
	 * @see #setReasontype(java.lang.String)
	 */
	public String getReasontype() {
		return DataUtil.toString(super.getByIndex(INDEX_REASONTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReasontype <em>Reasontype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reasontype</em>' attribute.
	 * @see #getReasontype()
	 */
	public void setReasontype(String reasontype) {
		super.setByIndex(INDEX_REASONTYPE, reasontype);
	}

	/**
	 * Returns the value of the '<em><b>Reasondetail</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reasondetail</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reasondetail</em>' attribute.
	 * @see #setReasondetail(java.lang.String)
	 */
	public String getReasondetail() {
		return DataUtil.toString(super.getByIndex(INDEX_REASONDETAIL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReasondetail <em>Reasondetail</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reasondetail</em>' attribute.
	 * @see #getReasondetail()
	 */
	public void setReasondetail(String reasondetail) {
		super.setByIndex(INDEX_REASONDETAIL, reasondetail);
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


}