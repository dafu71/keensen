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
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMkpf;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMkpfImpl#getMblnr <em>Mblnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMkpfImpl#getMjahr <em>Mjahr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMkpfImpl#getVgart <em>Vgart</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMkpfImpl#getBlart <em>Blart</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMkpfImpl#getBldat <em>Bldat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMkpfImpl#getBudat <em>Budat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMkpfImpl#getCpudt <em>Cpudt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMkpfImpl#getBktxt <em>Bktxt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMkpfImpl#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMkpfImpl#getTrant <em>Trant</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlReceiptsMkpf;
 */

public class GenlReceiptsMkpfImpl extends ExtendedDataObjectImpl implements GenlReceiptsMkpf {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_MBLNR = 0;
	public final static int INDEX_MJAHR = 1;
	public final static int INDEX_VGART = 2;
	public final static int INDEX_BLART = 3;
	public final static int INDEX_BLDAT = 4;
	public final static int INDEX_BUDAT = 5;
	public final static int INDEX_CPUDT = 6;
	public final static int INDEX_BKTXT = 7;
	public final static int INDEX_TRANU = 8;
	public final static int INDEX_TRANT = 9;
	public final static int SDO_PROPERTY_COUNT = 10;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlReceiptsMkpfImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlReceiptsMkpfImpl(Type type) {
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
	 * Returns the value of the '<em><b>Vgart</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Vgart</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Vgart</em>' attribute.
	 * @see #setVgart(java.lang.String)
	 */
	public String getVgart() {
		return DataUtil.toString(super.getByIndex(INDEX_VGART, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getVgart <em>Vgart</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Vgart</em>' attribute.
	 * @see #getVgart()
	 */
	public void setVgart(String vgart) {
		super.setByIndex(INDEX_VGART, vgart);
	}

	/**
	 * Returns the value of the '<em><b>Blart</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Blart</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Blart</em>' attribute.
	 * @see #setBlart(java.lang.String)
	 */
	public String getBlart() {
		return DataUtil.toString(super.getByIndex(INDEX_BLART, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBlart <em>Blart</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Blart</em>' attribute.
	 * @see #getBlart()
	 */
	public void setBlart(String blart) {
		super.setByIndex(INDEX_BLART, blart);
	}

	/**
	 * Returns the value of the '<em><b>Bldat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bldat</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bldat</em>' attribute.
	 * @see #setBldat(java.util.Date)
	 */
	public Date getBldat() {
		return DataUtil.toDate(super.getByIndex(INDEX_BLDAT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBldat <em>Bldat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bldat</em>' attribute.
	 * @see #getBldat()
	 */
	public void setBldat(Date bldat) {
		super.setByIndex(INDEX_BLDAT, bldat);
	}

	/**
	 * Returns the value of the '<em><b>Budat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Budat</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Budat</em>' attribute.
	 * @see #setBudat(java.util.Date)
	 */
	public Date getBudat() {
		return DataUtil.toDate(super.getByIndex(INDEX_BUDAT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBudat <em>Budat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Budat</em>' attribute.
	 * @see #getBudat()
	 */
	public void setBudat(Date budat) {
		super.setByIndex(INDEX_BUDAT, budat);
	}

	/**
	 * Returns the value of the '<em><b>Cpudt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Cpudt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Cpudt</em>' attribute.
	 * @see #setCpudt(java.util.Date)
	 */
	public Date getCpudt() {
		return DataUtil.toDate(super.getByIndex(INDEX_CPUDT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCpudt <em>Cpudt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cpudt</em>' attribute.
	 * @see #getCpudt()
	 */
	public void setCpudt(Date cpudt) {
		super.setByIndex(INDEX_CPUDT, cpudt);
	}

	/**
	 * Returns the value of the '<em><b>Bktxt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bktxt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bktxt</em>' attribute.
	 * @see #setBktxt(java.lang.String)
	 */
	public String getBktxt() {
		return DataUtil.toString(super.getByIndex(INDEX_BKTXT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBktxt <em>Bktxt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bktxt</em>' attribute.
	 * @see #getBktxt()
	 */
	public void setBktxt(String bktxt) {
		super.setByIndex(INDEX_BKTXT, bktxt);
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