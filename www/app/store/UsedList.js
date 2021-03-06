﻿Ext.define('app.store.UsedList', {
    extend: 'Ext.data.Store',
    config: {
        model: 'app.model.Used',
        storeId: 'usedList',
        autoLoad: false,
        pageSize: 7,
        proxy: {
            type: 'ajax',
            reader: {
                type: "json",
                rootProperty: 'result',
                totalProperty: 'totalCounts'
            },
            api: {
                create: '/controller/new',
                read: config.used.read
            }
        }
    }
});