/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.inspect.Inspect.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyNote;

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
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getWxllno <em>Wxllno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getDjlx <em>Djlx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getDjbh <em>Djbh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getZjlb <em>Zjlb</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getDxjlb <em>Dxjlb</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getJyy <em>Jyy</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getJyjl <em>Jyjl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getJyrq <em>Jyrq</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getJyfs <em>Jyfs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getGyswlbh <em>Gyswlbh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getJjs <em>Jjs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getBhgs <em>Bhgs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getText <em>Text</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getClyj <em>Clyj</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getStatu <em>Statu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getCreateuserid <em>Createuserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getModifytime <em>Modifytime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getModifyuserid <em>Modifyuserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyNoteImpl#getWerks <em>Werks</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlInspectWxlljyNote;
 */

public class GenlInspectWxlljyNoteImpl extends ExtendedDataObjectImpl implements GenlInspectWxlljyNote {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_WXLLNO = 0;
	public final static int INDEX_DJLX = 1;
	public final static int INDEX_DJBH = 2;
	public final static int INDEX_LIFNR = 3;
	public final static int INDEX_ZJLB = 4;
	public final static int INDEX_DXJLB = 5;
	public final static int INDEX_JYY = 6;
	public final static int INDEX_JYJL = 7;
	public final static int INDEX_JYRQ = 8;
	public final static int INDEX_JYFS = 9;
	public final static int INDEX_MATNR = 10;
	public final static int INDEX_GYSWLBH = 11;
	public final static int INDEX_JJS = 12;
	public final static int INDEX_BHGS = 13;
	public final static int INDEX_TEXT = 14;
	public final static int INDEX_CLYJ = 15;
	public final static int INDEX_STATU = 16;
	public final static int INDEX_CREATETIME = 17;
	public final static int INDEX_CREATEUSERID = 18;
	public final static int INDEX_MODIFYTIME = 19;
	public final static int INDEX_MODIFYUSERID = 20;
	public final static int INDEX_WERKS = 21;
	public final static int SDO_PROPERTY_COUNT = 22;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInspectWxlljyNoteImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInspectWxlljyNoteImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Wxllno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wxllno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wxllno</em>' attribute.
	 * @see #setWxllno(java.lang.String)
	 */
	public String getWxllno() {
		return DataUtil.toString(super.getByIndex(INDEX_WXLLNO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWxllno <em>Wxllno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wxllno</em>' attribute.
	 * @see #getWxllno()
	 */
	public void setWxllno(String wxllno) {
		super.setByIndex(INDEX_WXLLNO, wxllno);
	}

	/**
	 * Returns the value of the '<em><b>Djlx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Djlx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Djlx</em>' attribute.
	 * @see #setDjlx(java.lang.String)
	 */
	public String getDjlx() {
		return DataUtil.toString(super.getByIndex(INDEX_DJLX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDjlx <em>Djlx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Djlx</em>' attribute.
	 * @see #getDjlx()
	 */
	public void setDjlx(String djlx) {
		super.setByIndex(INDEX_DJLX, djlx);
	}

	/**
	 * Returns the value of the '<em><b>Djbh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Djbh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Djbh</em>' attribute.
	 * @see #setDjbh(java.lang.String)
	 */
	public String getDjbh() {
		return DataUtil.toString(super.getByIndex(INDEX_DJBH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDjbh <em>Djbh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Djbh</em>' attribute.
	 * @see #getDjbh()
	 */
	public void setDjbh(String djbh) {
		super.setByIndex(INDEX_DJBH, djbh);
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
	 * Returns the value of the '<em><b>Zjlb</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zjlb</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zjlb</em>' attribute.
	 * @see #setZjlb(java.lang.String)
	 */
	public String getZjlb() {
		return DataUtil.toString(super.getByIndex(INDEX_ZJLB, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZjlb <em>Zjlb</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zjlb</em>' attribute.
	 * @see #getZjlb()
	 */
	public void setZjlb(String zjlb) {
		super.setByIndex(INDEX_ZJLB, zjlb);
	}

	/**
	 * Returns the value of the '<em><b>Dxjlb</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Dxjlb</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Dxjlb</em>' attribute.
	 * @see #setDxjlb(java.lang.String)
	 */
	public String getDxjlb() {
		return DataUtil.toString(super.getByIndex(INDEX_DXJLB, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDxjlb <em>Dxjlb</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dxjlb</em>' attribute.
	 * @see #getDxjlb()
	 */
	public void setDxjlb(String dxjlb) {
		super.setByIndex(INDEX_DXJLB, dxjlb);
	}

	/**
	 * Returns the value of the '<em><b>Jyy</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jyy</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jyy</em>' attribute.
	 * @see #setJyy(java.lang.String)
	 */
	public String getJyy() {
		return DataUtil.toString(super.getByIndex(INDEX_JYY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getJyy <em>Jyy</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jyy</em>' attribute.
	 * @see #getJyy()
	 */
	public void setJyy(String jyy) {
		super.setByIndex(INDEX_JYY, jyy);
	}

	/**
	 * Returns the value of the '<em><b>Jyjl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jyjl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jyjl</em>' attribute.
	 * @see #setJyjl(java.lang.String)
	 */
	public String getJyjl() {
		return DataUtil.toString(super.getByIndex(INDEX_JYJL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getJyjl <em>Jyjl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jyjl</em>' attribute.
	 * @see #getJyjl()
	 */
	public void setJyjl(String jyjl) {
		super.setByIndex(INDEX_JYJL, jyjl);
	}

	/**
	 * Returns the value of the '<em><b>Jyrq</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jyrq</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jyrq</em>' attribute.
	 * @see #setJyrq(java.util.Date)
	 */
	public Date getJyrq() {
		return DataUtil.toDate(super.getByIndex(INDEX_JYRQ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getJyrq <em>Jyrq</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jyrq</em>' attribute.
	 * @see #getJyrq()
	 */
	public void setJyrq(Date jyrq) {
		super.setByIndex(INDEX_JYRQ, jyrq);
	}

	/**
	 * Returns the value of the '<em><b>Jyfs</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jyfs</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jyfs</em>' attribute.
	 * @see #setJyfs(java.lang.String)
	 */
	public String getJyfs() {
		return DataUtil.toString(super.getByIndex(INDEX_JYFS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getJyfs <em>Jyfs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jyfs</em>' attribute.
	 * @see #getJyfs()
	 */
	public void setJyfs(String jyfs) {
		super.setByIndex(INDEX_JYFS, jyfs);
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
	 * Returns the value of the '<em><b>Gyswlbh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gyswlbh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gyswlbh</em>' attribute.
	 * @see #setGyswlbh(java.lang.String)
	 */
	public String getGyswlbh() {
		return DataUtil.toString(super.getByIndex(INDEX_GYSWLBH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGyswlbh <em>Gyswlbh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gyswlbh</em>' attribute.
	 * @see #getGyswlbh()
	 */
	public void setGyswlbh(String gyswlbh) {
		super.setByIndex(INDEX_GYSWLBH, gyswlbh);
	}

	/**
	 * Returns the value of the '<em><b>Jjs</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jjs</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jjs</em>' attribute.
	 * @see #setJjs(java.lang.String)
	 */
	public String getJjs() {
		return DataUtil.toString(super.getByIndex(INDEX_JJS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getJjs <em>Jjs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jjs</em>' attribute.
	 * @see #getJjs()
	 */
	public void setJjs(String jjs) {
		super.setByIndex(INDEX_JJS, jjs);
	}

	/**
	 * Returns the value of the '<em><b>Bhgs</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bhgs</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bhgs</em>' attribute.
	 * @see #setBhgs(java.lang.String)
	 */
	public String getBhgs() {
		return DataUtil.toString(super.getByIndex(INDEX_BHGS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBhgs <em>Bhgs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bhgs</em>' attribute.
	 * @see #getBhgs()
	 */
	public void setBhgs(String bhgs) {
		super.setByIndex(INDEX_BHGS, bhgs);
	}

	/**
	 * Returns the value of the '<em><b>Text</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Text</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Text</em>' attribute.
	 * @see #setText(java.lang.String)
	 */
	public String getText() {
		return DataUtil.toString(super.getByIndex(INDEX_TEXT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getText <em>Text</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Text</em>' attribute.
	 * @see #getText()
	 */
	public void setText(String text) {
		super.setByIndex(INDEX_TEXT, text);
	}

	/**
	 * Returns the value of the '<em><b>Clyj</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Clyj</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Clyj</em>' attribute.
	 * @see #setClyj(java.lang.String)
	 */
	public String getClyj() {
		return DataUtil.toString(super.getByIndex(INDEX_CLYJ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getClyj <em>Clyj</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Clyj</em>' attribute.
	 * @see #getClyj()
	 */
	public void setClyj(String clyj) {
		super.setByIndex(INDEX_CLYJ, clyj);
	}

	/**
	 * Returns the value of the '<em><b>Statu</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Statu</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Statu</em>' attribute.
	 * @see #setStatu(java.lang.String)
	 */
	public String getStatu() {
		return DataUtil.toString(super.getByIndex(INDEX_STATU, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStatu <em>Statu</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Statu</em>' attribute.
	 * @see #getStatu()
	 */
	public void setStatu(String statu) {
		super.setByIndex(INDEX_STATU, statu);
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
	 * Returns the value of the '<em><b>Modifyuserid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifyuserid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifyuserid</em>' attribute.
	 * @see #setModifyuserid(java.lang.String)
	 */
	public String getModifyuserid() {
		return DataUtil.toString(super.getByIndex(INDEX_MODIFYUSERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getModifyuserid <em>Modifyuserid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifyuserid</em>' attribute.
	 * @see #getModifyuserid()
	 */
	public void setModifyuserid(String modifyuserid) {
		super.setByIndex(INDEX_MODIFYUSERID, modifyuserid);
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