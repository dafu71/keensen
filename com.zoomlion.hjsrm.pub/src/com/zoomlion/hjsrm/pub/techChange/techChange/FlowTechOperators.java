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

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getOptId <em>OptId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getTechId <em>TechId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getRolecode <em>Rolecode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getRolename <em>Rolename</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getUsername <em>Username</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getStand <em>Stand</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface FlowTechOperators extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.techChange.techChange", "FlowTechOperators");

	public final static IObjectFactory<FlowTechOperators> FACTORY = new IObjectFactory<FlowTechOperators>() {
		public FlowTechOperators create() {
			return (FlowTechOperators) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>OptId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>OptId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>OptId</em>' attribute.
	 * @see #setOptId(java.lang.String)
	 */
	public String getOptId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getOptId <em>OptId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>OptId</em>' attribute.
	 * @see #getOptId()
	 */
	public void setOptId(String optId);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getTechId <em>TechId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>TechId</em>' attribute.
	 * @see #getTechId()
	 */
	public void setTechId(String techId);

	/**
	 * Returns the value of the '<em><b>Rolecode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Rolecode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Rolecode</em>' attribute.
	 * @see #setRolecode(java.lang.String)
	 */
	public String getRolecode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getRolecode <em>Rolecode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Rolecode</em>' attribute.
	 * @see #getRolecode()
	 */
	public void setRolecode(String rolecode);

	/**
	 * Returns the value of the '<em><b>Rolename</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Rolename</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Rolename</em>' attribute.
	 * @see #setRolename(java.lang.String)
	 */
	public String getRolename();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getRolename <em>Rolename</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Rolename</em>' attribute.
	 * @see #getRolename()
	 */
	public void setRolename(String rolename);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getUserid <em>Userid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getUsername <em>Username</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Username</em>' attribute.
	 * @see #getUsername()
	 */
	public void setUsername(String username);

	/**
	 * Returns the value of the '<em><b>Delflag</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Delflag</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Delflag</em>' attribute.
	 * @see #setDelflag(java.lang.String)
	 */
	public String getDelflag();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getDelflag <em>Delflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Delflag</em>' attribute.
	 * @see #getDelflag()
	 */
	public void setDelflag(String delflag);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getRemark <em>Remark</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.techChange.techChange.FlowTechOperators#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand);


}