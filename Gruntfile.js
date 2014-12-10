'use strict';

var request = require('request');

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  var reloadPort = 35729, files;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    develop: {
      server: {
        file: 'app.js'
      }
    },

    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "index.html": ["views/index.jade"]
        }
      }
    },

    replace: {
      index: {
        src: ['index.html'],
        overwrite: true,
        replacements: [{
          from: '/public/',
          to: 'public/'
        }]
      }
    },

    sass: {
        dist: {
          options: {
            style: 'expanded'
          },
          files: {
            'public/css/styles.css': 'public/css/styles.scss'
          }
        }
    },

    watch: {
      options: {
        nospawn: true,
        livereload: reloadPort
      },
      server: {
        files: [
          'app.js',
          'routes/*.js'
        ],
        tasks: ['develop', 'delayed-livereload']
      },
      js: {
        files: ['public/js/*.js'],
        options: {
          livereload: reloadPort
        }
      },
      css: {
        files: ['public/css/*.css'],
        options: {
          livereload: reloadPort
        }
      },
      sass: {
          files: ['public/css/*.scss','public/css/scss/*.scss'],
          tasks: ['sass compile']
      },
      views: {
        files: ['views/*','public/components/**/*.html','public/components/**/*.css'],
        options: {
          livereload: reloadPort
        }
      },
      jade: {
          files: ['views/**/*.jade'],
          tasks: ['jade']
      },
      replace: {
          files: ['views/**/*.jade'],
          tasks: ['replace']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.config.requires('watch.server.files');
  files = grunt.config('watch.server.files');
  files = grunt.file.expand(files);

  grunt.registerTask('delayed-livereload', 'Live reload after the node server has restarted.', function () {
    var done = this.async();
    setTimeout(function () {
      request.get('http://localhost:' + reloadPort + '/changed?files=' + files.join(','),  function (err, res) {
          var reloaded = !err && res.statusCode === 200;
          if (reloaded) {
            grunt.log.ok('Delayed live reload successful.');
          } else {
            grunt.log.error('Unable to make a delayed live reload.');
          }
          done(reloaded);
        });
    }, 500);
  });


  grunt.registerTask('default', ['develop', 'watch']);
  grunt.registerTask('sass compile',['sass']);
};
