(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{376:function(e,t,s){"use strict";s.r(t);var a=s(45),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"为什么tree-shaking只能移除es模块的代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么tree-shaking只能移除es模块的代码"}},[e._v("#")]),e._v(" 为什么tree-shaking只能移除es模块的代码")]),e._v(" "),s("p",[e._v("因为 es 的模块是静态定义的，依赖关系在编译阶段就可以确定，而 "),s("code",[e._v("commonJS")]),e._v(" 模块是 Node 的规范，它是一个动态的，在运行时才知道加载的模块，所以没法在编译阶段获取依赖")]),e._v(" "),s("p",[e._v("webpack 对有副作用（影响外界，改变全局变量，eval等）的模块，都不会进行 tree-shaking 或者代码混淆，对第三方库（不是es模块的）也不会起作用")])])}),[],!1,null,null,null);t.default=n.exports}}]);