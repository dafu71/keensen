/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getMblnr <em>Mblnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getMjahr <em>Mjahr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getZeile <em>Zeile</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getBwart <em>Bwart</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getWerks <em>Werks</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getLgort <em>Lgort</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getCharg <em>Charg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getShkzg <em>Shkzg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getWaers <em>Waers</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getMenge <em>Menge</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getMeins <em>Meins</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getEbeln <em>Ebeln</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getEbelp <em>Ebelp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getLfbja <em>Lfbja</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getLfbnr <em>Lfbnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getLfpos <em>Lfpos</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getSjahr <em>Sjahr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getSmbln <em>Smbln</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getSmblp <em>Smblp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getBukrs <em>Bukrs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getDmbtr <em>Dmbtr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getGrund <em>Grund</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getErfmg <em>Erfmg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getErfme <em>Erfme</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.GenlReceiptsMsegImpl#getSgtxt <em>Sgtxt</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlReceiptsMseg;
 */

public class GenlReceiptsMsegImpl extends ExtendedDataObjectImpl implements GenlReceiptsMseg {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_MBLNR = 0;
	public final static int INDEX_MJAHR = 1;
	public final static int INDEX_ZEILE = 2;
	public final static int INDEX_BWART = 3;
	public final static int INDEX_MATNR = 4;
	public final static int INDEX_WERKS = 5;
	public final static int INDEX_LGORT = 6;
	public final static int INDEX_CHARG = 7;
	public final static int INDEX_LIFNR = 8;
	public final static int INDEX_SHKZG = 9;
	public final static int INDEX_WAERS = 10;
	public final static int INDEX_MENGE = 11;
	public final static int INDEX_MEINS = 12;
	public final static int INDEX_EBELN = 13;
	public final static int INDEX_EBELP = 14;
	public final static int INDEX_LFBJA = 15;
	public final static int INDEX_LFBNR = 16;
	public final static int INDEX_LFPOS = 17;
	public final static int INDEX_SJAHR = 18;
	public final static int INDEX_SMBLN = 19;
	public final static int INDEX_SMBLP = 20;
	public final static int INDEX_BUKRS = 21;
	public final static int INDEX_DMBTR = 22;
	public final static int INDEX_GRUND = 23;
	public final static int INDEX_ERFMG = 24;
	public final static int INDEX_ERFME = 25;
	public final static int INDEX_SGTXT = 26;
	public final static int SDO_PROPERTY_COUNT = 27;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlReceiptsMsegImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlReceiptsMsegImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
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
	 * Returns the value of the '<em><b>Lgort</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lgort</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lgort</em>' attribute.
	 * @see #setLgort(java.lang.String)
	 */
	public String getLgort() {
		return DataUtil.toString(super.getByIndex(INDEX_LGORT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLgort <em>Lgort</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lgort</em>' attribute.
	 * @see #getLgort()
	 */
	public void setLgort(String lgort) {
		super.setByIndex(INDEX_LGORT, lgort);
	}

	/**
	 * Returns the value of the '<em><b>Charg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Charg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Charg</em>' attribute.
	 * @see #setCharg(java.lang.String)
	 */
	public String getCharg() {
		return DataUtil.toString(super.getByIndex(INDEX_CHARG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCharg <em>Charg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Charg</em>' attribute.
	 * @see #getCharg()
	 */
	public void setCharg(String charg) {
		super.setByIndex(INDEX_CHARG, charg);
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
	 * Returns the value of the '<em><b>Lfbja</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lfbja</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lfbja</em>' attribute.
	 * @see #setLfbja(java.lang.String)
	 */
	public String getLfbja() {
		return DataUtil.toString(super.getByIndex(INDEX_LFBJA, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLfbja <em>Lfbja</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lfbja</em>' attribute.
	 * @see #getLfbja()
	 */
	public void setLfbja(String lfbja) {
		super.setByIndex(INDEX_LFBJA, lfbja);
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
	 * Returns the value of the '<em><b>Sjahr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sjahr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sjahr</em>' attribute.
	 * @see #setSjahr(java.lang.String)
	 */
	public String getSjahr() {
		return DataUtil.toString(super.getByIndex(INDEX_SJAHR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSjahr <em>Sjahr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sjahr</em>' attribute.
	 * @see #getSjahr()
	 */
	public void setSjahr(String sjahr) {
		super.setByIndex(INDEX_SJAHR, sjahr);
	}

	/**
	 * Returns the value of the '<em><b>Smbln</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Smbln</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Smbln</em>' attribute.
	 * @see #setSmbln(java.lang.String)
	 */
	public String getSmbln() {
		return DataUtil.toString(super.getByIndex(INDEX_SMBLN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSmbln <em>Smbln</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Smbln</em>' attribute.
	 * @see #getSmbln()
	 */
	public void setSmbln(String smbln) {
		super.setByIndex(INDEX_SMBLN, smbln);
	}

	/**
	 * Returns the value of the '<em><b>Smblp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Smblp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Smblp</em>' attribute.
	 * @see #setSmblp(java.lang.String)
	 */
	public String getSmblp() {
		return DataUtil.toString(super.getByIndex(INDEX_SMBLP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSmblp <em>Smblp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Smblp</em>' attribute.
	 * @see #getSmblp()
	 */
	public void setSmblp(String smblp) {
		super.setByIndex(INDEX_SMBLP, smblp);
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
	 * Returns the value of the '<em><b>Dmbtr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Dmbtr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Dmbtr</em>' attribute.
	 * @see #setDmbtr(java.lang.String)
	 */
	public String getDmbtr() {
		return DataUtil.toString(super.getByIndex(INDEX_DMBTR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDmbtr <em>Dmbtr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dmbtr</em>' attribute.
	 * @see #getDmbtr()
	 */
	public void setDmbtr(String dmbtr) {
		super.setByIndex(INDEX_DMBTR, dmbtr);
	}

	/**
	 * Returns the value of the '<em><b>Grund</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Grund</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Grund</em>' attribute.
	 * @see #setGrund(java.lang.String)
	 */
	public String getGrund() {
		return DataUtil.toString(super.getByIndex(INDEX_GRUND, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGrund <em>Grund</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Grund</em>' attribute.
	 * @see #getGrund()
	 */
	public void setGrund(String grund) {
		super.setByIndex(INDEX_GRUND, grund);
	}

	/**
	 * Returns the value of the '<em><b>Erfmg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Erfmg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Erfmg</em>' attribute.
	 * @see #setErfmg(java.lang.String)
	 */
	public String getErfmg() {
		return DataUtil.toString(super.getByIndex(INDEX_ERFMG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getErfmg <em>Erfmg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Erfmg</em>' attribute.
	 * @see #getErfmg()
	 */
	public void setErfmg(String erfmg) {
		super.setByIndex(INDEX_ERFMG, erfmg);
	}

	/**
	 * Returns the value of the '<em><b>Erfme</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Erfme</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Erfme</em>' attribute.
	 * @see #setErfme(java.lang.String)
	 */
	public String getErfme() {
		return DataUtil.toString(super.getByIndex(INDEX_ERFME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getErfme <em>Erfme</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Erfme</em>' attribute.
	 * @see #getErfme()
	 */
	public void setErfme(String erfme) {
		super.setByIndex(INDEX_ERFME, erfme);
	}

	/**
	 * Returns the value of the '<em><b>Sgtxt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sgtxt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sgtxt</em>' attribute.
	 * @see #setSgtxt(java.lang.String)
	 */
	public String getSgtxt() {
		return DataUtil.toString(super.getByIndex(INDEX_SGTXT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSgtxt <em>Sgtxt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sgtxt</em>' attribute.
	 * @see #getSgtxt()
	 */
	public void setSgtxt(String sgtxt) {
		super.setByIndex(INDEX_SGTXT, sgtxt);
	}


}