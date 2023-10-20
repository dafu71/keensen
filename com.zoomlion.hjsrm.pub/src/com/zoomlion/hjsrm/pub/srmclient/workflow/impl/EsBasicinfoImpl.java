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
import com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getSheetid <em>Sheetid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getProcessinstname <em>Processinstname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getProcesstype <em>Processtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getUsername <em>Username</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getOrgid <em>Orgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getOrgname <em>Orgname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getDeptid <em>Deptid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getDeptname <em>Deptname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getPhone <em>Phone</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getApplydate <em>Applydate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getEmergency <em>Emergency</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getEsheetno <em>Esheetno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getExpectdate <em>Expectdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getSheetstatus <em>Sheetstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getDescription <em>Description</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getTitle <em>Title</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsBasicinfoImpl#getProcessdefname <em>Processdefname</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements EsBasicinfo;
 */

public class EsBasicinfoImpl extends ExtendedDataObjectImpl implements EsBasicinfo {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_SHEETID = 0;
	public final static int INDEX_PROCESSINSTNAME = 1;
	public final static int INDEX_PROCESSTYPE = 2;
	public final static int INDEX_USERID = 3;
	public final static int INDEX_USERNAME = 4;
	public final static int INDEX_ORGID = 5;
	public final static int INDEX_ORGNAME = 6;
	public final static int INDEX_DEPTID = 7;
	public final static int INDEX_DEPTNAME = 8;
	public final static int INDEX_PHONE = 9;
	public final static int INDEX_APPLYDATE = 10;
	public final static int INDEX_EMERGENCY = 11;
	public final static int INDEX_ESHEETNO = 12;
	public final static int INDEX_EXPECTDATE = 13;
	public final static int INDEX_SHEETSTATUS = 14;
	public final static int INDEX_PROCESSINSTID = 15;
	public final static int INDEX_DESCRIPTION = 16;
	public final static int INDEX_TITLE = 17;
	public final static int INDEX_PROCESSDEFNAME = 18;
	public final static int SDO_PROPERTY_COUNT = 19;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public EsBasicinfoImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public EsBasicinfoImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Sheetid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sheetid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sheetid</em>' attribute.
	 * @see #setSheetid(long)
	 */
	public long getSheetid() {
		return DataUtil.toLong(super.getByIndex(INDEX_SHEETID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSheetid <em>Sheetid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sheetid</em>' attribute.
	 * @see #getSheetid()
	 */
	public void setSheetid(long sheetid) {
		super.setByIndex(INDEX_SHEETID, sheetid);
	}

	/**
	 * Returns the value of the '<em><b>Processinstname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Processinstname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Processinstname</em>' attribute.
	 * @see #setProcessinstname(java.lang.String)
	 */
	public String getProcessinstname() {
		return DataUtil.toString(super.getByIndex(INDEX_PROCESSINSTNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getProcessinstname <em>Processinstname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processinstname</em>' attribute.
	 * @see #getProcessinstname()
	 */
	public void setProcessinstname(String processinstname) {
		super.setByIndex(INDEX_PROCESSINSTNAME, processinstname);
	}

	/**
	 * Returns the value of the '<em><b>Processtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Processtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Processtype</em>' attribute.
	 * @see #setProcesstype(java.lang.String)
	 */
	public String getProcesstype() {
		return DataUtil.toString(super.getByIndex(INDEX_PROCESSTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getProcesstype <em>Processtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processtype</em>' attribute.
	 * @see #getProcesstype()
	 */
	public void setProcesstype(String processtype) {
		super.setByIndex(INDEX_PROCESSTYPE, processtype);
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
	 * Returns the value of the '<em><b>Deptid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Deptid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Deptid</em>' attribute.
	 * @see #setDeptid(long)
	 */
	public long getDeptid() {
		return DataUtil.toLong(super.getByIndex(INDEX_DEPTID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDeptid <em>Deptid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Deptid</em>' attribute.
	 * @see #getDeptid()
	 */
	public void setDeptid(long deptid) {
		super.setByIndex(INDEX_DEPTID, deptid);
	}

	/**
	 * Returns the value of the '<em><b>Deptname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Deptname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Deptname</em>' attribute.
	 * @see #setDeptname(java.lang.String)
	 */
	public String getDeptname() {
		return DataUtil.toString(super.getByIndex(INDEX_DEPTNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDeptname <em>Deptname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Deptname</em>' attribute.
	 * @see #getDeptname()
	 */
	public void setDeptname(String deptname) {
		super.setByIndex(INDEX_DEPTNAME, deptname);
	}

	/**
	 * Returns the value of the '<em><b>Phone</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Phone</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Phone</em>' attribute.
	 * @see #setPhone(java.lang.String)
	 */
	public String getPhone() {
		return DataUtil.toString(super.getByIndex(INDEX_PHONE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPhone <em>Phone</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Phone</em>' attribute.
	 * @see #getPhone()
	 */
	public void setPhone(String phone) {
		super.setByIndex(INDEX_PHONE, phone);
	}

	/**
	 * Returns the value of the '<em><b>Applydate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Applydate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Applydate</em>' attribute.
	 * @see #setApplydate(java.util.Date)
	 */
	public Date getApplydate() {
		return DataUtil.toDate(super.getByIndex(INDEX_APPLYDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getApplydate <em>Applydate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Applydate</em>' attribute.
	 * @see #getApplydate()
	 */
	public void setApplydate(Date applydate) {
		super.setByIndex(INDEX_APPLYDATE, applydate);
	}

	/**
	 * Returns the value of the '<em><b>Emergency</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Emergency</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Emergency</em>' attribute.
	 * @see #setEmergency(java.lang.String)
	 */
	public String getEmergency() {
		return DataUtil.toString(super.getByIndex(INDEX_EMERGENCY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEmergency <em>Emergency</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Emergency</em>' attribute.
	 * @see #getEmergency()
	 */
	public void setEmergency(String emergency) {
		super.setByIndex(INDEX_EMERGENCY, emergency);
	}

	/**
	 * Returns the value of the '<em><b>Esheetno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Esheetno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Esheetno</em>' attribute.
	 * @see #setEsheetno(java.lang.String)
	 */
	public String getEsheetno() {
		return DataUtil.toString(super.getByIndex(INDEX_ESHEETNO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEsheetno <em>Esheetno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Esheetno</em>' attribute.
	 * @see #getEsheetno()
	 */
	public void setEsheetno(String esheetno) {
		super.setByIndex(INDEX_ESHEETNO, esheetno);
	}

	/**
	 * Returns the value of the '<em><b>Expectdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Expectdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Expectdate</em>' attribute.
	 * @see #setExpectdate(java.util.Date)
	 */
	public Date getExpectdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_EXPECTDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExpectdate <em>Expectdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Expectdate</em>' attribute.
	 * @see #getExpectdate()
	 */
	public void setExpectdate(Date expectdate) {
		super.setByIndex(INDEX_EXPECTDATE, expectdate);
	}

	/**
	 * Returns the value of the '<em><b>Sheetstatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sheetstatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sheetstatus</em>' attribute.
	 * @see #setSheetstatus(java.lang.String)
	 */
	public String getSheetstatus() {
		return DataUtil.toString(super.getByIndex(INDEX_SHEETSTATUS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSheetstatus <em>Sheetstatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sheetstatus</em>' attribute.
	 * @see #getSheetstatus()
	 */
	public void setSheetstatus(String sheetstatus) {
		super.setByIndex(INDEX_SHEETSTATUS, sheetstatus);
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
	 * Returns the value of the '<em><b>Description</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Description</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Description</em>' attribute.
	 * @see #setDescription(java.lang.String)
	 */
	public String getDescription() {
		return DataUtil.toString(super.getByIndex(INDEX_DESCRIPTION, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDescription <em>Description</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Description</em>' attribute.
	 * @see #getDescription()
	 */
	public void setDescription(String description) {
		super.setByIndex(INDEX_DESCRIPTION, description);
	}

	/**
	 * Returns the value of the '<em><b>Title</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Title</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Title</em>' attribute.
	 * @see #setTitle(java.lang.String)
	 */
	public String getTitle() {
		return DataUtil.toString(super.getByIndex(INDEX_TITLE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTitle <em>Title</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Title</em>' attribute.
	 * @see #getTitle()
	 */
	public void setTitle(String title) {
		super.setByIndex(INDEX_TITLE, title);
	}

	/**
	 * Returns the value of the '<em><b>Processdefname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Processdefname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Processdefname</em>' attribute.
	 * @see #setProcessdefname(java.lang.String)
	 */
	public String getProcessdefname() {
		return DataUtil.toString(super.getByIndex(INDEX_PROCESSDEFNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getProcessdefname <em>Processdefname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processdefname</em>' attribute.
	 * @see #getProcessdefname()
	 */
	public void setProcessdefname(String processdefname) {
		super.setByIndex(INDEX_PROCESSDEFNAME, processdefname);
	}


}