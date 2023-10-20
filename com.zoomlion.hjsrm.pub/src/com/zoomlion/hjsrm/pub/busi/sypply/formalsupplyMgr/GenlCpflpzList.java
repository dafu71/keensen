/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr;

import com.eos.data.sdo.IObjectFactory;

import commonj.sdo.DataObject;
import commonj.sdo.Type;
import commonj.sdo.helper.DataFactory;
import commonj.sdo.helper.TypeHelper;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpflpzList#getId <em>Id</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpflpzList#getFldm <em>Fldm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpflpzList#getFlmc <em>Flmc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpflpzList#getSjid <em>Sjid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpflpzList#getSsdj <em>Ssdj</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpflpzList#getHbdm <em>Hbdm</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlCpflpzList extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpflpzList";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr", "GenlCpflpzList");

	public final static IObjectFactory<GenlCpflpzList> FACTORY = new IObjectFactory<GenlCpflpzList>() {
		public GenlCpflpzList create() {
			return (GenlCpflpzList) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpflpzList#getId <em>Id</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Id</em>' attribute.
	 * @see #getId()
	 */
	public void setId(long id);

	/**
	 * Returns the value of the '<em><b>Fldm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Fldm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Fldm</em>' attribute.
	 * @see #setFldm(java.lang.String)
	 */
	public String getFldm();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpflpzList#getFldm <em>Fldm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Fldm</em>' attribute.
	 * @see #getFldm()
	 */
	public void setFldm(String fldm);

	/**
	 * Returns the value of the '<em><b>Flmc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Flmc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Flmc</em>' attribute.
	 * @see #setFlmc(java.lang.String)
	 */
	public String getFlmc();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpflpzList#getFlmc <em>Flmc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Flmc</em>' attribute.
	 * @see #getFlmc()
	 */
	public void setFlmc(String flmc);

	/**
	 * Returns the value of the '<em><b>Sjid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sjid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sjid</em>' attribute.
	 * @see #setSjid(long)
	 */
	public long getSjid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpflpzList#getSjid <em>Sjid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sjid</em>' attribute.
	 * @see #getSjid()
	 */
	public void setSjid(long sjid);

	/**
	 * Returns the value of the '<em><b>Ssdj</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ssdj</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ssdj</em>' attribute.
	 * @see #setSsdj(java.lang.String)
	 */
	public String getSsdj();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpflpzList#getSsdj <em>Ssdj</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ssdj</em>' attribute.
	 * @see #getSsdj()
	 */
	public void setSsdj(String ssdj);

	/**
	 * Returns the value of the '<em><b>Hbdm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hbdm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hbdm</em>' attribute.
	 * @see #setHbdm(java.lang.String)
	 */
	public String getHbdm();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlCpflpzList#getHbdm <em>Hbdm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hbdm</em>' attribute.
	 * @see #getHbdm()
	 */
	public void setHbdm(String hbdm);


}