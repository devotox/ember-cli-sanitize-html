import Component from '@ember/component';
import { computed } from '@ember/object';

import sanitize from '../utils/sanitize-html';
import layout from '../templates/components/sanitize-html';

export default Component.extend({
  layout,

  value:      undefined,
  options:    undefined,
  classNames: ['sanitized-value'],

  didReceiveAttrs() {
    this.get('sanitizedValue');
  },

  sanitizedValue: computed('value', 'options', function () {
    const value   = this.get('value');
    const options = this.get('options');
    return sanitize(value, options);
  })
});
