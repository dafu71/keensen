/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.kcgl;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getCreatebyname <em>Createbyname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getModifybyname <em>Modifybyname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getModifytime <em>Modifytime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getStand <em>Stand</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPmatnr <em>Pmatnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getZcpcx <em>Zcpcx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getMaktx <em>Maktx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getName1 <em>Name1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getStock <em>Stock</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getCarno <em>Carno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getUnderamount <em>Underamount</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate1 <em>Date1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan1 <em>Plan1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer1 <em>Answer1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate2 <em>Date2</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan2 <em>Plan2</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer2 <em>Answer2</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate3 <em>Date3</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan3 <em>Plan3</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer3 <em>Answer3</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate4 <em>Date4</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan4 <em>Plan4</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer4 <em>Answer4</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate5 <em>Date5</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan5 <em>Plan5</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer5 <em>Answer5</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate6 <em>Date6</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan6 <em>Plan6</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer6 <em>Answer6</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate7 <em>Date7</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan7 <em>Plan7</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer7 <em>Answer7</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate8 <em>Date8</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan8 <em>Plan8</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer8 <em>Answer8</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate9 <em>Date9</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan9 <em>Plan9</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer9 <em>Answer9</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate10 <em>Date10</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan10 <em>Plan10</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer10 <em>Answer10</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getRelationid <em>Relationid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlansum <em>Plansum</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getLine <em>Line</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlPurchasePlanList extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.kcgl", "GenlPurchasePlanList");

	public final static IObjectFactory<GenlPurchasePlanList> FACTORY = new IObjectFactory<GenlPurchasePlanList>() {
		public GenlPurchasePlanList create() {
			return (GenlPurchasePlanList) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPkid <em>Pkid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getCreateby <em>Createby</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getCreatebyname <em>Createbyname</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getCreatetime <em>Createtime</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getModifyby <em>Modifyby</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getModifybyname <em>Modifybyname</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getModifytime <em>Modifytime</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getRemark <em>Remark</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand);

	/**
	 * Returns the value of the '<em><b>Pmatnr</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Pmatnr</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Pmatnr</em>' attribute.
	 * @see #setPmatnr(java.lang.String)
	 */
	public String getPmatnr();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPmatnr <em>Pmatnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pmatnr</em>' attribute.
	 * @see #getPmatnr()
	 */
	public void setPmatnr(String pmatnr);

	/**
	 * Returns the value of the '<em><b>Zcpcx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zcpcx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zcpcx</em>' attribute.
	 * @see #setZcpcx(java.lang.String)
	 */
	public String getZcpcx();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getZcpcx <em>Zcpcx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zcpcx</em>' attribute.
	 * @see #getZcpcx()
	 */
	public void setZcpcx(String zcpcx);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getMatnr <em>Matnr</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getMaktx <em>Maktx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Maktx</em>' attribute.
	 * @see #getMaktx()
	 */
	public void setMaktx(String maktx);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getLifnr <em>Lifnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Lifnr</em>' attribute.
	 * @see #getLifnr()
	 */
	public void setLifnr(String lifnr);

	/**
	 * Returns the value of the '<em><b>Name1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Name1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Name1</em>' attribute.
	 * @see #setName1(java.lang.String)
	 */
	public String getName1();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getName1 <em>Name1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Name1</em>' attribute.
	 * @see #getName1()
	 */
	public void setName1(String name1);

	/**
	 * Returns the value of the '<em><b>Stock</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Stock</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Stock</em>' attribute.
	 * @see #setStock(long)
	 */
	public long getStock();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getStock <em>Stock</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stock</em>' attribute.
	 * @see #getStock()
	 */
	public void setStock(long stock);

	/**
	 * Returns the value of the '<em><b>Carno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Carno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Carno</em>' attribute.
	 * @see #setCarno(java.lang.String)
	 */
	public String getCarno();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getCarno <em>Carno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Carno</em>' attribute.
	 * @see #getCarno()
	 */
	public void setCarno(String carno);

	/**
	 * Returns the value of the '<em><b>Underamount</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Underamount</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Underamount</em>' attribute.
	 * @see #setUnderamount(long)
	 */
	public long getUnderamount();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getUnderamount <em>Underamount</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Underamount</em>' attribute.
	 * @see #getUnderamount()
	 */
	public void setUnderamount(long underamount);

	/**
	 * Returns the value of the '<em><b>Date1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date1</em>' attribute.
	 * @see #setDate1(java.lang.String)
	 */
	public String getDate1();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate1 <em>Date1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date1</em>' attribute.
	 * @see #getDate1()
	 */
	public void setDate1(String date1);

	/**
	 * Returns the value of the '<em><b>Plan1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan1</em>' attribute.
	 * @see #setPlan1(long)
	 */
	public long getPlan1();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan1 <em>Plan1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan1</em>' attribute.
	 * @see #getPlan1()
	 */
	public void setPlan1(long plan1);

	/**
	 * Returns the value of the '<em><b>Answer1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer1</em>' attribute.
	 * @see #setAnswer1(long)
	 */
	public long getAnswer1();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer1 <em>Answer1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer1</em>' attribute.
	 * @see #getAnswer1()
	 */
	public void setAnswer1(long answer1);

	/**
	 * Returns the value of the '<em><b>Date2</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date2</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date2</em>' attribute.
	 * @see #setDate2(java.lang.String)
	 */
	public String getDate2();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate2 <em>Date2</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date2</em>' attribute.
	 * @see #getDate2()
	 */
	public void setDate2(String date2);

	/**
	 * Returns the value of the '<em><b>Plan2</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan2</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan2</em>' attribute.
	 * @see #setPlan2(long)
	 */
	public long getPlan2();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan2 <em>Plan2</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan2</em>' attribute.
	 * @see #getPlan2()
	 */
	public void setPlan2(long plan2);

	/**
	 * Returns the value of the '<em><b>Answer2</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer2</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer2</em>' attribute.
	 * @see #setAnswer2(long)
	 */
	public long getAnswer2();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer2 <em>Answer2</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer2</em>' attribute.
	 * @see #getAnswer2()
	 */
	public void setAnswer2(long answer2);

	/**
	 * Returns the value of the '<em><b>Date3</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date3</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date3</em>' attribute.
	 * @see #setDate3(java.lang.String)
	 */
	public String getDate3();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate3 <em>Date3</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date3</em>' attribute.
	 * @see #getDate3()
	 */
	public void setDate3(String date3);

	/**
	 * Returns the value of the '<em><b>Plan3</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan3</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan3</em>' attribute.
	 * @see #setPlan3(long)
	 */
	public long getPlan3();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan3 <em>Plan3</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan3</em>' attribute.
	 * @see #getPlan3()
	 */
	public void setPlan3(long plan3);

	/**
	 * Returns the value of the '<em><b>Answer3</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer3</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer3</em>' attribute.
	 * @see #setAnswer3(long)
	 */
	public long getAnswer3();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer3 <em>Answer3</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer3</em>' attribute.
	 * @see #getAnswer3()
	 */
	public void setAnswer3(long answer3);

	/**
	 * Returns the value of the '<em><b>Date4</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date4</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date4</em>' attribute.
	 * @see #setDate4(java.lang.String)
	 */
	public String getDate4();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate4 <em>Date4</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date4</em>' attribute.
	 * @see #getDate4()
	 */
	public void setDate4(String date4);

	/**
	 * Returns the value of the '<em><b>Plan4</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan4</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan4</em>' attribute.
	 * @see #setPlan4(long)
	 */
	public long getPlan4();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan4 <em>Plan4</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan4</em>' attribute.
	 * @see #getPlan4()
	 */
	public void setPlan4(long plan4);

	/**
	 * Returns the value of the '<em><b>Answer4</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer4</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer4</em>' attribute.
	 * @see #setAnswer4(long)
	 */
	public long getAnswer4();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer4 <em>Answer4</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer4</em>' attribute.
	 * @see #getAnswer4()
	 */
	public void setAnswer4(long answer4);

	/**
	 * Returns the value of the '<em><b>Date5</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date5</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date5</em>' attribute.
	 * @see #setDate5(java.lang.String)
	 */
	public String getDate5();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate5 <em>Date5</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date5</em>' attribute.
	 * @see #getDate5()
	 */
	public void setDate5(String date5);

	/**
	 * Returns the value of the '<em><b>Plan5</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan5</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan5</em>' attribute.
	 * @see #setPlan5(long)
	 */
	public long getPlan5();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan5 <em>Plan5</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan5</em>' attribute.
	 * @see #getPlan5()
	 */
	public void setPlan5(long plan5);

	/**
	 * Returns the value of the '<em><b>Answer5</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer5</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer5</em>' attribute.
	 * @see #setAnswer5(long)
	 */
	public long getAnswer5();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer5 <em>Answer5</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer5</em>' attribute.
	 * @see #getAnswer5()
	 */
	public void setAnswer5(long answer5);

	/**
	 * Returns the value of the '<em><b>Date6</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date6</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date6</em>' attribute.
	 * @see #setDate6(java.lang.String)
	 */
	public String getDate6();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate6 <em>Date6</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date6</em>' attribute.
	 * @see #getDate6()
	 */
	public void setDate6(String date6);

	/**
	 * Returns the value of the '<em><b>Plan6</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan6</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan6</em>' attribute.
	 * @see #setPlan6(long)
	 */
	public long getPlan6();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan6 <em>Plan6</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan6</em>' attribute.
	 * @see #getPlan6()
	 */
	public void setPlan6(long plan6);

	/**
	 * Returns the value of the '<em><b>Answer6</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer6</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer6</em>' attribute.
	 * @see #setAnswer6(long)
	 */
	public long getAnswer6();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer6 <em>Answer6</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer6</em>' attribute.
	 * @see #getAnswer6()
	 */
	public void setAnswer6(long answer6);

	/**
	 * Returns the value of the '<em><b>Date7</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date7</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date7</em>' attribute.
	 * @see #setDate7(java.lang.String)
	 */
	public String getDate7();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate7 <em>Date7</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date7</em>' attribute.
	 * @see #getDate7()
	 */
	public void setDate7(String date7);

	/**
	 * Returns the value of the '<em><b>Plan7</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan7</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan7</em>' attribute.
	 * @see #setPlan7(long)
	 */
	public long getPlan7();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan7 <em>Plan7</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan7</em>' attribute.
	 * @see #getPlan7()
	 */
	public void setPlan7(long plan7);

	/**
	 * Returns the value of the '<em><b>Answer7</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer7</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer7</em>' attribute.
	 * @see #setAnswer7(long)
	 */
	public long getAnswer7();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer7 <em>Answer7</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer7</em>' attribute.
	 * @see #getAnswer7()
	 */
	public void setAnswer7(long answer7);

	/**
	 * Returns the value of the '<em><b>Date8</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date8</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date8</em>' attribute.
	 * @see #setDate8(java.lang.String)
	 */
	public String getDate8();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate8 <em>Date8</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date8</em>' attribute.
	 * @see #getDate8()
	 */
	public void setDate8(String date8);

	/**
	 * Returns the value of the '<em><b>Plan8</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan8</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan8</em>' attribute.
	 * @see #setPlan8(long)
	 */
	public long getPlan8();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan8 <em>Plan8</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan8</em>' attribute.
	 * @see #getPlan8()
	 */
	public void setPlan8(long plan8);

	/**
	 * Returns the value of the '<em><b>Answer8</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer8</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer8</em>' attribute.
	 * @see #setAnswer8(long)
	 */
	public long getAnswer8();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer8 <em>Answer8</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer8</em>' attribute.
	 * @see #getAnswer8()
	 */
	public void setAnswer8(long answer8);

	/**
	 * Returns the value of the '<em><b>Date9</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date9</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date9</em>' attribute.
	 * @see #setDate9(java.lang.String)
	 */
	public String getDate9();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate9 <em>Date9</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date9</em>' attribute.
	 * @see #getDate9()
	 */
	public void setDate9(String date9);

	/**
	 * Returns the value of the '<em><b>Plan9</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan9</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan9</em>' attribute.
	 * @see #setPlan9(long)
	 */
	public long getPlan9();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan9 <em>Plan9</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan9</em>' attribute.
	 * @see #getPlan9()
	 */
	public void setPlan9(long plan9);

	/**
	 * Returns the value of the '<em><b>Answer9</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer9</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer9</em>' attribute.
	 * @see #setAnswer9(long)
	 */
	public long getAnswer9();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer9 <em>Answer9</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer9</em>' attribute.
	 * @see #getAnswer9()
	 */
	public void setAnswer9(long answer9);

	/**
	 * Returns the value of the '<em><b>Date10</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Date10</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Date10</em>' attribute.
	 * @see #setDate10(java.lang.String)
	 */
	public String getDate10();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getDate10 <em>Date10</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Date10</em>' attribute.
	 * @see #getDate10()
	 */
	public void setDate10(String date10);

	/**
	 * Returns the value of the '<em><b>Plan10</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plan10</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plan10</em>' attribute.
	 * @see #setPlan10(long)
	 */
	public long getPlan10();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlan10 <em>Plan10</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plan10</em>' attribute.
	 * @see #getPlan10()
	 */
	public void setPlan10(long plan10);

	/**
	 * Returns the value of the '<em><b>Answer10</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Answer10</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Answer10</em>' attribute.
	 * @see #setAnswer10(long)
	 */
	public long getAnswer10();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getAnswer10 <em>Answer10</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Answer10</em>' attribute.
	 * @see #getAnswer10()
	 */
	public void setAnswer10(long answer10);

	/**
	 * Returns the value of the '<em><b>Relationid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Relationid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Relationid</em>' attribute.
	 * @see #setRelationid(java.lang.String)
	 */
	public String getRelationid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getRelationid <em>Relationid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Relationid</em>' attribute.
	 * @see #getRelationid()
	 */
	public void setRelationid(String relationid);

	/**
	 * Returns the value of the '<em><b>Plansum</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Plansum</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Plansum</em>' attribute.
	 * @see #setPlansum(long)
	 */
	public long getPlansum();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getPlansum <em>Plansum</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Plansum</em>' attribute.
	 * @see #getPlansum()
	 */
	public void setPlansum(long plansum);

	/**
	 * Returns the value of the '<em><b>Line</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Line</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Line</em>' attribute.
	 * @see #setLine(java.lang.String)
	 */
	public String getLine();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.kcgl.GenlPurchasePlanList#getLine <em>Line</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Line</em>' attribute.
	 * @see #getLine()
	 */
	public void setLine(String line);


}