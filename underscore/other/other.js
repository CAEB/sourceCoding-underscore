var obj = {name:'qwd'};
/*todo noConflict _.noConflict()*/
var _ = _.noConflict();//todo 放弃对underscore默认_的控制权。
console.log('noConflict:',_);
/*todo identity _.identity(value) */
var identity = _.identity(obj);//todo 返回和传入的参数相等的值。
console.log('identity:',identity);
/*todo constant _.constant(value)*/
var constant = _.constant(obj);//todo 创建一个返回自身的函数。
console.log('constant:',constant());
/*todo noop _.noop() */
var noop = _.noop();//todo 永远返回undefined。
console.log('noop:',noop);
/*todo times _.times(n, iteratee, [context])*/
var times = _.times(4,function () {//todo 指定函数执行次数，返回带有index的数组，存放每次函数返回的值
   return 1
});
console.log('times:',times);
/*todo random _.random(min, max) */
var random = _.random(5,50);//todo 返回指定数值之间的随机数
console.log('random:',random);
/*todo mixin _.mixin(object)*/
function mixin(arg) {
    console.log('mixin:',arg);
}
_.mixin({//todo 可以自己定义方法在underscore基础上
    mixin:mixin
});
_('qwd').mixin();
/*todo iteratee _.iteratee(value, [context]) */
var iteratee = _.map([{age:10},{age:20}],_.iteratee('age'));//todo 自定义迭代器
console.log('iteratee:',iteratee);
/*todo uniqueId _.uniqueId([prefix]) */
var uniqueId = _.uniqueId(1);//todo 为指定对象添加id
console.log('uniqueId:',uniqueId);
/*todo escape _.escape(string) */
var  escape = _.escape('>');//todo 转义特殊字符
console.log('escape:',escape);
/*todo unescape _.unescape(string) escape 相反的操作*/
/*todo result _.result(object, property, [defaultValue]) */
var result = _.result(obj,'name',function () {
    return 22;
});
console.log('result:',result);
/*todo now _.now() */
var now = _.now();//todo 返回当前的时间戳
console.log('now',now);
/*todo template _.template(templateString, [settings])*/
var template = _.template("hello:<%= name %>");//todo 生成一个模板
template({name:'qwd'});
console.log('template:',template({name:'qwd'}));
/*todo 链式语法*/
var line = _([1,2,3]).map(function (n) {
    return n*5;
});
console.log('line:',line);