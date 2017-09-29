var obj = {name:"qwd",age:23,sex:'male'};
/*todo bind _.bind(function, object, *arguments) */
function bind(arg) {
    console.log('bind:',arg + ':' + this.name);
}
var binds = _.bind(bind,obj,'hello');//todo 将函数绑定到指定的对象上，即this指向该对象。
binds();
/*todo bindAll _.bindAll(object, *methodNames) */
var method = {
    label:'underscore',
    onClick:function () {
        console.log('bindAll:',this.label)
    }
};
var bindALL = _.bindAll(method,'onClick');//todo 将函数绑定到指定的对象上，即this指向该对象。
bindALL.onClick();
/*todo partial _.partial(function, *arguments) */
var partial = function (a,b) {
    return b - a;
};
var par = _.partial(partial,_,5);//todo 用来填充arguments的个数,_是指预先不填充，调用是填充的值。
console.log('par:',par(20));
/*todo memoize _.memoize(function, [hashFunction]) */
var memoize = _.memoize(function (n) {
   return n <2 ? n: memoize(n-1) + memoize(n-2);//todo 缓存计算的结果，可优化递归。
});
console.log(memoize(10));
/*todo delay _.delay(function, wait, *arguments) */
var log = _.bind(function (a) {
    console.log(a);
});
var delay = _.delay(log,1000,'qwd');//todo 类似于setTimeout执行回调。
console.log(delay);
/*todo defer _.defer(function, *arguments) */
var defer = _.defer(function (a) {
    console.log('defer:',a);
},'defer');//todo 类似于setTimeout为0的执行回调，直到当前栈清空才会调用
/*todo throttle _.throttle(function, wait, [options]) */
var cb = function () {
    console.log(123);
}
var throttled = _.throttle(cb,500);//todo 重复调用函数时，规定最多每隔指定时间调用，比如鼠标滚动的事件。
document.onmousewheel = throttled;
/*todo debounce _.debounce(function, wait, [immediate])  */
var debounce = _.debounce(function () {//todo 在规定wait时间内调用函数，且不会重复调用。
    console.log('debounce:',456);
},1000);
document.onmousewheel = debounce;
/*todo once _.once(function) */
function onces() {
    console.log('once');
}
var once = _.once(onces);//todo 创建一个只会执行一次的函数
once();
/*todo after _.after(count, function) */
var after = _.after(5,render);//todo 创建一个在执行指定次数后才会执行。
function render() {
    console.log('after');
}
for (var i = 0; i < 5; i++) {
    after();
}
/*todo before _.before(count, function) */
var before = _.before(3,befores);//todo 创建一个执行次数不超过指定数量的函数，返回值为最后一次执行该函数的返回值。
function befores() {
    console.log('before')
};
for (var i = 0; i < 3; i++) {
    before();
}
/*todo wrap _.wrap(function, wrapper) */
var wrap = _.wrap(wraps,function (fun) {//todo 接受两个函数，第二个函数的参数为第一个函数，可以让两个函数以同步方式执行。
   return fun() + ',wrap';
});
function wraps() {
    return 'wraps'
};
console.log('wrap:',wrap());
/*todo negate _.negate(predicate)*/
var negate = _.negate(function (a) {//todo 返回指定函数的相反的函数。
    return a > 2
});
console.log(_.find([1,2,3,4],negate));//todo 1
/*todo compose _.compose(*functions) */
function firstC(name) {//todo 前一个函数的返回值作为下一个函数执行的参数。
    return name + 2;
}
function secondS(a) {
    return a+3;
}
var compose = _.compose(firstC,secondS);
console.log(compose(1));