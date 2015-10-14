import Ember from 'ember';

const { on, inject } = Ember;

// TODO: remove this mixin, once the routing service ladnds
export default Ember.Mixin.create({
  scrollTo: inject.service(),

  notifyScrollToAfterTransition: on('didTransition', function() {
    this.get('scrollTo').didTransition();
  })
});
