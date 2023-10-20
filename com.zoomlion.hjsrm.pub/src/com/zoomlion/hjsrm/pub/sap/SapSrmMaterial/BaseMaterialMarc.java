/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.sap.SapSrmMaterial;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getWerks <em>Werks</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getLvorm <em>Lvorm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getMmsta <em>Mmsta</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getEkgrp <em>Ekgrp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getLgfsb <em>Lgfsb</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getMaabc <em>Maabc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getDismm <em>Dismm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getMinbe <em>Minbe</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getBstmi <em>Bstmi</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getBstma <em>Bstma</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getMabst <em>Mabst</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getLgpro <em>Lgpro</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getPlifz <em>Plifz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getEisbe <em>Eisbe</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getEislo <em>Eislo</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface BaseMaterialMarc extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.sap.SapSrmMaterial", "BaseMaterialMarc");

	public final static IObjectFactory<BaseMaterialMarc> FACTORY = new IObjectFactory<BaseMaterialMarc>() {
		public BaseMaterialMarc create() {
			return (BaseMaterialMarc) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getMatnr <em>Matnr</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getWerks <em>Werks</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Werks</em>' attribute.
	 * @see #getWerks()
	 */
	public void setWerks(String werks);

	/**
	 * Returns the value of the '<em><b>Lvorm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lvorm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lvorm</em>' attribute.
	 * @see #setLvorm(java.lang.String)
	 */
	public String getLvorm();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getLvorm <em>Lvorm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lvorm</em>' attribute.
	 * @see #getLvorm()
	 */
	public void setLvorm(String lvorm);

	/**
	 * Returns the value of the '<em><b>Mmsta</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mmsta</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mmsta</em>' attribute.
	 * @see #setMmsta(java.lang.String)
	 */
	public String getMmsta();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getMmsta <em>Mmsta</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mmsta</em>' attribute.
	 * @see #getMmsta()
	 */
	public void setMmsta(String mmsta);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getEkgrp <em>Ekgrp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ekgrp</em>' attribute.
	 * @see #getEkgrp()
	 */
	public void setEkgrp(String ekgrp);

	/**
	 * Returns the value of the '<em><b>Lgfsb</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lgfsb</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lgfsb</em>' attribute.
	 * @see #setLgfsb(java.lang.String)
	 */
	public String getLgfsb();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getLgfsb <em>Lgfsb</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lgfsb</em>' attribute.
	 * @see #getLgfsb()
	 */
	public void setLgfsb(String lgfsb);

	/**
	 * Returns the value of the '<em><b>Maabc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Maabc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Maabc</em>' attribute.
	 * @see #setMaabc(java.lang.String)
	 */
	public String getMaabc();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getMaabc <em>Maabc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Maabc</em>' attribute.
	 * @see #getMaabc()
	 */
	public void setMaabc(String maabc);

	/**
	 * Returns the value of the '<em><b>Dismm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Dismm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Dismm</em>' attribute.
	 * @see #setDismm(java.lang.String)
	 */
	public String getDismm();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getDismm <em>Dismm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dismm</em>' attribute.
	 * @see #getDismm()
	 */
	public void setDismm(String dismm);

	/**
	 * Returns the value of the '<em><b>Minbe</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Minbe</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Minbe</em>' attribute.
	 * @see #setMinbe(java.lang.String)
	 */
	public String getMinbe();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getMinbe <em>Minbe</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Minbe</em>' attribute.
	 * @see #getMinbe()
	 */
	public void setMinbe(String minbe);

	/**
	 * Returns the value of the '<em><b>Bstmi</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bstmi</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bstmi</em>' attribute.
	 * @see #setBstmi(java.lang.String)
	 */
	public String getBstmi();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getBstmi <em>Bstmi</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bstmi</em>' attribute.
	 * @see #getBstmi()
	 */
	public void setBstmi(String bstmi);

	/**
	 * Returns the value of the '<em><b>Bstma</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bstma</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bstma</em>' attribute.
	 * @see #setBstma(java.lang.String)
	 */
	public String getBstma();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getBstma <em>Bstma</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bstma</em>' attribute.
	 * @see #getBstma()
	 */
	public void setBstma(String bstma);

	/**
	 * Returns the value of the '<em><b>Mabst</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mabst</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mabst</em>' attribute.
	 * @see #setMabst(java.lang.String)
	 */
	public String getMabst();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getMabst <em>Mabst</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mabst</em>' attribute.
	 * @see #getMabst()
	 */
	public void setMabst(String mabst);

	/**
	 * Returns the value of the '<em><b>Lgpro</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lgpro</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lgpro</em>' attribute.
	 * @see #setLgpro(java.lang.String)
	 */
	public String getLgpro();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getLgpro <em>Lgpro</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lgpro</em>' attribute.
	 * @see #getLgpro()
	 */
	public void setLgpro(String lgpro);

	/**
	 * Returns the value of the '<em><b>Plifz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plifz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plifz</em>' attribute.
	 * @see #setPlifz(java.lang.String)
	 */
	public String getPlifz();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getPlifz <em>Plifz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plifz</em>' attribute.
	 * @see #getPlifz()
	 */
	public void setPlifz(String plifz);

	/**
	 * Returns the value of the '<em><b>Eisbe</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Eisbe</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Eisbe</em>' attribute.
	 * @see #setEisbe(java.lang.String)
	 */
	public String getEisbe();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getEisbe <em>Eisbe</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Eisbe</em>' attribute.
	 * @see #getEisbe()
	 */
	public void setEisbe(String eisbe);

	/**
	 * Returns the value of the '<em><b>Eislo</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Eislo</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Eislo</em>' attribute.
	 * @see #setEislo(java.lang.String)
	 */
	public String getEislo();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc#getEislo <em>Eislo</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Eislo</em>' attribute.
	 * @see #getEislo()
	 */
	public void setEislo(String eislo);


}