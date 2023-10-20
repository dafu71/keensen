/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getMblnr <em>Mblnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getMjahr <em>Mjahr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getZeile <em>Zeile</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getBwart <em>Bwart</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getWerks <em>Werks</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getLgort <em>Lgort</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getCharg <em>Charg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getShkzg <em>Shkzg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getWaers <em>Waers</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getMenge <em>Menge</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getMeins <em>Meins</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getEbeln <em>Ebeln</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getEbelp <em>Ebelp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getLfbja <em>Lfbja</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getLfbnr <em>Lfbnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getLfpos <em>Lfpos</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getSjahr <em>Sjahr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getSmbln <em>Smbln</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getSmblp <em>Smblp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getBukrs <em>Bukrs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getDmbtr <em>Dmbtr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getGrund <em>Grund</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getErfmg <em>Erfmg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getErfme <em>Erfme</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getSgtxt <em>Sgtxt</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlReceiptsMseg extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse", "GenlReceiptsMseg");

	public final static IObjectFactory<GenlReceiptsMseg> FACTORY = new IObjectFactory<GenlReceiptsMseg>() {
		public GenlReceiptsMseg create() {
			return (GenlReceiptsMseg) DataFactory.INSTANCE.create(TYPE);
		}
	};

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getMblnr <em>Mblnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mblnr</em>' attribute.
	 * @see #getMblnr()
	 */
	public void setMblnr(String mblnr);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getMjahr <em>Mjahr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mjahr</em>' attribute.
	 * @see #getMjahr()
	 */
	public void setMjahr(String mjahr);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getZeile <em>Zeile</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zeile</em>' attribute.
	 * @see #getZeile()
	 */
	public void setZeile(String zeile);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getBwart <em>Bwart</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bwart</em>' attribute.
	 * @see #getBwart()
	 */
	public void setBwart(String bwart);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getMatnr <em>Matnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matnr</em>' attribute.
	 * @see #getMatnr()
	 */
	public void setMatnr(String matnr);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getWerks <em>Werks</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Werks</em>' attribute.
	 * @see #getWerks()
	 */
	public void setWerks(String werks);

	/**
	 * Returns the value of the '<em><b>Lgort</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lgort</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lgort</em>' attribute.
	 * @see #setLgort(java.lang.String)
	 */
	public String getLgort();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getLgort <em>Lgort</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lgort</em>' attribute.
	 * @see #getLgort()
	 */
	public void setLgort(String lgort);

	/**
	 * Returns the value of the '<em><b>Charg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Charg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Charg</em>' attribute.
	 * @see #setCharg(java.lang.String)
	 */
	public String getCharg();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getCharg <em>Charg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Charg</em>' attribute.
	 * @see #getCharg()
	 */
	public void setCharg(String charg);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getLifnr <em>Lifnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lifnr</em>' attribute.
	 * @see #getLifnr()
	 */
	public void setLifnr(String lifnr);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getShkzg <em>Shkzg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Shkzg</em>' attribute.
	 * @see #getShkzg()
	 */
	public void setShkzg(String shkzg);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getWaers <em>Waers</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Waers</em>' attribute.
	 * @see #getWaers()
	 */
	public void setWaers(String waers);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getMenge <em>Menge</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Menge</em>' attribute.
	 * @see #getMenge()
	 */
	public void setMenge(String menge);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getMeins <em>Meins</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meins</em>' attribute.
	 * @see #getMeins()
	 */
	public void setMeins(String meins);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getEbeln <em>Ebeln</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getEbelp <em>Ebelp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ebelp</em>' attribute.
	 * @see #getEbelp()
	 */
	public void setEbelp(String ebelp);

	/**
	 * Returns the value of the '<em><b>Lfbja</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lfbja</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lfbja</em>' attribute.
	 * @see #setLfbja(java.lang.String)
	 */
	public String getLfbja();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getLfbja <em>Lfbja</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lfbja</em>' attribute.
	 * @see #getLfbja()
	 */
	public void setLfbja(String lfbja);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getLfbnr <em>Lfbnr</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getLfpos <em>Lfpos</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lfpos</em>' attribute.
	 * @see #getLfpos()
	 */
	public void setLfpos(String lfpos);

	/**
	 * Returns the value of the '<em><b>Sjahr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sjahr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sjahr</em>' attribute.
	 * @see #setSjahr(java.lang.String)
	 */
	public String getSjahr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getSjahr <em>Sjahr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sjahr</em>' attribute.
	 * @see #getSjahr()
	 */
	public void setSjahr(String sjahr);

	/**
	 * Returns the value of the '<em><b>Smbln</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Smbln</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Smbln</em>' attribute.
	 * @see #setSmbln(java.lang.String)
	 */
	public String getSmbln();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getSmbln <em>Smbln</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Smbln</em>' attribute.
	 * @see #getSmbln()
	 */
	public void setSmbln(String smbln);

	/**
	 * Returns the value of the '<em><b>Smblp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Smblp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Smblp</em>' attribute.
	 * @see #setSmblp(java.lang.String)
	 */
	public String getSmblp();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getSmblp <em>Smblp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Smblp</em>' attribute.
	 * @see #getSmblp()
	 */
	public void setSmblp(String smblp);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getBukrs <em>Bukrs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bukrs</em>' attribute.
	 * @see #getBukrs()
	 */
	public void setBukrs(String bukrs);

	/**
	 * Returns the value of the '<em><b>Dmbtr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Dmbtr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Dmbtr</em>' attribute.
	 * @see #setDmbtr(java.lang.String)
	 */
	public String getDmbtr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getDmbtr <em>Dmbtr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dmbtr</em>' attribute.
	 * @see #getDmbtr()
	 */
	public void setDmbtr(String dmbtr);

	/**
	 * Returns the value of the '<em><b>Grund</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Grund</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Grund</em>' attribute.
	 * @see #setGrund(java.lang.String)
	 */
	public String getGrund();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getGrund <em>Grund</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Grund</em>' attribute.
	 * @see #getGrund()
	 */
	public void setGrund(String grund);

	/**
	 * Returns the value of the '<em><b>Erfmg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Erfmg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Erfmg</em>' attribute.
	 * @see #setErfmg(java.lang.String)
	 */
	public String getErfmg();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getErfmg <em>Erfmg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Erfmg</em>' attribute.
	 * @see #getErfmg()
	 */
	public void setErfmg(String erfmg);

	/**
	 * Returns the value of the '<em><b>Erfme</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Erfme</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Erfme</em>' attribute.
	 * @see #setErfme(java.lang.String)
	 */
	public String getErfme();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getErfme <em>Erfme</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Erfme</em>' attribute.
	 * @see #getErfme()
	 */
	public void setErfme(String erfme);

	/**
	 * Returns the value of the '<em><b>Sgtxt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sgtxt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sgtxt</em>' attribute.
	 * @see #setSgtxt(java.lang.String)
	 */
	public String getSgtxt();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.GenlReceiptsMseg#getSgtxt <em>Sgtxt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sgtxt</em>' attribute.
	 * @see #getSgtxt()
	 */
	public void setSgtxt(String sgtxt);


}