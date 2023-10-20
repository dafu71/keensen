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
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getRecid <em>Recid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getResid <em>Resid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getAivalue <em>Aivalue</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getSivalue <em>Sivalue</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getFsivalue <em>Fsivalue</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getAuditid <em>Auditid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getSupplypointid <em>Supplypointid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getMcumapid <em>Mcumapid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getTimestamp <em>Timestamp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getReccreatedate <em>Reccreatedate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getOrgid <em>Orgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface IMeterParam extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.interfaces.Interfaces", "IMeterParam");

	public final static IObjectFactory<IMeterParam> FACTORY = new IObjectFactory<IMeterParam>() {
		public IMeterParam create() {
			return (IMeterParam) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getRecid <em>Recid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getUserid <em>Userid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getResid <em>Resid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Resid</em>' attribute.
	 * @see #getResid()
	 */
	public void setResid(String resid);

	/**
	 * Returns the value of the '<em><b>Aivalue</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Aivalue</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Aivalue</em>' attribute.
	 * @see #setAivalue(java.math.BigDecimal)
	 */
	public BigDecimal getAivalue();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getAivalue <em>Aivalue</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Aivalue</em>' attribute.
	 * @see #getAivalue()
	 */
	public void setAivalue(BigDecimal aivalue);

	/**
	 * Returns the value of the '<em><b>Sivalue</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sivalue</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sivalue</em>' attribute.
	 * @see #setSivalue(java.math.BigDecimal)
	 */
	public BigDecimal getSivalue();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getSivalue <em>Sivalue</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sivalue</em>' attribute.
	 * @see #getSivalue()
	 */
	public void setSivalue(BigDecimal sivalue);

	/**
	 * Returns the value of the '<em><b>Fsivalue</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Fsivalue</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Fsivalue</em>' attribute.
	 * @see #setFsivalue(java.math.BigDecimal)
	 */
	public BigDecimal getFsivalue();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getFsivalue <em>Fsivalue</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Fsivalue</em>' attribute.
	 * @see #getFsivalue()
	 */
	public void setFsivalue(BigDecimal fsivalue);

	/**
	 * Returns the value of the '<em><b>Auditid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Auditid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Auditid</em>' attribute.
	 * @see #setAuditid(java.lang.String)
	 */
	public String getAuditid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getAuditid <em>Auditid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Auditid</em>' attribute.
	 * @see #getAuditid()
	 */
	public void setAuditid(String auditid);

	/**
	 * Returns the value of the '<em><b>Supplypointid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Supplypointid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Supplypointid</em>' attribute.
	 * @see #setSupplypointid(java.lang.String)
	 */
	public String getSupplypointid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getSupplypointid <em>Supplypointid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Supplypointid</em>' attribute.
	 * @see #getSupplypointid()
	 */
	public void setSupplypointid(String supplypointid);

	/**
	 * Returns the value of the '<em><b>Mcumapid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mcumapid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mcumapid</em>' attribute.
	 * @see #setMcumapid(int)
	 */
	public int getMcumapid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getMcumapid <em>Mcumapid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mcumapid</em>' attribute.
	 * @see #getMcumapid()
	 */
	public void setMcumapid(int mcumapid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getTimestamp <em>Timestamp</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getReccreatedate <em>Reccreatedate</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.interfaces.Interfaces.IMeterParam#getOrgid <em>Orgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgid</em>' attribute.
	 * @see #getOrgid()
	 */
	public void setOrgid(String orgid);


}