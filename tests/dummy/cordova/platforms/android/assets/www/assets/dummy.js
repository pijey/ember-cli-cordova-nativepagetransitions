"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dummyConfigEnvironment) {

  var name = _dummyConfigEnvironment['default'].APP.name;
  var version = _dummyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('dummy/components/cdv-nav-bar', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'header'
  });
});
define("dummy/controllers/about", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Controller.extend({
		backTransitionOptions: {
			"direction": "left", // 'left|right|up|down', default 'right' (Android currently only supports left and right)
			"duration": 600 }
	});
});
// in milliseconds (ms), default 400
define("dummy/controllers/application", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Controller.extend({
		aboutTransitionOptions: {
			"direction": "right", // 'left|right|up|down', default 'right' (Android currently only supports left and right)
			"duration": 600 }
	});
});
// in milliseconds (ms), default 400
define('dummy/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/ember-cli-cordova-nativepagetransitions/tests/modules/ember-cli-cordova-nativepagetransitions/initializers/back-action.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-cli-cordova-nativepagetransitions/initializers');
  QUnit.test('modules/ember-cli-cordova-nativepagetransitions/initializers/back-action.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-cli-cordova-nativepagetransitions/initializers/back-action.js should pass jshint.');
  });
});
define('dummy/ember-cli-cordova-nativepagetransitions/tests/modules/ember-cli-cordova-nativepagetransitions/initializers/cordova.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-cli-cordova-nativepagetransitions/initializers');
  QUnit.test('modules/ember-cli-cordova-nativepagetransitions/initializers/cordova.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-cli-cordova-nativepagetransitions/initializers/cordova.js should pass jshint.');
  });
});
define('dummy/ember-cli-cordova-nativepagetransitions/tests/modules/ember-cli-cordova-nativepagetransitions/initializers/npt.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-cli-cordova-nativepagetransitions/initializers');
  QUnit.test('modules/ember-cli-cordova-nativepagetransitions/initializers/npt.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-cli-cordova-nativepagetransitions/initializers/npt.js should pass jshint.');
  });
});
define('dummy/ember-cli-cordova-nativepagetransitions/tests/modules/ember-cli-cordova-nativepagetransitions/utils/cordova-event-proxy.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - modules/ember-cli-cordova-nativepagetransitions/utils');
  QUnit.test('modules/ember-cli-cordova-nativepagetransitions/utils/cordova-event-proxy.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-cli-cordova-nativepagetransitions/utils/cordova-event-proxy.js should pass jshint.');
  });
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dummyConfigEnvironment['default'].APP.name, _dummyConfigEnvironment['default'].APP.version)
  };
});
define('dummy/initializers/back-action', ['exports', 'ember-cli-cordova-nativepagetransitions/initializers/back-action'], function (exports, _emberCliCordovaNativepagetransitionsInitializersBackAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliCordovaNativepagetransitionsInitializersBackAction['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberCliCordovaNativepagetransitionsInitializersBackAction.initialize;
    }
  });
});
define('dummy/initializers/cordova', ['exports', 'ember-cli-cordova-nativepagetransitions/initializers/cordova'], function (exports, _emberCliCordovaNativepagetransitionsInitializersCordova) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliCordovaNativepagetransitionsInitializersCordova['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberCliCordovaNativepagetransitionsInitializersCordova.initialize;
    }
  });
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/in-app-livereload', ['exports', 'dummy/config/environment', 'ember-cli-cordova/initializers/in-app-livereload'], function (exports, _dummyConfigEnvironment, _emberCliCordovaInitializersInAppLivereload) {

  var inAppReload = _emberCliCordovaInitializersInAppLivereload['default'].initialize;

  var initialize = function initialize(container, app) {
    if (typeof cordova === 'undefined' || _dummyConfigEnvironment['default'].environment !== 'development' || _dummyConfigEnvironment['default'].cordova && (!_dummyConfigEnvironment['default'].cordova.liveReload || !_dummyConfigEnvironment['default'].cordova.liveReload.enabled)) {
      return;
    }

    return inAppReload(container, app, _dummyConfigEnvironment['default']);
  };

  exports.initialize = initialize;
  exports['default'] = {
    name: 'cordova:in-app-livereload',
    initialize: initialize
  };
});
/* globals cordova */
define('dummy/initializers/npt', ['exports', 'ember-cli-cordova-nativepagetransitions/initializers/npt'], function (exports, _emberCliCordovaNativepagetransitionsInitializersNpt) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliCordovaNativepagetransitionsInitializersNpt['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberCliCordovaNativepagetransitionsInitializersNpt.initialize;
    }
  });
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route("index", { path: "/" });
    this.route("about", { path: "/about" });
    this.route("page-1", { path: "/page-1" });
    this.route("page-2", { path: "/page-2" });
    this.route("page-3", { path: "/page-3" });
  });

  exports['default'] = Router;
});
define("dummy/routes/about", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({});
});
define("dummy/routes/index", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({});
});
define("dummy/routes/page-1", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({});
});
define("dummy/routes/page-2", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({});
});
define("dummy/routes/page-3", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({});
});
define("dummy/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/about.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("About");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, placeat esse quisquam, alias sunt nam facilis omnis enim veritatis maiores soluta nostrum? Iste suscipit distinctio eveniet quaerat reprehenderit odio nemo.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "href", "#");
        var el2 = dom.createTextNode("Back");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [4]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["element", "action", ["back", "flip", ["get", "backTransitionOptions", ["loc", [null, [3, 35], [3, 56]]]]], [], ["loc", [null, [3, 12], [3, 58]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "href", "#");
        var el2 = dom.createTextNode("Back");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(fragment, [4]);
        var morphs = new Array(6);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [5]), 0, 0);
        morphs[4] = dom.createMorphAt(dom.childAt(element1, [7]), 0, 0);
        morphs[5] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        return morphs;
      },
      statements: [["element", "action", ["back"], [], ["loc", [null, [2, 12], [2, 29]]]], ["inline", "link-to", ["About", "about"], ["transitionType", "flip", "transitionOptions", ["subexpr", "@mut", [["get", "aboutTransitionOptions", ["loc", [null, [4, 71], [4, 93]]]]], [], []]], ["loc", [null, [4, 5], [4, 95]]]], ["inline", "link-to", ["Page 1", "page-1"], [], ["loc", [null, [5, 5], [5, 34]]]], ["inline", "link-to", ["Page 2", "page-2"], [], ["loc", [null, [6, 5], [6, 34]]]], ["inline", "link-to", ["Page 3", "page-3"], [], ["loc", [null, [7, 5], [7, 34]]]], ["content", "outlet", ["loc", [null, [9, 0], [9, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cdv-generic-nav-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "dummy/templates/cdv-generic-nav-bar.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element2, 'class');
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["icon", " ", ["subexpr", "-bind-attr-class", [["get", "nav.leftButton.icon", []], "icon"], [], []]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/cdv-generic-nav-bar.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element3);
          morphs[1] = dom.createMorphAt(element3, 1, 1);
          morphs[2] = dom.createMorphAt(element3, 3, 3);
          return morphs;
        },
        statements: [["element", "action", ["leftButton"], [], ["loc", [null, [2, 10], [2, 33]]]], ["block", "if", [["get", "nav.leftButton.icon", ["loc", [null, [3, 10], [3, 29]]]]], [], 0, null, ["loc", [null, [3, 4], [5, 11]]]], ["content", "nav.leftButton.text", ["loc", [null, [6, 4], [6, 27]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/cdv-generic-nav-bar.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h1");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "nav.title.text", ["loc", [null, [12, 4], [12, 22]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 4
              },
              "end": {
                "line": 20,
                "column": 4
              }
            },
            "moduleName": "dummy/templates/cdv-generic-nav-bar.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("i");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["icon", " ", ["subexpr", "-bind-attr-class", [["get", "nav.rightButton.icon", []], "icon"], [], []]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 0
            },
            "end": {
              "line": 23,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/cdv-generic-nav-bar.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          morphs[2] = dom.createMorphAt(element1, 3, 3);
          return morphs;
        },
        statements: [["element", "action", ["rightButton"], [], ["loc", [null, [17, 10], [17, 34]]]], ["block", "if", [["get", "nav.rightButton.icon", ["loc", [null, [18, 10], [18, 30]]]]], [], 0, null, ["loc", [null, [18, 4], [20, 11]]]], ["content", "nav.rightButton.text", ["loc", [null, [21, 4], [21, 28]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cdv-generic-nav-bar.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "nav.leftButton.text", ["loc", [null, [1, 6], [1, 25]]]]], [], 0, null, ["loc", [null, [1, 0], [8, 7]]]], ["block", "if", [["get", "nav.title.text", ["loc", [null, [10, 6], [10, 20]]]]], [], 1, null, ["loc", [null, [10, 0], [14, 7]]]], ["block", "if", [["get", "nav.rightButton.text", ["loc", [null, [16, 6], [16, 26]]]]], [], 2, null, ["loc", [null, [16, 0], [23, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("dummy/templates/components/cdv-nav-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/cdv-nav-bar.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("Accueil");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/page-1", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 230
          }
        },
        "moduleName": "dummy/templates/page-1.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "href", "#");
        var el2 = dom.createTextNode("Back");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("Page 1");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, placeat esse quisquam, alias sunt nam facilis omnis enim veritatis maiores soluta nostrum? Iste suscipit distinctio eveniet quaerat reprehenderit odio nemo.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["element", "action", ["back"], [], ["loc", [null, [1, 12], [1, 29]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/page-2", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 230
          }
        },
        "moduleName": "dummy/templates/page-2.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("Page 2");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, placeat esse quisquam, alias sunt nam facilis omnis enim veritatis maiores soluta nostrum? Iste suscipit distinctio eveniet quaerat reprehenderit odio nemo.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/page-3", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 230
          }
        },
        "moduleName": "dummy/templates/page-3.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("Page 3");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, placeat esse quisquam, alias sunt nam facilis omnis enim veritatis maiores soluta nostrum? Iste suscipit distinctio eveniet quaerat reprehenderit odio nemo.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-cli-cordova-nativepagetransitions","version":"0.0.0+237f7bac"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map