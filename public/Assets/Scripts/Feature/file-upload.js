/* This is a GULP generated file, DO NOT edit directly. */!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=t,this.uploadFile=this.uploadFile.bind(this),this.uploadError=this.uploadError.bind(this),this.uploadComplete=this.uploadComplete.bind(this),this.main=document.querySelector(".main"),this.form.addEventListener("submit",this.uploadFile)}var t,n;return t=e,(n=[{key:"uploadFile",value:function(e){if(void 0===window.FormData);else{e.preventDefault();for(var t=document.getElementById("fileUpload"),r=t.getAttribute("data-action"),n=document.getElementById("fileInput"),a=t.getAttribute("data-settingId"),i=t.getAttribute("data-lengthMessage"),o=t.getAttribute("data-maxLength"),u=t.getAttribute("data-trackerId"),l=new FormData,d=1048576*o,s=0;s<n.files.length;s+=1){if(n.files[s].size>=d)return this.fileSizeLimitReached(i),!1;l.append(n.files[s],n.files[s]),l.append(n.files[s].name,n.files[s],n.files[s].name)}l.append("settingId",a),u&&l.append("trackerId",u);var f="".concat("/fnbapi/formsservice/").concat(r),p=new XMLHttpRequest;p.open("POST",f,!0);var c=document.querySelector("input[name='__RequestVerificationToken']").value;p.setRequestHeader("__RequestVerificationToken",c),p.addEventListener("readystatechange",this.uploadComplete,!1),p.addEventListener("error",this.uploadError,!1),p.send(l)}}},{key:"uploadError",value:function(e){var t=document.getElementById("fileUpload").getAttribute("data-error");document.getElementById("file-upload-result-wrapper").innerHTML=t}},{key:"uploadComplete",value:function(e){if(4===e.currentTarget.readyState)if(200===e.currentTarget.status){var t=JSON.parse(e.currentTarget.responseText);e.currentTarget.removeEventListener("readystatechange",this.uploadComplete),document.getElementById("file-upload-result-wrapper").outerHTML=t}else this.uploadError(e)}},{key:"fileSizeLimitReached",value:function(e){return document.getElementById("file-upload-result-wrapper").innerText=e,!1}}])&&r(t.prototype,n),e}();document.getElementById("fileUpload")&&new n(document.querySelector(".file-upload-form"))}]);