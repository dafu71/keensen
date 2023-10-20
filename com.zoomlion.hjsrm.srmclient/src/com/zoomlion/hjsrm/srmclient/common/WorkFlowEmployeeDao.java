package com.zoomlion.hjsrm.srmclient.common;

import java.util.HashMap;
import java.util.Map;

import com.eos.workflow.omservice.WFParticipant;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import commonj.sdo.DataObject;

public class WorkFlowEmployeeDao extends BaseDao {
	/**
	 * 设置参与者,转换数据对象
	 * @param userMap  当前用户参数
	 * @param data  参与者对象
	 * @return
	 * @throws BusinessException
	 */
    public WFParticipant [] getParticipantPersons(Map userMap,Map [] data) throws BusinessException{    	  
  	  WFParticipant[] wfp;
		try {
			wfp = new WFParticipant[data.length];    	  
			  for(int i=0;i<data.length;i++){
				    Map user=data[i];
				    String personId=String.valueOf(user.get("userId"));
				    String personName=String.valueOf(user.get("userName")); 		    
			    	if("".equals(personName)|| null==personName){			    		
			    		DataObject [] datad=this.queryByNamedSql(DataObject.class, "com.zoomlion.hjsrm.srmclient.common.queryEmp.queryEmployee", userMap);
						if(datad!=null && datad.length>0){
							DataObject person = (DataObject)datad[0];    						
							WFParticipant wp=new WFParticipant();
							wp.setId(personId);
							wp.setName(person.getString("EMPNAME"));
							wp.setTypeCode("person");
							wfp[i]=wp;
						}
			    	}
			    	else{
			    		WFParticipant wp=new WFParticipant();
							wp.setId(personId);
							wp.setName(personName);
							wp.setTypeCode("person");
							wfp[i]=wp;
			           
						}					
						break;
			    }
			return wfp;
		} catch (Exception e) {
			SrmLog.error("getParticipantPersons异常!", e);
			throw new BusinessException("getParticipantPersons异常!", e.getMessage());
		} 	    	  
  	 
    }
    
    /**
	 * 设置参与者,转换数据对象
	 * @param userMap  当前用户参数
	 * @param data  参与者对象
	 * @return
	 * @throws BusinessException
	 */
    public WFParticipant [] getParticipantPersons(Map [] data) throws BusinessException{    	  
  	  WFParticipant[] wfp;
		try {
			wfp = new WFParticipant[data.length];    	  
			  for(int i=0;i<data.length;i++){
				    Map user=data[i];
				    String personId=String.valueOf(user.get("userid"));
				    String personName=String.valueOf(user.get("operatorname"));		    	
		    		WFParticipant wp=new WFParticipant();
					wp.setId(personId);
					wp.setName(personName);
					wp.setTypeCode("person");
					wfp[i]=wp;
			         
			    }
			return wfp;
		} catch (Exception e) {
			SrmLog.error("getParticipantPersons异常!", e);
			throw new BusinessException("getParticipantPersons异常!", e.getMessage());
		} 	    	  
  	 
    }
}
