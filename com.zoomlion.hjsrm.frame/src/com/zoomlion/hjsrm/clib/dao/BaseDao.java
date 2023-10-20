package com.zoomlion.hjsrm.clib.dao;

import java.util.Date;

import com.eos.das.entity.IDASCriteria;
import com.eos.das.entity.SequenceGenerator;
import com.eos.das.entity.criteria.CriteriaType;
import com.eos.spring.DASTemplate;
import com.eos.system.exception.EOSRuntimeException;
import com.zoomlion.hjsrm.core.common.Common;
import com.zoomlion.hjsrm.db.DBUtil;
import javax.sql.DataSource;
import commonj.sdo.DataObject;
/**
 * **************************************************
 * 描    述：  数据库基类
 * @author   侯杰
 * @version  1.0    
 * @see  HISTORY
 * 2013-1-29 侯杰 创建文件
 * **************************************************
 */
public class BaseDao {
	
	private DASTemplate eosDasTemplate;
	
	//构造函数，设置默认数据源
	public BaseDao() {
		this.setDataSource(DBUtil.getDataSource());
	}
	
	public void setDataSource(DataSource dataSource){
		this.eosDasTemplate = new DASTemplate(dataSource);

	 }
	public DataSource getDataSource(){
		return this.eosDasTemplate.getDataSource();

	 }
	public final DASTemplate getDASTemplate() {
		    return this.eosDasTemplate;
	 }
	
	/** 
	 * 方法描述: 根据查询条件实体条件统计记录数
	 * @author 侯杰
	 * @param dasCriteria
	 * @return
	 * @throws EOSRuntimeException 
	 * @return int
	 */
	public int count(IDASCriteria dasCriteria) throws EOSRuntimeException {
		return getDASTemplate().count(dasCriteria);
	}

	/**
	 * 方法描述: 增加获取IDASCriteria的方法
	 * @author 侯杰
	 * @param entityQName
	 * @return 
	 * @return IDASCriteria
	 */
	public IDASCriteria createCriteria(String entityQName) {
		return this.getDASTemplate().createCriteria(entityQName);
	}

	/**
	 * 方法描述: CriteriaType转化为IDASCriteria
	 * @author 侯杰
	 * @param criteriaType
	 * @return 
	 * @return IDASCriteria
	 */
	public IDASCriteria criteriaTypeToDASCriteria(CriteriaType criteriaType) {
		return this.getDASTemplate().criteriaTypeToDASCriteria(criteriaType);
	}

	/**
	 * 方法描述: 取系统日期,返回字符串格式：yyyy-MM-dd
	 * @author 侯杰
	 * @return
	 * @throws Exception 
	 * @return String
	 */
	public String getSysDate() throws Exception {
		// FIXME 获取系统日期
		return null;
	}

	
	/**
	 * 方法描述: 获取BO的主键的序列号的值，如果主键字段已经有值将不再生成主键
	 * @author 侯杰
	 * @param entity 
	 * @return void
	 */
	public void getPrimaryKey(DataObject entity) {
		this.getDASTemplate().getPrimaryKey(entity);
	}

	/**
	 * 方法描述: 根据实体名称取主键值
	 * @author 侯杰
	 * @param entityKeyName EOS_UNIQUE_TABLE表中的name字段，即:实体名.属性名
	 * @return
	 * @throws Exception 
	 * @return String 主键id值
	 */
	public String getEosPKByKeyname(String entityKeyName)throws Exception{
		long value = SequenceGenerator.getNextSequence(entityKeyName);
		return String.valueOf(value);
	}

	/**
	 * 方法描述: 插入一条记录
	 * @author 侯杰
	 * @param entity
	 * @throws EOSRuntimeException 
	 * @return void
	 */
	public void insertEntity(DataObject entity) throws EOSRuntimeException {
		getDASTemplate().insertEntity(entity);
	}

