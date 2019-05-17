[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-sanitize-html.svg)](http://emberobserver.com/addons/ember-cli-sanitize-html)
[![Build Status](https://travis-ci.org/devotox/ember-cli-sanitize-html.svg)](http://travis-ci.org/devotox/ember-cli-sanitize-html)
[![Coverage Status](https://codecov.io/gh/devotox/ember-cli-sanitize-html/branch/master/graph/badge.svg)](https://codecov.io/gh/devotox/ember-cli-sanitize-html)
[![NPM Version](https://badge.fury.io/js/ember-cli-sanitize-html.svg)](http://badge.fury.io/js/ember-cli-sanitize-html)
[![NPM Downloads](https://img.shields.io/npm/dm/ember-cli-sanitize-html.svg)](https://www.npmjs.org/package/ember-cli-sanitize-html)
[![Dependency Status](https://david-dm.org/devotox/ember-cli-sanitize-html.svg)](https://david-dm.org/devotox/ember-cli-sanitize-html)
[![DevDependency Status](https://david-dm.org/devotox/ember-cli-sanitize-html/dev-status.svg)](https://david-dm.org/devotox/ember-cli-sanitize-html#info=devDependencies)
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

See the [Contributing](CONTRIBUTING.md) guide for details.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
