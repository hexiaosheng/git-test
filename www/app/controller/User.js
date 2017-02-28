/*
*用户管理
*/
Ext.define('app.controller.User', {
    extend: 'Ext.app.Controller',
    config: {
        views: ['user.Login'],
        models: ['User'],
        refs: {
            main: 'main',
            userInfo: 'userInfo',
            userLogin: 'userLogin',
            login: 'userLogin [action=login]',
            logOut: 'userInfo [action=logout]'
        },
        control: {
            //开始登录
            login: {
                tap: function () {
                    var login = this.getUserLogin();
                    if (util.valid('app.model.User', login)) {
                        this.logCheck(login.getValues());
                    }
                }
            },
            logOut: {
                //退出登录
                tap: function () {
                    Ext.Msg.confirm('提示', '你真的要退出登陆吗?',
                    function (confirmed) {
                        confirmed == 'yes' && this.logOut();
                    },
                    this);
                }
            },
            //用户详细页
            userInfo: {
                activate: function (t) {
                    t.setData(config.user);
                },
                loginOut: function (t) {
                    if (t.isExit) {
                        this.logOut();
                    } else {
                        t.isExit = true;
                        util.showMessage('再按一次退出登录...', true);
                    }
                }
            }
        }
    },
    launch: function () {
        //检测是否自动登录
        Ext.ModelMgr.getModel('app.model.User').load(1, {
            scope: this,
            success: function (cachedLoggedInUser) {
                this.logCheck(cachedLoggedInUser.data);
            }
        });
    },
    //登录成功
    logUserIn: function (user) {
        config.user = user;
        var login = this.getUserLogin();
        if (login) {
            var redirect = login.config.redirect || 0;
            this.redirectTo('redirec/' + redirect + '/1');
        }
    },
    //开始登录
    logCheck: function (user) {
        Ext.Ajax.request({
            url: config.userLogin,
            params: user,
            scope: this,
            success: function (result) {
                result = Ext.decode(result.responseText);
                if (!result.success) {
                    util.showMessage('用户名或者密码不正确!', true);
                } else {
                    this.logUserIn(user);
                    user.keepUser && this.keepUser(user);
                }
            }
        });
    },
    //保存用户信息
    keepUser: function (user) {
        //不这样写无法储存数据
        var logUser = Ext.create('app.model.User', {
            id: 1
        });
        logUser.set(user);
        logUser.save();
    },
    //退出登录
    logOut: function (user) {
        Ext.ModelMgr.getModel('app.model.User').load(1, {
            success: function (user) {
                user.erase();
            }
        });
        config.user = false;
        this.redirectTo('redirec/userInfo/1');
    }
});