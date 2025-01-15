
/*
 * 查询导出excel 入参： obj:调用者，一般为this queryPanel：查询form listPanel：列表
 * mytitle：标签的sheetname nameSqlId：命名sql notexport:无需导出的列表索引 出参： 文件：download.xlsx
 */
function doQuerySqlAndExport(obj,queryPanel,listPanel,mytitle,nameSqlId,notexport){
	
	var _this = obj;
	var condition = {};
	if(!Ext.isEmpty(queryPanel)){
		var params = queryPanel.getForm().getValues();
		for (var key in params) {
			var k =key.substring(key.indexOf('/')+1,100);
			condition[k]=params[key]
		}
	}	

	_this.requestMask = _this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	_this.requestMask.show();

	Ext.Ajax.request({
		url : 'com.keensen.ump.base.common.query.biz.ext',
		method : "post",
		jsonData : {'condition' : condition,'nameSqlId':nameSqlId},
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {

				var data = ret.data;
				var cm = listPanel.getColumnModel();
				var len = cm.getColumnCount();
				var columns = [];

				var arr = {};
				if(!Ext.isEmpty(notexport)){
							arr = notexport.split(',');							
				}
				
				for (var i = 0; i < len; i++) {

					if(!Ext.isEmpty(notexport) && findElement(arr, i)==-1){
						
						if (!Ext.isEmpty(cm.getColumnHeader(i))) {
							var column = {};
							
							var columnHeader = cm.getColumnHeader(i);
							columnHeader = removeTags(columnHeader);						
							column.header = columnHeader;
							column.key = cm.getDataIndex(i);							
							columns.push(column);
						}
					}
					if(Ext.isEmpty(notexport)){
						
						if (!Ext.isEmpty(cm.getColumnHeader(i))) {
							var column = {};
							var columnHeader = cm.getColumnHeader(i);
							columnHeader = removeTags(columnHeader);						
							column.header = columnHeader;
							column.key = cm.getDataIndex(i);							
							columns.push(column);
						}
					}
				}
				
				doExprot(mytitle,data, columns);

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

/*
 * 查询导出excel 入参： obj:调用者，一般为this queryPanel：查询form listPanel：列表
 * mytitle：标签的sheetname bizname：逻辑流全称，带biz.ext 出参： 文件：download.xlsx
 */
function doQueryAndExport(obj,queryPanel,listPanel,mytitle,bizname){
	var _this = obj;
	
	var condition = {};
	if(!Ext.isEmpty(queryPanel)){
		var params = queryPanel.getForm().getValues();
		for (var key in params) {
			var k =key.substring(key.indexOf('/')+1,100);
			condition[k]=params[key]
		}
	}	

	_this.requestMask = _this.requestMask || new Ext.LoadMask(Ext.getBody(), {
				msg : "后台正在操作,请稍候!"
			});
	_this.requestMask.show();

	Ext.Ajax.request({
		url : bizname,
		method : "post",
		jsonData : condition,
		success : function(resp) {
			var ret = Ext.decode(resp.responseText);
			if (ret.success) {

				var data = ret.data;
				var cm = listPanel.getColumnModel();
				var len = cm.getColumnCount();
				var columns = [];

				for (var i = 0; i < len; i++) {
					if (!Ext.isEmpty(cm.getColumnHeader(i))) {
						var column = {};
						var columnHeader = cm.getColumnHeader(i);
						columnHeader = removeTags(columnHeader);
						column.header = columnHeader;
						column.key = cm.getDataIndex(i);
						columns.push(column);
					}
				}
				
				doExprot(mytitle,data, columns);

			}

		},
		callback : function() {
			_this.requestMask.hide()
		}
	})
}

function removeTags(myStr) {
	if ((myStr === null) || (myStr === ''))
		return false;
	else
		myStr = myStr.toString();
	return myStr.replace(/(<([^>]+)>)/ig, '');
}

function doExprot(mytitle,data, columns) {
	
	// 创建一个workbook
	var workbook = new ExcelJS.Workbook();
	// workbook 添加一个标签的sheet
	var worksheet = workbook.addWorksheet(mytitle);
	// 设置sheet数据中的列名
	worksheet.columns = columns;
	// 设置数据（可以通过后台获取、获取已经存在的数据）

	// 开始添加数据
	/*
	 * for (let i in data) { worksheet.addRow(data[i]).commit(); }
	 */
	worksheet.addRows(data);
	const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
	// 下载excel
	workbook.xlsx.writeBuffer().then((data) => {
		const blob = new Blob([data], {
				type: EXCEL_TYPE
			});
		saveAs(blob, 'download.xlsx');
	});
}

function findElement(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i; // 或者返回arr[i]，取决于需求
    }
  }
  return -1; // 如果没有找到匹配的元素
}