# ember-cli-sanitize-html

 [![Build Status](https://travis-ci.org/devotox/ember-cli-sanitize-html.svg)](https://travis-ci.org/devotox/ember-cli-sanitize-html)
 [![NPM Version](https://badge.fury.io/js/ember-cli-sanitize-html.svg)](http://badge.fury.io/js/ember-cli-sanitize-html)
 [![Ember Observer Score](http://emberobserver.com/badges/ember-cli-sanitize-html.svg)](http://emberobserver.com/addons/ember-cli-sanitize-html)

A wrapper around the [sanitize-html](https://github.com/punkave/sanitize-html/) library for use in ember-cli projects

## Installation
* `ember install ember-sanitize-html`

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
import sanitize from 'ember-sanitize-html/utils/sanitize-html'
sanitize('YOUR HTML', options)
```

## Available options
See original library [sanitize-html](https://github.com/punkave/sanitize-html/)

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
