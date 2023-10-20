package com.zoomlion.hjsrm.pub.msg;
import com.eos.das.entity.SequenceGenerator;
import com.eos.foundation.database.DatabaseUtil;
import com.zoomlion.hjsrm.clib.util.SrmLog;
import com.zoomlion.hjsrm.core.exception.BusinessException;
import com.zoomlion.hjsrm.data.org.Organization.TOmEmployee;
import com.zoomlion.hjsrm.data.org.Organization.impl.TOmEmployeeImpl;
import com.zoomlion.hjsrm.pub.msg.msg.TJkBusitplcfg;
import com.zoomlion.hjsrm.pub.msg.msg.TJkMsgqueue;
import com.zoomlion.hjsrm.pub.msg.msg.TJkMsgtemplate;
import com.zoomlion.hjsrm.pub.msg.msg.impl.TJkBusitplcfgImpl;
import com.zoomlion.hjsrm.pub.msg.msg.impl.TJkMsgqueueImpl;
import com.zoomlion.hjsrm.pub.msg.msg.impl.TJkMsgtemplateImpl;

import commonj.sdo.DataObject;


public class MsgTool {

	/**
	 * 方法描述: 保存短信到本地队列
	 * @author 侯杰
	 * @param templatecode
	 * @param condition 
	 * @param empid
	 * @return void
	 */
	public static void sendMsgByTplid(String tplid,String [] params,String phoneNo) throws BusinessException{
		//加载模版
		
		
		TJkMsgtemplate temp = new TJkMsgtemplateImpl();
		temp.setPkid(String.valueOf(tplid));
		DatabaseUtil.expandEntity("default", temp);
		
		String msg = temp.getString("content");
		int count = temp.getInt("paramno");
		for (int i = 0; i < count; i++) {
			msg = msg.replace("{"+i+"}", params[i].toString());
		}	
	
		TJkMsgqueue msgq = new TJkMsgqueueImpl();
		msgq.setContent(msg);
		msgq.setReceiverno(phoneNo);
		msgq.setMsgtemplatepkid(temp.getPkid());
		long value = SequenceGenerator.getNextSequence("TJkMsgqueue.pkid");
		msgq.setPkid(String.valueOf(value));
		DatabaseUtil.insertEntity("default", msgq);
		
	}
	
	/**
	 * 方法描述: 保存短信到本地队列
	 * @author 侯杰
	 * @param templatecode
	 * @param condition 
	 * @param empid
	 * @return void
	 */
	public static void sendMsgByTplid(String tplid,String [] params,int empid) throws BusinessException{
		//加载模版
		
		TOmEmployee emp = new TOmEmployeeImpl();
		emp.setEmpid(empid);
		DatabaseUtil.expandEntity("default", emp);
		if(emp.getMobileno()==null||emp.getMobileno().equals("")){
			SrmLog.error(emp.getEmpname()+"未设置手机号");
			throw new BusinessException("未设置手机号",emp.getEmpname()+"未设置手机号");
		}
		
		
		TJkMsgtemplate temp = new TJkMsgtemplateImpl();
		temp.setPkid(String.valueOf(tplid));
		DatabaseUtil.expandEntity("default", temp);
		
		String msg = temp.getString("content");
		int count = temp.getInt("paramno");
		for (int i = 0; i < count; i++) {
			msg = msg.replace("{"+i+"}", params[i].toString());
		}
		
	
		TJkMsgqueue msgq = new TJkMsgqueueImpl();
		msgq.setContent(msg);
		msgq.setReceiverno(emp.getMobileno());
		msgq.setMsgtemplatepkid(temp.getPkid());
		long value = SequenceGenerator.getNextSequence("TJkMsgqueue.pkid");
		msgq.setPkid(String.valueOf(value));
		DatabaseUtil.insertEntity("default", msgq);
		
	}
	
	/**
	 * 方法描述: 保存短信到本地队列
	 * @author 侯杰
	 * @param templatecode
	 * @param condition 
	 * @param empid
	 * @return void
	 */
	public static void sendMsgByBzcode(String busicode,String [] params,int empid) throws BusinessException{
		//加载模版
		
		TOmEmployee emp = new TOmEmployeeImpl();
		emp.setEmpid(empid);
		DatabaseUtil.expandEntity("default", emp);
		if(emp.getMobileno()==null||emp.getMobileno().equals("")){
			SrmLog.error(emp.getEmpname()+"未设置手机号");
			throw new BusinessException("未设置手机号",emp.getEmpname()+"未设置手机号");
		}
		
		TJkBusitplcfg btc = new TJkBusitplcfgImpl();
		btc.setBusicode(busicode);
		
		DataObject [] rs = DatabaseUtil.queryEntitiesByTemplate("default", btc);
		
		if(rs==null||rs.length==0){
			SrmLog.error("未定义短信模版");
			throw new BusinessException("未定义短信模版","未定义短信模版");
		}
		
		TJkMsgtemplate temp = new TJkMsgtemplateImpl();
		temp.setPkid(rs[0].getString("tplpkid"));
		DatabaseUtil.expandEntity("default", temp);
		
		String msg = temp.getString("content");
		int count = temp.getInt("paramno");
		for (int i = 0; i < count; i++) {
			msg = msg.replace("{"+i+"}", params[i].toString());
		}
		
	
		TJkMsgqueue msgq = new TJkMsgqueueImpl();
		msgq.setContent(msg);
		msgq.setReceiverno(emp.getMobileno());
		msgq.setMsgtemplatepkid(temp.getPkid());
		long value = SequenceGenerator.getNextSequence("TJkMsgqueue.pkid");
		msgq.setPkid(String.valueOf(value));
		DatabaseUtil.insertEntity("default", msgq);
		
	}
	
