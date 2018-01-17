
describe("arrangement", function(n,r) {
  var test2= [
    {
      n : 0,
      r: 1,
      arrangement : 1
    },
    {
      n : 1,
      r: 1,
      arrangement : 1
    },
    {
      n : 2,
      r: 1,
      arrangement : 1
    },
    {
      n : 3,
      r: 1,
      arrangement : 1
    },
    {
      n : 4,
      r: 1,
      arrangement : 1
    }


  ];
  testCases.forEach(function(test2){
      it("should returns " + test2.arrangement + "when n = "+ test2.n, + "when r = "+ test2.r,function(n,r)  {
      var result = Util.factorial(test2.n);
      expect(result).toEqual(test2.factorial);
  })
})


});
