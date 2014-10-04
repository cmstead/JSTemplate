module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },
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
                src: ['./scripts/src/*.js', './spec/*.js'],
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

    /* Load grunt task adapters */

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-karma');

    /* Register composite grunt tasks */

    grunt.registerTask('test', ['jshint', 'karma']);
    grunt.registerTask('testwatcher', ['test', 'watch']);
    grunt.registerTask('document', ['jsdoc'])

    grunt.registerTask('buildcss', ['compass']);
    grunt.registerTask('buildjs', ['concat', 'uglify'])
    grunt.registerTask('build', ['buildcss', 'test', 'buildjs', 'document']);

    //Special build to handle work in progress experiments.
    //NOT FOR PRODUCTION. BYPASSESS LINTING AND TESTING. BUILDS NO DOCUMENTS
    grunt.registerTask('buildrough', ['buildcss', 'buildjs'])

    grunt.registerTask('default', ['testwatcher']);
};