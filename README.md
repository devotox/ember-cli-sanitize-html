[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-sanitize-html.svg)](http://emberobserver.com/addons/ember-cli-sanitize-html)
[![Build Status](https://travis-ci.org/devotox/ember-cli-sanitize-html.svg)](http://travis-ci.org/devotox/ember-cli-sanitize-html)
[![Coverage Status](https://codecov.io/gh/devotox/ember-cli-sanitize-html/branch/master/graph/badge.svg)](https://codecov.io/gh/devotox/ember-cli-sanitize-html)
[![NPM Version](https://badge.fury.io/js/ember-cli-sanitize-html.svg)](http://badge.fury.io/js/ember-cli-sanitize-html)
[![NPM Downloads](https://img.shields.io/npm/dm/ember-cli-sanitize-html.svg)](https://www.npmjs.org/package/ember-cli-sanitize-html)
[![Dependency Status](https://david-dm.org/poetic/ember-cli-sanitize-html.svg)](https://david-dm.org/poetic/ember-cli-sanitize-html)
[![DevDependency Status](https://david-dm.org/poetic/ember-cli-sanitize-html/dev-status.svg)](https://david-dm.org/poetic/ember-cli-sanitize-html#info=devDependencies)
[![Greenkeeper](https://badges.greenkeeper.io/devotox/ember-cli-sanitize-html.svg)](https://greenkeeper.io/)

ember-cli-sanitize-html
==============================================================================

A wrapper around the [sanitize-html](https://github.com/punkave/sanitize-html/) library for use in ember-cli projects

[DEMO](https://devotox.github.io/ember-cli-sanitize-html)

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-sanitize-html
```


Usage
------------------------------------------------------------------------------

### Component
```handlebars
{{sanitize-html raw=<true|false>[default=false] value="YOUR HTML" options=options}}
```

```javascript
import sanitizeHtml from 'ember-cli-sanitize-html'
sanitizeHtml('YOUR HTML', options)
```

### Available options
See original library [sanitize-html](https://github.com/punkave/sanitize-html/)


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-cli-sanitize-html`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `yarn test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
