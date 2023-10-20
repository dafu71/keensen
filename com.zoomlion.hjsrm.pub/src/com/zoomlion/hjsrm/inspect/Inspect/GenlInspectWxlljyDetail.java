/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.inspect.Inspect;

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
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getPkid <em>Pkid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getWxllno <em>Wxllno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getWtms <em>Wtms</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getWtbw <em>Wtbw</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getQxlx <em>Qxlx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getWtsx <em>Wtsx</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getGzdj <em>Gzdj</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getUpdateuserid <em>Updateuserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getQxlxname <em>Qxlxname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getWtsxname <em>Wtsxname</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlInspectWxlljyDetail extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.inspect.Inspect", "GenlInspectWxlljyDetail");

	public final static IObjectFactory<GenlInspectWxlljyDetail> FACTORY = new IObjectFactory<GenlInspectWxlljyDetail>() {
		public GenlInspectWxlljyDetail create() {
			return (GenlInspectWxlljyDetail) DataFactory.INSTANCE.create(TYPE);
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
	 * @see #setPkid(long)
	 */
	public long getPkid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getPkid <em>Pkid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pkid</em>' attribute.
	 * @see #getPkid()
	 */
	public void setPkid(long pkid);

	/**
	 * Returns the value of the '<em><b>Wxllno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wxllno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wxllno</em>' attribute.
	 * @see #setWxllno(java.lang.String)
	 */
	public String getWxllno();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getWxllno <em>Wxllno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wxllno</em>' attribute.
	 * @see #getWxllno()
	 */
	public void setWxllno(String wxllno);

	/**
	 * Returns the value of the '<em><b>Wtms</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wtms</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wtms</em>' attribute.
	 * @see #setWtms(java.lang.String)
	 */
	public String getWtms();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getWtms <em>Wtms</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wtms</em>' attribute.
	 * @see #getWtms()
	 */
	public void setWtms(String wtms);

	/**
	 * Returns the value of the '<em><b>Wtbw</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wtbw</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wtbw</em>' attribute.
	 * @see #setWtbw(java.lang.String)
	 */
	public String getWtbw();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getWtbw <em>Wtbw</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wtbw</em>' attribute.
	 * @see #getWtbw()
	 */
	public void setWtbw(String wtbw);

	/**
	 * Returns the value of the '<em><b>Qxlx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qxlx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qxlx</em>' attribute.
	 * @see #setQxlx(java.lang.String)
	 */
	public String getQxlx();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getQxlx <em>Qxlx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qxlx</em>' attribute.
	 * @see #getQxlx()
	 */
	public void setQxlx(String qxlx);

	/**
	 * Returns the value of the '<em><b>Wtsx</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wtsx</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wtsx</em>' attribute.
	 * @see #setWtsx(java.lang.String)
	 */
	public String getWtsx();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getWtsx <em>Wtsx</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wtsx</em>' attribute.
	 * @see #getWtsx()
	 */
	public void setWtsx(String wtsx);

	/**
	 * Returns the value of the '<em><b>Gzdj</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gzdj</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gzdj</em>' attribute.
	 * @see #setGzdj(java.lang.String)
	 */
	public String getGzdj();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getGzdj <em>Gzdj</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gzdj</em>' attribute.
	 * @see #getGzdj()
	 */
	public void setGzdj(String gzdj);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getUpdatetime <em>Updatetime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Updatetime</em>' attribute.
	 * @see #getUpdatetime()
	 */
	public void setUpdatetime(Date updatetime);

	/**
	 * Returns the value of the '<em><b>Updateuserid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Updateuserid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Updateuserid</em>' attribute.
	 * @see #setUpdateuserid(java.lang.String)
	 */
	public String getUpdateuserid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getUpdateuserid <em>Updateuserid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Updateuserid</em>' attribute.
	 * @see #getUpdateuserid()
	 */
	public void setUpdateuserid(String updateuserid);

	/**
	 * Returns the value of the '<em><b>Qxlxname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Qxlxname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Qxlxname</em>' attribute.
	 * @see #setQxlxname(java.lang.String)
	 */
	public String getQxlxname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getQxlxname <em>Qxlxname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Qxlxname</em>' attribute.
	 * @see #getQxlxname()
	 */
	public void setQxlxname(String qxlxname);

	/**
	 * Returns the value of the '<em><b>Wtsxname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Wtsxname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Wtsxname</em>' attribute.
	 * @see #setWtsxname(java.lang.String)
	 */
	public String getWtsxname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectWxlljyDetail#getWtsxname <em>Wtsxname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Wtsxname</em>' attribute.
	 * @see #getWtsxname()
	 */
	public void setWtsxname(String wtsxname);


}