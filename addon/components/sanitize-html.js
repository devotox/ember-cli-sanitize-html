import Component from '@ember/component';

import { computed } from '@ember/object';

import sanitizeHtml from 'ember-cli-sanitize-html';

import layout from '../templates/components/sanitize-html';

export default Component.extend({
  layout,

  raw: false,

  value: null,

  options: null,

  classNames: ['sanitized-value'],

  didReceiveAttrs() {
    this._super(...arguments);
    this.get('sanitizedValue');
  },

  sanitizedValue: computed('value', 'options', function () {
    const options = this.get('options');
    const value = this.get('value') || '';
    return sanitizeHtml(value, options) || '';
  })
});
