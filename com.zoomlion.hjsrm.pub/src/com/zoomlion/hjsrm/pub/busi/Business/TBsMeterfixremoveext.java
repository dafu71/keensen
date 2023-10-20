/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.Business;

import com.eos.data.sdo.IObjectFactory;

import commonj.sdo.DataObject;
import commonj.sdo.Type;
import commonj.sdo.helper.DataFactory;
import commonj.sdo.helper.TypeHelper;

import java.math.BigDecimal;
import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getMeterfixremovepkid <em>Meterfixremovepkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getWorkitemid <em>Workitemid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getProjectid <em>Projectid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getBusitype <em>Busitype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getFixdate <em>Fixdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getFixflag <em>Fixflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getInbatchid <em>Inbatchid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getMeterposi <em>Meterposi</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getMeterseq <em>Meterseq</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getIsbill <em>Isbill</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getMeterfixdate <em>Meterfixdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getMeterremovedate <em>Meterremovedate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getFixdirect <em>Fixdirect</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getMeterdirect <em>Meterdirect</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getCarddirect <em>Carddirect</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getSafetynumber <em>Safetynumber</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getIsbuy <em>Isbuy</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getSupplypointpkid <em>Supplypointpkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getBasefactor <em>Basefactor</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getFixmode <em>Fixmode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getIsseal <em>Isseal</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getIsblind <em>Isblind</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getIsbranch <em>Isbranch</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getAdjustfactor <em>Adjustfactor</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getModifiercode <em>Modifiercode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getSealcode <em>Sealcode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getImgcode <em>Imgcode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getMetertstate <em>Metertstate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getNosucereason <em>Nosucereason</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getNofixreason <em>Nofixreason</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getDelflag <em>Delflag</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TBsMeterfixremoveext extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.Business", "TBsMeterfixremoveext");

	public final static IObjectFactory<TBsMeterfixremoveext> FACTORY = new IObjectFactory<TBsMeterfixremoveext>() {
		public TBsMeterfixremoveext create() {
			return (TBsMeterfixremoveext) DataFactory.INSTANCE.create(TYPE);
		}
	};

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
	public String getPkid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getPkid <em>Pkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pkid</em>' attribute.
	 * @see #getPkid()
	 */
	public void setPkid(String pkid);

	/**
	 * Returns the value of the '<em><b>Meterfixremovepkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterfixremovepkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterfixremovepkid</em>' attribute.
	 * @see #setMeterfixremovepkid(java.lang.String)
	 */
	public String getMeterfixremovepkid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getMeterfixremovepkid <em>Meterfixremovepkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterfixremovepkid</em>' attribute.
	 * @see #getMeterfixremovepkid()
	 */
	public void setMeterfixremovepkid(String meterfixremovepkid);

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
	public long getWorkitemid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getWorkitemid <em>Workitemid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Workitemid</em>' attribute.
	 * @see #getWorkitemid()
	 */
	public void setWorkitemid(long workitemid);

	/**
	 * Returns the value of the '<em><b>Projectid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Projectid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Projectid</em>' attribute.
	 * @see #setProjectid(java.lang.String)
	 */
	public String getProjectid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getProjectid <em>Projectid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Projectid</em>' attribute.
	 * @see #getProjectid()
	 */
	public void setProjectid(String projectid);

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
	public String getBusitype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getBusitype <em>Busitype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busitype</em>' attribute.
	 * @see #getBusitype()
	 */
	public void setBusitype(String busitype);

	/**
	 * Returns the value of the '<em><b>Fixdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Fixdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Fixdate</em>' attribute.
	 * @see #setFixdate(java.util.Date)
	 */
	public Date getFixdate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getFixdate <em>Fixdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Fixdate</em>' attribute.
	 * @see #getFixdate()
	 */
	public void setFixdate(Date fixdate);

	/**
	 * Returns the value of the '<em><b>Fixflag</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Fixflag</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Fixflag</em>' attribute.
	 * @see #setFixflag(java.lang.String)
	 */
	public String getFixflag();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getFixflag <em>Fixflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Fixflag</em>' attribute.
	 * @see #getFixflag()
	 */
	public void setFixflag(String fixflag);

	/**
	 * Returns the value of the '<em><b>Inbatchid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Inbatchid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Inbatchid</em>' attribute.
	 * @see #setInbatchid(int)
	 */
	public int getInbatchid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getInbatchid <em>Inbatchid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Inbatchid</em>' attribute.
	 * @see #getInbatchid()
	 */
	public void setInbatchid(int inbatchid);

	/**
	 * Returns the value of the '<em><b>Meterposi</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterposi</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterposi</em>' attribute.
	 * @see #setMeterposi(java.lang.String)
	 */
	public String getMeterposi();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getMeterposi <em>Meterposi</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterposi</em>' attribute.
	 * @see #getMeterposi()
	 */
	public void setMeterposi(String meterposi);

	/**
	 * Returns the value of the '<em><b>Meterseq</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterseq</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterseq</em>' attribute.
	 * @see #setMeterseq(long)
	 */
	public long getMeterseq();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getMeterseq <em>Meterseq</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterseq</em>' attribute.
	 * @see #getMeterseq()
	 */
	public void setMeterseq(long meterseq);

	/**
	 * Returns the value of the '<em><b>Isbill</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isbill</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isbill</em>' attribute.
	 * @see #setIsbill(java.lang.String)
	 */
	public String getIsbill();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getIsbill <em>Isbill</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isbill</em>' attribute.
	 * @see #getIsbill()
	 */
	public void setIsbill(String isbill);

	/**
	 * Returns the value of the '<em><b>Meterfixdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterfixdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterfixdate</em>' attribute.
	 * @see #setMeterfixdate(java.util.Date)
	 */
	public Date getMeterfixdate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getMeterfixdate <em>Meterfixdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterfixdate</em>' attribute.
	 * @see #getMeterfixdate()
	 */
	public void setMeterfixdate(Date meterfixdate);

	/**
	 * Returns the value of the '<em><b>Meterremovedate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterremovedate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterremovedate</em>' attribute.
	 * @see #setMeterremovedate(java.util.Date)
	 */
	public Date getMeterremovedate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getMeterremovedate <em>Meterremovedate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterremovedate</em>' attribute.
	 * @see #getMeterremovedate()
	 */
	public void setMeterremovedate(Date meterremovedate);

	/**
	 * Returns the value of the '<em><b>Fixdirect</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Fixdirect</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Fixdirect</em>' attribute.
	 * @see #setFixdirect(java.lang.String)
	 */
	public String getFixdirect();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getFixdirect <em>Fixdirect</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Fixdirect</em>' attribute.
	 * @see #getFixdirect()
	 */
	public void setFixdirect(String fixdirect);

	/**
	 * Returns the value of the '<em><b>Meterdirect</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Meterdirect</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Meterdirect</em>' attribute.
	 * @see #setMeterdirect(java.lang.String)
	 */
	public String getMeterdirect();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getMeterdirect <em>Meterdirect</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Meterdirect</em>' attribute.
	 * @see #getMeterdirect()
	 */
	public void setMeterdirect(String meterdirect);

	/**
	 * Returns the value of the '<em><b>Carddirect</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Carddirect</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Carddirect</em>' attribute.
	 * @see #setCarddirect(java.lang.String)
	 */
	public String getCarddirect();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getCarddirect <em>Carddirect</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Carddirect</em>' attribute.
	 * @see #getCarddirect()
	 */
	public void setCarddirect(String carddirect);

	/**
	 * Returns the value of the '<em><b>Safetynumber</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Safetynumber</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Safetynumber</em>' attribute.
	 * @see #setSafetynumber(java.lang.String)
	 */
	public String getSafetynumber();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getSafetynumber <em>Safetynumber</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Safetynumber</em>' attribute.
	 * @see #getSafetynumber()
	 */
	public void setSafetynumber(String safetynumber);

	/**
	 * Returns the value of the '<em><b>Isbuy</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isbuy</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isbuy</em>' attribute.
	 * @see #setIsbuy(java.lang.String)
	 */
	public String getIsbuy();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getIsbuy <em>Isbuy</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isbuy</em>' attribute.
	 * @see #getIsbuy()
	 */
	public void setIsbuy(String isbuy);

	/**
	 * Returns the value of the '<em><b>Supplypointpkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Supplypointpkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Supplypointpkid</em>' attribute.
	 * @see #setSupplypointpkid(java.lang.String)
	 */
	public String getSupplypointpkid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getSupplypointpkid <em>Supplypointpkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Supplypointpkid</em>' attribute.
	 * @see #getSupplypointpkid()
	 */
	public void setSupplypointpkid(String supplypointpkid);

	/**
	 * Returns the value of the '<em><b>Basefactor</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Basefactor</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Basefactor</em>' attribute.
	 * @see #setBasefactor(java.math.BigDecimal)
	 */
	public BigDecimal getBasefactor();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getBasefactor <em>Basefactor</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Basefactor</em>' attribute.
	 * @see #getBasefactor()
	 */
	public void setBasefactor(BigDecimal basefactor);

	/**
	 * Returns the value of the '<em><b>Fixmode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Fixmode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Fixmode</em>' attribute.
	 * @see #setFixmode(java.lang.String)
	 */
	public String getFixmode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getFixmode <em>Fixmode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Fixmode</em>' attribute.
	 * @see #getFixmode()
	 */
	public void setFixmode(String fixmode);

	/**
	 * Returns the value of the '<em><b>Isseal</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isseal</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isseal</em>' attribute.
	 * @see #setIsseal(java.lang.String)
	 */
	public String getIsseal();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getIsseal <em>Isseal</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isseal</em>' attribute.
	 * @see #getIsseal()
	 */
	public void setIsseal(String isseal);

	/**
	 * Returns the value of the '<em><b>Isblind</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isblind</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isblind</em>' attribute.
	 * @see #setIsblind(java.lang.String)
	 */
	public String getIsblind();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getIsblind <em>Isblind</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isblind</em>' attribute.
	 * @see #getIsblind()
	 */
	public void setIsblind(String isblind);

	/**
	 * Returns the value of the '<em><b>Isbranch</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isbranch</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isbranch</em>' attribute.
	 * @see #setIsbranch(java.lang.String)
	 */
	public String getIsbranch();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getIsbranch <em>Isbranch</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isbranch</em>' attribute.
	 * @see #getIsbranch()
	 */
	public void setIsbranch(String isbranch);

	/**
	 * Returns the value of the '<em><b>Adjustfactor</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Adjustfactor</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Adjustfactor</em>' attribute.
	 * @see #setAdjustfactor(java.math.BigDecimal)
	 */
	public BigDecimal getAdjustfactor();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getAdjustfactor <em>Adjustfactor</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Adjustfactor</em>' attribute.
	 * @see #getAdjustfactor()
	 */
	public void setAdjustfactor(BigDecimal adjustfactor);

	/**
	 * Returns the value of the '<em><b>Modifiercode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifiercode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifiercode</em>' attribute.
	 * @see #setModifiercode(java.lang.String)
	 */
	public String getModifiercode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getModifiercode <em>Modifiercode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifiercode</em>' attribute.
	 * @see #getModifiercode()
	 */
	public void setModifiercode(String modifiercode);

	/**
	 * Returns the value of the '<em><b>Sealcode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sealcode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sealcode</em>' attribute.
	 * @see #setSealcode(java.lang.String)
	 */
	public String getSealcode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getSealcode <em>Sealcode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sealcode</em>' attribute.
	 * @see #getSealcode()
	 */
	public void setSealcode(String sealcode);

	/**
	 * Returns the value of the '<em><b>Imgcode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Imgcode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Imgcode</em>' attribute.
	 * @see #setImgcode(java.lang.String)
	 */
	public String getImgcode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getImgcode <em>Imgcode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Imgcode</em>' attribute.
	 * @see #getImgcode()
	 */
	public void setImgcode(String imgcode);

	/**
	 * Returns the value of the '<em><b>Metertstate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Metertstate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Metertstate</em>' attribute.
	 * @see #setMetertstate(java.lang.String)
	 */
	public String getMetertstate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getMetertstate <em>Metertstate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Metertstate</em>' attribute.
	 * @see #getMetertstate()
	 */
	public void setMetertstate(String metertstate);

	/**
	 * Returns the value of the '<em><b>Nosucereason</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Nosucereason</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Nosucereason</em>' attribute.
	 * @see #setNosucereason(java.lang.String)
	 */
	public String getNosucereason();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getNosucereason <em>Nosucereason</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Nosucereason</em>' attribute.
	 * @see #getNosucereason()
	 */
	public void setNosucereason(String nosucereason);

	/**
	 * Returns the value of the '<em><b>Nofixreason</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Nofixreason</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Nofixreason</em>' attribute.
	 * @see #setNofixreason(java.lang.String)
	 */
	public String getNofixreason();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getNofixreason <em>Nofixreason</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Nofixreason</em>' attribute.
	 * @see #getNofixreason()
	 */
	public void setNofixreason(String nofixreason);

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
	public String getRemark();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getRemark <em>Remark</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Remark</em>' attribute.
	 * @see #getRemark()
	 */
	public void setRemark(String remark);

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
	public String getStand();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand);

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
	public String getCreateby();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getCreateby <em>Createby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createby</em>' attribute.
	 * @see #getCreateby()
	 */
	public void setCreateby(String createby);

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
	public Date getCreatetime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getCreatetime <em>Createtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createtime</em>' attribute.
	 * @see #getCreatetime()
	 */
	public void setCreatetime(Date createtime);

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
	public String getModifyby();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getModifyby <em>Modifyby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifyby</em>' attribute.
	 * @see #getModifyby()
	 */
	public void setModifyby(String modifyby);

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
	public Date getUpdatetime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getUpdatetime <em>Updatetime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Updatetime</em>' attribute.
	 * @see #getUpdatetime()
	 */
	public void setUpdatetime(Date updatetime);

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
	public int getDataorgid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);

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
	public String getDelflag();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsMeterfixremoveext#getDelflag <em>Delflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Delflag</em>' attribute.
	 * @see #getDelflag()
	 */
	public void setDelflag(String delflag);


}