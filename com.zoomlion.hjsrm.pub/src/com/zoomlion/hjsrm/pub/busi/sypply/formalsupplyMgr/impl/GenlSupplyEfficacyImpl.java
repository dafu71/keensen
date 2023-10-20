/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyEfficacy;

import commonj.sdo.Type;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getYtype <em>Ytype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getZdata <em>Zdata</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getZqual <em>Zqual</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getZsupp <em>Zsupp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getZcost <em>Zcost</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getZqtxi <em>Zqtxi</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getZjshz <em>Zjshz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getZzhjx <em>Zzhjx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getZtlpm <em>Ztlpm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getZjxpm <em>Zjxpm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getZjxdj <em>Zjxdj</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getZbeiz <em>Zbeiz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getZstat <em>Zstat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getCreid <em>Creid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getCretm <em>Cretm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getBukrs <em>Bukrs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyEfficacyImpl#getWerks <em>Werks</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlSupplyEfficacy;
 */

public class GenlSupplyEfficacyImpl extends ExtendedDataObjectImpl implements GenlSupplyEfficacy {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_YTYPE = 0;
	public final static int INDEX_ZDATA = 1;
	public final static int INDEX_LIFNR = 2;
	public final static int INDEX_ZQUAL = 3;
	public final static int INDEX_ZSUPP = 4;
	public final static int INDEX_ZCOST = 5;
	public final static int INDEX_ZQTXI = 6;
	public final static int INDEX_ZJSHZ = 7;
	public final static int INDEX_ZZHJX = 8;
	public final static int INDEX_ZTLPM = 9;
	public final static int INDEX_ZJXPM = 10;
	public final static int INDEX_ZJXDJ = 11;
	public final static int INDEX_ZBEIZ = 12;
	public final static int INDEX_ZSTAT = 13;
	public final static int INDEX_CREID = 14;
	public final static int INDEX_CRETM = 15;
	public final static int INDEX_BUKRS = 16;
	public final static int INDEX_WERKS = 17;
	public final static int SDO_PROPERTY_COUNT = 18;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlSupplyEfficacyImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlSupplyEfficacyImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

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
	public long getYtype() {
		return DataUtil.toLong(super.getByIndex(INDEX_YTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getYtype <em>Ytype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ytype</em>' attribute.
	 * @see #getYtype()
	 */
	public void setYtype(long ytype) {
		super.setByIndex(INDEX_YTYPE, ytype);
	}

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
	public String getZdata() {
		return DataUtil.toString(super.getByIndex(INDEX_ZDATA, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZdata <em>Zdata</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zdata</em>' attribute.
	 * @see #getZdata()
	 */
	public void setZdata(String zdata) {
		super.setByIndex(INDEX_ZDATA, zdata);
	}

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
	public String getLifnr() {
		return DataUtil.toString(super.getByIndex(INDEX_LIFNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLifnr <em>Lifnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lifnr</em>' attribute.
	 * @see #getLifnr()
	 */
	public void setLifnr(String lifnr) {
		super.setByIndex(INDEX_LIFNR, lifnr);
	}

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
	public BigDecimal getZqual() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_ZQUAL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZqual <em>Zqual</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zqual</em>' attribute.
	 * @see #getZqual()
	 */
	public void setZqual(BigDecimal zqual) {
		super.setByIndex(INDEX_ZQUAL, zqual);
	}

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
	public BigDecimal getZsupp() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_ZSUPP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZsupp <em>Zsupp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zsupp</em>' attribute.
	 * @see #getZsupp()
	 */
	public void setZsupp(BigDecimal zsupp) {
		super.setByIndex(INDEX_ZSUPP, zsupp);
	}

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
	public BigDecimal getZcost() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_ZCOST, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZcost <em>Zcost</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zcost</em>' attribute.
	 * @see #getZcost()
	 */
	public void setZcost(BigDecimal zcost) {
		super.setByIndex(INDEX_ZCOST, zcost);
	}

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
	public BigDecimal getZqtxi() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_ZQTXI, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZqtxi <em>Zqtxi</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zqtxi</em>' attribute.
	 * @see #getZqtxi()
	 */
	public void setZqtxi(BigDecimal zqtxi) {
		super.setByIndex(INDEX_ZQTXI, zqtxi);
	}

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
	public BigDecimal getZjshz() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_ZJSHZ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZjshz <em>Zjshz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zjshz</em>' attribute.
	 * @see #getZjshz()
	 */
	public void setZjshz(BigDecimal zjshz) {
		super.setByIndex(INDEX_ZJSHZ, zjshz);
	}

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
	public BigDecimal getZzhjx() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_ZZHJX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZzhjx <em>Zzhjx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zzhjx</em>' attribute.
	 * @see #getZzhjx()
	 */
	public void setZzhjx(BigDecimal zzhjx) {
		super.setByIndex(INDEX_ZZHJX, zzhjx);
	}

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
	public BigDecimal getZtlpm() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_ZTLPM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZtlpm <em>Ztlpm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ztlpm</em>' attribute.
	 * @see #getZtlpm()
	 */
	public void setZtlpm(BigDecimal ztlpm) {
		super.setByIndex(INDEX_ZTLPM, ztlpm);
	}

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
	public BigDecimal getZjxpm() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_ZJXPM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZjxpm <em>Zjxpm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zjxpm</em>' attribute.
	 * @see #getZjxpm()
	 */
	public void setZjxpm(BigDecimal zjxpm) {
		super.setByIndex(INDEX_ZJXPM, zjxpm);
	}

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
	public String getZjxdj() {
		return DataUtil.toString(super.getByIndex(INDEX_ZJXDJ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZjxdj <em>Zjxdj</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zjxdj</em>' attribute.
	 * @see #getZjxdj()
	 */
	public void setZjxdj(String zjxdj) {
		super.setByIndex(INDEX_ZJXDJ, zjxdj);
	}

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
	public String getZbeiz() {
		return DataUtil.toString(super.getByIndex(INDEX_ZBEIZ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZbeiz <em>Zbeiz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zbeiz</em>' attribute.
	 * @see #getZbeiz()
	 */
	public void setZbeiz(String zbeiz) {
		super.setByIndex(INDEX_ZBEIZ, zbeiz);
	}

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
	public String getZstat() {
		return DataUtil.toString(super.getByIndex(INDEX_ZSTAT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZstat <em>Zstat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zstat</em>' attribute.
	 * @see #getZstat()
	 */
	public void setZstat(String zstat) {
		super.setByIndex(INDEX_ZSTAT, zstat);
	}

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
	public String getCreid() {
		return DataUtil.toString(super.getByIndex(INDEX_CREID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreid <em>Creid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Creid</em>' attribute.
	 * @see #getCreid()
	 */
	public void setCreid(String creid) {
		super.setByIndex(INDEX_CREID, creid);
	}

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
	public Date getCretm() {
		return DataUtil.toDate(super.getByIndex(INDEX_CRETM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCretm <em>Cretm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cretm</em>' attribute.
	 * @see #getCretm()
	 */
	public void setCretm(Date cretm) {
		super.setByIndex(INDEX_CRETM, cretm);
	}

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
	public String getBukrs() {
		return DataUtil.toString(super.getByIndex(INDEX_BUKRS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBukrs <em>Bukrs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bukrs</em>' attribute.
	 * @see #getBukrs()
	 */
	public void setBukrs(String bukrs) {
		super.setByIndex(INDEX_BUKRS, bukrs);
	}

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
	public String getWerks() {
		return DataUtil.toString(super.getByIndex(INDEX_WERKS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWerks <em>Werks</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Werks</em>' attribute.
	 * @see #getWerks()
	 */
	public void setWerks(String werks) {
		super.setByIndex(INDEX_WERKS, werks);
	}


}