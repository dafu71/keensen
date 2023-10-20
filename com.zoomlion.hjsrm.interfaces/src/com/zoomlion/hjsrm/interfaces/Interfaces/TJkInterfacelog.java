/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.interfaces.Interfaces;

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
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getTargetsystem <em>Targetsystem</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getSource <em>Source</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getClassname <em>Classname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getMethodname <em>Methodname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getParam <em>Param</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getMsg <em>Msg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getStarttime <em>Starttime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getEndtime <em>Endtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getRuntime <em>Runtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getWebaddress <em>Webaddress</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getPort <em>Port</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getIp <em>Ip</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getBacktime <em>Backtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getInittype <em>Inittype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getBusifunc <em>Busifunc</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TJkInterfacelog extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.interfaces.Interfaces", "TJkInterfacelog");

	public final static IObjectFactory<TJkInterfacelog> FACTORY = new IObjectFactory<TJkInterfacelog>() {
		public TJkInterfacelog create() {
			return (TJkInterfacelog) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getPkid <em>Pkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pkid</em>' attribute.
	 * @see #getPkid()
	 */
	public void setPkid(String pkid);

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
	public String getTargetsystem();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getTargetsystem <em>Targetsystem</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Targetsystem</em>' attribute.
	 * @see #getTargetsystem()
	 */
	public void setTargetsystem(String targetsystem);

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
	public String getSource();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getSource <em>Source</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Source</em>' attribute.
	 * @see #getSource()
	 */
	public void setSource(String source);

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
	public String getClassname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getClassname <em>Classname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Classname</em>' attribute.
	 * @see #getClassname()
	 */
	public void setClassname(String classname);

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
	public String getMethodname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getMethodname <em>Methodname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Methodname</em>' attribute.
	 * @see #getMethodname()
	 */
	public void setMethodname(String methodname);

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
	public String getParam();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getParam <em>Param</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Param</em>' attribute.
	 * @see #getParam()
	 */
	public void setParam(String param);

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
	public String getMsg();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getMsg <em>Msg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Msg</em>' attribute.
	 * @see #getMsg()
	 */
	public void setMsg(String msg);

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
	public Date getStarttime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getStarttime <em>Starttime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Starttime</em>' attribute.
	 * @see #getStarttime()
	 */
	public void setStarttime(Date starttime);

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
	public Date getEndtime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getEndtime <em>Endtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Endtime</em>' attribute.
	 * @see #getEndtime()
	 */
	public void setEndtime(Date endtime);

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
	public long getRuntime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getRuntime <em>Runtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Runtime</em>' attribute.
	 * @see #getRuntime()
	 */
	public void setRuntime(long runtime);

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
	public String getWebaddress();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getWebaddress <em>Webaddress</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Webaddress</em>' attribute.
	 * @see #getWebaddress()
	 */
	public void setWebaddress(String webaddress);

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
	public long getPort();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getPort <em>Port</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Port</em>' attribute.
	 * @see #getPort()
	 */
	public void setPort(long port);

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
	public String getIp();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getIp <em>Ip</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ip</em>' attribute.
	 * @see #getIp()
	 */
	public void setIp(String ip);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getCreateby <em>Createby</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getCreatetime <em>Createtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createtime</em>' attribute.
	 * @see #getCreatetime()
	 */
	public void setCreatetime(Date createtime);

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
	public Date getBacktime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getBacktime <em>Backtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Backtime</em>' attribute.
	 * @see #getBacktime()
	 */
	public void setBacktime(Date backtime);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getModifyby <em>Modifyby</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getUpdatetime <em>Updatetime</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getDataorgid <em>Dataorgid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getDelflag <em>Delflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Delflag</em>' attribute.
	 * @see #getDelflag()
	 */
	public void setDelflag(String delflag);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getRemark <em>Remark</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Remark</em>' attribute.
	 * @see #getRemark()
	 */
	public void setRemark(String remark);

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
	public String getInittype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getInittype <em>Inittype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Inittype</em>' attribute.
	 * @see #getInittype()
	 */
	public void setInittype(String inittype);

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
	public String getBusifunc();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.TJkInterfacelog#getBusifunc <em>Busifunc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busifunc</em>' attribute.
	 * @see #getBusifunc()
	 */
	public void setBusifunc(String busifunc);


}