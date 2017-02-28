/*
*列表控制
*/
Ext.define('app.controller.List', {
    extend: 'Ext.app.Controller',
    config: {
        models: ['Blog', 'Quiz', 'Used'],
        stores: ['BlogList', 'QuizList', 'UsedList'],
        views: ['list.Home', 'list.Used'],
        refs: {
            listHome: 'listHome',
            listUsed: 'listUsed'
        },
        control: {
            listHome: {
                itemtap: function (list, index, target, record, e) {
                    this.redirectTo('redirec/' + record.get('redirect'));
                    util.storeLoad(record.get('store'));
                }
            },
            listUsed: {
                itemtap: function (list, index, target, record, e) {
                    record.data.name = '修改',
                    record.save({ success: function (a, b) {
                        console.log('成功');
                    }, failure: function (a, b) {
                        console.log('失败');
                    }
                    }, this);
                }
            }
        }
    }
});