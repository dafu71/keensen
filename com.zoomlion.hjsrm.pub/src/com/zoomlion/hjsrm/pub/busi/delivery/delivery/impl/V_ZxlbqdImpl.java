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
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.V_Zxlbqd;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.V_ZxlbqdImpl#getZleibname <em>Zleibname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.V_ZxlbqdImpl#getNr <em>Nr</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements V_Zxlbqd;
 */

public class V_ZxlbqdImpl extends ExtendedDataObjectImpl implements V_Zxlbqd {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_ZLEIBNAME = 0;
	public final static int INDEX_NR = 1;
	public final static int SDO_PROPERTY_COUNT = 2;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public V_ZxlbqdImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public V_ZxlbqdImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Zleibname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zleibname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zleibname</em>' attribute.
	 * @see #setZleibname(java.lang.String)
	 */
	public String getZleibname() {
		return DataUtil.toString(super.getByIndex(INDEX_ZLEIBNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZleibname <em>Zleibname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zleibname</em>' attribute.
	 * @see #getZleibname()
	 */
	public void setZleibname(String zleibname) {
		super.setByIndex(INDEX_ZLEIBNAME, zleibname);
	}

	/**
	 * Returns the value of the '<em><b>Nr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Nr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Nr</em>' attribute.
	 * @see #setNr(java.lang.String)
	 */
	public String getNr() {
		return DataUtil.toString(super.getByIndex(INDEX_NR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getNr <em>Nr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Nr</em>' attribute.
	 * @see #getNr()
	 */
	public void setNr(String nr) {
		super.setByIndex(INDEX_NR, nr);
	}


}