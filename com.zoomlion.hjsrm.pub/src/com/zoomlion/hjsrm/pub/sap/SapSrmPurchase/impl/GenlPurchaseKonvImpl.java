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
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseKonv;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseKonvImpl#getKnumv <em>Knumv</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseKonvImpl#getKposn <em>Kposn</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseKonvImpl#getKschl <em>Kschl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseKonvImpl#getKbetr <em>Kbetr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseKonvImpl#getKmein <em>Kmein</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseKonvImpl#getKpein <em>Kpein</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlPurchaseKonv;
 */

public class GenlPurchaseKonvImpl extends ExtendedDataObjectImpl implements GenlPurchaseKonv {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_KNUMV = 0;
	public final static int INDEX_KPOSN = 1;
	public final static int INDEX_KSCHL = 2;
	public final static int INDEX_KBETR = 3;
	public final static int INDEX_KMEIN = 4;
	public final static int INDEX_KPEIN = 5;
	public final static int SDO_PROPERTY_COUNT = 6;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlPurchaseKonvImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlPurchaseKonvImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Knumv</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Knumv</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Knumv</em>' attribute.
	 * @see #setKnumv(java.lang.String)
	 */
	public String getKnumv() {
		return DataUtil.toString(super.getByIndex(INDEX_KNUMV, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKnumv <em>Knumv</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Knumv</em>' attribute.
	 * @see #getKnumv()
	 */
	public void setKnumv(String knumv) {
		super.setByIndex(INDEX_KNUMV, knumv);
	}

	/**
	 * Returns the value of the '<em><b>Kposn</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kposn</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kposn</em>' attribute.
	 * @see #setKposn(java.lang.String)
	 */
	public String getKposn() {
		return DataUtil.toString(super.getByIndex(INDEX_KPOSN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKposn <em>Kposn</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kposn</em>' attribute.
	 * @see #getKposn()
	 */
	public void setKposn(String kposn) {
		super.setByIndex(INDEX_KPOSN, kposn);
	}

	/**
	 * Returns the value of the '<em><b>Kschl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kschl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kschl</em>' attribute.
	 * @see #setKschl(java.lang.String)
	 */
	public String getKschl() {
		return DataUtil.toString(super.getByIndex(INDEX_KSCHL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKschl <em>Kschl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kschl</em>' attribute.
	 * @see #getKschl()
	 */
	public void setKschl(String kschl) {
		super.setByIndex(INDEX_KSCHL, kschl);
	}

	/**
	 * Returns the value of the '<em><b>Kbetr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kbetr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kbetr</em>' attribute.
	 * @see #setKbetr(java.lang.String)
	 */
	public String getKbetr() {
		return DataUtil.toString(super.getByIndex(INDEX_KBETR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKbetr <em>Kbetr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kbetr</em>' attribute.
	 * @see #getKbetr()
	 */
	public void setKbetr(String kbetr) {
		super.setByIndex(INDEX_KBETR, kbetr);
	}

	/**
	 * Returns the value of the '<em><b>Kmein</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kmein</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kmein</em>' attribute.
	 * @see #setKmein(java.lang.String)
	 */
	public String getKmein() {
		return DataUtil.toString(super.getByIndex(INDEX_KMEIN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKmein <em>Kmein</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kmein</em>' attribute.
	 * @see #getKmein()
	 */
	public void setKmein(String kmein) {
		super.setByIndex(INDEX_KMEIN, kmein);
	}

	/**
	 * Returns the value of the '<em><b>Kpein</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kpein</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kpein</em>' attribute.
	 * @see #setKpein(java.lang.String)
	 */
	public String getKpein() {
		return DataUtil.toString(super.getByIndex(INDEX_KPEIN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKpein <em>Kpein</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kpein</em>' attribute.
	 * @see #getKpein()
	 */
	public void setKpein(String kpein) {
		super.setByIndex(INDEX_KPEIN, kpein);
	}


}