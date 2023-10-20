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
import com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getCreatebyname <em>Createbyname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getModifybyname <em>Modifybyname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getModifytime <em>Modifytime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getMaktx <em>Maktx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getErdat <em>Erdat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getData2 <em>Data2</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getData3 <em>Data3</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getData4 <em>Data4</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getData5 <em>Data5</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getData1 <em>Data1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseApplyDataImpl#getMenge <em>Menge</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlPurchaseApplyData;
 */

public class GenlPurchaseApplyDataImpl extends ExtendedDataObjectImpl implements GenlPurchaseApplyData {
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
	public final static int INDEX_LIFNR = 9;
	public final static int INDEX_MATNR = 10;
	public final static int INDEX_MAKTX = 11;
	public final static int INDEX_ERDAT = 12;
	public final static int INDEX_DATA2 = 13;
	public final static int INDEX_DATA3 = 14;
	public final static int INDEX_DATA4 = 15;
	public final static int INDEX_DATA5 = 16;
	public final static int INDEX_DATA1 = 17;
	public final static int INDEX_MENGE = 18;
	public final static int SDO_PROPERTY_COUNT = 19;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlPurchaseApplyDataImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlPurchaseApplyDataImpl(Type type) {
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
	 * Returns the value of the '<em><b>Data2</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Data2</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Data2</em>' attribute.
	 * @see #setData2(java.lang.String)
	 */
	public String getData2() {
		return DataUtil.toString(super.getByIndex(INDEX_DATA2, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getData2 <em>Data2</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Data2</em>' attribute.
	 * @see #getData2()
	 */
	public void setData2(String data2) {
		super.setByIndex(INDEX_DATA2, data2);
	}

	/**
	 * Returns the value of the '<em><b>Data3</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Data3</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Data3</em>' attribute.
	 * @see #setData3(java.lang.String)
	 */
	public String getData3() {
		return DataUtil.toString(super.getByIndex(INDEX_DATA3, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getData3 <em>Data3</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Data3</em>' attribute.
	 * @see #getData3()
	 */
	public void setData3(String data3) {
		super.setByIndex(INDEX_DATA3, data3);
	}

	/**
	 * Returns the value of the '<em><b>Data4</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Data4</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Data4</em>' attribute.
	 * @see #setData4(java.lang.String)
	 */
	public String getData4() {
		return DataUtil.toString(super.getByIndex(INDEX_DATA4, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getData4 <em>Data4</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Data4</em>' attribute.
	 * @see #getData4()
	 */
	public void setData4(String data4) {
		super.setByIndex(INDEX_DATA4, data4);
	}

	/**
	 * Returns the value of the '<em><b>Data5</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Data5</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Data5</em>' attribute.
	 * @see #setData5(java.lang.String)
	 */
	public String getData5() {
		return DataUtil.toString(super.getByIndex(INDEX_DATA5, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getData5 <em>Data5</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Data5</em>' attribute.
	 * @see #getData5()
	 */
	public void setData5(String data5) {
		super.setByIndex(INDEX_DATA5, data5);
	}

	/**
	 * Returns the value of the '<em><b>Data1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Data1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Data1</em>' attribute.
	 * @see #setData1(java.lang.String)
	 */
	public String getData1() {
		return DataUtil.toString(super.getByIndex(INDEX_DATA1, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getData1 <em>Data1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Data1</em>' attribute.
	 * @see #getData1()
	 */
	public void setData1(String data1) {
		super.setByIndex(INDEX_DATA1, data1);
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


}