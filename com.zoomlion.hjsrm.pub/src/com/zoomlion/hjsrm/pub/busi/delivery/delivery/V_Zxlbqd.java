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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.V_Zxlbqd#getZleibname <em>Zleibname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.V_Zxlbqd#getNr <em>Nr</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface V_Zxlbqd extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.delivery.delivery.V_Zxlbqd";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.delivery.delivery", "V_Zxlbqd");

	public final static IObjectFactory<V_Zxlbqd> FACTORY = new IObjectFactory<V_Zxlbqd>() {
		public V_Zxlbqd create() {
			return (V_Zxlbqd) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Zleibname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zleibname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zleibname</em>' attribute.
	 * @see #setZleibname(java.lang.String)
	 */
	public String getZleibname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.V_Zxlbqd#getZleibname <em>Zleibname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zleibname</em>' attribute.
	 * @see #getZleibname()
	 */
	public void setZleibname(String zleibname);

	/**
	 * Returns the value of the '<em><b>Nr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Nr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Nr</em>' attribute.
	 * @see #setNr(java.lang.String)
	 */
	public String getNr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.V_Zxlbqd#getNr <em>Nr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Nr</em>' attribute.
	 * @see #getNr()
	 */
	public void setNr(String nr);


}