# MITM_乐健modules
## 项目进入维护阶段，有问题提交issue
<div align="center">
  
### _适用于 Shadowrocket， 圈X， Loon 的模块规则集_

</div>


- 小火箭安装[配置文件](https://whatshub.top/config/shadowrocket_basic.conf)
- 在该配置下开启HTTPS解密
- 安装CA证书 -> 下载CA证书 -> 允许 -> 设置 -> 最上面输密码安装
- 在`设置-通用-关于本机-证书信任设置`信任新安装的证书
- 回到小火箭打开`模块`
- 导入[你需要的模块（例：乐健签到）](https://blingcc.eu.org/legym/legym.module)
- 开启Shadowrocket代理，去软件里验证是否可用
- 安卓需要上级路由进行类似上文的mitm代理，原理一样，可以是root，可以是软路由，可以是[Windows](https://github.com/Grergo/clash-with-mitm?tab=readme-ov-file#mitm-configuration) .都是CA+rewrite

##  你可能用得到的链接：

- https://blingcc.eu.org/legym/legym.module
- https://blingcc.eu.org/legym/prefix_legym.module
- https://blingcc.eu.org/legym/activityLegym.module

## 圈X看这里

> 只需复制以下代码配置进去


```properties
[rewrite_locala]
^https?:\/\/cpes\.legym\.cn\/education\/activity\/simple\/attainability\/get url script-response-body https://raw.githubusercontent.com/BlingCc233/MITM_modules/main/legym.js

[mitm] 

hostname = cpes.legym.cn
```


```properties
[rewrite_locala]
^https?:\/\/cpes\.legym\.cn\/running\/app\/getRunningLimit url script-response-body https://raw.githubusercontent.com/BlingCc233/MITM_modules/main/prefix_legym.js

[mitm] 

hostname = cpes.legym.cn

```

