Ext.namespace('Srm.workflows');
/**
 * 
 * @class Srm.workflows.TrackApplyWin
 * @extends Ext.Window
 * <p>跟进窗口
 */
Srm.workflows.TrackApplyWin = Ext.extend(Ext.Window, {
	title : '工作单跟进信息',
	closeAction : 'hide',
	layout : 'border',
	sendListPanel : undefined,
	modal : true,
	collapsible : true,
	maximizable : true,
	width : 800,
	height : 450,
	buttonAlign : 'center',
	initComponent : function() {
		this.buildTrackList();
		this.buildTrackPanel();
		this.buildItems();
		this.buildButtons();
		this.buildTrackWin();
		Srm.workflows.TrackApplyWin.superclass.initComponent.call(this);
	},
	buildItems : function() {
		this.items = [this.trackInputPanel, this.tackedListPanel];
	},
	buildButtons : function() {
		this.buttons = [{
								text : '关闭',
								scope : this,
								handler : function() {
									this.hide();
									this.sendListPanel.refresh();
								}
				      }]
	},
	buildTrackList : function() {
		//热线跟进列表
		this.tackedModel = new Ext.grid.CheckboxSelectionModel();
		this.tackedListPanel = new Ext.fn.ListPanel({
			title : '跟进信息列表',
			hsPage : false,
			region : 'center',
			delUrl : 'com.zoomlion.hjsrm.pub.businessclib.demand.order.TrackOrder.deleteTrack.biz.ext',
			tbar : ["->", {
								text : '跟进',
								scope : this,
								iconCls : 'icon-group_add',
								handler:function(){
									if(!this.trackInputPanel.getForm().isValid()){
										return;
									}
								    Ext.Msg.confirm("系统提示", "您确定要跟进吗?", function(btnText) {
										if (btnText == "yes") {
										    this.trackInputPanel.saveData();
										}
				                     },this);
								}
							},'-',{
						text : '修改',
						scope : this,
						iconCls : 'icon-application_edit',
						handler :function(){
							var selections = this.tackedListPanel.getSelectionModel().getSelections();
							for (var i = 0; i < selections.length; i++) {
			                    var state = selections[i].get("trackstate");
							    if(state == trackState){
								    Ext.Msg.alert("系统提示", "跟进状态为已查看，不能修改！");
								    return false;
								}
							}
							if (selections.length < 1) {
								Ext.Msg.alert("系统提示", "请选择一条跟进信息!");
								return false;
							} else if (selections.length >1){
								Ext.Msg.alert("系统提示", "只能选择一条跟进信息!");
								return false;
							}
						    this.editFollowupWin.show();
							this.editFollowupWin.loadData(new Ext.data.Record({'pkid' : selections[0].get("pkid")}));
						}
					}, "-",{
						text : '删除',
						scope : this,
						iconCls : 'icon-application_delete',
						handler:function(){
							var records = this.tackedListPanel.getSelectionModel().getSelections();
							for (var i = 0; i < records.length; i++) {
			                    var state = records[i].get("trackstate");
							    if(state == trackState){
								    Ext.Msg.alert("系统提示", "跟进状态为已查看，不能删除！");
								    return false;
								}
							}
							this.tackedListPanel.onDel();
						}
					}],
			columns : [new Ext.grid.RowNumberer(), this.tackedModel, {
						header : "跟进内容",
						width:180,
						dataIndex : "content",
						renderer:function(value, metaData, record, rowIndex, colIndex, store){
							if(!value){
								return;	
							}
							metaData.attr='ext:qtip='+value+' ext:qwidth=300';
							return value;
						}
					}, {
						header : "跟进状态",
						width:180,
						xtype : 'dictcolumn',
						dictData : SQ_TRACK_TRACKSTATE,
						dataIndex : "trackstate"
					}, {
						header : "操作员",
						width:180,
						dataIndex : "modifyby"
					}, {
						header : "操作时间",
						width:180,
						dataIndex : "updatetime"
					}],
			sm : this.tackedModel,
			store : new Ext.data.JsonStore({
				url : 'com.zoomlion.hjsrm.pub.businessclib.demand.order.TrackOrder.queryTrackByOrder.biz.ext',
				root : 'data',
				fields : ['pkid', 'trackstate', 'modifyby', 'content',
						'updatetime']
			})
		});

	},
	buildTrackPanel : function() {
		var _this = this;
		this.trackInputPanel = new Ext.fn.InputPanel({
			xtype : 'inputPanel',
			pgrid : this.tackedListPanel,
			columns : 2,
			region : 'north',
			height : 100,
			autoHide:false,
			listeners :{
				'aftersave':function (){
					_this.sendListPanel.refresh();
					_this.tackedListPanel.refresh();
					_this.trackInputPanel.content.setValue("");
					_this.trackInputPanel.departtype.setValue("");
				}
			},
			saveUrl : "com.zoomlion.hjsrm.pub.businessclib.demand.order.TrackOrder.addTrack.biz.ext",
			fields : [{
                    fieldLabel : '优先级',
		            xtype : "dictcombobox",
		            value : '2',
                    dictData : SQ_PRIORITY,
		            hiddenName : "entity/priority"
		        }, {
		            fieldLabel : '跟进部门',
		            ref:'../departtype',
		            xtype : "dictcombobox",
		            dictData : SQ_TRACK_DEPARTTYPE,
		            allowBlank : false,
		            hiddenName : "entity/departtype"
		        }, {
		            xtype : 'textarea',
		            fieldLabel : '跟进内容',
		            allowBlank : false,
		            ref:'../content',
		            maxLength:250,
		            name : 'entity/content',
		            colspan : 2
		         },{
					xtype : "textfield",
					name : "entity/applyinfopkid",
					hidden : true
				 },{
			          name :"entity/busipkid",
			          hidden : true
			     }]
		});
	},
	buildTrackWin :function() {
		var scope = this;
	     //创建跟进信息修改panel
	    this.followupEditPanel = this.followupEditPanel || new Ext.fn.EditPanel({
	        loadUrl : "com.zoomlion.hjsrm.pub.businessclib.demand.order.TrackOrder.loadTrackByPkid.biz.ext",
	        saveUrl : 'com.zoomlion.hjsrm.pub.businessclib.demand.order.TrackOrder.updateTrack.biz.ext',
	        title : '跟进信息修改',
	        pgrid :this.tackedListPanel,
	        
	        columns : 2,
	        fields : [{
	          xtype : "textfield",
	          name : "entity/pkid",
	          dataIndex : 'pkid',
	          hidden : true
	        }, {
	          fieldLabel : '优先级',
	          xtype : "dictcombobox",
	          dictData : SQ_PRIORITY,
	          dataIndex : "priority",
	          hiddenName : "entity/priority"
	        }, {
	          fieldLabel : '跟进部门',
	          xtype : "dictcombobox",
	          dictData : SQ_TRACK_DEPARTTYPE,
	          allowBlank : false,
	          dataIndex : "departtype",
	          hiddenName : "entity/departtype"
	        }, {
	          xtype : 'textarea',
	          fieldLabel : '跟进内容',
	          allowBlank : false,
	          maxLength:250,
	          dataIndex : "content",
	          name : 'entity/content',
	          colspan : 2
	        }]
	    });
		//创建跟进记录窗口--点击跟进按钮打开
	   this.editFollowupWin = this.editFollowupWin || new Ext.fn.FormWindow({
					title : '跟进修改',
					buttonAlign : 'center',
					height : 350,
					width : 700,
					modal : true,
					layout :'fit',
					closeAction : 'hide',
					collapsible : true,
					items : [this.followupEditPanel]
				});
	}
});