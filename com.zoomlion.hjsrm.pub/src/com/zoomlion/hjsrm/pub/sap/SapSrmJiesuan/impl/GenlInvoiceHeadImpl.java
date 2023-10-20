/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getJspz <em>Jspz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getMjahr <em>Mjahr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getBukrs <em>Bukrs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getWerks <em>Werks</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getJsje <em>Jsje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getMwskz <em>Mwskz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getTaxrt <em>Taxrt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getFlje <em>Flje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getYfje <em>Yfje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getQtkkje <em>Qtkkje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getTax <em>Tax</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getUsnam <em>Usnam</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getDatum <em>Datum</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getStatu <em>Statu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getTrant <em>Trant</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceHeadImpl#getPrint <em>Print</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlInvoiceHead;
 */

public class GenlInvoiceHeadImpl extends ExtendedDataObjectImpl implements GenlInvoiceHead {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_JSPZ = 0;
	public final static int INDEX_MJAHR = 1;
	public final static int INDEX_BUKRS = 2;
	public final static int INDEX_WERKS = 3;
	public final static int INDEX_LIFNR = 4;
	public final static int INDEX_JSJE = 5;
	public final static int INDEX_MWSKZ = 6;
	public final static int INDEX_TAXRT = 7;
	public final static int INDEX_FLJE = 8;
	public final static int INDEX_YFJE = 9;
	public final static int INDEX_QTKKJE = 10;
	public final static int INDEX_TAX = 11;
	public final static int INDEX_USNAM = 12;
	public final static int INDEX_DATUM = 13;
	public final static int INDEX_STATU = 14;
	public final static int INDEX_TRANU = 15;
	public final static int INDEX_TRANT = 16;
	public final static int INDEX_PRINT = 17;
	public final static int SDO_PROPERTY_COUNT = 18;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInvoiceHeadImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInvoiceHeadImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Jspz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jspz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jspz</em>' attribute.
	 * @see #setJspz(java.lang.String)
	 */
	public String getJspz() {
		return DataUtil.toString(super.getByIndex(INDEX_JSPZ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getJspz <em>Jspz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jspz</em>' attribute.
	 * @see #getJspz()
	 */
	public void setJspz(String jspz) {
		super.setByIndex(INDEX_JSPZ, jspz);
	}

	/**
	 * Returns the value of the '<em><b>Mjahr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mjahr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mjahr</em>' attribute.
	 * @see #setMjahr(java.lang.String)
	 */
	public String getMjahr() {
		return DataUtil.toString(super.getByIndex(INDEX_MJAHR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMjahr <em>Mjahr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mjahr</em>' attribute.
	 * @see #getMjahr()
	 */
	public void setMjahr(String mjahr) {
		super.setByIndex(INDEX_MJAHR, mjahr);
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
	 * Returns the value of the '<em><b>Jsje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jsje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jsje</em>' attribute.
	 * @see #setJsje(java.math.BigDecimal)
	 */
	public BigDecimal getJsje() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_JSJE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getJsje <em>Jsje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jsje</em>' attribute.
	 * @see #getJsje()
	 */
	public void setJsje(BigDecimal jsje) {
		super.setByIndex(INDEX_JSJE, jsje);
	}

	/**
	 * Returns the value of the '<em><b>Mwskz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mwskz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mwskz</em>' attribute.
	 * @see #setMwskz(java.lang.String)
	 */
	public String getMwskz() {
		return DataUtil.toString(super.getByIndex(INDEX_MWSKZ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMwskz <em>Mwskz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mwskz</em>' attribute.
	 * @see #getMwskz()
	 */
	public void setMwskz(String mwskz) {
		super.setByIndex(INDEX_MWSKZ, mwskz);
	}

	/**
	 * Returns the value of the '<em><b>Taxrt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Taxrt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Taxrt</em>' attribute.
	 * @see #setTaxrt(java.math.BigDecimal)
	 */
	public BigDecimal getTaxrt() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_TAXRT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTaxrt <em>Taxrt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Taxrt</em>' attribute.
	 * @see #getTaxrt()
	 */
	public void setTaxrt(BigDecimal taxrt) {
		super.setByIndex(INDEX_TAXRT, taxrt);
	}

	/**
	 * Returns the value of the '<em><b>Flje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Flje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Flje</em>' attribute.
	 * @see #setFlje(java.math.BigDecimal)
	 */
	public BigDecimal getFlje() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_FLJE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFlje <em>Flje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Flje</em>' attribute.
	 * @see #getFlje()
	 */
	public void setFlje(BigDecimal flje) {
		super.setByIndex(INDEX_FLJE, flje);
	}

	/**
	 * Returns the value of the '<em><b>Yfje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Yfje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Yfje</em>' attribute.
	 * @see #setYfje(java.math.BigDecimal)
	 */
	public BigDecimal getYfje() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_YFJE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getYfje <em>Yfje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Yfje</em>' attribute.
	 * @see #getYfje()
	 */
	public void setYfje(BigDecimal yfje) {
		super.setByIndex(INDEX_YFJE, yfje);
	}

	/**
	 * Returns the value of the '<em><b>Qtkkje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qtkkje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qtkkje</em>' attribute.
	 * @see #setQtkkje(java.math.BigDecimal)
	 */
	public BigDecimal getQtkkje() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_QTKKJE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getQtkkje <em>Qtkkje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qtkkje</em>' attribute.
	 * @see #getQtkkje()
	 */
	public void setQtkkje(BigDecimal qtkkje) {
		super.setByIndex(INDEX_QTKKJE, qtkkje);
	}

	/**
	 * Returns the value of the '<em><b>Tax</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Tax</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Tax</em>' attribute.
	 * @see #setTax(java.math.BigDecimal)
	 */
	public BigDecimal getTax() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_TAX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTax <em>Tax</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Tax</em>' attribute.
	 * @see #getTax()
	 */
	public void setTax(BigDecimal tax) {
		super.setByIndex(INDEX_TAX, tax);
	}

	/**
	 * Returns the value of the '<em><b>Usnam</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Usnam</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Usnam</em>' attribute.
	 * @see #setUsnam(java.lang.String)
	 */
	public String getUsnam() {
		return DataUtil.toString(super.getByIndex(INDEX_USNAM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUsnam <em>Usnam</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Usnam</em>' attribute.
	 * @see #getUsnam()
	 */
	public void setUsnam(String usnam) {
		super.setByIndex(INDEX_USNAM, usnam);
	}

	/**
	 * Returns the value of the '<em><b>Datum</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Datum</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Datum</em>' attribute.
	 * @see #setDatum(java.util.Date)
	 */
	public Date getDatum() {
		return DataUtil.toDate(super.getByIndex(INDEX_DATUM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDatum <em>Datum</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Datum</em>' attribute.
	 * @see #getDatum()
	 */
	public void setDatum(Date datum) {
		super.setByIndex(INDEX_DATUM, datum);
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

	/**
	 * Returns the value of the '<em><b>Print</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Print</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Print</em>' attribute.
	 * @see #setPrint(long)
	 */
	public long getPrint() {
		return DataUtil.toLong(super.getByIndex(INDEX_PRINT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPrint <em>Print</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Print</em>' attribute.
	 * @see #getPrint()
	 */
	public void setPrint(long print) {
		super.setByIndex(INDEX_PRINT, print);
	}


}