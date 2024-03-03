/*
乐健修改跑步限制
脚本版本： 1.0.2
脚本作者：BlingCc
更新时间：2024-03-03
主页：blingcc.eu.org
声明：此脚本仅供学习交流

**************************

QuantumultX:

[rewrite_locala]
^https?:\/\/cpes\.legym\.cn\/running\/app\/getRunningLimit url script-response-body https://raw.githubusercontent.com/BlingCc233/MITM_modules/main/prefix_legym.js

[mitm] 

hostname = cpes.legym.cn

*******************************/

var obj = JSON.parse($response.body);

obj.data.averageSpeedStart = "0";
obj.data.averageSpeedEnd = "8100000000";
obj.data.averageCadenceEnd = 90000;
obj.data.effectiveMileageStart = 0;
obj.data.effectiveMileageEnd = 4.0;
obj.data.dailyMileage = 50;
obj.data.weeklyMileage = 50;
// 设置每天的结束时间为24点
obj.openTimes[0].dayEndTime = "86400000"; // 24 * 60 * 60 * 1000
obj.weekOpenTimes[0].dayEndTime = "86400000"; // 24 * 60 * 60 * 1000

$done({
  body: JSON.stringify(obj),
});

