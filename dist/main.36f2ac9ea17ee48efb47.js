module.exports=(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,a,t){e.exports=t(586)},584:function(e,a,t){},586:function(e,a,t){"use strict";t.r(a);var l=t(156),c=t(157),n=t(159),i=t(158),s=t(160),r=t(62),o=t(7),u=t.n(o),k=t(80),d=t.n(k),y=(t(584),["0","1","2","3","4","5","6","7","8","9"]),p=["/","*","-","+","="],h=6,m="scale(0.36)",v=16;function C(e){var a,t=e.value,l="".concat(t).indexOf("."),c=t.substring(l,d.a.eval(t.length)),n=-1===l?0:d.a.eval(c.length-1),i=null;return"NaN"===(i=parseFloat(t).toLocaleString(void 0,{minimumFractionDigits:n}))?i="Error":i.length>v-1&&"NaN"===(i=parseFloat(t).toExponential(v-4))&&(i="Overflow\xa0Error"),a="".concat(i).length>h?m:"scale(1)",u.a.createElement("div",{className:"calculator-display"},u.a.createElement("div",{className:"auto-scaling-text",style:{transform:a}},i))}var b=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(n.a)(this,Object(i.a)(a).call(this,e))).state={displayValue:"0",operator:null,waitingForOperand:!1,firstOperand:"0",clearAll:!0},t.handleClick=t.handleClick.bind(Object(r.a)(Object(r.a)(t))),t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"processDigit",value:function(e){var a=this.state,t=a.displayValue;if(a.waitingForOperand)this.setState({displayValue:"".concat(e),waitingForOperand:!1,clearAll:!1});else{var l="0"===t?"".concat(e):"".concat(t).concat(e);this.setState({displayValue:"".concat(l),waitingForOperand:!1,clearAll:!1})}}},{key:"processOperator",value:function(e){var a=this.state,t=a.displayValue,l=a.operator,c=a.waitingForOperand,n=a.firstOperand,i=null,s=null,r=null;if("0"===n||null==l||c)this.setState({waitingForOperand:!0,firstOperand:t,operator:e,clearAll:!1});else{r="".concat(n).concat(l).concat(t);try{i="".concat(d.a.eval(r))}catch(o){i="Error"}"Infinity"===i&&(i="Error"),s="="===e?null:e,this.setState({displayValue:"".concat(i),waitingForOperand:!0,firstOperand:"".concat(i),operator:s,clearAll:!1})}}},{key:"processPoint",value:function(e){var a=this.state,t=a.displayValue,l=a.waitingForOperand,c=-1==="".concat(t).indexOf("."),n=null;l?this.setState({displayValue:"0.",waitingForOperand:!1,clearAll:!1}):c&&(n="".concat(t).concat(e),this.setState({displayValue:"".concat(n),waitingForOperand:!1,clearAll:!1}))}},{key:"processPercentage",value:function(e){var a=this.state.displayValue,t=parseFloat(a).toPrecision(v)/100;this.setState({displayValue:"".concat(t),waitingForOperand:!1,clearAll:!1})}},{key:"processPlusMinusToggle",value:function(e){var a=this.state.displayValue,t=-1*parseFloat(a).toPrecision(v);this.setState({displayValue:"".concat(t),waitingForOperand:!1,clearAll:!1})}},{key:"processClear",value:function(){var e=this.state.clearAll;console.log("clearAll",e),e?this.setState({displayValue:"0",firstOperand:"0",operator:null,waitingForOperand:!1,clearAll:!0}):this.setState({displayValue:"0",clearAll:!0})}},{key:"processUnknownKey",value:function(e){console.log("Unexpected input: ",e)}},{key:"processFunctionKey",value:function(e){switch(e){case"C":this.processClear(e);break;case"\xb1":this.processPlusMinusToggle(e);break;case".":this.processPoint(e);break;case"%":this.processPercentage(e);break;default:this.processUnknownKey(e)}}},{key:"handleClick",value:function(e){this.processNewKey("".concat(e.target.value))}},{key:"processNewKey",value:function(e){var a=y.includes(e),t=p.includes(e);a?this.processDigit(e):t?this.processOperator(e):this.processFunctionKey(e)}},{key:"render",value:function(){return u.a.createElement("div",{className:"calculator"},u.a.createElement(C,{value:this.state.displayValue}),u.a.createElement("div",{className:"calculator-keypad"},u.a.createElement("div",{className:"input-keys"},u.a.createElement("div",{className:"function-keys"},u.a.createElement("button",{id:"key-clear",value:"C",className:"calculator-key key-clear",onClick:this.handleClick},this.state.clearAll?"AC":"C"),u.a.createElement("button",{id:"key-sign",value:"\xb1",className:"calculator-key key-sign",onClick:this.handleClick},"\xb1"),u.a.createElement("button",{id:"key-percent",value:"%",className:"calculator-key key-percent",onClick:this.handleClick},"%")),u.a.createElement("div",{className:"digit-keys"},u.a.createElement("button",{id:"key-0",value:"0",className:"calculator-key key-0",onClick:this.handleClick},"0"),u.a.createElement("button",{id:"key-dot",value:".",className:"calculator-key key-dot",onClick:this.handleClick},"\xb7"),u.a.createElement("button",{id:"key-1",value:"1",className:"calculator-key key-1",onClick:this.handleClick},"1"),u.a.createElement("button",{id:"key-2",value:"2",className:"calculator-key key-2",onClick:this.handleClick},"2"),u.a.createElement("button",{id:"key-3",value:"3",className:"calculator-key key-3",onClick:this.handleClick},"3"),u.a.createElement("button",{id:"key-4",value:"4",className:"calculator-key key-4",onClick:this.handleClick},"4"),u.a.createElement("button",{id:"key-5",value:"5",className:"calculator-key key-5",onClick:this.handleClick},"5"),u.a.createElement("button",{id:"key-6",value:"6",className:"calculator-key key-6",onClick:this.handleClick},"6"),u.a.createElement("button",{id:"key-7",value:"7",className:"calculator-key key-7",onClick:this.handleClick},"7"),u.a.createElement("button",{id:"key-8",value:"8",className:"calculator-key key-8",onClick:this.handleClick},"8"),u.a.createElement("button",{id:"key-9",value:"9",className:"calculator-key key-9",onClick:this.handleClick},"9"))),u.a.createElement("div",{className:"operator-keys"},u.a.createElement("button",{id:"key-divide",value:"/",className:"calculator-key key-divide",onClick:this.handleClick},"\xf7"),u.a.createElement("button",{id:"key-multiply",value:"*",className:"calculator-key key-multiply",onClick:this.handleClick},"\xd7"),u.a.createElement("button",{id:"key-subtract",value:"-",className:"calculator-key key-subtract",onClick:this.handleClick},"\u2013"),u.a.createElement("button",{id:"key-add",value:"+",className:"calculator-key key-add",onClick:this.handleClick},"+"),u.a.createElement("button",{id:"key-equals",value:"=",className:"calculator-key key-equals",onClick:this.handleClick},"="))))}}]),a}(o.Component);t.d(a,"Calculator",function(){return b})},7:function(e,a){e.exports=require("react")}},[[161,2,1]]]);