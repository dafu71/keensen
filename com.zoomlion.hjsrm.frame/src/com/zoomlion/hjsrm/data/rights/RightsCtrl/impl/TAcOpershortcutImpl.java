/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.rights.RightsCtrl.impl;

import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOpershortcut;
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
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOpershortcutImpl#getOperatorid <em>Operatorid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOpershortcutImpl#getResid <em>Resid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOpershortcutImpl#getAliasname <em>Aliasname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOpershortcutImpl#getOrderno <em>Orderno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOpershortcutImpl#getImagepath <em>Imagepath</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOpershortcutImpl#getOpenmentype <em>Openmentype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcOpershortcutImpl#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TAcOpershortcut;
 */

public class TAcOpershortcutImpl extends ExtendedDataObjectImpl implements TAcOpershortcut {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_OPERATORID = 0;
	public final static int INDEX_RESID = 1;
	public final static int INDEX_ALIASNAME = 2;
	public final static int INDEX_ORDERNO = 3;
	public final static int INDEX_IMAGEPATH = 4;
	public final static int INDEX_OPENMENTYPE = 5;
	public final static int INDEX_DATAORGID = 6;
	public final static int SDO_PROPERTY_COUNT = 7;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAcOpershortcutImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAcOpershortcutImpl(Type type) {
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
	 * Returns the value of the '<em><b>Resid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Resid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Resid</em>' attribute.
	 * @see #setResid(int)
	 */
	public int getResid() {
		return DataUtil.toInt(super.getByIndex(INDEX_RESID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getResid <em>Resid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Resid</em>' attribute.
	 * @see #getResid()
	 */
	public void setResid(int resid) {
		super.setByIndex(INDEX_RESID, resid);
	}

	/**
	 * Returns the value of the '<em><b>Aliasname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Aliasname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Aliasname</em>' attribute.
	 * @see #setAliasname(java.lang.String)
	 */
	public String getAliasname() {
		return DataUtil.toString(super.getByIndex(INDEX_ALIASNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAliasname <em>Aliasname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Aliasname</em>' attribute.
	 * @see #getAliasname()
	 */
	public void setAliasname(String aliasname) {
		super.setByIndex(INDEX_ALIASNAME, aliasname);
	}

	/**
	 * Returns the value of the '<em><b>Orderno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Orderno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Orderno</em>' attribute.
	 * @see #setOrderno(long)
	 */
	public long getOrderno() {
		return DataUtil.toLong(super.getByIndex(INDEX_ORDERNO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOrderno <em>Orderno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orderno</em>' attribute.
	 * @see #getOrderno()
	 */
	public void setOrderno(long orderno) {
		super.setByIndex(INDEX_ORDERNO, orderno);
	}

	/**
	 * Returns the value of the '<em><b>Imagepath</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Imagepath</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Imagepath</em>' attribute.
	 * @see #setImagepath(java.lang.String)
	 */
	public String getImagepath() {
		return DataUtil.toString(super.getByIndex(INDEX_IMAGEPATH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getImagepath <em>Imagepath</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Imagepath</em>' attribute.
	 * @see #getImagepath()
	 */
	public void setImagepath(String imagepath) {
		super.setByIndex(INDEX_IMAGEPATH, imagepath);
	}

	/**
	 * Returns the value of the '<em><b>Openmentype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Openmentype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Openmentype</em>' attribute.
	 * @see #setOpenmentype(java.lang.String)
	 */
	public String getOpenmentype() {
		return DataUtil.toString(super.getByIndex(INDEX_OPENMENTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOpenmentype <em>Openmentype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Openmentype</em>' attribute.
	 * @see #getOpenmentype()
	 */
	public void setOpenmentype(String openmentype) {
		super.setByIndex(INDEX_OPENMENTYPE, openmentype);
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