/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getTybgId <em>TybgId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getTybgPersonId <em>TybgPersonId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getTybgPersonName <em>TybgPersonName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getTybgContact <em>TybgContact</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getTybgTitle <em>TybgTitle</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getTybgText <em>TybgText</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getTybgTime <em>TybgTime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getExecutePersonId <em>ExecutePersonId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getExecutePersonName <em>ExecutePersonName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getExecuteText <em>ExecuteText</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getExecuteTime <em>ExecuteTime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getArchivePersonId <em>ArchivePersonId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getArchivePersonName <em>ArchivePersonName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getArchiveText <em>ArchiveText</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getArchiveTime <em>ArchiveTime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getProcessStatus <em>ProcessStatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getDeptId <em>DeptId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getDeptName <em>DeptName</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface FlowTybgNotice extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice", "FlowTybgNotice");

	public final static IObjectFactory<FlowTybgNotice> FACTORY = new IObjectFactory<FlowTybgNotice>() {
		public FlowTybgNotice create() {
			return (FlowTybgNotice) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>TybgId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TybgId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TybgId</em>' attribute.
	 * @see #setTybgId(java.lang.String)
	 */
	public String getTybgId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getTybgId <em>TybgId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TybgId</em>' attribute.
	 * @see #getTybgId()
	 */
	public void setTybgId(String tybgId);

	/**
	 * Returns the value of the '<em><b>TybgPersonId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TybgPersonId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TybgPersonId</em>' attribute.
	 * @see #setTybgPersonId(java.lang.String)
	 */
	public String getTybgPersonId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getTybgPersonId <em>TybgPersonId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TybgPersonId</em>' attribute.
	 * @see #getTybgPersonId()
	 */
	public void setTybgPersonId(String tybgPersonId);

	/**
	 * Returns the value of the '<em><b>TybgPersonName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TybgPersonName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TybgPersonName</em>' attribute.
	 * @see #setTybgPersonName(java.lang.String)
	 */
	public String getTybgPersonName();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getTybgPersonName <em>TybgPersonName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TybgPersonName</em>' attribute.
	 * @see #getTybgPersonName()
	 */
	public void setTybgPersonName(String tybgPersonName);

	/**
	 * Returns the value of the '<em><b>TybgContact</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TybgContact</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TybgContact</em>' attribute.
	 * @see #setTybgContact(java.lang.String)
	 */
	public String getTybgContact();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getTybgContact <em>TybgContact</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TybgContact</em>' attribute.
	 * @see #getTybgContact()
	 */
	public void setTybgContact(String tybgContact);

	/**
	 * Returns the value of the '<em><b>TybgTitle</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TybgTitle</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TybgTitle</em>' attribute.
	 * @see #setTybgTitle(java.lang.String)
	 */
	public String getTybgTitle();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getTybgTitle <em>TybgTitle</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TybgTitle</em>' attribute.
	 * @see #getTybgTitle()
	 */
	public void setTybgTitle(String tybgTitle);

	/**
	 * Returns the value of the '<em><b>TybgText</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TybgText</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TybgText</em>' attribute.
	 * @see #setTybgText(java.lang.String)
	 */
	public String getTybgText();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getTybgText <em>TybgText</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TybgText</em>' attribute.
	 * @see #getTybgText()
	 */
	public void setTybgText(String tybgText);

	/**
	 * Returns the value of the '<em><b>TybgTime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TybgTime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TybgTime</em>' attribute.
	 * @see #setTybgTime(java.util.Date)
	 */
	public Date getTybgTime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getTybgTime <em>TybgTime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TybgTime</em>' attribute.
	 * @see #getTybgTime()
	 */
	public void setTybgTime(Date tybgTime);

	/**
	 * Returns the value of the '<em><b>ExecutePersonId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ExecutePersonId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ExecutePersonId</em>' attribute.
	 * @see #setExecutePersonId(java.lang.String)
	 */
	public String getExecutePersonId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getExecutePersonId <em>ExecutePersonId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ExecutePersonId</em>' attribute.
	 * @see #getExecutePersonId()
	 */
	public void setExecutePersonId(String executePersonId);

	/**
	 * Returns the value of the '<em><b>ExecutePersonName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ExecutePersonName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ExecutePersonName</em>' attribute.
	 * @see #setExecutePersonName(java.lang.String)
	 */
	public String getExecutePersonName();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getExecutePersonName <em>ExecutePersonName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ExecutePersonName</em>' attribute.
	 * @see #getExecutePersonName()
	 */
	public void setExecutePersonName(String executePersonName);

	/**
	 * Returns the value of the '<em><b>ExecuteText</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ExecuteText</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ExecuteText</em>' attribute.
	 * @see #setExecuteText(java.lang.String)
	 */
	public String getExecuteText();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getExecuteText <em>ExecuteText</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ExecuteText</em>' attribute.
	 * @see #getExecuteText()
	 */
	public void setExecuteText(String executeText);

	/**
	 * Returns the value of the '<em><b>ExecuteTime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ExecuteTime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ExecuteTime</em>' attribute.
	 * @see #setExecuteTime(java.util.Date)
	 */
	public Date getExecuteTime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getExecuteTime <em>ExecuteTime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ExecuteTime</em>' attribute.
	 * @see #getExecuteTime()
	 */
	public void setExecuteTime(Date executeTime);

	/**
	 * Returns the value of the '<em><b>ArchivePersonId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ArchivePersonId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ArchivePersonId</em>' attribute.
	 * @see #setArchivePersonId(java.lang.String)
	 */
	public String getArchivePersonId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getArchivePersonId <em>ArchivePersonId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ArchivePersonId</em>' attribute.
	 * @see #getArchivePersonId()
	 */
	public void setArchivePersonId(String archivePersonId);

	/**
	 * Returns the value of the '<em><b>ArchivePersonName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ArchivePersonName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ArchivePersonName</em>' attribute.
	 * @see #setArchivePersonName(java.lang.String)
	 */
	public String getArchivePersonName();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getArchivePersonName <em>ArchivePersonName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ArchivePersonName</em>' attribute.
	 * @see #getArchivePersonName()
	 */
	public void setArchivePersonName(String archivePersonName);

	/**
	 * Returns the value of the '<em><b>ArchiveText</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ArchiveText</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ArchiveText</em>' attribute.
	 * @see #setArchiveText(java.lang.String)
	 */
	public String getArchiveText();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getArchiveText <em>ArchiveText</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ArchiveText</em>' attribute.
	 * @see #getArchiveText()
	 */
	public void setArchiveText(String archiveText);

	/**
	 * Returns the value of the '<em><b>ArchiveTime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ArchiveTime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ArchiveTime</em>' attribute.
	 * @see #setArchiveTime(java.util.Date)
	 */
	public Date getArchiveTime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getArchiveTime <em>ArchiveTime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ArchiveTime</em>' attribute.
	 * @see #getArchiveTime()
	 */
	public void setArchiveTime(Date archiveTime);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getProcessinstid <em>Processinstid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processinstid</em>' attribute.
	 * @see #getProcessinstid()
	 */
	public void setProcessinstid(String processinstid);

	/**
	 * Returns the value of the '<em><b>ProcessStatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ProcessStatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ProcessStatus</em>' attribute.
	 * @see #setProcessStatus(java.lang.String)
	 */
	public String getProcessStatus();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getProcessStatus <em>ProcessStatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ProcessStatus</em>' attribute.
	 * @see #getProcessStatus()
	 */
	public void setProcessStatus(String processStatus);

	/**
	 * Returns the value of the '<em><b>DeptId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>DeptId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>DeptId</em>' attribute.
	 * @see #setDeptId(java.lang.String)
	 */
	public String getDeptId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getDeptId <em>DeptId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>DeptId</em>' attribute.
	 * @see #getDeptId()
	 */
	public void setDeptId(String deptId);

	/**
	 * Returns the value of the '<em><b>DeptName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>DeptName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>DeptName</em>' attribute.
	 * @see #setDeptName(java.lang.String)
	 */
	public String getDeptName();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNotice#getDeptName <em>DeptName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>DeptName</em>' attribute.
	 * @see #getDeptName()
	 */
	public void setDeptName(String deptName);


}