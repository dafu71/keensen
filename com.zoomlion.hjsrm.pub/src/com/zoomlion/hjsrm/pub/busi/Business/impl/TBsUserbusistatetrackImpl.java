/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.Business.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.busi.Business.TBsUserbusistatetrack;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getUsersourtype <em>Usersourtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getBusitype <em>Busitype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getAppstartdate <em>Appstartdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getBuildsupplydate <em>Buildsupplydate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getUpmeterdate <em>Upmeterdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getDownmeterdate <em>Downmeterdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getAeratedate <em>Aeratedate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getArchivesdate <em>Archivesdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getStopuserdate <em>Stopuserdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getReinstatedate <em>Reinstatedate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getDeluserdate <em>Deluserdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getLogoutdate <em>Logoutdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getSendcarddate <em>Sendcarddate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getUserstate <em>Userstate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getCreateorgid <em>Createorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsUserbusistatetrackImpl#getDelflag <em>Delflag</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TBsUserbusistatetrack;
 */

public class TBsUserbusistatetrackImpl extends ExtendedDataObjectImpl implements TBsUserbusistatetrack {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_USERID = 1;
	public final static int INDEX_USERSOURTYPE = 2;
	public final static int INDEX_BUSITYPE = 3;
	public final static int INDEX_APPSTARTDATE = 4;
	public final static int INDEX_BUILDSUPPLYDATE = 5;
	public final static int INDEX_UPMETERDATE = 6;
	public final static int INDEX_DOWNMETERDATE = 7;
	public final static int INDEX_AERATEDATE = 8;
	public final static int INDEX_ARCHIVESDATE = 9;
	public final static int INDEX_STOPUSERDATE = 10;
	public final static int INDEX_REINSTATEDATE = 11;
	public final static int INDEX_DELUSERDATE = 12;
	public final static int INDEX_LOGOUTDATE = 13;
	public final static int INDEX_SENDCARDDATE = 14;
	public final static int INDEX_USERSTATE = 15;
	public final static int INDEX_CREATEBY = 16;
	public final static int INDEX_CREATEORGID = 17;
	public final static int INDEX_CREATETIME = 18;
	public final static int INDEX_MODIFYBY = 19;
	public final static int INDEX_UPDATETIME = 20;
	public final static int INDEX_DATAORGID = 21;
	public final static int INDEX_DELFLAG = 22;
	public final static int SDO_PROPERTY_COUNT = 23;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsUserbusistatetrackImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsUserbusistatetrackImpl(Type type) {
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
	 * Returns the value of the '<em><b>Userid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Userid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Userid</em>' attribute.
	 * @see #setUserid(java.lang.String)
	 */
	public String getUserid() {
		return DataUtil.toString(super.getByIndex(INDEX_USERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUserid <em>Userid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Userid</em>' attribute.
	 * @see #getUserid()
	 */
	public void setUserid(String userid) {
		super.setByIndex(INDEX_USERID, userid);
	}

	/**
	 * Returns the value of the '<em><b>Usersourtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Usersourtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Usersourtype</em>' attribute.
	 * @see #setUsersourtype(java.lang.String)
	 */
	public String getUsersourtype() {
		return DataUtil.toString(super.getByIndex(INDEX_USERSOURTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUsersourtype <em>Usersourtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Usersourtype</em>' attribute.
	 * @see #getUsersourtype()
	 */
	public void setUsersourtype(String usersourtype) {
		super.setByIndex(INDEX_USERSOURTYPE, usersourtype);
	}

	/**
	 * Returns the value of the '<em><b>Busitype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Busitype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Busitype</em>' attribute.
	 * @see #setBusitype(java.lang.String)
	 */
	public String getBusitype() {
		return DataUtil.toString(super.getByIndex(INDEX_BUSITYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBusitype <em>Busitype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busitype</em>' attribute.
	 * @see #getBusitype()
	 */
	public void setBusitype(String busitype) {
		super.setByIndex(INDEX_BUSITYPE, busitype);
	}

	/**
	 * Returns the value of the '<em><b>Appstartdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Appstartdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Appstartdate</em>' attribute.
	 * @see #setAppstartdate(java.util.Date)
	 */
	public Date getAppstartdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_APPSTARTDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAppstartdate <em>Appstartdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Appstartdate</em>' attribute.
	 * @see #getAppstartdate()
	 */
	public void setAppstartdate(Date appstartdate) {
		super.setByIndex(INDEX_APPSTARTDATE, appstartdate);
	}

	/**
	 * Returns the value of the '<em><b>Buildsupplydate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Buildsupplydate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Buildsupplydate</em>' attribute.
	 * @see #setBuildsupplydate(java.util.Date)
	 */
	public Date getBuildsupplydate() {
		return DataUtil.toDate(super.getByIndex(INDEX_BUILDSUPPLYDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBuildsupplydate <em>Buildsupplydate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Buildsupplydate</em>' attribute.
	 * @see #getBuildsupplydate()
	 */
	public void setBuildsupplydate(Date buildsupplydate) {
		super.setByIndex(INDEX_BUILDSUPPLYDATE, buildsupplydate);
	}

	/**
	 * Returns the value of the '<em><b>Upmeterdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Upmeterdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Upmeterdate</em>' attribute.
	 * @see #setUpmeterdate(java.util.Date)
	 */
	public Date getUpmeterdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_UPMETERDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUpmeterdate <em>Upmeterdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Upmeterdate</em>' attribute.
	 * @see #getUpmeterdate()
	 */
	public void setUpmeterdate(Date upmeterdate) {
		super.setByIndex(INDEX_UPMETERDATE, upmeterdate);
	}

	/**
	 * Returns the value of the '<em><b>Downmeterdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Downmeterdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Downmeterdate</em>' attribute.
	 * @see #setDownmeterdate(java.util.Date)
	 */
	public Date getDownmeterdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_DOWNMETERDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDownmeterdate <em>Downmeterdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Downmeterdate</em>' attribute.
	 * @see #getDownmeterdate()
	 */
	public void setDownmeterdate(Date downmeterdate) {
		super.setByIndex(INDEX_DOWNMETERDATE, downmeterdate);
	}

	/**
	 * Returns the value of the '<em><b>Aeratedate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Aeratedate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Aeratedate</em>' attribute.
	 * @see #setAeratedate(java.util.Date)
	 */
	public Date getAeratedate() {
		return DataUtil.toDate(super.getByIndex(INDEX_AERATEDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAeratedate <em>Aeratedate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Aeratedate</em>' attribute.
	 * @see #getAeratedate()
	 */
	public void setAeratedate(Date aeratedate) {
		super.setByIndex(INDEX_AERATEDATE, aeratedate);
	}

	/**
	 * Returns the value of the '<em><b>Archivesdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Archivesdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Archivesdate</em>' attribute.
	 * @see #setArchivesdate(java.util.Date)
	 */
	public Date getArchivesdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_ARCHIVESDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getArchivesdate <em>Archivesdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Archivesdate</em>' attribute.
	 * @see #getArchivesdate()
	 */
	public void setArchivesdate(Date archivesdate) {
		super.setByIndex(INDEX_ARCHIVESDATE, archivesdate);
	}

	/**
	 * Returns the value of the '<em><b>Stopuserdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stopuserdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stopuserdate</em>' attribute.
	 * @see #setStopuserdate(java.util.Date)
	 */
	public Date getStopuserdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_STOPUSERDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStopuserdate <em>Stopuserdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stopuserdate</em>' attribute.
	 * @see #getStopuserdate()
	 */
	public void setStopuserdate(Date stopuserdate) {
		super.setByIndex(INDEX_STOPUSERDATE, stopuserdate);
	}

	/**
	 * Returns the value of the '<em><b>Reinstatedate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reinstatedate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reinstatedate</em>' attribute.
	 * @see #setReinstatedate(java.util.Date)
	 */
	public Date getReinstatedate() {
		return DataUtil.toDate(super.getByIndex(INDEX_REINSTATEDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReinstatedate <em>Reinstatedate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reinstatedate</em>' attribute.
	 * @see #getReinstatedate()
	 */
	public void setReinstatedate(Date reinstatedate) {
		super.setByIndex(INDEX_REINSTATEDATE, reinstatedate);
	}

	/**
	 * Returns the value of the '<em><b>Deluserdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Deluserdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Deluserdate</em>' attribute.
	 * @see #setDeluserdate(java.util.Date)
	 */
	public Date getDeluserdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_DELUSERDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDeluserdate <em>Deluserdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Deluserdate</em>' attribute.
	 * @see #getDeluserdate()
	 */
	public void setDeluserdate(Date deluserdate) {
		super.setByIndex(INDEX_DELUSERDATE, deluserdate);
	}

	/**
	 * Returns the value of the '<em><b>Logoutdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Logoutdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Logoutdate</em>' attribute.
	 * @see #setLogoutdate(java.util.Date)
	 */
	public Date getLogoutdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_LOGOUTDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLogoutdate <em>Logoutdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Logoutdate</em>' attribute.
	 * @see #getLogoutdate()
	 */
	public void setLogoutdate(Date logoutdate) {
		super.setByIndex(INDEX_LOGOUTDATE, logoutdate);
	}

	/**
	 * Returns the value of the '<em><b>Sendcarddate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sendcarddate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sendcarddate</em>' attribute.
	 * @see #setSendcarddate(java.util.Date)
	 */
	public Date getSendcarddate() {
		return DataUtil.toDate(super.getByIndex(INDEX_SENDCARDDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSendcarddate <em>Sendcarddate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sendcarddate</em>' attribute.
	 * @see #getSendcarddate()
	 */
	public void setSendcarddate(Date sendcarddate) {
		super.setByIndex(INDEX_SENDCARDDATE, sendcarddate);
	}

	/**
	 * Returns the value of the '<em><b>Userstate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Userstate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Userstate</em>' attribute.
	 * @see #setUserstate(java.lang.String)
	 */
	public String getUserstate() {
		return DataUtil.toString(super.getByIndex(INDEX_USERSTATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUserstate <em>Userstate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Userstate</em>' attribute.
	 * @see #getUserstate()
	 */
	public void setUserstate(String userstate) {
		super.setByIndex(INDEX_USERSTATE, userstate);
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
	 * Returns the value of the '<em><b>Createorgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createorgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createorgid</em>' attribute.
	 * @see #setCreateorgid(int)
	 */
	public int getCreateorgid() {
		return DataUtil.toInt(super.getByIndex(INDEX_CREATEORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreateorgid <em>Createorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createorgid</em>' attribute.
	 * @see #getCreateorgid()
	 */
	public void setCreateorgid(int createorgid) {
		super.setByIndex(INDEX_CREATEORGID, createorgid);
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


}