module.exports = function (grunt){

  //Configuration
  grunt.initConfig({
    concat:{
      js: {
        src: ['js/*.js'],
        dest: 'dist/js/scripts.js'
      },
      css: {
        src: ['tmp/css/*.css'],
        dest: 'dist/css/styles.css'
      },
    },
    jade:{
      compile: {
        options: {
          pretty: true,
        },
        files:
          [ {
            cwd: "src",
            src: "**/*.jade",
            dest: "dist",
            expand: true,
            ext: ".html"
          }]
      }
    },
    compass:{
      dist:{
        options: {
					sassDir: 'styles',
					cssDir: 'tmp/css'
				}
      }
    },
    watch:{
      sass:{
        files: ['styles/**/*.scss'],
        tasks: ['compass'],
        options: {
          livereload: true,
        }
      },
      jade:{
        files: ['src/**/*.jade'],
        tasks: ['jade'],
        options: {
          livereload: true,
        }
      },
    },
    connect:{
      server: {
       options: {
         port: 9001,
         base: 'dist',
         open: true,
         hostname: '0.0.0.0'
       }
     }
    }
  })

  //Load plugins
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass'); //sass -> css
  grunt.loadNpmTasks('grunt-contrib-jade'); //jade -> html
  grunt.loadNpmTasks('grunt-contrib-watch');

  //Register tasks to run
  grunt.registerTask('default', ['jade','compass', 'concat', 'connect', 'watch'])

}
