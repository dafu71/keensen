/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.srmclient.workflow;

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
 *   <li>{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getContent <em>Content</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getCheckby <em>Checkby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getChecktime <em>Checktime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getAdvise <em>Advise</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getWorkitemid <em>Workitemid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface Testflow extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.srmclient.workflow.Testflow";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.srmclient.workflow", "Testflow");

	public final static IObjectFactory<Testflow> FACTORY = new IObjectFactory<Testflow>() {
		public Testflow create() {
			return (Testflow) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Pkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Pkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Pkid</em>' attribute.
	 * @see #setPkid(long)
	 */
	public long getPkid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getPkid <em>Pkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pkid</em>' attribute.
	 * @see #getPkid()
	 */
	public void setPkid(long pkid);

	/**
	 * Returns the value of the '<em><b>Createby</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createby</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createby</em>' attribute.
	 * @see #setCreateby(java.lang.String)
	 */
	public String getCreateby();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getCreateby <em>Createby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createby</em>' attribute.
	 * @see #getCreateby()
	 */
	public void setCreateby(String createby);

	/**
	 * Returns the value of the '<em><b>Createtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createtime</em>' attribute.
	 * @see #setCreatetime(java.util.Date)
	 */
	public Date getCreatetime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getCreatetime <em>Createtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createtime</em>' attribute.
	 * @see #getCreatetime()
	 */
	public void setCreatetime(Date createtime);

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
	public String getContent();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getContent <em>Content</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Content</em>' attribute.
	 * @see #getContent()
	 */
	public void setContent(String content);

	/**
	 * Returns the value of the '<em><b>Checkby</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Checkby</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Checkby</em>' attribute.
	 * @see #setCheckby(java.lang.String)
	 */
	public String getCheckby();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getCheckby <em>Checkby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Checkby</em>' attribute.
	 * @see #getCheckby()
	 */
	public void setCheckby(String checkby);

	/**
	 * Returns the value of the '<em><b>Checktime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Checktime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Checktime</em>' attribute.
	 * @see #setChecktime(java.util.Date)
	 */
	public Date getChecktime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getChecktime <em>Checktime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Checktime</em>' attribute.
	 * @see #getChecktime()
	 */
	public void setChecktime(Date checktime);

	/**
	 * Returns the value of the '<em><b>Advise</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Advise</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Advise</em>' attribute.
	 * @see #setAdvise(java.lang.String)
	 */
	public String getAdvise();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getAdvise <em>Advise</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Advise</em>' attribute.
	 * @see #getAdvise()
	 */
	public void setAdvise(String advise);

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
	public String getProcessinstid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getProcessinstid <em>Processinstid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processinstid</em>' attribute.
	 * @see #getProcessinstid()
	 */
	public void setProcessinstid(String processinstid);

	/**
	 * Returns the value of the '<em><b>Workitemid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Workitemid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Workitemid</em>' attribute.
	 * @see #setWorkitemid(java.lang.String)
	 */
	public String getWorkitemid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.srmclient.workflow.Testflow#getWorkitemid <em>Workitemid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Workitemid</em>' attribute.
	 * @see #getWorkitemid()
	 */
	public void setWorkitemid(String workitemid);


}