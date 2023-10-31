/**
 * WebPrint 网页打印控件封装类
 * 
 * @author Chenmin (mailto:chenmin@primeton.com)
 * @date 2012-11-2 - 上午06:48:31
 * @class WebPrint 的js对象
 */
if (typeof(webPrint) == 'function') {
	alert('请勿重复引用/interfaces/print/common.js,请仅在框架jsp页面引用一次！');
}

webPrint = function() {

	this.LODOP = {};//打印机控件
	
	this.time = 0;//超时计数器

	/**
	 * 初始化方法
	 * 
	 * @argument lodopName：打印控件名称前缀，无参数为“LODOP”
	 */
	this.init = function(lodopName) {
		alert(lodopName);
		this.initLODOP(lodopName);
		if (!this.check())
			return;
	}

	/**
	 * 检测Lodop方法
	 */
	this.check = function() {
		if (this.LODOP == null) {
			alert('Lodop控件未安装成功！');
			return false;
		}
		alert('Lodop控件安装成功！');
		return true;
	}

	/**
	 * 打印预览
	 */
	this.preview = function() {
		return this.LODOP.PREVIEW();
	}

	/**
	 * 直接打印
	 */
	this.print = function() {
		return this.LODOP.PRINT();
	}

	/**
	 * 直接打印 同函数PRINT。打印前提示选择打印机。 参数：同函数PRINT。
	 * 结果：同函数PRINT。返回逻辑结果，当真实打印时返回真，放弃打印或打印出错时返回假
	 * 
	 */
	this.printa = function() {
		return this.LODOP.PRINTA();
	}
	
	/**
	 * 设置打印项风格
	 * strStyleName：打印风格名
	 * varStyleValue：打印风格值
	 */
	this.print_style = function(strStyleName,varStyleValue) {
		return this.LODOP.SET_PRINT_STYLE(strStyleName,varStyleValue);
	}
	
	/**
	 * 设置打印项风格
	 * varItemNameID：要设置的目标项序号或项目名，数字型或字符型
	 * strStyleName：打印风格名
	 * varStyleValue：打印风格值
	 */
	this.print_stylea = function(varItemNameID,strStyleName,varStyleValue) {
		return this.LODOP.SET_PRINT_STYLEA(varItemNameID,strStyleName,varStyleValue);
	}

	/**
	 * 打印维护
	 */
	this.setup = function() {
		return this.LODOP.PRINT_SETUP();
	}

	/**
	 * 打印设计
	 */
	this.design = function() {
		return this.LODOP.PRINT_DESIGN();
	}

	/**
	 * 返回Lodop版本
	 */
	this.version = function() {
		return this.LODOP.VERSION;
	}

	/**
	 * 打印分页
	 * 
	 */
	this.newpage = function() {
		this.LODOP.NewPage();
	}
	/**
	 * 打印初始化
	 * 
	 * @argument strPrintTaskName 打印任务名称
	 */
	this.print_init = function(strPrintTaskName) {
		this.LODOP.PRINT_INIT(strPrintTaskName);
	}
	/**
	 * 打印初始化,含画布信息
	 * 
	 * @argument intTop 顶部位置
	 * @argument intLeft 左侧位置
	 * @argument intWidth 宽度
	 * @argument intHeight 高度
	 * @argument strPrintTaskName 打印任务名称
	 */
	this.print_inita = function(intTop, intLeft, intWidth, intHeight, strPrintTaskName) {
		this.LODOP.PRINT_INITA(intTop, intLeft, intWidth, intHeight, strPrintTaskName);
	}

	/**
	 * 打印纸张信息设置
	 * 
	 * @argument intOrient 打印方向及纸张类型 1---纵向打印，固定纸张； 2---横向打印，固定纸张；
	 *           3---纵向打印，宽度固定，高度按打印内容的高度自适应(见样例18)； 0---方向不定，由操作者自行选择或按打印机缺省设置。
	 * 
	 * @argument intPageWidth 纸张宽，单位为0.1mm 譬如该参数值为45，则表示4.5mm,计量精度是0.1mm。
	 * @argument intPageHeight 固定纸张时该参数是纸张高；高度自适应时该参数是纸张底边的空白高，计量单位与纸张宽一样。
	 * @argument strPageName 纸张类型名，
	 *           intPageWidth等于零时本参数才有效，具体名称参见操作系统打印服务属性中的格式定义。
	 *           关键字“CreateCustomPage”会在系统内建立一个名称为“LodopCustomPage”自定义纸张类型。
	 */
	this.set_print_pagesize = function(intOrient, intPageWidth, intPageHeight, strPageName) {
		this.LODOP.SET_PRINT_PAGESIZE(intOrient, intPageWidth, intPageHeight, strPageName);
	}

	/**
	 * 添加HTML内容
	 * 
	 * @argument intTop 顶部位置
	 * @argument intLeft 左侧位置
	 * @argument intWidth 宽度
	 * @argument intHeight 高度
	 * @argument strHTML HTML内容
	 */
	this.add_print_htm = function(intTop, intLeft, intWidth, intHeight, strHTML) {
		this.LODOP.ADD_PRINT_HTM(intTop, intLeft, intWidth, intHeight, strHTML);
	}

	/**
	 * 添加HTML表格内容
	 * 
	 * @argument intTop 顶部位置
	 * @argument intLeft 左侧位置
	 * @argument intWidth 宽度
	 * @argument intHeight 高度
	 * @argument strHTML HTML内容
	 */
	this.add_print_table = function(intTop, intLeft, intWidth, intHeight, strHTML) {
		this.LODOP.ADD_PRINT_TABLE(intTop, intLeft, intWidth, intHeight, strHTML);
	}

	/**
	 * 添加文本内容
	 * 
	 * @argument intTop 顶部位置
	 * @argument intLeft 左侧位置
	 * @argument intWidth 宽度
	 * @argument intHeight 高度
	 * @argument strText 文本
	 */
	this.add_print_text = function(intTop, intLeft, intWidth, intHeight, strText) {
		this.LODOP.ADD_PRINT_TEXT(intTop, intLeft, intWidth, intHeight, strText);
	}

	/**
	 * 添加打印网页的网址
	 * 
	 * @argument intTop 顶部位置
	 * @argument intLeft 左侧位置
	 * @argument intWidth 宽度
	 * @argument intHeight 高度
	 * @argument strURL 网址
	 */
	this.add_print_url = function(intTop, intLeft, intWidth, intHeight, strURL) {
		this.LODOP.ADD_PRINT_URL(intTop, intLeft, intWidth, intHeight, strURL);
	}
	
	/**
	 * 条码打印方法
	 */
	this.add_print_code = function(intTop, intLeft, intWidth, intHeight,codeType, codeValue) {
		this.LODOP.ADD_PRINT_BARCODE(intTop, intLeft, intWidth, intHeight, codeType,codeValue);
	}

	/**
	 * 设置打印控件模式和值
	 * 
	 * @argument strModeType：模式类型有“PREVIEW_IN_BROWSE”“SETUP_IN_BROWSE”“DESIGN_IN_BROWSE”“BKIMG_IN_PREVIEW”等等;
	 * @argument intModeValue：1-表示是，0或其它-表示不是(不调用本函数也表示不是)。
	 */
	this.set_show_mode = function(strModeType, intModeValue) {
		this.LODOP.SET_SHOW_MODE(strModeType, intModeValue);
	}
	/**
	 * 
	 * 设置打印模式
	 * 
	 * 功能：设置人工双面打印模式等
	 * 
	 * @argument strModeType：模式类型名，字符型，如下是类型名及其含义：
	 *           “DOUBLE_SIDED_PRINT”：设置是否人工双面打印。 “PRINT_START_PAGE”：指定要打印的起始页。
	 *           “PRINT_END_PAGE”：指定要打印的截止页。 “PRINT_PAGE_PERCENT”：指定整页缩放打印的比例。
	 *           “AUTO_CLOSE_PREWINDOW”：设置打印完毕是否自动关闭预览窗口。
	 *           “PRINT_SETUP_PROGRAM”：设置打印维护窗口关闭后是否返回程序代码。
	 *           “NOCLEAR_AFTER_PRINT”：设置打印或预览后内容不清空是否为真。
	 *           “CATCH_PRINT_STATUS”：设置是否进行对后台服务的打印状态进行捕获。
	 *           “POS_BASEON_PAPER”：设置输出位置以纸张边缘为基点。
	 *           “CUSTOM_TASK_NAME”：设置本次输出的打印任务名(打印任务池里的“文档名”)。
	 *           “PROGRAM_VARNAME”：重新指定生成程序代码时的变量ID名(需购买高级注册号)
	 *           “PROGRAM_ROOTDIR”：重新指定客户端本地数据的工作目
	 * @argument 模式类型值，整数或字符型，相关值如下：
	 *           DOUBLE_SIDED_PRINT的值：整数或字符型，1或“1”或“True”=是,否则不是。
	 *           PRINT_START_PAGE的值：整数，不设置本参数时，控件默认从1开始打印。适用打印部分页时。
	 *           PRINT_END_PAGE的值：整数，不设置本参数时，控件默认打印到最后页。适用打印部分页时。
	 *           PRINT_PAGE_PERCENT的值：字符型，具体值有如下几种： “Full-Width” –宽度按纸张的整宽缩放；
	 *           “Full-Height”–高度按纸张的整高缩放： “Full-Page” –按整页缩放，也就是既按整宽又按整高缩放；
	 *           此外还可以按具体百分比例，格式为“Width:XX%;Height:XX%”或“XX%”
	 *           比值范围是5%-800%,也就是最大缩小到原来的5%，最大放大8倍。
	 *           AUTO_CLOSE_PREWINDOW的值：整数或字符型，1或“1”或“True”=是,否则不是。
	 *           PRINT_SETUP_PROGRAM的值：整数或字符型，1或“1”或“True”=是,否则不是，打印维护窗口关闭后如果不返回程序代码，则返回打印按钮被点击的次数。
	 *           NOCLEAR_AFTER_PRINT的值：整数或字符型，1或“1”或“True”=是,否则不是，默认值是“否”，也就是说，默认情况下打印或预览后会清空所有内容。
	 *           CATCH_PRINT_STATUS的值：整数或字符型，1或“1”或“True”=是,否则不是，默认值是“否”，也就是说，默认情况下打印时不对打印状态进行捕获，该捕获动作会针对每个打印机开启一个监控线程，对页面性能有少许影响，开启后用GET_VALUE获得状态值。
	 *           POS_BASEON_PAPER的值：整数或字符型，1或“1”或“True”=是,否则不是。默认值是“否”，也就是默认不以纸张边缘为基点，而以可打印区域的边缘为基点。
	 *           CUSTOM_TASK_NAME的值：字符型，可以是汉字，未限制长度，本设置比PRINT_INIT或PRINT_INITA函数设置的打印任务名优先级高，如此以来可以实现在同一套配置文件下起多个打印任务名，以利于按打印任务名管理的输出。
	 *           PROGRAM_VARNAME的值：字符型，仅支持字母，不能带各种符号，不执行本设置时的默认ID名是“LODOP”
	 *           (设置PROGRAM_VARNAME值需要购买高级注册号)。
	 *           PROGRAM_ROOTDIR的值：字符型,指定的工作目录首字母可以是盘符（如C：），不带盘符时，则在“系统盘:\Program
	 *           Files”下建立子目录，这里特别注意与其它软件的路径区别。不执行本设置时的默认路径:系统盘:\Program
	 *           Files\MountTaiSoftware\Lodop (设置PROGRAM_ROOTDIR值需要购买高级注册号)。
	 * @return  返回逻辑结果，成功时返回真，失败时返回假。
	 */
	this.set_print_mode = function(strModeType, varModeValue) {
		return this.LODOP.SET_PRINT_MODE(strModeType, varModeValue);
	}
	
	/**
	 * 设置进行对后台服务的打印状态进行捕获
	 */
	this.catch_print_status = function() {
		return this.set_show_mode("CATCH_PRINT_STATUS",true);
	}
	
	/**
	 * 返回打印状态代码
	 *  1-已暂停
		2-错误
		4-正删除
		8-进入队列 
		16-正在打印
		32-脱机
		64-缺纸
		128-打印结束 
		256-已删除
		512-堵塞
		1024-用户介入
		2048-正在重新启动 
	 * @argument P_ID 打印任务号
	 */
	this.print_status_id = function(P_ID){     
		return this.LODOP.GET_VALUE("PRINT_STATUS_ID",P_ID)
	}
	
	/**
	 * 判断该打印任务是否还处在队列中
	 * @argument P_ID 打印任务号
	 */
	this.print_status_exist = function(P_ID){     
		return this.LODOP.GET_VALUE("PRINT_STATUS_EXIST",P_ID)
	}
	
	/**
	 * 判断该打印任务是否还处在队列中
	 * @argument P_ID 打印任务号
	 */
	this.print_status_ok = function(P_ID){     
		return this.LODOP.GET_VALUE("PRINT_STATUS_OK",P_ID)
	}
	
	/**
	 * 该打印任务持续的时间(秒)
	 * @argument P_ID 打印任务号
	 */
	this.print_status_seconds = function(P_ID){     
		return this.LODOP.GET_VALUE("PRINT_STATUS_SECONDS",P_ID)
	}
	
	/**
	 * 该打印机是否处于忙碌状态
	 * @argument P_ID 打印任务号
	 */
	this.print_status_busy = function(P_ID){     
		return this.LODOP.GET_VALUE("PRINT_STATUS_BUSY",P_ID)
	}
	
	/**
	 * 获得打印控件的值
	 * 
	 * @argument strModeType：打印控件内部名称;
	 * @argument intModeValue：打印控件内部名称属性;
	 */
	this.get_value = function(strModeType, intModeValue) {
		return this.LODOP.GET_VALUE(strModeType, intModeValue);
	}

	/**
	 * 装载背景图
	 * 
	 * @argument strHtmFile：装载背景图;
	 */
	this.add_print_setup_bkimg = function(strHtmFile) {
		return this.LODOP.ADD_PRINT_SETUP_BKIMG(strHtmFile);
	}

	/**
	 * 获得打印控件的模板代码
	 */
	this.get_code = function() {
		return this.get_value('ProgramCodes', 0);
	}

	/**
	 * 打印背景图
	 */
	this.needPrintBackgroundImage = function() {
		this.LODOP.SET_SHOW_MODE('BKIMG_PRINT', 1);
	}
	/**
	 * 添加打印机控件的HTML代码引入方法
	 * 
	 * @argument lodopName：打印控件名称前缀，无参数为“LODOP”
	 */
	this.addLodopObject = function(lodopName) {
//		document.write(this.getLodopObjectHtml(lodopName));
		var lodopDiv = document.createElement("div");
		lodopDiv.id = lodopName+"_DIV";
		lodopDiv.innerHTML = this.getLodopObjectHtml(lodopName);
		document.body.appendChild(lodopDiv); //增加成为body的最后一个子元素
		//alert(document.documentElement.innerHTML); //查看添加对象以后的源码
	}

	/**
	 * 返回打印机控件的HTML代码引入方法
	 * 
	 * @argument lodopName：打印控件名称前缀，无参数为“LODOP”
	 */
	this.getLodopObjectHtml = function(lodopName) {
		if (lodopName == 'undefined' || lodopName == null) {
			lodopName = 'LODOP';
		}
		this.checkContextPath();
		var html = '';
		html += '<object id="' + lodopName + '_OB" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=0 height=0> ';
		html += '	<embed id="' + lodopName + '_EM" type="application/x-print-lodop" width=0 height=0></embed>';
		html += '</object>';
		return html;
	}

	this.exec = function(codes) {
		LODOP = this.LODOP;
		eval(codes);
	}
	/**
	 * 初始化打印控件对象
	 * 
	 * @argument lodopName：打印控件名称前缀，无参数为“LODOP”
	 */
	this.initLODOP = function(lodopName) {
		
		if (lodopName == 'undefined' || lodopName == null) {
			lodopName = 'LODOP';
		}
		if (document.getElementById(lodopName + '_OB') == null) {
			this.addLodopObject(lodopName);
		}
		try {
			var LODOP = this.getLodop(document.getElementById(lodopName + '_OB'), document.getElementById(lodopName + '_EM'));
			this.LODOP = LODOP;
			
		} catch (err) {
			alert('Error:本机未安装或需要升级!' + err);
		}
	}

	/**
	 * 删除打印控件对象
	 * 
	 * @argument lodopName：打印控件名称前缀，无参数为“LODOP”
	 */
	this.dropLODOP = function(lodopName) {
		if (lodopName == 'undefined' || lodopName == null) {
			lodopName = 'LODOP';
		}
		var oP = document.getElementById(lodopName + '_OB');
		if (oP != null) {
			oP.parentNode.removeChild(oP);
		}
	}
	/**
	 * 检查contextPath
	 */
	this.checkContextPath = function() {
		// contextPath 由/frame/ui/page/index.jsp或者其他调用的jsp提供，不存在就报错
		var hasContextPath = (typeof(contextPath) != 'undefined');
		if (!hasContextPath) {
			alert('contextPath变量"应用程序上下文路径"不存在，此错误由/interfaces/print/commons.js需求产生');
		}
		return hasContextPath;
	}

	/**
	 * 初始化打印控件对象
	 */
	this.getLodop = function(oOBJECT, oEMBED) {
		var lodopPath = '/interfaces/print/';
		if (this.checkContextPath()) {
			lodopPath = contextPath + lodopPath;
		}
		else {
			return null;
		}
		
		/**************************
		  本函数根据浏览器类型决定采用哪个对象作为控件实例：
		  IE系列、IE内核系列的浏览器采用oOBJECT，
		  其它浏览器(Firefox系列、Chrome系列、Opera系列、Safari系列等)采用oEMBED,
		  对于64位浏览器指向64位的安装程序install_lodop64.exe。
		**************************/
        var strHtmInstall = '<br><font color="#FF00FF">打印控件未安装!点击这里<a href="' + lodopPath + 'install_lodop32.exe" target="_self">执行安装</a>,安装后请刷新页面或重新进入。</font>';
		var strHtmUpdate = '<br><font color="#FF00FF">打印控件需要升级!点击这里<a href="' + lodopPath + 'install_lodop32.exe" target="_self">执行升级</a>,升级后请重新进入。</font>';
		var strHtm64_Install = '<br><font color="#FF00FF">打印控件未安装!点击这里<a href="' + lodopPath + 'install_lodop64.exe" target="_self">执行安装</a>,安装后请刷新页面或重新进入。</font>';
		var strHtm64_Update = '<br><font color="#FF00FF">打印控件需要升级!点击这里<a href="' + lodopPath + 'install_lodop64.exe" target="_self">执行升级</a>,升级后请重新进入。</font>';
		var strHtmFireFox = '<br><br><font color="#FF00FF">注意：<br>1：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它。</font>';
        var LODOP=oEMBED;	
     	
		try{	
		     var isIE	 =  (navigator.userAgent.indexOf('MSIE')>=0) || (navigator.userAgent.indexOf('Trident')>=0);
		     var is64IE  = isIE && (navigator.userAgent.indexOf('x64')>=0);
		     if (isIE) LODOP=oOBJECT;
		     if ((LODOP==null)||(typeof(LODOP.VERSION)=="undefined")) {
			 if (navigator.userAgent.indexOf('Firefox')>=0)
	  	         	     {document.documentElement.innerHTML=strHtmFireFox+document.documentElement.innerHTML;};
			 if (is64IE) {document.write(strHtm64_Install);} else		 
		 	 if (isIE)   {document.write(strHtmInstall);   } else 
	  	                     {document.documentElement.innerHTML=strHtmInstall+document.documentElement.innerHTML;};	 
			 return LODOP; 
		     } else 
		     if (LODOP.VERSION<"6.1.6.4") {
			 if (is64IE){document.write(strHtm64_Update);} else
			 if (isIE)  {document.write(strHtmUpdate);    } else
			           {document.documentElement.innerHTML=strHtmUpdate+document.documentElement.innerHTML; };
				return LODOP;
		     }
		     //=====如下空白位置适合调用统一功能:=====	     
			 LODOP.SET_LICENSES("中联重科环境产业公司","2C207A57FAE17DED5DB34FF07E83CA13","","");
		     //=======================================
		     return LODOP; 
		}catch(err){
			if (is64IE)	
			document.documentElement.innerHTML="Error:"+strHtm64_Install+document.documentElement.innerHTML;else
			document.documentElement.innerHTML="Error:"+strHtmInstall+document.documentElement.innerHTML;
		    return LODOP; 
		}
	}
}
