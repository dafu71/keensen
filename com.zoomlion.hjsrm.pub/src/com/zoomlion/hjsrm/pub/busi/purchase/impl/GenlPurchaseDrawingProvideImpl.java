/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.purchase.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseDrawingProvide;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getCreatebyname <em>Createbyname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getModifybyname <em>Modifybyname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getModifytime <em>Modifytime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getAdvise <em>Advise</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getMaktx <em>Maktx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getZcpcx <em>Zcpcx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getDrawingtype <em>Drawingtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getDrawingcode <em>Drawingcode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getAttribute <em>Attribute</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getWarehousing <em>Warehousing</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getName1 <em>Name1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getDowntime <em>Downtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getSingman <em>Singman</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.impl.GenlPurchaseDrawingProvideImpl#getSigntime <em>Signtime</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlPurchaseDrawingProvide;
 */

public class GenlPurchaseDrawingProvideImpl extends ExtendedDataObjectImpl implements GenlPurchaseDrawingProvide {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_CREATETIME = 1;
	public final static int INDEX_CREATEBY = 2;
	public final static int INDEX_CREATEBYNAME = 3;
	public final static int INDEX_MODIFYBY = 4;
	public final static int INDEX_MODIFYBYNAME = 5;
	public final static int INDEX_MODIFYTIME = 6;
	public final static int INDEX_REMARK = 7;
	public final static int INDEX_STAND = 8;
	public final static int INDEX_ADVISE = 9;
	public final static int INDEX_MATNR = 10;
	public final static int INDEX_MAKTX = 11;
	public final static int INDEX_ZCPCX = 12;
	public final static int INDEX_DRAWINGTYPE = 13;
	public final static int INDEX_DRAWINGCODE = 14;
	public final static int INDEX_ATTRIBUTE = 15;
	public final static int INDEX_WAREHOUSING = 16;
	public final static int INDEX_LIFNR = 17;
	public final static int INDEX_NAME1 = 18;
	public final static int INDEX_DOWNTIME = 19;
	public final static int INDEX_SINGMAN = 20;
	public final static int INDEX_SIGNTIME = 21;
	public final static int SDO_PROPERTY_COUNT = 22;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlPurchaseDrawingProvideImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlPurchaseDrawingProvideImpl(Type type) {
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
	 * Returns the value of the '<em><b>Createbyname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createbyname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createbyname</em>' attribute.
	 * @see #setCreatebyname(java.lang.String)
	 */
	public String getCreatebyname() {
		return DataUtil.toString(super.getByIndex(INDEX_CREATEBYNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreatebyname <em>Createbyname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createbyname</em>' attribute.
	 * @see #getCreatebyname()
	 */
	public void setCreatebyname(String createbyname) {
		super.setByIndex(INDEX_CREATEBYNAME, createbyname);
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
	 * Returns the value of the '<em><b>Modifybyname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifybyname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifybyname</em>' attribute.
	 * @see #setModifybyname(java.lang.String)
	 */
	public String getModifybyname() {
		return DataUtil.toString(super.getByIndex(INDEX_MODIFYBYNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifybyname <em>Modifybyname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifybyname</em>' attribute.
	 * @see #getModifybyname()
	 */
	public void setModifybyname(String modifybyname) {
		super.setByIndex(INDEX_MODIFYBYNAME, modifybyname);
	}

	/**
	 * Returns the value of the '<em><b>Modifytime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifytime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifytime</em>' attribute.
	 * @see #setModifytime(java.util.Date)
	 */
	public Date getModifytime() {
		return DataUtil.toDate(super.getByIndex(INDEX_MODIFYTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifytime <em>Modifytime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifytime</em>' attribute.
	 * @see #getModifytime()
	 */
	public void setModifytime(Date modifytime) {
		super.setByIndex(INDEX_MODIFYTIME, modifytime);
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
	 * Returns the value of the '<em><b>Advise</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Advise</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Advise</em>' attribute.
	 * @see #setAdvise(java.lang.String)
	 */
	public String getAdvise() {
		return DataUtil.toString(super.getByIndex(INDEX_ADVISE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAdvise <em>Advise</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Advise</em>' attribute.
	 * @see #getAdvise()
	 */
	public void setAdvise(String advise) {
		super.setByIndex(INDEX_ADVISE, advise);
	}

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
	public String getMatnr() {
		return DataUtil.toString(super.getByIndex(INDEX_MATNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMatnr <em>Matnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matnr</em>' attribute.
	 * @see #getMatnr()
	 */
	public void setMatnr(String matnr) {
		super.setByIndex(INDEX_MATNR, matnr);
	}

	/**
	 * Returns the value of the '<em><b>Maktx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Maktx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Maktx</em>' attribute.
	 * @see #setMaktx(java.lang.String)
	 */
	public String getMaktx() {
		return DataUtil.toString(super.getByIndex(INDEX_MAKTX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMaktx <em>Maktx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Maktx</em>' attribute.
	 * @see #getMaktx()
	 */
	public void setMaktx(String maktx) {
		super.setByIndex(INDEX_MAKTX, maktx);
	}

	/**
	 * Returns the value of the '<em><b>Zcpcx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zcpcx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zcpcx</em>' attribute.
	 * @see #setZcpcx(java.lang.String)
	 */
	public String getZcpcx() {
		return DataUtil.toString(super.getByIndex(INDEX_ZCPCX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZcpcx <em>Zcpcx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zcpcx</em>' attribute.
	 * @see #getZcpcx()
	 */
	public void setZcpcx(String zcpcx) {
		super.setByIndex(INDEX_ZCPCX, zcpcx);
	}

	/**
	 * Returns the value of the '<em><b>Drawingtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Drawingtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Drawingtype</em>' attribute.
	 * @see #setDrawingtype(java.lang.String)
	 */
	public String getDrawingtype() {
		return DataUtil.toString(super.getByIndex(INDEX_DRAWINGTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDrawingtype <em>Drawingtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Drawingtype</em>' attribute.
	 * @see #getDrawingtype()
	 */
	public void setDrawingtype(String drawingtype) {
		super.setByIndex(INDEX_DRAWINGTYPE, drawingtype);
	}

	/**
	 * Returns the value of the '<em><b>Drawingcode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Drawingcode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Drawingcode</em>' attribute.
	 * @see #setDrawingcode(java.lang.String)
	 */
	public String getDrawingcode() {
		return DataUtil.toString(super.getByIndex(INDEX_DRAWINGCODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDrawingcode <em>Drawingcode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Drawingcode</em>' attribute.
	 * @see #getDrawingcode()
	 */
	public void setDrawingcode(String drawingcode) {
		super.setByIndex(INDEX_DRAWINGCODE, drawingcode);
	}

	/**
	 * Returns the value of the '<em><b>Attribute</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Attribute</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Attribute</em>' attribute.
	 * @see #setAttribute(java.lang.String)
	 */
	public String getAttribute() {
		return DataUtil.toString(super.getByIndex(INDEX_ATTRIBUTE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAttribute <em>Attribute</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Attribute</em>' attribute.
	 * @see #getAttribute()
	 */
	public void setAttribute(String attribute) {
		super.setByIndex(INDEX_ATTRIBUTE, attribute);
	}

	/**
	 * Returns the value of the '<em><b>Warehousing</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Warehousing</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Warehousing</em>' attribute.
	 * @see #setWarehousing(java.lang.String)
	 */
	public String getWarehousing() {
		return DataUtil.toString(super.getByIndex(INDEX_WAREHOUSING, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWarehousing <em>Warehousing</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Warehousing</em>' attribute.
	 * @see #getWarehousing()
	 */
	public void setWarehousing(String warehousing) {
		super.setByIndex(INDEX_WAREHOUSING, warehousing);
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
	public String getName1() {
		return DataUtil.toString(super.getByIndex(INDEX_NAME1, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getName1 <em>Name1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Name1</em>' attribute.
	 * @see #getName1()
	 */
	public void setName1(String name1) {
		super.setByIndex(INDEX_NAME1, name1);
	}

	/**
	 * Returns the value of the '<em><b>Downtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Downtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Downtime</em>' attribute.
	 * @see #setDowntime(java.lang.String)
	 */
	public String getDowntime() {
		return DataUtil.toString(super.getByIndex(INDEX_DOWNTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDowntime <em>Downtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Downtime</em>' attribute.
	 * @see #getDowntime()
	 */
	public void setDowntime(String downtime) {
		super.setByIndex(INDEX_DOWNTIME, downtime);
	}

	/**
	 * Returns the value of the '<em><b>Singman</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Singman</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Singman</em>' attribute.
	 * @see #setSingman(java.lang.String)
	 */
	public String getSingman() {
		return DataUtil.toString(super.getByIndex(INDEX_SINGMAN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSingman <em>Singman</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Singman</em>' attribute.
	 * @see #getSingman()
	 */
	public void setSingman(String singman) {
		super.setByIndex(INDEX_SINGMAN, singman);
	}

	/**
	 * Returns the value of the '<em><b>Signtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Signtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Signtime</em>' attribute.
	 * @see #setSigntime(java.lang.String)
	 */
	public String getSigntime() {
		return DataUtil.toString(super.getByIndex(INDEX_SIGNTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSigntime <em>Signtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Signtime</em>' attribute.
	 * @see #getSigntime()
	 */
	public void setSigntime(String signtime) {
		super.setByIndex(INDEX_SIGNTIME, signtime);
	}


}