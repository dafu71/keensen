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
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperconfig#getOperatorid <em>Operatorid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperconfig#getConfigname <em>Configname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperconfig#getConfigvalue <em>Configvalue</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperconfig#getConfigtype <em>Configtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperconfig#getIsvalid <em>Isvalid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperconfig#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TAcOperconfig extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperconfig";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.data.rights.RightsCtrl", "TAcOperconfig");

	public final static IObjectFactory<TAcOperconfig> FACTORY = new IObjectFactory<TAcOperconfig>() {
		public TAcOperconfig create() {
			return (TAcOperconfig) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Operatorid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operatorid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operatorid</em>' attribute.
	 * @see #setOperatorid(long)
	 */
	public long getOperatorid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperconfig#getOperatorid <em>Operatorid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operatorid</em>' attribute.
	 * @see #getOperatorid()
	 */
	public void setOperatorid(long operatorid);

	/**
	 * Returns the value of the '<em><b>Configname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Configname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Configname</em>' attribute.
	 * @see #setConfigname(java.lang.String)
	 */
	public String getConfigname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperconfig#getConfigname <em>Configname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Configname</em>' attribute.
	 * @see #getConfigname()
	 */
	public void setConfigname(String configname);

	/**
	 * Returns the value of the '<em><b>Configvalue</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Configvalue</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Configvalue</em>' attribute.
	 * @see #setConfigvalue(java.lang.String)
	 */
	public String getConfigvalue();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperconfig#getConfigvalue <em>Configvalue</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Configvalue</em>' attribute.
	 * @see #getConfigvalue()
	 */
	public void setConfigvalue(String configvalue);

	/**
	 * Returns the value of the '<em><b>Configtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Configtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Configtype</em>' attribute.
	 * @see #setConfigtype(java.lang.String)
	 */
	public String getConfigtype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperconfig#getConfigtype <em>Configtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Configtype</em>' attribute.
	 * @see #getConfigtype()
	 */
	public void setConfigtype(String configtype);

	/**
	 * Returns the value of the '<em><b>Isvalid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isvalid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isvalid</em>' attribute.
	 * @see #setIsvalid(java.lang.String)
	 */
	public String getIsvalid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperconfig#getIsvalid <em>Isvalid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isvalid</em>' attribute.
	 * @see #getIsvalid()
	 */
	public void setIsvalid(String isvalid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcOperconfig#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);


}