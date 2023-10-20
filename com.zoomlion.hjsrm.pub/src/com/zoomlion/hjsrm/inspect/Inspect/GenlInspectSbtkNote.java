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
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getSbtkno <em>Sbtkno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getTkdh <em>Tkdh</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getLifnr <em>Lifnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getMatnr <em>Matnr</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getJyy <em>Jyy</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getJyrq <em>Jyrq</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getTksl <em>Tksl</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getGzxt <em>Gzxt</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getGzjg <em>Gzjg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getGzxs <em>Gzxs</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getClyj <em>Clyj</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getTkyy <em>Tkyy</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getStatu <em>Statu</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getWerks <em>Werks</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getCreatetime <em>Createtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getCreateuserid <em>Createuserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getModifytime <em>Modifytime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getModifyuserid <em>Modifyuserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getGzxtname <em>Gzxtname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getGzjgname <em>Gzjgname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getGzxsname <em>Gzxsname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getZatwrt <em>Zatwrt</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface GenlInspectSbtkNote extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.inspect.Inspect", "GenlInspectSbtkNote");

	public final static IObjectFactory<GenlInspectSbtkNote> FACTORY = new IObjectFactory<GenlInspectSbtkNote>() {
		public GenlInspectSbtkNote create() {
			return (GenlInspectSbtkNote) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Sbtkno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sbtkno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sbtkno</em>' attribute.
	 * @see #setSbtkno(java.lang.String)
	 */
	public String getSbtkno();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getSbtkno <em>Sbtkno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sbtkno</em>' attribute.
	 * @see #getSbtkno()
	 */
	public void setSbtkno(String sbtkno);

	/**
	 * Returns the value of the '<em><b>Tkdh</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Tkdh</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Tkdh</em>' attribute.
	 * @see #setTkdh(java.lang.String)
	 */
	public String getTkdh();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getTkdh <em>Tkdh</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Tkdh</em>' attribute.
	 * @see #getTkdh()
	 */
	public void setTkdh(String tkdh);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getLifnr <em>Lifnr</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getMatnr <em>Matnr</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Matnr</em>' attribute.
	 * @see #getMatnr()
	 */
	public void setMatnr(String matnr);

	/**
	 * Returns the value of the '<em><b>Jyy</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jyy</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jyy</em>' attribute.
	 * @see #setJyy(java.lang.String)
	 */
	public String getJyy();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getJyy <em>Jyy</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jyy</em>' attribute.
	 * @see #getJyy()
	 */
	public void setJyy(String jyy);

	/**
	 * Returns the value of the '<em><b>Jyrq</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Jyrq</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Jyrq</em>' attribute.
	 * @see #setJyrq(java.util.Date)
	 */
	public Date getJyrq();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getJyrq <em>Jyrq</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Jyrq</em>' attribute.
	 * @see #getJyrq()
	 */
	public void setJyrq(Date jyrq);

	/**
	 * Returns the value of the '<em><b>Tksl</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Tksl</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Tksl</em>' attribute.
	 * @see #setTksl(java.lang.String)
	 */
	public String getTksl();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getTksl <em>Tksl</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Tksl</em>' attribute.
	 * @see #getTksl()
	 */
	public void setTksl(String tksl);

	/**
	 * Returns the value of the '<em><b>Gzxt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gzxt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gzxt</em>' attribute.
	 * @see #setGzxt(java.lang.String)
	 */
	public String getGzxt();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getGzxt <em>Gzxt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gzxt</em>' attribute.
	 * @see #getGzxt()
	 */
	public void setGzxt(String gzxt);

	/**
	 * Returns the value of the '<em><b>Gzjg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gzjg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gzjg</em>' attribute.
	 * @see #setGzjg(java.lang.String)
	 */
	public String getGzjg();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getGzjg <em>Gzjg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gzjg</em>' attribute.
	 * @see #getGzjg()
	 */
	public void setGzjg(String gzjg);

	/**
	 * Returns the value of the '<em><b>Gzxs</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gzxs</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gzxs</em>' attribute.
	 * @see #setGzxs(java.lang.String)
	 */
	public String getGzxs();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getGzxs <em>Gzxs</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gzxs</em>' attribute.
	 * @see #getGzxs()
	 */
	public void setGzxs(String gzxs);

	/**
	 * Returns the value of the '<em><b>Clyj</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Clyj</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Clyj</em>' attribute.
	 * @see #setClyj(java.lang.String)
	 */
	public String getClyj();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getClyj <em>Clyj</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Clyj</em>' attribute.
	 * @see #getClyj()
	 */
	public void setClyj(String clyj);

	/**
	 * Returns the value of the '<em><b>Tkyy</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Tkyy</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Tkyy</em>' attribute.
	 * @see #setTkyy(java.lang.String)
	 */
	public String getTkyy();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getTkyy <em>Tkyy</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Tkyy</em>' attribute.
	 * @see #getTkyy()
	 */
	public void setTkyy(String tkyy);

	/**
	 * Returns the value of the '<em><b>Statu</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Statu</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Statu</em>' attribute.
	 * @see #setStatu(java.lang.String)
	 */
	public String getStatu();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getStatu <em>Statu</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Statu</em>' attribute.
	 * @see #getStatu()
	 */
	public void setStatu(String statu);

	/**
	 * Returns the value of the '<em><b>Werks</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Werks</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Werks</em>' attribute.
	 * @see #setWerks(java.lang.String)
	 */
	public String getWerks();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getWerks <em>Werks</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Werks</em>' attribute.
	 * @see #getWerks()
	 */
	public void setWerks(String werks);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getCreatetime <em>Createtime</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getCreateuserid <em>Createuserid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createuserid</em>' attribute.
	 * @see #getCreateuserid()
	 */
	public void setCreateuserid(String createuserid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getModifytime <em>Modifytime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifytime</em>' attribute.
	 * @see #getModifytime()
	 */
	public void setModifytime(Date modifytime);

	/**
	 * Returns the value of the '<em><b>Modifyuserid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Modifyuserid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Modifyuserid</em>' attribute.
	 * @see #setModifyuserid(java.lang.String)
	 */
	public String getModifyuserid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getModifyuserid <em>Modifyuserid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Modifyuserid</em>' attribute.
	 * @see #getModifyuserid()
	 */
	public void setModifyuserid(String modifyuserid);

	/**
	 * Returns the value of the '<em><b>Gzxtname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gzxtname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gzxtname</em>' attribute.
	 * @see #setGzxtname(java.lang.String)
	 */
	public String getGzxtname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getGzxtname <em>Gzxtname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gzxtname</em>' attribute.
	 * @see #getGzxtname()
	 */
	public void setGzxtname(String gzxtname);

	/**
	 * Returns the value of the '<em><b>Gzjgname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gzjgname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gzjgname</em>' attribute.
	 * @see #setGzjgname(java.lang.String)
	 */
	public String getGzjgname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getGzjgname <em>Gzjgname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gzjgname</em>' attribute.
	 * @see #getGzjgname()
	 */
	public void setGzjgname(String gzjgname);

	/**
	 * Returns the value of the '<em><b>Gzxsname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gzxsname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gzxsname</em>' attribute.
	 * @see #setGzxsname(java.lang.String)
	 */
	public String getGzxsname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getGzxsname <em>Gzxsname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gzxsname</em>' attribute.
	 * @see #getGzxsname()
	 */
	public void setGzxsname(String gzxsname);

	/**
	 * Returns the value of the '<em><b>Zatwrt</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Zatwrt</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Zatwrt</em>' attribute.
	 * @see #setZatwrt(java.lang.String)
	 */
	public String getZatwrt();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.inspect.Inspect.GenlInspectSbtkNote#getZatwrt <em>Zatwrt</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Zatwrt</em>' attribute.
	 * @see #getZatwrt()
	 */
	public void setZatwrt(String zatwrt);


}