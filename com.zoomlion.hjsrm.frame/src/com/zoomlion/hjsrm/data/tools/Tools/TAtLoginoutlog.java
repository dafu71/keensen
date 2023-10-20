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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getOperid <em>Operid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getOperatorid <em>Operatorid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getOperatorname <em>Operatorname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getLogintype <em>Logintype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getFailtype <em>Failtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getOpertime <em>Opertime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getClientip <em>Clientip</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getOperdesc <em>Operdesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getOperstatus <em>Operstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getExceptionmsg <em>Exceptionmsg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getLogstatus <em>Logstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TAtLoginoutlog extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.data.tools.Tools", "TAtLoginoutlog");

	public final static IObjectFactory<TAtLoginoutlog> FACTORY = new IObjectFactory<TAtLoginoutlog>() {
		public TAtLoginoutlog create() {
			return (TAtLoginoutlog) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getOperid <em>Operid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operid</em>' attribute.
	 * @see #getOperid()
	 */
	public void setOperid(long operid);

	/**
	 * Returns the value of the '<em><b>Operatorid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operatorid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operatorid</em>' attribute.
	 * @see #setOperatorid(long)
	 */
	public long getOperatorid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getOperatorid <em>Operatorid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operatorid</em>' attribute.
	 * @see #getOperatorid()
	 */
	public void setOperatorid(long operatorid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getUserid <em>Userid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Userid</em>' attribute.
	 * @see #getUserid()
	 */
	public void setUserid(String userid);

	/**
	 * Returns the value of the '<em><b>Operatorname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operatorname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operatorname</em>' attribute.
	 * @see #setOperatorname(java.lang.String)
	 */
	public String getOperatorname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getOperatorname <em>Operatorname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operatorname</em>' attribute.
	 * @see #getOperatorname()
	 */
	public void setOperatorname(String operatorname);

	/**
	 * Returns the value of the '<em><b>Logintype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Logintype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Logintype</em>' attribute.
	 * @see #setLogintype(long)
	 */
	public long getLogintype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getLogintype <em>Logintype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Logintype</em>' attribute.
	 * @see #getLogintype()
	 */
	public void setLogintype(long logintype);

	/**
	 * Returns the value of the '<em><b>Failtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Failtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Failtype</em>' attribute.
	 * @see #setFailtype(java.lang.String)
	 */
	public String getFailtype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getFailtype <em>Failtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Failtype</em>' attribute.
	 * @see #getFailtype()
	 */
	public void setFailtype(String failtype);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getOpertime <em>Opertime</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getClientip <em>Clientip</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Clientip</em>' attribute.
	 * @see #getClientip()
	 */
	public void setClientip(String clientip);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getOperdesc <em>Operdesc</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getOperstatus <em>Operstatus</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getExceptionmsg <em>Exceptionmsg</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getLogstatus <em>Logstatus</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginoutlog#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);


}