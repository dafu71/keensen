/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.org.Organization;

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
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getEmpid <em>Empid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getEmpcode <em>Empcode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getEmpname <em>Empname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getRealname <em>Realname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getGender <em>Gender</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getBirthdate <em>Birthdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getPosition <em>Position</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getEmpstatus <em>Empstatus</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getCardtype <em>Cardtype</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getCardno <em>Cardno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getIndate <em>Indate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getOutdate <em>Outdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getOtel <em>Otel</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getOaddress <em>Oaddress</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getOzipcode <em>Ozipcode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getOemail <em>Oemail</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getFaxno <em>Faxno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getMobileno <em>Mobileno</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getMsn <em>Msn</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getHtel <em>Htel</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getHaddress <em>Haddress</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getHzipcode <em>Hzipcode</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getPemail <em>Pemail</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getParty <em>Party</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getDegree <em>Degree</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getMajor <em>Major</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getSpecialty <em>Specialty</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getWorkexp <em>Workexp</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getRegdate <em>Regdate</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getOrgidlist <em>Orgidlist</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getMainorgid <em>Mainorgid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getRemark <em>Remark</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getCreateby <em>Createby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getModifyby <em>Modifyby</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getUpdatetime <em>Updatetime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getDelflag <em>Delflag</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface VOmEmployeeTrs extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.data.org.Organization", "VOmEmployeeTrs");

	public final static IObjectFactory<VOmEmployeeTrs> FACTORY = new IObjectFactory<VOmEmployeeTrs>() {
		public VOmEmployeeTrs create() {
			return (VOmEmployeeTrs) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>Empid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Empid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Empid</em>' attribute.
	 * @see #setEmpid(int)
	 */
	public int getEmpid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getEmpid <em>Empid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Empid</em>' attribute.
	 * @see #getEmpid()
	 */
	public void setEmpid(int empid);

	/**
	 * Returns the value of the '<em><b>Empcode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Empcode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Empcode</em>' attribute.
	 * @see #setEmpcode(java.lang.String)
	 */
	public String getEmpcode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getEmpcode <em>Empcode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Empcode</em>' attribute.
	 * @see #getEmpcode()
	 */
	public void setEmpcode(String empcode);

	/**
	 * Returns the value of the '<em><b>Empname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Empname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Empname</em>' attribute.
	 * @see #setEmpname(java.lang.String)
	 */
	public String getEmpname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getEmpname <em>Empname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Empname</em>' attribute.
	 * @see #getEmpname()
	 */
	public void setEmpname(String empname);

	/**
	 * Returns the value of the '<em><b>Realname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Realname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Realname</em>' attribute.
	 * @see #setRealname(java.lang.String)
	 */
	public String getRealname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getRealname <em>Realname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Realname</em>' attribute.
	 * @see #getRealname()
	 */
	public void setRealname(String realname);

	/**
	 * Returns the value of the '<em><b>Gender</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Gender</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Gender</em>' attribute.
	 * @see #setGender(java.lang.String)
	 */
	public String getGender();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getGender <em>Gender</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Gender</em>' attribute.
	 * @see #getGender()
	 */
	public void setGender(String gender);

	/**
	 * Returns the value of the '<em><b>Birthdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Birthdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Birthdate</em>' attribute.
	 * @see #setBirthdate(java.util.Date)
	 */
	public Date getBirthdate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getBirthdate <em>Birthdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Birthdate</em>' attribute.
	 * @see #getBirthdate()
	 */
	public void setBirthdate(Date birthdate);

	/**
	 * Returns the value of the '<em><b>Position</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Position</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Position</em>' attribute.
	 * @see #setPosition(int)
	 */
	public int getPosition();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getPosition <em>Position</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Position</em>' attribute.
	 * @see #getPosition()
	 */
	public void setPosition(int position);

	/**
	 * Returns the value of the '<em><b>Empstatus</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Empstatus</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Empstatus</em>' attribute.
	 * @see #setEmpstatus(java.lang.String)
	 */
	public String getEmpstatus();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getEmpstatus <em>Empstatus</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Empstatus</em>' attribute.
	 * @see #getEmpstatus()
	 */
	public void setEmpstatus(String empstatus);

	/**
	 * Returns the value of the '<em><b>Cardtype</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Cardtype</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Cardtype</em>' attribute.
	 * @see #setCardtype(java.lang.String)
	 */
	public String getCardtype();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getCardtype <em>Cardtype</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cardtype</em>' attribute.
	 * @see #getCardtype()
	 */
	public void setCardtype(String cardtype);

	/**
	 * Returns the value of the '<em><b>Cardno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Cardno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Cardno</em>' attribute.
	 * @see #setCardno(java.lang.String)
	 */
	public String getCardno();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getCardno <em>Cardno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Cardno</em>' attribute.
	 * @see #getCardno()
	 */
	public void setCardno(String cardno);

	/**
	 * Returns the value of the '<em><b>Indate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Indate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Indate</em>' attribute.
	 * @see #setIndate(java.util.Date)
	 */
	public Date getIndate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getIndate <em>Indate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Indate</em>' attribute.
	 * @see #getIndate()
	 */
	public void setIndate(Date indate);

	/**
	 * Returns the value of the '<em><b>Outdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Outdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Outdate</em>' attribute.
	 * @see #setOutdate(java.util.Date)
	 */
	public Date getOutdate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getOutdate <em>Outdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Outdate</em>' attribute.
	 * @see #getOutdate()
	 */
	public void setOutdate(Date outdate);

	/**
	 * Returns the value of the '<em><b>Otel</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Otel</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Otel</em>' attribute.
	 * @see #setOtel(java.lang.String)
	 */
	public String getOtel();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getOtel <em>Otel</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Otel</em>' attribute.
	 * @see #getOtel()
	 */
	public void setOtel(String otel);

	/**
	 * Returns the value of the '<em><b>Oaddress</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Oaddress</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Oaddress</em>' attribute.
	 * @see #setOaddress(java.lang.String)
	 */
	public String getOaddress();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getOaddress <em>Oaddress</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Oaddress</em>' attribute.
	 * @see #getOaddress()
	 */
	public void setOaddress(String oaddress);

	/**
	 * Returns the value of the '<em><b>Ozipcode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Ozipcode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ozipcode</em>' attribute.
	 * @see #setOzipcode(java.lang.String)
	 */
	public String getOzipcode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getOzipcode <em>Ozipcode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ozipcode</em>' attribute.
	 * @see #getOzipcode()
	 */
	public void setOzipcode(String ozipcode);

	/**
	 * Returns the value of the '<em><b>Oemail</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Oemail</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Oemail</em>' attribute.
	 * @see #setOemail(java.lang.String)
	 */
	public String getOemail();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getOemail <em>Oemail</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Oemail</em>' attribute.
	 * @see #getOemail()
	 */
	public void setOemail(String oemail);

	/**
	 * Returns the value of the '<em><b>Faxno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Faxno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Faxno</em>' attribute.
	 * @see #setFaxno(java.lang.String)
	 */
	public String getFaxno();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getFaxno <em>Faxno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Faxno</em>' attribute.
	 * @see #getFaxno()
	 */
	public void setFaxno(String faxno);

	/**
	 * Returns the value of the '<em><b>Mobileno</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mobileno</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mobileno</em>' attribute.
	 * @see #setMobileno(java.lang.String)
	 */
	public String getMobileno();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getMobileno <em>Mobileno</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mobileno</em>' attribute.
	 * @see #getMobileno()
	 */
	public void setMobileno(String mobileno);

	/**
	 * Returns the value of the '<em><b>Msn</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Msn</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Msn</em>' attribute.
	 * @see #setMsn(java.lang.String)
	 */
	public String getMsn();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getMsn <em>Msn</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Msn</em>' attribute.
	 * @see #getMsn()
	 */
	public void setMsn(String msn);

	/**
	 * Returns the value of the '<em><b>Htel</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Htel</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Htel</em>' attribute.
	 * @see #setHtel(java.lang.String)
	 */
	public String getHtel();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getHtel <em>Htel</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Htel</em>' attribute.
	 * @see #getHtel()
	 */
	public void setHtel(String htel);

	/**
	 * Returns the value of the '<em><b>Haddress</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Haddress</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Haddress</em>' attribute.
	 * @see #setHaddress(java.lang.String)
	 */
	public String getHaddress();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getHaddress <em>Haddress</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Haddress</em>' attribute.
	 * @see #getHaddress()
	 */
	public void setHaddress(String haddress);

	/**
	 * Returns the value of the '<em><b>Hzipcode</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Hzipcode</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Hzipcode</em>' attribute.
	 * @see #setHzipcode(java.lang.String)
	 */
	public String getHzipcode();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getHzipcode <em>Hzipcode</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Hzipcode</em>' attribute.
	 * @see #getHzipcode()
	 */
	public void setHzipcode(String hzipcode);

	/**
	 * Returns the value of the '<em><b>Pemail</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Pemail</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Pemail</em>' attribute.
	 * @see #setPemail(java.lang.String)
	 */
	public String getPemail();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getPemail <em>Pemail</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Pemail</em>' attribute.
	 * @see #getPemail()
	 */
	public void setPemail(String pemail);

	/**
	 * Returns the value of the '<em><b>Party</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Party</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Party</em>' attribute.
	 * @see #setParty(java.lang.String)
	 */
	public String getParty();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getParty <em>Party</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Party</em>' attribute.
	 * @see #getParty()
	 */
	public void setParty(String party);

	/**
	 * Returns the value of the '<em><b>Degree</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Degree</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Degree</em>' attribute.
	 * @see #setDegree(java.lang.String)
	 */
	public String getDegree();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getDegree <em>Degree</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Degree</em>' attribute.
	 * @see #getDegree()
	 */
	public void setDegree(String degree);

	/**
	 * Returns the value of the '<em><b>Major</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Major</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Major</em>' attribute.
	 * @see #setMajor(int)
	 */
	public int getMajor();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getMajor <em>Major</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Major</em>' attribute.
	 * @see #getMajor()
	 */
	public void setMajor(int major);

	/**
	 * Returns the value of the '<em><b>Specialty</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Specialty</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Specialty</em>' attribute.
	 * @see #setSpecialty(java.lang.String)
	 */
	public String getSpecialty();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getSpecialty <em>Specialty</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Specialty</em>' attribute.
	 * @see #getSpecialty()
	 */
	public void setSpecialty(String specialty);

	/**
	 * Returns the value of the '<em><b>Workexp</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Workexp</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Workexp</em>' attribute.
	 * @see #setWorkexp(java.lang.String)
	 */
	public String getWorkexp();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getWorkexp <em>Workexp</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Workexp</em>' attribute.
	 * @see #getWorkexp()
	 */
	public void setWorkexp(String workexp);

	/**
	 * Returns the value of the '<em><b>Regdate</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Regdate</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Regdate</em>' attribute.
	 * @see #setRegdate(java.util.Date)
	 */
	public Date getRegdate();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getRegdate <em>Regdate</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Regdate</em>' attribute.
	 * @see #getRegdate()
	 */
	public void setRegdate(Date regdate);

	/**
	 * Returns the value of the '<em><b>Orgidlist</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Orgidlist</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Orgidlist</em>' attribute.
	 * @see #setOrgidlist(java.lang.String)
	 */
	public String getOrgidlist();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getOrgidlist <em>Orgidlist</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Orgidlist</em>' attribute.
	 * @see #getOrgidlist()
	 */
	public void setOrgidlist(String orgidlist);

	/**
	 * Returns the value of the '<em><b>Mainorgid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Mainorgid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Mainorgid</em>' attribute.
	 * @see #setMainorgid(int)
	 */
	public int getMainorgid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getMainorgid <em>Mainorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Mainorgid</em>' attribute.
	 * @see #getMainorgid()
	 */
	public void setMainorgid(int mainorgid);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getRemark <em>Remark</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Remark</em>' attribute.
	 * @see #getRemark()
	 */
	public void setRemark(String remark);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getCreateby <em>Createby</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getModifyby <em>Modifyby</em>}' attribute.
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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getUpdatetime <em>Updatetime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Updatetime</em>' attribute.
	 * @see #getUpdatetime()
	 */
	public void setUpdatetime(Date updatetime);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getDelflag <em>Delflag</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Delflag</em>' attribute.
	 * @see #getDelflag()
	 */
	public void setDelflag(String delflag);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.org.Organization.VOmEmployeeTrs#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);


}