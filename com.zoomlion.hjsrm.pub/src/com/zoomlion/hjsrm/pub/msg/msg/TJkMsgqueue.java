/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.msg.msg;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getMsgtemplatepkid <em>Msgtemplatepkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getContent <em>Content</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getAppointmenttime <em>Appointmenttime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getProcurationtime <em>Procurationtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getReceiverid <em>Receiverid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getReceiver <em>Receiver</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getReceiverno <em>Receiverno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TJkMsgqueue extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.msg.msg", "TJkMsgqueue");

	public final static IObjectFactory<TJkMsgqueue> FACTORY = new IObjectFactory<TJkMsgqueue>() {
		public TJkMsgqueue create() {
			return (TJkMsgqueue) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Pkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Pkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Pkid</em>' attribute.
	 * @see #setPkid(java.lang.String)
	 */
	public String getPkid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getPkid <em>Pkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pkid</em>' attribute.
	 * @see #getPkid()
	 */
	public void setPkid(String pkid);

	/**
	 * Returns the value of the '<em><b>Msgtemplatepkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Msgtemplatepkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Msgtemplatepkid</em>' attribute.
	 * @see #setMsgtemplatepkid(java.lang.String)
	 */
	public String getMsgtemplatepkid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getMsgtemplatepkid <em>Msgtemplatepkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Msgtemplatepkid</em>' attribute.
	 * @see #getMsgtemplatepkid()
	 */
	public void setMsgtemplatepkid(String msgtemplatepkid);

	/**
	 * Returns the value of the '<em><b>Content</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Content</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Content</em>' attribute.
	 * @see #setContent(java.lang.String)
	 */
	public String getContent();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getContent <em>Content</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Content</em>' attribute.
	 * @see #getContent()
	 */
	public void setContent(String content);

	/**
	 * Returns the value of the '<em><b>Appointmenttime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Appointmenttime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Appointmenttime</em>' attribute.
	 * @see #setAppointmenttime(java.util.Date)
	 */
	public Date getAppointmenttime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getAppointmenttime <em>Appointmenttime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Appointmenttime</em>' attribute.
	 * @see #getAppointmenttime()
	 */
	public void setAppointmenttime(Date appointmenttime);

	/**
	 * Returns the value of the '<em><b>Procurationtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Procurationtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Procurationtime</em>' attribute.
	 * @see #setProcurationtime(java.util.Date)
	 */
	public Date getProcurationtime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getProcurationtime <em>Procurationtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Procurationtime</em>' attribute.
	 * @see #getProcurationtime()
	 */
	public void setProcurationtime(Date procurationtime);

	/**
	 * Returns the value of the '<em><b>Receiverid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Receiverid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Receiverid</em>' attribute.
	 * @see #setReceiverid(java.lang.String)
	 */
	public String getReceiverid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getReceiverid <em>Receiverid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Receiverid</em>' attribute.
	 * @see #getReceiverid()
	 */
	public void setReceiverid(String receiverid);

	/**
	 * Returns the value of the '<em><b>Receiver</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Receiver</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Receiver</em>' attribute.
	 * @see #setReceiver(java.lang.String)
	 */
	public String getReceiver();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getReceiver <em>Receiver</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Receiver</em>' attribute.
	 * @see #getReceiver()
	 */
	public void setReceiver(String receiver);

	/**
	 * Returns the value of the '<em><b>Receiverno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Receiverno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Receiverno</em>' attribute.
	 * @see #setReceiverno(java.lang.String)
	 */
	public String getReceiverno();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getReceiverno <em>Receiverno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Receiverno</em>' attribute.
	 * @see #getReceiverno()
	 */
	public void setReceiverno(String receiverno);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getCreateby <em>Createby</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getCreatetime <em>Createtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createtime</em>' attribute.
	 * @see #getCreatetime()
	 */
	public void setCreatetime(Date createtime);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getModifyby <em>Modifyby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifyby</em>' attribute.
	 * @see #getModifyby()
	 */
	public void setModifyby(String modifyby);

	/**
	 * Returns the value of the '<em><b>Updatetime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Updatetime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Updatetime</em>' attribute.
	 * @see #setUpdatetime(java.util.Date)
	 */
	public Date getUpdatetime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getUpdatetime <em>Updatetime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Updatetime</em>' attribute.
	 * @see #getUpdatetime()
	 */
	public void setUpdatetime(Date updatetime);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);


}