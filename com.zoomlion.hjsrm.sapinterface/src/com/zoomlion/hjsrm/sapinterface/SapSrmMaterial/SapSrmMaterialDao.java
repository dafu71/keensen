package com.zoomlion.hjsrm.sapinterface.SapSrmMaterial;

import com.eos.system.exception.EOSRuntimeException;
import com.zoomlion.hjsrm.clib.dao.BaseDao;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMara;
import com.zoomlion.hjsrm.pub.sap.SapSrmMaterial.BaseMaterialMarc;

public class SapSrmMaterialDao extends BaseDao {
	
	/**
	 * 方法描述: 保存物料主数据信息
	 * 创建日期： 2014/11/13
	 * @author 黄平
	 * @param baseMaterialMara
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void saveMaraList(BaseMaterialMara baseMaterialMara) throws EOSRuntimeException {
		this.saveEntity(baseMaterialMara);
	}

	/**
	 * 方法描述: 保存工厂物料主数据信息
	 * 创建日期： 2014/11/13
	 * @author 黄平
	 * @param baseMaterialMara
	 * @return void
	 * @throws EOSRuntimeException 
	 */
	public void saveMarcList(BaseMaterialMarc baseMaterialMarc) throws EOSRuntimeException {
		this.saveEntity(baseMaterialMarc);
	}
}
