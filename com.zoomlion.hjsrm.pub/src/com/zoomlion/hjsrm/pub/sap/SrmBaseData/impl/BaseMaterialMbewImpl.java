/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BaseMaterialMbewImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BaseMaterialMbewImpl#getBwkey <em>Bwkey</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BaseMaterialMbewImpl#getBwtar <em>Bwtar</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BaseMaterialMbewImpl#getVprsv <em>Vprsv</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BaseMaterialMbewImpl#getStprs <em>Stprs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BaseMaterialMbewImpl#getPeinh <em>Peinh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BaseMaterialMbewImpl#getBklas <em>Bklas</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.impl.BaseMaterialMbewImpl#getLaepr <em>Laepr</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements BaseMaterialMbew;
 */

public class BaseMaterialMbewImpl extends ExtendedDataObjectImpl implements BaseMaterialMbew {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_MATNR = 0;
	public final static int INDEX_BWKEY = 1;
	public final static int INDEX_BWTAR = 2;
	public final static int INDEX_VPRSV = 3;
	public final static int INDEX_STPRS = 4;
	public final static int INDEX_PEINH = 5;
	public final static int INDEX_BKLAS = 6;
	public final static int INDEX_LAEPR = 7;
	public final static int SDO_PROPERTY_COUNT = 8;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public BaseMaterialMbewImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public BaseMaterialMbewImpl(Type type) {
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
	 * Returns the value of the '<em><b>Bwkey</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bwkey</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bwkey</em>' attribute.
	 * @see #setBwkey(java.lang.String)
	 */
	public String getBwkey() {
		return DataUtil.toString(super.getByIndex(INDEX_BWKEY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBwkey <em>Bwkey</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bwkey</em>' attribute.
	 * @see #getBwkey()
	 */
	public void setBwkey(String bwkey) {
		super.setByIndex(INDEX_BWKEY, bwkey);
	}

	/**
	 * Returns the value of the '<em><b>Bwtar</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bwtar</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bwtar</em>' attribute.
	 * @see #setBwtar(java.lang.String)
	 */
	public String getBwtar() {
		return DataUtil.toString(super.getByIndex(INDEX_BWTAR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBwtar <em>Bwtar</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bwtar</em>' attribute.
	 * @see #getBwtar()
	 */
	public void setBwtar(String bwtar) {
		super.setByIndex(INDEX_BWTAR, bwtar);
	}

	/**
	 * Returns the value of the '<em><b>Vprsv</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Vprsv</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Vprsv</em>' attribute.
	 * @see #setVprsv(java.lang.String)
	 */
	public String getVprsv() {
		return DataUtil.toString(super.getByIndex(INDEX_VPRSV, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getVprsv <em>Vprsv</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Vprsv</em>' attribute.
	 * @see #getVprsv()
	 */
	public void setVprsv(String vprsv) {
		super.setByIndex(INDEX_VPRSV, vprsv);
	}

	/**
	 * Returns the value of the '<em><b>Stprs</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stprs</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stprs</em>' attribute.
	 * @see #setStprs(java.math.BigDecimal)
	 */
	public BigDecimal getStprs() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_STPRS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStprs <em>Stprs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stprs</em>' attribute.
	 * @see #getStprs()
	 */
	public void setStprs(BigDecimal stprs) {
		super.setByIndex(INDEX_STPRS, stprs);
	}

	/**
	 * Returns the value of the '<em><b>Peinh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Peinh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Peinh</em>' attribute.
	 * @see #setPeinh(java.lang.String)
	 */
	public String getPeinh() {
		return DataUtil.toString(super.getByIndex(INDEX_PEINH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPeinh <em>Peinh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Peinh</em>' attribute.
	 * @see #getPeinh()
	 */
	public void setPeinh(String peinh) {
		super.setByIndex(INDEX_PEINH, peinh);
	}

	/**
	 * Returns the value of the '<em><b>Bklas</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bklas</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bklas</em>' attribute.
	 * @see #setBklas(java.lang.String)
	 */
	public String getBklas() {
		return DataUtil.toString(super.getByIndex(INDEX_BKLAS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBklas <em>Bklas</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bklas</em>' attribute.
	 * @see #getBklas()
	 */
	public void setBklas(String bklas) {
		super.setByIndex(INDEX_BKLAS, bklas);
	}

	/**
	 * Returns the value of the '<em><b>Laepr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Laepr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Laepr</em>' attribute.
	 * @see #setLaepr(java.util.Date)
	 */
	public Date getLaepr() {
		return DataUtil.toDate(super.getByIndex(INDEX_LAEPR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLaepr <em>Laepr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Laepr</em>' attribute.
	 * @see #getLaepr()
	 */
	public void setLaepr(Date laepr) {
		super.setByIndex(INDEX_LAEPR, laepr);
	}


}