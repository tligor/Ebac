module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'source/scripts/main.js',
                dest: 'build/scripts/main.min.js'
            }
        },
        less: {
            development: {
                options: {
                    paths: ['source/styles']
                },
                files: {
                    'build/styles/main.css': 'source/styles/main.less'
                }
            }
        },
        watch: {
            scripts: {
                files: ['source/styles/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                },
            },
        },
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['uglify', 'less', 'watch']);
  
};