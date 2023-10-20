/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.interfaces.Interfaces.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.interfaces.Interfaces.TJkPrinttemplate;

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
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl#getTemplateid <em>Templateid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl#getTemplatename <em>Templatename</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl#getTemplatefolder <em>Templatefolder</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl#getPrintparam <em>Printparam</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl#getPicturename <em>Picturename</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl#getPicturewidth <em>Picturewidth</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl#getPictureheight <em>Pictureheight</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl#getTemplate <em>Template</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.interfaces.Interfaces.impl.TJkPrinttemplateImpl#getRemark <em>Remark</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TJkPrinttemplate;
 */

public class TJkPrinttemplateImpl extends ExtendedDataObjectImpl implements TJkPrinttemplate {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_TEMPLATEID = 1;
	public final static int INDEX_TEMPLATENAME = 2;
	public final static int INDEX_TEMPLATEFOLDER = 3;
	public final static int INDEX_PRINTPARAM = 4;
	public final static int INDEX_PICTURENAME = 5;
	public final static int INDEX_PICTUREWIDTH = 6;
	public final static int INDEX_PICTUREHEIGHT = 7;
	public final static int INDEX_TEMPLATE = 8;
	public final static int INDEX_CREATEBY = 9;
	public final static int INDEX_CREATETIME = 10;
	public final static int INDEX_MODIFYBY = 11;
	public final static int INDEX_UPDATETIME = 12;
	public final static int INDEX_DATAORGID = 13;
	public final static int INDEX_DELFLAG = 14;
	public final static int INDEX_REMARK = 15;
	public final static int SDO_PROPERTY_COUNT = 16;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TJkPrinttemplateImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TJkPrinttemplateImpl(Type type) {
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
	 * Returns the value of the '<em><b>Templateid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Templateid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Templateid</em>' attribute.
	 * @see #setTemplateid(java.lang.String)
	 */
	public String getTemplateid() {
		return DataUtil.toString(super.getByIndex(INDEX_TEMPLATEID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTemplateid <em>Templateid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Templateid</em>' attribute.
	 * @see #getTemplateid()
	 */
	public void setTemplateid(String templateid) {
		super.setByIndex(INDEX_TEMPLATEID, templateid);
	}

	/**
	 * Returns the value of the '<em><b>Templatename</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Templatename</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Templatename</em>' attribute.
	 * @see #setTemplatename(java.lang.String)
	 */
	public String getTemplatename() {
		return DataUtil.toString(super.getByIndex(INDEX_TEMPLATENAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTemplatename <em>Templatename</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Templatename</em>' attribute.
	 * @see #getTemplatename()
	 */
	public void setTemplatename(String templatename) {
		super.setByIndex(INDEX_TEMPLATENAME, templatename);
	}

	/**
	 * Returns the value of the '<em><b>Templatefolder</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Templatefolder</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Templatefolder</em>' attribute.
	 * @see #setTemplatefolder(java.lang.String)
	 */
	public String getTemplatefolder() {
		return DataUtil.toString(super.getByIndex(INDEX_TEMPLATEFOLDER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTemplatefolder <em>Templatefolder</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Templatefolder</em>' attribute.
	 * @see #getTemplatefolder()
	 */
	public void setTemplatefolder(String templatefolder) {
		super.setByIndex(INDEX_TEMPLATEFOLDER, templatefolder);
	}

	/**
	 * Returns the value of the '<em><b>Printparam</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Printparam</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Printparam</em>' attribute.
	 * @see #setPrintparam(java.lang.String)
	 */
	public String getPrintparam() {
		return DataUtil.toString(super.getByIndex(INDEX_PRINTPARAM, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPrintparam <em>Printparam</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Printparam</em>' attribute.
	 * @see #getPrintparam()
	 */
	public void setPrintparam(String printparam) {
		super.setByIndex(INDEX_PRINTPARAM, printparam);
	}

	/**
	 * Returns the value of the '<em><b>Picturename</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Picturename</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Picturename</em>' attribute.
	 * @see #setPicturename(java.lang.String)
	 */
	public String getPicturename() {
		return DataUtil.toString(super.getByIndex(INDEX_PICTURENAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPicturename <em>Picturename</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Picturename</em>' attribute.
	 * @see #getPicturename()
	 */
	public void setPicturename(String picturename) {
		super.setByIndex(INDEX_PICTURENAME, picturename);
	}

	/**
	 * Returns the value of the '<em><b>Picturewidth</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Picturewidth</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Picturewidth</em>' attribute.
	 * @see #setPicturewidth(long)
	 */
	public long getPicturewidth() {
		return DataUtil.toLong(super.getByIndex(INDEX_PICTUREWIDTH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPicturewidth <em>Picturewidth</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Picturewidth</em>' attribute.
	 * @see #getPicturewidth()
	 */
	public void setPicturewidth(long picturewidth) {
		super.setByIndex(INDEX_PICTUREWIDTH, picturewidth);
	}

	/**
	 * Returns the value of the '<em><b>Pictureheight</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Pictureheight</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Pictureheight</em>' attribute.
	 * @see #setPictureheight(long)
	 */
	public long getPictureheight() {
		return DataUtil.toLong(super.getByIndex(INDEX_PICTUREHEIGHT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPictureheight <em>Pictureheight</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pictureheight</em>' attribute.
	 * @see #getPictureheight()
	 */
	public void setPictureheight(long pictureheight) {
		super.setByIndex(INDEX_PICTUREHEIGHT, pictureheight);
	}

	/**
	 * Returns the value of the '<em><b>Template</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Template</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Template</em>' attribute.
	 * @see #setTemplate(java.lang.String)
	 */
	public String getTemplate() {
		return DataUtil.toString(super.getByIndex(INDEX_TEMPLATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTemplate <em>Template</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Template</em>' attribute.
	 * @see #getTemplate()
	 */
	public void setTemplate(String template) {
		super.setByIndex(INDEX_TEMPLATE, template);
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


}