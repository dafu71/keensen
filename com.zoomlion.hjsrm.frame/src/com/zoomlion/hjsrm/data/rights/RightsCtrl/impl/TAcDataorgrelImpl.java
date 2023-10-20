/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.rights.RightsCtrl.impl;

import com.zoomlion.hjsrm.data.rights.RightsCtrl.TAcDataorgrel;
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
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcDataorgrelImpl#getSnid <em>Snid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcDataorgrelImpl#getRelid <em>Relid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcDataorgrelImpl#getOrgid <em>Orgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcDataorgrelImpl#getBusiitemid <em>Busiitemid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcDataorgrelImpl#getPositionid <em>Positionid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcDataorgrelImpl#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcDataorgrelImpl#getRighttype <em>Righttype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.rights.RightsCtrl.impl.TAcDataorgrelImpl#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TAcDataorgrel;
 */

public class TAcDataorgrelImpl extends ExtendedDataObjectImpl implements TAcDataorgrel {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_SNID = 0;
	public final static int INDEX_RELID = 1;
	public final static int INDEX_ORGID = 2;
	public final static int INDEX_BUSIITEMID = 3;
	public final static int INDEX_POSITIONID = 4;
	public final static int INDEX_REMARK = 5;
	public final static int INDEX_RIGHTTYPE = 6;
	public final static int INDEX_DATAORGID = 7;
	public final static int SDO_PROPERTY_COUNT = 8;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAcDataorgrelImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAcDataorgrelImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

	/**
	 * Returns the value of the '<em><b>Snid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Snid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Snid</em>' attribute.
	 * @see #setSnid(int)
	 */
	public int getSnid() {
		return DataUtil.toInt(super.getByIndex(INDEX_SNID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getSnid <em>Snid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Snid</em>' attribute.
	 * @see #getSnid()
	 */
	public void setSnid(int snid) {
		super.setByIndex(INDEX_SNID, snid);
	}

	/**
	 * Returns the value of the '<em><b>Relid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Relid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Relid</em>' attribute.
	 * @see #setRelid(int)
	 */
	public int getRelid() {
		return DataUtil.toInt(super.getByIndex(INDEX_RELID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRelid <em>Relid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Relid</em>' attribute.
	 * @see #getRelid()
	 */
	public void setRelid(int relid) {
		super.setByIndex(INDEX_RELID, relid);
	}

	/**
	 * Returns the value of the '<em><b>Orgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Orgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Orgid</em>' attribute.
	 * @see #setOrgid(int)
	 */
	public int getOrgid() {
		return DataUtil.toInt(super.getByIndex(INDEX_ORGID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOrgid <em>Orgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgid</em>' attribute.
	 * @see #getOrgid()
	 */
	public void setOrgid(int orgid) {
		super.setByIndex(INDEX_ORGID, orgid);
	}

	/**
	 * Returns the value of the '<em><b>Busiitemid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Busiitemid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Busiitemid</em>' attribute.
	 * @see #setBusiitemid(java.lang.String)
	 */
	public String getBusiitemid() {
		return DataUtil.toString(super.getByIndex(INDEX_BUSIITEMID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getBusiitemid <em>Busiitemid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Busiitemid</em>' attribute.
	 * @see #getBusiitemid()
	 */
	public void setBusiitemid(String busiitemid) {
		super.setByIndex(INDEX_BUSIITEMID, busiitemid);
	}

	/**
	 * Returns the value of the '<em><b>Positionid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Positionid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Positionid</em>' attribute.
	 * @see #setPositionid(int)
	 */
	public int getPositionid() {
		return DataUtil.toInt(super.getByIndex(INDEX_POSITIONID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getPositionid <em>Positionid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Positionid</em>' attribute.
	 * @see #getPositionid()
	 */
	public void setPositionid(int positionid) {
		super.setByIndex(INDEX_POSITIONID, positionid);
	}

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
	public String getRemark() {
		return DataUtil.toString(super.getByIndex(INDEX_REMARK, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRemark <em>Remark</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Remark</em>' attribute.
	 * @see #getRemark()
	 */
	public void setRemark(String remark) {
		super.setByIndex(INDEX_REMARK, remark);
	}

	/**
	 * Returns the value of the '<em><b>Righttype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Righttype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Righttype</em>' attribute.
	 * @see #setRighttype(java.lang.String)
	 */
	public String getRighttype() {
		return DataUtil.toString(super.getByIndex(INDEX_RIGHTTYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRighttype <em>Righttype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Righttype</em>' attribute.
	 * @see #getRighttype()
	 */
	public void setRighttype(String righttype) {
		super.setByIndex(INDEX_RIGHTTYPE, righttype);
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