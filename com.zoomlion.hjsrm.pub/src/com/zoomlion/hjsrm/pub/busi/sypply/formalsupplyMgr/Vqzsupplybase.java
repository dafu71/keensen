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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getName1 <em>Name1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getPstlz <em>Pstlz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getOrt01 <em>Ort01</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getTelf1 <em>Telf1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getStras <em>Stras</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getZkfbm <em>Zkfbm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getZkcbm <em>Zkcbm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getZkcrq <em>Zkcrq</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getZstus <em>Zstus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getLprop <em>Lprop</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getLtype <em>Ltype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getBatch <em>Batch</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getLsyst <em>Lsyst</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getLsort <em>Lsort</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getZzyyw <em>Zzyyw</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getCreid <em>Creid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getCretm <em>Cretm</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface Vqzsupplybase extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr", "Vqzsupplybase");

	public final static IObjectFactory<Vqzsupplybase> FACTORY = new IObjectFactory<Vqzsupplybase>() {
		public Vqzsupplybase create() {
			return (Vqzsupplybase) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getLifnr <em>Lifnr</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getName1 <em>Name1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Name1</em>' attribute.
	 * @see #getName1()
	 */
	public void setName1(String name1);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getPstlz <em>Pstlz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pstlz</em>' attribute.
	 * @see #getPstlz()
	 */
	public void setPstlz(String pstlz);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getOrt01 <em>Ort01</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ort01</em>' attribute.
	 * @see #getOrt01()
	 */
	public void setOrt01(String ort01);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getTelf1 <em>Telf1</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getStras <em>Stras</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getZkfbm <em>Zkfbm</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getZkcbm <em>Zkcbm</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getZkcrq <em>Zkcrq</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zkcrq</em>' attribute.
	 * @see #getZkcrq()
	 */
	public void setZkcrq(Date zkcrq);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getZstus <em>Zstus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zstus</em>' attribute.
	 * @see #getZstus()
	 */
	public void setZstus(String zstus);

	/**
	 * Returns the value of the '<em><b>Lprop</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lprop</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lprop</em>' attribute.
	 * @see #setLprop(java.lang.String)
	 */
	public String getLprop();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getLprop <em>Lprop</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lprop</em>' attribute.
	 * @see #getLprop()
	 */
	public void setLprop(String lprop);

	/**
	 * Returns the value of the '<em><b>Ltype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ltype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ltype</em>' attribute.
	 * @see #setLtype(java.lang.String)
	 */
	public String getLtype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getLtype <em>Ltype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ltype</em>' attribute.
	 * @see #getLtype()
	 */
	public void setLtype(String ltype);

	/**
	 * Returns the value of the '<em><b>Batch</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Batch</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Batch</em>' attribute.
	 * @see #setBatch(java.lang.String)
	 */
	public String getBatch();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getBatch <em>Batch</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Batch</em>' attribute.
	 * @see #getBatch()
	 */
	public void setBatch(String batch);

	/**
	 * Returns the value of the '<em><b>Lsyst</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lsyst</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lsyst</em>' attribute.
	 * @see #setLsyst(java.lang.String)
	 */
	public String getLsyst();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getLsyst <em>Lsyst</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lsyst</em>' attribute.
	 * @see #getLsyst()
	 */
	public void setLsyst(String lsyst);

	/**
	 * Returns the value of the '<em><b>Lsort</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Lsort</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Lsort</em>' attribute.
	 * @see #setLsort(java.lang.String)
	 */
	public String getLsort();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getLsort <em>Lsort</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lsort</em>' attribute.
	 * @see #getLsort()
	 */
	public void setLsort(String lsort);

	/**
	 * Returns the value of the '<em><b>Zzyyw</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zzyyw</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zzyyw</em>' attribute.
	 * @see #setZzyyw(java.lang.String)
	 */
	public String getZzyyw();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getZzyyw <em>Zzyyw</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zzyyw</em>' attribute.
	 * @see #getZzyyw()
	 */
	public void setZzyyw(String zzyyw);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getCreid <em>Creid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.Vqzsupplybase#getCretm <em>Cretm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cretm</em>' attribute.
	 * @see #getCretm()
	 */
	public void setCretm(Date cretm);


}