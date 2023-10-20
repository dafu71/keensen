/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.techNotice.techNotice;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getNoticeId <em>NoticeId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getWeavePersonId <em>WeavePersonId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getWeavePersonName <em>WeavePersonName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getDeptName <em>DeptName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getDeptId <em>DeptId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getApplicationTime <em>ApplicationTime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getProductType <em>ProductType</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getProductModel <em>ProductModel</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getNoticeType <em>NoticeType</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getLevels <em>Levels</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getNoticeTitle <em>NoticeTitle</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getNoticeText <em>NoticeText</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getSendDept <em>SendDept</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getExecutePersonId <em>ExecutePersonId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getExecutePersonName <em>ExecutePersonName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getExecuteText <em>ExecuteText</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getExecuteTime <em>ExecuteTime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getArchivePersonId <em>ArchivePersonId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getArchivePersonName <em>ArchivePersonName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getArchiveText <em>ArchiveText</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getArchiveTime <em>ArchiveTime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getProcessStatus <em>ProcessStatus</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface FlowTechniqueNotice extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.techNotice.techNotice", "FlowTechniqueNotice");

	public final static IObjectFactory<FlowTechniqueNotice> FACTORY = new IObjectFactory<FlowTechniqueNotice>() {
		public FlowTechniqueNotice create() {
			return (FlowTechniqueNotice) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>NoticeId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>NoticeId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>NoticeId</em>' attribute.
	 * @see #setNoticeId(java.lang.String)
	 */
	public String getNoticeId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getNoticeId <em>NoticeId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>NoticeId</em>' attribute.
	 * @see #getNoticeId()
	 */
	public void setNoticeId(String noticeId);

	/**
	 * Returns the value of the '<em><b>WeavePersonId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>WeavePersonId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>WeavePersonId</em>' attribute.
	 * @see #setWeavePersonId(java.lang.String)
	 */
	public String getWeavePersonId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getWeavePersonId <em>WeavePersonId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>WeavePersonId</em>' attribute.
	 * @see #getWeavePersonId()
	 */
	public void setWeavePersonId(String weavePersonId);

	/**
	 * Returns the value of the '<em><b>WeavePersonName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>WeavePersonName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>WeavePersonName</em>' attribute.
	 * @see #setWeavePersonName(java.lang.String)
	 */
	public String getWeavePersonName();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getWeavePersonName <em>WeavePersonName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>WeavePersonName</em>' attribute.
	 * @see #getWeavePersonName()
	 */
	public void setWeavePersonName(String weavePersonName);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getDeptName <em>DeptName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>DeptName</em>' attribute.
	 * @see #getDeptName()
	 */
	public void setDeptName(String deptName);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getDeptId <em>DeptId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>DeptId</em>' attribute.
	 * @see #getDeptId()
	 */
	public void setDeptId(String deptId);

	/**
	 * Returns the value of the '<em><b>ApplicationTime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ApplicationTime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ApplicationTime</em>' attribute.
	 * @see #setApplicationTime(java.util.Date)
	 */
	public Date getApplicationTime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getApplicationTime <em>ApplicationTime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ApplicationTime</em>' attribute.
	 * @see #getApplicationTime()
	 */
	public void setApplicationTime(Date applicationTime);

	/**
	 * Returns the value of the '<em><b>ProductType</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ProductType</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ProductType</em>' attribute.
	 * @see #setProductType(java.lang.String)
	 */
	public String getProductType();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getProductType <em>ProductType</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ProductType</em>' attribute.
	 * @see #getProductType()
	 */
	public void setProductType(String productType);

	/**
	 * Returns the value of the '<em><b>ProductModel</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ProductModel</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ProductModel</em>' attribute.
	 * @see #setProductModel(java.lang.String)
	 */
	public String getProductModel();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getProductModel <em>ProductModel</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ProductModel</em>' attribute.
	 * @see #getProductModel()
	 */
	public void setProductModel(String productModel);

	/**
	 * Returns the value of the '<em><b>NoticeType</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>NoticeType</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>NoticeType</em>' attribute.
	 * @see #setNoticeType(java.lang.String)
	 */
	public String getNoticeType();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getNoticeType <em>NoticeType</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>NoticeType</em>' attribute.
	 * @see #getNoticeType()
	 */
	public void setNoticeType(String noticeType);

	/**
	 * Returns the value of the '<em><b>Levels</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Levels</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Levels</em>' attribute.
	 * @see #setLevels(java.lang.String)
	 */
	public String getLevels();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getLevels <em>Levels</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Levels</em>' attribute.
	 * @see #getLevels()
	 */
	public void setLevels(String levels);

	/**
	 * Returns the value of the '<em><b>NoticeTitle</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>NoticeTitle</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>NoticeTitle</em>' attribute.
	 * @see #setNoticeTitle(java.lang.String)
	 */
	public String getNoticeTitle();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getNoticeTitle <em>NoticeTitle</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>NoticeTitle</em>' attribute.
	 * @see #getNoticeTitle()
	 */
	public void setNoticeTitle(String noticeTitle);

	/**
	 * Returns the value of the '<em><b>NoticeText</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>NoticeText</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>NoticeText</em>' attribute.
	 * @see #setNoticeText(java.lang.String)
	 */
	public String getNoticeText();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getNoticeText <em>NoticeText</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>NoticeText</em>' attribute.
	 * @see #getNoticeText()
	 */
	public void setNoticeText(String noticeText);

	/**
	 * Returns the value of the '<em><b>SendDept</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>SendDept</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>SendDept</em>' attribute.
	 * @see #setSendDept(java.lang.String)
	 */
	public String getSendDept();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getSendDept <em>SendDept</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>SendDept</em>' attribute.
	 * @see #getSendDept()
	 */
	public void setSendDept(String sendDept);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getExecutePersonId <em>ExecutePersonId</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getExecutePersonName <em>ExecutePersonName</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getExecuteText <em>ExecuteText</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getExecuteTime <em>ExecuteTime</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getArchivePersonId <em>ArchivePersonId</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getArchivePersonName <em>ArchivePersonName</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getArchiveText <em>ArchiveText</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getArchiveTime <em>ArchiveTime</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getProcessinstid <em>Processinstid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTechniqueNotice#getProcessStatus <em>ProcessStatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ProcessStatus</em>' attribute.
	 * @see #getProcessStatus()
	 */
	public void setProcessStatus(String processStatus);


}