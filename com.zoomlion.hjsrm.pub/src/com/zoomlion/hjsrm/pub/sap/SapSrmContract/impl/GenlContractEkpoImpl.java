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
import com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractEkpo;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getEbeln <em>Ebeln</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getEbelp <em>Ebelp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getLoekz <em>Loekz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getAedat <em>Aedat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getTxz01 <em>Txz01</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getEmatn <em>Ematn</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getBukrs <em>Bukrs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getWerks <em>Werks</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getLgort <em>Lgort</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getBednr <em>Bednr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getMaktl <em>Maktl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getMenge <em>Menge</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getMeins <em>Meins</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getElikz <em>Elikz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getErekz <em>Erekz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getPstyp <em>Pstyp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getKnttp <em>Knttp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getLmein <em>Lmein</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getMwskz <em>Mwskz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getStats <em>Stats</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractEkpoImpl#getStatu <em>Statu</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlContractEkpo;
 */

public class GenlContractEkpoImpl extends ExtendedDataObjectImpl implements GenlContractEkpo {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_EBELN = 0;
	public final static int INDEX_EBELP = 1;
	public final static int INDEX_LOEKZ = 2;
	public final static int INDEX_AEDAT = 3;
	public final static int INDEX_TXZ01 = 4;
	public final static int INDEX_MATNR = 5;
	public final static int INDEX_EMATN = 6;
	public final static int INDEX_BUKRS = 7;
	public final static int INDEX_WERKS = 8;
	public final static int INDEX_LGORT = 9;
	public final static int INDEX_BEDNR = 10;
	public final static int INDEX_MAKTL = 11;
	public final static int INDEX_MENGE = 12;
	public final static int INDEX_MEINS = 13;
	public final static int INDEX_ELIKZ = 14;
	public final static int INDEX_EREKZ = 15;
	public final static int INDEX_PSTYP = 16;
	public final static int INDEX_KNTTP = 17;
	public final static int INDEX_LMEIN = 18;
	public final static int INDEX_MWSKZ = 19;
	public final static int INDEX_STATS = 20;
	public final static int INDEX_STATU = 21;
	public final static int SDO_PROPERTY_COUNT = 22;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlContractEkpoImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlContractEkpoImpl(Type type) {
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
	 * Returns the value of the '<em><b>Txz01</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Txz01</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Txz01</em>' attribute.
	 * @see #setTxz01(java.lang.String)
	 */
	public String getTxz01() {
		return DataUtil.toString(super.getByIndex(INDEX_TXZ01, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTxz01 <em>Txz01</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Txz01</em>' attribute.
	 * @see #getTxz01()
	 */
	public void setTxz01(String txz01) {
		super.setByIndex(INDEX_TXZ01, txz01);
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
	 * Returns the value of the '<em><b>Ematn</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ematn</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ematn</em>' attribute.
	 * @see #setEmatn(java.lang.String)
	 */
	public String getEmatn() {
		return DataUtil.toString(super.getByIndex(INDEX_EMATN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEmatn <em>Ematn</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ematn</em>' attribute.
	 * @see #getEmatn()
	 */
	public void setEmatn(String ematn) {
		super.setByIndex(INDEX_EMATN, ematn);
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
	 * Returns the value of the '<em><b>Bednr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bednr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bednr</em>' attribute.
	 * @see #setBednr(java.lang.String)
	 */
	public String getBednr() {
		return DataUtil.toString(super.getByIndex(INDEX_BEDNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBednr <em>Bednr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bednr</em>' attribute.
	 * @see #getBednr()
	 */
	public void setBednr(String bednr) {
		super.setByIndex(INDEX_BEDNR, bednr);
	}

	/**
	 * Returns the value of the '<em><b>Maktl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Maktl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Maktl</em>' attribute.
	 * @see #setMaktl(java.lang.String)
	 */
	public String getMaktl() {
		return DataUtil.toString(super.getByIndex(INDEX_MAKTL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMaktl <em>Maktl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Maktl</em>' attribute.
	 * @see #getMaktl()
	 */
	public void setMaktl(String maktl) {
		super.setByIndex(INDEX_MAKTL, maktl);
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
	 * Returns the value of the '<em><b>Elikz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Elikz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Elikz</em>' attribute.
	 * @see #setElikz(java.lang.String)
	 */
	public String getElikz() {
		return DataUtil.toString(super.getByIndex(INDEX_ELIKZ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getElikz <em>Elikz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Elikz</em>' attribute.
	 * @see #getElikz()
	 */
	public void setElikz(String elikz) {
		super.setByIndex(INDEX_ELIKZ, elikz);
	}

	/**
	 * Returns the value of the '<em><b>Erekz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Erekz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Erekz</em>' attribute.
	 * @see #setErekz(java.lang.String)
	 */
	public String getErekz() {
		return DataUtil.toString(super.getByIndex(INDEX_EREKZ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getErekz <em>Erekz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Erekz</em>' attribute.
	 * @see #getErekz()
	 */
	public void setErekz(String erekz) {
		super.setByIndex(INDEX_EREKZ, erekz);
	}

	/**
	 * Returns the value of the '<em><b>Pstyp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Pstyp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Pstyp</em>' attribute.
	 * @see #setPstyp(java.lang.String)
	 */
	public String getPstyp() {
		return DataUtil.toString(super.getByIndex(INDEX_PSTYP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPstyp <em>Pstyp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pstyp</em>' attribute.
	 * @see #getPstyp()
	 */
	public void setPstyp(String pstyp) {
		super.setByIndex(INDEX_PSTYP, pstyp);
	}

	/**
	 * Returns the value of the '<em><b>Knttp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Knttp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Knttp</em>' attribute.
	 * @see #setKnttp(java.lang.String)
	 */
	public String getKnttp() {
		return DataUtil.toString(super.getByIndex(INDEX_KNTTP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKnttp <em>Knttp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Knttp</em>' attribute.
	 * @see #getKnttp()
	 */
	public void setKnttp(String knttp) {
		super.setByIndex(INDEX_KNTTP, knttp);
	}

	/**
	 * Returns the value of the '<em><b>Lmein</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lmein</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lmein</em>' attribute.
	 * @see #setLmein(java.lang.String)
	 */
	public String getLmein() {
		return DataUtil.toString(super.getByIndex(INDEX_LMEIN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLmein <em>Lmein</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lmein</em>' attribute.
	 * @see #getLmein()
	 */
	public void setLmein(String lmein) {
		super.setByIndex(INDEX_LMEIN, lmein);
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


}