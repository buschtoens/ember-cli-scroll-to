import Ember from 'ember';

const { on, inject } = Ember;

// TODO: remove this mixin, once the routing service ladnds
export default Ember.Mixin.create({
  scrollTo: inject.service(),

  // HACK: this is so unbelievably ugly that I want to shoot myself in the face
  _doTransition() {
    let transition = this._super(...arguments);

    transition.then((res) => {
      if (!('routeName' in res)) {
        // no real transition, link-to points to same route and models
        this.notifyScrollTo();
      }
    });

    return transition;
  },

  notifyScrollTo: on('didTransition', function() {
    this.get('scrollTo').didTransition();
  })
});
