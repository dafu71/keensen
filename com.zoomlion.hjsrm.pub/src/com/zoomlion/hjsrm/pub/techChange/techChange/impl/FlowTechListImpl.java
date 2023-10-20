/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.techChange.techChange.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getTechId <em>TechId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getStatus <em>Status</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getCreatebyName <em>CreatebyName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getOrgid <em>Orgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getOrgname <em>Orgname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getModifytime <em>Modifytime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getModifybyName <em>ModifybyName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getModifyOrgid <em>ModifyOrgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getModifyOorgname <em>ModifyOorgname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getPhone <em>Phone</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getProblemType <em>ProblemType</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getProblem <em>Problem</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getProductno <em>Productno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getImportance <em>Importance</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getEffection <em>Effection</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getDuty <em>Duty</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechListImpl#getStand <em>Stand</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements FlowTechList;
 */

public class FlowTechListImpl extends ExtendedDataObjectImpl implements FlowTechList {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_TECHID = 0;
	public final static int INDEX_PROCESSINSTID = 1;
	public final static int INDEX_STATUS = 2;
	public final static int INDEX_CREATEBY = 3;
	public final static int INDEX_CREATETIME = 4;
	public final static int INDEX_CREATEBYNAME = 5;
	public final static int INDEX_ORGID = 6;
	public final static int INDEX_ORGNAME = 7;
	public final static int INDEX_MODIFYBY = 8;
	public final static int INDEX_MODIFYTIME = 9;
	public final static int INDEX_MODIFYBYNAME = 10;
	public final static int INDEX_MODIFYORGID = 11;
	public final static int INDEX_MODIFYOORGNAME = 12;
	public final static int INDEX_PHONE = 13;
	public final static int INDEX_PROBLEMTYPE = 14;
	public final static int INDEX_PROBLEM = 15;
	public final static int INDEX_PRODUCTNO = 16;
	public final static int INDEX_MATNR = 17;
	public final static int INDEX_IMPORTANCE = 18;
	public final static int INDEX_EFFECTION = 19;
	public final static int INDEX_DUTY = 20;
	public final static int INDEX_REMARK = 21;
	public final static int INDEX_STAND = 22;
	public final static int SDO_PROPERTY_COUNT = 23;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public FlowTechListImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public FlowTechListImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>TechId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TechId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TechId</em>' attribute.
	 * @see #setTechId(java.lang.String)
	 */
	public String getTechId() {
		return DataUtil.toString(super.getByIndex(INDEX_TECHID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTechId <em>TechId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TechId</em>' attribute.
	 * @see #getTechId()
	 */
	public void setTechId(String techId) {
		super.setByIndex(INDEX_TECHID, techId);
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
	 * Returns the value of the '<em><b>Createby</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createby</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createby</em>' attribute.
	 * @see #setCreateby(java.lang.String)
	 */
	public String getCreateby() {
		return DataUtil.toString(super.getByIndex(INDEX_CREATEBY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreateby <em>Createby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createby</em>' attribute.
	 * @see #getCreateby()
	 */
	public void setCreateby(String createby) {
		super.setByIndex(INDEX_CREATEBY, createby);
	}

	/**
	 * Returns the value of the '<em><b>Createtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createtime</em>' attribute.
	 * @see #setCreatetime(java.util.Date)
	 */
	public Date getCreatetime() {
		return DataUtil.toDate(super.getByIndex(INDEX_CREATETIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreatetime <em>Createtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createtime</em>' attribute.
	 * @see #getCreatetime()
	 */
	public void setCreatetime(Date createtime) {
		super.setByIndex(INDEX_CREATETIME, createtime);
	}

	/**
	 * Returns the value of the '<em><b>CreatebyName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>CreatebyName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>CreatebyName</em>' attribute.
	 * @see #setCreatebyName(java.lang.String)
	 */
	public String getCreatebyName() {
		return DataUtil.toString(super.getByIndex(INDEX_CREATEBYNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreatebyName <em>CreatebyName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>CreatebyName</em>' attribute.
	 * @see #getCreatebyName()
	 */
	public void setCreatebyName(String createbyName) {
		super.setByIndex(INDEX_CREATEBYNAME, createbyName);
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
	 * Returns the value of the '<em><b>ModifybyName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ModifybyName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ModifybyName</em>' attribute.
	 * @see #setModifybyName(java.lang.String)
	 */
	public String getModifybyName() {
		return DataUtil.toString(super.getByIndex(INDEX_MODIFYBYNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifybyName <em>ModifybyName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ModifybyName</em>' attribute.
	 * @see #getModifybyName()
	 */
	public void setModifybyName(String modifybyName) {
		super.setByIndex(INDEX_MODIFYBYNAME, modifybyName);
	}

	/**
	 * Returns the value of the '<em><b>ModifyOrgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ModifyOrgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ModifyOrgid</em>' attribute.
	 * @see #setModifyOrgid(java.lang.String)
	 */
	public String getModifyOrgid() {
		return DataUtil.toString(super.getByIndex(INDEX_MODIFYORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifyOrgid <em>ModifyOrgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ModifyOrgid</em>' attribute.
	 * @see #getModifyOrgid()
	 */
	public void setModifyOrgid(String modifyOrgid) {
		super.setByIndex(INDEX_MODIFYORGID, modifyOrgid);
	}

	/**
	 * Returns the value of the '<em><b>ModifyOorgname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ModifyOorgname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ModifyOorgname</em>' attribute.
	 * @see #setModifyOorgname(java.lang.String)
	 */
	public String getModifyOorgname() {
		return DataUtil.toString(super.getByIndex(INDEX_MODIFYOORGNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifyOorgname <em>ModifyOorgname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ModifyOorgname</em>' attribute.
	 * @see #getModifyOorgname()
	 */
	public void setModifyOorgname(String modifyOorgname) {
		super.setByIndex(INDEX_MODIFYOORGNAME, modifyOorgname);
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
	 * Returns the value of the '<em><b>ProblemType</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ProblemType</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ProblemType</em>' attribute.
	 * @see #setProblemType(java.lang.String)
	 */
	public String getProblemType() {
		return DataUtil.toString(super.getByIndex(INDEX_PROBLEMTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getProblemType <em>ProblemType</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ProblemType</em>' attribute.
	 * @see #getProblemType()
	 */
	public void setProblemType(String problemType) {
		super.setByIndex(INDEX_PROBLEMTYPE, problemType);
	}

	/**
	 * Returns the value of the '<em><b>Problem</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Problem</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Problem</em>' attribute.
	 * @see #setProblem(java.lang.String)
	 */
	public String getProblem() {
		return DataUtil.toString(super.getByIndex(INDEX_PROBLEM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getProblem <em>Problem</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Problem</em>' attribute.
	 * @see #getProblem()
	 */
	public void setProblem(String problem) {
		super.setByIndex(INDEX_PROBLEM, problem);
	}

	/**
	 * Returns the value of the '<em><b>Productno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Productno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Productno</em>' attribute.
	 * @see #setProductno(java.lang.String)
	 */
	public String getProductno() {
		return DataUtil.toString(super.getByIndex(INDEX_PRODUCTNO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getProductno <em>Productno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Productno</em>' attribute.
	 * @see #getProductno()
	 */
	public void setProductno(String productno) {
		super.setByIndex(INDEX_PRODUCTNO, productno);
	}

	/**
	 * Returns the value of the '<em><b>Matnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Matnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Matnr</em>' attribute.
	 * @see #setMatnr(java.lang.String)
	 */
	public String getMatnr() {
		return DataUtil.toString(super.getByIndex(INDEX_MATNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMatnr <em>Matnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matnr</em>' attribute.
	 * @see #getMatnr()
	 */
	public void setMatnr(String matnr) {
		super.setByIndex(INDEX_MATNR, matnr);
	}

	/**
	 * Returns the value of the '<em><b>Importance</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Importance</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Importance</em>' attribute.
	 * @see #setImportance(java.lang.String)
	 */
	public String getImportance() {
		return DataUtil.toString(super.getByIndex(INDEX_IMPORTANCE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getImportance <em>Importance</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Importance</em>' attribute.
	 * @see #getImportance()
	 */
	public void setImportance(String importance) {
		super.setByIndex(INDEX_IMPORTANCE, importance);
	}

	/**
	 * Returns the value of the '<em><b>Effection</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Effection</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Effection</em>' attribute.
	 * @see #setEffection(java.lang.String)
	 */
	public String getEffection() {
		return DataUtil.toString(super.getByIndex(INDEX_EFFECTION, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEffection <em>Effection</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Effection</em>' attribute.
	 * @see #getEffection()
	 */
	public void setEffection(String effection) {
		super.setByIndex(INDEX_EFFECTION, effection);
	}

	/**
	 * Returns the value of the '<em><b>Duty</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Duty</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Duty</em>' attribute.
	 * @see #setDuty(java.lang.String)
	 */
	public String getDuty() {
		return DataUtil.toString(super.getByIndex(INDEX_DUTY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDuty <em>Duty</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Duty</em>' attribute.
	 * @see #getDuty()
	 */
	public void setDuty(String duty) {
		super.setByIndex(INDEX_DUTY, duty);
	}

	/**
	 * Returns the value of the '<em><b>Remark</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Remark</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Remark</em>' attribute.
	 * @see #setRemark(java.lang.String)
	 */
	public String getRemark() {
		return DataUtil.toString(super.getByIndex(INDEX_REMARK, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRemark <em>Remark</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Remark</em>' attribute.
	 * @see #getRemark()
	 */
	public void setRemark(String remark) {
		super.setByIndex(INDEX_REMARK, remark);
	}

	/**
	 * Returns the value of the '<em><b>Stand</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stand</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stand</em>' attribute.
	 * @see #setStand(java.lang.String)
	 */
	public String getStand() {
		return DataUtil.toString(super.getByIndex(INDEX_STAND, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand) {
		super.setByIndex(INDEX_STAND, stand);
	}


}