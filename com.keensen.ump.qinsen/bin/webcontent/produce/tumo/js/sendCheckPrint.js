function paint() {
	// 请检单号|批次|位置
	var text = checkNo + '|' + batchNo + '|' + positionLength;
	$('#canvas').qrcode({
		render : 'canvas',// 设置渲染方式，有table和canvas
		text : text,
		width : 120, // 二维码的宽度
		height : 120, // 二维码的高度
		correctLevel : 1
			// 纠错级别，低
		});

	// 不转换打印时会变模糊
	document.getElementById('canvas').childNodes[0].toDataURL("image/pcx");
	window.print();
}