/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlSaveMseg#getMblnr <em>Mblnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlSaveMseg#getMjahr <em>Mjahr</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlSaveMseg extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlSaveMseg";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse", "GenlSaveMseg");

	public final static IObjectFactory<GenlSaveMseg> FACTORY = new IObjectFactory<GenlSaveMseg>() {
		public GenlSaveMseg create() {
			return (GenlSaveMseg) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Mblnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mblnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mblnr</em>' attribute.
	 * @see #setMblnr(java.lang.String)
	 */
	public String getMblnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlSaveMseg#getMblnr <em>Mblnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mblnr</em>' attribute.
	 * @see #getMblnr()
	 */
	public void setMblnr(String mblnr);

	/**
	 * Returns the value of the '<em><b>Mjahr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mjahr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mjahr</em>' attribute.
	 * @see #setMjahr(java.lang.String)
	 */
	public String getMjahr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlSaveMseg#getMjahr <em>Mjahr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mjahr</em>' attribute.
	 * @see #getMjahr()
	 */
	public void setMjahr(String mjahr);


}