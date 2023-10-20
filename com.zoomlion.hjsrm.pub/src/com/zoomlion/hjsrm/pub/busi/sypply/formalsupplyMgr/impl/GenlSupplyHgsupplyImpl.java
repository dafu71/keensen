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
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply;

import commonj.sdo.Type;

import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getYearr <em>Yearr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getEkorg <em>Ekorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getJydy <em>Jydy</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getGyslx <em>Gyslx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getZgcp <em>Zgcp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getWzlx <em>Wzlx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getWzlb <em>Wzlb</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getGysdz <em>Gysdz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getGyslxr <em>Gyslxr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getGyslxdh <em>Gyslxdh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getText1 <em>Text1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getText2 <em>Text2</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getCreateuserid <em>Createuserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getUpdateuseid <em>Updateuseid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplyHgsupplyImpl#getBukrs <em>Bukrs</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlSupplyHgsupply;
 */

public class GenlSupplyHgsupplyImpl extends ExtendedDataObjectImpl implements GenlSupplyHgsupply {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_LIFNR = 0;
	public final static int INDEX_YEARR = 1;
	public final static int INDEX_EKORG = 2;
	public final static int INDEX_JYDY = 3;
	public final static int INDEX_GYSLX = 4;
	public final static int INDEX_ZGCP = 5;
	public final static int INDEX_WZLX = 6;
	public final static int INDEX_WZLB = 7;
	public final static int INDEX_GYSDZ = 8;
	public final static int INDEX_GYSLXR = 9;
	public final static int INDEX_GYSLXDH = 10;
	public final static int INDEX_TEXT1 = 11;
	public final static int INDEX_TEXT2 = 12;
	public final static int INDEX_CREATETIME = 13;
	public final static int INDEX_CREATEUSERID = 14;
	public final static int INDEX_UPDATETIME = 15;
	public final static int INDEX_UPDATEUSEID = 16;
	public final static int INDEX_DELFLAG = 17;
	public final static int INDEX_BUKRS = 18;
	public final static int SDO_PROPERTY_COUNT = 19;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlSupplyHgsupplyImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlSupplyHgsupplyImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
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
	 * Returns the value of the '<em><b>Yearr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Yearr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Yearr</em>' attribute.
	 * @see #setYearr(java.lang.String)
	 */
	public String getYearr() {
		return DataUtil.toString(super.getByIndex(INDEX_YEARR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getYearr <em>Yearr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Yearr</em>' attribute.
	 * @see #getYearr()
	 */
	public void setYearr(String yearr) {
		super.setByIndex(INDEX_YEARR, yearr);
	}

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
	public String getEkorg() {
		return DataUtil.toString(super.getByIndex(INDEX_EKORG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEkorg <em>Ekorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ekorg</em>' attribute.
	 * @see #getEkorg()
	 */
	public void setEkorg(String ekorg) {
		super.setByIndex(INDEX_EKORG, ekorg);
	}

	/**
	 * Returns the value of the '<em><b>Jydy</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jydy</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jydy</em>' attribute.
	 * @see #setJydy(java.lang.String)
	 */
	public String getJydy() {
		return DataUtil.toString(super.getByIndex(INDEX_JYDY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getJydy <em>Jydy</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jydy</em>' attribute.
	 * @see #getJydy()
	 */
	public void setJydy(String jydy) {
		super.setByIndex(INDEX_JYDY, jydy);
	}

	/**
	 * Returns the value of the '<em><b>Gyslx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gyslx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gyslx</em>' attribute.
	 * @see #setGyslx(java.lang.String)
	 */
	public String getGyslx() {
		return DataUtil.toString(super.getByIndex(INDEX_GYSLX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGyslx <em>Gyslx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gyslx</em>' attribute.
	 * @see #getGyslx()
	 */
	public void setGyslx(String gyslx) {
		super.setByIndex(INDEX_GYSLX, gyslx);
	}

	/**
	 * Returns the value of the '<em><b>Zgcp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zgcp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zgcp</em>' attribute.
	 * @see #setZgcp(java.lang.String)
	 */
	public String getZgcp() {
		return DataUtil.toString(super.getByIndex(INDEX_ZGCP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZgcp <em>Zgcp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zgcp</em>' attribute.
	 * @see #getZgcp()
	 */
	public void setZgcp(String zgcp) {
		super.setByIndex(INDEX_ZGCP, zgcp);
	}

	/**
	 * Returns the value of the '<em><b>Wzlx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wzlx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wzlx</em>' attribute.
	 * @see #setWzlx(java.lang.String)
	 */
	public String getWzlx() {
		return DataUtil.toString(super.getByIndex(INDEX_WZLX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWzlx <em>Wzlx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wzlx</em>' attribute.
	 * @see #getWzlx()
	 */
	public void setWzlx(String wzlx) {
		super.setByIndex(INDEX_WZLX, wzlx);
	}

	/**
	 * Returns the value of the '<em><b>Wzlb</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wzlb</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wzlb</em>' attribute.
	 * @see #setWzlb(java.lang.String)
	 */
	public String getWzlb() {
		return DataUtil.toString(super.getByIndex(INDEX_WZLB, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWzlb <em>Wzlb</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wzlb</em>' attribute.
	 * @see #getWzlb()
	 */
	public void setWzlb(String wzlb) {
		super.setByIndex(INDEX_WZLB, wzlb);
	}

	/**
	 * Returns the value of the '<em><b>Gysdz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gysdz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gysdz</em>' attribute.
	 * @see #setGysdz(java.lang.String)
	 */
	public String getGysdz() {
		return DataUtil.toString(super.getByIndex(INDEX_GYSDZ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGysdz <em>Gysdz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gysdz</em>' attribute.
	 * @see #getGysdz()
	 */
	public void setGysdz(String gysdz) {
		super.setByIndex(INDEX_GYSDZ, gysdz);
	}

	/**
	 * Returns the value of the '<em><b>Gyslxr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gyslxr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gyslxr</em>' attribute.
	 * @see #setGyslxr(java.lang.String)
	 */
	public String getGyslxr() {
		return DataUtil.toString(super.getByIndex(INDEX_GYSLXR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGyslxr <em>Gyslxr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gyslxr</em>' attribute.
	 * @see #getGyslxr()
	 */
	public void setGyslxr(String gyslxr) {
		super.setByIndex(INDEX_GYSLXR, gyslxr);
	}

	/**
	 * Returns the value of the '<em><b>Gyslxdh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gyslxdh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gyslxdh</em>' attribute.
	 * @see #setGyslxdh(java.lang.String)
	 */
	public String getGyslxdh() {
		return DataUtil.toString(super.getByIndex(INDEX_GYSLXDH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGyslxdh <em>Gyslxdh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gyslxdh</em>' attribute.
	 * @see #getGyslxdh()
	 */
	public void setGyslxdh(String gyslxdh) {
		super.setByIndex(INDEX_GYSLXDH, gyslxdh);
	}

	/**
	 * Returns the value of the '<em><b>Text1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Text1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Text1</em>' attribute.
	 * @see #setText1(java.lang.String)
	 */
	public String getText1() {
		return DataUtil.toString(super.getByIndex(INDEX_TEXT1, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getText1 <em>Text1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Text1</em>' attribute.
	 * @see #getText1()
	 */
	public void setText1(String text1) {
		super.setByIndex(INDEX_TEXT1, text1);
	}

	/**
	 * Returns the value of the '<em><b>Text2</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Text2</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Text2</em>' attribute.
	 * @see #setText2(java.lang.String)
	 */
	public String getText2() {
		return DataUtil.toString(super.getByIndex(INDEX_TEXT2, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getText2 <em>Text2</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Text2</em>' attribute.
	 * @see #getText2()
	 */
	public void setText2(String text2) {
		super.setByIndex(INDEX_TEXT2, text2);
	}

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
	public Date getCreatetime() {
		return DataUtil.toDate(super.getByIndex(INDEX_CREATETIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreatetime <em>Createtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createtime</em>' attribute.
	 * @see #getCreatetime()
	 */
	public void setCreatetime(Date createtime) {
		super.setByIndex(INDEX_CREATETIME, createtime);
	}

	/**
	 * Returns the value of the '<em><b>Createuserid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createuserid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createuserid</em>' attribute.
	 * @see #setCreateuserid(java.lang.String)
	 */
	public String getCreateuserid() {
		return DataUtil.toString(super.getByIndex(INDEX_CREATEUSERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreateuserid <em>Createuserid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createuserid</em>' attribute.
	 * @see #getCreateuserid()
	 */
	public void setCreateuserid(String createuserid) {
		super.setByIndex(INDEX_CREATEUSERID, createuserid);
	}

	/**
	 * Returns the value of the '<em><b>Updatetime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Updatetime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Updatetime</em>' attribute.
	 * @see #setUpdatetime(java.util.Date)
	 */
	public Date getUpdatetime() {
		return DataUtil.toDate(super.getByIndex(INDEX_UPDATETIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUpdatetime <em>Updatetime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Updatetime</em>' attribute.
	 * @see #getUpdatetime()
	 */
	public void setUpdatetime(Date updatetime) {
		super.setByIndex(INDEX_UPDATETIME, updatetime);
	}

	/**
	 * Returns the value of the '<em><b>Updateuseid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Updateuseid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Updateuseid</em>' attribute.
	 * @see #setUpdateuseid(java.lang.String)
	 */
	public String getUpdateuseid() {
		return DataUtil.toString(super.getByIndex(INDEX_UPDATEUSEID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUpdateuseid <em>Updateuseid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Updateuseid</em>' attribute.
	 * @see #getUpdateuseid()
	 */
	public void setUpdateuseid(String updateuseid) {
		super.setByIndex(INDEX_UPDATEUSEID, updateuseid);
	}

	/**
	 * Returns the value of the '<em><b>Delflag</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Delflag</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Delflag</em>' attribute.
	 * @see #setDelflag(java.lang.String)
	 */
	public String getDelflag() {
		return DataUtil.toString(super.getByIndex(INDEX_DELFLAG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDelflag <em>Delflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Delflag</em>' attribute.
	 * @see #getDelflag()
	 */
	public void setDelflag(String delflag) {
		super.setByIndex(INDEX_DELFLAG, delflag);
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


}