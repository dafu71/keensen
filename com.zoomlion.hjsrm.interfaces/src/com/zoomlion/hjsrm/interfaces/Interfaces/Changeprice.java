/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.interfaces.Interfaces;

import com.eos.data.sdo.IObjectFactory;

import commonj.sdo.DataObject;
import commonj.sdo.Type;
import commonj.sdo.helper.DataFactory;
import commonj.sdo.helper.TypeHelper;

import java.math.BigDecimal;
import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.Changeprice#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.Changeprice#getSupplypointpkid <em>Supplypointpkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.Changeprice#getReading <em>Reading</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.Changeprice#getRecordtime <em>Recordtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.Changeprice#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface Changeprice extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.interfaces.Interfaces.Changeprice";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.interfaces.Interfaces", "Changeprice");

	public final static IObjectFactory<Changeprice> FACTORY = new IObjectFactory<Changeprice>() {
		public Changeprice create() {
			return (Changeprice) DataFactory.INSTANCE.create(TYPE);
		}
	};

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.Changeprice#getUserid <em>Userid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Userid</em>' attribute.
	 * @see #getUserid()
	 */
	public void setUserid(String userid);

	/**
	 * Returns the value of the '<em><b>Supplypointpkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Supplypointpkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Supplypointpkid</em>' attribute.
	 * @see #setSupplypointpkid(java.lang.String)
	 */
	public String getSupplypointpkid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.Changeprice#getSupplypointpkid <em>Supplypointpkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Supplypointpkid</em>' attribute.
	 * @see #getSupplypointpkid()
	 */
	public void setSupplypointpkid(String supplypointpkid);

	/**
	 * Returns the value of the '<em><b>Reading</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reading</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reading</em>' attribute.
	 * @see #setReading(java.math.BigDecimal)
	 */
	public BigDecimal getReading();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.Changeprice#getReading <em>Reading</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reading</em>' attribute.
	 * @see #getReading()
	 */
	public void setReading(BigDecimal reading);

	/**
	 * Returns the value of the '<em><b>Recordtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recordtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recordtime</em>' attribute.
	 * @see #setRecordtime(java.util.Date)
	 */
	public Date getRecordtime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.Changeprice#getRecordtime <em>Recordtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recordtime</em>' attribute.
	 * @see #getRecordtime()
	 */
	public void setRecordtime(Date recordtime);

	/**
	 * Returns the value of the '<em><b>Dataorgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Dataorgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Dataorgid</em>' attribute.
	 * @see #setDataorgid(java.math.BigDecimal)
	 */
	public BigDecimal getDataorgid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.Changeprice#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(BigDecimal dataorgid);


}