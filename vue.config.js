module.exports = {
    devServer : {
        open : true,//设置保存自动打开
        port : 8080,
        proxy : {
            "/api" : {
                target : "https://c.y.qq.com",
                changeOrigin : true,
                pathRewrite : {
                    "^/api" : ""
                }
            }
        }
    }
}