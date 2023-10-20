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
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveVerl;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveVerlImpl#getId <em>Id</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveVerlImpl#getZvern <em>Zvern</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveVerlImpl#getZleib <em>Zleib</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlReserveVerlImpl#getLifnr <em>Lifnr</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlReserveVerl;
 */

public class GenlReserveVerlImpl extends ExtendedDataObjectImpl implements GenlReserveVerl {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_ID = 0;
	public final static int INDEX_ZVERN = 1;
	public final static int INDEX_ZLEIB = 2;
	public final static int INDEX_LIFNR = 3;
	public final static int SDO_PROPERTY_COUNT = 4;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlReserveVerlImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlReserveVerlImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Id</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Id</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Id</em>' attribute.
	 * @see #setId(long)
	 */
	public long getId() {
		return DataUtil.toLong(super.getByIndex(INDEX_ID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getId <em>Id</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Id</em>' attribute.
	 * @see #getId()
	 */
	public void setId(long id) {
		super.setByIndex(INDEX_ID, id);
	}

	/**
	 * Returns the value of the '<em><b>Zvern</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zvern</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zvern</em>' attribute.
	 * @see #setZvern(java.lang.String)
	 */
	public String getZvern() {
		return DataUtil.toString(super.getByIndex(INDEX_ZVERN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZvern <em>Zvern</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zvern</em>' attribute.
	 * @see #getZvern()
	 */
	public void setZvern(String zvern) {
		super.setByIndex(INDEX_ZVERN, zvern);
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


}