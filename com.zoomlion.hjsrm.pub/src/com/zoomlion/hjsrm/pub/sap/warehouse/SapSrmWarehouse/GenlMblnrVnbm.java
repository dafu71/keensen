/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getMblnr <em>Mblnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getMblno <em>Mblno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getVnbm <em>Vnbm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getTrant <em>Trant</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getShkzg <em>Shkzg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getLbbsa <em>Lbbsa</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getLager <em>Lager</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getWerks <em>Werks</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlMblnrVnbm extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse", "GenlMblnrVnbm");

	public final static IObjectFactory<GenlMblnrVnbm> FACTORY = new IObjectFactory<GenlMblnrVnbm>() {
		public GenlMblnrVnbm create() {
			return (GenlMblnrVnbm) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Mblnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mblnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mblnr</em>' attribute.
	 * @see #setMblnr(java.lang.String)
	 */
	public String getMblnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getMblnr <em>Mblnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mblnr</em>' attribute.
	 * @see #getMblnr()
	 */
	public void setMblnr(String mblnr);

	/**
	 * Returns the value of the '<em><b>Mblno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mblno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mblno</em>' attribute.
	 * @see #setMblno(java.lang.String)
	 */
	public String getMblno();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getMblno <em>Mblno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mblno</em>' attribute.
	 * @see #getMblno()
	 */
	public void setMblno(String mblno);

	/**
	 * Returns the value of the '<em><b>Vnbm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Vnbm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Vnbm</em>' attribute.
	 * @see #setVnbm(java.lang.String)
	 */
	public String getVnbm();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getVnbm <em>Vnbm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Vnbm</em>' attribute.
	 * @see #getVnbm()
	 */
	public void setVnbm(String vnbm);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getTranu <em>Tranu</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getTrant <em>Trant</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Trant</em>' attribute.
	 * @see #getTrant()
	 */
	public void setTrant(Date trant);

	/**
	 * Returns the value of the '<em><b>Shkzg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Shkzg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Shkzg</em>' attribute.
	 * @see #setShkzg(java.lang.String)
	 */
	public String getShkzg();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getShkzg <em>Shkzg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Shkzg</em>' attribute.
	 * @see #getShkzg()
	 */
	public void setShkzg(String shkzg);

	/**
	 * Returns the value of the '<em><b>Lbbsa</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lbbsa</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lbbsa</em>' attribute.
	 * @see #setLbbsa(java.lang.String)
	 */
	public String getLbbsa();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getLbbsa <em>Lbbsa</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lbbsa</em>' attribute.
	 * @see #getLbbsa()
	 */
	public void setLbbsa(String lbbsa);

	/**
	 * Returns the value of the '<em><b>Lager</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lager</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lager</em>' attribute.
	 * @see #setLager(java.lang.String)
	 */
	public String getLager();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getLager <em>Lager</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lager</em>' attribute.
	 * @see #getLager()
	 */
	public void setLager(String lager);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlMblnrVnbm#getWerks <em>Werks</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Werks</em>' attribute.
	 * @see #getWerks()
	 */
	public void setWerks(String werks);


}