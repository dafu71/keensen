/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.rights.RightsCtrl.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource;

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
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getResid <em>Resid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getParentresid <em>Parentresid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getRescode <em>Rescode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getRestype <em>Restype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getRespath <em>Respath</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getParaminfo <em>Paraminfo</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getResname <em>Resname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getReslabel <em>Reslabel</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getCompackname <em>Compackname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getReslevel <em>Reslevel</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getResseq <em>Resseq</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getIsleaf <em>Isleaf</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getSubcount <em>Subcount</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getIscheck <em>Ischeck</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getResdesc <em>Resdesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getUientry <em>Uientry</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getRootid <em>Rootid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getDisplayorder <em>Displayorder</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getImagepath <em>Imagepath</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getExpandpath <em>Expandpath</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getOpenmode <em>Openmode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcResourceImpl#getIsbizmap <em>Isbizmap</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TAcResource;
 */

public class TAcResourceImpl extends ExtendedDataObjectImpl implements TAcResource {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_RESID = 0;
	public final static int INDEX_PARENTRESID = 1;
	public final static int INDEX_RESCODE = 2;
	public final static int INDEX_RESTYPE = 3;
	public final static int INDEX_RESPATH = 4;
	public final static int INDEX_PARAMINFO = 5;
	public final static int INDEX_RESNAME = 6;
	public final static int INDEX_RESLABEL = 7;
	public final static int INDEX_COMPACKNAME = 8;
	public final static int INDEX_RESLEVEL = 9;
	public final static int INDEX_RESSEQ = 10;
	public final static int INDEX_ISLEAF = 11;
	public final static int INDEX_SUBCOUNT = 12;
	public final static int INDEX_CREATEBY = 13;
	public final static int INDEX_MODIFYBY = 14;
	public final static int INDEX_UPDATETIME = 15;
	public final static int INDEX_DATAORGID = 16;
	public final static int INDEX_ISCHECK = 17;
	public final static int INDEX_RESDESC = 18;
	public final static int INDEX_UIENTRY = 19;
	public final static int INDEX_ROOTID = 20;
	public final static int INDEX_DISPLAYORDER = 21;
	public final static int INDEX_IMAGEPATH = 22;
	public final static int INDEX_EXPANDPATH = 23;
	public final static int INDEX_OPENMODE = 24;
	public final static int INDEX_ISBIZMAP = 25;
	public final static int SDO_PROPERTY_COUNT = 26;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAcResourceImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAcResourceImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Resid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Resid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Resid</em>' attribute.
	 * @see #setResid(int)
	 */
	public int getResid() {
		return DataUtil.toInt(super.getByIndex(INDEX_RESID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getResid <em>Resid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Resid</em>' attribute.
	 * @see #getResid()
	 */
	public void setResid(int resid) {
		super.setByIndex(INDEX_RESID, resid);
	}

	/**
	 * Returns the value of the '<em><b>Parentresid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Parentresid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Parentresid</em>' attribute.
	 * @see #setParentresid(int)
	 */
	public int getParentresid() {
		return DataUtil.toInt(super.getByIndex(INDEX_PARENTRESID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getParentresid <em>Parentresid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Parentresid</em>' attribute.
	 * @see #getParentresid()
	 */
	public void setParentresid(int parentresid) {
		super.setByIndex(INDEX_PARENTRESID, parentresid);
	}

	/**
	 * Returns the value of the '<em><b>Rescode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Rescode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Rescode</em>' attribute.
	 * @see #setRescode(java.lang.String)
	 */
	public String getRescode() {
		return DataUtil.toString(super.getByIndex(INDEX_RESCODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRescode <em>Rescode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Rescode</em>' attribute.
	 * @see #getRescode()
	 */
	public void setRescode(String rescode) {
		super.setByIndex(INDEX_RESCODE, rescode);
	}

	/**
	 * Returns the value of the '<em><b>Restype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Restype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Restype</em>' attribute.
	 * @see #setRestype(java.lang.String)
	 */
	public String getRestype() {
		return DataUtil.toString(super.getByIndex(INDEX_RESTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRestype <em>Restype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Restype</em>' attribute.
	 * @see #getRestype()
	 */
	public void setRestype(String restype) {
		super.setByIndex(INDEX_RESTYPE, restype);
	}

	/**
	 * Returns the value of the '<em><b>Respath</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Respath</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Respath</em>' attribute.
	 * @see #setRespath(java.lang.String)
	 */
	public String getRespath() {
		return DataUtil.toString(super.getByIndex(INDEX_RESPATH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRespath <em>Respath</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Respath</em>' attribute.
	 * @see #getRespath()
	 */
	public void setRespath(String respath) {
		super.setByIndex(INDEX_RESPATH, respath);
	}

	/**
	 * Returns the value of the '<em><b>Paraminfo</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paraminfo</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paraminfo</em>' attribute.
	 * @see #setParaminfo(java.lang.String)
	 */
	public String getParaminfo() {
		return DataUtil.toString(super.getByIndex(INDEX_PARAMINFO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getParaminfo <em>Paraminfo</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paraminfo</em>' attribute.
	 * @see #getParaminfo()
	 */
	public void setParaminfo(String paraminfo) {
		super.setByIndex(INDEX_PARAMINFO, paraminfo);
	}

	/**
	 * Returns the value of the '<em><b>Resname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Resname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Resname</em>' attribute.
	 * @see #setResname(java.lang.String)
	 */
	public String getResname() {
		return DataUtil.toString(super.getByIndex(INDEX_RESNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getResname <em>Resname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Resname</em>' attribute.
	 * @see #getResname()
	 */
	public void setResname(String resname) {
		super.setByIndex(INDEX_RESNAME, resname);
	}

	/**
	 * Returns the value of the '<em><b>Reslabel</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reslabel</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reslabel</em>' attribute.
	 * @see #setReslabel(java.lang.String)
	 */
	public String getReslabel() {
		return DataUtil.toString(super.getByIndex(INDEX_RESLABEL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReslabel <em>Reslabel</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reslabel</em>' attribute.
	 * @see #getReslabel()
	 */
	public void setReslabel(String reslabel) {
		super.setByIndex(INDEX_RESLABEL, reslabel);
	}

	/**
	 * Returns the value of the '<em><b>Compackname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Compackname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Compackname</em>' attribute.
	 * @see #setCompackname(java.lang.String)
	 */
	public String getCompackname() {
		return DataUtil.toString(super.getByIndex(INDEX_COMPACKNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCompackname <em>Compackname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Compackname</em>' attribute.
	 * @see #getCompackname()
	 */
	public void setCompackname(String compackname) {
		super.setByIndex(INDEX_COMPACKNAME, compackname);
	}

	/**
	 * Returns the value of the '<em><b>Reslevel</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reslevel</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reslevel</em>' attribute.
	 * @see #setReslevel(long)
	 */
	public long getReslevel() {
		return DataUtil.toLong(super.getByIndex(INDEX_RESLEVEL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReslevel <em>Reslevel</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reslevel</em>' attribute.
	 * @see #getReslevel()
	 */
	public void setReslevel(long reslevel) {
		super.setByIndex(INDEX_RESLEVEL, reslevel);
	}

	/**
	 * Returns the value of the '<em><b>Resseq</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Resseq</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Resseq</em>' attribute.
	 * @see #setResseq(java.lang.String)
	 */
	public String getResseq() {
		return DataUtil.toString(super.getByIndex(INDEX_RESSEQ, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getResseq <em>Resseq</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Resseq</em>' attribute.
	 * @see #getResseq()
	 */
	public void setResseq(String resseq) {
		super.setByIndex(INDEX_RESSEQ, resseq);
	}

	/**
	 * Returns the value of the '<em><b>Isleaf</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isleaf</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isleaf</em>' attribute.
	 * @see #setIsleaf(java.lang.String)
	 */
	public String getIsleaf() {
		return DataUtil.toString(super.getByIndex(INDEX_ISLEAF, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIsleaf <em>Isleaf</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isleaf</em>' attribute.
	 * @see #getIsleaf()
	 */
	public void setIsleaf(String isleaf) {
		super.setByIndex(INDEX_ISLEAF, isleaf);
	}

	/**
	 * Returns the value of the '<em><b>Subcount</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Subcount</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Subcount</em>' attribute.
	 * @see #setSubcount(int)
	 */
	public int getSubcount() {
		return DataUtil.toInt(super.getByIndex(INDEX_SUBCOUNT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSubcount <em>Subcount</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Subcount</em>' attribute.
	 * @see #getSubcount()
	 */
	public void setSubcount(int subcount) {
		super.setByIndex(INDEX_SUBCOUNT, subcount);
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
	 * Returns the value of the '<em><b>Ischeck</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ischeck</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ischeck</em>' attribute.
	 * @see #setIscheck(java.lang.String)
	 */
	public String getIscheck() {
		return DataUtil.toString(super.getByIndex(INDEX_ISCHECK, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIscheck <em>Ischeck</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ischeck</em>' attribute.
	 * @see #getIscheck()
	 */
	public void setIscheck(String ischeck) {
		super.setByIndex(INDEX_ISCHECK, ischeck);
	}

	/**
	 * Returns the value of the '<em><b>Resdesc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Resdesc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Resdesc</em>' attribute.
	 * @see #setResdesc(java.lang.String)
	 */
	public String getResdesc() {
		return DataUtil.toString(super.getByIndex(INDEX_RESDESC, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getResdesc <em>Resdesc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Resdesc</em>' attribute.
	 * @see #getResdesc()
	 */
	public void setResdesc(String resdesc) {
		super.setByIndex(INDEX_RESDESC, resdesc);
	}

	/**
	 * Returns the value of the '<em><b>Uientry</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Uientry</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Uientry</em>' attribute.
	 * @see #setUientry(java.lang.String)
	 */
	public String getUientry() {
		return DataUtil.toString(super.getByIndex(INDEX_UIENTRY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUientry <em>Uientry</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Uientry</em>' attribute.
	 * @see #getUientry()
	 */
	public void setUientry(String uientry) {
		super.setByIndex(INDEX_UIENTRY, uientry);
	}

	/**
	 * Returns the value of the '<em><b>Rootid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Rootid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Rootid</em>' attribute.
	 * @see #setRootid(int)
	 */
	public int getRootid() {
		return DataUtil.toInt(super.getByIndex(INDEX_ROOTID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRootid <em>Rootid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Rootid</em>' attribute.
	 * @see #getRootid()
	 */
	public void setRootid(int rootid) {
		super.setByIndex(INDEX_ROOTID, rootid);
	}

	/**
	 * Returns the value of the '<em><b>Displayorder</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Displayorder</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Displayorder</em>' attribute.
	 * @see #setDisplayorder(int)
	 */
	public int getDisplayorder() {
		return DataUtil.toInt(super.getByIndex(INDEX_DISPLAYORDER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDisplayorder <em>Displayorder</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Displayorder</em>' attribute.
	 * @see #getDisplayorder()
	 */
	public void setDisplayorder(int displayorder) {
		super.setByIndex(INDEX_DISPLAYORDER, displayorder);
	}

	/**
	 * Returns the value of the '<em><b>Imagepath</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Imagepath</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Imagepath</em>' attribute.
	 * @see #setImagepath(java.lang.String)
	 */
	public String getImagepath() {
		return DataUtil.toString(super.getByIndex(INDEX_IMAGEPATH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getImagepath <em>Imagepath</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Imagepath</em>' attribute.
	 * @see #getImagepath()
	 */
	public void setImagepath(String imagepath) {
		super.setByIndex(INDEX_IMAGEPATH, imagepath);
	}

	/**
	 * Returns the value of the '<em><b>Expandpath</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Expandpath</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Expandpath</em>' attribute.
	 * @see #setExpandpath(java.lang.String)
	 */
	public String getExpandpath() {
		return DataUtil.toString(super.getByIndex(INDEX_EXPANDPATH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExpandpath <em>Expandpath</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Expandpath</em>' attribute.
	 * @see #getExpandpath()
	 */
	public void setExpandpath(String expandpath) {
		super.setByIndex(INDEX_EXPANDPATH, expandpath);
	}

	/**
	 * Returns the value of the '<em><b>Openmode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Openmode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Openmode</em>' attribute.
	 * @see #setOpenmode(java.lang.String)
	 */
	public String getOpenmode() {
		return DataUtil.toString(super.getByIndex(INDEX_OPENMODE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOpenmode <em>Openmode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Openmode</em>' attribute.
	 * @see #getOpenmode()
	 */
	public void setOpenmode(String openmode) {
		super.setByIndex(INDEX_OPENMODE, openmode);
	}

	/**
	 * Returns the value of the '<em><b>Isbizmap</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isbizmap</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isbizmap</em>' attribute.
	 * @see #setIsbizmap(java.lang.String)
	 */
	public String getIsbizmap() {
		return DataUtil.toString(super.getByIndex(INDEX_ISBIZMAP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIsbizmap <em>Isbizmap</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isbizmap</em>' attribute.
	 * @see #getIsbizmap()
	 */
	public void setIsbizmap(String isbizmap) {
		super.setByIndex(INDEX_ISBIZMAP, isbizmap);
	}


}