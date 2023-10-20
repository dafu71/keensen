/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.inspect.Inspect;

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
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz#getJyxm <em>Jyxm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz#getJybz <em>Jybz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz#getWerks <em>Werks</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz#getStatu <em>Statu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz#getTrant <em>Trant</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz#getText <em>Text</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlInspectQjbz extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.inspect.Inspect", "GenlInspectQjbz");

	public final static IObjectFactory<GenlInspectQjbz> FACTORY = new IObjectFactory<GenlInspectQjbz>() {
		public GenlInspectQjbz create() {
			return (GenlInspectQjbz) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz#getMatnr <em>Matnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matnr</em>' attribute.
	 * @see #getMatnr()
	 */
	public void setMatnr(String matnr);

	/**
	 * Returns the value of the '<em><b>Jyxm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jyxm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jyxm</em>' attribute.
	 * @see #setJyxm(java.lang.String)
	 */
	public String getJyxm();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz#getJyxm <em>Jyxm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jyxm</em>' attribute.
	 * @see #getJyxm()
	 */
	public void setJyxm(String jyxm);

	/**
	 * Returns the value of the '<em><b>Jybz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jybz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jybz</em>' attribute.
	 * @see #setJybz(java.lang.String)
	 */
	public String getJybz();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz#getJybz <em>Jybz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jybz</em>' attribute.
	 * @see #getJybz()
	 */
	public void setJybz(String jybz);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz#getWerks <em>Werks</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Werks</em>' attribute.
	 * @see #getWerks()
	 */
	public void setWerks(String werks);

	/**
	 * Returns the value of the '<em><b>Statu</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Statu</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Statu</em>' attribute.
	 * @see #setStatu(java.lang.String)
	 */
	public String getStatu();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz#getStatu <em>Statu</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Statu</em>' attribute.
	 * @see #getStatu()
	 */
	public void setStatu(String statu);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz#getTranu <em>Tranu</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz#getTrant <em>Trant</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Trant</em>' attribute.
	 * @see #getTrant()
	 */
	public void setTrant(Date trant);

	/**
	 * Returns the value of the '<em><b>Text</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Text</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Text</em>' attribute.
	 * @see #setText(java.lang.String)
	 */
	public String getText();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjbz#getText <em>Text</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Text</em>' attribute.
	 * @see #getText()
	 */
	public void setText(String text);


}