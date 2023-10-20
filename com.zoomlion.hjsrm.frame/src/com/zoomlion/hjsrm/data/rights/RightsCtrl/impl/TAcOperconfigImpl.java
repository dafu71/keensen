/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.rights.RightsCtrl.impl;

import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperconfig;
import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOperconfigImpl#getOperatorid <em>Operatorid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOperconfigImpl#getConfigname <em>Configname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOperconfigImpl#getConfigvalue <em>Configvalue</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOperconfigImpl#getConfigtype <em>Configtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOperconfigImpl#getIsvalid <em>Isvalid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOperconfigImpl#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TAcOperconfig;
 */

public class TAcOperconfigImpl extends ExtendedDataObjectImpl implements TAcOperconfig {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_OPERATORID = 0;
	public final static int INDEX_CONFIGNAME = 1;
	public final static int INDEX_CONFIGVALUE = 2;
	public final static int INDEX_CONFIGTYPE = 3;
	public final static int INDEX_ISVALID = 4;
	public final static int INDEX_DATAORGID = 5;
	public final static int SDO_PROPERTY_COUNT = 6;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAcOperconfigImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAcOperconfigImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Operatorid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operatorid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operatorid</em>' attribute.
	 * @see #setOperatorid(long)
	 */
	public long getOperatorid() {
		return DataUtil.toLong(super.getByIndex(INDEX_OPERATORID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOperatorid <em>Operatorid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operatorid</em>' attribute.
	 * @see #getOperatorid()
	 */
	public void setOperatorid(long operatorid) {
		super.setByIndex(INDEX_OPERATORID, operatorid);
	}

	/**
	 * Returns the value of the '<em><b>Configname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Configname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Configname</em>' attribute.
	 * @see #setConfigname(java.lang.String)
	 */
	public String getConfigname() {
		return DataUtil.toString(super.getByIndex(INDEX_CONFIGNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getConfigname <em>Configname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Configname</em>' attribute.
	 * @see #getConfigname()
	 */
	public void setConfigname(String configname) {
		super.setByIndex(INDEX_CONFIGNAME, configname);
	}

	/**
	 * Returns the value of the '<em><b>Configvalue</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Configvalue</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Configvalue</em>' attribute.
	 * @see #setConfigvalue(java.lang.String)
	 */
	public String getConfigvalue() {
		return DataUtil.toString(super.getByIndex(INDEX_CONFIGVALUE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getConfigvalue <em>Configvalue</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Configvalue</em>' attribute.
	 * @see #getConfigvalue()
	 */
	public void setConfigvalue(String configvalue) {
		super.setByIndex(INDEX_CONFIGVALUE, configvalue);
	}

	/**
	 * Returns the value of the '<em><b>Configtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Configtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Configtype</em>' attribute.
	 * @see #setConfigtype(java.lang.String)
	 */
	public String getConfigtype() {
		return DataUtil.toString(super.getByIndex(INDEX_CONFIGTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getConfigtype <em>Configtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Configtype</em>' attribute.
	 * @see #getConfigtype()
	 */
	public void setConfigtype(String configtype) {
		super.setByIndex(INDEX_CONFIGTYPE, configtype);
	}

	/**
	 * Returns the value of the '<em><b>Isvalid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isvalid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isvalid</em>' attribute.
	 * @see #setIsvalid(java.lang.String)
	 */
	public String getIsvalid() {
		return DataUtil.toString(super.getByIndex(INDEX_ISVALID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIsvalid <em>Isvalid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isvalid</em>' attribute.
	 * @see #getIsvalid()
	 */
	public void setIsvalid(String isvalid) {
		super.setByIndex(INDEX_ISVALID, isvalid);
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