/*

peakwatch解锁

[rewrite_local]

^https?:\/\/api\.ideation\.love\/api\/v1\/d\/check url script-response-body peakwatch.js
# stresswatch解锁
stress = type=http-response,pattern=^https?:\/\/api\.ideation\.love\/api\/v1\/d\/check,requires-body=1,max-size=0,script-path=stress.js

[MITM]
hostname = api.ideation.love

*/
var guding = JSON.parse($response.body);
guding.content.productId = "stress_membership_lifetime_discount";
guding.content.productIds = [
  "stress_membership_lifetime_discount"
];
guding.content.subscriptionStatus="MEMBERSHIP";
$done({ body: JSON.stringify(guding) });
