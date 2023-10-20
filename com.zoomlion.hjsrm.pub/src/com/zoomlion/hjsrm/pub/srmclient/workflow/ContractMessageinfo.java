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
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getMiid <em>Miid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getMessagetype <em>Messagetype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getSendbyName <em>SendbyName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getSendbyUserid <em>SendbyUserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getSenddate <em>Senddate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getMsgcontent <em>Msgcontent</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getContractid <em>Contractid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getProcessinstid <em>Processinstid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getReceiveName <em>ReceiveName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getReceiveUserid <em>ReceiveUserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getReceivePhone <em>ReceivePhone</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface ContractMessageinfo extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.srmclient.workflow", "ContractMessageinfo");

	public final static IObjectFactory<ContractMessageinfo> FACTORY = new IObjectFactory<ContractMessageinfo>() {
		public ContractMessageinfo create() {
			return (ContractMessageinfo) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Miid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Miid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Miid</em>' attribute.
	 * @see #setMiid(long)
	 */
	public long getMiid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getMiid <em>Miid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Miid</em>' attribute.
	 * @see #getMiid()
	 */
	public void setMiid(long miid);

	/**
	 * Returns the value of the '<em><b>Messagetype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Messagetype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Messagetype</em>' attribute.
	 * @see #setMessagetype(java.lang.String)
	 */
	public String getMessagetype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getMessagetype <em>Messagetype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Messagetype</em>' attribute.
	 * @see #getMessagetype()
	 */
	public void setMessagetype(String messagetype);

	/**
	 * Returns the value of the '<em><b>SendbyName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>SendbyName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>SendbyName</em>' attribute.
	 * @see #setSendbyName(java.lang.String)
	 */
	public String getSendbyName();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getSendbyName <em>SendbyName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>SendbyName</em>' attribute.
	 * @see #getSendbyName()
	 */
	public void setSendbyName(String sendbyName);

	/**
	 * Returns the value of the '<em><b>SendbyUserid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>SendbyUserid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>SendbyUserid</em>' attribute.
	 * @see #setSendbyUserid(java.lang.String)
	 */
	public String getSendbyUserid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getSendbyUserid <em>SendbyUserid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>SendbyUserid</em>' attribute.
	 * @see #getSendbyUserid()
	 */
	public void setSendbyUserid(String sendbyUserid);

	/**
	 * Returns the value of the '<em><b>Senddate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Senddate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Senddate</em>' attribute.
	 * @see #setSenddate(java.util.Date)
	 */
	public Date getSenddate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getSenddate <em>Senddate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Senddate</em>' attribute.
	 * @see #getSenddate()
	 */
	public void setSenddate(Date senddate);

	/**
	 * Returns the value of the '<em><b>Msgcontent</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Msgcontent</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Msgcontent</em>' attribute.
	 * @see #setMsgcontent(java.lang.String)
	 */
	public String getMsgcontent();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getMsgcontent <em>Msgcontent</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Msgcontent</em>' attribute.
	 * @see #getMsgcontent()
	 */
	public void setMsgcontent(String msgcontent);

	/**
	 * Returns the value of the '<em><b>Contractid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Contractid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Contractid</em>' attribute.
	 * @see #setContractid(java.lang.String)
	 */
	public String getContractid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getContractid <em>Contractid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Contractid</em>' attribute.
	 * @see #getContractid()
	 */
	public void setContractid(String contractid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getProcessinstid <em>Processinstid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Processinstid</em>' attribute.
	 * @see #getProcessinstid()
	 */
	public void setProcessinstid(String processinstid);

	/**
	 * Returns the value of the '<em><b>ReceiveName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ReceiveName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ReceiveName</em>' attribute.
	 * @see #setReceiveName(java.lang.String)
	 */
	public String getReceiveName();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getReceiveName <em>ReceiveName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ReceiveName</em>' attribute.
	 * @see #getReceiveName()
	 */
	public void setReceiveName(String receiveName);

	/**
	 * Returns the value of the '<em><b>ReceiveUserid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ReceiveUserid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ReceiveUserid</em>' attribute.
	 * @see #setReceiveUserid(java.lang.String)
	 */
	public String getReceiveUserid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getReceiveUserid <em>ReceiveUserid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ReceiveUserid</em>' attribute.
	 * @see #getReceiveUserid()
	 */
	public void setReceiveUserid(String receiveUserid);

	/**
	 * Returns the value of the '<em><b>ReceivePhone</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ReceivePhone</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ReceivePhone</em>' attribute.
	 * @see #setReceivePhone(java.lang.String)
	 */
	public String getReceivePhone();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.ContractMessageinfo#getReceivePhone <em>ReceivePhone</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ReceivePhone</em>' attribute.
	 * @see #getReceivePhone()
	 */
	public void setReceivePhone(String receivePhone);


}