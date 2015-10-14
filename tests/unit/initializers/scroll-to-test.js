import Ember from 'ember';
import ScrollToInitializer from '../../../initializers/scroll-to';
import { module, test } from 'qunit';

var application;

module('Unit | Initializer | scroll to', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ScrollToInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
