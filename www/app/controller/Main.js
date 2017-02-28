/**
* 我的博客
* http://www.cnblogs.com/mlzs/
* 在线ST实战培训调查问卷，欢迎提交反馈您的培训需求。
* http://www.diaochapai.com/survey855910
*/
/*
*视图切换控制
*/
Ext.define('app.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        models: ['Config'],
        views: ['FirstStart', 'Main'],
        refs: {
            main: 'main',
            home: 'home',
            guide: 'guide',
            myBar: 'myBar',
            firstStart: 'firstStart',
            weather: 'main #weather',
            navBtn: 'button[action=navBtn]',
            otherBtn: 'button[action=other]',
            redirectBtn: 'button[action=redirect]',
            redirectByParamsBtn: 'button[action=redirectByParams]'
        },
        control: {
            weather: {
                activate: function (t) {
                    if (config.weatherinfo) {
                        t.setData(config.weatherinfo);
                    } else {
                        Ext.Ajax.request({
                            url: config.weather,
                            hidMessage: true,
                            success: function (response, request) {
                                config.weatherinfo = Ext.decode(response.responseText).weatherinfo;
                                if (t) {
                                    t.setData(config.weatherinfo);
                                }
                            }
                        });
                    }
                }
            },
            firstStart: {
                showMain: 'onGuide'
            },
            guide: {
                showMain: 'onGuide'
            },
            //动态传参
            redirectByParamsBtn: {
                tap: function (t, value) {
                    config.tmpParams = t.config.params;
                    this.redirectTo('redirec/' + t.config.redirect);
                }
            },
            //跳转按钮
            redirectBtn: {
                tap: function (t, value) {
                    this.redirectTo('redirec/' + t.config.redirect);
                }
            },
            //导航栏按钮
            navBtn: {
                tap: function () {
                    util.showMessage('我是导航栏按钮，在当前激活的子项中配置-_-', true);
                }
            },
            //其他按钮
            otherBtn: {
                tap: function () {
                    util.showMessage('我是一个toast提示- -', true);
                }
            }
        },
        //路由，由redirectTo方法触发
        routes: {
            'main': 'showMian',
            'redirec/:view': 'redirec',
            'redirec/:view/:isPop': 'redirec',
            'firstStart': 'showFirstStart'
        }
    },
    launch: function () {
        var me = this;
//        console.log('加载PhoneGap');
//        document.addEventListener("deviceready", onDeviceReady, false);
//        function onDeviceReady() {
//            console.log('PhoneGap加载完毕');
//            document.addEventListener("backbutton", backTap, false);
//            function backTap() {
//                console.log('回退按钮注册成功');
//                me.onbackTap();
//            }
//        }
        //检测是否第一次启动程序
        Ext.ModelMgr.getModel('app.model.Config').load(1, {
            scope: this,
            success: function (config) {
                this.redirectTo('main');
            },
            failure: function (error) {
                this.redirectTo('firstStart');
            }
        });
    },
    //显示欢迎页面
    showFirstStart: function () {
//        console.log('首次启动,进入欢迎页面');
        util.ePush('firstStart');
        //存储配置信息
        var config = Ext.create('app.model.Config', {
            id: 1
        });
        config.save();
    },
    //显示首页
    showMian: function () {
        console.log('进入首页');
        util.ePush('main');
    },
    //跳转到首页路由
    onGuide: function () {
        this.redirectTo('main');
    },
    //动态传参
    //显示视图xtype:这里是指alternateClassName
    redirec: function (xtype, isPop) {
        //        console.log('进入:',xtype,'页面，是否pop模式：',isPop==1);
        var params = config.tmpParams;
        //登录检测
        if (config.ckLogin[xtype] && !config.user) {
            params = params || {};
            params.redirect = xtype;
            xtype = 'userLogin';
        }
//        console.log('动态参数：', params);
        this.pushView({ xtype: xtype, params: params, isPop: isPop });
//        console.log('当前视图参数：',this.getMain().getActiveItem().config);
    },
    pushView: function (params) {
        var main = this.getMain();
        if (!main) return;
        this.isExit = false;
        if (params.isPop) {
            var xtype = false; ;
            if (params.xtype != 0) {
                xtype = params.xtype;
            }
            main.popAndPush(xtype, params.params);
        } else {
            main.push(params.xtype, params.params);
        }
        delete config.tmpParams;
    },
    //监听安卓返回键
    onbackTap: function () {
        var cardPanel = this.getMain();
        console.log('点击返回按钮');
        if (cardPanel) {
            var back = cardPanel.viewStack;
            if (back.length > 1) {
                cardPanel.onBackButtonTap();
            } else {
                this.appExit();
            }
        } else {
            this.appExit();
        }
    },
    appExit: function () {
        if (this.isExit) {
            navigator.app.exitApp();
        } else {
            this.isExit = true;
            util.showMessage('再按一次退出程序', true);
        }
    }
});