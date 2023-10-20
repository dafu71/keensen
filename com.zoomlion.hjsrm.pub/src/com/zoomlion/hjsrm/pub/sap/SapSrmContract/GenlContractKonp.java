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

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getKnumh <em>Knumh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getKopos <em>Kopos</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getKappl <em>Kappl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getKschl <em>Kschl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getKbetr <em>Kbetr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getKonwa <em>Konwa</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getKpein <em>Kpein</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getKmein <em>Kmein</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getLoevmKo <em>LoevmKo</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlContractKonp extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.SapSrmContract", "GenlContractKonp");

	public final static IObjectFactory<GenlContractKonp> FACTORY = new IObjectFactory<GenlContractKonp>() {
		public GenlContractKonp create() {
			return (GenlContractKonp) DataFactory.INSTANCE.create(TYPE);
		}
	};

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getKnumh <em>Knumh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Knumh</em>' attribute.
	 * @see #getKnumh()
	 */
	public void setKnumh(String knumh);

	/**
	 * Returns the value of the '<em><b>Kopos</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kopos</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kopos</em>' attribute.
	 * @see #setKopos(java.lang.String)
	 */
	public String getKopos();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getKopos <em>Kopos</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kopos</em>' attribute.
	 * @see #getKopos()
	 */
	public void setKopos(String kopos);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getKappl <em>Kappl</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getKschl <em>Kschl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kschl</em>' attribute.
	 * @see #getKschl()
	 */
	public void setKschl(String kschl);

	/**
	 * Returns the value of the '<em><b>Kbetr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kbetr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kbetr</em>' attribute.
	 * @see #setKbetr(java.lang.String)
	 */
	public String getKbetr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getKbetr <em>Kbetr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kbetr</em>' attribute.
	 * @see #getKbetr()
	 */
	public void setKbetr(String kbetr);

	/**
	 * Returns the value of the '<em><b>Konwa</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Konwa</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Konwa</em>' attribute.
	 * @see #setKonwa(java.lang.String)
	 */
	public String getKonwa();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getKonwa <em>Konwa</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Konwa</em>' attribute.
	 * @see #getKonwa()
	 */
	public void setKonwa(String konwa);

	/**
	 * Returns the value of the '<em><b>Kpein</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Kpein</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Kpein</em>' attribute.
	 * @see #setKpein(java.lang.String)
	 */
	public String getKpein();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getKpein <em>Kpein</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kpein</em>' attribute.
	 * @see #getKpein()
	 */
	public void setKpein(String kpein);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getKmein <em>Kmein</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Kmein</em>' attribute.
	 * @see #getKmein()
	 */
	public void setKmein(String kmein);

	/**
	 * Returns the value of the '<em><b>LoevmKo</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>LoevmKo</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>LoevmKo</em>' attribute.
	 * @see #setLoevmKo(java.lang.String)
	 */
	public String getLoevmKo();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmContract.GenlContractKonp#getLoevmKo <em>LoevmKo</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>LoevmKo</em>' attribute.
	 * @see #getLoevmKo()
	 */
	public void setLoevmKo(String loevmKo);


}