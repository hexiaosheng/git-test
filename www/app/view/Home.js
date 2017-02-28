/**
* 我的博客
* http://www.cnblogs.com/mlzs/
* 在线ST实战培训调查问卷，欢迎提交反馈您的培训需求。
* http://www.diaochapai.com/survey855910
*/
Ext.define('app.view.Home', {
    alternateClassName: 'home',
    extend: 'Ext.Container',
    xtype: 'home',
    config: {
        title: '首页',
        navigationBar: {
            tmpItems: [{
                xtype: 'container',
                cls: 'weather',
                align: 'right',
                itemId: 'weather',
                tpl: '<div><span class="pIco" style="background-image:url(\'resources/images/weather/{img1}\')"></span>{temp1}</div><div class="tc">{weather}</div>'
            }]
        },
        otherMenu: 'myBar',
        clear: 0,
        cls: 'home',
        layout: 'vbox',
        defaults: {
            height: '4.5em',
            layout: 'hbox',
            defaults: {
                flex: 1
            }
        },
        items: [{
            items: [{
                xtype: 'button',
                text: '九宫格',
                iconAlign: 'top',
                iconCls: 'squared orangeYellow',
                action: 'redirect',
                redirect: 'layoutSquared'
            },
            {
                xtype: 'button',
                text: '面板',
                iconAlign: 'top',
                iconCls: 'organize orange',
                action: 'redirect',
                redirect: 'panelList'
            },
            {
                xtype: 'button',
                text: '列表',
                iconAlign: 'top',
                iconCls: 'list roseRed',
                action: 'redirect',
                redirect: 'listHome'
            },
            {
                xtype: 'button',
                iconAlign: 'top',
                iconCls: 'refresh lightBlue',
                action: 'redirect',
                redirect: 'userInfo',
                text: '个人中心'
            }]
        },
        {
            items: [{
                //动态传参
                xtype: 'button',
                iconAlign: 'top',
                iconCls: 'search green',
                text: '动态传参1',
                action: 'redirectByParams',
                redirect: 'userInfo',
                params: {
                    title: '标题1',
                    params:'自定义参数1',
                    myParams: { value: '我是对象1', name: '对象' },
                    list:['我是数组1']
                }
            },
            {
                //动态传参
                xtype: 'button',
                iconAlign: 'top',
                iconCls: 'settings blue',
                text: '动态传参2',
                action: 'redirectByParams',
                redirect: 'userInfo',
                params: {
                    title: '标题2',
                    params: '自定义参数2',
                    myParams: { value: '我是对象2',name:'对象' },
                    list: ['我是数组2']
                }
            },
            {
                xtype: 'button',
                iconAlign: 'top',
                iconCls: 'star yellow',
                text: '按钮7'
            },
            {
                xtype: 'button',
                iconAlign: 'top',
                iconCls: 'trash paleYellow',
                text: '按钮8'
            }]
        },
        {
            width: '25%',
            items: [{
                xtype: 'button',
                iconAlign: 'top',
                iconCls: 'maps smBlue',
                text: '按钮9'
            }]
        }]
    }
});