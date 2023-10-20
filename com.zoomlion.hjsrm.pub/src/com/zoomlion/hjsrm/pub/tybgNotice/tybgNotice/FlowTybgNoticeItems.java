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
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getItemsId <em>ItemsId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getItemsName <em>ItemsName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getItmesCode <em>ItmesCode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getActionsPersonName <em>ActionsPersonName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getActionsPersonId <em>ActionsPersonId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getActionsText <em>ActionsText</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getActonsTime <em>ActonsTime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getOperationId <em>OperationId</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface FlowTybgNoticeItems extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice", "FlowTybgNoticeItems");

	public final static IObjectFactory<FlowTybgNoticeItems> FACTORY = new IObjectFactory<FlowTybgNoticeItems>() {
		public FlowTybgNoticeItems create() {
			return (FlowTybgNoticeItems) DataFactory.INSTANCE.create(TYPE);
		}
	};

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
	public String getItemsId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getItemsId <em>ItemsId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ItemsId</em>' attribute.
	 * @see #getItemsId()
	 */
	public void setItemsId(String itemsId);

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
	public String getItemsName();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getItemsName <em>ItemsName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ItemsName</em>' attribute.
	 * @see #getItemsName()
	 */
	public void setItemsName(String itemsName);

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
	public String getItmesCode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getItmesCode <em>ItmesCode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ItmesCode</em>' attribute.
	 * @see #getItmesCode()
	 */
	public void setItmesCode(String itmesCode);

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
	public String getActionsPersonName();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getActionsPersonName <em>ActionsPersonName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ActionsPersonName</em>' attribute.
	 * @see #getActionsPersonName()
	 */
	public void setActionsPersonName(String actionsPersonName);

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
	public String getActionsPersonId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getActionsPersonId <em>ActionsPersonId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ActionsPersonId</em>' attribute.
	 * @see #getActionsPersonId()
	 */
	public void setActionsPersonId(String actionsPersonId);

	/**
	 * Returns the value of the '<em><b>ActionsText</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ActionsText</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ActionsText</em>' attribute.
	 * @see #setActionsText(java.lang.String)
	 */
	public String getActionsText();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getActionsText <em>ActionsText</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ActionsText</em>' attribute.
	 * @see #getActionsText()
	 */
	public void setActionsText(String actionsText);

	/**
	 * Returns the value of the '<em><b>ActonsTime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ActonsTime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ActonsTime</em>' attribute.
	 * @see #setActonsTime(java.util.Date)
	 */
	public Date getActonsTime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getActonsTime <em>ActonsTime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ActonsTime</em>' attribute.
	 * @see #getActonsTime()
	 */
	public void setActonsTime(Date actonsTime);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getProcessinstid <em>Processinstid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processinstid</em>' attribute.
	 * @see #getProcessinstid()
	 */
	public void setProcessinstid(String processinstid);

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
	public String getOperationId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.tybgNotice.tybgNotice.FlowTybgNoticeItems#getOperationId <em>OperationId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>OperationId</em>' attribute.
	 * @see #getOperationId()
	 */
	public void setOperationId(String operationId);


}