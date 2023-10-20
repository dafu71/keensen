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
import com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.ContractMessageinfoImpl#getMiid <em>Miid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.ContractMessageinfoImpl#getMessagetype <em>Messagetype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.ContractMessageinfoImpl#getSendbyName <em>SendbyName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.ContractMessageinfoImpl#getSendbyUserid <em>SendbyUserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.ContractMessageinfoImpl#getSenddate <em>Senddate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.ContractMessageinfoImpl#getMsgcontent <em>Msgcontent</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.ContractMessageinfoImpl#getContractid <em>Contractid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.ContractMessageinfoImpl#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.ContractMessageinfoImpl#getReceiveName <em>ReceiveName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.ContractMessageinfoImpl#getReceiveUserid <em>ReceiveUserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.ContractMessageinfoImpl#getReceivePhone <em>ReceivePhone</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements ContractMessageinfo;
 */

public class ContractMessageinfoImpl extends ExtendedDataObjectImpl implements ContractMessageinfo {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_MIID = 0;
	public final static int INDEX_MESSAGETYPE = 1;
	public final static int INDEX_SENDBYNAME = 2;
	public final static int INDEX_SENDBYUSERID = 3;
	public final static int INDEX_SENDDATE = 4;
	public final static int INDEX_MSGCONTENT = 5;
	public final static int INDEX_CONTRACTID = 6;
	public final static int INDEX_PROCESSINSTID = 7;
	public final static int INDEX_RECEIVENAME = 8;
	public final static int INDEX_RECEIVEUSERID = 9;
	public final static int INDEX_RECEIVEPHONE = 10;
	public final static int SDO_PROPERTY_COUNT = 11;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public ContractMessageinfoImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public ContractMessageinfoImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Miid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Miid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Miid</em>' attribute.
	 * @see #setMiid(long)
	 */
	public long getMiid() {
		return DataUtil.toLong(super.getByIndex(INDEX_MIID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMiid <em>Miid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Miid</em>' attribute.
	 * @see #getMiid()
	 */
	public void setMiid(long miid) {
		super.setByIndex(INDEX_MIID, miid);
	}

	/**
	 * Returns the value of the '<em><b>Messagetype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Messagetype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Messagetype</em>' attribute.
	 * @see #setMessagetype(java.lang.String)
	 */
	public String getMessagetype() {
		return DataUtil.toString(super.getByIndex(INDEX_MESSAGETYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMessagetype <em>Messagetype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Messagetype</em>' attribute.
	 * @see #getMessagetype()
	 */
	public void setMessagetype(String messagetype) {
		super.setByIndex(INDEX_MESSAGETYPE, messagetype);
	}

	/**
	 * Returns the value of the '<em><b>SendbyName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>SendbyName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>SendbyName</em>' attribute.
	 * @see #setSendbyName(java.lang.String)
	 */
	public String getSendbyName() {
		return DataUtil.toString(super.getByIndex(INDEX_SENDBYNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSendbyName <em>SendbyName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>SendbyName</em>' attribute.
	 * @see #getSendbyName()
	 */
	public void setSendbyName(String sendbyName) {
		super.setByIndex(INDEX_SENDBYNAME, sendbyName);
	}

	/**
	 * Returns the value of the '<em><b>SendbyUserid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>SendbyUserid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>SendbyUserid</em>' attribute.
	 * @see #setSendbyUserid(java.lang.String)
	 */
	public String getSendbyUserid() {
		return DataUtil.toString(super.getByIndex(INDEX_SENDBYUSERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSendbyUserid <em>SendbyUserid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>SendbyUserid</em>' attribute.
	 * @see #getSendbyUserid()
	 */
	public void setSendbyUserid(String sendbyUserid) {
		super.setByIndex(INDEX_SENDBYUSERID, sendbyUserid);
	}

	/**
	 * Returns the value of the '<em><b>Senddate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Senddate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Senddate</em>' attribute.
	 * @see #setSenddate(java.util.Date)
	 */
	public Date getSenddate() {
		return DataUtil.toDate(super.getByIndex(INDEX_SENDDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSenddate <em>Senddate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Senddate</em>' attribute.
	 * @see #getSenddate()
	 */
	public void setSenddate(Date senddate) {
		super.setByIndex(INDEX_SENDDATE, senddate);
	}

	/**
	 * Returns the value of the '<em><b>Msgcontent</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Msgcontent</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Msgcontent</em>' attribute.
	 * @see #setMsgcontent(java.lang.String)
	 */
	public String getMsgcontent() {
		return DataUtil.toString(super.getByIndex(INDEX_MSGCONTENT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMsgcontent <em>Msgcontent</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Msgcontent</em>' attribute.
	 * @see #getMsgcontent()
	 */
	public void setMsgcontent(String msgcontent) {
		super.setByIndex(INDEX_MSGCONTENT, msgcontent);
	}

	/**
	 * Returns the value of the '<em><b>Contractid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Contractid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Contractid</em>' attribute.
	 * @see #setContractid(java.lang.String)
	 */
	public String getContractid() {
		return DataUtil.toString(super.getByIndex(INDEX_CONTRACTID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getContractid <em>Contractid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Contractid</em>' attribute.
	 * @see #getContractid()
	 */
	public void setContractid(String contractid) {
		super.setByIndex(INDEX_CONTRACTID, contractid);
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
	 * Returns the value of the '<em><b>ReceiveName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ReceiveName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ReceiveName</em>' attribute.
	 * @see #setReceiveName(java.lang.String)
	 */
	public String getReceiveName() {
		return DataUtil.toString(super.getByIndex(INDEX_RECEIVENAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReceiveName <em>ReceiveName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ReceiveName</em>' attribute.
	 * @see #getReceiveName()
	 */
	public void setReceiveName(String receiveName) {
		super.setByIndex(INDEX_RECEIVENAME, receiveName);
	}

	/**
	 * Returns the value of the '<em><b>ReceiveUserid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ReceiveUserid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ReceiveUserid</em>' attribute.
	 * @see #setReceiveUserid(java.lang.String)
	 */
	public String getReceiveUserid() {
		return DataUtil.toString(super.getByIndex(INDEX_RECEIVEUSERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReceiveUserid <em>ReceiveUserid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ReceiveUserid</em>' attribute.
	 * @see #getReceiveUserid()
	 */
	public void setReceiveUserid(String receiveUserid) {
		super.setByIndex(INDEX_RECEIVEUSERID, receiveUserid);
	}

	/**
	 * Returns the value of the '<em><b>ReceivePhone</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ReceivePhone</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ReceivePhone</em>' attribute.
	 * @see #setReceivePhone(java.lang.String)
	 */
	public String getReceivePhone() {
		return DataUtil.toString(super.getByIndex(INDEX_RECEIVEPHONE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReceivePhone <em>ReceivePhone</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ReceivePhone</em>' attribute.
	 * @see #getReceivePhone()
	 */
	public void setReceivePhone(String receivePhone) {
		super.setByIndex(INDEX_RECEIVEPHONE, receivePhone);
	}


}