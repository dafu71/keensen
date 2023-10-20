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
import com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getMeterfixremovepkid <em>Meterfixremovepkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getWorkitemid <em>Workitemid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getProjectid <em>Projectid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getBusitype <em>Busitype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getFixdate <em>Fixdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getFixflag <em>Fixflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getInbatchid <em>Inbatchid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getMeterposi <em>Meterposi</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getMeterseq <em>Meterseq</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getIsbill <em>Isbill</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getMeterfixdate <em>Meterfixdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getMeterremovedate <em>Meterremovedate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getFixdirect <em>Fixdirect</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getMeterdirect <em>Meterdirect</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getCarddirect <em>Carddirect</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getSafetynumber <em>Safetynumber</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getIsbuy <em>Isbuy</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getSupplypointpkid <em>Supplypointpkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getBasefactor <em>Basefactor</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getFixmode <em>Fixmode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getIsseal <em>Isseal</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getIsblind <em>Isblind</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getIsbranch <em>Isbranch</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getAdjustfactor <em>Adjustfactor</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getModifiercode <em>Modifiercode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getSealcode <em>Sealcode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getImgcode <em>Imgcode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getMetertstate <em>Metertstate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getNosucereason <em>Nosucereason</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getNofixreason <em>Nofixreason</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsMeterfixremoveextImpl#getDelflag <em>Delflag</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TBsMeterfixremoveext;
 */

