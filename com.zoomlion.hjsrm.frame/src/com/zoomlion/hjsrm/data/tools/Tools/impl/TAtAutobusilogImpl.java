/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.tools.Tools.impl;

import com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog;
import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;

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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAutobusilogImpl#getOperid <em>Operid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAutobusilogImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAutobusilogImpl#getUsername <em>Username</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAutobusilogImpl#getLogtype <em>Logtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAutobusilogImpl#getOpertime <em>Opertime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAutobusilogImpl#getClientip <em>Clientip</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAutobusilogImpl#getAppname <em>Appname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAutobusilogImpl#getFuncname <em>Funcname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAutobusilogImpl#getUniqueid <em>Uniqueid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAutobusilogImpl#getOperdesc <em>Operdesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAutobusilogImpl#getOperstatus <em>Operstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAutobusilogImpl#getExceptionmsg <em>Exceptionmsg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAutobusilogImpl#getLogstatus <em>Logstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtAutobusilogImpl#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TAtAutobusilog;
 */

public class TAtAutobusilogImpl extends ExtendedDataObjectImpl implements TAtAutobusilog {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_OPERID = 0;
	public final static int INDEX_USERID = 1;
	public final static int INDEX_USERNAME = 2;
	public final static int INDEX_LOGTYPE = 3;
	public final static int INDEX_OPERTIME = 4;
	public final static int INDEX_CLIENTIP = 5;
	public final static int INDEX_APPNAME = 6;
	public final static int INDEX_FUNCNAME = 7;
	public final static int INDEX_UNIQUEID = 8;
	public final static int INDEX_OPERDESC = 9;
	public final static int INDEX_OPERSTATUS = 10;
	public final static int INDEX_EXCEPTIONMSG = 11;
	public final static int INDEX_LOGSTATUS = 12;
	public final static int INDEX_DATAORGID = 13;
	public final static int SDO_PROPERTY_COUNT = 14;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAtAutobusilogImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAtAutobusilogImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Operid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operid</em>' attribute.
	 * @see #setOperid(long)
	 */
	public long getOperid() {
		return DataUtil.toLong(super.getByIndex(INDEX_OPERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOperid <em>Operid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operid</em>' attribute.
	 * @see #getOperid()
	 */
	public void setOperid(long operid) {
		super.setByIndex(INDEX_OPERID, operid);
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
	 * Returns the value of the '<em><b>Logtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Logtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Logtype</em>' attribute.
	 * @see #setLogtype(java.lang.String)
	 */
	public String getLogtype() {
		return DataUtil.toString(super.getByIndex(INDEX_LOGTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLogtype <em>Logtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Logtype</em>' attribute.
	 * @see #getLogtype()
	 */
	public void setLogtype(String logtype) {
		super.setByIndex(INDEX_LOGTYPE, logtype);
	}

	/**
	 * Returns the value of the '<em><b>Opertime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Opertime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Opertime</em>' attribute.
	 * @see #setOpertime(java.util.Date)
	 */
	public Date getOpertime() {
		return DataUtil.toDate(super.getByIndex(INDEX_OPERTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOpertime <em>Opertime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Opertime</em>' attribute.
	 * @see #getOpertime()
	 */
	public void setOpertime(Date opertime) {
		super.setByIndex(INDEX_OPERTIME, opertime);
	}

	/**
	 * Returns the value of the '<em><b>Clientip</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Clientip</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Clientip</em>' attribute.
	 * @see #setClientip(java.lang.String)
	 */
	public String getClientip() {
		return DataUtil.toString(super.getByIndex(INDEX_CLIENTIP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getClientip <em>Clientip</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Clientip</em>' attribute.
	 * @see #getClientip()
	 */
	public void setClientip(String clientip) {
		super.setByIndex(INDEX_CLIENTIP, clientip);
	}

	/**
	 * Returns the value of the '<em><b>Appname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Appname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Appname</em>' attribute.
	 * @see #setAppname(java.lang.String)
	 */
	public String getAppname() {
		return DataUtil.toString(super.getByIndex(INDEX_APPNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAppname <em>Appname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Appname</em>' attribute.
	 * @see #getAppname()
	 */
	public void setAppname(String appname) {
		super.setByIndex(INDEX_APPNAME, appname);
	}

	/**
	 * Returns the value of the '<em><b>Funcname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Funcname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Funcname</em>' attribute.
	 * @see #setFuncname(java.lang.String)
	 */
	public String getFuncname() {
		return DataUtil.toString(super.getByIndex(INDEX_FUNCNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFuncname <em>Funcname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Funcname</em>' attribute.
	 * @see #getFuncname()
	 */
	public void setFuncname(String funcname) {
		super.setByIndex(INDEX_FUNCNAME, funcname);
	}

	/**
	 * Returns the value of the '<em><b>Uniqueid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Uniqueid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Uniqueid</em>' attribute.
	 * @see #setUniqueid(java.lang.String)
	 */
	public String getUniqueid() {
		return DataUtil.toString(super.getByIndex(INDEX_UNIQUEID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUniqueid <em>Uniqueid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Uniqueid</em>' attribute.
	 * @see #getUniqueid()
	 */
	public void setUniqueid(String uniqueid) {
		super.setByIndex(INDEX_UNIQUEID, uniqueid);
	}

	/**
	 * Returns the value of the '<em><b>Operdesc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operdesc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operdesc</em>' attribute.
	 * @see #setOperdesc(java.lang.String)
	 */
	public String getOperdesc() {
		return DataUtil.toString(super.getByIndex(INDEX_OPERDESC, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOperdesc <em>Operdesc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operdesc</em>' attribute.
	 * @see #getOperdesc()
	 */
	public void setOperdesc(String operdesc) {
		super.setByIndex(INDEX_OPERDESC, operdesc);
	}

	/**
	 * Returns the value of the '<em><b>Operstatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operstatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operstatus</em>' attribute.
	 * @see #setOperstatus(java.lang.String)
	 */
	public String getOperstatus() {
		return DataUtil.toString(super.getByIndex(INDEX_OPERSTATUS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOperstatus <em>Operstatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operstatus</em>' attribute.
	 * @see #getOperstatus()
	 */
	public void setOperstatus(String operstatus) {
		super.setByIndex(INDEX_OPERSTATUS, operstatus);
	}

	/**
	 * Returns the value of the '<em><b>Exceptionmsg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Exceptionmsg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Exceptionmsg</em>' attribute.
	 * @see #setExceptionmsg(java.lang.String)
	 */
	public String getExceptionmsg() {
		return DataUtil.toString(super.getByIndex(INDEX_EXCEPTIONMSG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExceptionmsg <em>Exceptionmsg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Exceptionmsg</em>' attribute.
	 * @see #getExceptionmsg()
	 */
	public void setExceptionmsg(String exceptionmsg) {
		super.setByIndex(INDEX_EXCEPTIONMSG, exceptionmsg);
	}

	/**
	 * Returns the value of the '<em><b>Logstatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Logstatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Logstatus</em>' attribute.
	 * @see #setLogstatus(java.lang.String)
	 */
	public String getLogstatus() {
		return DataUtil.toString(super.getByIndex(INDEX_LOGSTATUS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLogstatus <em>Logstatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Logstatus</em>' attribute.
	 * @see #getLogstatus()
	 */
	public void setLogstatus(String logstatus) {
		super.setByIndex(INDEX_LOGSTATUS, logstatus);
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
	 * @see #setDataorgid(int)
	 */
	public int getDataorgid() {
		return DataUtil.toInt(super.getByIndex(INDEX_DATAORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid) {
		super.setByIndex(INDEX_DATAORGID, dataorgid);
	}


}