# MITM_legym_modules
> 项目进入维护阶段，有问题提交issue
<div align="center">
  
### _适用于 Shadowrocket， 圈X， Loon 的模块规则集_
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)


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

```properties 
https://blingcc.eu.org/legym/legym.module
```
```properties
https://blingcc.eu.org/legym/prefix_legym.module
```
```properties
https://raw.githubusercontent.com/BlingCc233/MITM_modules/main/classsign.module
```

## Loon看这里
> 复制粘贴

```properties
#!name=Legym

#!homepage=https://github.com/BlingCc233/MITM_modules/tree/archive

#!author=BlingCc


[Script]

Classsign=type=http-response,pattern=https://cpes.legym.cn/education/attainability/info,requires-body=1,script-path=https://raw.githubusercontent.com/BlingCc233/MITM_modules/main/classsign.js
Legym=type=http-response,pattern=https://cpes.legym.cn/education/activity/simple/attainability/get,requires-body=1,script-path=https://raw.githubusercontent.com/BlingCc233/MITM_modules/main/legym.js
prefixLegym=type=http-response,pattern=https://cpes.legym.cn/running/app/getRunningLimit,requires-body=1,script-path=https://raw.githubusercontent.com/BlingCc233/MITM_modules/main/prefix_legym.js


[MITM] 

hostname = %APPEND% cpes.legym.cn
```

## 圈X看这里

> 只需复制以下代码配置（不包括`[rewrite_local]`和`[mitm]`）放到对应字段



```properties
[rewrite_local]
^https?:\/\/cpes\.legym\.cn\/running\/app\/getRunningLimit url script-response-body https://raw.githubusercontent.com/BlingCc233/MITM_modules/main/prefix_legym.js
^https?:\/\/cpes\.legym\.cn\/education\/activity\/simple\/attainability\/get url script-response-body https://raw.githubusercontent.com/BlingCc233/MITM_modules/main/legym.js
^https?:\/\/cpes\.legym\.cn\/education\/attainability\/info url script-response-body https://raw.githubusercontent.com/BlingCc233/MITM_modules/main/classsign.js

[mitm] 

hostname = cpes.legym.cn

```

