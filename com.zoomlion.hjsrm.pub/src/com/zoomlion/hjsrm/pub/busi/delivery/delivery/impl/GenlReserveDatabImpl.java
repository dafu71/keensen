/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDatab;

import commonj.sdo.Type;

import java.math.BigDecimal;
import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveDatabImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveDatabImpl#getCxdm <em>Cxdm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveDatabImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveDatabImpl#getZstat <em>Zstat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveDatabImpl#getMenge <em>Menge</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveDatabImpl#getZcret <em>Zcret</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveDatabImpl#getZcreu <em>Zcreu</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlReserveDatab;
 */

public class GenlReserveDatabImpl extends ExtendedDataObjectImpl implements GenlReserveDatab {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_LIFNR = 0;
	public final static int INDEX_CXDM = 1;
	public final static int INDEX_MATNR = 2;
	public final static int INDEX_ZSTAT = 3;
	public final static int INDEX_MENGE = 4;
	public final static int INDEX_ZCRET = 5;
	public final static int INDEX_ZCREU = 6;
	public final static int SDO_PROPERTY_COUNT = 7;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlReserveDatabImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlReserveDatabImpl(Type type) {
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
	 * Returns the value of the '<em><b>Cxdm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Cxdm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Cxdm</em>' attribute.
	 * @see #setCxdm(java.lang.String)
	 */
	public String getCxdm() {
		return DataUtil.toString(super.getByIndex(INDEX_CXDM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCxdm <em>Cxdm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cxdm</em>' attribute.
	 * @see #getCxdm()
	 */
	public void setCxdm(String cxdm) {
		super.setByIndex(INDEX_CXDM, cxdm);
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
	 * Returns the value of the '<em><b>Zstat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zstat</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zstat</em>' attribute.
	 * @see #setZstat(java.lang.String)
	 */
	public String getZstat() {
		return DataUtil.toString(super.getByIndex(INDEX_ZSTAT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZstat <em>Zstat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zstat</em>' attribute.
	 * @see #getZstat()
	 */
	public void setZstat(String zstat) {
		super.setByIndex(INDEX_ZSTAT, zstat);
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
	 * @see #setMenge(java.math.BigDecimal)
	 */
	public BigDecimal getMenge() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_MENGE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMenge <em>Menge</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Menge</em>' attribute.
	 * @see #getMenge()
	 */
	public void setMenge(BigDecimal menge) {
		super.setByIndex(INDEX_MENGE, menge);
	}

	/**
	 * Returns the value of the '<em><b>Zcret</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zcret</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zcret</em>' attribute.
	 * @see #setZcret(java.util.Date)
	 */
	public Date getZcret() {
		return DataUtil.toDate(super.getByIndex(INDEX_ZCRET, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZcret <em>Zcret</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zcret</em>' attribute.
	 * @see #getZcret()
	 */
	public void setZcret(Date zcret) {
		super.setByIndex(INDEX_ZCRET, zcret);
	}

	/**
	 * Returns the value of the '<em><b>Zcreu</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zcreu</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zcreu</em>' attribute.
	 * @see #setZcreu(java.lang.String)
	 */
	public String getZcreu() {
		return DataUtil.toString(super.getByIndex(INDEX_ZCREU, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZcreu <em>Zcreu</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zcreu</em>' attribute.
	 * @see #getZcreu()
	 */
	public void setZcreu(String zcreu) {
		super.setByIndex(INDEX_ZCREU, zcreu);
	}


}