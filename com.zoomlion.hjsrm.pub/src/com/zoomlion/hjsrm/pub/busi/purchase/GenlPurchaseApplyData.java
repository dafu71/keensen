/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.purchase;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getCreatebyname <em>Createbyname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getModifybyname <em>Modifybyname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getModifytime <em>Modifytime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getMaktx <em>Maktx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getErdat <em>Erdat</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getData2 <em>Data2</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getData3 <em>Data3</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getData4 <em>Data4</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getData5 <em>Data5</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getData1 <em>Data1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getMenge <em>Menge</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlPurchaseApplyData extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.purchase", "GenlPurchaseApplyData");

	public final static IObjectFactory<GenlPurchaseApplyData> FACTORY = new IObjectFactory<GenlPurchaseApplyData>() {
		public GenlPurchaseApplyData create() {
			return (GenlPurchaseApplyData) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getPkid <em>Pkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pkid</em>' attribute.
	 * @see #getPkid()
	 */
	public void setPkid(String pkid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getCreateby <em>Createby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createby</em>' attribute.
	 * @see #getCreateby()
	 */
	public void setCreateby(String createby);

	/**
	 * Returns the value of the '<em><b>Createbyname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Createbyname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Createbyname</em>' attribute.
	 * @see #setCreatebyname(java.lang.String)
	 */
	public String getCreatebyname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getCreatebyname <em>Createbyname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createbyname</em>' attribute.
	 * @see #getCreatebyname()
	 */
	public void setCreatebyname(String createbyname);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getCreatetime <em>Createtime</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getModifyby <em>Modifyby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifyby</em>' attribute.
	 * @see #getModifyby()
	 */
	public void setModifyby(String modifyby);

	/**
	 * Returns the value of the '<em><b>Modifybyname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifybyname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifybyname</em>' attribute.
	 * @see #setModifybyname(java.lang.String)
	 */
	public String getModifybyname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getModifybyname <em>Modifybyname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifybyname</em>' attribute.
	 * @see #getModifybyname()
	 */
	public void setModifybyname(String modifybyname);

	/**
	 * Returns the value of the '<em><b>Modifytime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifytime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifytime</em>' attribute.
	 * @see #setModifytime(java.util.Date)
	 */
	public Date getModifytime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getModifytime <em>Modifytime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifytime</em>' attribute.
	 * @see #getModifytime()
	 */
	public void setModifytime(Date modifytime);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getRemark <em>Remark</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getLifnr <em>Lifnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lifnr</em>' attribute.
	 * @see #getLifnr()
	 */
	public void setLifnr(String lifnr);

	/**
	 * Returns the value of the '<em><b>Matnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Matnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Matnr</em>' attribute.
	 * @see #setMatnr(java.lang.String)
	 */
	public String getMatnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getMatnr <em>Matnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matnr</em>' attribute.
	 * @see #getMatnr()
	 */
	public void setMatnr(String matnr);

	/**
	 * Returns the value of the '<em><b>Maktx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Maktx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Maktx</em>' attribute.
	 * @see #setMaktx(java.lang.String)
	 */
	public String getMaktx();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getMaktx <em>Maktx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Maktx</em>' attribute.
	 * @see #getMaktx()
	 */
	public void setMaktx(String maktx);

	/**
	 * Returns the value of the '<em><b>Erdat</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Erdat</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Erdat</em>' attribute.
	 * @see #setErdat(java.lang.String)
	 */
	public String getErdat();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getErdat <em>Erdat</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Erdat</em>' attribute.
	 * @see #getErdat()
	 */
	public void setErdat(String erdat);

	/**
	 * Returns the value of the '<em><b>Data2</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Data2</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Data2</em>' attribute.
	 * @see #setData2(java.lang.String)
	 */
	public String getData2();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getData2 <em>Data2</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Data2</em>' attribute.
	 * @see #getData2()
	 */
	public void setData2(String data2);

	/**
	 * Returns the value of the '<em><b>Data3</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Data3</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Data3</em>' attribute.
	 * @see #setData3(java.lang.String)
	 */
	public String getData3();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getData3 <em>Data3</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Data3</em>' attribute.
	 * @see #getData3()
	 */
	public void setData3(String data3);

	/**
	 * Returns the value of the '<em><b>Data4</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Data4</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Data4</em>' attribute.
	 * @see #setData4(java.lang.String)
	 */
	public String getData4();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getData4 <em>Data4</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Data4</em>' attribute.
	 * @see #getData4()
	 */
	public void setData4(String data4);

	/**
	 * Returns the value of the '<em><b>Data5</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Data5</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Data5</em>' attribute.
	 * @see #setData5(java.lang.String)
	 */
	public String getData5();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getData5 <em>Data5</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Data5</em>' attribute.
	 * @see #getData5()
	 */
	public void setData5(String data5);

	/**
	 * Returns the value of the '<em><b>Data1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Data1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Data1</em>' attribute.
	 * @see #setData1(java.lang.String)
	 */
	public String getData1();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getData1 <em>Data1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Data1</em>' attribute.
	 * @see #getData1()
	 */
	public void setData1(String data1);

	/**
	 * Returns the value of the '<em><b>Menge</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Menge</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Menge</em>' attribute.
	 * @see #setMenge(java.lang.String)
	 */
	public String getMenge();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.purchase.GenlPurchaseApplyData#getMenge <em>Menge</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Menge</em>' attribute.
	 * @see #getMenge()
	 */
	public void setMenge(String menge);


}