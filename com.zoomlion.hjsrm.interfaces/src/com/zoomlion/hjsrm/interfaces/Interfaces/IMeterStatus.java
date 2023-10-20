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

import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getRecid <em>Recid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getResid <em>Resid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getValve <em>Valve</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getIslowbattery <em>Islowbattery</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getIstamper <em>Istamper</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getIshitalertindex <em>Ishitalertindex</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getIshitcreditindex <em>Ishitcreditindex</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getIshitshutoffindex <em>Ishitshutoffindex</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getIshitforceshutoffindex <em>Ishitforceshutoffindex</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getInternalerror <em>Internalerror</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getTimestamp <em>Timestamp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getReccreatedate <em>Reccreatedate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getOrgid <em>Orgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface IMeterStatus extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.interfaces.Interfaces", "IMeterStatus");

	public final static IObjectFactory<IMeterStatus> FACTORY = new IObjectFactory<IMeterStatus>() {
		public IMeterStatus create() {
			return (IMeterStatus) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getRecid <em>Recid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getUserid <em>Userid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getResid <em>Resid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Resid</em>' attribute.
	 * @see #getResid()
	 */
	public void setResid(String resid);

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
	public int getValve();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getValve <em>Valve</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Valve</em>' attribute.
	 * @see #getValve()
	 */
	public void setValve(int valve);

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
	public int getIslowbattery();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getIslowbattery <em>Islowbattery</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Islowbattery</em>' attribute.
	 * @see #getIslowbattery()
	 */
	public void setIslowbattery(int islowbattery);

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
	public int getIstamper();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getIstamper <em>Istamper</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Istamper</em>' attribute.
	 * @see #getIstamper()
	 */
	public void setIstamper(int istamper);

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
	public int getIshitalertindex();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getIshitalertindex <em>Ishitalertindex</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ishitalertindex</em>' attribute.
	 * @see #getIshitalertindex()
	 */
	public void setIshitalertindex(int ishitalertindex);

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
	public int getIshitcreditindex();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getIshitcreditindex <em>Ishitcreditindex</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ishitcreditindex</em>' attribute.
	 * @see #getIshitcreditindex()
	 */
	public void setIshitcreditindex(int ishitcreditindex);

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
	public int getIshitshutoffindex();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getIshitshutoffindex <em>Ishitshutoffindex</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ishitshutoffindex</em>' attribute.
	 * @see #getIshitshutoffindex()
	 */
	public void setIshitshutoffindex(int ishitshutoffindex);

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
	public int getIshitforceshutoffindex();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getIshitforceshutoffindex <em>Ishitforceshutoffindex</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ishitforceshutoffindex</em>' attribute.
	 * @see #getIshitforceshutoffindex()
	 */
	public void setIshitforceshutoffindex(int ishitforceshutoffindex);

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
	public int getInternalerror();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getInternalerror <em>Internalerror</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Internalerror</em>' attribute.
	 * @see #getInternalerror()
	 */
	public void setInternalerror(int internalerror);

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
	public Date getTimestamp();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getTimestamp <em>Timestamp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Timestamp</em>' attribute.
	 * @see #getTimestamp()
	 */
	public void setTimestamp(Date timestamp);

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
	public Date getReccreatedate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getReccreatedate <em>Reccreatedate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reccreatedate</em>' attribute.
	 * @see #getReccreatedate()
	 */
	public void setReccreatedate(Date reccreatedate);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterStatus#getOrgid <em>Orgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgid</em>' attribute.
	 * @see #getOrgid()
	 */
	public void setOrgid(String orgid);


}