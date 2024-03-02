/*
解锁乐健签到位置限制
（适用于UESTC）
脚本版本： 1.0.1
脚本作者：BlingCc
更新时间：2024-03-02
主页：blingcc.eu.org
声明：此脚本仅供学习交流

**************************

QuantumultX:

[rewrite_locala]
^https?:\/\/cpes\.legym\.cn\/education\/activity\/simple\/attainability\/get https://raw.githubusercontent.com/BlingCc233/MITM_modules/main/legym.js

[mitm] 

hostname = cpes.legym.cn

*******************************/

var obj = JSON.parse($response.body)

obj.data.radius = 6666;

$done({
  body: JSON.stringify(obj),
})
