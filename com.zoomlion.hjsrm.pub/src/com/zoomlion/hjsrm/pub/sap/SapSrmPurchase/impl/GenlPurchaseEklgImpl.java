/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseEklg;

import commonj.sdo.Type;

import java.math.BigDecimal;
import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEklgImpl#getId <em>Id</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEklgImpl#getEbeln <em>Ebeln</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEklgImpl#getEbelp <em>Ebelp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEklgImpl#getZquer <em>Zquer</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEklgImpl#getZtext <em>Ztext</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEklgImpl#getZcret <em>Zcret</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEklgImpl#getZcdat <em>Zcdat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEklgImpl#getAnswer <em>Answer</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlPurchaseEklg;
 */

public class GenlPurchaseEklgImpl extends ExtendedDataObjectImpl implements GenlPurchaseEklg {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_ID = 0;
	public final static int INDEX_EBELN = 1;
	public final static int INDEX_EBELP = 2;
	public final static int INDEX_ZQUER = 3;
	public final static int INDEX_ZTEXT = 4;
	public final static int INDEX_ZCRET = 5;
	public final static int INDEX_ZCDAT = 6;
	public final static int INDEX_ANSWER = 7;
	public final static int SDO_PROPERTY_COUNT = 8;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlPurchaseEklgImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlPurchaseEklgImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Id</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Id</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Id</em>' attribute.
	 * @see #setId(long)
	 */
	public long getId() {
		return DataUtil.toLong(super.getByIndex(INDEX_ID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getId <em>Id</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Id</em>' attribute.
	 * @see #getId()
	 */
	public void setId(long id) {
		super.setByIndex(INDEX_ID, id);
	}

	/**
	 * Returns the value of the '<em><b>Ebeln</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ebeln</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ebeln</em>' attribute.
	 * @see #setEbeln(java.lang.String)
	 */
	public String getEbeln() {
		return DataUtil.toString(super.getByIndex(INDEX_EBELN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEbeln <em>Ebeln</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ebeln</em>' attribute.
	 * @see #getEbeln()
	 */
	public void setEbeln(String ebeln) {
		super.setByIndex(INDEX_EBELN, ebeln);
	}

	/**
	 * Returns the value of the '<em><b>Ebelp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ebelp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ebelp</em>' attribute.
	 * @see #setEbelp(java.lang.String)
	 */
	public String getEbelp() {
		return DataUtil.toString(super.getByIndex(INDEX_EBELP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEbelp <em>Ebelp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ebelp</em>' attribute.
	 * @see #getEbelp()
	 */
	public void setEbelp(String ebelp) {
		super.setByIndex(INDEX_EBELP, ebelp);
	}

	/**
	 * Returns the value of the '<em><b>Zquer</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zquer</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zquer</em>' attribute.
	 * @see #setZquer(java.math.BigDecimal)
	 */
	public BigDecimal getZquer() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_ZQUER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZquer <em>Zquer</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zquer</em>' attribute.
	 * @see #getZquer()
	 */
	public void setZquer(BigDecimal zquer) {
		super.setByIndex(INDEX_ZQUER, zquer);
	}

	/**
	 * Returns the value of the '<em><b>Ztext</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ztext</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ztext</em>' attribute.
	 * @see #setZtext(java.lang.String)
	 */
	public String getZtext() {
		return DataUtil.toString(super.getByIndex(INDEX_ZTEXT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZtext <em>Ztext</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ztext</em>' attribute.
	 * @see #getZtext()
	 */
	public void setZtext(String ztext) {
		super.setByIndex(INDEX_ZTEXT, ztext);
	}

	/**
	 * Returns the value of the '<em><b>Zcret</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zcret</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zcret</em>' attribute.
	 * @see #setZcret(java.lang.String)
	 */
	public String getZcret() {
		return DataUtil.toString(super.getByIndex(INDEX_ZCRET, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZcret <em>Zcret</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zcret</em>' attribute.
	 * @see #getZcret()
	 */
	public void setZcret(String zcret) {
		super.setByIndex(INDEX_ZCRET, zcret);
	}

	/**
	 * Returns the value of the '<em><b>Zcdat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zcdat</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zcdat</em>' attribute.
	 * @see #setZcdat(java.util.Date)
	 */
	public Date getZcdat() {
		return DataUtil.toDate(super.getByIndex(INDEX_ZCDAT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZcdat <em>Zcdat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zcdat</em>' attribute.
	 * @see #getZcdat()
	 */
	public void setZcdat(Date zcdat) {
		super.setByIndex(INDEX_ZCDAT, zcdat);
	}

	/**
	 * Returns the value of the '<em><b>Answer</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer</em>' attribute.
	 * @see #setAnswer(java.util.Date)
	 */
	public Date getAnswer() {
		return DataUtil.toDate(super.getByIndex(INDEX_ANSWER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAnswer <em>Answer</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer</em>' attribute.
	 * @see #getAnswer()
	 */
	public void setAnswer(Date answer) {
		super.setByIndex(INDEX_ANSWER, answer);
	}


}