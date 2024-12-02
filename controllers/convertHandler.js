//this:
//binds methods to objects, so that when you create a new instance of ConvertHandler like convertHandler in server.js, you can call the methods in here like convertHandler.getNum()

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.input;
    //get the number from result using regex
    let numberInputRegex = /[0-9./]/g
    //used to check if numberInput is a valid number
    let validNumberRegex = /^\d+[./]?\d*[./]?\d*[.]?\d*$/g
    //equals 1 if user did not provide any number input e.g. input=kg 
    let defaultIfNoInputGiven = numberInputRegex.test(result) ? null : 1;
    //if defaultIfNoInputGiven is 1 i.e. no number input was provided, use 1 as default. If not, use the number input given.
    let finalNumber = defaultIfNoInputGiven ? defaultIfNoInputGiven : result.match(numberInputRegex).join('').toString();
    console.log(validNumberRegex.test(finalNumber) ? finalNumber : null)
    return validNumberRegex.test(finalNumber) ? finalNumber : null
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
