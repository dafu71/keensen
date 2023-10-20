/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.tools.Tools.impl;

import com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo;
import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;

import commonj.sdo.Type;

import java.math.BigDecimal;
import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getBusisn <em>Busisn</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getBusitype <em>Busitype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getNodesn <em>Nodesn</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getNodetype <em>Nodetype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getUsername <em>Username</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getCustid <em>Custid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getSvctype <em>Svctype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getUsertype <em>Usertype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getConsumptype <em>Consumptype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getConsumpattr <em>Consumpattr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getUserstate <em>Userstate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getAddrcode <em>Addrcode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getAddrdetail <em>Addrdetail</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getStatechngdate <em>Statechngdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getIndustrytype <em>Industrytype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getConsumpdesc <em>Consumpdesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getAeratedate <em>Aeratedate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getHousearea <em>Housearea</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getUsersnum <em>Usersnum</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getLatefeeflag <em>Latefeeflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getMngorg <em>Mngorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getStenocode <em>Stenocode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getStenoprompt <em>Stenoprompt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getStenopassword <em>Stenopassword</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getCredit <em>Credit</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getArchcode <em>Archcode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getChnltype <em>Chnltype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getChnlid <em>Chnlid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getVer <em>Ver</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getNewflag <em>Newflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getAreapart <em>Areapart</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getOptrcode <em>Optrcode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getOptdate <em>Optdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TBsUserinfoImpl#getStand <em>Stand</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TBsUserinfo;
 */

