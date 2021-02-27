
it('should calculate the monthly rate correctly', function () {
  var values = {
    amount: 5000,
    years: 5,
    rate: 5
  };

  expect(calculateMonthlyPayment(values)).toEqual('94.36');

  values = {
    amount: 30000.50,
    years: 5.5,
    rate: 3.14
  };

  expect(calculateMonthlyPayment(values)).toEqual('495.53');

});


it("should return a result with 2 decimal places", function() {
  values = {
    amount: 1521,
    years: 10,
    rate: 2
  };

  expect(calculateMonthlyPayment(values)).toEqual('14.00');
});

it("should handle a loan of 0", function() {
  values = {
    amount: 0,
    years: 10,
    rate: 5
  };

  expect(calculateMonthlyPayment(values)).toEqual('0.00');
});

it("should handle high numbers", function() {
  values = {
    amount: 1000000,
    years: 100,
    rate: 100
  };

  expect(calculateMonthlyPayment(values)).toEqual('83333.33');
});