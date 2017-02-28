/**
* 我的博客
* http://www.cnblogs.com/mlzs/
* 在线ST实战培训调查问卷，欢迎提交反馈您的培训需求。
* http://www.diaochapai.com/survey855910
*/
/*
*所有配置信息
*/
Ext.define('app.config', {
    alternateClassName: 'config', //设置别名是为了方便调用，这样直接config.weather就能获取到变量。
    statics: {
        //天气预报接口
        weather: 'http://www.weather.com.cn/data/cityinfo/101210904.html',
        //博客园
        cnblogs: 'http://www.cnblogs.com/mlzs/rss',
        used: {
            read: 'http://localhost:30627/service/Json/Used.asmx/List' ,
            update: 'http://localhost:30627/service/Json/Used.asmx/Update',
            destroy: 'http://localhost:30627/service/Json/Used.asmx/Delete'
        },
        userLogin: 'resources/json/test.json',
        dataUrl: 'http://58.216.184.190:8081/joffice221/htmobile/listMyOutMail.do?mailType=1',
        //需要登录验证的页面
        ckLogin: {
            userInfo: true
        },
        //用户信息
        user: false,
        //登录成功跳转页面
        redirec: false
    }
});