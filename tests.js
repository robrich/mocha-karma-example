var expect = chai.expect;

describe('#add', function () {
	it('should add 2 + 2', function (done) {
		var actual = add(2, 2);
		expect(actual).to.equal(4);
		done();
	});

	it('should add 2 + 4', function (done) {
		var actual = add(2, 4);
		expect(actual).to.equal(10);
		done();
	})
});
