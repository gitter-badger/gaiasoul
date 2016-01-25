/*
* check the default selfNpothesis component sections are in order
* casperjs test test/ --baseUrl=http://localhost/dsensor/code/gaiasoul/client/src/index.html
*/
var baseUrl = casper.cli.get('baseUrl');

casper.test.comment("Scenario: GaiaSoul html component base section layout");

casper.start(baseUrl, function() {
	this.test.comment('gaiasoul logo placement');
	casper.test.assertExists('#quoteslogo', 'the element exists');

});

casper.start(baseUrl, function() {
	this.test.comment('The attention interaction input box, text, sound, light etc.');
	casper.test.assertExists('#attention-focus', 'the element exists');

});

casper.then(function() {
	this.test.comment('sensor navigation menu');
	casper.test.assertExists('#sensors', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('Dmap navigation menu');
	casper.test.assertExists('#dmap', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('ptop navigation menu');
	casper.test.assertExists('#ptop', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('identity navigation menu');
	casper.test.assertExists('#identity', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('informtion flow from universe of knowledge');
	casper.test.assertExists('#gaiasoul', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('gaiasoul human visualisation menu');
	casper.test.assertExists('#gaiasoul-me-view', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('gaiasoul our world visualisation menu');
	casper.test.assertExists('#gaiasoul-ourworld-view', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('gaiasoul stream notification visualisation menu');
	casper.test.assertExists('#gaiasoul-stream-view', 'the element exists');
	
});

casper.then(function() {
	this.test.comment('gaiasoul knowledge mindmap visualisation menu');
	casper.test.assertExists('#gaiasoul-mindmap-view', 'the element exists');
	
});



casper.run(function() {

	this.test.done();

});