/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.srmclient.workflow.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.srmclient.workflow.EsHasten;

import commonj.sdo.Type;

import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsHastenImpl#getEshastenid <em>Eshastenid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsHastenImpl#getWorkitemid <em>Workitemid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsHastenImpl#getHastenerid <em>Hastenerid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsHastenImpl#getHastenername <em>Hastenername</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsHastenImpl#getHastentime <em>Hastentime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.impl.EsHastenImpl#getHastenstate <em>Hastenstate</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements EsHasten;
 */

public class EsHastenImpl extends ExtendedDataObjectImpl implements EsHasten {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_ESHASTENID = 0;
	public final static int INDEX_WORKITEMID = 1;
	public final static int INDEX_HASTENERID = 2;
	public final static int INDEX_HASTENERNAME = 3;
	public final static int INDEX_HASTENTIME = 4;
	public final static int INDEX_HASTENSTATE = 5;
	public final static int SDO_PROPERTY_COUNT = 6;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public EsHastenImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public EsHastenImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

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
	public String getEshastenid() {
		return DataUtil.toString(super.getByIndex(INDEX_ESHASTENID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEshastenid <em>Eshastenid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Eshastenid</em>' attribute.
	 * @see #getEshastenid()
	 */
	public void setEshastenid(String eshastenid) {
		super.setByIndex(INDEX_ESHASTENID, eshastenid);
	}

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
	public String getWorkitemid() {
		return DataUtil.toString(super.getByIndex(INDEX_WORKITEMID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWorkitemid <em>Workitemid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Workitemid</em>' attribute.
	 * @see #getWorkitemid()
	 */
	public void setWorkitemid(String workitemid) {
		super.setByIndex(INDEX_WORKITEMID, workitemid);
	}

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
	public String getHastenerid() {
		return DataUtil.toString(super.getByIndex(INDEX_HASTENERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getHastenerid <em>Hastenerid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hastenerid</em>' attribute.
	 * @see #getHastenerid()
	 */
	public void setHastenerid(String hastenerid) {
		super.setByIndex(INDEX_HASTENERID, hastenerid);
	}

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
	public String getHastenername() {
		return DataUtil.toString(super.getByIndex(INDEX_HASTENERNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getHastenername <em>Hastenername</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hastenername</em>' attribute.
	 * @see #getHastenername()
	 */
	public void setHastenername(String hastenername) {
		super.setByIndex(INDEX_HASTENERNAME, hastenername);
	}

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
	public Date getHastentime() {
		return DataUtil.toDate(super.getByIndex(INDEX_HASTENTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getHastentime <em>Hastentime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hastentime</em>' attribute.
	 * @see #getHastentime()
	 */
	public void setHastentime(Date hastentime) {
		super.setByIndex(INDEX_HASTENTIME, hastentime);
	}

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
	public String getHastenstate() {
		return DataUtil.toString(super.getByIndex(INDEX_HASTENSTATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getHastenstate <em>Hastenstate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hastenstate</em>' attribute.
	 * @see #getHastenstate()
	 */
	public void setHastenstate(String hastenstate) {
		super.setByIndex(INDEX_HASTENSTATE, hastenstate);
	}


}