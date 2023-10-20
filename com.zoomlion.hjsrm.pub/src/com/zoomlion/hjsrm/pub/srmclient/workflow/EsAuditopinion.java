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
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getAuditopinionid <em>Auditopinionid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getUsername <em>Username</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getOrgid <em>Orgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getOrgname <em>Orgname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getTime <em>Time</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getOpinion <em>Opinion</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getFlag <em>Flag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getStatus <em>Status</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getWorkitemid <em>Workitemid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getExecutorid <em>Executorid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getExecutorname <em>Executorname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getWorkitemname <em>Workitemname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getRootprocinstid <em>Rootprocinstid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface EsAuditopinion extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.srmclient.workflow", "EsAuditopinion");

	public final static IObjectFactory<EsAuditopinion> FACTORY = new IObjectFactory<EsAuditopinion>() {
		public EsAuditopinion create() {
			return (EsAuditopinion) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Auditopinionid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Auditopinionid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Auditopinionid</em>' attribute.
	 * @see #setAuditopinionid(long)
	 */
	public long getAuditopinionid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getAuditopinionid <em>Auditopinionid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Auditopinionid</em>' attribute.
	 * @see #getAuditopinionid()
	 */
	public void setAuditopinionid(long auditopinionid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getUserid <em>Userid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Userid</em>' attribute.
	 * @see #getUserid()
	 */
	public void setUserid(String userid);

	/**
	 * Returns the value of the '<em><b>Username</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Username</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Username</em>' attribute.
	 * @see #setUsername(java.lang.String)
	 */
	public String getUsername();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getUsername <em>Username</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Username</em>' attribute.
	 * @see #getUsername()
	 */
	public void setUsername(String username);

	/**
	 * Returns the value of the '<em><b>Orgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Orgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Orgid</em>' attribute.
	 * @see #setOrgid(long)
	 */
	public long getOrgid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getOrgid <em>Orgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgid</em>' attribute.
	 * @see #getOrgid()
	 */
	public void setOrgid(long orgid);

	/**
	 * Returns the value of the '<em><b>Orgname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Orgname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Orgname</em>' attribute.
	 * @see #setOrgname(java.lang.String)
	 */
	public String getOrgname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getOrgname <em>Orgname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgname</em>' attribute.
	 * @see #getOrgname()
	 */
	public void setOrgname(String orgname);

	/**
	 * Returns the value of the '<em><b>Time</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Time</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Time</em>' attribute.
	 * @see #setTime(java.util.Date)
	 */
	public Date getTime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getTime <em>Time</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Time</em>' attribute.
	 * @see #getTime()
	 */
	public void setTime(Date time);

	/**
	 * Returns the value of the '<em><b>Opinion</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Opinion</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Opinion</em>' attribute.
	 * @see #setOpinion(java.lang.String)
	 */
	public String getOpinion();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getOpinion <em>Opinion</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Opinion</em>' attribute.
	 * @see #getOpinion()
	 */
	public void setOpinion(String opinion);

	/**
	 * Returns the value of the '<em><b>Flag</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Flag</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Flag</em>' attribute.
	 * @see #setFlag(java.lang.String)
	 */
	public String getFlag();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getFlag <em>Flag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Flag</em>' attribute.
	 * @see #getFlag()
	 */
	public void setFlag(String flag);

	/**
	 * Returns the value of the '<em><b>Status</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Status</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Status</em>' attribute.
	 * @see #setStatus(java.lang.String)
	 */
	public String getStatus();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getStatus <em>Status</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Status</em>' attribute.
	 * @see #getStatus()
	 */
	public void setStatus(String status);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getProcessinstid <em>Processinstid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getWorkitemid <em>Workitemid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Workitemid</em>' attribute.
	 * @see #getWorkitemid()
	 */
	public void setWorkitemid(String workitemid);

	/**
	 * Returns the value of the '<em><b>Executorid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Executorid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Executorid</em>' attribute.
	 * @see #setExecutorid(java.lang.String)
	 */
	public String getExecutorid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getExecutorid <em>Executorid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Executorid</em>' attribute.
	 * @see #getExecutorid()
	 */
	public void setExecutorid(String executorid);

	/**
	 * Returns the value of the '<em><b>Executorname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Executorname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Executorname</em>' attribute.
	 * @see #setExecutorname(java.lang.String)
	 */
	public String getExecutorname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getExecutorname <em>Executorname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Executorname</em>' attribute.
	 * @see #getExecutorname()
	 */
	public void setExecutorname(String executorname);

	/**
	 * Returns the value of the '<em><b>Workitemname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Workitemname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Workitemname</em>' attribute.
	 * @see #setWorkitemname(java.lang.String)
	 */
	public String getWorkitemname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getWorkitemname <em>Workitemname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Workitemname</em>' attribute.
	 * @see #getWorkitemname()
	 */
	public void setWorkitemname(String workitemname);

	/**
	 * Returns the value of the '<em><b>Rootprocinstid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Rootprocinstid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Rootprocinstid</em>' attribute.
	 * @see #setRootprocinstid(java.lang.String)
	 */
	public String getRootprocinstid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsAuditopinion#getRootprocinstid <em>Rootprocinstid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Rootprocinstid</em>' attribute.
	 * @see #getRootprocinstid()
	 */
	public void setRootprocinstid(String rootprocinstid);


}