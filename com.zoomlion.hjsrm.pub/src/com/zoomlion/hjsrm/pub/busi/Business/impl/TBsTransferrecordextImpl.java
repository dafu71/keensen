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
import com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getTransferrecordpkid <em>Transferrecordpkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getNewflag <em>Newflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getMngorg <em>Mngorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getCerttype <em>Certtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getCertnum <em>Certnum</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getAddrdetail <em>Addrdetail</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getUsername <em>Username</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getUsersnum <em>Usersnum</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getContactman <em>Contactman</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getMobile <em>Mobile</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getContactphone <em>Contactphone</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getSignid <em>Signid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getPaytype <em>Paytype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getCreateorgid <em>Createorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsTransferrecordextImpl#getCustname <em>Custname</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TBsTransferrecordext;
 */

public class TBsTransferrecordextImpl extends ExtendedDataObjectImpl implements TBsTransferrecordext {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_TRANSFERRECORDPKID = 1;
	public final static int INDEX_NEWFLAG = 2;
	public final static int INDEX_MNGORG = 3;
	public final static int INDEX_CERTTYPE = 4;
	public final static int INDEX_CERTNUM = 5;
	public final static int INDEX_ADDRDETAIL = 6;
	public final static int INDEX_USERNAME = 7;
	public final static int INDEX_USERSNUM = 8;
	public final static int INDEX_CONTACTMAN = 9;
	public final static int INDEX_MOBILE = 10;
	public final static int INDEX_CONTACTPHONE = 11;
	public final static int INDEX_SIGNID = 12;
	public final static int INDEX_PAYTYPE = 13;
	public final static int INDEX_STAND = 14;
	public final static int INDEX_REMARK = 15;
	public final static int INDEX_CREATEBY = 16;
	public final static int INDEX_CREATETIME = 17;
	public final static int INDEX_MODIFYBY = 18;
	public final static int INDEX_UPDATETIME = 19;
	public final static int INDEX_DATAORGID = 20;
	public final static int INDEX_DELFLAG = 21;
	public final static int INDEX_CREATEORGID = 22;
	public final static int INDEX_CUSTNAME = 23;
	public final static int SDO_PROPERTY_COUNT = 24;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsTransferrecordextImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsTransferrecordextImpl(Type type) {
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
	 * Returns the value of the '<em><b>Transferrecordpkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Transferrecordpkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Transferrecordpkid</em>' attribute.
	 * @see #setTransferrecordpkid(java.lang.String)
	 */
	public String getTransferrecordpkid() {
		return DataUtil.toString(super.getByIndex(INDEX_TRANSFERRECORDPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTransferrecordpkid <em>Transferrecordpkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Transferrecordpkid</em>' attribute.
	 * @see #getTransferrecordpkid()
	 */
	public void setTransferrecordpkid(String transferrecordpkid) {
		super.setByIndex(INDEX_TRANSFERRECORDPKID, transferrecordpkid);
	}

	/**
	 * Returns the value of the '<em><b>Newflag</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Newflag</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Newflag</em>' attribute.
	 * @see #setNewflag(java.lang.String)
	 */
	public String getNewflag() {
		return DataUtil.toString(super.getByIndex(INDEX_NEWFLAG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getNewflag <em>Newflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Newflag</em>' attribute.
	 * @see #getNewflag()
	 */
	public void setNewflag(String newflag) {
		super.setByIndex(INDEX_NEWFLAG, newflag);
	}

	/**
	 * Returns the value of the '<em><b>Mngorg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mngorg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mngorg</em>' attribute.
	 * @see #setMngorg(java.lang.String)
	 */
	public String getMngorg() {
		return DataUtil.toString(super.getByIndex(INDEX_MNGORG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMngorg <em>Mngorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mngorg</em>' attribute.
	 * @see #getMngorg()
	 */
	public void setMngorg(String mngorg) {
		super.setByIndex(INDEX_MNGORG, mngorg);
	}

	/**
	 * Returns the value of the '<em><b>Certtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Certtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Certtype</em>' attribute.
	 * @see #setCerttype(java.lang.String)
	 */
	public String getCerttype() {
		return DataUtil.toString(super.getByIndex(INDEX_CERTTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCerttype <em>Certtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Certtype</em>' attribute.
	 * @see #getCerttype()
	 */
	public void setCerttype(String certtype) {
		super.setByIndex(INDEX_CERTTYPE, certtype);
	}

	/**
	 * Returns the value of the '<em><b>Certnum</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Certnum</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Certnum</em>' attribute.
	 * @see #setCertnum(java.lang.String)
	 */
	public String getCertnum() {
		return DataUtil.toString(super.getByIndex(INDEX_CERTNUM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCertnum <em>Certnum</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Certnum</em>' attribute.
	 * @see #getCertnum()
	 */
	public void setCertnum(String certnum) {
		super.setByIndex(INDEX_CERTNUM, certnum);
	}

	/**
	 * Returns the value of the '<em><b>Addrdetail</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Addrdetail</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Addrdetail</em>' attribute.
	 * @see #setAddrdetail(java.lang.String)
	 */
	public String getAddrdetail() {
		return DataUtil.toString(super.getByIndex(INDEX_ADDRDETAIL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAddrdetail <em>Addrdetail</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Addrdetail</em>' attribute.
	 * @see #getAddrdetail()
	 */
	public void setAddrdetail(String addrdetail) {
		super.setByIndex(INDEX_ADDRDETAIL, addrdetail);
	}

	/**
	 * Returns the value of the '<em><b>Username</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Username</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Username</em>' attribute.
	 * @see #setUsername(java.lang.String)
	 */
	public String getUsername() {
		return DataUtil.toString(super.getByIndex(INDEX_USERNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUsername <em>Username</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Username</em>' attribute.
	 * @see #getUsername()
	 */
	public void setUsername(String username) {
		super.setByIndex(INDEX_USERNAME, username);
	}

	/**
	 * Returns the value of the '<em><b>Usersnum</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Usersnum</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Usersnum</em>' attribute.
	 * @see #setUsersnum(int)
	 */
	public int getUsersnum() {
		return DataUtil.toInt(super.getByIndex(INDEX_USERSNUM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUsersnum <em>Usersnum</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Usersnum</em>' attribute.
	 * @see #getUsersnum()
	 */
	public void setUsersnum(int usersnum) {
		super.setByIndex(INDEX_USERSNUM, usersnum);
	}

	/**
	 * Returns the value of the '<em><b>Contactman</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Contactman</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Contactman</em>' attribute.
	 * @see #setContactman(java.lang.String)
	 */
	public String getContactman() {
		return DataUtil.toString(super.getByIndex(INDEX_CONTACTMAN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getContactman <em>Contactman</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Contactman</em>' attribute.
	 * @see #getContactman()
	 */
	public void setContactman(String contactman) {
		super.setByIndex(INDEX_CONTACTMAN, contactman);
	}

	/**
	 * Returns the value of the '<em><b>Mobile</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mobile</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mobile</em>' attribute.
	 * @see #setMobile(java.lang.String)
	 */
	public String getMobile() {
		return DataUtil.toString(super.getByIndex(INDEX_MOBILE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMobile <em>Mobile</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mobile</em>' attribute.
	 * @see #getMobile()
	 */
	public void setMobile(String mobile) {
		super.setByIndex(INDEX_MOBILE, mobile);
	}

	/**
	 * Returns the value of the '<em><b>Contactphone</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Contactphone</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Contactphone</em>' attribute.
	 * @see #setContactphone(java.lang.String)
	 */
	public String getContactphone() {
		return DataUtil.toString(super.getByIndex(INDEX_CONTACTPHONE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getContactphone <em>Contactphone</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Contactphone</em>' attribute.
	 * @see #getContactphone()
	 */
	public void setContactphone(String contactphone) {
		super.setByIndex(INDEX_CONTACTPHONE, contactphone);
	}

	/**
	 * Returns the value of the '<em><b>Signid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Signid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Signid</em>' attribute.
	 * @see #setSignid(java.lang.String)
	 */
	public String getSignid() {
		return DataUtil.toString(super.getByIndex(INDEX_SIGNID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSignid <em>Signid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Signid</em>' attribute.
	 * @see #getSignid()
	 */
	public void setSignid(String signid) {
		super.setByIndex(INDEX_SIGNID, signid);
	}

	/**
	 * Returns the value of the '<em><b>Paytype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paytype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paytype</em>' attribute.
	 * @see #setPaytype(java.lang.String)
	 */
	public String getPaytype() {
		return DataUtil.toString(super.getByIndex(INDEX_PAYTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPaytype <em>Paytype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paytype</em>' attribute.
	 * @see #getPaytype()
	 */
	public void setPaytype(String paytype) {
		super.setByIndex(INDEX_PAYTYPE, paytype);
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
	 * Returns the value of the '<em><b>Custname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Custname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Custname</em>' attribute.
	 * @see #setCustname(java.lang.String)
	 */
	public String getCustname() {
		return DataUtil.toString(super.getByIndex(INDEX_CUSTNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCustname <em>Custname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Custname</em>' attribute.
	 * @see #getCustname()
	 */
	public void setCustname(String custname) {
		super.setByIndex(INDEX_CUSTNAME, custname);
	}


}