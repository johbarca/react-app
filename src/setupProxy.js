/*
 * @Author: liulicheng
 * @Github: https://github.com/johbarca
 * @Date: 2019-10-23 16:36:34
 * @LastEditors: liulicheng
 * @LastEditTime: 2019-10-23 16:55:01
 */
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'http://localhost:3000',
            changeOrigin: true
        })
    )
}