public class TBsUserinfoImpl extends ExtendedDataObjectImpl implements TBsUserinfo {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_BUSISN = 0;
	public final static int INDEX_BUSITYPE = 1;
	public final static int INDEX_NODESN = 2;
	public final static int INDEX_NODETYPE = 3;
	public final static int INDEX_USERID = 4;
	public final static int INDEX_USERNAME = 5;
	public final static int INDEX_CUSTID = 6;
	public final static int INDEX_SVCTYPE = 7;
	public final static int INDEX_USERTYPE = 8;
	public final static int INDEX_CONSUMPTYPE = 9;
	public final static int INDEX_CONSUMPATTR = 10;
	public final static int INDEX_USERSTATE = 11;
	public final static int INDEX_ADDRCODE = 12;
	public final static int INDEX_ADDRDETAIL = 13;
	public final static int INDEX_STATECHNGDATE = 14;
	public final static int INDEX_INDUSTRYTYPE = 15;
	public final static int INDEX_CONSUMPDESC = 16;
	public final static int INDEX_AERATEDATE = 17;
	public final static int INDEX_HOUSEAREA = 18;
	public final static int INDEX_USERSNUM = 19;
	public final static int INDEX_LATEFEEFLAG = 20;
	public final static int INDEX_MNGORG = 21;
	public final static int INDEX_STENOCODE = 22;
	public final static int INDEX_STENOPROMPT = 23;
	public final static int INDEX_STENOPASSWORD = 24;
	public final static int INDEX_CREDIT = 25;
	public final static int INDEX_ARCHCODE = 26;
	public final static int INDEX_CHNLTYPE = 27;
	public final static int INDEX_CHNLID = 28;
	public final static int INDEX_VER = 29;
	public final static int INDEX_NEWFLAG = 30;
	public final static int INDEX_AREAPART = 31;
	public final static int INDEX_OPTRCODE = 32;
	public final static int INDEX_OPTDATE = 33;
	public final static int INDEX_REMARK = 34;
	public final static int INDEX_STAND = 35;
	public final static int SDO_PROPERTY_COUNT = 36;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsUserinfoImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsUserinfoImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Busisn</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Busisn</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Busisn</em>' attribute.
	 * @see #setBusisn(java.lang.String)
	 */
	public String getBusisn() {
		return DataUtil.toString(super.getByIndex(INDEX_BUSISN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBusisn <em>Busisn</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busisn</em>' attribute.
	 * @see #getBusisn()
	 */
	public void setBusisn(String busisn) {
		super.setByIndex(INDEX_BUSISN, busisn);
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
	 * Returns the value of the '<em><b>Nodesn</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Nodesn</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Nodesn</em>' attribute.
	 * @see #setNodesn(java.lang.String)
	 */
	public String getNodesn() {
		return DataUtil.toString(super.getByIndex(INDEX_NODESN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getNodesn <em>Nodesn</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Nodesn</em>' attribute.
	 * @see #getNodesn()
	 */
	public void setNodesn(String nodesn) {
		super.setByIndex(INDEX_NODESN, nodesn);
	}

	/**
	 * Returns the value of the '<em><b>Nodetype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Nodetype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Nodetype</em>' attribute.
	 * @see #setNodetype(java.lang.String)
	 */
	public String getNodetype() {
		return DataUtil.toString(super.getByIndex(INDEX_NODETYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getNodetype <em>Nodetype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Nodetype</em>' attribute.
	 * @see #getNodetype()
	 */
	public void setNodetype(String nodetype) {
		super.setByIndex(INDEX_NODETYPE, nodetype);
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
	 * Returns the value of the '<em><b>Username</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Username</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Username</em>' attribute.
	 * @see #setUsername(java.lang.String)
	 */
	public String getUsername() {
		return DataUtil.toString(super.getByIndex(INDEX_USERNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUsername <em>Username</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Username</em>' attribute.
	 * @see #getUsername()
	 */
	public void setUsername(String username) {
		super.setByIndex(INDEX_USERNAME, username);
	}

	/**
	 * Returns the value of the '<em><b>Custid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Custid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Custid</em>' attribute.
	 * @see #setCustid(java.lang.String)
	 */
	public String getCustid() {
		return DataUtil.toString(super.getByIndex(INDEX_CUSTID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCustid <em>Custid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Custid</em>' attribute.
	 * @see #getCustid()
	 */
	public void setCustid(String custid) {
		super.setByIndex(INDEX_CUSTID, custid);
	}

	/**
	 * Returns the value of the '<em><b>Svctype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Svctype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Svctype</em>' attribute.
	 * @see #setSvctype(java.lang.String)
	 */
	public String getSvctype() {
		return DataUtil.toString(super.getByIndex(INDEX_SVCTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSvctype <em>Svctype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Svctype</em>' attribute.
	 * @see #getSvctype()
	 */
	public void setSvctype(String svctype) {
		super.setByIndex(INDEX_SVCTYPE, svctype);
	}

	/**
	 * Returns the value of the '<em><b>Usertype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Usertype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Usertype</em>' attribute.
	 * @see #setUsertype(java.lang.String)
	 */
	public String getUsertype() {
		return DataUtil.toString(super.getByIndex(INDEX_USERTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUsertype <em>Usertype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Usertype</em>' attribute.
	 * @see #getUsertype()
	 */
	public void setUsertype(String usertype) {
		super.setByIndex(INDEX_USERTYPE, usertype);
	}

	/**
	 * Returns the value of the '<em><b>Consumptype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Consumptype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Consumptype</em>' attribute.
	 * @see #setConsumptype(java.lang.String)
	 */
	public String getConsumptype() {
		return DataUtil.toString(super.getByIndex(INDEX_CONSUMPTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getConsumptype <em>Consumptype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Consumptype</em>' attribute.
	 * @see #getConsumptype()
	 */
	public void setConsumptype(String consumptype) {
		super.setByIndex(INDEX_CONSUMPTYPE, consumptype);
	}

	/**
	 * Returns the value of the '<em><b>Consumpattr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Consumpattr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Consumpattr</em>' attribute.
	 * @see #setConsumpattr(java.lang.String)
	 */
	public String getConsumpattr() {
		return DataUtil.toString(super.getByIndex(INDEX_CONSUMPATTR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getConsumpattr <em>Consumpattr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Consumpattr</em>' attribute.
	 * @see #getConsumpattr()
	 */
	public void setConsumpattr(String consumpattr) {
		super.setByIndex(INDEX_CONSUMPATTR, consumpattr);
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
	 * Returns the value of the '<em><b>Addrcode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Addrcode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Addrcode</em>' attribute.
	 * @see #setAddrcode(java.lang.String)
	 */
	public String getAddrcode() {
		return DataUtil.toString(super.getByIndex(INDEX_ADDRCODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAddrcode <em>Addrcode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Addrcode</em>' attribute.
	 * @see #getAddrcode()
	 */
	public void setAddrcode(String addrcode) {
		super.setByIndex(INDEX_ADDRCODE, addrcode);
	}

	/**
	 * Returns the value of the '<em><b>Addrdetail</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Addrdetail</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Addrdetail</em>' attribute.
	 * @see #setAddrdetail(java.lang.String)
	 */
	public String getAddrdetail() {
		return DataUtil.toString(super.getByIndex(INDEX_ADDRDETAIL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAddrdetail <em>Addrdetail</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Addrdetail</em>' attribute.
	 * @see #getAddrdetail()
	 */
	public void setAddrdetail(String addrdetail) {
		super.setByIndex(INDEX_ADDRDETAIL, addrdetail);
	}

	/**
	 * Returns the value of the '<em><b>Statechngdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Statechngdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Statechngdate</em>' attribute.
	 * @see #setStatechngdate(java.util.Date)
	 */
	public Date getStatechngdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_STATECHNGDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStatechngdate <em>Statechngdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Statechngdate</em>' attribute.
	 * @see #getStatechngdate()
	 */
	public void setStatechngdate(Date statechngdate) {
		super.setByIndex(INDEX_STATECHNGDATE, statechngdate);
	}

	/**
	 * Returns the value of the '<em><b>Industrytype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Industrytype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Industrytype</em>' attribute.
	 * @see #setIndustrytype(java.lang.String)
	 */
	public String getIndustrytype() {
		return DataUtil.toString(super.getByIndex(INDEX_INDUSTRYTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIndustrytype <em>Industrytype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Industrytype</em>' attribute.
	 * @see #getIndustrytype()
	 */
	public void setIndustrytype(String industrytype) {
		super.setByIndex(INDEX_INDUSTRYTYPE, industrytype);
	}

	/**
	 * Returns the value of the '<em><b>Consumpdesc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Consumpdesc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Consumpdesc</em>' attribute.
	 * @see #setConsumpdesc(java.lang.String)
	 */
	public String getConsumpdesc() {
		return DataUtil.toString(super.getByIndex(INDEX_CONSUMPDESC, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getConsumpdesc <em>Consumpdesc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Consumpdesc</em>' attribute.
	 * @see #getConsumpdesc()
	 */
	public void setConsumpdesc(String consumpdesc) {
		super.setByIndex(INDEX_CONSUMPDESC, consumpdesc);
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
	 * Returns the value of the '<em><b>Housearea</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Housearea</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Housearea</em>' attribute.
	 * @see #setHousearea(java.math.BigDecimal)
	 */
	public BigDecimal getHousearea() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_HOUSEAREA, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getHousearea <em>Housearea</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Housearea</em>' attribute.
	 * @see #getHousearea()
	 */
	public void setHousearea(BigDecimal housearea) {
		super.setByIndex(INDEX_HOUSEAREA, housearea);
	}

	/**
	 * Returns the value of the '<em><b>Usersnum</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Usersnum</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Usersnum</em>' attribute.
	 * @see #setUsersnum(int)
	 */
	public int getUsersnum() {
		return DataUtil.toInt(super.getByIndex(INDEX_USERSNUM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUsersnum <em>Usersnum</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Usersnum</em>' attribute.
	 * @see #getUsersnum()
	 */
	public void setUsersnum(int usersnum) {
		super.setByIndex(INDEX_USERSNUM, usersnum);
	}

	/**
	 * Returns the value of the '<em><b>Latefeeflag</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Latefeeflag</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Latefeeflag</em>' attribute.
	 * @see #setLatefeeflag(java.lang.String)
	 */
	public String getLatefeeflag() {
		return DataUtil.toString(super.getByIndex(INDEX_LATEFEEFLAG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLatefeeflag <em>Latefeeflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Latefeeflag</em>' attribute.
	 * @see #getLatefeeflag()
	 */
	public void setLatefeeflag(String latefeeflag) {
		super.setByIndex(INDEX_LATEFEEFLAG, latefeeflag);
	}

	/**
	 * Returns the value of the '<em><b>Mngorg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mngorg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mngorg</em>' attribute.
	 * @see #setMngorg(java.lang.String)
	 */
	public String getMngorg() {
		return DataUtil.toString(super.getByIndex(INDEX_MNGORG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMngorg <em>Mngorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mngorg</em>' attribute.
	 * @see #getMngorg()
	 */
	public void setMngorg(String mngorg) {
		super.setByIndex(INDEX_MNGORG, mngorg);
	}

	/**
	 * Returns the value of the '<em><b>Stenocode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stenocode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stenocode</em>' attribute.
	 * @see #setStenocode(java.lang.String)
	 */
	public String getStenocode() {
		return DataUtil.toString(super.getByIndex(INDEX_STENOCODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStenocode <em>Stenocode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stenocode</em>' attribute.
	 * @see #getStenocode()
	 */
	public void setStenocode(String stenocode) {
		super.setByIndex(INDEX_STENOCODE, stenocode);
	}

	/**
	 * Returns the value of the '<em><b>Stenoprompt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stenoprompt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stenoprompt</em>' attribute.
	 * @see #setStenoprompt(java.lang.String)
	 */
	public String getStenoprompt() {
		return DataUtil.toString(super.getByIndex(INDEX_STENOPROMPT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStenoprompt <em>Stenoprompt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stenoprompt</em>' attribute.
	 * @see #getStenoprompt()
	 */
	public void setStenoprompt(String stenoprompt) {
		super.setByIndex(INDEX_STENOPROMPT, stenoprompt);
	}

	/**
	 * Returns the value of the '<em><b>Stenopassword</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stenopassword</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stenopassword</em>' attribute.
	 * @see #setStenopassword(java.lang.String)
	 */
	public String getStenopassword() {
		return DataUtil.toString(super.getByIndex(INDEX_STENOPASSWORD, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStenopassword <em>Stenopassword</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stenopassword</em>' attribute.
	 * @see #getStenopassword()
	 */
	public void setStenopassword(String stenopassword) {
		super.setByIndex(INDEX_STENOPASSWORD, stenopassword);
	}

	/**
	 * Returns the value of the '<em><b>Credit</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Credit</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Credit</em>' attribute.
	 * @see #setCredit(int)
	 */
	public int getCredit() {
		return DataUtil.toInt(super.getByIndex(INDEX_CREDIT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCredit <em>Credit</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Credit</em>' attribute.
	 * @see #getCredit()
	 */
	public void setCredit(int credit) {
		super.setByIndex(INDEX_CREDIT, credit);
	}

	/**
	 * Returns the value of the '<em><b>Archcode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Archcode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Archcode</em>' attribute.
	 * @see #setArchcode(java.lang.String)
	 */
	public String getArchcode() {
		return DataUtil.toString(super.getByIndex(INDEX_ARCHCODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getArchcode <em>Archcode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Archcode</em>' attribute.
	 * @see #getArchcode()
	 */
	public void setArchcode(String archcode) {
		super.setByIndex(INDEX_ARCHCODE, archcode);
	}

	/**
	 * Returns the value of the '<em><b>Chnltype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Chnltype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Chnltype</em>' attribute.
	 * @see #setChnltype(java.lang.String)
	 */
	public String getChnltype() {
		return DataUtil.toString(super.getByIndex(INDEX_CHNLTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getChnltype <em>Chnltype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Chnltype</em>' attribute.
	 * @see #getChnltype()
	 */
	public void setChnltype(String chnltype) {
		super.setByIndex(INDEX_CHNLTYPE, chnltype);
	}

	/**
	 * Returns the value of the '<em><b>Chnlid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Chnlid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Chnlid</em>' attribute.
	 * @see #setChnlid(java.lang.String)
	 */
	public String getChnlid() {
		return DataUtil.toString(super.getByIndex(INDEX_CHNLID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getChnlid <em>Chnlid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Chnlid</em>' attribute.
	 * @see #getChnlid()
	 */
	public void setChnlid(String chnlid) {
		super.setByIndex(INDEX_CHNLID, chnlid);
	}

	/**
	 * Returns the value of the '<em><b>Ver</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ver</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ver</em>' attribute.
	 * @see #setVer(int)
	 */
	public int getVer() {
		return DataUtil.toInt(super.getByIndex(INDEX_VER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getVer <em>Ver</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ver</em>' attribute.
	 * @see #getVer()
	 */
	public void setVer(int ver) {
		super.setByIndex(INDEX_VER, ver);
	}

	/**
	 * Returns the value of the '<em><b>Newflag</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Newflag</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Newflag</em>' attribute.
	 * @see #setNewflag(java.lang.String)
	 */
	public String getNewflag() {
		return DataUtil.toString(super.getByIndex(INDEX_NEWFLAG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getNewflag <em>Newflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Newflag</em>' attribute.
	 * @see #getNewflag()
	 */
	public void setNewflag(String newflag) {
		super.setByIndex(INDEX_NEWFLAG, newflag);
	}

	/**
	 * Returns the value of the '<em><b>Areapart</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Areapart</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Areapart</em>' attribute.
	 * @see #setAreapart(java.lang.String)
	 */
	public String getAreapart() {
		return DataUtil.toString(super.getByIndex(INDEX_AREAPART, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAreapart <em>Areapart</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Areapart</em>' attribute.
	 * @see #getAreapart()
	 */
	public void setAreapart(String areapart) {
		super.setByIndex(INDEX_AREAPART, areapart);
	}

	/**
	 * Returns the value of the '<em><b>Optrcode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Optrcode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Optrcode</em>' attribute.
	 * @see #setOptrcode(java.lang.String)
	 */
	public String getOptrcode() {
		return DataUtil.toString(super.getByIndex(INDEX_OPTRCODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOptrcode <em>Optrcode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Optrcode</em>' attribute.
	 * @see #getOptrcode()
	 */
	public void setOptrcode(String optrcode) {
		super.setByIndex(INDEX_OPTRCODE, optrcode);
	}

	/**
	 * Returns the value of the '<em><b>Optdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Optdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Optdate</em>' attribute.
	 * @see #setOptdate(java.util.Date)
	 */
	public Date getOptdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_OPTDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOptdate <em>Optdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Optdate</em>' attribute.
	 * @see #getOptdate()
	 */
	public void setOptdate(Date optdate) {
		super.setByIndex(INDEX_OPTDATE, optdate);
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
	 * Returns the value of the '<em><b>Stand</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stand</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stand</em>' attribute.
	 * @see #setStand(java.lang.String)
	 */
	public String getStand() {
		return DataUtil.toString(super.getByIndex(INDEX_STAND, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand) {
		super.setByIndex(INDEX_STAND, stand);
	}


}