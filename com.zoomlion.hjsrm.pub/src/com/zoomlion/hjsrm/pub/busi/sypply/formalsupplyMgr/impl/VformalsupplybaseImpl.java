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
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vformalsupplybase;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VformalsupplybaseImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VformalsupplybaseImpl#getName1 <em>Name1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VformalsupplybaseImpl#getPstlz <em>Pstlz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VformalsupplybaseImpl#getStras <em>Stras</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VformalsupplybaseImpl#getLprop <em>Lprop</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VformalsupplybaseImpl#getLtype <em>Ltype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VformalsupplybaseImpl#getCretm <em>Cretm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VformalsupplybaseImpl#getBatch <em>Batch</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VformalsupplybaseImpl#getLsyst <em>Lsyst</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VformalsupplybaseImpl#getLsort <em>Lsort</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VformalsupplybaseImpl#getZzyyw <em>Zzyyw</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VformalsupplybaseImpl#getCreid <em>Creid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements Vformalsupplybase;
 */

public class VformalsupplybaseImpl extends ExtendedDataObjectImpl implements Vformalsupplybase {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_LIFNR = 0;
	public final static int INDEX_NAME1 = 1;
	public final static int INDEX_PSTLZ = 2;
	public final static int INDEX_STRAS = 3;
	public final static int INDEX_LPROP = 4;
	public final static int INDEX_LTYPE = 5;
	public final static int INDEX_CRETM = 6;
	public final static int INDEX_BATCH = 7;
	public final static int INDEX_LSYST = 8;
	public final static int INDEX_LSORT = 9;
	public final static int INDEX_ZZYYW = 10;
	public final static int INDEX_CREID = 11;
	public final static int SDO_PROPERTY_COUNT = 12;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public VformalsupplybaseImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public VformalsupplybaseImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
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
	 * Returns the value of the '<em><b>Name1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Name1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Name1</em>' attribute.
	 * @see #setName1(java.lang.String)
	 */
	public String getName1() {
		return DataUtil.toString(super.getByIndex(INDEX_NAME1, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getName1 <em>Name1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Name1</em>' attribute.
	 * @see #getName1()
	 */
	public void setName1(String name1) {
		super.setByIndex(INDEX_NAME1, name1);
	}

	/**
	 * Returns the value of the '<em><b>Pstlz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Pstlz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Pstlz</em>' attribute.
	 * @see #setPstlz(java.lang.String)
	 */
	public String getPstlz() {
		return DataUtil.toString(super.getByIndex(INDEX_PSTLZ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPstlz <em>Pstlz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pstlz</em>' attribute.
	 * @see #getPstlz()
	 */
	public void setPstlz(String pstlz) {
		super.setByIndex(INDEX_PSTLZ, pstlz);
	}

	/**
	 * Returns the value of the '<em><b>Stras</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stras</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stras</em>' attribute.
	 * @see #setStras(java.lang.String)
	 */
	public String getStras() {
		return DataUtil.toString(super.getByIndex(INDEX_STRAS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStras <em>Stras</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stras</em>' attribute.
	 * @see #getStras()
	 */
	public void setStras(String stras) {
		super.setByIndex(INDEX_STRAS, stras);
	}

	/**
	 * Returns the value of the '<em><b>Lprop</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lprop</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lprop</em>' attribute.
	 * @see #setLprop(java.lang.String)
	 */
	public String getLprop() {
		return DataUtil.toString(super.getByIndex(INDEX_LPROP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLprop <em>Lprop</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lprop</em>' attribute.
	 * @see #getLprop()
	 */
	public void setLprop(String lprop) {
		super.setByIndex(INDEX_LPROP, lprop);
	}

	/**
	 * Returns the value of the '<em><b>Ltype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ltype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ltype</em>' attribute.
	 * @see #setLtype(java.lang.String)
	 */
	public String getLtype() {
		return DataUtil.toString(super.getByIndex(INDEX_LTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLtype <em>Ltype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ltype</em>' attribute.
	 * @see #getLtype()
	 */
	public void setLtype(String ltype) {
		super.setByIndex(INDEX_LTYPE, ltype);
	}

	/**
	 * Returns the value of the '<em><b>Cretm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Cretm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Cretm</em>' attribute.
	 * @see #setCretm(java.util.Date)
	 */
	public Date getCretm() {
		return DataUtil.toDate(super.getByIndex(INDEX_CRETM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCretm <em>Cretm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cretm</em>' attribute.
	 * @see #getCretm()
	 */
	public void setCretm(Date cretm) {
		super.setByIndex(INDEX_CRETM, cretm);
	}

	/**
	 * Returns the value of the '<em><b>Batch</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Batch</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Batch</em>' attribute.
	 * @see #setBatch(java.lang.String)
	 */
	public String getBatch() {
		return DataUtil.toString(super.getByIndex(INDEX_BATCH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBatch <em>Batch</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Batch</em>' attribute.
	 * @see #getBatch()
	 */
	public void setBatch(String batch) {
		super.setByIndex(INDEX_BATCH, batch);
	}

	/**
	 * Returns the value of the '<em><b>Lsyst</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lsyst</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lsyst</em>' attribute.
	 * @see #setLsyst(java.lang.String)
	 */
	public String getLsyst() {
		return DataUtil.toString(super.getByIndex(INDEX_LSYST, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLsyst <em>Lsyst</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lsyst</em>' attribute.
	 * @see #getLsyst()
	 */
	public void setLsyst(String lsyst) {
		super.setByIndex(INDEX_LSYST, lsyst);
	}

	/**
	 * Returns the value of the '<em><b>Lsort</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lsort</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lsort</em>' attribute.
	 * @see #setLsort(java.lang.String)
	 */
	public String getLsort() {
		return DataUtil.toString(super.getByIndex(INDEX_LSORT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLsort <em>Lsort</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lsort</em>' attribute.
	 * @see #getLsort()
	 */
	public void setLsort(String lsort) {
		super.setByIndex(INDEX_LSORT, lsort);
	}

	/**
	 * Returns the value of the '<em><b>Zzyyw</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zzyyw</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zzyyw</em>' attribute.
	 * @see #setZzyyw(java.lang.String)
	 */
	public String getZzyyw() {
		return DataUtil.toString(super.getByIndex(INDEX_ZZYYW, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZzyyw <em>Zzyyw</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zzyyw</em>' attribute.
	 * @see #getZzyyw()
	 */
	public void setZzyyw(String zzyyw) {
		super.setByIndex(INDEX_ZZYYW, zzyyw);
	}

	/**
	 * Returns the value of the '<em><b>Creid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Creid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Creid</em>' attribute.
	 * @see #setCreid(java.lang.String)
	 */
	public String getCreid() {
		return DataUtil.toString(super.getByIndex(INDEX_CREID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreid <em>Creid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Creid</em>' attribute.
	 * @see #getCreid()
	 */
	public void setCreid(String creid) {
		super.setByIndex(INDEX_CREID, creid);
	}


}