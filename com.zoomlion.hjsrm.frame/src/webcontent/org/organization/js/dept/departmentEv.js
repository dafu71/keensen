/*
 * 机构管理
 */
com.zoomlion.hjsrm.org.departmentMgr.prototype.initEvent = function() {

	//增加查询事件
	this.deptQueryPanel.mon(this.deptQueryPanel,'query', function(form,vals){
        var store = this.deptGridPanel.store;
        delete vals[vals.param];
        store.baseParams = {
            'query/orgname' : vals.orgname,
            'query/orgtype' : vals.orgtype,
            'query/orgcode' : vals.orgcode,
            'query/status' : vals.status,
            'query/orgid' : vals.orgid,
            'query/dataorgid' : vals.dataorgid
        };
       store.load({
                    params : {
                        "pageCond/begin" : 0,
                        "pageCond/length" : this.deptGridPanel.pagingToolbar.pageSize
                    }
                });
	},this);
	
	this.deptInputWin.mon(this.deptInputWin,'hide',function(){
		this.deptInputWin.form.findField('parentorgid').setDisabled(false);
	},
	this);
	
	this.deptEditWin.mon(this.deptEditWin,'hide',function(){
		this.deptEditWin.form.findField('parentorgid').setDisabled(false);
	},
	this);
	
	//增加修改事件
	this.deptGridPanel.mon(this.deptGridPanel,'update', function(gird,record){
		this.deptEditWin.show();
		this.deptEditWin.loadData(record);
	},this);
	
	//增加修改后事件
	this.deptEditForm.mon(this.deptEditForm,'afterload', function(gird,record){
		if(record.parentorgid == null){
			this.deptEditWin.form.findField('parentorgid').setDisabled(true);
		}
	},this);
	
	this.deptEditForm.mon(this.deptEditForm,'beforeload',function(formpanel,data){
		var form = formpanel.getForm();
        form.findField('orgcode').originalValue = data['orgcode'];
    },this);
    
    this.porgselecttion.mon(this.porgselecttion,'getselectnode',function(tree, node) {
		var orglevelfield = this.deptInputWin.form.findField('org/orglevel');
		orglevelfield.setValue(node.attributes['orglevel']+ 1);
		var ptypefield = this.deptInputWin.form.findField('org/ptype');
		ptypefield.setValue(node.attributes['orgtype']);
		this.orgselecttion.reset();
	},this)
					
    this.orgselecttion.mon(this.orgselecttion,'expand',function(combo,record,index){
    	var ptypefield = this.deptInputWin.form.findField('org/ptype');
    	var ptype = ptypefield.getValue();
    	var orgtype = this.deptInputWin.form.findField('org/orgtype');
		var orgtypeStore = orgtype.store;
		orgtypeStore.filterBy(function(record,id){
	       	if(ptype==''){
				//	只能挂总公司
	       		if(record.get('DICTID') == '0'){
	                return true;       
	       		}else{
	       			return false;
	       		}
	       	}else if(ptype=='0' ){
				//	总公司下只能挂部门和分公司
	       		if(record.get('DICTID') == '1'|| record.get('DICTID') == '2' ){
	                return true;       
	       		}else{
	       			return false;
	       		}
	       	}else if(ptype=='1'){
	       		//	分公司下只能挂部门或者区域
	       		if(record.get('DICTID') == '2' || record.get('DICTID') == '3'){
	       			return true;
	       		}else{
	       			return false;
	       		}
	       	}else if(ptype=='2'){
	       		//	部门下只能挂部门、营业厅、其他、班组
	       		if(record.get('DICTID') == '2' || record.get('DICTID') == '4' || record.get('DICTID') == '5'||record.get('DICTID') == 'X'){
	       			return true;
	       		}else{
	       			return false;
	       		}
	       	}else if(ptype=='3'){
	       		//	区域下只能挂部门、营业厅、其他
	       		if(record.get('DICTID') == '2' || record.get('DICTID') == '4' || record.get('DICTID') == 'X'){
	       			return true;
	       		}else{
	       			return false;
	       		}
	       	}else if(ptype=='4'){
	       		//	营业厅下
	       			return false;
	       	}else if(ptype=='5'){
	       		//	班组下只能挂部门、营业厅、其他、班组
	       		if(record.get('DICTID') == '2' || record.get('DICTID') == '4' || record.get('DICTID') == '5'||record.get('DICTID') == 'X'){
	       			return true;
	       		}else{
	       			return false;
	       		}
	       	}else if(ptype=='6'){
	       		//	其他下不能挂总公司分公司
	       		if(record.get('DICTID') == '0' || record.get('DICTID') == '1'){
	       			return false;
	       		}else{
	       			return true;
	       		}
	       	}
	    });
    },this)
    
     this.porgselecttions.mon(this.porgselecttions,'getselectnode',function(tree, node) {
		var orglevelfield = this.deptEditWin.form.findField('org/orglevel');
		orglevelfield.setValue(node.attributes['orglevel']+ 1);
		var ptypefield = this.deptEditWin.form.findField('org/ptype');
		ptypefield.setValue(node.attributes['orgtype']);
		this.orgselecttions.reset();
	},this)
					
    this.orgselecttions.mon(this.orgselecttions,'expand',function(combo,record,index){
    	var ptypefield = this.deptEditWin.form.findField('org/ptype');
    	var ptype = ptypefield.getValue();
    	var orgtype = this.deptEditWin.form.findField('org/orgtype');
		var orgtypeStore = orgtype.store;
		orgtypeStore.filterBy(function(record,id){
		    if(ptype==''){
				//	只能挂总公司
	       		if(record.get('DICTID') == '0'){
	                return true;       
	       		}else{
	       			return false;
	       		}
	       	}else if(ptype=='0' ){
				//	总公司下只能挂部门和分公司
	       		if(record.get('DICTID') == '1'|| record.get('DICTID') == '2' ){
	                return true;       
	       		}else{
	       			return false;
	       		}
	       	}else if(ptype=='1'){
	       		//	分公司下只能挂部门或者区域
	       		if(record.get('DICTID') == '2' || record.get('DICTID') == '3'){
	       			return true;
	       		}else{
	       			return false;
	       		}
	       	}else if(ptype=='2'){
	       		//	部门下只能挂部门、营业厅、其他、班组
	       		if(record.get('DICTID') == '2' || record.get('DICTID') == '4' || record.get('DICTID') == '5'||record.get('DICTID') == 'X'){
	       			return true;
	       		}else{
	       			return false;
	       		}
	       	}else if(ptype=='3'){
	       		//	区域下只能挂部门、营业厅、其他
	       		if(record.get('DICTID') == '2' || record.get('DICTID') == '4' || record.get('DICTID') == 'X'){
	       			return true;
	       		}else{
	       			return false;
	       		}
	       	}else if(ptype=='4'){
	       		//	营业厅下只能挂组
	       			return false;
	       	}else if(ptype=='5'){
	       		//	班组下只能挂部门、营业厅、其他、班组
	       		if(record.get('DICTID') == '2' || record.get('DICTID') == '4' || record.get('DICTID') == '5'||record.get('DICTID') == 'X'){
	       			return true;
	       		}else{
	       			return false;
	       		}
	       	}else if(ptype=='6'){
	       		//	其他下不能挂总公司分公司
	       		if(record.get('DICTID') == '0' || record.get('DICTID') == '1'){
	       			return false;
	       		}else{
	       			return true;
	       		}
	       	}
	    });
    },this)
};

