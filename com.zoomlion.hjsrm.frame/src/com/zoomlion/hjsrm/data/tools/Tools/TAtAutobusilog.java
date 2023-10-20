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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getOperid <em>Operid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getUsername <em>Username</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getLogtype <em>Logtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getOpertime <em>Opertime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getClientip <em>Clientip</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getAppname <em>Appname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getFuncname <em>Funcname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getUniqueid <em>Uniqueid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getOperdesc <em>Operdesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getOperstatus <em>Operstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getExceptionmsg <em>Exceptionmsg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getLogstatus <em>Logstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TAtAutobusilog extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.data.tools.Tools", "TAtAutobusilog");

	public final static IObjectFactory<TAtAutobusilog> FACTORY = new IObjectFactory<TAtAutobusilog>() {
		public TAtAutobusilog create() {
			return (TAtAutobusilog) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Operid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operid</em>' attribute.
	 * @see #setOperid(long)
	 */
	public long getOperid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getOperid <em>Operid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operid</em>' attribute.
	 * @see #getOperid()
	 */
	public void setOperid(long operid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getUserid <em>Userid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getUsername <em>Username</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Username</em>' attribute.
	 * @see #getUsername()
	 */
	public void setUsername(String username);

	/**
	 * Returns the value of the '<em><b>Logtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Logtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Logtype</em>' attribute.
	 * @see #setLogtype(java.lang.String)
	 */
	public String getLogtype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getLogtype <em>Logtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Logtype</em>' attribute.
	 * @see #getLogtype()
	 */
	public void setLogtype(String logtype);

	/**
	 * Returns the value of the '<em><b>Opertime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Opertime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Opertime</em>' attribute.
	 * @see #setOpertime(java.util.Date)
	 */
	public Date getOpertime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getOpertime <em>Opertime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Opertime</em>' attribute.
	 * @see #getOpertime()
	 */
	public void setOpertime(Date opertime);

	/**
	 * Returns the value of the '<em><b>Clientip</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Clientip</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Clientip</em>' attribute.
	 * @see #setClientip(java.lang.String)
	 */
	public String getClientip();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getClientip <em>Clientip</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Clientip</em>' attribute.
	 * @see #getClientip()
	 */
	public void setClientip(String clientip);

	/**
	 * Returns the value of the '<em><b>Appname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Appname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Appname</em>' attribute.
	 * @see #setAppname(java.lang.String)
	 */
	public String getAppname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getAppname <em>Appname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Appname</em>' attribute.
	 * @see #getAppname()
	 */
	public void setAppname(String appname);

	/**
	 * Returns the value of the '<em><b>Funcname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Funcname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Funcname</em>' attribute.
	 * @see #setFuncname(java.lang.String)
	 */
	public String getFuncname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getFuncname <em>Funcname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Funcname</em>' attribute.
	 * @see #getFuncname()
	 */
	public void setFuncname(String funcname);

	/**
	 * Returns the value of the '<em><b>Uniqueid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Uniqueid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Uniqueid</em>' attribute.
	 * @see #setUniqueid(java.lang.String)
	 */
	public String getUniqueid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getUniqueid <em>Uniqueid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Uniqueid</em>' attribute.
	 * @see #getUniqueid()
	 */
	public void setUniqueid(String uniqueid);

	/**
	 * Returns the value of the '<em><b>Operdesc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operdesc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operdesc</em>' attribute.
	 * @see #setOperdesc(java.lang.String)
	 */
	public String getOperdesc();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getOperdesc <em>Operdesc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operdesc</em>' attribute.
	 * @see #getOperdesc()
	 */
	public void setOperdesc(String operdesc);

	/**
	 * Returns the value of the '<em><b>Operstatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operstatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operstatus</em>' attribute.
	 * @see #setOperstatus(java.lang.String)
	 */
	public String getOperstatus();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getOperstatus <em>Operstatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operstatus</em>' attribute.
	 * @see #getOperstatus()
	 */
	public void setOperstatus(String operstatus);

	/**
	 * Returns the value of the '<em><b>Exceptionmsg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Exceptionmsg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Exceptionmsg</em>' attribute.
	 * @see #setExceptionmsg(java.lang.String)
	 */
	public String getExceptionmsg();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getExceptionmsg <em>Exceptionmsg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Exceptionmsg</em>' attribute.
	 * @see #getExceptionmsg()
	 */
	public void setExceptionmsg(String exceptionmsg);

	/**
	 * Returns the value of the '<em><b>Logstatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Logstatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Logstatus</em>' attribute.
	 * @see #setLogstatus(java.lang.String)
	 */
	public String getLogstatus();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getLogstatus <em>Logstatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Logstatus</em>' attribute.
	 * @see #getLogstatus()
	 */
	public void setLogstatus(String logstatus);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtAutobusilog#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);


}