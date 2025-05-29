Ext.ns("com.keensen.ump");
/**
 * 
 * @class com.keensen.ump.optColumnWindow
 * @extends Ext.Window
 *          <p>
 *          设置操作列表字段弹出窗
 */
com.keensen.ump.optColumnWindow = Ext.extend(Ext.Window, {
	title : "列表字段设置",
	resizable : false,
	modal : true,
	maximizable : false,
	closeAction : "hide",
	buttonAlign : "center",
	autoScroll : true,
	width : 800,
	height : 600,
	layout : 'border',

	// 自定义属性
	module : '',// 模块类型
	optUserId : '',// 操作员id
	relationListId : null, // 关联的listid

	initComponent : function() {

		this.buildListPanel();
		this.items = [this.listPanel];
		this.buttons = [{
			text : "保存",
			scope : this,
			handler : function() {
				var A = this.listPanel;
				var records = A.store.getRange();
				var module = this.module;
				var optUserId = this.optUserId;

				var details = [];
				var details2 = [];
				var cnt = 0;
				Ext.each(records, function(r) {
							if (cnt <= 60) {
								if (!Ext.isEmpty(r.data['checked'])) {
									var d = {
										'checked' : r.data['checked'],
										'module' : module,
										'field' : r.data['field'],
										'fieldName' : r.data['fieldName']
												.trim(),
										'sortNo' : r.data['sortNo'],
										'userId' : optUserId
									}
									details.push(d);
									cnt++;
								}
							} else {
								if (!Ext.isEmpty(r.data['checked'])) {
									var d = {
										'checked' : r.data['checked'],
										'module' : module,
										'field' : r.data['field'],
										'fieldName' : r.data['fieldName']
												.trim(),
										'sortNo' : r.data['sortNo'],
										'userId' : optUserId
									}
									details2.push(d);
									cnt++;
								}
							}
						});

				if (details.length == 0) {
					Ext.Msg.alert("系统提示", "没有配置选项，请检查");
					return;
				} else {

					var _this = this;

					var mk = new Ext.LoadMask(this.id, {
								msg : '正在保存，请稍候!',
								removeMask : true
							});
					mk.show();
					Ext.Ajax.request({
						method : "post",
						scope : this,
						url : 'com.keensen.ump.base.base.saveUserOptColumn.biz.ext',
						jsonData : {
							"entitys" : details,
							"entitys2" : details2
						},
						success : function(response, action) {
							mk.hide();
							// 返回值处理
							var result = Ext.decode(response.responseText);
							if (result.success) {
								Ext.Msg.alert("系统提示", "保存成功!", function() {
											_this.hide();
											// _this.listPanel.store.removeAll();
											_this.listPanel.store.reload({});
											if (!Ext
													.isEmpty(_this.relationListId)) {
												Ext
														.getCmp(_this.relationListId).store
														.reload({});
											}

										}, _this);
							} else {
								Ext.Msg.alert("系统提示", "保存失败!", function() {
											_this.hide();
											// _this.listPanel.store.removeAll();
											_this.listPanel.store.reload({});
										}, _this);
							}

						},
						failure : function(resp, opts) {
							mk.hide();
						}
					});

				}
			}
		}, {
			text : "关闭",
			scope : this,
			handler : function() {
				this.hide();
				// this.listPanel.store.reload();
			}
		}];
		com.keensen.ump.optColumnWindow.superclass.initComponent.call(this);
	},
	buildListPanel : function() {

		var selModel = new Ext.grid.CheckboxSelectionModel({
					singleSelect : true,
					header:''
				});

		var ynStore = new Ext.data.ArrayStore({
					fields : ['code', 'name'],
					data : [['Y', '是'], ['N', '否']]
				});

		this.listPanel = new Ext.fn.EditListPanel({
			region : 'center',
			ref : '../listPanel',
			// title : '',
			clicksToEdit : 1,
			hsPage : false,
			selModel : selModel,
			delUrl : '...',
			viewConfig : {
				forceFit : false
			},
			columns : [new Ext.grid.RowNumberer(), selModel, {
						dataIndex : 'fieldName',
						width : 250,
						header : '字段名称'
					}, {
						dataIndex : 'field',
						width : 150,
						header : '字段代码'
					}, {
						dataIndex : 'checked',
						header : '是否显示',
						width : 100,
						sortable : true,
						// css : 'background:#c7c7c7;',
						editor : new Ext.grid.GridEditor(new Ext.form.ComboBox(
								{
									allowBlank : false,
									triggerAction : 'all',
									hiddenName : 'code',
									typeAhead : true,
									typeAheadDelay : 100,
									forceSelection : true,
									store : ynStore,
									mode : 'local',
									editable : true,
									valueField : 'code',
									displayField : 'name',
									listeners : {
										'specialkey' : function() {
											return false;
										},
										'change' : function(o, newValue,
												oldValue) {

										}
									}
								})),
						renderer : function(value) {
							if (value == 'Y')
								return '是';
							return '否';

						}
					}],
			store : new Ext.data.JsonStore({
						url : 'com.keensen.ump.base.base.queryUserOptColumn.biz.ext',
						root : 'data',
						autoLoad : true,
						fields : [{
									name : 'fieldName'
								}, {
									name : 'field'
								}, {
									name : 'checked'
								}, {
									name : 'userId'
								}, {
									name : 'module'
								}, {
									name : 'sortNo'
								}],
						baseParams : {
							'condition/module' : this.module,
							'condition/userId' : this.optUserId
						},
						listeners : {
							scope : this,
							'load' : function() {

							}

						}
					})
		});
	}

})