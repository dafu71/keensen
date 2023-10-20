Ext.ns("Ext.ex");Ext.ex.AuotCheckboxGroup=Ext.extend(Ext.form.CheckboxGroup,{columns:3,dataUrl:"",params:{},labelFiled:"label",valueFiled:"value",data:[],initComponent:function(){if(this.items==undefined&&this.item==undefined){this.items=[{boxLabel:"",name:this.name||"",hideMode:"hidden",inputValue:""}]}Ext.ex.AuotCheckboxGroup.superclass.initComponent.call(this)},onRender:function(C,D){Ext.ex.AuotCheckboxGroup.superclass.onRender.call(this,C,D);this.intoStore()},intoStore:function(){if(this.dataUrl!=""){Ext.Ajax.request({url:this.dataUrl,params:this.params,scope:this,success:function(E,D){var C=Ext.util.JSON.decode(E.responseText);E=E.rows||E;var R=this.items,A=this.panel.items;for(var G=0;G<A.items.length;G++){B=A.items[G];B.removeAll()}R.clear();var F=0;for(var G=0;G<C.datas.length;G++){var S=C.datas[G];var T=new Ext.form.Checkbox({boxLabel:S[this.labelFiled],name:this.name||"",hideMode:"display",inputValue:S[this.valueFiled]});var B=A.items[F];F++;if(F>=A.items.length){F=0}checkbox=B.add(T);R.add(checkbox)}this.doLayout()}})}if(this.data.length>0){var H=this.items,I=this.panel.items;for(var L=0;L<I.items.length;L++){K=I.items[L];K.removeAll()}H.clear();var N=0;for(var L=0;L<this.data.length;L++){var J=this.data[L];var M=new Ext.form.Checkbox({boxLabel:J[this.labelFiled],name:this.name||"",hideMode:"display",inputValue:J[this.valueFiled]});var K=I.items[N];N++;if(N>=I.items.length){N=0}checkbox=K.add(M);H.add(checkbox)}this.doLayout()}}});Ext.reg("auotcheckboxgroup",Ext.ex.AuotCheckboxGroup);Ext.ns("Ext.ex");Ext.ex.MonthPickerPlugin=function(){var M;var N;this.init=function(A){M=A;M.onTriggerClick=M.onTriggerClick.createSequence(I);M.getValue=M.getValue.createInterceptor(H).createSequence(K);M.beforeBlur=M.beforeBlur.createInterceptor(H).createSequence(K)};function H(){N=Date.defaults.d;Date.defaults.d=1;return true}function K(A){Date.defaults.d=N;return A}function I(C,B,A){var D=M.menu.picker;D.activeDate=D.activeDate.getFirstDateOfMonth();if(D.value){D.value=D.value.getFirstDateOfMonth()}D.showMonthPicker();if(!D.disabled){D.monthPicker.stopFx();D.monthPicker.show();D.mun(D.monthPicker,"click",D.onMonthClick,D);D.onMonthClick=D.onMonthClick.createSequence(J);D.onMonthDblClick=D.onMonthDblClick.createSequence(L);D.mon(D.monthPicker,"click",D.onMonthClick,D)}}function J(C,A){var B=new Ext.Element(A);if(B.is("button.x-date-mp-cancel")){M.menu.hide()}else{if(B.is("button.x-date-mp-ok")){var D=M.menu.picker;D.setValue(D.activeDate);D.fireEvent("select",D,D.value)}}}function L(C,A){var B=new Ext.Element(A);if(B.parent()&&(B.parent().is("td.x-date-mp-month")||B.parent().is("td.x-date-mp-year"))){var D=M.menu.picker;D.setValue(D.activeDate);D.fireEvent("select",D,D.value)}}};Ext.preg("monthpickerplugin",Ext.ex.MonthPickerPlugin);Ext.ns("Ext.ux.form");
Ext.ux.form.MultiSelect=Ext.extend(Ext.form.Field,{ddReorder:false,appendOnly:false,width:100,anchor:"100%",height:100,displayField:0,valueField:1,allowBlank:true,minSelections:0,maxSelections:Number.MAX_VALUE,blankText:Ext.form.TextField.prototype.blankText,minSelectionsText:"Minimum {0} item(s) required",maxSelectionsText:"Maximum {0} item(s) allowed",delimiter:",",cls:"ux-form-multiselect",defaultAutoCreate:{tag:"div"},initComponent:function(){this.autoScroll=false;Ext.ux.form.MultiSelect.superclass.initComponent.call(this);if(Ext.isArray(this.store)){if(Ext.isArray(this.store[0])){this.store=new Ext.data.ArrayStore({fields:["value","text"],data:this.store});this.valueField="value"}else{this.store=new Ext.data.ArrayStore({fields:["text"],data:this.store,expandData:true});this.valueField="text"}this.displayField="text"}else{this.store=Ext.StoreMgr.lookup(this.store)}this.addEvents({"dblclick":true,"click":true,"change":true,"drop":true})},onRender:function(F,H){Ext.ux.form.MultiSelect.superclass.onRender.call(this,F,H);var G=this.fs=new Ext.form.FieldSet({renderTo:this.el,title:this.legend,autoScroll:true,height:this.height,anchor:this.anchor,style:"padding:0;",tbar:this.tbar});G.body.addClass("ux-mselect");this.view=new Ext.ListView({selectedClass:"ux-mselect-selected",multiSelect:true,store:this.store,columns:[{header:"Value",width:1,dataIndex:this.displayField}],hideHeaders:true});G.add(this.view);this.view.on("click",this.onViewClick,this);this.view.on("beforeclick",this.onViewBeforeClick,this);this.view.on("dblclick",this.onViewDblClick,this);this.hiddenName=this.name||Ext.id();var E={tag:"input",type:"hidden",value:"",name:this.hiddenName};this.hiddenField=this.el.createChild(E);this.hiddenField.dom.disabled=this.hiddenName!=this.name;G.doLayout()},afterRender:function(){Ext.ux.form.MultiSelect.superclass.afterRender.call(this);if(this.ddReorder&&!this.dragGroup&&!this.dropGroup){this.dragGroup=this.dropGroup="MultiselectDD-"+Ext.id()}if(this.draggable||this.dragGroup){this.dragZone=new Ext.ux.form.MultiSelect.DragZone(this,{ddGroup:this.dragGroup})}if(this.droppable||this.dropGroup){this.dropZone=new Ext.ux.form.MultiSelect.DropZone(this,{ddGroup:this.dropGroup})}},onViewClick:function(F,E,G,H){this.fireEvent("change",this,this.getValue(),this.hiddenField.dom.value);this.hiddenField.dom.value=this.getValue();this.fireEvent("click",this,H);this.validate()},onViewBeforeClick:function(F,E,G,H){if(this.disabled||this.readOnly){return false}},onViewDblClick:function(F,E,G,H){return this.fireEvent("dblclick",F,E,G,H)},getValue:function(G){var E=[];var H=this.view.getSelectedIndexes();if(H.length==0){return""}for(var F=0;F<H.length;F++){E.push(this.store.getAt(H[F]).get((G!=null)?G:this.valueField))}return E.join(this.delimiter)},setValue:function(E){var G;var H=[];this.view.clearSelections();this.hiddenField.dom.value="";if(!E||(E=="")){return}if(!Ext.isArray(E)){E=E.split(this.delimiter)}for(var F=0;F<E.length;F++){G=this.view.store.indexOf(this.view.store.query(this.valueField,new RegExp("^"+E[F]+"$","i")).itemAt(0));H.push(G)}this.view.select(H);this.hiddenField.dom.value=this.getValue();this.validate()},reset:function(){this.setValue("")},getRawValue:function(C){var D=this.getValue(C);if(D.length){D=D.split(this.delimiter)}else{D=[]}return D},setRawValue:function(B){setValue(B)},validateValue:function(B){if(B.length<1){if(this.allowBlank){this.clearInvalid();return true}else{this.markInvalid(this.blankText);return false}}if(B.length<this.minSelections){this.markInvalid(String.format(this.minSelectionsText,this.minSelections));return false}if(B.length>this.maxSelections){this.markInvalid(String.format(this.maxSelectionsText,this.maxSelections));return false}return true},disable:function(){this.disabled=true;this.hiddenField.dom.disabled=true;this.fs.disable()},enable:function(){this.disabled=false;this.hiddenField.dom.disabled=false;this.fs.enable()},destroy:function(){Ext.destroy(this.fs,this.dragZone,this.dropZone);Ext.ux.form.MultiSelect.superclass.destroy.call(this)}});Ext.reg("multiselect",Ext.ux.form.MultiSelect);Ext.ux.Multiselect=Ext.ux.form.MultiSelect;Ext.ux.form.MultiSelect.DragZone=function(F,G){this.ms=F;this.view=F.view;var H=G.ddGroup||"MultiselectDD";var E;if(Ext.isArray(H)){E=H.shift()}else{E=H;H=null}Ext.ux.form.MultiSelect.DragZone.superclass.constructor.call(this,this.ms.fs.body,{containerScroll:true,ddGroup:E});this.setDraggable(H)};Ext.extend(Ext.ux.form.MultiSelect.DragZone,Ext.dd.DragZone,{onInitDrag:function(D,E){var F=Ext.get(this.dragData.ddel.cloneNode(true));this.proxy.update(F.dom);F.setWidth(F.child("em").getWidth());this.onStartDrag(D,E);return true},collectSelection:function(C){C.repairXY=Ext.fly(this.view.getSelectedNodes()[0]).getXY();var D=0;this.view.store.each(function(F){if(this.view.isSelected(D)){var A=this.view.getNode(D);var B=A.cloneNode(true);B.id=Ext.id();C.ddel.appendChild(B);C.records.push(this.view.store.getAt(D));C.viewNodes.push(A)}D++},this)},onEndDrag:function(E,D){var F=Ext.get(this.dragData.ddel);if(F&&F.hasClass("multi-proxy")){F.remove()}},getDragData:function(H){var G=this.view.findItemFromChild(H.getTarget());if(G){if(!this.view.isSelected(G)&&!H.ctrlKey&&!H.shiftKey){this.view.select(G);this.ms.setValue(this.ms.getValue())}if(this.view.getSelectionCount()==0||H.ctrlKey||H.shiftKey){return false}var J={sourceView:this.view,viewNodes:[],records:[]};if(this.view.getSelectionCount()==1){var I=this.view.getSelectedIndexes()[0];var F=this.view.getNode(I);J.viewNodes.push(J.ddel=F);J.records.push(this.view.store.getAt(I));J.repairXY=Ext.fly(F).getXY()}else{J.ddel=document.createElement("div");J.ddel.className="multi-proxy";this.collectSelection(J)}return J}return false},getRepairXY:function(B){return this.dragData.repairXY},setDraggable:function(B){if(!B){return}if(Ext.isArray(B)){Ext.each(B,this.setDraggable,this);return}this.addToGroup(B)}});Ext.ux.form.MultiSelect.DropZone=function(F,G){this.ms=F;this.view=F.view;var H=G.ddGroup||"MultiselectDD";var E;if(Ext.isArray(H)){E=H.shift()}else{E=H;H=null}Ext.ux.form.MultiSelect.DropZone.superclass.constructor.call(this,this.ms.fs.body,{containerScroll:true,ddGroup:E});this.setDroppable(H)};Ext.extend(Ext.ux.form.MultiSelect.DropZone,Ext.dd.DropZone,{getTargetFromEvent:function(D){var C=D.getTarget();return C},getDropPoint:function(N,L,I){if(L==this.ms.fs.body.dom){return"below"}var J=Ext.lib.Dom.getY(L),M=J+L.offsetHeight;var H=J+(M-J)/2;var K=Ext.lib.Event.getPageY(N);if(K<=H){return"above"}else{return"below"}},isValidDropPoint:function(G,F,E){if(!E.viewNodes||(E.viewNodes.length!=1)){return true}var H=E.viewNodes[0];if(H==F){return false}if((G=="below")&&(F.nextSibling==H)){return false}if((G=="above")&&(F.previousSibling==H)){return false}return true},onNodeEnter:function(H,E,G,F){return false},onNodeOver:function(N,I,M,L){var J=this.dropNotAllowed;var K=this.getDropPoint(M,N,I);if(this.isValidDropPoint(K,N,L)){if(this.ms.appendOnly){return"x-tree-drop-ok-below"}if(K){var H;if(K=="above"){J=N.previousSibling?"x-tree-drop-ok-between":"x-tree-drop-ok-above";H="x-view-drag-insert-above"}else{J=N.nextSibling?"x-tree-drop-ok-between":"x-tree-drop-ok-below";H="x-view-drag-insert-below"}if(this.lastInsertClass!=H){Ext.fly(N).replaceClass(this.lastInsertClass,H);this.lastInsertClass=H}}}return J},onNodeOut:function(H,E,G,F){this.removeDropIndicators(H)},onNodeDrop:function(J,M,N,Q){if(this.ms.fireEvent("drop",this,J,M,N,Q)===false){return false}var L=this.getDropPoint(N,J,M);if(J!=this.ms.fs.body.dom){J=this.view.findItemFromChild(J)}if(this.ms.appendOnly){insertAt=this.view.store.getCount()}else{insertAt=J==this.ms.fs.body.dom?this.view.store.getCount()-1:this.view.indexOf(J);if(L=="below"){insertAt++}}var O=false;if(Q.sourceView==this.view){if(L=="below"){if(Q.viewNodes[0]==J){Q.viewNodes.shift()}}else{if(Q.viewNodes[Q.viewNodes.length-1]==J){Q.viewNodes.pop()}}if(!Q.viewNodes.length){return false}if(insertAt>this.view.store.indexOf(Q.records[0])){O="down";insertAt--}}for(var P=0;P<Q.records.length;P++){var R=Q.records[P];if(Q.sourceView){Q.sourceView.store.remove(R)}this.view.store.insert(O=="down"?insertAt:insertAt++,R);var K=this.view.store.sortInfo;if(K){this.view.store.sort(K.field,K.direction)}}return true},removeDropIndicators:function(B){if(B){Ext.fly(B).removeClass(["x-view-drag-insert-above","x-view-drag-insert-left","x-view-drag-insert-right","x-view-drag-insert-below"]);this.lastInsertClass="_noclass"}},setDroppable:function(B){if(!B){return}if(Ext.isArray(B)){Ext.each(B,this.setDroppable,this);return}this.addToGroup(B)}});Ext.form.CompareField=Ext.extend(Ext.Container,{autoWidth:true,autoEl:"div",layout:"column",anchor:"100%",name:"",defaults:{xtype:"container",autoEl:"div",anchor:"100%"},initComponent:function(){var C=0.8;var D="100%";if(this.rtext){C=0.7;D="95%"}this.items=[{columnWidth:0.2,anchor:this.anchor,layout:"anchor",items:{width:50,xtype:"combo",mode:"local",value:"==",triggerAction:"all",forceSelection:true,editable:false,fieldLabel:"Title",name:this.name+"sign",hiddenName:"title",displayField:"name",valueField:"value",store:new Ext.data.JsonStore({fields:["name","value"],data:[{name:" > ",value:">"},{name:">= ",value:">="},{name:"== ",value:"=="},{name:"<=",value:",="},{name:" < ",value:"<"}]})}},{columnWidth:C,anchor:this.anchor,layout:"anchor",items:{xtype:"numberfield",name:this.name+"/rvalue",format:"Y-m-d",anchor:D,editable:false}}];if(this.rtext){this.items.push({columnWidth:0.1,anchor:this.anchor,layout:"anchor",items:{xtype:"label",html:'<span class="lab">'+this.rtext+"</span>"}})}Ext.form.CompareField.superclass.initComponent.call(this)}});Ext.reg("comparefield",Ext.form.CompareField);Ext.ns("Ext.ux.form");Ext.ux.form.TimePickerField=function(B){Ext.ux.form.TimePickerField.superclass.constructor.call(this,B)};Ext.extend(Ext.ux.form.TimePickerField,Ext.form.Field,{defaultAutoCreate:{tag:"div"},cls:"x-form-timepickerfield",hoursSpinner:null,minutesSpinner:null,secondsSpinner:null,spinnerCfg:{width:40},spinnerFixBoundries:function(B){if(B<this.field.minValue){B=this.field.maxValue}if(B>this.field.maxValue){B=this.field.minValue}return this.fixPrecision(B)},onRender:function(F,I){Ext.ux.form.TimePickerField.superclass.onRender.call(this,F,I);this.rendered=false;this.date=new Date();var G={};if(this.value){G=this._valueSplit(this.value);this.date.setHours(G.h);this.date.setMinutes(G.m);this.date.setSeconds(G.s);delete this.value}else{G={h:this.date.getHours(),m:this.date.getMinutes(),s:this.date.getSeconds()}}var J=Ext.DomHelper.append(this.el,{tag:"div"});var H=Ext.apply({},this.spinnerCfg,{renderTo:J,readOnly:this.readOnly,disabled:this.disabled,listeners:{spin:{fn:this.onSpinnerChange,scope:this},valid:{fn:this.onSpinnerChange,scope:this},afterrender:{fn:function(A){A.wrap.applyStyles("float: left")},single:true}}});this.hoursSpinner=new Ext.ux.form.SpinnerField(Ext.apply({},H,{minValue:0,maxValue:23,cls:"first",value:G.h}));this.minutesSpinner=new Ext.ux.form.SpinnerField(Ext.apply({},H,{minValue:0,maxValue:59,value:G.m}));this.secondsSpinner=new Ext.ux.form.SpinnerField(Ext.apply({},H,{minValue:0,maxValue:59,value:G.s}));Ext.DomHelper.append(J,{tag:"div",cls:"x-form-clear-left"});this.rendered=true},_valueSplit:function(D){var C=D.split(":");return{h:C.length>0?C[0]:0,m:C.length>1?C[1]:0,s:C.length>2?C[2]:0}},onSpinnerChange:function(){if(!this.rendered){return}this.fireEvent("change",this,this.getRawValue())},disable:function(){Ext.ux.form.TimePickerField.superclass.disable.call(this);this.hoursSpinner.disable();this.minutesSpinner.disable();this.secondsSpinner.disable()},enable:function(){Ext.ux.form.TimePickerField.superclass.enable.call(this);this.hoursSpinner.enable();this.minutesSpinner.enable();this.secondsSpinner.enable()},setReadOnly:function(B){Ext.ux.form.TimePickerField.superclass.setReadOnly.call(this,B);this.hoursSpinner.setReadOnly(B);this.minutesSpinner.setReadOnly(B);this.secondsSpinner.setReadOnly(B)},clearInvalid:function(){Ext.ux.form.TimePickerField.superclass.clearInvalid.call(this);this.hoursSpinner.clearInvalid();this.minutesSpinner.clearInvalid();this.secondsSpinner.clearInvalid()},getRawValue:function(){if(!this.hoursSpinner){this.date=new Date();return{h:this.date.getHours(),m:this.date.getMinutes(),s:this.date.getSeconds()}}else{return{h:this.hoursSpinner.getValue(),m:this.minutesSpinner.getValue(),s:this.secondsSpinner.getValue()}}},setRawValue:function(B){this.hoursSpinner.setValue(B.h);this.minutesSpinner.setValue(B.m);this.secondsSpinner.setValue(B.s)},isValid:function(B){return this.hoursSpinner.isValid(B)&&this.minutesSpinner.isValid(B)&&this.secondsSpinner.isValid(B)},validate:function(){return this.hoursSpinner.validate()&&this.minutesSpinner.validate()&&this.secondsSpinner.validate()},getValue:function(){var B=this.getRawValue();return String.leftPad(B.h,2,"0")+":"+String.leftPad(B.m,2,"0")+":"+String.leftPad(B.s,2,"0")},setValue:function(B){if(!this.rendered){this.value=B;return}B=this._valueSplit(B);this.setRawValue(B);this.validate()}});Ext.form.TimePickerField=Ext.ux.form.TimePickerField;Ext.reg("timepickerfield",Ext.form.TimePickerField);Ext.ns("Ext.ux.form");Ext.DateTimePicker=Ext.extend(Ext.DatePicker,{timeFormat:"g:i:s A",timeLabel:"时间",timeWidth:100,initComponent:function(){Ext.DateTimePicker.superclass.initComponent.call(this);this.id=Ext.id()},onRender:function(F,J){Ext.DateTimePicker.superclass.onRender.apply(this,arguments);var G=Ext.get(Ext.DomQuery.selectNode("table tbody",F.dom));var H=Ext.DomHelper.insertBefore(G.last(),{tag:"tr",children:[{tag:"td",cls:"x-date-bottom",html:this.timeLabel,style:"width:32;font-size:14px;"},{tag:"td",cls:"x-date-bottom ux-timefield",colspan:"2"}]},true);this.tf.render(G.child("td.ux-timefield"));var I=this.getEl().parent("div.x-layer");if(I){if(Ext.isIE){I.setStyle("height",I.getHeight()+32)}}},setValue:function(C){var D=this.value;if(!this.tf){this.tf=new Ext.ux.form.TimePickerField();this.tf.ownerCt=this}this.value=this.getDateTime(C)},getDateTime:function(B){if(this.tf){B=Date.parseDate(B.format("Y-m-d")+" "+this.tf.getValue(),"Y-m-d H:i:s")}return B},selectToday:function(){if(this.todayBtn&&!this.todayBtn.disabled){this.value=this.getDateTime(new Date());this.fireEvent("select",this,this.value)}}});Ext.reg("datetimepickerfield",Ext.DateTimePicker);if(parseInt(Ext.version.substr(0,1),10)>2){Ext.menu.DateTimeItem=Ext.DateTimePicker;Ext.override(Ext.menu.DateMenu,{initComponent:function(){this.on("beforeshow",this.onBeforeShow,this);if(this.strict=(Ext.isIE7&&Ext.isStrict)){this.on("show",this.onShow,this,{single:true,delay:20})}Ext.apply(this,{plain:true,showSeparator:false,items:this.picker=new Ext.DatePicker(Ext.apply({internalRender:this.strict||!Ext.isIE,ctCls:"x-menu-date-item"},this.initialConfig))});Ext.menu.DateMenu.superclass.initComponent.call(this);this.relayEvents(this.picker,["select"]);this.on("select",this.menuHide,this);if(this.handler){this.on("select",this.handler,this.scope||this)}}})}else{Ext.menu.DateTimeItem=function(B){Ext.menu.DateTimeItem.superclass.constructor.call(this,new Ext.DateTimePicker(B),B);this.picker=this.component;this.addEvents("select");this.picker.on("render",function(A){A.getEl().swallowEvent("click");A.container.addClass("x-menu-date-item")});this.picker.on("select",this.onSelect,this)};Ext.extend(Ext.menu.DateTimeItem,Ext.menu.DateMenu,{onSelect:function(D,C){this.fireEvent("select",this,C,D);Ext.menu.DateTimeItem.superclass.handleClick.call(this)}})}Ext.menu.DateTimeMenu=function(D){Ext.menu.DateTimeMenu.superclass.constructor.call(this,D);this.plain=true;var C=new Ext.menu.DateTimeItem(D);this.add(C);this.picker=C;this.relayEvents(C,["select"]);this.on("beforeshow",function(){if(this.picker){this.picker.hideMonthPicker(true)}},this)};Ext.extend(Ext.menu.DateTimeMenu,Ext.menu.Menu,{cls:"x-date-menu",beforeDestroy:function(){this.picker.destroy()},hide:function(B){if(this.picker.tf.innerList){if((Ext.EventObject.within(this.picker.tf.innerList))||(Ext.get(Ext.EventObject.getTarget())==this.picker.tf.innerList)){return false}}if(this.el&&this.isVisible()){this.fireEvent("beforehide",this);if(this.activeItem){this.activeItem.deactivate();this.activeItem=null}this.el.hide();this.hidden=true;this.fireEvent("hide",this)}if(B===true&&this.parentMenu){this.parentMenu.hide(true)}}});Ext.ux.form.DateTimeField=Ext.extend(Ext.form.DateField,{format:"Y-m-d H:i:s",dateFormat:"Y-m-d",timeFormat:"H:i:s",defaultAutoCreate:{tag:"input",type:"text",size:"20",autocomplete:"off"},initComponent:function(){Ext.ux.form.DateTimeField.superclass.initComponent.call(this);this.format=this.format;this.afterMethod("afterRender",function(){this.getEl().applyStyles("top:0")})},getValue:function(){return this.parseDate(Ext.form.DateField.superclass.getValue.call(this))||""},onTriggerClick:function(){if(this.disabled){return}if(this.menu==null){this.menu=new Ext.menu.DateTimeMenu()}Ext.apply(this.menu.picker,{minDate:this.minValue,maxDate:this.maxValue,disabledDatesRE:this.ddMatch,disabledDatesText:this.disabledDatesText,disabledDays:this.disabledDays,disabledDaysText:this.disabledDaysText,format:this.format,timeFormat:this.timeFormat,dateFormat:this.dateFormat,showToday:this.showToday,minText:String.format(this.minText,this.formatDate(this.minValue)),maxText:String.format(this.maxText,this.formatDate(this.maxValue))});if(this.menuEvents){this.menuEvents("on")}else{this.menu.on(Ext.apply({},this.menuListeners,{scope:this}))}this.menu.picker.setValue(this.getValue()||new Date());this.menu.show(this.el,"tl-bl?")}});Ext.reg("datetimefield",Ext.ux.form.DateTimeField);Ext.ux.Spinner=Ext.extend(Ext.util.Observable,{incrementValue:1,alternateIncrementValue:5,triggerClass:"x-form-spinner-trigger",splitterClass:"x-form-spinner-splitter",alternateKey:Ext.EventObject.shiftKey,defaultValue:0,accelerate:false,constructor:function(B){Ext.ux.Spinner.superclass.constructor.call(this,B);Ext.apply(this,B);this.mimicing=false},init:function(B){this.field=B;B.afterMethod("onRender",this.doRender,this);B.afterMethod("onEnable",this.doEnable,this);B.afterMethod("onDisable",this.doDisable,this);B.afterMethod("afterRender",this.doAfterRender,this);B.afterMethod("onResize",this.doResize,this);B.afterMethod("onFocus",this.doFocus,this);B.beforeMethod("onDestroy",this.doDestroy,this)},doRender:function(G,F){var H=this.el=this.field.getEl();var E=this.field;if(!E.wrap){E.wrap=this.wrap=H.wrap({cls:"x-form-field-wrap"})}else{this.wrap=E.wrap.addClass("x-form-field-wrap")}this.trigger=this.wrap.createChild({tag:"img",src:Ext.BLANK_IMAGE_URL,cls:"x-form-trigger "+this.triggerClass});if(!E.width){this.wrap.setWidth(H.getWidth()+this.trigger.getWidth())}this.splitter=this.wrap.createChild({tag:"div",cls:this.splitterClass,style:"width:13px; height:2px;"});this.splitter.setRight((Ext.isIE)?1:2).setTop(10).show();this.proxy=this.trigger.createProxy("",this.splitter,true);this.proxy.addClass("x-form-spinner-proxy");this.proxy.setStyle("left","0px");this.proxy.setSize(14,1);this.proxy.hide();this.dd=new Ext.dd.DDProxy(this.splitter.dom.id,"SpinnerDrag",{dragElId:this.proxy.id});this.initTrigger();this.initSpinner()},doAfterRender:function(){var B;if(Ext.isIE&&this.el.getY()!=(B=this.trigger.getY())){this.el.position();this.el.setY(B)}},doEnable:function(){if(this.wrap){this.disabled=false;this.wrap.removeClass(this.field.disabledClass)}},doDisable:function(){if(this.wrap){this.disabled=true;this.wrap.addClass(this.field.disabledClass);this.el.removeClass(this.field.disabledClass)}},doResize:function(C,D){if(typeof C=="number"){this.el.setWidth(C-this.trigger.getWidth())}this.wrap.setWidth(this.el.getWidth()+this.trigger.getWidth())},doFocus:function(){if(!this.mimicing){this.wrap.addClass("x-trigger-wrap-focus");this.mimicing=true;Ext.get(Ext.isIE?document.body:document).on("mousedown",this.mimicBlur,this,{delay:10});this.el.on("keydown",this.checkTab,this)}},checkTab:function(B){if(B.getKey()==B.TAB){this.triggerBlur()}},mimicBlur:function(B){if(!this.wrap.contains(B.target)&&this.field.validateBlur(B)){this.triggerBlur()}},triggerBlur:function(){this.mimicing=false;Ext.get(Ext.isIE?document.body:document).un("mousedown",this.mimicBlur,this);this.el.un("keydown",this.checkTab,this);this.field.beforeBlur();this.wrap.removeClass("x-trigger-wrap-focus");this.field.onBlur.call(this.field)},initTrigger:function(){this.trigger.addClassOnOver("x-form-trigger-over");this.trigger.addClassOnClick("x-form-trigger-click")},initSpinner:function(){this.field.addEvents({"spin":true,"spinup":true,"spindown":true});this.keyNav=new Ext.KeyNav(this.el,{"up":function(B){B.preventDefault();this.onSpinUp()},"down":function(B){B.preventDefault();this.onSpinDown()},"pageUp":function(B){B.preventDefault();this.onSpinUpAlternate()},"pageDown":function(B){B.preventDefault();this.onSpinDownAlternate()},scope:this});this.repeater=new Ext.util.ClickRepeater(this.trigger,{accelerate:this.accelerate});this.field.mon(this.repeater,"click",this.onTriggerClick,this,{preventDefault:true});this.field.mon(this.trigger,{mouseover:this.onMouseOver,mouseout:this.onMouseOut,mousemove:this.onMouseMove,mousedown:this.onMouseDown,mouseup:this.onMouseUp,scope:this,preventDefault:true});this.field.mon(this.wrap,"mousewheel",this.handleMouseWheel,this);this.dd.setXConstraint(0,0,10);this.dd.setYConstraint(1500,1500,10);this.dd.endDrag=this.endDrag.createDelegate(this);this.dd.startDrag=this.startDrag.createDelegate(this);this.dd.onDrag=this.onDrag.createDelegate(this)},onMouseOver:function(){if(this.disabled){return}var B=this.getMiddle();this.tmpHoverClass=(Ext.EventObject.getPageY()<B)?"x-form-spinner-overup":"x-form-spinner-overdown";this.trigger.addClass(this.tmpHoverClass)},onMouseOut:function(){this.trigger.removeClass(this.tmpHoverClass)},onMouseMove:function(){if(this.disabled){return}var B=this.getMiddle();if(((Ext.EventObject.getPageY()>B)&&this.tmpHoverClass=="x-form-spinner-overup")||((Ext.EventObject.getPageY()<B)&&this.tmpHoverClass=="x-form-spinner-overdown")){}},onMouseDown:function(){if(this.disabled){return}var B=this.getMiddle();this.tmpClickClass=(Ext.EventObject.getPageY()<B)?"x-form-spinner-clickup":"x-form-spinner-clickdown";this.trigger.addClass(this.tmpClickClass)},onMouseUp:function(){this.trigger.removeClass(this.tmpClickClass)},onTriggerClick:function(){if(this.disabled||this.el.dom.readOnly){return}var C=this.getMiddle();var D=(Ext.EventObject.getPageY()<C)?"Up":"Down";this["onSpin"+D]()},getMiddle:function(){var D=this.trigger.getTop();var F=this.trigger.getHeight();var E=D+(F/2);return E},isSpinnable:function(){if(this.disabled||this.el.dom.readOnly){Ext.EventObject.preventDefault();return false}return true},handleMouseWheel:function(C){if(this.wrap.hasClass("x-trigger-wrap-focus")==false){return}var D=C.getWheelDelta();if(D>0){this.onSpinUp();C.stopEvent()}else{if(D<0){this.onSpinDown();C.stopEvent()}}},startDrag:function(){this.proxy.show();this._previousY=Ext.fly(this.dd.getDragEl()).getTop()},endDrag:function(){this.proxy.hide()},onDrag:function(){if(this.disabled){return}var C=Ext.fly(this.dd.getDragEl()).getTop();var D="";if(this._previousY>C){D="Up"}if(this._previousY<C){D="Down"}if(D!=""){this["onSpin"+D]()}this._previousY=C},onSpinUp:function(){if(this.isSpinnable()==false){return}if(Ext.EventObject.shiftKey==true){this.onSpinUpAlternate();return}else{this.spin(false,false)}this.field.fireEvent("spin",this);this.field.fireEvent("spinup",this)},onSpinDown:function(){if(this.isSpinnable()==false){return}if(Ext.EventObject.shiftKey==true){this.onSpinDownAlternate();return}else{this.spin(true,false)}this.field.fireEvent("spin",this);this.field.fireEvent("spindown",this)},onSpinUpAlternate:function(){if(this.isSpinnable()==false){return}this.spin(false,true);this.field.fireEvent("spin",this);this.field.fireEvent("spinup",this)},onSpinDownAlternate:function(){if(this.isSpinnable()==false){return}this.spin(true,true);this.field.fireEvent("spin",this);this.field.fireEvent("spindown",this)},spin:function(H,E){var G=parseFloat(this.field.getValue());var F=(E==true)?this.alternateIncrementValue:this.incrementValue;(H==true)?G-=F:G+=F;G=(isNaN(G))?this.defaultValue:G;G=this.fixBoundries(G);this.field.setRawValue(G)},fixBoundries:function(C){var D=C;if(this.field.minValue!=undefined&&D<this.field.minValue){D=this.field.minValue}if(this.field.maxValue!=undefined&&D>this.field.maxValue){D=this.field.maxValue}return this.fixPrecision(D)},fixPrecision:function(C){var D=isNaN(C);if(!this.field.allowDecimals||this.field.decimalPrecision==-1||D||!C){return D?"":C}return parseFloat(parseFloat(C).toFixed(this.field.decimalPrecision))},doDestroy:function(){if(this.trigger){this.trigger.remove()}if(this.wrap){this.wrap.remove();delete this.field.wrap}if(this.splitter){this.splitter.remove()}if(this.dd){this.dd.unreg();this.dd=null}if(this.proxy){this.proxy.remove()}if(this.repeater){this.repeater.purgeListeners()}if(this.mimicing){Ext.get(Ext.isIE?document.body:document).un("mousedown",this.mimicBlur,this)}}});Ext.form.Spinner=Ext.ux.Spinner;Ext.ns("Ext.ux.form");Ext.ux.form.SpinnerField=Ext.extend(Ext.form.NumberField,{actionMode:"wrap",deferHeight:true,autoSize:Ext.emptyFn,onBlur:Ext.emptyFn,adjustSize:Ext.BoxComponent.prototype.adjustSize,constructor:function(G){var H=Ext.copyTo({},G,"incrementValue,alternateIncrementValue,accelerate,defaultValue,triggerClass,splitterClass");var E=this.spinner=new Ext.ux.Spinner(H);var F=G.plugins?(Ext.isArray(G.plugins)?G.plugins.push(E):[G.plugins,E]):E;Ext.ux.form.SpinnerField.superclass.constructor.call(this,Ext.apply(G,{plugins:F}))},getResizeEl:function(){return this.wrap},getPositionEl:function(){return this.wrap},alignErrorIcon:function(){if(this.wrap){this.errorIcon.alignTo(this.wrap,"tl-tr",[2,0])}},validateBlur:function(){return true}});Ext.reg("spinnerfield",Ext.ux.form.SpinnerField);Ext.form.SpinnerField=Ext.ux.form.SpinnerField;



