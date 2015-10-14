define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.ok(true, 'app.js should pass jshint.');
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
          options.beforeEach.call(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _dummyTestsHelpersDestroyApp['default'])(this.application);
        if (options.afterEach) {
          options.afterEach.call(this, arguments);
        }
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'ember-resolver', 'dummy/config/environment'], function (exports, _emberResolver, _dummyConfigEnvironment) {

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
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/spacer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/spacer.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/spacer.js should pass jshint.');
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
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/routes/a.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/a.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/a.js should pass jshint.');
  });
});
define('dummy/tests/routes/b.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/b.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/b.js should pass jshint.');
  });
});
define('dummy/tests/routes/c.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/c.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/c.js should pass jshint.');
  });
});
define('dummy/tests/routes/d.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/d.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/d.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('dummy/tests/unit/helpers/scroll-to-test', ['exports', 'dummy/helpers/scroll-to', 'qunit'], function (exports, _dummyHelpersScrollTo, _qunit) {

  (0, _qunit.module)('Unit | Helper | scroll to');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _dummyHelpersScrollTo.scrollTo)(42);
    assert.ok(result);
  });
});
define('dummy/tests/unit/helpers/scroll-to-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/scroll-to-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/helpers/scroll-to-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/initializers/scroll-to-test', ['exports', 'ember', 'dummy/initializers/scroll-to', 'qunit'], function (exports, _ember, _dummyInitializersScrollTo, _qunit) {

  var application;

  (0, _qunit.module)('Unit | Initializer | scroll to', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _dummyInitializersScrollTo['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('dummy/tests/unit/initializers/scroll-to-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/initializers');
  QUnit.test('unit/initializers/scroll-to-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/initializers/scroll-to-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/mixins/router-test', ['exports', 'ember', 'dummy/mixins/router', 'qunit'], function (exports, _ember, _dummyMixinsRouter, _qunit) {

  (0, _qunit.module)('Unit | Mixin | router');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var RouterObject = _ember['default'].Object.extend(_dummyMixinsRouter['default']);
    var subject = RouterObject.create();
    assert.ok(subject);
  });
});
define('dummy/tests/unit/mixins/router-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/mixins');
  QUnit.test('unit/mixins/router-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/mixins/router-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/mixins/scroll-to-test', ['exports', 'ember', 'dummy/mixins/scroll-to', 'qunit'], function (exports, _ember, _dummyMixinsScrollTo, _qunit) {

  (0, _qunit.module)('Unit | Mixin | scroll to');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var ScrollToObject = _ember['default'].Object.extend(_dummyMixinsScrollTo['default']);
    var subject = ScrollToObject.create();
    assert.ok(subject);
  });
});
define('dummy/tests/unit/mixins/scroll-to-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/mixins');
  QUnit.test('unit/mixins/scroll-to-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/mixins/scroll-to-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/services/scroll-to-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:scroll-to', 'Unit | Service | scroll to', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('dummy/tests/unit/services/scroll-to-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services');
  QUnit.test('unit/services/scroll-to-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/services/scroll-to-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');

/* jshint ignore:end */
//# sourceMappingURL=tests.map