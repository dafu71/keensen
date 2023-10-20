/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.tools.Tools.impl;

import com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg;
import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;

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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getId <em>Id</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getBusisnno <em>Busisnno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getBusisnname <em>Busisnname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getPrefix <em>Prefix</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getSeqname <em>Seqname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getSerialmod <em>Serialmod</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getIsdate <em>Isdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getIstime <em>Istime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getIsorg <em>Isorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getIsfill <em>Isfill</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getFilllen <em>Filllen</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getStatus <em>Status</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getBegintime <em>Begintime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getEndtime <em>Endtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getGrpid <em>Grpid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getGrpname <em>Grpname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getSubgrpid <em>Subgrpid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getSubgrpname <em>Subgrpname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getRecordorg <em>Recordorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getBelongorg <em>Belongorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtSncfgImpl#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TAtSncfg;
 */

public class TAtSncfgImpl extends ExtendedDataObjectImpl implements TAtSncfg {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_ID = 0;
	public final static int INDEX_BUSISNNO = 1;
	public final static int INDEX_BUSISNNAME = 2;
	public final static int INDEX_PREFIX = 3;
	public final static int INDEX_SEQNAME = 4;
	public final static int INDEX_SERIALMOD = 5;
	public final static int INDEX_ISDATE = 6;
	public final static int INDEX_ISTIME = 7;
	public final static int INDEX_ISORG = 8;
	public final static int INDEX_ISFILL = 9;
	public final static int INDEX_FILLLEN = 10;
	public final static int INDEX_STATUS = 11;
	public final static int INDEX_BEGINTIME = 12;
	public final static int INDEX_ENDTIME = 13;
	public final static int INDEX_GRPID = 14;
	public final static int INDEX_GRPNAME = 15;
	public final static int INDEX_SUBGRPID = 16;
	public final static int INDEX_SUBGRPNAME = 17;
	public final static int INDEX_RECORDORG = 18;
	public final static int INDEX_BELONGORG = 19;
	public final static int INDEX_CREATEBY = 20;
	public final static int INDEX_MODIFYBY = 21;
	public final static int INDEX_UPDATETIME = 22;
	public final static int INDEX_DATAORGID = 23;
	public final static int SDO_PROPERTY_COUNT = 24;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAtSncfgImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAtSncfgImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Id</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Id</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Id</em>' attribute.
	 * @see #setId(long)
	 */
	public long getId() {
		return DataUtil.toLong(super.getByIndex(INDEX_ID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getId <em>Id</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Id</em>' attribute.
	 * @see #getId()
	 */
	public void setId(long id) {
		super.setByIndex(INDEX_ID, id);
	}

	/**
	 * Returns the value of the '<em><b>Busisnno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Busisnno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Busisnno</em>' attribute.
	 * @see #setBusisnno(long)
	 */
	public long getBusisnno() {
		return DataUtil.toLong(super.getByIndex(INDEX_BUSISNNO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBusisnno <em>Busisnno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busisnno</em>' attribute.
	 * @see #getBusisnno()
	 */
	public void setBusisnno(long busisnno) {
		super.setByIndex(INDEX_BUSISNNO, busisnno);
	}

	/**
	 * Returns the value of the '<em><b>Busisnname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Busisnname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Busisnname</em>' attribute.
	 * @see #setBusisnname(java.lang.String)
	 */
	public String getBusisnname() {
		return DataUtil.toString(super.getByIndex(INDEX_BUSISNNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBusisnname <em>Busisnname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busisnname</em>' attribute.
	 * @see #getBusisnname()
	 */
	public void setBusisnname(String busisnname) {
		super.setByIndex(INDEX_BUSISNNAME, busisnname);
	}

	/**
	 * Returns the value of the '<em><b>Prefix</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Prefix</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Prefix</em>' attribute.
	 * @see #setPrefix(java.lang.String)
	 */
	public String getPrefix() {
		return DataUtil.toString(super.getByIndex(INDEX_PREFIX, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPrefix <em>Prefix</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Prefix</em>' attribute.
	 * @see #getPrefix()
	 */
	public void setPrefix(String prefix) {
		super.setByIndex(INDEX_PREFIX, prefix);
	}

	/**
	 * Returns the value of the '<em><b>Seqname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Seqname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Seqname</em>' attribute.
	 * @see #setSeqname(java.lang.String)
	 */
	public String getSeqname() {
		return DataUtil.toString(super.getByIndex(INDEX_SEQNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSeqname <em>Seqname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Seqname</em>' attribute.
	 * @see #getSeqname()
	 */
	public void setSeqname(String seqname) {
		super.setByIndex(INDEX_SEQNAME, seqname);
	}

	/**
	 * Returns the value of the '<em><b>Serialmod</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Serialmod</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Serialmod</em>' attribute.
	 * @see #setSerialmod(long)
	 */
	public long getSerialmod() {
		return DataUtil.toLong(super.getByIndex(INDEX_SERIALMOD, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSerialmod <em>Serialmod</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Serialmod</em>' attribute.
	 * @see #getSerialmod()
	 */
	public void setSerialmod(long serialmod) {
		super.setByIndex(INDEX_SERIALMOD, serialmod);
	}

	/**
	 * Returns the value of the '<em><b>Isdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isdate</em>' attribute.
	 * @see #setIsdate(long)
	 */
	public long getIsdate() {
		return DataUtil.toLong(super.getByIndex(INDEX_ISDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIsdate <em>Isdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isdate</em>' attribute.
	 * @see #getIsdate()
	 */
	public void setIsdate(long isdate) {
		super.setByIndex(INDEX_ISDATE, isdate);
	}

	/**
	 * Returns the value of the '<em><b>Istime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Istime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Istime</em>' attribute.
	 * @see #setIstime(long)
	 */
	public long getIstime() {
		return DataUtil.toLong(super.getByIndex(INDEX_ISTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIstime <em>Istime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Istime</em>' attribute.
	 * @see #getIstime()
	 */
	public void setIstime(long istime) {
		super.setByIndex(INDEX_ISTIME, istime);
	}

	/**
	 * Returns the value of the '<em><b>Isorg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isorg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isorg</em>' attribute.
	 * @see #setIsorg(long)
	 */
	public long getIsorg() {
		return DataUtil.toLong(super.getByIndex(INDEX_ISORG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIsorg <em>Isorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isorg</em>' attribute.
	 * @see #getIsorg()
	 */
	public void setIsorg(long isorg) {
		super.setByIndex(INDEX_ISORG, isorg);
	}

	/**
	 * Returns the value of the '<em><b>Isfill</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isfill</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isfill</em>' attribute.
	 * @see #setIsfill(long)
	 */
	public long getIsfill() {
		return DataUtil.toLong(super.getByIndex(INDEX_ISFILL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIsfill <em>Isfill</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isfill</em>' attribute.
	 * @see #getIsfill()
	 */
	public void setIsfill(long isfill) {
		super.setByIndex(INDEX_ISFILL, isfill);
	}

	/**
	 * Returns the value of the '<em><b>Filllen</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Filllen</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Filllen</em>' attribute.
	 * @see #setFilllen(long)
	 */
	public long getFilllen() {
		return DataUtil.toLong(super.getByIndex(INDEX_FILLLEN, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFilllen <em>Filllen</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Filllen</em>' attribute.
	 * @see #getFilllen()
	 */
	public void setFilllen(long filllen) {
		super.setByIndex(INDEX_FILLLEN, filllen);
	}

	/**
	 * Returns the value of the '<em><b>Status</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Status</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Status</em>' attribute.
	 * @see #setStatus(java.lang.String)
	 */
	public String getStatus() {
		return DataUtil.toString(super.getByIndex(INDEX_STATUS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStatus <em>Status</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Status</em>' attribute.
	 * @see #getStatus()
	 */
	public void setStatus(String status) {
		super.setByIndex(INDEX_STATUS, status);
	}

	/**
	 * Returns the value of the '<em><b>Begintime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Begintime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Begintime</em>' attribute.
	 * @see #setBegintime(java.util.Date)
	 */
	public Date getBegintime() {
		return DataUtil.toDate(super.getByIndex(INDEX_BEGINTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBegintime <em>Begintime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Begintime</em>' attribute.
	 * @see #getBegintime()
	 */
	public void setBegintime(Date begintime) {
		super.setByIndex(INDEX_BEGINTIME, begintime);
	}

	/**
	 * Returns the value of the '<em><b>Endtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Endtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Endtime</em>' attribute.
	 * @see #setEndtime(java.util.Date)
	 */
	public Date getEndtime() {
		return DataUtil.toDate(super.getByIndex(INDEX_ENDTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEndtime <em>Endtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Endtime</em>' attribute.
	 * @see #getEndtime()
	 */
	public void setEndtime(Date endtime) {
		super.setByIndex(INDEX_ENDTIME, endtime);
	}

	/**
	 * Returns the value of the '<em><b>Grpid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Grpid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Grpid</em>' attribute.
	 * @see #setGrpid(long)
	 */
	public long getGrpid() {
		return DataUtil.toLong(super.getByIndex(INDEX_GRPID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGrpid <em>Grpid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Grpid</em>' attribute.
	 * @see #getGrpid()
	 */
	public void setGrpid(long grpid) {
		super.setByIndex(INDEX_GRPID, grpid);
	}

	/**
	 * Returns the value of the '<em><b>Grpname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Grpname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Grpname</em>' attribute.
	 * @see #setGrpname(java.lang.String)
	 */
	public String getGrpname() {
		return DataUtil.toString(super.getByIndex(INDEX_GRPNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGrpname <em>Grpname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Grpname</em>' attribute.
	 * @see #getGrpname()
	 */
	public void setGrpname(String grpname) {
		super.setByIndex(INDEX_GRPNAME, grpname);
	}

	/**
	 * Returns the value of the '<em><b>Subgrpid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Subgrpid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Subgrpid</em>' attribute.
	 * @see #setSubgrpid(long)
	 */
	public long getSubgrpid() {
		return DataUtil.toLong(super.getByIndex(INDEX_SUBGRPID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSubgrpid <em>Subgrpid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Subgrpid</em>' attribute.
	 * @see #getSubgrpid()
	 */
	public void setSubgrpid(long subgrpid) {
		super.setByIndex(INDEX_SUBGRPID, subgrpid);
	}

	/**
	 * Returns the value of the '<em><b>Subgrpname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Subgrpname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Subgrpname</em>' attribute.
	 * @see #setSubgrpname(java.lang.String)
	 */
	public String getSubgrpname() {
		return DataUtil.toString(super.getByIndex(INDEX_SUBGRPNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSubgrpname <em>Subgrpname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Subgrpname</em>' attribute.
	 * @see #getSubgrpname()
	 */
	public void setSubgrpname(String subgrpname) {
		super.setByIndex(INDEX_SUBGRPNAME, subgrpname);
	}

	/**
	 * Returns the value of the '<em><b>Recordorg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recordorg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recordorg</em>' attribute.
	 * @see #setRecordorg(long)
	 */
	public long getRecordorg() {
		return DataUtil.toLong(super.getByIndex(INDEX_RECORDORG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRecordorg <em>Recordorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recordorg</em>' attribute.
	 * @see #getRecordorg()
	 */
	public void setRecordorg(long recordorg) {
		super.setByIndex(INDEX_RECORDORG, recordorg);
	}

	/**
	 * Returns the value of the '<em><b>Belongorg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Belongorg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Belongorg</em>' attribute.
	 * @see #setBelongorg(long)
	 */
	public long getBelongorg() {
		return DataUtil.toLong(super.getByIndex(INDEX_BELONGORG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBelongorg <em>Belongorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Belongorg</em>' attribute.
	 * @see #getBelongorg()
	 */
	public void setBelongorg(long belongorg) {
		super.setByIndex(INDEX_BELONGORG, belongorg);
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


}