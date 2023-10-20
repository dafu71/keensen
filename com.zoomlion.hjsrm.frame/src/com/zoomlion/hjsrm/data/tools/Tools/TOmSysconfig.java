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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfig#getParamid <em>Paramid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfig#getParamname <em>Paramname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfig#getParamtype <em>Paramtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfig#getParamconfig <em>Paramconfig</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfig#getParamdesc <em>Paramdesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfig#getConfigtype <em>Configtype</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TOmSysconfig extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfig";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.data.tools.Tools", "TOmSysconfig");

	public final static IObjectFactory<TOmSysconfig> FACTORY = new IObjectFactory<TOmSysconfig>() {
		public TOmSysconfig create() {
			return (TOmSysconfig) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Paramid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paramid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paramid</em>' attribute.
	 * @see #setParamid(java.lang.String)
	 */
	public String getParamid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfig#getParamid <em>Paramid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paramid</em>' attribute.
	 * @see #getParamid()
	 */
	public void setParamid(String paramid);

	/**
	 * Returns the value of the '<em><b>Paramname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paramname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paramname</em>' attribute.
	 * @see #setParamname(java.lang.String)
	 */
	public String getParamname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfig#getParamname <em>Paramname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paramname</em>' attribute.
	 * @see #getParamname()
	 */
	public void setParamname(String paramname);

	/**
	 * Returns the value of the '<em><b>Paramtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paramtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paramtype</em>' attribute.
	 * @see #setParamtype(java.lang.String)
	 */
	public String getParamtype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfig#getParamtype <em>Paramtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paramtype</em>' attribute.
	 * @see #getParamtype()
	 */
	public void setParamtype(String paramtype);

	/**
	 * Returns the value of the '<em><b>Paramconfig</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paramconfig</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paramconfig</em>' attribute.
	 * @see #setParamconfig(java.lang.String)
	 */
	public String getParamconfig();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfig#getParamconfig <em>Paramconfig</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paramconfig</em>' attribute.
	 * @see #getParamconfig()
	 */
	public void setParamconfig(String paramconfig);

	/**
	 * Returns the value of the '<em><b>Paramdesc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paramdesc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paramdesc</em>' attribute.
	 * @see #setParamdesc(java.lang.String)
	 */
	public String getParamdesc();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfig#getParamdesc <em>Paramdesc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paramdesc</em>' attribute.
	 * @see #getParamdesc()
	 */
	public void setParamdesc(String paramdesc);

	/**
	 * Returns the value of the '<em><b>Configtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Configtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Configtype</em>' attribute.
	 * @see #setConfigtype(java.lang.String)
	 */
	public String getConfigtype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TOmSysconfig#getConfigtype <em>Configtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Configtype</em>' attribute.
	 * @see #getConfigtype()
	 */
	public void setConfigtype(String configtype);


}