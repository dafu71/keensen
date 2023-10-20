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
import com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getJspz <em>Jspz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getJspzh <em>Jspzh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getMjahr <em>Mjahr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getMblnr <em>Mblnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getZeile <em>Zeile</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getBudat <em>Budat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getShkzg <em>Shkzg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getBwart <em>Bwart</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getDjssl <em>Djssl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getDjsslCk <em>DjsslCk</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getMeins <em>Meins</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getHjsje <em>Hjsje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getJsdj <em>Jsdj</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getJsdw <em>Jsdw</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getKbetr <em>Kbetr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getKpein <em>Kpein</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getKmein <em>Kmein</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getFlagHtj <em>FlagHtj</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getKalsm <em>Kalsm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getHqtkkje <em>Hqtkkje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getHflje <em>Hflje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getHyfje <em>Hyfje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getHkkje <em>Hkkje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getZcdf <em>Zcdf</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getLfbnr <em>Lfbnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getLfpos <em>Lfpos</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getLfgja <em>Lfgja</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getShqtk <em>Shqtk</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getHshqtk <em>Hshqtk</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getShqtkbh <em>Shqtkbh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getWaers <em>Waers</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getBelnr <em>Belnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getBuzei <em>Buzei</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getGjahr <em>Gjahr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getEkorg <em>Ekorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getEkgrp <em>Ekgrp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getEbeln <em>Ebeln</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getEbelp <em>Ebelp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getMatkl <em>Matkl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getAufnr <em>Aufnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getMenge <em>Menge</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getZwrildt <em>Zwrildt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getZwriusr <em>Zwriusr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.impl.GenlInvoiceListImpl#getZtext <em>Ztext</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlInvoiceList;
 */

