"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default});(0,n.default)(i,a.default.modulePrefix)
var l=i
e.default=l}),define("dummy/components/sanitize-html",["exports","ember-cli-sanitize-html/components/sanitize-html"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/index",["exports","ember-cli-sanitize-html"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var a,i=t.default.exportApplicationGlobal
a="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),n[a]||(n[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var a={name:"export-application-global",initialize:n}
e.default=a}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){})
var a=n
e.default=a}),define("dummy/routes/application",["exports","ember-cli-sanitize-html"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Route.extend({setupController:function(){this._super.apply(this,arguments)
var e="<script>123<\/script><div>abc</div>",n=(0,t.default)(e)
console.log("Value:",e),console.log("Sanitized:",n),this.controller.set("value",e)}})
e.default=n}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"AmWMGP+b",block:'{"symbols":["sanitizedValue","sanitizedValue"],"statements":[[7,"h2"],[11,"id","title"],[9],[0,"Ember CLI Sanitize HTML"],[10],[0,"\\n\\n"],[7,"h3"],[9],[0,"Enter Value"],[10],[0,"\\n"],[1,[27,"textarea",null,[["value","cols","rows"],[[23,["value"]],100,10]]],false],[0,"\\n\\n"],[7,"h3"],[9],[0,"Sanitized Inline"],[10],[0,"\\n"],[1,[27,"sanitize-html",null,[["value"],[[23,["value"]]]]],false],[0,"\\n\\n"],[7,"h3"],[9],[0,"Raw Inline"],[10],[0,"\\n"],[1,[27,"sanitize-html",null,[["value","raw"],[[23,["value"]],true]]],false],[0,"\\n\\n"],[7,"h3"],[9],[0,"Sanitized Block Params"],[10],[0,"\\n"],[4,"sanitize-html",null,[["value"],[[23,["value"]]]],{"statements":[[0,"  "],[1,[22,2,[]],false],[0,"\\n"]],"parameters":[2]},null],[0,"\\n"],[7,"h3"],[9],[0,"Raw Block Params"],[10],[0,"\\n"],[4,"sanitize-html",null,[["value"],[[23,["value"]]]],{"statements":[[0,"  "],[1,[22,1,[]],true],[0,"\\n"]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})
e.default=t}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
