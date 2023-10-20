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
import com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.GenlDeliverList;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl#getZshso <em>Zshso</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl#getZshsoN <em>ZshsoN</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl#getEkorg <em>Ekorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl#getEkgrp <em>Ekgrp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl#getMenge <em>Menge</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl#getZdate <em>Zdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl#getZtext <em>Ztext</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl#getZtext01 <em>Ztext01</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl#getStatu <em>Statu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl#getTrant <em>Trant</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl#getWerks <em>Werks</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmPurchase.impl.GenlDeliverListImpl#getBukrs <em>Bukrs</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlDeliverList;
 */

public class GenlDeliverListImpl extends ExtendedDataObjectImpl implements GenlDeliverList {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_ZSHSO = 0;
	public final static int INDEX_ZSHSON = 1;
	public final static int INDEX_LIFNR = 2;
	public final static int INDEX_MATNR = 3;
	public final static int INDEX_EKORG = 4;
	public final static int INDEX_EKGRP = 5;
	public final static int INDEX_MENGE = 6;
	public final static int INDEX_ZDATE = 7;
	public final static int INDEX_ZTEXT = 8;
	public final static int INDEX_ZTEXT01 = 9;
	public final static int INDEX_STATU = 10;
	public final static int INDEX_TRANU = 11;
	public final static int INDEX_TRANT = 12;
	public final static int INDEX_WERKS = 13;
	public final static int INDEX_BUKRS = 14;
	public final static int SDO_PROPERTY_COUNT = 15;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlDeliverListImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlDeliverListImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Zshso</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zshso</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zshso</em>' attribute.
	 * @see #setZshso(java.lang.String)
	 */
	public String getZshso() {
		return DataUtil.toString(super.getByIndex(INDEX_ZSHSO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZshso <em>Zshso</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zshso</em>' attribute.
	 * @see #getZshso()
	 */
	public void setZshso(String zshso) {
		super.setByIndex(INDEX_ZSHSO, zshso);
	}

	/**
	 * Returns the value of the '<em><b>ZshsoN</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ZshsoN</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ZshsoN</em>' attribute.
	 * @see #setZshsoN(java.lang.String)
	 */
	public String getZshsoN() {
		return DataUtil.toString(super.getByIndex(INDEX_ZSHSON, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZshsoN <em>ZshsoN</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ZshsoN</em>' attribute.
	 * @see #getZshsoN()
	 */
	public void setZshsoN(String zshsoN) {
		super.setByIndex(INDEX_ZSHSON, zshsoN);
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
	 * Returns the value of the '<em><b>Menge</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Menge</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Menge</em>' attribute.
	 * @see #setMenge(java.math.BigDecimal)
	 */
	public BigDecimal getMenge() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_MENGE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMenge <em>Menge</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Menge</em>' attribute.
	 * @see #getMenge()
	 */
	public void setMenge(BigDecimal menge) {
		super.setByIndex(INDEX_MENGE, menge);
	}

	/**
	 * Returns the value of the '<em><b>Zdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zdate</em>' attribute.
	 * @see #setZdate(java.util.Date)
	 */
	public Date getZdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_ZDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZdate <em>Zdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zdate</em>' attribute.
	 * @see #getZdate()
	 */
	public void setZdate(Date zdate) {
		super.setByIndex(INDEX_ZDATE, zdate);
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
	 * Returns the value of the '<em><b>Ztext01</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ztext01</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ztext01</em>' attribute.
	 * @see #setZtext01(java.lang.String)
	 */
	public String getZtext01() {
		return DataUtil.toString(super.getByIndex(INDEX_ZTEXT01, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZtext01 <em>Ztext01</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ztext01</em>' attribute.
	 * @see #getZtext01()
	 */
	public void setZtext01(String ztext01) {
		super.setByIndex(INDEX_ZTEXT01, ztext01);
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


}