public class GenlInvoiceListImpl extends ExtendedDataObjectImpl implements GenlInvoiceList {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_JSPZ = 0;
	public final static int INDEX_JSPZH = 1;
	public final static int INDEX_MJAHR = 2;
	public final static int INDEX_MBLNR = 3;
	public final static int INDEX_ZEILE = 4;
	public final static int INDEX_BUDAT = 5;
	public final static int INDEX_SHKZG = 6;
	public final static int INDEX_BWART = 7;
	public final static int INDEX_DJSSL = 8;
	public final static int INDEX_DJSSLCK = 9;
	public final static int INDEX_MEINS = 10;
	public final static int INDEX_HJSJE = 11;
	public final static int INDEX_JSDJ = 12;
	public final static int INDEX_JSDW = 13;
	public final static int INDEX_KBETR = 14;
	public final static int INDEX_KPEIN = 15;
	public final static int INDEX_KMEIN = 16;
	public final static int INDEX_FLAGHTJ = 17;
	public final static int INDEX_KALSM = 18;
	public final static int INDEX_HQTKKJE = 19;
	public final static int INDEX_HFLJE = 20;
	public final static int INDEX_HYFJE = 21;
	public final static int INDEX_HKKJE = 22;
	public final static int INDEX_ZCDF = 23;
	public final static int INDEX_LFBNR = 24;
	public final static int INDEX_LFPOS = 25;
	public final static int INDEX_LFGJA = 26;
	public final static int INDEX_SHQTK = 27;
	public final static int INDEX_HSHQTK = 28;
	public final static int INDEX_SHQTKBH = 29;
	public final static int INDEX_WAERS = 30;
	public final static int INDEX_BELNR = 31;
	public final static int INDEX_BUZEI = 32;
	public final static int INDEX_GJAHR = 33;
	public final static int INDEX_EKORG = 34;
	public final static int INDEX_EKGRP = 35;
	public final static int INDEX_EBELN = 36;
	public final static int INDEX_EBELP = 37;
	public final static int INDEX_MATNR = 38;
	public final static int INDEX_MATKL = 39;
	public final static int INDEX_AUFNR = 40;
	public final static int INDEX_MENGE = 41;
	public final static int INDEX_ZWRILDT = 42;
	public final static int INDEX_ZWRIUSR = 43;
	public final static int INDEX_ZTEXT = 44;
	public final static int SDO_PROPERTY_COUNT = 45;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInvoiceListImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInvoiceListImpl(Type type) {
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
	 * Returns the value of the '<em><b>Jspzh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jspzh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jspzh</em>' attribute.
	 * @see #setJspzh(java.lang.String)
	 */
	public String getJspzh() {
		return DataUtil.toString(super.getByIndex(INDEX_JSPZH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getJspzh <em>Jspzh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jspzh</em>' attribute.
	 * @see #getJspzh()
	 */
	public void setJspzh(String jspzh) {
		super.setByIndex(INDEX_JSPZH, jspzh);
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
	 * Returns the value of the '<em><b>Mblnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mblnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mblnr</em>' attribute.
	 * @see #setMblnr(java.lang.String)
	 */
	public String getMblnr() {
		return DataUtil.toString(super.getByIndex(INDEX_MBLNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMblnr <em>Mblnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mblnr</em>' attribute.
	 * @see #getMblnr()
	 */
	public void setMblnr(String mblnr) {
		super.setByIndex(INDEX_MBLNR, mblnr);
	}

	/**
	 * Returns the value of the '<em><b>Zeile</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zeile</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zeile</em>' attribute.
	 * @see #setZeile(java.lang.String)
	 */
	public String getZeile() {
		return DataUtil.toString(super.getByIndex(INDEX_ZEILE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZeile <em>Zeile</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zeile</em>' attribute.
	 * @see #getZeile()
	 */
	public void setZeile(String zeile) {
		super.setByIndex(INDEX_ZEILE, zeile);
	}

	/**
	 * Returns the value of the '<em><b>Budat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Budat</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Budat</em>' attribute.
	 * @see #setBudat(java.util.Date)
	 */
	public Date getBudat() {
		return DataUtil.toDate(super.getByIndex(INDEX_BUDAT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBudat <em>Budat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Budat</em>' attribute.
	 * @see #getBudat()
	 */
	public void setBudat(Date budat) {
		super.setByIndex(INDEX_BUDAT, budat);
	}

	/**
	 * Returns the value of the '<em><b>Shkzg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Shkzg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Shkzg</em>' attribute.
	 * @see #setShkzg(java.lang.String)
	 */
	public String getShkzg() {
		return DataUtil.toString(super.getByIndex(INDEX_SHKZG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getShkzg <em>Shkzg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Shkzg</em>' attribute.
	 * @see #getShkzg()
	 */
	public void setShkzg(String shkzg) {
		super.setByIndex(INDEX_SHKZG, shkzg);
	}

	/**
	 * Returns the value of the '<em><b>Bwart</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bwart</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bwart</em>' attribute.
	 * @see #setBwart(java.lang.String)
	 */
	public String getBwart() {
		return DataUtil.toString(super.getByIndex(INDEX_BWART, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBwart <em>Bwart</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bwart</em>' attribute.
	 * @see #getBwart()
	 */
	public void setBwart(String bwart) {
		super.setByIndex(INDEX_BWART, bwart);
	}

	/**
	 * Returns the value of the '<em><b>Djssl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Djssl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Djssl</em>' attribute.
	 * @see #setDjssl(java.math.BigDecimal)
	 */
	public BigDecimal getDjssl() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_DJSSL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDjssl <em>Djssl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Djssl</em>' attribute.
	 * @see #getDjssl()
	 */
	public void setDjssl(BigDecimal djssl) {
		super.setByIndex(INDEX_DJSSL, djssl);
	}

	/**
	 * Returns the value of the '<em><b>DjsslCk</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>DjsslCk</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>DjsslCk</em>' attribute.
	 * @see #setDjsslCk(java.math.BigDecimal)
	 */
	public BigDecimal getDjsslCk() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_DJSSLCK, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDjsslCk <em>DjsslCk</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>DjsslCk</em>' attribute.
	 * @see #getDjsslCk()
	 */
	public void setDjsslCk(BigDecimal djsslCk) {
		super.setByIndex(INDEX_DJSSLCK, djsslCk);
	}

	/**
	 * Returns the value of the '<em><b>Meins</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meins</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meins</em>' attribute.
	 * @see #setMeins(java.lang.String)
	 */
	public String getMeins() {
		return DataUtil.toString(super.getByIndex(INDEX_MEINS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMeins <em>Meins</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meins</em>' attribute.
	 * @see #getMeins()
	 */
	public void setMeins(String meins) {
		super.setByIndex(INDEX_MEINS, meins);
	}

	/**
	 * Returns the value of the '<em><b>Hjsje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hjsje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hjsje</em>' attribute.
	 * @see #setHjsje(java.math.BigDecimal)
	 */
	public BigDecimal getHjsje() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_HJSJE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getHjsje <em>Hjsje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hjsje</em>' attribute.
	 * @see #getHjsje()
	 */
	public void setHjsje(BigDecimal hjsje) {
		super.setByIndex(INDEX_HJSJE, hjsje);
	}

	/**
	 * Returns the value of the '<em><b>Jsdj</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jsdj</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jsdj</em>' attribute.
	 * @see #setJsdj(java.math.BigDecimal)
	 */
	public BigDecimal getJsdj() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_JSDJ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getJsdj <em>Jsdj</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jsdj</em>' attribute.
	 * @see #getJsdj()
	 */
	public void setJsdj(BigDecimal jsdj) {
		super.setByIndex(INDEX_JSDJ, jsdj);
	}

	/**
	 * Returns the value of the '<em><b>Jsdw</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jsdw</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jsdw</em>' attribute.
	 * @see #setJsdw(int)
	 */
	public int getJsdw() {
		return DataUtil.toInt(super.getByIndex(INDEX_JSDW, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getJsdw <em>Jsdw</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jsdw</em>' attribute.
	 * @see #getJsdw()
	 */
	public void setJsdw(int jsdw) {
		super.setByIndex(INDEX_JSDW, jsdw);
	}

	/**
	 * Returns the value of the '<em><b>Kbetr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kbetr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kbetr</em>' attribute.
	 * @see #setKbetr(java.math.BigDecimal)
	 */
	public BigDecimal getKbetr() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_KBETR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKbetr <em>Kbetr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kbetr</em>' attribute.
	 * @see #getKbetr()
	 */
	public void setKbetr(BigDecimal kbetr) {
		super.setByIndex(INDEX_KBETR, kbetr);
	}

	/**
	 * Returns the value of the '<em><b>Kpein</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kpein</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kpein</em>' attribute.
	 * @see #setKpein(int)
	 */
	public int getKpein() {
		return DataUtil.toInt(super.getByIndex(INDEX_KPEIN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKpein <em>Kpein</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kpein</em>' attribute.
	 * @see #getKpein()
	 */
	public void setKpein(int kpein) {
		super.setByIndex(INDEX_KPEIN, kpein);
	}

	/**
	 * Returns the value of the '<em><b>Kmein</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kmein</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kmein</em>' attribute.
	 * @see #setKmein(java.lang.String)
	 */
	public String getKmein() {
		return DataUtil.toString(super.getByIndex(INDEX_KMEIN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKmein <em>Kmein</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kmein</em>' attribute.
	 * @see #getKmein()
	 */
	public void setKmein(String kmein) {
		super.setByIndex(INDEX_KMEIN, kmein);
	}

	/**
	 * Returns the value of the '<em><b>FlagHtj</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>FlagHtj</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>FlagHtj</em>' attribute.
	 * @see #setFlagHtj(java.lang.String)
	 */
	public String getFlagHtj() {
		return DataUtil.toString(super.getByIndex(INDEX_FLAGHTJ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFlagHtj <em>FlagHtj</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FlagHtj</em>' attribute.
	 * @see #getFlagHtj()
	 */
	public void setFlagHtj(String flagHtj) {
		super.setByIndex(INDEX_FLAGHTJ, flagHtj);
	}

	/**
	 * Returns the value of the '<em><b>Kalsm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kalsm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kalsm</em>' attribute.
	 * @see #setKalsm(java.lang.String)
	 */
	public String getKalsm() {
		return DataUtil.toString(super.getByIndex(INDEX_KALSM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKalsm <em>Kalsm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kalsm</em>' attribute.
	 * @see #getKalsm()
	 */
	public void setKalsm(String kalsm) {
		super.setByIndex(INDEX_KALSM, kalsm);
	}

	/**
	 * Returns the value of the '<em><b>Hqtkkje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hqtkkje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hqtkkje</em>' attribute.
	 * @see #setHqtkkje(java.math.BigDecimal)
	 */
	public BigDecimal getHqtkkje() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_HQTKKJE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getHqtkkje <em>Hqtkkje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hqtkkje</em>' attribute.
	 * @see #getHqtkkje()
	 */
	public void setHqtkkje(BigDecimal hqtkkje) {
		super.setByIndex(INDEX_HQTKKJE, hqtkkje);
	}

	/**
	 * Returns the value of the '<em><b>Hflje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hflje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hflje</em>' attribute.
	 * @see #setHflje(java.math.BigDecimal)
	 */
	public BigDecimal getHflje() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_HFLJE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getHflje <em>Hflje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hflje</em>' attribute.
	 * @see #getHflje()
	 */
	public void setHflje(BigDecimal hflje) {
		super.setByIndex(INDEX_HFLJE, hflje);
	}

	/**
	 * Returns the value of the '<em><b>Hyfje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hyfje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hyfje</em>' attribute.
	 * @see #setHyfje(java.math.BigDecimal)
	 */
	public BigDecimal getHyfje() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_HYFJE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getHyfje <em>Hyfje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hyfje</em>' attribute.
	 * @see #getHyfje()
	 */
	public void setHyfje(BigDecimal hyfje) {
		super.setByIndex(INDEX_HYFJE, hyfje);
	}

	/**
	 * Returns the value of the '<em><b>Hkkje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hkkje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hkkje</em>' attribute.
	 * @see #setHkkje(java.math.BigDecimal)
	 */
	public BigDecimal getHkkje() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_HKKJE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getHkkje <em>Hkkje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hkkje</em>' attribute.
	 * @see #getHkkje()
	 */
	public void setHkkje(BigDecimal hkkje) {
		super.setByIndex(INDEX_HKKJE, hkkje);
	}

	/**
	 * Returns the value of the '<em><b>Zcdf</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zcdf</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zcdf</em>' attribute.
	 * @see #setZcdf(java.math.BigDecimal)
	 */
	public BigDecimal getZcdf() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_ZCDF, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZcdf <em>Zcdf</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zcdf</em>' attribute.
	 * @see #getZcdf()
	 */
	public void setZcdf(BigDecimal zcdf) {
		super.setByIndex(INDEX_ZCDF, zcdf);
	}

	/**
	 * Returns the value of the '<em><b>Lfbnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lfbnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lfbnr</em>' attribute.
	 * @see #setLfbnr(java.lang.String)
	 */
	public String getLfbnr() {
		return DataUtil.toString(super.getByIndex(INDEX_LFBNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLfbnr <em>Lfbnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lfbnr</em>' attribute.
	 * @see #getLfbnr()
	 */
	public void setLfbnr(String lfbnr) {
		super.setByIndex(INDEX_LFBNR, lfbnr);
	}

	/**
	 * Returns the value of the '<em><b>Lfpos</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lfpos</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lfpos</em>' attribute.
	 * @see #setLfpos(java.lang.String)
	 */
	public String getLfpos() {
		return DataUtil.toString(super.getByIndex(INDEX_LFPOS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLfpos <em>Lfpos</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lfpos</em>' attribute.
	 * @see #getLfpos()
	 */
	public void setLfpos(String lfpos) {
		super.setByIndex(INDEX_LFPOS, lfpos);
	}

	/**
	 * Returns the value of the '<em><b>Lfgja</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lfgja</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lfgja</em>' attribute.
	 * @see #setLfgja(java.lang.String)
	 */
	public String getLfgja() {
		return DataUtil.toString(super.getByIndex(INDEX_LFGJA, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLfgja <em>Lfgja</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lfgja</em>' attribute.
	 * @see #getLfgja()
	 */
	public void setLfgja(String lfgja) {
		super.setByIndex(INDEX_LFGJA, lfgja);
	}

	/**
	 * Returns the value of the '<em><b>Shqtk</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Shqtk</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Shqtk</em>' attribute.
	 * @see #setShqtk(java.lang.String)
	 */
	public String getShqtk() {
		return DataUtil.toString(super.getByIndex(INDEX_SHQTK, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getShqtk <em>Shqtk</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Shqtk</em>' attribute.
	 * @see #getShqtk()
	 */
	public void setShqtk(String shqtk) {
		super.setByIndex(INDEX_SHQTK, shqtk);
	}

	/**
	 * Returns the value of the '<em><b>Hshqtk</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hshqtk</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hshqtk</em>' attribute.
	 * @see #setHshqtk(java.lang.String)
	 */
	public String getHshqtk() {
		return DataUtil.toString(super.getByIndex(INDEX_HSHQTK, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getHshqtk <em>Hshqtk</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hshqtk</em>' attribute.
	 * @see #getHshqtk()
	 */
	public void setHshqtk(String hshqtk) {
		super.setByIndex(INDEX_HSHQTK, hshqtk);
	}

	/**
	 * Returns the value of the '<em><b>Shqtkbh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Shqtkbh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Shqtkbh</em>' attribute.
	 * @see #setShqtkbh(java.lang.String)
	 */
	public String getShqtkbh() {
		return DataUtil.toString(super.getByIndex(INDEX_SHQTKBH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getShqtkbh <em>Shqtkbh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Shqtkbh</em>' attribute.
	 * @see #getShqtkbh()
	 */
	public void setShqtkbh(String shqtkbh) {
		super.setByIndex(INDEX_SHQTKBH, shqtkbh);
	}

	/**
	 * Returns the value of the '<em><b>Waers</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Waers</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Waers</em>' attribute.
	 * @see #setWaers(java.lang.String)
	 */
	public String getWaers() {
		return DataUtil.toString(super.getByIndex(INDEX_WAERS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWaers <em>Waers</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Waers</em>' attribute.
	 * @see #getWaers()
	 */
	public void setWaers(String waers) {
		super.setByIndex(INDEX_WAERS, waers);
	}

	/**
	 * Returns the value of the '<em><b>Belnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Belnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Belnr</em>' attribute.
	 * @see #setBelnr(java.lang.String)
	 */
	public String getBelnr() {
		return DataUtil.toString(super.getByIndex(INDEX_BELNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBelnr <em>Belnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Belnr</em>' attribute.
	 * @see #getBelnr()
	 */
	public void setBelnr(String belnr) {
		super.setByIndex(INDEX_BELNR, belnr);
	}

	/**
	 * Returns the value of the '<em><b>Buzei</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Buzei</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Buzei</em>' attribute.
	 * @see #setBuzei(java.lang.String)
	 */
	public String getBuzei() {
		return DataUtil.toString(super.getByIndex(INDEX_BUZEI, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBuzei <em>Buzei</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Buzei</em>' attribute.
	 * @see #getBuzei()
	 */
	public void setBuzei(String buzei) {
		super.setByIndex(INDEX_BUZEI, buzei);
	}

	/**
	 * Returns the value of the '<em><b>Gjahr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gjahr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gjahr</em>' attribute.
	 * @see #setGjahr(java.lang.String)
	 */
	public String getGjahr() {
		return DataUtil.toString(super.getByIndex(INDEX_GJAHR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGjahr <em>Gjahr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gjahr</em>' attribute.
	 * @see #getGjahr()
	 */
	public void setGjahr(String gjahr) {
		super.setByIndex(INDEX_GJAHR, gjahr);
	}

	/**
	 * Returns the value of the '<em><b>Ekorg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ekorg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ekorg</em>' attribute.
	 * @see #setEkorg(java.lang.String)
	 */
	public String getEkorg() {
		return DataUtil.toString(super.getByIndex(INDEX_EKORG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEkorg <em>Ekorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ekorg</em>' attribute.
	 * @see #getEkorg()
	 */
	public void setEkorg(String ekorg) {
		super.setByIndex(INDEX_EKORG, ekorg);
	}

	/**
	 * Returns the value of the '<em><b>Ekgrp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ekgrp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ekgrp</em>' attribute.
	 * @see #setEkgrp(java.lang.String)
	 */
	public String getEkgrp() {
		return DataUtil.toString(super.getByIndex(INDEX_EKGRP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEkgrp <em>Ekgrp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ekgrp</em>' attribute.
	 * @see #getEkgrp()
	 */
	public void setEkgrp(String ekgrp) {
		super.setByIndex(INDEX_EKGRP, ekgrp);
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
	 * Returns the value of the '<em><b>Matkl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Matkl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Matkl</em>' attribute.
	 * @see #setMatkl(java.lang.String)
	 */
	public String getMatkl() {
		return DataUtil.toString(super.getByIndex(INDEX_MATKL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMatkl <em>Matkl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matkl</em>' attribute.
	 * @see #getMatkl()
	 */
	public void setMatkl(String matkl) {
		super.setByIndex(INDEX_MATKL, matkl);
	}

	/**
	 * Returns the value of the '<em><b>Aufnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Aufnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Aufnr</em>' attribute.
	 * @see #setAufnr(java.lang.String)
	 */
	public String getAufnr() {
		return DataUtil.toString(super.getByIndex(INDEX_AUFNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAufnr <em>Aufnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Aufnr</em>' attribute.
	 * @see #getAufnr()
	 */
	public void setAufnr(String aufnr) {
		super.setByIndex(INDEX_AUFNR, aufnr);
	}

	/**
	 * Returns the value of the '<em><b>Menge</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Menge</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Menge</em>' attribute.
	 * @see #setMenge(java.lang.String)
	 */
	public String getMenge() {
		return DataUtil.toString(super.getByIndex(INDEX_MENGE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMenge <em>Menge</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Menge</em>' attribute.
	 * @see #getMenge()
	 */
	public void setMenge(String menge) {
		super.setByIndex(INDEX_MENGE, menge);
	}

	/**
	 * Returns the value of the '<em><b>Zwrildt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zwrildt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zwrildt</em>' attribute.
	 * @see #setZwrildt(java.util.Date)
	 */
	public Date getZwrildt() {
		return DataUtil.toDate(super.getByIndex(INDEX_ZWRILDT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZwrildt <em>Zwrildt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zwrildt</em>' attribute.
	 * @see #getZwrildt()
	 */
	public void setZwrildt(Date zwrildt) {
		super.setByIndex(INDEX_ZWRILDT, zwrildt);
	}

	/**
	 * Returns the value of the '<em><b>Zwriusr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zwriusr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zwriusr</em>' attribute.
	 * @see #setZwriusr(java.lang.String)
	 */
	public String getZwriusr() {
		return DataUtil.toString(super.getByIndex(INDEX_ZWRIUSR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZwriusr <em>Zwriusr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zwriusr</em>' attribute.
	 * @see #getZwriusr()
	 */
	public void setZwriusr(String zwriusr) {
		super.setByIndex(INDEX_ZWRIUSR, zwriusr);
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


}