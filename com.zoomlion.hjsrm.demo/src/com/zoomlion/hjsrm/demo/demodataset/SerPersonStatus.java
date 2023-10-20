/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.demo.demodataset;

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
 *   <li>{@link com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus#getStatusId <em>StatusId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus#getUserId <em>UserId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus#getUserName <em>UserName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus#getOperatorStatus <em>OperatorStatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus#getBegintime <em>Begintime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus#getEndtime <em>Endtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus#getWorktype <em>Worktype</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface SerPersonStatus extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.demo.demodataset", "SerPersonStatus");

	public final static IObjectFactory<SerPersonStatus> FACTORY = new IObjectFactory<SerPersonStatus>() {
		public SerPersonStatus create() {
			return (SerPersonStatus) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>StatusId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>StatusId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>StatusId</em>' attribute.
	 * @see #setStatusId(long)
	 */
	public long getStatusId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus#getStatusId <em>StatusId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>StatusId</em>' attribute.
	 * @see #getStatusId()
	 */
	public void setStatusId(long statusId);

	/**
	 * Returns the value of the '<em><b>UserId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>UserId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>UserId</em>' attribute.
	 * @see #setUserId(java.lang.String)
	 */
	public String getUserId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus#getUserId <em>UserId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>UserId</em>' attribute.
	 * @see #getUserId()
	 */
	public void setUserId(String userId);

	/**
	 * Returns the value of the '<em><b>UserName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>UserName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>UserName</em>' attribute.
	 * @see #setUserName(java.lang.String)
	 */
	public String getUserName();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus#getUserName <em>UserName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>UserName</em>' attribute.
	 * @see #getUserName()
	 */
	public void setUserName(String userName);

	/**
	 * Returns the value of the '<em><b>OperatorStatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>OperatorStatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>OperatorStatus</em>' attribute.
	 * @see #setOperatorStatus(java.lang.String)
	 */
	public String getOperatorStatus();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus#getOperatorStatus <em>OperatorStatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>OperatorStatus</em>' attribute.
	 * @see #getOperatorStatus()
	 */
	public void setOperatorStatus(String operatorStatus);

	/**
	 * Returns the value of the '<em><b>Processinstid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Processinstid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Processinstid</em>' attribute.
	 * @see #setProcessinstid(long)
	 */
	public long getProcessinstid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus#getProcessinstid <em>Processinstid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processinstid</em>' attribute.
	 * @see #getProcessinstid()
	 */
	public void setProcessinstid(long processinstid);

	/**
	 * Returns the value of the '<em><b>Begintime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Begintime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Begintime</em>' attribute.
	 * @see #setBegintime(java.util.Date)
	 */
	public Date getBegintime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus#getBegintime <em>Begintime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Begintime</em>' attribute.
	 * @see #getBegintime()
	 */
	public void setBegintime(Date begintime);

	/**
	 * Returns the value of the '<em><b>Endtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Endtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Endtime</em>' attribute.
	 * @see #setEndtime(java.util.Date)
	 */
	public Date getEndtime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus#getEndtime <em>Endtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Endtime</em>' attribute.
	 * @see #getEndtime()
	 */
	public void setEndtime(Date endtime);

	/**
	 * Returns the value of the '<em><b>Worktype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Worktype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Worktype</em>' attribute.
	 * @see #setWorktype(java.lang.String)
	 */
	public String getWorktype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.demo.demodataset.SerPersonStatus#getWorktype <em>Worktype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Worktype</em>' attribute.
	 * @see #getWorktype()
	 */
	public void setWorktype(String worktype);


}