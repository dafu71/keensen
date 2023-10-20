/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.org.Organization.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.data.org.Organization.VOmEmpoperroleorg;

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
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getOperatorid <em>Operatorid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getPassword <em>Password</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getOperatorname <em>Operatorname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getAuthmode <em>Authmode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getMenutype <em>Menutype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getEmpid <em>Empid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getEmpname <em>Empname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getRealname <em>Realname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getGender <em>Gender</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getBirthdate <em>Birthdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getEmpstatus <em>Empstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getCardtype <em>Cardtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getCardno <em>Cardno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getMobileno <em>Mobileno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getEmpdelflag <em>Empdelflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getRoleid <em>Roleid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getRolecode <em>Rolecode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getRolename <em>Rolename</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getRoletype <em>Roletype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getOrgid <em>Orgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getParentorgid <em>Parentorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getOrgcode <em>Orgcode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getOrgname <em>Orgname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getOrglevel <em>Orglevel</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getOrgseq <em>Orgseq</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.impl.VOmEmpoperroleorgImpl#getOrgdelflag <em>Orgdelflag</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements VOmEmpoperroleorg;
 */

public class VOmEmpoperroleorgImpl extends ExtendedDataObjectImpl implements VOmEmpoperroleorg {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_OPERATORID = 0;
	public final static int INDEX_USERID = 1;
	public final static int INDEX_PASSWORD = 2;
	public final static int INDEX_OPERATORNAME = 3;
	public final static int INDEX_AUTHMODE = 4;
	public final static int INDEX_MENUTYPE = 5;
	public final static int INDEX_EMPID = 6;
	public final static int INDEX_EMPNAME = 7;
	public final static int INDEX_REALNAME = 8;
	public final static int INDEX_GENDER = 9;
	public final static int INDEX_BIRTHDATE = 10;
	public final static int INDEX_EMPSTATUS = 11;
	public final static int INDEX_CARDTYPE = 12;
	public final static int INDEX_CARDNO = 13;
	public final static int INDEX_MOBILENO = 14;
	public final static int INDEX_EMPDELFLAG = 15;
	public final static int INDEX_ROLEID = 16;
	public final static int INDEX_ROLECODE = 17;
	public final static int INDEX_ROLENAME = 18;
	public final static int INDEX_ROLETYPE = 19;
	public final static int INDEX_ORGID = 20;
	public final static int INDEX_PARENTORGID = 21;
	public final static int INDEX_ORGCODE = 22;
	public final static int INDEX_ORGNAME = 23;
	public final static int INDEX_ORGLEVEL = 24;
	public final static int INDEX_ORGSEQ = 25;
	public final static int INDEX_ORGDELFLAG = 26;
	public final static int SDO_PROPERTY_COUNT = 27;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public VOmEmpoperroleorgImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public VOmEmpoperroleorgImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Operatorid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operatorid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operatorid</em>' attribute.
	 * @see #setOperatorid(long)
	 */
	public long getOperatorid() {
		return DataUtil.toLong(super.getByIndex(INDEX_OPERATORID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOperatorid <em>Operatorid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operatorid</em>' attribute.
	 * @see #getOperatorid()
	 */
	public void setOperatorid(long operatorid) {
		super.setByIndex(INDEX_OPERATORID, operatorid);
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
	 * Returns the value of the '<em><b>Password</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Password</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Password</em>' attribute.
	 * @see #setPassword(java.lang.String)
	 */
	public String getPassword() {
		return DataUtil.toString(super.getByIndex(INDEX_PASSWORD, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPassword <em>Password</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Password</em>' attribute.
	 * @see #getPassword()
	 */
	public void setPassword(String password) {
		super.setByIndex(INDEX_PASSWORD, password);
	}

	/**
	 * Returns the value of the '<em><b>Operatorname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operatorname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operatorname</em>' attribute.
	 * @see #setOperatorname(java.lang.String)
	 */
	public String getOperatorname() {
		return DataUtil.toString(super.getByIndex(INDEX_OPERATORNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOperatorname <em>Operatorname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operatorname</em>' attribute.
	 * @see #getOperatorname()
	 */
	public void setOperatorname(String operatorname) {
		super.setByIndex(INDEX_OPERATORNAME, operatorname);
	}

	/**
	 * Returns the value of the '<em><b>Authmode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Authmode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Authmode</em>' attribute.
	 * @see #setAuthmode(java.lang.String)
	 */
	public String getAuthmode() {
		return DataUtil.toString(super.getByIndex(INDEX_AUTHMODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAuthmode <em>Authmode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Authmode</em>' attribute.
	 * @see #getAuthmode()
	 */
	public void setAuthmode(String authmode) {
		super.setByIndex(INDEX_AUTHMODE, authmode);
	}

	/**
	 * Returns the value of the '<em><b>Menutype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Menutype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Menutype</em>' attribute.
	 * @see #setMenutype(java.lang.String)
	 */
	public String getMenutype() {
		return DataUtil.toString(super.getByIndex(INDEX_MENUTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMenutype <em>Menutype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Menutype</em>' attribute.
	 * @see #getMenutype()
	 */
	public void setMenutype(String menutype) {
		super.setByIndex(INDEX_MENUTYPE, menutype);
	}

	/**
	 * Returns the value of the '<em><b>Empid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Empid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Empid</em>' attribute.
	 * @see #setEmpid(int)
	 */
	public int getEmpid() {
		return DataUtil.toInt(super.getByIndex(INDEX_EMPID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEmpid <em>Empid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Empid</em>' attribute.
	 * @see #getEmpid()
	 */
	public void setEmpid(int empid) {
		super.setByIndex(INDEX_EMPID, empid);
	}

	/**
	 * Returns the value of the '<em><b>Empname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Empname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Empname</em>' attribute.
	 * @see #setEmpname(java.lang.String)
	 */
	public String getEmpname() {
		return DataUtil.toString(super.getByIndex(INDEX_EMPNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEmpname <em>Empname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Empname</em>' attribute.
	 * @see #getEmpname()
	 */
	public void setEmpname(String empname) {
		super.setByIndex(INDEX_EMPNAME, empname);
	}

	/**
	 * Returns the value of the '<em><b>Realname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Realname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Realname</em>' attribute.
	 * @see #setRealname(java.lang.String)
	 */
	public String getRealname() {
		return DataUtil.toString(super.getByIndex(INDEX_REALNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRealname <em>Realname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Realname</em>' attribute.
	 * @see #getRealname()
	 */
	public void setRealname(String realname) {
		super.setByIndex(INDEX_REALNAME, realname);
	}

	/**
	 * Returns the value of the '<em><b>Gender</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gender</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gender</em>' attribute.
	 * @see #setGender(java.lang.String)
	 */
	public String getGender() {
		return DataUtil.toString(super.getByIndex(INDEX_GENDER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGender <em>Gender</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gender</em>' attribute.
	 * @see #getGender()
	 */
	public void setGender(String gender) {
		super.setByIndex(INDEX_GENDER, gender);
	}

	/**
	 * Returns the value of the '<em><b>Birthdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Birthdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Birthdate</em>' attribute.
	 * @see #setBirthdate(java.util.Date)
	 */
	public Date getBirthdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_BIRTHDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBirthdate <em>Birthdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Birthdate</em>' attribute.
	 * @see #getBirthdate()
	 */
	public void setBirthdate(Date birthdate) {
		super.setByIndex(INDEX_BIRTHDATE, birthdate);
	}

	/**
	 * Returns the value of the '<em><b>Empstatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Empstatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Empstatus</em>' attribute.
	 * @see #setEmpstatus(java.lang.String)
	 */
	public String getEmpstatus() {
		return DataUtil.toString(super.getByIndex(INDEX_EMPSTATUS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEmpstatus <em>Empstatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Empstatus</em>' attribute.
	 * @see #getEmpstatus()
	 */
	public void setEmpstatus(String empstatus) {
		super.setByIndex(INDEX_EMPSTATUS, empstatus);
	}

	/**
	 * Returns the value of the '<em><b>Cardtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Cardtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Cardtype</em>' attribute.
	 * @see #setCardtype(java.lang.String)
	 */
	public String getCardtype() {
		return DataUtil.toString(super.getByIndex(INDEX_CARDTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCardtype <em>Cardtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cardtype</em>' attribute.
	 * @see #getCardtype()
	 */
	public void setCardtype(String cardtype) {
		super.setByIndex(INDEX_CARDTYPE, cardtype);
	}

	/**
	 * Returns the value of the '<em><b>Cardno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Cardno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Cardno</em>' attribute.
	 * @see #setCardno(java.lang.String)
	 */
	public String getCardno() {
		return DataUtil.toString(super.getByIndex(INDEX_CARDNO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCardno <em>Cardno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cardno</em>' attribute.
	 * @see #getCardno()
	 */
	public void setCardno(String cardno) {
		super.setByIndex(INDEX_CARDNO, cardno);
	}

	/**
	 * Returns the value of the '<em><b>Mobileno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mobileno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mobileno</em>' attribute.
	 * @see #setMobileno(java.lang.String)
	 */
	public String getMobileno() {
		return DataUtil.toString(super.getByIndex(INDEX_MOBILENO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMobileno <em>Mobileno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mobileno</em>' attribute.
	 * @see #getMobileno()
	 */
	public void setMobileno(String mobileno) {
		super.setByIndex(INDEX_MOBILENO, mobileno);
	}

	/**
	 * Returns the value of the '<em><b>Empdelflag</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Empdelflag</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Empdelflag</em>' attribute.
	 * @see #setEmpdelflag(java.lang.String)
	 */
	public String getEmpdelflag() {
		return DataUtil.toString(super.getByIndex(INDEX_EMPDELFLAG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEmpdelflag <em>Empdelflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Empdelflag</em>' attribute.
	 * @see #getEmpdelflag()
	 */
	public void setEmpdelflag(String empdelflag) {
		super.setByIndex(INDEX_EMPDELFLAG, empdelflag);
	}

	/**
	 * Returns the value of the '<em><b>Roleid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Roleid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Roleid</em>' attribute.
	 * @see #setRoleid(int)
	 */
	public int getRoleid() {
		return DataUtil.toInt(super.getByIndex(INDEX_ROLEID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRoleid <em>Roleid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Roleid</em>' attribute.
	 * @see #getRoleid()
	 */
	public void setRoleid(int roleid) {
		super.setByIndex(INDEX_ROLEID, roleid);
	}

	/**
	 * Returns the value of the '<em><b>Rolecode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Rolecode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Rolecode</em>' attribute.
	 * @see #setRolecode(java.lang.String)
	 */
	public String getRolecode() {
		return DataUtil.toString(super.getByIndex(INDEX_ROLECODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRolecode <em>Rolecode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Rolecode</em>' attribute.
	 * @see #getRolecode()
	 */
	public void setRolecode(String rolecode) {
		super.setByIndex(INDEX_ROLECODE, rolecode);
	}

	/**
	 * Returns the value of the '<em><b>Rolename</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Rolename</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Rolename</em>' attribute.
	 * @see #setRolename(java.lang.String)
	 */
	public String getRolename() {
		return DataUtil.toString(super.getByIndex(INDEX_ROLENAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRolename <em>Rolename</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Rolename</em>' attribute.
	 * @see #getRolename()
	 */
	public void setRolename(String rolename) {
		super.setByIndex(INDEX_ROLENAME, rolename);
	}

	/**
	 * Returns the value of the '<em><b>Roletype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Roletype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Roletype</em>' attribute.
	 * @see #setRoletype(java.lang.String)
	 */
	public String getRoletype() {
		return DataUtil.toString(super.getByIndex(INDEX_ROLETYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRoletype <em>Roletype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Roletype</em>' attribute.
	 * @see #getRoletype()
	 */
	public void setRoletype(String roletype) {
		super.setByIndex(INDEX_ROLETYPE, roletype);
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
	 * @see #setOrgid(int)
	 */
	public int getOrgid() {
		return DataUtil.toInt(super.getByIndex(INDEX_ORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOrgid <em>Orgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgid</em>' attribute.
	 * @see #getOrgid()
	 */
	public void setOrgid(int orgid) {
		super.setByIndex(INDEX_ORGID, orgid);
	}

	/**
	 * Returns the value of the '<em><b>Parentorgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Parentorgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Parentorgid</em>' attribute.
	 * @see #setParentorgid(int)
	 */
	public int getParentorgid() {
		return DataUtil.toInt(super.getByIndex(INDEX_PARENTORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getParentorgid <em>Parentorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Parentorgid</em>' attribute.
	 * @see #getParentorgid()
	 */
	public void setParentorgid(int parentorgid) {
		super.setByIndex(INDEX_PARENTORGID, parentorgid);
	}

	/**
	 * Returns the value of the '<em><b>Orgcode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Orgcode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Orgcode</em>' attribute.
	 * @see #setOrgcode(java.lang.String)
	 */
	public String getOrgcode() {
		return DataUtil.toString(super.getByIndex(INDEX_ORGCODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOrgcode <em>Orgcode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgcode</em>' attribute.
	 * @see #getOrgcode()
	 */
	public void setOrgcode(String orgcode) {
		super.setByIndex(INDEX_ORGCODE, orgcode);
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
	 * Returns the value of the '<em><b>Orglevel</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Orglevel</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Orglevel</em>' attribute.
	 * @see #setOrglevel(int)
	 */
	public int getOrglevel() {
		return DataUtil.toInt(super.getByIndex(INDEX_ORGLEVEL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOrglevel <em>Orglevel</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orglevel</em>' attribute.
	 * @see #getOrglevel()
	 */
	public void setOrglevel(int orglevel) {
		super.setByIndex(INDEX_ORGLEVEL, orglevel);
	}

	/**
	 * Returns the value of the '<em><b>Orgseq</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Orgseq</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Orgseq</em>' attribute.
	 * @see #setOrgseq(java.lang.String)
	 */
	public String getOrgseq() {
		return DataUtil.toString(super.getByIndex(INDEX_ORGSEQ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOrgseq <em>Orgseq</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgseq</em>' attribute.
	 * @see #getOrgseq()
	 */
	public void setOrgseq(String orgseq) {
		super.setByIndex(INDEX_ORGSEQ, orgseq);
	}

	/**
	 * Returns the value of the '<em><b>Orgdelflag</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Orgdelflag</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Orgdelflag</em>' attribute.
	 * @see #setOrgdelflag(java.lang.String)
	 */
	public String getOrgdelflag() {
		return DataUtil.toString(super.getByIndex(INDEX_ORGDELFLAG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOrgdelflag <em>Orgdelflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgdelflag</em>' attribute.
	 * @see #getOrgdelflag()
	 */
	public void setOrgdelflag(String orgdelflag) {
		super.setByIndex(INDEX_ORGDELFLAG, orgdelflag);
	}


}