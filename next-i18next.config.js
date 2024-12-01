const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'mk', 'al'],
  },
  localePath: path.resolve('./public/locales'),
};
