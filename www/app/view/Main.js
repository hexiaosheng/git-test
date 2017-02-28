/**
* 我的博客
* http://www.cnblogs.com/mlzs/
* 在线ST实战培训调查问卷，欢迎提交反馈您的培训需求。
* http://www.diaochapai.com/survey855910
*/
/*
*主视图,负责视图切换
*/
Ext.define('app.view.Main', {
    alternateClassName: 'main',
    extend: 'ux.NavigationView',
    requires: ['app.view.Home', 'app.view.MyBar'],
    xtype: 'main',
    config: {
        cls: 'cardPanel',
        navigationBar: {
            backButton: {
                iconCls: 'arrow_left',
                ui: '',
                cls: 'back'
            }
        },
        //items中的项只能配置一个
        items: [{ xtype: 'home'}]
    }
});
