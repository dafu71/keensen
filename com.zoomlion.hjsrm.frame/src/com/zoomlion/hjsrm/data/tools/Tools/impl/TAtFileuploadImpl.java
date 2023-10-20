/*******************************************************************************
 *
 * Copyright (c) 2001-2006 Primeton Technologies, Ltd.
 * All rights reserved.
 *
 * Created on Apr 11, 2008
 *******************************************************************************/
package com.zoomlion.hjsrm.data.tools.Tools.impl;

import com.zoomlion.hjsrm.data.tools.Tools.TAtFileupload;
import com.primeton.ext.data.sdo.DataUtil;
import com.primeton.ext.data.sdo.ExtendedDataObjectImpl;

import commonj.sdo.Type;

import java.util.Date;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Test</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl#getFileId <em>FileId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl#getFileCatalog <em>FileCatalog</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl#getFileName <em>FileName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl#getFileNewName <em>FileNewName</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl#getFilePath <em>FilePath</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl#getAbsolutepath <em>Absolutepath</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl#getFileSize <em>FileSize</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl#getFileType <em>FileType</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl#getFileTime <em>FileTime</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl#getFileSave <em>FileSave</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl#getContent <em>Content</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl#getOperatorid <em>Operatorid</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl#getOperatorname <em>Operatorname</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl#getRelationId <em>RelationId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl#getGroupId <em>GroupId</em>}</li>
 *   <li>{@link com.zoomlion.hjsrm.data.tools.Tools.impl.TAtFileuploadImpl#getDataorgid <em>Dataorgid</em>}</li>
 * </ul>
 * </p>
 *
 * @extends ExtendedDataObjectImpl;
 *
 * @implements TAtFileupload;
 */

public class TAtFileuploadImpl extends ExtendedDataObjectImpl implements TAtFileupload {
	/**
	 * Comment for <code>serialVersionUID</code>
	 */
	private static final long serialVersionUID = 1L;
	public final static int INDEX_FILEID = 0;
	public final static int INDEX_FILECATALOG = 1;
	public final static int INDEX_FILENAME = 2;
	public final static int INDEX_FILENEWNAME = 3;
	public final static int INDEX_FILEPATH = 4;
	public final static int INDEX_ABSOLUTEPATH = 5;
	public final static int INDEX_FILESIZE = 6;
	public final static int INDEX_FILETYPE = 7;
	public final static int INDEX_FILETIME = 8;
	public final static int INDEX_FILESAVE = 9;
	public final static int INDEX_CONTENT = 10;
	public final static int INDEX_OPERATORID = 11;
	public final static int INDEX_OPERATORNAME = 12;
	public final static int INDEX_RELATIONID = 13;
	public final static int INDEX_GROUPID = 14;
	public final static int INDEX_DATAORGID = 15;
	public final static int SDO_PROPERTY_COUNT = 16;

	public final static int EXTENDED_PROPERTY_COUNT = -1;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAtFileuploadImpl() {
		this(TYPE);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 */
	public TAtFileuploadImpl(Type type) {
		super(type);
	}

	protected void validate() {
		validateType(TYPE);
	}

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
	public String getFileId() {
		return DataUtil.toString(super.getByIndex(INDEX_FILEID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFileId <em>FileId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FileId</em>' attribute.
	 * @see #getFileId()
	 */
	public void setFileId(String fileId) {
		super.setByIndex(INDEX_FILEID, fileId);
	}

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
	public String getFileCatalog() {
		return DataUtil.toString(super.getByIndex(INDEX_FILECATALOG, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFileCatalog <em>FileCatalog</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FileCatalog</em>' attribute.
	 * @see #getFileCatalog()
	 */
	public void setFileCatalog(String fileCatalog) {
		super.setByIndex(INDEX_FILECATALOG, fileCatalog);
	}

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
	public String getFileName() {
		return DataUtil.toString(super.getByIndex(INDEX_FILENAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFileName <em>FileName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FileName</em>' attribute.
	 * @see #getFileName()
	 */
	public void setFileName(String fileName) {
		super.setByIndex(INDEX_FILENAME, fileName);
	}

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
	public String getFileNewName() {
		return DataUtil.toString(super.getByIndex(INDEX_FILENEWNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFileNewName <em>FileNewName</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FileNewName</em>' attribute.
	 * @see #getFileNewName()
	 */
	public void setFileNewName(String fileNewName) {
		super.setByIndex(INDEX_FILENEWNAME, fileNewName);
	}

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
	public String getFilePath() {
		return DataUtil.toString(super.getByIndex(INDEX_FILEPATH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFilePath <em>FilePath</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FilePath</em>' attribute.
	 * @see #getFilePath()
	 */
	public void setFilePath(String filePath) {
		super.setByIndex(INDEX_FILEPATH, filePath);
	}

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
	public String getAbsolutepath() {
		return DataUtil.toString(super.getByIndex(INDEX_ABSOLUTEPATH, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getAbsolutepath <em>Absolutepath</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Absolutepath</em>' attribute.
	 * @see #getAbsolutepath()
	 */
	public void setAbsolutepath(String absolutepath) {
		super.setByIndex(INDEX_ABSOLUTEPATH, absolutepath);
	}

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
	public long getFileSize() {
		return DataUtil.toLong(super.getByIndex(INDEX_FILESIZE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFileSize <em>FileSize</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FileSize</em>' attribute.
	 * @see #getFileSize()
	 */
	public void setFileSize(long fileSize) {
		super.setByIndex(INDEX_FILESIZE, fileSize);
	}

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
	public String getFileType() {
		return DataUtil.toString(super.getByIndex(INDEX_FILETYPE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFileType <em>FileType</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FileType</em>' attribute.
	 * @see #getFileType()
	 */
	public void setFileType(String fileType) {
		super.setByIndex(INDEX_FILETYPE, fileType);
	}

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
	public Date getFileTime() {
		return DataUtil.toDate(super.getByIndex(INDEX_FILETIME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFileTime <em>FileTime</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FileTime</em>' attribute.
	 * @see #getFileTime()
	 */
	public void setFileTime(Date fileTime) {
		super.setByIndex(INDEX_FILETIME, fileTime);
	}

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
	public String getFileSave() {
		return DataUtil.toString(super.getByIndex(INDEX_FILESAVE, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getFileSave <em>FileSave</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>FileSave</em>' attribute.
	 * @see #getFileSave()
	 */
	public void setFileSave(String fileSave) {
		super.setByIndex(INDEX_FILESAVE, fileSave);
	}

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
	public String getContent() {
		return DataUtil.toString(super.getByIndex(INDEX_CONTENT, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getContent <em>Content</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Content</em>' attribute.
	 * @see #getContent()
	 */
	public void setContent(String content) {
		super.setByIndex(INDEX_CONTENT, content);
	}

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
	public long getOperatorid() {
		return DataUtil.toLong(super.getByIndex(INDEX_OPERATORID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOperatorid <em>Operatorid</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operatorid</em>' attribute.
	 * @see #getOperatorid()
	 */
	public void setOperatorid(long operatorid) {
		super.setByIndex(INDEX_OPERATORID, operatorid);
	}

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
	public String getOperatorname() {
		return DataUtil.toString(super.getByIndex(INDEX_OPERATORNAME, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getOperatorname <em>Operatorname</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Operatorname</em>' attribute.
	 * @see #getOperatorname()
	 */
	public void setOperatorname(String operatorname) {
		super.setByIndex(INDEX_OPERATORNAME, operatorname);
	}

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
	public String getRelationId() {
		return DataUtil.toString(super.getByIndex(INDEX_RELATIONID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getRelationId <em>RelationId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>RelationId</em>' attribute.
	 * @see #getRelationId()
	 */
	public void setRelationId(String relationId) {
		super.setByIndex(INDEX_RELATIONID, relationId);
	}

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
	public String getGroupId() {
		return DataUtil.toString(super.getByIndex(INDEX_GROUPID, true));
	}

	/**
	 * Sets the value of the '{@link com.primeton.eos.Test#getGroupId <em>GroupId</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>GroupId</em>' attribute.
	 * @see #getGroupId()
	 */
	public void setGroupId(String groupId) {
		super.setByIndex(INDEX_GROUPID, groupId);
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