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
import com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog;

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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtOperlogImpl#getOperatid <em>Operatid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtOperlogImpl#getOperaterid <em>Operaterid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtOperlogImpl#getOperattime <em>Operattime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtOperlogImpl#getOperattype <em>Operattype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtOperlogImpl#getOperatresult <em>Operatresult</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtOperlogImpl#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtOperlogImpl#getOptdesc <em>Optdesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtOperlogImpl#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TAtOperlog;
 */

public class TAtOperlogImpl extends ExtendedDataObjectImpl implements TAtOperlog {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_OPERATID = 0;
	public final static int INDEX_OPERATERID = 1;
	public final static int INDEX_OPERATTIME = 2;
	public final static int INDEX_OPERATTYPE = 3;
	public final static int INDEX_OPERATRESULT = 4;
	public final static int INDEX_STAND = 5;
	public final static int INDEX_OPTDESC = 6;
	public final static int INDEX_DATAORGID = 7;
	public final static int SDO_PROPERTY_COUNT = 8;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAtOperlogImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAtOperlogImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Operatid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operatid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operatid</em>' attribute.
	 * @see #setOperatid(long)
	 */
	public long getOperatid() {
		return DataUtil.toLong(super.getByIndex(INDEX_OPERATID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOperatid <em>Operatid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operatid</em>' attribute.
	 * @see #getOperatid()
	 */
	public void setOperatid(long operatid) {
		super.setByIndex(INDEX_OPERATID, operatid);
	}

	/**
	 * Returns the value of the '<em><b>Operaterid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operaterid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operaterid</em>' attribute.
	 * @see #setOperaterid(long)
	 */
	public long getOperaterid() {
		return DataUtil.toLong(super.getByIndex(INDEX_OPERATERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOperaterid <em>Operaterid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operaterid</em>' attribute.
	 * @see #getOperaterid()
	 */
	public void setOperaterid(long operaterid) {
		super.setByIndex(INDEX_OPERATERID, operaterid);
	}

	/**
	 * Returns the value of the '<em><b>Operattime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operattime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operattime</em>' attribute.
	 * @see #setOperattime(java.util.Date)
	 */
	public Date getOperattime() {
		return DataUtil.toDate(super.getByIndex(INDEX_OPERATTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOperattime <em>Operattime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operattime</em>' attribute.
	 * @see #getOperattime()
	 */
	public void setOperattime(Date operattime) {
		super.setByIndex(INDEX_OPERATTIME, operattime);
	}

	/**
	 * Returns the value of the '<em><b>Operattype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operattype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operattype</em>' attribute.
	 * @see #setOperattype(java.lang.String)
	 */
	public String getOperattype() {
		return DataUtil.toString(super.getByIndex(INDEX_OPERATTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOperattype <em>Operattype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operattype</em>' attribute.
	 * @see #getOperattype()
	 */
	public void setOperattype(String operattype) {
		super.setByIndex(INDEX_OPERATTYPE, operattype);
	}

	/**
	 * Returns the value of the '<em><b>Operatresult</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operatresult</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operatresult</em>' attribute.
	 * @see #setOperatresult(java.lang.String)
	 */
	public String getOperatresult() {
		return DataUtil.toString(super.getByIndex(INDEX_OPERATRESULT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOperatresult <em>Operatresult</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operatresult</em>' attribute.
	 * @see #getOperatresult()
	 */
	public void setOperatresult(String operatresult) {
		super.setByIndex(INDEX_OPERATRESULT, operatresult);
	}

	/**
	 * Returns the value of the '<em><b>Stand</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stand</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stand</em>' attribute.
	 * @see #setStand(java.lang.String)
	 */
	public String getStand() {
		return DataUtil.toString(super.getByIndex(INDEX_STAND, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand) {
		super.setByIndex(INDEX_STAND, stand);
	}

	/**
	 * Returns the value of the '<em><b>Optdesc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Optdesc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Optdesc</em>' attribute.
	 * @see #setOptdesc(java.lang.String)
	 */
	public String getOptdesc() {
		return DataUtil.toString(super.getByIndex(INDEX_OPTDESC, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOptdesc <em>Optdesc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Optdesc</em>' attribute.
	 * @see #getOptdesc()
	 */
	public void setOptdesc(String optdesc) {
		super.setByIndex(INDEX_OPTDESC, optdesc);
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