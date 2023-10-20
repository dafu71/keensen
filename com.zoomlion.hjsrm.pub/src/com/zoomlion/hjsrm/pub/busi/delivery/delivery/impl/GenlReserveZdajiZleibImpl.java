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
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveZdajiZleib;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveZdajiZleibImpl#getZdaji <em>Zdaji</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveZdajiZleibImpl#getZleib <em>Zleib</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlReserveZdajiZleib;
 */

public class GenlReserveZdajiZleibImpl extends ExtendedDataObjectImpl implements GenlReserveZdajiZleib {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_ZDAJI = 0;
	public final static int INDEX_ZLEIB = 1;
	public final static int SDO_PROPERTY_COUNT = 2;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlReserveZdajiZleibImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlReserveZdajiZleibImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Zdaji</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zdaji</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zdaji</em>' attribute.
	 * @see #setZdaji(java.lang.String)
	 */
	public String getZdaji() {
		return DataUtil.toString(super.getByIndex(INDEX_ZDAJI, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZdaji <em>Zdaji</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zdaji</em>' attribute.
	 * @see #getZdaji()
	 */
	public void setZdaji(String zdaji) {
		super.setByIndex(INDEX_ZDAJI, zdaji);
	}

	/**
	 * Returns the value of the '<em><b>Zleib</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zleib</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zleib</em>' attribute.
	 * @see #setZleib(java.lang.String)
	 */
	public String getZleib() {
		return DataUtil.toString(super.getByIndex(INDEX_ZLEIB, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZleib <em>Zleib</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zleib</em>' attribute.
	 * @see #getZleib()
	 */
	public void setZleib(String zleib) {
		super.setByIndex(INDEX_ZLEIB, zleib);
	}


}