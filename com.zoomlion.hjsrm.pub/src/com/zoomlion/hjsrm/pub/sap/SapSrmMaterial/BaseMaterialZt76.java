/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SapSrmMaterial;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76#getWerks <em>Werks</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76#getZhwbm <em>Zhwbm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76#getZwrildt <em>Zwrildt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76#getZwriusr <em>Zwriusr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76#getTrant <em>Trant</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76#getZsfclq <em>Zsfclq</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface BaseMaterialZt76 extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.SapSrmMaterial", "BaseMaterialZt76");

	public final static IObjectFactory<BaseMaterialZt76> FACTORY = new IObjectFactory<BaseMaterialZt76>() {
		public BaseMaterialZt76 create() {
			return (BaseMaterialZt76) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76#getMatnr <em>Matnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matnr</em>' attribute.
	 * @see #getMatnr()
	 */
	public void setMatnr(String matnr);

	/**
	 * Returns the value of the '<em><b>Werks</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Werks</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Werks</em>' attribute.
	 * @see #setWerks(java.lang.String)
	 */
	public String getWerks();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76#getWerks <em>Werks</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Werks</em>' attribute.
	 * @see #getWerks()
	 */
	public void setWerks(String werks);

	/**
	 * Returns the value of the '<em><b>Zhwbm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zhwbm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zhwbm</em>' attribute.
	 * @see #setZhwbm(java.lang.String)
	 */
	public String getZhwbm();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76#getZhwbm <em>Zhwbm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zhwbm</em>' attribute.
	 * @see #getZhwbm()
	 */
	public void setZhwbm(String zhwbm);

	/**
	 * Returns the value of the '<em><b>Zwrildt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zwrildt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zwrildt</em>' attribute.
	 * @see #setZwrildt(java.util.Date)
	 */
	public Date getZwrildt();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76#getZwrildt <em>Zwrildt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zwrildt</em>' attribute.
	 * @see #getZwrildt()
	 */
	public void setZwrildt(Date zwrildt);

	/**
	 * Returns the value of the '<em><b>Zwriusr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zwriusr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zwriusr</em>' attribute.
	 * @see #setZwriusr(java.lang.String)
	 */
	public String getZwriusr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76#getZwriusr <em>Zwriusr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zwriusr</em>' attribute.
	 * @see #getZwriusr()
	 */
	public void setZwriusr(String zwriusr);

	/**
	 * Returns the value of the '<em><b>Tranu</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Tranu</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Tranu</em>' attribute.
	 * @see #setTranu(java.lang.String)
	 */
	public String getTranu();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76#getTranu <em>Tranu</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Tranu</em>' attribute.
	 * @see #getTranu()
	 */
	public void setTranu(String tranu);

	/**
	 * Returns the value of the '<em><b>Trant</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Trant</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Trant</em>' attribute.
	 * @see #setTrant(java.util.Date)
	 */
	public Date getTrant();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76#getTrant <em>Trant</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Trant</em>' attribute.
	 * @see #getTrant()
	 */
	public void setTrant(Date trant);

	/**
	 * Returns the value of the '<em><b>Zsfclq</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zsfclq</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zsfclq</em>' attribute.
	 * @see #setZsfclq(java.lang.String)
	 */
	public String getZsfclq();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialZt76#getZsfclq <em>Zsfclq</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zsfclq</em>' attribute.
	 * @see #getZsfclq()
	 */
	public void setZsfclq(String zsfclq);


}