Ext.form.DateRegion = Ext.extend(Ext.Container, {
			//autoWidth : true, ----ie8 不支持，刘鑫11-26修改！
			autoEl : "div",
			layout : "column",
			anchor : "100%",
			format : "Y-m-d",
			allowBlank:true,
			name : "",
			value:"",
			itemCls :'dateRegin',
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
								xtype : "datefield",
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
								xtype : "datefield",
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
				Ext.form.DateRegion.superclass.initComponent.call(this);
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
Ext.reg("dateregion", Ext.form.DateRegion);

Ext.form.DateRegion2 = Ext.extend(Ext.Container, {
			//autoWidth : true, ----ie8 不支持，刘鑫11-26修改！
			autoEl : "div",
			layout : "column",
			anchor : "100%",
			format : "Y-m-d",
			allowBlank:true,
			name : "",
			value1:"",
			value2:"",
			itemCls :'dateRegin',
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
								xtype : "datefield",
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
								xtype : "datefield",
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
				Ext.form.DateRegion.superclass.initComponent.call(this);
				if(this.value1!=''){
					Ext.getCmp(B).setValue(this.value1);
				}
				if(this.value2!=''){
					Ext.getCmp(A).setValue(this.value2);
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
Ext.reg("dateregion2", Ext.form.DateRegion2);

/*
 * ! Ext JS Library 3.4.0 Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com http://www.sencha.com/license
 */
Ext.ns('Ext.ux.grid');

/**
 * @class Ext.ux.grid.GroupSummary
 * @extends Ext.util.Observable A GridPanel plugin that enables dynamic column
 *          calculations and a dynamically updated grouped summary row.
 */
Ext.ux.grid.GroupSummary = Ext.extend(Ext.util.Observable, {
    /**
	 * @cfg {Function} summaryRenderer Renderer example:
	 * 
	 * <pre><code>
	 * summaryRenderer: function(v, params, data){
	 *     return ((v === 0 || v &gt; 1) ? '(' + v +' Tasks)' : '(1 Task)');
	 * },
	 * </code></pre>
	 */
    /**
	 * @cfg {String} summaryType (Optional) The type of calculation to be used
	 *      for the column. For options available see {@link #Calculations}.
	 */

    constructor : function(config){
        Ext.apply(this, config);
        Ext.ux.grid.GroupSummary.superclass.constructor.call(this);
    },
    init : function(grid){
        this.grid = grid;
        var v = this.view = grid.getView();
        v.doGroupEnd = this.doGroupEnd.createDelegate(this);

        v.afterMethod('onColumnWidthUpdated', this.doWidth, this);
        v.afterMethod('onAllColumnWidthsUpdated', this.doAllWidths, this);
        v.afterMethod('onColumnHiddenUpdated', this.doHidden, this);
        v.afterMethod('onUpdate', this.doUpdate, this);
        v.afterMethod('onRemove', this.doRemove, this);

        if(!this.rowTpl){
            this.rowTpl = new Ext.Template(
                '<div class="x-grid3-summary-row" style="{tstyle}">',
                '<table class="x-grid3-summary-table" border="0" cellspacing="0" cellpadding="0" style="{tstyle}">',
                    '<tbody><tr>{cells}</tr></tbody>',
                '</table></div>'
            );
            this.rowTpl.disableFormats = true;
        }
        this.rowTpl.compile();

        if(!this.cellTpl){
            this.cellTpl = new Ext.Template(
                '<td class="x-grid3-col x-grid3-cell x-grid3-td-{id} {css}" style="{style}">',
                '<div class="x-grid3-cell-inner x-grid3-col-{id}" unselectable="on">{value}</div>',
                "</td>"
            );
            this.cellTpl.disableFormats = true;
        }
        this.cellTpl.compile();
    },

    /**
	 * Toggle the display of the summary row on/off
	 * 
	 * @param {Boolean}
	 *            visible <tt>true</tt> to show the summary, <tt>false</tt>
	 *            to hide the summary.
	 */
    toggleSummaries : function(visible){
        var el = this.grid.getGridEl();
        if(el){
            if(visible === undefined){
                visible = el.hasClass('x-grid-hide-summary');
            }
            el[visible ? 'removeClass' : 'addClass']('x-grid-hide-summary');
        }
    },

    renderSummary : function(o, cs){
        cs = cs || this.view.getColumnData();
        var cfg = this.grid.getColumnModel().config,
            buf = [], c, p = {}, cf, last = cs.length-1;
        for(var i = 0, len = cs.length; i < len; i++){
            c = cs[i];
            cf = cfg[i];
            p.id = c.id;
            p.style = c.style;
            p.css = i == 0 ? 'x-grid3-cell-first ' : (i == last ? 'x-grid3-cell-last ' : '');
            if(cf.summaryType || cf.summaryRenderer){
                p.value = (cf.summaryRenderer || c.renderer)(o.data[c.name], p, o);
            }else{
                p.value = '';
            }
            if(p.value == undefined || p.value === "") p.value = "&#160;";
            buf[buf.length] = this.cellTpl.apply(p);
        }
        return this.rowTpl.apply({
            tstyle: 'width:'+this.view.getTotalWidth()+';',
            cells: buf.join('')
        });
    },

    /**
	 * @private
	 * @param {Object}
	 *            rs
	 * @param {Object}
	 *            cs
	 */
    calculate : function(rs, cs){
        var data = {}, r, c, cfg = this.grid.getColumnModel().config, cf;
        for(var j = 0, jlen = rs.length; j < jlen; j++){
            r = rs[j];
            for(var i = 0, len = cs.length; i < len; i++){
                c = cs[i];
                cf = cfg[i];
                if(cf.summaryType){
                    data[c.name] = Ext.ux.grid.GroupSummary.Calculations[cf.summaryType](data[c.name] || 0, r, c.name, data);
                }
            }
        }
        return data;
    },

    doGroupEnd : function(buf, g, cs, ds, colCount){
        var data = this.calculate(g.rs, cs);
        buf.push('</div>', this.renderSummary({data: data}, cs), '</div>');
    },

    doWidth : function(col, w, tw){
        if(!this.isGrouped()){
            return;
        }
        var gs = this.view.getGroups(),
            len = gs.length,
            i = 0,
            s;
        for(; i < len; ++i){
            s = gs[i].childNodes[2];
            s.style.width = tw;
            s.firstChild.style.width = tw;
            s.firstChild.rows[0].childNodes[col].style.width = w;
        }
    },

    doAllWidths : function(ws, tw){
        if(!this.isGrouped()){
            return;
        }
        var gs = this.view.getGroups(),
            len = gs.length,
            i = 0,
            j, 
            s, 
            cells, 
            wlen = ws.length;
            
        for(; i < len; i++){
            s = gs[i].childNodes[2];
            s.style.width = tw;
            s.firstChild.style.width = tw;
            cells = s.firstChild.rows[0].childNodes;
            for(j = 0; j < wlen; j++){
                cells[j].style.width = ws[j];
            }
        }
    },

    doHidden : function(col, hidden, tw){
        if(!this.isGrouped()){
            return;
        }
        var gs = this.view.getGroups(),
            len = gs.length,
            i = 0,
            s, 
            display = hidden ? 'none' : '';
        for(; i < len; i++){
            s = gs[i].childNodes[2];
            s.style.width = tw;
            s.firstChild.style.width = tw;
            s.firstChild.rows[0].childNodes[col].style.display = display;
        }
    },
    
    isGrouped : function(){
        return !Ext.isEmpty(this.grid.getStore().groupField);
    },

    // Note: requires that all (or the first) record in the
    // group share the same group value. Returns false if the group
    // could not be found.
    refreshSummary : function(groupValue){
        return this.refreshSummaryById(this.view.getGroupId(groupValue));
    },

    getSummaryNode : function(gid){
        var g = Ext.fly(gid, '_gsummary');
        if(g){
            return g.down('.x-grid3-summary-row', true);
        }
        return null;
    },

    refreshSummaryById : function(gid){
        var g = Ext.getDom(gid);
        if(!g){
            return false;
        }
        var rs = [];
        this.grid.getStore().each(function(r){
            if(r._groupId == gid){
                rs[rs.length] = r;
            }
        });
        var cs = this.view.getColumnData(),
            data = this.calculate(rs, cs),
            markup = this.renderSummary({data: data}, cs),
            existing = this.getSummaryNode(gid);
            
        if(existing){
            g.removeChild(existing);
        }
        Ext.DomHelper.append(g, markup);
        return true;
    },

    doUpdate : function(ds, record){
        this.refreshSummaryById(record._groupId);
    },

    doRemove : function(ds, record, index, isUpdate){
        if(!isUpdate){
            this.refreshSummaryById(record._groupId);
        }
    },

    /**
	 * Show a message in the summary row.
	 * 
	 * <pre><code>
	 * grid.on('afteredit', function() {
	 * 			var groupValue = 'Ext Forms: Field Anchoring';
	 * 			summary.showSummaryMsg(groupValue, 'Updating Summary...');
	 * 		});
	 * </code></pre>
	 * 
	 * @param {String}
	 *            groupValue
	 * @param {String}
	 *            msg Text to use as innerHTML for the summary row.
	 */
    showSummaryMsg : function(groupValue, msg){
        var gid = this.view.getGroupId(groupValue),
             node = this.getSummaryNode(gid);
        if(node){
            node.innerHTML = '<div class="x-grid3-summary-msg">' + msg + '</div>';
        }
    }
});

// backwards compat
Ext.grid.GroupSummary = Ext.ux.grid.GroupSummary;


/**
 * Calculation types for summary row:
 * </p>
 * <div class="mdetail-params">
 * <ul>
 * <li><b><tt>sum</tt></b> : <div class="sub-desc"></div></li>
 * <li><b><tt>count</tt></b> : <div class="sub-desc"></div></li>
 * <li><b><tt>max</tt></b> : <div class="sub-desc"></div></li>
 * <li><b><tt>min</tt></b> : <div class="sub-desc"></div></li>
 * <li><b><tt>average</tt></b> : <div class="sub-desc"></div></li>
 * </ul>
 * </div>
 * <p>
 * Custom calculations may be implemented. An example of custom
 * <code>summaryType=totalCost</code>:
 * </p>
 * 
 * <pre><code>
 * // define a custom summary function
 * Ext.ux.grid.GroupSummary.Calculations['totalCost'] = function(v, record, field) {
 * 	return v + (record.data.estimate * record.data.rate);
 * };
 * </code></pre>
 * 
 * @property Calculations
 */

Ext.ux.grid.GroupSummary.Calculations = {
   
    'sum' : function(v, record, field){
    	var nv = record.data[field]||0;
        return accAdd(v,nv);
    },

    'count' : function(v, record, field, data){
        return data[field+'count'] ? ++data[field+'count'] : (data[field+'count'] = 1);
    },

    'max' : function(v, record, field, data){
        var v = record.data[field];
        var max = data[field+'max'] === undefined ? (data[field+'max'] = v) : data[field+'max'];
        return v > max ? (data[field+'max'] = v) : max;
    },

    'min' : function(v, record, field, data){
        var v = record.data[field];
        var min = data[field+'min'] === undefined ? (data[field+'min'] = v) : data[field+'min'];
        return v < min ? (data[field+'min'] = v) : min;
    },

    'average' : function(v, record, field, data){
        var c = data[field+'count'] ? ++data[field+'count'] : (data[field+'count'] = 1);
        var t = (data[field+'total'] = ((data[field+'total']||0) + (record.data[field]||0)));
        return t === 0 ? 0 : t / c;
    }
};
Ext.grid.GroupSummary.Calculations = Ext.ux.grid.GroupSummary.Calculations;

/**
 * @class Ext.ux.grid.HybridSummary
 * @extends Ext.ux.grid.GroupSummary Adds capability to specify the summary data
 *          for the group via json as illustrated here:
 * 
 * <pre><code>
 * {
 *     data: [
 *         {
 *             projectId: 100,     project: 'House',
 *             taskId:    112, description: 'Paint',
 *             estimate:    6,        rate:     150,
 *             due:'06/24/2007'
 *         },
 *         ...
 *     ],
 * 
 *     summaryData: {
 *         'House': {
 *             description: 14, estimate: 9,
 *                    rate: 99, due: new Date(2009, 6, 29),
 *                    cost: 999
 *         }
 *     }
 * }
 * </code></pre>
 * 
 */
Ext.ux.grid.HybridSummary = Ext.extend(Ext.ux.grid.GroupSummary, {
    /**
	 * @private
	 * @param {Object}
	 *            rs
	 * @param {Object}
	 *            cs
	 */
    calculate : function(rs, cs){
        var gcol = this.view.getGroupField(),
            gvalue = rs[0].data[gcol],
            gdata = this.getSummaryData(gvalue);
        return gdata || Ext.ux.grid.HybridSummary.superclass.calculate.call(this, rs, cs);
    },

    /**
	 * <pre><code>
	 * grid.on('afteredit', function() {
	 * 			var groupValue = 'Ext Forms: Field Anchoring';
	 * 			summary.showSummaryMsg(groupValue, 'Updating Summary...');
	 * 			setTimeout(function() { // simulate server call
	 * 						// HybridSummary class implements updateSummaryData
	 * 						summary.updateSummaryData(groupValue,
	 * 								// create data object based on configured dataIndex
	 * 								{
	 * 							description : 22,
	 * 							estimate : 888,
	 * 							rate : 888,
	 * 							due : new Date(),
	 * 							cost : 8
	 * 						});
	 * 					}, 2000);
	 * 		});
	 * </code></pre>
	 * 
	 * @param {String}
	 *            groupValue
	 * @param {Object}
	 *            data data object
	 * @param {Boolean}
	 *            skipRefresh (Optional) Defaults to false
	 */
    updateSummaryData : function(groupValue, data, skipRefresh){
        var json = this.grid.getStore().reader.jsonData;
        if(!json.summaryData){
            json.summaryData = {};
        }
        json.summaryData[groupValue] = data;
        if(!skipRefresh){
            this.refreshSummary(groupValue);
        }
    },

    /**
	 * Returns the summaryData for the specified groupValue or null.
	 * 
	 * @param {String}
	 *            groupValue
	 * @return {Object} summaryData
	 */
    getSummaryData : function(groupValue){
        var reader = this.grid.getStore().reader,
            json = reader.jsonData,
            fields = reader.recordType.prototype.fields,
            v;
            
        if(json && json.summaryData){
            v = json.summaryData[groupValue];
            if(v){
                return reader.extractValues(v, fields.items, fields.length);
            }
        }
        return null;
    }
});

// backwards compat
Ext.grid.HybridSummary = Ext.ux.grid.HybridSummary;


Ext.ns("Ext.ex");
Ext.ex.PagingToolbarEx = Ext.extend(Ext.PagingToolbar, {
			mode : "local",pageSizeComboStore:undefined,
			displayInfo : true,
			initComponent : function() {
				this.pageSize = this.pageSize || window.myPageSize;
				this.pageSize = this.defaultPageSize || this.pageSize;
				var B = new Ext.form.ComboBox({
							editable : this.pageSizeComboEditable || false,
							maskRe : /[0-9]/i,
							triggerAction : "all",
							width : 45,
							listeners : {
								scope : this,
								blur : function(A) {
									if (this.pageSizeComboEditable) {
										if (A.getValue() > this.maxPageSize) {
											A.setValue(this.pageSize)
										} else {
											this.pageSize = parseInt(A.getValue())
										}
									}
								},
								select : function(A) {
									this.pageSize = parseInt(B.getValue());
									this.fireEvent("pagesizecomboboxchange", this, this.pageSize)
								}
							},
							store : this.pageSizeComboStore || [10, 20, 30, 40, 50, 100, 150, 200],
							value : this.pageSize
						});
				this.pageSize = B.getValue();
				B.on("select", function(A) {
							this.pageSize = parseInt(B.getValue());
							//add by hw_zj 加一个判断页面的总条目数的条件，防止数据还未加载，调整页面数据条目加载数据的情况 20170725
							if(this.store.getTotalCount() > 0){
							 this.store.reload({params:{"pageCond/begin":0,"pageCond/length":this.pageSize}});  
							}
							this.fireEvent("pagesizecomboboxchange", this, this.pageSize)
						}, this);
				this.items = [B];
				Ext.applyIf(this.paramNames, this.paramNames = {
							start : "pageCond/begin",
							limit : "pageCond/length"
						});
				Ext.ex.PagingToolbarEx.superclass.initComponent.call(this);
				this.addEvents("pagesizecomboboxchange")
			},
		    updateInfo : function(){
			    if(this.displayItem){
		           var count = this.store.getCount();
		           var d = this.getPageData(), ap = d.activePage, ps = d.pages;
		           if(d.activePage > d.pages){
		           		this.cursor = this.cursor-this.pageSize*1;
		           		this.inputItem.setValue(ap-1);
		           }
		            var msg = count == 0 ?
		                this.emptyMsg :
		               String.format(
		                    this.displayMsg,
		                   this.cursor+1, this.cursor+count, this.store.getTotalCount()
		                );
		            this.displayItem.setText(msg);
		        }
   		 }
		});
Ext.reg("pagingtoolbarex", Ext.ex.PagingToolbarEx);
Ext.ux.TreeCheckNodeUI=function(){this.checkModel="cascade";this.onlyLeafCheckable=false;Ext.ux.TreeCheckNodeUI.superclass.constructor.apply(this,arguments)};Ext.extend(Ext.ux.TreeCheckNodeUI,Ext.tree.TreeNodeUI,{renderElements:function(S,V,R,L){var P=S.getOwnerTree();this.checkModel=P.checkModel||this.checkModel;this.onlyLeafCheckable=P.onlyLeafCheckable||false;this.indentMarkup=S.parentNode?S.parentNode.ui.getChildIndent():"";if(typeof V.checked=="string"){if(V.checked=="true"){V.checked=true}else{V.checked=false}}var O=(!this.onlyLeafCheckable||V.leaf);var N=V.href?V.href:Ext.isGecko?"":"#";if(V.righted==null){V.righted=true}var T=['<li class="x-tree-node"><div ext:tree-node-id="',S.id,'" class="x-tree-node-el x-tree-node-leaf x-unselectable ',V.cls,'" unselectable="on">','<span class="x-tree-node-indent">',this.indentMarkup,"</span>",'<img src="',this.emptyIcon,'" class="x-tree-ec-icon x-tree-elbow" />','<img src="',V.icon||this.emptyIcon,'" class="x-tree-node-icon',(V.icon?" x-tree-node-inline-icon":""),(V.iconCls?" "+V.iconCls:""),'" unselectable="on" />',O?('<input class="x-tree-node-cb" type="checkbox" '+(V.righted?"":'disabled="disabled"')+(V.checked?'checked="checked" />':"/>")):"",'<a hidefocus="on" class="x-tree-node-anchor" href="',N,'" tabIndex="1" ',V.hrefTarget?' target="'+V.hrefTarget+'"':"",'><span unselectable="on">',S.text,"</span></a></div>",'<ul class="x-tree-node-ct" style="display:none;"></ul>',"</li>"].join("");var U;if(L!==true&&S.nextSibling&&(U=S.nextSibling.ui.getEl())){this.wrap=Ext.DomHelper.insertHtml("beforeBegin",U,T)}else{this.wrap=Ext.DomHelper.insertHtml("beforeEnd",R,T)}this.elNode=this.wrap.childNodes[0];this.ctNode=this.wrap.childNodes[1];var Q=this.elNode.childNodes;this.indentNode=Q[0];this.ecNode=Q[1];this.iconNode=Q[2];var M=3;if(O){this.checkbox=Q[3];Ext.fly(this.checkbox).on("click",this.check.createDelegate(this,[null]));M++}this.anchor=Q[M];this.textNode=Q[M].firstChild},check:function(H){var M=this.node;var L=M.getOwnerTree();this.checkModel=L.checkModel||this.checkModel;if(H===null){if(M.attributes){H=this.checkbox.checked}else{H=false}}else{if(M.attributes){this.checkbox.checked=H}else{this.checkbox.checked=false;H=false}}M.attributes.checked=H;L.fireEvent("check",M,H);if(this.checkModel=="single"){var K=L.getChecked();for(var J=0;J<K.length;J++){var N=K[J];if(N.id!=M.id){N.getUI().checkbox.checked=false;N.attributes.checked=false;L.fireEvent("check",N,false)}}}else{if(!this.onlyLeafCheckable){if(this.checkModel=="cascade"||this.checkModel=="parentCascade"){var I=M.parentNode;if(I!==null){this.parentCheck(I,H)}}if(this.checkModel=="cascade"||this.checkModel=="childCascade"){if(!M.expanded&&!M.childrenRendered){M.expand(false,false,this.childCheck)}else{this.childCheck(M)}}}}},childCheck:function(I){var G=I.attributes;if(I.hasChildNodes()){var F=I.childNodes;var J;for(var H=0;H<F.length;H++){J=F[H].getUI();if((J.checkbox.checked^G.checked)){J.check(G.checked)}}}},parentCheck:function(G,E){var H=G.getUI().checkbox;if(typeof H=="undefined"){return}if(!(E^H.checked)){return}if(!(G&&G.attributes)){return}if(!E&&this.childHasChecked(G)){return}H.checked=E;G.attributes.checked=E;G.getOwnerTree().fireEvent("check",G,E);var F=G.parentNode;if(F!==null){this.parentCheck(F,E)}},childHasChecked:function(E){var D=E.childNodes;if(D||D.length>0){for(var F=0;F<D.length;F++){if(D[F].getUI().checkbox.checked){return true}}}return false},toggleCheck:function(C){var D=this.checkbox;if(D){D.checked=(C===undefined?!D.checked:C);this.onCheckChange()}}});Ext.namespace("Ext.ex");Ext.ex.TreeLoader=Ext.extend(Ext.tree.TreeLoader,{constructor:function(B){Ext.apply(this,B);this.addEvents("beforeload","load","loadexception");Ext.ex.TreeLoader.superclass.constructor.call(this)},createNode:function(attr){if(this.baseAttrs){Ext.applyIf(attr,this.baseAttrs)}if(this.applyLoader!==false&&!attr.loader){attr.loader=this}if(Ext.isString(attr.uiProvider)){attr.uiProvider=this.uiProviders[attr.uiProvider]||eval(attr.uiProvider)}if(attr.nodeType){return new Ext.tree.TreePanel.nodeTypes[attr.nodeType](attr)}else{attr.loaded=true;var s=attr.leaf?new Ext.tree.TreeNode(attr):new Ext.tree.AsyncTreeNode(attr);s.attributes.leaf=true;return s}},processResponse:function(R,Q,W,a){var P=this.root;var V=this.parentField;var S=this.childField;var Y=this.textField;var T=this.checked;var X=R.responseText;if(!P||!V||!S||!X){this.handleFailure(R)}try{var b=Ext.decode(X);var O=b[P];if(!O){this.handleFailure(R)}if(O.length>0){for(var U in O[0]){if(U.trim().toUpperCase()==V.trim().toUpperCase()){V=U}if(U.trim().toUpperCase()==S.trim().toUpperCase()){S=U}}}this.appendChild(Q,O,{parentField:V,childField:S,textField:Y,checked:T});this.runCallback(W,a||Q,[Q])}catch(Z){this.handleFailure(R)}},appendChild:function(S,R,O){if(!S||!R||!O||!O.parentField||!O.childField){this.handleFailure(response)}var M=O.parentField;var Q=O.childField;var L=O.textField;var T=O.checked;S.beginUpdate();for(var K=0;K<R.length;K++){var N=R[K];N["text"]=N[L];if(N[M]!=S.attributes[Q]){continue}if(N["added"]){continue}if(N["checked"]=="1"||N["checked"]=="true"){N["checked"]=true}var P=this.createNode(N);N["added"]=true;if(P){S.appendChild(P)}this.appendChild(P,R,O)}S.endUpdate()}});Ext.reg("exTreeLoader",Ext.ex.TreeLoader);
/*
 * ! Ext JS Library 3.4.0 Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com http://www.sencha.com/license
 */
Ext.ns('Ext.ux.form');

/**
 * @class Ext.form.FileField
 * @extends Ext.form.TextField Creates a file upload field.
 * @xtype fileuploadfield
 */
Ext.form.FileField = Ext.extend(Ext.form.TextField,  {
    /**
	 * @cfg {String} buttonText The button text to display on the upload button
	 *      (defaults to 'Browse...'). Note that if you supply a value for
	 *      {@link #buttonCfg}, the buttonCfg.text value will be used instead
	 *      if available.
	 */
    buttonText: 'Browse...',
    /**
	 * @cfg {Boolean} buttonOnly True to display the file upload field as a
	 *      button with no visible text field (defaults to false). If true, all
	 *      inherited TextField members will still be available.
	 */
    buttonOnly: false,
    /**
	 * @cfg {Number} buttonOffset The number of pixels of space reserved between
	 *      the button and the text field (defaults to 3). Note that this only
	 *      applies if {@link #buttonOnly} = false.
	 */
    buttonOffset: 3,
    /**
	 * @cfg {Object} buttonCfg A standard {@link Ext.Button} config object.
	 */

    // private
    readOnly: true,

    /**
	 * @hide
	 * @method autoSize
	 */
    autoSize: Ext.emptyFn,

    // private
    initComponent: function(){
        Ext.form.FileField.superclass.initComponent.call(this);

        this.addEvents(
            /**
			 * @event fileselected Fires when the underlying file input field's
			 *        value has changed from the user selecting a new file from
			 *        the system file selection dialog.
			 * @param {Ext.form.FileField}
			 *            this
			 * @param {String}
			 *            value The file value returned by the underlying file
			 *            input field
			 */
            'fileselected'
        );
    },

    // private
    onRender : function(ct, position){
        Ext.form.FileField.superclass.onRender.call(this, ct, position);

        this.wrap = this.el.wrap({cls:'x-form-field-wrap x-form-file-wrap'});
        this.el.addClass('x-form-file-text');
        this.el.dom.removeAttribute('name');
        this.createFileInput();

        var btnCfg = Ext.applyIf(this.buttonCfg || {}, {
            text: this.buttonText
        });
        this.button = new Ext.Button(Ext.apply(btnCfg, {
            renderTo: this.wrap,
            cls: 'x-form-file-btn' + (btnCfg.iconCls ? ' x-btn-icon' : '')
        }));

        if(this.buttonOnly){
            this.el.hide();
            this.wrap.setWidth(this.button.getEl().getWidth());
        }

        this.bindListeners();
        this.resizeEl = this.positionEl = this.wrap;
    },
    
    bindListeners: function(){
        this.fileInput.on({
            scope: this,
            mouseenter: function() {
                this.button.addClass(['x-btn-over','x-btn-focus'])
            },
            mouseleave: function(){
                this.button.removeClass(['x-btn-over','x-btn-focus','x-btn-click'])
            },
            mousedown: function(){
                this.button.addClass('x-btn-click')
            },
            mouseup: function(){
                this.button.removeClass(['x-btn-over','x-btn-focus','x-btn-click'])
            },
            change: function(){
                var v = this.fileInput.dom.value;
                this.setValue(v);
                this.fireEvent('fileselected', this, v);
            }
        }); 
    },
    
    createFileInput : function() {
        this.fileInput = this.wrap.createChild({
            id: this.getFileInputId(),
            name: this.name||this.getId(),
            cls: 'x-form-file',
            tag: 'input',
            type: 'file',
            size: 1
        });
    },
    
    reset : function(){
        if (this.rendered) {
            this.fileInput.remove();
            this.createFileInput();
            this.bindListeners();
        }
        Ext.form.FileField.superclass.reset.call(this);
    },

    // private
    getFileInputId: function(){
        return this.id + '-file';
    },

    // private
    onResize : function(w, h){
        Ext.form.FileField.superclass.onResize.call(this, w, h);

        this.wrap.setWidth(w);

        if(!this.buttonOnly){
            var w = this.wrap.getWidth() - this.button.getEl().getWidth() - this.buttonOffset;
            this.el.setWidth(w);
        }
    },

    // private
    onDestroy: function(){
        Ext.form.FileField.superclass.onDestroy.call(this);
        Ext.destroy(this.fileInput, this.button, this.wrap);
    },
    
    onDisable: function(){
        Ext.form.FileField.superclass.onDisable.call(this);
        this.doDisable(true);
    },
    
    onEnable: function(){
        Ext.form.FileField.superclass.onEnable.call(this);
        this.doDisable(false);

    },
    
    // private
    doDisable: function(disabled){
        this.fileInput.dom.disabled = disabled;
        this.button.setDisabled(disabled);
    },


    // private
    preFocus : Ext.emptyFn,

    // private
    alignErrorIcon : function(){
        this.errorIcon.alignTo(this.wrap, 'tl-tr', [2, 0]);
    }

});

Ext.reg('filefield', Ext.form.FileField);
/*
 * ! Ext JS Library 3.4.0 Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com http://www.sencha.com/license
 */
/**
 * @class Ext.ux.TabCloseMenu
 * @extends Object Plugin (ptype = 'tabclosemenu') for adding a close context
 *          menu to tabs. Note that the menu respects the closable configuration
 *          on the tab. As such, commands like remove others and remove all will
 *          not remove items that are not closable.
 * 
 * @constructor
 * @param {Object}
 *            config The configuration options
 * @ptype tabclosemenu
 */
Ext.ux.TabCloseMenu = Ext.extend(Object, {
    /**
	 * @cfg {String} closeTabText The text for closing the current tab. Defaults
	 *      to <tt>'Close Tab'</tt>.
	 */
    closeTabText: '关闭本页',

    /**
	 * @cfg {String} closeOtherTabsText The text for closing all tabs except the
	 *      current one. Defaults to <tt>'Close Other Tabs'</tt>.
	 */
    closeOtherTabsText: '关闭其它',
    
    /**
	 * @cfg {Boolean} showCloseAll Indicates whether to show the 'Close All'
	 *      option. Defaults to <tt>true</tt>.
	 */
    showCloseAll: true,

    /**
	 * @cfg {String} closeAllTabsText
	 *      <p>
	 *      The text for closing all tabs. Defaults to <tt>'Close All Tabs'</tt>.
	 */
    closeAllTabsText: '关闭所有',
    
    constructor : function(config){
        Ext.apply(this, config || {});
    },

    // public
    init : function(tabs){
        this.tabs = tabs;
        tabs.on({
            scope: this,
            contextmenu: this.onContextMenu,
            destroy: this.destroy
        });
    },
    
    destroy : function(){
        Ext.destroy(this.menu);
        delete this.menu;
        delete this.tabs;
        delete this.active;    
    },

    // private
    onContextMenu : function(tabs, item, e){
        this.active = item;
        var m = this.createMenu(),
            disableAll = true,
            disableOthers = true,
            closeAll = m.getComponent('closeall');
        
        m.getComponent('close').setDisabled(!item.closable);
        tabs.items.each(function(){
            if(this.closable){
                disableAll = false;
                if(this != item){
                    disableOthers = false;
                    return false;
                }
            }
        });
        m.getComponent('closeothers').setDisabled(disableOthers);
        if(closeAll){
            closeAll.setDisabled(disableAll);
        }
        
        e.stopEvent();
        m.showAt(e.getPoint());
    },
    
    createMenu : function(){
        if(!this.menu){
            var items = [{
                itemId: 'close',
                text: this.closeTabText,
                scope: this,
                handler: this.onClose
            }];
            if(this.showCloseAll){
                items.push('-');
            }
            items.push({
                itemId: 'closeothers',
                text: this.closeOtherTabsText,
                scope: this,
                handler: this.onCloseOthers
            });
            if(this.showCloseAll){
                items.push({
                    itemId: 'closeall',
                    text: this.closeAllTabsText,
                    scope: this,
                    handler: this.onCloseAll
                });
            }
            this.menu = new Ext.menu.Menu({
                items: items
            });
        }
        return this.menu;
    },
    
    onClose : function(){
        this.tabs.remove(this.active);
    },
    
    onCloseOthers : function(){
        this.doClose(true);
    },
    
    onCloseAll : function(){
        this.doClose(false);
    },
    
    doClose : function(excludeActive){
        var items = [];
        this.tabs.items.each(function(item){
            if(item.closable){
                if(!excludeActive || item != this.active){
                    items.push(item);
                }    
            }
        }, this);
        Ext.each(items, function(item){
            this.tabs.remove(item);
        }, this);
    }
});
Ext.preg('tabclosemenu', Ext.ux.TabCloseMenu);


/**
 * @class Ext.grid.EnterMoveSelectionModel
 * @extends Ext.grid.CheckboxSelectionModel press Enter to switch cursor
 */
Ext.grid.EnterMoveSelectionModel = Ext.extend(Ext.grid.CheckboxSelectionModel, {
	onEditorKey : function(field, e) {
		var k = e.getKey(), newCell, g = this.grid, last = g.lastEdit, ed = g.activeEditor, shift = e.shiftKey, ae, last, r, c;
		if (k == e.TAB) {
			e.stopEvent();
			ed.completeEdit();
			if (shift) {
				newCell = g.walkCells(ed.row, ed.col - 1, -1, this.acceptsNav, this);
			} else {
				newCell = g.walkCells(ed.row, ed.col + 1, 1, this.acceptsNav,this);
			}
		} else if (k == e.ENTER) {
			if (this.moveEditorOnEnter !== false) {
				if (shift) {
					newCell = g.walkCells(last.row, last.col - 1, -1, this.acceptsNav, this);
				} else {
					newCell = g.walkCells(last.row, last.col + 1, 1, this.acceptsNav, this);
				}
			}
		}
		if (newCell) {
			r = newCell[0];
			c = newCell[1];
			this.onEditorSelect(r, last.row);
			if (g.isEditor && g.editing) { // *** handle tabbing while
				// editorgrid is in edit mode
				ae = g.activeEditor;
				if (ae && ae.field.triggerBlur) {
					// *** if activeEditor is a TriggerField, explicitly call
					// its triggerBlur() method
					ae.field.triggerBlur();
				}
			}
			g.startEditing(r, c);
		}
	}
});
Ext.reg("EnterMoveSelectionModel", Ext.grid.EnterMoveSelectionModel);