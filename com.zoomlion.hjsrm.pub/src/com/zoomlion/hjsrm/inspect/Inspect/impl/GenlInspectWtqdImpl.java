/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.inspect.Inspect.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWtqd;

import commonj.sdo.Type;

import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWtqdImpl#getZjwtid <em>Zjwtid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWtqdImpl#getZjwtms <em>Zjwtms</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWtqdImpl#getWerks <em>Werks</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWtqdImpl#getBukrs <em>Bukrs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWtqdImpl#getStatu <em>Statu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWtqdImpl#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWtqdImpl#getTrant <em>Trant</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlInspectWtqd;
 */

public class GenlInspectWtqdImpl extends ExtendedDataObjectImpl implements GenlInspectWtqd {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_ZJWTID = 0;
	public final static int INDEX_ZJWTMS = 1;
	public final static int INDEX_WERKS = 2;
	public final static int INDEX_BUKRS = 3;
	public final static int INDEX_STATU = 4;
	public final static int INDEX_TRANU = 5;
	public final static int INDEX_TRANT = 6;
	public final static int SDO_PROPERTY_COUNT = 7;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInspectWtqdImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInspectWtqdImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Zjwtid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zjwtid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zjwtid</em>' attribute.
	 * @see #setZjwtid(java.lang.String)
	 */
	public String getZjwtid() {
		return DataUtil.toString(super.getByIndex(INDEX_ZJWTID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZjwtid <em>Zjwtid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zjwtid</em>' attribute.
	 * @see #getZjwtid()
	 */
	public void setZjwtid(String zjwtid) {
		super.setByIndex(INDEX_ZJWTID, zjwtid);
	}

	/**
	 * Returns the value of the '<em><b>Zjwtms</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zjwtms</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zjwtms</em>' attribute.
	 * @see #setZjwtms(java.lang.String)
	 */
	public String getZjwtms() {
		return DataUtil.toString(super.getByIndex(INDEX_ZJWTMS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZjwtms <em>Zjwtms</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zjwtms</em>' attribute.
	 * @see #getZjwtms()
	 */
	public void setZjwtms(String zjwtms) {
		super.setByIndex(INDEX_ZJWTMS, zjwtms);
	}

	/**
	 * Returns the value of the '<em><b>Werks</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Werks</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Werks</em>' attribute.
	 * @see #setWerks(java.lang.String)
	 */
	public String getWerks() {
		return DataUtil.toString(super.getByIndex(INDEX_WERKS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWerks <em>Werks</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Werks</em>' attribute.
	 * @see #getWerks()
	 */
	public void setWerks(String werks) {
		super.setByIndex(INDEX_WERKS, werks);
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
	 * Returns the value of the '<em><b>Statu</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Statu</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Statu</em>' attribute.
	 * @see #setStatu(java.lang.String)
	 */
	public String getStatu() {
		return DataUtil.toString(super.getByIndex(INDEX_STATU, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStatu <em>Statu</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Statu</em>' attribute.
	 * @see #getStatu()
	 */
	public void setStatu(String statu) {
		super.setByIndex(INDEX_STATU, statu);
	}

	/**
	 * Returns the value of the '<em><b>Tranu</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Tranu</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Tranu</em>' attribute.
	 * @see #setTranu(java.lang.String)
	 */
	public String getTranu() {
		return DataUtil.toString(super.getByIndex(INDEX_TRANU, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTranu <em>Tranu</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Tranu</em>' attribute.
	 * @see #getTranu()
	 */
	public void setTranu(String tranu) {
		super.setByIndex(INDEX_TRANU, tranu);
	}

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
	public Date getTrant() {
		return DataUtil.toDate(super.getByIndex(INDEX_TRANT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTrant <em>Trant</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Trant</em>' attribute.
	 * @see #getTrant()
	 */
	public void setTrant(Date trant) {
		super.setByIndex(INDEX_TRANT, trant);
	}


}