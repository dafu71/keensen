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
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlAsnMseg;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlAsnMsegImpl#getMblnr <em>Mblnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlAsnMsegImpl#getMjahr <em>Mjahr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlAsnMsegImpl#getZasnh <em>Zasnh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlAsnMsegImpl#getStats <em>Stats</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlAsnMsegImpl#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlAsnMsegImpl#getTrant <em>Trant</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlAsnMseg;
 */

public class GenlAsnMsegImpl extends ExtendedDataObjectImpl implements GenlAsnMseg {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_MBLNR = 0;
	public final static int INDEX_MJAHR = 1;
	public final static int INDEX_ZASNH = 2;
	public final static int INDEX_STATS = 3;
	public final static int INDEX_TRANU = 4;
	public final static int INDEX_TRANT = 5;
	public final static int SDO_PROPERTY_COUNT = 6;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlAsnMsegImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlAsnMsegImpl(Type type) {
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
	 * Returns the value of the '<em><b>Mjahr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mjahr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mjahr</em>' attribute.
	 * @see #setMjahr(java.lang.String)
	 */
	public String getMjahr() {
		return DataUtil.toString(super.getByIndex(INDEX_MJAHR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMjahr <em>Mjahr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mjahr</em>' attribute.
	 * @see #getMjahr()
	 */
	public void setMjahr(String mjahr) {
		super.setByIndex(INDEX_MJAHR, mjahr);
	}

	/**
	 * Returns the value of the '<em><b>Zasnh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zasnh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zasnh</em>' attribute.
	 * @see #setZasnh(java.lang.String)
	 */
	public String getZasnh() {
		return DataUtil.toString(super.getByIndex(INDEX_ZASNH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZasnh <em>Zasnh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zasnh</em>' attribute.
	 * @see #getZasnh()
	 */
	public void setZasnh(String zasnh) {
		super.setByIndex(INDEX_ZASNH, zasnh);
	}

	/**
	 * Returns the value of the '<em><b>Stats</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stats</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stats</em>' attribute.
	 * @see #setStats(java.lang.String)
	 */
	public String getStats() {
		return DataUtil.toString(super.getByIndex(INDEX_STATS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStats <em>Stats</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stats</em>' attribute.
	 * @see #getStats()
	 */
	public void setStats(String stats) {
		super.setByIndex(INDEX_STATS, stats);
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


}