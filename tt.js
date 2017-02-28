/**
 * Created by 兜兜 on 2017/2/26.
 */
var obj = {
	name:'ergou',
	age : 12,
}
var str = JSON.stringify(obj);
console.log(str);
console.log(JSON.parse(str));