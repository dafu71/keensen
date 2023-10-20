/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.tools.Tools.impl;

import com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy;
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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtLoginpolicyImpl#getPolicyid <em>Policyid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtLoginpolicyImpl#getPolicyname <em>Policyname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtLoginpolicyImpl#getLognamelimit <em>Lognamelimit</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtLoginpolicyImpl#getLognamelmttype <em>Lognamelmttype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtLoginpolicyImpl#getLogiplimit <em>Logiplimit</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtLoginpolicyImpl#getLogiplmttype <em>Logiplmttype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtLoginpolicyImpl#getStarttimelimit <em>Starttimelimit</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtLoginpolicyImpl#getEndtimelimit <em>Endtimelimit</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtLoginpolicyImpl#getLogtimelmttype <em>Logtimelmttype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtLoginpolicyImpl#getPolicytype <em>Policytype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtLoginpolicyImpl#getIsenabled <em>Isenabled</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtLoginpolicyImpl#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TAtLoginpolicy;
 */

public class TAtLoginpolicyImpl extends ExtendedDataObjectImpl implements TAtLoginpolicy {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_POLICYID = 0;
	public final static int INDEX_POLICYNAME = 1;
	public final static int INDEX_LOGNAMELIMIT = 2;
	public final static int INDEX_LOGNAMELMTTYPE = 3;
	public final static int INDEX_LOGIPLIMIT = 4;
	public final static int INDEX_LOGIPLMTTYPE = 5;
	public final static int INDEX_STARTTIMELIMIT = 6;
	public final static int INDEX_ENDTIMELIMIT = 7;
	public final static int INDEX_LOGTIMELMTTYPE = 8;
	public final static int INDEX_POLICYTYPE = 9;
	public final static int INDEX_ISENABLED = 10;
	public final static int INDEX_DATAORGID = 11;
	public final static int SDO_PROPERTY_COUNT = 12;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAtLoginpolicyImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAtLoginpolicyImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Policyid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Policyid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Policyid</em>' attribute.
	 * @see #setPolicyid(java.lang.String)
	 */
	public String getPolicyid() {
		return DataUtil.toString(super.getByIndex(INDEX_POLICYID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPolicyid <em>Policyid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Policyid</em>' attribute.
	 * @see #getPolicyid()
	 */
	public void setPolicyid(String policyid) {
		super.setByIndex(INDEX_POLICYID, policyid);
	}

	/**
	 * Returns the value of the '<em><b>Policyname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Policyname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Policyname</em>' attribute.
	 * @see #setPolicyname(java.lang.String)
	 */
	public String getPolicyname() {
		return DataUtil.toString(super.getByIndex(INDEX_POLICYNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPolicyname <em>Policyname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Policyname</em>' attribute.
	 * @see #getPolicyname()
	 */
	public void setPolicyname(String policyname) {
		super.setByIndex(INDEX_POLICYNAME, policyname);
	}

	/**
	 * Returns the value of the '<em><b>Lognamelimit</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lognamelimit</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lognamelimit</em>' attribute.
	 * @see #setLognamelimit(java.lang.String)
	 */
	public String getLognamelimit() {
		return DataUtil.toString(super.getByIndex(INDEX_LOGNAMELIMIT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLognamelimit <em>Lognamelimit</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lognamelimit</em>' attribute.
	 * @see #getLognamelimit()
	 */
	public void setLognamelimit(String lognamelimit) {
		super.setByIndex(INDEX_LOGNAMELIMIT, lognamelimit);
	}

	/**
	 * Returns the value of the '<em><b>Lognamelmttype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lognamelmttype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lognamelmttype</em>' attribute.
	 * @see #setLognamelmttype(java.lang.String)
	 */
	public String getLognamelmttype() {
		return DataUtil.toString(super.getByIndex(INDEX_LOGNAMELMTTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLognamelmttype <em>Lognamelmttype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lognamelmttype</em>' attribute.
	 * @see #getLognamelmttype()
	 */
	public void setLognamelmttype(String lognamelmttype) {
		super.setByIndex(INDEX_LOGNAMELMTTYPE, lognamelmttype);
	}

	/**
	 * Returns the value of the '<em><b>Logiplimit</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Logiplimit</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Logiplimit</em>' attribute.
	 * @see #setLogiplimit(java.lang.String)
	 */
	public String getLogiplimit() {
		return DataUtil.toString(super.getByIndex(INDEX_LOGIPLIMIT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLogiplimit <em>Logiplimit</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Logiplimit</em>' attribute.
	 * @see #getLogiplimit()
	 */
	public void setLogiplimit(String logiplimit) {
		super.setByIndex(INDEX_LOGIPLIMIT, logiplimit);
	}

	/**
	 * Returns the value of the '<em><b>Logiplmttype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Logiplmttype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Logiplmttype</em>' attribute.
	 * @see #setLogiplmttype(java.lang.String)
	 */
	public String getLogiplmttype() {
		return DataUtil.toString(super.getByIndex(INDEX_LOGIPLMTTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLogiplmttype <em>Logiplmttype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Logiplmttype</em>' attribute.
	 * @see #getLogiplmttype()
	 */
	public void setLogiplmttype(String logiplmttype) {
		super.setByIndex(INDEX_LOGIPLMTTYPE, logiplmttype);
	}

	/**
	 * Returns the value of the '<em><b>Starttimelimit</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Starttimelimit</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Starttimelimit</em>' attribute.
	 * @see #setStarttimelimit(java.lang.String)
	 */
	public String getStarttimelimit() {
		return DataUtil.toString(super.getByIndex(INDEX_STARTTIMELIMIT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStarttimelimit <em>Starttimelimit</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Starttimelimit</em>' attribute.
	 * @see #getStarttimelimit()
	 */
	public void setStarttimelimit(String starttimelimit) {
		super.setByIndex(INDEX_STARTTIMELIMIT, starttimelimit);
	}

	/**
	 * Returns the value of the '<em><b>Endtimelimit</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Endtimelimit</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Endtimelimit</em>' attribute.
	 * @see #setEndtimelimit(java.lang.String)
	 */
	public String getEndtimelimit() {
		return DataUtil.toString(super.getByIndex(INDEX_ENDTIMELIMIT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEndtimelimit <em>Endtimelimit</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Endtimelimit</em>' attribute.
	 * @see #getEndtimelimit()
	 */
	public void setEndtimelimit(String endtimelimit) {
		super.setByIndex(INDEX_ENDTIMELIMIT, endtimelimit);
	}

	/**
	 * Returns the value of the '<em><b>Logtimelmttype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Logtimelmttype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Logtimelmttype</em>' attribute.
	 * @see #setLogtimelmttype(java.lang.String)
	 */
	public String getLogtimelmttype() {
		return DataUtil.toString(super.getByIndex(INDEX_LOGTIMELMTTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLogtimelmttype <em>Logtimelmttype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Logtimelmttype</em>' attribute.
	 * @see #getLogtimelmttype()
	 */
	public void setLogtimelmttype(String logtimelmttype) {
		super.setByIndex(INDEX_LOGTIMELMTTYPE, logtimelmttype);
	}

	/**
	 * Returns the value of the '<em><b>Policytype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Policytype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Policytype</em>' attribute.
	 * @see #setPolicytype(java.lang.String)
	 */
	public String getPolicytype() {
		return DataUtil.toString(super.getByIndex(INDEX_POLICYTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPolicytype <em>Policytype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Policytype</em>' attribute.
	 * @see #getPolicytype()
	 */
	public void setPolicytype(String policytype) {
		super.setByIndex(INDEX_POLICYTYPE, policytype);
	}

	/**
	 * Returns the value of the '<em><b>Isenabled</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isenabled</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isenabled</em>' attribute.
	 * @see #setIsenabled(java.lang.String)
	 */
	public String getIsenabled() {
		return DataUtil.toString(super.getByIndex(INDEX_ISENABLED, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIsenabled <em>Isenabled</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isenabled</em>' attribute.
	 * @see #getIsenabled()
	 */
	public void setIsenabled(String isenabled) {
		super.setByIndex(INDEX_ISENABLED, isenabled);
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