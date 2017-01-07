const postCSSConfig = [
   require('autoprefixer'),

   require('postcss-initial')({
      reset: 'inherited' 
   }),

   require('postcss-import'),

   require('postcss-nested'),

   require('postcss-simple-vars'),

   require('postcss-math'),

   require('postcss-color-function')
];

module.exports = postCSSConfig;