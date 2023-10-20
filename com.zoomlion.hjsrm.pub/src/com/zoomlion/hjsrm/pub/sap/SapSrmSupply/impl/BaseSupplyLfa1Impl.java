/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfa1;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl#getName1 <em>Name1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl#getOrt01 <em>Ort01</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl#getPstlz <em>Pstlz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl#getTelf1 <em>Telf1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl#getStras <em>Stras</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl#getBankl <em>Bankl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl#getBankn <em>Bankn</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl#getKoinh <em>Koinh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl#getErnam <em>Ernam</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl#getErdat <em>Erdat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl#getTrant <em>Trant</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfa1Impl#getSortl <em>Sortl</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements BaseSupplyLfa1;
 */

public class BaseSupplyLfa1Impl extends ExtendedDataObjectImpl implements BaseSupplyLfa1 {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_LIFNR = 0;
	public final static int INDEX_NAME1 = 1;
	public final static int INDEX_ORT01 = 2;
	public final static int INDEX_PSTLZ = 3;
	public final static int INDEX_TELF1 = 4;
	public final static int INDEX_STRAS = 5;
	public final static int INDEX_BANKL = 6;
	public final static int INDEX_BANKN = 7;
	public final static int INDEX_KOINH = 8;
	public final static int INDEX_ERNAM = 9;
	public final static int INDEX_ERDAT = 10;
	public final static int INDEX_TRANU = 11;
	public final static int INDEX_TRANT = 12;
	public final static int INDEX_SORTL = 13;
	public final static int SDO_PROPERTY_COUNT = 14;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public BaseSupplyLfa1Impl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public BaseSupplyLfa1Impl(Type type) {
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
	 * Returns the value of the '<em><b>Ort01</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ort01</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ort01</em>' attribute.
	 * @see #setOrt01(java.lang.String)
	 */
	public String getOrt01() {
		return DataUtil.toString(super.getByIndex(INDEX_ORT01, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOrt01 <em>Ort01</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ort01</em>' attribute.
	 * @see #getOrt01()
	 */
	public void setOrt01(String ort01) {
		super.setByIndex(INDEX_ORT01, ort01);
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
	 * Returns the value of the '<em><b>Telf1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Telf1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Telf1</em>' attribute.
	 * @see #setTelf1(java.lang.String)
	 */
	public String getTelf1() {
		return DataUtil.toString(super.getByIndex(INDEX_TELF1, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTelf1 <em>Telf1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Telf1</em>' attribute.
	 * @see #getTelf1()
	 */
	public void setTelf1(String telf1) {
		super.setByIndex(INDEX_TELF1, telf1);
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
	 * Returns the value of the '<em><b>Bankl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bankl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bankl</em>' attribute.
	 * @see #setBankl(java.lang.String)
	 */
	public String getBankl() {
		return DataUtil.toString(super.getByIndex(INDEX_BANKL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBankl <em>Bankl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bankl</em>' attribute.
	 * @see #getBankl()
	 */
	public void setBankl(String bankl) {
		super.setByIndex(INDEX_BANKL, bankl);
	}

	/**
	 * Returns the value of the '<em><b>Bankn</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bankn</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bankn</em>' attribute.
	 * @see #setBankn(java.lang.String)
	 */
	public String getBankn() {
		return DataUtil.toString(super.getByIndex(INDEX_BANKN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBankn <em>Bankn</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bankn</em>' attribute.
	 * @see #getBankn()
	 */
	public void setBankn(String bankn) {
		super.setByIndex(INDEX_BANKN, bankn);
	}

	/**
	 * Returns the value of the '<em><b>Koinh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Koinh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Koinh</em>' attribute.
	 * @see #setKoinh(java.lang.String)
	 */
	public String getKoinh() {
		return DataUtil.toString(super.getByIndex(INDEX_KOINH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKoinh <em>Koinh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Koinh</em>' attribute.
	 * @see #getKoinh()
	 */
	public void setKoinh(String koinh) {
		super.setByIndex(INDEX_KOINH, koinh);
	}

	/**
	 * Returns the value of the '<em><b>Ernam</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ernam</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ernam</em>' attribute.
	 * @see #setErnam(java.lang.String)
	 */
	public String getErnam() {
		return DataUtil.toString(super.getByIndex(INDEX_ERNAM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getErnam <em>Ernam</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ernam</em>' attribute.
	 * @see #getErnam()
	 */
	public void setErnam(String ernam) {
		super.setByIndex(INDEX_ERNAM, ernam);
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
	 * @see #setErdat(java.util.Date)
	 */
	public Date getErdat() {
		return DataUtil.toDate(super.getByIndex(INDEX_ERDAT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getErdat <em>Erdat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Erdat</em>' attribute.
	 * @see #getErdat()
	 */
	public void setErdat(Date erdat) {
		super.setByIndex(INDEX_ERDAT, erdat);
	}

	/**
	 * Returns the value of the '<em><b>Tranu</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Tranu</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Tranu</em>' attribute.
	 * @see #setTranu(java.lang.String)
	 */
	public String getTranu() {
		return DataUtil.toString(super.getByIndex(INDEX_TRANU, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTranu <em>Tranu</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Tranu</em>' attribute.
	 * @see #getTranu()
	 */
	public void setTranu(String tranu) {
		super.setByIndex(INDEX_TRANU, tranu);
	}

	/**
	 * Returns the value of the '<em><b>Trant</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Trant</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Trant</em>' attribute.
	 * @see #setTrant(java.util.Date)
	 */
	public Date getTrant() {
		return DataUtil.toDate(super.getByIndex(INDEX_TRANT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTrant <em>Trant</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Trant</em>' attribute.
	 * @see #getTrant()
	 */
	public void setTrant(Date trant) {
		super.setByIndex(INDEX_TRANT, trant);
	}

	/**
	 * Returns the value of the '<em><b>Sortl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sortl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sortl</em>' attribute.
	 * @see #setSortl(java.lang.String)
	 */
	public String getSortl() {
		return DataUtil.toString(super.getByIndex(INDEX_SORTL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSortl <em>Sortl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sortl</em>' attribute.
	 * @see #getSortl()
	 */
	public void setSortl(String sortl) {
		super.setByIndex(INDEX_SORTL, sortl);
	}


}