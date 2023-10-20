/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.interfaces.Interfaces;

import com.eos.data.sdo.IObjectFactory;

import commonj.sdo.DataObject;
import commonj.sdo.Type;
import commonj.sdo.helper.DataFactory;
import commonj.sdo.helper.TypeHelper;

import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getRecid <em>Recid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getRecipient <em>Recipient</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getAlertdate <em>Alertdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getAlerttype <em>Alerttype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getNature <em>Nature</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getSubject <em>Subject</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getBody <em>Body</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getTimestamp <em>Timestamp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getOrgid <em>Orgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface IMessageAlert extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.interfaces.Interfaces", "IMessageAlert");

	public final static IObjectFactory<IMessageAlert> FACTORY = new IObjectFactory<IMessageAlert>() {
		public IMessageAlert create() {
			return (IMessageAlert) DataFactory.INSTANCE.create(TYPE);
		}
	};

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
	public int getRecid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getRecid <em>Recid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recid</em>' attribute.
	 * @see #getRecid()
	 */
	public void setRecid(int recid);

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
	public String getUserid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getUserid <em>Userid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Userid</em>' attribute.
	 * @see #getUserid()
	 */
	public void setUserid(String userid);

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
	public String getRecipient();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getRecipient <em>Recipient</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recipient</em>' attribute.
	 * @see #getRecipient()
	 */
	public void setRecipient(String recipient);

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
	public Date getAlertdate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getAlertdate <em>Alertdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Alertdate</em>' attribute.
	 * @see #getAlertdate()
	 */
	public void setAlertdate(Date alertdate);

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
	public String getAlerttype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getAlerttype <em>Alerttype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Alerttype</em>' attribute.
	 * @see #getAlerttype()
	 */
	public void setAlerttype(String alerttype);

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
	public String getNature();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getNature <em>Nature</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Nature</em>' attribute.
	 * @see #getNature()
	 */
	public void setNature(String nature);

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
	public String getSubject();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getSubject <em>Subject</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Subject</em>' attribute.
	 * @see #getSubject()
	 */
	public void setSubject(String subject);

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
	public String getBody();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getBody <em>Body</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Body</em>' attribute.
	 * @see #getBody()
	 */
	public void setBody(String body);

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
	public Date getTimestamp();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getTimestamp <em>Timestamp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Timestamp</em>' attribute.
	 * @see #getTimestamp()
	 */
	public void setTimestamp(Date timestamp);

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
	public String getOrgid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMessageAlert#getOrgid <em>Orgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgid</em>' attribute.
	 * @see #getOrgid()
	 */
	public void setOrgid(String orgid);


}