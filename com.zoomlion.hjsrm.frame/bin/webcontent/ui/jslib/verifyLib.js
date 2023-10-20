/**
	验证正整数：vtype='positiveInteger'
*/
var positiveIntegerTest = /^[0-9]*[1-9][0-9]*$/;
 Ext.apply(Ext.form.VTypes, {
  positiveInteger:  function(val,field) {
         return positiveIntegerTest.test(val);
     },
     positiveIntegerText: '请输入正整数'
 });

/**
	验证邮编 vtype='code'
*/
var codeTest = /^[0-9]{6}$/;;
Ext.apply(Ext.form.VTypes, {
    code:  function(val,field) {
        return codeTest.test(val);
    },
    codeText: '请输入正确的邮政编码',
    codeMask: /[0-9]/i
});

/**
	验证整数 vtype='integer'
*/
var integerTest =/^[-+]?[\d]+$/;
Ext.apply(Ext.form.VTypes,{
 integer : function(val, field) {
  return integerTest.test(val);
},
integerText : '请输入正确的整数',
integerMask: /[0-9]/i
});

/**
	验证两位小数的正实数：vtype='money'
*/
var moneyTest = /^[0-9]+(.[0-9]{1,2})?$/;
 Ext.apply(Ext.form.VTypes, {
  money:  function(val,field) {
         return moneyTest.test(val);
     },
     moneyText: '正确格式为：0.01'
 });
 
/**
	验证身份证号 vtype='idCard'
*/
var idCardTest =/\d{18}|\d{15}/i;
Ext.apply(Ext.form.VTypes, {
 idCard:  function(val,field) {
        return idCardTest.test(val);
    },
    idCardText: '请输入正确的身份证号码',
    idCardMask: /[0-9]/i
});

