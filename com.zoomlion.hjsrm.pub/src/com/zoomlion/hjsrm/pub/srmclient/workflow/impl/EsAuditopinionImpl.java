/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.srmclient.workflow.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl#getAuditopinionid <em>Auditopinionid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl#getUsername <em>Username</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl#getOrgid <em>Orgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl#getOrgname <em>Orgname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl#getTime <em>Time</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl#getOpinion <em>Opinion</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl#getFlag <em>Flag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl#getStatus <em>Status</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl#getWorkitemid <em>Workitemid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl#getExecutorid <em>Executorid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl#getExecutorname <em>Executorname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl#getWorkitemname <em>Workitemname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsAuditopinionImpl#getRootprocinstid <em>Rootprocinstid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements EsAuditopinion;
 */

public class EsAuditopinionImpl extends ExtendedDataObjectImpl implements EsAuditopinion {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_AUDITOPINIONID = 0;
	public final static int INDEX_USERID = 1;
	public final static int INDEX_USERNAME = 2;
	public final static int INDEX_ORGID = 3;
	public final static int INDEX_ORGNAME = 4;
	public final static int INDEX_TIME = 5;
	public final static int INDEX_OPINION = 6;
	public final static int INDEX_FLAG = 7;
	public final static int INDEX_STATUS = 8;
	public final static int INDEX_PROCESSINSTID = 9;
	public final static int INDEX_WORKITEMID = 10;
	public final static int INDEX_EXECUTORID = 11;
	public final static int INDEX_EXECUTORNAME = 12;
	public final static int INDEX_WORKITEMNAME = 13;
	public final static int INDEX_ROOTPROCINSTID = 14;
	public final static int SDO_PROPERTY_COUNT = 15;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public EsAuditopinionImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public EsAuditopinionImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Auditopinionid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Auditopinionid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Auditopinionid</em>' attribute.
	 * @see #setAuditopinionid(long)
	 */
	public long getAuditopinionid() {
		return DataUtil.toLong(super.getByIndex(INDEX_AUDITOPINIONID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAuditopinionid <em>Auditopinionid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Auditopinionid</em>' attribute.
	 * @see #getAuditopinionid()
	 */
	public void setAuditopinionid(long auditopinionid) {
		super.setByIndex(INDEX_AUDITOPINIONID, auditopinionid);
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
	 * Returns the value of the '<em><b>Username</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Username</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Username</em>' attribute.
	 * @see #setUsername(java.lang.String)
	 */
	public String getUsername() {
		return DataUtil.toString(super.getByIndex(INDEX_USERNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUsername <em>Username</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Username</em>' attribute.
	 * @see #getUsername()
	 */
	public void setUsername(String username) {
		super.setByIndex(INDEX_USERNAME, username);
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
	 * @see #setOrgid(long)
	 */
	public long getOrgid() {
		return DataUtil.toLong(super.getByIndex(INDEX_ORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOrgid <em>Orgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgid</em>' attribute.
	 * @see #getOrgid()
	 */
	public void setOrgid(long orgid) {
		super.setByIndex(INDEX_ORGID, orgid);
	}

	/**
	 * Returns the value of the '<em><b>Orgname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Orgname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Orgname</em>' attribute.
	 * @see #setOrgname(java.lang.String)
	 */
	public String getOrgname() {
		return DataUtil.toString(super.getByIndex(INDEX_ORGNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOrgname <em>Orgname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgname</em>' attribute.
	 * @see #getOrgname()
	 */
	public void setOrgname(String orgname) {
		super.setByIndex(INDEX_ORGNAME, orgname);
	}

	/**
	 * Returns the value of the '<em><b>Time</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Time</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Time</em>' attribute.
	 * @see #setTime(java.util.Date)
	 */
	public Date getTime() {
		return DataUtil.toDate(super.getByIndex(INDEX_TIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTime <em>Time</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Time</em>' attribute.
	 * @see #getTime()
	 */
	public void setTime(Date time) {
		super.setByIndex(INDEX_TIME, time);
	}

	/**
	 * Returns the value of the '<em><b>Opinion</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Opinion</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Opinion</em>' attribute.
	 * @see #setOpinion(java.lang.String)
	 */
	public String getOpinion() {
		return DataUtil.toString(super.getByIndex(INDEX_OPINION, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOpinion <em>Opinion</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Opinion</em>' attribute.
	 * @see #getOpinion()
	 */
	public void setOpinion(String opinion) {
		super.setByIndex(INDEX_OPINION, opinion);
	}

	/**
	 * Returns the value of the '<em><b>Flag</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Flag</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Flag</em>' attribute.
	 * @see #setFlag(java.lang.String)
	 */
	public String getFlag() {
		return DataUtil.toString(super.getByIndex(INDEX_FLAG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFlag <em>Flag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Flag</em>' attribute.
	 * @see #getFlag()
	 */
	public void setFlag(String flag) {
		super.setByIndex(INDEX_FLAG, flag);
	}

	/**
	 * Returns the value of the '<em><b>Status</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Status</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Status</em>' attribute.
	 * @see #setStatus(java.lang.String)
	 */
	public String getStatus() {
		return DataUtil.toString(super.getByIndex(INDEX_STATUS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStatus <em>Status</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Status</em>' attribute.
	 * @see #getStatus()
	 */
	public void setStatus(String status) {
		super.setByIndex(INDEX_STATUS, status);
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
	 * @see #setProcessinstid(java.lang.String)
	 */
	public String getProcessinstid() {
		return DataUtil.toString(super.getByIndex(INDEX_PROCESSINSTID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getProcessinstid <em>Processinstid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processinstid</em>' attribute.
	 * @see #getProcessinstid()
	 */
	public void setProcessinstid(String processinstid) {
		super.setByIndex(INDEX_PROCESSINSTID, processinstid);
	}

	/**
	 * Returns the value of the '<em><b>Workitemid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Workitemid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Workitemid</em>' attribute.
	 * @see #setWorkitemid(java.lang.String)
	 */
	public String getWorkitemid() {
		return DataUtil.toString(super.getByIndex(INDEX_WORKITEMID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWorkitemid <em>Workitemid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Workitemid</em>' attribute.
	 * @see #getWorkitemid()
	 */
	public void setWorkitemid(String workitemid) {
		super.setByIndex(INDEX_WORKITEMID, workitemid);
	}

	/**
	 * Returns the value of the '<em><b>Executorid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Executorid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Executorid</em>' attribute.
	 * @see #setExecutorid(java.lang.String)
	 */
	public String getExecutorid() {
		return DataUtil.toString(super.getByIndex(INDEX_EXECUTORID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExecutorid <em>Executorid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Executorid</em>' attribute.
	 * @see #getExecutorid()
	 */
	public void setExecutorid(String executorid) {
		super.setByIndex(INDEX_EXECUTORID, executorid);
	}

	/**
	 * Returns the value of the '<em><b>Executorname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Executorname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Executorname</em>' attribute.
	 * @see #setExecutorname(java.lang.String)
	 */
	public String getExecutorname() {
		return DataUtil.toString(super.getByIndex(INDEX_EXECUTORNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExecutorname <em>Executorname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Executorname</em>' attribute.
	 * @see #getExecutorname()
	 */
	public void setExecutorname(String executorname) {
		super.setByIndex(INDEX_EXECUTORNAME, executorname);
	}

	/**
	 * Returns the value of the '<em><b>Workitemname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Workitemname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Workitemname</em>' attribute.
	 * @see #setWorkitemname(java.lang.String)
	 */
	public String getWorkitemname() {
		return DataUtil.toString(super.getByIndex(INDEX_WORKITEMNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWorkitemname <em>Workitemname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Workitemname</em>' attribute.
	 * @see #getWorkitemname()
	 */
	public void setWorkitemname(String workitemname) {
		super.setByIndex(INDEX_WORKITEMNAME, workitemname);
	}

	/**
	 * Returns the value of the '<em><b>Rootprocinstid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Rootprocinstid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Rootprocinstid</em>' attribute.
	 * @see #setRootprocinstid(java.lang.String)
	 */
	public String getRootprocinstid() {
		return DataUtil.toString(super.getByIndex(INDEX_ROOTPROCINSTID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRootprocinstid <em>Rootprocinstid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Rootprocinstid</em>' attribute.
	 * @see #getRootprocinstid()
	 */
	public void setRootprocinstid(String rootprocinstid) {
		super.setByIndex(INDEX_ROOTPROCINSTID, rootprocinstid);
	}


}