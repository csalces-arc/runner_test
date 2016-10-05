exports.config = {
	framework: 'jasmine2',
    capabilities: {
		browserName: 'chrome',
    },
    specs: [
		'./test.js',
    ],    
    onPrepare: function() {       
    },
    afterLaunch: function() {
    },
    params: {        
    }
};