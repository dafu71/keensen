com.zoomlion.hjsrm.opt.optAuthMgr.prototype.initEvent = function(){
        
        this.optAuthWin.mon(this.optauthtree,'expandnode',function(node){
        		node.eachChild(function(currentNode) {
        			if(currentNode.attributes['indeterminate']){
        				currentNode.getUI().checkbox.indeterminate = true;
        			}					
				});
        });
        this.optAuthWin.mon(this.optauthtree,'checkchange',function(node,checked){
                        var addHandler = function(cnode){//选中
                                if(cnode.id!=0 && cnode.getUI().checkbox &&cnode.getUI().checkbox.checked){//不是根节点，而且存在父节点
                                    var parentId ="r"+cnode.attributes['parentresid'];
                                    var nodeObj = Ext.apply(cnode.attributes,{id:"r"+cnode.attributes['resid'],uiProvider:null,authtype:'y',startdate:new Date()});
                               
                                  //  this.optauthgrid.addNodeByPid(parentId,nodeObj);
                               //     addNodeByPid : function(B, D) {
									var C = this.optauthgrid.getNodeById(parentId);
									if (C) {
										C.leaf = false;
										if (!this.optauthgrid.getNodeById(nodeObj.id)) {
											if (!nodeObj.uiProvider) {
												nodeObj.uiProvider = Ext.ux.tree.TreeGridNodeUI
											}
											var A = new Ext.tree.TreeNode(nodeObj);
											C.expand(false, false, function() {
														C.appendChild(A);
														//Ext.fly(A.ui.elNode).highlight(this.optauthgrid.highlightColor)
													}, this)
										}
									}
								//	}
                                    }    
                            }
                        var removeHandler = function(cnode){
                            if(!checked && cnode.id!=0){//不是根节点，未选中
                                var ret =cnode.findChildBy(function(childNode,opt){
                                    return childNode.getUI().checkbox.checked ==true
                                },this);
                                if(!ret){//不存在
                                    var delNode =this.optauthgrid.getNodeById("r"+cnode.attributes['resid']);
                                    if(delNode && delNode.id !='r0'){
                                        this.optauthgrid.removeNode(delNode);
                                    }
                                }
                            }
                        }
                        if(checked){
                            //node.bubble(addHandler, this);
                        	var rootNode = this.optauthtree.getRootNode();
                            rootNode.cascade(addHandler,this);
                        }else{
                        	 node.cascade(removeHandler,this);
                             node.bubble(removeHandler, this);
                        }
                        
                    },this);
     /*
     * beforeload(数据加载前)事件处理
     * 右边特权树加载
     */
        this.optauthgrid.mon(this.optauthgrid.loader,'beforeload',function(loader,node){
            loader.baseParams = {operatorid:this.operatorid}
        },this);
       //左边资源树加载
        this.optauthtree.mon(this.optauthtree.loader,'beforeload',function(loader,node){
            loader.baseParams = {dataorgid:this.dataorgid,operatorid:this.operatorid}
        },this); 
        
       this.optauthgrid.mon(this.optauthgrid,'load',function(node){
            this.expandAll();
            var rootNode = this.getRootNode();
            rootNode.cascade(function(cnode){
                                if(!cnode.isLeaf()&&cnode != rootNode){//非子节点，根节点
                                        //cnode.hideButton('update');//隐藏非子节点修改按钮
                                        //cnode.hideButton('remove');
                                    }
                        },this); 
       },this.optauthgrid);             
    }
/**
 * 保存按钮点击处理
 */    
com.zoomlion.hjsrm.opt.optAuthMgr.prototype.onSave = function(){
    var rootNode = this.optauthgrid.getRootNode();
    var empresArr =[];
    var _this = this;
    var operatorid;
    rootNode.cascade(function(cnode){
    	if(rootNode!=cnode){
    		var startdate = cnode.attributes['startdate'];
    		var enddate = cnode.attributes['enddate'];
    		if(startdate  instanceof   Date){
    			startdate = startdate.format('Y/m/d');
    		}else if(startdate == undefined){
    			startdate = null;
    		}
    		if(enddate  instanceof   Date){
    			enddate = enddate.format('Y/m/d');
    		}else if(enddate == undefined){
    			enddate = null;
    		}
    		var jsonData ={resid:cnode.attributes['resid'],authtype:cnode.attributes['authtype']}
    		jsonData.startdate = startdate;
    		jsonData.enddate = enddate;
	        jsonData.operatorid = this.operatorid;
	        jsonData.dataorgid = this.dataorgid;
	        empresArr.push(jsonData);
    	}
    },this);
    Ext.Ajax.request({
             url:'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.saveEmpOperres.biz.ext',
             jsonData:{entitys:empresArr , operatorid :this.operatorid},
             success:function(resp){
                var ret = Ext.decode(resp.responseText);
                if(ret.success){
                	Ext.Msg.alert('系统提示','授权成功!',function(){
                		_this.optAuthWin.hide();
                	});
                	
                }else{
                	Ext.Msg.alert('系统提示','授权失败!');
                }
             }
          });
}