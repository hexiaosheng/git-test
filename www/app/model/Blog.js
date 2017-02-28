//博客
Ext.define('app.model.Blog', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //标题
            name: 'title',
            type: 'string'
        }]
    }
});