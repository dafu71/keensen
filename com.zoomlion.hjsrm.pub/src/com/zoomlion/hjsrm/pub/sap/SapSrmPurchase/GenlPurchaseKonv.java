/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SapSrmPurchase;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseKonv#getKnumv <em>Knumv</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseKonv#getKposn <em>Kposn</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseKonv#getKschl <em>Kschl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseKonv#getKbetr <em>Kbetr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseKonv#getKmein <em>Kmein</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseKonv#getKpein <em>Kpein</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlPurchaseKonv extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseKonv";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.SapSrmPurchase", "GenlPurchaseKonv");

	public final static IObjectFactory<GenlPurchaseKonv> FACTORY = new IObjectFactory<GenlPurchaseKonv>() {
		public GenlPurchaseKonv create() {
			return (GenlPurchaseKonv) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Knumv</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Knumv</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Knumv</em>' attribute.
	 * @see #setKnumv(java.lang.String)
	 */
	public String getKnumv();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseKonv#getKnumv <em>Knumv</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Knumv</em>' attribute.
	 * @see #getKnumv()
	 */
	public void setKnumv(String knumv);

	/**
	 * Returns the value of the '<em><b>Kposn</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kposn</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kposn</em>' attribute.
	 * @see #setKposn(java.lang.String)
	 */
	public String getKposn();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseKonv#getKposn <em>Kposn</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kposn</em>' attribute.
	 * @see #getKposn()
	 */
	public void setKposn(String kposn);

	/**
	 * Returns the value of the '<em><b>Kschl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kschl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kschl</em>' attribute.
	 * @see #setKschl(java.lang.String)
	 */
	public String getKschl();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseKonv#getKschl <em>Kschl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kschl</em>' attribute.
	 * @see #getKschl()
	 */
	public void setKschl(String kschl);

	/**
	 * Returns the value of the '<em><b>Kbetr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kbetr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kbetr</em>' attribute.
	 * @see #setKbetr(java.lang.String)
	 */
	public String getKbetr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseKonv#getKbetr <em>Kbetr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kbetr</em>' attribute.
	 * @see #getKbetr()
	 */
	public void setKbetr(String kbetr);

	/**
	 * Returns the value of the '<em><b>Kmein</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kmein</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kmein</em>' attribute.
	 * @see #setKmein(java.lang.String)
	 */
	public String getKmein();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseKonv#getKmein <em>Kmein</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kmein</em>' attribute.
	 * @see #getKmein()
	 */
	public void setKmein(String kmein);

	/**
	 * Returns the value of the '<em><b>Kpein</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kpein</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kpein</em>' attribute.
	 * @see #setKpein(java.lang.String)
	 */
	public String getKpein();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseKonv#getKpein <em>Kpein</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kpein</em>' attribute.
	 * @see #getKpein()
	 */
	public void setKpein(String kpein);


}