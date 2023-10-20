/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.rights.RightsCtrl;

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
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel#getSnid <em>Snid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel#getRelid <em>Relid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel#getOrgid <em>Orgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel#getBusiitemid <em>Busiitemid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel#getRoleid <em>Roleid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel#getRighttype <em>Righttype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TAcRoledataorgrel extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.data.rights.RightsCtrl", "TAcRoledataorgrel");

	public final static IObjectFactory<TAcRoledataorgrel> FACTORY = new IObjectFactory<TAcRoledataorgrel>() {
		public TAcRoledataorgrel create() {
			return (TAcRoledataorgrel) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Snid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Snid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Snid</em>' attribute.
	 * @see #setSnid(int)
	 */
	public int getSnid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel#getSnid <em>Snid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Snid</em>' attribute.
	 * @see #getSnid()
	 */
	public void setSnid(int snid);

	/**
	 * Returns the value of the '<em><b>Relid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Relid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Relid</em>' attribute.
	 * @see #setRelid(int)
	 */
	public int getRelid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel#getRelid <em>Relid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Relid</em>' attribute.
	 * @see #getRelid()
	 */
	public void setRelid(int relid);

	/**
	 * Returns the value of the '<em><b>Orgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Orgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Orgid</em>' attribute.
	 * @see #setOrgid(int)
	 */
	public int getOrgid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel#getOrgid <em>Orgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgid</em>' attribute.
	 * @see #getOrgid()
	 */
	public void setOrgid(int orgid);

	/**
	 * Returns the value of the '<em><b>Busiitemid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Busiitemid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Busiitemid</em>' attribute.
	 * @see #setBusiitemid(java.lang.String)
	 */
	public String getBusiitemid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel#getBusiitemid <em>Busiitemid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busiitemid</em>' attribute.
	 * @see #getBusiitemid()
	 */
	public void setBusiitemid(String busiitemid);

	/**
	 * Returns the value of the '<em><b>Roleid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Roleid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Roleid</em>' attribute.
	 * @see #setRoleid(int)
	 */
	public int getRoleid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel#getRoleid <em>Roleid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Roleid</em>' attribute.
	 * @see #getRoleid()
	 */
	public void setRoleid(int roleid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel#getRemark <em>Remark</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Remark</em>' attribute.
	 * @see #getRemark()
	 */
	public void setRemark(String remark);

	/**
	 * Returns the value of the '<em><b>Righttype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Righttype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Righttype</em>' attribute.
	 * @see #setRighttype(java.lang.String)
	 */
	public String getRighttype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel#getRighttype <em>Righttype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Righttype</em>' attribute.
	 * @see #getRighttype()
	 */
	public void setRighttype(String righttype);

	/**
	 * Returns the value of the '<em><b>Dataorgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Dataorgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Dataorgid</em>' attribute.
	 * @see #setDataorgid(int)
	 */
	public int getDataorgid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcRoledataorgrel#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);


}