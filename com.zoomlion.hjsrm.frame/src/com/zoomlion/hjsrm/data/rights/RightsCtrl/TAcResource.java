/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.rights.RightsCtrl;

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
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getResid <em>Resid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getParentresid <em>Parentresid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getRescode <em>Rescode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getRestype <em>Restype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getRespath <em>Respath</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getParaminfo <em>Paraminfo</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getResname <em>Resname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getReslabel <em>Reslabel</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getCompackname <em>Compackname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getReslevel <em>Reslevel</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getResseq <em>Resseq</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getIsleaf <em>Isleaf</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getSubcount <em>Subcount</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getDataorgid <em>Dataorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getIscheck <em>Ischeck</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getResdesc <em>Resdesc</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getUientry <em>Uientry</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getRootid <em>Rootid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getDisplayorder <em>Displayorder</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getImagepath <em>Imagepath</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getExpandpath <em>Expandpath</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getOpenmode <em>Openmode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getIsbizmap <em>Isbizmap</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TAcResource extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.data.rights.RightsCtrl", "TAcResource");

	public final static IObjectFactory<TAcResource> FACTORY = new IObjectFactory<TAcResource>() {
		public TAcResource create() {
			return (TAcResource) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Resid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Resid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Resid</em>' attribute.
	 * @see #setResid(int)
	 */
	public int getResid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getResid <em>Resid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Resid</em>' attribute.
	 * @see #getResid()
	 */
	public void setResid(int resid);

	/**
	 * Returns the value of the '<em><b>Parentresid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Parentresid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Parentresid</em>' attribute.
	 * @see #setParentresid(int)
	 */
	public int getParentresid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getParentresid <em>Parentresid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Parentresid</em>' attribute.
	 * @see #getParentresid()
	 */
	public void setParentresid(int parentresid);

	/**
	 * Returns the value of the '<em><b>Rescode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Rescode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Rescode</em>' attribute.
	 * @see #setRescode(java.lang.String)
	 */
	public String getRescode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getRescode <em>Rescode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Rescode</em>' attribute.
	 * @see #getRescode()
	 */
	public void setRescode(String rescode);

	/**
	 * Returns the value of the '<em><b>Restype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Restype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Restype</em>' attribute.
	 * @see #setRestype(java.lang.String)
	 */
	public String getRestype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getRestype <em>Restype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Restype</em>' attribute.
	 * @see #getRestype()
	 */
	public void setRestype(String restype);

	/**
	 * Returns the value of the '<em><b>Respath</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Respath</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Respath</em>' attribute.
	 * @see #setRespath(java.lang.String)
	 */
	public String getRespath();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getRespath <em>Respath</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Respath</em>' attribute.
	 * @see #getRespath()
	 */
	public void setRespath(String respath);

	/**
	 * Returns the value of the '<em><b>Paraminfo</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Paraminfo</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Paraminfo</em>' attribute.
	 * @see #setParaminfo(java.lang.String)
	 */
	public String getParaminfo();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getParaminfo <em>Paraminfo</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Paraminfo</em>' attribute.
	 * @see #getParaminfo()
	 */
	public void setParaminfo(String paraminfo);

	/**
	 * Returns the value of the '<em><b>Resname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Resname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Resname</em>' attribute.
	 * @see #setResname(java.lang.String)
	 */
	public String getResname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getResname <em>Resname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Resname</em>' attribute.
	 * @see #getResname()
	 */
	public void setResname(String resname);

	/**
	 * Returns the value of the '<em><b>Reslabel</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reslabel</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reslabel</em>' attribute.
	 * @see #setReslabel(java.lang.String)
	 */
	public String getReslabel();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getReslabel <em>Reslabel</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reslabel</em>' attribute.
	 * @see #getReslabel()
	 */
	public void setReslabel(String reslabel);

	/**
	 * Returns the value of the '<em><b>Compackname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Compackname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Compackname</em>' attribute.
	 * @see #setCompackname(java.lang.String)
	 */
	public String getCompackname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getCompackname <em>Compackname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Compackname</em>' attribute.
	 * @see #getCompackname()
	 */
	public void setCompackname(String compackname);

	/**
	 * Returns the value of the '<em><b>Reslevel</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Reslevel</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Reslevel</em>' attribute.
	 * @see #setReslevel(long)
	 */
	public long getReslevel();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getReslevel <em>Reslevel</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Reslevel</em>' attribute.
	 * @see #getReslevel()
	 */
	public void setReslevel(long reslevel);

	/**
	 * Returns the value of the '<em><b>Resseq</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Resseq</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Resseq</em>' attribute.
	 * @see #setResseq(java.lang.String)
	 */
	public String getResseq();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getResseq <em>Resseq</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Resseq</em>' attribute.
	 * @see #getResseq()
	 */
	public void setResseq(String resseq);

	/**
	 * Returns the value of the '<em><b>Isleaf</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isleaf</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isleaf</em>' attribute.
	 * @see #setIsleaf(java.lang.String)
	 */
	public String getIsleaf();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getIsleaf <em>Isleaf</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isleaf</em>' attribute.
	 * @see #getIsleaf()
	 */
	public void setIsleaf(String isleaf);

	/**
	 * Returns the value of the '<em><b>Subcount</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Subcount</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Subcount</em>' attribute.
	 * @see #setSubcount(int)
	 */
	public int getSubcount();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getSubcount <em>Subcount</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Subcount</em>' attribute.
	 * @see #getSubcount()
	 */
	public void setSubcount(int subcount);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getCreateby <em>Createby</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Createby</em>' attribute.
	 * @see #getCreateby()
	 */
	public void setCreateby(String createby);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getModifyby <em>Modifyby</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getUpdatetime <em>Updatetime</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);

	/**
	 * Returns the value of the '<em><b>Ischeck</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ischeck</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ischeck</em>' attribute.
	 * @see #setIscheck(java.lang.String)
	 */
	public String getIscheck();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getIscheck <em>Ischeck</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ischeck</em>' attribute.
	 * @see #getIscheck()
	 */
	public void setIscheck(String ischeck);

	/**
	 * Returns the value of the '<em><b>Resdesc</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Resdesc</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Resdesc</em>' attribute.
	 * @see #setResdesc(java.lang.String)
	 */
	public String getResdesc();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getResdesc <em>Resdesc</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Resdesc</em>' attribute.
	 * @see #getResdesc()
	 */
	public void setResdesc(String resdesc);

	/**
	 * Returns the value of the '<em><b>Uientry</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Uientry</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Uientry</em>' attribute.
	 * @see #setUientry(java.lang.String)
	 */
	public String getUientry();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getUientry <em>Uientry</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Uientry</em>' attribute.
	 * @see #getUientry()
	 */
	public void setUientry(String uientry);

	/**
	 * Returns the value of the '<em><b>Rootid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Rootid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Rootid</em>' attribute.
	 * @see #setRootid(int)
	 */
	public int getRootid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getRootid <em>Rootid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Rootid</em>' attribute.
	 * @see #getRootid()
	 */
	public void setRootid(int rootid);

	/**
	 * Returns the value of the '<em><b>Displayorder</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Displayorder</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Displayorder</em>' attribute.
	 * @see #setDisplayorder(int)
	 */
	public int getDisplayorder();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getDisplayorder <em>Displayorder</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Displayorder</em>' attribute.
	 * @see #getDisplayorder()
	 */
	public void setDisplayorder(int displayorder);

	/**
	 * Returns the value of the '<em><b>Imagepath</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Imagepath</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Imagepath</em>' attribute.
	 * @see #setImagepath(java.lang.String)
	 */
	public String getImagepath();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getImagepath <em>Imagepath</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Imagepath</em>' attribute.
	 * @see #getImagepath()
	 */
	public void setImagepath(String imagepath);

	/**
	 * Returns the value of the '<em><b>Expandpath</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Expandpath</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Expandpath</em>' attribute.
	 * @see #setExpandpath(java.lang.String)
	 */
	public String getExpandpath();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getExpandpath <em>Expandpath</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Expandpath</em>' attribute.
	 * @see #getExpandpath()
	 */
	public void setExpandpath(String expandpath);

	/**
	 * Returns the value of the '<em><b>Openmode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Openmode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Openmode</em>' attribute.
	 * @see #setOpenmode(java.lang.String)
	 */
	public String getOpenmode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getOpenmode <em>Openmode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Openmode</em>' attribute.
	 * @see #getOpenmode()
	 */
	public void setOpenmode(String openmode);

	/**
	 * Returns the value of the '<em><b>Isbizmap</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isbizmap</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isbizmap</em>' attribute.
	 * @see #setIsbizmap(java.lang.String)
	 */
	public String getIsbizmap();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcResource#getIsbizmap <em>Isbizmap</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isbizmap</em>' attribute.
	 * @see #getIsbizmap()
	 */
	public void setIsbizmap(String isbizmap);


}