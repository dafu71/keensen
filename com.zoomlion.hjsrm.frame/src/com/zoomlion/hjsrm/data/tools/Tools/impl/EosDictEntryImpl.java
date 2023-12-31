/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.tools.Tools.impl;

import com.zoomlion.hjsrm.data.tools.Tools.EosDictEntry;
import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;

import commonj.sdo.Type;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.EosDictEntryImpl#getDicttypeid <em>Dicttypeid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.EosDictEntryImpl#getDictid <em>Dictid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.EosDictEntryImpl#getDictname <em>Dictname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.EosDictEntryImpl#getStatus <em>Status</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.EosDictEntryImpl#getSortno <em>Sortno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.EosDictEntryImpl#getRank <em>Rank</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.EosDictEntryImpl#getParentid <em>Parentid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.EosDictEntryImpl#getSeqno <em>Seqno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.EosDictEntryImpl#getFilter1 <em>Filter1</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.EosDictEntryImpl#getFilter2 <em>Filter2</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.EosDictEntryImpl#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements EosDictEntry;
 */

public class EosDictEntryImpl extends ExtendedDataObjectImpl implements EosDictEntry {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_DICTTYPEID = 0;
	public final static int INDEX_DICTID = 1;
	public final static int INDEX_DICTNAME = 2;
	public final static int INDEX_STATUS = 3;
	public final static int INDEX_SORTNO = 4;
	public final static int INDEX_RANK = 5;
	public final static int INDEX_PARENTID = 6;
	public final static int INDEX_SEQNO = 7;
	public final static int INDEX_FILTER1 = 8;
	public final static int INDEX_FILTER2 = 9;
	public final static int INDEX_DATAORGID = 10;
	public final static int SDO_PROPERTY_COUNT = 11;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public EosDictEntryImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public EosDictEntryImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Dicttypeid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Dicttypeid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Dicttypeid</em>' attribute.
	 * @see #setDicttypeid(java.lang.String)
	 */
	public String getDicttypeid() {
		return DataUtil.toString(super.getByIndex(INDEX_DICTTYPEID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDicttypeid <em>Dicttypeid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dicttypeid</em>' attribute.
	 * @see #getDicttypeid()
	 */
	public void setDicttypeid(String dicttypeid) {
		super.setByIndex(INDEX_DICTTYPEID, dicttypeid);
	}

	/**
	 * Returns the value of the '<em><b>Dictid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Dictid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Dictid</em>' attribute.
	 * @see #setDictid(java.lang.String)
	 */
	public String getDictid() {
		return DataUtil.toString(super.getByIndex(INDEX_DICTID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDictid <em>Dictid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dictid</em>' attribute.
	 * @see #getDictid()
	 */
	public void setDictid(String dictid) {
		super.setByIndex(INDEX_DICTID, dictid);
	}

	/**
	 * Returns the value of the '<em><b>Dictname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Dictname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Dictname</em>' attribute.
	 * @see #setDictname(java.lang.String)
	 */
	public String getDictname() {
		return DataUtil.toString(super.getByIndex(INDEX_DICTNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDictname <em>Dictname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dictname</em>' attribute.
	 * @see #getDictname()
	 */
	public void setDictname(String dictname) {
		super.setByIndex(INDEX_DICTNAME, dictname);
	}

	/**
	 * Returns the value of the '<em><b>Status</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Status</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Status</em>' attribute.
	 * @see #setStatus(int)
	 */
	public int getStatus() {
		return DataUtil.toInt(super.getByIndex(INDEX_STATUS, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getStatus <em>Status</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Status</em>' attribute.
	 * @see #getStatus()
	 */
	public void setStatus(int status) {
		super.setByIndex(INDEX_STATUS, status);
	}

	/**
	 * Returns the value of the '<em><b>Sortno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Sortno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Sortno</em>' attribute.
	 * @see #setSortno(int)
	 */
	public int getSortno() {
		return DataUtil.toInt(super.getByIndex(INDEX_SORTNO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSortno <em>Sortno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Sortno</em>' attribute.
	 * @see #getSortno()
	 */
	public void setSortno(int sortno) {
		super.setByIndex(INDEX_SORTNO, sortno);
	}

	/**
	 * Returns the value of the '<em><b>Rank</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Rank</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Rank</em>' attribute.
	 * @see #setRank(int)
	 */
	public int getRank() {
		return DataUtil.toInt(super.getByIndex(INDEX_RANK, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRank <em>Rank</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Rank</em>' attribute.
	 * @see #getRank()
	 */
	public void setRank(int rank) {
		super.setByIndex(INDEX_RANK, rank);
	}

	/**
	 * Returns the value of the '<em><b>Parentid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Parentid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Parentid</em>' attribute.
	 * @see #setParentid(java.lang.String)
	 */
	public String getParentid() {
		return DataUtil.toString(super.getByIndex(INDEX_PARENTID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getParentid <em>Parentid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Parentid</em>' attribute.
	 * @see #getParentid()
	 */
	public void setParentid(String parentid) {
		super.setByIndex(INDEX_PARENTID, parentid);
	}

	/**
	 * Returns the value of the '<em><b>Seqno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Seqno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Seqno</em>' attribute.
	 * @see #setSeqno(java.lang.String)
	 */
	public String getSeqno() {
		return DataUtil.toString(super.getByIndex(INDEX_SEQNO, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSeqno <em>Seqno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Seqno</em>' attribute.
	 * @see #getSeqno()
	 */
	public void setSeqno(String seqno) {
		super.setByIndex(INDEX_SEQNO, seqno);
	}

	/**
	 * Returns the value of the '<em><b>Filter1</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Filter1</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Filter1</em>' attribute.
	 * @see #setFilter1(java.lang.String)
	 */
	public String getFilter1() {
		return DataUtil.toString(super.getByIndex(INDEX_FILTER1, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFilter1 <em>Filter1</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Filter1</em>' attribute.
	 * @see #getFilter1()
	 */
	public void setFilter1(String filter1) {
		super.setByIndex(INDEX_FILTER1, filter1);
	}

	/**
	 * Returns the value of the '<em><b>Filter2</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Filter2</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Filter2</em>' attribute.
	 * @see #setFilter2(java.lang.String)
	 */
	public String getFilter2() {
		return DataUtil.toString(super.getByIndex(INDEX_FILTER2, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFilter2 <em>Filter2</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Filter2</em>' attribute.
	 * @see #getFilter2()
	 */
	public void setFilter2(String filter2) {
		super.setByIndex(INDEX_FILTER2, filter2);
	}

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
	public int getDataorgid() {
		return DataUtil.toInt(super.getByIndex(INDEX_DATAORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid) {
		super.setByIndex(INDEX_DATAORGID, dataorgid);
	}


}