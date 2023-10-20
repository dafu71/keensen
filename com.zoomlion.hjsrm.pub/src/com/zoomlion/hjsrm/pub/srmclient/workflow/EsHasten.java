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
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsHasten#getEshastenid <em>Eshastenid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsHasten#getWorkitemid <em>Workitemid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsHasten#getHastenerid <em>Hastenerid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsHasten#getHastenername <em>Hastenername</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsHasten#getHastentime <em>Hastentime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsHasten#getHastenstate <em>Hastenstate</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface EsHasten extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.srmclient.workflow.EsHasten";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.srmclient.workflow", "EsHasten");

	public final static IObjectFactory<EsHasten> FACTORY = new IObjectFactory<EsHasten>() {
		public EsHasten create() {
			return (EsHasten) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Eshastenid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Eshastenid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Eshastenid</em>' attribute.
	 * @see #setEshastenid(java.lang.String)
	 */
	public String getEshastenid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsHasten#getEshastenid <em>Eshastenid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Eshastenid</em>' attribute.
	 * @see #getEshastenid()
	 */
	public void setEshastenid(String eshastenid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsHasten#getWorkitemid <em>Workitemid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Workitemid</em>' attribute.
	 * @see #getWorkitemid()
	 */
	public void setWorkitemid(String workitemid);

	/**
	 * Returns the value of the '<em><b>Hastenerid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hastenerid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hastenerid</em>' attribute.
	 * @see #setHastenerid(java.lang.String)
	 */
	public String getHastenerid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsHasten#getHastenerid <em>Hastenerid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hastenerid</em>' attribute.
	 * @see #getHastenerid()
	 */
	public void setHastenerid(String hastenerid);

	/**
	 * Returns the value of the '<em><b>Hastenername</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hastenername</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hastenername</em>' attribute.
	 * @see #setHastenername(java.lang.String)
	 */
	public String getHastenername();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsHasten#getHastenername <em>Hastenername</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hastenername</em>' attribute.
	 * @see #getHastenername()
	 */
	public void setHastenername(String hastenername);

	/**
	 * Returns the value of the '<em><b>Hastentime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hastentime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hastentime</em>' attribute.
	 * @see #setHastentime(java.util.Date)
	 */
	public Date getHastentime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsHasten#getHastentime <em>Hastentime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hastentime</em>' attribute.
	 * @see #getHastentime()
	 */
	public void setHastentime(Date hastentime);

	/**
	 * Returns the value of the '<em><b>Hastenstate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hastenstate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hastenstate</em>' attribute.
	 * @see #setHastenstate(java.lang.String)
	 */
	public String getHastenstate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsHasten#getHastenstate <em>Hastenstate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hastenstate</em>' attribute.
	 * @see #getHastenstate()
	 */
	public void setHastenstate(String hastenstate);


}