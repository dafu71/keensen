/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.interfaces.Interfaces.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.interfaces.Interfaces.IMeterInformation;

import commonj.sdo.Type;

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
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterInformationImpl#getRecid <em>Recid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterInformationImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterInformationImpl#getResid <em>Resid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterInformationImpl#getInfodate <em>Infodate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterInformationImpl#getCurrentrate <em>Currentrate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterInformationImpl#getResidualamount <em>Residualamount</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterInformationImpl#getRemainvolume <em>Remainvolume</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterInformationImpl#getRemainenergy <em>Remainenergy</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterInformationImpl#getAlarm <em>Alarm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterInformationImpl#getOrgid <em>Orgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements IMeterInformation;
 */

public class IMeterInformationImpl extends ExtendedDataObjectImpl implements IMeterInformation {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_RECID = 0;
	public final static int INDEX_USERID = 1;
	public final static int INDEX_RESID = 2;
	public final static int INDEX_INFODATE = 3;
	public final static int INDEX_CURRENTRATE = 4;
	public final static int INDEX_RESIDUALAMOUNT = 5;
	public final static int INDEX_REMAINVOLUME = 6;
	public final static int INDEX_REMAINENERGY = 7;
	public final static int INDEX_ALARM = 8;
	public final static int INDEX_ORGID = 9;
	public final static int SDO_PROPERTY_COUNT = 10;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public IMeterInformationImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public IMeterInformationImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

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
	public int getRecid() {
		return DataUtil.toInt(super.getByIndex(INDEX_RECID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRecid <em>Recid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recid</em>' attribute.
	 * @see #getRecid()
	 */
	public void setRecid(int recid) {
		super.setByIndex(INDEX_RECID, recid);
	}

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
	public String getUserid() {
		return DataUtil.toString(super.getByIndex(INDEX_USERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUserid <em>Userid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Userid</em>' attribute.
	 * @see #getUserid()
	 */
	public void setUserid(String userid) {
		super.setByIndex(INDEX_USERID, userid);
	}

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
	public String getResid() {
		return DataUtil.toString(super.getByIndex(INDEX_RESID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getResid <em>Resid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Resid</em>' attribute.
	 * @see #getResid()
	 */
	public void setResid(String resid) {
		super.setByIndex(INDEX_RESID, resid);
	}

	/**
	 * Returns the value of the '<em><b>Infodate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Infodate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Infodate</em>' attribute.
	 * @see #setInfodate(java.util.Date)
	 */
	public Date getInfodate() {
		return DataUtil.toDate(super.getByIndex(INDEX_INFODATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getInfodate <em>Infodate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Infodate</em>' attribute.
	 * @see #getInfodate()
	 */
	public void setInfodate(Date infodate) {
		super.setByIndex(INDEX_INFODATE, infodate);
	}

	/**
	 * Returns the value of the '<em><b>Currentrate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Currentrate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Currentrate</em>' attribute.
	 * @see #setCurrentrate(java.math.BigDecimal)
	 */
	public BigDecimal getCurrentrate() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_CURRENTRATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCurrentrate <em>Currentrate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Currentrate</em>' attribute.
	 * @see #getCurrentrate()
	 */
	public void setCurrentrate(BigDecimal currentrate) {
		super.setByIndex(INDEX_CURRENTRATE, currentrate);
	}

	/**
	 * Returns the value of the '<em><b>Residualamount</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Residualamount</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Residualamount</em>' attribute.
	 * @see #setResidualamount(java.math.BigDecimal)
	 */
	public BigDecimal getResidualamount() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_RESIDUALAMOUNT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getResidualamount <em>Residualamount</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Residualamount</em>' attribute.
	 * @see #getResidualamount()
	 */
	public void setResidualamount(BigDecimal residualamount) {
		super.setByIndex(INDEX_RESIDUALAMOUNT, residualamount);
	}

	/**
	 * Returns the value of the '<em><b>Remainvolume</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Remainvolume</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Remainvolume</em>' attribute.
	 * @see #setRemainvolume(java.math.BigDecimal)
	 */
	public BigDecimal getRemainvolume() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_REMAINVOLUME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRemainvolume <em>Remainvolume</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Remainvolume</em>' attribute.
	 * @see #getRemainvolume()
	 */
	public void setRemainvolume(BigDecimal remainvolume) {
		super.setByIndex(INDEX_REMAINVOLUME, remainvolume);
	}

	/**
	 * Returns the value of the '<em><b>Remainenergy</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Remainenergy</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Remainenergy</em>' attribute.
	 * @see #setRemainenergy(java.math.BigDecimal)
	 */
	public BigDecimal getRemainenergy() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_REMAINENERGY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRemainenergy <em>Remainenergy</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Remainenergy</em>' attribute.
	 * @see #getRemainenergy()
	 */
	public void setRemainenergy(BigDecimal remainenergy) {
		super.setByIndex(INDEX_REMAINENERGY, remainenergy);
	}

	/**
	 * Returns the value of the '<em><b>Alarm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Alarm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Alarm</em>' attribute.
	 * @see #setAlarm(long)
	 */
	public long getAlarm() {
		return DataUtil.toLong(super.getByIndex(INDEX_ALARM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAlarm <em>Alarm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Alarm</em>' attribute.
	 * @see #getAlarm()
	 */
	public void setAlarm(long alarm) {
		super.setByIndex(INDEX_ALARM, alarm);
	}

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
	public String getOrgid() {
		return DataUtil.toString(super.getByIndex(INDEX_ORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOrgid <em>Orgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgid</em>' attribute.
	 * @see #getOrgid()
	 */
	public void setOrgid(String orgid) {
		super.setByIndex(INDEX_ORGID, orgid);
	}


}