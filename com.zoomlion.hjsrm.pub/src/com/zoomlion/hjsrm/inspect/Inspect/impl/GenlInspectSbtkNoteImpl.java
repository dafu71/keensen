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
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote;

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
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getSbtkno <em>Sbtkno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getTkdh <em>Tkdh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getJyy <em>Jyy</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getJyrq <em>Jyrq</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getTksl <em>Tksl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getGzxt <em>Gzxt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getGzjg <em>Gzjg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getGzxs <em>Gzxs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getClyj <em>Clyj</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getTkyy <em>Tkyy</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getStatu <em>Statu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getWerks <em>Werks</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getCreateuserid <em>Createuserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getModifytime <em>Modifytime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getModifyuserid <em>Modifyuserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getGzxtname <em>Gzxtname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getGzjgname <em>Gzjgname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getGzxsname <em>Gzxsname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectSbtkNoteImpl#getZatwrt <em>Zatwrt</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlInspectSbtkNote;
 */

public class GenlInspectSbtkNoteImpl extends ExtendedDataObjectImpl implements GenlInspectSbtkNote {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_SBTKNO = 0;
	public final static int INDEX_TKDH = 1;
	public final static int INDEX_LIFNR = 2;
	public final static int INDEX_MATNR = 3;
	public final static int INDEX_JYY = 4;
	public final static int INDEX_JYRQ = 5;
	public final static int INDEX_TKSL = 6;
	public final static int INDEX_GZXT = 7;
	public final static int INDEX_GZJG = 8;
	public final static int INDEX_GZXS = 9;
	public final static int INDEX_CLYJ = 10;
	public final static int INDEX_TKYY = 11;
	public final static int INDEX_STATU = 12;
	public final static int INDEX_WERKS = 13;
	public final static int INDEX_CREATETIME = 14;
	public final static int INDEX_CREATEUSERID = 15;
	public final static int INDEX_MODIFYTIME = 16;
	public final static int INDEX_MODIFYUSERID = 17;
	public final static int INDEX_GZXTNAME = 18;
	public final static int INDEX_GZJGNAME = 19;
	public final static int INDEX_GZXSNAME = 20;
	public final static int INDEX_ZATWRT = 21;
	public final static int SDO_PROPERTY_COUNT = 22;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInspectSbtkNoteImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInspectSbtkNoteImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Sbtkno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sbtkno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sbtkno</em>' attribute.
	 * @see #setSbtkno(java.lang.String)
	 */
	public String getSbtkno() {
		return DataUtil.toString(super.getByIndex(INDEX_SBTKNO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSbtkno <em>Sbtkno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sbtkno</em>' attribute.
	 * @see #getSbtkno()
	 */
	public void setSbtkno(String sbtkno) {
		super.setByIndex(INDEX_SBTKNO, sbtkno);
	}

	/**
	 * Returns the value of the '<em><b>Tkdh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Tkdh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Tkdh</em>' attribute.
	 * @see #setTkdh(java.lang.String)
	 */
	public String getTkdh() {
		return DataUtil.toString(super.getByIndex(INDEX_TKDH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTkdh <em>Tkdh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Tkdh</em>' attribute.
	 * @see #getTkdh()
	 */
	public void setTkdh(String tkdh) {
		super.setByIndex(INDEX_TKDH, tkdh);
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
	 * Returns the value of the '<em><b>Tksl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Tksl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Tksl</em>' attribute.
	 * @see #setTksl(java.lang.String)
	 */
	public String getTksl() {
		return DataUtil.toString(super.getByIndex(INDEX_TKSL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTksl <em>Tksl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Tksl</em>' attribute.
	 * @see #getTksl()
	 */
	public void setTksl(String tksl) {
		super.setByIndex(INDEX_TKSL, tksl);
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
	 * Returns the value of the '<em><b>Tkyy</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Tkyy</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Tkyy</em>' attribute.
	 * @see #setTkyy(java.lang.String)
	 */
	public String getTkyy() {
		return DataUtil.toString(super.getByIndex(INDEX_TKYY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTkyy <em>Tkyy</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Tkyy</em>' attribute.
	 * @see #getTkyy()
	 */
	public void setTkyy(String tkyy) {
		super.setByIndex(INDEX_TKYY, tkyy);
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

	/**
	 * Returns the value of the '<em><b>Zatwrt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zatwrt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zatwrt</em>' attribute.
	 * @see #setZatwrt(java.lang.String)
	 */
	public String getZatwrt() {
		return DataUtil.toString(super.getByIndex(INDEX_ZATWRT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getZatwrt <em>Zatwrt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zatwrt</em>' attribute.
	 * @see #getZatwrt()
	 */
	public void setZatwrt(String zatwrt) {
		super.setByIndex(INDEX_ZATWRT, zatwrt);
	}


}