	/**
	 * 方法描述: 批量插入记录，这些对象内部不应该有关联的属性存在
	 * @author 侯杰
	 * @param entities
	 * @throws EOSRuntimeException 
	 * @return void
	 */
	public void insertEntityBatch(DataObject[] entities)throws EOSRuntimeException {
		try {
			String createby = Common.getCurrentUserId();
			String dataorgid = Common.getCurrentUserDataOrgId();
			String orgid = Common.getCurrentUserOrgId();
			Date createtime = Common.getCurrentTime();
			for (int i = 0; i < entities.length; i++) {
				DataObject object = entities[i];
				if(object.getString("createby")==null){
					object.set("createby", createby);
				};
				if(object.getString("dataorgid")==null||object.getString("dataorgid").equals("")||object.getString("dataorgid").equals("0")){
					object.set("dataorgid", dataorgid);					
				}				
				if(object.getString("createorgid")==null||object.getString("createorgid").equals("")||object.getString("createorgid").equals("0")){
					object.set("createorgid", orgid);
				}
				if(object.getDate("createtime")==null){					
					object.set("createtime", createtime);
				}
			}
		} catch (Exception e) {
			
		}		
		getDASTemplate().insertEntityBatch(entities);
	}

	/**
	 * 方法描述: 更新一条记录
	 * @author 侯杰
	 * @param entity
	 * @throws EOSRuntimeException 
	 * @return void
	 */
	public void updateEntity(DataObject entity) throws EOSRuntimeException {
		getDASTemplate().updateEntity(entity);
	}

	/**
	 * 方法描述: 批量更新记录，这些对象内部不应该有关联的属性存在，如果有也不处理
	 * @author 侯杰
	 * @param entities
	 * @throws EOSRuntimeException 
	 * @return void
	 */
	public void updateEntityBatch(DataObject[] entities)throws EOSRuntimeException {
		try {
			String modifyby = Common.getCurrentUserId();
			Date updatetime = Common.getCurrentTime();
			for (int i = 0; i < entities.length; i++) {
				DataObject object = entities[i];			
				object.set("modifyby", modifyby);
				object.set("updatetime", updatetime);
			}
		} catch (Exception e) {
			
		}
		getDASTemplate().updateEntityBatch(entities);
	}

	/**
	 * 方法描述: 根据SDO数据模板查询条件更新记录
	 * @author 侯杰
	 * @param updateValue
	 * @param template
	 * @return
	 * @throws EOSRuntimeException 
	 * @return int
	 */
	public int updateEntityByTemplate(DataObject updateValue, DataObject template) throws EOSRuntimeException {
		try {		
			
			String createby = Common.getCurrentUserId();
			updateValue.set("modifyby", createby);
			
			Date updatetime = Common.getCurrentTime();
			updateValue.set("updatetime", updatetime);
			
		} catch (Exception e) {
			
		}
		return getDASTemplate().updateEntityByTemplate(updateValue, template);
	}

	/**
	 * 方法描述: 根据criteria entity查询条件更新记录
	 * @author 侯杰
	 * @param updateValue
	 * @param dasCriteria
	 * @return
	 * @throws EOSRuntimeException 
	 * @return int
	 */
	public int updateEntityByCriteriaEntity(DataObject updateValue, IDASCriteria dasCriteria) throws EOSRuntimeException {
		try {		
			
			String createby = Common.getCurrentUserId();
			updateValue.set("modifyby", createby);
			
			Date updatetime = Common.getCurrentTime();
			updateValue.set("updatetime", updatetime);
		
		} catch (Exception e) {
			
		}
		return getDASTemplate().updateEntityByCriteriaEntity(updateValue, dasCriteria);
	}

	/**
	 * 方法描述: 保存一条记录
	 * @author 侯杰
	 * @param entity
	 * @throws EOSRuntimeException 
	 * @return void
	 */
	public void saveEntity(DataObject entity) throws EOSRuntimeException {
		getDASTemplate().saveEntity(entity);
	}

	/**
	 * 方法描述: 保存多条记录
	 * @author 侯杰
	 * @param entities
	 * @throws EOSRuntimeException 
	 * @return void
	 */
	public void saveEntities(DataObject[] entities) throws EOSRuntimeException {	
		getDASTemplate().saveEntities(entities);
	}

	/**
	 * 方法描述: 根据主键删除一条记录
	 * @author 侯杰
	 * @param entity
	 * @throws EOSRuntimeException 
	 * @return void
	 */
	public void deleteEntity(DataObject entity) throws EOSRuntimeException {
		getDASTemplate().deleteEntity(entity);
	}

