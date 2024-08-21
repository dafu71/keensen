function paint() {

	$('#canvas').qrcode({
		render : 'canvas',// 设置渲染方式，有table和canvas
		text : batchNo,
		width : 60, // 二维码的宽度
		height : 60, // 二维码的高度
		correctLevel : 2
			// 纠错级别，低
		});

	// 不转换打印时会变模糊
	document.getElementById('canvas').childNodes[0].toDataURL("image/pcx");
	window.print();
	
	var tumoBatchArr = tumoBatchStr.split(',');
	if (tumoBatchArr.length >= 3) {
		$('#tumoBatchStr').text(tumoBatchArr[0] + ',' + tumoBatchArr[1] + ',省略');
	}
}