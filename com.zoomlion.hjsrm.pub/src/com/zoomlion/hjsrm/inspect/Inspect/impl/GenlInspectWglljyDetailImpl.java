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
import com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWglljyDetail;

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
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyDetailImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyDetailImpl#getWgllno <em>Wgllno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyDetailImpl#getXxms <em>Xxms</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyDetailImpl#getGzxs <em>Gzxs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyDetailImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyDetailImpl#getUpdateuserid <em>Updateuserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.impl.GenlInspectWglljyDetailImpl#getGzxsname <em>Gzxsname</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements GenlInspectWglljyDetail;
 */

public class GenlInspectWglljyDetailImpl extends ExtendedDataObjectImpl implements GenlInspectWglljyDetail {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_WGLLNO = 1;
	public final static int INDEX_XXMS = 2;
	public final static int INDEX_GZXS = 3;
	public final static int INDEX_UPDATETIME = 4;
	public final static int INDEX_UPDATEUSERID = 5;
	public final static int INDEX_GZXSNAME = 6;
	public final static int SDO_PROPERTY_COUNT = 7;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInspectWglljyDetailImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public GenlInspectWglljyDetailImpl(Type type) {
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