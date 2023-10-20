package com.zoomlion.hjsrm.frame.workflows.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.eos.foundation.eoscommon.LogUtil;
import com.eos.workflow.omservice.IWFOMService;
import com.eos.workflow.omservice.WFParticipant;
import com.primeton.workflow.api.PageCond;
import com.primeton.workflow.api.ParticipantType;
import commonj.sdo.DataObject;

/**
 * <pre>
 *  Title: SRM.0--BPS组织机构实现类
 *  Description: 程序功能的描述
 * </pre>
 * 
 * @author 陈今伟
 * @version 1.0
 * 
 */
/*
 * 修改历史,方法中重大的变动需要有历史记录，格式：2012-12-28 修改人 修改内容***
 * 
 */

public class SrmOMServiceImpl implements IWFOMService {

	private SrmOMServiceDao srmOMServiceDao = new SrmOMServiceDao();

	public static final String CS_PARTICIPANT_TYPE_PERSON = "person"; // 人员

	public static final String CS_PARTICIPANT_TYPE_ROLE = "role"; // 角色

	public static final String CS_PARTICIPANT_TYPE_ORGANIZATION = "organization";// 机构

	public static final String CS_PARTICIPANT_TYPE_ORGROLE = "orgrole";// 机构和角色的交集类型

	// 参与者类型列表
	private static Map<String, ParticipantType> participantTypes = new HashMap<String, ParticipantType>();// Store

