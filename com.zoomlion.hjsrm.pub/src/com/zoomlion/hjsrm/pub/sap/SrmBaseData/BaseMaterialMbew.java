/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SrmBaseData;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew#getBwkey <em>Bwkey</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew#getBwtar <em>Bwtar</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew#getVprsv <em>Vprsv</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew#getStprs <em>Stprs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew#getPeinh <em>Peinh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew#getBklas <em>Bklas</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew#getLaepr <em>Laepr</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface BaseMaterialMbew extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.SrmBaseData", "BaseMaterialMbew");

	public final static IObjectFactory<BaseMaterialMbew> FACTORY = new IObjectFactory<BaseMaterialMbew>() {
		public BaseMaterialMbew create() {
			return (BaseMaterialMbew) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Matnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Matnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Matnr</em>' attribute.
	 * @see #setMatnr(java.lang.String)
	 */
	public String getMatnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew#getMatnr <em>Matnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matnr</em>' attribute.
	 * @see #getMatnr()
	 */
	public void setMatnr(String matnr);

	/**
	 * Returns the value of the '<em><b>Bwkey</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bwkey</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bwkey</em>' attribute.
	 * @see #setBwkey(java.lang.String)
	 */
	public String getBwkey();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew#getBwkey <em>Bwkey</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bwkey</em>' attribute.
	 * @see #getBwkey()
	 */
	public void setBwkey(String bwkey);

	/**
	 * Returns the value of the '<em><b>Bwtar</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bwtar</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bwtar</em>' attribute.
	 * @see #setBwtar(java.lang.String)
	 */
	public String getBwtar();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew#getBwtar <em>Bwtar</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bwtar</em>' attribute.
	 * @see #getBwtar()
	 */
	public void setBwtar(String bwtar);

	/**
	 * Returns the value of the '<em><b>Vprsv</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Vprsv</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Vprsv</em>' attribute.
	 * @see #setVprsv(java.lang.String)
	 */
	public String getVprsv();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew#getVprsv <em>Vprsv</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Vprsv</em>' attribute.
	 * @see #getVprsv()
	 */
	public void setVprsv(String vprsv);

	/**
	 * Returns the value of the '<em><b>Stprs</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stprs</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stprs</em>' attribute.
	 * @see #setStprs(java.math.BigDecimal)
	 */
	public BigDecimal getStprs();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew#getStprs <em>Stprs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stprs</em>' attribute.
	 * @see #getStprs()
	 */
	public void setStprs(BigDecimal stprs);

	/**
	 * Returns the value of the '<em><b>Peinh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Peinh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Peinh</em>' attribute.
	 * @see #setPeinh(java.lang.String)
	 */
	public String getPeinh();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew#getPeinh <em>Peinh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Peinh</em>' attribute.
	 * @see #getPeinh()
	 */
	public void setPeinh(String peinh);

	/**
	 * Returns the value of the '<em><b>Bklas</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bklas</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bklas</em>' attribute.
	 * @see #setBklas(java.lang.String)
	 */
	public String getBklas();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew#getBklas <em>Bklas</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bklas</em>' attribute.
	 * @see #getBklas()
	 */
	public void setBklas(String bklas);

	/**
	 * Returns the value of the '<em><b>Laepr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Laepr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Laepr</em>' attribute.
	 * @see #setLaepr(java.util.Date)
	 */
	public Date getLaepr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SrmBaseData.BaseMaterialMbew#getLaepr <em>Laepr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Laepr</em>' attribute.
	 * @see #getLaepr()
	 */
	public void setLaepr(Date laepr);


}