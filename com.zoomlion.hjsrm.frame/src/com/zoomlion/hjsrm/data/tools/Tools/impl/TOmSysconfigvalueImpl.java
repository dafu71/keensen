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
import com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfigvalue;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TOmSysconfigvalueImpl#getParamid <em>Paramid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TOmSysconfigvalueImpl#getParamvalue <em>Paramvalue</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TOmSysconfigvalueImpl#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TOmSysconfigvalue;
 */

public class TOmSysconfigvalueImpl extends ExtendedDataObjectImpl implements TOmSysconfigvalue {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PARAMID = 0;
	public final static int INDEX_PARAMVALUE = 1;
	public final static int INDEX_DATAORGID = 2;
	public final static int SDO_PROPERTY_COUNT = 3;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TOmSysconfigvalueImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TOmSysconfigvalueImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Paramid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paramid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paramid</em>' attribute.
	 * @see #setParamid(java.lang.String)
	 */
	public String getParamid() {
		return DataUtil.toString(super.getByIndex(INDEX_PARAMID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getParamid <em>Paramid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paramid</em>' attribute.
	 * @see #getParamid()
	 */
	public void setParamid(String paramid) {
		super.setByIndex(INDEX_PARAMID, paramid);
	}

	/**
	 * Returns the value of the '<em><b>Paramvalue</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paramvalue</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paramvalue</em>' attribute.
	 * @see #setParamvalue(java.lang.String)
	 */
	public String getParamvalue() {
		return DataUtil.toString(super.getByIndex(INDEX_PARAMVALUE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getParamvalue <em>Paramvalue</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paramvalue</em>' attribute.
	 * @see #getParamvalue()
	 */
	public void setParamvalue(String paramvalue) {
		super.setByIndex(INDEX_PARAMVALUE, paramvalue);
	}

	/**
	 * Returns the value of the '<em><b>Dataorgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Dataorgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Dataorgid</em>' attribute.
	 * @see #setDataorgid(int)
	 */
	public int getDataorgid() {
		return DataUtil.toInt(super.getByIndex(INDEX_DATAORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid) {
		super.setByIndex(INDEX_DATAORGID, dataorgid);
	}


}