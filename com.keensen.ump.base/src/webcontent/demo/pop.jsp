<%@page pageEncoding="UTF-8"%>
<%@include file="/frame/ui/page/include.jsp"%>
<html>
<!-- 
  - Author(s): dafu
  - Date: 2025-02-13 11:26:50
  - Description:
-->
<head>
<title>右下角弹窗</title>
<style>
        .notification {
            position: fixed;
            bottom: -100px;
            right: 20px;
            width: 300px;
            padding: 20px;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transition: bottom 0.5s ease-in-out;
            z-index: 1000;
        }

        .notification.show {
            bottom: 20px;
        }

        .notification-close {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            background: #ff4444;
            color: white;
            border: none;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            font-weight: bold;
        }

        .notification-close:hover {
            background: #cc0000;
        }

        .notification-content {
            margin-right: 30px;
        }
    </style>
</head>
<body>
<script>
        function showNotification(message) {
            // 创建通知元素
            const notification = document.createElement('div');
            notification.className = 'notification';
            
            // 添加内容
            notification.innerHTML = '<div class="notification-content">' + message + '</div><button class="notification-close">&times;</button>';

            // 添加到页面
            document.body.appendChild(notification);

            // 添加关闭事件
            notification.querySelector('.notification-close').addEventListener('click', () => {
                hideNotification(notification);
            });

            // 显示通知
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);

            // 5秒后自动关闭
            setTimeout(() => {
                hideNotification(notification);
            }, 5000);
        }

        function hideNotification(notification) {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 500);
        }

        // 示例：页面加载后显示通知
        window.onload = () => {
            showNotification('🆕 您有新的消息！<br>请注意查收最新通知');
        };
    </script>
</body>
</html>