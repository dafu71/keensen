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
import com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam;

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
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterParamImpl#getRecid <em>Recid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterParamImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterParamImpl#getResid <em>Resid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterParamImpl#getAivalue <em>Aivalue</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterParamImpl#getSivalue <em>Sivalue</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterParamImpl#getFsivalue <em>Fsivalue</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterParamImpl#getAuditid <em>Auditid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterParamImpl#getSupplypointid <em>Supplypointid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterParamImpl#getMcumapid <em>Mcumapid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterParamImpl#getTimestamp <em>Timestamp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterParamImpl#getReccreatedate <em>Reccreatedate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterParamImpl#getOrgid <em>Orgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements IMeterParam;
 */

public class IMeterParamImpl extends ExtendedDataObjectImpl implements IMeterParam {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_RECID = 0;
	public final static int INDEX_USERID = 1;
	public final static int INDEX_RESID = 2;
	public final static int INDEX_AIVALUE = 3;
	public final static int INDEX_SIVALUE = 4;
	public final static int INDEX_FSIVALUE = 5;
	public final static int INDEX_AUDITID = 6;
	public final static int INDEX_SUPPLYPOINTID = 7;
	public final static int INDEX_MCUMAPID = 8;
	public final static int INDEX_TIMESTAMP = 9;
	public final static int INDEX_RECCREATEDATE = 10;
	public final static int INDEX_ORGID = 11;
	public final static int SDO_PROPERTY_COUNT = 12;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public IMeterParamImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public IMeterParamImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Recid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recid</em>' attribute.
	 * @see #setRecid(int)
	 */
	public int getRecid() {
		return DataUtil.toInt(super.getByIndex(INDEX_RECID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRecid <em>Recid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recid</em>' attribute.
	 * @see #getRecid()
	 */
	public void setRecid(int recid) {
		super.setByIndex(INDEX_RECID, recid);
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
	 * Returns the value of the '<em><b>Resid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Resid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Resid</em>' attribute.
	 * @see #setResid(java.lang.String)
	 */
	public String getResid() {
		return DataUtil.toString(super.getByIndex(INDEX_RESID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getResid <em>Resid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Resid</em>' attribute.
	 * @see #getResid()
	 */
	public void setResid(String resid) {
		super.setByIndex(INDEX_RESID, resid);
	}

	/**
	 * Returns the value of the '<em><b>Aivalue</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Aivalue</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Aivalue</em>' attribute.
	 * @see #setAivalue(java.math.BigDecimal)
	 */
	public BigDecimal getAivalue() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_AIVALUE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAivalue <em>Aivalue</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Aivalue</em>' attribute.
	 * @see #getAivalue()
	 */
	public void setAivalue(BigDecimal aivalue) {
		super.setByIndex(INDEX_AIVALUE, aivalue);
	}

	/**
	 * Returns the value of the '<em><b>Sivalue</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sivalue</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sivalue</em>' attribute.
	 * @see #setSivalue(java.math.BigDecimal)
	 */
	public BigDecimal getSivalue() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_SIVALUE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSivalue <em>Sivalue</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sivalue</em>' attribute.
	 * @see #getSivalue()
	 */
	public void setSivalue(BigDecimal sivalue) {
		super.setByIndex(INDEX_SIVALUE, sivalue);
	}

	/**
	 * Returns the value of the '<em><b>Fsivalue</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Fsivalue</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Fsivalue</em>' attribute.
	 * @see #setFsivalue(java.math.BigDecimal)
	 */
	public BigDecimal getFsivalue() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_FSIVALUE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFsivalue <em>Fsivalue</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Fsivalue</em>' attribute.
	 * @see #getFsivalue()
	 */
	public void setFsivalue(BigDecimal fsivalue) {
		super.setByIndex(INDEX_FSIVALUE, fsivalue);
	}

	/**
	 * Returns the value of the '<em><b>Auditid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Auditid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Auditid</em>' attribute.
	 * @see #setAuditid(java.lang.String)
	 */
	public String getAuditid() {
		return DataUtil.toString(super.getByIndex(INDEX_AUDITID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAuditid <em>Auditid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Auditid</em>' attribute.
	 * @see #getAuditid()
	 */
	public void setAuditid(String auditid) {
		super.setByIndex(INDEX_AUDITID, auditid);
	}

	/**
	 * Returns the value of the '<em><b>Supplypointid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Supplypointid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Supplypointid</em>' attribute.
	 * @see #setSupplypointid(java.lang.String)
	 */
	public String getSupplypointid() {
		return DataUtil.toString(super.getByIndex(INDEX_SUPPLYPOINTID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSupplypointid <em>Supplypointid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Supplypointid</em>' attribute.
	 * @see #getSupplypointid()
	 */
	public void setSupplypointid(String supplypointid) {
		super.setByIndex(INDEX_SUPPLYPOINTID, supplypointid);
	}

	/**
	 * Returns the value of the '<em><b>Mcumapid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mcumapid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mcumapid</em>' attribute.
	 * @see #setMcumapid(int)
	 */
	public int getMcumapid() {
		return DataUtil.toInt(super.getByIndex(INDEX_MCUMAPID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMcumapid <em>Mcumapid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mcumapid</em>' attribute.
	 * @see #getMcumapid()
	 */
	public void setMcumapid(int mcumapid) {
		super.setByIndex(INDEX_MCUMAPID, mcumapid);
	}

	/**
	 * Returns the value of the '<em><b>Timestamp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Timestamp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Timestamp</em>' attribute.
	 * @see #setTimestamp(java.util.Date)
	 */
	public Date getTimestamp() {
		return DataUtil.toDate(super.getByIndex(INDEX_TIMESTAMP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTimestamp <em>Timestamp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Timestamp</em>' attribute.
	 * @see #getTimestamp()
	 */
	public void setTimestamp(Date timestamp) {
		super.setByIndex(INDEX_TIMESTAMP, timestamp);
	}

	/**
	 * Returns the value of the '<em><b>Reccreatedate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reccreatedate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reccreatedate</em>' attribute.
	 * @see #setReccreatedate(java.util.Date)
	 */
	public Date getReccreatedate() {
		return DataUtil.toDate(super.getByIndex(INDEX_RECCREATEDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReccreatedate <em>Reccreatedate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reccreatedate</em>' attribute.
	 * @see #getReccreatedate()
	 */
	public void setReccreatedate(Date reccreatedate) {
		super.setByIndex(INDEX_RECCREATEDATE, reccreatedate);
	}

	/**
	 * Returns the value of the '<em><b>Orgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Orgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Orgid</em>' attribute.
	 * @see #setOrgid(java.lang.String)
	 */
	public String getOrgid() {
		return DataUtil.toString(super.getByIndex(INDEX_ORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOrgid <em>Orgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgid</em>' attribute.
	 * @see #getOrgid()
	 */
	public void setOrgid(String orgid) {
		super.setByIndex(INDEX_ORGID, orgid);
	}


}