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

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getPolicyid <em>Policyid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getPolicyname <em>Policyname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getLognamelimit <em>Lognamelimit</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getLognamelmttype <em>Lognamelmttype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getLogiplimit <em>Logiplimit</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getLogiplmttype <em>Logiplmttype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getStarttimelimit <em>Starttimelimit</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getEndtimelimit <em>Endtimelimit</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getLogtimelmttype <em>Logtimelmttype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getPolicytype <em>Policytype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getIsenabled <em>Isenabled</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TAtLoginpolicy extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.data.tools.Tools", "TAtLoginpolicy");

	public final static IObjectFactory<TAtLoginpolicy> FACTORY = new IObjectFactory<TAtLoginpolicy>() {
		public TAtLoginpolicy create() {
			return (TAtLoginpolicy) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Policyid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Policyid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Policyid</em>' attribute.
	 * @see #setPolicyid(java.lang.String)
	 */
	public String getPolicyid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getPolicyid <em>Policyid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Policyid</em>' attribute.
	 * @see #getPolicyid()
	 */
	public void setPolicyid(String policyid);

	/**
	 * Returns the value of the '<em><b>Policyname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Policyname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Policyname</em>' attribute.
	 * @see #setPolicyname(java.lang.String)
	 */
	public String getPolicyname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getPolicyname <em>Policyname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Policyname</em>' attribute.
	 * @see #getPolicyname()
	 */
	public void setPolicyname(String policyname);

	/**
	 * Returns the value of the '<em><b>Lognamelimit</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lognamelimit</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lognamelimit</em>' attribute.
	 * @see #setLognamelimit(java.lang.String)
	 */
	public String getLognamelimit();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getLognamelimit <em>Lognamelimit</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lognamelimit</em>' attribute.
	 * @see #getLognamelimit()
	 */
	public void setLognamelimit(String lognamelimit);

	/**
	 * Returns the value of the '<em><b>Lognamelmttype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lognamelmttype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lognamelmttype</em>' attribute.
	 * @see #setLognamelmttype(java.lang.String)
	 */
	public String getLognamelmttype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getLognamelmttype <em>Lognamelmttype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lognamelmttype</em>' attribute.
	 * @see #getLognamelmttype()
	 */
	public void setLognamelmttype(String lognamelmttype);

	/**
	 * Returns the value of the '<em><b>Logiplimit</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Logiplimit</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Logiplimit</em>' attribute.
	 * @see #setLogiplimit(java.lang.String)
	 */
	public String getLogiplimit();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getLogiplimit <em>Logiplimit</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Logiplimit</em>' attribute.
	 * @see #getLogiplimit()
	 */
	public void setLogiplimit(String logiplimit);

	/**
	 * Returns the value of the '<em><b>Logiplmttype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Logiplmttype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Logiplmttype</em>' attribute.
	 * @see #setLogiplmttype(java.lang.String)
	 */
	public String getLogiplmttype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getLogiplmttype <em>Logiplmttype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Logiplmttype</em>' attribute.
	 * @see #getLogiplmttype()
	 */
	public void setLogiplmttype(String logiplmttype);

	/**
	 * Returns the value of the '<em><b>Starttimelimit</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Starttimelimit</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Starttimelimit</em>' attribute.
	 * @see #setStarttimelimit(java.lang.String)
	 */
	public String getStarttimelimit();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getStarttimelimit <em>Starttimelimit</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Starttimelimit</em>' attribute.
	 * @see #getStarttimelimit()
	 */
	public void setStarttimelimit(String starttimelimit);

	/**
	 * Returns the value of the '<em><b>Endtimelimit</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Endtimelimit</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Endtimelimit</em>' attribute.
	 * @see #setEndtimelimit(java.lang.String)
	 */
	public String getEndtimelimit();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getEndtimelimit <em>Endtimelimit</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Endtimelimit</em>' attribute.
	 * @see #getEndtimelimit()
	 */
	public void setEndtimelimit(String endtimelimit);

	/**
	 * Returns the value of the '<em><b>Logtimelmttype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Logtimelmttype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Logtimelmttype</em>' attribute.
	 * @see #setLogtimelmttype(java.lang.String)
	 */
	public String getLogtimelmttype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getLogtimelmttype <em>Logtimelmttype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Logtimelmttype</em>' attribute.
	 * @see #getLogtimelmttype()
	 */
	public void setLogtimelmttype(String logtimelmttype);

	/**
	 * Returns the value of the '<em><b>Policytype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Policytype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Policytype</em>' attribute.
	 * @see #setPolicytype(java.lang.String)
	 */
	public String getPolicytype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getPolicytype <em>Policytype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Policytype</em>' attribute.
	 * @see #getPolicytype()
	 */
	public void setPolicytype(String policytype);

	/**
	 * Returns the value of the '<em><b>Isenabled</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isenabled</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isenabled</em>' attribute.
	 * @see #setIsenabled(java.lang.String)
	 */
	public String getIsenabled();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getIsenabled <em>Isenabled</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isenabled</em>' attribute.
	 * @see #getIsenabled()
	 */
	public void setIsenabled(String isenabled);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtLoginpolicy#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);


}