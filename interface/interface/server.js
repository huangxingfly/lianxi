// 想学 node 可以下载 44期js的实战项目 （风屿老师）
// 不能用6000端口
const Koa = require('koa')
const Router = require('koa-router')
const cors = require('kcors')
const app = new Koa()

const router = new Router()


app.use(cors())
app.use(require('koa-static')(__dirname+'/static/images'))

const homeCateData = require('./home/category')
router.get('/api/category',function (ctx) {
    ctx.body = homeCateData
})


app.use(router.routes()).use(router.allowedMethods())

app.listen(6006,function () {
    console.log('node启动成功')
})


/*
端口可分为3大类：
1） 公认端口（Well Known Ports）：从0到1023，它们紧密绑定于一些服务。通常这些端口的通讯明确表明了某种服 务的协议。例如：80端口实际上总是HTTP通讯。

2） 注册端口（Registered Ports）：从1024到49151。它们松散地绑定于一些服务。也就是说有许多服务绑定于这些端口，这些端口同样用于许多其它目的。例如：许多系统处理动态端口从1024左右开始。

3） 动态和/或私有端口（Dynamic and/or Private Ports）：从49152到65535。理论上，不应为服务分配这些端口。实际上，机器通常从1024起分配动态端口。但也有例外：SUN的RPC端口从32768开始。

Chrome，Firfox以下端口的web站点无法访问，所以在配置自己站点时需避开以下端口：
// tcpmux 7, // echo 9, // discard 11, // systat 13, // daytime 15, // netstat 17, // qotd 19, // chargen 20, // ftp data 21, // ftp access 22, // ssh 23, // telnet 25, // smtp 37, // time 42, // name 43, // nicname 53, // domain 77, // priv-rjs 79, // finger 87, // ttylink 95, // supdup 101, // hostriame 102, // iso-tsap 103, // gppitnp 104, // acr-nema 109, // pop2 110, // pop3 111, // sunrpc 113, // auth 115, // sftp 117, // uucp-path 119, // nntp 123, // NTP 135, // loc-srv /epmap 139, // netbios 143, // imap2 179, // BGP 389, // ldap 465, // smtp+ssl 512, // print / exec 513, // login 514, // shell 515, // printer 526, // tempo 530, // courier 531, // chat 532, // netnews 540, // uucp 556, // remotefs 563, // nntp+ssl 587, // stmp? 601, // ?? 636, // ldap+ssl 993, // ldap+ssl 995, // pop3+ssl 2049, // nfs 4045, // lockd 6000, // X11


*/
