import Ember from 'ember';

export const TOKEN_SYMBOL = Symbol('Scroll Token');

export function isToken(token) {
  return token && token[TOKEN_SYMBOL];
}

export default Ember.Helper.extend({
  globalPadding: 0,
  compute: function scrollTo(params/*, hash*/) {
    let token = Object.create(null);
    token[TOKEN_SYMBOL] = true;

    token.target = params[0];
    token.duration = params[1];
    token.padding = this.globalPadding;

    return token;
  }
});
