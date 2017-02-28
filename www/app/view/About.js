Ext.define('app.view.About', {
    alternateClassName: 'about',
    extend: 'Ext.Container',
    xtype: 'about',
    config: {
        title: '关于',
        cls: 'info',
        otherMenu: 'myBar',
        clear: 0,
        html: '这是一个开源示例,是我对sencha touch的深层应用.<br/><br/>我的博客:<br/>http://www.cnblogs.com/mlzs/<br/><br/>在线ST实战培训调查问卷，欢迎提交反馈您的培训需求。<br/>http://www.diaochapai.com/survey855910'
    }
});