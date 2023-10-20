/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.techChange.techChange;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getTechId <em>TechId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getStatus <em>Status</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getCreatebyName <em>CreatebyName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getOrgid <em>Orgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getOrgname <em>Orgname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getModifytime <em>Modifytime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getModifybyName <em>ModifybyName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getModifyOrgid <em>ModifyOrgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getModifyOorgname <em>ModifyOorgname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getPhone <em>Phone</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getProblemType <em>ProblemType</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getProblem <em>Problem</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getProductno <em>Productno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getImportance <em>Importance</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getEffection <em>Effection</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getDuty <em>Duty</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getStand <em>Stand</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface FlowTechList extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.techChange.techChange", "FlowTechList");

	public final static IObjectFactory<FlowTechList> FACTORY = new IObjectFactory<FlowTechList>() {
		public FlowTechList create() {
			return (FlowTechList) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>TechId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>TechId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>TechId</em>' attribute.
	 * @see #setTechId(java.lang.String)
	 */
	public String getTechId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getTechId <em>TechId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TechId</em>' attribute.
	 * @see #getTechId()
	 */
	public void setTechId(String techId);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getProcessinstid <em>Processinstid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processinstid</em>' attribute.
	 * @see #getProcessinstid()
	 */
	public void setProcessinstid(String processinstid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getStatus <em>Status</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Status</em>' attribute.
	 * @see #getStatus()
	 */
	public void setStatus(String status);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getCreateby <em>Createby</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getCreatetime <em>Createtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createtime</em>' attribute.
	 * @see #getCreatetime()
	 */
	public void setCreatetime(Date createtime);

	/**
	 * Returns the value of the '<em><b>CreatebyName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>CreatebyName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>CreatebyName</em>' attribute.
	 * @see #setCreatebyName(java.lang.String)
	 */
	public String getCreatebyName();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getCreatebyName <em>CreatebyName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>CreatebyName</em>' attribute.
	 * @see #getCreatebyName()
	 */
	public void setCreatebyName(String createbyName);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getOrgid <em>Orgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgid</em>' attribute.
	 * @see #getOrgid()
	 */
	public void setOrgid(String orgid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getOrgname <em>Orgname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgname</em>' attribute.
	 * @see #getOrgname()
	 */
	public void setOrgname(String orgname);

	/**
	 * Returns the value of the '<em><b>Modifyby</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifyby</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifyby</em>' attribute.
	 * @see #setModifyby(java.lang.String)
	 */
	public String getModifyby();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getModifyby <em>Modifyby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifyby</em>' attribute.
	 * @see #getModifyby()
	 */
	public void setModifyby(String modifyby);

	/**
	 * Returns the value of the '<em><b>Modifytime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifytime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifytime</em>' attribute.
	 * @see #setModifytime(java.util.Date)
	 */
	public Date getModifytime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getModifytime <em>Modifytime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifytime</em>' attribute.
	 * @see #getModifytime()
	 */
	public void setModifytime(Date modifytime);

	/**
	 * Returns the value of the '<em><b>ModifybyName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ModifybyName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ModifybyName</em>' attribute.
	 * @see #setModifybyName(java.lang.String)
	 */
	public String getModifybyName();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getModifybyName <em>ModifybyName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ModifybyName</em>' attribute.
	 * @see #getModifybyName()
	 */
	public void setModifybyName(String modifybyName);

	/**
	 * Returns the value of the '<em><b>ModifyOrgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ModifyOrgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ModifyOrgid</em>' attribute.
	 * @see #setModifyOrgid(java.lang.String)
	 */
	public String getModifyOrgid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getModifyOrgid <em>ModifyOrgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ModifyOrgid</em>' attribute.
	 * @see #getModifyOrgid()
	 */
	public void setModifyOrgid(String modifyOrgid);

	/**
	 * Returns the value of the '<em><b>ModifyOorgname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ModifyOorgname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ModifyOorgname</em>' attribute.
	 * @see #setModifyOorgname(java.lang.String)
	 */
	public String getModifyOorgname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getModifyOorgname <em>ModifyOorgname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ModifyOorgname</em>' attribute.
	 * @see #getModifyOorgname()
	 */
	public void setModifyOorgname(String modifyOorgname);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getPhone <em>Phone</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Phone</em>' attribute.
	 * @see #getPhone()
	 */
	public void setPhone(String phone);

	/**
	 * Returns the value of the '<em><b>ProblemType</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ProblemType</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ProblemType</em>' attribute.
	 * @see #setProblemType(java.lang.String)
	 */
	public String getProblemType();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getProblemType <em>ProblemType</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ProblemType</em>' attribute.
	 * @see #getProblemType()
	 */
	public void setProblemType(String problemType);

	/**
	 * Returns the value of the '<em><b>Problem</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Problem</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Problem</em>' attribute.
	 * @see #setProblem(java.lang.String)
	 */
	public String getProblem();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getProblem <em>Problem</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Problem</em>' attribute.
	 * @see #getProblem()
	 */
	public void setProblem(String problem);

	/**
	 * Returns the value of the '<em><b>Productno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Productno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Productno</em>' attribute.
	 * @see #setProductno(java.lang.String)
	 */
	public String getProductno();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getProductno <em>Productno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Productno</em>' attribute.
	 * @see #getProductno()
	 */
	public void setProductno(String productno);

	/**
	 * Returns the value of the '<em><b>Matnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Matnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Matnr</em>' attribute.
	 * @see #setMatnr(java.lang.String)
	 */
	public String getMatnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getMatnr <em>Matnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matnr</em>' attribute.
	 * @see #getMatnr()
	 */
	public void setMatnr(String matnr);

	/**
	 * Returns the value of the '<em><b>Importance</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Importance</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Importance</em>' attribute.
	 * @see #setImportance(java.lang.String)
	 */
	public String getImportance();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getImportance <em>Importance</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Importance</em>' attribute.
	 * @see #getImportance()
	 */
	public void setImportance(String importance);

	/**
	 * Returns the value of the '<em><b>Effection</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Effection</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Effection</em>' attribute.
	 * @see #setEffection(java.lang.String)
	 */
	public String getEffection();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getEffection <em>Effection</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Effection</em>' attribute.
	 * @see #getEffection()
	 */
	public void setEffection(String effection);

	/**
	 * Returns the value of the '<em><b>Duty</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Duty</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Duty</em>' attribute.
	 * @see #setDuty(java.lang.String)
	 */
	public String getDuty();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getDuty <em>Duty</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Duty</em>' attribute.
	 * @see #getDuty()
	 */
	public void setDuty(String duty);

	/**
	 * Returns the value of the '<em><b>Remark</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Remark</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Remark</em>' attribute.
	 * @see #setRemark(java.lang.String)
	 */
	public String getRemark();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getRemark <em>Remark</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Remark</em>' attribute.
	 * @see #getRemark()
	 */
	public void setRemark(String remark);

	/**
	 * Returns the value of the '<em><b>Stand</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stand</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stand</em>' attribute.
	 * @see #setStand(java.lang.String)
	 */
	public String getStand();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechList#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand);


}