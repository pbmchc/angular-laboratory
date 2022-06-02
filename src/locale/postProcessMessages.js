const fs = require('fs');
const messages = require('./messages.json');

const { locale, translations: sourceTranslations } = messages;
const translations = Object.keys(sourceTranslations)
  .sort()
  .reduce((result, key) => {
    result[key] = sourceTranslations[key].trim();
    return result;
  }, {});

fs.writeFileSync(
  './src/locale/messages.json',
  JSON.stringify({ locale, translations }, null, 2)
);
