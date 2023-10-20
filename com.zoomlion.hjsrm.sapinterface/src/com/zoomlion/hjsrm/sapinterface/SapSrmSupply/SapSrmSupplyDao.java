package com.zoomlion.hjsrm.sapinterface.SapSrmSupply;

import com.eos.system.exception.EOSRuntimeException;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfa1;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfb1;
import com.zoomlion.hjsrm.pub.sap.SapSrmSupply.BaseSupplyLfm1;

public class SapSrmSupplyDao extends BaseDao {
	
	/**
	 * 方法描述: 保存SAP供应商主数据（一般地区）（LFA1）信息
	 * 创建日期： 2014/11/13
	 * @author 黄平
	 * @param baseSupplyLfa1
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void saveLfa1List(BaseSupplyLfa1 baseSupplyLfa1) throws EOSRuntimeException {
		this.saveEntity(baseSupplyLfa1);
	}
	
	/**
	 * 方法描述: 保存SAP供应商主记录购买组织数据（LFM1）信息
	 * 创建日期： 2014/11/13
	 * @author 黄平
	 * @param baseSupplyLfm1
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void saveLfm1List(BaseSupplyLfm1 baseSupplyLfm1) throws EOSRuntimeException {
		this.saveEntity(baseSupplyLfm1);
	}
	
	/**
	 * 方法描述: 保存SAP供应商主记录(公司代码)（LFB1）信息
	 * 创建日期： 2014/11/13
	 * @author 黄平
	 * @param baseSupplyLfm1
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void saveLfb1List(BaseSupplyLfb1 baseSupplyLfb1) throws EOSRuntimeException {
		this.saveEntity(baseSupplyLfb1);
	}

}
