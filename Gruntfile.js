module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        path: 'public/javascripts',
        concat: {
            js: {
                src: [
                    '<%= path %>/lib/angular.js',
                    '<%= path %>/lib/*.js',
                    '<%= path %>/app/app.js', 
                    '<%= path %>/app/routes.js', 
                    '<%= path %>/services/*.js',
                    '<%= path %>/controllers/*.js',
                ],
                dest: '<%= path %>/apponte.js',
                options: {
                    separator: ';\n'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            js: {
                src: '<%= path %>/apponte.js',
                dest: '<%= path %>/apponte.min.js'
            }
        },
        watch: {
            js: {
                files: [
                    '<%= path %>/lib/*.js',
                    '<%= path %>/app/*.js',
                    '<%= path %>/controllers/*.js',
                    '<%= path %>/services/*.js',

                ],
                tasks: ['default'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat']);
};