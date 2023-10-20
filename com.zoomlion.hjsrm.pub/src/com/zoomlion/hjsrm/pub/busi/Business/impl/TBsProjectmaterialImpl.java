/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.Business.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.busi.Business.TBsProjectmaterial;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getPlaninfopkid <em>Planinfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getWorklistinfopkid <em>Worklistinfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getBusifeepkid <em>Busifeepkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getWorkitemid <em>Workitemid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getBusitype <em>Busitype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getInbatchid <em>Inbatchid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getMaterialmodelpkid <em>Materialmodelpkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getCount <em>Count</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getPrice <em>Price</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getChargeflag <em>Chargeflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getChrgsum <em>Chrgsum</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getPaidsum <em>Paidsum</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getUnuseflag <em>Unuseflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getCreateorgid <em>Createorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getBillingby <em>Billingby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getBillingtime <em>Billingtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getConstructionorgid <em>Constructionorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getBuyway <em>Buyway</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getRecordedcompany <em>Recordedcompany</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getFeebelong <em>Feebelong</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getIsdesign <em>Isdesign</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsProjectmaterialImpl#getConstructionname <em>Constructionname</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TBsProjectmaterial;
 */

public class TBsProjectmaterialImpl extends ExtendedDataObjectImpl implements TBsProjectmaterial {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_PLANINFOPKID = 1;
	public final static int INDEX_WORKLISTINFOPKID = 2;
	public final static int INDEX_BUSIFEEPKID = 3;
	public final static int INDEX_WORKITEMID = 4;
	public final static int INDEX_BUSITYPE = 5;
	public final static int INDEX_INBATCHID = 6;
	public final static int INDEX_USERID = 7;
	public final static int INDEX_MATERIALMODELPKID = 8;
	public final static int INDEX_COUNT = 9;
	public final static int INDEX_PRICE = 10;
	public final static int INDEX_CHARGEFLAG = 11;
	public final static int INDEX_CHRGSUM = 12;
	public final static int INDEX_PAIDSUM = 13;
	public final static int INDEX_UNUSEFLAG = 14;
	public final static int INDEX_REMARK = 15;
	public final static int INDEX_STAND = 16;
	public final static int INDEX_CREATEBY = 17;
	public final static int INDEX_CREATEORGID = 18;
	public final static int INDEX_CREATETIME = 19;
	public final static int INDEX_MODIFYBY = 20;
	public final static int INDEX_UPDATETIME = 21;
	public final static int INDEX_DATAORGID = 22;
	public final static int INDEX_DELFLAG = 23;
	public final static int INDEX_BILLINGBY = 24;
	public final static int INDEX_BILLINGTIME = 25;
	public final static int INDEX_CONSTRUCTIONORGID = 26;
	public final static int INDEX_BUYWAY = 27;
	public final static int INDEX_RECORDEDCOMPANY = 28;
	public final static int INDEX_FEEBELONG = 29;
	public final static int INDEX_ISDESIGN = 30;
	public final static int INDEX_CONSTRUCTIONNAME = 31;
	public final static int SDO_PROPERTY_COUNT = 32;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsProjectmaterialImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsProjectmaterialImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Pkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Pkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Pkid</em>' attribute.
	 * @see #setPkid(java.lang.String)
	 */
	public String getPkid() {
		return DataUtil.toString(super.getByIndex(INDEX_PKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPkid <em>Pkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pkid</em>' attribute.
	 * @see #getPkid()
	 */
	public void setPkid(String pkid) {
		super.setByIndex(INDEX_PKID, pkid);
	}

	/**
	 * Returns the value of the '<em><b>Planinfopkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Planinfopkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Planinfopkid</em>' attribute.
	 * @see #setPlaninfopkid(java.lang.String)
	 */
	public String getPlaninfopkid() {
		return DataUtil.toString(super.getByIndex(INDEX_PLANINFOPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPlaninfopkid <em>Planinfopkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Planinfopkid</em>' attribute.
	 * @see #getPlaninfopkid()
	 */
	public void setPlaninfopkid(String planinfopkid) {
		super.setByIndex(INDEX_PLANINFOPKID, planinfopkid);
	}

	/**
	 * Returns the value of the '<em><b>Worklistinfopkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Worklistinfopkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Worklistinfopkid</em>' attribute.
	 * @see #setWorklistinfopkid(java.lang.String)
	 */
	public String getWorklistinfopkid() {
		return DataUtil.toString(super.getByIndex(INDEX_WORKLISTINFOPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWorklistinfopkid <em>Worklistinfopkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Worklistinfopkid</em>' attribute.
	 * @see #getWorklistinfopkid()
	 */
	public void setWorklistinfopkid(String worklistinfopkid) {
		super.setByIndex(INDEX_WORKLISTINFOPKID, worklistinfopkid);
	}

	/**
	 * Returns the value of the '<em><b>Busifeepkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Busifeepkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Busifeepkid</em>' attribute.
	 * @see #setBusifeepkid(java.lang.String)
	 */
	public String getBusifeepkid() {
		return DataUtil.toString(super.getByIndex(INDEX_BUSIFEEPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBusifeepkid <em>Busifeepkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busifeepkid</em>' attribute.
	 * @see #getBusifeepkid()
	 */
	public void setBusifeepkid(String busifeepkid) {
		super.setByIndex(INDEX_BUSIFEEPKID, busifeepkid);
	}

	/**
	 * Returns the value of the '<em><b>Workitemid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Workitemid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Workitemid</em>' attribute.
	 * @see #setWorkitemid(long)
	 */
	public long getWorkitemid() {
		return DataUtil.toLong(super.getByIndex(INDEX_WORKITEMID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWorkitemid <em>Workitemid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Workitemid</em>' attribute.
	 * @see #getWorkitemid()
	 */
	public void setWorkitemid(long workitemid) {
		super.setByIndex(INDEX_WORKITEMID, workitemid);
	}

	/**
	 * Returns the value of the '<em><b>Busitype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Busitype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Busitype</em>' attribute.
	 * @see #setBusitype(java.lang.String)
	 */
	public String getBusitype() {
		return DataUtil.toString(super.getByIndex(INDEX_BUSITYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBusitype <em>Busitype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busitype</em>' attribute.
	 * @see #getBusitype()
	 */
	public void setBusitype(String busitype) {
		super.setByIndex(INDEX_BUSITYPE, busitype);
	}

	/**
	 * Returns the value of the '<em><b>Inbatchid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Inbatchid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Inbatchid</em>' attribute.
	 * @see #setInbatchid(int)
	 */
	public int getInbatchid() {
		return DataUtil.toInt(super.getByIndex(INDEX_INBATCHID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getInbatchid <em>Inbatchid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Inbatchid</em>' attribute.
	 * @see #getInbatchid()
	 */
	public void setInbatchid(int inbatchid) {
		super.setByIndex(INDEX_INBATCHID, inbatchid);
	}

	/**
	 * Returns the value of the '<em><b>Userid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Userid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Userid</em>' attribute.
	 * @see #setUserid(java.lang.String)
	 */
	public String getUserid() {
		return DataUtil.toString(super.getByIndex(INDEX_USERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUserid <em>Userid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Userid</em>' attribute.
	 * @see #getUserid()
	 */
	public void setUserid(String userid) {
		super.setByIndex(INDEX_USERID, userid);
	}

	/**
	 * Returns the value of the '<em><b>Materialmodelpkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Materialmodelpkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Materialmodelpkid</em>' attribute.
	 * @see #setMaterialmodelpkid(java.lang.String)
	 */
	public String getMaterialmodelpkid() {
		return DataUtil.toString(super.getByIndex(INDEX_MATERIALMODELPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMaterialmodelpkid <em>Materialmodelpkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Materialmodelpkid</em>' attribute.
	 * @see #getMaterialmodelpkid()
	 */
	public void setMaterialmodelpkid(String materialmodelpkid) {
		super.setByIndex(INDEX_MATERIALMODELPKID, materialmodelpkid);
	}

	/**
	 * Returns the value of the '<em><b>Count</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Count</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Count</em>' attribute.
	 * @see #setCount(java.math.BigDecimal)
	 */
	public BigDecimal getCount() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_COUNT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCount <em>Count</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Count</em>' attribute.
	 * @see #getCount()
	 */
	public void setCount(BigDecimal count) {
		super.setByIndex(INDEX_COUNT, count);
	}

	/**
	 * Returns the value of the '<em><b>Price</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Price</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Price</em>' attribute.
	 * @see #setPrice(java.math.BigDecimal)
	 */
	public BigDecimal getPrice() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_PRICE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPrice <em>Price</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Price</em>' attribute.
	 * @see #getPrice()
	 */
	public void setPrice(BigDecimal price) {
		super.setByIndex(INDEX_PRICE, price);
	}

	/**
	 * Returns the value of the '<em><b>Chargeflag</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Chargeflag</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Chargeflag</em>' attribute.
	 * @see #setChargeflag(java.lang.String)
	 */
	public String getChargeflag() {
		return DataUtil.toString(super.getByIndex(INDEX_CHARGEFLAG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getChargeflag <em>Chargeflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Chargeflag</em>' attribute.
	 * @see #getChargeflag()
	 */
	public void setChargeflag(String chargeflag) {
		super.setByIndex(INDEX_CHARGEFLAG, chargeflag);
	}

	/**
	 * Returns the value of the '<em><b>Chrgsum</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Chrgsum</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Chrgsum</em>' attribute.
	 * @see #setChrgsum(java.math.BigDecimal)
	 */
	public BigDecimal getChrgsum() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_CHRGSUM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getChrgsum <em>Chrgsum</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Chrgsum</em>' attribute.
	 * @see #getChrgsum()
	 */
	public void setChrgsum(BigDecimal chrgsum) {
		super.setByIndex(INDEX_CHRGSUM, chrgsum);
	}

	/**
	 * Returns the value of the '<em><b>Paidsum</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paidsum</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paidsum</em>' attribute.
	 * @see #setPaidsum(java.math.BigDecimal)
	 */
	public BigDecimal getPaidsum() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_PAIDSUM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPaidsum <em>Paidsum</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paidsum</em>' attribute.
	 * @see #getPaidsum()
	 */
	public void setPaidsum(BigDecimal paidsum) {
		super.setByIndex(INDEX_PAIDSUM, paidsum);
	}

	/**
	 * Returns the value of the '<em><b>Unuseflag</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Unuseflag</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Unuseflag</em>' attribute.
	 * @see #setUnuseflag(java.lang.String)
	 */
	public String getUnuseflag() {
		return DataUtil.toString(super.getByIndex(INDEX_UNUSEFLAG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUnuseflag <em>Unuseflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Unuseflag</em>' attribute.
	 * @see #getUnuseflag()
	 */
	public void setUnuseflag(String unuseflag) {
		super.setByIndex(INDEX_UNUSEFLAG, unuseflag);
	}

	/**
	 * Returns the value of the '<em><b>Remark</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Remark</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Remark</em>' attribute.
	 * @see #setRemark(java.lang.String)
	 */
	public String getRemark() {
		return DataUtil.toString(super.getByIndex(INDEX_REMARK, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRemark <em>Remark</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Remark</em>' attribute.
	 * @see #getRemark()
	 */
	public void setRemark(String remark) {
		super.setByIndex(INDEX_REMARK, remark);
	}

	/**
	 * Returns the value of the '<em><b>Stand</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stand</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stand</em>' attribute.
	 * @see #setStand(java.lang.String)
	 */
	public String getStand() {
		return DataUtil.toString(super.getByIndex(INDEX_STAND, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand) {
		super.setByIndex(INDEX_STAND, stand);
	}

	/**
	 * Returns the value of the '<em><b>Createby</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createby</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createby</em>' attribute.
	 * @see #setCreateby(java.lang.String)
	 */
	public String getCreateby() {
		return DataUtil.toString(super.getByIndex(INDEX_CREATEBY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreateby <em>Createby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createby</em>' attribute.
	 * @see #getCreateby()
	 */
	public void setCreateby(String createby) {
		super.setByIndex(INDEX_CREATEBY, createby);
	}

	/**
	 * Returns the value of the '<em><b>Createorgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createorgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createorgid</em>' attribute.
	 * @see #setCreateorgid(int)
	 */
	public int getCreateorgid() {
		return DataUtil.toInt(super.getByIndex(INDEX_CREATEORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreateorgid <em>Createorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createorgid</em>' attribute.
	 * @see #getCreateorgid()
	 */
	public void setCreateorgid(int createorgid) {
		super.setByIndex(INDEX_CREATEORGID, createorgid);
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
	 * Returns the value of the '<em><b>Modifyby</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifyby</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifyby</em>' attribute.
	 * @see #setModifyby(java.lang.String)
	 */
	public String getModifyby() {
		return DataUtil.toString(super.getByIndex(INDEX_MODIFYBY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifyby <em>Modifyby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifyby</em>' attribute.
	 * @see #getModifyby()
	 */
	public void setModifyby(String modifyby) {
		super.setByIndex(INDEX_MODIFYBY, modifyby);
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
	 * Returns the value of the '<em><b>Dataorgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Dataorgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Dataorgid</em>' attribute.
	 * @see #setDataorgid(int)
	 */
	public int getDataorgid() {
		return DataUtil.toInt(super.getByIndex(INDEX_DATAORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid) {
		super.setByIndex(INDEX_DATAORGID, dataorgid);
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
	 * Returns the value of the '<em><b>Billingby</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Billingby</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Billingby</em>' attribute.
	 * @see #setBillingby(java.lang.String)
	 */
	public String getBillingby() {
		return DataUtil.toString(super.getByIndex(INDEX_BILLINGBY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBillingby <em>Billingby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Billingby</em>' attribute.
	 * @see #getBillingby()
	 */
	public void setBillingby(String billingby) {
		super.setByIndex(INDEX_BILLINGBY, billingby);
	}

	/**
	 * Returns the value of the '<em><b>Billingtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Billingtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Billingtime</em>' attribute.
	 * @see #setBillingtime(java.util.Date)
	 */
	public Date getBillingtime() {
		return DataUtil.toDate(super.getByIndex(INDEX_BILLINGTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBillingtime <em>Billingtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Billingtime</em>' attribute.
	 * @see #getBillingtime()
	 */
	public void setBillingtime(Date billingtime) {
		super.setByIndex(INDEX_BILLINGTIME, billingtime);
	}

	/**
	 * Returns the value of the '<em><b>Constructionorgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Constructionorgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Constructionorgid</em>' attribute.
	 * @see #setConstructionorgid(int)
	 */
	public int getConstructionorgid() {
		return DataUtil.toInt(super.getByIndex(INDEX_CONSTRUCTIONORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getConstructionorgid <em>Constructionorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Constructionorgid</em>' attribute.
	 * @see #getConstructionorgid()
	 */
	public void setConstructionorgid(int constructionorgid) {
		super.setByIndex(INDEX_CONSTRUCTIONORGID, constructionorgid);
	}

	/**
	 * Returns the value of the '<em><b>Buyway</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Buyway</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Buyway</em>' attribute.
	 * @see #setBuyway(java.lang.String)
	 */
	public String getBuyway() {
		return DataUtil.toString(super.getByIndex(INDEX_BUYWAY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBuyway <em>Buyway</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Buyway</em>' attribute.
	 * @see #getBuyway()
	 */
	public void setBuyway(String buyway) {
		super.setByIndex(INDEX_BUYWAY, buyway);
	}

	/**
	 * Returns the value of the '<em><b>Recordedcompany</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recordedcompany</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recordedcompany</em>' attribute.
	 * @see #setRecordedcompany(java.lang.String)
	 */
	public String getRecordedcompany() {
		return DataUtil.toString(super.getByIndex(INDEX_RECORDEDCOMPANY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRecordedcompany <em>Recordedcompany</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recordedcompany</em>' attribute.
	 * @see #getRecordedcompany()
	 */
	public void setRecordedcompany(String recordedcompany) {
		super.setByIndex(INDEX_RECORDEDCOMPANY, recordedcompany);
	}

	/**
	 * Returns the value of the '<em><b>Feebelong</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Feebelong</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Feebelong</em>' attribute.
	 * @see #setFeebelong(java.lang.String)
	 */
	public String getFeebelong() {
		return DataUtil.toString(super.getByIndex(INDEX_FEEBELONG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFeebelong <em>Feebelong</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Feebelong</em>' attribute.
	 * @see #getFeebelong()
	 */
	public void setFeebelong(String feebelong) {
		super.setByIndex(INDEX_FEEBELONG, feebelong);
	}

	/**
	 * Returns the value of the '<em><b>Isdesign</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isdesign</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isdesign</em>' attribute.
	 * @see #setIsdesign(java.lang.String)
	 */
	public String getIsdesign() {
		return DataUtil.toString(super.getByIndex(INDEX_ISDESIGN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIsdesign <em>Isdesign</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isdesign</em>' attribute.
	 * @see #getIsdesign()
	 */
	public void setIsdesign(String isdesign) {
		super.setByIndex(INDEX_ISDESIGN, isdesign);
	}

	/**
	 * Returns the value of the '<em><b>Constructionname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Constructionname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Constructionname</em>' attribute.
	 * @see #setConstructionname(java.lang.String)
	 */
	public String getConstructionname() {
		return DataUtil.toString(super.getByIndex(INDEX_CONSTRUCTIONNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getConstructionname <em>Constructionname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Constructionname</em>' attribute.
	 * @see #getConstructionname()
	 */
	public void setConstructionname(String constructionname) {
		super.setByIndex(INDEX_CONSTRUCTIONNAME, constructionname);
	}


}