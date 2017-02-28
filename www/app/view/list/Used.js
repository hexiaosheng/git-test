Ext.define('app.view.list.Used', {
    alternateClassName: 'listUsed',
    extend: 'Ext.List',
    xtype: 'listUsed',
     requires: [ 'ux.plugin.RefreshFn', 'Ext.plugin.ListPaging'],
    config: {
        cls: 'list',
        plugins: ['refreshFn', 'listpaging'],
        title: '二手物品',
        itemTpl: '{name}',
        store: 'usedList'
    }
});