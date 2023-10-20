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

import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getName1 <em>Name1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getOrt01 <em>Ort01</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getPstlz <em>Pstlz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getTelf1 <em>Telf1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getStras <em>Stras</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getZkfbm <em>Zkfbm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getZkcbm <em>Zkcbm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getZkcrq <em>Zkcrq</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getCreid <em>Creid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getCretm <em>Cretm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getZstus <em>Zstus</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlSupplyLinshi extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr", "GenlSupplyLinshi");

	public final static IObjectFactory<GenlSupplyLinshi> FACTORY = new IObjectFactory<GenlSupplyLinshi>() {
		public GenlSupplyLinshi create() {
			return (GenlSupplyLinshi) DataFactory.INSTANCE.create(TYPE);
		}
	};

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getLifnr <em>Lifnr</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getName1 <em>Name1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Name1</em>' attribute.
	 * @see #getName1()
	 */
	public void setName1(String name1);

	/**
	 * Returns the value of the '<em><b>Ort01</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ort01</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ort01</em>' attribute.
	 * @see #setOrt01(java.lang.String)
	 */
	public String getOrt01();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getOrt01 <em>Ort01</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ort01</em>' attribute.
	 * @see #getOrt01()
	 */
	public void setOrt01(String ort01);

	/**
	 * Returns the value of the '<em><b>Pstlz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Pstlz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Pstlz</em>' attribute.
	 * @see #setPstlz(java.lang.String)
	 */
	public String getPstlz();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getPstlz <em>Pstlz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pstlz</em>' attribute.
	 * @see #getPstlz()
	 */
	public void setPstlz(String pstlz);

	/**
	 * Returns the value of the '<em><b>Telf1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Telf1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Telf1</em>' attribute.
	 * @see #setTelf1(java.lang.String)
	 */
	public String getTelf1();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getTelf1 <em>Telf1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Telf1</em>' attribute.
	 * @see #getTelf1()
	 */
	public void setTelf1(String telf1);

	/**
	 * Returns the value of the '<em><b>Stras</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stras</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stras</em>' attribute.
	 * @see #setStras(java.lang.String)
	 */
	public String getStras();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getStras <em>Stras</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stras</em>' attribute.
	 * @see #getStras()
	 */
	public void setStras(String stras);

	/**
	 * Returns the value of the '<em><b>Zkfbm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zkfbm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zkfbm</em>' attribute.
	 * @see #setZkfbm(java.lang.String)
	 */
	public String getZkfbm();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getZkfbm <em>Zkfbm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zkfbm</em>' attribute.
	 * @see #getZkfbm()
	 */
	public void setZkfbm(String zkfbm);

	/**
	 * Returns the value of the '<em><b>Zkcbm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zkcbm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zkcbm</em>' attribute.
	 * @see #setZkcbm(java.lang.String)
	 */
	public String getZkcbm();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getZkcbm <em>Zkcbm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zkcbm</em>' attribute.
	 * @see #getZkcbm()
	 */
	public void setZkcbm(String zkcbm);

	/**
	 * Returns the value of the '<em><b>Zkcrq</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zkcrq</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zkcrq</em>' attribute.
	 * @see #setZkcrq(java.util.Date)
	 */
	public Date getZkcrq();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getZkcrq <em>Zkcrq</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zkcrq</em>' attribute.
	 * @see #getZkcrq()
	 */
	public void setZkcrq(Date zkcrq);

	/**
	 * Returns the value of the '<em><b>Creid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Creid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Creid</em>' attribute.
	 * @see #setCreid(java.lang.String)
	 */
	public String getCreid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getCreid <em>Creid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Creid</em>' attribute.
	 * @see #getCreid()
	 */
	public void setCreid(String creid);

	/**
	 * Returns the value of the '<em><b>Cretm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Cretm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Cretm</em>' attribute.
	 * @see #setCretm(java.util.Date)
	 */
	public Date getCretm();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getCretm <em>Cretm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cretm</em>' attribute.
	 * @see #getCretm()
	 */
	public void setCretm(Date cretm);

	/**
	 * Returns the value of the '<em><b>Zstus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zstus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zstus</em>' attribute.
	 * @see #setZstus(java.lang.String)
	 */
	public String getZstus();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyLinshi#getZstus <em>Zstus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zstus</em>' attribute.
	 * @see #getZstus()
	 */
	public void setZstus(String zstus);


}