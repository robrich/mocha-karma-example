;(function () {
	'use strict';

	var expect = chai.expect;
	describe('ajax test', function () {
		var realAjax;

		beforeEach(function () {
			realAjax = $.ajax;
			$.ajax = function (url, options) {
				options.success({success: true});
			};
		});
		afterEach(function () {
			$.ajax = realAjax;
		});

		it('should run correctly', function (done) {

			$.ajax('someurl', {
				success: function (result) {
					expect(result.success).to.equal(true);
					done();
				}
			});

		});

	});
}());
