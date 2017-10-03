# ember-cli-sanitize-html

[![Greenkeeper badge](https://badges.greenkeeper.io/devotox/ember-cli-sanitize-html.svg)](https://greenkeeper.io/)

A wrapper around the [sanitize-html](https://github.com/punkave/sanitize-html/) library for use in ember-cli projects

## Installation
* `ember install ember-sanitize-html`

## Usage

### Component
```handlebars
{{sanitize-html value="YOUR HTML" options=options}}
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
