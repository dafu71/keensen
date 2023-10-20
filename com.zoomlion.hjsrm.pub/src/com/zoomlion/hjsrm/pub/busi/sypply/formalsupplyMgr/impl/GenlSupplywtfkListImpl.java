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
import com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplywtfkList;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getWtfkid <em>Wtfkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getCreatename <em>Createname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getCreatetel <em>Createtel</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getWtlx <em>Wtlx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getWtms <em>Wtms</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getRecvuserid <em>Recvuserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getZrrname <em>Zrrname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getJjfa <em>Jjfa</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getJhjjtime <em>Jhjjtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getClzt <em>Clzt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getSjjjtime <em>Sjjjtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getSupqr <em>Supqr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getTranu <em>Tranu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getTrant <em>Trant</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getTctime <em>Tctime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getRecvusername <em>Recvusername</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.impl.GenlSupplywtfkListImpl#getName1 <em>Name1</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlSupplywtfkList;
 */

public class GenlSupplywtfkListImpl extends ExtendedDataObjectImpl implements GenlSupplywtfkList {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_WTFKID = 0;
	public final static int INDEX_CREATENAME = 1;
	public final static int INDEX_CREATETEL = 2;
	public final static int INDEX_LIFNR = 3;
	public final static int INDEX_WTLX = 4;
	public final static int INDEX_WTMS = 5;
	public final static int INDEX_RECVUSERID = 6;
	public final static int INDEX_ZRRNAME = 7;
	public final static int INDEX_JJFA = 8;
	public final static int INDEX_JHJJTIME = 9;
	public final static int INDEX_CLZT = 10;
	public final static int INDEX_SJJJTIME = 11;
	public final static int INDEX_SUPQR = 12;
	public final static int INDEX_TRANU = 13;
	public final static int INDEX_TRANT = 14;
	public final static int INDEX_TCTIME = 15;
	public final static int INDEX_RECVUSERNAME = 16;
	public final static int INDEX_NAME1 = 17;
	public final static int SDO_PROPERTY_COUNT = 18;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlSupplywtfkListImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlSupplywtfkListImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Wtfkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wtfkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wtfkid</em>' attribute.
	 * @see #setWtfkid(java.lang.String)
	 */
	public String getWtfkid() {
		return DataUtil.toString(super.getByIndex(INDEX_WTFKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWtfkid <em>Wtfkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wtfkid</em>' attribute.
	 * @see #getWtfkid()
	 */
	public void setWtfkid(String wtfkid) {
		super.setByIndex(INDEX_WTFKID, wtfkid);
	}

	/**
	 * Returns the value of the '<em><b>Createname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createname</em>' attribute.
	 * @see #setCreatename(java.lang.String)
	 */
	public String getCreatename() {
		return DataUtil.toString(super.getByIndex(INDEX_CREATENAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreatename <em>Createname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createname</em>' attribute.
	 * @see #getCreatename()
	 */
	public void setCreatename(String createname) {
		super.setByIndex(INDEX_CREATENAME, createname);
	}

	/**
	 * Returns the value of the '<em><b>Createtel</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createtel</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createtel</em>' attribute.
	 * @see #setCreatetel(java.lang.String)
	 */
	public String getCreatetel() {
		return DataUtil.toString(super.getByIndex(INDEX_CREATETEL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreatetel <em>Createtel</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createtel</em>' attribute.
	 * @see #getCreatetel()
	 */
	public void setCreatetel(String createtel) {
		super.setByIndex(INDEX_CREATETEL, createtel);
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
	 * Returns the value of the '<em><b>Wtlx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wtlx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wtlx</em>' attribute.
	 * @see #setWtlx(java.lang.String)
	 */
	public String getWtlx() {
		return DataUtil.toString(super.getByIndex(INDEX_WTLX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWtlx <em>Wtlx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wtlx</em>' attribute.
	 * @see #getWtlx()
	 */
	public void setWtlx(String wtlx) {
		super.setByIndex(INDEX_WTLX, wtlx);
	}

	/**
	 * Returns the value of the '<em><b>Wtms</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wtms</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wtms</em>' attribute.
	 * @see #setWtms(java.lang.String)
	 */
	public String getWtms() {
		return DataUtil.toString(super.getByIndex(INDEX_WTMS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWtms <em>Wtms</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wtms</em>' attribute.
	 * @see #getWtms()
	 */
	public void setWtms(String wtms) {
		super.setByIndex(INDEX_WTMS, wtms);
	}

	/**
	 * Returns the value of the '<em><b>Recvuserid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recvuserid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recvuserid</em>' attribute.
	 * @see #setRecvuserid(java.lang.String)
	 */
	public String getRecvuserid() {
		return DataUtil.toString(super.getByIndex(INDEX_RECVUSERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRecvuserid <em>Recvuserid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recvuserid</em>' attribute.
	 * @see #getRecvuserid()
	 */
	public void setRecvuserid(String recvuserid) {
		super.setByIndex(INDEX_RECVUSERID, recvuserid);
	}

	/**
	 * Returns the value of the '<em><b>Zrrname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zrrname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zrrname</em>' attribute.
	 * @see #setZrrname(java.lang.String)
	 */
	public String getZrrname() {
		return DataUtil.toString(super.getByIndex(INDEX_ZRRNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZrrname <em>Zrrname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zrrname</em>' attribute.
	 * @see #getZrrname()
	 */
	public void setZrrname(String zrrname) {
		super.setByIndex(INDEX_ZRRNAME, zrrname);
	}

	/**
	 * Returns the value of the '<em><b>Jjfa</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jjfa</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jjfa</em>' attribute.
	 * @see #setJjfa(java.lang.String)
	 */
	public String getJjfa() {
		return DataUtil.toString(super.getByIndex(INDEX_JJFA, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getJjfa <em>Jjfa</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jjfa</em>' attribute.
	 * @see #getJjfa()
	 */
	public void setJjfa(String jjfa) {
		super.setByIndex(INDEX_JJFA, jjfa);
	}

	/**
	 * Returns the value of the '<em><b>Jhjjtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jhjjtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jhjjtime</em>' attribute.
	 * @see #setJhjjtime(java.util.Date)
	 */
	public Date getJhjjtime() {
		return DataUtil.toDate(super.getByIndex(INDEX_JHJJTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getJhjjtime <em>Jhjjtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jhjjtime</em>' attribute.
	 * @see #getJhjjtime()
	 */
	public void setJhjjtime(Date jhjjtime) {
		super.setByIndex(INDEX_JHJJTIME, jhjjtime);
	}

	/**
	 * Returns the value of the '<em><b>Clzt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Clzt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Clzt</em>' attribute.
	 * @see #setClzt(java.lang.String)
	 */
	public String getClzt() {
		return DataUtil.toString(super.getByIndex(INDEX_CLZT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getClzt <em>Clzt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Clzt</em>' attribute.
	 * @see #getClzt()
	 */
	public void setClzt(String clzt) {
		super.setByIndex(INDEX_CLZT, clzt);
	}

	/**
	 * Returns the value of the '<em><b>Sjjjtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sjjjtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sjjjtime</em>' attribute.
	 * @see #setSjjjtime(java.util.Date)
	 */
	public Date getSjjjtime() {
		return DataUtil.toDate(super.getByIndex(INDEX_SJJJTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSjjjtime <em>Sjjjtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sjjjtime</em>' attribute.
	 * @see #getSjjjtime()
	 */
	public void setSjjjtime(Date sjjjtime) {
		super.setByIndex(INDEX_SJJJTIME, sjjjtime);
	}

	/**
	 * Returns the value of the '<em><b>Supqr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Supqr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Supqr</em>' attribute.
	 * @see #setSupqr(java.lang.String)
	 */
	public String getSupqr() {
		return DataUtil.toString(super.getByIndex(INDEX_SUPQR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSupqr <em>Supqr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Supqr</em>' attribute.
	 * @see #getSupqr()
	 */
	public void setSupqr(String supqr) {
		super.setByIndex(INDEX_SUPQR, supqr);
	}

	/**
	 * Returns the value of the '<em><b>Tranu</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Tranu</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Tranu</em>' attribute.
	 * @see #setTranu(java.lang.String)
	 */
	public String getTranu() {
		return DataUtil.toString(super.getByIndex(INDEX_TRANU, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTranu <em>Tranu</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Tranu</em>' attribute.
	 * @see #getTranu()
	 */
	public void setTranu(String tranu) {
		super.setByIndex(INDEX_TRANU, tranu);
	}

	/**
	 * Returns the value of the '<em><b>Trant</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Trant</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Trant</em>' attribute.
	 * @see #setTrant(java.util.Date)
	 */
	public Date getTrant() {
		return DataUtil.toDate(super.getByIndex(INDEX_TRANT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTrant <em>Trant</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Trant</em>' attribute.
	 * @see #getTrant()
	 */
	public void setTrant(Date trant) {
		super.setByIndex(INDEX_TRANT, trant);
	}

	/**
	 * Returns the value of the '<em><b>Tctime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Tctime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Tctime</em>' attribute.
	 * @see #setTctime(java.util.Date)
	 */
	public Date getTctime() {
		return DataUtil.toDate(super.getByIndex(INDEX_TCTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTctime <em>Tctime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Tctime</em>' attribute.
	 * @see #getTctime()
	 */
	public void setTctime(Date tctime) {
		super.setByIndex(INDEX_TCTIME, tctime);
	}

	/**
	 * Returns the value of the '<em><b>Recvusername</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recvusername</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recvusername</em>' attribute.
	 * @see #setRecvusername(java.lang.String)
	 */
	public String getRecvusername() {
		return DataUtil.toString(super.getByIndex(INDEX_RECVUSERNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRecvusername <em>Recvusername</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recvusername</em>' attribute.
	 * @see #getRecvusername()
	 */
	public void setRecvusername(String recvusername) {
		super.setByIndex(INDEX_RECVUSERNAME, recvusername);
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


}