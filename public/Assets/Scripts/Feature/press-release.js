/* This is a GULP generated file, DO NOT edit directly. */!function(e){var t={};function i(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t){function i(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(){var e=window.FNB.Utils;e.querySelector(".press-release-navigation .swiper-container").forEach((function(e){new window.FNB.Swiper(e,{slidesPerView:5,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",breakpoints:{600:{slidesPerView:3.5,spaceBetween:10,centeredSlides:!1}}})})),e.querySelector(".press-release-listing").forEach((function(e){new s(e)}))}var s=function(){function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=window.FNB.Utils;this.currentPage=1,this.el=t,this.mode="media-releases"===this.el.getAttribute("data-mode")?"alt":"normal",this.closeModalClick=this.closeModalClick.bind(this),this.closeModal=this.closeModal.bind(this),this.clearFiltersClick=this.clearFiltersClick.bind(this),this.clearFilters=this.clearFilters.bind(this),this.getPressReleases=this.getPressReleases.bind(this),this.filterChange=this.filterChange.bind(this),this.filterSubmit=this.filterSubmit.bind(this),this.openModalClick=this.openModalClick.bind(this),this.openModal=this.openModal.bind(this),this.clickToGoToPage=this.clickToGoToPage.bind(this),this.clickToGoToPrevPage=this.clickToGoToPrevPage.bind(this),this.clickToGoToNextPage=this.clickToGoToNextPage.bind(this),this.clickToSetYear=this.clickToSetYear.bind(this),this.goToPage=this.goToPage.bind(this),this.setYear=this.setYear.bind(this),this.setPage=this.setPage.bind(this),this.gotPressReleases=this.gotPressReleases.bind(this),this.currentYear=r.querySelector(".year-link--active",this.el)[0].getAttribute("data-fnb-pr-year"),r.querySelector(".year-link",this.el).forEach((function(e){e.addEventListener("click",i.clickToSetYear)})),this.filtercounttext=this.el.querySelector("[data-fnb-press-release-listing-applied-filter-count-selector]");var s=this.el.querySelector("[data-fnb-press-release-filter-form-selector]");null!=s&null!=s&&(s.addEventListener("submit",this.filterSubmit),this.filterCheckboxes=r.querySelector("[data-fnb-press-release-listing-filter-checkbox-selector]",s),this.el.querySelector("[data-fnb-press-release-listing-clear-selector]").addEventListener("click",this.clearFiltersClick),this.filterCheckboxes.forEach((function(e){e.addEventListener("change",i.filterChange)}))),this.addPageClicks();var a=this.el.querySelector("[data-fnb-press-release-listing-mobile-filter-modal-trigger-selector]");null!=a&&null!=a&&(this.modal=document.getElementById(a.getAttribute("aria-controls")),this.modal.querySelector("[data-fnb-press-release-filter-form-selector]").addEventListener("submit",this.filterSubmit),this.mobileFilterCheckboxes=r.querySelector("[data-fnb-press-release-listing-filter-checkbox-selector]",this.modal),null!=this.mobileFilterCheckboxes&&null!=this.mobileFilterCheckboxes&&this.mobileFilterCheckboxes.forEach((function(e){e.addEventListener("change",i.filterChange)})),a.addEventListener("click",this.openModalClick),this.modal.querySelector("[data-fnb-press-release-listing-clear-selector]").addEventListener("click",this.clearFiltersClick))}var t,r;return t=e,(r=[{key:"clearFiltersClick",value:function(e){return e.preventDefault(),this.clearFilters(),this.closeModal(),!1}},{key:"clearFilters",value:function(){this.filterCheckboxes.forEach((function(e){return e.checked=!1})),this.mobileFilterCheckboxes.forEach((function(e){return e.checked=!1})),this.getPressReleases()}},{key:"filterChange",value:function(e){var t=window.FNB.Utils,i=e.currentTarget;this.currentPage=1,t.querySelector('[data-feature-filter-id="'.concat(i.getAttribute("data-feature-filter-id"),'"]')).forEach((function(t){t.checked=e.currentTarget.checked})),"desktop"===i.getAttribute("data-fnb-press-release-listing-filter-checkbox-selector-mode")&&this.getPressReleases()}},{key:"openModalClick",value:function(e){e.preventDefault();var t=e.currentTarget.getAttribute("aria-controls"),i=document.getElementById(t);return this.openModal(i),!1}},{key:"openModal",value:function(e){e.querySelector("[data-fnb-modal-close-selector]").addEventListener("click",this.closeModalClick),e.classList.add("dialog--entering-from-right"),e.showModal()}},{key:"closeModalClick",value:function(e){this.closeModal()}},{key:"closeModal",value:function(){var e=this;this.modal.close(),this.modal.querySelector("[data-fnb-modal-close-selector]").removeEventListener("click",this.closeModalClick),setTimeout((function(){e.modal.close(),e.modal.classList.remove("dialog--leaving"),e.modal.classList.remove("dialog--entering-from-right")}),200)}},{key:"filterSubmit",value:function(e){return e.preventDefault(),this.getPressReleases(),this.closeModal(),!1}},{key:"removePageClicks",value:function(){var e=this;window.FNB.Utils.querySelector(".pagination__page",this.el).forEach((function(t){t.removeEventListener("click",e.clickToGoToPage)}));try{this.el.querySelector(".pagination__next-or-prev--prev").removeEventListener("click",this.clickToGoToPrevPage)}catch(e){}try{this.el.querySelector(".pagination__next-or-prev--next").removeEventListener("click",this.clickToGoToNextPage)}catch(e){}}},{key:"addPageClicks",value:function(){var e=this;window.FNB.Utils.querySelector(".pagination__page",this.el).forEach((function(t){t.addEventListener("click",e.clickToGoToPage)}));try{this.el.querySelector(".pagination__next-or-prev--prev").addEventListener("click",this.clickToGoToPrevPage)}catch(e){}try{this.el.querySelector(".pagination__next-or-prev--next").addEventListener("click",this.clickToGoToNextPage)}catch(e){}}},{key:"clickToGoToPrevPage",value:function(e){return e.preventDefault(),this.goToPage(this.currentPage-1),!1}},{key:"clickToGoToNextPage",value:function(e){e.preventDefault();var t=Number(this.currentPage)+Number(1);return this.goToPage(t),!1}},{key:"clickToGoToPage",value:function(e){return e.preventDefault(),this.goToPage(e.currentTarget.getAttribute("data-fnb-pr-page")),!1}},{key:"clickToSetYear",value:function(e){return e.preventDefault(),this.setYear(e.currentTarget.getAttribute("data-fnb-pr-year")),!1}},{key:"goToPage",value:function(e){parseInt(e,10),this.setPage(e)}},{key:"setYear",value:function(e){e!==this.currentYear&&(this.el.querySelector('[data-fnb-pr-year="'.concat(this.currentYear,'"]')).classList.remove("year-link--active"),this.currentYear=e,this.el.querySelector('[data-fnb-pr-year="'.concat(this.currentYear,'"]')).classList.add("year-link--active"),this.currentPage=1,this.loading(),this.getPressReleases())}},{key:"setPage",value:function(e){e!==this.currentPage&&null!=e&&(this.el.querySelector('[data-fnb-pr-page="'.concat(this.currentPage,'"]')).classList.remove("active"),this.currentPage=e,this.el.querySelector('[data-fnb-pr-page="'.concat(this.currentPage,'"]')).classList.add("active"),this.loading(),this.getPressReleases())}},{key:"getPressReleases",value:function(){var e=new XMLHttpRequest,t=[];this.filterCheckboxes&&(this.filterCheckboxes.forEach((function(e){e.checked&&t.push(e.getAttribute("data-feature-filter-id"))})),this.filtercounttext.innerHTML=t.length);var i=this.currentYear,r=this.currentPage,s=document.querySelector('[name="pressrelease-id"]').value,a="normal"===this.mode?{year:i,page:r,filters:t,pressRelease:s}:{year:i,mediaReleaseGroupId:s};e.addEventListener("readystatechange",this.gotPressReleases,!1);var n="normal"===this.mode?"/PressRelease/GetPressReleasesFiltered":"/Teasers/GetMediaReleaseListingForYear";e.open("POST","".concat("/fnbapi").concat(n),!0),e.setRequestHeader("Content-Type","application/json;charset=UTF-8");var l="";null==a&&null==a||null==a.json&&null==a.json||(l=a.json.__RequestVerificationToken),null!=l&&null!=l&&""!=l||(l=document.querySelector("input[name='__RequestVerificationToken']").value),e.setRequestHeader("__RequestVerificationToken",l),e.send(JSON.stringify(a))}},{key:"gotPressReleases",value:function(e){if(4===e.target.readyState&&(404===e.target.status||200===e.target.status)){this.loading(!1),window.scroll(0,document.querySelector(".press-release-navigation").offsetTop),this.removePageClicks();var t=e.target.responseText;this.whereToInject="normal"===this.mode?this.el.querySelector(".press-releases"):this.el.querySelector(".press-releases__listing");var i=this.whereToInject.previousElementSibling;this.whereToInject.remove(),i.insertAdjacentHTML("afterend",t),this.addPageClicks(),e.target.removeEventListener("readystatechange",this.gotPressReleases)}}},{key:"loading",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.el.classList;return e?t.add("press-release-listing--loading"):t.remove("press-release-listing--loading")}}])&&i(t.prototype,r),e}();window.FNB&&window.FNB.Utils?r():(window.FNB.funcsToCallOnLoad||(window.FNB.funcsToCallOnLoad=[]),window.FNB.funcsToCallOnLoad.push((function(){r()})))}]);