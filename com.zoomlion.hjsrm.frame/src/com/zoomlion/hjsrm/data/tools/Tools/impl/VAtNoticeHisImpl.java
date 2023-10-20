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
import com.zoomlion.hjsrm.data.tools.Tools.VAtNoticeHis;

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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.VAtNoticeHisImpl#getNoticeid <em>Noticeid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.VAtNoticeHisImpl#getTitle <em>Title</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.VAtNoticeHisImpl#getSendusername <em>Sendusername</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.VAtNoticeHisImpl#getSendtime <em>Sendtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.VAtNoticeHisImpl#getRecvusername <em>Recvusername</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.VAtNoticeHisImpl#getContent <em>Content</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.VAtNoticeHisImpl#getReadstatus <em>Readstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.VAtNoticeHisImpl#getReadtime <em>Readtime</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements VAtNoticeHis;
 */

public class VAtNoticeHisImpl extends ExtendedDataObjectImpl implements VAtNoticeHis {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_NOTICEID = 0;
	public final static int INDEX_TITLE = 1;
	public final static int INDEX_SENDUSERNAME = 2;
	public final static int INDEX_SENDTIME = 3;
	public final static int INDEX_RECVUSERNAME = 4;
	public final static int INDEX_CONTENT = 5;
	public final static int INDEX_READSTATUS = 6;
	public final static int INDEX_READTIME = 7;
	public final static int SDO_PROPERTY_COUNT = 8;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public VAtNoticeHisImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public VAtNoticeHisImpl(Type type) {
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
	 * @see #setSendtime(java.lang.String)
	 */
	public String getSendtime() {
		return DataUtil.toString(super.getByIndex(INDEX_SENDTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSendtime <em>Sendtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendtime</em>' attribute.
	 * @see #getSendtime()
	 */
	public void setSendtime(String sendtime) {
		super.setByIndex(INDEX_SENDTIME, sendtime);
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
	 * Returns the value of the '<em><b>Content</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Content</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Content</em>' attribute.
	 * @see #setContent(java.lang.String)
	 */
	public String getContent() {
		return DataUtil.toString(super.getByIndex(INDEX_CONTENT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getContent <em>Content</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Content</em>' attribute.
	 * @see #getContent()
	 */
	public void setContent(String content) {
		super.setByIndex(INDEX_CONTENT, content);
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
	 * @see #setReadstatus(java.lang.String)
	 */
	public String getReadstatus() {
		return DataUtil.toString(super.getByIndex(INDEX_READSTATUS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReadstatus <em>Readstatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Readstatus</em>' attribute.
	 * @see #getReadstatus()
	 */
	public void setReadstatus(String readstatus) {
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


}