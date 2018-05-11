'use strict';
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.should();
chai.use(sinonChai);
/*var main2 = require('../../app/scripts/main2.js');*/
/*describe('main2', function() {
	it('should return 7', function() {
		expect(main2.sum(3,4)).to.equal(7);
	});
});*/

/*var Palindrome = require('../../app/scripts/main2');
describe('Palindrome Test Block',function(){
it('for palindrome',function(){
var result = Palindrome.isPalindrome('tat');
expect(result).to.not.be.undefined;
expect(result).to.equal(true);
});
it('for non palindrome',function(){
var result = Palindrome.isPalindrome('tata');
expect(result).to.not.be.undefined;
expect(result).to.equal(false);
});
it('handling of undefined value',function(){
var str;
var result = Palindrome.isPalindrome(str);
expect(result).to.not.be.undefined;
});
});*/
var cqutil = require('../../app/scripts/cqutil.js');
describe('cqutil', function() {
	describe('getBasePath', function() {
		it('should return "http://xyz.com:8080"', function() {
			global.window = {
				       location: {
				    	   protocol: 'http',
				    	   hostname: 'xyz.com',
				    	   port: 8080
				       },
				   };

			var basePath = cqutil.getBasePath();
			expect(basePath).to.equal('http://xyz.com:8080');
		});

		it('should return "http://xyz.com"', function() {
			global.window = {
				       location: {
				    	   protocol: 'http',
				    	   hostname: 'xyz.com',
				    	   port: 0
				       },
				   };

			var basePath = cqutil.getBasePath();
			expect(basePath).to.equal('http://xyz.com');
		});

		it('should return "https://xyz.com"', function() {
			global.window = {
				       location: {
				    	   protocol: 'https',
				    	   hostname: 'xyz.com',
				    	   port: ''
				       },
				   };

			var basePath = cqutil.getBasePath();
			expect(basePath).to.equal('https://xyz.com');
		});

		it('should return "https://xyz.com"', function() {
			global.window = {
				       location: {
				    	   protocol: 'https',
				    	   hostname: 'xyz.com',
				    	   port: null
				       },
				   };

			var basePath = cqutil.getBasePath();
			expect(basePath).to.equal('https://xyz.com');
		});

		it('should return "http://xyz.com"', function() {
			global.window = {
				       location: {
				    	   protocol: 'http',
				    	   hostname: 'xyz.com',
				       },
				   };

			var basePath = cqutil.getBasePath();
			expect(basePath).to.equal('http://xyz.com');
		});
	});

	describe('adjustHeight', function(){
		it('should call "gadgets.window.adjustHeight()"', function() {
			global.gadgets = {
					window: {
						adjustHeight: function(){
						}
					}
			}

			var spy = sinon.spy(global.gadgets.window, 'adjustHeight');
			var clock = sinon.useFakeTimers();
			cqutil.adjustHeight();
			clock.tick(100);
			spy.should.have.been.calledOnce;
			clock.restore();
		});
	});

	describe('setVisibilityOf', function(){
		var show, hide;
		beforeEach(function(){
			global.$ = function(arg){
				return {
					show: show,
					hide: hide
				};
		}

		show = sinon.stub();
		hide = sinon.stub();
		});

		it('should call "$.show(div1)"', function() {
			var spy$ = sinon.spy(global, '$');
			cqutil.setVisibilityOf("div1", true);
			spy$.should.have.been.calledWith("#div1");
			show.should.have.been.calledWith({complete: cqutil.adjustHeight});
		});

		it('should call "$.hide(div1)"', function() {
			var spy$ = sinon.spy(global, '$');
			cqutil.setVisibilityOf("div1", false);
			spy$.should.have.been.calledWith("#div1");
			hide.should.have.been.calledWith({complete: cqutil.adjustHeight});
		});
	});

	/*describe('setLoading', function(){
		it('should call "setVisibilityOf(loading, true)"', function() {
			var stub = sinon.stub();
			global.setVisibilityOf = stub;
			cqutil.setLoading(true);
			stub.should.have.been.calledWith('loading', true);
		});
	});
*/
	describe('loadPrefs', function() {
		var prefsMock;
		beforeEach(function() {
			var prefs = {};
			prefs.getString = function(prefName) {
				return 'prefValue';
			};

			global.prefs = prefs; // <-- set it here
			global.DEBUG = true;
		});

		/*afterEach(function() {
			delete global.prefs; // <-- clean up here
		});*/
		it('should log "loadPrefs entry"', function() {
			var spy = sinon.spy(console, 'log');
			prefsMock = sinon.mock(prefs);
			prefsMock.expects('getString').withArgs('repo').returns('myrepo');
			prefsMock.expects('getString').withArgs('db').returns('mydb');
			cqutil.loadPrefs();
			prefsMock.restore();
			prefsMock.verify();
		});
	});
});