	/**
	 * 方法描述: 保存短信到本地队列
	 * @author 侯杰
	 * @param templatecode
	 * @param condition 
	 * @param empid
	 * @return void
	 */
	public static void sendMsgByBzcode(String busicode,String [] params,int[] empids) throws BusinessException{
				
		TJkBusitplcfg btc = new TJkBusitplcfgImpl();
		btc.setBusicode(busicode);
		
		DataObject [] rs = DatabaseUtil.queryEntitiesByTemplate("default", btc);
		
		if(rs==null||rs.length==0){
			SrmLog.error("未定义短信模版");
			throw new BusinessException("未定义短信模版","未定义短信模版");
		}
		
		TJkMsgtemplate temp = new TJkMsgtemplateImpl();
		temp.setPkid(rs[0].getString("tplpkid"));
		DatabaseUtil.expandEntity("default", temp);
		
		String msg = temp.getString("content");
		int count = temp.getInt("paramno");
		for (int i = 0; i < count; i++) {
			msg = msg.replace("{"+i+"}", params[i].toString());
		}
		TJkMsgqueue [] sends = new TJkMsgqueue[empids.length];
		for (int i = 0; i < empids.length; i++) {
			
			TOmEmployee emp = new TOmEmployeeImpl();
			emp.setEmpid(empids[i]);
			DatabaseUtil.expandEntity("default", emp);
			if(emp.getMobileno()==null||emp.getMobileno().equals("")){
				SrmLog.error(emp.getEmpname()+"未设置手机号");
				throw new BusinessException("未设置手机号",emp.getEmpname()+"未设置手机号");
			}
			TJkMsgqueue msgq = new TJkMsgqueueImpl();
			msgq.setContent(msg);
			msgq.setReceiverno(emp.getMobileno());
			msgq.setMsgtemplatepkid(temp.getPkid());
			long value = SequenceGenerator.getNextSequence("TJkMsgqueue.pkid");
			msgq.setPkid(String.valueOf(value));
			sends[i] = msgq;
		}
		
		DatabaseUtil.insertEntityBatch("default", sends);
	}
	
	/**
	 * 方法描述: 保存短信到本地队列
	 * @author 侯杰
	 * @param templatecode
	 * @param condition 
	 * @param empid
	 * @return void
	 */
	public static void sendMsgByTplid(String tplid,String [] params,int[] empids) throws BusinessException{
				
		
		
		TJkMsgtemplate temp = new TJkMsgtemplateImpl();
		temp.setPkid(String.valueOf(tplid));
		DatabaseUtil.expandEntity("default", temp);
		
		String msg = temp.getString("content");
		int count = temp.getInt("paramno");
		for (int i = 0; i < count; i++) {
			msg = msg.replace("{"+i+"}", params[i].toString());
		}
		TJkMsgqueue [] sends = new TJkMsgqueue[empids.length];
		for (int i = 0; i < empids.length; i++) {
			
			TOmEmployee emp = new TOmEmployeeImpl();
			emp.setEmpid(empids[i]);
			DatabaseUtil.expandEntity("default", emp);
			if(emp.getMobileno()==null||emp.getMobileno().equals("")){
				SrmLog.error(emp.getEmpname()+"未设置手机号");
				throw new BusinessException("未设置手机号",emp.getEmpname()+"未设置手机号");
			}
			TJkMsgqueue msgq = new TJkMsgqueueImpl();
			msgq.setContent(msg);
			msgq.setReceiverno(emp.getMobileno());
			msgq.setMsgtemplatepkid(temp.getPkid());
			long value = SequenceGenerator.getNextSequence("TJkMsgqueue.pkid");
			msgq.setPkid(String.valueOf(value));
			sends[i] = msgq;
		}
		
		DatabaseUtil.insertEntityBatch("default", sends);
	}
	
	/**
	 * 方法描述: 保存短信到本地队列
	 * @author 侯杰
	 * @param templatecode
	 * @param condition 
	 * @param empid
	 * @return void
	 */
	public static void sendMsgByTplid(String tplid,String [] params,String[] phoneNo) throws BusinessException{
		
		TJkMsgtemplate temp = new TJkMsgtemplateImpl();
		temp.setPkid(String.valueOf(tplid));
		DatabaseUtil.expandEntity("default", temp);
		
		String msg = temp.getString("content");
		int count = temp.getInt("paramno");
		for (int i = 0; i < count; i++) {
			msg = msg.replace("{"+i+"}", params[i].toString());
		}
		TJkMsgqueue [] sends = new TJkMsgqueue[phoneNo.length];
		for (int i = 0; i < phoneNo.length; i++) {			
			TJkMsgqueue msgq = new TJkMsgqueueImpl();
			msgq.setContent(msg);
			msgq.setReceiverno(phoneNo[i]);
			msgq.setMsgtemplatepkid(temp.getPkid());
			long value = SequenceGenerator.getNextSequence("TJkMsgqueue.pkid");
			msgq.setPkid(String.valueOf(value));
			sends[i] = msgq;
		}
		DatabaseUtil.insertEntityBatch("default", sends);
	}
}
