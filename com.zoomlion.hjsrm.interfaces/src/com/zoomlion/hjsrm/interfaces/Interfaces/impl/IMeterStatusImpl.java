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
import com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus;

import commonj.sdo.Type;

import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterStatusImpl#getRecid <em>Recid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterStatusImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterStatusImpl#getResid <em>Resid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterStatusImpl#getValve <em>Valve</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterStatusImpl#getIslowbattery <em>Islowbattery</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterStatusImpl#getIstamper <em>Istamper</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterStatusImpl#getIshitalertindex <em>Ishitalertindex</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterStatusImpl#getIshitcreditindex <em>Ishitcreditindex</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterStatusImpl#getIshitshutoffindex <em>Ishitshutoffindex</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterStatusImpl#getIshitforceshutoffindex <em>Ishitforceshutoffindex</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterStatusImpl#getInternalerror <em>Internalerror</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterStatusImpl#getTimestamp <em>Timestamp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterStatusImpl#getReccreatedate <em>Reccreatedate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.IMeterStatusImpl#getOrgid <em>Orgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements IMeterStatus;
 */

public class IMeterStatusImpl extends ExtendedDataObjectImpl implements IMeterStatus {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_RECID = 0;
	public final static int INDEX_USERID = 1;
	public final static int INDEX_RESID = 2;
	public final static int INDEX_VALVE = 3;
	public final static int INDEX_ISLOWBATTERY = 4;
	public final static int INDEX_ISTAMPER = 5;
	public final static int INDEX_ISHITALERTINDEX = 6;
	public final static int INDEX_ISHITCREDITINDEX = 7;
	public final static int INDEX_ISHITSHUTOFFINDEX = 8;
	public final static int INDEX_ISHITFORCESHUTOFFINDEX = 9;
	public final static int INDEX_INTERNALERROR = 10;
	public final static int INDEX_TIMESTAMP = 11;
	public final static int INDEX_RECCREATEDATE = 12;
	public final static int INDEX_ORGID = 13;
	public final static int SDO_PROPERTY_COUNT = 14;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public IMeterStatusImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public IMeterStatusImpl(Type type) {
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
	 * Returns the value of the '<em><b>Valve</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Valve</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Valve</em>' attribute.
	 * @see #setValve(int)
	 */
	public int getValve() {
		return DataUtil.toInt(super.getByIndex(INDEX_VALVE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getValve <em>Valve</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Valve</em>' attribute.
	 * @see #getValve()
	 */
	public void setValve(int valve) {
		super.setByIndex(INDEX_VALVE, valve);
	}

	/**
	 * Returns the value of the '<em><b>Islowbattery</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Islowbattery</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Islowbattery</em>' attribute.
	 * @see #setIslowbattery(int)
	 */
	public int getIslowbattery() {
		return DataUtil.toInt(super.getByIndex(INDEX_ISLOWBATTERY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIslowbattery <em>Islowbattery</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Islowbattery</em>' attribute.
	 * @see #getIslowbattery()
	 */
	public void setIslowbattery(int islowbattery) {
		super.setByIndex(INDEX_ISLOWBATTERY, islowbattery);
	}

	/**
	 * Returns the value of the '<em><b>Istamper</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Istamper</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Istamper</em>' attribute.
	 * @see #setIstamper(int)
	 */
	public int getIstamper() {
		return DataUtil.toInt(super.getByIndex(INDEX_ISTAMPER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIstamper <em>Istamper</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Istamper</em>' attribute.
	 * @see #getIstamper()
	 */
	public void setIstamper(int istamper) {
		super.setByIndex(INDEX_ISTAMPER, istamper);
	}

	/**
	 * Returns the value of the '<em><b>Ishitalertindex</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ishitalertindex</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ishitalertindex</em>' attribute.
	 * @see #setIshitalertindex(int)
	 */
	public int getIshitalertindex() {
		return DataUtil.toInt(super.getByIndex(INDEX_ISHITALERTINDEX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIshitalertindex <em>Ishitalertindex</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ishitalertindex</em>' attribute.
	 * @see #getIshitalertindex()
	 */
	public void setIshitalertindex(int ishitalertindex) {
		super.setByIndex(INDEX_ISHITALERTINDEX, ishitalertindex);
	}

	/**
	 * Returns the value of the '<em><b>Ishitcreditindex</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ishitcreditindex</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ishitcreditindex</em>' attribute.
	 * @see #setIshitcreditindex(int)
	 */
	public int getIshitcreditindex() {
		return DataUtil.toInt(super.getByIndex(INDEX_ISHITCREDITINDEX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIshitcreditindex <em>Ishitcreditindex</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ishitcreditindex</em>' attribute.
	 * @see #getIshitcreditindex()
	 */
	public void setIshitcreditindex(int ishitcreditindex) {
		super.setByIndex(INDEX_ISHITCREDITINDEX, ishitcreditindex);
	}

	/**
	 * Returns the value of the '<em><b>Ishitshutoffindex</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ishitshutoffindex</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ishitshutoffindex</em>' attribute.
	 * @see #setIshitshutoffindex(int)
	 */
	public int getIshitshutoffindex() {
		return DataUtil.toInt(super.getByIndex(INDEX_ISHITSHUTOFFINDEX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIshitshutoffindex <em>Ishitshutoffindex</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ishitshutoffindex</em>' attribute.
	 * @see #getIshitshutoffindex()
	 */
	public void setIshitshutoffindex(int ishitshutoffindex) {
		super.setByIndex(INDEX_ISHITSHUTOFFINDEX, ishitshutoffindex);
	}

	/**
	 * Returns the value of the '<em><b>Ishitforceshutoffindex</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ishitforceshutoffindex</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ishitforceshutoffindex</em>' attribute.
	 * @see #setIshitforceshutoffindex(int)
	 */
	public int getIshitforceshutoffindex() {
		return DataUtil.toInt(super.getByIndex(INDEX_ISHITFORCESHUTOFFINDEX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIshitforceshutoffindex <em>Ishitforceshutoffindex</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ishitforceshutoffindex</em>' attribute.
	 * @see #getIshitforceshutoffindex()
	 */
	public void setIshitforceshutoffindex(int ishitforceshutoffindex) {
		super.setByIndex(INDEX_ISHITFORCESHUTOFFINDEX, ishitforceshutoffindex);
	}

	/**
	 * Returns the value of the '<em><b>Internalerror</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Internalerror</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Internalerror</em>' attribute.
	 * @see #setInternalerror(int)
	 */
	public int getInternalerror() {
		return DataUtil.toInt(super.getByIndex(INDEX_INTERNALERROR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getInternalerror <em>Internalerror</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Internalerror</em>' attribute.
	 * @see #getInternalerror()
	 */
	public void setInternalerror(int internalerror) {
		super.setByIndex(INDEX_INTERNALERROR, internalerror);
	}

	/**
	 * Returns the value of the '<em><b>Timestamp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Timestamp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Timestamp</em>' attribute.
	 * @see #setTimestamp(java.util.Date)
	 */
	public Date getTimestamp() {
		return DataUtil.toDate(super.getByIndex(INDEX_TIMESTAMP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTimestamp <em>Timestamp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Timestamp</em>' attribute.
	 * @see #getTimestamp()
	 */
	public void setTimestamp(Date timestamp) {
		super.setByIndex(INDEX_TIMESTAMP, timestamp);
	}

	/**
	 * Returns the value of the '<em><b>Reccreatedate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reccreatedate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reccreatedate</em>' attribute.
	 * @see #setReccreatedate(java.util.Date)
	 */
	public Date getReccreatedate() {
		return DataUtil.toDate(super.getByIndex(INDEX_RECCREATEDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReccreatedate <em>Reccreatedate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reccreatedate</em>' attribute.
	 * @see #getReccreatedate()
	 */
	public void setReccreatedate(Date reccreatedate) {
		super.setByIndex(INDEX_RECCREATEDATE, reccreatedate);
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