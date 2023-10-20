/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpflpzList;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpflpzListImpl#getId <em>Id</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpflpzListImpl#getFldm <em>Fldm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpflpzListImpl#getFlmc <em>Flmc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpflpzListImpl#getSjid <em>Sjid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpflpzListImpl#getSsdj <em>Ssdj</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlCpflpzListImpl#getHbdm <em>Hbdm</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlCpflpzList;
 */

public class GenlCpflpzListImpl extends ExtendedDataObjectImpl implements GenlCpflpzList {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_ID = 0;
	public final static int INDEX_FLDM = 1;
	public final static int INDEX_FLMC = 2;
	public final static int INDEX_SJID = 3;
	public final static int INDEX_SSDJ = 4;
	public final static int INDEX_HBDM = 5;
	public final static int SDO_PROPERTY_COUNT = 6;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlCpflpzListImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlCpflpzListImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Id</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Id</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Id</em>' attribute.
	 * @see #setId(long)
	 */
	public long getId() {
		return DataUtil.toLong(super.getByIndex(INDEX_ID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getId <em>Id</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Id</em>' attribute.
	 * @see #getId()
	 */
	public void setId(long id) {
		super.setByIndex(INDEX_ID, id);
	}

	/**
	 * Returns the value of the '<em><b>Fldm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Fldm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Fldm</em>' attribute.
	 * @see #setFldm(java.lang.String)
	 */
	public String getFldm() {
		return DataUtil.toString(super.getByIndex(INDEX_FLDM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFldm <em>Fldm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Fldm</em>' attribute.
	 * @see #getFldm()
	 */
	public void setFldm(String fldm) {
		super.setByIndex(INDEX_FLDM, fldm);
	}

	/**
	 * Returns the value of the '<em><b>Flmc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Flmc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Flmc</em>' attribute.
	 * @see #setFlmc(java.lang.String)
	 */
	public String getFlmc() {
		return DataUtil.toString(super.getByIndex(INDEX_FLMC, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFlmc <em>Flmc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Flmc</em>' attribute.
	 * @see #getFlmc()
	 */
	public void setFlmc(String flmc) {
		super.setByIndex(INDEX_FLMC, flmc);
	}

	/**
	 * Returns the value of the '<em><b>Sjid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sjid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sjid</em>' attribute.
	 * @see #setSjid(long)
	 */
	public long getSjid() {
		return DataUtil.toLong(super.getByIndex(INDEX_SJID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSjid <em>Sjid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sjid</em>' attribute.
	 * @see #getSjid()
	 */
	public void setSjid(long sjid) {
		super.setByIndex(INDEX_SJID, sjid);
	}

	/**
	 * Returns the value of the '<em><b>Ssdj</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ssdj</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ssdj</em>' attribute.
	 * @see #setSsdj(java.lang.String)
	 */
	public String getSsdj() {
		return DataUtil.toString(super.getByIndex(INDEX_SSDJ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSsdj <em>Ssdj</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ssdj</em>' attribute.
	 * @see #getSsdj()
	 */
	public void setSsdj(String ssdj) {
		super.setByIndex(INDEX_SSDJ, ssdj);
	}

	/**
	 * Returns the value of the '<em><b>Hbdm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hbdm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hbdm</em>' attribute.
	 * @see #setHbdm(java.lang.String)
	 */
	public String getHbdm() {
		return DataUtil.toString(super.getByIndex(INDEX_HBDM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getHbdm <em>Hbdm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hbdm</em>' attribute.
	 * @see #getHbdm()
	 */
	public void setHbdm(String hbdm) {
		super.setByIndex(INDEX_HBDM, hbdm);
	}


}