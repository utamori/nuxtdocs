(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{240:function(o,r,t){var content=t(252);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(64).default)("4c5ed5c5",content,!0,{sourceMap:!1})},251:function(o,r,t){"use strict";var c=t(240);t.n(c).a},252:function(o,r,t){(r=t(63)(!1)).push([o.i,".alert p{margin:0!important}.alert a{--text-opacity:1!important;color:#4a5568!important;color:rgba(74,85,104,var(--text-opacity))!important}.dark-mode .alert a{--text-opacity:1!important;color:#e2e8f0!important;color:rgba(226,232,240,var(--text-opacity))!important}.alert strong{color:currentColor}.alert-info{--bg-opacity:1;background-color:#ebf8ff;background-color:rgba(235,248,255,var(--bg-opacity));--border-opacity:1;border-color:#63b3ed;border-color:rgba(99,179,237,var(--border-opacity))}.alert-info code{--bg-opacity:1;background-color:#bee3f8;background-color:rgba(190,227,248,var(--bg-opacity));box-shadow:none;border-width:0;color:currentColor}.alert-info .alert-icon{--text-opacity:1;color:#63b3ed;color:rgba(99,179,237,var(--text-opacity))}.alert-info .alert-content{--text-opacity:1;color:#2b6cb0;color:rgba(43,108,176,var(--text-opacity))}.dark-mode .alert-info,.dark-mode .alert-info .alert-content{--bg-opacity:1;background-color:#2a4365;background-color:rgba(42,67,101,var(--bg-opacity));--border-opacity:1;border-color:#2b6cb0;border-color:rgba(43,108,176,var(--border-opacity))}.dark-mode .alert-info .alert-content{--text-opacity:1;color:#90cdf4;color:rgba(144,205,244,var(--text-opacity))}.dark-mode .alert-info .alert-content code{--bg-opacity:1!important;background-color:#2c5282!important;background-color:rgba(44,82,130,var(--bg-opacity))!important}.alert-success{--bg-opacity:1;background-color:#f0fff4;background-color:rgba(240,255,244,var(--bg-opacity));--border-opacity:1;border-color:#68d391;border-color:rgba(104,211,145,var(--border-opacity))}.alert-success code{--bg-opacity:1;background-color:#c6f6d5;background-color:rgba(198,246,213,var(--bg-opacity));box-shadow:none;border-width:0;color:currentColor}.alert-success .alert-icon{--text-opacity:1;color:#68d391;color:rgba(104,211,145,var(--text-opacity))}.alert-success .alert-content{--text-opacity:1;color:#2f855a;color:rgba(47,133,90,var(--text-opacity))}.dark-mode .alert-success,.dark-mode .alert-success .alert-content{--bg-opacity:1;background-color:#22543d;background-color:rgba(34,84,61,var(--bg-opacity));--border-opacity:1;border-color:#2f855a;border-color:rgba(47,133,90,var(--border-opacity))}.dark-mode .alert-success .alert-content{--text-opacity:1;color:#9ae6b4;color:rgba(154,230,180,var(--text-opacity))}.dark-mode .alert-success .alert-content code{--bg-opacity:1!important;background-color:#276749!important;background-color:rgba(39,103,73,var(--bg-opacity))!important}.alert-warning{--bg-opacity:1;background-color:#fffaf0;background-color:rgba(255,250,240,var(--bg-opacity));--border-opacity:1;border-color:#f6ad55;border-color:rgba(246,173,85,var(--border-opacity))}.alert-warning code{--bg-opacity:1;background-color:#feebc8;background-color:rgba(254,235,200,var(--bg-opacity));box-shadow:none;border-width:0;color:currentColor}.alert-warning .alert-icon{--text-opacity:1;color:#f6ad55;color:rgba(246,173,85,var(--text-opacity))}.alert-warning .alert-content{--text-opacity:1;color:#c05621;color:rgba(192,86,33,var(--text-opacity))}.dark-mode .alert-warning,.dark-mode .alert-warning .alert-content{--bg-opacity:1;background-color:#744210;background-color:rgba(116,66,16,var(--bg-opacity));--border-opacity:1;border-color:#b7791f;border-color:rgba(183,121,31,var(--border-opacity))}.dark-mode .alert-warning .alert-content{--text-opacity:1;color:#fbd38d;color:rgba(251,211,141,var(--text-opacity))}.dark-mode .alert-warning .alert-content code{--bg-opacity:1!important;background-color:#975a16!important;background-color:rgba(151,90,22,var(--bg-opacity))!important}.alert-danger{--bg-opacity:1;background-color:#fff5f5;background-color:rgba(255,245,245,var(--bg-opacity));--border-opacity:1;border-color:#fc8181;border-color:rgba(252,129,129,var(--border-opacity))}.alert-danger code{--bg-opacity:1;background-color:#fed7d7;background-color:rgba(254,215,215,var(--bg-opacity));box-shadow:none;border-width:0;color:currentColor}.alert-danger .alert-icon{--text-opacity:1;color:#fc8181;color:rgba(252,129,129,var(--text-opacity))}.alert-danger .alert-content{--text-opacity:1;color:#c53030;color:rgba(197,48,48,var(--text-opacity))}.dark-mode .alert-danger,.dark-mode .alert-danger .alert-content{--bg-opacity:1;background-color:#742a2a;background-color:rgba(116,42,42,var(--bg-opacity));--border-opacity:1;border-color:#c53030;border-color:rgba(197,48,48,var(--border-opacity))}.dark-mode .alert-danger .alert-content{--text-opacity:1;color:#feb2b2;color:rgba(254,178,178,var(--text-opacity))}.dark-mode .alert-danger .alert-content code{--bg-opacity:1!important;background-color:#9b2c2c!important;background-color:rgba(155,44,44,var(--bg-opacity))!important}",""]),o.exports=r},268:function(o,r,t){"use strict";t.r(r);t(33),t(46);var c={props:{type:{type:String,default:"info",validator:function(o){return["info","success","warning","danger"].includes(o)}}},computed:{icon:function(){return{info:"IconInformationCircle",success:"IconCheckCircle",warning:"IconExclamationCircle",danger:"IconXCircle"}[this.type]}}},e=(t(251),t(3)),component=Object(e.a)(c,(function(){var o=this.$createElement,r=this._self._c||o;return r("div",{staticClass:"alert border-l-4 p-4 mb-4 mt-4",class:"alert-"+this.type},[r("div",{staticClass:"flex items-start"},[r("div",{staticClass:"flex-shrink-0"},[r(this.icon,{tag:"component",staticClass:"alert-icon mt-px w-6 h-6"})],1),this._v(" "),r("div",{staticClass:"ml-2 alert-content"},[this._t("default")],2)])])}),[],!1,null,null,null);r.default=component.exports}}]);