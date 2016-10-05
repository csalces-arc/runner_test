exports.config = {
	framework: 'jasmine2',
    capabilities: {
		browserName: 'chrome',
    },
    specs: [
		'./test.js',
    ],    
    onPrepare: function() {
        
        var AllureReporter = require('jasmine-allure-reporter');
		jasmine.getEnv().addReporter(new AllureReporter({
			allureReport: {
				resultDir: 'allure-results'
			}
		}))

    },
    afterLaunch: function() {
    },
    params: {        
    }
};