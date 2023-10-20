/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.delivery.delivery;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlPurchaseNoteLifnr#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlPurchaseNoteLifnr#getZmode <em>Zmode</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlPurchaseNoteLifnr extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlPurchaseNoteLifnr";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.delivery.delivery", "GenlPurchaseNoteLifnr");

	public final static IObjectFactory<GenlPurchaseNoteLifnr> FACTORY = new IObjectFactory<GenlPurchaseNoteLifnr>() {
		public GenlPurchaseNoteLifnr create() {
			return (GenlPurchaseNoteLifnr) DataFactory.INSTANCE.create(TYPE);
		}
	};

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlPurchaseNoteLifnr#getLifnr <em>Lifnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lifnr</em>' attribute.
	 * @see #getLifnr()
	 */
	public void setLifnr(String lifnr);

	/**
	 * Returns the value of the '<em><b>Zmode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zmode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zmode</em>' attribute.
	 * @see #setZmode(java.lang.String)
	 */
	public String getZmode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlPurchaseNoteLifnr#getZmode <em>Zmode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zmode</em>' attribute.
	 * @see #getZmode()
	 */
	public void setZmode(String zmode);


}