/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlNoteVndetailImpl#getZasnh <em>Zasnh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlNoteVndetailImpl#getZasnp <em>Zasnp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlNoteVndetailImpl#getVnbm <em>Vnbm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlNoteVndetailImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlNoteVndetailImpl#getModifytime <em>Modifytime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlNoteVndetailImpl#getDelflay <em>Delflay</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.impl.GenlNoteVndetailImpl#getVnid <em>Vnid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlNoteVndetail;
 */

public class GenlNoteVndetailImpl extends ExtendedDataObjectImpl implements GenlNoteVndetail {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_ZASNH = 0;
	public final static int INDEX_ZASNP = 1;
	public final static int INDEX_VNBM = 2;
	public final static int INDEX_MODIFYBY = 3;
	public final static int INDEX_MODIFYTIME = 4;
	public final static int INDEX_DELFLAY = 5;
	public final static int INDEX_VNID = 6;
	public final static int SDO_PROPERTY_COUNT = 7;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlNoteVndetailImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlNoteVndetailImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Zasnh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zasnh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zasnh</em>' attribute.
	 * @see #setZasnh(java.lang.String)
	 */
	public String getZasnh() {
		return DataUtil.toString(super.getByIndex(INDEX_ZASNH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZasnh <em>Zasnh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zasnh</em>' attribute.
	 * @see #getZasnh()
	 */
	public void setZasnh(String zasnh) {
		super.setByIndex(INDEX_ZASNH, zasnh);
	}

	/**
	 * Returns the value of the '<em><b>Zasnp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zasnp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zasnp</em>' attribute.
	 * @see #setZasnp(java.lang.String)
	 */
	public String getZasnp() {
		return DataUtil.toString(super.getByIndex(INDEX_ZASNP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZasnp <em>Zasnp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zasnp</em>' attribute.
	 * @see #getZasnp()
	 */
	public void setZasnp(String zasnp) {
		super.setByIndex(INDEX_ZASNP, zasnp);
	}

	/**
	 * Returns the value of the '<em><b>Vnbm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Vnbm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Vnbm</em>' attribute.
	 * @see #setVnbm(java.lang.String)
	 */
	public String getVnbm() {
		return DataUtil.toString(super.getByIndex(INDEX_VNBM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getVnbm <em>Vnbm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Vnbm</em>' attribute.
	 * @see #getVnbm()
	 */
	public void setVnbm(String vnbm) {
		super.setByIndex(INDEX_VNBM, vnbm);
	}

	/**
	 * Returns the value of the '<em><b>Modifyby</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifyby</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifyby</em>' attribute.
	 * @see #setModifyby(java.lang.String)
	 */
	public String getModifyby() {
		return DataUtil.toString(super.getByIndex(INDEX_MODIFYBY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifyby <em>Modifyby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifyby</em>' attribute.
	 * @see #getModifyby()
	 */
	public void setModifyby(String modifyby) {
		super.setByIndex(INDEX_MODIFYBY, modifyby);
	}

	/**
	 * Returns the value of the '<em><b>Modifytime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifytime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifytime</em>' attribute.
	 * @see #setModifytime(java.util.Date)
	 */
	public Date getModifytime() {
		return DataUtil.toDate(super.getByIndex(INDEX_MODIFYTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifytime <em>Modifytime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifytime</em>' attribute.
	 * @see #getModifytime()
	 */
	public void setModifytime(Date modifytime) {
		super.setByIndex(INDEX_MODIFYTIME, modifytime);
	}

	/**
	 * Returns the value of the '<em><b>Delflay</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Delflay</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Delflay</em>' attribute.
	 * @see #setDelflay(java.lang.String)
	 */
	public String getDelflay() {
		return DataUtil.toString(super.getByIndex(INDEX_DELFLAY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDelflay <em>Delflay</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Delflay</em>' attribute.
	 * @see #getDelflay()
	 */
	public void setDelflay(String delflay) {
		super.setByIndex(INDEX_DELFLAY, delflay);
	}

	/**
	 * Returns the value of the '<em><b>Vnid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Vnid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Vnid</em>' attribute.
	 * @see #setVnid(long)
	 */
	public long getVnid() {
		return DataUtil.toLong(super.getByIndex(INDEX_VNID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getVnid <em>Vnid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Vnid</em>' attribute.
	 * @see #getVnid()
	 */
	public void setVnid(long vnid) {
		super.setByIndex(INDEX_VNID, vnid);
	}


}