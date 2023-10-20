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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseCompanyT001#getBukrs <em>Bukrs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseCompanyT001#getButxt <em>Butxt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseCompanyT001#getAdrnr <em>Adrnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseCompanyT001#getStceg <em>Stceg</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface BaseCompanyT001 extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseCompanyT001";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.SrmBaseData", "BaseCompanyT001");

	public final static IObjectFactory<BaseCompanyT001> FACTORY = new IObjectFactory<BaseCompanyT001>() {
		public BaseCompanyT001 create() {
			return (BaseCompanyT001) DataFactory.INSTANCE.create(TYPE);
		}
	};

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseCompanyT001#getBukrs <em>Bukrs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bukrs</em>' attribute.
	 * @see #getBukrs()
	 */
	public void setBukrs(String bukrs);

	/**
	 * Returns the value of the '<em><b>Butxt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Butxt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Butxt</em>' attribute.
	 * @see #setButxt(java.lang.String)
	 */
	public String getButxt();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseCompanyT001#getButxt <em>Butxt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Butxt</em>' attribute.
	 * @see #getButxt()
	 */
	public void setButxt(String butxt);

	/**
	 * Returns the value of the '<em><b>Adrnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Adrnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Adrnr</em>' attribute.
	 * @see #setAdrnr(java.lang.String)
	 */
	public String getAdrnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseCompanyT001#getAdrnr <em>Adrnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Adrnr</em>' attribute.
	 * @see #getAdrnr()
	 */
	public void setAdrnr(String adrnr);

	/**
	 * Returns the value of the '<em><b>Stceg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stceg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stceg</em>' attribute.
	 * @see #setStceg(java.lang.String)
	 */
	public String getStceg();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseCompanyT001#getStceg <em>Stceg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stceg</em>' attribute.
	 * @see #getStceg()
	 */
	public void setStceg(String stceg);


}