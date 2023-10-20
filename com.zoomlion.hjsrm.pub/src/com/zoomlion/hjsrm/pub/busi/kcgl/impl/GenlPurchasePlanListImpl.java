/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.kcgl.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getCreatebyname <em>Createbyname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getModifybyname <em>Modifybyname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getModifytime <em>Modifytime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getPmatnr <em>Pmatnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getZcpcx <em>Zcpcx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getMaktx <em>Maktx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getName1 <em>Name1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getStock <em>Stock</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getCarno <em>Carno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getUnderamount <em>Underamount</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getDate1 <em>Date1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getPlan1 <em>Plan1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getAnswer1 <em>Answer1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getDate2 <em>Date2</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getPlan2 <em>Plan2</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getAnswer2 <em>Answer2</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getDate3 <em>Date3</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getPlan3 <em>Plan3</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getAnswer3 <em>Answer3</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getDate4 <em>Date4</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getPlan4 <em>Plan4</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getAnswer4 <em>Answer4</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getDate5 <em>Date5</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getPlan5 <em>Plan5</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getAnswer5 <em>Answer5</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getDate6 <em>Date6</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getPlan6 <em>Plan6</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getAnswer6 <em>Answer6</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getDate7 <em>Date7</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getPlan7 <em>Plan7</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getAnswer7 <em>Answer7</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getDate8 <em>Date8</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getPlan8 <em>Plan8</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getAnswer8 <em>Answer8</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getDate9 <em>Date9</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getPlan9 <em>Plan9</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getAnswer9 <em>Answer9</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getDate10 <em>Date10</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getPlan10 <em>Plan10</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getAnswer10 <em>Answer10</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getRelationid <em>Relationid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getPlansum <em>Plansum</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.impl.GenlPurchasePlanListImpl#getLine <em>Line</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlPurchasePlanList;
 */

