/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.delivery.delivery;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getId <em>Id</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getZvern <em>Zvern</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getZleib <em>Zleib</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getZdaji <em>Zdaji</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getZstat <em>Zstat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getMenge <em>Menge</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getZcret <em>Zcret</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getZcreu <em>Zcreu</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlReserveDataVersion extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.delivery.delivery", "GenlReserveDataVersion");

	public final static IObjectFactory<GenlReserveDataVersion> FACTORY = new IObjectFactory<GenlReserveDataVersion>() {
		public GenlReserveDataVersion create() {
			return (GenlReserveDataVersion) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Id</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Id</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Id</em>' attribute.
	 * @see #setId(long)
	 */
	public long getId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getId <em>Id</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Id</em>' attribute.
	 * @see #getId()
	 */
	public void setId(long id);

	/**
	 * Returns the value of the '<em><b>Zvern</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zvern</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zvern</em>' attribute.
	 * @see #setZvern(java.lang.String)
	 */
	public String getZvern();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getZvern <em>Zvern</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zvern</em>' attribute.
	 * @see #getZvern()
	 */
	public void setZvern(String zvern);

	/**
	 * Returns the value of the '<em><b>Lifnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lifnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lifnr</em>' attribute.
	 * @see #setLifnr(java.lang.String)
	 */
	public String getLifnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getLifnr <em>Lifnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lifnr</em>' attribute.
	 * @see #getLifnr()
	 */
	public void setLifnr(String lifnr);

	/**
	 * Returns the value of the '<em><b>Zleib</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zleib</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zleib</em>' attribute.
	 * @see #setZleib(java.lang.String)
	 */
	public String getZleib();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getZleib <em>Zleib</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zleib</em>' attribute.
	 * @see #getZleib()
	 */
	public void setZleib(String zleib);

	/**
	 * Returns the value of the '<em><b>Zdaji</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zdaji</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zdaji</em>' attribute.
	 * @see #setZdaji(java.lang.String)
	 */
	public String getZdaji();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getZdaji <em>Zdaji</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zdaji</em>' attribute.
	 * @see #getZdaji()
	 */
	public void setZdaji(String zdaji);

	/**
	 * Returns the value of the '<em><b>Zstat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zstat</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zstat</em>' attribute.
	 * @see #setZstat(java.lang.String)
	 */
	public String getZstat();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getZstat <em>Zstat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zstat</em>' attribute.
	 * @see #getZstat()
	 */
	public void setZstat(String zstat);

	/**
	 * Returns the value of the '<em><b>Menge</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Menge</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Menge</em>' attribute.
	 * @see #setMenge(java.math.BigDecimal)
	 */
	public BigDecimal getMenge();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getMenge <em>Menge</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Menge</em>' attribute.
	 * @see #getMenge()
	 */
	public void setMenge(BigDecimal menge);

	/**
	 * Returns the value of the '<em><b>Zcret</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zcret</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zcret</em>' attribute.
	 * @see #setZcret(java.util.Date)
	 */
	public Date getZcret();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getZcret <em>Zcret</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zcret</em>' attribute.
	 * @see #getZcret()
	 */
	public void setZcret(Date zcret);

	/**
	 * Returns the value of the '<em><b>Zcreu</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zcreu</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zcreu</em>' attribute.
	 * @see #setZcreu(java.lang.String)
	 */
	public String getZcreu();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlReserveDataVersion#getZcreu <em>Zcreu</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zcreu</em>' attribute.
	 * @see #getZcreu()
	 */
	public void setZcreu(String zcreu);


}