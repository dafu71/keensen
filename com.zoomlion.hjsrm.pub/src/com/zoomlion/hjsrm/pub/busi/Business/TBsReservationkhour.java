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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getReservationtypepkid <em>Reservationtypepkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getWorkclasscode <em>Workclasscode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getWorkclassname <em>Workclassname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getWorkhour <em>Workhour</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getCreateorgid <em>Createorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getStand <em>Stand</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TBsReservationkhour extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.Business", "TBsReservationkhour");

	public final static IObjectFactory<TBsReservationkhour> FACTORY = new IObjectFactory<TBsReservationkhour>() {
		public TBsReservationkhour create() {
			return (TBsReservationkhour) DataFactory.INSTANCE.create(TYPE);
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getPkid <em>Pkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pkid</em>' attribute.
	 * @see #getPkid()
	 */
	public void setPkid(String pkid);

	/**
	 * Returns the value of the '<em><b>Reservationtypepkid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reservationtypepkid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reservationtypepkid</em>' attribute.
	 * @see #setReservationtypepkid(java.lang.String)
	 */
	public String getReservationtypepkid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getReservationtypepkid <em>Reservationtypepkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reservationtypepkid</em>' attribute.
	 * @see #getReservationtypepkid()
	 */
	public void setReservationtypepkid(String reservationtypepkid);

	/**
	 * Returns the value of the '<em><b>Workclasscode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Workclasscode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Workclasscode</em>' attribute.
	 * @see #setWorkclasscode(java.lang.String)
	 */
	public String getWorkclasscode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getWorkclasscode <em>Workclasscode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Workclasscode</em>' attribute.
	 * @see #getWorkclasscode()
	 */
	public void setWorkclasscode(String workclasscode);

	/**
	 * Returns the value of the '<em><b>Workclassname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Workclassname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Workclassname</em>' attribute.
	 * @see #setWorkclassname(java.lang.String)
	 */
	public String getWorkclassname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getWorkclassname <em>Workclassname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Workclassname</em>' attribute.
	 * @see #getWorkclassname()
	 */
	public void setWorkclassname(String workclassname);

	/**
	 * Returns the value of the '<em><b>Workhour</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Workhour</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Workhour</em>' attribute.
	 * @see #setWorkhour(java.math.BigDecimal)
	 */
	public BigDecimal getWorkhour();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getWorkhour <em>Workhour</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Workhour</em>' attribute.
	 * @see #getWorkhour()
	 */
	public void setWorkhour(BigDecimal workhour);

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
	public int getCreateorgid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getCreateorgid <em>Createorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createorgid</em>' attribute.
	 * @see #getCreateorgid()
	 */
	public void setCreateorgid(int createorgid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getCreateby <em>Createby</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getCreatetime <em>Createtime</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getModifyby <em>Modifyby</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getUpdatetime <em>Updatetime</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getDataorgid <em>Dataorgid</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getDelflag <em>Delflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Delflag</em>' attribute.
	 * @see #getDelflag()
	 */
	public void setDelflag(String delflag);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.Business.TBsReservationkhour#getStand <em>Stand</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Stand</em>' attribute.
	 * @see #getStand()
	 */
	public void setStand(String stand);


}