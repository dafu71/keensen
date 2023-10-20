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
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getMessageid <em>Messageid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getMessage <em>Message</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getMobileno <em>Mobileno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getSendtime <em>Sendtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getSendstatus <em>Sendstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getSendstatustext <em>Sendstatustext</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getRecvstatus <em>Recvstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getRecvstatustext <em>Recvstatustext</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getSendmobileno <em>Sendmobileno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getSmsgmessageid <em>Smsgmessageid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getInserttime <em>Inserttime</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface SmsSend extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.srmclient.workflow", "SmsSend");

	public final static IObjectFactory<SmsSend> FACTORY = new IObjectFactory<SmsSend>() {
		public SmsSend create() {
			return (SmsSend) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Messageid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Messageid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Messageid</em>' attribute.
	 * @see #setMessageid(long)
	 */
	public long getMessageid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getMessageid <em>Messageid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Messageid</em>' attribute.
	 * @see #getMessageid()
	 */
	public void setMessageid(long messageid);

	/**
	 * Returns the value of the '<em><b>Message</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Message</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Message</em>' attribute.
	 * @see #setMessage(java.lang.String)
	 */
	public String getMessage();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getMessage <em>Message</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Message</em>' attribute.
	 * @see #getMessage()
	 */
	public void setMessage(String message);

	/**
	 * Returns the value of the '<em><b>Mobileno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mobileno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mobileno</em>' attribute.
	 * @see #setMobileno(java.lang.String)
	 */
	public String getMobileno();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getMobileno <em>Mobileno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mobileno</em>' attribute.
	 * @see #getMobileno()
	 */
	public void setMobileno(String mobileno);

	/**
	 * Returns the value of the '<em><b>Sendtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sendtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sendtime</em>' attribute.
	 * @see #setSendtime(java.util.Date)
	 */
	public Date getSendtime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getSendtime <em>Sendtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendtime</em>' attribute.
	 * @see #getSendtime()
	 */
	public void setSendtime(Date sendtime);

	/**
	 * Returns the value of the '<em><b>Sendstatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sendstatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sendstatus</em>' attribute.
	 * @see #setSendstatus(java.lang.String)
	 */
	public String getSendstatus();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getSendstatus <em>Sendstatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendstatus</em>' attribute.
	 * @see #getSendstatus()
	 */
	public void setSendstatus(String sendstatus);

	/**
	 * Returns the value of the '<em><b>Sendstatustext</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sendstatustext</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sendstatustext</em>' attribute.
	 * @see #setSendstatustext(java.lang.String)
	 */
	public String getSendstatustext();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getSendstatustext <em>Sendstatustext</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendstatustext</em>' attribute.
	 * @see #getSendstatustext()
	 */
	public void setSendstatustext(String sendstatustext);

	/**
	 * Returns the value of the '<em><b>Recvstatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recvstatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recvstatus</em>' attribute.
	 * @see #setRecvstatus(java.lang.String)
	 */
	public String getRecvstatus();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getRecvstatus <em>Recvstatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recvstatus</em>' attribute.
	 * @see #getRecvstatus()
	 */
	public void setRecvstatus(String recvstatus);

	/**
	 * Returns the value of the '<em><b>Recvstatustext</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recvstatustext</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recvstatustext</em>' attribute.
	 * @see #setRecvstatustext(java.lang.String)
	 */
	public String getRecvstatustext();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getRecvstatustext <em>Recvstatustext</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recvstatustext</em>' attribute.
	 * @see #getRecvstatustext()
	 */
	public void setRecvstatustext(String recvstatustext);

	/**
	 * Returns the value of the '<em><b>Sendmobileno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sendmobileno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sendmobileno</em>' attribute.
	 * @see #setSendmobileno(java.lang.String)
	 */
	public String getSendmobileno();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getSendmobileno <em>Sendmobileno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendmobileno</em>' attribute.
	 * @see #getSendmobileno()
	 */
	public void setSendmobileno(String sendmobileno);

	/**
	 * Returns the value of the '<em><b>Smsgmessageid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Smsgmessageid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Smsgmessageid</em>' attribute.
	 * @see #setSmsgmessageid(java.lang.String)
	 */
	public String getSmsgmessageid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getSmsgmessageid <em>Smsgmessageid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Smsgmessageid</em>' attribute.
	 * @see #getSmsgmessageid()
	 */
	public void setSmsgmessageid(String smsgmessageid);

	/**
	 * Returns the value of the '<em><b>Inserttime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Inserttime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Inserttime</em>' attribute.
	 * @see #setInserttime(java.util.Date)
	 */
	public Date getInserttime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.SmsSend#getInserttime <em>Inserttime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Inserttime</em>' attribute.
	 * @see #getInserttime()
	 */
	public void setInserttime(Date inserttime);


}