	/**
	 * 方法描述: 根据主键批量删除多条记录，采用高效率的jdbc操作，如果实体定义了级联关系也不会删除级联表
	 * @author 侯杰
	 * @param entities
	 * @throws EOSRuntimeException 
	 * @return void
	 */
	public void deleteEntityBatch(DataObject[] entities)throws EOSRuntimeException {
		getDASTemplate().deleteEntityBatch(entities);
	}
	
	/**
	 * 方法描述: 根据SDO数据模板查询条件删除记录，查询条件不能为空，如果为空将返回异常
	 * @author 侯杰
	 * @param template
	 * @return
	 * @throws EOSRuntimeException 
	 * @return int
	 */
	public int deleteByTemplate(DataObject template) throws EOSRuntimeException {
		return getDASTemplate().deleteByTemplate(template);
	}
	
	/**
	 * 方法描述: 根据查询条件实体删除记录，查询条件不能为空，如果为空将返回异常
	 * @author 侯杰
	 * @param dasCriteria
	 * @return
	 * @throws EOSRuntimeException 
	 * @return int
	 */
	public int deleteByCriteriaEntity(IDASCriteria dasCriteria)
			throws EOSRuntimeException {
		return getDASTemplate().deleteByCriteriaEntity(dasCriteria);
	}

	/**
	 * 方法描述: 根据主键扩展查询一条记录，如果dataobject中有非主键的属性值，将根据主键查询出来覆盖原来的属性
	 * @author 侯杰
	 * @param entity
	 * @return
	 * @throws EOSRuntimeException 
	 * @return int
	 */
	public int expandEntity(DataObject entity) throws EOSRuntimeException {
		return getDASTemplate().expandEntity(entity);
	}

	/**
	 * 方法描述: 使用模板查询的一条记录填充dataObject，并返回满足模板条件的记录数
	 * @author 侯杰
	 * @param template
	 * @param entity
	 * @return 
	 * @return int
	 */
	public int expandEntityByTemplate(DataObject template, DataObject entity) {
		return getDASTemplate().expandEntityByTemplate(template, entity);
	}

	/**
	 * 方法描述: 根据主键扩展记录，并且将当前记录锁定。如果dataobject中有非主键的属性值，将根据主键查询出来覆盖原来的属性
	 * @author 侯杰
	 * @param entity
	 * @throws EOSRuntimeException 
	 * @return void
	 */
	public void expandEntityWithLock(DataObject entity)throws EOSRuntimeException {
		getDASTemplate().expandEntityWithLock(entity);
	}

	/**
	 * 方法描述: 扩展一个数据实体对象的一个关联属性（如对一个懒加载的属性），会进行数据库的查询
	 * @author 侯杰
	 * @param dataObject
	 * @param property
	 * @throws EOSRuntimeException 
	 * @return void
	 */
	public void expandRelation(DataObject dataObject, String property)throws EOSRuntimeException {
		getDASTemplate().expandRelation(dataObject, property);
	}

	/**
	 * 方法描述: 扩展一个数据实体数组中每个实体对象的一个关联属性（如对一个懒加载的属性），会进行数据库的查询
	 * @author 侯杰
	 * @param dataObjects
	 * @param property
	 * @throws EOSRuntimeException 
	 * @return void
	 */
	public void expandEntitiesRelation(DataObject[] dataObjects, String property)throws EOSRuntimeException {
		getDASTemplate().expandEntitiesRelation(dataObjects, property);
	}

	/**
	 * 方法描述: 根据数据实体对象的关联属性获得关联实体对象，返回关联实体对象
	 * @author 侯杰
	 * @param <T>
	 * @param dataObject
	 * @param property
	 * @return
	 * @throws EOSRuntimeException 
	 * @return T
	 */
	public <T> T getRelationEntity(DataObject dataObject, String property)throws EOSRuntimeException {
		return getDASTemplate().getRelationEntity(dataObject, property);
	}

	/**
	 * 方法描述: 根据数据实体对象的关联属性获得关联实体对象数组，返回关联实体对象
	 * @author 侯杰
	 * @param <T>
	 * @param componentType
	 * @param dataObject
	 * @param property
	 * @return
	 * @throws EOSRuntimeException 
	 * @return T[]
	 */
	public <T> T[] getRelationEntities(Class<T> componentType, DataObject dataObject, String property) throws EOSRuntimeException {
		return getDASTemplate().getRelationEntities(componentType, dataObject, property);
	}

