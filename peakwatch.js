/*

peakwatch解锁

[rewrite_local]

^https?:\/\/api\.peakwatch\.co\/api\/v1\/d\/check url script-response-body peakwatch.js
^https?:\/\/api\.peakwatch\.co\/api\/v1\/d\/confirm url script-response-body peakwatch.js

[Script]
# peakwatch解锁
peakwatch1 = type=http-response,pattern=^https?:\/\/api\.peakwatch\.co\/api\/v1\/d\/check,requires-body=1,max-size=0,script-path=peakwatch.js
peakwatch2 = type=http-response,pattern=^https?:\/\/api\.peakwatch\.co\/api\/v1\/d\/confirm,requires-body=1,max-size=0,script-path=peakwatch.js
[MITM]
hostname = api.peakwatch.co

*/
var guding = JSON.parse($response.body);
guding.content.expiredAt = "4072665173000";
guding.content.productId = "peakwatch_pro_lifetime_new";
guding.content.isSubscriber = "true";
$done({ body: JSON.stringify(guding) });
