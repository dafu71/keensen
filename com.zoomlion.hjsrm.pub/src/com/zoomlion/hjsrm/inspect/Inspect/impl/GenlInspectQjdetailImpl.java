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
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjdetail;

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
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectQjdetailImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectQjdetailImpl#getQjrecordid <em>Qjrecordid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectQjdetailImpl#getJyxm <em>Jyxm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectQjdetailImpl#getJybz <em>Jybz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectQjdetailImpl#getQjsjz <em>Qjsjz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectQjdetailImpl#getZjwtjs <em>Zjwtjs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectQjdetailImpl#getText <em>Text</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectQjdetailImpl#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectQjdetailImpl#getTrant <em>Trant</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectQjdetailImpl#getText2 <em>Text2</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlInspectQjdetail;
 */

public class GenlInspectQjdetailImpl extends ExtendedDataObjectImpl implements GenlInspectQjdetail {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_QJRECORDID = 1;
	public final static int INDEX_JYXM = 2;
	public final static int INDEX_JYBZ = 3;
	public final static int INDEX_QJSJZ = 4;
	public final static int INDEX_ZJWTJS = 5;
	public final static int INDEX_TEXT = 6;
	public final static int INDEX_TRANU = 7;
	public final static int INDEX_TRANT = 8;
	public final static int INDEX_TEXT2 = 9;
	public final static int SDO_PROPERTY_COUNT = 10;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInspectQjdetailImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInspectQjdetailImpl(Type type) {
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
	 * Returns the value of the '<em><b>Qjrecordid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qjrecordid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qjrecordid</em>' attribute.
	 * @see #setQjrecordid(java.lang.String)
	 */
	public String getQjrecordid() {
		return DataUtil.toString(super.getByIndex(INDEX_QJRECORDID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getQjrecordid <em>Qjrecordid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qjrecordid</em>' attribute.
	 * @see #getQjrecordid()
	 */
	public void setQjrecordid(String qjrecordid) {
		super.setByIndex(INDEX_QJRECORDID, qjrecordid);
	}

	/**
	 * Returns the value of the '<em><b>Jyxm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jyxm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jyxm</em>' attribute.
	 * @see #setJyxm(java.lang.String)
	 */
	public String getJyxm() {
		return DataUtil.toString(super.getByIndex(INDEX_JYXM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getJyxm <em>Jyxm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jyxm</em>' attribute.
	 * @see #getJyxm()
	 */
	public void setJyxm(String jyxm) {
		super.setByIndex(INDEX_JYXM, jyxm);
	}

	/**
	 * Returns the value of the '<em><b>Jybz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jybz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jybz</em>' attribute.
	 * @see #setJybz(java.lang.String)
	 */
	public String getJybz() {
		return DataUtil.toString(super.getByIndex(INDEX_JYBZ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getJybz <em>Jybz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jybz</em>' attribute.
	 * @see #getJybz()
	 */
	public void setJybz(String jybz) {
		super.setByIndex(INDEX_JYBZ, jybz);
	}

	/**
	 * Returns the value of the '<em><b>Qjsjz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qjsjz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qjsjz</em>' attribute.
	 * @see #setQjsjz(java.lang.String)
	 */
	public String getQjsjz() {
		return DataUtil.toString(super.getByIndex(INDEX_QJSJZ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getQjsjz <em>Qjsjz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qjsjz</em>' attribute.
	 * @see #getQjsjz()
	 */
	public void setQjsjz(String qjsjz) {
		super.setByIndex(INDEX_QJSJZ, qjsjz);
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

	/**
	 * Returns the value of the '<em><b>Text2</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Text2</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Text2</em>' attribute.
	 * @see #setText2(java.lang.String)
	 */
	public String getText2() {
		return DataUtil.toString(super.getByIndex(INDEX_TEXT2, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getText2 <em>Text2</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Text2</em>' attribute.
	 * @see #getText2()
	 */
	public void setText2(String text2) {
		super.setByIndex(INDEX_TEXT2, text2);
	}


}