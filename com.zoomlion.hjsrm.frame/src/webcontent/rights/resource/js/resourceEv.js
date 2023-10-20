com.zoomlion.hjsrm.rights.resourceMgr.prototype.initEvent = function(){

	this.resTreePanel.on({
					scope : this,
					'contextmenu' : function(node, e) {
                        node.select();
						var c = node.getOwnerTree().contextMenu;// 菜单
						if(node.attributes['isleaf']=='y'){
                        	Ext.getCmp('myadd').hide();
                        }else{
                        	Ext.getCmp('myadd').show();
                        }
                        c.showAt(e.getXY());
					}
	});

	this.resTreePanel.on('beforemovenode', function(tree, node, oldParent, newParent, index) {
			
			var nodeselt = 'old={resid:'+node.attributes['resid']+',parentresid:'+newParent.attributes['resid']+'}';
			var result = Ext.ex.XMLHttpRequestEx.synchRequest("POST",
					'com.zoomlion.hjsrm.frame.rights.resource.ResourceManage.moveResource.biz.ext?'
							+ encodeURI(nodeselt));
			var obj = Ext.decode(result);
			if (obj.success) {
				if(newParent.attributes['resid']=='0'){
					node.attributes['resseq'] = "."+node.attributes['resid']+".";
				}else{
					node.attributes['resseq'] = newParent.attributes['resseq']+node.attributes['resid']+".";
				}
				
				node.attributes['reslevel'] = newParent.attributes['reslevel']+ 1;
				this.editPanel.form.findField("res/restype").setReadOnly(true);
			      	var isleaf;
			      	if(node.attributes['isleaf']=='y'){
			      		isleaf = true;
			      	}else{
			      		isleaf = false;          	
			      	}
			      	var record = new Ext.data.Record({
			      		resid:node.attributes['resid'],
			      		nodeid:node.id,
			      		rescode:node.attributes['rescode'],
			      		parentresid:newParent.attributes['resid'],
			      		parentresname:newParent.text,
			      		resname:node.attributes['resname'],
			      		reslabel:node.attributes['reslabel'],
			      		restype:node.attributes['restype'],
			      		respath:node.attributes['respath'],
			      		resseq:node.attributes['resseq'],
			      		restype:node.attributes['restype'],
			      		reslevel:node.attributes['reslevel'],
			      		isleaf:isleaf,
			      		displayorder:node.attributes['displayorder'],
			      		resdesc:node.attributes['resdesc']          		
			      	});
			       this.editPanel.form.loadRecord(record);

				return true;
			}else{
				Ext.MessageBox.alert("操作提示", "移动失败!", function() {	
								});
				return false;
			}
			},this);

	this.resTreePanel.mon(this.resTreePanel,'click', function(node){
		  this.editPanel.form.findField("res/restype").setReadOnly(true);
          if(node.text){
          	var isleaf;
          	var isbizmap;
          	if(node.attributes['isleaf']=='y'){
          		isleaf = true;
          	}else{
          		isleaf = false;          	
          	}
          	if(node.attributes['isbizmap']=='y'){
          		isbizmap = true;
          	}else{
          		isbizmap = false;          	
          	}
          	
          	var parentresname = node.parentNode.text;
          	var record = new Ext.data.Record({
          		resid:node.attributes['resid'],
          		rescode:node.attributes['rescode'],
          		parentresid:node.attributes['parentresid'],
          		parentresname:parentresname,
          		nodeid:node.id,
          		resname:node.attributes['resname'],
          		reslabel:node.attributes['reslabel'],
          		restype:node.attributes['restype'],
          		respath:node.attributes['respath'],
          		resseq:node.attributes['resseq'],
          		restype:node.attributes['restype'],
          		reslevel:node.attributes['reslevel'],
          		isleaf:isleaf,
          		isbizmap:isbizmap,
          		displayorder:node.attributes['displayorder'],
          		resdesc:node.attributes['resdesc']          		
          	});
           this.editPanel.form.loadRecord(record);
           
          }
         this.editPanel.selNode=node;
	},this);

}


com.zoomlion.hjsrm.rights.resourceMgr.prototype.onSave = function(){	
	var _this = this.editPanel;
	var cla = this;
	var pid = this.editPanel.form.findField("res/parentresid").value;
	if (_this.form.isValid()) {
			_this.form.submit({
				method : "POST",
				url : _this.saveUrl,
				waitTitle : "操作提示",
				waitMsg : "保存数据中",
				success : function(C, B) {
					var D = B.result;
					if (D.success) {
						Ext.MessageBox.alert("操作提示", "保存成功!", function() {
										cla.refreshNodeById(pid);	
								})
					}
				},
				failure : function(C, B) {
					if (B.result.exception) {
					var A,E;					
					if (B.result.exception.extype == "biz") {
						E = "【" + B.result.exception.message + "】";
						A = Ext.Msg.WARNING;
					} else {
						A = Ext.Msg.ERROR;
						E = "【系统发生异常！请与管理员联系】";
					}					
					Ext.Msg.show({
								width : 350,
								title : "操作提示",
								msg : E,
								icon : A,
								buttons : Ext.Msg.OK
							})
					}
				}
			})
	}
}

