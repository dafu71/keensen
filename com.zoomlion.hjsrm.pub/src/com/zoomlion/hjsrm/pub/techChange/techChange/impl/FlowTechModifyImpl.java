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
import com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechModify;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl#getModifyId <em>ModifyId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl#getTechId <em>TechId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl#getFlag <em>Flag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl#getAdvise <em>Advise</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl#getCreatebyName <em>CreatebyName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl#getOrgid <em>Orgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl#getOrgname <em>Orgname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl#getModifytime <em>Modifytime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl#getModifybyName <em>ModifybyName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl#getModifyOrgid <em>ModifyOrgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl#getModifyOorgname <em>ModifyOorgname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.impl.FlowTechModifyImpl#getStand <em>Stand</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements FlowTechModify;
 */

public class FlowTechModifyImpl extends ExtendedDataObjectImpl implements FlowTechModify {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_MODIFYID = 0;
	public final static int INDEX_TECHID = 1;
	public final static int INDEX_FLAG = 2;
	public final static int INDEX_ADVISE = 3;
	public final static int INDEX_CREATEBY = 4;
	public final static int INDEX_CREATETIME = 5;
	public final static int INDEX_CREATEBYNAME = 6;
	public final static int INDEX_ORGID = 7;
	public final static int INDEX_ORGNAME = 8;
	public final static int INDEX_MODIFYBY = 9;
	public final static int INDEX_MODIFYTIME = 10;
	public final static int INDEX_MODIFYBYNAME = 11;
	public final static int INDEX_MODIFYORGID = 12;
	public final static int INDEX_MODIFYOORGNAME = 13;
	public final static int INDEX_REMARK = 14;
	public final static int INDEX_STAND = 15;
	public final static int SDO_PROPERTY_COUNT = 16;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public FlowTechModifyImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public FlowTechModifyImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>ModifyId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ModifyId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ModifyId</em>' attribute.
	 * @see #setModifyId(java.lang.String)
	 */
	public String getModifyId() {
		return DataUtil.toString(super.getByIndex(INDEX_MODIFYID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifyId <em>ModifyId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ModifyId</em>' attribute.
	 * @see #getModifyId()
	 */
	public void setModifyId(String modifyId) {
		super.setByIndex(INDEX_MODIFYID, modifyId);
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
	 * Returns the value of the '<em><b>Advise</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Advise</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Advise</em>' attribute.
	 * @see #setAdvise(java.lang.String)
	 */
	public String getAdvise() {
		return DataUtil.toString(super.getByIndex(INDEX_ADVISE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAdvise <em>Advise</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Advise</em>' attribute.
	 * @see #getAdvise()
	 */
	public void setAdvise(String advise) {
		super.setByIndex(INDEX_ADVISE, advise);
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