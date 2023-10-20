/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.interfaces.Interfaces.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog;

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
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getTargetsystem <em>Targetsystem</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getSource <em>Source</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getClassname <em>Classname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getMethodname <em>Methodname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getParam <em>Param</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getMsg <em>Msg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getStarttime <em>Starttime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getEndtime <em>Endtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getRuntime <em>Runtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getWebaddress <em>Webaddress</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getPort <em>Port</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getIp <em>Ip</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getBacktime <em>Backtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getInittype <em>Inittype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkInterfacelogImpl#getBusifunc <em>Busifunc</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TJkInterfacelog;
 */

public class TJkInterfacelogImpl extends ExtendedDataObjectImpl implements TJkInterfacelog {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_TARGETSYSTEM = 1;
	public final static int INDEX_SOURCE = 2;
	public final static int INDEX_CLASSNAME = 3;
	public final static int INDEX_METHODNAME = 4;
	public final static int INDEX_PARAM = 5;
	public final static int INDEX_MSG = 6;
	public final static int INDEX_STARTTIME = 7;
	public final static int INDEX_ENDTIME = 8;
	public final static int INDEX_RUNTIME = 9;
	public final static int INDEX_WEBADDRESS = 10;
	public final static int INDEX_PORT = 11;
	public final static int INDEX_IP = 12;
	public final static int INDEX_CREATEBY = 13;
	public final static int INDEX_CREATETIME = 14;
	public final static int INDEX_BACKTIME = 15;
	public final static int INDEX_MODIFYBY = 16;
	public final static int INDEX_UPDATETIME = 17;
	public final static int INDEX_DATAORGID = 18;
	public final static int INDEX_DELFLAG = 19;
	public final static int INDEX_REMARK = 20;
	public final static int INDEX_INITTYPE = 21;
	public final static int INDEX_BUSIFUNC = 22;
	public final static int SDO_PROPERTY_COUNT = 23;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TJkInterfacelogImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TJkInterfacelogImpl(Type type) {
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
	 * Returns the value of the '<em><b>Targetsystem</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Targetsystem</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Targetsystem</em>' attribute.
	 * @see #setTargetsystem(java.lang.String)
	 */
	public String getTargetsystem() {
		return DataUtil.toString(super.getByIndex(INDEX_TARGETSYSTEM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTargetsystem <em>Targetsystem</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Targetsystem</em>' attribute.
	 * @see #getTargetsystem()
	 */
	public void setTargetsystem(String targetsystem) {
		super.setByIndex(INDEX_TARGETSYSTEM, targetsystem);
	}

	/**
	 * Returns the value of the '<em><b>Source</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Source</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Source</em>' attribute.
	 * @see #setSource(java.lang.String)
	 */
	public String getSource() {
		return DataUtil.toString(super.getByIndex(INDEX_SOURCE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSource <em>Source</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Source</em>' attribute.
	 * @see #getSource()
	 */
	public void setSource(String source) {
		super.setByIndex(INDEX_SOURCE, source);
	}

	/**
	 * Returns the value of the '<em><b>Classname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Classname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Classname</em>' attribute.
	 * @see #setClassname(java.lang.String)
	 */
	public String getClassname() {
		return DataUtil.toString(super.getByIndex(INDEX_CLASSNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getClassname <em>Classname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Classname</em>' attribute.
	 * @see #getClassname()
	 */
	public void setClassname(String classname) {
		super.setByIndex(INDEX_CLASSNAME, classname);
	}

	/**
	 * Returns the value of the '<em><b>Methodname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Methodname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Methodname</em>' attribute.
	 * @see #setMethodname(java.lang.String)
	 */
	public String getMethodname() {
		return DataUtil.toString(super.getByIndex(INDEX_METHODNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMethodname <em>Methodname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Methodname</em>' attribute.
	 * @see #getMethodname()
	 */
	public void setMethodname(String methodname) {
		super.setByIndex(INDEX_METHODNAME, methodname);
	}

	/**
	 * Returns the value of the '<em><b>Param</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Param</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Param</em>' attribute.
	 * @see #setParam(java.lang.String)
	 */
	public String getParam() {
		return DataUtil.toString(super.getByIndex(INDEX_PARAM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getParam <em>Param</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Param</em>' attribute.
	 * @see #getParam()
	 */
	public void setParam(String param) {
		super.setByIndex(INDEX_PARAM, param);
	}

	/**
	 * Returns the value of the '<em><b>Msg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Msg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Msg</em>' attribute.
	 * @see #setMsg(java.lang.String)
	 */
	public String getMsg() {
		return DataUtil.toString(super.getByIndex(INDEX_MSG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMsg <em>Msg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Msg</em>' attribute.
	 * @see #getMsg()
	 */
	public void setMsg(String msg) {
		super.setByIndex(INDEX_MSG, msg);
	}

	/**
	 * Returns the value of the '<em><b>Starttime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Starttime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Starttime</em>' attribute.
	 * @see #setStarttime(java.util.Date)
	 */
	public Date getStarttime() {
		return DataUtil.toDate(super.getByIndex(INDEX_STARTTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStarttime <em>Starttime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Starttime</em>' attribute.
	 * @see #getStarttime()
	 */
	public void setStarttime(Date starttime) {
		super.setByIndex(INDEX_STARTTIME, starttime);
	}

	/**
	 * Returns the value of the '<em><b>Endtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Endtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Endtime</em>' attribute.
	 * @see #setEndtime(java.util.Date)
	 */
	public Date getEndtime() {
		return DataUtil.toDate(super.getByIndex(INDEX_ENDTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEndtime <em>Endtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Endtime</em>' attribute.
	 * @see #getEndtime()
	 */
	public void setEndtime(Date endtime) {
		super.setByIndex(INDEX_ENDTIME, endtime);
	}

	/**
	 * Returns the value of the '<em><b>Runtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Runtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Runtime</em>' attribute.
	 * @see #setRuntime(long)
	 */
	public long getRuntime() {
		return DataUtil.toLong(super.getByIndex(INDEX_RUNTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRuntime <em>Runtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Runtime</em>' attribute.
	 * @see #getRuntime()
	 */
	public void setRuntime(long runtime) {
		super.setByIndex(INDEX_RUNTIME, runtime);
	}

	/**
	 * Returns the value of the '<em><b>Webaddress</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Webaddress</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Webaddress</em>' attribute.
	 * @see #setWebaddress(java.lang.String)
	 */
	public String getWebaddress() {
		return DataUtil.toString(super.getByIndex(INDEX_WEBADDRESS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWebaddress <em>Webaddress</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Webaddress</em>' attribute.
	 * @see #getWebaddress()
	 */
	public void setWebaddress(String webaddress) {
		super.setByIndex(INDEX_WEBADDRESS, webaddress);
	}

	/**
	 * Returns the value of the '<em><b>Port</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Port</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Port</em>' attribute.
	 * @see #setPort(long)
	 */
	public long getPort() {
		return DataUtil.toLong(super.getByIndex(INDEX_PORT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPort <em>Port</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Port</em>' attribute.
	 * @see #getPort()
	 */
	public void setPort(long port) {
		super.setByIndex(INDEX_PORT, port);
	}

	/**
	 * Returns the value of the '<em><b>Ip</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ip</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ip</em>' attribute.
	 * @see #setIp(java.lang.String)
	 */
	public String getIp() {
		return DataUtil.toString(super.getByIndex(INDEX_IP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIp <em>Ip</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ip</em>' attribute.
	 * @see #getIp()
	 */
	public void setIp(String ip) {
		super.setByIndex(INDEX_IP, ip);
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
	 * Returns the value of the '<em><b>Backtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Backtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Backtime</em>' attribute.
	 * @see #setBacktime(java.util.Date)
	 */
	public Date getBacktime() {
		return DataUtil.toDate(super.getByIndex(INDEX_BACKTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBacktime <em>Backtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Backtime</em>' attribute.
	 * @see #getBacktime()
	 */
	public void setBacktime(Date backtime) {
		super.setByIndex(INDEX_BACKTIME, backtime);
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

	/**
	 * Returns the value of the '<em><b>Delflag</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Delflag</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Delflag</em>' attribute.
	 * @see #setDelflag(java.lang.String)
	 */
	public String getDelflag() {
		return DataUtil.toString(super.getByIndex(INDEX_DELFLAG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDelflag <em>Delflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Delflag</em>' attribute.
	 * @see #getDelflag()
	 */
	public void setDelflag(String delflag) {
		super.setByIndex(INDEX_DELFLAG, delflag);
	}

	/**
	 * Returns the value of the '<em><b>Remark</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Remark</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Remark</em>' attribute.
	 * @see #setRemark(java.lang.String)
	 */
	public String getRemark() {
		return DataUtil.toString(super.getByIndex(INDEX_REMARK, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRemark <em>Remark</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Remark</em>' attribute.
	 * @see #getRemark()
	 */
	public void setRemark(String remark) {
		super.setByIndex(INDEX_REMARK, remark);
	}

	/**
	 * Returns the value of the '<em><b>Inittype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Inittype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Inittype</em>' attribute.
	 * @see #setInittype(java.lang.String)
	 */
	public String getInittype() {
		return DataUtil.toString(super.getByIndex(INDEX_INITTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getInittype <em>Inittype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Inittype</em>' attribute.
	 * @see #getInittype()
	 */
	public void setInittype(String inittype) {
		super.setByIndex(INDEX_INITTYPE, inittype);
	}

	/**
	 * Returns the value of the '<em><b>Busifunc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Busifunc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Busifunc</em>' attribute.
	 * @see #setBusifunc(java.lang.String)
	 */
	public String getBusifunc() {
		return DataUtil.toString(super.getByIndex(INDEX_BUSIFUNC, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBusifunc <em>Busifunc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busifunc</em>' attribute.
	 * @see #getBusifunc()
	 */
	public void setBusifunc(String busifunc) {
		super.setByIndex(INDEX_BUSIFUNC, busifunc);
	}


}