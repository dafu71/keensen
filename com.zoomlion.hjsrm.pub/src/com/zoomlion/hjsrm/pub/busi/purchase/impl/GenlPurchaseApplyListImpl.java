/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.purchase.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyList;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getCreatebyname <em>Createbyname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getModifybyname <em>Modifybyname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getModifytime <em>Modifytime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getBanfn <em>Banfn</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getBnfpo <em>Bnfpo</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getErdat <em>Erdat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getMaktx <em>Maktx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getMenge <em>Menge</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getLfdat <em>Lfdat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getMeins <em>Meins</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getLgort <em>Lgort</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getBstyp <em>Bstyp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getKnttp <em>Knttp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getEkgrp <em>Ekgrp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getEkorg <em>Ekorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getBednr <em>Bednr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getAufnr <em>Aufnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getKostl <em>Kostl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getLoekz <em>Loekz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getFlag <em>Flag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyListImpl#getWerks <em>Werks</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlPurchaseApplyList;
 */

public class GenlPurchaseApplyListImpl extends ExtendedDataObjectImpl implements GenlPurchaseApplyList {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_CREATEBY = 1;
	public final static int INDEX_CREATEBYNAME = 2;
	public final static int INDEX_CREATETIME = 3;
	public final static int INDEX_MODIFYBY = 4;
	public final static int INDEX_MODIFYBYNAME = 5;
	public final static int INDEX_MODIFYTIME = 6;
	public final static int INDEX_REMARK = 7;
	public final static int INDEX_STAND = 8;
	public final static int INDEX_BANFN = 9;
	public final static int INDEX_BNFPO = 10;
	public final static int INDEX_ERDAT = 11;
	public final static int INDEX_LIFNR = 12;
	public final static int INDEX_MATNR = 13;
	public final static int INDEX_MAKTX = 14;
	public final static int INDEX_MENGE = 15;
	public final static int INDEX_LFDAT = 16;
	public final static int INDEX_MEINS = 17;
	public final static int INDEX_LGORT = 18;
	public final static int INDEX_BSTYP = 19;
	public final static int INDEX_KNTTP = 20;
	public final static int INDEX_EKGRP = 21;
	public final static int INDEX_EKORG = 22;
	public final static int INDEX_BEDNR = 23;
	public final static int INDEX_AUFNR = 24;
	public final static int INDEX_KOSTL = 25;
	public final static int INDEX_LOEKZ = 26;
	public final static int INDEX_FLAG = 27;
	public final static int INDEX_WERKS = 28;
	public final static int SDO_PROPERTY_COUNT = 29;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlPurchaseApplyListImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlPurchaseApplyListImpl(Type type) {
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
	 * Returns the value of the '<em><b>Createbyname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createbyname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createbyname</em>' attribute.
	 * @see #setCreatebyname(java.lang.String)
	 */
	public String getCreatebyname() {
		return DataUtil.toString(super.getByIndex(INDEX_CREATEBYNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreatebyname <em>Createbyname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createbyname</em>' attribute.
	 * @see #getCreatebyname()
	 */
	public void setCreatebyname(String createbyname) {
		super.setByIndex(INDEX_CREATEBYNAME, createbyname);
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
	 * Returns the value of the '<em><b>Modifybyname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifybyname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifybyname</em>' attribute.
	 * @see #setModifybyname(java.lang.String)
	 */
	public String getModifybyname() {
		return DataUtil.toString(super.getByIndex(INDEX_MODIFYBYNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifybyname <em>Modifybyname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifybyname</em>' attribute.
	 * @see #getModifybyname()
	 */
	public void setModifybyname(String modifybyname) {
		super.setByIndex(INDEX_MODIFYBYNAME, modifybyname);
	}

	/**
	 * Returns the value of the '<em><b>Modifytime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifytime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifytime</em>' attribute.
	 * @see #setModifytime(java.util.Date)
	 */
	public Date getModifytime() {
		return DataUtil.toDate(super.getByIndex(INDEX_MODIFYTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifytime <em>Modifytime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifytime</em>' attribute.
	 * @see #getModifytime()
	 */
	public void setModifytime(Date modifytime) {
		super.setByIndex(INDEX_MODIFYTIME, modifytime);
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
	 * Returns the value of the '<em><b>Banfn</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Banfn</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Banfn</em>' attribute.
	 * @see #setBanfn(java.lang.String)
	 */
	public String getBanfn() {
		return DataUtil.toString(super.getByIndex(INDEX_BANFN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBanfn <em>Banfn</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Banfn</em>' attribute.
	 * @see #getBanfn()
	 */
	public void setBanfn(String banfn) {
		super.setByIndex(INDEX_BANFN, banfn);
	}

	/**
	 * Returns the value of the '<em><b>Bnfpo</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bnfpo</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bnfpo</em>' attribute.
	 * @see #setBnfpo(java.lang.String)
	 */
	public String getBnfpo() {
		return DataUtil.toString(super.getByIndex(INDEX_BNFPO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBnfpo <em>Bnfpo</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bnfpo</em>' attribute.
	 * @see #getBnfpo()
	 */
	public void setBnfpo(String bnfpo) {
		super.setByIndex(INDEX_BNFPO, bnfpo);
	}

	/**
	 * Returns the value of the '<em><b>Erdat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Erdat</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Erdat</em>' attribute.
	 * @see #setErdat(java.lang.String)
	 */
	public String getErdat() {
		return DataUtil.toString(super.getByIndex(INDEX_ERDAT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getErdat <em>Erdat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Erdat</em>' attribute.
	 * @see #getErdat()
	 */
	public void setErdat(String erdat) {
		super.setByIndex(INDEX_ERDAT, erdat);
	}

	/**
	 * Returns the value of the '<em><b>Lifnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lifnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lifnr</em>' attribute.
	 * @see #setLifnr(java.lang.String)
	 */
	public String getLifnr() {
		return DataUtil.toString(super.getByIndex(INDEX_LIFNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLifnr <em>Lifnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lifnr</em>' attribute.
	 * @see #getLifnr()
	 */
	public void setLifnr(String lifnr) {
		super.setByIndex(INDEX_LIFNR, lifnr);
	}

	/**
	 * Returns the value of the '<em><b>Matnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Matnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Matnr</em>' attribute.
	 * @see #setMatnr(java.lang.String)
	 */
	public String getMatnr() {
		return DataUtil.toString(super.getByIndex(INDEX_MATNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMatnr <em>Matnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matnr</em>' attribute.
	 * @see #getMatnr()
	 */
	public void setMatnr(String matnr) {
		super.setByIndex(INDEX_MATNR, matnr);
	}

	/**
	 * Returns the value of the '<em><b>Maktx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Maktx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Maktx</em>' attribute.
	 * @see #setMaktx(java.lang.String)
	 */
	public String getMaktx() {
		return DataUtil.toString(super.getByIndex(INDEX_MAKTX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMaktx <em>Maktx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Maktx</em>' attribute.
	 * @see #getMaktx()
	 */
	public void setMaktx(String maktx) {
		super.setByIndex(INDEX_MAKTX, maktx);
	}

	/**
	 * Returns the value of the '<em><b>Menge</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Menge</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Menge</em>' attribute.
	 * @see #setMenge(java.lang.String)
	 */
	public String getMenge() {
		return DataUtil.toString(super.getByIndex(INDEX_MENGE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMenge <em>Menge</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Menge</em>' attribute.
	 * @see #getMenge()
	 */
	public void setMenge(String menge) {
		super.setByIndex(INDEX_MENGE, menge);
	}

	/**
	 * Returns the value of the '<em><b>Lfdat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lfdat</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lfdat</em>' attribute.
	 * @see #setLfdat(java.lang.String)
	 */
	public String getLfdat() {
		return DataUtil.toString(super.getByIndex(INDEX_LFDAT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLfdat <em>Lfdat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lfdat</em>' attribute.
	 * @see #getLfdat()
	 */
	public void setLfdat(String lfdat) {
		super.setByIndex(INDEX_LFDAT, lfdat);
	}

	/**
	 * Returns the value of the '<em><b>Meins</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meins</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meins</em>' attribute.
	 * @see #setMeins(java.lang.String)
	 */
	public String getMeins() {
		return DataUtil.toString(super.getByIndex(INDEX_MEINS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMeins <em>Meins</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meins</em>' attribute.
	 * @see #getMeins()
	 */
	public void setMeins(String meins) {
		super.setByIndex(INDEX_MEINS, meins);
	}

	/**
	 * Returns the value of the '<em><b>Lgort</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lgort</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lgort</em>' attribute.
	 * @see #setLgort(java.lang.String)
	 */
	public String getLgort() {
		return DataUtil.toString(super.getByIndex(INDEX_LGORT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLgort <em>Lgort</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lgort</em>' attribute.
	 * @see #getLgort()
	 */
	public void setLgort(String lgort) {
		super.setByIndex(INDEX_LGORT, lgort);
	}

	/**
	 * Returns the value of the '<em><b>Bstyp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bstyp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bstyp</em>' attribute.
	 * @see #setBstyp(java.lang.String)
	 */
	public String getBstyp() {
		return DataUtil.toString(super.getByIndex(INDEX_BSTYP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBstyp <em>Bstyp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bstyp</em>' attribute.
	 * @see #getBstyp()
	 */
	public void setBstyp(String bstyp) {
		super.setByIndex(INDEX_BSTYP, bstyp);
	}

	/**
	 * Returns the value of the '<em><b>Knttp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Knttp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Knttp</em>' attribute.
	 * @see #setKnttp(java.lang.String)
	 */
	public String getKnttp() {
		return DataUtil.toString(super.getByIndex(INDEX_KNTTP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKnttp <em>Knttp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Knttp</em>' attribute.
	 * @see #getKnttp()
	 */
	public void setKnttp(String knttp) {
		super.setByIndex(INDEX_KNTTP, knttp);
	}

	/**
	 * Returns the value of the '<em><b>Ekgrp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ekgrp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ekgrp</em>' attribute.
	 * @see #setEkgrp(java.lang.String)
	 */
	public String getEkgrp() {
		return DataUtil.toString(super.getByIndex(INDEX_EKGRP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEkgrp <em>Ekgrp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ekgrp</em>' attribute.
	 * @see #getEkgrp()
	 */
	public void setEkgrp(String ekgrp) {
		super.setByIndex(INDEX_EKGRP, ekgrp);
	}

	/**
	 * Returns the value of the '<em><b>Ekorg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ekorg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ekorg</em>' attribute.
	 * @see #setEkorg(java.lang.String)
	 */
	public String getEkorg() {
		return DataUtil.toString(super.getByIndex(INDEX_EKORG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEkorg <em>Ekorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ekorg</em>' attribute.
	 * @see #getEkorg()
	 */
	public void setEkorg(String ekorg) {
		super.setByIndex(INDEX_EKORG, ekorg);
	}

	/**
	 * Returns the value of the '<em><b>Bednr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bednr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bednr</em>' attribute.
	 * @see #setBednr(java.lang.String)
	 */
	public String getBednr() {
		return DataUtil.toString(super.getByIndex(INDEX_BEDNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBednr <em>Bednr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bednr</em>' attribute.
	 * @see #getBednr()
	 */
	public void setBednr(String bednr) {
		super.setByIndex(INDEX_BEDNR, bednr);
	}

	/**
	 * Returns the value of the '<em><b>Aufnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Aufnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Aufnr</em>' attribute.
	 * @see #setAufnr(java.lang.String)
	 */
	public String getAufnr() {
		return DataUtil.toString(super.getByIndex(INDEX_AUFNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAufnr <em>Aufnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Aufnr</em>' attribute.
	 * @see #getAufnr()
	 */
	public void setAufnr(String aufnr) {
		super.setByIndex(INDEX_AUFNR, aufnr);
	}

	/**
	 * Returns the value of the '<em><b>Kostl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kostl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kostl</em>' attribute.
	 * @see #setKostl(java.lang.String)
	 */
	public String getKostl() {
		return DataUtil.toString(super.getByIndex(INDEX_KOSTL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKostl <em>Kostl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kostl</em>' attribute.
	 * @see #getKostl()
	 */
	public void setKostl(String kostl) {
		super.setByIndex(INDEX_KOSTL, kostl);
	}

	/**
	 * Returns the value of the '<em><b>Loekz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Loekz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Loekz</em>' attribute.
	 * @see #setLoekz(java.lang.String)
	 */
	public String getLoekz() {
		return DataUtil.toString(super.getByIndex(INDEX_LOEKZ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLoekz <em>Loekz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Loekz</em>' attribute.
	 * @see #getLoekz()
	 */
	public void setLoekz(String loekz) {
		super.setByIndex(INDEX_LOEKZ, loekz);
	}

	/**
	 * Returns the value of the '<em><b>Flag</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Flag</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Flag</em>' attribute.
	 * @see #setFlag(java.lang.String)
	 */
	public String getFlag() {
		return DataUtil.toString(super.getByIndex(INDEX_FLAG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFlag <em>Flag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Flag</em>' attribute.
	 * @see #getFlag()
	 */
	public void setFlag(String flag) {
		super.setByIndex(INDEX_FLAG, flag);
	}

	/**
	 * Returns the value of the '<em><b>Werks</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Werks</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Werks</em>' attribute.
	 * @see #setWerks(java.lang.String)
	 */
	public String getWerks() {
		return DataUtil.toString(super.getByIndex(INDEX_WERKS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWerks <em>Werks</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Werks</em>' attribute.
	 * @see #getWerks()
	 */
	public void setWerks(String werks) {
		super.setByIndex(INDEX_WERKS, werks);
	}


}