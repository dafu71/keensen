/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.inspect.Inspect;

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
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getQjrecordid <em>Qjrecordid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getName1 <em>Name1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getZasnh <em>Zasnh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getZasnp <em>Zasnp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getEbeln <em>Ebeln</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getEbelp <em>Ebelp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getTxz01 <em>Txz01</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getWltm <em>Wltm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getJgpd <em>Jgpd</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getWerks <em>Werks</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getTrant <em>Trant</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getZcbz <em>Zcbz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getZjlb <em>Zjlb</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlInspectQjnote extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.inspect.Inspect", "GenlInspectQjnote");

	public final static IObjectFactory<GenlInspectQjnote> FACTORY = new IObjectFactory<GenlInspectQjnote>() {
		public GenlInspectQjnote create() {
			return (GenlInspectQjnote) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Qjrecordid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qjrecordid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qjrecordid</em>' attribute.
	 * @see #setQjrecordid(java.lang.String)
	 */
	public String getQjrecordid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getQjrecordid <em>Qjrecordid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qjrecordid</em>' attribute.
	 * @see #getQjrecordid()
	 */
	public void setQjrecordid(String qjrecordid);

	/**
	 * Returns the value of the '<em><b>Createtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createtime</em>' attribute.
	 * @see #setCreatetime(java.util.Date)
	 */
	public Date getCreatetime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getCreatetime <em>Createtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createtime</em>' attribute.
	 * @see #getCreatetime()
	 */
	public void setCreatetime(Date createtime);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getLifnr <em>Lifnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lifnr</em>' attribute.
	 * @see #getLifnr()
	 */
	public void setLifnr(String lifnr);

	/**
	 * Returns the value of the '<em><b>Name1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Name1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Name1</em>' attribute.
	 * @see #setName1(java.lang.String)
	 */
	public String getName1();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getName1 <em>Name1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Name1</em>' attribute.
	 * @see #getName1()
	 */
	public void setName1(String name1);

	/**
	 * Returns the value of the '<em><b>Zasnh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zasnh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zasnh</em>' attribute.
	 * @see #setZasnh(java.lang.String)
	 */
	public String getZasnh();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getZasnh <em>Zasnh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zasnh</em>' attribute.
	 * @see #getZasnh()
	 */
	public void setZasnh(String zasnh);

	/**
	 * Returns the value of the '<em><b>Zasnp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zasnp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zasnp</em>' attribute.
	 * @see #setZasnp(java.lang.String)
	 */
	public String getZasnp();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getZasnp <em>Zasnp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zasnp</em>' attribute.
	 * @see #getZasnp()
	 */
	public void setZasnp(String zasnp);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getEbeln <em>Ebeln</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getEbelp <em>Ebelp</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getMatnr <em>Matnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matnr</em>' attribute.
	 * @see #getMatnr()
	 */
	public void setMatnr(String matnr);

	/**
	 * Returns the value of the '<em><b>Txz01</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Txz01</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Txz01</em>' attribute.
	 * @see #setTxz01(java.lang.String)
	 */
	public String getTxz01();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getTxz01 <em>Txz01</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Txz01</em>' attribute.
	 * @see #getTxz01()
	 */
	public void setTxz01(String txz01);

	/**
	 * Returns the value of the '<em><b>Wltm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wltm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wltm</em>' attribute.
	 * @see #setWltm(java.lang.String)
	 */
	public String getWltm();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getWltm <em>Wltm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wltm</em>' attribute.
	 * @see #getWltm()
	 */
	public void setWltm(String wltm);

	/**
	 * Returns the value of the '<em><b>Jgpd</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jgpd</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jgpd</em>' attribute.
	 * @see #setJgpd(java.lang.String)
	 */
	public String getJgpd();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getJgpd <em>Jgpd</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jgpd</em>' attribute.
	 * @see #getJgpd()
	 */
	public void setJgpd(String jgpd);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getWerks <em>Werks</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Werks</em>' attribute.
	 * @see #getWerks()
	 */
	public void setWerks(String werks);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getTranu <em>Tranu</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getTrant <em>Trant</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Trant</em>' attribute.
	 * @see #getTrant()
	 */
	public void setTrant(Date trant);

	/**
	 * Returns the value of the '<em><b>Zcbz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zcbz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zcbz</em>' attribute.
	 * @see #setZcbz(java.lang.String)
	 */
	public String getZcbz();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getZcbz <em>Zcbz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zcbz</em>' attribute.
	 * @see #getZcbz()
	 */
	public void setZcbz(String zcbz);

	/**
	 * Returns the value of the '<em><b>Zjlb</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zjlb</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zjlb</em>' attribute.
	 * @see #setZjlb(java.lang.String)
	 */
	public String getZjlb();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectQjnote#getZjlb <em>Zjlb</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zjlb</em>' attribute.
	 * @see #getZjlb()
	 */
	public void setZjlb(String zjlb);


}