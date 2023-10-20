/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl#getWerks <em>Werks</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl#getLvorm <em>Lvorm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl#getMmsta <em>Mmsta</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl#getEkgrp <em>Ekgrp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl#getLgfsb <em>Lgfsb</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl#getMaabc <em>Maabc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl#getDismm <em>Dismm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl#getMinbe <em>Minbe</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl#getBstmi <em>Bstmi</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl#getBstma <em>Bstma</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl#getMabst <em>Mabst</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl#getLgpro <em>Lgpro</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl#getPlifz <em>Plifz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl#getEisbe <em>Eisbe</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMarcImpl#getEislo <em>Eislo</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements BaseMaterialMarc;
 */

public class BaseMaterialMarcImpl extends ExtendedDataObjectImpl implements BaseMaterialMarc {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_MATNR = 0;
	public final static int INDEX_WERKS = 1;
	public final static int INDEX_LVORM = 2;
	public final static int INDEX_MMSTA = 3;
	public final static int INDEX_EKGRP = 4;
	public final static int INDEX_LGFSB = 5;
	public final static int INDEX_MAABC = 6;
	public final static int INDEX_DISMM = 7;
	public final static int INDEX_MINBE = 8;
	public final static int INDEX_BSTMI = 9;
	public final static int INDEX_BSTMA = 10;
	public final static int INDEX_MABST = 11;
	public final static int INDEX_LGPRO = 12;
	public final static int INDEX_PLIFZ = 13;
	public final static int INDEX_EISBE = 14;
	public final static int INDEX_EISLO = 15;
	public final static int SDO_PROPERTY_COUNT = 16;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public BaseMaterialMarcImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public BaseMaterialMarcImpl(Type type) {
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
	 * Returns the value of the '<em><b>Lvorm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lvorm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lvorm</em>' attribute.
	 * @see #setLvorm(java.lang.String)
	 */
	public String getLvorm() {
		return DataUtil.toString(super.getByIndex(INDEX_LVORM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLvorm <em>Lvorm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lvorm</em>' attribute.
	 * @see #getLvorm()
	 */
	public void setLvorm(String lvorm) {
		super.setByIndex(INDEX_LVORM, lvorm);
	}

	/**
	 * Returns the value of the '<em><b>Mmsta</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mmsta</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mmsta</em>' attribute.
	 * @see #setMmsta(java.lang.String)
	 */
	public String getMmsta() {
		return DataUtil.toString(super.getByIndex(INDEX_MMSTA, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMmsta <em>Mmsta</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mmsta</em>' attribute.
	 * @see #getMmsta()
	 */
	public void setMmsta(String mmsta) {
		super.setByIndex(INDEX_MMSTA, mmsta);
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
	 * Returns the value of the '<em><b>Lgfsb</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lgfsb</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lgfsb</em>' attribute.
	 * @see #setLgfsb(java.lang.String)
	 */
	public String getLgfsb() {
		return DataUtil.toString(super.getByIndex(INDEX_LGFSB, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLgfsb <em>Lgfsb</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lgfsb</em>' attribute.
	 * @see #getLgfsb()
	 */
	public void setLgfsb(String lgfsb) {
		super.setByIndex(INDEX_LGFSB, lgfsb);
	}

	/**
	 * Returns the value of the '<em><b>Maabc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Maabc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Maabc</em>' attribute.
	 * @see #setMaabc(java.lang.String)
	 */
	public String getMaabc() {
		return DataUtil.toString(super.getByIndex(INDEX_MAABC, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMaabc <em>Maabc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Maabc</em>' attribute.
	 * @see #getMaabc()
	 */
	public void setMaabc(String maabc) {
		super.setByIndex(INDEX_MAABC, maabc);
	}

	/**
	 * Returns the value of the '<em><b>Dismm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Dismm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Dismm</em>' attribute.
	 * @see #setDismm(java.lang.String)
	 */
	public String getDismm() {
		return DataUtil.toString(super.getByIndex(INDEX_DISMM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDismm <em>Dismm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dismm</em>' attribute.
	 * @see #getDismm()
	 */
	public void setDismm(String dismm) {
		super.setByIndex(INDEX_DISMM, dismm);
	}

	/**
	 * Returns the value of the '<em><b>Minbe</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Minbe</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Minbe</em>' attribute.
	 * @see #setMinbe(java.lang.String)
	 */
	public String getMinbe() {
		return DataUtil.toString(super.getByIndex(INDEX_MINBE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMinbe <em>Minbe</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Minbe</em>' attribute.
	 * @see #getMinbe()
	 */
	public void setMinbe(String minbe) {
		super.setByIndex(INDEX_MINBE, minbe);
	}

	/**
	 * Returns the value of the '<em><b>Bstmi</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bstmi</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bstmi</em>' attribute.
	 * @see #setBstmi(java.lang.String)
	 */
	public String getBstmi() {
		return DataUtil.toString(super.getByIndex(INDEX_BSTMI, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBstmi <em>Bstmi</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bstmi</em>' attribute.
	 * @see #getBstmi()
	 */
	public void setBstmi(String bstmi) {
		super.setByIndex(INDEX_BSTMI, bstmi);
	}

	/**
	 * Returns the value of the '<em><b>Bstma</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bstma</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bstma</em>' attribute.
	 * @see #setBstma(java.lang.String)
	 */
	public String getBstma() {
		return DataUtil.toString(super.getByIndex(INDEX_BSTMA, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBstma <em>Bstma</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bstma</em>' attribute.
	 * @see #getBstma()
	 */
	public void setBstma(String bstma) {
		super.setByIndex(INDEX_BSTMA, bstma);
	}

	/**
	 * Returns the value of the '<em><b>Mabst</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mabst</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mabst</em>' attribute.
	 * @see #setMabst(java.lang.String)
	 */
	public String getMabst() {
		return DataUtil.toString(super.getByIndex(INDEX_MABST, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMabst <em>Mabst</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mabst</em>' attribute.
	 * @see #getMabst()
	 */
	public void setMabst(String mabst) {
		super.setByIndex(INDEX_MABST, mabst);
	}

	/**
	 * Returns the value of the '<em><b>Lgpro</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lgpro</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lgpro</em>' attribute.
	 * @see #setLgpro(java.lang.String)
	 */
	public String getLgpro() {
		return DataUtil.toString(super.getByIndex(INDEX_LGPRO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLgpro <em>Lgpro</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lgpro</em>' attribute.
	 * @see #getLgpro()
	 */
	public void setLgpro(String lgpro) {
		super.setByIndex(INDEX_LGPRO, lgpro);
	}

	/**
	 * Returns the value of the '<em><b>Plifz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plifz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plifz</em>' attribute.
	 * @see #setPlifz(java.lang.String)
	 */
	public String getPlifz() {
		return DataUtil.toString(super.getByIndex(INDEX_PLIFZ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPlifz <em>Plifz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plifz</em>' attribute.
	 * @see #getPlifz()
	 */
	public void setPlifz(String plifz) {
		super.setByIndex(INDEX_PLIFZ, plifz);
	}

	/**
	 * Returns the value of the '<em><b>Eisbe</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Eisbe</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Eisbe</em>' attribute.
	 * @see #setEisbe(java.lang.String)
	 */
	public String getEisbe() {
		return DataUtil.toString(super.getByIndex(INDEX_EISBE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEisbe <em>Eisbe</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Eisbe</em>' attribute.
	 * @see #getEisbe()
	 */
	public void setEisbe(String eisbe) {
		super.setByIndex(INDEX_EISBE, eisbe);
	}

	/**
	 * Returns the value of the '<em><b>Eislo</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Eislo</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Eislo</em>' attribute.
	 * @see #setEislo(java.lang.String)
	 */
	public String getEislo() {
		return DataUtil.toString(super.getByIndex(INDEX_EISLO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEislo <em>Eislo</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Eislo</em>' attribute.
	 * @see #getEislo()
	 */
	public void setEislo(String eislo) {
		super.setByIndex(INDEX_EISLO, eislo);
	}


}