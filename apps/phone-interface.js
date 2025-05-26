// 手机界面
(function(window) {
    'use strict';
    
    const PhoneInterface = {
        // 初始化手机界面
        init: function() {
            this.createInterface();
            this.bindEvents();
            console.log('手机界面已初始化');
        },
        
        // 创建界面
        createInterface: function() {
            // 创建手机按钮
            const $phoneButton = $(`
                <div id="chat_history_btn" style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; cursor: pointer; margin-left: 10px; border: 2px solid rgba(255,255,255,0.2);">
                    <span style="color: white; font-size: 20px;">📱</span>
                </div>
            `);
            
            // 创建手机界面
            const $phoneInterface = $(`
                <div id="phone_interface" style="display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90%; max-width: 600px; height: 85vh; border-radius: 25px; border: 8px solid #2c3e50; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4); overflow: hidden; z-index: 1000; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);">
                    
                    <!-- 状态栏 -->
                    <div class="phone-status-bar" style="height: 35px; background: linear-gradient(90deg, #34495e, #2c3e50); color: white; display: flex; justify-content: space-between; padding: 0 15px; align-items: center; font-size: 11px; font-weight: 500;">
                        <div class="status-time">21:09</div>
                        <div class="status-icons">📶 🔋 100%</div>
                    </div>
                    
                    <!-- 主屏幕 -->
                    <div class="phone-home-screen" style="flex: 1; padding: 30px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: calc(85vh - 108px);">
                        
                        <!-- 时间显示 -->
                        <div class="home-time" style="text-align: center; margin-bottom: 30px; color: white;">
                            <div style="font-size: 42px; font-weight: 300; margin-bottom: 5px;">21:09</div>
                            <div style="font-size: 20px; opacity: 0.8;">星期三，12月18日</div>
                        </div>
                        
                        <!-- 应用网格 -->
                        <div class="app-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin-bottom: 20px;">
                            
                            <!-- QQ应用 -->
                            <div class="app-icon" data-app="qq" style="display: flex; flex-direction: column; align-items: center; cursor: pointer; padding: 15px; background: rgba(255,255,255,0.15); border-radius: 20px; border: 1px solid rgba(255,255,255,0.2);">
                                <div class="app-icon-img" style="width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; margin-bottom: 8px; background: linear-gradient(135deg, #12B7F5, #0d8fd9); border: 2px solid rgba(255,255,255,0.3);">💬</div>
                                <div class="app-name" style="font-size: 12px; color: white; font-weight: 500; text-align: center;">消息</div>
                            </div>
                            
                            <!-- 淘宝应用 -->
                            <div class="app-icon" data-app="taobao" style="display: flex; flex-direction: column; align-items: center; cursor: pointer; padding: 15px; background: rgba(255,255,255,0.15); border-radius: 20px; border: 1px solid rgba(255,255,255,0.2);">
                                <div class="app-icon-img" style="width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; margin-bottom: 8px; background: linear-gradient(135deg, #FF6B6B, #FF4757); border: 2px solid rgba(255,255,255,0.3);">🛒</div>
                                <div class="app-name" style="font-size: 12px; color: white; font-weight: 500; text-align: center;">淘宝</div>
                            </div>
                            
                            <!-- 任务应用 -->
                            <div class="app-icon" data-app="renwu" style="display: flex; flex-direction: column; align-items: center; cursor: pointer; padding: 15px; background: rgba(255,255,255,0.15); border-radius: 20px; border: 1px solid rgba(255,255,255,0.2);">
                                <div class="app-icon-img" style="width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; margin-bottom: 8px; background: linear-gradient(135deg, #4CAF50, #388E3C); border: 2px solid rgba(255,255,255,0.3);">📋</div>
                                <div class="app-name" style="font-size: 12px; color: white; font-weight: 500; text-align: center;">任务</div>
                            </div>
                            
                            <!-- 背包应用 -->
                            <div class="app-icon" data-app="backpack" style="display: flex; flex-direction: column; align-items: center; cursor: pointer; padding: 15px; background: rgba(255,255,255,0.15); border-radius: 20px; border: 1px solid rgba(255,255,255,0.2);">
                                <div class="app-icon-img" style="width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; margin-bottom: 8px; background: linear-gradient(135deg, #9C27B0, #7B1FA2); border: 2px solid rgba(255,255,255,0.3);">🎒</div>
                                <div class="app-name" style="font-size: 12px; color: white; font-weight: 500; text-align: center;">背包</div>
                            </div>
                            
                            <!-- 抽卡应用 -->
                            <div class="app-icon" data-app="chouka" style="display: none; flex-direction: column; align-items: center; cursor: pointer; padding: 15px; background: rgba(255,255,255,0.15); border-radius: 20px; border: 1px solid rgba(255,255,255,0.2);">
                                <div class="app-icon-img" style="width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; margin-bottom: 8px; background: linear-gradient(135deg, #FF9800, #F57C00); border: 2px solid rgba(255,255,255,0.3);">🎴</div>
                                <div class="app-name" style="font-size: 12px; color: white; font-weight: 500; text-align: center;">抽卡</div>
                            </div>
                            
                            <!-- 设置应用 -->
                            <div class="app-icon" data-app="settings" style="display: none; flex-direction: column; align-items: center; cursor: pointer; padding: 15px; background: rgba(255,255,255,0.15); border-radius: 20px; border: 1px solid rgba(255,255,255,0.2);">
                                <div class="app-icon-img" style="width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; margin-bottom: 8px; background: linear-gradient(135deg, #607D8B, #455A64); border: 2px solid rgba(255,255,255,0.3);">⚙️</div>
                                <div class="app-name" style="font-size: 12px; color: white; font-weight: 500; text-align: center;">设置</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 底部导航栏 -->
                    <div class="phone-dock" style="height: 60px; background: linear-gradient(90deg, #34495e, #2c3e50); display: flex; justify-content: center; align-items: center; border-top: 1px solid rgba(255,255,255,0.1);">
                        <div class="dock-icon back-icon" style="width: 45px; height: 45px; border-radius: 12px; background: linear-gradient(135deg, #e74c3c, #c0392b); display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 14px; color: white; font-weight: 600; border: 2px solid rgba(255,255,255,0.2);">关闭</div>
                    </div>
                </div>
            `);
            
            // 将手机按钮添加到send_form中的rightSendForm前面
            const $sendForm = $('#send_form');
            const $rightSendForm = $sendForm.find('#rightSendForm');
            
            if ($sendForm.length > 0 && $rightSendForm.length > 0) {
                $rightSendForm.before($phoneButton);
                console.log('手机按钮已添加到发送表单中');
            } else {
                // 如果找不到目标位置，则添加到body
                $('body').append($phoneButton);
                console.log('未找到发送表单，手机按钮已添加到body');
            }
            
            $('body').append($phoneInterface);
        },
        
        // 绑定事件（移除所有hover和动效）
        bindEvents: function() {
            // 手机按钮点击事件
            $('#chat_history_btn').on('click', function() {
                $('#phone_interface').toggle();
            });
            
            // 应用图标点击事件
            $('.app-icon[data-app="qq"]').on('click', function() {
                if (window.QQApp) {
                    window.QQApp.show();
                    $('#phone_interface').hide();
                }
            });
            
            $('.app-icon[data-app="taobao"]').on('click', function() {
                console.log('淘宝应用被点击');
                console.log('TaobaoApp 是否存在:', !!window.TaobaoApp);
                if (window.TaobaoApp) {
                    console.log('调用 TaobaoApp.show()');
                    window.TaobaoApp.show();
                    $('#phone_interface').hide();
                } else {
                    console.error('TaobaoApp 未加载');
                    alert('淘宝应用未正确加载，请检查控制台错误信息');
                }
            });
            
            $('.app-icon[data-app="renwu"]').on('click', function() {
                if (window.TaskApp) {
                    window.TaskApp.show();
                    $('#phone_interface').hide();
                }
            });
            
            $('.app-icon[data-app="backpack"]').on('click', function() {
                if (window.BackpackApp) {
                    window.BackpackApp.show();
                    $('#phone_interface').hide();
                }
            });
            
            $('.app-icon[data-app="chouka"]').on('click', function() {
                if (window.ChoukaApp) {
                    window.ChoukaApp.show();
                    $('#phone_interface').hide();
                }
            });
            
            $('.app-icon[data-app="settings"]').on('click', function() {
                alert('设置功能开发中...');
            });
            
            // 关闭按钮事件
            $('.back-icon').on('click', function() {
                $('#phone_interface').hide();
            });
        },
        
        // 显示手机界面
        show: function() {
            $('#phone_interface').show();
        },
        
        // 隐藏手机界面
        hide: function() {
            $('#phone_interface').hide();
        }
    };
    
    // 导出到全局
    window.PhoneInterface = PhoneInterface;
    
})(window); 