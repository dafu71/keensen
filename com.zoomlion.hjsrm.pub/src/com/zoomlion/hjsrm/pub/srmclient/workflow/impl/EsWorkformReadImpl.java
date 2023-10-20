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
import com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsWorkformReadImpl#getId <em>Id</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsWorkformReadImpl#getReader <em>Reader</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsWorkformReadImpl#getReadername <em>Readername</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsWorkformReadImpl#getEsheetno <em>Esheetno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsWorkformReadImpl#getSenduser <em>Senduser</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsWorkformReadImpl#getSendusername <em>Sendusername</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsWorkformReadImpl#getSendtime <em>Sendtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsWorkformReadImpl#getStatus <em>Status</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsWorkformReadImpl#getReadtime <em>Readtime</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements EsWorkformRead;
 */

public class EsWorkformReadImpl extends ExtendedDataObjectImpl implements EsWorkformRead {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_ID = 0;
	public final static int INDEX_READER = 1;
	public final static int INDEX_READERNAME = 2;
	public final static int INDEX_ESHEETNO = 3;
	public final static int INDEX_SENDUSER = 4;
	public final static int INDEX_SENDUSERNAME = 5;
	public final static int INDEX_SENDTIME = 6;
	public final static int INDEX_STATUS = 7;
	public final static int INDEX_READTIME = 8;
	public final static int SDO_PROPERTY_COUNT = 9;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public EsWorkformReadImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public EsWorkformReadImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Id</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Id</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Id</em>' attribute.
	 * @see #setId(long)
	 */
	public long getId() {
		return DataUtil.toLong(super.getByIndex(INDEX_ID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getId <em>Id</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Id</em>' attribute.
	 * @see #getId()
	 */
	public void setId(long id) {
		super.setByIndex(INDEX_ID, id);
	}

	/**
	 * Returns the value of the '<em><b>Reader</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reader</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reader</em>' attribute.
	 * @see #setReader(java.lang.String)
	 */
	public String getReader() {
		return DataUtil.toString(super.getByIndex(INDEX_READER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReader <em>Reader</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reader</em>' attribute.
	 * @see #getReader()
	 */
	public void setReader(String reader) {
		super.setByIndex(INDEX_READER, reader);
	}

	/**
	 * Returns the value of the '<em><b>Readername</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Readername</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Readername</em>' attribute.
	 * @see #setReadername(java.lang.String)
	 */
	public String getReadername() {
		return DataUtil.toString(super.getByIndex(INDEX_READERNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReadername <em>Readername</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Readername</em>' attribute.
	 * @see #getReadername()
	 */
	public void setReadername(String readername) {
		super.setByIndex(INDEX_READERNAME, readername);
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
	 * @see #setEsheetno(long)
	 */
	public long getEsheetno() {
		return DataUtil.toLong(super.getByIndex(INDEX_ESHEETNO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEsheetno <em>Esheetno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Esheetno</em>' attribute.
	 * @see #getEsheetno()
	 */
	public void setEsheetno(long esheetno) {
		super.setByIndex(INDEX_ESHEETNO, esheetno);
	}

	/**
	 * Returns the value of the '<em><b>Senduser</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Senduser</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Senduser</em>' attribute.
	 * @see #setSenduser(java.lang.String)
	 */
	public String getSenduser() {
		return DataUtil.toString(super.getByIndex(INDEX_SENDUSER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSenduser <em>Senduser</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Senduser</em>' attribute.
	 * @see #getSenduser()
	 */
	public void setSenduser(String senduser) {
		super.setByIndex(INDEX_SENDUSER, senduser);
	}

	/**
	 * Returns the value of the '<em><b>Sendusername</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sendusername</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sendusername</em>' attribute.
	 * @see #setSendusername(java.lang.String)
	 */
	public String getSendusername() {
		return DataUtil.toString(super.getByIndex(INDEX_SENDUSERNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSendusername <em>Sendusername</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendusername</em>' attribute.
	 * @see #getSendusername()
	 */
	public void setSendusername(String sendusername) {
		super.setByIndex(INDEX_SENDUSERNAME, sendusername);
	}

	/**
	 * Returns the value of the '<em><b>Sendtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sendtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sendtime</em>' attribute.
	 * @see #setSendtime(java.util.Date)
	 */
	public Date getSendtime() {
		return DataUtil.toDate(super.getByIndex(INDEX_SENDTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSendtime <em>Sendtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendtime</em>' attribute.
	 * @see #getSendtime()
	 */
	public void setSendtime(Date sendtime) {
		super.setByIndex(INDEX_SENDTIME, sendtime);
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
	 * @see #setStatus(long)
	 */
	public long getStatus() {
		return DataUtil.toLong(super.getByIndex(INDEX_STATUS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStatus <em>Status</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Status</em>' attribute.
	 * @see #getStatus()
	 */
	public void setStatus(long status) {
		super.setByIndex(INDEX_STATUS, status);
	}

	/**
	 * Returns the value of the '<em><b>Readtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Readtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Readtime</em>' attribute.
	 * @see #setReadtime(java.util.Date)
	 */
	public Date getReadtime() {
		return DataUtil.toDate(super.getByIndex(INDEX_READTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReadtime <em>Readtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Readtime</em>' attribute.
	 * @see #getReadtime()
	 */
	public void setReadtime(Date readtime) {
		super.setByIndex(INDEX_READTIME, readtime);
	}


}