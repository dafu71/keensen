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
import com.zoomlion.hjsrm.pub.busi.Business.TBsRepairinfo;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getPlaninfopkid <em>Planinfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getWorklistinfopkid <em>Worklistinfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getTurninfopkid <em>Turninfopkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getWorkitemid <em>Workitemid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getBusitype <em>Busitype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getConclusiontype <em>Conclusiontype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getConclusionother <em>Conclusionother</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getRepairdate <em>Repairdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getRepairoptr <em>Repairoptr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getRepairoptrname <em>Repairoptrname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getFaultfeatures <em>Faultfeatures</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getFaultcategory <em>Faultcategory</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getDetailscategory <em>Detailscategory</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getCasualtylevel <em>Casualtylevel</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getReportedsource <em>Reportedsource</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getReportedmonitor <em>Reportedmonitor</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getReportedperson <em>Reportedperson</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getReportedtime <em>Reportedtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getDeparttime <em>Departtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getArrivetime <em>Arrivetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getCompletetime <em>Completetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getRepairdetails <em>Repairdetails</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getCreateorgid <em>Createorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getTestbegintime <em>Testbegintime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getTestovertime <em>Testovertime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getTestbegindata <em>Testbegindata</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.impl.TBsRepairinfoImpl#getTestoverdata <em>Testoverdata</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TBsRepairinfo;
 */

