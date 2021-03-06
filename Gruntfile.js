module.exports = function(grunt) {
'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /*
		uglify minifies and concatenates all angular.js files into app/production/build.js for production
		mangle is set to false in the options because this disrupted the angular source files and caused errors
	*/
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
		mangle: false
      },
      build: {
        src: [  'app/js/*.js', 
				'app/js/directives/*.js',
				'app/js/services/*.js',
				'app/js/filters/*.js', 
				'app/js/controllers/*.js' 
				],
        dest: 'app/production/build.js'
      }
    },
    //converts less to css in app/production/css/base.css
	less: {
		base: {
			src: ['app/less/base/*.less', 'app/less/third-party/*.less'],
			dest: 'app/production/css/base.css',
			options: {
				yuicompress: true
			}
		}
    },
    //runs all angularjs files through jshint for linting purposes
	jshint: {
		all: ['Gruntfile.js', 
				'app/js/*.js', 
				'app/js/directives/*.js',
				'app/js/services/*.js',
				'app/js/filters/*.js', 
				'app/js/controllers/*.js'
			],
        //options set to make angular agree with jshint a bit more
		options:{
			globalstrict: true,
			jquery: true,
			node: true,
			sub: true,
			/*
				sets some global variable names that jshint will not throw errors for
				without this, it will complain that these global variables are not defined and such
			*/
			globals: { "angular": false, "FB": false, "window": false, "document":false, "navigator": false}
		}
    },
    //not currently set up, karma is a testing plugin
	karma: {
		unit: {
			configFile: 'config/karma.conf.js',
			autoWatch: true
		}
	},
    /*
		concatenates all third party js files in app/lib/third-party-js inclusions into one file, app/production/lib/js/third-party.js 
		this allows for easier script inclusion in index.html
	*/
	concat: {
    dist: {
		src: ['app/lib/third-party-js/*.js'],
		dest: 'app/production/lib/js/third-party.js'
    }
  }
  });
  
  

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  //Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  
  //Load the plugin that provides the "jsHint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  //Load the plugin that provides the "karma" task.
  grunt.loadNpmTasks('grunt-karma');
  
  //Load the plugin that provides the "concatenate" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s). Add task here if you want it to run every time grunt is run
  grunt.registerTask('default', ['uglify', 'less', 'jshint', 'concat']);

};