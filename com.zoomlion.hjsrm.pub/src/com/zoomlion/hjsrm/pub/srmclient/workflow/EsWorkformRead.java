/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.srmclient.workflow;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getId <em>Id</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getReader <em>Reader</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getReadername <em>Readername</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getEsheetno <em>Esheetno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getSenduser <em>Senduser</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getSendusername <em>Sendusername</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getSendtime <em>Sendtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getStatus <em>Status</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getReadtime <em>Readtime</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface EsWorkformRead extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.srmclient.workflow", "EsWorkformRead");

	public final static IObjectFactory<EsWorkformRead> FACTORY = new IObjectFactory<EsWorkformRead>() {
		public EsWorkformRead create() {
			return (EsWorkformRead) DataFactory.INSTANCE.create(TYPE);
		}
	};

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
	public long getId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getId <em>Id</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Id</em>' attribute.
	 * @see #getId()
	 */
	public void setId(long id);

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
	public String getReader();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getReader <em>Reader</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reader</em>' attribute.
	 * @see #getReader()
	 */
	public void setReader(String reader);

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
	public String getReadername();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getReadername <em>Readername</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Readername</em>' attribute.
	 * @see #getReadername()
	 */
	public void setReadername(String readername);

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
	public long getEsheetno();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getEsheetno <em>Esheetno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Esheetno</em>' attribute.
	 * @see #getEsheetno()
	 */
	public void setEsheetno(long esheetno);

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
	public String getSenduser();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getSenduser <em>Senduser</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Senduser</em>' attribute.
	 * @see #getSenduser()
	 */
	public void setSenduser(String senduser);

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
	public String getSendusername();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getSendusername <em>Sendusername</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendusername</em>' attribute.
	 * @see #getSendusername()
	 */
	public void setSendusername(String sendusername);

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
	public Date getSendtime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getSendtime <em>Sendtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendtime</em>' attribute.
	 * @see #getSendtime()
	 */
	public void setSendtime(Date sendtime);

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
	public long getStatus();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getStatus <em>Status</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Status</em>' attribute.
	 * @see #getStatus()
	 */
	public void setStatus(long status);

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
	public Date getReadtime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformRead#getReadtime <em>Readtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Readtime</em>' attribute.
	 * @see #getReadtime()
	 */
	public void setReadtime(Date readtime);


}