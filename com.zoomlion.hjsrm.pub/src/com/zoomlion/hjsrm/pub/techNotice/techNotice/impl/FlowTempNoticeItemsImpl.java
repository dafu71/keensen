/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.techNotice.techNotice.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.techNotice.techNotice.FlowTempNoticeItems;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTempNoticeItemsImpl#getItemsId <em>ItemsId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTempNoticeItemsImpl#getItemsName <em>ItemsName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTempNoticeItemsImpl#getItmesCode <em>ItmesCode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTempNoticeItemsImpl#getActionsPersonName <em>ActionsPersonName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTempNoticeItemsImpl#getActionsPersonId <em>ActionsPersonId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTempNoticeItemsImpl#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTempNoticeItemsImpl#getOperationId <em>OperationId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.techNotice.techNotice.impl.FlowTempNoticeItemsImpl#getFlowId <em>FlowId</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements FlowTempNoticeItems;
 */

public class FlowTempNoticeItemsImpl extends ExtendedDataObjectImpl implements FlowTempNoticeItems {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_ITEMSID = 0;
	public final static int INDEX_ITEMSNAME = 1;
	public final static int INDEX_ITMESCODE = 2;
	public final static int INDEX_ACTIONSPERSONNAME = 3;
	public final static int INDEX_ACTIONSPERSONID = 4;
	public final static int INDEX_PROCESSINSTID = 5;
	public final static int INDEX_OPERATIONID = 6;
	public final static int INDEX_FLOWID = 7;
	public final static int SDO_PROPERTY_COUNT = 8;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public FlowTempNoticeItemsImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public FlowTempNoticeItemsImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>ItemsId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ItemsId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ItemsId</em>' attribute.
	 * @see #setItemsId(java.lang.String)
	 */
	public String getItemsId() {
		return DataUtil.toString(super.getByIndex(INDEX_ITEMSID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getItemsId <em>ItemsId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ItemsId</em>' attribute.
	 * @see #getItemsId()
	 */
	public void setItemsId(String itemsId) {
		super.setByIndex(INDEX_ITEMSID, itemsId);
	}

	/**
	 * Returns the value of the '<em><b>ItemsName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ItemsName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ItemsName</em>' attribute.
	 * @see #setItemsName(java.lang.String)
	 */
	public String getItemsName() {
		return DataUtil.toString(super.getByIndex(INDEX_ITEMSNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getItemsName <em>ItemsName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ItemsName</em>' attribute.
	 * @see #getItemsName()
	 */
	public void setItemsName(String itemsName) {
		super.setByIndex(INDEX_ITEMSNAME, itemsName);
	}

	/**
	 * Returns the value of the '<em><b>ItmesCode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ItmesCode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ItmesCode</em>' attribute.
	 * @see #setItmesCode(java.lang.String)
	 */
	public String getItmesCode() {
		return DataUtil.toString(super.getByIndex(INDEX_ITMESCODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getItmesCode <em>ItmesCode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ItmesCode</em>' attribute.
	 * @see #getItmesCode()
	 */
	public void setItmesCode(String itmesCode) {
		super.setByIndex(INDEX_ITMESCODE, itmesCode);
	}

	/**
	 * Returns the value of the '<em><b>ActionsPersonName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ActionsPersonName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ActionsPersonName</em>' attribute.
	 * @see #setActionsPersonName(java.lang.String)
	 */
	public String getActionsPersonName() {
		return DataUtil.toString(super.getByIndex(INDEX_ACTIONSPERSONNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getActionsPersonName <em>ActionsPersonName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ActionsPersonName</em>' attribute.
	 * @see #getActionsPersonName()
	 */
	public void setActionsPersonName(String actionsPersonName) {
		super.setByIndex(INDEX_ACTIONSPERSONNAME, actionsPersonName);
	}

	/**
	 * Returns the value of the '<em><b>ActionsPersonId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ActionsPersonId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ActionsPersonId</em>' attribute.
	 * @see #setActionsPersonId(java.lang.String)
	 */
	public String getActionsPersonId() {
		return DataUtil.toString(super.getByIndex(INDEX_ACTIONSPERSONID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getActionsPersonId <em>ActionsPersonId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ActionsPersonId</em>' attribute.
	 * @see #getActionsPersonId()
	 */
	public void setActionsPersonId(String actionsPersonId) {
		super.setByIndex(INDEX_ACTIONSPERSONID, actionsPersonId);
	}

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
	public String getProcessinstid() {
		return DataUtil.toString(super.getByIndex(INDEX_PROCESSINSTID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getProcessinstid <em>Processinstid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processinstid</em>' attribute.
	 * @see #getProcessinstid()
	 */
	public void setProcessinstid(String processinstid) {
		super.setByIndex(INDEX_PROCESSINSTID, processinstid);
	}

	/**
	 * Returns the value of the '<em><b>OperationId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>OperationId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>OperationId</em>' attribute.
	 * @see #setOperationId(java.lang.String)
	 */
	public String getOperationId() {
		return DataUtil.toString(super.getByIndex(INDEX_OPERATIONID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOperationId <em>OperationId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>OperationId</em>' attribute.
	 * @see #getOperationId()
	 */
	public void setOperationId(String operationId) {
		super.setByIndex(INDEX_OPERATIONID, operationId);
	}

	/**
	 * Returns the value of the '<em><b>FlowId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>FlowId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>FlowId</em>' attribute.
	 * @see #setFlowId(long)
	 */
	public long getFlowId() {
		return DataUtil.toLong(super.getByIndex(INDEX_FLOWID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFlowId <em>FlowId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FlowId</em>' attribute.
	 * @see #getFlowId()
	 */
	public void setFlowId(long flowId) {
		super.setByIndex(INDEX_FLOWID, flowId);
	}


}