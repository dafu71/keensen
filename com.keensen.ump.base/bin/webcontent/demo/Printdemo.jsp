<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<%
	String rootUrl = request.getRequestURL().toString();
    rootUrl = rootUrl.replace("base/demo/Printdemo.jsp","");

 %>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2025-02-13 11:26:50
  - Description:
-->
<head>
<title>唛头打印</title>
 <style>
        .image-container {
            position: relative;
            display: inline-block;
            border: 1px solid #ccc;
        }

        .text-overlay {
            position: absolute;
            cursor: move;
            user-select: none;
            white-space: nowrap;
            text-shadow: 1px 1px 2px white; /* 增强文字可读性 */
        }

        #preview-image {
            display: block;
            max-width: 100%;
        }

        .controls {
            margin: 20px 0;
            padding: 10px;
            border: 1px solid #ddd;
        }

        .form-group {
            margin: 10px 0;
        }
    </style>
</head>
<body>
<div class="image-container" id="image-container">
        <img src="<%=rootUrl %>/base/demo/standard_nsf.jpg" id="preview-image">
    </div>

    <div class="controls">
        <div class="form-group">
            <label>文本内容：</label>
            <input type="text" id="text-content" placeholder="请输入文字">
        </div>
        
        <div class="form-group">
            <label>坐标 X：</label>
            <input type="number" id="pos-x">
            
            <label>坐标 Y：</label>
            <input type="number" id="pos-y">
            
            <button onclick="getCoordinates()">点击图片获取坐标</button>
        </div>

        <div class="form-group">
            <label>字体大小：</label>
            <input type="number" id="font-size" value="16" min="10" max="72">
            
            <label>文字颜色：</label>
            <input type="color" id="text-color" value="#000000">
        </div>

        <button onclick="addText()">添加文字</button>
        <button onclick="clearAll()">清除所有</button>
    </div>

    <script>
        // 添加文字功能
        function addText() {
            const container = document.getElementById('image-container');
            const text = document.getElementById('text-content').value;
            const x = parseInt(document.getElementById('pos-x').value);
            const y = parseInt(document.getElementById('pos-y').value);
            const fontSize = document.getElementById('font-size').value + 'px';
            const color = document.getElementById('text-color').value;

            // 创建文字元素
            const textElement = document.createElement('div');
            textElement.className = 'text-overlay';
            textElement.textContent = text;
            
            // 设置样式
            textElement.style.left = x + 'px';
            textElement.style.top = y + 'px';
            textElement.style.fontSize = fontSize;
            textElement.style.color = color;

            // 启用拖动功能
            enableDrag(textElement);

            container.appendChild(textElement);
        }

        // 图片点击获取坐标
        document.getElementById('preview-image').addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            document.getElementById('pos-x').value = Math.round(x);
            document.getElementById('pos-y').value = Math.round(y);
        });

        // 拖动功能实现
        function enableDrag(element) {
            let isDragging = false;
            let startX, startY, initialX, initialY;

            element.addEventListener('mousedown', function(e) {
                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                initialX = parseFloat(element.style.left) || 0;
                initialY = parseFloat(element.style.top) || 0;
                
                const x = element.style.left
            	const y = element.style.top
                document.getElementById('pos-x').value = Math.round(x);
            	document.getElementById('pos-y').value = Math.round(y);
            });

            document.addEventListener('mousemove', function(e) {
                if (!isDragging) return;
                
                const deltaX = e.clientX - startX;
                const deltaY = e.clientY - startY;
                
                element.style.left = (initialX + deltaX) + 'px';
                element.style.top = (initialY + deltaY) + 'px';
                
                const x = initialX + deltaX
            	const y = initialY + deltaY
                document.getElementById('pos-x').value = Math.round(x);
            	document.getElementById('pos-y').value = Math.round(y);
            });

            document.addEventListener('mouseup', () => isDragging = false);
        }

        // 辅助功能
        function clearAll() {
            const container = document.getElementById('image-container');
            const overlays = document.querySelectorAll('.text-overlay');
            overlays.forEach(overlay => overlay.remove());
        }

        function getCoordinates() {
            alert('请点击图片选择位置');
        }
    </script>
</body>
</html>