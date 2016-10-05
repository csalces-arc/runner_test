function BeppoTest () {

    it('Module is displayed', function UI_TC1 () {

        //turn off Angular Mode
		browser.ignoreSynchronization=true;

        //set browser to environment home page
		browser.get('https://angularjs.org');

        expect(element(by.partialLinkText('View on GitHub')).isDisplayed()).toBe(true);

    });

};

describe('Beppo', BeppoTest);