/*
 * 列表工具栏新增
 */
com.zoomlion.hjsrm.org.departmentMgr.prototype.onAdd = function() {
    this.deptInputWin.show();
    var form = this.deptInputWin.form;
    form.reset();
    var param  ={};
    this.deptInputWin.fireEvent('beforeadd',this.deptInputWin,param);
    Ext.Ajax.request({
			url : 'com.zoomlion.hjsrm.frame.org.organization.OrgManager.getOrgCode.biz.ext',
			success : function(resp) {
				var res = Ext.decode(resp.responseText);
					code = res.data;
					if(param.orgid){
				        form.loadRecord(new Ext.data.Record({
				        parentorgid:param['orgid'],
				        orglevel:param['orglevel']+1,
				        orgcode:code,
				        ptype:param['orgtype']
				    }))    
			    }else{
			    	  form.loadRecord(new Ext.data.Record({
				       orgcode:code
				    }))  
			    }
			}
		});

};


/*
 * 列表工具栏修改
 */
com.zoomlion.hjsrm.org.departmentMgr.prototype.onEdit = function(){
    this.deptGridPanel.onEdit();
}


com.zoomlion.hjsrm.org.departmentMgr.prototype.onCancellation = function() {
	// 保存this
	var me = this;
	var record = this.deptGridPanel.selModel.getSelections();
	var data = [];
	if (record.length == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
		return;
	}
	for (var i = 0; i < record.length; i++) {
		if (record[i].data.status == 'cancel') {
			return;
		}
		data.push(record[i].data);
	}
	Ext.Msg.confirm("系统提示", "您确定要注销该机构吗？", function(btnText) {
		if (btnText == "yes") {
			me.requestMask = this.requestMask|| new Ext.LoadMask(Ext.getBody(), {msg : "后台正在操作,请稍候!"	});
			me.requestMask.show();
			Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.frame.org.organization.OrgManager.removeOrganizations.biz.ext',
				jsonData : {
					entitys : data
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						me.requestMask.hide();
						Ext.Msg.alert('系统提示', '注销机构成功!', function() {
									this.deptGridPanel.refresh();
									var pid = record[0].data.parentorgid;
									if(!pid||pid=='0'){
							    		this.orgTree.getRootNode().reload();
							    		this.orgTree.getRootNode().expand(true);
							    	}else{
							    		this.orgTree.selectPath(record[0].data.orgseq);
							    		this.orgTree.refreshNodeById(pid);
							    	}       
									me.requestMask.hide();
								}, me);
					}else{
						me.requestMask.hide();
					}
				}
			});
		}
	}, this);
}
com.zoomlion.hjsrm.org.departmentMgr.prototype.onRecovery = function() {
	// 保存this
	var me = this;
	var record = this.deptGridPanel.selModel.getSelections();
	var data = [];
	if (record.length == 0) {
		Ext.Msg.alert("系统提示", "没有选定数据，请选择数据行!");
		return;
	}
	for (var i = 0; i < record.length; i++) {
		if (record[i].data.status == 'running') {
			Ext.Msg.alert("系统提示", "-"+record[i].data.orgname+"-没有被注销,请重新选择!");
			return;
		}
		data.push(record[i].data);
	}
	Ext.Msg.confirm("系统提示", "您确定要重新启用该机构吗？", function(btnText) {
		if (btnText == "yes") {
			me.requestMask = this.requestMask|| new Ext.LoadMask(Ext.getBody(), {msg : "后台正在操作,请稍候!"	});
			me.requestMask.show();
			Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.frame.org.organization.OrgManager.recoveryOrganization.biz.ext',
				jsonData : {
					entitys : data
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						me.requestMask.hide();
						Ext.Msg.alert('系统提示', '恢复机构成功!', function() {
									this.deptGridPanel.refresh();
									var pid = record[0].data.parentorgid;
									if(!pid||pid=='0'){			
							    		this.orgTree.getRootNode().reload();
							    		this.orgTree.getRootNode().expand(true);
							    	}else{
							    		this.orgTree.refreshNodeById(pid);
							    	}       
								}, me);
					}else{
						me.requestMask.hide();
					}
				}
			});
		}
	}, this);
}
