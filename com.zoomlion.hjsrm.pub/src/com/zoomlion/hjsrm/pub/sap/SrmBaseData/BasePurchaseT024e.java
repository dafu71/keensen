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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024e#getEkorg <em>Ekorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024e#getEkotx <em>Ekotx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024e#getTrant <em>Trant</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface BasePurchaseT024e extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024e";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.SrmBaseData", "BasePurchaseT024e");

	public final static IObjectFactory<BasePurchaseT024e> FACTORY = new IObjectFactory<BasePurchaseT024e>() {
		public BasePurchaseT024e create() {
			return (BasePurchaseT024e) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Ekorg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ekorg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ekorg</em>' attribute.
	 * @see #setEkorg(java.lang.String)
	 */
	public String getEkorg();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024e#getEkorg <em>Ekorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ekorg</em>' attribute.
	 * @see #getEkorg()
	 */
	public void setEkorg(String ekorg);

	/**
	 * Returns the value of the '<em><b>Ekotx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ekotx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ekotx</em>' attribute.
	 * @see #setEkotx(java.lang.String)
	 */
	public String getEkotx();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024e#getEkotx <em>Ekotx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ekotx</em>' attribute.
	 * @see #getEkotx()
	 */
	public void setEkotx(String ekotx);

	/**
	 * Returns the value of the '<em><b>Trant</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Trant</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Trant</em>' attribute.
	 * @see #setTrant(java.util.Date)
	 */
	public Date getTrant();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BasePurchaseT024e#getTrant <em>Trant</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Trant</em>' attribute.
	 * @see #getTrant()
	 */
	public void setTrant(Date trant);


}