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
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFileId <em>FileId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFileCatalog <em>FileCatalog</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFileName <em>FileName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFileNewName <em>FileNewName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFilePath <em>FilePath</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getAbsolutepath <em>Absolutepath</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFileSize <em>FileSize</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFileType <em>FileType</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFileTime <em>FileTime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFileSave <em>FileSave</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getContent <em>Content</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getOperatorid <em>Operatorid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getOperatorname <em>Operatorname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getRelationId <em>RelationId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getGroupId <em>GroupId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends DataObject;
 */
public interface TAtFileupload extends DataObject {

	public final static String QNAME = "com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload";

	public final static Type TYPE = TypeHelper.INSTANCE.getType("com.zoomlion.hjsrm.data.tools.Tools", "TAtFileupload");

	public final static IObjectFactory<TAtFileupload> FACTORY = new IObjectFactory<TAtFileupload>() {
		public TAtFileupload create() {
			return (TAtFileupload) DataFactory.INSTANCE.create(TYPE);
		}
	};

	/**
	 * Returns the value of the '<em><b>FileId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>FileId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>FileId</em>' attribute.
	 * @see #setFileId(java.lang.String)
	 */
	public String getFileId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFileId <em>FileId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FileId</em>' attribute.
	 * @see #getFileId()
	 */
	public void setFileId(String fileId);

	/**
	 * Returns the value of the '<em><b>FileCatalog</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>FileCatalog</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>FileCatalog</em>' attribute.
	 * @see #setFileCatalog(java.lang.String)
	 */
	public String getFileCatalog();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFileCatalog <em>FileCatalog</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FileCatalog</em>' attribute.
	 * @see #getFileCatalog()
	 */
	public void setFileCatalog(String fileCatalog);

	/**
	 * Returns the value of the '<em><b>FileName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>FileName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>FileName</em>' attribute.
	 * @see #setFileName(java.lang.String)
	 */
	public String getFileName();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFileName <em>FileName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FileName</em>' attribute.
	 * @see #getFileName()
	 */
	public void setFileName(String fileName);

	/**
	 * Returns the value of the '<em><b>FileNewName</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>FileNewName</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>FileNewName</em>' attribute.
	 * @see #setFileNewName(java.lang.String)
	 */
	public String getFileNewName();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFileNewName <em>FileNewName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FileNewName</em>' attribute.
	 * @see #getFileNewName()
	 */
	public void setFileNewName(String fileNewName);

	/**
	 * Returns the value of the '<em><b>FilePath</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>FilePath</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>FilePath</em>' attribute.
	 * @see #setFilePath(java.lang.String)
	 */
	public String getFilePath();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFilePath <em>FilePath</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FilePath</em>' attribute.
	 * @see #getFilePath()
	 */
	public void setFilePath(String filePath);

	/**
	 * Returns the value of the '<em><b>Absolutepath</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Absolutepath</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Absolutepath</em>' attribute.
	 * @see #setAbsolutepath(java.lang.String)
	 */
	public String getAbsolutepath();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getAbsolutepath <em>Absolutepath</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Absolutepath</em>' attribute.
	 * @see #getAbsolutepath()
	 */
	public void setAbsolutepath(String absolutepath);

	/**
	 * Returns the value of the '<em><b>FileSize</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>FileSize</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>FileSize</em>' attribute.
	 * @see #setFileSize(long)
	 */
	public long getFileSize();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFileSize <em>FileSize</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FileSize</em>' attribute.
	 * @see #getFileSize()
	 */
	public void setFileSize(long fileSize);

	/**
	 * Returns the value of the '<em><b>FileType</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>FileType</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>FileType</em>' attribute.
	 * @see #setFileType(java.lang.String)
	 */
	public String getFileType();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFileType <em>FileType</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FileType</em>' attribute.
	 * @see #getFileType()
	 */
	public void setFileType(String fileType);

	/**
	 * Returns the value of the '<em><b>FileTime</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>FileTime</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>FileTime</em>' attribute.
	 * @see #setFileTime(java.util.Date)
	 */
	public Date getFileTime();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFileTime <em>FileTime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FileTime</em>' attribute.
	 * @see #getFileTime()
	 */
	public void setFileTime(Date fileTime);

	/**
	 * Returns the value of the '<em><b>FileSave</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>FileSave</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>FileSave</em>' attribute.
	 * @see #setFileSave(java.lang.String)
	 */
	public String getFileSave();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getFileSave <em>FileSave</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FileSave</em>' attribute.
	 * @see #getFileSave()
	 */
	public void setFileSave(String fileSave);

	/**
	 * Returns the value of the '<em><b>Content</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Content</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Content</em>' attribute.
	 * @see #setContent(java.lang.String)
	 */
	public String getContent();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getContent <em>Content</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Content</em>' attribute.
	 * @see #getContent()
	 */
	public void setContent(String content);

	/**
	 * Returns the value of the '<em><b>Operatorid</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operatorid</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operatorid</em>' attribute.
	 * @see #setOperatorid(long)
	 */
	public long getOperatorid();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getOperatorid <em>Operatorid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operatorid</em>' attribute.
	 * @see #getOperatorid()
	 */
	public void setOperatorid(long operatorid);

	/**
	 * Returns the value of the '<em><b>Operatorname</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>Operatorname</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Operatorname</em>' attribute.
	 * @see #setOperatorname(java.lang.String)
	 */
	public String getOperatorname();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getOperatorname <em>Operatorname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operatorname</em>' attribute.
	 * @see #getOperatorname()
	 */
	public void setOperatorname(String operatorname);

	/**
	 * Returns the value of the '<em><b>RelationId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>RelationId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>RelationId</em>' attribute.
	 * @see #setRelationId(java.lang.String)
	 */
	public String getRelationId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getRelationId <em>RelationId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>RelationId</em>' attribute.
	 * @see #getRelationId()
	 */
	public void setRelationId(String relationId);

	/**
	 * Returns the value of the '<em><b>GroupId</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <p>
	 * If the meaning of the '<em>GroupId</em>' attribute isn't clear,
	 * there really should be more of a description here...
	 * </p>
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>GroupId</em>' attribute.
	 * @see #setGroupId(java.lang.String)
	 */
	public String getGroupId();

	/**
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getGroupId <em>GroupId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>GroupId</em>' attribute.
	 * @see #getGroupId()
	 */
	public void setGroupId(String groupId);

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
	 * Sets the value of the '{@link com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload#getDataorgid <em>Dataorgid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Dataorgid</em>' attribute.
	 * @see #getDataorgid()
	 */
	public void setDataorgid(int dataorgid);


}