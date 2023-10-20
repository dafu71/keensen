/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialZt76Impl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialZt76Impl#getWerks <em>Werks</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialZt76Impl#getZhwbm <em>Zhwbm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialZt76Impl#getZwrildt <em>Zwrildt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialZt76Impl#getZwriusr <em>Zwriusr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialZt76Impl#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialZt76Impl#getTrant <em>Trant</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialZt76Impl#getZsfclq <em>Zsfclq</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements BaseMaterialZt76;
 */

public class BaseMaterialZt76Impl extends ExtendedDataObjectImpl implements BaseMaterialZt76 {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_MATNR = 0;
	public final static int INDEX_WERKS = 1;
	public final static int INDEX_ZHWBM = 2;
	public final static int INDEX_ZWRILDT = 3;
	public final static int INDEX_ZWRIUSR = 4;
	public final static int INDEX_TRANU = 5;
	public final static int INDEX_TRANT = 6;
	public final static int INDEX_ZSFCLQ = 7;
	public final static int SDO_PROPERTY_COUNT = 8;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public BaseMaterialZt76Impl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public BaseMaterialZt76Impl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
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

	/**
	 * Returns the value of the '<em><b>Zhwbm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zhwbm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zhwbm</em>' attribute.
	 * @see #setZhwbm(java.lang.String)
	 */
	public String getZhwbm() {
		return DataUtil.toString(super.getByIndex(INDEX_ZHWBM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZhwbm <em>Zhwbm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zhwbm</em>' attribute.
	 * @see #getZhwbm()
	 */
	public void setZhwbm(String zhwbm) {
		super.setByIndex(INDEX_ZHWBM, zhwbm);
	}

	/**
	 * Returns the value of the '<em><b>Zwrildt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zwrildt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zwrildt</em>' attribute.
	 * @see #setZwrildt(java.util.Date)
	 */
	public Date getZwrildt() {
		return DataUtil.toDate(super.getByIndex(INDEX_ZWRILDT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZwrildt <em>Zwrildt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zwrildt</em>' attribute.
	 * @see #getZwrildt()
	 */
	public void setZwrildt(Date zwrildt) {
		super.setByIndex(INDEX_ZWRILDT, zwrildt);
	}

	/**
	 * Returns the value of the '<em><b>Zwriusr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zwriusr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zwriusr</em>' attribute.
	 * @see #setZwriusr(java.lang.String)
	 */
	public String getZwriusr() {
		return DataUtil.toString(super.getByIndex(INDEX_ZWRIUSR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZwriusr <em>Zwriusr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zwriusr</em>' attribute.
	 * @see #getZwriusr()
	 */
	public void setZwriusr(String zwriusr) {
		super.setByIndex(INDEX_ZWRIUSR, zwriusr);
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
	 * Returns the value of the '<em><b>Zsfclq</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zsfclq</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zsfclq</em>' attribute.
	 * @see #setZsfclq(java.lang.String)
	 */
	public String getZsfclq() {
		return DataUtil.toString(super.getByIndex(INDEX_ZSFCLQ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZsfclq <em>Zsfclq</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zsfclq</em>' attribute.
	 * @see #getZsfclq()
	 */
	public void setZsfclq(String zsfclq) {
		super.setByIndex(INDEX_ZSFCLQ, zsfclq);
	}


}