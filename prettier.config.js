/** @type {import('prettier').Config} */
export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  pluginSearchDirs: false,
  plugins: [
    'prettier-plugin-tailwindcss', // ДОЛЖЕН быть последним
  ],
  tailwindConfig: './tailwind.config.js',
  tailwindFunctions: ['clsx'],
}
