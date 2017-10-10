var obj = {name:'qwd',age:23,sex:'male',weigh:75,height:185};
/*todo keys _.keys(object)  */
var keys = _.keys(obj);//todo 检索对象拥有的所有可枚举属性的名称。
console.log('keys:',keys);
/*todo allkeys _.allKeys(object) */
function EB(name) {//todo 检索对象拥有的和继承的所有属性名称。
    this.name = name ;
}
EB.prototype.age = 23;
var allkeys = _.allKeys(new EB('eb'));
console.log('allkeys:',allkeys);
/*todo values _.values(object) */
var values = _.values(obj);//todo 检索对象所有的属性值
console.log('values:',values);
/*todo mapObject _.mapObject(object, iteratee, [context]) */
var mapObject = _.mapObject(obj,function (val,key) {//todo 对对象的属性值进行操作，返回一个新的对象。
    return val + 5;
});
console.log('mapObject:',mapObject);
/*todo pairs _.pairs(object)*/
var pairs = _.pairs(obj);//todo 将对象转换为一个[key,val]形式的数组
console.log('pairs:',pairs);
/*todo invert _.invert(object) */
var invert = _.invert(obj);//todo 将对象的键值对调。
console.log(invert);
/*todo functions _.functions(object) */
var functions = _.functions(_);//todo 列出对象的所有方法名
console.log('functions:',functions);
/*todo findKey _.findKey(object, predicate, [context])  */
var findKey = _.findKey(obj,function (val,key) {//todo 遍历对象中的属性。
    console.log(key,val);
});
/*todo extend _.extend(destination, *sources) */
var extend = _.extend(obj,{friend:'yll'});//todo 将后面的对象属性复制到指定对象中。
console.log('extend:',extend);
/*todo extendOwn _.extendOwn(destination, *sources) 将后面的对象属性复制到指定对象中(不包括继承的属性) */
/*todo pick _.pick(object, *keys) */
var pick = _.pick(obj,'name','age');//todo 挑选出符合后面条件的对象副本，
var pick1 = _.pick(obj,(val,key,obj) => {
    return val === 'qwd'
});
console.log('pick:',pick,pick1);
/*todo omit _.omit(object, *keys) pick的相反功能 */
/*todo defaults _.defaults(object, *defaults)  */
var defaults = _.defaults({name:'eb'},{name:'qwd',age:23});//todo 将后面的对象属性合并到第一个对象中，如果已存在这不进行合并。
console.log('defaults:',defaults);
/*todo clone _.clone(object) */
var clone = _.clone(obj);//todo 克隆指定对象的属性引用(浅度复制)
console.log('clone:',clone);
/*todo tap _.tap(object, interceptor) */
var tap = _.tap(obj,function (obj) {//todo 返回对象本身。
    return _.defaults(obj,{a:123});
});
console.log('tap',tap);
/*todo has _.has(object, key) */
var has = _.has(obj,'name');//todo 判断对象是否含有指定key。
console.log('has:',has);
/*todo _.property(key) */
var property = _.property('name')(obj);//todo 返回指定对象的指定属性的属性值
console.log('property:',property);
/*todo propertyOf _.propertyOf(object) */
var propertyOf = _.propertyOf(obj)('name');
console.log('propertyOf:',propertyOf);
/*todo matcher _.matcher(attrs) */
var matcher = _.matcher('name');//todo 断言函数
console.log('matcher:',matcher);
/*todo isEqual _.isEqual(object, other) */
var  isEqual = _.isEqual({name:'eb'},{name:'eb'});//todo 判断两个对象是否应该相等。
console.log('isEqual:',{name:'eb'} === {name:'eb'},isEqual);
/*todo isMatch _.isMatch(object, properties) */
var isMatch = _.isMatch(obj,{name:'qwd'});
console.log('isMatch:',isMatch);
/*todo isEmpty _.isEmpty(object) 判断对象是否为空*/
/*todo isElement _.isElement(object) 判断指定对象是否为Dom*/
/*todo isArray _.isArray(arr) 判断是否为数组*/
/*todo isObject _.isObject(object) 判断是否为对象*/
/*todo isArguments _.isArguments(object) 判断是否为函数参数对象*/
/*todo isFunction _.isFunction(fn) 判断是否为函数对象*/
/*todo isString _.isString(val) 判断是否为字符串*/
/*todo isNumber _.isNumber(val) 判断是否为数字*/
/*todo isFinite _.isFinite(val) 判断是否有限*/
/*todo isBoolean _.isBoolean(val) 判断是否为布尔值*/
/*todo isDate _.isDate(val) 判断是否为日期*/
/*todo isRegExp _.isRegExp(val) 判断是否为正则表达式*/
/*todo isError _.isError(val) 判断是否为Error对象*/
/*todo isNaN _.isNaN(val) 判断是否为NaN*/
/*todo isNull _.isNull_(val) 判断是否为空*/
/*todo isUndefined _.isUndefined(val) 判断是否为undefined*/




