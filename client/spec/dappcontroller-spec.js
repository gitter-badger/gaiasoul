buster.spec.expose(); // Make spec functions global

var spec = describe("Dapp controller class", function () {
	before(function () {
		
		this.testDapp = new DappController();
	
	});

	it("check object defined", function () {
	   
		buster.assert.defined(DappController); 
		
	});
	
	it("object controller created", function () {
	 
		buster.assert.isObject(this.testDapp);
	});
	
	it("bring Dapp to life", function () {
		
		buster.assert.isFunction(this.testDapp.bringtoLife);
	});
	
	it("logic for incoming UI Clicks/interaction", function () {
		
		buster.assert.isFunction(this.testDapp.clickListen);
	});	
	
	it("logic for incoming Future UI Clicks/interaction", function () {
		
		buster.assert.isFunction(this.testDapp.clickListenFuture);
	});		
});