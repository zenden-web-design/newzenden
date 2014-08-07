module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
					'_/js/head-script.js': ['_/components/js/head/*.js'],
					'_/js/foot-script.js': ['_/components/js/foot/*.js']
                } //files
            } //my_target
        }, //uglify
        compass: {
            dev: {
                options: {
					require: 'susy',
					require: 'breakpoint',
                    config: 'config.rb'
                } //options
            } //dev
        }, //compass
        watch: {
            options: { livereload: true },
            scripts_a: {
                files: [ '_/components/js/head/*.js' ],
					
                tasks: ['uglify']
            }, //scripts
			scripts_b: {
				files: [ '_/components/js/foot/*.js' ],
				
				tasks: ['uglify']
			},
            sass: {
                files: ['_/components/sass/*.scss'],
                tasks: ['compass:dev']
            }, //sass
            html: {  
                files: ['*.html']
            } //html
        } //watch
    }) //initConfig
grunt.registerTask('default', 'watch');
} //exports