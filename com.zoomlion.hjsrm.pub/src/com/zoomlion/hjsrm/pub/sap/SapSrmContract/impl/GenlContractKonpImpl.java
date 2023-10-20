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
import com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractKonpImpl#getKnumh <em>Knumh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractKonpImpl#getKopos <em>Kopos</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractKonpImpl#getKappl <em>Kappl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractKonpImpl#getKschl <em>Kschl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractKonpImpl#getKbetr <em>Kbetr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractKonpImpl#getKonwa <em>Konwa</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractKonpImpl#getKpein <em>Kpein</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractKonpImpl#getKmein <em>Kmein</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.impl.GenlContractKonpImpl#getLoevmKo <em>LoevmKo</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlContractKonp;
 */

public class GenlContractKonpImpl extends ExtendedDataObjectImpl implements GenlContractKonp {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_KNUMH = 0;
	public final static int INDEX_KOPOS = 1;
	public final static int INDEX_KAPPL = 2;
	public final static int INDEX_KSCHL = 3;
	public final static int INDEX_KBETR = 4;
	public final static int INDEX_KONWA = 5;
	public final static int INDEX_KPEIN = 6;
	public final static int INDEX_KMEIN = 7;
	public final static int INDEX_LOEVMKO = 8;
	public final static int SDO_PROPERTY_COUNT = 9;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlContractKonpImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlContractKonpImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Knumh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Knumh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Knumh</em>' attribute.
	 * @see #setKnumh(java.lang.String)
	 */
	public String getKnumh() {
		return DataUtil.toString(super.getByIndex(INDEX_KNUMH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKnumh <em>Knumh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Knumh</em>' attribute.
	 * @see #getKnumh()
	 */
	public void setKnumh(String knumh) {
		super.setByIndex(INDEX_KNUMH, knumh);
	}

	/**
	 * Returns the value of the '<em><b>Kopos</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kopos</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kopos</em>' attribute.
	 * @see #setKopos(java.lang.String)
	 */
	public String getKopos() {
		return DataUtil.toString(super.getByIndex(INDEX_KOPOS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKopos <em>Kopos</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kopos</em>' attribute.
	 * @see #getKopos()
	 */
	public void setKopos(String kopos) {
		super.setByIndex(INDEX_KOPOS, kopos);
	}

	/**
	 * Returns the value of the '<em><b>Kappl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kappl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kappl</em>' attribute.
	 * @see #setKappl(java.lang.String)
	 */
	public String getKappl() {
		return DataUtil.toString(super.getByIndex(INDEX_KAPPL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKappl <em>Kappl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kappl</em>' attribute.
	 * @see #getKappl()
	 */
	public void setKappl(String kappl) {
		super.setByIndex(INDEX_KAPPL, kappl);
	}

	/**
	 * Returns the value of the '<em><b>Kschl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kschl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kschl</em>' attribute.
	 * @see #setKschl(java.lang.String)
	 */
	public String getKschl() {
		return DataUtil.toString(super.getByIndex(INDEX_KSCHL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKschl <em>Kschl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kschl</em>' attribute.
	 * @see #getKschl()
	 */
	public void setKschl(String kschl) {
		super.setByIndex(INDEX_KSCHL, kschl);
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
	 * @see #setKbetr(java.lang.String)
	 */
	public String getKbetr() {
		return DataUtil.toString(super.getByIndex(INDEX_KBETR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKbetr <em>Kbetr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kbetr</em>' attribute.
	 * @see #getKbetr()
	 */
	public void setKbetr(String kbetr) {
		super.setByIndex(INDEX_KBETR, kbetr);
	}

	/**
	 * Returns the value of the '<em><b>Konwa</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Konwa</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Konwa</em>' attribute.
	 * @see #setKonwa(java.lang.String)
	 */
	public String getKonwa() {
		return DataUtil.toString(super.getByIndex(INDEX_KONWA, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKonwa <em>Konwa</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Konwa</em>' attribute.
	 * @see #getKonwa()
	 */
	public void setKonwa(String konwa) {
		super.setByIndex(INDEX_KONWA, konwa);
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
	 * @see #setKpein(java.lang.String)
	 */
	public String getKpein() {
		return DataUtil.toString(super.getByIndex(INDEX_KPEIN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getKpein <em>Kpein</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kpein</em>' attribute.
	 * @see #getKpein()
	 */
	public void setKpein(String kpein) {
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
	 * Returns the value of the '<em><b>LoevmKo</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>LoevmKo</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>LoevmKo</em>' attribute.
	 * @see #setLoevmKo(java.lang.String)
	 */
	public String getLoevmKo() {
		return DataUtil.toString(super.getByIndex(INDEX_LOEVMKO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLoevmKo <em>LoevmKo</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>LoevmKo</em>' attribute.
	 * @see #getLoevmKo()
	 */
	public void setLoevmKo(String loevmKo) {
		super.setByIndex(INDEX_LOEVMKO, loevmKo);
	}


}