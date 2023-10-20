/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BasePurchaseT024Impl#getEkgrp <em>Ekgrp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BasePurchaseT024Impl#getEknam <em>Eknam</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BasePurchaseT024Impl#getEktel <em>Ektel</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BasePurchaseT024Impl#getTelfx <em>Telfx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BasePurchaseT024Impl#getTelNumber <em>TelNumber</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BasePurchaseT024Impl#getTelExtens <em>TelExtens</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BasePurchaseT024Impl#getSmtpAddr <em>SmtpAddr</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements BasePurchaseT024;
 */

public class BasePurchaseT024Impl extends ExtendedDataObjectImpl implements BasePurchaseT024 {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_EKGRP = 0;
	public final static int INDEX_EKNAM = 1;
	public final static int INDEX_EKTEL = 2;
	public final static int INDEX_TELFX = 3;
	public final static int INDEX_TELNUMBER = 4;
	public final static int INDEX_TELEXTENS = 5;
	public final static int INDEX_SMTPADDR = 6;
	public final static int SDO_PROPERTY_COUNT = 7;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public BasePurchaseT024Impl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public BasePurchaseT024Impl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Ekgrp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ekgrp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ekgrp</em>' attribute.
	 * @see #setEkgrp(java.lang.String)
	 */
	public String getEkgrp() {
		return DataUtil.toString(super.getByIndex(INDEX_EKGRP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEkgrp <em>Ekgrp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ekgrp</em>' attribute.
	 * @see #getEkgrp()
	 */
	public void setEkgrp(String ekgrp) {
		super.setByIndex(INDEX_EKGRP, ekgrp);
	}

	/**
	 * Returns the value of the '<em><b>Eknam</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Eknam</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Eknam</em>' attribute.
	 * @see #setEknam(java.lang.String)
	 */
	public String getEknam() {
		return DataUtil.toString(super.getByIndex(INDEX_EKNAM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEknam <em>Eknam</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Eknam</em>' attribute.
	 * @see #getEknam()
	 */
	public void setEknam(String eknam) {
		super.setByIndex(INDEX_EKNAM, eknam);
	}

	/**
	 * Returns the value of the '<em><b>Ektel</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ektel</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ektel</em>' attribute.
	 * @see #setEktel(java.lang.String)
	 */
	public String getEktel() {
		return DataUtil.toString(super.getByIndex(INDEX_EKTEL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEktel <em>Ektel</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ektel</em>' attribute.
	 * @see #getEktel()
	 */
	public void setEktel(String ektel) {
		super.setByIndex(INDEX_EKTEL, ektel);
	}

	/**
	 * Returns the value of the '<em><b>Telfx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Telfx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Telfx</em>' attribute.
	 * @see #setTelfx(java.lang.String)
	 */
	public String getTelfx() {
		return DataUtil.toString(super.getByIndex(INDEX_TELFX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTelfx <em>Telfx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Telfx</em>' attribute.
	 * @see #getTelfx()
	 */
	public void setTelfx(String telfx) {
		super.setByIndex(INDEX_TELFX, telfx);
	}

	/**
	 * Returns the value of the '<em><b>TelNumber</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TelNumber</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TelNumber</em>' attribute.
	 * @see #setTelNumber(java.lang.String)
	 */
	public String getTelNumber() {
		return DataUtil.toString(super.getByIndex(INDEX_TELNUMBER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTelNumber <em>TelNumber</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TelNumber</em>' attribute.
	 * @see #getTelNumber()
	 */
	public void setTelNumber(String telNumber) {
		super.setByIndex(INDEX_TELNUMBER, telNumber);
	}

	/**
	 * Returns the value of the '<em><b>TelExtens</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TelExtens</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TelExtens</em>' attribute.
	 * @see #setTelExtens(java.lang.String)
	 */
	public String getTelExtens() {
		return DataUtil.toString(super.getByIndex(INDEX_TELEXTENS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTelExtens <em>TelExtens</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TelExtens</em>' attribute.
	 * @see #getTelExtens()
	 */
	public void setTelExtens(String telExtens) {
		super.setByIndex(INDEX_TELEXTENS, telExtens);
	}

	/**
	 * Returns the value of the '<em><b>SmtpAddr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>SmtpAddr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>SmtpAddr</em>' attribute.
	 * @see #setSmtpAddr(java.lang.String)
	 */
	public String getSmtpAddr() {
		return DataUtil.toString(super.getByIndex(INDEX_SMTPADDR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSmtpAddr <em>SmtpAddr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>SmtpAddr</em>' attribute.
	 * @see #getSmtpAddr()
	 */
	public void setSmtpAddr(String smtpAddr) {
		super.setByIndex(INDEX_SMTPADDR, smtpAddr);
	}


}