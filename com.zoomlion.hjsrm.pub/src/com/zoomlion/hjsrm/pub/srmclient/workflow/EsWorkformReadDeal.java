/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.srmclient.workflow;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformReadDeal#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformReadDeal#getReadPkid <em>ReadPkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformReadDeal#getContent <em>Content</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface EsWorkformReadDeal extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformReadDeal";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.srmclient.workflow", "EsWorkformReadDeal");

	public final static IObjectFactory<EsWorkformReadDeal> FACTORY = new IObjectFactory<EsWorkformReadDeal>() {
		public EsWorkformReadDeal create() {
			return (EsWorkformReadDeal) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Pkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Pkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Pkid</em>' attribute.
	 * @see #setPkid(long)
	 */
	public long getPkid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformReadDeal#getPkid <em>Pkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pkid</em>' attribute.
	 * @see #getPkid()
	 */
	public void setPkid(long pkid);

	/**
	 * Returns the value of the '<em><b>ReadPkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>ReadPkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>ReadPkid</em>' attribute.
	 * @see #setReadPkid(long)
	 */
	public long getReadPkid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformReadDeal#getReadPkid <em>ReadPkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>ReadPkid</em>' attribute.
	 * @see #getReadPkid()
	 */
	public void setReadPkid(long readPkid);

	/**
	 * Returns the value of the '<em><b>Content</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Content</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Content</em>' attribute.
	 * @see #setContent(java.lang.String)
	 */
	public String getContent();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.srmclient.workflow.EsWorkformReadDeal#getContent <em>Content</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Content</em>' attribute.
	 * @see #getContent()
	 */
	public void setContent(String content);


}