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
import com.zoomlion.hjsrm.pub.busi.Business.TBsApplyinfo;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getActiveapplypkid <em>Activeapplypkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getSourcetype <em>Sourcetype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getChnltype <em>Chnltype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getChnlid <em>Chnlid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getCustname <em>Custname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getUserid <em>Userid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getIsvirtual <em>Isvirtual</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getApplytype <em>Applytype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getBusisort <em>Busisort</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getBusitype <em>Busitype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getFirstbusitype <em>Firstbusitype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getReportedsource <em>Reportedsource</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getDepartmentliaisonpkid <em>Departmentliaisonpkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getCount <em>Count</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getActualcount <em>Actualcount</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getFinishtype <em>Finishtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getState <em>State</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getAddrinfopkid <em>Addrinfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getAddrdetail <em>Addrdetail</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getMngorg <em>Mngorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getBookdate <em>Bookdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getClaimbookdate <em>Claimbookdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getClaimdate <em>Claimdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getEarlydate <em>Earlydate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getAllocate <em>Allocate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getReceivedept <em>Receivedept</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getEnddate <em>Enddate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getEndemp <em>Endemp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getEnddep <em>Enddep</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getEnddesc <em>Enddesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getCreateorgid <em>Createorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getReportedtime <em>Reportedtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsApplyinfoImpl#getUrglvl <em>Urglvl</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TBsApplyinfo;
 */

