/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SrmBaseData;

import com.eos.data.sdo.IObjectFactory;

import commonj.sdo.DataObject;
import commonj.sdo.Type;
import commonj.sdo.helper.DataFactory;
import commonj.sdo.helper.TypeHelper;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024#getEkgrp <em>Ekgrp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024#getEknam <em>Eknam</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024#getEktel <em>Ektel</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024#getTelfx <em>Telfx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024#getTelNumber <em>TelNumber</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024#getTelExtens <em>TelExtens</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024#getSmtpAddr <em>SmtpAddr</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface BasePurchaseT024 extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.SrmBaseData", "BasePurchaseT024");

	public final static IObjectFactory<BasePurchaseT024> FACTORY = new IObjectFactory<BasePurchaseT024>() {
		public BasePurchaseT024 create() {
			return (BasePurchaseT024) DataFactory.INSTANCE.create(TYPE);
		}
	};

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
	public String getEkgrp();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024#getEkgrp <em>Ekgrp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ekgrp</em>' attribute.
	 * @see #getEkgrp()
	 */
	public void setEkgrp(String ekgrp);

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
	public String getEknam();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024#getEknam <em>Eknam</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Eknam</em>' attribute.
	 * @see #getEknam()
	 */
	public void setEknam(String eknam);

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
	public String getEktel();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024#getEktel <em>Ektel</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ektel</em>' attribute.
	 * @see #getEktel()
	 */
	public void setEktel(String ektel);

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
	public String getTelfx();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024#getTelfx <em>Telfx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Telfx</em>' attribute.
	 * @see #getTelfx()
	 */
	public void setTelfx(String telfx);

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
	public String getTelNumber();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024#getTelNumber <em>TelNumber</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TelNumber</em>' attribute.
	 * @see #getTelNumber()
	 */
	public void setTelNumber(String telNumber);

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
	public String getTelExtens();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024#getTelExtens <em>TelExtens</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TelExtens</em>' attribute.
	 * @see #getTelExtens()
	 */
	public void setTelExtens(String telExtens);

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
	public String getSmtpAddr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024#getSmtpAddr <em>SmtpAddr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>SmtpAddr</em>' attribute.
	 * @see #getSmtpAddr()
	 */
	public void setSmtpAddr(String smtpAddr);


}