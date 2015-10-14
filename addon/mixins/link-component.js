import Ember from 'ember';
import { isToken } from'ember-cli-scroll-to/helpers/scroll-to';

const { inject } = Ember;

export default Ember.Mixin.create({
  scrollToken: false,
  scrollTo: inject.service(),

  willRender () {
    this._super(...arguments);

    let models = this.get('models', models);
    if (!models.length) {
      return;
    }

    for (let i in models) {
      if (isToken(models[i])) {
        this.set('scrollToken', models[i]);
        models.splice(i, 1);
        break;
      }
    }
  },

  _invoke(event) {
    this.get('scrollTo').set('afterTransition', this.get('scrollToken'));
    this._super(...arguments);
  }
});