	public SrmOMServiceImpl() {
		try {
			init(); // 初始化
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 方法描述: 	初始化参与者类型
	 * @author 陈今伟
	 * @return
	 * @throws Exception 描述******
	 * @return WFParticipant
	 */
	private void init() throws Exception {
		// person 为直接参与者,无子类型
		// 父类型 role,organization,position workgroup
		ParticipantType ptPerson = null;// prefix,code,displayname,description,showatroot,priority,isleaf,subparti,joinpart,joinparttype
		ptPerson = new ParticipantType('P', CS_PARTICIPANT_TYPE_PERSON, "个人", "个人", false, 1, true, null, false, null);

		// role 角色,子类型为 person
		// 无父类型
		ParticipantType ptRole = null;
		List<String> roleChildParticipantTypeCodes = new ArrayList<String>();
		roleChildParticipantTypeCodes.add(CS_PARTICIPANT_TYPE_PERSON);// person
		ptRole = new ParticipantType('R', CS_PARTICIPANT_TYPE_ROLE, "SRM1.0角色", "SRM1.0角色", true, 3, false, roleChildParticipantTypeCodes, false, null);

		// organization 机构,子类型为 person organization position
		// 父类型为 organization
		ParticipantType ptOrganization = null;
		List<String> organizationChildParticipantTypeCodes = new ArrayList<String>();
		organizationChildParticipantTypeCodes.add(CS_PARTICIPANT_TYPE_PERSON);// person
		organizationChildParticipantTypeCodes.add(CS_PARTICIPANT_TYPE_ORGANIZATION);// organization
		ptOrganization = new ParticipantType('O', CS_PARTICIPANT_TYPE_ORGANIZATION, "SRM1.0机构", "SRM1.0机构", true, 4, false, organizationChildParticipantTypeCodes, false, null);

		// 组织角色交集类型
		ParticipantType ptOrgRole = new ParticipantType();
		ptOrgRole.setPrefix('X');
		ptOrgRole.setCode(CS_PARTICIPANT_TYPE_ORGROLE);
		ptOrgRole.setDisplayName("机构和角色");
		ptOrgRole.setJointParticipantType(true);
		ptOrgRole.setPriority(8);
		ArrayList<String> ltOrgRole = new ArrayList<String>();
		ltOrgRole.add(CS_PARTICIPANT_TYPE_PERSON);
		ptOrgRole.setJuniorParticipantTypeCodes(ltOrgRole);
		ArrayList<String> jtOrgRole = new ArrayList<String>();
		jtOrgRole.add(CS_PARTICIPANT_TYPE_ORGANIZATION);
		jtOrgRole.add(CS_PARTICIPANT_TYPE_ROLE);
		ptOrgRole.setJointTypeCodeList(jtOrgRole);

		// 加入类别集合缓存
		participantTypes.put(CS_PARTICIPANT_TYPE_PERSON, ptPerson);
		participantTypes.put(CS_PARTICIPANT_TYPE_ROLE, ptRole);
		participantTypes.put(CS_PARTICIPANT_TYPE_ORGANIZATION, ptOrganization);
		participantTypes.put(CS_PARTICIPANT_TYPE_ORGROLE, ptOrgRole);
	}

	/**
	 * 方法描述: 	根据ID和类型获取相应参与者
	 * @author 陈今伟
	 * @param typeCode	参与者类型
	 * @param	participantID	参与者ID
	 * @return
	 * @throws Exception 描述******
	 * @return WFParticipant
	 */
	@SuppressWarnings("unchecked")
	public WFParticipant findParticipantByID(String typeCode, String participantID) {
		LogUtil.logDebug("findParticipantByID(typeCode={1};participantID={2})", null, new Object[] { typeCode, participantID });
		ParticipantType partType = participantTypes.get(typeCode);
		if (partType == null) {
			LogUtil.logDebug("findParticipantByID(typeCode={1};participantID={2}):partType is null!", null, new Object[] { typeCode, participantID });
			return null;
		}
		WFParticipant part = null;
		DataObject [] participants = null;
		Map condition = new HashMap();
		condition.put("participantID", participantID);
		try {
			if (CS_PARTICIPANT_TYPE_ORGANIZATION.equalsIgnoreCase(typeCode)) {// 机构
				participants = this.srmOMServiceDao.findParticipantByOrg(condition);
			} else if (CS_PARTICIPANT_TYPE_ROLE.equalsIgnoreCase(typeCode)) {// 角色
				participants = this.srmOMServiceDao.findParticipantByRole(condition);
			} else if (CS_PARTICIPANT_TYPE_PERSON.equalsIgnoreCase(typeCode)) {// 个人
				participants = this.srmOMServiceDao.findParticipantByPerson(condition);
			}
			part = getParticipant4DataObject(participants);
		} catch (Exception e) {
			LogUtil.logError("findParticipantByID(typeCode={1};participantID={2})", e, new Object[] { typeCode, participantID });
		}
		return part;
	}

	/**
	 * 方法描述: 将Dao层返回的对象数组转换为参与者Participant返回
	 * @author 陈今伟
	 * @param WFParticipant
	 * @return
	 * @throws Exception 描述******
	 * @return WFParticipant
	 */
	@SuppressWarnings("deprecation")
	private WFParticipant getParticipant4DataObject(DataObject[] WFParticipant)throws Exception {
		WFParticipant part = new WFParticipant();
		if (WFParticipant == null || WFParticipant.length < 1) {
			return part;
		} else {
			part.setEmail(WFParticipant[0].getString("email"));
			part.setId(WFParticipant[0].getString("id"));
			part.setName(WFParticipant[0].getString("name"));
			part.setTypeCode(WFParticipant[0].getString("typecode"));
			return part;
		}
	}

	/**
	 * 方法描述: 将Dao层返回的对象数组转换为参与者Participant数组返回
	 * @author 陈今伟
	 * @param WFParticipant
	 * @return
	 * @throws Exception  描述******
	 * @return List<WFParticipant>
	 */
	@SuppressWarnings("deprecation")
	private List<WFParticipant> getParticipants4DataObject(DataObject[] WFParticipant) throws Exception {
		List<WFParticipant> wfParticipants = new ArrayList<WFParticipant>();
		if (WFParticipant == null || WFParticipant.length < 1) {
			return wfParticipants;
		} else {
			for (int i = 0, j = WFParticipant.length; i < j; i++) {
				WFParticipant part = new WFParticipant();
				part.setEmail(WFParticipant[i].getString("email"));
				part.setId(WFParticipant[i].getString("id"));
				part.setName(WFParticipant[i].getString("name"));
				part.setTypeCode(WFParticipant[i].getString("typecode"));
				wfParticipants.add(part);
			}
		}
		return wfParticipants;
	}

	/**
	 * 方法描述: 	根据参与者类型获取某个类型的根参与者
	 * @author 陈今伟
	 * @param typeCode
	 * @return
	 * @throws Exception  描述******
	 * @return List<WFParticipant>
	 */
	public List<WFParticipant> findRootParticipants(String typeCode) {
		LogUtil.logDebug("findRootParticipants(typeCode={1})", null, new Object[] { typeCode });
		List<WFParticipant> wfParticipants = new ArrayList<WFParticipant>();
		ParticipantType partType = participantTypes.get(typeCode);
		if (partType == null || !partType.isShowAtRootArea()) {
			if (partType == null) {
				LogUtil.logInfo("findRootParticipants(typeCode={1}):no such ParticipantType ", null, new Object[] { typeCode });
			} else {
				LogUtil.logInfo("findRootParticipants(typeCode={1}):no such ParticipantType in root ", null, new Object[] { typeCode });
			}
			return wfParticipants;
		}
		Map condition = new HashMap();
		DataObject [] participants = null;
		try {
			if (CS_PARTICIPANT_TYPE_ORGANIZATION.equalsIgnoreCase(typeCode)) {
				participants = this.srmOMServiceDao.findOrgRootParticipants(condition);
			} else if (CS_PARTICIPANT_TYPE_ROLE.equalsIgnoreCase(typeCode)) {
				participants = this.srmOMServiceDao.findRoleRootParticipants(condition);
			}
			wfParticipants = getParticipants4DataObject(participants);
		} catch (Exception e) {
			LogUtil.logError("findRootParticipants(typeCode={1})", e, new Object[] { typeCode });
		}
		return wfParticipants;
	}

	/**
	 * 方法描述: 	查询所有下级参与者。对于指定的参与者，该方法需要返回该参与者的各种不同类型的子参与者
	 * @author 陈今伟
	 * @param typeCode
	 * @param	participantID
	 * @return
	 * @throws Exception  描述******
	 * @return List<WFParticipant>
	 */
	@SuppressWarnings("unchecked")
	public List<WFParticipant> getAllChildParticipants(String typeCode, String participantID) {
		LogUtil.logDebug("getAllChildParticipants(typeCode={1}, participantID={2})", null, new Object[] { typeCode, participantID });
		List<WFParticipant> wfParticipants = new ArrayList<WFParticipant>();
		Map condition = new HashMap();
		condition.put("participantID", participantID);
		DataObject [] participants = null;
		try {
			if (CS_PARTICIPANT_TYPE_ORGANIZATION.equalsIgnoreCase(typeCode)) {
				participants = this.srmOMServiceDao.getAllChildParticipantsByOrg(condition);
			} else if (CS_PARTICIPANT_TYPE_ROLE.equalsIgnoreCase(typeCode)) {
				participants = this.srmOMServiceDao.getAllChildParticipantsByRole(condition);
			}
			wfParticipants = getParticipants4DataObject(participants);
		} catch (Exception e) {
			LogUtil.logError("getAllChildParticipants(typeCode={1}, participantID={2})", e, new Object[] { typeCode, participantID });
		}
		return wfParticipants;
	}

	/**
	 * 方法描述: 	查询所有的上级参与者。在实现的时候，应该将指定参与者的所有父参与者查询出来，并返回
	 * @author 陈今伟
	 * @param typeCode
	 * @param	participantID
	 * @return
	 * @throws Exception  描述******
	 * @return List<WFParticipant>
	 */
	@SuppressWarnings("unchecked")
	public List<WFParticipant> getAllParentParticipants(String typeCode, String participantID) {
		LogUtil.logDebug("getAllParentParticipants(typeCode={1}, participantID={2})", null, new Object[] { typeCode, participantID });
		List<WFParticipant> wfParticipants = new ArrayList<WFParticipant>();
		Map condition = new HashMap();
		condition.put("participantID", participantID);
		DataObject [] participants = null;
		try {
			if (CS_PARTICIPANT_TYPE_ORGANIZATION.equalsIgnoreCase(typeCode)) {
				this.srmOMServiceDao.getAllParentParticipantsByOrg(condition);
			} else if (CS_PARTICIPANT_TYPE_PERSON.equalsIgnoreCase(typeCode)) {
				this.srmOMServiceDao.getAllParentParticipantsByPerson(condition);
			}
			wfParticipants = getParticipants4DataObject(participants);
		} catch (Exception e) {
			LogUtil.logError("getAllParentParticipants(typeCode={1}, participantID={2})", e, new Object[] { typeCode, participantID });
		}
		return wfParticipants;
	}

	/**
	 * 方法描述: 	查询参与者的某个指定类型的子参与者
	 * @author 陈今伟
	 * @param typeCode
	 * @param	participantID
	 * @param	childCode
	 * @return
	 * @throws Exception  描述******
	 * @return List<WFParticipant>
	 */
	@SuppressWarnings("unchecked")
	public List<WFParticipant> getChildParticipants(String typeCode, String participantID, String childCode) {
		LogUtil.logDebug("getChildParticipants(typeCode={1}, participantID={2},childCode={3})", null, new Object[] { typeCode, participantID, childCode });
		List<WFParticipant> wfParticipants = new ArrayList<WFParticipant>();
		Map condition = new HashMap();
		condition.put("participantID", participantID);
		DataObject [] participants = null;
		try {
			if (CS_PARTICIPANT_TYPE_ORGANIZATION.equalsIgnoreCase(typeCode)) {
				if (CS_PARTICIPANT_TYPE_ORGANIZATION.equalsIgnoreCase(childCode)) {
					participants = this.srmOMServiceDao.getOrgChildParticipantsByOrg(condition);
				} else if (CS_PARTICIPANT_TYPE_PERSON.equalsIgnoreCase(childCode)) {
					participants = this.srmOMServiceDao.getPersonChildParticipantsByOrg(condition);
				}
			} else if (CS_PARTICIPANT_TYPE_ROLE.equalsIgnoreCase(typeCode)) {
				Map<String, String> parameterMap = new HashMap<String, String>();
				parameterMap.put("id", participantID);
				if (CS_PARTICIPANT_TYPE_PERSON.equalsIgnoreCase(childCode)) {
					participants = this.srmOMServiceDao.getPersonChildParticipantsByRole(condition);
				}
			}
			wfParticipants = getParticipants4DataObject(participants);
		} catch (Exception e) {
			LogUtil.logError("getChildParticipants(typeCode={1}, participantID={2},childCode={3})", e, new Object[] { typeCode, participantID, childCode });
		}
		return wfParticipants;
	}

	/**
	 * 方法描述: 	查询某个参与者的指定类型的父参与者
	 * @author 陈今伟
	 * @param typeCode
	 * @param	participantID
	 * @param	parentCode
	 * @return
	 * @throws Exception  描述******
	 * @return List<WFParticipant>
	 */
	@SuppressWarnings("unchecked")
	public List<WFParticipant> getParentParticipants(String typeCode, String participantID, String parentCode) {
		LogUtil.logDebug("getAllParentParticipants(typeCode={1}, participantID={2})", null, new Object[] { typeCode, participantID });
		List<WFParticipant> wfParticipants = new ArrayList<WFParticipant>();
		Map condition = new HashMap();
		condition.put("participantID", participantID);
		DataObject [] participants = null;
		try {
			if (CS_PARTICIPANT_TYPE_ORGANIZATION.equalsIgnoreCase(typeCode)) {
				if (CS_PARTICIPANT_TYPE_ORGANIZATION.equalsIgnoreCase(parentCode)) {
					participants = this.srmOMServiceDao.getOrgParentParticipantsByOrg(condition);
				}
			} else if (CS_PARTICIPANT_TYPE_PERSON.equalsIgnoreCase(typeCode)) {
				if (CS_PARTICIPANT_TYPE_ORGANIZATION.equalsIgnoreCase(parentCode)) {
					participants = this.srmOMServiceDao.getOrgParentParticipantsByPerson(condition);
				} else if (CS_PARTICIPANT_TYPE_ROLE.equalsIgnoreCase(parentCode)) {
					participants = this.srmOMServiceDao.getRoleParentParticipantsByPerson(condition);
				}
			}
			wfParticipants = getParticipants4DataObject(participants);
		} catch (Exception e) {
			LogUtil.logError("getAllParentParticipants(typeCode={1}, participantID={2})", e, new Object[] { typeCode, participantID });
		}
		return wfParticipants;
	}

	/**
	 * 方法描述: 	角色机构交集参与者查询
	 * @author 陈今伟
	 * @param typeCode
	 * @param	jointType
	 * @return
	 * @throws Exception  描述******
	 * @return List<WFParticipant>
	 */
	@SuppressWarnings("unchecked")
	public List<WFParticipant> getJointChildParticipant(String typeCode, List<String> jointType) {
		List<WFParticipant> wfParticipants = new ArrayList<WFParticipant>();
		String participantID1 = jointType.get(0);
		String participantID2 = jointType.get(1);
		Map condition = new HashMap();
		condition.put("participantID1", participantID1);
		condition.put("participantID2", participantID2);
		DataObject [] participants = null;
		try {
			if (CS_PARTICIPANT_TYPE_ORGROLE.equalsIgnoreCase(typeCode)) {
				participants = this.srmOMServiceDao.getJointChildParticipant(condition);
				wfParticipants = getParticipants4DataObject(participants);
			}
		} catch (Exception e) {
			LogUtil.logError("getJointChildParticipant(typeCode={1}, jointType:[id1={2},id2={3}])", e, new Object[] { typeCode, participantID1, participantID2 });
		}
		return wfParticipants;

	}

	/**
	 * 方法描述: 	获取某个参与者的参与范围
	 * @author 陈今伟
	 * @param	typeCode
	 * @return
	 * @throws Exception  描述******
	 * @return List<WFParticipant>
	 */
	@SuppressWarnings("unchecked")
	public List<WFParticipant> getParticipantScope(String typeCode, String participantID) {
		List<WFParticipant> wfParticipants = new ArrayList<WFParticipant>();
		try {
			if (CS_PARTICIPANT_TYPE_PERSON.equalsIgnoreCase(typeCode)) {
				WFParticipant wfParticipantSelf = findParticipantByID("person", participantID);
				if (wfParticipantSelf != null) {
					wfParticipants.add(wfParticipantSelf);// 首先加入自己
					Map condition = new HashMap();
					condition.put("participantID", participantID);
					// 依次加入人员所属机构、角色列表
					wfParticipants.addAll(getParticipants4DataObject(this.srmOMServiceDao.getOrgParticipantScopeByPerson(condition)));
					wfParticipants.addAll(getParticipants4DataObject(this.srmOMServiceDao.getRoleParticipantScopeByPerson(condition)));
					getIterativeParent(wfParticipants, participantID, CS_PARTICIPANT_TYPE_PERSON, CS_PARTICIPANT_TYPE_ORGANIZATION);
				}
			}
		} catch (Exception e) {
			LogUtil.logError("getParticipantScope(typeCode={1}, participantID={2})", e, new Object[] { typeCode, participantID });
		}
		return wfParticipants;
	}

	/**
	 * 方法描述: 	获取指定参与者类型
	 * @author 陈今伟
	 * @param	typeCode
	 * @return
	 * @throws Exception  描述******
	 * @return List<WFParticipant>
	 */
	public ParticipantType getParticipantType(String typeCode) {
		return participantTypes.get(typeCode);
	}

	/**
	 * 方法描述: 	获取所有的参与者类型，该方法通常在构造函数中调用，用以初始化参与者类型列表
	 * @author 陈今伟
	 * @return
	 * @throws Exception  描述******
	 * @return List<WFParticipant>
	 */
	public List<ParticipantType> getParticipantTypes() {
		return new ArrayList<ParticipantType>(participantTypes.values());
	}

	/**
	 * 方法描述: 	获取某个类型的所有参与者
	 * @author 陈今伟
	 * @param typeCode
	 * @param pagecond
	 * @return
	 * @throws Exception  描述******
	 * @return List<WFParticipant>
	 */
	public List<WFParticipant> getParticipants(String typeCode, PageCond pagecond) {
		ParticipantType partType = participantTypes.get(typeCode);
		List<WFParticipant> wfParticipants = new ArrayList<WFParticipant>();
		try {
			if (partType == null) {
				return wfParticipants;
			}
			Map condition = new HashMap();
			if (CS_PARTICIPANT_TYPE_ORGANIZATION.equalsIgnoreCase(typeCode)) {
				wfParticipants = getParticipants4DataObject(this.srmOMServiceDao.getAllParticipantsByOrg(condition));
			} else if (CS_PARTICIPANT_TYPE_ROLE.equalsIgnoreCase(typeCode)) {
				wfParticipants = getParticipants4DataObject(this.srmOMServiceDao.getAllParticipantsByRole(condition));
			} else if (CS_PARTICIPANT_TYPE_PERSON.equalsIgnoreCase(typeCode)) {
				wfParticipants = getParticipants4DataObject(this.srmOMServiceDao.getAllParticipantsByPerson(condition));
			}
		} catch (Exception e) {
			LogUtil.logError("getAllParentParticipants(typeCode={1}})", e, new Object[] { typeCode });
		}
		return wfParticipants;
	}

	/**
	 * 方法描述: 	递归查询父节点
	 * @author 陈今伟
	 * @param wfParticipantParents
	 * @param	participantID
	 * @param	parentCode
	 * @return
	 * @throws Exception  描述******
	 * @return List<WFParticipant>
	 */
	private void getIterativeParent(List<WFParticipant> wfParticipantParents, String participantID, String typeCode, String parentCode) {
		List<WFParticipant> wfParticipantParentTemps = null;
		wfParticipantParentTemps = getParentParticipants(typeCode, participantID, parentCode);
		int parentCount = wfParticipantParentTemps == null ? 0 : wfParticipantParentTemps.size();
		if (parentCount > 0) {
			for (int i = 0, j = parentCount; i < j; i++) {
				if (!wfParticipantParents.contains(wfParticipantParentTemps.get(i))) {
					wfParticipantParents.add(wfParticipantParentTemps.get(i));
				}
				getIterativeParent(wfParticipantParents, wfParticipantParentTemps.get(i).getId(), wfParticipantParentTemps.get(i).getTypeCode(), parentCode);
			}
		}
	}
}
