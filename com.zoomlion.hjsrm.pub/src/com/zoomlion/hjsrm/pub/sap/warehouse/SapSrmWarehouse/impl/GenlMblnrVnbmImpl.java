/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlMblnrVnbmImpl#getMblnr <em>Mblnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlMblnrVnbmImpl#getMblno <em>Mblno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlMblnrVnbmImpl#getVnbm <em>Vnbm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlMblnrVnbmImpl#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlMblnrVnbmImpl#getTrant <em>Trant</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlMblnrVnbmImpl#getShkzg <em>Shkzg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlMblnrVnbmImpl#getLbbsa <em>Lbbsa</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlMblnrVnbmImpl#getLager <em>Lager</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlMblnrVnbmImpl#getWerks <em>Werks</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlMblnrVnbm;
 */

public class GenlMblnrVnbmImpl extends ExtendedDataObjectImpl implements GenlMblnrVnbm {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_MBLNR = 0;
	public final static int INDEX_MBLNO = 1;
	public final static int INDEX_VNBM = 2;
	public final static int INDEX_TRANU = 3;
	public final static int INDEX_TRANT = 4;
	public final static int INDEX_SHKZG = 5;
	public final static int INDEX_LBBSA = 6;
	public final static int INDEX_LAGER = 7;
	public final static int INDEX_WERKS = 8;
	public final static int SDO_PROPERTY_COUNT = 9;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlMblnrVnbmImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlMblnrVnbmImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Mblnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mblnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mblnr</em>' attribute.
	 * @see #setMblnr(java.lang.String)
	 */
	public String getMblnr() {
		return DataUtil.toString(super.getByIndex(INDEX_MBLNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMblnr <em>Mblnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mblnr</em>' attribute.
	 * @see #getMblnr()
	 */
	public void setMblnr(String mblnr) {
		super.setByIndex(INDEX_MBLNR, mblnr);
	}

	/**
	 * Returns the value of the '<em><b>Mblno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mblno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mblno</em>' attribute.
	 * @see #setMblno(java.lang.String)
	 */
	public String getMblno() {
		return DataUtil.toString(super.getByIndex(INDEX_MBLNO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMblno <em>Mblno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mblno</em>' attribute.
	 * @see #getMblno()
	 */
	public void setMblno(String mblno) {
		super.setByIndex(INDEX_MBLNO, mblno);
	}

	/**
	 * Returns the value of the '<em><b>Vnbm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Vnbm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Vnbm</em>' attribute.
	 * @see #setVnbm(java.lang.String)
	 */
	public String getVnbm() {
		return DataUtil.toString(super.getByIndex(INDEX_VNBM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getVnbm <em>Vnbm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Vnbm</em>' attribute.
	 * @see #getVnbm()
	 */
	public void setVnbm(String vnbm) {
		super.setByIndex(INDEX_VNBM, vnbm);
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
	 * Returns the value of the '<em><b>Shkzg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Shkzg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Shkzg</em>' attribute.
	 * @see #setShkzg(java.lang.String)
	 */
	public String getShkzg() {
		return DataUtil.toString(super.getByIndex(INDEX_SHKZG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getShkzg <em>Shkzg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Shkzg</em>' attribute.
	 * @see #getShkzg()
	 */
	public void setShkzg(String shkzg) {
		super.setByIndex(INDEX_SHKZG, shkzg);
	}

	/**
	 * Returns the value of the '<em><b>Lbbsa</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lbbsa</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lbbsa</em>' attribute.
	 * @see #setLbbsa(java.lang.String)
	 */
	public String getLbbsa() {
		return DataUtil.toString(super.getByIndex(INDEX_LBBSA, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLbbsa <em>Lbbsa</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lbbsa</em>' attribute.
	 * @see #getLbbsa()
	 */
	public void setLbbsa(String lbbsa) {
		super.setByIndex(INDEX_LBBSA, lbbsa);
	}

	/**
	 * Returns the value of the '<em><b>Lager</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lager</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lager</em>' attribute.
	 * @see #setLager(java.lang.String)
	 */
	public String getLager() {
		return DataUtil.toString(super.getByIndex(INDEX_LAGER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLager <em>Lager</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lager</em>' attribute.
	 * @see #getLager()
	 */
	public void setLager(String lager) {
		super.setByIndex(INDEX_LAGER, lager);
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