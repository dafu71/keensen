/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SapSrmContract;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16#getKappl <em>Kappl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16#getKschl <em>Kschl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16#getEvrtn <em>Evrtn</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16#getEvrtp <em>Evrtp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16#getDatbi <em>Datbi</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16#getDatab <em>Datab</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16#getKnumh <em>Knumh</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlContractAo16 extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.SapSrmContract", "GenlContractAo16");

	public final static IObjectFactory<GenlContractAo16> FACTORY = new IObjectFactory<GenlContractAo16>() {
		public GenlContractAo16 create() {
			return (GenlContractAo16) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Kappl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kappl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kappl</em>' attribute.
	 * @see #setKappl(java.lang.String)
	 */
	public String getKappl();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16#getKappl <em>Kappl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kappl</em>' attribute.
	 * @see #getKappl()
	 */
	public void setKappl(String kappl);

	/**
	 * Returns the value of the '<em><b>Kschl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kschl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kschl</em>' attribute.
	 * @see #setKschl(java.lang.String)
	 */
	public String getKschl();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16#getKschl <em>Kschl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kschl</em>' attribute.
	 * @see #getKschl()
	 */
	public void setKschl(String kschl);

	/**
	 * Returns the value of the '<em><b>Evrtn</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Evrtn</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Evrtn</em>' attribute.
	 * @see #setEvrtn(java.lang.String)
	 */
	public String getEvrtn();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16#getEvrtn <em>Evrtn</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Evrtn</em>' attribute.
	 * @see #getEvrtn()
	 */
	public void setEvrtn(String evrtn);

	/**
	 * Returns the value of the '<em><b>Evrtp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Evrtp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Evrtp</em>' attribute.
	 * @see #setEvrtp(java.lang.String)
	 */
	public String getEvrtp();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16#getEvrtp <em>Evrtp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Evrtp</em>' attribute.
	 * @see #getEvrtp()
	 */
	public void setEvrtp(String evrtp);

	/**
	 * Returns the value of the '<em><b>Datbi</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Datbi</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Datbi</em>' attribute.
	 * @see #setDatbi(java.util.Date)
	 */
	public Date getDatbi();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16#getDatbi <em>Datbi</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Datbi</em>' attribute.
	 * @see #getDatbi()
	 */
	public void setDatbi(Date datbi);

	/**
	 * Returns the value of the '<em><b>Datab</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Datab</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Datab</em>' attribute.
	 * @see #setDatab(java.util.Date)
	 */
	public Date getDatab();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16#getDatab <em>Datab</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Datab</em>' attribute.
	 * @see #getDatab()
	 */
	public void setDatab(Date datab);

	/**
	 * Returns the value of the '<em><b>Knumh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Knumh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Knumh</em>' attribute.
	 * @see #setKnumh(java.lang.String)
	 */
	public String getKnumh();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractAo16#getKnumh <em>Knumh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Knumh</em>' attribute.
	 * @see #getKnumh()
	 */
	public void setKnumh(String knumh);


}