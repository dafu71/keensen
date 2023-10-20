/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.interfaces.Interfaces.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert;

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
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMessageAlertImpl#getRecid <em>Recid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMessageAlertImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMessageAlertImpl#getRecipient <em>Recipient</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMessageAlertImpl#getAlertdate <em>Alertdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMessageAlertImpl#getAlerttype <em>Alerttype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMessageAlertImpl#getNature <em>Nature</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMessageAlertImpl#getSubject <em>Subject</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMessageAlertImpl#getBody <em>Body</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMessageAlertImpl#getTimestamp <em>Timestamp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMessageAlertImpl#getOrgid <em>Orgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements IMessageAlert;
 */

public class IMessageAlertImpl extends ExtendedDataObjectImpl implements IMessageAlert {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_RECID = 0;
	public final static int INDEX_USERID = 1;
	public final static int INDEX_RECIPIENT = 2;
	public final static int INDEX_ALERTDATE = 3;
	public final static int INDEX_ALERTTYPE = 4;
	public final static int INDEX_NATURE = 5;
	public final static int INDEX_SUBJECT = 6;
	public final static int INDEX_BODY = 7;
	public final static int INDEX_TIMESTAMP = 8;
	public final static int INDEX_ORGID = 9;
	public final static int SDO_PROPERTY_COUNT = 10;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public IMessageAlertImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public IMessageAlertImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Recid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recid</em>' attribute.
	 * @see #setRecid(int)
	 */
	public int getRecid() {
		return DataUtil.toInt(super.getByIndex(INDEX_RECID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRecid <em>Recid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recid</em>' attribute.
	 * @see #getRecid()
	 */
	public void setRecid(int recid) {
		super.setByIndex(INDEX_RECID, recid);
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
	 * Returns the value of the '<em><b>Recipient</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recipient</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recipient</em>' attribute.
	 * @see #setRecipient(java.lang.String)
	 */
	public String getRecipient() {
		return DataUtil.toString(super.getByIndex(INDEX_RECIPIENT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRecipient <em>Recipient</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recipient</em>' attribute.
	 * @see #getRecipient()
	 */
	public void setRecipient(String recipient) {
		super.setByIndex(INDEX_RECIPIENT, recipient);
	}

	/**
	 * Returns the value of the '<em><b>Alertdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Alertdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Alertdate</em>' attribute.
	 * @see #setAlertdate(java.util.Date)
	 */
	public Date getAlertdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_ALERTDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAlertdate <em>Alertdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Alertdate</em>' attribute.
	 * @see #getAlertdate()
	 */
	public void setAlertdate(Date alertdate) {
		super.setByIndex(INDEX_ALERTDATE, alertdate);
	}

	/**
	 * Returns the value of the '<em><b>Alerttype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Alerttype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Alerttype</em>' attribute.
	 * @see #setAlerttype(java.lang.String)
	 */
	public String getAlerttype() {
		return DataUtil.toString(super.getByIndex(INDEX_ALERTTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAlerttype <em>Alerttype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Alerttype</em>' attribute.
	 * @see #getAlerttype()
	 */
	public void setAlerttype(String alerttype) {
		super.setByIndex(INDEX_ALERTTYPE, alerttype);
	}

	/**
	 * Returns the value of the '<em><b>Nature</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Nature</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Nature</em>' attribute.
	 * @see #setNature(java.lang.String)
	 */
	public String getNature() {
		return DataUtil.toString(super.getByIndex(INDEX_NATURE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getNature <em>Nature</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Nature</em>' attribute.
	 * @see #getNature()
	 */
	public void setNature(String nature) {
		super.setByIndex(INDEX_NATURE, nature);
	}

	/**
	 * Returns the value of the '<em><b>Subject</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Subject</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Subject</em>' attribute.
	 * @see #setSubject(java.lang.String)
	 */
	public String getSubject() {
		return DataUtil.toString(super.getByIndex(INDEX_SUBJECT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSubject <em>Subject</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Subject</em>' attribute.
	 * @see #getSubject()
	 */
	public void setSubject(String subject) {
		super.setByIndex(INDEX_SUBJECT, subject);
	}

	/**
	 * Returns the value of the '<em><b>Body</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Body</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Body</em>' attribute.
	 * @see #setBody(java.lang.String)
	 */
	public String getBody() {
		return DataUtil.toString(super.getByIndex(INDEX_BODY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBody <em>Body</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Body</em>' attribute.
	 * @see #getBody()
	 */
	public void setBody(String body) {
		super.setByIndex(INDEX_BODY, body);
	}

	/**
	 * Returns the value of the '<em><b>Timestamp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Timestamp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Timestamp</em>' attribute.
	 * @see #setTimestamp(java.util.Date)
	 */
	public Date getTimestamp() {
		return DataUtil.toDate(super.getByIndex(INDEX_TIMESTAMP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTimestamp <em>Timestamp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Timestamp</em>' attribute.
	 * @see #getTimestamp()
	 */
	public void setTimestamp(Date timestamp) {
		super.setByIndex(INDEX_TIMESTAMP, timestamp);
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


}