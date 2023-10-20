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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getId <em>Id</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getBusisnno <em>Busisnno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getBusisnname <em>Busisnname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getPrefix <em>Prefix</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getSeqname <em>Seqname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getSerialmod <em>Serialmod</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getIsdate <em>Isdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getIstime <em>Istime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getIsorg <em>Isorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getIsfill <em>Isfill</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getFilllen <em>Filllen</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getStatus <em>Status</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getBegintime <em>Begintime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getEndtime <em>Endtime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getGrpid <em>Grpid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getGrpname <em>Grpname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getSubgrpid <em>Subgrpid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getSubgrpname <em>Subgrpname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getRecordorg <em>Recordorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getBelongorg <em>Belongorg</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TAtSncfg extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.data.tools.Tools", "TAtSncfg");

	public final static IObjectFactory<TAtSncfg> FACTORY = new IObjectFactory<TAtSncfg>() {
		public TAtSncfg create() {
			return (TAtSncfg) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Id</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Id</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Id</em>' attribute.
	 * @see #setId(long)
	 */
	public long getId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getId <em>Id</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Id</em>' attribute.
	 * @see #getId()
	 */
	public void setId(long id);

	/**
	 * Returns the value of the '<em><b>Busisnno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Busisnno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Busisnno</em>' attribute.
	 * @see #setBusisnno(long)
	 */
	public long getBusisnno();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getBusisnno <em>Busisnno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busisnno</em>' attribute.
	 * @see #getBusisnno()
	 */
	public void setBusisnno(long busisnno);

	/**
	 * Returns the value of the '<em><b>Busisnname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Busisnname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Busisnname</em>' attribute.
	 * @see #setBusisnname(java.lang.String)
	 */
	public String getBusisnname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getBusisnname <em>Busisnname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busisnname</em>' attribute.
	 * @see #getBusisnname()
	 */
	public void setBusisnname(String busisnname);

	/**
	 * Returns the value of the '<em><b>Prefix</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Prefix</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Prefix</em>' attribute.
	 * @see #setPrefix(java.lang.String)
	 */
	public String getPrefix();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getPrefix <em>Prefix</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Prefix</em>' attribute.
	 * @see #getPrefix()
	 */
	public void setPrefix(String prefix);

	/**
	 * Returns the value of the '<em><b>Seqname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Seqname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Seqname</em>' attribute.
	 * @see #setSeqname(java.lang.String)
	 */
	public String getSeqname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getSeqname <em>Seqname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Seqname</em>' attribute.
	 * @see #getSeqname()
	 */
	public void setSeqname(String seqname);

	/**
	 * Returns the value of the '<em><b>Serialmod</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Serialmod</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Serialmod</em>' attribute.
	 * @see #setSerialmod(long)
	 */
	public long getSerialmod();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getSerialmod <em>Serialmod</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Serialmod</em>' attribute.
	 * @see #getSerialmod()
	 */
	public void setSerialmod(long serialmod);

	/**
	 * Returns the value of the '<em><b>Isdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isdate</em>' attribute.
	 * @see #setIsdate(long)
	 */
	public long getIsdate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getIsdate <em>Isdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isdate</em>' attribute.
	 * @see #getIsdate()
	 */
	public void setIsdate(long isdate);

	/**
	 * Returns the value of the '<em><b>Istime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Istime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Istime</em>' attribute.
	 * @see #setIstime(long)
	 */
	public long getIstime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getIstime <em>Istime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Istime</em>' attribute.
	 * @see #getIstime()
	 */
	public void setIstime(long istime);

	/**
	 * Returns the value of the '<em><b>Isorg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isorg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isorg</em>' attribute.
	 * @see #setIsorg(long)
	 */
	public long getIsorg();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getIsorg <em>Isorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isorg</em>' attribute.
	 * @see #getIsorg()
	 */
	public void setIsorg(long isorg);

	/**
	 * Returns the value of the '<em><b>Isfill</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Isfill</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Isfill</em>' attribute.
	 * @see #setIsfill(long)
	 */
	public long getIsfill();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getIsfill <em>Isfill</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Isfill</em>' attribute.
	 * @see #getIsfill()
	 */
	public void setIsfill(long isfill);

	/**
	 * Returns the value of the '<em><b>Filllen</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Filllen</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Filllen</em>' attribute.
	 * @see #setFilllen(long)
	 */
	public long getFilllen();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getFilllen <em>Filllen</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Filllen</em>' attribute.
	 * @see #getFilllen()
	 */
	public void setFilllen(long filllen);

	/**
	 * Returns the value of the '<em><b>Status</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Status</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Status</em>' attribute.
	 * @see #setStatus(java.lang.String)
	 */
	public String getStatus();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getStatus <em>Status</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Status</em>' attribute.
	 * @see #getStatus()
	 */
	public void setStatus(String status);

	/**
	 * Returns the value of the '<em><b>Begintime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Begintime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Begintime</em>' attribute.
	 * @see #setBegintime(java.util.Date)
	 */
	public Date getBegintime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getBegintime <em>Begintime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Begintime</em>' attribute.
	 * @see #getBegintime()
	 */
	public void setBegintime(Date begintime);

	/**
	 * Returns the value of the '<em><b>Endtime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Endtime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Endtime</em>' attribute.
	 * @see #setEndtime(java.util.Date)
	 */
	public Date getEndtime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getEndtime <em>Endtime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Endtime</em>' attribute.
	 * @see #getEndtime()
	 */
	public void setEndtime(Date endtime);

	/**
	 * Returns the value of the '<em><b>Grpid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Grpid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Grpid</em>' attribute.
	 * @see #setGrpid(long)
	 */
	public long getGrpid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getGrpid <em>Grpid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Grpid</em>' attribute.
	 * @see #getGrpid()
	 */
	public void setGrpid(long grpid);

	/**
	 * Returns the value of the '<em><b>Grpname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Grpname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Grpname</em>' attribute.
	 * @see #setGrpname(java.lang.String)
	 */
	public String getGrpname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getGrpname <em>Grpname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Grpname</em>' attribute.
	 * @see #getGrpname()
	 */
	public void setGrpname(String grpname);

	/**
	 * Returns the value of the '<em><b>Subgrpid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Subgrpid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Subgrpid</em>' attribute.
	 * @see #setSubgrpid(long)
	 */
	public long getSubgrpid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getSubgrpid <em>Subgrpid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Subgrpid</em>' attribute.
	 * @see #getSubgrpid()
	 */
	public void setSubgrpid(long subgrpid);

	/**
	 * Returns the value of the '<em><b>Subgrpname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Subgrpname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Subgrpname</em>' attribute.
	 * @see #setSubgrpname(java.lang.String)
	 */
	public String getSubgrpname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getSubgrpname <em>Subgrpname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Subgrpname</em>' attribute.
	 * @see #getSubgrpname()
	 */
	public void setSubgrpname(String subgrpname);

	/**
	 * Returns the value of the '<em><b>Recordorg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Recordorg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Recordorg</em>' attribute.
	 * @see #setRecordorg(long)
	 */
	public long getRecordorg();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getRecordorg <em>Recordorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Recordorg</em>' attribute.
	 * @see #getRecordorg()
	 */
	public void setRecordorg(long recordorg);

	/**
	 * Returns the value of the '<em><b>Belongorg</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Belongorg</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Belongorg</em>' attribute.
	 * @see #setBelongorg(long)
	 */
	public long getBelongorg();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getBelongorg <em>Belongorg</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Belongorg</em>' attribute.
	 * @see #getBelongorg()
	 */
	public void setBelongorg(long belongorg);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getCreateby <em>Createby</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getModifyby <em>Modifyby</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getUpdatetime <em>Updatetime</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtSncfg#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);


}