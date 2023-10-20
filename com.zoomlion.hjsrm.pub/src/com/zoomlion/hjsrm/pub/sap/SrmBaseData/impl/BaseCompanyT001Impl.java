/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseCompanyT001;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BaseCompanyT001Impl#getBukrs <em>Bukrs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BaseCompanyT001Impl#getButxt <em>Butxt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BaseCompanyT001Impl#getAdrnr <em>Adrnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BaseCompanyT001Impl#getStceg <em>Stceg</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements BaseCompanyT001;
 */

public class BaseCompanyT001Impl extends ExtendedDataObjectImpl implements BaseCompanyT001 {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_BUKRS = 0;
	public final static int INDEX_BUTXT = 1;
	public final static int INDEX_ADRNR = 2;
	public final static int INDEX_STCEG = 3;
	public final static int SDO_PROPERTY_COUNT = 4;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public BaseCompanyT001Impl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public BaseCompanyT001Impl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

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
	public String getBukrs() {
		return DataUtil.toString(super.getByIndex(INDEX_BUKRS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBukrs <em>Bukrs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bukrs</em>' attribute.
	 * @see #getBukrs()
	 */
	public void setBukrs(String bukrs) {
		super.setByIndex(INDEX_BUKRS, bukrs);
	}

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
	public String getButxt() {
		return DataUtil.toString(super.getByIndex(INDEX_BUTXT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getButxt <em>Butxt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Butxt</em>' attribute.
	 * @see #getButxt()
	 */
	public void setButxt(String butxt) {
		super.setByIndex(INDEX_BUTXT, butxt);
	}

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
	public String getAdrnr() {
		return DataUtil.toString(super.getByIndex(INDEX_ADRNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAdrnr <em>Adrnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Adrnr</em>' attribute.
	 * @see #getAdrnr()
	 */
	public void setAdrnr(String adrnr) {
		super.setByIndex(INDEX_ADRNR, adrnr);
	}

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
	public String getStceg() {
		return DataUtil.toString(super.getByIndex(INDEX_STCEG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStceg <em>Stceg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stceg</em>' attribute.
	 * @see #getStceg()
	 */
	public void setStceg(String stceg) {
		super.setByIndex(INDEX_STCEG, stceg);
	}


}