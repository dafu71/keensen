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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog#getOperatid <em>Operatid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog#getOperaterid <em>Operaterid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog#getOperattime <em>Operattime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog#getOperattype <em>Operattype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog#getOperatresult <em>Operatresult</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog#getOptdesc <em>Optdesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TAtOperlog extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.data.tools.Tools", "TAtOperlog");

	public final static IObjectFactory<TAtOperlog> FACTORY = new IObjectFactory<TAtOperlog>() {
		public TAtOperlog create() {
			return (TAtOperlog) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Operatid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operatid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operatid</em>' attribute.
	 * @see #setOperatid(long)
	 */
	public long getOperatid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog#getOperatid <em>Operatid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operatid</em>' attribute.
	 * @see #getOperatid()
	 */
	public void setOperatid(long operatid);

	/**
	 * Returns the value of the '<em><b>Operaterid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operaterid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operaterid</em>' attribute.
	 * @see #setOperaterid(long)
	 */
	public long getOperaterid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog#getOperaterid <em>Operaterid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operaterid</em>' attribute.
	 * @see #getOperaterid()
	 */
	public void setOperaterid(long operaterid);

	/**
	 * Returns the value of the '<em><b>Operattime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operattime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operattime</em>' attribute.
	 * @see #setOperattime(java.util.Date)
	 */
	public Date getOperattime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog#getOperattime <em>Operattime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operattime</em>' attribute.
	 * @see #getOperattime()
	 */
	public void setOperattime(Date operattime);

	/**
	 * Returns the value of the '<em><b>Operattype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operattype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operattype</em>' attribute.
	 * @see #setOperattype(java.lang.String)
	 */
	public String getOperattype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog#getOperattype <em>Operattype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operattype</em>' attribute.
	 * @see #getOperattype()
	 */
	public void setOperattype(String operattype);

	/**
	 * Returns the value of the '<em><b>Operatresult</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operatresult</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operatresult</em>' attribute.
	 * @see #setOperatresult(java.lang.String)
	 */
	public String getOperatresult();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog#getOperatresult <em>Operatresult</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operatresult</em>' attribute.
	 * @see #getOperatresult()
	 */
	public void setOperatresult(String operatresult);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand);

	/**
	 * Returns the value of the '<em><b>Optdesc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Optdesc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Optdesc</em>' attribute.
	 * @see #setOptdesc(java.lang.String)
	 */
	public String getOptdesc();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog#getOptdesc <em>Optdesc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Optdesc</em>' attribute.
	 * @see #getOptdesc()
	 */
	public void setOptdesc(String optdesc);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtOperlog#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);


}