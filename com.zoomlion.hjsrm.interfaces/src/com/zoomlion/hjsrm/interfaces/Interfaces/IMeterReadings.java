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
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getRecid <em>Recid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getResid <em>Resid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getMeterindex <em>Meterindex</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getReadingtypeid <em>Readingtypeid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getReadingdate <em>Readingdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getOrgid <em>Orgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getIsrecycle <em>Isrecycle</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface IMeterReadings extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.interfaces.Interfaces", "IMeterReadings");

	public final static IObjectFactory<IMeterReadings> FACTORY = new IObjectFactory<IMeterReadings>() {
		public IMeterReadings create() {
			return (IMeterReadings) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Recid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recid</em>' attribute.
	 * @see #setRecid(int)
	 */
	public int getRecid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getRecid <em>Recid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recid</em>' attribute.
	 * @see #getRecid()
	 */
	public void setRecid(int recid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getUserid <em>Userid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Userid</em>' attribute.
	 * @see #getUserid()
	 */
	public void setUserid(String userid);

	/**
	 * Returns the value of the '<em><b>Resid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Resid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Resid</em>' attribute.
	 * @see #setResid(java.lang.String)
	 */
	public String getResid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getResid <em>Resid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Resid</em>' attribute.
	 * @see #getResid()
	 */
	public void setResid(String resid);

	/**
	 * Returns the value of the '<em><b>Meterindex</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterindex</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterindex</em>' attribute.
	 * @see #setMeterindex(java.math.BigDecimal)
	 */
	public BigDecimal getMeterindex();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getMeterindex <em>Meterindex</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterindex</em>' attribute.
	 * @see #getMeterindex()
	 */
	public void setMeterindex(BigDecimal meterindex);

	/**
	 * Returns the value of the '<em><b>Readingtypeid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Readingtypeid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Readingtypeid</em>' attribute.
	 * @see #setReadingtypeid(java.lang.String)
	 */
	public String getReadingtypeid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getReadingtypeid <em>Readingtypeid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Readingtypeid</em>' attribute.
	 * @see #getReadingtypeid()
	 */
	public void setReadingtypeid(String readingtypeid);

	/**
	 * Returns the value of the '<em><b>Readingdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Readingdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Readingdate</em>' attribute.
	 * @see #setReadingdate(java.util.Date)
	 */
	public Date getReadingdate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getReadingdate <em>Readingdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Readingdate</em>' attribute.
	 * @see #getReadingdate()
	 */
	public void setReadingdate(Date readingdate);

	/**
	 * Returns the value of the '<em><b>Remark</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Remark</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Remark</em>' attribute.
	 * @see #setRemark(java.lang.String)
	 */
	public String getRemark();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getRemark <em>Remark</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Remark</em>' attribute.
	 * @see #getRemark()
	 */
	public void setRemark(String remark);

	/**
	 * Returns the value of the '<em><b>Orgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Orgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Orgid</em>' attribute.
	 * @see #setOrgid(java.lang.String)
	 */
	public String getOrgid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getOrgid <em>Orgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgid</em>' attribute.
	 * @see #getOrgid()
	 */
	public void setOrgid(String orgid);

	/**
	 * Returns the value of the '<em><b>Isrecycle</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isrecycle</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isrecycle</em>' attribute.
	 * @see #setIsrecycle(java.lang.String)
	 */
	public String getIsrecycle();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterReadings#getIsrecycle <em>Isrecycle</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isrecycle</em>' attribute.
	 * @see #getIsrecycle()
	 */
	public void setIsrecycle(String isrecycle);


}