/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr;

import com.eos.data.sdo.IObjectFactory;

import commonj.sdo.DataObject;
import commonj.sdo.Type;
import commonj.sdo.helper.DataFactory;
import commonj.sdo.helper.TypeHelper;

import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getYearr <em>Yearr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getEkorg <em>Ekorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getJydy <em>Jydy</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getGyslx <em>Gyslx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getZgcp <em>Zgcp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getWzlx <em>Wzlx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getWzlb <em>Wzlb</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getGysdz <em>Gysdz</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getGyslxr <em>Gyslxr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getGyslxdh <em>Gyslxdh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getText1 <em>Text1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getText2 <em>Text2</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getCreateuserid <em>Createuserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getUpdateuseid <em>Updateuseid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getBukrs <em>Bukrs</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlSupplyHgsupply extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr", "GenlSupplyHgsupply");

	public final static IObjectFactory<GenlSupplyHgsupply> FACTORY = new IObjectFactory<GenlSupplyHgsupply>() {
		public GenlSupplyHgsupply create() {
			return (GenlSupplyHgsupply) DataFactory.INSTANCE.create(TYPE);
		}
	};

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
	public String getLifnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getLifnr <em>Lifnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lifnr</em>' attribute.
	 * @see #getLifnr()
	 */
	public void setLifnr(String lifnr);

	/**
	 * Returns the value of the '<em><b>Yearr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Yearr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Yearr</em>' attribute.
	 * @see #setYearr(java.lang.String)
	 */
	public String getYearr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getYearr <em>Yearr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Yearr</em>' attribute.
	 * @see #getYearr()
	 */
	public void setYearr(String yearr);

	/**
	 * Returns the value of the '<em><b>Ekorg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ekorg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ekorg</em>' attribute.
	 * @see #setEkorg(java.lang.String)
	 */
	public String getEkorg();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getEkorg <em>Ekorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ekorg</em>' attribute.
	 * @see #getEkorg()
	 */
	public void setEkorg(String ekorg);

	/**
	 * Returns the value of the '<em><b>Jydy</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jydy</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jydy</em>' attribute.
	 * @see #setJydy(java.lang.String)
	 */
	public String getJydy();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getJydy <em>Jydy</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jydy</em>' attribute.
	 * @see #getJydy()
	 */
	public void setJydy(String jydy);

	/**
	 * Returns the value of the '<em><b>Gyslx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gyslx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gyslx</em>' attribute.
	 * @see #setGyslx(java.lang.String)
	 */
	public String getGyslx();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getGyslx <em>Gyslx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gyslx</em>' attribute.
	 * @see #getGyslx()
	 */
	public void setGyslx(String gyslx);

	/**
	 * Returns the value of the '<em><b>Zgcp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zgcp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zgcp</em>' attribute.
	 * @see #setZgcp(java.lang.String)
	 */
	public String getZgcp();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getZgcp <em>Zgcp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zgcp</em>' attribute.
	 * @see #getZgcp()
	 */
	public void setZgcp(String zgcp);

	/**
	 * Returns the value of the '<em><b>Wzlx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wzlx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wzlx</em>' attribute.
	 * @see #setWzlx(java.lang.String)
	 */
	public String getWzlx();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getWzlx <em>Wzlx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wzlx</em>' attribute.
	 * @see #getWzlx()
	 */
	public void setWzlx(String wzlx);

	/**
	 * Returns the value of the '<em><b>Wzlb</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wzlb</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wzlb</em>' attribute.
	 * @see #setWzlb(java.lang.String)
	 */
	public String getWzlb();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getWzlb <em>Wzlb</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wzlb</em>' attribute.
	 * @see #getWzlb()
	 */
	public void setWzlb(String wzlb);

	/**
	 * Returns the value of the '<em><b>Gysdz</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gysdz</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gysdz</em>' attribute.
	 * @see #setGysdz(java.lang.String)
	 */
	public String getGysdz();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getGysdz <em>Gysdz</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gysdz</em>' attribute.
	 * @see #getGysdz()
	 */
	public void setGysdz(String gysdz);

	/**
	 * Returns the value of the '<em><b>Gyslxr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gyslxr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gyslxr</em>' attribute.
	 * @see #setGyslxr(java.lang.String)
	 */
	public String getGyslxr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getGyslxr <em>Gyslxr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gyslxr</em>' attribute.
	 * @see #getGyslxr()
	 */
	public void setGyslxr(String gyslxr);

	/**
	 * Returns the value of the '<em><b>Gyslxdh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gyslxdh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gyslxdh</em>' attribute.
	 * @see #setGyslxdh(java.lang.String)
	 */
	public String getGyslxdh();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getGyslxdh <em>Gyslxdh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gyslxdh</em>' attribute.
	 * @see #getGyslxdh()
	 */
	public void setGyslxdh(String gyslxdh);

	/**
	 * Returns the value of the '<em><b>Text1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Text1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Text1</em>' attribute.
	 * @see #setText1(java.lang.String)
	 */
	public String getText1();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getText1 <em>Text1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Text1</em>' attribute.
	 * @see #getText1()
	 */
	public void setText1(String text1);

	/**
	 * Returns the value of the '<em><b>Text2</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Text2</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Text2</em>' attribute.
	 * @see #setText2(java.lang.String)
	 */
	public String getText2();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getText2 <em>Text2</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Text2</em>' attribute.
	 * @see #getText2()
	 */
	public void setText2(String text2);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getCreatetime <em>Createtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createtime</em>' attribute.
	 * @see #getCreatetime()
	 */
	public void setCreatetime(Date createtime);

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
	public String getCreateuserid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getCreateuserid <em>Createuserid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createuserid</em>' attribute.
	 * @see #getCreateuserid()
	 */
	public void setCreateuserid(String createuserid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getUpdatetime <em>Updatetime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Updatetime</em>' attribute.
	 * @see #getUpdatetime()
	 */
	public void setUpdatetime(Date updatetime);

	/**
	 * Returns the value of the '<em><b>Updateuseid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Updateuseid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Updateuseid</em>' attribute.
	 * @see #setUpdateuseid(java.lang.String)
	 */
	public String getUpdateuseid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getUpdateuseid <em>Updateuseid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Updateuseid</em>' attribute.
	 * @see #getUpdateuseid()
	 */
	public void setUpdateuseid(String updateuseid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getDelflag <em>Delflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Delflag</em>' attribute.
	 * @see #getDelflag()
	 */
	public void setDelflag(String delflag);

	/**
	 * Returns the value of the '<em><b>Bukrs</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Bukrs</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Bukrs</em>' attribute.
	 * @see #setBukrs(java.lang.String)
	 */
	public String getBukrs();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.sypply.formalsupplyMgr.GenlSupplyHgsupply#getBukrs <em>Bukrs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Bukrs</em>' attribute.
	 * @see #getBukrs()
	 */
	public void setBukrs(String bukrs);


}