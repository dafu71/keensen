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
import com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfig;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TOmSysconfigImpl#getParamid <em>Paramid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TOmSysconfigImpl#getParamname <em>Paramname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TOmSysconfigImpl#getParamtype <em>Paramtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TOmSysconfigImpl#getParamconfig <em>Paramconfig</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TOmSysconfigImpl#getParamdesc <em>Paramdesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TOmSysconfigImpl#getConfigtype <em>Configtype</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TOmSysconfig;
 */

public class TOmSysconfigImpl extends ExtendedDataObjectImpl implements TOmSysconfig {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PARAMID = 0;
	public final static int INDEX_PARAMNAME = 1;
	public final static int INDEX_PARAMTYPE = 2;
	public final static int INDEX_PARAMCONFIG = 3;
	public final static int INDEX_PARAMDESC = 4;
	public final static int INDEX_CONFIGTYPE = 5;
	public final static int SDO_PROPERTY_COUNT = 6;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TOmSysconfigImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TOmSysconfigImpl(Type type) {
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
	 * Returns the value of the '<em><b>Paramname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paramname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paramname</em>' attribute.
	 * @see #setParamname(java.lang.String)
	 */
	public String getParamname() {
		return DataUtil.toString(super.getByIndex(INDEX_PARAMNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getParamname <em>Paramname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paramname</em>' attribute.
	 * @see #getParamname()
	 */
	public void setParamname(String paramname) {
		super.setByIndex(INDEX_PARAMNAME, paramname);
	}

	/**
	 * Returns the value of the '<em><b>Paramtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paramtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paramtype</em>' attribute.
	 * @see #setParamtype(java.lang.String)
	 */
	public String getParamtype() {
		return DataUtil.toString(super.getByIndex(INDEX_PARAMTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getParamtype <em>Paramtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paramtype</em>' attribute.
	 * @see #getParamtype()
	 */
	public void setParamtype(String paramtype) {
		super.setByIndex(INDEX_PARAMTYPE, paramtype);
	}

	/**
	 * Returns the value of the '<em><b>Paramconfig</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paramconfig</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paramconfig</em>' attribute.
	 * @see #setParamconfig(java.lang.String)
	 */
	public String getParamconfig() {
		return DataUtil.toString(super.getByIndex(INDEX_PARAMCONFIG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getParamconfig <em>Paramconfig</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paramconfig</em>' attribute.
	 * @see #getParamconfig()
	 */
	public void setParamconfig(String paramconfig) {
		super.setByIndex(INDEX_PARAMCONFIG, paramconfig);
	}

	/**
	 * Returns the value of the '<em><b>Paramdesc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paramdesc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paramdesc</em>' attribute.
	 * @see #setParamdesc(java.lang.String)
	 */
	public String getParamdesc() {
		return DataUtil.toString(super.getByIndex(INDEX_PARAMDESC, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getParamdesc <em>Paramdesc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paramdesc</em>' attribute.
	 * @see #getParamdesc()
	 */
	public void setParamdesc(String paramdesc) {
		super.setByIndex(INDEX_PARAMDESC, paramdesc);
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


}