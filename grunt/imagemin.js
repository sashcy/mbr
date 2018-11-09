var mozjpeg = require('imagemin-mozjpeg');
module.exports = {
    dynamic: { 
        options: {
            optimizationLevel: 2,
            svgoPlugins: [{ removeViewBox: false }],
            use: [mozjpeg()]
          },
        files: [{
          expand: true,
          cwd: 'src/assets/',
          src: ['images/*.{png,jpg,gif}', 'nena/**/**/*.{png,jpg,jpeg,gif}'],
          dest: 'dist/assets'
        }]
      }
};