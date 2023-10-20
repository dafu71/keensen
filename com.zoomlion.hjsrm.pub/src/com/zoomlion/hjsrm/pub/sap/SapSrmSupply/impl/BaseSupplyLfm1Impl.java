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
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfm1;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfm1Impl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfm1Impl#getEkorg <em>Ekorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfm1Impl#getErdat <em>Erdat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfm1Impl#getErnam <em>Ernam</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfm1Impl#getVerkf <em>Verkf</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.impl.BaseSupplyLfm1Impl#getTelf1 <em>Telf1</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements BaseSupplyLfm1;
 */

public class BaseSupplyLfm1Impl extends ExtendedDataObjectImpl implements BaseSupplyLfm1 {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_LIFNR = 0;
	public final static int INDEX_EKORG = 1;
	public final static int INDEX_ERDAT = 2;
	public final static int INDEX_ERNAM = 3;
	public final static int INDEX_VERKF = 4;
	public final static int INDEX_TELF1 = 5;
	public final static int SDO_PROPERTY_COUNT = 6;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public BaseSupplyLfm1Impl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public BaseSupplyLfm1Impl(Type type) {
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
	 * Returns the value of the '<em><b>Verkf</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Verkf</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Verkf</em>' attribute.
	 * @see #setVerkf(java.lang.String)
	 */
	public String getVerkf() {
		return DataUtil.toString(super.getByIndex(INDEX_VERKF, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getVerkf <em>Verkf</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Verkf</em>' attribute.
	 * @see #getVerkf()
	 */
	public void setVerkf(String verkf) {
		super.setByIndex(INDEX_VERKF, verkf);
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


}