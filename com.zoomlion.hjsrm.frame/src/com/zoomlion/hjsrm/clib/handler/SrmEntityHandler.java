package com.zoomlion.hjsrm.clib.handler;

import java.io.Serializable;

import com.eos.das.entity.IDASCriteria;
import com.zoomlion.hjsrm.core.common.Common;
import com.primeton.das.entity.impl.handler.IEntityHandler;
import commonj.sdo.DataObject;

/**
 * **************************************************
 * 描    述：  实体的拦截器：完成持久化实体的通用属性自动填充功能。在新增前和修改前两种时机自动填充
 * @author   bingyu
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 bingyu 创建文件
 * **************************************************
 */
public class SrmEntityHandler implements  IEntityHandler {
	
	public  void afterLoad(DataObject paramDataObject, Serializable paramSerializable, String[] paramArrayOfString, Object[] paramArrayOfObject){
		return;
	}

	public  void beforeLoad(String paramString, IDASCriteria paramIDASCriteria){
		return;
	}
	
	/**
	 * 方法描述: 持久实体保存前的处理
	 * @author bingyu
	 * @param paramDataObject
	 * @param paramSerializable
	 * @param paramArrayOfString:实体属性的String型数组
	 * @param paramArrayOfObject:实体值的String型数组，顺序与个数与paramArrayOfString
	 */
	public  void beforeSave(DataObject paramDataObject, Serializable paramSerializable, String[] paramArrayOfString, Object[] paramArrayOfObject){
		try{
			if(paramArrayOfString!=null && paramArrayOfString.length>0){
				for(int i=0;i < paramArrayOfString.length;i++){
					if(paramArrayOfString[i].equals("dataorgid")){
						if(paramArrayOfObject[i]==null||paramArrayOfObject[i].equals("")){
							paramArrayOfObject[i] = Common.getCurrentUserDataOrgId();
						}						
					}
					if(paramArrayOfString[i].equals("createorgid")){
						if(paramArrayOfObject[i]==null||paramArrayOfObject[i].equals("")){
							paramArrayOfObject[i] = Common.getCurrentUserOrgId();
						}
					}
					if(paramArrayOfString[i].equals("createby")){
						if(paramArrayOfObject[i]==null||paramArrayOfObject[i].equals("")){
							paramArrayOfObject[i] = Common.getCurrentUserId();
						}
					}
					if(paramArrayOfString[i].equals("createtime")){
						if(paramArrayOfObject[i]==null||paramArrayOfObject[i].equals("")){
							paramArrayOfObject[i] =  Common.getCurrentTime();
						}
					}
				}
			}
		}catch(Exception e){
			
		}
	}
	
	
	/**
	 * 方法描述: 持久实体修改前的处理
	 * 修改描述(吕俊涛：2013-11-28)：更新实体时候不会更新updatetime和modifyby两个字段
	 * @author bingyu
	 * @param paramDataObject:待更新的数据实体
	 * @param paramSerializable
	 * @param paramArrayOfString:实体属性的String型数组
	 * @param paramArrayOfObject1:实体条件值的String型数组
	 * @param paramArrayOfObject2:实体值的String型数组，顺序与个数与paramArrayOfString
	 */
	public  void beforeUpdate(DataObject paramDataObject, Serializable paramSerializable, String[] paramArrayOfString, Object[] paramArrayOfObject1, Object[] paramArrayOfObject2){
		try{
			if(paramArrayOfString!=null && paramArrayOfString.length>0){
				for(int i=0;i < paramArrayOfString.length;i++){
					if(paramArrayOfString[i].equals("updatetime")){
						//if(paramArrayOfString[i]==null||paramArrayOfString[i].equals("")){
							paramArrayOfObject2[i] = Common.getCurrentTime();
							paramDataObject.set("updatetime", paramArrayOfObject2[i]);
						//}
					}
					if(paramArrayOfString[i].equals("modifyby")){
						//if(paramArrayOfString[i]==null||paramArrayOfString[i].equals("")){
							paramArrayOfObject2[i] = Common.getCurrentUserId();
							paramDataObject.set("modifyby", paramArrayOfObject2[i]);
						//}
					}
				}
			}
		}catch(Exception e){
			
		}
	}
	
	public  void afterDelete(DataObject paramDataObject, Serializable paramSerializable, String[] paramArrayOfString, Object[] paramArrayOfObject){
		return;
	}
}