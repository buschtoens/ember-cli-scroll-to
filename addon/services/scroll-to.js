import Ember from 'ember';

const { $, inject, run : { schedule } } = Ember;

const $viewport = $('html, body');

export default Ember.Service.extend({
  duration: 700,
  padding: 0,

  afterTransition: null,

  //liquidFireTransitions: inject.service(),

  scrollTo(target, duration, padding) {
    duration = typeof duration === 'number' ? duration : this.get('duration');
    padding  = typeof padding  === 'number' ? padding  : this.get('padding');

    console.log(target, duration, padding);

    let scrollTop;
    if (!target) {
      scrollTop = 0;
      duration = 0;
    } else {
      let offset = $(target).offset();
      scrollTop = offset ? offset.top - padding : 0;
    }

    $viewport.stop(true).animate({ scrollTop }, duration);
  },

  didTransition() {
    let token = this.get('afterTransition');
    if (token) {
      this.set('afterTransition', null);
      schedule('afterRender', () => {
        this.scrollTo(token.target, token.duration, token.padding);
      })
    }
  }
});
