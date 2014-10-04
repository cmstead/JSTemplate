module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['scripts/src/**/*.js'],
                dest: 'scripts/concat/<%= pkg.name %>.js'
            }
        },
        jshint: {
            files: ["scripts/src/**"],
            options: {}
        },
        karma: {
            unit: {
                configFile: './spec/karma.config.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'scripts/min/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jsdoc : {
            dist : {
                src: ['src/*.js', 'test/*.js'],
                dest: 'doc'
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['test'],
            options: {
                reload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['jshint', 'karma']);
    grunt.registerTask('test', ['jshint', 'karma', 'watch']);
    grunt.registerTask('build', ['jshint', 'karma', 'concat', 'uglify']);
};