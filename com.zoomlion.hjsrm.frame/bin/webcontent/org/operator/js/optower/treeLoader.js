Ext.namespace("Ext.ex");
/**
 * 树节点加载组件TreeLoader
 * @author rye 
 * @class Ext.ex.TreeLoader
 * @extends Ext.tree.TreeLoader
 */
Ext.ex.ResTreeLoader = Ext.extend(Ext.tree.TreeLoader, {
	constructor : function(config) {
	    Ext.apply(this, config);
	    this.addEvents(
	        "beforeload",
	        "load",
	        "loadexception"
	    );
	   Ext.ex.ResTreeLoader.superclass.constructor.call(this);
	},
    createNode : function(attr){
        if(this.baseAttrs){
            Ext.applyIf(attr, this.baseAttrs);
        }
        if(this.applyLoader !== false && !attr.loader){
            attr.loader = this;
        }
        if(Ext.isString(attr.uiProvider)){
           attr.uiProvider = this.uiProviders[attr.uiProvider] || eval(attr.uiProvider);
           
        }
        if(attr.nodeType){
            return new Ext.tree.TreePanel.nodeTypes[attr.nodeType](attr);
        }else{
        	//alert(attr.checked);
        	attr.loaded = true;
        	var s = attr.leaf ?
                        new Ext.tree.TreeNode(attr) :
                        new Ext.tree.AsyncTreeNode(attr);
           	s.attributes.leaf = true;
            return s;
        }
    },
	//处理树查询返回结果
    processResponse : function(response, node, callback, scope){
    	
    	var root = this.root;//json中的根节点
    	var parentField = this.parentField;//父节点Id字段名
    	var childField = this.childField;//子节点Id字段名
    	var textField = this.textField;
    	var checked = this.checked;
    	var json = response.responseText;//取返回数据
        if(!root||!parentField||!childField||!json){//必须要配置root等属性 读取数据
    		this.handleFailure(response);//异常处理
    	}
        try {
            var jsonData = Ext.decode(json);//转译字符
            var o = jsonData[root];//取得树数据
            if(!o) this.handleFailure(response);//不存在时 出错
            if(o.length>0){//当存在树节点时
            	for(var p in o[0]){//取得树中的父节点字段和子节点字段
					if(p.trim().toUpperCase()==parentField.trim().toUpperCase()){
						parentField = p;
					}
					if(p.trim().toUpperCase()==childField.trim().toUpperCase()){
						childField = p;
					}
            	}
            }
            //调用appendChild方法 为node加载子节点
            this.appendChild(node,o,
            	{parentField:parentField,childField:childField,textField:textField,checked:checked});
            //执行回调函数
            this.runCallback(callback, scope || node, [node]);
        }catch(e){
            this.handleFailure(response);
        }
    },
    //为node加载子节点方法
	appendChild : function(parentNode,childDatas,config){
		//判断传入值
		if(!parentNode||!childDatas||!config||!config.parentField||!config.childField){
			this.handleFailure(response);
		}
		//取父节点字段和子节点字段
		var parentField = config.parentField;
		var childField = config.childField;
		var textField = config.textField;
		var checked = config.checked;
		parentNode.beginUpdate();//开始更新节点
		for(var i=0;i<childDatas.length;i++){
			var childData = childDatas[i];
            childData['id'] ="r"+childData[childField];
			childData['text'] = childData[textField];
            childData['leaf'] = childData['isleaf'].toUpperCase()=='Y'?true:false;//是否子节点
			//if(!childData){continue; }
			if(childData[parentField]!=parentNode.attributes[childField]) continue;
			if(childData['added']) continue;//如果已经加到节点中了
			if(childData['checked'] == '1' || childData['checked'] == 'true'){
				childData['checked'] = true;
			}
			var n = this.createNode(childData);//创建子节点
			
			childData['added'] = true;//设置子节点已经加入标记
            if(n){ parentNode.appendChild(n); }
            this.appendChild(n,childDatas,config);//为新建的子节点增加子节点
		}
		parentNode.endUpdate();
	}

});
Ext.reg("restreeloader", Ext.ex.ResTreeLoader);