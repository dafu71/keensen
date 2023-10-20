/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpqdwhList;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpqdwhListImpl#getId <em>Id</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpqdwhListImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpqdwhListImpl#getCpmc <em>Cpmc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpqdwhListImpl#getCpxh <em>Cpxh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpqdwhListImpl#getCpgg <em>Cpgg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpqdwhListImpl#getSsdl <em>Ssdl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpqdwhListImpl#getSszl <em>Sszl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpqdwhListImpl#getSsxl <em>Ssxl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpqdwhListImpl#getNtgl <em>Ntgl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpqdwhListImpl#getGjzld <em>Gjzld</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpqdwhListImpl#getZyjscs <em>Zyjscs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpqdwhListImpl#getText <em>Text</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpqdwhListImpl#getStatu <em>Statu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpqdwhListImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpqdwhListImpl#getModifytime <em>Modifytime</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlCpqdwhList;
 */

public class GenlCpqdwhListImpl extends ExtendedDataObjectImpl implements GenlCpqdwhList {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_ID = 0;
	public final static int INDEX_LIFNR = 1;
	public final static int INDEX_CPMC = 2;
	public final static int INDEX_CPXH = 3;
	public final static int INDEX_CPGG = 4;
	public final static int INDEX_SSDL = 5;
	public final static int INDEX_SSZL = 6;
	public final static int INDEX_SSXL = 7;
	public final static int INDEX_NTGL = 8;
	public final static int INDEX_GJZLD = 9;
	public final static int INDEX_ZYJSCS = 10;
	public final static int INDEX_TEXT = 11;
	public final static int INDEX_STATU = 12;
	public final static int INDEX_USERID = 13;
	public final static int INDEX_MODIFYTIME = 14;
	public final static int SDO_PROPERTY_COUNT = 15;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlCpqdwhListImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlCpqdwhListImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Id</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Id</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Id</em>' attribute.
	 * @see #setId(int)
	 */
	public int getId() {
		return DataUtil.toInt(super.getByIndex(INDEX_ID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getId <em>Id</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Id</em>' attribute.
	 * @see #getId()
	 */
	public void setId(int id) {
		super.setByIndex(INDEX_ID, id);
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
	 * Returns the value of the '<em><b>Cpmc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Cpmc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Cpmc</em>' attribute.
	 * @see #setCpmc(java.lang.String)
	 */
	public String getCpmc() {
		return DataUtil.toString(super.getByIndex(INDEX_CPMC, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCpmc <em>Cpmc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cpmc</em>' attribute.
	 * @see #getCpmc()
	 */
	public void setCpmc(String cpmc) {
		super.setByIndex(INDEX_CPMC, cpmc);
	}

	/**
	 * Returns the value of the '<em><b>Cpxh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Cpxh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Cpxh</em>' attribute.
	 * @see #setCpxh(java.lang.String)
	 */
	public String getCpxh() {
		return DataUtil.toString(super.getByIndex(INDEX_CPXH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCpxh <em>Cpxh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cpxh</em>' attribute.
	 * @see #getCpxh()
	 */
	public void setCpxh(String cpxh) {
		super.setByIndex(INDEX_CPXH, cpxh);
	}

	/**
	 * Returns the value of the '<em><b>Cpgg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Cpgg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Cpgg</em>' attribute.
	 * @see #setCpgg(java.lang.String)
	 */
	public String getCpgg() {
		return DataUtil.toString(super.getByIndex(INDEX_CPGG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCpgg <em>Cpgg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cpgg</em>' attribute.
	 * @see #getCpgg()
	 */
	public void setCpgg(String cpgg) {
		super.setByIndex(INDEX_CPGG, cpgg);
	}

	/**
	 * Returns the value of the '<em><b>Ssdl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ssdl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ssdl</em>' attribute.
	 * @see #setSsdl(java.lang.String)
	 */
	public String getSsdl() {
		return DataUtil.toString(super.getByIndex(INDEX_SSDL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSsdl <em>Ssdl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ssdl</em>' attribute.
	 * @see #getSsdl()
	 */
	public void setSsdl(String ssdl) {
		super.setByIndex(INDEX_SSDL, ssdl);
	}

	/**
	 * Returns the value of the '<em><b>Sszl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sszl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sszl</em>' attribute.
	 * @see #setSszl(java.lang.String)
	 */
	public String getSszl() {
		return DataUtil.toString(super.getByIndex(INDEX_SSZL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSszl <em>Sszl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sszl</em>' attribute.
	 * @see #getSszl()
	 */
	public void setSszl(String sszl) {
		super.setByIndex(INDEX_SSZL, sszl);
	}

	/**
	 * Returns the value of the '<em><b>Ssxl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ssxl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ssxl</em>' attribute.
	 * @see #setSsxl(java.lang.String)
	 */
	public String getSsxl() {
		return DataUtil.toString(super.getByIndex(INDEX_SSXL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSsxl <em>Ssxl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ssxl</em>' attribute.
	 * @see #getSsxl()
	 */
	public void setSsxl(String ssxl) {
		super.setByIndex(INDEX_SSXL, ssxl);
	}

	/**
	 * Returns the value of the '<em><b>Ntgl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ntgl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ntgl</em>' attribute.
	 * @see #setNtgl(java.lang.String)
	 */
	public String getNtgl() {
		return DataUtil.toString(super.getByIndex(INDEX_NTGL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getNtgl <em>Ntgl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ntgl</em>' attribute.
	 * @see #getNtgl()
	 */
	public void setNtgl(String ntgl) {
		super.setByIndex(INDEX_NTGL, ntgl);
	}

	/**
	 * Returns the value of the '<em><b>Gjzld</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gjzld</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gjzld</em>' attribute.
	 * @see #setGjzld(java.lang.String)
	 */
	public String getGjzld() {
		return DataUtil.toString(super.getByIndex(INDEX_GJZLD, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGjzld <em>Gjzld</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gjzld</em>' attribute.
	 * @see #getGjzld()
	 */
	public void setGjzld(String gjzld) {
		super.setByIndex(INDEX_GJZLD, gjzld);
	}

	/**
	 * Returns the value of the '<em><b>Zyjscs</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zyjscs</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zyjscs</em>' attribute.
	 * @see #setZyjscs(java.lang.String)
	 */
	public String getZyjscs() {
		return DataUtil.toString(super.getByIndex(INDEX_ZYJSCS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZyjscs <em>Zyjscs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zyjscs</em>' attribute.
	 * @see #getZyjscs()
	 */
	public void setZyjscs(String zyjscs) {
		super.setByIndex(INDEX_ZYJSCS, zyjscs);
	}

	/**
	 * Returns the value of the '<em><b>Text</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Text</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Text</em>' attribute.
	 * @see #setText(java.lang.String)
	 */
	public String getText() {
		return DataUtil.toString(super.getByIndex(INDEX_TEXT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getText <em>Text</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Text</em>' attribute.
	 * @see #getText()
	 */
	public void setText(String text) {
		super.setByIndex(INDEX_TEXT, text);
	}

	/**
	 * Returns the value of the '<em><b>Statu</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Statu</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Statu</em>' attribute.
	 * @see #setStatu(java.lang.String)
	 */
	public String getStatu() {
		return DataUtil.toString(super.getByIndex(INDEX_STATU, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStatu <em>Statu</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Statu</em>' attribute.
	 * @see #getStatu()
	 */
	public void setStatu(String statu) {
		super.setByIndex(INDEX_STATU, statu);
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


}