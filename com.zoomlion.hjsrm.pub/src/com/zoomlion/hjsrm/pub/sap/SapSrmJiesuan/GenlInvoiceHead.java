/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getJspz <em>Jspz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getMjahr <em>Mjahr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getBukrs <em>Bukrs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getWerks <em>Werks</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getJsje <em>Jsje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getMwskz <em>Mwskz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getTaxrt <em>Taxrt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getFlje <em>Flje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getYfje <em>Yfje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getQtkkje <em>Qtkkje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getTax <em>Tax</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getUsnam <em>Usnam</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getDatum <em>Datum</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getStatu <em>Statu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getTrant <em>Trant</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getPrint <em>Print</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlInvoiceHead extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan", "GenlInvoiceHead");

	public final static IObjectFactory<GenlInvoiceHead> FACTORY = new IObjectFactory<GenlInvoiceHead>() {
		public GenlInvoiceHead create() {
			return (GenlInvoiceHead) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Jspz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jspz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jspz</em>' attribute.
	 * @see #setJspz(java.lang.String)
	 */
	public String getJspz();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getJspz <em>Jspz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jspz</em>' attribute.
	 * @see #getJspz()
	 */
	public void setJspz(String jspz);

	/**
	 * Returns the value of the '<em><b>Mjahr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mjahr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mjahr</em>' attribute.
	 * @see #setMjahr(java.lang.String)
	 */
	public String getMjahr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getMjahr <em>Mjahr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mjahr</em>' attribute.
	 * @see #getMjahr()
	 */
	public void setMjahr(String mjahr);

	/**
	 * Returns the value of the '<em><b>Bukrs</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bukrs</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bukrs</em>' attribute.
	 * @see #setBukrs(java.lang.String)
	 */
	public String getBukrs();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getBukrs <em>Bukrs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bukrs</em>' attribute.
	 * @see #getBukrs()
	 */
	public void setBukrs(String bukrs);

	/**
	 * Returns the value of the '<em><b>Werks</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Werks</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Werks</em>' attribute.
	 * @see #setWerks(java.lang.String)
	 */
	public String getWerks();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getWerks <em>Werks</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Werks</em>' attribute.
	 * @see #getWerks()
	 */
	public void setWerks(String werks);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getLifnr <em>Lifnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lifnr</em>' attribute.
	 * @see #getLifnr()
	 */
	public void setLifnr(String lifnr);

	/**
	 * Returns the value of the '<em><b>Jsje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jsje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jsje</em>' attribute.
	 * @see #setJsje(java.math.BigDecimal)
	 */
	public BigDecimal getJsje();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getJsje <em>Jsje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jsje</em>' attribute.
	 * @see #getJsje()
	 */
	public void setJsje(BigDecimal jsje);

	/**
	 * Returns the value of the '<em><b>Mwskz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mwskz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mwskz</em>' attribute.
	 * @see #setMwskz(java.lang.String)
	 */
	public String getMwskz();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getMwskz <em>Mwskz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mwskz</em>' attribute.
	 * @see #getMwskz()
	 */
	public void setMwskz(String mwskz);

	/**
	 * Returns the value of the '<em><b>Taxrt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Taxrt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Taxrt</em>' attribute.
	 * @see #setTaxrt(java.math.BigDecimal)
	 */
	public BigDecimal getTaxrt();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getTaxrt <em>Taxrt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Taxrt</em>' attribute.
	 * @see #getTaxrt()
	 */
	public void setTaxrt(BigDecimal taxrt);

	/**
	 * Returns the value of the '<em><b>Flje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Flje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Flje</em>' attribute.
	 * @see #setFlje(java.math.BigDecimal)
	 */
	public BigDecimal getFlje();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getFlje <em>Flje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Flje</em>' attribute.
	 * @see #getFlje()
	 */
	public void setFlje(BigDecimal flje);

	/**
	 * Returns the value of the '<em><b>Yfje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Yfje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Yfje</em>' attribute.
	 * @see #setYfje(java.math.BigDecimal)
	 */
	public BigDecimal getYfje();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getYfje <em>Yfje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Yfje</em>' attribute.
	 * @see #getYfje()
	 */
	public void setYfje(BigDecimal yfje);

	/**
	 * Returns the value of the '<em><b>Qtkkje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qtkkje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qtkkje</em>' attribute.
	 * @see #setQtkkje(java.math.BigDecimal)
	 */
	public BigDecimal getQtkkje();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getQtkkje <em>Qtkkje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qtkkje</em>' attribute.
	 * @see #getQtkkje()
	 */
	public void setQtkkje(BigDecimal qtkkje);

	/**
	 * Returns the value of the '<em><b>Tax</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Tax</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Tax</em>' attribute.
	 * @see #setTax(java.math.BigDecimal)
	 */
	public BigDecimal getTax();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getTax <em>Tax</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Tax</em>' attribute.
	 * @see #getTax()
	 */
	public void setTax(BigDecimal tax);

	/**
	 * Returns the value of the '<em><b>Usnam</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Usnam</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Usnam</em>' attribute.
	 * @see #setUsnam(java.lang.String)
	 */
	public String getUsnam();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getUsnam <em>Usnam</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Usnam</em>' attribute.
	 * @see #getUsnam()
	 */
	public void setUsnam(String usnam);

	/**
	 * Returns the value of the '<em><b>Datum</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Datum</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Datum</em>' attribute.
	 * @see #setDatum(java.util.Date)
	 */
	public Date getDatum();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getDatum <em>Datum</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Datum</em>' attribute.
	 * @see #getDatum()
	 */
	public void setDatum(Date datum);

	/**
	 * Returns the value of the '<em><b>Statu</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Statu</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Statu</em>' attribute.
	 * @see #setStatu(java.lang.String)
	 */
	public String getStatu();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getStatu <em>Statu</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Statu</em>' attribute.
	 * @see #getStatu()
	 */
	public void setStatu(String statu);

	/**
	 * Returns the value of the '<em><b>Tranu</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Tranu</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Tranu</em>' attribute.
	 * @see #setTranu(java.lang.String)
	 */
	public String getTranu();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getTranu <em>Tranu</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Tranu</em>' attribute.
	 * @see #getTranu()
	 */
	public void setTranu(String tranu);

	/**
	 * Returns the value of the '<em><b>Trant</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Trant</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Trant</em>' attribute.
	 * @see #setTrant(java.util.Date)
	 */
	public Date getTrant();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getTrant <em>Trant</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Trant</em>' attribute.
	 * @see #getTrant()
	 */
	public void setTrant(Date trant);

	/**
	 * Returns the value of the '<em><b>Print</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Print</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Print</em>' attribute.
	 * @see #setPrint(long)
	 */
	public long getPrint();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceHead#getPrint <em>Print</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Print</em>' attribute.
	 * @see #getPrint()
	 */
	public void setPrint(long print);


}