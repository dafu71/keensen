/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.Business.impl;

import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;
import com.zoomlion.hjsrm.pub.busi.Business.TBsParticipantrule;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getBusistepdefinepkid <em>Busistepdefinepkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getParticipanttype <em>Participanttype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getParticipantid <em>Participantid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getParticipantname <em>Participantname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getExtend1 <em>Extend1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getExtend2 <em>Extend2</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getExtend3 <em>Extend3</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getExtend4 <em>Extend4</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getCreateorgid <em>Createorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsParticipantruleImpl#getDelflag <em>Delflag</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TBsParticipantrule;
 */

public class TBsParticipantruleImpl extends ExtendedDataObjectImpl implements TBsParticipantrule {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_BUSISTEPDEFINEPKID = 1;
	public final static int INDEX_PARTICIPANTTYPE = 2;
	public final static int INDEX_PARTICIPANTID = 3;
	public final static int INDEX_PARTICIPANTNAME = 4;
	public final static int INDEX_EXTEND1 = 5;
	public final static int INDEX_EXTEND2 = 6;
	public final static int INDEX_EXTEND3 = 7;
	public final static int INDEX_EXTEND4 = 8;
	public final static int INDEX_REMARK = 9;
	public final static int INDEX_CREATEBY = 10;
	public final static int INDEX_CREATEORGID = 11;
	public final static int INDEX_CREATETIME = 12;
	public final static int INDEX_MODIFYBY = 13;
	public final static int INDEX_UPDATETIME = 14;
	public final static int INDEX_DATAORGID = 15;
	public final static int INDEX_DELFLAG = 16;
	public final static int SDO_PROPERTY_COUNT = 17;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsParticipantruleImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsParticipantruleImpl(Type type) {
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
	 * Returns the value of the '<em><b>Busistepdefinepkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Busistepdefinepkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Busistepdefinepkid</em>' attribute.
	 * @see #setBusistepdefinepkid(java.lang.String)
	 */
	public String getBusistepdefinepkid() {
		return DataUtil.toString(super.getByIndex(INDEX_BUSISTEPDEFINEPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBusistepdefinepkid <em>Busistepdefinepkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busistepdefinepkid</em>' attribute.
	 * @see #getBusistepdefinepkid()
	 */
	public void setBusistepdefinepkid(String busistepdefinepkid) {
		super.setByIndex(INDEX_BUSISTEPDEFINEPKID, busistepdefinepkid);
	}

	/**
	 * Returns the value of the '<em><b>Participanttype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Participanttype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Participanttype</em>' attribute.
	 * @see #setParticipanttype(java.lang.String)
	 */
	public String getParticipanttype() {
		return DataUtil.toString(super.getByIndex(INDEX_PARTICIPANTTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getParticipanttype <em>Participanttype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Participanttype</em>' attribute.
	 * @see #getParticipanttype()
	 */
	public void setParticipanttype(String participanttype) {
		super.setByIndex(INDEX_PARTICIPANTTYPE, participanttype);
	}

	/**
	 * Returns the value of the '<em><b>Participantid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Participantid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Participantid</em>' attribute.
	 * @see #setParticipantid(java.lang.String)
	 */
	public String getParticipantid() {
		return DataUtil.toString(super.getByIndex(INDEX_PARTICIPANTID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getParticipantid <em>Participantid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Participantid</em>' attribute.
	 * @see #getParticipantid()
	 */
	public void setParticipantid(String participantid) {
		super.setByIndex(INDEX_PARTICIPANTID, participantid);
	}

	/**
	 * Returns the value of the '<em><b>Participantname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Participantname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Participantname</em>' attribute.
	 * @see #setParticipantname(java.lang.String)
	 */
	public String getParticipantname() {
		return DataUtil.toString(super.getByIndex(INDEX_PARTICIPANTNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getParticipantname <em>Participantname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Participantname</em>' attribute.
	 * @see #getParticipantname()
	 */
	public void setParticipantname(String participantname) {
		super.setByIndex(INDEX_PARTICIPANTNAME, participantname);
	}

	/**
	 * Returns the value of the '<em><b>Extend1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Extend1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Extend1</em>' attribute.
	 * @see #setExtend1(java.lang.String)
	 */
	public String getExtend1() {
		return DataUtil.toString(super.getByIndex(INDEX_EXTEND1, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExtend1 <em>Extend1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Extend1</em>' attribute.
	 * @see #getExtend1()
	 */
	public void setExtend1(String extend1) {
		super.setByIndex(INDEX_EXTEND1, extend1);
	}

	/**
	 * Returns the value of the '<em><b>Extend2</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Extend2</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Extend2</em>' attribute.
	 * @see #setExtend2(java.lang.String)
	 */
	public String getExtend2() {
		return DataUtil.toString(super.getByIndex(INDEX_EXTEND2, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExtend2 <em>Extend2</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Extend2</em>' attribute.
	 * @see #getExtend2()
	 */
	public void setExtend2(String extend2) {
		super.setByIndex(INDEX_EXTEND2, extend2);
	}

	/**
	 * Returns the value of the '<em><b>Extend3</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Extend3</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Extend3</em>' attribute.
	 * @see #setExtend3(java.lang.String)
	 */
	public String getExtend3() {
		return DataUtil.toString(super.getByIndex(INDEX_EXTEND3, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExtend3 <em>Extend3</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Extend3</em>' attribute.
	 * @see #getExtend3()
	 */
	public void setExtend3(String extend3) {
		super.setByIndex(INDEX_EXTEND3, extend3);
	}

	/**
	 * Returns the value of the '<em><b>Extend4</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Extend4</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Extend4</em>' attribute.
	 * @see #setExtend4(java.lang.String)
	 */
	public String getExtend4() {
		return DataUtil.toString(super.getByIndex(INDEX_EXTEND4, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getExtend4 <em>Extend4</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Extend4</em>' attribute.
	 * @see #getExtend4()
	 */
	public void setExtend4(String extend4) {
		super.setByIndex(INDEX_EXTEND4, extend4);
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
	 * Returns the value of the '<em><b>Createorgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createorgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createorgid</em>' attribute.
	 * @see #setCreateorgid(int)
	 */
	public int getCreateorgid() {
		return DataUtil.toInt(super.getByIndex(INDEX_CREATEORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCreateorgid <em>Createorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createorgid</em>' attribute.
	 * @see #getCreateorgid()
	 */
	public void setCreateorgid(int createorgid) {
		super.setByIndex(INDEX_CREATEORGID, createorgid);
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


}