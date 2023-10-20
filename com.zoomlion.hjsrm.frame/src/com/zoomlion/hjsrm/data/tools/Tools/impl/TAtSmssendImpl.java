/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.tools.Tools.impl;

import com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend;
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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSmssendImpl#getMessageid <em>Messageid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSmssendImpl#getMessage <em>Message</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSmssendImpl#getMobileno <em>Mobileno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSmssendImpl#getSendtime <em>Sendtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSmssendImpl#getSendtimes <em>Sendtimes</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSmssendImpl#getStatus <em>Status</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSmssendImpl#getSendtype <em>Sendtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSmssendImpl#getOrdertimestr <em>Ordertimestr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSmssendImpl#getSendstatus <em>Sendstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSmssendImpl#getSendstatustext <em>Sendstatustext</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSmssendImpl#getRecvstatus <em>Recvstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSmssendImpl#getRecvstatustext <em>Recvstatustext</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSmssendImpl#getSendmobileno <em>Sendmobileno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSmssendImpl#getSmsgmessageid <em>Smsgmessageid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSmssendImpl#getInserttime <em>Inserttime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSmssendImpl#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TAtSmssend;
 */

public class TAtSmssendImpl extends ExtendedDataObjectImpl implements TAtSmssend {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_MESSAGEID = 0;
	public final static int INDEX_MESSAGE = 1;
	public final static int INDEX_MOBILENO = 2;
	public final static int INDEX_SENDTIME = 3;
	public final static int INDEX_SENDTIMES = 4;
	public final static int INDEX_STATUS = 5;
	public final static int INDEX_SENDTYPE = 6;
	public final static int INDEX_ORDERTIMESTR = 7;
	public final static int INDEX_SENDSTATUS = 8;
	public final static int INDEX_SENDSTATUSTEXT = 9;
	public final static int INDEX_RECVSTATUS = 10;
	public final static int INDEX_RECVSTATUSTEXT = 11;
	public final static int INDEX_SENDMOBILENO = 12;
	public final static int INDEX_SMSGMESSAGEID = 13;
	public final static int INDEX_INSERTTIME = 14;
	public final static int INDEX_DATAORGID = 15;
	public final static int SDO_PROPERTY_COUNT = 16;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAtSmssendImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAtSmssendImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Messageid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Messageid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Messageid</em>' attribute.
	 * @see #setMessageid(long)
	 */
	public long getMessageid() {
		return DataUtil.toLong(super.getByIndex(INDEX_MESSAGEID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMessageid <em>Messageid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Messageid</em>' attribute.
	 * @see #getMessageid()
	 */
	public void setMessageid(long messageid) {
		super.setByIndex(INDEX_MESSAGEID, messageid);
	}

	/**
	 * Returns the value of the '<em><b>Message</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Message</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Message</em>' attribute.
	 * @see #setMessage(java.lang.String)
	 */
	public String getMessage() {
		return DataUtil.toString(super.getByIndex(INDEX_MESSAGE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMessage <em>Message</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Message</em>' attribute.
	 * @see #getMessage()
	 */
	public void setMessage(String message) {
		super.setByIndex(INDEX_MESSAGE, message);
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
	 * Returns the value of the '<em><b>Sendtimes</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sendtimes</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sendtimes</em>' attribute.
	 * @see #setSendtimes(long)
	 */
	public long getSendtimes() {
		return DataUtil.toLong(super.getByIndex(INDEX_SENDTIMES, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSendtimes <em>Sendtimes</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendtimes</em>' attribute.
	 * @see #getSendtimes()
	 */
	public void setSendtimes(long sendtimes) {
		super.setByIndex(INDEX_SENDTIMES, sendtimes);
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
	 * Returns the value of the '<em><b>Sendtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sendtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sendtype</em>' attribute.
	 * @see #setSendtype(long)
	 */
	public long getSendtype() {
		return DataUtil.toLong(super.getByIndex(INDEX_SENDTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSendtype <em>Sendtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendtype</em>' attribute.
	 * @see #getSendtype()
	 */
	public void setSendtype(long sendtype) {
		super.setByIndex(INDEX_SENDTYPE, sendtype);
	}

	/**
	 * Returns the value of the '<em><b>Ordertimestr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ordertimestr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ordertimestr</em>' attribute.
	 * @see #setOrdertimestr(java.lang.String)
	 */
	public String getOrdertimestr() {
		return DataUtil.toString(super.getByIndex(INDEX_ORDERTIMESTR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOrdertimestr <em>Ordertimestr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ordertimestr</em>' attribute.
	 * @see #getOrdertimestr()
	 */
	public void setOrdertimestr(String ordertimestr) {
		super.setByIndex(INDEX_ORDERTIMESTR, ordertimestr);
	}

	/**
	 * Returns the value of the '<em><b>Sendstatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sendstatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sendstatus</em>' attribute.
	 * @see #setSendstatus(java.lang.String)
	 */
	public String getSendstatus() {
		return DataUtil.toString(super.getByIndex(INDEX_SENDSTATUS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSendstatus <em>Sendstatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendstatus</em>' attribute.
	 * @see #getSendstatus()
	 */
	public void setSendstatus(String sendstatus) {
		super.setByIndex(INDEX_SENDSTATUS, sendstatus);
	}

	/**
	 * Returns the value of the '<em><b>Sendstatustext</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sendstatustext</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sendstatustext</em>' attribute.
	 * @see #setSendstatustext(java.lang.String)
	 */
	public String getSendstatustext() {
		return DataUtil.toString(super.getByIndex(INDEX_SENDSTATUSTEXT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSendstatustext <em>Sendstatustext</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendstatustext</em>' attribute.
	 * @see #getSendstatustext()
	 */
	public void setSendstatustext(String sendstatustext) {
		super.setByIndex(INDEX_SENDSTATUSTEXT, sendstatustext);
	}

	/**
	 * Returns the value of the '<em><b>Recvstatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recvstatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recvstatus</em>' attribute.
	 * @see #setRecvstatus(java.lang.String)
	 */
	public String getRecvstatus() {
		return DataUtil.toString(super.getByIndex(INDEX_RECVSTATUS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRecvstatus <em>Recvstatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recvstatus</em>' attribute.
	 * @see #getRecvstatus()
	 */
	public void setRecvstatus(String recvstatus) {
		super.setByIndex(INDEX_RECVSTATUS, recvstatus);
	}

	/**
	 * Returns the value of the '<em><b>Recvstatustext</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recvstatustext</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recvstatustext</em>' attribute.
	 * @see #setRecvstatustext(java.lang.String)
	 */
	public String getRecvstatustext() {
		return DataUtil.toString(super.getByIndex(INDEX_RECVSTATUSTEXT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRecvstatustext <em>Recvstatustext</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recvstatustext</em>' attribute.
	 * @see #getRecvstatustext()
	 */
	public void setRecvstatustext(String recvstatustext) {
		super.setByIndex(INDEX_RECVSTATUSTEXT, recvstatustext);
	}

	/**
	 * Returns the value of the '<em><b>Sendmobileno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sendmobileno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sendmobileno</em>' attribute.
	 * @see #setSendmobileno(java.lang.String)
	 */
	public String getSendmobileno() {
		return DataUtil.toString(super.getByIndex(INDEX_SENDMOBILENO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSendmobileno <em>Sendmobileno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendmobileno</em>' attribute.
	 * @see #getSendmobileno()
	 */
	public void setSendmobileno(String sendmobileno) {
		super.setByIndex(INDEX_SENDMOBILENO, sendmobileno);
	}

	/**
	 * Returns the value of the '<em><b>Smsgmessageid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Smsgmessageid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Smsgmessageid</em>' attribute.
	 * @see #setSmsgmessageid(java.lang.String)
	 */
	public String getSmsgmessageid() {
		return DataUtil.toString(super.getByIndex(INDEX_SMSGMESSAGEID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSmsgmessageid <em>Smsgmessageid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Smsgmessageid</em>' attribute.
	 * @see #getSmsgmessageid()
	 */
	public void setSmsgmessageid(String smsgmessageid) {
		super.setByIndex(INDEX_SMSGMESSAGEID, smsgmessageid);
	}

	/**
	 * Returns the value of the '<em><b>Inserttime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Inserttime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Inserttime</em>' attribute.
	 * @see #setInserttime(java.util.Date)
	 */
	public Date getInserttime() {
		return DataUtil.toDate(super.getByIndex(INDEX_INSERTTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getInserttime <em>Inserttime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Inserttime</em>' attribute.
	 * @see #getInserttime()
	 */
	public void setInserttime(Date inserttime) {
		super.setByIndex(INDEX_INSERTTIME, inserttime);
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