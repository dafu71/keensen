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
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMara;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMaraImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMaraImpl#getMaktx <em>Maktx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMaraImpl#getErsda <em>Ersda</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMaraImpl#getLaeda <em>Laeda</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMaraImpl#getLvorm <em>Lvorm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMaraImpl#getMtart <em>Mtart</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMaraImpl#getMeins <em>Meins</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMaraImpl#getZeinr <em>Zeinr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMaraImpl#getMstae <em>Mstae</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMaraImpl#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.impl.BaseMaterialMaraImpl#getTrant <em>Trant</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements BaseMaterialMara;
 */

public class BaseMaterialMaraImpl extends ExtendedDataObjectImpl implements BaseMaterialMara {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_MATNR = 0;
	public final static int INDEX_MAKTX = 1;
	public final static int INDEX_ERSDA = 2;
	public final static int INDEX_LAEDA = 3;
	public final static int INDEX_LVORM = 4;
	public final static int INDEX_MTART = 5;
	public final static int INDEX_MEINS = 6;
	public final static int INDEX_ZEINR = 7;
	public final static int INDEX_MSTAE = 8;
	public final static int INDEX_TRANU = 9;
	public final static int INDEX_TRANT = 10;
	public final static int SDO_PROPERTY_COUNT = 11;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public BaseMaterialMaraImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public BaseMaterialMaraImpl(Type type) {
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
	 * Returns the value of the '<em><b>Maktx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Maktx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Maktx</em>' attribute.
	 * @see #setMaktx(java.lang.String)
	 */
	public String getMaktx() {
		return DataUtil.toString(super.getByIndex(INDEX_MAKTX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMaktx <em>Maktx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Maktx</em>' attribute.
	 * @see #getMaktx()
	 */
	public void setMaktx(String maktx) {
		super.setByIndex(INDEX_MAKTX, maktx);
	}

	/**
	 * Returns the value of the '<em><b>Ersda</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ersda</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ersda</em>' attribute.
	 * @see #setErsda(java.util.Date)
	 */
	public Date getErsda() {
		return DataUtil.toDate(super.getByIndex(INDEX_ERSDA, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getErsda <em>Ersda</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ersda</em>' attribute.
	 * @see #getErsda()
	 */
	public void setErsda(Date ersda) {
		super.setByIndex(INDEX_ERSDA, ersda);
	}

	/**
	 * Returns the value of the '<em><b>Laeda</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Laeda</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Laeda</em>' attribute.
	 * @see #setLaeda(java.util.Date)
	 */
	public Date getLaeda() {
		return DataUtil.toDate(super.getByIndex(INDEX_LAEDA, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLaeda <em>Laeda</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Laeda</em>' attribute.
	 * @see #getLaeda()
	 */
	public void setLaeda(Date laeda) {
		super.setByIndex(INDEX_LAEDA, laeda);
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
	 * Returns the value of the '<em><b>Mtart</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mtart</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mtart</em>' attribute.
	 * @see #setMtart(java.lang.String)
	 */
	public String getMtart() {
		return DataUtil.toString(super.getByIndex(INDEX_MTART, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMtart <em>Mtart</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mtart</em>' attribute.
	 * @see #getMtart()
	 */
	public void setMtart(String mtart) {
		super.setByIndex(INDEX_MTART, mtart);
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
	 * Returns the value of the '<em><b>Zeinr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zeinr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zeinr</em>' attribute.
	 * @see #setZeinr(java.lang.String)
	 */
	public String getZeinr() {
		return DataUtil.toString(super.getByIndex(INDEX_ZEINR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZeinr <em>Zeinr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zeinr</em>' attribute.
	 * @see #getZeinr()
	 */
	public void setZeinr(String zeinr) {
		super.setByIndex(INDEX_ZEINR, zeinr);
	}

	/**
	 * Returns the value of the '<em><b>Mstae</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mstae</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mstae</em>' attribute.
	 * @see #setMstae(java.lang.String)
	 */
	public String getMstae() {
		return DataUtil.toString(super.getByIndex(INDEX_MSTAE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMstae <em>Mstae</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mstae</em>' attribute.
	 * @see #getMstae()
	 */
	public void setMstae(String mstae) {
		super.setByIndex(INDEX_MSTAE, mstae);
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


}