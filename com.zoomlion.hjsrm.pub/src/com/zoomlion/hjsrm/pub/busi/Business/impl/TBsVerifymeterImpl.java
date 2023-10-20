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
import com.zoomlion.hjsrm.pub.busi.Business.TBsVerifymeter;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getWorkitemid <em>Workitemid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getMeterinfopkid <em>Meterinfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getVerifyrslt <em>Verifyrslt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getVerifyunit <em>Verifyunit</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getMetertstate <em>Metertstate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getQmin <em>Qmin</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getQmin3 <em>Qmin3</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getQmax01 <em>Qmax01</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getQmax02 <em>Qmax02</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getQmax03 <em>Qmax03</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getQmax07 <em>Qmax07</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getQmax <em>Qmax</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getReading <em>Reading</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getVerifycode <em>Verifycode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getModifierverifyrslt <em>Modifierverifyrslt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getModifiercode <em>Modifiercode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getQacurrent <em>Qacurrent</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getModifiertmpr <em>Modifiertmpr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getModifierpress <em>Modifierpress</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getModifierfactor <em>Modifierfactor</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getVerifydate <em>Verifydate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getVerifyoptr <em>Verifyoptr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getCreateorgid <em>Createorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getPlaninfopkid <em>Planinfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsVerifymeterImpl#getWorklistinfopkid <em>Worklistinfopkid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TBsVerifymeter;
 */

