/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.tools.Tools;

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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getMessageid <em>Messageid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getMessage <em>Message</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getMobileno <em>Mobileno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getSendtime <em>Sendtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getSendtimes <em>Sendtimes</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getStatus <em>Status</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getSendtype <em>Sendtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getOrdertimestr <em>Ordertimestr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getSendstatus <em>Sendstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getSendstatustext <em>Sendstatustext</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getRecvstatus <em>Recvstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getRecvstatustext <em>Recvstatustext</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getSendmobileno <em>Sendmobileno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getSmsgmessageid <em>Smsgmessageid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getInserttime <em>Inserttime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TAtSmssend extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.data.tools.Tools", "TAtSmssend");

	public final static IObjectFactory<TAtSmssend> FACTORY = new IObjectFactory<TAtSmssend>() {
		public TAtSmssend create() {
			return (TAtSmssend) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getMessageid <em>Messageid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getMessage <em>Message</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getMobileno <em>Mobileno</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getSendtime <em>Sendtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendtime</em>' attribute.
	 * @see #getSendtime()
	 */
	public void setSendtime(Date sendtime);

	/**
	 * Returns the value of the '<em><b>Sendtimes</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sendtimes</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sendtimes</em>' attribute.
	 * @see #setSendtimes(long)
	 */
	public long getSendtimes();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getSendtimes <em>Sendtimes</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendtimes</em>' attribute.
	 * @see #getSendtimes()
	 */
	public void setSendtimes(long sendtimes);

	/**
	 * Returns the value of the '<em><b>Status</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Status</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Status</em>' attribute.
	 * @see #setStatus(long)
	 */
	public long getStatus();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getStatus <em>Status</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Status</em>' attribute.
	 * @see #getStatus()
	 */
	public void setStatus(long status);

	/**
	 * Returns the value of the '<em><b>Sendtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sendtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sendtype</em>' attribute.
	 * @see #setSendtype(long)
	 */
	public long getSendtype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getSendtype <em>Sendtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendtype</em>' attribute.
	 * @see #getSendtype()
	 */
	public void setSendtype(long sendtype);

	/**
	 * Returns the value of the '<em><b>Ordertimestr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ordertimestr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ordertimestr</em>' attribute.
	 * @see #setOrdertimestr(java.lang.String)
	 */
	public String getOrdertimestr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getOrdertimestr <em>Ordertimestr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ordertimestr</em>' attribute.
	 * @see #getOrdertimestr()
	 */
	public void setOrdertimestr(String ordertimestr);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getSendstatus <em>Sendstatus</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getSendstatustext <em>Sendstatustext</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getRecvstatus <em>Recvstatus</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getRecvstatustext <em>Recvstatustext</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getSendmobileno <em>Sendmobileno</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getSmsgmessageid <em>Smsgmessageid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getInserttime <em>Inserttime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Inserttime</em>' attribute.
	 * @see #getInserttime()
	 */
	public void setInserttime(Date inserttime);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSmssend#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);


}