module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
          files: {
              "style.css": "less/style.less"
          }
      },
      production: {
          options: {
            compress: true
          },
          files: {
              "style.css": "less/style.less"
          }
      }
    },

    watch: {
      styles: {
        files: ['less/*.less'],
        tasks: ['less:development'],
        options: {
          spawn: false,
        }
      }
    },

    browserSync: {
     development: {
       bsFiles: {
        src : ['*.css', '*.html']
      },
     options: {
        server: {
            baseDir: "./"
        },
        watchTask: true
      }
    }
  }
  });

  // Loads the plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['less:development', 'browserSync', 'watch']);
  grunt.registerTask('production', ['less:production']);

};