import Ember from 'ember';
import LinkComponentMixin from 'ember-cli-scroll-to/mixins/link-component';
import RouterMixin from 'ember-cli-scroll-to/mixins/router';

export function initialize(/* application */) {
  Ember.LinkComponent.reopen(LinkComponentMixin);
  Ember.Router.reopen(RouterMixin);
}

export default {
  name: 'scroll-to',
  initialize
};
