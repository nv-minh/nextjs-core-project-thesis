const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,ts,tsx,json,jsx,css}': [
    "prettier --write '**/*.{js,jsx,ts,tsx,css,json}'",
    buildEslintCommand,
    'vitest related --run',
  ],
};
