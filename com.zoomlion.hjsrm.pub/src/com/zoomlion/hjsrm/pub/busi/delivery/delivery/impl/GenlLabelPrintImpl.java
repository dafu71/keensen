/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlLabelPrint;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlLabelPrintImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlLabelPrintImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlLabelPrintImpl#getShDate <em>ShDate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlLabelPrintImpl#getPrintNum <em>PrintNum</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlLabelPrint;
 */

public class GenlLabelPrintImpl extends ExtendedDataObjectImpl implements GenlLabelPrint {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_MATNR = 0;
	public final static int INDEX_LIFNR = 1;
	public final static int INDEX_SHDATE = 2;
	public final static int INDEX_PRINTNUM = 3;
	public final static int SDO_PROPERTY_COUNT = 4;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlLabelPrintImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlLabelPrintImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Matnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Matnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Matnr</em>' attribute.
	 * @see #setMatnr(java.lang.String)
	 */
	public String getMatnr() {
		return DataUtil.toString(super.getByIndex(INDEX_MATNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMatnr <em>Matnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matnr</em>' attribute.
	 * @see #getMatnr()
	 */
	public void setMatnr(String matnr) {
		super.setByIndex(INDEX_MATNR, matnr);
	}

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
	public String getLifnr() {
		return DataUtil.toString(super.getByIndex(INDEX_LIFNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLifnr <em>Lifnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lifnr</em>' attribute.
	 * @see #getLifnr()
	 */
	public void setLifnr(String lifnr) {
		super.setByIndex(INDEX_LIFNR, lifnr);
	}

	/**
	 * Returns the value of the '<em><b>ShDate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ShDate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ShDate</em>' attribute.
	 * @see #setShDate(java.lang.String)
	 */
	public String getShDate() {
		return DataUtil.toString(super.getByIndex(INDEX_SHDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getShDate <em>ShDate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ShDate</em>' attribute.
	 * @see #getShDate()
	 */
	public void setShDate(String shDate) {
		super.setByIndex(INDEX_SHDATE, shDate);
	}

	/**
	 * Returns the value of the '<em><b>PrintNum</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>PrintNum</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>PrintNum</em>' attribute.
	 * @see #setPrintNum(int)
	 */
	public int getPrintNum() {
		return DataUtil.toInt(super.getByIndex(INDEX_PRINTNUM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPrintNum <em>PrintNum</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>PrintNum</em>' attribute.
	 * @see #getPrintNum()
	 */
	public void setPrintNum(int printNum) {
		super.setByIndex(INDEX_PRINTNUM, printNum);
	}


}