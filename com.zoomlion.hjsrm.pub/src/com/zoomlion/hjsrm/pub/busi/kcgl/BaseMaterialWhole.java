/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.kcgl;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.BaseMaterialWhole#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.BaseMaterialWhole#getZcpcx <em>Zcpcx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.BaseMaterialWhole#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.BaseMaterialWhole#getModifybyname <em>Modifybyname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.BaseMaterialWhole#getModifytime <em>Modifytime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.BaseMaterialWhole#getStand <em>Stand</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface BaseMaterialWhole extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.kcgl.BaseMaterialWhole";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.kcgl", "BaseMaterialWhole");

	public final static IObjectFactory<BaseMaterialWhole> FACTORY = new IObjectFactory<BaseMaterialWhole>() {
		public BaseMaterialWhole create() {
			return (BaseMaterialWhole) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Matnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Matnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Matnr</em>' attribute.
	 * @see #setMatnr(java.lang.String)
	 */
	public String getMatnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.BaseMaterialWhole#getMatnr <em>Matnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matnr</em>' attribute.
	 * @see #getMatnr()
	 */
	public void setMatnr(String matnr);

	/**
	 * Returns the value of the '<em><b>Zcpcx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zcpcx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zcpcx</em>' attribute.
	 * @see #setZcpcx(java.lang.String)
	 */
	public String getZcpcx();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.BaseMaterialWhole#getZcpcx <em>Zcpcx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zcpcx</em>' attribute.
	 * @see #getZcpcx()
	 */
	public void setZcpcx(String zcpcx);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.BaseMaterialWhole#getModifyby <em>Modifyby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifyby</em>' attribute.
	 * @see #getModifyby()
	 */
	public void setModifyby(String modifyby);

	/**
	 * Returns the value of the '<em><b>Modifybyname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifybyname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifybyname</em>' attribute.
	 * @see #setModifybyname(java.lang.String)
	 */
	public String getModifybyname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.BaseMaterialWhole#getModifybyname <em>Modifybyname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifybyname</em>' attribute.
	 * @see #getModifybyname()
	 */
	public void setModifybyname(String modifybyname);

	/**
	 * Returns the value of the '<em><b>Modifytime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifytime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifytime</em>' attribute.
	 * @see #setModifytime(java.util.Date)
	 */
	public Date getModifytime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.BaseMaterialWhole#getModifytime <em>Modifytime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifytime</em>' attribute.
	 * @see #getModifytime()
	 */
	public void setModifytime(Date modifytime);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.BaseMaterialWhole#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand);


}