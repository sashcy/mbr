module.exports = {
    build: {
        cwd: 'dist',
        src: [ '*.html' ],
        dest: 'dist/',
        options: {
          flatten: true,
          includePath: 'dist/assets/css',
        }
      }
};