public class TBsVerifymeterImpl extends ExtendedDataObjectImpl implements TBsVerifymeter {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_WORKITEMID = 1;
	public final static int INDEX_METERINFOPKID = 2;
	public final static int INDEX_VERIFYRSLT = 3;
	public final static int INDEX_VERIFYUNIT = 4;
	public final static int INDEX_METERTSTATE = 5;
	public final static int INDEX_QMIN = 6;
	public final static int INDEX_QMIN3 = 7;
	public final static int INDEX_QMAX01 = 8;
	public final static int INDEX_QMAX02 = 9;
	public final static int INDEX_QMAX03 = 10;
	public final static int INDEX_QMAX07 = 11;
	public final static int INDEX_QMAX = 12;
	public final static int INDEX_READING = 13;
	public final static int INDEX_VERIFYCODE = 14;
	public final static int INDEX_MODIFIERVERIFYRSLT = 15;
	public final static int INDEX_MODIFIERCODE = 16;
	public final static int INDEX_QACURRENT = 17;
	public final static int INDEX_MODIFIERTMPR = 18;
	public final static int INDEX_MODIFIERPRESS = 19;
	public final static int INDEX_MODIFIERFACTOR = 20;
	public final static int INDEX_VERIFYDATE = 21;
	public final static int INDEX_VERIFYOPTR = 22;
	public final static int INDEX_REMARK = 23;
	public final static int INDEX_STAND = 24;
	public final static int INDEX_CREATEBY = 25;
	public final static int INDEX_CREATEORGID = 26;
	public final static int INDEX_CREATETIME = 27;
	public final static int INDEX_MODIFYBY = 28;
	public final static int INDEX_UPDATETIME = 29;
	public final static int INDEX_DATAORGID = 30;
	public final static int INDEX_DELFLAG = 31;
	public final static int INDEX_PLANINFOPKID = 32;
	public final static int INDEX_WORKLISTINFOPKID = 33;
	public final static int SDO_PROPERTY_COUNT = 34;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsVerifymeterImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsVerifymeterImpl(Type type) {
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
	 * Returns the value of the '<em><b>Meterinfopkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterinfopkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterinfopkid</em>' attribute.
	 * @see #setMeterinfopkid(java.lang.String)
	 */
	public String getMeterinfopkid() {
		return DataUtil.toString(super.getByIndex(INDEX_METERINFOPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMeterinfopkid <em>Meterinfopkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterinfopkid</em>' attribute.
	 * @see #getMeterinfopkid()
	 */
	public void setMeterinfopkid(String meterinfopkid) {
		super.setByIndex(INDEX_METERINFOPKID, meterinfopkid);
	}

	/**
	 * Returns the value of the '<em><b>Verifyrslt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Verifyrslt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Verifyrslt</em>' attribute.
	 * @see #setVerifyrslt(java.lang.String)
	 */
	public String getVerifyrslt() {
		return DataUtil.toString(super.getByIndex(INDEX_VERIFYRSLT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getVerifyrslt <em>Verifyrslt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Verifyrslt</em>' attribute.
	 * @see #getVerifyrslt()
	 */
	public void setVerifyrslt(String verifyrslt) {
		super.setByIndex(INDEX_VERIFYRSLT, verifyrslt);
	}

	/**
	 * Returns the value of the '<em><b>Verifyunit</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Verifyunit</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Verifyunit</em>' attribute.
	 * @see #setVerifyunit(java.lang.String)
	 */
	public String getVerifyunit() {
		return DataUtil.toString(super.getByIndex(INDEX_VERIFYUNIT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getVerifyunit <em>Verifyunit</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Verifyunit</em>' attribute.
	 * @see #getVerifyunit()
	 */
	public void setVerifyunit(String verifyunit) {
		super.setByIndex(INDEX_VERIFYUNIT, verifyunit);
	}

	/**
	 * Returns the value of the '<em><b>Metertstate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Metertstate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Metertstate</em>' attribute.
	 * @see #setMetertstate(java.lang.String)
	 */
	public String getMetertstate() {
		return DataUtil.toString(super.getByIndex(INDEX_METERTSTATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMetertstate <em>Metertstate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Metertstate</em>' attribute.
	 * @see #getMetertstate()
	 */
	public void setMetertstate(String metertstate) {
		super.setByIndex(INDEX_METERTSTATE, metertstate);
	}

	/**
	 * Returns the value of the '<em><b>Qmin</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qmin</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qmin</em>' attribute.
	 * @see #setQmin(java.math.BigDecimal)
	 */
	public BigDecimal getQmin() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_QMIN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getQmin <em>Qmin</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qmin</em>' attribute.
	 * @see #getQmin()
	 */
	public void setQmin(BigDecimal qmin) {
		super.setByIndex(INDEX_QMIN, qmin);
	}

	/**
	 * Returns the value of the '<em><b>Qmin3</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qmin3</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qmin3</em>' attribute.
	 * @see #setQmin3(java.math.BigDecimal)
	 */
	public BigDecimal getQmin3() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_QMIN3, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getQmin3 <em>Qmin3</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qmin3</em>' attribute.
	 * @see #getQmin3()
	 */
	public void setQmin3(BigDecimal qmin3) {
		super.setByIndex(INDEX_QMIN3, qmin3);
	}

	/**
	 * Returns the value of the '<em><b>Qmax01</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qmax01</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qmax01</em>' attribute.
	 * @see #setQmax01(java.math.BigDecimal)
	 */
	public BigDecimal getQmax01() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_QMAX01, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getQmax01 <em>Qmax01</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qmax01</em>' attribute.
	 * @see #getQmax01()
	 */
	public void setQmax01(BigDecimal qmax01) {
		super.setByIndex(INDEX_QMAX01, qmax01);
	}

	/**
	 * Returns the value of the '<em><b>Qmax02</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qmax02</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qmax02</em>' attribute.
	 * @see #setQmax02(java.math.BigDecimal)
	 */
	public BigDecimal getQmax02() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_QMAX02, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getQmax02 <em>Qmax02</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qmax02</em>' attribute.
	 * @see #getQmax02()
	 */
	public void setQmax02(BigDecimal qmax02) {
		super.setByIndex(INDEX_QMAX02, qmax02);
	}

	/**
	 * Returns the value of the '<em><b>Qmax03</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qmax03</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qmax03</em>' attribute.
	 * @see #setQmax03(java.math.BigDecimal)
	 */
	public BigDecimal getQmax03() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_QMAX03, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getQmax03 <em>Qmax03</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qmax03</em>' attribute.
	 * @see #getQmax03()
	 */
	public void setQmax03(BigDecimal qmax03) {
		super.setByIndex(INDEX_QMAX03, qmax03);
	}

	/**
	 * Returns the value of the '<em><b>Qmax07</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qmax07</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qmax07</em>' attribute.
	 * @see #setQmax07(java.math.BigDecimal)
	 */
	public BigDecimal getQmax07() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_QMAX07, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getQmax07 <em>Qmax07</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qmax07</em>' attribute.
	 * @see #getQmax07()
	 */
	public void setQmax07(BigDecimal qmax07) {
		super.setByIndex(INDEX_QMAX07, qmax07);
	}

	/**
	 * Returns the value of the '<em><b>Qmax</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qmax</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qmax</em>' attribute.
	 * @see #setQmax(java.math.BigDecimal)
	 */
	public BigDecimal getQmax() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_QMAX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getQmax <em>Qmax</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qmax</em>' attribute.
	 * @see #getQmax()
	 */
	public void setQmax(BigDecimal qmax) {
		super.setByIndex(INDEX_QMAX, qmax);
	}

	/**
	 * Returns the value of the '<em><b>Reading</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reading</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reading</em>' attribute.
	 * @see #setReading(java.math.BigDecimal)
	 */
	public BigDecimal getReading() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_READING, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReading <em>Reading</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reading</em>' attribute.
	 * @see #getReading()
	 */
	public void setReading(BigDecimal reading) {
		super.setByIndex(INDEX_READING, reading);
	}

	/**
	 * Returns the value of the '<em><b>Verifycode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Verifycode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Verifycode</em>' attribute.
	 * @see #setVerifycode(java.lang.String)
	 */
	public String getVerifycode() {
		return DataUtil.toString(super.getByIndex(INDEX_VERIFYCODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getVerifycode <em>Verifycode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Verifycode</em>' attribute.
	 * @see #getVerifycode()
	 */
	public void setVerifycode(String verifycode) {
		super.setByIndex(INDEX_VERIFYCODE, verifycode);
	}

	/**
	 * Returns the value of the '<em><b>Modifierverifyrslt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifierverifyrslt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifierverifyrslt</em>' attribute.
	 * @see #setModifierverifyrslt(java.lang.String)
	 */
	public String getModifierverifyrslt() {
		return DataUtil.toString(super.getByIndex(INDEX_MODIFIERVERIFYRSLT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifierverifyrslt <em>Modifierverifyrslt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifierverifyrslt</em>' attribute.
	 * @see #getModifierverifyrslt()
	 */
	public void setModifierverifyrslt(String modifierverifyrslt) {
		super.setByIndex(INDEX_MODIFIERVERIFYRSLT, modifierverifyrslt);
	}

	/**
	 * Returns the value of the '<em><b>Modifiercode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifiercode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifiercode</em>' attribute.
	 * @see #setModifiercode(java.lang.String)
	 */
	public String getModifiercode() {
		return DataUtil.toString(super.getByIndex(INDEX_MODIFIERCODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifiercode <em>Modifiercode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifiercode</em>' attribute.
	 * @see #getModifiercode()
	 */
	public void setModifiercode(String modifiercode) {
		super.setByIndex(INDEX_MODIFIERCODE, modifiercode);
	}

	/**
	 * Returns the value of the '<em><b>Qacurrent</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qacurrent</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qacurrent</em>' attribute.
	 * @see #setQacurrent(java.math.BigDecimal)
	 */
	public BigDecimal getQacurrent() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_QACURRENT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getQacurrent <em>Qacurrent</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qacurrent</em>' attribute.
	 * @see #getQacurrent()
	 */
	public void setQacurrent(BigDecimal qacurrent) {
		super.setByIndex(INDEX_QACURRENT, qacurrent);
	}

	/**
	 * Returns the value of the '<em><b>Modifiertmpr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifiertmpr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifiertmpr</em>' attribute.
	 * @see #setModifiertmpr(java.math.BigDecimal)
	 */
	public BigDecimal getModifiertmpr() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_MODIFIERTMPR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifiertmpr <em>Modifiertmpr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifiertmpr</em>' attribute.
	 * @see #getModifiertmpr()
	 */
	public void setModifiertmpr(BigDecimal modifiertmpr) {
		super.setByIndex(INDEX_MODIFIERTMPR, modifiertmpr);
	}

	/**
	 * Returns the value of the '<em><b>Modifierpress</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifierpress</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifierpress</em>' attribute.
	 * @see #setModifierpress(java.math.BigDecimal)
	 */
	public BigDecimal getModifierpress() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_MODIFIERPRESS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifierpress <em>Modifierpress</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifierpress</em>' attribute.
	 * @see #getModifierpress()
	 */
	public void setModifierpress(BigDecimal modifierpress) {
		super.setByIndex(INDEX_MODIFIERPRESS, modifierpress);
	}

	/**
	 * Returns the value of the '<em><b>Modifierfactor</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifierfactor</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifierfactor</em>' attribute.
	 * @see #setModifierfactor(java.math.BigDecimal)
	 */
	public BigDecimal getModifierfactor() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_MODIFIERFACTOR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifierfactor <em>Modifierfactor</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifierfactor</em>' attribute.
	 * @see #getModifierfactor()
	 */
	public void setModifierfactor(BigDecimal modifierfactor) {
		super.setByIndex(INDEX_MODIFIERFACTOR, modifierfactor);
	}

	/**
	 * Returns the value of the '<em><b>Verifydate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Verifydate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Verifydate</em>' attribute.
	 * @see #setVerifydate(java.util.Date)
	 */
	public Date getVerifydate() {
		return DataUtil.toDate(super.getByIndex(INDEX_VERIFYDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getVerifydate <em>Verifydate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Verifydate</em>' attribute.
	 * @see #getVerifydate()
	 */
	public void setVerifydate(Date verifydate) {
		super.setByIndex(INDEX_VERIFYDATE, verifydate);
	}

	/**
	 * Returns the value of the '<em><b>Verifyoptr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Verifyoptr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Verifyoptr</em>' attribute.
	 * @see #setVerifyoptr(java.lang.String)
	 */
	public String getVerifyoptr() {
		return DataUtil.toString(super.getByIndex(INDEX_VERIFYOPTR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getVerifyoptr <em>Verifyoptr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Verifyoptr</em>' attribute.
	 * @see #getVerifyoptr()
	 */
	public void setVerifyoptr(String verifyoptr) {
		super.setByIndex(INDEX_VERIFYOPTR, verifyoptr);
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


}