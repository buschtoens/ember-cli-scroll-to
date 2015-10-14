import Ember from 'ember';

export function spacer(params/*, hash*/) {
  let height = params[0];

  return Ember.String.htmlSafe(`<div class="helper-spacer" style="height: ${height}px; line-height: ${height}px;">${height} px</div>`);
}

export default Ember.Helper.helper(spacer);
