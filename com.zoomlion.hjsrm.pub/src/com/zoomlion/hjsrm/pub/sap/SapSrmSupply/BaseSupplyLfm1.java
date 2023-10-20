/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SapSrmSupply;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfm1#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfm1#getEkorg <em>Ekorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfm1#getErdat <em>Erdat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfm1#getErnam <em>Ernam</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfm1#getVerkf <em>Verkf</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfm1#getTelf1 <em>Telf1</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface BaseSupplyLfm1 extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfm1";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.SapSrmSupply", "BaseSupplyLfm1");

	public final static IObjectFactory<BaseSupplyLfm1> FACTORY = new IObjectFactory<BaseSupplyLfm1>() {
		public BaseSupplyLfm1 create() {
			return (BaseSupplyLfm1) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfm1#getLifnr <em>Lifnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lifnr</em>' attribute.
	 * @see #getLifnr()
	 */
	public void setLifnr(String lifnr);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfm1#getEkorg <em>Ekorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ekorg</em>' attribute.
	 * @see #getEkorg()
	 */
	public void setEkorg(String ekorg);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfm1#getErdat <em>Erdat</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfm1#getErnam <em>Ernam</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ernam</em>' attribute.
	 * @see #getErnam()
	 */
	public void setErnam(String ernam);

	/**
	 * Returns the value of the '<em><b>Verkf</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Verkf</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Verkf</em>' attribute.
	 * @see #setVerkf(java.lang.String)
	 */
	public String getVerkf();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfm1#getVerkf <em>Verkf</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Verkf</em>' attribute.
	 * @see #getVerkf()
	 */
	public void setVerkf(String verkf);

	/**
	 * Returns the value of the '<em><b>Telf1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Telf1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Telf1</em>' attribute.
	 * @see #setTelf1(java.lang.String)
	 */
	public String getTelf1();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfm1#getTelf1 <em>Telf1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Telf1</em>' attribute.
	 * @see #getTelf1()
	 */
	public void setTelf1(String telf1);


}