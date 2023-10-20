 ////////////////////////////////UI///////////////////////////////
 /**
     * 多选数据加载
     */
	this.storeDept = this.storeDept||new Ext.data.JsonStore({
		url : 'com.zoomlion.hjsrm.techNotice.ComUtil.queryTechNoticeData.biz.ext', // 获得业务数据
		root : "techData",
		baseParams :{
		"entity/dataId":"TECH_NOTICES_DEPTS"		
		},
		fields : [{
					name : 'dictid'
				}, {
					name : 'dictname'
				}],
		autoLoad : false
	});
	
	/**
	 * 多选列表
	 */
	this.selectDept =this.selectDept|| new Ext.form.MultiSelect({
		colspan : 2,
		width : 600,
		id:sendDeptId,
		editable : false,
		store : this.storeDept,
		valueField : 'dictid',
		fieldLabel : '发送部门',
		displayField : "dictname",
		mode : 'local',
		triggerAction : 'all',
		emptyText : '请选择',
		maxHeight : 200
			// 下拉框的最大高度
		});
		///////////////////////////EV//////////////////////////////////
this.storeDept.on('load', function() {				
		Ext.getCmp(sendDeptId).setValue(str); // 默认选中王五
    });
    
    
    /////////////////////AJax提交//////////758.8///////////
    Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.frame.rights.role.RoleManage.addOperatorRole.biz.ext',
				jsonData : {
					operatorrole : vals
				},
				success : function(response, action) {
					var result = Ext.decode(response.responseText);
					if (result.success) {
						mk.hide();
						Ext.Msg.alert("系统提示", "添加成功", function() {
									grid.doQuery(roleid);
									win.hide();
								})
					} else {
						mk.hide();
						Ext.Msg.alert("系统提示", "添加失败");
					}
				}
			});
			
//			, {
//						header : '流程图',
//						width : 50,
//						scope : this,
//						renderer : function(v, m, r, i) {
//							return "<img alt='流程图' src='srmclient/working/img/color_wheel.png' onclick='showProcessGraph("
//									+ Ext.encode(listId)
//									+ ","
//									+ i
//									+ ")'; style='cursor:pointer'>";
//						}
//					}
			
			var selOperaotorids = this.listEmpPanel.selModel.getSelections();
				if (selOperaotorids.length > 0) {
					var vals = [];
					Ext.each(selOperaotorids, function(record) {
								vals[vals.length] = {
									'roleid' : record.get('roleid'),
									'userid' : record.get('userid'),
									'operatorname' : record.get('operatorname')
								}
							});
				}else{
					Ext.Msg.alert("系统提示", "请选择下一环节参与人员!");
					return false;
				}