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
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlPurchaseEkko;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getEbeln <em>Ebeln</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getBukrs <em>Bukrs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getBstyp <em>Bstyp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getBsart <em>Bsart</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getLoekz <em>Loekz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getAedat <em>Aedat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getErnam <em>Ernam</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getSpras <em>Spras</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getEkorg <em>Ekorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getEkgrp <em>Ekgrp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getWaers <em>Waers</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getBedat <em>Bedat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getKdatb <em>Kdatb</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getKdate <em>Kdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getIhrez <em>Ihrez</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getVerkf <em>Verkf</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getStats <em>Stats</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getTrant <em>Trant</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlPurchaseEkkoImpl#getKnumv <em>Knumv</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlPurchaseEkko;
 */

public class GenlPurchaseEkkoImpl extends ExtendedDataObjectImpl implements GenlPurchaseEkko {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_EBELN = 0;
	public final static int INDEX_BUKRS = 1;
	public final static int INDEX_BSTYP = 2;
	public final static int INDEX_BSART = 3;
	public final static int INDEX_LOEKZ = 4;
	public final static int INDEX_AEDAT = 5;
	public final static int INDEX_ERNAM = 6;
	public final static int INDEX_LIFNR = 7;
	public final static int INDEX_SPRAS = 8;
	public final static int INDEX_EKORG = 9;
	public final static int INDEX_EKGRP = 10;
	public final static int INDEX_WAERS = 11;
	public final static int INDEX_BEDAT = 12;
	public final static int INDEX_KDATB = 13;
	public final static int INDEX_KDATE = 14;
	public final static int INDEX_IHREZ = 15;
	public final static int INDEX_VERKF = 16;
	public final static int INDEX_STATS = 17;
	public final static int INDEX_TRANU = 18;
	public final static int INDEX_TRANT = 19;
	public final static int INDEX_KNUMV = 20;
	public final static int SDO_PROPERTY_COUNT = 21;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlPurchaseEkkoImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlPurchaseEkkoImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
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
	 * Returns the value of the '<em><b>Bstyp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bstyp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bstyp</em>' attribute.
	 * @see #setBstyp(java.lang.String)
	 */
	public String getBstyp() {
		return DataUtil.toString(super.getByIndex(INDEX_BSTYP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBstyp <em>Bstyp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bstyp</em>' attribute.
	 * @see #getBstyp()
	 */
	public void setBstyp(String bstyp) {
		super.setByIndex(INDEX_BSTYP, bstyp);
	}

	/**
	 * Returns the value of the '<em><b>Bsart</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bsart</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bsart</em>' attribute.
	 * @see #setBsart(java.lang.String)
	 */
	public String getBsart() {
		return DataUtil.toString(super.getByIndex(INDEX_BSART, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBsart <em>Bsart</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bsart</em>' attribute.
	 * @see #getBsart()
	 */
	public void setBsart(String bsart) {
		super.setByIndex(INDEX_BSART, bsart);
	}

	/**
	 * Returns the value of the '<em><b>Loekz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Loekz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Loekz</em>' attribute.
	 * @see #setLoekz(java.lang.String)
	 */
	public String getLoekz() {
		return DataUtil.toString(super.getByIndex(INDEX_LOEKZ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLoekz <em>Loekz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Loekz</em>' attribute.
	 * @see #getLoekz()
	 */
	public void setLoekz(String loekz) {
		super.setByIndex(INDEX_LOEKZ, loekz);
	}

	/**
	 * Returns the value of the '<em><b>Aedat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Aedat</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Aedat</em>' attribute.
	 * @see #setAedat(java.util.Date)
	 */
	public Date getAedat() {
		return DataUtil.toDate(super.getByIndex(INDEX_AEDAT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAedat <em>Aedat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Aedat</em>' attribute.
	 * @see #getAedat()
	 */
	public void setAedat(Date aedat) {
		super.setByIndex(INDEX_AEDAT, aedat);
	}

	/**
	 * Returns the value of the '<em><b>Ernam</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ernam</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ernam</em>' attribute.
	 * @see #setErnam(java.lang.String)
	 */
	public String getErnam() {
		return DataUtil.toString(super.getByIndex(INDEX_ERNAM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getErnam <em>Ernam</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ernam</em>' attribute.
	 * @see #getErnam()
	 */
	public void setErnam(String ernam) {
		super.setByIndex(INDEX_ERNAM, ernam);
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
	 * Returns the value of the '<em><b>Spras</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Spras</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Spras</em>' attribute.
	 * @see #setSpras(java.lang.String)
	 */
	public String getSpras() {
		return DataUtil.toString(super.getByIndex(INDEX_SPRAS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSpras <em>Spras</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Spras</em>' attribute.
	 * @see #getSpras()
	 */
	public void setSpras(String spras) {
		super.setByIndex(INDEX_SPRAS, spras);
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
	 * Returns the value of the '<em><b>Bedat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bedat</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bedat</em>' attribute.
	 * @see #setBedat(java.util.Date)
	 */
	public Date getBedat() {
		return DataUtil.toDate(super.getByIndex(INDEX_BEDAT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBedat <em>Bedat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bedat</em>' attribute.
	 * @see #getBedat()
	 */
	public void setBedat(Date bedat) {
		super.setByIndex(INDEX_BEDAT, bedat);
	}

	/**
	 * Returns the value of the '<em><b>Kdatb</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kdatb</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kdatb</em>' attribute.
	 * @see #setKdatb(java.util.Date)
	 */
	public Date getKdatb() {
		return DataUtil.toDate(super.getByIndex(INDEX_KDATB, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKdatb <em>Kdatb</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kdatb</em>' attribute.
	 * @see #getKdatb()
	 */
	public void setKdatb(Date kdatb) {
		super.setByIndex(INDEX_KDATB, kdatb);
	}

	/**
	 * Returns the value of the '<em><b>Kdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kdate</em>' attribute.
	 * @see #setKdate(java.util.Date)
	 */
	public Date getKdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_KDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKdate <em>Kdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kdate</em>' attribute.
	 * @see #getKdate()
	 */
	public void setKdate(Date kdate) {
		super.setByIndex(INDEX_KDATE, kdate);
	}

	/**
	 * Returns the value of the '<em><b>Ihrez</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ihrez</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ihrez</em>' attribute.
	 * @see #setIhrez(java.lang.String)
	 */
	public String getIhrez() {
		return DataUtil.toString(super.getByIndex(INDEX_IHREZ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIhrez <em>Ihrez</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ihrez</em>' attribute.
	 * @see #getIhrez()
	 */
	public void setIhrez(String ihrez) {
		super.setByIndex(INDEX_IHREZ, ihrez);
	}

	/**
	 * Returns the value of the '<em><b>Verkf</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Verkf</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Verkf</em>' attribute.
	 * @see #setVerkf(java.lang.String)
	 */
	public String getVerkf() {
		return DataUtil.toString(super.getByIndex(INDEX_VERKF, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getVerkf <em>Verkf</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Verkf</em>' attribute.
	 * @see #getVerkf()
	 */
	public void setVerkf(String verkf) {
		super.setByIndex(INDEX_VERKF, verkf);
	}

	/**
	 * Returns the value of the '<em><b>Stats</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stats</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stats</em>' attribute.
	 * @see #setStats(java.lang.String)
	 */
	public String getStats() {
		return DataUtil.toString(super.getByIndex(INDEX_STATS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStats <em>Stats</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stats</em>' attribute.
	 * @see #getStats()
	 */
	public void setStats(String stats) {
		super.setByIndex(INDEX_STATS, stats);
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
	 * Returns the value of the '<em><b>Knumv</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Knumv</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Knumv</em>' attribute.
	 * @see #setKnumv(java.lang.String)
	 */
	public String getKnumv() {
		return DataUtil.toString(super.getByIndex(INDEX_KNUMV, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKnumv <em>Knumv</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Knumv</em>' attribute.
	 * @see #getKnumv()
	 */
	public void setKnumv(String knumv) {
		super.setByIndex(INDEX_KNUMV, knumv);
	}


}