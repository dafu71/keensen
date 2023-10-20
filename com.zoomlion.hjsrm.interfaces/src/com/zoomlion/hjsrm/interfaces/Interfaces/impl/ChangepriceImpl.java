/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.interfaces.Interfaces.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.interfaces.Interfaces.Changeprice;

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
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.ChangepriceImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.ChangepriceImpl#getSupplypointpkid <em>Supplypointpkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.ChangepriceImpl#getReading <em>Reading</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.ChangepriceImpl#getRecordtime <em>Recordtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.ChangepriceImpl#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements Changeprice;
 */

public class ChangepriceImpl extends ExtendedDataObjectImpl implements Changeprice {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_USERID = 0;
	public final static int INDEX_SUPPLYPOINTPKID = 1;
	public final static int INDEX_READING = 2;
	public final static int INDEX_RECORDTIME = 3;
	public final static int INDEX_DATAORGID = 4;
	public final static int SDO_PROPERTY_COUNT = 5;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public ChangepriceImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public ChangepriceImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Userid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Userid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Userid</em>' attribute.
	 * @see #setUserid(java.lang.String)
	 */
	public String getUserid() {
		return DataUtil.toString(super.getByIndex(INDEX_USERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUserid <em>Userid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Userid</em>' attribute.
	 * @see #getUserid()
	 */
	public void setUserid(String userid) {
		super.setByIndex(INDEX_USERID, userid);
	}

	/**
	 * Returns the value of the '<em><b>Supplypointpkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Supplypointpkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Supplypointpkid</em>' attribute.
	 * @see #setSupplypointpkid(java.lang.String)
	 */
	public String getSupplypointpkid() {
		return DataUtil.toString(super.getByIndex(INDEX_SUPPLYPOINTPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSupplypointpkid <em>Supplypointpkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Supplypointpkid</em>' attribute.
	 * @see #getSupplypointpkid()
	 */
	public void setSupplypointpkid(String supplypointpkid) {
		super.setByIndex(INDEX_SUPPLYPOINTPKID, supplypointpkid);
	}

	/**
	 * Returns the value of the '<em><b>Reading</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reading</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reading</em>' attribute.
	 * @see #setReading(java.math.BigDecimal)
	 */
	public BigDecimal getReading() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_READING, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReading <em>Reading</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reading</em>' attribute.
	 * @see #getReading()
	 */
	public void setReading(BigDecimal reading) {
		super.setByIndex(INDEX_READING, reading);
	}

	/**
	 * Returns the value of the '<em><b>Recordtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recordtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recordtime</em>' attribute.
	 * @see #setRecordtime(java.util.Date)
	 */
	public Date getRecordtime() {
		return DataUtil.toDate(super.getByIndex(INDEX_RECORDTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRecordtime <em>Recordtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recordtime</em>' attribute.
	 * @see #getRecordtime()
	 */
	public void setRecordtime(Date recordtime) {
		super.setByIndex(INDEX_RECORDTIME, recordtime);
	}

	/**
	 * Returns the value of the '<em><b>Dataorgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Dataorgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Dataorgid</em>' attribute.
	 * @see #setDataorgid(java.math.BigDecimal)
	 */
	public BigDecimal getDataorgid() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_DATAORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(BigDecimal dataorgid) {
		super.setByIndex(INDEX_DATAORGID, dataorgid);
	}


}