	/**
	 * 方法描述: 根据SDO数据模板查询条件查询所有记录，会查询Entity的所有字段
	 * @author 侯杰
	 * @param <T>
	 * @param componentType
	 * @param template
	 * @return
	 * @throws EOSRuntimeException 
	 * @return T[]
	 */
	public <T> T[] queryEntitiesByTemplate(Class<T> componentType, DataObject template) throws EOSRuntimeException {
		return getDASTemplate().queryEntitiesByTemplate(componentType, template);
	}

	/**
	 * 方法描述: 根据SDO数据模板查询条件查询部分记录，会查询Entity的所有字段
	 * @author 侯杰
	 * @param <T>
	 * @param componentType
	 * @param template
	 * @param begin
	 * @param length
	 * @return
	 * @throws EOSRuntimeException 
	 * @return T[]
	 */
	public <T> T[] queryEntitiesByTemplate(Class<T> componentType, DataObject template, int begin, int length)throws EOSRuntimeException {
		return getDASTemplate().queryEntitiesByTemplate(componentType, template, begin, length);
	}

	/** 
	 * 方法描述: 根据查询条件实体查询所有记录，根据查询条件实体指定查询Entity的字段
	 * @author 侯杰
	 * @param <T>
	 * @param componentType
	 * @param dasCriteria
	 * @return
	 * @throws EOSRuntimeException 
	 * @return T[]
	 */
	public <T> T[] queryEntitiesByCriteriaEntity(Class<T> componentType, IDASCriteria dasCriteria) throws EOSRuntimeException {
		return getDASTemplate().queryEntitiesByCriteriaEntity(componentType, dasCriteria);

	}

	/**
	 * 方法描述: 根据查询条件实体查询部分记录，根据查询条件实体指定查询Entity的字段
	 * @author 侯杰
	 * @param <T>
	 * @param componentType
	 * @param dasCriteria
	 * @param begin
	 * @param length
	 * @return
	 * @throws EOSRuntimeException 
	 * @return T[]
	 */
	public <T> T[] queryEntitiesByCriteriaEntity(Class<T> componentType, IDASCriteria dasCriteria, int begin, int length)throws EOSRuntimeException {
		return getDASTemplate().queryEntitiesByCriteriaEntity(componentType, dasCriteria, begin, length);

	}

	/**
	 * 方法描述: 根据SDO数据模板查询条件统计记录数
	 * @author 侯杰
	 * @param template
	 * @return
	 * @throws EOSRuntimeException 
	 * @return int
	 */
	public int countByTemplate(DataObject template) throws EOSRuntimeException {
		return getDASTemplate().countByTemplate(template);
	}

	/**
	 * 方法描述: 获取实体的lob属性对应的值
	 * @author 侯杰
	 * @param entity
	 * @param lobPropertyNames
	 * @throws EOSRuntimeException 
	 * @return void
	 */
	public void expandLobProperty(DataObject entity, String lobPropertyNames)throws EOSRuntimeException {
		getDASTemplate().expandLobProperty(entity, lobPropertyNames);
	}

	/**
	 * 方法描述: 根据名称获得序列号值
	 * @author 侯杰
	 * @param name
	 * @return
	 * @throws Exception 
	 * @return long
	 */
	public long getNextSequence(String name) throws Exception {
		return getDASTemplate().getNextSequence(name);
	}

	/**
	 * 方法描述: 根据SDO数据模板查询条件分页查询，会查询Entity的所有字段
	 * @author 侯杰
	 * @param <T>
	 * @param componentType
	 * @param template
	 * @param pagecond
	 * @return
	 * @throws EOSRuntimeException 
	 * @return T[]
	 */
	public <T> T[] queryEntitiesByTemplateWithPage(Class<T> componentType, DataObject template, DataObject pagecond)throws EOSRuntimeException {
		return getDASTemplate().queryEntitiesByTemplateWithPage(componentType, template, pagecond);
	}

	/**
	 * 方法描述: 根据查询条件实体分页查询，根据查询条件实体指定查询Entity的字段
	 * @author 侯杰
	 * @param <T>
	 * @param componentType
	 * @param dasCriteria
	 * @param pagecond
	 * @return
	 * @throws EOSRuntimeException 
	 * @return T[]
	 */
	public <T> T[] queryEntitiesByCriteriaEntityWithPage(Class<T> componentType, IDASCriteria dasCriteria, DataObject pagecond) throws EOSRuntimeException {
		return getDASTemplate().queryEntitiesByCriteriaEntityWithPage(componentType, dasCriteria, pagecond);
	}

