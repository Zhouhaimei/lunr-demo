webpackJsonp([0,4],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=n(1),u=r(a),l=n(153),i=r(l),o=n(154),s=r(o);i["default"].render(u["default"].createElement(s["default"],null),document.getElementById("app"))},154:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(){return new Promise(function(e,t){try{n.e(1,function(t){var r=n(155),a=n(156);e({index:r.Index.load(a.index),lines:a.lines})})}catch(r){t(r)}})}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),c=r(s),f=function(e){function t(e){a(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.state={index:null,value:"",lines:[],results:[]},n.onChange=n.onChange.bind(n),n}return l(t,e),o(t,[{key:"render",value:function(){var e=this.state.results;return c["default"].createElement("div",{className:"app-container"},c["default"].createElement("div",{className:"search-container"},c["default"].createElement("label",null,"Search against README:"),c["default"].createElement("input",{type:"text",value:this.state.value,onChange:this.onChange})),c["default"].createElement("div",{className:"results-container"},c["default"].createElement(d,{results:e})))}},{key:"onChange",value:function(e){var t=this,n=e.target.value,r=this.state.index,a=this.state.lines;return this.setState({value:n}),a&&r?void this.setState({results:this.search(a,r,n)}):void i().then(function(e){t.setState({index:e.index,lines:e.lines,results:t.search(e.lines,e.index,n)})})["catch"](function(e){console.error(e)})}},{key:"search",value:function(e,t,n){return t.search(n.trim()).map(function(t){return e[t.ref]})}}]),t}(c["default"].Component);t["default"]=f;var d=function(e){var t=e.results;return t.length?c["default"].createElement("ul",null,t.map(function(e,t){return c["default"].createElement("li",{key:t},e)})):c["default"].createElement("span",null,"No results")}}});