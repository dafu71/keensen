/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.tools.Tools;

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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser#getNoticeid <em>Noticeid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser#getReadstatus <em>Readstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser#getReadtime <em>Readtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser#getRecvuserid <em>Recvuserid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser#getRecvusername <em>Recvusername</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TAtNoticerecvuser extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.data.tools.Tools", "TAtNoticerecvuser");

	public final static IObjectFactory<TAtNoticerecvuser> FACTORY = new IObjectFactory<TAtNoticerecvuser>() {
		public TAtNoticerecvuser create() {
			return (TAtNoticerecvuser) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Noticeid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Noticeid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Noticeid</em>' attribute.
	 * @see #setNoticeid(long)
	 */
	public long getNoticeid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser#getNoticeid <em>Noticeid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Noticeid</em>' attribute.
	 * @see #getNoticeid()
	 */
	public void setNoticeid(long noticeid);

	/**
	 * Returns the value of the '<em><b>Readstatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Readstatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Readstatus</em>' attribute.
	 * @see #setReadstatus(long)
	 */
	public long getReadstatus();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser#getReadstatus <em>Readstatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Readstatus</em>' attribute.
	 * @see #getReadstatus()
	 */
	public void setReadstatus(long readstatus);

	/**
	 * Returns the value of the '<em><b>Readtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Readtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Readtime</em>' attribute.
	 * @see #setReadtime(java.util.Date)
	 */
	public Date getReadtime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser#getReadtime <em>Readtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Readtime</em>' attribute.
	 * @see #getReadtime()
	 */
	public void setReadtime(Date readtime);

	/**
	 * Returns the value of the '<em><b>Recvuserid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recvuserid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recvuserid</em>' attribute.
	 * @see #setRecvuserid(java.lang.String)
	 */
	public String getRecvuserid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser#getRecvuserid <em>Recvuserid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recvuserid</em>' attribute.
	 * @see #getRecvuserid()
	 */
	public void setRecvuserid(String recvuserid);

	/**
	 * Returns the value of the '<em><b>Recvusername</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recvusername</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recvusername</em>' attribute.
	 * @see #setRecvusername(java.lang.String)
	 */
	public String getRecvusername();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser#getRecvusername <em>Recvusername</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recvusername</em>' attribute.
	 * @see #getRecvusername()
	 */
	public void setRecvusername(String recvusername);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtNoticerecvuser#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);


}