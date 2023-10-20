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
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getSheetid <em>Sheetid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getProcessinstname <em>Processinstname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getProcesstype <em>Processtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getUsername <em>Username</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getOrgid <em>Orgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getOrgname <em>Orgname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getDeptid <em>Deptid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getDeptname <em>Deptname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getPhone <em>Phone</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getApplydate <em>Applydate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getEmergency <em>Emergency</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getEsheetno <em>Esheetno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getExpectdate <em>Expectdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getSheetstatus <em>Sheetstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getDescription <em>Description</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getTitle <em>Title</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getProcessdefname <em>Processdefname</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface EsBasicinfo extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.srmclient.workflow", "EsBasicinfo");

	public final static IObjectFactory<EsBasicinfo> FACTORY = new IObjectFactory<EsBasicinfo>() {
		public EsBasicinfo create() {
			return (EsBasicinfo) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Sheetid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sheetid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sheetid</em>' attribute.
	 * @see #setSheetid(long)
	 */
	public long getSheetid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getSheetid <em>Sheetid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sheetid</em>' attribute.
	 * @see #getSheetid()
	 */
	public void setSheetid(long sheetid);

	/**
	 * Returns the value of the '<em><b>Processinstname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Processinstname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Processinstname</em>' attribute.
	 * @see #setProcessinstname(java.lang.String)
	 */
	public String getProcessinstname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getProcessinstname <em>Processinstname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processinstname</em>' attribute.
	 * @see #getProcessinstname()
	 */
	public void setProcessinstname(String processinstname);

	/**
	 * Returns the value of the '<em><b>Processtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Processtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Processtype</em>' attribute.
	 * @see #setProcesstype(java.lang.String)
	 */
	public String getProcesstype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getProcesstype <em>Processtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processtype</em>' attribute.
	 * @see #getProcesstype()
	 */
	public void setProcesstype(String processtype);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getUserid <em>Userid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getUsername <em>Username</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getOrgid <em>Orgid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getOrgname <em>Orgname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgname</em>' attribute.
	 * @see #getOrgname()
	 */
	public void setOrgname(String orgname);

	/**
	 * Returns the value of the '<em><b>Deptid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Deptid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Deptid</em>' attribute.
	 * @see #setDeptid(long)
	 */
	public long getDeptid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getDeptid <em>Deptid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Deptid</em>' attribute.
	 * @see #getDeptid()
	 */
	public void setDeptid(long deptid);

	/**
	 * Returns the value of the '<em><b>Deptname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Deptname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Deptname</em>' attribute.
	 * @see #setDeptname(java.lang.String)
	 */
	public String getDeptname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getDeptname <em>Deptname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Deptname</em>' attribute.
	 * @see #getDeptname()
	 */
	public void setDeptname(String deptname);

	/**
	 * Returns the value of the '<em><b>Phone</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Phone</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Phone</em>' attribute.
	 * @see #setPhone(java.lang.String)
	 */
	public String getPhone();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getPhone <em>Phone</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Phone</em>' attribute.
	 * @see #getPhone()
	 */
	public void setPhone(String phone);

	/**
	 * Returns the value of the '<em><b>Applydate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Applydate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Applydate</em>' attribute.
	 * @see #setApplydate(java.util.Date)
	 */
	public Date getApplydate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getApplydate <em>Applydate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Applydate</em>' attribute.
	 * @see #getApplydate()
	 */
	public void setApplydate(Date applydate);

	/**
	 * Returns the value of the '<em><b>Emergency</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Emergency</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Emergency</em>' attribute.
	 * @see #setEmergency(java.lang.String)
	 */
	public String getEmergency();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getEmergency <em>Emergency</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Emergency</em>' attribute.
	 * @see #getEmergency()
	 */
	public void setEmergency(String emergency);

	/**
	 * Returns the value of the '<em><b>Esheetno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Esheetno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Esheetno</em>' attribute.
	 * @see #setEsheetno(java.lang.String)
	 */
	public String getEsheetno();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getEsheetno <em>Esheetno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Esheetno</em>' attribute.
	 * @see #getEsheetno()
	 */
	public void setEsheetno(String esheetno);

	/**
	 * Returns the value of the '<em><b>Expectdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Expectdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Expectdate</em>' attribute.
	 * @see #setExpectdate(java.util.Date)
	 */
	public Date getExpectdate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getExpectdate <em>Expectdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Expectdate</em>' attribute.
	 * @see #getExpectdate()
	 */
	public void setExpectdate(Date expectdate);

	/**
	 * Returns the value of the '<em><b>Sheetstatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sheetstatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sheetstatus</em>' attribute.
	 * @see #setSheetstatus(java.lang.String)
	 */
	public String getSheetstatus();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getSheetstatus <em>Sheetstatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sheetstatus</em>' attribute.
	 * @see #getSheetstatus()
	 */
	public void setSheetstatus(String sheetstatus);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getProcessinstid <em>Processinstid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processinstid</em>' attribute.
	 * @see #getProcessinstid()
	 */
	public void setProcessinstid(String processinstid);

	/**
	 * Returns the value of the '<em><b>Description</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Description</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Description</em>' attribute.
	 * @see #setDescription(java.lang.String)
	 */
	public String getDescription();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getDescription <em>Description</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Description</em>' attribute.
	 * @see #getDescription()
	 */
	public void setDescription(String description);

	/**
	 * Returns the value of the '<em><b>Title</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Title</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Title</em>' attribute.
	 * @see #setTitle(java.lang.String)
	 */
	public String getTitle();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getTitle <em>Title</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Title</em>' attribute.
	 * @see #getTitle()
	 */
	public void setTitle(String title);

	/**
	 * Returns the value of the '<em><b>Processdefname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Processdefname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Processdefname</em>' attribute.
	 * @see #setProcessdefname(java.lang.String)
	 */
	public String getProcessdefname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsBasicinfo#getProcessdefname <em>Processdefname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processdefname</em>' attribute.
	 * @see #getProcessdefname()
	 */
	public void setProcessdefname(String processdefname);


}