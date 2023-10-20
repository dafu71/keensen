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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1#getBukrs <em>Bukrs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1#getErdat <em>Erdat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1#getErnam <em>Ernam</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1#getSperr <em>Sperr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1#getLoevm <em>Loevm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1#getAkont <em>Akont</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface BaseSupplyLfb1 extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.SapSrmSupply", "BaseSupplyLfb1");

	public final static IObjectFactory<BaseSupplyLfb1> FACTORY = new IObjectFactory<BaseSupplyLfb1>() {
		public BaseSupplyLfb1 create() {
			return (BaseSupplyLfb1) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1#getLifnr <em>Lifnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lifnr</em>' attribute.
	 * @see #getLifnr()
	 */
	public void setLifnr(String lifnr);

	/**
	 * Returns the value of the '<em><b>Bukrs</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bukrs</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bukrs</em>' attribute.
	 * @see #setBukrs(java.lang.String)
	 */
	public String getBukrs();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1#getBukrs <em>Bukrs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bukrs</em>' attribute.
	 * @see #getBukrs()
	 */
	public void setBukrs(String bukrs);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1#getErdat <em>Erdat</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1#getErnam <em>Ernam</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ernam</em>' attribute.
	 * @see #getErnam()
	 */
	public void setErnam(String ernam);

	/**
	 * Returns the value of the '<em><b>Sperr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sperr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sperr</em>' attribute.
	 * @see #setSperr(java.lang.String)
	 */
	public String getSperr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1#getSperr <em>Sperr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sperr</em>' attribute.
	 * @see #getSperr()
	 */
	public void setSperr(String sperr);

	/**
	 * Returns the value of the '<em><b>Loevm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Loevm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Loevm</em>' attribute.
	 * @see #setLoevm(java.lang.String)
	 */
	public String getLoevm();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1#getLoevm <em>Loevm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Loevm</em>' attribute.
	 * @see #getLoevm()
	 */
	public void setLoevm(String loevm);

	/**
	 * Returns the value of the '<em><b>Akont</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Akont</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Akont</em>' attribute.
	 * @see #setAkont(java.lang.String)
	 */
	public String getAkont();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1#getAkont <em>Akont</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Akont</em>' attribute.
	 * @see #getAkont()
	 */
	public void setAkont(String akont);


}