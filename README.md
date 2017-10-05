# ember-cli-sanitize-html

[![Greenkeeper badge](https://badges.greenkeeper.io/devotox/ember-cli-sanitize-html.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/devotox/ember-cli-sanitize-html.svg)](http://travis-ci.org/devotox/ember-cli-sanitize-html)
[![NPM Downloads](https://img.shields.io/npm/dm/ember-cli-sanitize-html.svg)](https://www.npmjs.org/package/ember-cli-sanitize-html)
[![NPM Version](https://badge.fury.io/js/ember-cli-sanitize-html.svg)](http://badge.fury.io/js/ember-cli-sanitize-html)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-sanitize-html.svg)](http://emberobserver.com/addons/ember-cli-sanitize-html)

## Description
A wrapper around the [sanitize-html](https://github.com/punkave/sanitize-html/) library for use in ember-cli projects

[DEMO](http://devotox.github.io/ember-cli-sanitize-html)

## Installation
* `ember install ember-cli-sanitize-html`

## Usage

### Component
```handlebars
{{sanitize-html raw=<true|false>[default=false] value="YOUR HTML" options=options}}
```

### Util
```javascript
sanitizeHtml('YOUR HTML', options)
```
or
```javascript
import sanitize from 'ember-cli-sanitize-html/utils/sanitize-html'
sanitize('YOUR HTML', options)
```

## Available options
See original library [sanitize-html](https://github.com/punkave/sanitize-html/)

#### License
MIT license.