describe("RomanNumber", function() {
	describe("can convert from arabic to roman", function() {
		it("1 is converted to I", function() {
			expect(new RomanNumber(1).toString()).toEqual("I");
		});
	});
});