Ext.define('app.view.MyBar', {
    alternateClassName: 'myBar',
    extend: 'ux.TabBar',
    xtype: 'myBar',
    requires: ['app.view.About', 'app.view.user.Info'],
    config: {
        items: [
        {
            xtype: 'button',
            itemId:'homeBtn',
            text: '首页',
            //只有第一个设置的属性有效
            selected: true,
            iconAlign: 'top',
            iconCls: 'home',
            action: 'redirect',
            redirect: 'home'
        },
        {
            xtype: 'button',
            text: '个人中心',
            iconAlign: 'top',
            iconCls: 'user',
            //没有选中效果
            noSelect: true,
            action: 'redirect',
            redirect: 'userInfo'
        },
        {
            xtype: 'button',
            text: '关于',
            iconAlign: 'top',
            iconCls: 'settings',
            action: 'redirect',
            redirect: 'about'
        },
        {
            xtype: 'button',
            text: '其他',
            //没有选中效果
            noSelect: true,
            iconAlign: 'top',
            iconCls: 'star',
            action: 'other'
        }]
    }
});