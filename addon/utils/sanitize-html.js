const sanitize = (value = '', options) => {
  return typeof window === 'undefined'
    ? value : window.sanitizeHtml(value, options);
}

export default sanitize;
