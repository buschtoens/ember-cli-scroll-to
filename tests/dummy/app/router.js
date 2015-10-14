import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('c', {});
  this.route('d', {});
  this.route('b', {});
  this.route('a', {});
});

export default Router;