public class TBsRepairinfoImpl extends ExtendedDataObjectImpl implements TBsRepairinfo {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_PKID = 0;
	public final static int INDEX_PLANINFOPKID = 1;
	public final static int INDEX_WORKLISTINFOPKID = 2;
	public final static int INDEX_TURNINFOPKID = 3;
	public final static int INDEX_WORKITEMID = 4;
	public final static int INDEX_BUSITYPE = 5;
	public final static int INDEX_CONCLUSIONTYPE = 6;
	public final static int INDEX_CONCLUSIONOTHER = 7;
	public final static int INDEX_REPAIRDATE = 8;
	public final static int INDEX_REPAIROPTR = 9;
	public final static int INDEX_REPAIROPTRNAME = 10;
	public final static int INDEX_FAULTFEATURES = 11;
	public final static int INDEX_FAULTCATEGORY = 12;
	public final static int INDEX_DETAILSCATEGORY = 13;
	public final static int INDEX_CASUALTYLEVEL = 14;
	public final static int INDEX_REPORTEDSOURCE = 15;
	public final static int INDEX_REPORTEDMONITOR = 16;
	public final static int INDEX_REPORTEDPERSON = 17;
	public final static int INDEX_REPORTEDTIME = 18;
	public final static int INDEX_DEPARTTIME = 19;
	public final static int INDEX_ARRIVETIME = 20;
	public final static int INDEX_COMPLETETIME = 21;
	public final static int INDEX_REPAIRDETAILS = 22;
	public final static int INDEX_REMARK = 23;
	public final static int INDEX_STAND = 24;
	public final static int INDEX_CREATEBY = 25;
	public final static int INDEX_CREATEORGID = 26;
	public final static int INDEX_CREATETIME = 27;
	public final static int INDEX_MODIFYBY = 28;
	public final static int INDEX_UPDATETIME = 29;
	public final static int INDEX_DATAORGID = 30;
	public final static int INDEX_DELFLAG = 31;
	public final static int INDEX_TESTBEGINTIME = 32;
	public final static int INDEX_TESTOVERTIME = 33;
	public final static int INDEX_TESTBEGINDATA = 34;
	public final static int INDEX_TESTOVERDATA = 35;
	public final static int SDO_PROPERTY_COUNT = 36;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsRepairinfoImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TBsRepairinfoImpl(Type type) {
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
	 * Returns the value of the '<em><b>Planinfopkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Planinfopkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Planinfopkid</em>' attribute.
	 * @see #setPlaninfopkid(java.lang.String)
	 */
	public String getPlaninfopkid() {
		return DataUtil.toString(super.getByIndex(INDEX_PLANINFOPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPlaninfopkid <em>Planinfopkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Planinfopkid</em>' attribute.
	 * @see #getPlaninfopkid()
	 */
	public void setPlaninfopkid(String planinfopkid) {
		super.setByIndex(INDEX_PLANINFOPKID, planinfopkid);
	}

	/**
	 * Returns the value of the '<em><b>Worklistinfopkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Worklistinfopkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Worklistinfopkid</em>' attribute.
	 * @see #setWorklistinfopkid(java.lang.String)
	 */
	public String getWorklistinfopkid() {
		return DataUtil.toString(super.getByIndex(INDEX_WORKLISTINFOPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWorklistinfopkid <em>Worklistinfopkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Worklistinfopkid</em>' attribute.
	 * @see #getWorklistinfopkid()
	 */
	public void setWorklistinfopkid(String worklistinfopkid) {
		super.setByIndex(INDEX_WORKLISTINFOPKID, worklistinfopkid);
	}

	/**
	 * Returns the value of the '<em><b>Turninfopkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Turninfopkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Turninfopkid</em>' attribute.
	 * @see #setTurninfopkid(java.lang.String)
	 */
	public String getTurninfopkid() {
		return DataUtil.toString(super.getByIndex(INDEX_TURNINFOPKID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTurninfopkid <em>Turninfopkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Turninfopkid</em>' attribute.
	 * @see #getTurninfopkid()
	 */
	public void setTurninfopkid(String turninfopkid) {
		super.setByIndex(INDEX_TURNINFOPKID, turninfopkid);
	}

	/**
	 * Returns the value of the '<em><b>Workitemid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Workitemid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Workitemid</em>' attribute.
	 * @see #setWorkitemid(long)
	 */
	public long getWorkitemid() {
		return DataUtil.toLong(super.getByIndex(INDEX_WORKITEMID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getWorkitemid <em>Workitemid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Workitemid</em>' attribute.
	 * @see #getWorkitemid()
	 */
	public void setWorkitemid(long workitemid) {
		super.setByIndex(INDEX_WORKITEMID, workitemid);
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
	 * Returns the value of the '<em><b>Conclusiontype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Conclusiontype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Conclusiontype</em>' attribute.
	 * @see #setConclusiontype(java.lang.String)
	 */
	public String getConclusiontype() {
		return DataUtil.toString(super.getByIndex(INDEX_CONCLUSIONTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getConclusiontype <em>Conclusiontype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Conclusiontype</em>' attribute.
	 * @see #getConclusiontype()
	 */
	public void setConclusiontype(String conclusiontype) {
		super.setByIndex(INDEX_CONCLUSIONTYPE, conclusiontype);
	}

	/**
	 * Returns the value of the '<em><b>Conclusionother</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Conclusionother</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Conclusionother</em>' attribute.
	 * @see #setConclusionother(java.lang.String)
	 */
	public String getConclusionother() {
		return DataUtil.toString(super.getByIndex(INDEX_CONCLUSIONOTHER, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getConclusionother <em>Conclusionother</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Conclusionother</em>' attribute.
	 * @see #getConclusionother()
	 */
	public void setConclusionother(String conclusionother) {
		super.setByIndex(INDEX_CONCLUSIONOTHER, conclusionother);
	}

	/**
	 * Returns the value of the '<em><b>Repairdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Repairdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Repairdate</em>' attribute.
	 * @see #setRepairdate(java.util.Date)
	 */
	public Date getRepairdate() {
		return DataUtil.toDate(super.getByIndex(INDEX_REPAIRDATE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRepairdate <em>Repairdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Repairdate</em>' attribute.
	 * @see #getRepairdate()
	 */
	public void setRepairdate(Date repairdate) {
		super.setByIndex(INDEX_REPAIRDATE, repairdate);
	}

	/**
	 * Returns the value of the '<em><b>Repairoptr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Repairoptr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Repairoptr</em>' attribute.
	 * @see #setRepairoptr(java.lang.String)
	 */
	public String getRepairoptr() {
		return DataUtil.toString(super.getByIndex(INDEX_REPAIROPTR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRepairoptr <em>Repairoptr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Repairoptr</em>' attribute.
	 * @see #getRepairoptr()
	 */
	public void setRepairoptr(String repairoptr) {
		super.setByIndex(INDEX_REPAIROPTR, repairoptr);
	}

	/**
	 * Returns the value of the '<em><b>Repairoptrname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Repairoptrname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Repairoptrname</em>' attribute.
	 * @see #setRepairoptrname(java.lang.String)
	 */
	public String getRepairoptrname() {
		return DataUtil.toString(super.getByIndex(INDEX_REPAIROPTRNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRepairoptrname <em>Repairoptrname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Repairoptrname</em>' attribute.
	 * @see #getRepairoptrname()
	 */
	public void setRepairoptrname(String repairoptrname) {
		super.setByIndex(INDEX_REPAIROPTRNAME, repairoptrname);
	}

	/**
	 * Returns the value of the '<em><b>Faultfeatures</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Faultfeatures</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Faultfeatures</em>' attribute.
	 * @see #setFaultfeatures(java.lang.String)
	 */
	public String getFaultfeatures() {
		return DataUtil.toString(super.getByIndex(INDEX_FAULTFEATURES, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFaultfeatures <em>Faultfeatures</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Faultfeatures</em>' attribute.
	 * @see #getFaultfeatures()
	 */
	public void setFaultfeatures(String faultfeatures) {
		super.setByIndex(INDEX_FAULTFEATURES, faultfeatures);
	}

	/**
	 * Returns the value of the '<em><b>Faultcategory</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Faultcategory</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Faultcategory</em>' attribute.
	 * @see #setFaultcategory(java.lang.String)
	 */
	public String getFaultcategory() {
		return DataUtil.toString(super.getByIndex(INDEX_FAULTCATEGORY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFaultcategory <em>Faultcategory</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Faultcategory</em>' attribute.
	 * @see #getFaultcategory()
	 */
	public void setFaultcategory(String faultcategory) {
		super.setByIndex(INDEX_FAULTCATEGORY, faultcategory);
	}

	/**
	 * Returns the value of the '<em><b>Detailscategory</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Detailscategory</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Detailscategory</em>' attribute.
	 * @see #setDetailscategory(java.lang.String)
	 */
	public String getDetailscategory() {
		return DataUtil.toString(super.getByIndex(INDEX_DETAILSCATEGORY, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDetailscategory <em>Detailscategory</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Detailscategory</em>' attribute.
	 * @see #getDetailscategory()
	 */
	public void setDetailscategory(String detailscategory) {
		super.setByIndex(INDEX_DETAILSCATEGORY, detailscategory);
	}

	/**
	 * Returns the value of the '<em><b>Casualtylevel</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Casualtylevel</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Casualtylevel</em>' attribute.
	 * @see #setCasualtylevel(java.lang.String)
	 */
	public String getCasualtylevel() {
		return DataUtil.toString(super.getByIndex(INDEX_CASUALTYLEVEL, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCasualtylevel <em>Casualtylevel</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Casualtylevel</em>' attribute.
	 * @see #getCasualtylevel()
	 */
	public void setCasualtylevel(String casualtylevel) {
		super.setByIndex(INDEX_CASUALTYLEVEL, casualtylevel);
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
	 * Returns the value of the '<em><b>Reportedmonitor</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reportedmonitor</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reportedmonitor</em>' attribute.
	 * @see #setReportedmonitor(java.lang.String)
	 */
	public String getReportedmonitor() {
		return DataUtil.toString(super.getByIndex(INDEX_REPORTEDMONITOR, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReportedmonitor <em>Reportedmonitor</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reportedmonitor</em>' attribute.
	 * @see #getReportedmonitor()
	 */
	public void setReportedmonitor(String reportedmonitor) {
		super.setByIndex(INDEX_REPORTEDMONITOR, reportedmonitor);
	}

	/**
	 * Returns the value of the '<em><b>Reportedperson</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reportedperson</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reportedperson</em>' attribute.
	 * @see #setReportedperson(java.lang.String)
	 */
	public String getReportedperson() {
		return DataUtil.toString(super.getByIndex(INDEX_REPORTEDPERSON, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getReportedperson <em>Reportedperson</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reportedperson</em>' attribute.
	 * @see #getReportedperson()
	 */
	public void setReportedperson(String reportedperson) {
		super.setByIndex(INDEX_REPORTEDPERSON, reportedperson);
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
	 * Returns the value of the '<em><b>Departtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Departtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Departtime</em>' attribute.
	 * @see #setDeparttime(java.util.Date)
	 */
	public Date getDeparttime() {
		return DataUtil.toDate(super.getByIndex(INDEX_DEPARTTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDeparttime <em>Departtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Departtime</em>' attribute.
	 * @see #getDeparttime()
	 */
	public void setDeparttime(Date departtime) {
		super.setByIndex(INDEX_DEPARTTIME, departtime);
	}

	/**
	 * Returns the value of the '<em><b>Arrivetime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Arrivetime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Arrivetime</em>' attribute.
	 * @see #setArrivetime(java.util.Date)
	 */
	public Date getArrivetime() {
		return DataUtil.toDate(super.getByIndex(INDEX_ARRIVETIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getArrivetime <em>Arrivetime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Arrivetime</em>' attribute.
	 * @see #getArrivetime()
	 */
	public void setArrivetime(Date arrivetime) {
		super.setByIndex(INDEX_ARRIVETIME, arrivetime);
	}

	/**
	 * Returns the value of the '<em><b>Completetime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Completetime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Completetime</em>' attribute.
	 * @see #setCompletetime(java.util.Date)
	 */
	public Date getCompletetime() {
		return DataUtil.toDate(super.getByIndex(INDEX_COMPLETETIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getCompletetime <em>Completetime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Completetime</em>' attribute.
	 * @see #getCompletetime()
	 */
	public void setCompletetime(Date completetime) {
		super.setByIndex(INDEX_COMPLETETIME, completetime);
	}

	/**
	 * Returns the value of the '<em><b>Repairdetails</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Repairdetails</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Repairdetails</em>' attribute.
	 * @see #setRepairdetails(java.lang.String)
	 */
	public String getRepairdetails() {
		return DataUtil.toString(super.getByIndex(INDEX_REPAIRDETAILS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRepairdetails <em>Repairdetails</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Repairdetails</em>' attribute.
	 * @see #getRepairdetails()
	 */
	public void setRepairdetails(String repairdetails) {
		super.setByIndex(INDEX_REPAIRDETAILS, repairdetails);
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
	 * Returns the value of the '<em><b>Testbegintime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Testbegintime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Testbegintime</em>' attribute.
	 * @see #setTestbegintime(java.lang.String)
	 */
	public String getTestbegintime() {
		return DataUtil.toString(super.getByIndex(INDEX_TESTBEGINTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTestbegintime <em>Testbegintime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Testbegintime</em>' attribute.
	 * @see #getTestbegintime()
	 */
	public void setTestbegintime(String testbegintime) {
		super.setByIndex(INDEX_TESTBEGINTIME, testbegintime);
	}

	/**
	 * Returns the value of the '<em><b>Testovertime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Testovertime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Testovertime</em>' attribute.
	 * @see #setTestovertime(java.lang.String)
	 */
	public String getTestovertime() {
		return DataUtil.toString(super.getByIndex(INDEX_TESTOVERTIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTestovertime <em>Testovertime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Testovertime</em>' attribute.
	 * @see #getTestovertime()
	 */
	public void setTestovertime(String testovertime) {
		super.setByIndex(INDEX_TESTOVERTIME, testovertime);
	}

	/**
	 * Returns the value of the '<em><b>Testbegindata</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Testbegindata</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Testbegindata</em>' attribute.
	 * @see #setTestbegindata(int)
	 */
	public int getTestbegindata() {
		return DataUtil.toInt(super.getByIndex(INDEX_TESTBEGINDATA, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTestbegindata <em>Testbegindata</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Testbegindata</em>' attribute.
	 * @see #getTestbegindata()
	 */
	public void setTestbegindata(int testbegindata) {
		super.setByIndex(INDEX_TESTBEGINDATA, testbegindata);
	}

	/**
	 * Returns the value of the '<em><b>Testoverdata</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Testoverdata</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Testoverdata</em>' attribute.
	 * @see #setTestoverdata(int)
	 */
	public int getTestoverdata() {
		return DataUtil.toInt(super.getByIndex(INDEX_TESTOVERDATA, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getTestoverdata <em>Testoverdata</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Testoverdata</em>' attribute.
	 * @see #getTestoverdata()
	 */
	public void setTestoverdata(int testoverdata) {
		super.setByIndex(INDEX_TESTOVERDATA, testoverdata);
	}


}