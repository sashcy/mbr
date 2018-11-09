module.exports = {
    all: {   
        options: {
            removeComments: false,
            collapseWhitespace: true
            },
        files: [{
            expand: true,
            cwd: 'dist',
            src: ['**/*.html', '*.html'],
            dest: 'dist'
        }]
    }
};