public class GenlPurchasePlanListImpl extends ExtendedDataObjectImpl implements GenlPurchasePlanList {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_CREATEBY = 1;
	public final static int INDEX_CREATEBYNAME = 2;
	public final static int INDEX_CREATETIME = 3;
	public final static int INDEX_MODIFYBY = 4;
	public final static int INDEX_MODIFYBYNAME = 5;
	public final static int INDEX_MODIFYTIME = 6;
	public final static int INDEX_REMARK = 7;
	public final static int INDEX_STAND = 8;
	public final static int INDEX_PMATNR = 9;
	public final static int INDEX_ZCPCX = 10;
	public final static int INDEX_MATNR = 11;
	public final static int INDEX_MAKTX = 12;
	public final static int INDEX_LIFNR = 13;
	public final static int INDEX_NAME1 = 14;
	public final static int INDEX_STOCK = 15;
	public final static int INDEX_CARNO = 16;
	public final static int INDEX_UNDERAMOUNT = 17;
	public final static int INDEX_DATE1 = 18;
	public final static int INDEX_PLAN1 = 19;
	public final static int INDEX_ANSWER1 = 20;
	public final static int INDEX_DATE2 = 21;
	public final static int INDEX_PLAN2 = 22;
	public final static int INDEX_ANSWER2 = 23;
	public final static int INDEX_DATE3 = 24;
	public final static int INDEX_PLAN3 = 25;
	public final static int INDEX_ANSWER3 = 26;
	public final static int INDEX_DATE4 = 27;
	public final static int INDEX_PLAN4 = 28;
	public final static int INDEX_ANSWER4 = 29;
	public final static int INDEX_DATE5 = 30;
	public final static int INDEX_PLAN5 = 31;
	public final static int INDEX_ANSWER5 = 32;
	public final static int INDEX_DATE6 = 33;
	public final static int INDEX_PLAN6 = 34;
	public final static int INDEX_ANSWER6 = 35;
	public final static int INDEX_DATE7 = 36;
	public final static int INDEX_PLAN7 = 37;
	public final static int INDEX_ANSWER7 = 38;
	public final static int INDEX_DATE8 = 39;
	public final static int INDEX_PLAN8 = 40;
	public final static int INDEX_ANSWER8 = 41;
	public final static int INDEX_DATE9 = 42;
	public final static int INDEX_PLAN9 = 43;
	public final static int INDEX_ANSWER9 = 44;
	public final static int INDEX_DATE10 = 45;
	public final static int INDEX_PLAN10 = 46;
	public final static int INDEX_ANSWER10 = 47;
	public final static int INDEX_RELATIONID = 48;
	public final static int INDEX_PLANSUM = 49;
	public final static int INDEX_LINE = 50;
	public final static int SDO_PROPERTY_COUNT = 51;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlPurchasePlanListImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlPurchasePlanListImpl(Type type) {
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
	 * Returns the value of the '<em><b>Pmatnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Pmatnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Pmatnr</em>' attribute.
	 * @see #setPmatnr(java.lang.String)
	 */
	public String getPmatnr() {
		return DataUtil.toString(super.getByIndex(INDEX_PMATNR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPmatnr <em>Pmatnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pmatnr</em>' attribute.
	 * @see #getPmatnr()
	 */
	public void setPmatnr(String pmatnr) {
		super.setByIndex(INDEX_PMATNR, pmatnr);
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
	 * Returns the value of the '<em><b>Stock</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stock</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stock</em>' attribute.
	 * @see #setStock(long)
	 */
	public long getStock() {
		return DataUtil.toLong(super.getByIndex(INDEX_STOCK, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStock <em>Stock</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stock</em>' attribute.
	 * @see #getStock()
	 */
	public void setStock(long stock) {
		super.setByIndex(INDEX_STOCK, stock);
	}

	/**
	 * Returns the value of the '<em><b>Carno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Carno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Carno</em>' attribute.
	 * @see #setCarno(java.lang.String)
	 */
	public String getCarno() {
		return DataUtil.toString(super.getByIndex(INDEX_CARNO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCarno <em>Carno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Carno</em>' attribute.
	 * @see #getCarno()
	 */
	public void setCarno(String carno) {
		super.setByIndex(INDEX_CARNO, carno);
	}

	/**
	 * Returns the value of the '<em><b>Underamount</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Underamount</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Underamount</em>' attribute.
	 * @see #setUnderamount(long)
	 */
	public long getUnderamount() {
		return DataUtil.toLong(super.getByIndex(INDEX_UNDERAMOUNT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUnderamount <em>Underamount</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Underamount</em>' attribute.
	 * @see #getUnderamount()
	 */
	public void setUnderamount(long underamount) {
		super.setByIndex(INDEX_UNDERAMOUNT, underamount);
	}

	/**
	 * Returns the value of the '<em><b>Date1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date1</em>' attribute.
	 * @see #setDate1(java.lang.String)
	 */
	public String getDate1() {
		return DataUtil.toString(super.getByIndex(INDEX_DATE1, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDate1 <em>Date1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date1</em>' attribute.
	 * @see #getDate1()
	 */
	public void setDate1(String date1) {
		super.setByIndex(INDEX_DATE1, date1);
	}

	/**
	 * Returns the value of the '<em><b>Plan1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan1</em>' attribute.
	 * @see #setPlan1(long)
	 */
	public long getPlan1() {
		return DataUtil.toLong(super.getByIndex(INDEX_PLAN1, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPlan1 <em>Plan1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan1</em>' attribute.
	 * @see #getPlan1()
	 */
	public void setPlan1(long plan1) {
		super.setByIndex(INDEX_PLAN1, plan1);
	}

	/**
	 * Returns the value of the '<em><b>Answer1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer1</em>' attribute.
	 * @see #setAnswer1(long)
	 */
	public long getAnswer1() {
		return DataUtil.toLong(super.getByIndex(INDEX_ANSWER1, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAnswer1 <em>Answer1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer1</em>' attribute.
	 * @see #getAnswer1()
	 */
	public void setAnswer1(long answer1) {
		super.setByIndex(INDEX_ANSWER1, answer1);
	}

	/**
	 * Returns the value of the '<em><b>Date2</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date2</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date2</em>' attribute.
	 * @see #setDate2(java.lang.String)
	 */
	public String getDate2() {
		return DataUtil.toString(super.getByIndex(INDEX_DATE2, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDate2 <em>Date2</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date2</em>' attribute.
	 * @see #getDate2()
	 */
	public void setDate2(String date2) {
		super.setByIndex(INDEX_DATE2, date2);
	}

	/**
	 * Returns the value of the '<em><b>Plan2</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan2</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan2</em>' attribute.
	 * @see #setPlan2(long)
	 */
	public long getPlan2() {
		return DataUtil.toLong(super.getByIndex(INDEX_PLAN2, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPlan2 <em>Plan2</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan2</em>' attribute.
	 * @see #getPlan2()
	 */
	public void setPlan2(long plan2) {
		super.setByIndex(INDEX_PLAN2, plan2);
	}

	/**
	 * Returns the value of the '<em><b>Answer2</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer2</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer2</em>' attribute.
	 * @see #setAnswer2(long)
	 */
	public long getAnswer2() {
		return DataUtil.toLong(super.getByIndex(INDEX_ANSWER2, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAnswer2 <em>Answer2</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer2</em>' attribute.
	 * @see #getAnswer2()
	 */
	public void setAnswer2(long answer2) {
		super.setByIndex(INDEX_ANSWER2, answer2);
	}

	/**
	 * Returns the value of the '<em><b>Date3</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date3</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date3</em>' attribute.
	 * @see #setDate3(java.lang.String)
	 */
	public String getDate3() {
		return DataUtil.toString(super.getByIndex(INDEX_DATE3, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDate3 <em>Date3</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date3</em>' attribute.
	 * @see #getDate3()
	 */
	public void setDate3(String date3) {
		super.setByIndex(INDEX_DATE3, date3);
	}

	/**
	 * Returns the value of the '<em><b>Plan3</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan3</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan3</em>' attribute.
	 * @see #setPlan3(long)
	 */
	public long getPlan3() {
		return DataUtil.toLong(super.getByIndex(INDEX_PLAN3, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPlan3 <em>Plan3</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan3</em>' attribute.
	 * @see #getPlan3()
	 */
	public void setPlan3(long plan3) {
		super.setByIndex(INDEX_PLAN3, plan3);
	}

	/**
	 * Returns the value of the '<em><b>Answer3</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer3</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer3</em>' attribute.
	 * @see #setAnswer3(long)
	 */
	public long getAnswer3() {
		return DataUtil.toLong(super.getByIndex(INDEX_ANSWER3, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAnswer3 <em>Answer3</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer3</em>' attribute.
	 * @see #getAnswer3()
	 */
	public void setAnswer3(long answer3) {
		super.setByIndex(INDEX_ANSWER3, answer3);
	}

	/**
	 * Returns the value of the '<em><b>Date4</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date4</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date4</em>' attribute.
	 * @see #setDate4(java.lang.String)
	 */
	public String getDate4() {
		return DataUtil.toString(super.getByIndex(INDEX_DATE4, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDate4 <em>Date4</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date4</em>' attribute.
	 * @see #getDate4()
	 */
	public void setDate4(String date4) {
		super.setByIndex(INDEX_DATE4, date4);
	}

	/**
	 * Returns the value of the '<em><b>Plan4</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan4</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan4</em>' attribute.
	 * @see #setPlan4(long)
	 */
	public long getPlan4() {
		return DataUtil.toLong(super.getByIndex(INDEX_PLAN4, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPlan4 <em>Plan4</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan4</em>' attribute.
	 * @see #getPlan4()
	 */
	public void setPlan4(long plan4) {
		super.setByIndex(INDEX_PLAN4, plan4);
	}

	/**
	 * Returns the value of the '<em><b>Answer4</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer4</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer4</em>' attribute.
	 * @see #setAnswer4(long)
	 */
	public long getAnswer4() {
		return DataUtil.toLong(super.getByIndex(INDEX_ANSWER4, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAnswer4 <em>Answer4</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer4</em>' attribute.
	 * @see #getAnswer4()
	 */
	public void setAnswer4(long answer4) {
		super.setByIndex(INDEX_ANSWER4, answer4);
	}

	/**
	 * Returns the value of the '<em><b>Date5</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date5</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date5</em>' attribute.
	 * @see #setDate5(java.lang.String)
	 */
	public String getDate5() {
		return DataUtil.toString(super.getByIndex(INDEX_DATE5, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDate5 <em>Date5</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date5</em>' attribute.
	 * @see #getDate5()
	 */
	public void setDate5(String date5) {
		super.setByIndex(INDEX_DATE5, date5);
	}

	/**
	 * Returns the value of the '<em><b>Plan5</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan5</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan5</em>' attribute.
	 * @see #setPlan5(long)
	 */
	public long getPlan5() {
		return DataUtil.toLong(super.getByIndex(INDEX_PLAN5, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPlan5 <em>Plan5</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan5</em>' attribute.
	 * @see #getPlan5()
	 */
	public void setPlan5(long plan5) {
		super.setByIndex(INDEX_PLAN5, plan5);
	}

	/**
	 * Returns the value of the '<em><b>Answer5</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer5</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer5</em>' attribute.
	 * @see #setAnswer5(long)
	 */
	public long getAnswer5() {
		return DataUtil.toLong(super.getByIndex(INDEX_ANSWER5, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAnswer5 <em>Answer5</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer5</em>' attribute.
	 * @see #getAnswer5()
	 */
	public void setAnswer5(long answer5) {
		super.setByIndex(INDEX_ANSWER5, answer5);
	}

	/**
	 * Returns the value of the '<em><b>Date6</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date6</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date6</em>' attribute.
	 * @see #setDate6(java.lang.String)
	 */
	public String getDate6() {
		return DataUtil.toString(super.getByIndex(INDEX_DATE6, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDate6 <em>Date6</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date6</em>' attribute.
	 * @see #getDate6()
	 */
	public void setDate6(String date6) {
		super.setByIndex(INDEX_DATE6, date6);
	}

	/**
	 * Returns the value of the '<em><b>Plan6</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan6</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan6</em>' attribute.
	 * @see #setPlan6(long)
	 */
	public long getPlan6() {
		return DataUtil.toLong(super.getByIndex(INDEX_PLAN6, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPlan6 <em>Plan6</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan6</em>' attribute.
	 * @see #getPlan6()
	 */
	public void setPlan6(long plan6) {
		super.setByIndex(INDEX_PLAN6, plan6);
	}

	/**
	 * Returns the value of the '<em><b>Answer6</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer6</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer6</em>' attribute.
	 * @see #setAnswer6(long)
	 */
	public long getAnswer6() {
		return DataUtil.toLong(super.getByIndex(INDEX_ANSWER6, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAnswer6 <em>Answer6</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer6</em>' attribute.
	 * @see #getAnswer6()
	 */
	public void setAnswer6(long answer6) {
		super.setByIndex(INDEX_ANSWER6, answer6);
	}

	/**
	 * Returns the value of the '<em><b>Date7</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date7</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date7</em>' attribute.
	 * @see #setDate7(java.lang.String)
	 */
	public String getDate7() {
		return DataUtil.toString(super.getByIndex(INDEX_DATE7, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDate7 <em>Date7</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date7</em>' attribute.
	 * @see #getDate7()
	 */
	public void setDate7(String date7) {
		super.setByIndex(INDEX_DATE7, date7);
	}

	/**
	 * Returns the value of the '<em><b>Plan7</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan7</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan7</em>' attribute.
	 * @see #setPlan7(long)
	 */
	public long getPlan7() {
		return DataUtil.toLong(super.getByIndex(INDEX_PLAN7, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPlan7 <em>Plan7</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan7</em>' attribute.
	 * @see #getPlan7()
	 */
	public void setPlan7(long plan7) {
		super.setByIndex(INDEX_PLAN7, plan7);
	}

	/**
	 * Returns the value of the '<em><b>Answer7</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer7</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer7</em>' attribute.
	 * @see #setAnswer7(long)
	 */
	public long getAnswer7() {
		return DataUtil.toLong(super.getByIndex(INDEX_ANSWER7, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAnswer7 <em>Answer7</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer7</em>' attribute.
	 * @see #getAnswer7()
	 */
	public void setAnswer7(long answer7) {
		super.setByIndex(INDEX_ANSWER7, answer7);
	}

	/**
	 * Returns the value of the '<em><b>Date8</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date8</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date8</em>' attribute.
	 * @see #setDate8(java.lang.String)
	 */
	public String getDate8() {
		return DataUtil.toString(super.getByIndex(INDEX_DATE8, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDate8 <em>Date8</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date8</em>' attribute.
	 * @see #getDate8()
	 */
	public void setDate8(String date8) {
		super.setByIndex(INDEX_DATE8, date8);
	}

	/**
	 * Returns the value of the '<em><b>Plan8</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan8</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan8</em>' attribute.
	 * @see #setPlan8(long)
	 */
	public long getPlan8() {
		return DataUtil.toLong(super.getByIndex(INDEX_PLAN8, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPlan8 <em>Plan8</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan8</em>' attribute.
	 * @see #getPlan8()
	 */
	public void setPlan8(long plan8) {
		super.setByIndex(INDEX_PLAN8, plan8);
	}

	/**
	 * Returns the value of the '<em><b>Answer8</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer8</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer8</em>' attribute.
	 * @see #setAnswer8(long)
	 */
	public long getAnswer8() {
		return DataUtil.toLong(super.getByIndex(INDEX_ANSWER8, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAnswer8 <em>Answer8</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer8</em>' attribute.
	 * @see #getAnswer8()
	 */
	public void setAnswer8(long answer8) {
		super.setByIndex(INDEX_ANSWER8, answer8);
	}

	/**
	 * Returns the value of the '<em><b>Date9</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date9</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date9</em>' attribute.
	 * @see #setDate9(java.lang.String)
	 */
	public String getDate9() {
		return DataUtil.toString(super.getByIndex(INDEX_DATE9, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDate9 <em>Date9</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date9</em>' attribute.
	 * @see #getDate9()
	 */
	public void setDate9(String date9) {
		super.setByIndex(INDEX_DATE9, date9);
	}

	/**
	 * Returns the value of the '<em><b>Plan9</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan9</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan9</em>' attribute.
	 * @see #setPlan9(long)
	 */
	public long getPlan9() {
		return DataUtil.toLong(super.getByIndex(INDEX_PLAN9, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPlan9 <em>Plan9</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan9</em>' attribute.
	 * @see #getPlan9()
	 */
	public void setPlan9(long plan9) {
		super.setByIndex(INDEX_PLAN9, plan9);
	}

	/**
	 * Returns the value of the '<em><b>Answer9</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer9</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer9</em>' attribute.
	 * @see #setAnswer9(long)
	 */
	public long getAnswer9() {
		return DataUtil.toLong(super.getByIndex(INDEX_ANSWER9, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAnswer9 <em>Answer9</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer9</em>' attribute.
	 * @see #getAnswer9()
	 */
	public void setAnswer9(long answer9) {
		super.setByIndex(INDEX_ANSWER9, answer9);
	}

	/**
	 * Returns the value of the '<em><b>Date10</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date10</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date10</em>' attribute.
	 * @see #setDate10(java.lang.String)
	 */
	public String getDate10() {
		return DataUtil.toString(super.getByIndex(INDEX_DATE10, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDate10 <em>Date10</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date10</em>' attribute.
	 * @see #getDate10()
	 */
	public void setDate10(String date10) {
		super.setByIndex(INDEX_DATE10, date10);
	}

	/**
	 * Returns the value of the '<em><b>Plan10</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan10</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan10</em>' attribute.
	 * @see #setPlan10(long)
	 */
	public long getPlan10() {
		return DataUtil.toLong(super.getByIndex(INDEX_PLAN10, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPlan10 <em>Plan10</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan10</em>' attribute.
	 * @see #getPlan10()
	 */
	public void setPlan10(long plan10) {
		super.setByIndex(INDEX_PLAN10, plan10);
	}

	/**
	 * Returns the value of the '<em><b>Answer10</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer10</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer10</em>' attribute.
	 * @see #setAnswer10(long)
	 */
	public long getAnswer10() {
		return DataUtil.toLong(super.getByIndex(INDEX_ANSWER10, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAnswer10 <em>Answer10</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer10</em>' attribute.
	 * @see #getAnswer10()
	 */
	public void setAnswer10(long answer10) {
		super.setByIndex(INDEX_ANSWER10, answer10);
	}

	/**
	 * Returns the value of the '<em><b>Relationid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Relationid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Relationid</em>' attribute.
	 * @see #setRelationid(java.lang.String)
	 */
	public String getRelationid() {
		return DataUtil.toString(super.getByIndex(INDEX_RELATIONID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRelationid <em>Relationid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Relationid</em>' attribute.
	 * @see #getRelationid()
	 */
	public void setRelationid(String relationid) {
		super.setByIndex(INDEX_RELATIONID, relationid);
	}

	/**
	 * Returns the value of the '<em><b>Plansum</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plansum</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plansum</em>' attribute.
	 * @see #setPlansum(long)
	 */
	public long getPlansum() {
		return DataUtil.toLong(super.getByIndex(INDEX_PLANSUM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPlansum <em>Plansum</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plansum</em>' attribute.
	 * @see #getPlansum()
	 */
	public void setPlansum(long plansum) {
		super.setByIndex(INDEX_PLANSUM, plansum);
	}

	/**
	 * Returns the value of the '<em><b>Line</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Line</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Line</em>' attribute.
	 * @see #setLine(java.lang.String)
	 */
	public String getLine() {
		return DataUtil.toString(super.getByIndex(INDEX_LINE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getLine <em>Line</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Line</em>' attribute.
	 * @see #getLine()
	 */
	public void setLine(String line) {
		super.setByIndex(INDEX_LINE, line);
	}


}