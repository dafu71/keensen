/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.techNotice.techNotice.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getNoticeId <em>NoticeId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getWeavePersonId <em>WeavePersonId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getWeavePersonName <em>WeavePersonName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getDeptName <em>DeptName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getDeptId <em>DeptId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getApplicationTime <em>ApplicationTime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getProductType <em>ProductType</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getProductModel <em>ProductModel</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getNoticeType <em>NoticeType</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getLevels <em>Levels</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getNoticeTitle <em>NoticeTitle</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getNoticeText <em>NoticeText</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getSendDept <em>SendDept</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getExecutePersonId <em>ExecutePersonId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getExecutePersonName <em>ExecutePersonName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getExecuteText <em>ExecuteText</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getExecuteTime <em>ExecuteTime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getArchivePersonId <em>ArchivePersonId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getArchivePersonName <em>ArchivePersonName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getArchiveText <em>ArchiveText</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getArchiveTime <em>ArchiveTime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTechniqueNoticeImpl#getProcessStatus <em>ProcessStatus</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements FlowTechniqueNotice;
 */

public class FlowTechniqueNoticeImpl extends ExtendedDataObjectImpl implements FlowTechniqueNotice {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_NOTICEID = 0;
	public final static int INDEX_WEAVEPERSONID = 1;
	public final static int INDEX_WEAVEPERSONNAME = 2;
	public final static int INDEX_DEPTNAME = 3;
	public final static int INDEX_DEPTID = 4;
	public final static int INDEX_APPLICATIONTIME = 5;
	public final static int INDEX_PRODUCTTYPE = 6;
	public final static int INDEX_PRODUCTMODEL = 7;
	public final static int INDEX_NOTICETYPE = 8;
	public final static int INDEX_LEVELS = 9;
	public final static int INDEX_NOTICETITLE = 10;
	public final static int INDEX_NOTICETEXT = 11;
	public final static int INDEX_SENDDEPT = 12;
	public final static int INDEX_EXECUTEPERSONID = 13;
	public final static int INDEX_EXECUTEPERSONNAME = 14;
	public final static int INDEX_EXECUTETEXT = 15;
	public final static int INDEX_EXECUTETIME = 16;
	public final static int INDEX_ARCHIVEPERSONID = 17;
	public final static int INDEX_ARCHIVEPERSONNAME = 18;
	public final static int INDEX_ARCHIVETEXT = 19;
	public final static int INDEX_ARCHIVETIME = 20;
	public final static int INDEX_PROCESSINSTID = 21;
	public final static int INDEX_PROCESSSTATUS = 22;
	public final static int SDO_PROPERTY_COUNT = 23;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public FlowTechniqueNoticeImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public FlowTechniqueNoticeImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>NoticeId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>NoticeId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>NoticeId</em>' attribute.
	 * @see #setNoticeId(java.lang.String)
	 */
	public String getNoticeId() {
		return DataUtil.toString(super.getByIndex(INDEX_NOTICEID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getNoticeId <em>NoticeId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>NoticeId</em>' attribute.
	 * @see #getNoticeId()
	 */
	public void setNoticeId(String noticeId) {
		super.setByIndex(INDEX_NOTICEID, noticeId);
	}

	/**
	 * Returns the value of the '<em><b>WeavePersonId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>WeavePersonId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>WeavePersonId</em>' attribute.
	 * @see #setWeavePersonId(java.lang.String)
	 */
	public String getWeavePersonId() {
		return DataUtil.toString(super.getByIndex(INDEX_WEAVEPERSONID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWeavePersonId <em>WeavePersonId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>WeavePersonId</em>' attribute.
	 * @see #getWeavePersonId()
	 */
	public void setWeavePersonId(String weavePersonId) {
		super.setByIndex(INDEX_WEAVEPERSONID, weavePersonId);
	}

	/**
	 * Returns the value of the '<em><b>WeavePersonName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>WeavePersonName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>WeavePersonName</em>' attribute.
	 * @see #setWeavePersonName(java.lang.String)
	 */
	public String getWeavePersonName() {
		return DataUtil.toString(super.getByIndex(INDEX_WEAVEPERSONNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWeavePersonName <em>WeavePersonName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>WeavePersonName</em>' attribute.
	 * @see #getWeavePersonName()
	 */
	public void setWeavePersonName(String weavePersonName) {
		super.setByIndex(INDEX_WEAVEPERSONNAME, weavePersonName);
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
	 * Returns the value of the '<em><b>ApplicationTime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ApplicationTime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ApplicationTime</em>' attribute.
	 * @see #setApplicationTime(java.util.Date)
	 */
	public Date getApplicationTime() {
		return DataUtil.toDate(super.getByIndex(INDEX_APPLICATIONTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getApplicationTime <em>ApplicationTime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ApplicationTime</em>' attribute.
	 * @see #getApplicationTime()
	 */
	public void setApplicationTime(Date applicationTime) {
		super.setByIndex(INDEX_APPLICATIONTIME, applicationTime);
	}

	/**
	 * Returns the value of the '<em><b>ProductType</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ProductType</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ProductType</em>' attribute.
	 * @see #setProductType(java.lang.String)
	 */
	public String getProductType() {
		return DataUtil.toString(super.getByIndex(INDEX_PRODUCTTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getProductType <em>ProductType</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ProductType</em>' attribute.
	 * @see #getProductType()
	 */
	public void setProductType(String productType) {
		super.setByIndex(INDEX_PRODUCTTYPE, productType);
	}

	/**
	 * Returns the value of the '<em><b>ProductModel</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ProductModel</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ProductModel</em>' attribute.
	 * @see #setProductModel(java.lang.String)
	 */
	public String getProductModel() {
		return DataUtil.toString(super.getByIndex(INDEX_PRODUCTMODEL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getProductModel <em>ProductModel</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ProductModel</em>' attribute.
	 * @see #getProductModel()
	 */
	public void setProductModel(String productModel) {
		super.setByIndex(INDEX_PRODUCTMODEL, productModel);
	}

	/**
	 * Returns the value of the '<em><b>NoticeType</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>NoticeType</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>NoticeType</em>' attribute.
	 * @see #setNoticeType(java.lang.String)
	 */
	public String getNoticeType() {
		return DataUtil.toString(super.getByIndex(INDEX_NOTICETYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getNoticeType <em>NoticeType</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>NoticeType</em>' attribute.
	 * @see #getNoticeType()
	 */
	public void setNoticeType(String noticeType) {
		super.setByIndex(INDEX_NOTICETYPE, noticeType);
	}

	/**
	 * Returns the value of the '<em><b>Levels</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Levels</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Levels</em>' attribute.
	 * @see #setLevels(java.lang.String)
	 */
	public String getLevels() {
		return DataUtil.toString(super.getByIndex(INDEX_LEVELS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLevels <em>Levels</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Levels</em>' attribute.
	 * @see #getLevels()
	 */
	public void setLevels(String levels) {
		super.setByIndex(INDEX_LEVELS, levels);
	}

	/**
	 * Returns the value of the '<em><b>NoticeTitle</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>NoticeTitle</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>NoticeTitle</em>' attribute.
	 * @see #setNoticeTitle(java.lang.String)
	 */
	public String getNoticeTitle() {
		return DataUtil.toString(super.getByIndex(INDEX_NOTICETITLE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getNoticeTitle <em>NoticeTitle</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>NoticeTitle</em>' attribute.
	 * @see #getNoticeTitle()
	 */
	public void setNoticeTitle(String noticeTitle) {
		super.setByIndex(INDEX_NOTICETITLE, noticeTitle);
	}

	/**
	 * Returns the value of the '<em><b>NoticeText</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>NoticeText</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>NoticeText</em>' attribute.
	 * @see #setNoticeText(java.lang.String)
	 */
	public String getNoticeText() {
		return DataUtil.toString(super.getByIndex(INDEX_NOTICETEXT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getNoticeText <em>NoticeText</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>NoticeText</em>' attribute.
	 * @see #getNoticeText()
	 */
	public void setNoticeText(String noticeText) {
		super.setByIndex(INDEX_NOTICETEXT, noticeText);
	}

	/**
	 * Returns the value of the '<em><b>SendDept</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>SendDept</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>SendDept</em>' attribute.
	 * @see #setSendDept(java.lang.String)
	 */
	public String getSendDept() {
		return DataUtil.toString(super.getByIndex(INDEX_SENDDEPT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSendDept <em>SendDept</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>SendDept</em>' attribute.
	 * @see #getSendDept()
	 */
	public void setSendDept(String sendDept) {
		super.setByIndex(INDEX_SENDDEPT, sendDept);
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


}