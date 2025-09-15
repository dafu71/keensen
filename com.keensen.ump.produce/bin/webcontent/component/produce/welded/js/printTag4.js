function paint() {
	$('#weldedcanvas').qrcode({
		render : 'canvas',// 设置渲染方式，有table和canvas
		text : pipeCode,
		width : 52, // 二维码的宽度
		height : 52, // 二维码的高度
		correctLevel : 2
			// 纠错级别，低
		});

	// 不转换打印时会变模糊
	document.getElementById('weldedcanvas').childNodes[0].toDataURL("image/pcx");
	window.print();
}