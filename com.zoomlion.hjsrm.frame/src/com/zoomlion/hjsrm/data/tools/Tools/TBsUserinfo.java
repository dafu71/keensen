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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getBusisn <em>Busisn</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getBusitype <em>Busitype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getNodesn <em>Nodesn</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getNodetype <em>Nodetype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getUsername <em>Username</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getCustid <em>Custid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getSvctype <em>Svctype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getUsertype <em>Usertype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getConsumptype <em>Consumptype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getConsumpattr <em>Consumpattr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getUserstate <em>Userstate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getAddrcode <em>Addrcode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getAddrdetail <em>Addrdetail</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getStatechngdate <em>Statechngdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getIndustrytype <em>Industrytype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getConsumpdesc <em>Consumpdesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getAeratedate <em>Aeratedate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getHousearea <em>Housearea</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getUsersnum <em>Usersnum</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getLatefeeflag <em>Latefeeflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getMngorg <em>Mngorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getStenocode <em>Stenocode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getStenoprompt <em>Stenoprompt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getStenopassword <em>Stenopassword</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getCredit <em>Credit</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getArchcode <em>Archcode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getChnltype <em>Chnltype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getChnlid <em>Chnlid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getVer <em>Ver</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getNewflag <em>Newflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getAreapart <em>Areapart</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getOptrcode <em>Optrcode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getOptdate <em>Optdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getStand <em>Stand</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TBsUserinfo extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.data.tools.Tools", "TBsUserinfo");

	public final static IObjectFactory<TBsUserinfo> FACTORY = new IObjectFactory<TBsUserinfo>() {
		public TBsUserinfo create() {
			return (TBsUserinfo) DataFactory.INSTANCE.create(TYPE);
		}
	};

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
	public String getBusisn();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getBusisn <em>Busisn</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busisn</em>' attribute.
	 * @see #getBusisn()
	 */
	public void setBusisn(String busisn);

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
	public String getBusitype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getBusitype <em>Busitype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busitype</em>' attribute.
	 * @see #getBusitype()
	 */
	public void setBusitype(String busitype);

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
	public String getNodesn();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getNodesn <em>Nodesn</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Nodesn</em>' attribute.
	 * @see #getNodesn()
	 */
	public void setNodesn(String nodesn);

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
	public String getNodetype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getNodetype <em>Nodetype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Nodetype</em>' attribute.
	 * @see #getNodetype()
	 */
	public void setNodetype(String nodetype);

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
	public String getUserid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getUserid <em>Userid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Userid</em>' attribute.
	 * @see #getUserid()
	 */
	public void setUserid(String userid);

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
	public String getUsername();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getUsername <em>Username</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Username</em>' attribute.
	 * @see #getUsername()
	 */
	public void setUsername(String username);

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
	public String getCustid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getCustid <em>Custid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Custid</em>' attribute.
	 * @see #getCustid()
	 */
	public void setCustid(String custid);

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
	public String getSvctype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getSvctype <em>Svctype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Svctype</em>' attribute.
	 * @see #getSvctype()
	 */
	public void setSvctype(String svctype);

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
	public String getUsertype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getUsertype <em>Usertype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Usertype</em>' attribute.
	 * @see #getUsertype()
	 */
	public void setUsertype(String usertype);

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
	public String getConsumptype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getConsumptype <em>Consumptype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Consumptype</em>' attribute.
	 * @see #getConsumptype()
	 */
	public void setConsumptype(String consumptype);

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
	public String getConsumpattr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getConsumpattr <em>Consumpattr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Consumpattr</em>' attribute.
	 * @see #getConsumpattr()
	 */
	public void setConsumpattr(String consumpattr);

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
	public String getUserstate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getUserstate <em>Userstate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Userstate</em>' attribute.
	 * @see #getUserstate()
	 */
	public void setUserstate(String userstate);

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
	public String getAddrcode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getAddrcode <em>Addrcode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Addrcode</em>' attribute.
	 * @see #getAddrcode()
	 */
	public void setAddrcode(String addrcode);

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
	public String getAddrdetail();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getAddrdetail <em>Addrdetail</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Addrdetail</em>' attribute.
	 * @see #getAddrdetail()
	 */
	public void setAddrdetail(String addrdetail);

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
	public Date getStatechngdate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getStatechngdate <em>Statechngdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Statechngdate</em>' attribute.
	 * @see #getStatechngdate()
	 */
	public void setStatechngdate(Date statechngdate);

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
	public String getIndustrytype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getIndustrytype <em>Industrytype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Industrytype</em>' attribute.
	 * @see #getIndustrytype()
	 */
	public void setIndustrytype(String industrytype);

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
	public String getConsumpdesc();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getConsumpdesc <em>Consumpdesc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Consumpdesc</em>' attribute.
	 * @see #getConsumpdesc()
	 */
	public void setConsumpdesc(String consumpdesc);

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
	public Date getAeratedate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getAeratedate <em>Aeratedate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Aeratedate</em>' attribute.
	 * @see #getAeratedate()
	 */
	public void setAeratedate(Date aeratedate);

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
	public BigDecimal getHousearea();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getHousearea <em>Housearea</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Housearea</em>' attribute.
	 * @see #getHousearea()
	 */
	public void setHousearea(BigDecimal housearea);

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
	public int getUsersnum();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getUsersnum <em>Usersnum</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Usersnum</em>' attribute.
	 * @see #getUsersnum()
	 */
	public void setUsersnum(int usersnum);

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
	public String getLatefeeflag();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getLatefeeflag <em>Latefeeflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Latefeeflag</em>' attribute.
	 * @see #getLatefeeflag()
	 */
	public void setLatefeeflag(String latefeeflag);

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
	public String getMngorg();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getMngorg <em>Mngorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mngorg</em>' attribute.
	 * @see #getMngorg()
	 */
	public void setMngorg(String mngorg);

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
	public String getStenocode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getStenocode <em>Stenocode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stenocode</em>' attribute.
	 * @see #getStenocode()
	 */
	public void setStenocode(String stenocode);

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
	public String getStenoprompt();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getStenoprompt <em>Stenoprompt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stenoprompt</em>' attribute.
	 * @see #getStenoprompt()
	 */
	public void setStenoprompt(String stenoprompt);

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
	public String getStenopassword();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getStenopassword <em>Stenopassword</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stenopassword</em>' attribute.
	 * @see #getStenopassword()
	 */
	public void setStenopassword(String stenopassword);

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
	public int getCredit();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getCredit <em>Credit</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Credit</em>' attribute.
	 * @see #getCredit()
	 */
	public void setCredit(int credit);

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
	public String getArchcode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getArchcode <em>Archcode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Archcode</em>' attribute.
	 * @see #getArchcode()
	 */
	public void setArchcode(String archcode);

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
	public String getChnltype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getChnltype <em>Chnltype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Chnltype</em>' attribute.
	 * @see #getChnltype()
	 */
	public void setChnltype(String chnltype);

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
	public String getChnlid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getChnlid <em>Chnlid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Chnlid</em>' attribute.
	 * @see #getChnlid()
	 */
	public void setChnlid(String chnlid);

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
	public int getVer();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getVer <em>Ver</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ver</em>' attribute.
	 * @see #getVer()
	 */
	public void setVer(int ver);

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
	public String getNewflag();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getNewflag <em>Newflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Newflag</em>' attribute.
	 * @see #getNewflag()
	 */
	public void setNewflag(String newflag);

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
	public String getAreapart();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getAreapart <em>Areapart</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Areapart</em>' attribute.
	 * @see #getAreapart()
	 */
	public void setAreapart(String areapart);

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
	public String getOptrcode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getOptrcode <em>Optrcode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Optrcode</em>' attribute.
	 * @see #getOptrcode()
	 */
	public void setOptrcode(String optrcode);

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
	public Date getOptdate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getOptdate <em>Optdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Optdate</em>' attribute.
	 * @see #getOptdate()
	 */
	public void setOptdate(Date optdate);

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
	public String getRemark();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getRemark <em>Remark</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Remark</em>' attribute.
	 * @see #getRemark()
	 */
	public void setRemark(String remark);

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
	public String getStand();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TBsUserinfo#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand);


}