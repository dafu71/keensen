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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getJspz <em>Jspz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getJspzh <em>Jspzh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getMjahr <em>Mjahr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getMblnr <em>Mblnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getZeile <em>Zeile</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getBudat <em>Budat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getShkzg <em>Shkzg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getBwart <em>Bwart</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getDjssl <em>Djssl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getDjsslCk <em>DjsslCk</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getMeins <em>Meins</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getHjsje <em>Hjsje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getJsdj <em>Jsdj</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getJsdw <em>Jsdw</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getKbetr <em>Kbetr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getKpein <em>Kpein</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getKmein <em>Kmein</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getFlagHtj <em>FlagHtj</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getKalsm <em>Kalsm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getHqtkkje <em>Hqtkkje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getHflje <em>Hflje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getHyfje <em>Hyfje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getHkkje <em>Hkkje</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getZcdf <em>Zcdf</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getLfbnr <em>Lfbnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getLfpos <em>Lfpos</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getLfgja <em>Lfgja</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getShqtk <em>Shqtk</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getHshqtk <em>Hshqtk</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getShqtkbh <em>Shqtkbh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getWaers <em>Waers</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getBelnr <em>Belnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getBuzei <em>Buzei</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getGjahr <em>Gjahr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getEkorg <em>Ekorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getEkgrp <em>Ekgrp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getEbeln <em>Ebeln</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getEbelp <em>Ebelp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getMatkl <em>Matkl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getAufnr <em>Aufnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getMenge <em>Menge</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getZwrildt <em>Zwrildt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getZwriusr <em>Zwriusr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getZtext <em>Ztext</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlInvoiceList extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan", "GenlInvoiceList");

	public final static IObjectFactory<GenlInvoiceList> FACTORY = new IObjectFactory<GenlInvoiceList>() {
		public GenlInvoiceList create() {
			return (GenlInvoiceList) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getJspz <em>Jspz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jspz</em>' attribute.
	 * @see #getJspz()
	 */
	public void setJspz(String jspz);

	/**
	 * Returns the value of the '<em><b>Jspzh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jspzh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jspzh</em>' attribute.
	 * @see #setJspzh(java.lang.String)
	 */
	public String getJspzh();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getJspzh <em>Jspzh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jspzh</em>' attribute.
	 * @see #getJspzh()
	 */
	public void setJspzh(String jspzh);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getMjahr <em>Mjahr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mjahr</em>' attribute.
	 * @see #getMjahr()
	 */
	public void setMjahr(String mjahr);

	/**
	 * Returns the value of the '<em><b>Mblnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mblnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mblnr</em>' attribute.
	 * @see #setMblnr(java.lang.String)
	 */
	public String getMblnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getMblnr <em>Mblnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mblnr</em>' attribute.
	 * @see #getMblnr()
	 */
	public void setMblnr(String mblnr);

	/**
	 * Returns the value of the '<em><b>Zeile</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zeile</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zeile</em>' attribute.
	 * @see #setZeile(java.lang.String)
	 */
	public String getZeile();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getZeile <em>Zeile</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zeile</em>' attribute.
	 * @see #getZeile()
	 */
	public void setZeile(String zeile);

	/**
	 * Returns the value of the '<em><b>Budat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Budat</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Budat</em>' attribute.
	 * @see #setBudat(java.util.Date)
	 */
	public Date getBudat();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getBudat <em>Budat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Budat</em>' attribute.
	 * @see #getBudat()
	 */
	public void setBudat(Date budat);

	/**
	 * Returns the value of the '<em><b>Shkzg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Shkzg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Shkzg</em>' attribute.
	 * @see #setShkzg(java.lang.String)
	 */
	public String getShkzg();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getShkzg <em>Shkzg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Shkzg</em>' attribute.
	 * @see #getShkzg()
	 */
	public void setShkzg(String shkzg);

	/**
	 * Returns the value of the '<em><b>Bwart</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bwart</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bwart</em>' attribute.
	 * @see #setBwart(java.lang.String)
	 */
	public String getBwart();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getBwart <em>Bwart</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bwart</em>' attribute.
	 * @see #getBwart()
	 */
	public void setBwart(String bwart);

	/**
	 * Returns the value of the '<em><b>Djssl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Djssl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Djssl</em>' attribute.
	 * @see #setDjssl(java.math.BigDecimal)
	 */
	public BigDecimal getDjssl();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getDjssl <em>Djssl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Djssl</em>' attribute.
	 * @see #getDjssl()
	 */
	public void setDjssl(BigDecimal djssl);

	/**
	 * Returns the value of the '<em><b>DjsslCk</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>DjsslCk</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>DjsslCk</em>' attribute.
	 * @see #setDjsslCk(java.math.BigDecimal)
	 */
	public BigDecimal getDjsslCk();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getDjsslCk <em>DjsslCk</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>DjsslCk</em>' attribute.
	 * @see #getDjsslCk()
	 */
	public void setDjsslCk(BigDecimal djsslCk);

	/**
	 * Returns the value of the '<em><b>Meins</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meins</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meins</em>' attribute.
	 * @see #setMeins(java.lang.String)
	 */
	public String getMeins();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getMeins <em>Meins</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meins</em>' attribute.
	 * @see #getMeins()
	 */
	public void setMeins(String meins);

	/**
	 * Returns the value of the '<em><b>Hjsje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hjsje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hjsje</em>' attribute.
	 * @see #setHjsje(java.math.BigDecimal)
	 */
	public BigDecimal getHjsje();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getHjsje <em>Hjsje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hjsje</em>' attribute.
	 * @see #getHjsje()
	 */
	public void setHjsje(BigDecimal hjsje);

	/**
	 * Returns the value of the '<em><b>Jsdj</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jsdj</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jsdj</em>' attribute.
	 * @see #setJsdj(java.math.BigDecimal)
	 */
	public BigDecimal getJsdj();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getJsdj <em>Jsdj</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jsdj</em>' attribute.
	 * @see #getJsdj()
	 */
	public void setJsdj(BigDecimal jsdj);

	/**
	 * Returns the value of the '<em><b>Jsdw</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jsdw</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jsdw</em>' attribute.
	 * @see #setJsdw(int)
	 */
	public int getJsdw();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getJsdw <em>Jsdw</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jsdw</em>' attribute.
	 * @see #getJsdw()
	 */
	public void setJsdw(int jsdw);

	/**
	 * Returns the value of the '<em><b>Kbetr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kbetr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kbetr</em>' attribute.
	 * @see #setKbetr(java.math.BigDecimal)
	 */
	public BigDecimal getKbetr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getKbetr <em>Kbetr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kbetr</em>' attribute.
	 * @see #getKbetr()
	 */
	public void setKbetr(BigDecimal kbetr);

	/**
	 * Returns the value of the '<em><b>Kpein</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kpein</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kpein</em>' attribute.
	 * @see #setKpein(int)
	 */
	public int getKpein();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getKpein <em>Kpein</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kpein</em>' attribute.
	 * @see #getKpein()
	 */
	public void setKpein(int kpein);

	/**
	 * Returns the value of the '<em><b>Kmein</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kmein</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kmein</em>' attribute.
	 * @see #setKmein(java.lang.String)
	 */
	public String getKmein();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getKmein <em>Kmein</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kmein</em>' attribute.
	 * @see #getKmein()
	 */
	public void setKmein(String kmein);

	/**
	 * Returns the value of the '<em><b>FlagHtj</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>FlagHtj</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>FlagHtj</em>' attribute.
	 * @see #setFlagHtj(java.lang.String)
	 */
	public String getFlagHtj();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getFlagHtj <em>FlagHtj</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FlagHtj</em>' attribute.
	 * @see #getFlagHtj()
	 */
	public void setFlagHtj(String flagHtj);

	/**
	 * Returns the value of the '<em><b>Kalsm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kalsm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kalsm</em>' attribute.
	 * @see #setKalsm(java.lang.String)
	 */
	public String getKalsm();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getKalsm <em>Kalsm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kalsm</em>' attribute.
	 * @see #getKalsm()
	 */
	public void setKalsm(String kalsm);

	/**
	 * Returns the value of the '<em><b>Hqtkkje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hqtkkje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hqtkkje</em>' attribute.
	 * @see #setHqtkkje(java.math.BigDecimal)
	 */
	public BigDecimal getHqtkkje();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getHqtkkje <em>Hqtkkje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hqtkkje</em>' attribute.
	 * @see #getHqtkkje()
	 */
	public void setHqtkkje(BigDecimal hqtkkje);

	/**
	 * Returns the value of the '<em><b>Hflje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hflje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hflje</em>' attribute.
	 * @see #setHflje(java.math.BigDecimal)
	 */
	public BigDecimal getHflje();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getHflje <em>Hflje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hflje</em>' attribute.
	 * @see #getHflje()
	 */
	public void setHflje(BigDecimal hflje);

	/**
	 * Returns the value of the '<em><b>Hyfje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hyfje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hyfje</em>' attribute.
	 * @see #setHyfje(java.math.BigDecimal)
	 */
	public BigDecimal getHyfje();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getHyfje <em>Hyfje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hyfje</em>' attribute.
	 * @see #getHyfje()
	 */
	public void setHyfje(BigDecimal hyfje);

	/**
	 * Returns the value of the '<em><b>Hkkje</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hkkje</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hkkje</em>' attribute.
	 * @see #setHkkje(java.math.BigDecimal)
	 */
	public BigDecimal getHkkje();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getHkkje <em>Hkkje</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hkkje</em>' attribute.
	 * @see #getHkkje()
	 */
	public void setHkkje(BigDecimal hkkje);

	/**
	 * Returns the value of the '<em><b>Zcdf</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zcdf</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zcdf</em>' attribute.
	 * @see #setZcdf(java.math.BigDecimal)
	 */
	public BigDecimal getZcdf();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getZcdf <em>Zcdf</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zcdf</em>' attribute.
	 * @see #getZcdf()
	 */
	public void setZcdf(BigDecimal zcdf);

	/**
	 * Returns the value of the '<em><b>Lfbnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lfbnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lfbnr</em>' attribute.
	 * @see #setLfbnr(java.lang.String)
	 */
	public String getLfbnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getLfbnr <em>Lfbnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lfbnr</em>' attribute.
	 * @see #getLfbnr()
	 */
	public void setLfbnr(String lfbnr);

	/**
	 * Returns the value of the '<em><b>Lfpos</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lfpos</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lfpos</em>' attribute.
	 * @see #setLfpos(java.lang.String)
	 */
	public String getLfpos();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getLfpos <em>Lfpos</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lfpos</em>' attribute.
	 * @see #getLfpos()
	 */
	public void setLfpos(String lfpos);

	/**
	 * Returns the value of the '<em><b>Lfgja</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lfgja</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lfgja</em>' attribute.
	 * @see #setLfgja(java.lang.String)
	 */
	public String getLfgja();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getLfgja <em>Lfgja</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lfgja</em>' attribute.
	 * @see #getLfgja()
	 */
	public void setLfgja(String lfgja);

	/**
	 * Returns the value of the '<em><b>Shqtk</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Shqtk</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Shqtk</em>' attribute.
	 * @see #setShqtk(java.lang.String)
	 */
	public String getShqtk();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getShqtk <em>Shqtk</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Shqtk</em>' attribute.
	 * @see #getShqtk()
	 */
	public void setShqtk(String shqtk);

	/**
	 * Returns the value of the '<em><b>Hshqtk</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hshqtk</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hshqtk</em>' attribute.
	 * @see #setHshqtk(java.lang.String)
	 */
	public String getHshqtk();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getHshqtk <em>Hshqtk</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hshqtk</em>' attribute.
	 * @see #getHshqtk()
	 */
	public void setHshqtk(String hshqtk);

	/**
	 * Returns the value of the '<em><b>Shqtkbh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Shqtkbh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Shqtkbh</em>' attribute.
	 * @see #setShqtkbh(java.lang.String)
	 */
	public String getShqtkbh();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getShqtkbh <em>Shqtkbh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Shqtkbh</em>' attribute.
	 * @see #getShqtkbh()
	 */
	public void setShqtkbh(String shqtkbh);

	/**
	 * Returns the value of the '<em><b>Waers</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Waers</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Waers</em>' attribute.
	 * @see #setWaers(java.lang.String)
	 */
	public String getWaers();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getWaers <em>Waers</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Waers</em>' attribute.
	 * @see #getWaers()
	 */
	public void setWaers(String waers);

	/**
	 * Returns the value of the '<em><b>Belnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Belnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Belnr</em>' attribute.
	 * @see #setBelnr(java.lang.String)
	 */
	public String getBelnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getBelnr <em>Belnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Belnr</em>' attribute.
	 * @see #getBelnr()
	 */
	public void setBelnr(String belnr);

	/**
	 * Returns the value of the '<em><b>Buzei</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Buzei</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Buzei</em>' attribute.
	 * @see #setBuzei(java.lang.String)
	 */
	public String getBuzei();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getBuzei <em>Buzei</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Buzei</em>' attribute.
	 * @see #getBuzei()
	 */
	public void setBuzei(String buzei);

	/**
	 * Returns the value of the '<em><b>Gjahr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gjahr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gjahr</em>' attribute.
	 * @see #setGjahr(java.lang.String)
	 */
	public String getGjahr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getGjahr <em>Gjahr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gjahr</em>' attribute.
	 * @see #getGjahr()
	 */
	public void setGjahr(String gjahr);

	/**
	 * Returns the value of the '<em><b>Ekorg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ekorg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ekorg</em>' attribute.
	 * @see #setEkorg(java.lang.String)
	 */
	public String getEkorg();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getEkorg <em>Ekorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ekorg</em>' attribute.
	 * @see #getEkorg()
	 */
	public void setEkorg(String ekorg);

	/**
	 * Returns the value of the '<em><b>Ekgrp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ekgrp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ekgrp</em>' attribute.
	 * @see #setEkgrp(java.lang.String)
	 */
	public String getEkgrp();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getEkgrp <em>Ekgrp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ekgrp</em>' attribute.
	 * @see #getEkgrp()
	 */
	public void setEkgrp(String ekgrp);

	/**
	 * Returns the value of the '<em><b>Ebeln</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ebeln</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ebeln</em>' attribute.
	 * @see #setEbeln(java.lang.String)
	 */
	public String getEbeln();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getEbeln <em>Ebeln</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ebeln</em>' attribute.
	 * @see #getEbeln()
	 */
	public void setEbeln(String ebeln);

	/**
	 * Returns the value of the '<em><b>Ebelp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ebelp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ebelp</em>' attribute.
	 * @see #setEbelp(java.lang.String)
	 */
	public String getEbelp();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getEbelp <em>Ebelp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ebelp</em>' attribute.
	 * @see #getEbelp()
	 */
	public void setEbelp(String ebelp);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getMatnr <em>Matnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matnr</em>' attribute.
	 * @see #getMatnr()
	 */
	public void setMatnr(String matnr);

	/**
	 * Returns the value of the '<em><b>Matkl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Matkl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Matkl</em>' attribute.
	 * @see #setMatkl(java.lang.String)
	 */
	public String getMatkl();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getMatkl <em>Matkl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matkl</em>' attribute.
	 * @see #getMatkl()
	 */
	public void setMatkl(String matkl);

	/**
	 * Returns the value of the '<em><b>Aufnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Aufnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Aufnr</em>' attribute.
	 * @see #setAufnr(java.lang.String)
	 */
	public String getAufnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getAufnr <em>Aufnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Aufnr</em>' attribute.
	 * @see #getAufnr()
	 */
	public void setAufnr(String aufnr);

	/**
	 * Returns the value of the '<em><b>Menge</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Menge</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Menge</em>' attribute.
	 * @see #setMenge(java.lang.String)
	 */
	public String getMenge();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getMenge <em>Menge</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Menge</em>' attribute.
	 * @see #getMenge()
	 */
	public void setMenge(String menge);

	/**
	 * Returns the value of the '<em><b>Zwrildt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zwrildt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zwrildt</em>' attribute.
	 * @see #setZwrildt(java.util.Date)
	 */
	public Date getZwrildt();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getZwrildt <em>Zwrildt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zwrildt</em>' attribute.
	 * @see #getZwrildt()
	 */
	public void setZwrildt(Date zwrildt);

	/**
	 * Returns the value of the '<em><b>Zwriusr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zwriusr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zwriusr</em>' attribute.
	 * @see #setZwriusr(java.lang.String)
	 */
	public String getZwriusr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getZwriusr <em>Zwriusr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zwriusr</em>' attribute.
	 * @see #getZwriusr()
	 */
	public void setZwriusr(String zwriusr);

	/**
	 * Returns the value of the '<em><b>Ztext</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ztext</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ztext</em>' attribute.
	 * @see #setZtext(java.lang.String)
	 */
	public String getZtext();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmJiesuan.GenlInvoiceList#getZtext <em>Ztext</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ztext</em>' attribute.
	 * @see #getZtext()
	 */
	public void setZtext(String ztext);


}