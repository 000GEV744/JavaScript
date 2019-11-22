//testing the divide the function
describe("pow", function() {

    it("raises to n-th power", function() {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(3, 3),27);  
      assert.equal(pow(4, 2), 16);
    });

    it("5 raised to 2-th power", function(){
       assert.equal(pow(5, 2), 25);
    })
  
  });


//testing the multiply fucntion
  describe("multiply", function(){
    let x = 12, y=7;
    function makeTest(a, b){
        let result = a*b;
        it(`${a} multiply by ${b} then ${result}`, function(){
            assert.equal(mult(a,b), result);
        });
    }
  

         for(let i = 1; i < 5; i++){
           makeTest(x++, y++);
     }
  })