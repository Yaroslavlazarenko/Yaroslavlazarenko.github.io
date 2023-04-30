(function(){"use strict";var e={6249:function(e,t,n){var a=n(6369),s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"scheduleAppContainer",attrs:{id:"app"}},[t("div",{staticClass:"dropdownContainer"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption,expression:"selectedOption"}],attrs:{id:"my-dropdown"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedOption=t.target.multiple?n:n[0]}}},[t("option",{attrs:{value:"AT211"}},[e._v("AT-211")]),t("option",{attrs:{value:"AT212"}},[e._v("AT-212")])]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.utc,expression:"utc"}],attrs:{id:"my-dropdown"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.utc=t.target.multiple?n:n[0]}}},[t("option",{attrs:{value:"-4"}},[e._v("UTC - 04:00")]),t("option",{attrs:{value:"-3"}},[e._v("UTC - 03:00")]),t("option",{attrs:{value:"-2"}},[e._v("UTC - 02:00")]),t("option",{attrs:{value:"-1"}},[e._v("UTC - 01:00")]),t("option",{attrs:{value:"0"}},[e._v("UTC + 00:00")]),t("option",{attrs:{value:"1"}},[e._v("UTC + 01:00")]),t("option",{attrs:{value:"2"}},[e._v("UTC + 02:00")]),t("option",{attrs:{value:"3"}},[e._v("UTC + 03:00")]),t("option",{attrs:{value:"4"}},[e._v("UTC + 04:00")]),t("option",{attrs:{value:"5"}},[e._v("UTC + 05:00")]),t("option",{attrs:{value:"6"}},[e._v("UTC + 06:00")]),t("option",{attrs:{value:"7"}},[e._v("UTC + 07:00")]),t("option",{attrs:{value:"8"}},[e._v("UTC + 08:00")])])]),t("div",{staticClass:"dateContainer"},[t("span",{staticClass:"title"},[e._v("Сьогодні: "+e._s((new Date).getDate()>=10?(new Date).getDate():"0"+(new Date).getDate())+"."+e._s((new Date).getMonth()+1>=10?(new Date).getMonth()+1:"0"+((new Date).getMonth()+1))+" "+e._s(e.getDay)+". "+e._s(e.thisWeekSteamy?"Парний":"Непарний")+" ("+e._s(this.getWeekNumber)+") тиждень")])]),t("LiveSchedule",{attrs:{group:e.selectedOption,thisWeekSteamy:e.thisWeekSteamy,unpairWeekScheduleAT212:e.getUnpairWeekScheduleAT212,steamyWeekScheduleAT212:e.getSteamyWeekScheduleAT212,utc:e.utc}}),t("div",{staticClass:"buttonOpenSheduleContainer"},[t("button",{on:{click:function(t){e.showContent=!e.showContent}}},[e._v(e._s(e.showContent?"Закрити":"Відкрити")+" повний розклад")])]),e.showContent?t("div",["AT212"==e.selectedOption?t("div",[t("ScheduleAT212",{attrs:{thisWeekSteamy:e.thisWeekSteamy,unpairWeekScheduleAT212:e.getUnpairWeekScheduleAT212,steamyWeekScheduleAT212:e.getSteamyWeekScheduleAT212,utc:e.getUtc}})],1):e._e(),"AT211"==e.selectedOption?t("div",[t("ScheduleAT211")],1):e._e()]):e._e()],1)},i=[],r=function(){var e=this,t=e._self._c;return"AT212"==this.group?t("div",{staticClass:"scheduleContainer"},[t("div",{staticClass:"fast-travel-container"},[t("div",{staticClass:"fast-travel-title-container"},[t("span",{staticClass:"fast-travel-title"},[e._v(e._s(this.updateWhenPairWord))]),t("span",{staticClass:"fast-pair-name"},[e._v(" "+e._s(this.getNameCurrentPair))])]),t("div",{staticClass:"fast-travel-button-container"},[t("span",{staticClass:"pair-start-time"},[e._v(e._s(this.getStartAndEndPairTime[0]))]),t("button",{staticClass:"fast-travel-button"},[t("a",{staticClass:"fast-pair-link",attrs:{href:this.getLinkCurrentPair}},[e._v(e._s(this.getCoupleButton))])]),t("span",{staticClass:"pair-end-time"},[e._v(e._s(this.getStartAndEndPairTime[1]))])])]),e.todaysSchedule.today.length?t("div",{staticClass:"scheduleElement"},[t("h2",[e._v("Розклад на сьогодні:")]),t("ul",e._l(e.todaysSchedule.today,(function(n){return t("li",{key:n.name},[null!=n.link?t("a",{attrs:{href:n.link}},[e._v(e._s(n.name))]):t("a",[e._v(e._s(n.name))])])})),0)]):t("div",{staticClass:"scheduleElement"},[t("h2",[e._v("Сьогодні вихідний:")]),e._m(0)]),e.todaysSchedule.tomorrow.length?t("div",{staticClass:"scheduleElement"},[t("h2",[e._v("Розклад на завтра:")]),t("ul",e._l(e.todaysSchedule.tomorrow,(function(n){return t("li",{key:n.name},[t("a",[e._v(e._s(n.name))])])})),0)]):t("div",{staticClass:"scheduleElement"},[t("h2",[e._v("Завтра вихідний")]),e._m(1)])]):t("div")},l=[function(){var e=this,t=e._self._c;return t("ul",[t("li",{staticClass:"fieldNoPairs"},[t("a")])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",{staticClass:"fieldNoPairs"},[t("a")])])}],o={data(){return{}},props:["group","thisWeekSteamy","unpairWeekScheduleAT212","steamyWeekScheduleAT212","utc"],mounted(){},methods:{},computed:{getNameCurrentPair(){const e=this.getPairNumber;return"Пари закінчилися"!=this.updateWhenPairWord?this.todaysSchedule.today[e].name:""},getLinkCurrentPair(){const e=this.getPairNumber;return"Пари закінчилися"!=this.updateWhenPairWord&&this.todaysSchedule?.today?.[e]?.link?this.todaysSchedule.today[e].link:null},getCoupleButton(){return"Пари закінчилися"!=this.updateWhenPairWord&&this.todaysSchedule.today[this.getPairNumber].link?"Перейти на пару":"Посилання немає"},getStartAndEndPairTime(){const e={0:{pairStart:`${5+parseInt(this.utc)}:00`,pairEnd:`${6+parseInt(this.utc)}:35`},1:{pairStart:`${6+parseInt(this.utc)}:50`,pairEnd:`${8+parseInt(this.utc)}:25`},2:{pairStart:`${8+parseInt(this.utc)}:40`,pairEnd:`${10+parseInt(this.utc)}:15`},3:{pairStart:`${10+parseInt(this.utc)}:30`,pairEnd:`${12+parseInt(this.utc)}:05`}};return"Пари закінчилися"!=this.updateWhenPairWord?[e[this.getPairNumber].pairStart,e[this.getPairNumber].pairEnd]:["",""]},todaysSchedule(){const e=["Неділя","Понеділок","Вівторок","Середа","Четвер","П`ятниця","Суббота"],t=new Date,n={today:[],tomorrow:[]};if("AT212"===this.group){const a=this.thisWeekSteamy?this.steamyWeekScheduleAT212:this.unpairWeekScheduleAT212;n.today=a[e[t.getDay()]]??[],n.tomorrow=a[e[t.getDay()+1]]??[]}return n},timeFormatter(e){return e+this.utc},updateWhenPairWord(){const e=Date.now();if(e>this.getPairsEndTimes[this.todaysSchedule.today.length]||!this.todaysSchedule.today.length)return"Пари закінчилися";if(e<(new Date).setHours(5+parseInt(this.utc),0,0,0))return"Далі:";for(let t=0;t<this.todaysSchedule.today.length;t++)if(e>this.getPairsEndTimes[t]&&e<new Date(this.getPairsEndTimes[t]+9e5))return"Далі:";return"Зараз:"},getPairsEndTimes(){const e=[(new Date).setHours(6+parseInt(this.utc),35,0,0),(new Date).setHours(8+parseInt(this.utc),25,0,0),(new Date).setHours(10+parseInt(this.utc),15,0,0),(new Date).setHours(12+parseInt(this.utc),5,0,0)];return e},getPairNumber(){const e=Date.now(),t=this.getPairsEndTimes;for(let n=0;n<this.todaysSchedule.today.length;n++)if(e<=t[n])return n;return null}}},u=o,c=n(1001),d=(0,c.Z)(u,r,l,!1,null,null,null),h=d.exports,m=function(){var e=this,t=e._self._c;return t("header",{staticClass:"header"})},p=[],v={props:[]},k=v,g=(0,c.Z)(k,m,p,!1,null,null,null),f=g.exports,_=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"selectSheduleContainer"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedWeek,expression:"selectedWeek"}],staticClass:"weeksShedule",attrs:{id:"my-dropdown"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedWeek=t.target.multiple?n:n[0]}}},[t("option",{attrs:{value:"thisWeek"}},[e._v("Розклад цього тижня "+e._s(e.thisWeekSteamy?"(Парний)":"(Непарний)"))]),t("option",{attrs:{value:"nextWeek"}},[e._v("Розклад наступного тижня "+e._s(e.thisWeekSteamy?"(Непарний)":"(Парний)"))])])]),t("div",{staticClass:"scheduleContainer"},[e._l("thisWeek"===e.selectedWeek?e.thisWeekSteamy?e.steamyWeekScheduleAT212:e.unpairWeekScheduleAT212:e.thisWeekSteamy?e.unpairWeekScheduleAT212:e.steamyWeekScheduleAT212,(function(n,a){return t("div",{key:a,staticClass:"scheduleElement"},[t("h2",[e._v(e._s(a))]),t("ul",e._l(n,(function(n){return t("li",{key:n.name},[t("a",[e._v(e._s(n.name))])])})),0)])})),t("div",{staticClass:"scheduleElement"},[t("h2",[e._v("Розклад дзвінків")]),t("ul",[t("li",[t("a",[e._v("Перша пара:   "+e._s(5+e.utc)+":00 - "+e._s(6+e.utc)+":35")])]),t("li",[t("a",[e._v("Друга пара:   "+e._s(6+e.utc)+":50 - "+e._s(8+e.utc)+":25")])]),t("li",[t("a",[e._v("Третя пара: "+e._s(8+e.utc)+":40 - "+e._s(10+e.utc)+":15")])])])])],2)])},S=[],y={data(){return{selectedWeek:"thisWeek"}},props:["thisWeekSteamy","unpairWeekScheduleAT212","steamyWeekScheduleAT212","utc"],mounted(){},methods:{}},C=y,T=(0,c.Z)(C,_,S,!1,null,null,null),W=T.exports;const w={0:{lessonName:"Комп'ютерна електроніка ч.2",link:"https://meet.google.com/ked-mfqb-kyb"},1:{lessonName:"Вища математика",link:"https://meet.google.com/aoi-bhgs-zqt?pli=1&authuser=1"},2:{lessonName:"Конфліктологія (Практика)",link:"https://meet.google.com/nvd-qykh-kxo?authuser=1"},3:{lessonName:"Конфліктологія (Лекція)",link:"https://meet.google.com/evc-unoe-grn?pli=1&authuser=1"},4:{lessonName:"WEB-програмування",link:"https://us04web.zoom.us/j/4818920588?pwd=MUxUZlgrbytudllrTnFmVVFvLzQvZz09"},5:{lessonName:"Основи стандартизації, взаємозамінності та метрології",link:"https://meet.google.com/row-ybpc-bns"},6:{lessonName:"Філософія",link:"https://us04web.zoom.us/j/5268770607?pwd=QXBSR1RtM0hKWWxtUmw3NHRoV29lQT09#success"},7:{lessonName:"Теорія автоматичного управління",link:"https://us04web.zoom.us/j/78027756038?pwd=3UBI5b0J2STGNzAYFv1ESSKnIOAujr.1"},8:{lessonName:"Фізичне виховання",link:null}},N={"Понеділок":[{name:w[0].lessonName+" (Лекція)",link:w[0].link},{name:w[1].lessonName+" (Практика)",link:w[1].link},{name:w[7].lessonName+" (Лекція)",link:w[7].link}],"Вівторок":[{name:w[8].lessonName,link:w[8].link},{name:"Пари не буде",link:null},{name:w[7].lessonName+" (Практика)",link:w[7].link}],"Середа":[{name:w[3].lessonName,link:w[3].link},{name:w[4].lessonName,link:w[4].link},{name:w[5].lessonName+" (Лекція)",link:w[5].link}],"Четвер":[{name:w[4].lessonName+" (Практика)",link:w[4].link},{name:w[6].lessonName+" (Лекція)",link:w[6].link},{name:w[5].lessonName+" (Лабораторна)",link:w[5].link}],"П`ятниця":[{name:w[8].lessonName,link:w[8].link},{name:w[1].lessonName+" (Консультація)",link:w[1].link},{name:w[0].lessonName+" (Практика)",link:w[0].link}]};var A={data(){return{selectedOption:"AT212",showContent:null,utc:localStorage.utc?localStorage.utc:"3"}},components:{LiveSchedule:h,ScheduleAT211:f,ScheduleAT212:W},computed:{thisWeekSteamy(){return this.getWeekNumber%2==0?1:null},getUnpairWeekScheduleAT212(){return N},getUtc(){return parseInt(this.utc)},getSteamyWeekScheduleAT212(){let e=JSON.parse(JSON.stringify(N));return e["Вівторок"][1].name=w[2].lessonName,e["Вівторок"][1].link=w[2].link,e["Середа"][0].name="Пари не буде",e["Середа"][0].link=null,e["Четвер"][2].name=w[6].lessonName+" (Практика)",e["Четвер"][2].link=w[6].link,e},getWeekNumber(){const e=new Date,t=new Date(e.getFullYear(),0,1),n=Math.ceil(((e-t)/864e5+t.getDay()+1)/7)-9;return n},getDay(){const e=["неділя","понеділок","вівторок","середа","четвер","п`ятниця","субота"],t=new Date,n=e[t.getDay()];return n}},watch:{selectedOption(e){localStorage.selectedOption=e},showContent(e){localStorage.showContent=e},utc(e){localStorage.utc=e},methods:{}},mounted(){localStorage.selectedOption&&(this.selectedOption=localStorage.selectedOption),localStorage.showContent&&(this.showContent="true"===localStorage.showContent)}},b=A,P=(0,c.Z)(b,s,i,!1,null,null,null),D=P.exports;a.ZP.config.productionTip=!1,new a.ZP({render:e=>e(D)}).$mount("#app")}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,s,i){if(!a){var r=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],i=e[c][2];for(var l=!0,o=0;o<a.length;o++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[o])}))?a.splice(o--,1):(l=!1,i<r&&(r=i));if(l){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,s,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,i,r=a[0],l=a[1],o=a[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(o)var c=o(n)}for(t&&t(a);u<r.length;u++)i=r[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},a=self["webpackChunkschedule"]=self["webpackChunkschedule"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6249)}));a=n.O(a)})();
//# sourceMappingURL=app.b1080f94.js.map