com.zoomlion.hjsrm.rights.resourceMgr.prototype.onEdit = function(){
	var node = this.resTreePanel.getSelectionModel().getSelectedNode();
	this.editPanel.form.findField("res/restype").setReadOnly(true);
	if(node.text){
          	var isleaf;
          	if(node.attributes['isleaf']=='y'){
          		isleaf = true;
          	}else{
          		isleaf = false;          	
          	}
          	var parentresname = node.parentNode.text;
          	var record = new Ext.data.Record({
          		resid:node.attributes['resid'],
          		rescode:node.attributes['rescode'],
          		parentresid:node.attributes['parentresid'],
          		parentresname:parentresname,
          		resname:node.attributes['resname'],
          		reslabel:node.attributes['reslabel'],
          		restype:node.attributes['restype'],
          		respath:node.attributes['respath'],
          		resseq:node.attributes['resseq'],
          		restype:node.attributes['restype'],
          		nodeid:node.id,
          		reslevel:node.attributes['reslevel'],
          		isleaf:isleaf,
          		displayorder:node.attributes['displayorder'],
          		resdesc:node.attributes['resdesc']
          	});
           this.editPanel.form.loadRecord(record);
          }
       this.editPanel.selNode=node;
}
com.zoomlion.hjsrm.rights.resourceMgr.prototype.onDel = function(){
	var node = this.resTreePanel.getSelectionModel().getSelectedNode();
	var cla = this;
	Ext.Msg.confirm("系统提示", "您确定要删除该资源吗？", function(btnText) {
		if (btnText == "yes") {
			Ext.Ajax.request({
				url : 'com.zoomlion.hjsrm.frame.rights.resource.ResourceManage.delResource.biz.ext',
				jsonData : {
					res:{
						resid:node.attributes['resid'],
						parentresid:node.attributes['parentresid']
					}
				},
				success : function(resp) {
					var ret = Ext.decode(resp.responseText);
					if (ret.success) {
						//me.requestMask.hide();
						Ext.Msg.alert('系统提示', '删除资源成功!', function() {
									cla.refreshNodeById(node.attributes['parentresid']);
								}, cla);
					}
				}
			});
		}
	}, this);
}


com.zoomlion.hjsrm.rights.resourceMgr.prototype.onAdd = function(){
	var _this = this;
	//	清除面板上历史数据
	_this.editPanel.form.reset();
	//	获得ResCode
	Ext.Ajax.request({
			url : 'com.zoomlion.hjsrm.frame.rights.resource.ResourceManage.getNewResCode.biz.ext',
			success : function(resp) {
				var res = Ext.decode(resp.responseText);
					code = res.rescode;
					_this.editPanel.form.loadRecord(new Ext.data.Record({
				       rescode:code
				   }))  
			}
		});
	var node = _this.resTreePanel.getSelectionModel().getSelectedNode();
	_this.editPanel.form.findField("res/restype").setReadOnly(false);
	if(node.text){
			// 新增资源时，取当前节点名称作为新资源的父级资源名称
          	var parentresname = node.text;
          	// 新增资源时，取当前节点的resid作为新资源的parentresid
          	var parentresid = node.attributes['resid'];
          	// 新增资源时，取当前节点的reslevel+1作为新资源的reslevel
          	var reslevel = node.attributes['reslevel']+1;
          	var resid = 0;
          	var resseq = '保存后自动生成';
          	var record = new Ext.data.Record({
          		parentresid : parentresid,
          		parentresname : parentresname,
          		reslevel : reslevel,
          		resseq : resseq,
          		isleaf:true
          	});
           _this.editPanel.form.loadRecord(record);
  	}
  	_this.editPanel.selNode=node;
  	//_this.editPanel.form.findField("res/rescode").setReadOnly(true);
}

com.zoomlion.hjsrm.rights.resourceMgr.prototype.refreshNodeById = function(nodeid) {
		var cla = this;
		var _this = this.resTreePanel;
		var node = this.editPanel.selNode;
		if (node&&node.parentNode) {
			if (node.parentNode.isExpanded()) {
				this.resTreePanel.loader.load(node.parentNode, function(newnode) {
							newnode.expand();
							newnode.eachChild(function(snode){
								if(snode.attributes['resid']==node.attributes['resid']){
									this.editPanel.selNode = snode;
									snode.select();//选中
								}
							},cla);
						},this);
			} else {
				node.expand();//展开
				_this.selectPath(node.getPath());//选中
			}
			
			
		}else{
			this.resTreePanel.loader.load(this.resTreePanel.getRootNode(), function(newnode) {
					newnode.expand();
			},this);
		}
}
com.zoomlion.hjsrm.rights.resourceMgr.prototype.onReset = function(){
	var nodeid = this.editPanel.form.findField("res/nodeid").getValue();
	var node = this.resTreePanel.getNodeById(nodeid);
	 if(node){
          	var isleaf;
          	if(node.attributes['isleaf']=='y'){
          		isleaf = true;
          	}else{
          		isleaf = false;          	
          	}
          	
          	var parentresname = node.parentNode.text;
          	var record = new Ext.data.Record({
          		resid:node.attributes['resid'],
          		rescode:node.attributes['rescode'],
          		parentresid:node.attributes['parentresid'],
          		parentresname:parentresname,
          		resname:node.attributes['reslabel'],
          		reslabel:node.attributes['reslabel'],
          		restype:node.attributes['restype'],
          		respath:node.attributes['respath'],
          		resseq:node.attributes['resseq'],
          		restype:node.attributes['restype'],
          		reslevel:node.attributes['reslevel'],
          		isleaf:isleaf,
          		displayorder:node.attributes['displayorder'],
          		resdesc:node.attributes['resdesc']          		
          	});
           this.editPanel.form.loadRecord(record);
           
          }
	this.editPanel.selNode = null;
}
