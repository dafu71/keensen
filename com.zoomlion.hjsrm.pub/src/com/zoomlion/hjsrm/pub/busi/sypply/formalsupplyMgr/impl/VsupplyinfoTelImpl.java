/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.VsupplyinfoTel;

import commonj.sdo.Type;

import java.math.BigDecimal;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VsupplyinfoTelImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VsupplyinfoTelImpl#getZttel <em>Zttel</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VsupplyinfoTelImpl#getZtext <em>Ztext</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VsupplyinfoTelImpl#getZname <em>Zname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VsupplyinfoTelImpl#getZmtel <em>Zmtel</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VsupplyinfoTelImpl#getZptel <em>Zptel</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.VsupplyinfoTelImpl#getEmail <em>Email</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements VsupplyinfoTel;
 */

public class VsupplyinfoTelImpl extends ExtendedDataObjectImpl implements VsupplyinfoTel {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_LIFNR = 0;
	public final static int INDEX_ZTTEL = 1;
	public final static int INDEX_ZTEXT = 2;
	public final static int INDEX_ZNAME = 3;
	public final static int INDEX_ZMTEL = 4;
	public final static int INDEX_ZPTEL = 5;
	public final static int INDEX_EMAIL = 6;
	public final static int SDO_PROPERTY_COUNT = 7;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public VsupplyinfoTelImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public VsupplyinfoTelImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
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

	/**
	 * Returns the value of the '<em><b>Zttel</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zttel</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zttel</em>' attribute.
	 * @see #setZttel(java.math.BigDecimal)
	 */
	public BigDecimal getZttel() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_ZTTEL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZttel <em>Zttel</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zttel</em>' attribute.
	 * @see #getZttel()
	 */
	public void setZttel(BigDecimal zttel) {
		super.setByIndex(INDEX_ZTTEL, zttel);
	}

	/**
	 * Returns the value of the '<em><b>Ztext</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ztext</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ztext</em>' attribute.
	 * @see #setZtext(java.lang.String)
	 */
	public String getZtext() {
		return DataUtil.toString(super.getByIndex(INDEX_ZTEXT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZtext <em>Ztext</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ztext</em>' attribute.
	 * @see #getZtext()
	 */
	public void setZtext(String ztext) {
		super.setByIndex(INDEX_ZTEXT, ztext);
	}

	/**
	 * Returns the value of the '<em><b>Zname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zname</em>' attribute.
	 * @see #setZname(java.lang.String)
	 */
	public String getZname() {
		return DataUtil.toString(super.getByIndex(INDEX_ZNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZname <em>Zname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zname</em>' attribute.
	 * @see #getZname()
	 */
	public void setZname(String zname) {
		super.setByIndex(INDEX_ZNAME, zname);
	}

	/**
	 * Returns the value of the '<em><b>Zmtel</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zmtel</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zmtel</em>' attribute.
	 * @see #setZmtel(java.lang.String)
	 */
	public String getZmtel() {
		return DataUtil.toString(super.getByIndex(INDEX_ZMTEL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZmtel <em>Zmtel</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zmtel</em>' attribute.
	 * @see #getZmtel()
	 */
	public void setZmtel(String zmtel) {
		super.setByIndex(INDEX_ZMTEL, zmtel);
	}

	/**
	 * Returns the value of the '<em><b>Zptel</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zptel</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zptel</em>' attribute.
	 * @see #setZptel(java.lang.String)
	 */
	public String getZptel() {
		return DataUtil.toString(super.getByIndex(INDEX_ZPTEL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZptel <em>Zptel</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zptel</em>' attribute.
	 * @see #getZptel()
	 */
	public void setZptel(String zptel) {
		super.setByIndex(INDEX_ZPTEL, zptel);
	}

	/**
	 * Returns the value of the '<em><b>Email</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Email</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Email</em>' attribute.
	 * @see #setEmail(java.lang.String)
	 */
	public String getEmail() {
		return DataUtil.toString(super.getByIndex(INDEX_EMAIL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEmail <em>Email</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Email</em>' attribute.
	 * @see #getEmail()
	 */
	public void setEmail(String email) {
		super.setByIndex(INDEX_EMAIL, email);
	}


}