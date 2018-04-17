(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['sanitizeHtml'],
      __esModule: true,
    };
  }

  define('sanitize-html', [], vendorModule);
})();
