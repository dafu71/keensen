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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getEbeln <em>Ebeln</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getEbelp <em>Ebelp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getMenge <em>Menge</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getBwart <em>Bwart</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getLfbja <em>Lfbja</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getLfbnr <em>Lfbnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getLfpos <em>Lfpos</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getGrund <em>Grund</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getLgort <em>Lgort</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getSgtxt <em>Sgtxt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getCharg <em>Charg</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface Vwarehourse extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse", "Vwarehourse");

	public final static IObjectFactory<Vwarehourse> FACTORY = new IObjectFactory<Vwarehourse>() {
		public Vwarehourse create() {
			return (Vwarehourse) DataFactory.INSTANCE.create(TYPE);
		}
	};

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getEbeln <em>Ebeln</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getEbelp <em>Ebelp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ebelp</em>' attribute.
	 * @see #getEbelp()
	 */
	public void setEbelp(String ebelp);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getMenge <em>Menge</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Menge</em>' attribute.
	 * @see #getMenge()
	 */
	public void setMenge(String menge);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getBwart <em>Bwart</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bwart</em>' attribute.
	 * @see #getBwart()
	 */
	public void setBwart(String bwart);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getLfbja <em>Lfbja</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getLfbnr <em>Lfbnr</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getLfpos <em>Lfpos</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lfpos</em>' attribute.
	 * @see #getLfpos()
	 */
	public void setLfpos(String lfpos);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getGrund <em>Grund</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Grund</em>' attribute.
	 * @see #getGrund()
	 */
	public void setGrund(String grund);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getLgort <em>Lgort</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lgort</em>' attribute.
	 * @see #getLgort()
	 */
	public void setLgort(String lgort);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getSgtxt <em>Sgtxt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sgtxt</em>' attribute.
	 * @see #getSgtxt()
	 */
	public void setSgtxt(String sgtxt);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.warehouse.SapSrmWarehouse.Vwarehourse#getCharg <em>Charg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Charg</em>' attribute.
	 * @see #getCharg()
	 */
	public void setCharg(String charg);


}