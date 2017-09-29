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


