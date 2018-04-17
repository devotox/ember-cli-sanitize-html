import Route from '@ember/routing/route';

import sanitizeHtml from 'ember-cli-sanitize-html';

export default Route.extend({
	setupController() {
		this._super(...arguments);
		
		let value = '<script>123</script><div>abc</div>';
		let sanitizedValue = sanitizeHtml(value);

		console.log('Value:', value); // eslint-disable-line
		console.log('Sanitized:', sanitizedValue); // eslint-disable-line

		this.controller.set('value', value);
	}
});
