import Ember from 'ember';
import config from '../config/environment';
import Helper from 'ember-cli-scroll-to/helpers/scroll-to';

export default Helper.extend({
  globalPadding: Ember.get(config, 'scrollto.padding')
});
