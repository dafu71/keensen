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
import com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.SmsSendImpl#getMessageid <em>Messageid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.SmsSendImpl#getMessage <em>Message</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.SmsSendImpl#getMobileno <em>Mobileno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.SmsSendImpl#getSendtime <em>Sendtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.SmsSendImpl#getSendstatus <em>Sendstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.SmsSendImpl#getSendstatustext <em>Sendstatustext</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.SmsSendImpl#getRecvstatus <em>Recvstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.SmsSendImpl#getRecvstatustext <em>Recvstatustext</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.SmsSendImpl#getSendmobileno <em>Sendmobileno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.SmsSendImpl#getSmsgmessageid <em>Smsgmessageid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.SmsSendImpl#getInserttime <em>Inserttime</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements SmsSend;
 */

public class SmsSendImpl extends ExtendedDataObjectImpl implements SmsSend {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_MESSAGEID = 0;
	public final static int INDEX_MESSAGE = 1;
	public final static int INDEX_MOBILENO = 2;
	public final static int INDEX_SENDTIME = 3;
	public final static int INDEX_SENDSTATUS = 4;
	public final static int INDEX_SENDSTATUSTEXT = 5;
	public final static int INDEX_RECVSTATUS = 6;
	public final static int INDEX_RECVSTATUSTEXT = 7;
	public final static int INDEX_SENDMOBILENO = 8;
	public final static int INDEX_SMSGMESSAGEID = 9;
	public final static int INDEX_INSERTTIME = 10;
	public final static int SDO_PROPERTY_COUNT = 11;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public SmsSendImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public SmsSendImpl(Type type) {
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


}