(function(t){function e(e){for(var a,s,r=e[0],l=e[1],c=e[2],d=0,u=[];d<r.length;d++)s=r[d],o[s]&&u.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.isOnline?t._e():n("p",{staticClass:"offline"},[t._v("Offline")]),t.requirePin?n("div",{staticClass:"content align-center"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.enterPin(e)}}},[n("div",{staticClass:"field"},[n("label",[t._v("What's your PIN?")]),n("br"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newPin,expression:"newPin"}],staticClass:"pin",attrs:{type:"tel",placeholder:"****",maxlength:"4",autofocus:""},domProps:{value:t.newPin},on:{input:function(e){e.target.composing||(t.newPin=e.target.value)}}}),n("span",{staticClass:"pin-error notice red"},[t.pinError?n("span",[t._v(t._s(t.pinError))]):t._e()])]),t._m(0)]),n("p",{staticClass:"align-center logout"},[n("a",{staticClass:"hint",attrs:{href:"javascript:;"},on:{click:function(e){return t.app.logout()}}},[t._v("\n                Reset Device\n            ")])])]):n("div",[t.loading?n("div",{staticClass:"loading content align-center"},[n("p",[t._v("Loading...")])]):n("router-view",{attrs:{app:t.app}})],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field"},[n("button",{attrs:{type:"submit"}},[t._v("\n                    Enter PIN\n                ")])])}],s=(n("7f7f"),n("28a5"),n("0a0d")),r=n.n(s),l=n("f499"),c=n.n(l),p=n("7618"),d=(n("55dd"),n("7514"),n("422b")),u=n.n(d),f=n("a002"),v=n.n(f),m=n("b5c4"),h=n.n(m);function g(t){var e=t.method.toUpperCase(),n=new XMLHttpRequest,a=t.data;if("GET"===e&&"object"===Object(p["a"])(a))for(var o in t.url+="?",t.data)t.url+="&"+encodeURIComponent(o)+"="+encodeURIComponent(t.data[o]);else a=c()(a);return n.addEventListener("readystatechange",function(){if(4===n.readyState){if(n.status>=200&&n.status<300||304===n.status)try{return void t.success.call(t.context,JSON.parse(n.responseText))}catch(e){t.error.call(t.context,e)}t.error.call(t.context,n)}},!1),n.open(e,t.url,"undefined"===typeof t.async||t.async),"undefined"!==typeof t.beforeSend&&t.beforeSend.call(t.context,n),n.setRequestHeader("content-type","application/json"),n.send(a),n}var _=g,y=h.a.generateUUID("xxxxyxxxxyxxxxyxxxxyxxxxyxxxxyxxxxyxxxxy",32),b={locations:[{id:y(),name:"Main Auditorium",peopleIds:[],_collection:"locations"},{id:y(),name:"Campus #2",peopleIds:[],_collection:"locations"}],people:[{id:y(),name:"Meghann Engberg",_collection:"people"},{id:y(),name:"Dede Pound",_collection:"people"},{id:y(),name:"Zada Geissler",_collection:"people"},{id:y(),name:"Luise Ellingsworth",_collection:"people"},{id:y(),name:"Nichole Bieker",_collection:"people"},{id:y(),name:"Linnea Ginsburg",_collection:"people"},{id:y(),name:"Maynard Marrone",_collection:"people"},{id:y(),name:"Dorian Suriel",_collection:"people"},{id:y(),name:"Shay Azar",_collection:"people"},{id:y(),name:"Caroyln Earley",_collection:"people"},{id:y(),name:"Angelyn Mcdougal",_collection:"people"},{id:y(),name:"Phyllis Carasco",_collection:"people"},{id:y(),name:"Dewey Mccoy",_collection:"people"},{id:y(),name:"Karry Siegal",_collection:"people"},{id:y(),name:"Oretha Bevacqua",_collection:"people"},{id:y(),name:"Kenton Goggans",_collection:"people"},{id:y(),name:"Hermelinda Quevedo",_collection:"people"},{id:y(),name:"Whitney Vanderhoff",_collection:"people"},{id:y(),name:"Arla Cupp",_collection:"people"},{id:y(),name:"Marcene Fernald",_collection:"people"}],staff:[{id:y(),pin:1234,name:"Bob",_collection:"staff"}],dates:[]};var w,x,P=3e4,C=h.a.generateUUID("xxxxyxxxxyxxxxyxxxxyxxxxyxxxxyxxxxyxxxxy",32),L=h.a.generateUUID("xxxx",10),I={locations:["peopleIds"],people:[],days:["locationId"],staff:[]};function k(t){return"people"===t?"person":"staff"===t?"staff":t.slice(0,-1)}var A={data:function(){var t=this;return window.app=t,{app:t,logo:window.logo||"/img/logo.svg",loading:!0,user:void 0,requirePin:void 0,isAddingLocation:!1,newPin:"",pinError:void 0,pin:void 0,hints:{},locations:[],people:[],days:[],staff:[],unsaved:[],isPaid:!!window.SECRET_KEY&&"p"===window.SECRET_KEY[0],isOnline:window.navigator.onLine,api:!1,store:v.a.createInstance({name:"attend"})}},mounted:function(){var t=this;window.API_URL?(t.fetchPin(function(){t.applyHints(function(){t.saveUnsavedRemote(function(){t.fetch(function(){t.saveLocal(function(){t.loading=!1,x=setTimeout(function(){t.poll()},P)})})})})}),window.addEventListener("online",function(){t.isOnline=!0,t.poll()}),window.addEventListener("offline",function(){t.isOnline=!1})):alert("Invalid link for Attendance. Please visit the URL in your WordPress dashboard at Settings > Attendance.")},computed:{selectedLocation:function(){var t=this;return t.sortedLocations.find(function(e){return e.id+""===t.$route.params.id+""})},sortedLocations:function(){var t=this;return t.locations.filter(function(t){return"publish"===t._status}).sort(t.sortByName)},sortedPeople:function(){var t=this;return t.people.filter(function(t){return"publish"===t._status}).sort(t.app.sortByName)},sortedDays:function(){var t=this;return t.days.filter(function(t){return"publish"===t._status}).sort(t.app.sortByName)},sortedStaff:function(){var t=this;return t.staff.filter(function(t){return"publish"===t._status}).sort(t.app.sortById)}},watch:{newPin:function(){this.pinError=void 0}},methods:{resetPin:function(){var t=this;t.pin=void 0,t.store.removeItem("pin")},fetchPin:function(t){var e=this;e.store.getItem("pin",function(n,a){a&&(e.pin=a),t()})},enterPin:function(){var t=this;t.loading=!0,_({method:"POST",url:window.API_URL+"/"+t.newPin+"/pin",data:{pin:t.newPin},beforeSend:function(e){e.setRequestHeader("Authorization","Basic "+btoa(t.newPin))},success:function(){t.loading=!1,t.pin=t.newPin,t.newPin="",t.store.setItem("pin",t.pin),"function"===typeof t.requirePin&&t.requirePin.call(t),t.requirePin=void 0},error:function(){t.pinError="Invalid PIN.",t.loading=!1}})},hideHint:function(t){var e=this;a["a"].set(e.hints,t,!0),e.store.setItem("hint-"+t,!0)},poll:function(){var t=this;w||(w=!0,clearTimeout(x),t.saveUnsavedRemote(function(){t.fetchRemote(function(){t.afterFetchItems(function(){w=!1,x=setTimeout(function(){t.poll()},P)})})}))},applySeed:function(t){var e=this;if(e.locations.length||e.people.length)return t();e.locations=b.locations,e.people=b.people,e.days=b.days,e.staff=b.staff,t()},merge:function(t,e){if("object"===Object(p["a"])(e))for(var n,a,o=e.length-1;o>=0;o--)if(n=t.find(function(t){return t.id+""===e[o].id+""}),n)for(a in e[o])n[a]=e[o][a];else t.push(e[o])},fetchLocal:function(t){var e=this;u.a.eachSeries(["locations","people","days","staff","unsaved"],function(t,n){e.store.getItem(t,function(a,o){e.merge(e[t],o||[]),n()})},function(){t()})},fetchRemote:function(t){var e=this;u.a.eachSeries(["locations","people","days","staff"],function(t,n){e.ajax("GET","/"+t,function(a,o){e.merge(e[t],o||[]),n()})},function(){t()})},buildItem:function(t,e){return e.id=e.id||C(),e._collection=e._collection||t,e._status=e._status||"publish",e},fetch:function(t){var e=this;e.fetchLocal(function(){e.fetchRemote(function(){e.afterFetchItems(function(){t()})})})},afterFetchItems:function(t){var e=this;u.a.eachSeries(["locations","people","days","staff"],function(t,n){for(var a=e[t],o=a.length-1;o>=0;o--)e.buildItem(t,a[o]),a[o]._lastUpdatedAt=a[o].updatedAt;n()},function(){t()})},ajax:function(t,e,n,a,o){"function"===typeof n&&(o=n,n=void 0),"function"===typeof a&&(o=a,a=void 0);var i=this;i.confirmPin(function(){_({method:t,url:window.API_URL+"/"+i.pin+e,data:n,beforeSend:function(t){t.setRequestHeader("Authorization","Basic "+btoa(i.pin))},success:function(t){i.loading=!1,a&&t&&(i.merge([a],[t]),i.swapIds(a,t)),"function"===typeof o&&o(void 0,t)},error:function(s){if(i.loading=!1,s&&("GET"!==t&&(i.unsaved.push({method:t,url:e,data:JSON.parse(c()(n)),item:a?{_collection:a._collection,id:a.id}:void 0}),i.saveUnsavedLocal()),s.status>200&&(console.error(s),401===s.status)))return i.resetPin(),void i.confirmPin(function(){i.ajax(t,e,n,a,function(){o(),i.poll()})});"function"===typeof o&&o(s)}})})},applyHints:function(t){var e=this;u.a.eachSeries(["lock"],function(t,n){e.store.getItem("hint-"+t,function(o,i){a["a"].set(e.hints,t,!!i),n()})},function(){t()})},confirmPin:function(t){var e=this;e.pin?"function"===typeof t&&t():e.requirePin=t},save:function(t,e,n){"function"===typeof e&&(n=e,e=void 0),"function"===typeof t&&(n=t,t=void 0),"object"===Object(p["a"])(t)&&(t._lastUpdatedAt=Math.round(r()()/1e3));var a=this;a.saveLocal(t,e,function(){a.saveRemote(t,e,n)})},isPersisted:function(t){return!t._lastUpdatedAt||t.updatedAt&&t.updatedAt>=t._lastUpdatedAt},saveUnsavedRemote:function(t){var e=this,n=e.unsaved.shift();if(!n)return t();e.saveUnsavedLocal(),n.item&&(n.item=e[n.item._collection].find(function(t){return t.id+""===n.item.id+""||t.slug+""===n.item.id+""}),n.data[k(n.item._collection)].id&&(n.data[k(n.item._collection)].id=n.item.id)),e.ajax(n.method,n.url,n.data,n.item,function(n){if(n)return t();e.saveUnsavedRemote(t)})},saveUnsavedLocal:function(t){var e=this;e.store.setItem("unsaved",e.unsaved,t)},saveLocal:function(t,e,n){"function"===typeof e&&(n=e,e=void 0),"function"===typeof t&&(n=t,t=void 0);var a=this;u.a.eachSeries(["locations","people","days","staff"],function(t,e){a.store.setItem(t,a[t].filter(function(t){return"attendance-archive"!==t._status}),function(){e()})},function(){n()})},saveRemote:function(t,e,n){"function"===typeof e&&(n=e,e=void 0),"function"===typeof t&&(n=t,t=void 0);var a=this;"object"!==Object(p["a"])(t)?u.a.eachSeries(["locations","people","days","staff"],function(t,e){u.a.eachSeries(a[t],function(t,e){a.saveRemoteItem(t,e)},function(){e()})},function(){"function"===typeof n&&n()}):a.saveRemoteItem(t,e,n)},saveRemoteItem:function(t,e,n){"function"===typeof e&&(n=e,e=void 0);var a=this,o={};e?(o[k(t._collection)]={},o[k(t._collection)].id=t.id,o[k(t._collection)][e]=t[e]):o[k(t._collection)]=t,a.ajax("POST","/"+t._collection,o,t,function(t,e){"function"===typeof n&&n(t,e)})},swapIds:function(t,e){if(e&&t.id!==e.id){var n,a=this,o=t.id,i=k(t._collection);for(n in t.id=e.id,I){var s=t._collection+"Ids";-1!==I[n].indexOf(s)&&a[n].forEach(function(t){var n=t[s].indexOf(o);-1!==n&&(t[s][n]=e.id,a.saveRemoteItem(t))}),s=i+"Id",-1!==I[n].indexOf(s)&&a[n].filter(function(t){t[s]===o&&(t[s]=e.id,a.saveRemoteItem(t))})}}},addPersonByName:function(t,e,n,a){var o=this,i=o.buildItem("people",{name:e});o.people.push(i),t.peopleIds.push(i.id),a&&(a.q=""),o.save(i,function(){o.save(t,function(){n&&o.present(t,i,n)})})},prepDate:function(t){var e=this;return t instanceof Date?t.getFullYear()+"-"+e.zeroPad(t.getMonth()+1)+"-"+e.zeroPad(t.getDate()):t},formatDate:function(t){var e=t.toDateString().split(" ");return e[1]+" "+e[2]},isPresent:function(t,e,n){var a=this;if(t instanceof Array){for(var o=t.length-1;o>=0;o--)if(a.isPresent(t[o],e,n))return!0;return!1}var i=a.findDay(t,n);return i&&-1!==i.peopleIds.indexOf(e.id)},findDay:function(t,e){var n=this,a=n.prepDate(e),o=n.sortedDays.find(function(e){return e.date===a&&e.locationId===t.id});return o||(o=n.buildItem("days",{name:[t.id,a].join(","),date:a,locationId:t.id,peopleIds:[]}),n.days.push(o)),o},present:function(t,e,n){var a=this,o=a.prepDate(n),i=a.findDay(t,n),s=!a.isPresent(t,e,o);s?i.peopleIds.push(e.id):i.peopleIds.splice(i.peopleIds.indexOf(e.id),1),a.save(i,i.slug?"peopleIds":void 0)},addLocation:function(){var t=this,e=t.locations.length+1,n=t.buildItem("locations",{name:"Location "+e,peopleIds:[]});t.isAddingLocation=!0,t.locations.push(n),t.save(n,function(){t.isAddingLocation=!1,t.$router.push({name:"locationEdit",params:{id:n.id}})})},addStaff:function(){var t=this,e=t.staff.length+1,n=t.buildItem("staff",{name:"Staff "+e,pin:L()});t.staff.push(n),t.save(n)},isPermitted:function(t,e){return t.permissions=t.permissions||[],-1!==t.permissions.indexOf(e)},togglePermissions:function(t,e){var n=this;n.isPermitted(t,e)?t.permissions.splice(t.permissions.indexOf(e),1):t.permissions.push(e),n.save(t,"permissions")},remove:function(t,e,n,a,o){var i=this;confirm("Are you sure you want to delete this "+n+"?")&&(e._status="attendance-archive",i.save(e,"_status"),a?i.$router.push("/"):o&&i.$router.go(-1))},star:function(t,e){var n=this;n.isStarred(t,e)?t.peopleIds.splice(t.peopleIds.indexOf(e.id),1):t.peopleIds.push(e.id),n.save(t,"peopleIds")},isStarred:function(t,e){return t.peopleIds=t.peopleIds||[],-1!==t.peopleIds.indexOf(e.id)},zeroPad:function(t,e,n){return e=e||2,n=n||"0",t+="",t.length>=e?t:new Array(e-t.length+1).join(n)+t},sortByName:function(t,e){return(""+t.name).localeCompare(e.name,void 0,{numeric:!0})},sortById:function(t,e){return(""+t.id).localeCompare(e.id,void 0,{numeric:!0})},sortByCollection:function(t,e){return(""+t.location.name).localeCompare(e.location.name)},logout:function(){var t=this;confirm("This will wipe all Attendance data off this device. All unsaved changes will be lost. Are you sure you want to log out?")&&(t.resetPin(),u.a.eachSeries(["locations","people","days","staff","unsaved"],function(e,n){t.store.removeItem(e,n)},function(){t.$router.push("/"),window.location.reload()}))}}},N=A,S=(n("b37a"),n("2877")),j=Object(S["a"])(N,o,i,!1,null,null,null),D=j.exports,O=n("8c4f"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Header",{attrs:{app:t.app,title:"Attend"}}),n("div",{staticClass:"content home-content"},[n("div",{staticClass:"location-table"},[n("table",{staticClass:"table"},[n("tbody",[t._l(t.app.sortedLocations,function(e){return n("tr",{key:e.id},[n("td",[n("router-link",{attrs:{to:{name:"location",params:{id:e.id}}}},[n("font-awesome-icon",{attrs:{icon:"location-arrow"}}),t._v("\n                                "+t._s(e.name)+"\n                            ")],1)],1)])}),t.app.sortedLocations.length?t._e():n("tr",[t._m(0)])],2)])]),n("div",{staticClass:"actions-table"},[n("table",{staticClass:"table"},[n("tbody",[n("tr",[n("td",[!t.app.sortedLocations.length||t.app.isPaid?n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.app.addLocation()}}},[n("strong",[n("font-awesome-icon",{attrs:{icon:"location-arrow"}}),t.app.isAddingLocation?n("span",[t._v(" Adding Location...")]):n("span",[t._v(" Add A Location")])],1)]):n("a",{attrs:{href:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=29U2LHYQNAURL",target:"_blank"}},[n("strong",[n("font-awesome-icon",{attrs:{icon:"project-diagram"}}),t._v("\n                                    Upgrade to Add More Locations!\n                                ")],1)])])]),t.app.sortedLocations.length?n("tr",[n("td",[n("router-link",{attrs:{to:"/reports"}},[n("strong",[n("font-awesome-icon",{attrs:{icon:"chart-bar"}}),t._v("\n                                    Reports\n                                ")],1)])],1)]):t._e(),n("tr",[n("td",[n("router-link",{attrs:{to:"/settings"}},[n("strong",[n("font-awesome-icon",{attrs:{icon:"users"}}),t._v("\n                                    Staff\n                                ")],1)])],1)]),n("tr",[n("td",[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.app.logout()}}},[n("font-awesome-icon",{attrs:{icon:"lock"}}),t._v("\n                                Log Out\n                            ")],1)])])])])])])],1)},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("a",{staticClass:"align-center"},[t._v("\n                                You have no locations set!\n                            ")])])}],U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"nav table"},[n("ul",{staticClass:"table-row"},[n("li",{staticClass:"table-cell back-cell"},[t.left?t._t("left"):n("a",{staticStyle:{visibility:"hidden"},attrs:{href:"javascript:;"}},[t._v("\n                    «\n                ")])],2),n("li",{staticClass:"table-cell logo"},[n("a",[t._v(t._s(t.title))])]),n("li",{staticClass:"table-cell back-cell"},[t.right?t._t("right"):n("a",{staticStyle:{visibility:"hidden"},attrs:{href:"javascript:;"}},[t._v("\n                    »\n                ")])],2)])])])},q=[],$={props:["app","back","title","right","left"]},H=$,M=Object(S["a"])(H,U,q,!1,null,null,null),T=M.exports,B={name:"home",props:["app"],components:{Header:T}},z=B,Y=Object(S["a"])(z,E,R,!1,null,null,null),F=Y.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"location"},[n("Header",{attrs:{app:t.app,left:!0,right:!0,title:t.app.selectedLocation.name},scopedSlots:t._u([{key:"left",fn:function(){return[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.app.$router.go(-1)}}},[t._v("\n                «\n            ")])]},proxy:!0},{key:"right",fn:function(){return[n("router-link",{attrs:{to:{name:"locationEdit",params:{id:t.app.selectedLocation.id}}}},[t._v("\n                ✎\n            ")])]},proxy:!0}])}),n("div",{staticClass:"content"},[n("div",{staticClass:"header no-select"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{type:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),t.q.length?n("span",{staticClass:"clear-q active",on:{click:function(e){t.q=""}}},[t._v("×")]):t._e(),t.q.length?t._e():n("span",{class:(t.showAll?"active ":"")+"show-all",on:{click:function(e){t.showAll=!t.showAll}}},[t.showAll?n("span",[t._v("Everyone")]):n("span",[t._v("Regulars")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],attrs:{type:"text",placeholder:"Search or Add..."},domProps:{value:t.q},on:{input:function(e){e.target.composing||(t.q=e.target.value)}}})]),n("table",{staticClass:"table"},[t._m(0),n("tbody",[t._l(t.filteredPeople,function(e){return n("tr",{key:e.id},[n("td",[n("a",{attrs:{href:"javascript:;"},on:{click:function(n){return t.app.star(t.app.selectedLocation,e)}}},[t.app.isStarred(t.app.selectedLocation,e)?n("span",{staticClass:"lock"},[t._v("🔒")]):n("span",[t._v(" ")])])]),n("td",{staticClass:"align-left"},[n("router-link",{attrs:{to:{name:"personEdit",params:{id:e.id}}}},[t._v("\n                            "+t._s(e.name)+"\n                        ")])],1),n("td",{staticClass:"icons"},[n("a",{attrs:{href:"javascript:;"},on:{click:function(n){return t.app.present(t.app.selectedLocation,e,t.date)}}},[t.app.isPresent(t.app.selectedLocation,e,t.date)?n("span",{staticClass:"check"},[t._v("✓")]):n("span",[t._v("×")])])])])}),t.q.length?n("tr",[n("td",{staticClass:"with-padding align-left",attrs:{colspan:"3"}},[t.q.length?n("span",[t.app.sortedPeople.length<25||t.app.isPaid?n("button",{on:{click:function(e){return t.app.addPersonByName(t.app.selectedLocation,t.q,t.date,t.component)}}},[t._v('\n                                Add "'+t._s(t.q)+'"\n                            ')]):n("a",{staticClass:"button",attrs:{href:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=29U2LHYQNAURL",target:"_blank"}},[t._v("\n                                Upgrade to Add More Staff!\n                            ")])]):t._e()])]):t._e(),t.filteredPeople.length?t._e():n("tr",[n("td",{staticClass:"with-padding align-left",attrs:{colspan:"3"}},[n("p",{staticClass:"display-block align-center"},[n("br"),n("br"),t.q.length?n("span",[t._v("\n                                We couldn't find anyone that matches \""+t._s(t.q)+'."\n                            ')]):n("span",[t._v("\n                                Nobody is here!\n                            ")]),t.app.sortedPeople.length?n("span",[n("br"),n("br"),n("a",{staticClass:"button button-gray",attrs:{href:"javascript:;"},on:{click:function(e){t.q="",t.showAll=!0}}},[t._v("\n                                    Show Everyone\n                                ")])]):t._e(),n("br"),n("br")])])])],2),n("tfoot",[n("tr",[n("td"),t._m(1),n("td",{staticClass:"with-padding"},[t._v(t._s(t.total))])])])])])],1)},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"has-checkbox"},[t._v("\n                        Reg\n                    ")]),n("th",{staticClass:"with-padding align-left"},[t._v("\n                        Name\n                    ")]),n("th",{staticClass:"with-padding"},[t._v("\n                        Present\n                    ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"with-padding"},[n("strong",[t._v("Total")])])}],K={name:"location",components:{Header:T},props:["app"],data:function(){var t=this,e=new Date;return{q:"",component:this,date:e.getFullYear()+"-"+t.app.zeroPad(e.getMonth()+1)+"-"+t.app.zeroPad(e.getDate()),transition:void 0,showAll:!1}},computed:{filteredPeople:function(){var t=this,e=t.app.sortedPeople||[],n=t.app.selectedLocation,a=t.q.toLowerCase();return a&&a.length?e.filter(function(t){return-1!==t.name.toLowerCase().indexOf(a)}):e.filter(function(e){return t.showAll||-1!==n.peopleIds.indexOf(e.id)||t.app.isPresent(n,e,t.date)})},total:function(){var t=this;return t.app.sortedPeople.filter(function(e){return t.app.isPresent(t.app.selectedLocation,e,t.date)}).length}}},Q=K,W=Object(S["a"])(Q,G,J,!1,null,null,null),V=W.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"location-edit"},[n("Header",{attrs:{app:t.app,left:!0,title:t.app.selectedLocation.name},scopedSlots:t._u([{key:"left",fn:function(){return[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.app.$router.go(-1)}}},[t._v("\n                «\n            ")])]},proxy:!0}])}),n("div",{staticClass:"content"},[n("div",{staticClass:"field"},[n("label",[t._v("Location Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newName,expression:"newName"}],attrs:{type:"text",autofocus:""},domProps:{value:t.newName},on:{blur:function(e){return t.changeName()},input:function(e){e.target.composing||(t.newName=e.target.value)}}})]),n("div",{staticClass:"field"},[n("button",{staticClass:"full-width button-small button-gray",on:{click:function(e){return t.app.remove(t.app.locations,t.app.selectedLocation,"location",!0)}}},[t._v("\n                Delete This Location\n            ")])])])],1)},Z=[],tt={name:"locationEdit",components:{Header:T},props:["app"],data:function(){return{newName:""}},watch:{"app.selectedLocation":function(){var t=this;t.app.selectedLocation||t.$router.push("/")}},mounted:function(){var t=this;t.newName=t.app.selectedLocation.name},methods:{changeName:function(){var t=this;t.app.selectedLocation.name=t.newName,t.app.save(t.app.selectedLocation,"name")}}},et=tt,nt=Object(S["a"])(et,X,Z,!1,null,null,null),at=nt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"person-edit"},[n("Header",{attrs:{app:t.app,left:!0,title:t.selectedPerson.name},scopedSlots:t._u([{key:"left",fn:function(){return[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.app.$router.go(-1)}}},[t._v("\n                «\n            ")])]},proxy:!0}])}),n("div",{staticClass:"content"},[n("div",{staticClass:"field"},[n("label",[t._v("Person Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newName,expression:"newName"}],attrs:{type:"text",autofocus:""},domProps:{value:t.newName},on:{blur:function(e){return t.changeName()},input:function(e){e.target.composing||(t.newName=e.target.value)}}})]),n("div",{staticClass:"field"},[n("button",{staticClass:"full-width button-small button-gray",on:{click:function(e){return t.app.remove(t.app.people,t.selectedPerson,"person",!1,!0)}}},[t._v("\n                Delete This Person\n            ")])])])],1)},it=[],st={name:"personEdit",components:{Header:T},props:["app"],data:function(){return{newName:""}},computed:{selectedPerson:function(){var t=this;return t.app.people.find(function(e){return e.id+""===t.$route.params.id+""})}},mounted:function(){var t=this;t.newName=t.selectedPerson.name},methods:{changeName:function(){var t=this;t.selectedPerson.name=t.newName,t.app.save(t.selectedPerson,"name")}}},rt=st,lt=Object(S["a"])(rt,ot,it,!1,null,null,null),ct=lt.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reports"},[n("Header",{attrs:{app:t.app,left:!0,title:"Reports"},scopedSlots:t._u([{key:"left",fn:function(){return[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.app.$router.go(-1)}}},[t._v("\n                «\n            ")])]},proxy:!0}])}),n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column third-column"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.startAt,expression:"startAt"}],attrs:{type:"date"},domProps:{value:t.startAt},on:{input:function(e){e.target.composing||(t.startAt=e.target.value)}}})]),t._m(0),n("div",{staticClass:"column third-column"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.endAt,expression:"endAt"}],attrs:{type:"date"},domProps:{value:t.endAt},on:{input:function(e){e.target.composing||(t.endAt=e.target.value)}}})])]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedLocation,expression:"selectedLocation"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selectedLocation=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[t._v("All Locations")]),t._l(t.app.sortedLocations,function(e){return n("option",{key:e.id,domProps:{value:e}},[t._v("\n                    "+t._s(e.name)+"\n                ")])})],2)]),n("div",{staticClass:"columns"},[n("div",{class:"column "+(1===t.dates.length?"half":"third")+"-column"},[n("div",{staticClass:"graph number-graph"},[n("h1",[t._v(t._s(t.allData.peopleIds.length))]),n("p",[t._v("How many people were present?")])])]),n("div",{class:"column "+(1===t.dates.length?"half":"third")+"-column"},[n("div",{staticClass:"graph number-graph"},[n("h1",[t._v(t._s(t.allData.presents))]),n("p",[t._v("How many times were they present?")])])]),1!==t.dates.length?n("div",{staticClass:"column third-column"},[n("div",{staticClass:"graph number-graph"},[n("h1",[t._v(t._s(Math.floor(t.allData.peopleIds.length/t.dates.length)))]),n("p",[t._v("On average, how many presents per location/date?")])])]):t._e()]),t.selectedLocation?n("div",[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",{staticClass:"with-padding align-left"},[t._v("\n                            Name\n                        ")]),t._l(t.dates,function(e){return n("th",{key:"date-heading2-"+e,staticClass:"with-padding"},[t._v("\n                            "+t._s(t.app.formatDate(e))+"\n                        ")])})],2)]),n("tbody",[t.people.length?t._e():n("tr",[n("td",{staticClass:"with-padding",attrs:{colspan:t.dates.length+1}},[t._v("\n                            No information to display.\n                        ")]),n("td",{staticClass:"with-padding"})]),t._l(t.app.sortedPeople,function(e){return n("tr",{key:e.id},[n("td",{staticClass:"with-padding align-left"},[t._v("\n                            "+t._s(e.name)+"\n                        ")]),t._l(t.dates,function(a){return n("td",{key:"people-date-"+a,staticClass:"icons with-padding"},[t.app.isPresent(t.selectedLocation,e,a)?n("span",{staticClass:"check"},[t._v("✓")]):n("span",[t._v("×")])])})],2)})],2),n("tfoot",[n("tr",[n("td",{staticClass:"with-padding"},[t._v("\n                            Total Present\n                        ")]),t._l(t.allData.dates,function(e,a){return n("td",{key:"total-present-"+a,staticClass:"with-padding"},[t._v("\n                            "+t._s(e)+"\n                        ")])})],2)])])]):n("div",[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",{staticClass:"with-padding"}),t._l(t.dates,function(e){return n("th",{key:"heading-"+e,staticClass:"with-padding"},[t._v("\n                            "+t._s(t.app.formatDate(e))+"\n                        ")])})],2)]),n("tbody",t._l(t.allData.locations,function(e){return n("tr",{key:"data-location-"+e.location.id},[n("td",{staticClass:"with-padding align-left"},[t._v("\n                            "+t._s(e.location.name)+"\n                        ")]),t._l(e.dates,function(a){return n("td",{key:"location-heading-"+e.location.id+"-"+a,staticClass:"with-padding"},[t._v("\n                            "+t._s(a)+"\n                        ")])})],2)}),0),n("tfoot",[n("tr",[n("td",{staticClass:"with-padding align-left"},[t._v("\n                            Total Present\n                        ")]),t._l(t.allData.dates,function(e,a){return n("td",{key:"total-"+a,staticClass:"with-padding"},[t._v("\n                            "+t._s(e)+"\n                        ")])})],2)])])])])],1)},dt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column third-column desktop-only"},[n("p",[t._v("to")])])}],ut=n("4ddc");function ft(t){var e=t.substr(0,4),n=t.substr(5,2)-1,a=t.substr(8,2),o=new Date(e,n,a);return o.getFullYear()==e&&o.getMonth()==n&&o.getDate()==a?o:"invalid date"}a["a"].use(ut["a"]);var vt={name:"reports",components:{Header:T},props:["app"],data:function(){var t=this,e=new Date,n=new Date;return e.setDate(e.getDate()-31),{selectedLocation:"",startAt:e.getFullYear()+"-"+t.app.zeroPad(e.getMonth()+1)+"-"+t.app.zeroPad(e.getDate()),endAt:n.getFullYear()+"-"+t.app.zeroPad(n.getMonth()+1)+"-"+t.app.zeroPad(n.getDate())}},computed:{allData:function(){var t,e,n,a,o,i,s,r,l,c=this,p=c.selectedLocation?[c.selectedLocation]:c.app.locations,d=c.app.people,u=c.dates,f={peopleIds:[],presents:0,locations:[],dates:{}};for(r=0;r<u.length;r++)f.dates[c.app.prepDate(u[r])]=0;for(s=p.length-1;s>=0;s--)for(t=p[s],e={location:t,peopleIds:[],presents:0,dates:{}},f.locations.push(e),r=0;r<u.length;r++)for(i=c.app.prepDate(u[r]),n={presents:0,peopleIds:[]},e.dates[i]=0,l=d.length-1;l>=0;l--)a=d[l],o=c.app.isPresent(t,a,i),o&&(f.presents+=1,-1===f.peopleIds.indexOf(a.id)&&f.peopleIds.push(a.id),n.presents+=1,-1===n.peopleIds.indexOf(a.id)&&n.peopleIds.push(a.id),e.presents+=1,e.dates[i]+=1,-1===e.peopleIds.indexOf(a.id)&&e.peopleIds.push(a.id),f.dates[i]+=1);return f.locations=f.locations.sort(c.app.sortByLocationName),f},dates:function(){var t,e=this,n=e.app.sortedPeople,a=e.selectedLocation?e.selectedLocation:e.app.locations,o=ft(e.startAt),i=ft(e.endAt),s=[o];if(!o)return[];while(o<i)for(o=new Date(o),o.setDate(o.getDate()+1),t=n.length-1;t>=0;t--)if(e.app.isPresent(a,n[t],e.app.prepDate(o))){s.push(o);break}return s},people:function(){return this.app.sortedPeople||[]}}},mt=vt,ht=Object(S["a"])(mt,pt,dt,!1,null,null,null),gt=ht.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings"},[n("Header",{attrs:{app:t.app,left:!0,title:"Staff"},scopedSlots:t._u([{key:"left",fn:function(){return[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.app.$router.go(-1)}}},[t._v("\n                «\n            ")])]},proxy:!0}])}),n("div",{staticClass:"content"},[n("div",{staticClass:"field"},[n("table",{staticClass:"table passcodes no-hover"},[t._m(0),n("tbody",t._l(t.app.sortedStaff,function(e){return n("tr",{key:e.id},[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"staff.name"}],attrs:{type:"text",placeholder:"Name"},domProps:{value:e.name},on:{blur:function(n){return t.app.save(e)},input:function(n){n.target.composing||t.$set(e,"name",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.pin,expression:"staff.pin"}],staticClass:"align-center",attrs:{type:"tel",min:"0",max:"9999",maxlength:"4",pattern:"\\d{4}",placeholder:"0000"},domProps:{value:e.pin},on:{blur:function(n){return t.app.save(e,"pin")},input:function(n){n.target.composing||t.$set(e,"pin",n.target.value)}}})]),n("td",{staticClass:"with-padding"},[n("ul",{staticClass:"permissions"},[t._l(t.app.sortedLocations,function(a){return n("li",{key:a.id},[n("label",[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.app.isPermitted(e,a.id)},on:{change:function(n){return t.app.togglePermissions(e,a.id)}}}),t._v("\n                                        "+t._s(a.name)+"\n                                    ")])])}),n("li",[n("label",[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.app.isPermitted(e,"reports")},on:{change:function(n){return t.app.togglePermissions(e,"reports")}}}),t._v("\n                                        Reports\n                                    ")])]),n("li",[n("label",[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.app.isPermitted(e,"admin")},on:{change:function(n){return t.app.togglePermissions(e,"admin")}}}),t._v("\n                                        Admin\n                                    ")])])],2)]),n("td",[n("a",{staticClass:"remove",attrs:{href:"javascript:;"},on:{click:function(n){return t.app.remove(t.app.staff,e,"staff member")}}},[t._v("×")])])])}),0)]),n("br"),!t.app.sortedStaff.length||t.app.isPaid?n("a",{staticClass:"button",attrs:{href:"javascript:;"},on:{click:function(e){return t.app.addStaff()}}},[t._v("\n                + Add Staff\n            ")]):n("a",{staticClass:"button",attrs:{href:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=29U2LHYQNAURL",target:"_blank"}},[t._v("\n                Upgrade to Add More Staff!\n            ")])])])],1)},yt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"with-padding"},[t._v("Name")]),n("th",{staticClass:"with-padding"},[t._v("PIN")]),n("th",{staticClass:"with-padding"},[t._v("Permissions")]),n("th")])])}],bt={name:"analytics",props:["app"],components:{Header:T}},wt=bt,xt=Object(S["a"])(wt,_t,yt,!1,null,null,null),Pt=xt.exports;a["a"].use(O["a"]);var Ct=new O["a"]({mode:"hash",base:"./",routes:[{path:"/",name:"home",component:F,props:!0},{path:"/reports",name:"reports",component:gt,props:!0},{path:"/settings",name:"settings",component:Pt,props:!0},{path:"/people/:id/edit",name:"personEdit",component:ct,props:!0},{path:"/locations/:id/edit",name:"locationEdit",component:at,props:!0},{path:"/locations/:id",name:"location",component:V,props:!0}]}),Lt=n("386f"),It=n.n(Lt),kt=n("ecee"),At=n("c074"),Nt=n("ad3d");kt["c"].add(At["v"],At["l"],At["b"],At["k"],At["g"],At["u"],At["d"],At["o"],At["a"],At["w"],At["x"],At["i"],At["e"],At["m"],At["j"],At["t"],At["f"],At["h"],At["s"],At["r"],At["c"],At["y"],At["p"],At["n"],At["q"]),a["a"].config.productionTip=!1,a["a"].use(It.a,{router:Ct}),a["a"].component("font-awesome-icon",Nt["a"]),new a["a"]({router:Ct,render:function(t){return t(D)}}).$mount("#app")},a695:function(t,e,n){},b37a:function(t,e,n){"use strict";var a=n("a695"),o=n.n(a);o.a}});
//# sourceMappingURL=app.c387d3a0.js.map