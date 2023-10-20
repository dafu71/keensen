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
import com.zoomlion.hjsrm.pub.busi.Business.TBsMetermaint;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getWorkitemid <em>Workitemid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getBusitype <em>Busitype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getMeterinfopkid <em>Meterinfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getReading <em>Reading</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getQdreading <em>Qdreading</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getQareading <em>Qareading</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getMeterpress <em>Meterpress</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getModifiertmpr <em>Modifiertmpr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getModifierpress <em>Modifierpress</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getModifierfactor <em>Modifierfactor</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getManometer <em>Manometer</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getOptfee <em>Optfee</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getPower <em>Power</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getMaintnext <em>Maintnext</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getMaintperiod <em>Maintperiod</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getCreateorgid <em>Createorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getPlaninfopkid <em>Planinfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMetermaintImpl#getWorklistinfopkid <em>Worklistinfopkid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TBsMetermaint;
 */

public class TBsMetermaintImpl extends ExtendedDataObjectImpl implements TBsMetermaint {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_WORKITEMID = 1;
	public final static int INDEX_BUSITYPE = 2;
	public final static int INDEX_METERINFOPKID = 3;
	public final static int INDEX_READING = 4;
	public final static int INDEX_QDREADING = 5;
	public final static int INDEX_QAREADING = 6;
	public final static int INDEX_METERPRESS = 7;
	public final static int INDEX_MODIFIERTMPR = 8;
	public final static int INDEX_MODIFIERPRESS = 9;
	public final static int INDEX_MODIFIERFACTOR = 10;
	public final static int INDEX_MANOMETER = 11;
	public final static int INDEX_OPTFEE = 12;
	public final static int INDEX_POWER = 13;
	public final static int INDEX_MAINTNEXT = 14;
	public final static int INDEX_MAINTPERIOD = 15;
	public final static int INDEX_REMARK = 16;
	public final static int INDEX_STAND = 17;
	public final static int INDEX_CREATEBY = 18;
	public final static int INDEX_CREATEORGID = 19;
	public final static int INDEX_CREATETIME = 20;
	public final static int INDEX_MODIFYBY = 21;
	public final static int INDEX_UPDATETIME = 22;
	public final static int INDEX_DATAORGID = 23;
	public final static int INDEX_DELFLAG = 24;
	public final static int INDEX_PLANINFOPKID = 25;
	public final static int INDEX_WORKLISTINFOPKID = 26;
	public final static int SDO_PROPERTY_COUNT = 27;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsMetermaintImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsMetermaintImpl(Type type) {
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
	 * Returns the value of the '<em><b>Qdreading</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qdreading</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qdreading</em>' attribute.
	 * @see #setQdreading(java.math.BigDecimal)
	 */
	public BigDecimal getQdreading() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_QDREADING, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getQdreading <em>Qdreading</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qdreading</em>' attribute.
	 * @see #getQdreading()
	 */
	public void setQdreading(BigDecimal qdreading) {
		super.setByIndex(INDEX_QDREADING, qdreading);
	}

	/**
	 * Returns the value of the '<em><b>Qareading</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qareading</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qareading</em>' attribute.
	 * @see #setQareading(java.math.BigDecimal)
	 */
	public BigDecimal getQareading() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_QAREADING, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getQareading <em>Qareading</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qareading</em>' attribute.
	 * @see #getQareading()
	 */
	public void setQareading(BigDecimal qareading) {
		super.setByIndex(INDEX_QAREADING, qareading);
	}

	/**
	 * Returns the value of the '<em><b>Meterpress</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterpress</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterpress</em>' attribute.
	 * @see #setMeterpress(java.math.BigDecimal)
	 */
	public BigDecimal getMeterpress() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_METERPRESS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMeterpress <em>Meterpress</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterpress</em>' attribute.
	 * @see #getMeterpress()
	 */
	public void setMeterpress(BigDecimal meterpress) {
		super.setByIndex(INDEX_METERPRESS, meterpress);
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
	 * Returns the value of the '<em><b>Manometer</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Manometer</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Manometer</em>' attribute.
	 * @see #setManometer(java.lang.String)
	 */
	public String getManometer() {
		return DataUtil.toString(super.getByIndex(INDEX_MANOMETER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getManometer <em>Manometer</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Manometer</em>' attribute.
	 * @see #getManometer()
	 */
	public void setManometer(String manometer) {
		super.setByIndex(INDEX_MANOMETER, manometer);
	}

	/**
	 * Returns the value of the '<em><b>Optfee</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Optfee</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Optfee</em>' attribute.
	 * @see #setOptfee(java.math.BigDecimal)
	 */
	public BigDecimal getOptfee() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_OPTFEE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOptfee <em>Optfee</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Optfee</em>' attribute.
	 * @see #getOptfee()
	 */
	public void setOptfee(BigDecimal optfee) {
		super.setByIndex(INDEX_OPTFEE, optfee);
	}

	/**
	 * Returns the value of the '<em><b>Power</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Power</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Power</em>' attribute.
	 * @see #setPower(java.math.BigDecimal)
	 */
	public BigDecimal getPower() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_POWER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPower <em>Power</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Power</em>' attribute.
	 * @see #getPower()
	 */
	public void setPower(BigDecimal power) {
		super.setByIndex(INDEX_POWER, power);
	}

	/**
	 * Returns the value of the '<em><b>Maintnext</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Maintnext</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Maintnext</em>' attribute.
	 * @see #setMaintnext(java.util.Date)
	 */
	public Date getMaintnext() {
		return DataUtil.toDate(super.getByIndex(INDEX_MAINTNEXT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMaintnext <em>Maintnext</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Maintnext</em>' attribute.
	 * @see #getMaintnext()
	 */
	public void setMaintnext(Date maintnext) {
		super.setByIndex(INDEX_MAINTNEXT, maintnext);
	}

	/**
	 * Returns the value of the '<em><b>Maintperiod</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Maintperiod</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Maintperiod</em>' attribute.
	 * @see #setMaintperiod(long)
	 */
	public long getMaintperiod() {
		return DataUtil.toLong(super.getByIndex(INDEX_MAINTPERIOD, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMaintperiod <em>Maintperiod</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Maintperiod</em>' attribute.
	 * @see #getMaintperiod()
	 */
	public void setMaintperiod(long maintperiod) {
		super.setByIndex(INDEX_MAINTPERIOD, maintperiod);
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