/**
	不允许特殊字符的字符串 vtype='nString'
*/
var  nStringTest =/[^%&';=?$\x22]/;
 Ext.apply(Ext.form.VTypes, {
  	nString:  function(val,field) {
         return nStringTest.test(val);
     },
     nStringText: '不可输入特殊字符',
     nStringMask: /[0-9a-zA-Z\u4e00-\u9fa5_"., -]/
 });
 
/**
	验证人名 vtype='name'
*/
var  nameTest =/[^%&';=?$\x22]/;
 Ext.apply(Ext.form.VTypes, {
  name:  function(val,field) {
         return specialWordTest.test(val);
     },
     nameText: '请输入姓名的正确格式',
     nameMask: /[a-zA-Z\u4e00-\u9fa5.]/
 });
 
 
 /**
	验证网址 vtype='url'
*/ 
 var strRegex=/^((https|http|ftp|rtsp|mms)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/ ;
var urlTest=new RegExp(strRegex);  
 Ext.apply(Ext.form.VTypes, {
  url:  function(val,field) {
         return urlTest.test(val);
     },
     urlText: '请输入正确的网址格式,如：http://www.xxxxx.com/'
 });

 
/**
	验证电话号码：vtype='tel'
*/
var telTest = /^((\(\d{2,3}\))|(\d{3,4}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{5,7}(\-\d{1,4})?$/;
 Ext.apply(Ext.form.VTypes, {
  tel:  function(val,field) {
         return telTest.test(val);
     },
     telText: '正确格式为:电话号码、短号、区号-电话号码、电话号码-分机号、区号-电话号码-分机号'
 });

/**
	验证手机号码：vtype='phone'
*/
var phoneTest = /^0{0,1}(13[0-9]|15[0-9]|18[0-9])[0-9]{8}$/;
 Ext.apply(Ext.form.VTypes, {
  phone:  function(val,field) {
         return phoneTest.test(val);
     },
     phoneText: '正确格式为:移动、联通、电信手机号'
 });

/**
	验证email：vtype='email'
*/
var emailTest = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
 Ext.apply(Ext.form.VTypes, {
  	email:  function(val,field) {
         return emailTest.test(val);
     },
    emailText: '正确格式为：mail@qq.com'
 });
  
/**
	验证用户密码：vtype='password'
*/
var passwordTest = /^[a-zA-Z]\w{5,17}$/;
 Ext.apply(Ext.form.VTypes, {
  password:  function(val,field) {
         return passwordTest.test(val);
     },
     passwordText: '正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。'
 });

/**
	验证汉字：vtype='chinese'
*/
var chineseTest = /^[\u4e00-\u9fa5],{0,}$/;
 Ext.apply(Ext.form.VTypes, {
  chinese:  function(val,field) {
         return chineseTest.test(val);
     },
     chineseText: '只能输入汉字'
 });

/**
	验证只能输入字母和数字：vtype='charno'
*/
var charnoTest = /^[A-Za-z0-9]+$/;
 Ext.apply(Ext.form.VTypes, {
  charno:  function(val,field) {
         return charnoTest.test(val);
     },
     charnoText: '只能输入字母和数字'
 });
 
/**
	验证26个英文字母组成的字符串：vtype='char'
*/
var charTest = /^[A-Za-z]+$/;
 Ext.apply(Ext.form.VTypes, {
  char:  function(val,field) {
         return charTest.test(val);
     },
     charText: '只能输入字母'
 });
 
/**
	验证非负整数：vtype='no'
*/
var noTest = /^\d+$/;
 Ext.apply(Ext.form.VTypes, {
  no:  function(val,field) {
         return noTest.test(val);
     },
     noText: '正整数和0'
 });
 
/**
	验证主键是否唯一:vtype='unique'
*/
Ext.apply(Ext.form.VTypes, {

	unique : function(val, field) { // val指这里的文本框值，field指这个文本框组件
		if (/^[a-zA-Z0-9_]+$/.test(val)) {
			var valueType = field.valueType || '1';
			var columnName = field.getName();
			if (/\//.test(field.getName())) {
				columnName = columnName.substr(columnName.indexOf('/') + 1);
			}
			//判断校验字段是否存在
			if(Ext.isEmpty(field.checkname)){
				var param = 'table=' + field.tablename + '&column=' + columnName
					+ '&value=' + val + '&valueType=' + valueType;
			}else{
				var param = 'table=' + field.tablename + '&column=' + field.checkname
					+ '&value=' + field.checkvalue + '&valueType=' + valueType;
			}


			var result = Ext.ex.XMLHttpRequestEx.synchRequest("POST",
					'com.zoomlion.hjsrm.clib.util.ClibUtil.validateUniqueByTable.biz.ext?'
							+ encodeURI(param));
			var obj = Ext.decode(result);

			if (obj.ret == '0') {
					return true
				}	
		}
	},
	remoteValidatorText : "主键冲突!"
});

	
/**
 * @param {} val 验证时间范围 ：vtype='dateRange'
 * @param {} field 
 * @description 用法：设置时间选择范围 field 必须包括startDateField 或者 endDateField配置项
 * @cfg startDateField：开始表单域的ID
 * @cfg endDateField配置项 :结束表单域的ID
 * @return {Boolean}
*/
Ext.apply(Ext.form.VTypes, {
	dateRange : function(val, field) {
			var date = field.parseDate(val);
			if (!date) {
				return false;
			}
			if (field.startDateField) {
				var start = Ext.getCmp(field.startDateField);
				if (!start.maxValue || (date.getTime() != start.maxValue.getTime())) {
					start.setMaxValue(date);
					start.validate();
				}
			} else if (field.endDateField) {
				var end = Ext.getCmp(field.endDateField);
				if (!end.minValue || (date.getTime() != end.minValue.getTime())) {
					end.setMinValue(date);
					end.validate();
				}
			}
			/*
			 * 总是返回true 因为vtype 只是设置表单域的最大值或最小值
			 */
			return true;
		},
		daterangeText:'截止日期必须大于开始日期',
	lessThan : function(val,field){
		var date = field.parseDate(val);
		if(!date){
			return false;
		}
		var form = field.findParentByType('form');
		var lessThanField = form.getForm().findField(field.lessThanName);
		if(lessThanField){
			var maxDate = date.add(Date.DAY,1);
			lessThanField.setMinValue(maxDate);
			lessThanField.validate();
		}
		return true;
	},
	lessThanText:'超过最大日期'	
});

/**
	验证机构编码是否唯一:vtype='orgcode'
*/
Ext.apply(Ext.form.VTypes, {

	orgcode : function(val, field) { // val指这里的文本框值，field指这个文本框组件
		if (/^[a-zA-Z0-9_]+$/.test(val)) {
			
			var param = 'code=' + val;

			var result = Ext.ex.XMLHttpRequestEx.synchRequest("POST",
					'com.zoomlion.hjsrm.frame.org.organization.OrgManager.checkOrgCode.biz.ext?'
							+ encodeURI(param));
			var obj = Ext.decode(result);
			if (obj.data == '1') {
				return true;
			}else{
				return false;
			}
		}
	},
	orgcodeText : "编码已存在!"
});

Ext.apply(Ext.form.VTypes, {
	//	注：该校验用于机构ID和员工编码联合校验,即使用此校验时表单上必须有名称为emp/mainorgid的机构树
	empcode : function(val, field) { // val指这里的文本框值，field指这个文本框组件
		if (/^[a-zA-Z0-9_]+$/.test(val)) {
			var orgid = 'orgid=' + field.findParentByType('panel').form.findField('emp/mainorgid').hiddenField.value;
			var param = 'code=' + val;
			var result = Ext.ex.XMLHttpRequestEx.synchRequest("POST",
					'com.zoomlion.hjsrm.frame.org.employee.EmployeeManager.checkEmpCode.biz.ext?'
							+ encodeURI(param)+'&'+ encodeURI(orgid));
			var obj = Ext.decode(result);
			if (obj.data == '1') {
				return true;
			}else{
				return false;
			}
		}
	},
	empcodeText : "该编码在该机构中已存在!"
});

Ext.apply(Ext.form.VTypes, {
	rolecode : function(val, field) { // val指这里的文本框值，field指这个文本框组件
		if (/^[a-zA-Z0-9_]+$/.test(val)) {
			if (this.originalValue == val){
				return true;
			}
			var param = 'code=' + val;
			var result = Ext.ex.XMLHttpRequestEx.synchRequest("POST",
					'com.zoomlion.hjsrm.frame.rights.role.RoleManage.checkRoleCode.biz.ext?'
							+ encodeURI(param));
			var obj = Ext.decode(result);
			if (obj.data == '1') {
				return true;
			}else{
				return false;
			}
		}
	},
	rolecodeText : "该编码在该机构中已存在!"
});
Ext.apply(Ext.form.VTypes, {
	optcode : function(val, field) { 
		if (/^[a-zA-Z0-9_]+$/.test(val)) {
			if (this.originalValue == val){
				return true;
			}
			var param = 'userid=' + val;
			var result = Ext.ex.XMLHttpRequestEx.synchRequest("POST",
					'com.zoomlion.hjsrm.frame.rights.operator.OperatorManage.checkUserID.biz.ext?'
							+ encodeURI(param));
			var obj = Ext.decode(result);
			if (obj.msg == '') {
				return true;
			}else{
				Ext.form.VTypes.optcodeText=obj.msg;
				return false;
			}
		}
	},
	optcodeText : ""
});