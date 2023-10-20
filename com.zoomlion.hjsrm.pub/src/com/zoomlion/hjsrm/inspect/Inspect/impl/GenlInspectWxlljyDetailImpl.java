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
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail;

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
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyDetailImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyDetailImpl#getWxllno <em>Wxllno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyDetailImpl#getWtms <em>Wtms</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyDetailImpl#getWtbw <em>Wtbw</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyDetailImpl#getQxlx <em>Qxlx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyDetailImpl#getWtsx <em>Wtsx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyDetailImpl#getGzdj <em>Gzdj</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyDetailImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyDetailImpl#getUpdateuserid <em>Updateuserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyDetailImpl#getQxlxname <em>Qxlxname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWxlljyDetailImpl#getWtsxname <em>Wtsxname</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlInspectWxlljyDetail;
 */

public class GenlInspectWxlljyDetailImpl extends ExtendedDataObjectImpl implements GenlInspectWxlljyDetail {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_WXLLNO = 1;
	public final static int INDEX_WTMS = 2;
	public final static int INDEX_WTBW = 3;
	public final static int INDEX_QXLX = 4;
	public final static int INDEX_WTSX = 5;
	public final static int INDEX_GZDJ = 6;
	public final static int INDEX_UPDATETIME = 7;
	public final static int INDEX_UPDATEUSERID = 8;
	public final static int INDEX_QXLXNAME = 9;
	public final static int INDEX_WTSXNAME = 10;
	public final static int SDO_PROPERTY_COUNT = 11;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInspectWxlljyDetailImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInspectWxlljyDetailImpl(Type type) {
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
	 * @see #setPkid(long)
	 */
	public long getPkid() {
		return DataUtil.toLong(super.getByIndex(INDEX_PKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPkid <em>Pkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pkid</em>' attribute.
	 * @see #getPkid()
	 */
	public void setPkid(long pkid) {
		super.setByIndex(INDEX_PKID, pkid);
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
	 * Returns the value of the '<em><b>Wtbw</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wtbw</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wtbw</em>' attribute.
	 * @see #setWtbw(java.lang.String)
	 */
	public String getWtbw() {
		return DataUtil.toString(super.getByIndex(INDEX_WTBW, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWtbw <em>Wtbw</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wtbw</em>' attribute.
	 * @see #getWtbw()
	 */
	public void setWtbw(String wtbw) {
		super.setByIndex(INDEX_WTBW, wtbw);
	}

	/**
	 * Returns the value of the '<em><b>Qxlx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qxlx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qxlx</em>' attribute.
	 * @see #setQxlx(java.lang.String)
	 */
	public String getQxlx() {
		return DataUtil.toString(super.getByIndex(INDEX_QXLX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getQxlx <em>Qxlx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qxlx</em>' attribute.
	 * @see #getQxlx()
	 */
	public void setQxlx(String qxlx) {
		super.setByIndex(INDEX_QXLX, qxlx);
	}

	/**
	 * Returns the value of the '<em><b>Wtsx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wtsx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wtsx</em>' attribute.
	 * @see #setWtsx(java.lang.String)
	 */
	public String getWtsx() {
		return DataUtil.toString(super.getByIndex(INDEX_WTSX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWtsx <em>Wtsx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wtsx</em>' attribute.
	 * @see #getWtsx()
	 */
	public void setWtsx(String wtsx) {
		super.setByIndex(INDEX_WTSX, wtsx);
	}

	/**
	 * Returns the value of the '<em><b>Gzdj</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gzdj</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gzdj</em>' attribute.
	 * @see #setGzdj(java.lang.String)
	 */
	public String getGzdj() {
		return DataUtil.toString(super.getByIndex(INDEX_GZDJ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGzdj <em>Gzdj</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gzdj</em>' attribute.
	 * @see #getGzdj()
	 */
	public void setGzdj(String gzdj) {
		super.setByIndex(INDEX_GZDJ, gzdj);
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
	 * Returns the value of the '<em><b>Updateuserid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Updateuserid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Updateuserid</em>' attribute.
	 * @see #setUpdateuserid(java.lang.String)
	 */
	public String getUpdateuserid() {
		return DataUtil.toString(super.getByIndex(INDEX_UPDATEUSERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUpdateuserid <em>Updateuserid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Updateuserid</em>' attribute.
	 * @see #getUpdateuserid()
	 */
	public void setUpdateuserid(String updateuserid) {
		super.setByIndex(INDEX_UPDATEUSERID, updateuserid);
	}

	/**
	 * Returns the value of the '<em><b>Qxlxname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qxlxname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qxlxname</em>' attribute.
	 * @see #setQxlxname(java.lang.String)
	 */
	public String getQxlxname() {
		return DataUtil.toString(super.getByIndex(INDEX_QXLXNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getQxlxname <em>Qxlxname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qxlxname</em>' attribute.
	 * @see #getQxlxname()
	 */
	public void setQxlxname(String qxlxname) {
		super.setByIndex(INDEX_QXLXNAME, qxlxname);
	}

	/**
	 * Returns the value of the '<em><b>Wtsxname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wtsxname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wtsxname</em>' attribute.
	 * @see #setWtsxname(java.lang.String)
	 */
	public String getWtsxname() {
		return DataUtil.toString(super.getByIndex(INDEX_WTSXNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWtsxname <em>Wtsxname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wtsxname</em>' attribute.
	 * @see #getWtsxname()
	 */
	public void setWtsxname(String wtsxname) {
		super.setByIndex(INDEX_WTSXNAME, wtsxname);
	}


}