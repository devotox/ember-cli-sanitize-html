'use strict';

const { name } = require('./package');
const FastbootTransform = require('fastboot-transform');

module.exports = {
	name,
	options: {
		nodeAssets: {
			'sanitize-html': {
				vendor: {
					srcDir: 'dist',
					include: ['sanitize-html.js'],
					processTree(input) {
						return FastbootTransform(input);
					}
				}
			}
		}
	},
	included() {
		this._super.included.apply(this, arguments);

		this.import('vendor/sanitize-html/sanitize-html.js');
		this.import('vendor/shims/sanitize-html.js');
	}
};