public class TBsApplyinfoImpl extends ExtendedDataObjectImpl implements TBsApplyinfo {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_ACTIVEAPPLYPKID = 1;
	public final static int INDEX_SOURCETYPE = 2;
	public final static int INDEX_CHNLTYPE = 3;
	public final static int INDEX_CHNLID = 4;
	public final static int INDEX_CUSTNAME = 5;
	public final static int INDEX_USERID = 6;
	public final static int INDEX_ISVIRTUAL = 7;
	public final static int INDEX_APPLYTYPE = 8;
	public final static int INDEX_BUSISORT = 9;
	public final static int INDEX_BUSITYPE = 10;
	public final static int INDEX_FIRSTBUSITYPE = 11;
	public final static int INDEX_REPORTEDSOURCE = 12;
	public final static int INDEX_DEPARTMENTLIAISONPKID = 13;
	public final static int INDEX_COUNT = 14;
	public final static int INDEX_ACTUALCOUNT = 15;
	public final static int INDEX_FINISHTYPE = 16;
	public final static int INDEX_STATE = 17;
	public final static int INDEX_ADDRINFOPKID = 18;
	public final static int INDEX_ADDRDETAIL = 19;
	public final static int INDEX_MNGORG = 20;
	public final static int INDEX_BOOKDATE = 21;
	public final static int INDEX_CLAIMBOOKDATE = 22;
	public final static int INDEX_CLAIMDATE = 23;
	public final static int INDEX_EARLYDATE = 24;
	public final static int INDEX_ALLOCATE = 25;
	public final static int INDEX_RECEIVEDEPT = 26;
	public final static int INDEX_ENDDATE = 27;
	public final static int INDEX_ENDEMP = 28;
	public final static int INDEX_ENDDEP = 29;
	public final static int INDEX_ENDDESC = 30;
	public final static int INDEX_REMARK = 31;
	public final static int INDEX_STAND = 32;
	public final static int INDEX_CREATEBY = 33;
	public final static int INDEX_CREATEORGID = 34;
	public final static int INDEX_CREATETIME = 35;
	public final static int INDEX_MODIFYBY = 36;
	public final static int INDEX_UPDATETIME = 37;
	public final static int INDEX_DATAORGID = 38;
	public final static int INDEX_DELFLAG = 39;
	public final static int INDEX_REPORTEDTIME = 40;
	public final static int INDEX_URGLVL = 41;
	public final static int SDO_PROPERTY_COUNT = 42;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsApplyinfoImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsApplyinfoImpl(Type type) {
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
	 * Returns the value of the '<em><b>Activeapplypkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Activeapplypkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Activeapplypkid</em>' attribute.
	 * @see #setActiveapplypkid(java.lang.String)
	 */
	public String getActiveapplypkid() {
		return DataUtil.toString(super.getByIndex(INDEX_ACTIVEAPPLYPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getActiveapplypkid <em>Activeapplypkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Activeapplypkid</em>' attribute.
	 * @see #getActiveapplypkid()
	 */
	public void setActiveapplypkid(String activeapplypkid) {
		super.setByIndex(INDEX_ACTIVEAPPLYPKID, activeapplypkid);
	}

	/**
	 * Returns the value of the '<em><b>Sourcetype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sourcetype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sourcetype</em>' attribute.
	 * @see #setSourcetype(java.lang.String)
	 */
	public String getSourcetype() {
		return DataUtil.toString(super.getByIndex(INDEX_SOURCETYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSourcetype <em>Sourcetype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sourcetype</em>' attribute.
	 * @see #getSourcetype()
	 */
	public void setSourcetype(String sourcetype) {
		super.setByIndex(INDEX_SOURCETYPE, sourcetype);
	}

	/**
	 * Returns the value of the '<em><b>Chnltype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Chnltype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Chnltype</em>' attribute.
	 * @see #setChnltype(java.lang.String)
	 */
	public String getChnltype() {
		return DataUtil.toString(super.getByIndex(INDEX_CHNLTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getChnltype <em>Chnltype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Chnltype</em>' attribute.
	 * @see #getChnltype()
	 */
	public void setChnltype(String chnltype) {
		super.setByIndex(INDEX_CHNLTYPE, chnltype);
	}

	/**
	 * Returns the value of the '<em><b>Chnlid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Chnlid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Chnlid</em>' attribute.
	 * @see #setChnlid(java.lang.String)
	 */
	public String getChnlid() {
		return DataUtil.toString(super.getByIndex(INDEX_CHNLID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getChnlid <em>Chnlid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Chnlid</em>' attribute.
	 * @see #getChnlid()
	 */
	public void setChnlid(String chnlid) {
		super.setByIndex(INDEX_CHNLID, chnlid);
	}

	/**
	 * Returns the value of the '<em><b>Custname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Custname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Custname</em>' attribute.
	 * @see #setCustname(java.lang.String)
	 */
	public String getCustname() {
		return DataUtil.toString(super.getByIndex(INDEX_CUSTNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCustname <em>Custname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Custname</em>' attribute.
	 * @see #getCustname()
	 */
	public void setCustname(String custname) {
		super.setByIndex(INDEX_CUSTNAME, custname);
	}

	/**
	 * Returns the value of the '<em><b>Userid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Userid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Userid</em>' attribute.
	 * @see #setUserid(java.lang.String)
	 */
	public String getUserid() {
		return DataUtil.toString(super.getByIndex(INDEX_USERID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUserid <em>Userid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Userid</em>' attribute.
	 * @see #getUserid()
	 */
	public void setUserid(String userid) {
		super.setByIndex(INDEX_USERID, userid);
	}

	/**
	 * Returns the value of the '<em><b>Isvirtual</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isvirtual</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isvirtual</em>' attribute.
	 * @see #setIsvirtual(java.lang.String)
	 */
	public String getIsvirtual() {
		return DataUtil.toString(super.getByIndex(INDEX_ISVIRTUAL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getIsvirtual <em>Isvirtual</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isvirtual</em>' attribute.
	 * @see #getIsvirtual()
	 */
	public void setIsvirtual(String isvirtual) {
		super.setByIndex(INDEX_ISVIRTUAL, isvirtual);
	}

	/**
	 * Returns the value of the '<em><b>Applytype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Applytype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Applytype</em>' attribute.
	 * @see #setApplytype(java.lang.String)
	 */
	public String getApplytype() {
		return DataUtil.toString(super.getByIndex(INDEX_APPLYTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getApplytype <em>Applytype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Applytype</em>' attribute.
	 * @see #getApplytype()
	 */
	public void setApplytype(String applytype) {
		super.setByIndex(INDEX_APPLYTYPE, applytype);
	}

	/**
	 * Returns the value of the '<em><b>Busisort</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Busisort</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Busisort</em>' attribute.
	 * @see #setBusisort(java.lang.String)
	 */
	public String getBusisort() {
		return DataUtil.toString(super.getByIndex(INDEX_BUSISORT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBusisort <em>Busisort</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busisort</em>' attribute.
	 * @see #getBusisort()
	 */
	public void setBusisort(String busisort) {
		super.setByIndex(INDEX_BUSISORT, busisort);
	}

	/**
	 * Returns the value of the '<em><b>Busitype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Busitype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Busitype</em>' attribute.
	 * @see #setBusitype(java.lang.String)
	 */
	public String getBusitype() {
		return DataUtil.toString(super.getByIndex(INDEX_BUSITYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBusitype <em>Busitype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busitype</em>' attribute.
	 * @see #getBusitype()
	 */
	public void setBusitype(String busitype) {
		super.setByIndex(INDEX_BUSITYPE, busitype);
	}

	/**
	 * Returns the value of the '<em><b>Firstbusitype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Firstbusitype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Firstbusitype</em>' attribute.
	 * @see #setFirstbusitype(java.lang.String)
	 */
	public String getFirstbusitype() {
		return DataUtil.toString(super.getByIndex(INDEX_FIRSTBUSITYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFirstbusitype <em>Firstbusitype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Firstbusitype</em>' attribute.
	 * @see #getFirstbusitype()
	 */
	public void setFirstbusitype(String firstbusitype) {
		super.setByIndex(INDEX_FIRSTBUSITYPE, firstbusitype);
	}

	/**
	 * Returns the value of the '<em><b>Reportedsource</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reportedsource</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reportedsource</em>' attribute.
	 * @see #setReportedsource(java.lang.String)
	 */
	public String getReportedsource() {
		return DataUtil.toString(super.getByIndex(INDEX_REPORTEDSOURCE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReportedsource <em>Reportedsource</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reportedsource</em>' attribute.
	 * @see #getReportedsource()
	 */
	public void setReportedsource(String reportedsource) {
		super.setByIndex(INDEX_REPORTEDSOURCE, reportedsource);
	}

	/**
	 * Returns the value of the '<em><b>Departmentliaisonpkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Departmentliaisonpkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Departmentliaisonpkid</em>' attribute.
	 * @see #setDepartmentliaisonpkid(java.lang.String)
	 */
	public String getDepartmentliaisonpkid() {
		return DataUtil.toString(super.getByIndex(INDEX_DEPARTMENTLIAISONPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDepartmentliaisonpkid <em>Departmentliaisonpkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Departmentliaisonpkid</em>' attribute.
	 * @see #getDepartmentliaisonpkid()
	 */
	public void setDepartmentliaisonpkid(String departmentliaisonpkid) {
		super.setByIndex(INDEX_DEPARTMENTLIAISONPKID, departmentliaisonpkid);
	}

	/**
	 * Returns the value of the '<em><b>Count</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Count</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Count</em>' attribute.
	 * @see #setCount(int)
	 */
	public int getCount() {
		return DataUtil.toInt(super.getByIndex(INDEX_COUNT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCount <em>Count</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Count</em>' attribute.
	 * @see #getCount()
	 */
	public void setCount(int count) {
		super.setByIndex(INDEX_COUNT, count);
	}

	/**
	 * Returns the value of the '<em><b>Actualcount</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Actualcount</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Actualcount</em>' attribute.
	 * @see #setActualcount(int)
	 */
	public int getActualcount() {
		return DataUtil.toInt(super.getByIndex(INDEX_ACTUALCOUNT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getActualcount <em>Actualcount</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Actualcount</em>' attribute.
	 * @see #getActualcount()
	 */
	public void setActualcount(int actualcount) {
		super.setByIndex(INDEX_ACTUALCOUNT, actualcount);
	}

	/**
	 * Returns the value of the '<em><b>Finishtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Finishtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Finishtype</em>' attribute.
	 * @see #setFinishtype(java.lang.String)
	 */
	public String getFinishtype() {
		return DataUtil.toString(super.getByIndex(INDEX_FINISHTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFinishtype <em>Finishtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Finishtype</em>' attribute.
	 * @see #getFinishtype()
	 */
	public void setFinishtype(String finishtype) {
		super.setByIndex(INDEX_FINISHTYPE, finishtype);
	}

	/**
	 * Returns the value of the '<em><b>State</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>State</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>State</em>' attribute.
	 * @see #setState(java.lang.String)
	 */
	public String getState() {
		return DataUtil.toString(super.getByIndex(INDEX_STATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getState <em>State</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>State</em>' attribute.
	 * @see #getState()
	 */
	public void setState(String state) {
		super.setByIndex(INDEX_STATE, state);
	}

	/**
	 * Returns the value of the '<em><b>Addrinfopkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Addrinfopkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Addrinfopkid</em>' attribute.
	 * @see #setAddrinfopkid(java.lang.String)
	 */
	public String getAddrinfopkid() {
		return DataUtil.toString(super.getByIndex(INDEX_ADDRINFOPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAddrinfopkid <em>Addrinfopkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Addrinfopkid</em>' attribute.
	 * @see #getAddrinfopkid()
	 */
	public void setAddrinfopkid(String addrinfopkid) {
		super.setByIndex(INDEX_ADDRINFOPKID, addrinfopkid);
	}

	/**
	 * Returns the value of the '<em><b>Addrdetail</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Addrdetail</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Addrdetail</em>' attribute.
	 * @see #setAddrdetail(java.lang.String)
	 */
	public String getAddrdetail() {
		return DataUtil.toString(super.getByIndex(INDEX_ADDRDETAIL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAddrdetail <em>Addrdetail</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Addrdetail</em>' attribute.
	 * @see #getAddrdetail()
	 */
	public void setAddrdetail(String addrdetail) {
		super.setByIndex(INDEX_ADDRDETAIL, addrdetail);
	}

	/**
	 * Returns the value of the '<em><b>Mngorg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mngorg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mngorg</em>' attribute.
	 * @see #setMngorg(java.lang.String)
	 */
	public String getMngorg() {
		return DataUtil.toString(super.getByIndex(INDEX_MNGORG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getMngorg <em>Mngorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mngorg</em>' attribute.
	 * @see #getMngorg()
	 */
	public void setMngorg(String mngorg) {
		super.setByIndex(INDEX_MNGORG, mngorg);
	}

	/**
	 * Returns the value of the '<em><b>Bookdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bookdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bookdate</em>' attribute.
	 * @see #setBookdate(java.util.Date)
	 */
	public Date getBookdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_BOOKDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBookdate <em>Bookdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bookdate</em>' attribute.
	 * @see #getBookdate()
	 */
	public void setBookdate(Date bookdate) {
		super.setByIndex(INDEX_BOOKDATE, bookdate);
	}

	/**
	 * Returns the value of the '<em><b>Claimbookdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Claimbookdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Claimbookdate</em>' attribute.
	 * @see #setClaimbookdate(java.util.Date)
	 */
	public Date getClaimbookdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_CLAIMBOOKDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getClaimbookdate <em>Claimbookdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Claimbookdate</em>' attribute.
	 * @see #getClaimbookdate()
	 */
	public void setClaimbookdate(Date claimbookdate) {
		super.setByIndex(INDEX_CLAIMBOOKDATE, claimbookdate);
	}

	/**
	 * Returns the value of the '<em><b>Claimdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Claimdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Claimdate</em>' attribute.
	 * @see #setClaimdate(java.util.Date)
	 */
	public Date getClaimdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_CLAIMDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getClaimdate <em>Claimdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Claimdate</em>' attribute.
	 * @see #getClaimdate()
	 */
	public void setClaimdate(Date claimdate) {
		super.setByIndex(INDEX_CLAIMDATE, claimdate);
	}

	/**
	 * Returns the value of the '<em><b>Earlydate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Earlydate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Earlydate</em>' attribute.
	 * @see #setEarlydate(java.util.Date)
	 */
	public Date getEarlydate() {
		return DataUtil.toDate(super.getByIndex(INDEX_EARLYDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEarlydate <em>Earlydate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Earlydate</em>' attribute.
	 * @see #getEarlydate()
	 */
	public void setEarlydate(Date earlydate) {
		super.setByIndex(INDEX_EARLYDATE, earlydate);
	}

	/**
	 * Returns the value of the '<em><b>Allocate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Allocate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Allocate</em>' attribute.
	 * @see #setAllocate(java.lang.String)
	 */
	public String getAllocate() {
		return DataUtil.toString(super.getByIndex(INDEX_ALLOCATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAllocate <em>Allocate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Allocate</em>' attribute.
	 * @see #getAllocate()
	 */
	public void setAllocate(String allocate) {
		super.setByIndex(INDEX_ALLOCATE, allocate);
	}

	/**
	 * Returns the value of the '<em><b>Receivedept</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Receivedept</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Receivedept</em>' attribute.
	 * @see #setReceivedept(int)
	 */
	public int getReceivedept() {
		return DataUtil.toInt(super.getByIndex(INDEX_RECEIVEDEPT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReceivedept <em>Receivedept</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Receivedept</em>' attribute.
	 * @see #getReceivedept()
	 */
	public void setReceivedept(int receivedept) {
		super.setByIndex(INDEX_RECEIVEDEPT, receivedept);
	}

	/**
	 * Returns the value of the '<em><b>Enddate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Enddate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Enddate</em>' attribute.
	 * @see #setEnddate(java.util.Date)
	 */
	public Date getEnddate() {
		return DataUtil.toDate(super.getByIndex(INDEX_ENDDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEnddate <em>Enddate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Enddate</em>' attribute.
	 * @see #getEnddate()
	 */
	public void setEnddate(Date enddate) {
		super.setByIndex(INDEX_ENDDATE, enddate);
	}

	/**
	 * Returns the value of the '<em><b>Endemp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Endemp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Endemp</em>' attribute.
	 * @see #setEndemp(java.lang.String)
	 */
	public String getEndemp() {
		return DataUtil.toString(super.getByIndex(INDEX_ENDEMP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEndemp <em>Endemp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Endemp</em>' attribute.
	 * @see #getEndemp()
	 */
	public void setEndemp(String endemp) {
		super.setByIndex(INDEX_ENDEMP, endemp);
	}

	/**
	 * Returns the value of the '<em><b>Enddep</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Enddep</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Enddep</em>' attribute.
	 * @see #setEnddep(java.lang.String)
	 */
	public String getEnddep() {
		return DataUtil.toString(super.getByIndex(INDEX_ENDDEP, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEnddep <em>Enddep</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Enddep</em>' attribute.
	 * @see #getEnddep()
	 */
	public void setEnddep(String enddep) {
		super.setByIndex(INDEX_ENDDEP, enddep);
	}

	/**
	 * Returns the value of the '<em><b>Enddesc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Enddesc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Enddesc</em>' attribute.
	 * @see #setEnddesc(java.lang.String)
	 */
	public String getEnddesc() {
		return DataUtil.toString(super.getByIndex(INDEX_ENDDESC, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getEnddesc <em>Enddesc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Enddesc</em>' attribute.
	 * @see #getEnddesc()
	 */
	public void setEnddesc(String enddesc) {
		super.setByIndex(INDEX_ENDDESC, enddesc);
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
	 * Returns the value of the '<em><b>Stand</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stand</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stand</em>' attribute.
	 * @see #setStand(java.lang.String)
	 */
	public String getStand() {
		return DataUtil.toString(super.getByIndex(INDEX_STAND, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand) {
		super.setByIndex(INDEX_STAND, stand);
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

	/**
	 * Returns the value of the '<em><b>Reportedtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reportedtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reportedtime</em>' attribute.
	 * @see #setReportedtime(java.util.Date)
	 */
	public Date getReportedtime() {
		return DataUtil.toDate(super.getByIndex(INDEX_REPORTEDTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReportedtime <em>Reportedtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reportedtime</em>' attribute.
	 * @see #getReportedtime()
	 */
	public void setReportedtime(Date reportedtime) {
		super.setByIndex(INDEX_REPORTEDTIME, reportedtime);
	}

	/**
	 * Returns the value of the '<em><b>Urglvl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Urglvl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Urglvl</em>' attribute.
	 * @see #setUrglvl(java.lang.String)
	 */
	public String getUrglvl() {
		return DataUtil.toString(super.getByIndex(INDEX_URGLVL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getUrglvl <em>Urglvl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Urglvl</em>' attribute.
	 * @see #getUrglvl()
	 */
	public void setUrglvl(String urglvl) {
		super.setByIndex(INDEX_URGLVL, urglvl);
	}


}