import Ember from 'ember';
import RouterMixin from '../../../mixins/router';
import { module, test } from 'qunit';

module('Unit | Mixin | router');

// Replace this with your real tests.
test('it works', function(assert) {
  var RouterObject = Ember.Object.extend(RouterMixin);
  var subject = RouterObject.create();
  assert.ok(subject);
});
