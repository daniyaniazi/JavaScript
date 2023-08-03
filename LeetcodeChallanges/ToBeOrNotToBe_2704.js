/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
 let toBe = function(num){
    if(val===num) return true;
    throw new Error("Not Equal")
 }
 let notToBe = function(num){
    if(val!==num) return true;
    throw new Error("Equal")
 }
 return {toBe,notToBe}
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
