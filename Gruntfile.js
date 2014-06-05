module.exports = function(grunt) {

	grunt.initConfig({

		less: {
			styles: {
				files: {
					'assets/css/style.css': 'assets/less/style.less'
				}
			}
		},

		watch: {
			less: {
				files: ['assets/less/*.less'],
				tasks: ['less']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', ['less']);
};