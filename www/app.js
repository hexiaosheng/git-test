/**
* 我的博客
* http://www.cnblogs.com/mlzs/
* 在线ST实战培训调查问卷，欢迎提交反馈您的培训需求。
* http://www.diaochapai.com/survey855910
*/
//指定ux起调目录
Ext.Loader.setPath({
    'ux': 'app/ux'
});

Ext.application({
    name: 'app',
    controllers: ['Main', 'Panel', 'Layout', 'List', 'User'],
    requires: ['app.config', 'app.util'],
    launch: function () {
        Ext.fly('appLoadingIndicator').destroy();
        util.inIt();
    }
});
