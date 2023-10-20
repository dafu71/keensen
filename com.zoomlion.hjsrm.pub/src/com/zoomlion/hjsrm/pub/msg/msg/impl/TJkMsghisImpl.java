/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.msg.msg.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.msg.msg.TJkMsghis;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.impl.TJkMsghisImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.impl.TJkMsghisImpl#getContent <em>Content</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.impl.TJkMsghisImpl#getAppointmenttime <em>Appointmenttime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.impl.TJkMsghisImpl#getProcurationtime <em>Procurationtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.impl.TJkMsghisImpl#getReceiverid <em>Receiverid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.impl.TJkMsghisImpl#getReceiver <em>Receiver</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.impl.TJkMsghisImpl#getReceiverno <em>Receiverno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.impl.TJkMsghisImpl#getDealtime <em>Dealtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.impl.TJkMsghisImpl#getReno <em>Reno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.impl.TJkMsghisImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.impl.TJkMsghisImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.impl.TJkMsghisImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.impl.TJkMsghisImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.msg.msg.impl.TJkMsghisImpl#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TJkMsghis;
 */

public class TJkMsghisImpl extends ExtendedDataObjectImpl implements TJkMsghis {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_CONTENT = 1;
	public final static int INDEX_APPOINTMENTTIME = 2;
	public final static int INDEX_PROCURATIONTIME = 3;
	public final static int INDEX_RECEIVERID = 4;
	public final static int INDEX_RECEIVER = 5;
	public final static int INDEX_RECEIVERNO = 6;
	public final static int INDEX_DEALTIME = 7;
	public final static int INDEX_RENO = 8;
	public final static int INDEX_CREATEBY = 9;
	public final static int INDEX_CREATETIME = 10;
	public final static int INDEX_MODIFYBY = 11;
	public final static int INDEX_UPDATETIME = 12;
	public final static int INDEX_DATAORGID = 13;
	public final static int SDO_PROPERTY_COUNT = 14;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TJkMsghisImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TJkMsghisImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

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
	public String getPkid() {
		return DataUtil.toString(super.getByIndex(INDEX_PKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPkid <em>Pkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pkid</em>' attribute.
	 * @see #getPkid()
	 */
	public void setPkid(String pkid) {
		super.setByIndex(INDEX_PKID, pkid);
	}

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
	public String getContent() {
		return DataUtil.toString(super.getByIndex(INDEX_CONTENT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getContent <em>Content</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Content</em>' attribute.
	 * @see #getContent()
	 */
	public void setContent(String content) {
		super.setByIndex(INDEX_CONTENT, content);
	}

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
	public Date getAppointmenttime() {
		return DataUtil.toDate(super.getByIndex(INDEX_APPOINTMENTTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAppointmenttime <em>Appointmenttime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Appointmenttime</em>' attribute.
	 * @see #getAppointmenttime()
	 */
	public void setAppointmenttime(Date appointmenttime) {
		super.setByIndex(INDEX_APPOINTMENTTIME, appointmenttime);
	}

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
	public Date getProcurationtime() {
		return DataUtil.toDate(super.getByIndex(INDEX_PROCURATIONTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getProcurationtime <em>Procurationtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Procurationtime</em>' attribute.
	 * @see #getProcurationtime()
	 */
	public void setProcurationtime(Date procurationtime) {
		super.setByIndex(INDEX_PROCURATIONTIME, procurationtime);
	}

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
	public String getReceiverid() {
		return DataUtil.toString(super.getByIndex(INDEX_RECEIVERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReceiverid <em>Receiverid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Receiverid</em>' attribute.
	 * @see #getReceiverid()
	 */
	public void setReceiverid(String receiverid) {
		super.setByIndex(INDEX_RECEIVERID, receiverid);
	}

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
	public String getReceiver() {
		return DataUtil.toString(super.getByIndex(INDEX_RECEIVER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReceiver <em>Receiver</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Receiver</em>' attribute.
	 * @see #getReceiver()
	 */
	public void setReceiver(String receiver) {
		super.setByIndex(INDEX_RECEIVER, receiver);
	}

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
	public String getReceiverno() {
		return DataUtil.toString(super.getByIndex(INDEX_RECEIVERNO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReceiverno <em>Receiverno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Receiverno</em>' attribute.
	 * @see #getReceiverno()
	 */
	public void setReceiverno(String receiverno) {
		super.setByIndex(INDEX_RECEIVERNO, receiverno);
	}

	/**
	 * Returns the value of the '<em><b>Dealtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Dealtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Dealtime</em>' attribute.
	 * @see #setDealtime(java.util.Date)
	 */
	public Date getDealtime() {
		return DataUtil.toDate(super.getByIndex(INDEX_DEALTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDealtime <em>Dealtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dealtime</em>' attribute.
	 * @see #getDealtime()
	 */
	public void setDealtime(Date dealtime) {
		super.setByIndex(INDEX_DEALTIME, dealtime);
	}

	/**
	 * Returns the value of the '<em><b>Reno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reno</em>' attribute.
	 * @see #setReno(java.lang.String)
	 */
	public String getReno() {
		return DataUtil.toString(super.getByIndex(INDEX_RENO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReno <em>Reno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reno</em>' attribute.
	 * @see #getReno()
	 */
	public void setReno(String reno) {
		super.setByIndex(INDEX_RENO, reno);
	}

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
	public String getCreateby() {
		return DataUtil.toString(super.getByIndex(INDEX_CREATEBY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreateby <em>Createby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createby</em>' attribute.
	 * @see #getCreateby()
	 */
	public void setCreateby(String createby) {
		super.setByIndex(INDEX_CREATEBY, createby);
	}

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
	public Date getCreatetime() {
		return DataUtil.toDate(super.getByIndex(INDEX_CREATETIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreatetime <em>Createtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createtime</em>' attribute.
	 * @see #getCreatetime()
	 */
	public void setCreatetime(Date createtime) {
		super.setByIndex(INDEX_CREATETIME, createtime);
	}

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
	public String getModifyby() {
		return DataUtil.toString(super.getByIndex(INDEX_MODIFYBY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifyby <em>Modifyby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifyby</em>' attribute.
	 * @see #getModifyby()
	 */
	public void setModifyby(String modifyby) {
		super.setByIndex(INDEX_MODIFYBY, modifyby);
	}

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
	public Date getUpdatetime() {
		return DataUtil.toDate(super.getByIndex(INDEX_UPDATETIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUpdatetime <em>Updatetime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Updatetime</em>' attribute.
	 * @see #getUpdatetime()
	 */
	public void setUpdatetime(Date updatetime) {
		super.setByIndex(INDEX_UPDATETIME, updatetime);
	}

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
	public int getDataorgid() {
		return DataUtil.toInt(super.getByIndex(INDEX_DATAORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid) {
		super.setByIndex(INDEX_DATAORGID, dataorgid);
	}


}