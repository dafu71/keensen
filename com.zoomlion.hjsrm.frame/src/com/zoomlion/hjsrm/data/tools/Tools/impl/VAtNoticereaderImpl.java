/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.tools.Tools.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.data.tools.Tools.VAtNoticereader;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.VAtNoticereaderImpl#getNoticeid <em>Noticeid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.VAtNoticereaderImpl#getNr <em>Nr</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements VAtNoticereader;
 */

public class VAtNoticereaderImpl extends ExtendedDataObjectImpl implements VAtNoticereader {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_NOTICEID = 0;
	public final static int INDEX_NR = 1;
	public final static int SDO_PROPERTY_COUNT = 2;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public VAtNoticereaderImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public VAtNoticereaderImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Noticeid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Noticeid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Noticeid</em>' attribute.
	 * @see #setNoticeid(long)
	 */
	public long getNoticeid() {
		return DataUtil.toLong(super.getByIndex(INDEX_NOTICEID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getNoticeid <em>Noticeid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Noticeid</em>' attribute.
	 * @see #getNoticeid()
	 */
	public void setNoticeid(long noticeid) {
		super.setByIndex(INDEX_NOTICEID, noticeid);
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