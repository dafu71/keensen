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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getBusitypetosendconfigpkid <em>Busitypetosendconfigpkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getSort <em>Sort</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getPhrasedetails <em>Phrasedetails</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getState <em>State</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getCreateorgid <em>Createorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getDelflag <em>Delflag</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TBsCommonphraseconfig extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.Business", "TBsCommonphraseconfig");

	public final static IObjectFactory<TBsCommonphraseconfig> FACTORY = new IObjectFactory<TBsCommonphraseconfig>() {
		public TBsCommonphraseconfig create() {
			return (TBsCommonphraseconfig) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getPkid <em>Pkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pkid</em>' attribute.
	 * @see #getPkid()
	 */
	public void setPkid(String pkid);

	/**
	 * Returns the value of the '<em><b>Busitypetosendconfigpkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Busitypetosendconfigpkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Busitypetosendconfigpkid</em>' attribute.
	 * @see #setBusitypetosendconfigpkid(java.lang.String)
	 */
	public String getBusitypetosendconfigpkid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getBusitypetosendconfigpkid <em>Busitypetosendconfigpkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busitypetosendconfigpkid</em>' attribute.
	 * @see #getBusitypetosendconfigpkid()
	 */
	public void setBusitypetosendconfigpkid(String busitypetosendconfigpkid);

	/**
	 * Returns the value of the '<em><b>Sort</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sort</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sort</em>' attribute.
	 * @see #setSort(int)
	 */
	public int getSort();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getSort <em>Sort</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sort</em>' attribute.
	 * @see #getSort()
	 */
	public void setSort(int sort);

	/**
	 * Returns the value of the '<em><b>Phrasedetails</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Phrasedetails</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Phrasedetails</em>' attribute.
	 * @see #setPhrasedetails(java.lang.String)
	 */
	public String getPhrasedetails();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getPhrasedetails <em>Phrasedetails</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Phrasedetails</em>' attribute.
	 * @see #getPhrasedetails()
	 */
	public void setPhrasedetails(String phrasedetails);

	/**
	 * Returns the value of the '<em><b>State</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>State</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>State</em>' attribute.
	 * @see #setState(java.lang.String)
	 */
	public String getState();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getState <em>State</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>State</em>' attribute.
	 * @see #getState()
	 */
	public void setState(String state);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getCreateby <em>Createby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createby</em>' attribute.
	 * @see #getCreateby()
	 */
	public void setCreateby(String createby);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getCreateorgid <em>Createorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createorgid</em>' attribute.
	 * @see #getCreateorgid()
	 */
	public void setCreateorgid(int createorgid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getCreatetime <em>Createtime</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getModifyby <em>Modifyby</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getUpdatetime <em>Updatetime</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getDataorgid <em>Dataorgid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsCommonphraseconfig#getDelflag <em>Delflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Delflag</em>' attribute.
	 * @see #getDelflag()
	 */
	public void setDelflag(String delflag);


}