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
document.onmousewheel=throttled;
/*todo */