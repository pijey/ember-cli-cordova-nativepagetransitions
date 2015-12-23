define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/controllers/about.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/about.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/about.js should pass jshint.');
  });
});
define('dummy/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _dummyTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, _emberResolver, _dummyConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/routes/about.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/about.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass jshint.');
  });
});
define('dummy/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('dummy/tests/routes/page-1.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/page-1.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/page-1.js should pass jshint.');
  });
});
define('dummy/tests/routes/page-2.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/page-2.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/page-2.js should pass jshint.');
  });
});
define('dummy/tests/routes/page-3.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/page-3.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/page-3.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('dummy/tests/unit/helpers/npt-link-to-test', ['exports', 'dummy/helpers/npt-link-to', 'qunit'], function (exports, _dummyHelpersNptLinkTo, _qunit) {

  (0, _qunit.module)('Unit | Helper | npt link to');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _dummyHelpersNptLinkTo.nptLinkTo)(42);
    assert.ok(result);
  });
});
define('dummy/tests/unit/helpers/npt-link-to-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/npt-link-to-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/npt-link-to-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/initializers/add-back-action-application-route-test', ['exports', 'ember', 'dummy/initializers/add-back-action-application-route', 'qunit'], function (exports, _ember, _dummyInitializersAddBackActionApplicationRoute, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | add back action application route', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _dummyInitializersAddBackActionApplicationRoute['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('dummy/tests/unit/initializers/add-back-action-application-route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/initializers');
  QUnit.test('unit/initializers/add-back-action-application-route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/add-back-action-application-route-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/initializers/cordova-test', ['exports', 'ember', 'dummy/initializers/cordova', 'qunit'], function (exports, _ember, _dummyInitializersCordova, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | cordova', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _dummyInitializersCordova['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('dummy/tests/unit/initializers/cordova-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/initializers');
  QUnit.test('unit/initializers/cordova-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/cordova-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/initializers/npt-link-component-test', ['exports', 'ember', 'dummy/initializers/npt-link-component', 'qunit'], function (exports, _ember, _dummyInitializersNptLinkComponent, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | npt link component', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _dummyInitializersNptLinkComponent['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('dummy/tests/unit/initializers/npt-link-component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/initializers');
  QUnit.test('unit/initializers/npt-link-component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/npt-link-component-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/mixins/transition-to-listener-test', ['exports', 'ember', 'dummy/mixins/transition-to-listener', 'qunit'], function (exports, _ember, _dummyMixinsTransitionToListener, _qunit) {

  (0, _qunit.module)('Unit | Mixin | transition to listener');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var TransitionToListenerObject = _ember['default'].Object.extend(_dummyMixinsTransitionToListener['default']);
    var subject = TransitionToListenerObject.create();
    assert.ok(subject);
  });
});
define('dummy/tests/unit/mixins/transition-to-listener-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/mixins');
  QUnit.test('unit/mixins/transition-to-listener-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/transition-to-listener-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('dummy/tests/unit/routes/about-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/about-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('dummy/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/index-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/routes/page-1-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:page-1', 'Unit | Route | page 1', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('dummy/tests/unit/routes/page-1-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/page-1-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/page-1-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/routes/page-2-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:page-2', 'Unit | Route | page 2', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('dummy/tests/unit/routes/page-2-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/page-2-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/page-2-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/routes/transition-to-listener-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:transition-to-listener', 'Unit | Route | transition to listener', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('dummy/tests/unit/routes/transition-to-listener-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/transition-to-listener-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/transition-to-listener-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/services/routing-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:routing', 'Unit | Service | routing', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('dummy/tests/unit/services/routing-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services');
  QUnit.test('unit/services/routing-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/routing-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map