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

import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina#getInfnr <em>Infnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina#getMatkl <em>Matkl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina#getLoekz <em>Loekz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina#getErdat <em>Erdat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina#getErnam <em>Ernam</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina#getMeins <em>Meins</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface BasePurchaseEina extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.SrmBaseData", "BasePurchaseEina");

	public final static IObjectFactory<BasePurchaseEina> FACTORY = new IObjectFactory<BasePurchaseEina>() {
		public BasePurchaseEina create() {
			return (BasePurchaseEina) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Infnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Infnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Infnr</em>' attribute.
	 * @see #setInfnr(java.lang.String)
	 */
	public String getInfnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina#getInfnr <em>Infnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Infnr</em>' attribute.
	 * @see #getInfnr()
	 */
	public void setInfnr(String infnr);

	/**
	 * Returns the value of the '<em><b>Matnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Matnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Matnr</em>' attribute.
	 * @see #setMatnr(java.lang.String)
	 */
	public String getMatnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina#getMatnr <em>Matnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matnr</em>' attribute.
	 * @see #getMatnr()
	 */
	public void setMatnr(String matnr);

	/**
	 * Returns the value of the '<em><b>Matkl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Matkl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Matkl</em>' attribute.
	 * @see #setMatkl(java.lang.String)
	 */
	public String getMatkl();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina#getMatkl <em>Matkl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matkl</em>' attribute.
	 * @see #getMatkl()
	 */
	public void setMatkl(String matkl);

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
	public String getLifnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina#getLifnr <em>Lifnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lifnr</em>' attribute.
	 * @see #getLifnr()
	 */
	public void setLifnr(String lifnr);

	/**
	 * Returns the value of the '<em><b>Loekz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Loekz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Loekz</em>' attribute.
	 * @see #setLoekz(java.lang.String)
	 */
	public String getLoekz();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina#getLoekz <em>Loekz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Loekz</em>' attribute.
	 * @see #getLoekz()
	 */
	public void setLoekz(String loekz);

	/**
	 * Returns the value of the '<em><b>Erdat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Erdat</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Erdat</em>' attribute.
	 * @see #setErdat(java.util.Date)
	 */
	public Date getErdat();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina#getErdat <em>Erdat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Erdat</em>' attribute.
	 * @see #getErdat()
	 */
	public void setErdat(Date erdat);

	/**
	 * Returns the value of the '<em><b>Ernam</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ernam</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ernam</em>' attribute.
	 * @see #setErnam(java.lang.String)
	 */
	public String getErnam();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina#getErnam <em>Ernam</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ernam</em>' attribute.
	 * @see #getErnam()
	 */
	public void setErnam(String ernam);

	/**
	 * Returns the value of the '<em><b>Meins</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meins</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meins</em>' attribute.
	 * @see #setMeins(java.lang.String)
	 */
	public String getMeins();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseEina#getMeins <em>Meins</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meins</em>' attribute.
	 * @see #getMeins()
	 */
	public void setMeins(String meins);


}