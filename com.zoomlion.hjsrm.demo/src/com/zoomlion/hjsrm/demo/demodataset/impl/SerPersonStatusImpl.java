/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.demo.demodataset.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus;

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
 *   <li>{@link com.zoomlion.hjsrm.demo.demodataset.impl.SerPersonStatusImpl#getStatusId <em>StatusId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.demo.demodataset.impl.SerPersonStatusImpl#getUserId <em>UserId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.demo.demodataset.impl.SerPersonStatusImpl#getUserName <em>UserName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.demo.demodataset.impl.SerPersonStatusImpl#getOperatorStatus <em>OperatorStatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.demo.demodataset.impl.SerPersonStatusImpl#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.demo.demodataset.impl.SerPersonStatusImpl#getBegintime <em>Begintime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.demo.demodataset.impl.SerPersonStatusImpl#getEndtime <em>Endtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.demo.demodataset.impl.SerPersonStatusImpl#getWorktype <em>Worktype</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements SerPersonStatus;
 */

public class SerPersonStatusImpl extends ExtendedDataObjectImpl implements SerPersonStatus {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_STATUSID = 0;
	public final static int INDEX_USERID = 1;
	public final static int INDEX_USERNAME = 2;
	public final static int INDEX_OPERATORSTATUS = 3;
	public final static int INDEX_PROCESSINSTID = 4;
	public final static int INDEX_BEGINTIME = 5;
	public final static int INDEX_ENDTIME = 6;
	public final static int INDEX_WORKTYPE = 7;
	public final static int SDO_PROPERTY_COUNT = 8;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public SerPersonStatusImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public SerPersonStatusImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>StatusId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>StatusId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>StatusId</em>' attribute.
	 * @see #setStatusId(long)
	 */
	public long getStatusId() {
		return DataUtil.toLong(super.getByIndex(INDEX_STATUSID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStatusId <em>StatusId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>StatusId</em>' attribute.
	 * @see #getStatusId()
	 */
	public void setStatusId(long statusId) {
		super.setByIndex(INDEX_STATUSID, statusId);
	}

	/**
	 * Returns the value of the '<em><b>UserId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>UserId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>UserId</em>' attribute.
	 * @see #setUserId(java.lang.String)
	 */
	public String getUserId() {
		return DataUtil.toString(super.getByIndex(INDEX_USERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUserId <em>UserId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>UserId</em>' attribute.
	 * @see #getUserId()
	 */
	public void setUserId(String userId) {
		super.setByIndex(INDEX_USERID, userId);
	}

	/**
	 * Returns the value of the '<em><b>UserName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>UserName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>UserName</em>' attribute.
	 * @see #setUserName(java.lang.String)
	 */
	public String getUserName() {
		return DataUtil.toString(super.getByIndex(INDEX_USERNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUserName <em>UserName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>UserName</em>' attribute.
	 * @see #getUserName()
	 */
	public void setUserName(String userName) {
		super.setByIndex(INDEX_USERNAME, userName);
	}

	/**
	 * Returns the value of the '<em><b>OperatorStatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>OperatorStatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>OperatorStatus</em>' attribute.
	 * @see #setOperatorStatus(java.lang.String)
	 */
	public String getOperatorStatus() {
		return DataUtil.toString(super.getByIndex(INDEX_OPERATORSTATUS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOperatorStatus <em>OperatorStatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>OperatorStatus</em>' attribute.
	 * @see #getOperatorStatus()
	 */
	public void setOperatorStatus(String operatorStatus) {
		super.setByIndex(INDEX_OPERATORSTATUS, operatorStatus);
	}

	/**
	 * Returns the value of the '<em><b>Processinstid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Processinstid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Processinstid</em>' attribute.
	 * @see #setProcessinstid(long)
	 */
	public long getProcessinstid() {
		return DataUtil.toLong(super.getByIndex(INDEX_PROCESSINSTID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getProcessinstid <em>Processinstid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processinstid</em>' attribute.
	 * @see #getProcessinstid()
	 */
	public void setProcessinstid(long processinstid) {
		super.setByIndex(INDEX_PROCESSINSTID, processinstid);
	}

	/**
	 * Returns the value of the '<em><b>Begintime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Begintime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Begintime</em>' attribute.
	 * @see #setBegintime(java.util.Date)
	 */
	public Date getBegintime() {
		return DataUtil.toDate(super.getByIndex(INDEX_BEGINTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBegintime <em>Begintime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Begintime</em>' attribute.
	 * @see #getBegintime()
	 */
	public void setBegintime(Date begintime) {
		super.setByIndex(INDEX_BEGINTIME, begintime);
	}

	/**
	 * Returns the value of the '<em><b>Endtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Endtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Endtime</em>' attribute.
	 * @see #setEndtime(java.util.Date)
	 */
	public Date getEndtime() {
		return DataUtil.toDate(super.getByIndex(INDEX_ENDTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEndtime <em>Endtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Endtime</em>' attribute.
	 * @see #getEndtime()
	 */
	public void setEndtime(Date endtime) {
		super.setByIndex(INDEX_ENDTIME, endtime);
	}

	/**
	 * Returns the value of the '<em><b>Worktype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Worktype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Worktype</em>' attribute.
	 * @see #setWorktype(java.lang.String)
	 */
	public String getWorktype() {
		return DataUtil.toString(super.getByIndex(INDEX_WORKTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWorktype <em>Worktype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Worktype</em>' attribute.
	 * @see #getWorktype()
	 */
	public void setWorktype(String worktype) {
		super.setByIndex(INDEX_WORKTYPE, worktype);
	}


}