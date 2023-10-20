/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.pub.busi.delivery.delivery;

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
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail#getZasnh <em>Zasnh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail#getZasnp <em>Zasnp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail#getVnbm <em>Vnbm</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail#getModifytime <em>Modifytime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail#getDelflay <em>Delflay</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail#getVnid <em>Vnid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlNoteVndetail extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.pub.busi.delivery.delivery", "GenlNoteVndetail");

	public final static IObjectFactory<GenlNoteVndetail> FACTORY = new IObjectFactory<GenlNoteVndetail>() {
		public GenlNoteVndetail create() {
			return (GenlNoteVndetail) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Zasnh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zasnh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zasnh</em>' attribute.
	 * @see #setZasnh(java.lang.String)
	 */
	public String getZasnh();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail#getZasnh <em>Zasnh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zasnh</em>' attribute.
	 * @see #getZasnh()
	 */
	public void setZasnh(String zasnh);

	/**
	 * Returns the value of the '<em><b>Zasnp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zasnp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zasnp</em>' attribute.
	 * @see #setZasnp(java.lang.String)
	 */
	public String getZasnp();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail#getZasnp <em>Zasnp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zasnp</em>' attribute.
	 * @see #getZasnp()
	 */
	public void setZasnp(String zasnp);

	/**
	 * Returns the value of the '<em><b>Vnbm</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Vnbm</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Vnbm</em>' attribute.
	 * @see #setVnbm(java.lang.String)
	 */
	public String getVnbm();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail#getVnbm <em>Vnbm</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Vnbm</em>' attribute.
	 * @see #getVnbm()
	 */
	public void setVnbm(String vnbm);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail#getModifyby <em>Modifyby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifyby</em>' attribute.
	 * @see #getModifyby()
	 */
	public void setModifyby(String modifyby);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail#getModifytime <em>Modifytime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifytime</em>' attribute.
	 * @see #getModifytime()
	 */
	public void setModifytime(Date modifytime);

	/**
	 * Returns the value of the '<em><b>Delflay</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Delflay</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Delflay</em>' attribute.
	 * @see #setDelflay(java.lang.String)
	 */
	public String getDelflay();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail#getDelflay <em>Delflay</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Delflay</em>' attribute.
	 * @see #getDelflay()
	 */
	public void setDelflay(String delflay);

	/**
	 * Returns the value of the '<em><b>Vnid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Vnid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Vnid</em>' attribute.
	 * @see #setVnid(long)
	 */
	public long getVnid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.pub.busi.delivery.delivery.GenlNoteVndetail#getVnid <em>Vnid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Vnid</em>' attribute.
	 * @see #getVnid()
	 */
	public void setVnid(long vnid);


}