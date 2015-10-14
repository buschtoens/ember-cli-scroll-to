import Ember from 'ember';
import ScrollToMixin from '../../../mixins/scroll-to';
import { module, test } from 'qunit';

module('Unit | Mixin | scroll to');

// Replace this with your real tests.
test('it works', function(assert) {
  var ScrollToObject = Ember.Object.extend(ScrollToMixin);
  var subject = ScrollToObject.create();
  assert.ok(subject);
});
