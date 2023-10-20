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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getYtype <em>Ytype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZdata <em>Zdata</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZqual <em>Zqual</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZsupp <em>Zsupp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZcost <em>Zcost</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZqtxi <em>Zqtxi</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZjshz <em>Zjshz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZzhjx <em>Zzhjx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZtlpm <em>Ztlpm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZjxpm <em>Zjxpm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZjxdj <em>Zjxdj</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZbeiz <em>Zbeiz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZstat <em>Zstat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getCreid <em>Creid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getCretm <em>Cretm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getBukrs <em>Bukrs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getWerks <em>Werks</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlSupplyEfficacy extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr", "GenlSupplyEfficacy");

	public final static IObjectFactory<GenlSupplyEfficacy> FACTORY = new IObjectFactory<GenlSupplyEfficacy>() {
		public GenlSupplyEfficacy create() {
			return (GenlSupplyEfficacy) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Ytype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ytype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ytype</em>' attribute.
	 * @see #setYtype(long)
	 */
	public long getYtype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getYtype <em>Ytype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ytype</em>' attribute.
	 * @see #getYtype()
	 */
	public void setYtype(long ytype);

	/**
	 * Returns the value of the '<em><b>Zdata</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zdata</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zdata</em>' attribute.
	 * @see #setZdata(java.lang.String)
	 */
	public String getZdata();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZdata <em>Zdata</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zdata</em>' attribute.
	 * @see #getZdata()
	 */
	public void setZdata(String zdata);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getLifnr <em>Lifnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lifnr</em>' attribute.
	 * @see #getLifnr()
	 */
	public void setLifnr(String lifnr);

	/**
	 * Returns the value of the '<em><b>Zqual</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zqual</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zqual</em>' attribute.
	 * @see #setZqual(java.math.BigDecimal)
	 */
	public BigDecimal getZqual();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZqual <em>Zqual</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zqual</em>' attribute.
	 * @see #getZqual()
	 */
	public void setZqual(BigDecimal zqual);

	/**
	 * Returns the value of the '<em><b>Zsupp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zsupp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zsupp</em>' attribute.
	 * @see #setZsupp(java.math.BigDecimal)
	 */
	public BigDecimal getZsupp();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZsupp <em>Zsupp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zsupp</em>' attribute.
	 * @see #getZsupp()
	 */
	public void setZsupp(BigDecimal zsupp);

	/**
	 * Returns the value of the '<em><b>Zcost</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zcost</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zcost</em>' attribute.
	 * @see #setZcost(java.math.BigDecimal)
	 */
	public BigDecimal getZcost();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZcost <em>Zcost</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zcost</em>' attribute.
	 * @see #getZcost()
	 */
	public void setZcost(BigDecimal zcost);

	/**
	 * Returns the value of the '<em><b>Zqtxi</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zqtxi</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zqtxi</em>' attribute.
	 * @see #setZqtxi(java.math.BigDecimal)
	 */
	public BigDecimal getZqtxi();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZqtxi <em>Zqtxi</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zqtxi</em>' attribute.
	 * @see #getZqtxi()
	 */
	public void setZqtxi(BigDecimal zqtxi);

	/**
	 * Returns the value of the '<em><b>Zjshz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zjshz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zjshz</em>' attribute.
	 * @see #setZjshz(java.math.BigDecimal)
	 */
	public BigDecimal getZjshz();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZjshz <em>Zjshz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zjshz</em>' attribute.
	 * @see #getZjshz()
	 */
	public void setZjshz(BigDecimal zjshz);

	/**
	 * Returns the value of the '<em><b>Zzhjx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zzhjx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zzhjx</em>' attribute.
	 * @see #setZzhjx(java.math.BigDecimal)
	 */
	public BigDecimal getZzhjx();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZzhjx <em>Zzhjx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zzhjx</em>' attribute.
	 * @see #getZzhjx()
	 */
	public void setZzhjx(BigDecimal zzhjx);

	/**
	 * Returns the value of the '<em><b>Ztlpm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ztlpm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ztlpm</em>' attribute.
	 * @see #setZtlpm(java.math.BigDecimal)
	 */
	public BigDecimal getZtlpm();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZtlpm <em>Ztlpm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ztlpm</em>' attribute.
	 * @see #getZtlpm()
	 */
	public void setZtlpm(BigDecimal ztlpm);

	/**
	 * Returns the value of the '<em><b>Zjxpm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zjxpm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zjxpm</em>' attribute.
	 * @see #setZjxpm(java.math.BigDecimal)
	 */
	public BigDecimal getZjxpm();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZjxpm <em>Zjxpm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zjxpm</em>' attribute.
	 * @see #getZjxpm()
	 */
	public void setZjxpm(BigDecimal zjxpm);

	/**
	 * Returns the value of the '<em><b>Zjxdj</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zjxdj</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zjxdj</em>' attribute.
	 * @see #setZjxdj(java.lang.String)
	 */
	public String getZjxdj();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZjxdj <em>Zjxdj</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zjxdj</em>' attribute.
	 * @see #getZjxdj()
	 */
	public void setZjxdj(String zjxdj);

	/**
	 * Returns the value of the '<em><b>Zbeiz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zbeiz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zbeiz</em>' attribute.
	 * @see #setZbeiz(java.lang.String)
	 */
	public String getZbeiz();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZbeiz <em>Zbeiz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zbeiz</em>' attribute.
	 * @see #getZbeiz()
	 */
	public void setZbeiz(String zbeiz);

	/**
	 * Returns the value of the '<em><b>Zstat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zstat</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zstat</em>' attribute.
	 * @see #setZstat(java.lang.String)
	 */
	public String getZstat();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getZstat <em>Zstat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zstat</em>' attribute.
	 * @see #getZstat()
	 */
	public void setZstat(String zstat);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getCreid <em>Creid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getCretm <em>Cretm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cretm</em>' attribute.
	 * @see #getCretm()
	 */
	public void setCretm(Date cretm);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getBukrs <em>Bukrs</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy#getWerks <em>Werks</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Werks</em>' attribute.
	 * @see #getWerks()
	 */
	public void setWerks(String werks);


}