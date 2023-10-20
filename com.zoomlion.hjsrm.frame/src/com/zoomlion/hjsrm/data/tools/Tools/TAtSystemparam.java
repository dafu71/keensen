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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSystemparam#getParamid <em>Paramid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSystemparam#getParamname <em>Paramname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSystemparam#getParamvalue <em>Paramvalue</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSystemparam#getParamdesc <em>Paramdesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSystemparam#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TAtSystemparam extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.data.tools.Tools.TAtSystemparam";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.data.tools.Tools", "TAtSystemparam");

	public final static IObjectFactory<TAtSystemparam> FACTORY = new IObjectFactory<TAtSystemparam>() {
		public TAtSystemparam create() {
			return (TAtSystemparam) DataFactory.INSTANCE.create(TYPE);
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
	 * @see #setParamid(long)
	 */
	public long getParamid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSystemparam#getParamid <em>Paramid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paramid</em>' attribute.
	 * @see #getParamid()
	 */
	public void setParamid(long paramid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSystemparam#getParamname <em>Paramname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paramname</em>' attribute.
	 * @see #getParamname()
	 */
	public void setParamname(String paramname);

	/**
	 * Returns the value of the '<em><b>Paramvalue</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paramvalue</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paramvalue</em>' attribute.
	 * @see #setParamvalue(java.lang.String)
	 */
	public String getParamvalue();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSystemparam#getParamvalue <em>Paramvalue</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paramvalue</em>' attribute.
	 * @see #getParamvalue()
	 */
	public void setParamvalue(String paramvalue);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSystemparam#getParamdesc <em>Paramdesc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paramdesc</em>' attribute.
	 * @see #getParamdesc()
	 */
	public void setParamdesc(String paramdesc);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSystemparam#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);


}