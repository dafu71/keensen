/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.tools.Tools.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.data.tools.Tools.TAcRightLogs;

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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAcRightLogsImpl#getOperid <em>Operid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAcRightLogsImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAcRightLogsImpl#getOperatorname <em>Operatorname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAcRightLogsImpl#getOpertime <em>Opertime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAcRightLogsImpl#getClientip <em>Clientip</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAcRightLogsImpl#getOperdesc <em>Operdesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAcRightLogsImpl#getOperstatus <em>Operstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAcRightLogsImpl#getExceptionmsg <em>Exceptionmsg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAcRightLogsImpl#getLogstatus <em>Logstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAcRightLogsImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAcRightLogsImpl#getOpertype <em>Opertype</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TAcRightLogs;
 */

public class TAcRightLogsImpl extends ExtendedDataObjectImpl implements TAcRightLogs {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_OPERID = 0;
	public final static int INDEX_USERID = 1;
	public final static int INDEX_OPERATORNAME = 2;
	public final static int INDEX_OPERTIME = 3;
	public final static int INDEX_CLIENTIP = 4;
	public final static int INDEX_OPERDESC = 5;
	public final static int INDEX_OPERSTATUS = 6;
	public final static int INDEX_EXCEPTIONMSG = 7;
	public final static int INDEX_LOGSTATUS = 8;
	public final static int INDEX_DATAORGID = 9;
	public final static int INDEX_OPERTYPE = 10;
	public final static int SDO_PROPERTY_COUNT = 11;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAcRightLogsImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAcRightLogsImpl(Type type) {
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

	/**
	 * Returns the value of the '<em><b>Opertype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Opertype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Opertype</em>' attribute.
	 * @see #setOpertype(long)
	 */
	public long getOpertype() {
		return DataUtil.toLong(super.getByIndex(INDEX_OPERTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOpertype <em>Opertype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Opertype</em>' attribute.
	 * @see #getOpertype()
	 */
	public void setOpertype(long opertype) {
		super.setByIndex(INDEX_OPERTYPE, opertype);
	}


}