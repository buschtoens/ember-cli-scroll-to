import Ember from 'ember';

const { $, inject, run : { schedule }, computed } = Ember;

const DEFAULT_DURATION = 700;
const DEFAULT_PADDING  = 0;

const $viewport = $('html, body');

export default Ember.Service.extend({
  duration: computed.alias('config.scroll-to.duration'),
  padding:  computed.alias('config.scroll-to.padding'),

  afterTransition: null,

  //liquidFireTransitions: inject.service(),

  scrollTo(target, duration, padding) {
    if (typeof duration !== 'number') {
      duration = this.getWithDefault('duration', DEFAULT_DURATION);
    }
    if (typeof padding !== 'number') {
      padding = this.getWithDefault('padding', DEFAULT_PADDING);
    }

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
