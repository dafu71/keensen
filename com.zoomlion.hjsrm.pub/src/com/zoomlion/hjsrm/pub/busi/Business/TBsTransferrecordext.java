/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.Business;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getTransferrecordpkid <em>Transferrecordpkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getNewflag <em>Newflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getMngorg <em>Mngorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getCerttype <em>Certtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getCertnum <em>Certnum</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getAddrdetail <em>Addrdetail</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getUsername <em>Username</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getUsersnum <em>Usersnum</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getContactman <em>Contactman</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getMobile <em>Mobile</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getContactphone <em>Contactphone</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getSignid <em>Signid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getPaytype <em>Paytype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getCreateorgid <em>Createorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getCustname <em>Custname</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TBsTransferrecordext extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.Business", "TBsTransferrecordext");

	public final static IObjectFactory<TBsTransferrecordext> FACTORY = new IObjectFactory<TBsTransferrecordext>() {
		public TBsTransferrecordext create() {
			return (TBsTransferrecordext) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getPkid <em>Pkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pkid</em>' attribute.
	 * @see #getPkid()
	 */
	public void setPkid(String pkid);

	/**
	 * Returns the value of the '<em><b>Transferrecordpkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Transferrecordpkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Transferrecordpkid</em>' attribute.
	 * @see #setTransferrecordpkid(java.lang.String)
	 */
	public String getTransferrecordpkid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getTransferrecordpkid <em>Transferrecordpkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Transferrecordpkid</em>' attribute.
	 * @see #getTransferrecordpkid()
	 */
	public void setTransferrecordpkid(String transferrecordpkid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getNewflag <em>Newflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Newflag</em>' attribute.
	 * @see #getNewflag()
	 */
	public void setNewflag(String newflag);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getMngorg <em>Mngorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mngorg</em>' attribute.
	 * @see #getMngorg()
	 */
	public void setMngorg(String mngorg);

	/**
	 * Returns the value of the '<em><b>Certtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Certtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Certtype</em>' attribute.
	 * @see #setCerttype(java.lang.String)
	 */
	public String getCerttype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getCerttype <em>Certtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Certtype</em>' attribute.
	 * @see #getCerttype()
	 */
	public void setCerttype(String certtype);

	/**
	 * Returns the value of the '<em><b>Certnum</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Certnum</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Certnum</em>' attribute.
	 * @see #setCertnum(java.lang.String)
	 */
	public String getCertnum();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getCertnum <em>Certnum</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Certnum</em>' attribute.
	 * @see #getCertnum()
	 */
	public void setCertnum(String certnum);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getAddrdetail <em>Addrdetail</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Addrdetail</em>' attribute.
	 * @see #getAddrdetail()
	 */
	public void setAddrdetail(String addrdetail);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getUsername <em>Username</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Username</em>' attribute.
	 * @see #getUsername()
	 */
	public void setUsername(String username);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getUsersnum <em>Usersnum</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Usersnum</em>' attribute.
	 * @see #getUsersnum()
	 */
	public void setUsersnum(int usersnum);

	/**
	 * Returns the value of the '<em><b>Contactman</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Contactman</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Contactman</em>' attribute.
	 * @see #setContactman(java.lang.String)
	 */
	public String getContactman();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getContactman <em>Contactman</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Contactman</em>' attribute.
	 * @see #getContactman()
	 */
	public void setContactman(String contactman);

	/**
	 * Returns the value of the '<em><b>Mobile</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mobile</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mobile</em>' attribute.
	 * @see #setMobile(java.lang.String)
	 */
	public String getMobile();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getMobile <em>Mobile</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mobile</em>' attribute.
	 * @see #getMobile()
	 */
	public void setMobile(String mobile);

	/**
	 * Returns the value of the '<em><b>Contactphone</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Contactphone</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Contactphone</em>' attribute.
	 * @see #setContactphone(java.lang.String)
	 */
	public String getContactphone();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getContactphone <em>Contactphone</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Contactphone</em>' attribute.
	 * @see #getContactphone()
	 */
	public void setContactphone(String contactphone);

	/**
	 * Returns the value of the '<em><b>Signid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Signid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Signid</em>' attribute.
	 * @see #setSignid(java.lang.String)
	 */
	public String getSignid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getSignid <em>Signid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Signid</em>' attribute.
	 * @see #getSignid()
	 */
	public void setSignid(String signid);

	/**
	 * Returns the value of the '<em><b>Paytype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paytype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paytype</em>' attribute.
	 * @see #setPaytype(java.lang.String)
	 */
	public String getPaytype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getPaytype <em>Paytype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paytype</em>' attribute.
	 * @see #getPaytype()
	 */
	public void setPaytype(String paytype);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getRemark <em>Remark</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Remark</em>' attribute.
	 * @see #getRemark()
	 */
	public void setRemark(String remark);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getCreateby <em>Createby</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getCreatetime <em>Createtime</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getModifyby <em>Modifyby</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getUpdatetime <em>Updatetime</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);

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
	public String getDelflag();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getDelflag <em>Delflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Delflag</em>' attribute.
	 * @see #getDelflag()
	 */
	public void setDelflag(String delflag);

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
	public int getCreateorgid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getCreateorgid <em>Createorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createorgid</em>' attribute.
	 * @see #getCreateorgid()
	 */
	public void setCreateorgid(int createorgid);

	/**
	 * Returns the value of the '<em><b>Custname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Custname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Custname</em>' attribute.
	 * @see #setCustname(java.lang.String)
	 */
	public String getCustname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsTransferrecordext#getCustname <em>Custname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Custname</em>' attribute.
	 * @see #getCustname()
	 */
	public void setCustname(String custname);


}