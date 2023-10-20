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
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWglljyNote;

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
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getWgllno <em>Wgllno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getJyff <em>Jyff</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getPls <em>Pls</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getCjs <em>Cjs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getBhgs <em>Bhgs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getClyj <em>Clyj</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getJyy <em>Jyy</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getJyrq <em>Jyrq</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getXxms <em>Xxms</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getGzxt <em>Gzxt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getGzjg <em>Gzjg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getGzxs <em>Gzxs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getCreateuserid <em>Createuserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getModifytime <em>Modifytime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getModifyuserid <em>Modifyuserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getWerks <em>Werks</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getStatu <em>Statu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getGzxtname <em>Gzxtname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getGzjgname <em>Gzjgname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyNoteImpl#getGzxsname <em>Gzxsname</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlInspectWglljyNote;
 */

public class GenlInspectWglljyNoteImpl extends ExtendedDataObjectImpl implements GenlInspectWglljyNote {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_WGLLNO = 0;
	public final static int INDEX_LIFNR = 1;
	public final static int INDEX_MATNR = 2;
	public final static int INDEX_JYFF = 3;
	public final static int INDEX_PLS = 4;
	public final static int INDEX_CJS = 5;
	public final static int INDEX_BHGS = 6;
	public final static int INDEX_CLYJ = 7;
	public final static int INDEX_JYY = 8;
	public final static int INDEX_JYRQ = 9;
	public final static int INDEX_XXMS = 10;
	public final static int INDEX_GZXT = 11;
	public final static int INDEX_GZJG = 12;
	public final static int INDEX_GZXS = 13;
	public final static int INDEX_CREATETIME = 14;
	public final static int INDEX_CREATEUSERID = 15;
	public final static int INDEX_MODIFYTIME = 16;
	public final static int INDEX_MODIFYUSERID = 17;
	public final static int INDEX_WERKS = 18;
	public final static int INDEX_STATU = 19;
	public final static int INDEX_GZXTNAME = 20;
	public final static int INDEX_GZJGNAME = 21;
	public final static int INDEX_GZXSNAME = 22;
	public final static int SDO_PROPERTY_COUNT = 23;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInspectWglljyNoteImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInspectWglljyNoteImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Wgllno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wgllno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wgllno</em>' attribute.
	 * @see #setWgllno(java.lang.String)
	 */
	public String getWgllno() {
		return DataUtil.toString(super.getByIndex(INDEX_WGLLNO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWgllno <em>Wgllno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wgllno</em>' attribute.
	 * @see #getWgllno()
	 */
	public void setWgllno(String wgllno) {
		super.setByIndex(INDEX_WGLLNO, wgllno);
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
	 * Returns the value of the '<em><b>Jyff</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jyff</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jyff</em>' attribute.
	 * @see #setJyff(java.lang.String)
	 */
	public String getJyff() {
		return DataUtil.toString(super.getByIndex(INDEX_JYFF, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getJyff <em>Jyff</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jyff</em>' attribute.
	 * @see #getJyff()
	 */
	public void setJyff(String jyff) {
		super.setByIndex(INDEX_JYFF, jyff);
	}

	/**
	 * Returns the value of the '<em><b>Pls</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Pls</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Pls</em>' attribute.
	 * @see #setPls(java.lang.String)
	 */
	public String getPls() {
		return DataUtil.toString(super.getByIndex(INDEX_PLS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPls <em>Pls</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pls</em>' attribute.
	 * @see #getPls()
	 */
	public void setPls(String pls) {
		super.setByIndex(INDEX_PLS, pls);
	}

	/**
	 * Returns the value of the '<em><b>Cjs</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Cjs</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Cjs</em>' attribute.
	 * @see #setCjs(java.lang.String)
	 */
	public String getCjs() {
		return DataUtil.toString(super.getByIndex(INDEX_CJS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCjs <em>Cjs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cjs</em>' attribute.
	 * @see #getCjs()
	 */
	public void setCjs(String cjs) {
		super.setByIndex(INDEX_CJS, cjs);
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
	 * Returns the value of the '<em><b>Xxms</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Xxms</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Xxms</em>' attribute.
	 * @see #setXxms(java.lang.String)
	 */
	public String getXxms() {
		return DataUtil.toString(super.getByIndex(INDEX_XXMS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getXxms <em>Xxms</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Xxms</em>' attribute.
	 * @see #getXxms()
	 */
	public void setXxms(String xxms) {
		super.setByIndex(INDEX_XXMS, xxms);
	}

	/**
	 * Returns the value of the '<em><b>Gzxt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gzxt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gzxt</em>' attribute.
	 * @see #setGzxt(java.lang.String)
	 */
	public String getGzxt() {
		return DataUtil.toString(super.getByIndex(INDEX_GZXT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGzxt <em>Gzxt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gzxt</em>' attribute.
	 * @see #getGzxt()
	 */
	public void setGzxt(String gzxt) {
		super.setByIndex(INDEX_GZXT, gzxt);
	}

	/**
	 * Returns the value of the '<em><b>Gzjg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gzjg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gzjg</em>' attribute.
	 * @see #setGzjg(java.lang.String)
	 */
	public String getGzjg() {
		return DataUtil.toString(super.getByIndex(INDEX_GZJG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGzjg <em>Gzjg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gzjg</em>' attribute.
	 * @see #getGzjg()
	 */
	public void setGzjg(String gzjg) {
		super.setByIndex(INDEX_GZJG, gzjg);
	}

	/**
	 * Returns the value of the '<em><b>Gzxs</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gzxs</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gzxs</em>' attribute.
	 * @see #setGzxs(java.lang.String)
	 */
	public String getGzxs() {
		return DataUtil.toString(super.getByIndex(INDEX_GZXS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGzxs <em>Gzxs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gzxs</em>' attribute.
	 * @see #getGzxs()
	 */
	public void setGzxs(String gzxs) {
		super.setByIndex(INDEX_GZXS, gzxs);
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
	 * Returns the value of the '<em><b>Gzxtname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gzxtname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gzxtname</em>' attribute.
	 * @see #setGzxtname(java.lang.String)
	 */
	public String getGzxtname() {
		return DataUtil.toString(super.getByIndex(INDEX_GZXTNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGzxtname <em>Gzxtname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gzxtname</em>' attribute.
	 * @see #getGzxtname()
	 */
	public void setGzxtname(String gzxtname) {
		super.setByIndex(INDEX_GZXTNAME, gzxtname);
	}

	/**
	 * Returns the value of the '<em><b>Gzjgname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gzjgname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gzjgname</em>' attribute.
	 * @see #setGzjgname(java.lang.String)
	 */
	public String getGzjgname() {
		return DataUtil.toString(super.getByIndex(INDEX_GZJGNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGzjgname <em>Gzjgname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gzjgname</em>' attribute.
	 * @see #getGzjgname()
	 */
	public void setGzjgname(String gzjgname) {
		super.setByIndex(INDEX_GZJGNAME, gzjgname);
	}

	/**
	 * Returns the value of the '<em><b>Gzxsname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gzxsname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gzxsname</em>' attribute.
	 * @see #setGzxsname(java.lang.String)
	 */
	public String getGzxsname() {
		return DataUtil.toString(super.getByIndex(INDEX_GZXSNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGzxsname <em>Gzxsname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gzxsname</em>' attribute.
	 * @see #getGzxsname()
	 */
	public void setGzxsname(String gzxsname) {
		super.setByIndex(INDEX_GZXSNAME, gzxsname);
	}


}