	/**
	 * 方法描述: 级联方式新增一条记录（自动创建主键）（只支持单层聚合方式1->n的级联操作）。 如果主键字段值为空将自动生成一个主键
	 * @author 侯杰
	 * @param entity 
	 * @return void
	 */
	public void insertEntityCascade(DataObject entity) {
		getDASTemplate().insertEntityCascade(entity);
	}

	/**
	 * 方法描述: 级联方式删除一条记录（只支持单层聚合方式1->n的级联操作）。 只删除聚合关系（1->n）的n端的子对象记录
	 * @author 侯杰
	 * @param entity 
	 * @return void
	 */
	public void deleteEntityCascade(DataObject entity) {
		getDASTemplate().deleteEntityCascade(entity);
	}

	/**
	 * 方法描述: 级联方式更新一条记录（只支持单层聚合方式1->n的级联操作）
	 * @author 侯杰
	 * @param entity
	 * @param property 
	 * @return void
	 */
	public void updateEntityCascade(DataObject entity, String[] property) {
		this.getDASTemplate().updateEntityCascade(entity, property);
	}

	/**
	 * 方法描述: 根据namedsql语句统计查询结果总记录数
	 * @author 侯杰
	 * @param nameSqlId
	 * @param parameterObject
	 * @return
	 * @throws EOSRuntimeException 
	 * @return int
	 */
	public int countByNamedSql(String nameSqlId, Object parameterObject)throws EOSRuntimeException {
		return this.getDASTemplate().countByNamedSql(nameSqlId, parameterObject);
	}

	/**
	 * 方法描述: 根据namedsql语句进行查询
	 * @author 侯杰
	 * @param <T>
	 * @param componentType
	 * @param nameSqlId
	 * @param parameterObject
	 * @return
	 * @throws EOSRuntimeException 
	 * @return T[]
	 */
	public <T> T[] queryByNamedSql(Class<T> componentType, String nameSqlId, Object parameterObject) throws EOSRuntimeException {
		return this.getDASTemplate().queryByNamedSql(componentType, nameSqlId, parameterObject);
	}

	/**
	 * 方法描述: 根据namedsql语句进行部分查询
	 * @author 侯杰
	 * @param <T>
	 * @param componentType
	 * @param nameSqlId
	 * @param begin
	 * @param length
	 * @param parameterObject
	 * @return
	 * @throws EOSRuntimeException 
	 * @return T[]
	 */
	public <T> T[] queryByNamedSql(Class<T> componentType, String nameSqlId, int begin, int length, Object parameterObject)throws EOSRuntimeException {
		return this.getDASTemplate().queryByNamedSql(componentType, nameSqlId, begin, length, parameterObject);
	}

	/**
	 * 方法描述: 根据namedsql语句进行分页查询
	 * @author 侯杰
	 * @param <T>
	 * @param componentType
	 * @param nameSqlId
	 * @param pageCond
	 * @param parameterObject
	 * @return
	 * @throws EOSRuntimeException 
	 * @return T[]
	 */
	public <T> T[] queryByNamedSqlWithPage(Class<T> componentType, String nameSqlId, DataObject pageCond, Object parameterObject)throws EOSRuntimeException {
		return this.getDASTemplate().queryByNamedSqlWithPage(componentType, nameSqlId, pageCond, parameterObject);
	}

	/**
	 * 方法描述: 执行namedsql语句
	 * @author 侯杰
	 * @param nameSqlId
	 * @param parameterObject
	 * @throws EOSRuntimeException 
	 * @return void
	 */
	public void executeNamedSql(String nameSqlId, Object parameterObject)throws EOSRuntimeException {
		this.getDASTemplate().executeNamedSql(nameSqlId, parameterObject);
	}

	/**
	 * 方法描述: 批处理执行命名sql
	 * @author 侯杰
	 * @param nameSqlId
	 * @param parameterObjects
	 * @return 
	 * @return int
	 */
	public int executeNamedSqlBatch(String nameSqlId, Object[] parameterObjects) {
		return this.getDASTemplate().executeNamedSqlBatch(nameSqlId, parameterObjects);
	}
}
