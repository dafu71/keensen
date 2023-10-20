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
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectCjdetail;

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
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectCjdetailImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectCjdetailImpl#getCjrecordid <em>Cjrecordid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectCjdetailImpl#getZjwtid <em>Zjwtid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectCjdetailImpl#getZjwtms <em>Zjwtms</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectCjdetailImpl#getZjwtdj <em>Zjwtdj</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectCjdetailImpl#getZjwtjs <em>Zjwtjs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectCjdetailImpl#getText <em>Text</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectCjdetailImpl#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectCjdetailImpl#getTrant <em>Trant</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlInspectCjdetail;
 */

public class GenlInspectCjdetailImpl extends ExtendedDataObjectImpl implements GenlInspectCjdetail {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_CJRECORDID = 1;
	public final static int INDEX_ZJWTID = 2;
	public final static int INDEX_ZJWTMS = 3;
	public final static int INDEX_ZJWTDJ = 4;
	public final static int INDEX_ZJWTJS = 5;
	public final static int INDEX_TEXT = 6;
	public final static int INDEX_TRANU = 7;
	public final static int INDEX_TRANT = 8;
	public final static int SDO_PROPERTY_COUNT = 9;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInspectCjdetailImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInspectCjdetailImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Pkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Pkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Pkid</em>' attribute.
	 * @see #setPkid(java.lang.String)
	 */
	public String getPkid() {
		return DataUtil.toString(super.getByIndex(INDEX_PKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPkid <em>Pkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pkid</em>' attribute.
	 * @see #getPkid()
	 */
	public void setPkid(String pkid) {
		super.setByIndex(INDEX_PKID, pkid);
	}

	/**
	 * Returns the value of the '<em><b>Cjrecordid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Cjrecordid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Cjrecordid</em>' attribute.
	 * @see #setCjrecordid(java.lang.String)
	 */
	public String getCjrecordid() {
		return DataUtil.toString(super.getByIndex(INDEX_CJRECORDID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCjrecordid <em>Cjrecordid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cjrecordid</em>' attribute.
	 * @see #getCjrecordid()
	 */
	public void setCjrecordid(String cjrecordid) {
		super.setByIndex(INDEX_CJRECORDID, cjrecordid);
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
	 * Returns the value of the '<em><b>Zjwtdj</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zjwtdj</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zjwtdj</em>' attribute.
	 * @see #setZjwtdj(java.lang.String)
	 */
	public String getZjwtdj() {
		return DataUtil.toString(super.getByIndex(INDEX_ZJWTDJ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZjwtdj <em>Zjwtdj</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zjwtdj</em>' attribute.
	 * @see #getZjwtdj()
	 */
	public void setZjwtdj(String zjwtdj) {
		super.setByIndex(INDEX_ZJWTDJ, zjwtdj);
	}

	/**
	 * Returns the value of the '<em><b>Zjwtjs</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zjwtjs</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zjwtjs</em>' attribute.
	 * @see #setZjwtjs(java.lang.String)
	 */
	public String getZjwtjs() {
		return DataUtil.toString(super.getByIndex(INDEX_ZJWTJS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZjwtjs <em>Zjwtjs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zjwtjs</em>' attribute.
	 * @see #getZjwtjs()
	 */
	public void setZjwtjs(String zjwtjs) {
		super.setByIndex(INDEX_ZJWTJS, zjwtjs);
	}

	/**
	 * Returns the value of the '<em><b>Text</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Text</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Text</em>' attribute.
	 * @see #setText(java.lang.String)
	 */
	public String getText() {
		return DataUtil.toString(super.getByIndex(INDEX_TEXT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getText <em>Text</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Text</em>' attribute.
	 * @see #getText()
	 */
	public void setText(String text) {
		super.setByIndex(INDEX_TEXT, text);
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