/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractAo16Impl#getKappl <em>Kappl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractAo16Impl#getKschl <em>Kschl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractAo16Impl#getEvrtn <em>Evrtn</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractAo16Impl#getEvrtp <em>Evrtp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractAo16Impl#getDatbi <em>Datbi</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractAo16Impl#getDatab <em>Datab</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractAo16Impl#getKnumh <em>Knumh</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlContractAo16;
 */

public class GenlContractAo16Impl extends ExtendedDataObjectImpl implements GenlContractAo16 {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_KAPPL = 0;
	public final static int INDEX_KSCHL = 1;
	public final static int INDEX_EVRTN = 2;
	public final static int INDEX_EVRTP = 3;
	public final static int INDEX_DATBI = 4;
	public final static int INDEX_DATAB = 5;
	public final static int INDEX_KNUMH = 6;
	public final static int SDO_PROPERTY_COUNT = 7;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlContractAo16Impl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlContractAo16Impl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Kappl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kappl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kappl</em>' attribute.
	 * @see #setKappl(java.lang.String)
	 */
	public String getKappl() {
		return DataUtil.toString(super.getByIndex(INDEX_KAPPL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKappl <em>Kappl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kappl</em>' attribute.
	 * @see #getKappl()
	 */
	public void setKappl(String kappl) {
		super.setByIndex(INDEX_KAPPL, kappl);
	}

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
	public String getKschl() {
		return DataUtil.toString(super.getByIndex(INDEX_KSCHL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKschl <em>Kschl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kschl</em>' attribute.
	 * @see #getKschl()
	 */
	public void setKschl(String kschl) {
		super.setByIndex(INDEX_KSCHL, kschl);
	}

	/**
	 * Returns the value of the '<em><b>Evrtn</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Evrtn</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Evrtn</em>' attribute.
	 * @see #setEvrtn(java.lang.String)
	 */
	public String getEvrtn() {
		return DataUtil.toString(super.getByIndex(INDEX_EVRTN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEvrtn <em>Evrtn</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Evrtn</em>' attribute.
	 * @see #getEvrtn()
	 */
	public void setEvrtn(String evrtn) {
		super.setByIndex(INDEX_EVRTN, evrtn);
	}

	/**
	 * Returns the value of the '<em><b>Evrtp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Evrtp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Evrtp</em>' attribute.
	 * @see #setEvrtp(java.lang.String)
	 */
	public String getEvrtp() {
		return DataUtil.toString(super.getByIndex(INDEX_EVRTP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEvrtp <em>Evrtp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Evrtp</em>' attribute.
	 * @see #getEvrtp()
	 */
	public void setEvrtp(String evrtp) {
		super.setByIndex(INDEX_EVRTP, evrtp);
	}

	/**
	 * Returns the value of the '<em><b>Datbi</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Datbi</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Datbi</em>' attribute.
	 * @see #setDatbi(java.util.Date)
	 */
	public Date getDatbi() {
		return DataUtil.toDate(super.getByIndex(INDEX_DATBI, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDatbi <em>Datbi</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Datbi</em>' attribute.
	 * @see #getDatbi()
	 */
	public void setDatbi(Date datbi) {
		super.setByIndex(INDEX_DATBI, datbi);
	}

	/**
	 * Returns the value of the '<em><b>Datab</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Datab</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Datab</em>' attribute.
	 * @see #setDatab(java.util.Date)
	 */
	public Date getDatab() {
		return DataUtil.toDate(super.getByIndex(INDEX_DATAB, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDatab <em>Datab</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Datab</em>' attribute.
	 * @see #getDatab()
	 */
	public void setDatab(Date datab) {
		super.setByIndex(INDEX_DATAB, datab);
	}

	/**
	 * Returns the value of the '<em><b>Knumh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Knumh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Knumh</em>' attribute.
	 * @see #setKnumh(java.lang.String)
	 */
	public String getKnumh() {
		return DataUtil.toString(super.getByIndex(INDEX_KNUMH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKnumh <em>Knumh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Knumh</em>' attribute.
	 * @see #getKnumh()
	 */
	public void setKnumh(String knumh) {
		super.setByIndex(INDEX_KNUMH, knumh);
	}


}