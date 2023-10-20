/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.tools.Tools.impl;

import com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser;
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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtNoticerecvuserImpl#getNoticeid <em>Noticeid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtNoticerecvuserImpl#getReadstatus <em>Readstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtNoticerecvuserImpl#getReadtime <em>Readtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtNoticerecvuserImpl#getRecvuserid <em>Recvuserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtNoticerecvuserImpl#getRecvusername <em>Recvusername</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtNoticerecvuserImpl#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TAtNoticerecvuser;
 */

public class TAtNoticerecvuserImpl extends ExtendedDataObjectImpl implements TAtNoticerecvuser {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_NOTICEID = 0;
	public final static int INDEX_READSTATUS = 1;
	public final static int INDEX_READTIME = 2;
	public final static int INDEX_RECVUSERID = 3;
	public final static int INDEX_RECVUSERNAME = 4;
	public final static int INDEX_DATAORGID = 5;
	public final static int SDO_PROPERTY_COUNT = 6;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAtNoticerecvuserImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAtNoticerecvuserImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Noticeid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Noticeid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Noticeid</em>' attribute.
	 * @see #setNoticeid(long)
	 */
	public long getNoticeid() {
		return DataUtil.toLong(super.getByIndex(INDEX_NOTICEID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getNoticeid <em>Noticeid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Noticeid</em>' attribute.
	 * @see #getNoticeid()
	 */
	public void setNoticeid(long noticeid) {
		super.setByIndex(INDEX_NOTICEID, noticeid);
	}

	/**
	 * Returns the value of the '<em><b>Readstatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Readstatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Readstatus</em>' attribute.
	 * @see #setReadstatus(long)
	 */
	public long getReadstatus() {
		return DataUtil.toLong(super.getByIndex(INDEX_READSTATUS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReadstatus <em>Readstatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Readstatus</em>' attribute.
	 * @see #getReadstatus()
	 */
	public void setReadstatus(long readstatus) {
		super.setByIndex(INDEX_READSTATUS, readstatus);
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

	/**
	 * Returns the value of the '<em><b>Recvuserid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recvuserid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recvuserid</em>' attribute.
	 * @see #setRecvuserid(java.lang.String)
	 */
	public String getRecvuserid() {
		return DataUtil.toString(super.getByIndex(INDEX_RECVUSERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRecvuserid <em>Recvuserid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recvuserid</em>' attribute.
	 * @see #getRecvuserid()
	 */
	public void setRecvuserid(String recvuserid) {
		super.setByIndex(INDEX_RECVUSERID, recvuserid);
	}

	/**
	 * Returns the value of the '<em><b>Recvusername</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recvusername</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recvusername</em>' attribute.
	 * @see #setRecvusername(java.lang.String)
	 */
	public String getRecvusername() {
		return DataUtil.toString(super.getByIndex(INDEX_RECVUSERNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRecvusername <em>Recvusername</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recvusername</em>' attribute.
	 * @see #getRecvusername()
	 */
	public void setRecvusername(String recvusername) {
		super.setByIndex(INDEX_RECVUSERNAME, recvusername);
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