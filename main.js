(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedCard=r,this._renderer=o,this._container=document.querySelector(n)}var n,r;return n=t,(r=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"renderCard",value:function(){var t=this;this._renderedCard.forEach((function(e){t._renderer(e)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,u(r.key),r)}}function i(t,e,n){return(e=u(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===r(e)?e:String(e)}var c=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.disabled=!0):(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.disabled=!1)})),i(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),i(this,"_showInputError",(function(t,e){var n=r._form.querySelector(".".concat(t.id,"-error"));t.classList.add(r._inputErrorClass),n.textContent=e})),i(this,"closeValidForm",(function(){r._inputList.forEach((function(t){r._hideInputError(t)})),r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.disabled=!0})),i(this,"_hideInputError",(function(t){var e=r._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._inputErrorClass),e.textContent=""})),i(this,"_isValid",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t,t.validationMessage)})),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popap=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popap.classList.add("popup_opened"),this._handleEscClose()}},{key:"close",value:function(){this._popap.classList.remove("popup_opened"),document.removeEventListener("keydown",this._keydown)}},{key:"_handleEscClose",value:function(){var t=this;document.addEventListener("keydown",this._keydown=function(e){"Escape"===e.key&&t.close()})}},{key:"setEventListeners",value:function(){var t=this;this._popap.querySelector(".button-close").addEventListener("click",this._clickClose=function(){t.close()}),this._popap.addEventListener("click",this._clickOwer=function(e){e.target===e.currentTarget&&t.close()})}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=m(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},y.apply(this,arguments)}function m(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function v(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(r);if(o){var n=h(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return v(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._fotoPopup=e._popap.querySelector(".popup-foto__foto"),e._nameFotoPopup=e._popap.querySelector(".popup-foto__name-foto"),e}return e=u,(n=[{key:"open",value:function(t,e){y(h(u.prototype),"open",this).call(this),this._fotoPopup.src=t,this._nameFotoPopup.textContent=e,this._fotoPopup.alt=e}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=k(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},g.apply(this,arguments)}function k(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function j(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(o){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return j(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popap.querySelector(".popup__form"),e._seveBtn=e._popap.querySelector(".popup__save-button"),e}return e=u,(n=[{key:"setSubmitHandler",value:function(t){this._handleSubmitHandler=t}},{key:"setEventListeners",value:function(){var t=this;g(E(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitHandler(),t._seveBtn.textContent="Сохранение..."}))}},{key:"close",value:function(){var t=this;g(E(u.prototype),"close",this).call(this),setTimeout((function(){t._seveBtn.textContent="Сохранить"}),1e3)}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var L=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=n,this.headers=r}var e,n;return e=t,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"addServerUserInfo",value:function(t){var e=t.name,n=t.about;return fetch("https://nomoreparties.co/v1/cohort-58/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"editInfoProfil",value:function(){return fetch("https://nomoreparties.co/v1/cohort-58/users/me",{headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"addServerUserAvatar",value:function(t){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:t})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"addNewCard",value:function(t){var e=t.nameFoto,n=t.link;return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteImg",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"toggleLike",value:function(t,e){return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:e,headers:this.headers,body:JSON.stringify({likes:{name:"artem",about:"man"}})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),T=(document.querySelector(".button-close_tepe_profile"),document.querySelector(".button-close"),document.querySelector(".profile__edit-button")),q=document.querySelector(".profile__add-button"),U=document.querySelector(".popup__form_type_profile"),R=document.querySelector(".popup__form_type_elements"),I=document.querySelector(".popup__form_type_avatar"),x=U.querySelector(".popup__info-text_type_name"),B=U.querySelector(".popup__info-text_type_job"),F=document.querySelector(".profile__conteiner"),V=new d(".popup-foto");V.setEventListeners();var D=new P(".popup_type_delete");D.setEventListeners();var A=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-58",headers:{authorization:"83664f83-845b-444d-96ac-5e42c57d9b46","Content-Type":"application/json"}});function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}var J=function(){function t(e,n,r){var o=r.handleCardClick,i=r.handleDEliteClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._item=e,this._name=e.name,this._link=e.link,this._templateSelector=n,this._handleCardClick=o,this._handleDEliteClick=i}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._copyElementFotoTemplate=this._element.querySelector(".element__foto"),this._element.querySelector(".element__name-foto").textContent=this._name,this._copyElementFotoTemplate.src=this._link,this._copyElementFotoTemplate.alt=this._name,this._buttonLike=this._element.querySelector(".element__like"),this._item.likes.find((function(t){return"0fd71b3fe64db14c2991b773"==t._id}))&&this._buttonLike.classList.add("element__like_active"),this._likeCounter=this._element.querySelector(".element__like-counter"),0!==this._item.likes.length&&(this._likeCounter.textContent=this._item.likes.length),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._buttonLike.addEventListener("click",this._addLikeRemove=function(){t._addLike()}),this._element.querySelector(".element__delete").addEventListener("click",(function(e){D.open(),D.setSubmitHandler((function(){A.deleteImg(t._item._id).then((function(){t._deleteFoto()})).catch((function(t){console.log(t)})),D.close()}))})),this._copyElementFotoTemplate.addEventListener("click",(function(){return t._handleCardClick(t._link,t._name)}))}},{key:"_addLike",value:function(){var t=this;0!=this._item.likes.length&&this._item.likes.find((function(t){return"0fd71b3fe64db14c2991b773"==t._id}))?A.toggleLike(this._item._id,"DELETE").then((function(e){t._buttonLike.classList.remove("element__like_active"),t._lakesLenght(e)})).catch((function(t){console.log(t)})):A.toggleLike(this._item._id,"PUT").then((function(e){t._buttonLike.classList.add("element__like_active"),t._lakesLenght(e)})).catch((function(t){console.log(t)}))}},{key:"_lakesLenght",value:function(t){this._item=t,this._likeCounter.textContent=t.likes.length}},{key:"_deleteFoto",value:function(){this._element.remove(),this._element=null}}])&&H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),z={formSelector:".popup__container",inputSelector:".popup__info-text",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__info-text_type_error",errorClass:"popup__error_visible"};function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}function K(){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=Q(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},K.apply(this,arguments)}function Q(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Y(t)););return t}function W(t,e){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},W(t,e)}function X(t,e){if(e&&("object"===M(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function Y(t){return Y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Y(t)}var Z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&W(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Y(r);if(o){var n=Y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return X(this,t)});function u(t,e){var n,r=e.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitForm=r,n._form=n._popap.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__info-text"),n._seveBtn=n._popap.querySelector(".popup__save-button"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){return t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;K(Y(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submit=function(e){e.preventDefault(),t._submitForm(t._getInputValues()),t._seveBtn.textContent="Сохранение..."})}},{key:"close",value:function(){var t=this;K(Y(u.prototype),"close",this).call(this),this._form.reset(),setTimeout((function(){t._seveBtn.textContent="Сохранить"}),1e3)}}])&&G(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function tt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==$(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===$(o)?o:String(o)),r)}var o}var et=function(){function t(e){var n=e.name,r=e.job,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameUser=document.querySelector(n),this._jobUser=document.querySelector(r),this._avatarUser=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameUser.textContent,job:this._jobUser.textContent}}},{key:"setUserInfo",value:function(t,e){this._nameUser.textContent=t,this._jobUser.textContent=e}},{key:"setUserAvatar",value:function(t){this._avatarUser.src=t}}])&&tt(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),nt=new et({name:".profile__title",job:".profile__subtitl",avatar:".profile__avatar"});A.editInfoProfil().then((function(t){nt.setUserInfo(t.name,t.about),nt.setUserAvatar(t.avatar)})).catch((function(t){console.log(t)}));var rt=new Z(".popup_type_avatar",{submitForm:function(t){var e=t.linkAvatar;A.addServerUserAvatar(e).then((function(t){nt.setUserAvatar(t.avatar),rt.close()})).catch((function(t){console.log(t)}))}}),ot=new Z(".popup_type_profile",{submitForm:function(t){var e=t.name,n=t.job;A.addServerUserInfo({name:e,about:n}).then((function(t){nt.setUserInfo(t.name,t.about),ot.close()})).catch((function(t){console.log(t)}))}}),it=new Z(".popup_type_elements",{submitForm:function(t){var e=t.nameFoto,n=t.link;A.addNewCard({nameFoto:e,link:n}).then((function(t){document.querySelector(".elements").prepend(ut(t,"#elements")),it.close()})).catch((function(t){console.log(t)}))}});function ut(t,e){var n=new J(t,e,{handleCardClick:function(t,e){V.open(t,e)},handleDEliteClick:function(t){}}).generateCard();return"0fd71b3fe64db14c2991b773"!==t.owner._id&&n.querySelector(".element__delete").remove(),n}A.getInitialCards().then((function(t){ct(t)})).catch((function(t){console.log(t)}));var ct=function(t){var e=new n({items:t,renderer:function(t){e.addItem(ut(t,"#elements"))}},".elements");e.renderCard()};rt.setEventListeners(),ot.setEventListeners(),it.setEventListeners(),F.addEventListener("click",(function(){rt.open(),at.closeValidForm()})),q.addEventListener("click",(function(){it.open(),st.closeValidForm()})),T.addEventListener("click",(function(){ot.open();var t=nt.getUserInfo();x.value=t.name,B.value=t.job,lt.closeValidForm()}));var at=new c(z,I),lt=new c(z,U),st=new c(z,R);at.enableValidation(),lt.enableValidation(),st.enableValidation()})();