var arr = [1,2,3,4,5];
/*todo first _.first(array, [n])  */
var first = _.first(arr);//todo 返回数组的第一个元素，后面加参数返回前n个元素的数组
console.log('first:',first);
/*todo initial _.initial(array, [n]) */
var initial = _.initial(arr);//todo 返回数组剔除最后一个元素的数组，后面加参数返回从后往前剔除n个元素的数组
console.log('initial:',initial);
/*todo last _.last(array, [n]) */
var last = _.last(arr);//todo 返回数组的最后一个元素，后面加参数返回后n个元素的数组
console.log('last:',last);
/*todo rest _.rest(array, [index])*/
var rest = _.rest(arr);//todo 返回数组剔除第一个元素的数组，后面加参数返回从前往后剔除n个元素的数组
console.log('rest:',rest);
/*todo compact _.compact(array) */
var compact = _.compact([1,2,0,null,'',undefined,false,NaN]);//todo 返回一个剔除false的数组
console.log('compact:',compact);//todo 在javascript中, false, null, 0, "", undefined 和 NaN 都是false值
/*todo flatten _.flatten(array, [shallow])*/
var flatten = _.flatten([1,[2,[3,[4]]]]);//todo 将多层嵌套数组转换为一层，后面加参数只分解一层。
console.log('flatten:',flatten);
/*todo without _.without(array, *values)*/
var without = _.without(arr,1,4);//todo 返回删除后面参数的数组。
console.log('without',without);
/*todo union _.union(*arrays) */
var union = _.union([1,2,3,4],[3,2,100]);//todo 返回一个按照顺序的，不包含重复的数值的数组，参数可传入多个数组。
console.log('union',union);
/*todo intersection _.intersection(*arrays) */
var intersection = _.intersection([1,2,3],[2,3]);//todo 返回数组的交集
console.log('intersection:',intersection);
/*todo difference _.difference(array, *others) */
var difference = _.difference([1,3,4,5],[2,3,5]);//todo 返回的数组中含有第一个数组的元素，但不包含后面数组的元素。
console.log('difference:',difference);
/*todo uniq _.uniq(array, [isSorted], [iteratee])*/
var uniq = _.uniq([4,1,2,3,2,1,4,5]);//todo 返回一个去重的数组
console.log('uniq:',uniq);
/*todo zip _.zip(*arrays) */
var zip = _.zip([1,2,3],[4,5,6],[7,8,9]);//todo 返回数组对应位置合并的数组。
console.log('zip:',zip);
/*todo unzip _.unzip(*arrays) */
var unzip = _.unzip(zip);//todo zip的相反面，一般两者搭配使用
console.log('unzip:',unzip);
/*todo object _.object(list, [values]) */
var object = _.object(['name','age','sex'],['qwd',23,'male']);//todo 将数组转换为对象
console.log('object:',object);
/*todo indexOf _.indexOf(array, value, [isSorted]) */
var indexOf = _.indexOf(arr,2);//todo 返回数值对应的索引，如果没有返回-1
console.log('indexOf:',indexOf);
/*todo lastIndexOf _.lastIndexOf(array, value, [fromIndex]) */
var lastIndexOf = _.lastIndexOf([1,2,3,4,2],2);//todo 返回元素在数组最后一次出现的索引
console.log('lastIndexOf:',lastIndexOf);
/*todo sortedIndex _.sortedIndex(list, value, [iteratee], [context]) */
var sortedIndex = _.sortedIndex([1,2,3,4,5],3.5);//todo 返回对应数值使用二分法查找的索引位置
console.log('sortedIndex',sortedIndex);
/*todo findIndex */
var findIndex = _.findIndex(arr,function (num) {//todo 返回对应条件在数组中返回的第一个索引值
    return num > 2;
});
console.log('findIndex:',findIndex);
/*todo findLastIndex _.findLastIndex(array, predicate, [context])  */
var findLastIndex = _.findLastIndex([1,2,3,4,2,4,2],function (num) {//todo 返回对应条件在数组中返回的最后一个索引值
    return num === 4;
});
console.log('findLastIndex:',findLastIndex);
/*todo range _.range([start], stop, [step]) */
var range = _.range(0,30,5);//todo 返回对应区间的值的一个数组。不包含最后一个值
console.log('range:',range);