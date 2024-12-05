function doExprot(mytitle,data, columns) {
	
	// 创建一个workbook
	var workbook = new ExcelJS.Workbook();
	// workbook 添加一个标签的sheet
	var worksheet = workbook.addWorksheet(mytitle);
	// 设置sheet数据中的列名
	worksheet.columns = columns;
	// 设置数据（可以通过后台获取、获取已经存在的数据）

	// 开始添加数据
	/* for (let i in data) {
	worksheet.addRow(data[i]).commit();
	} */
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
