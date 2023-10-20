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
import com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.VwarehourseImpl#getEbeln <em>Ebeln</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.VwarehourseImpl#getEbelp <em>Ebelp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.VwarehourseImpl#getMenge <em>Menge</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.VwarehourseImpl#getBwart <em>Bwart</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.VwarehourseImpl#getLfbja <em>Lfbja</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.VwarehourseImpl#getLfbnr <em>Lfbnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.VwarehourseImpl#getLfpos <em>Lfpos</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.VwarehourseImpl#getGrund <em>Grund</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.VwarehourseImpl#getLgort <em>Lgort</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.VwarehourseImpl#getSgtxt <em>Sgtxt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.impl.VwarehourseImpl#getCharg <em>Charg</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements Vwarehourse;
 */

public class VwarehourseImpl extends ExtendedDataObjectImpl implements Vwarehourse {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_EBELN = 0;
	public final static int INDEX_EBELP = 1;
	public final static int INDEX_MENGE = 2;
	public final static int INDEX_BWART = 3;
	public final static int INDEX_LFBJA = 4;
	public final static int INDEX_LFBNR = 5;
	public final static int INDEX_LFPOS = 6;
	public final static int INDEX_GRUND = 7;
	public final static int INDEX_LGORT = 8;
	public final static int INDEX_SGTXT = 9;
	public final static int INDEX_CHARG = 10;
	public final static int SDO_PROPERTY_COUNT = 11;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public VwarehourseImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public VwarehourseImpl(Type type) {
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


}