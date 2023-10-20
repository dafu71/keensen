/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseEkkn;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkknImpl#getEbeln <em>Ebeln</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkknImpl#getEbelp <em>Ebelp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkknImpl#getKostl <em>Kostl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkknImpl#getAufnr <em>Aufnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkknImpl#getLoekz <em>Loekz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkknImpl#getAedat <em>Aedat</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlPurchaseEkkn;
 */

public class GenlPurchaseEkknImpl extends ExtendedDataObjectImpl implements GenlPurchaseEkkn {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_EBELN = 0;
	public final static int INDEX_EBELP = 1;
	public final static int INDEX_KOSTL = 2;
	public final static int INDEX_AUFNR = 3;
	public final static int INDEX_LOEKZ = 4;
	public final static int INDEX_AEDAT = 5;
	public final static int SDO_PROPERTY_COUNT = 6;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlPurchaseEkknImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlPurchaseEkknImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Ebeln</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ebeln</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ebeln</em>' attribute.
	 * @see #setEbeln(java.lang.String)
	 */
	public String getEbeln() {
		return DataUtil.toString(super.getByIndex(INDEX_EBELN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEbeln <em>Ebeln</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ebeln</em>' attribute.
	 * @see #getEbeln()
	 */
	public void setEbeln(String ebeln) {
		super.setByIndex(INDEX_EBELN, ebeln);
	}

	/**
	 * Returns the value of the '<em><b>Ebelp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ebelp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ebelp</em>' attribute.
	 * @see #setEbelp(java.lang.String)
	 */
	public String getEbelp() {
		return DataUtil.toString(super.getByIndex(INDEX_EBELP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEbelp <em>Ebelp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ebelp</em>' attribute.
	 * @see #getEbelp()
	 */
	public void setEbelp(String ebelp) {
		super.setByIndex(INDEX_EBELP, ebelp);
	}

	/**
	 * Returns the value of the '<em><b>Kostl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kostl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kostl</em>' attribute.
	 * @see #setKostl(java.lang.String)
	 */
	public String getKostl() {
		return DataUtil.toString(super.getByIndex(INDEX_KOSTL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKostl <em>Kostl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kostl</em>' attribute.
	 * @see #getKostl()
	 */
	public void setKostl(String kostl) {
		super.setByIndex(INDEX_KOSTL, kostl);
	}

	/**
	 * Returns the value of the '<em><b>Aufnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Aufnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Aufnr</em>' attribute.
	 * @see #setAufnr(java.lang.String)
	 */
	public String getAufnr() {
		return DataUtil.toString(super.getByIndex(INDEX_AUFNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAufnr <em>Aufnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Aufnr</em>' attribute.
	 * @see #getAufnr()
	 */
	public void setAufnr(String aufnr) {
		super.setByIndex(INDEX_AUFNR, aufnr);
	}

	/**
	 * Returns the value of the '<em><b>Loekz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Loekz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Loekz</em>' attribute.
	 * @see #setLoekz(java.lang.String)
	 */
	public String getLoekz() {
		return DataUtil.toString(super.getByIndex(INDEX_LOEKZ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLoekz <em>Loekz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Loekz</em>' attribute.
	 * @see #getLoekz()
	 */
	public void setLoekz(String loekz) {
		super.setByIndex(INDEX_LOEKZ, loekz);
	}

	/**
	 * Returns the value of the '<em><b>Aedat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Aedat</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Aedat</em>' attribute.
	 * @see #setAedat(java.util.Date)
	 */
	public Date getAedat() {
		return DataUtil.toDate(super.getByIndex(INDEX_AEDAT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAedat <em>Aedat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Aedat</em>' attribute.
	 * @see #getAedat()
	 */
	public void setAedat(Date aedat) {
		super.setByIndex(INDEX_AEDAT, aedat);
	}


}