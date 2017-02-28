Ext.define('app.view.panel.List', {
    alternateClassName: 'panelList',
    extend: 'Ext.List',
    xtype: 'panelList',
    requires: ['app.view.panel.Info', 'app.view.panel.CInfo', 'app.view.panel.Href', 'app.view.panel.WeiBo', 'app.view.panel.TelBar'],
    config: {
        title: '面板列表',
        itemTpl: '{title}',
        navigationBar: {
            tmpItems: [{
                text: '点我',
                action: 'navBtn',
                align: 'left',
                ui: 'decline '
            }]
        },
        scrollable: {
            disabled: true
        },
        data: [{
            title: '下拉刷新',
            redirect: 'panelInfo',
            view:null
        }, {
            title: 'Container模版',
            redirect: 'panelCInfo'
        }, {
            title: '内容包含超链接',
            redirect: 'panelHref'
        }, {
            title: '内容包含超链接图片',
            redirect: 'panelHref',
            view: 'panelHref'
        }, {
            title: '登录分享微博打电话',
            redirect: 'panelWeiBo'
        }]
    }
});