var arr = [1,2,3,4];
var obj=[{name:'qwd',age:23,sex:'male'},{name:'qwe',age:22,sex:'female'}];
/*todo each  _.each(list, iteratee, [context])*/
_.each(arr,function (val,index,arr) {//todo 顺序遍历数组
    console.log('each:',val,index,arr);
});
/*todo map _.map(list, iteratee, [context])*/
var map = _.map(arr,function (num) {//todo 条件返回数组
    return num*3;
});
console.log('map:',map);
/*todo reduce _.reduce(list, iteratee, [memo], [context])*/
var sum = _.reduce(arr,function (pre,next) {//todo 由左到右迭代
    return pre + next;
});
console.log('reduce:',sum);
/*todo reduceRight _.reduceRight(list, iteratee, memo, [context]) */
var newArr = [[1,2],[3,4],[5,6]];
var newSum = _.reduceRight(newArr,function (pre,next) {//todo 由右到左迭代
    return pre.concat(next);
});
console.log('reduceRight:',newSum);
/*todo find _.find(list, predicate, [context]) */
var find = _.find(arr,function (num) { //todo 返回第一个满足条件 没有返回undefined
    return num % 2 === 0;
});
console.log('find:',find);
/*todo filter _.filter(list, predicate, [context]) */
var filter = _.filter(arr,function (num) { //todo 返回所有满足条件 没有返回undefined
    return num % 2 === 0;
});
console.log('filter:',filter);
/*todo where _.where(list, properties) */
var where = _.where(obj,{name:'qwd'});//todo 返回所有满足条件，没有返回undefined
console.log('where:',where);
/*todo _.findWhere(list, properties) */
var findWhere = _.findWhere(obj,{age:23});//todo 返回第一个满足条件，没有返回undefined
console.log('findWhere:',findWhere);
/*todo reject _.reject(list, predicate, [context]) */
var reject = _.reject(arr,function (num) {//todo 返回所有不满足条件的，没有返回undefined
    return num % 2 === 0;
});
console.log('reject:',reject);
/*todo every _.every(list, [predicate], [context])*/
var every = _.every(arr,function (num) {//todo 所有满足条件返回true，否则返回false
    return num < 6;
});
console.log('every:',every);
/*todo some _.some(list, [predicate], [context])*/
var some = _.some(arr,function (num) {//todo 只要有一个满足条件返回true，否则返回false
    return num <2;
});
console.log('some:',some);
/*todo contains  _.contains(list, value, [fromIndex]) */
var contains = _.contains(arr,3);//todo 数组包含对应值就返回true，否则返回false
console.log('contains:',contains);
/*todo invoke _.invoke(list, methodName, *arguments) */
var invoke = _.invoke([[3,1,4]],'sort');//todo 对数组中的元素执行对应函数
console.log('invoke:',invoke);
/*todo pluck _.pluck(list, propertyName) */
var pluck = _.pluck(obj,'sex');//todo 选取数组对象中的指定属性值，返回一个数组
console.log('pluck',pluck);
/*todo max _.max(list, [iteratee], [context])*/
var maxarr = _.max(arr);//todo 取数组的最大值
var maxobj = _.max(obj,function (obj) {//todo 取指定依据的最大值对应的对象
    return obj.age
})
console.log('maxarr:',maxarr);
console.log('maxobj:',maxobj);
/*todo min _.min(list, [iteratee], [context])*/
var minarr = _.min(arr);//todo 取数组的最小值
var minobj = _.min(obj,function (obj) {//todo 取指定依据的最小值对应的对象
    return obj.age
})
console.log('minarr:',minarr);
console.log('minobj:',minobj);
/*todo sortBy _.sortBy(list, iteratee, [context]) */
var sortByarr = _.sortBy(arr,function (num) {//todo 按照对应条件来进行排序(由小到大)
   return Math.sin(num);
});
var sortByobj = _.sortBy(obj,'age');//todo 按照对应对象属性进行排序(由小到大)
console.log('sortByarr:',sortByarr);
console.log('sortByobj:',sortByobj);
/*todo groupBy _.groupBy(list, iteratee, [context]) */
var groupByarr = _.groupBy(arr,function (num) { //todo 将数组按照返回的组进行筛选。
    return num > 2
});
var groupByobj = _.groupBy(obj,function (obj) {//todo 根据对象的属性依据来进行筛选
    return obj.sex.length
})
console.log('groupByarr:',groupByarr);
console.log('groupByobj:',groupByobj);
/*todo indexBy _.indexBy(list, iteratee, [context]) */
var indexByobj = _.indexBy(obj,'name');//todo 将对象属性值作为对象的键名返回。
console.log('indexByobj:',indexByobj);
/*todo countBy _.countBy(list, iteratee, [context]) */
var countByarr = _.countBy(arr,function (num) {//todo 根据依据生成对象，对象的属性值为数组中满足条件的数量。
    return num % 2 ===0 ? 'even' : 'odd'
});
console.log('countByarr:',countByarr);
/*todo shuffle _.shuffle(list) */
var shuffle = _.shuffle(arr);//todo 随机排序
console.log('shuffle:',shuffle);
/*todo sample _.sample(list, [n])*/
var sample = _.sample(arr,2);//todo 返回数组中随机的数值，后面的参数为数值的数量
console.log('sample:',sample);
/*todo toArray _.toArray(list) */
var toArray = (function () {
    return _.toArray(arguments).slice(1)//todo 可以将任意可迭代的对象转换为一个数组
})(1,2,3,4,5);
console.log('toArray',toArray);
/*todo size _.size(list) */
var size = _.size(arr);
console.log('size:',size);
/*todo partition _.partition(array, predicate) */
var partition = _.partition(arr,function (num) {//todo 按照条件拆分数组，第一个数组为满足条件的，后面一个是不满足条件的
    return num>2
});
console.log('partition:',partition);


