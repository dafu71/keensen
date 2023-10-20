Ext.form.DatetimeRegion = Ext.extend(Ext.Container, {
			//autoWidth : true, 
			autoEl : "div",
			layout : "column",
			anchor : "100%",
			format : "Y-m-d H:i:s",
			allowBlank:true,
			name : "",
			value:"",
			itemCls :'datetimeRegin',
			indexArray:['startDate','endDate'],
			valueScope :[null,null],
			nameArray:undefined,
			defaults : {
				xtype : "container",
				autoEl : "div",
				anchor : "100%"
			},
			initComponent : function() {
				if (this.allowBlank === false && this.fieldLabel) {
					this.fieldLabel += "<font color=red>*</font>";
				}
				if(Ext.type(this.valueScope)!='array'){
					this.valueScope =[null,null];
				}
				this.nameArray = this.nameArray || [this.name+'/startDate',this.name+'/endDate'];
				var B = Ext.id();
				var A = Ext.id();
				this.items = [{
							columnWidth : 0.45,
							anchor : "100%",
							layout : "anchor",
							items : {
								xtype : "datetimefield",
								dataIndex : this.indexArray[0],
								name : this.nameArray[0],
								format : this.format,
								readOnly:this.readOnly,
								allowBlank:this.allowBlank,
								id : B,
								endDateField : A,
								minValue : this.valueScope[0],
                                maxValue : this.valueScope[1],
								anchor : "100%",
								listeners : {
									render : function(){
										this.trigger.on("click",function(){
											var edate = Ext.getCmp(A).getValue();
											var sdate = Ext.getCmp(B).getValue();
											Ext.getCmp(A).setMinValue(sdate);
											if(edate < sdate){
												Ext.getCmp(A).reset();
												return false;
											}
											return true;
										});
									}
								}
							}
						}, {
							columnWidth : 0.1,
							anchor : "100%",
							layout : "anchor",
							items : {
								xtype : "container",
								html : "<div style='width:100%;text-align:center;'>" +
										"至" +
										"</div>"
							}
						}, {
							columnWidth : 0.45,
							anchor : "100%",
							layout : "anchor",
							items : {
								xtype : "datetimefield",
								dataIndex : this.indexArray[1],
								name : this.nameArray[1],
								format : this.format,
								allowBlank:this.allowBlank,
								readOnly:this.readOnly,
								id : A,
								startDateField : B,
								minValue : this.valueScope[0],
                                maxValue : this.valueScope[1],
								anchor : "100%",
								listeners : {
									render : function(){
										this.trigger.on("click",function(){
											var sdate = Ext.getCmp(B).getValue();
											Ext.getCmp(A).setMinValue(sdate);
											return true;
										});
									}
								}
							}
						}];
				Ext.form.DatetimeRegion.superclass.initComponent.call(this);
				if(this.value!=''){
					Ext.getCmp(B).setValue(this.value);
					Ext.getCmp(A).setValue(this.value);
				}
				Ext.getCmp(B).on('select', function(){
					var edate = Ext.getCmp(A).getValue();
					var sdate = Ext.getCmp(B).getValue();
					Ext.getCmp(A).setMinValue(sdate);
					if(edate < sdate){
						Ext.getCmp(A).reset();
						return false;
					}
					return true;	
				});
				Ext.getCmp(A).on('select', function(){
					var sdate = Ext.getCmp(B).getValue();
					Ext.getCmp(A).setMinValue(sdate);
					return true;	
				});
			},
			checkValueScope:function(){
				
			}
		});
Ext.reg("datetimeregion", Ext.form.DatetimeRegion);