public class TBsMeterfixremoveextImpl extends ExtendedDataObjectImpl implements TBsMeterfixremoveext {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_METERFIXREMOVEPKID = 1;
	public final static int INDEX_WORKITEMID = 2;
	public final static int INDEX_PROJECTID = 3;
	public final static int INDEX_BUSITYPE = 4;
	public final static int INDEX_FIXDATE = 5;
	public final static int INDEX_FIXFLAG = 6;
	public final static int INDEX_INBATCHID = 7;
	public final static int INDEX_METERPOSI = 8;
	public final static int INDEX_METERSEQ = 9;
	public final static int INDEX_ISBILL = 10;
	public final static int INDEX_METERFIXDATE = 11;
	public final static int INDEX_METERREMOVEDATE = 12;
	public final static int INDEX_FIXDIRECT = 13;
	public final static int INDEX_METERDIRECT = 14;
	public final static int INDEX_CARDDIRECT = 15;
	public final static int INDEX_SAFETYNUMBER = 16;
	public final static int INDEX_ISBUY = 17;
	public final static int INDEX_SUPPLYPOINTPKID = 18;
	public final static int INDEX_BASEFACTOR = 19;
	public final static int INDEX_FIXMODE = 20;
	public final static int INDEX_ISSEAL = 21;
	public final static int INDEX_ISBLIND = 22;
	public final static int INDEX_ISBRANCH = 23;
	public final static int INDEX_ADJUSTFACTOR = 24;
	public final static int INDEX_MODIFIERCODE = 25;
	public final static int INDEX_SEALCODE = 26;
	public final static int INDEX_IMGCODE = 27;
	public final static int INDEX_METERTSTATE = 28;
	public final static int INDEX_NOSUCEREASON = 29;
	public final static int INDEX_NOFIXREASON = 30;
	public final static int INDEX_REMARK = 31;
	public final static int INDEX_STAND = 32;
	public final static int INDEX_CREATEBY = 33;
	public final static int INDEX_CREATETIME = 34;
	public final static int INDEX_MODIFYBY = 35;
	public final static int INDEX_UPDATETIME = 36;
	public final static int INDEX_DATAORGID = 37;
	public final static int INDEX_DELFLAG = 38;
	public final static int SDO_PROPERTY_COUNT = 39;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsMeterfixremoveextImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsMeterfixremoveextImpl(Type type) {
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
	 * Returns the value of the '<em><b>Meterfixremovepkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterfixremovepkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterfixremovepkid</em>' attribute.
	 * @see #setMeterfixremovepkid(java.lang.String)
	 */
	public String getMeterfixremovepkid() {
		return DataUtil.toString(super.getByIndex(INDEX_METERFIXREMOVEPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMeterfixremovepkid <em>Meterfixremovepkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterfixremovepkid</em>' attribute.
	 * @see #getMeterfixremovepkid()
	 */
	public void setMeterfixremovepkid(String meterfixremovepkid) {
		super.setByIndex(INDEX_METERFIXREMOVEPKID, meterfixremovepkid);
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
	 * Returns the value of the '<em><b>Projectid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Projectid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Projectid</em>' attribute.
	 * @see #setProjectid(java.lang.String)
	 */
	public String getProjectid() {
		return DataUtil.toString(super.getByIndex(INDEX_PROJECTID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getProjectid <em>Projectid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Projectid</em>' attribute.
	 * @see #getProjectid()
	 */
	public void setProjectid(String projectid) {
		super.setByIndex(INDEX_PROJECTID, projectid);
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
	 * Returns the value of the '<em><b>Fixdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Fixdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Fixdate</em>' attribute.
	 * @see #setFixdate(java.util.Date)
	 */
	public Date getFixdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_FIXDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFixdate <em>Fixdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Fixdate</em>' attribute.
	 * @see #getFixdate()
	 */
	public void setFixdate(Date fixdate) {
		super.setByIndex(INDEX_FIXDATE, fixdate);
	}

	/**
	 * Returns the value of the '<em><b>Fixflag</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Fixflag</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Fixflag</em>' attribute.
	 * @see #setFixflag(java.lang.String)
	 */
	public String getFixflag() {
		return DataUtil.toString(super.getByIndex(INDEX_FIXFLAG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFixflag <em>Fixflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Fixflag</em>' attribute.
	 * @see #getFixflag()
	 */
	public void setFixflag(String fixflag) {
		super.setByIndex(INDEX_FIXFLAG, fixflag);
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
	 * Returns the value of the '<em><b>Meterposi</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterposi</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterposi</em>' attribute.
	 * @see #setMeterposi(java.lang.String)
	 */
	public String getMeterposi() {
		return DataUtil.toString(super.getByIndex(INDEX_METERPOSI, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMeterposi <em>Meterposi</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterposi</em>' attribute.
	 * @see #getMeterposi()
	 */
	public void setMeterposi(String meterposi) {
		super.setByIndex(INDEX_METERPOSI, meterposi);
	}

	/**
	 * Returns the value of the '<em><b>Meterseq</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterseq</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterseq</em>' attribute.
	 * @see #setMeterseq(long)
	 */
	public long getMeterseq() {
		return DataUtil.toLong(super.getByIndex(INDEX_METERSEQ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMeterseq <em>Meterseq</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterseq</em>' attribute.
	 * @see #getMeterseq()
	 */
	public void setMeterseq(long meterseq) {
		super.setByIndex(INDEX_METERSEQ, meterseq);
	}

	/**
	 * Returns the value of the '<em><b>Isbill</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isbill</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isbill</em>' attribute.
	 * @see #setIsbill(java.lang.String)
	 */
	public String getIsbill() {
		return DataUtil.toString(super.getByIndex(INDEX_ISBILL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIsbill <em>Isbill</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isbill</em>' attribute.
	 * @see #getIsbill()
	 */
	public void setIsbill(String isbill) {
		super.setByIndex(INDEX_ISBILL, isbill);
	}

	/**
	 * Returns the value of the '<em><b>Meterfixdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterfixdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterfixdate</em>' attribute.
	 * @see #setMeterfixdate(java.util.Date)
	 */
	public Date getMeterfixdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_METERFIXDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMeterfixdate <em>Meterfixdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterfixdate</em>' attribute.
	 * @see #getMeterfixdate()
	 */
	public void setMeterfixdate(Date meterfixdate) {
		super.setByIndex(INDEX_METERFIXDATE, meterfixdate);
	}

	/**
	 * Returns the value of the '<em><b>Meterremovedate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterremovedate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterremovedate</em>' attribute.
	 * @see #setMeterremovedate(java.util.Date)
	 */
	public Date getMeterremovedate() {
		return DataUtil.toDate(super.getByIndex(INDEX_METERREMOVEDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMeterremovedate <em>Meterremovedate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterremovedate</em>' attribute.
	 * @see #getMeterremovedate()
	 */
	public void setMeterremovedate(Date meterremovedate) {
		super.setByIndex(INDEX_METERREMOVEDATE, meterremovedate);
	}

	/**
	 * Returns the value of the '<em><b>Fixdirect</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Fixdirect</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Fixdirect</em>' attribute.
	 * @see #setFixdirect(java.lang.String)
	 */
	public String getFixdirect() {
		return DataUtil.toString(super.getByIndex(INDEX_FIXDIRECT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFixdirect <em>Fixdirect</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Fixdirect</em>' attribute.
	 * @see #getFixdirect()
	 */
	public void setFixdirect(String fixdirect) {
		super.setByIndex(INDEX_FIXDIRECT, fixdirect);
	}

	/**
	 * Returns the value of the '<em><b>Meterdirect</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterdirect</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterdirect</em>' attribute.
	 * @see #setMeterdirect(java.lang.String)
	 */
	public String getMeterdirect() {
		return DataUtil.toString(super.getByIndex(INDEX_METERDIRECT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMeterdirect <em>Meterdirect</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterdirect</em>' attribute.
	 * @see #getMeterdirect()
	 */
	public void setMeterdirect(String meterdirect) {
		super.setByIndex(INDEX_METERDIRECT, meterdirect);
	}

	/**
	 * Returns the value of the '<em><b>Carddirect</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Carddirect</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Carddirect</em>' attribute.
	 * @see #setCarddirect(java.lang.String)
	 */
	public String getCarddirect() {
		return DataUtil.toString(super.getByIndex(INDEX_CARDDIRECT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCarddirect <em>Carddirect</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Carddirect</em>' attribute.
	 * @see #getCarddirect()
	 */
	public void setCarddirect(String carddirect) {
		super.setByIndex(INDEX_CARDDIRECT, carddirect);
	}

	/**
	 * Returns the value of the '<em><b>Safetynumber</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Safetynumber</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Safetynumber</em>' attribute.
	 * @see #setSafetynumber(java.lang.String)
	 */
	public String getSafetynumber() {
		return DataUtil.toString(super.getByIndex(INDEX_SAFETYNUMBER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSafetynumber <em>Safetynumber</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Safetynumber</em>' attribute.
	 * @see #getSafetynumber()
	 */
	public void setSafetynumber(String safetynumber) {
		super.setByIndex(INDEX_SAFETYNUMBER, safetynumber);
	}

	/**
	 * Returns the value of the '<em><b>Isbuy</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isbuy</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isbuy</em>' attribute.
	 * @see #setIsbuy(java.lang.String)
	 */
	public String getIsbuy() {
		return DataUtil.toString(super.getByIndex(INDEX_ISBUY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIsbuy <em>Isbuy</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isbuy</em>' attribute.
	 * @see #getIsbuy()
	 */
	public void setIsbuy(String isbuy) {
		super.setByIndex(INDEX_ISBUY, isbuy);
	}

	/**
	 * Returns the value of the '<em><b>Supplypointpkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Supplypointpkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Supplypointpkid</em>' attribute.
	 * @see #setSupplypointpkid(java.lang.String)
	 */
	public String getSupplypointpkid() {
		return DataUtil.toString(super.getByIndex(INDEX_SUPPLYPOINTPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSupplypointpkid <em>Supplypointpkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Supplypointpkid</em>' attribute.
	 * @see #getSupplypointpkid()
	 */
	public void setSupplypointpkid(String supplypointpkid) {
		super.setByIndex(INDEX_SUPPLYPOINTPKID, supplypointpkid);
	}

	/**
	 * Returns the value of the '<em><b>Basefactor</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Basefactor</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Basefactor</em>' attribute.
	 * @see #setBasefactor(java.math.BigDecimal)
	 */
	public BigDecimal getBasefactor() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_BASEFACTOR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBasefactor <em>Basefactor</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Basefactor</em>' attribute.
	 * @see #getBasefactor()
	 */
	public void setBasefactor(BigDecimal basefactor) {
		super.setByIndex(INDEX_BASEFACTOR, basefactor);
	}

	/**
	 * Returns the value of the '<em><b>Fixmode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Fixmode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Fixmode</em>' attribute.
	 * @see #setFixmode(java.lang.String)
	 */
	public String getFixmode() {
		return DataUtil.toString(super.getByIndex(INDEX_FIXMODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFixmode <em>Fixmode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Fixmode</em>' attribute.
	 * @see #getFixmode()
	 */
	public void setFixmode(String fixmode) {
		super.setByIndex(INDEX_FIXMODE, fixmode);
	}

	/**
	 * Returns the value of the '<em><b>Isseal</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isseal</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isseal</em>' attribute.
	 * @see #setIsseal(java.lang.String)
	 */
	public String getIsseal() {
		return DataUtil.toString(super.getByIndex(INDEX_ISSEAL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIsseal <em>Isseal</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isseal</em>' attribute.
	 * @see #getIsseal()
	 */
	public void setIsseal(String isseal) {
		super.setByIndex(INDEX_ISSEAL, isseal);
	}

	/**
	 * Returns the value of the '<em><b>Isblind</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isblind</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isblind</em>' attribute.
	 * @see #setIsblind(java.lang.String)
	 */
	public String getIsblind() {
		return DataUtil.toString(super.getByIndex(INDEX_ISBLIND, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIsblind <em>Isblind</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isblind</em>' attribute.
	 * @see #getIsblind()
	 */
	public void setIsblind(String isblind) {
		super.setByIndex(INDEX_ISBLIND, isblind);
	}

	/**
	 * Returns the value of the '<em><b>Isbranch</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isbranch</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isbranch</em>' attribute.
	 * @see #setIsbranch(java.lang.String)
	 */
	public String getIsbranch() {
		return DataUtil.toString(super.getByIndex(INDEX_ISBRANCH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIsbranch <em>Isbranch</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isbranch</em>' attribute.
	 * @see #getIsbranch()
	 */
	public void setIsbranch(String isbranch) {
		super.setByIndex(INDEX_ISBRANCH, isbranch);
	}

	/**
	 * Returns the value of the '<em><b>Adjustfactor</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Adjustfactor</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Adjustfactor</em>' attribute.
	 * @see #setAdjustfactor(java.math.BigDecimal)
	 */
	public BigDecimal getAdjustfactor() {
		return DataUtil.toBigDecimal(super.getByIndex(INDEX_ADJUSTFACTOR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAdjustfactor <em>Adjustfactor</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Adjustfactor</em>' attribute.
	 * @see #getAdjustfactor()
	 */
	public void setAdjustfactor(BigDecimal adjustfactor) {
		super.setByIndex(INDEX_ADJUSTFACTOR, adjustfactor);
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
	 * Returns the value of the '<em><b>Sealcode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sealcode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sealcode</em>' attribute.
	 * @see #setSealcode(java.lang.String)
	 */
	public String getSealcode() {
		return DataUtil.toString(super.getByIndex(INDEX_SEALCODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSealcode <em>Sealcode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sealcode</em>' attribute.
	 * @see #getSealcode()
	 */
	public void setSealcode(String sealcode) {
		super.setByIndex(INDEX_SEALCODE, sealcode);
	}

	/**
	 * Returns the value of the '<em><b>Imgcode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Imgcode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Imgcode</em>' attribute.
	 * @see #setImgcode(java.lang.String)
	 */
	public String getImgcode() {
		return DataUtil.toString(super.getByIndex(INDEX_IMGCODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getImgcode <em>Imgcode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Imgcode</em>' attribute.
	 * @see #getImgcode()
	 */
	public void setImgcode(String imgcode) {
		super.setByIndex(INDEX_IMGCODE, imgcode);
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
	 * Returns the value of the '<em><b>Nosucereason</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Nosucereason</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Nosucereason</em>' attribute.
	 * @see #setNosucereason(java.lang.String)
	 */
	public String getNosucereason() {
		return DataUtil.toString(super.getByIndex(INDEX_NOSUCEREASON, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getNosucereason <em>Nosucereason</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Nosucereason</em>' attribute.
	 * @see #getNosucereason()
	 */
	public void setNosucereason(String nosucereason) {
		super.setByIndex(INDEX_NOSUCEREASON, nosucereason);
	}

	/**
	 * Returns the value of the '<em><b>Nofixreason</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Nofixreason</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Nofixreason</em>' attribute.
	 * @see #setNofixreason(java.lang.String)
	 */
	public String getNofixreason() {
		return DataUtil.toString(super.getByIndex(INDEX_NOFIXREASON, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getNofixreason <em>Nofixreason</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Nofixreason</em>' attribute.
	 * @see #getNofixreason()
	 */
	public void setNofixreason(String nofixreason) {
		super.setByIndex(INDEX_NOFIXREASON, nofixreason);
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


}