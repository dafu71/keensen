/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getTybgId <em>TybgId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getTybgPersonId <em>TybgPersonId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getTybgPersonName <em>TybgPersonName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getTybgContact <em>TybgContact</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getTybgTitle <em>TybgTitle</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getTybgText <em>TybgText</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getTybgTime <em>TybgTime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getExecutePersonId <em>ExecutePersonId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getExecutePersonName <em>ExecutePersonName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getExecuteText <em>ExecuteText</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getExecuteTime <em>ExecuteTime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getArchivePersonId <em>ArchivePersonId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getArchivePersonName <em>ArchivePersonName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getArchiveText <em>ArchiveText</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getArchiveTime <em>ArchiveTime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getProcessStatus <em>ProcessStatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getDeptId <em>DeptId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.impl.FlowTybgNoticeImpl#getDeptName <em>DeptName</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements FlowTybgNotice;
 */

public class FlowTybgNoticeImpl extends ExtendedDataObjectImpl implements FlowTybgNotice {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_TYBGID = 0;
	public final static int INDEX_TYBGPERSONID = 1;
	public final static int INDEX_TYBGPERSONNAME = 2;
	public final static int INDEX_TYBGCONTACT = 3;
	public final static int INDEX_TYBGTITLE = 4;
	public final static int INDEX_TYBGTEXT = 5;
	public final static int INDEX_TYBGTIME = 6;
	public final static int INDEX_EXECUTEPERSONID = 7;
	public final static int INDEX_EXECUTEPERSONNAME = 8;
	public final static int INDEX_EXECUTETEXT = 9;
	public final static int INDEX_EXECUTETIME = 10;
	public final static int INDEX_ARCHIVEPERSONID = 11;
	public final static int INDEX_ARCHIVEPERSONNAME = 12;
	public final static int INDEX_ARCHIVETEXT = 13;
	public final static int INDEX_ARCHIVETIME = 14;
	public final static int INDEX_PROCESSINSTID = 15;
	public final static int INDEX_PROCESSSTATUS = 16;
	public final static int INDEX_DEPTID = 17;
	public final static int INDEX_DEPTNAME = 18;
	public final static int SDO_PROPERTY_COUNT = 19;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public FlowTybgNoticeImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public FlowTybgNoticeImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>TybgId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TybgId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TybgId</em>' attribute.
	 * @see #setTybgId(java.lang.String)
	 */
	public String getTybgId() {
		return DataUtil.toString(super.getByIndex(INDEX_TYBGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTybgId <em>TybgId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TybgId</em>' attribute.
	 * @see #getTybgId()
	 */
	public void setTybgId(String tybgId) {
		super.setByIndex(INDEX_TYBGID, tybgId);
	}

	/**
	 * Returns the value of the '<em><b>TybgPersonId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TybgPersonId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TybgPersonId</em>' attribute.
	 * @see #setTybgPersonId(java.lang.String)
	 */
	public String getTybgPersonId() {
		return DataUtil.toString(super.getByIndex(INDEX_TYBGPERSONID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTybgPersonId <em>TybgPersonId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TybgPersonId</em>' attribute.
	 * @see #getTybgPersonId()
	 */
	public void setTybgPersonId(String tybgPersonId) {
		super.setByIndex(INDEX_TYBGPERSONID, tybgPersonId);
	}

	/**
	 * Returns the value of the '<em><b>TybgPersonName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TybgPersonName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TybgPersonName</em>' attribute.
	 * @see #setTybgPersonName(java.lang.String)
	 */
	public String getTybgPersonName() {
		return DataUtil.toString(super.getByIndex(INDEX_TYBGPERSONNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTybgPersonName <em>TybgPersonName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TybgPersonName</em>' attribute.
	 * @see #getTybgPersonName()
	 */
	public void setTybgPersonName(String tybgPersonName) {
		super.setByIndex(INDEX_TYBGPERSONNAME, tybgPersonName);
	}

	/**
	 * Returns the value of the '<em><b>TybgContact</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TybgContact</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TybgContact</em>' attribute.
	 * @see #setTybgContact(java.lang.String)
	 */
	public String getTybgContact() {
		return DataUtil.toString(super.getByIndex(INDEX_TYBGCONTACT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTybgContact <em>TybgContact</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TybgContact</em>' attribute.
	 * @see #getTybgContact()
	 */
	public void setTybgContact(String tybgContact) {
		super.setByIndex(INDEX_TYBGCONTACT, tybgContact);
	}

	/**
	 * Returns the value of the '<em><b>TybgTitle</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TybgTitle</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TybgTitle</em>' attribute.
	 * @see #setTybgTitle(java.lang.String)
	 */
	public String getTybgTitle() {
		return DataUtil.toString(super.getByIndex(INDEX_TYBGTITLE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTybgTitle <em>TybgTitle</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TybgTitle</em>' attribute.
	 * @see #getTybgTitle()
	 */
	public void setTybgTitle(String tybgTitle) {
		super.setByIndex(INDEX_TYBGTITLE, tybgTitle);
	}

	/**
	 * Returns the value of the '<em><b>TybgText</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TybgText</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TybgText</em>' attribute.
	 * @see #setTybgText(java.lang.String)
	 */
	public String getTybgText() {
		return DataUtil.toString(super.getByIndex(INDEX_TYBGTEXT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTybgText <em>TybgText</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TybgText</em>' attribute.
	 * @see #getTybgText()
	 */
	public void setTybgText(String tybgText) {
		super.setByIndex(INDEX_TYBGTEXT, tybgText);
	}

	/**
	 * Returns the value of the '<em><b>TybgTime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TybgTime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TybgTime</em>' attribute.
	 * @see #setTybgTime(java.util.Date)
	 */
	public Date getTybgTime() {
		return DataUtil.toDate(super.getByIndex(INDEX_TYBGTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTybgTime <em>TybgTime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TybgTime</em>' attribute.
	 * @see #getTybgTime()
	 */
	public void setTybgTime(Date tybgTime) {
		super.setByIndex(INDEX_TYBGTIME, tybgTime);
	}

	/**
	 * Returns the value of the '<em><b>ExecutePersonId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ExecutePersonId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ExecutePersonId</em>' attribute.
	 * @see #setExecutePersonId(java.lang.String)
	 */
	public String getExecutePersonId() {
		return DataUtil.toString(super.getByIndex(INDEX_EXECUTEPERSONID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExecutePersonId <em>ExecutePersonId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ExecutePersonId</em>' attribute.
	 * @see #getExecutePersonId()
	 */
	public void setExecutePersonId(String executePersonId) {
		super.setByIndex(INDEX_EXECUTEPERSONID, executePersonId);
	}

	/**
	 * Returns the value of the '<em><b>ExecutePersonName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ExecutePersonName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ExecutePersonName</em>' attribute.
	 * @see #setExecutePersonName(java.lang.String)
	 */
	public String getExecutePersonName() {
		return DataUtil.toString(super.getByIndex(INDEX_EXECUTEPERSONNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExecutePersonName <em>ExecutePersonName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ExecutePersonName</em>' attribute.
	 * @see #getExecutePersonName()
	 */
	public void setExecutePersonName(String executePersonName) {
		super.setByIndex(INDEX_EXECUTEPERSONNAME, executePersonName);
	}

	/**
	 * Returns the value of the '<em><b>ExecuteText</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ExecuteText</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ExecuteText</em>' attribute.
	 * @see #setExecuteText(java.lang.String)
	 */
	public String getExecuteText() {
		return DataUtil.toString(super.getByIndex(INDEX_EXECUTETEXT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExecuteText <em>ExecuteText</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ExecuteText</em>' attribute.
	 * @see #getExecuteText()
	 */
	public void setExecuteText(String executeText) {
		super.setByIndex(INDEX_EXECUTETEXT, executeText);
	}

	/**
	 * Returns the value of the '<em><b>ExecuteTime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ExecuteTime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ExecuteTime</em>' attribute.
	 * @see #setExecuteTime(java.util.Date)
	 */
	public Date getExecuteTime() {
		return DataUtil.toDate(super.getByIndex(INDEX_EXECUTETIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExecuteTime <em>ExecuteTime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ExecuteTime</em>' attribute.
	 * @see #getExecuteTime()
	 */
	public void setExecuteTime(Date executeTime) {
		super.setByIndex(INDEX_EXECUTETIME, executeTime);
	}

	/**
	 * Returns the value of the '<em><b>ArchivePersonId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ArchivePersonId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ArchivePersonId</em>' attribute.
	 * @see #setArchivePersonId(java.lang.String)
	 */
	public String getArchivePersonId() {
		return DataUtil.toString(super.getByIndex(INDEX_ARCHIVEPERSONID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getArchivePersonId <em>ArchivePersonId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ArchivePersonId</em>' attribute.
	 * @see #getArchivePersonId()
	 */
	public void setArchivePersonId(String archivePersonId) {
		super.setByIndex(INDEX_ARCHIVEPERSONID, archivePersonId);
	}

	/**
	 * Returns the value of the '<em><b>ArchivePersonName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ArchivePersonName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ArchivePersonName</em>' attribute.
	 * @see #setArchivePersonName(java.lang.String)
	 */
	public String getArchivePersonName() {
		return DataUtil.toString(super.getByIndex(INDEX_ARCHIVEPERSONNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getArchivePersonName <em>ArchivePersonName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ArchivePersonName</em>' attribute.
	 * @see #getArchivePersonName()
	 */
	public void setArchivePersonName(String archivePersonName) {
		super.setByIndex(INDEX_ARCHIVEPERSONNAME, archivePersonName);
	}

	/**
	 * Returns the value of the '<em><b>ArchiveText</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ArchiveText</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ArchiveText</em>' attribute.
	 * @see #setArchiveText(java.lang.String)
	 */
	public String getArchiveText() {
		return DataUtil.toString(super.getByIndex(INDEX_ARCHIVETEXT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getArchiveText <em>ArchiveText</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ArchiveText</em>' attribute.
	 * @see #getArchiveText()
	 */
	public void setArchiveText(String archiveText) {
		super.setByIndex(INDEX_ARCHIVETEXT, archiveText);
	}

	/**
	 * Returns the value of the '<em><b>ArchiveTime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ArchiveTime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ArchiveTime</em>' attribute.
	 * @see #setArchiveTime(java.util.Date)
	 */
	public Date getArchiveTime() {
		return DataUtil.toDate(super.getByIndex(INDEX_ARCHIVETIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getArchiveTime <em>ArchiveTime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ArchiveTime</em>' attribute.
	 * @see #getArchiveTime()
	 */
	public void setArchiveTime(Date archiveTime) {
		super.setByIndex(INDEX_ARCHIVETIME, archiveTime);
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
	 * Returns the value of the '<em><b>ProcessStatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ProcessStatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ProcessStatus</em>' attribute.
	 * @see #setProcessStatus(java.lang.String)
	 */
	public String getProcessStatus() {
		return DataUtil.toString(super.getByIndex(INDEX_PROCESSSTATUS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getProcessStatus <em>ProcessStatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ProcessStatus</em>' attribute.
	 * @see #getProcessStatus()
	 */
	public void setProcessStatus(String processStatus) {
		super.setByIndex(INDEX_PROCESSSTATUS, processStatus);
	}

	/**
	 * Returns the value of the '<em><b>DeptId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>DeptId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>DeptId</em>' attribute.
	 * @see #setDeptId(java.lang.String)
	 */
	public String getDeptId() {
		return DataUtil.toString(super.getByIndex(INDEX_DEPTID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDeptId <em>DeptId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>DeptId</em>' attribute.
	 * @see #getDeptId()
	 */
	public void setDeptId(String deptId) {
		super.setByIndex(INDEX_DEPTID, deptId);
	}

	/**
	 * Returns the value of the '<em><b>DeptName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>DeptName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>DeptName</em>' attribute.
	 * @see #setDeptName(java.lang.String)
	 */
	public String getDeptName() {
		return DataUtil.toString(super.getByIndex(INDEX_DEPTNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDeptName <em>DeptName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>DeptName</em>' attribute.
	 * @see #getDeptName()
	 */
	public void setDeptName(String deptName) {
		super.setByIndex(INDEX_DEPTNAME, deptName);
	}


}