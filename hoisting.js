// just understand about
/**
 * Context:-
 *  1.Global Execution Context
 *      component-> memory, code
 *      phases -> creation phase, Exection Phase
 *  2.Functional Execution Context
 *      component -> memory, code
 *      phases -> creation Phase, Execution Phase
 * 
 * 
 * creation Phase:-
 * 1. memory allocation for variable and funtion
 * 2. assigned undefined exception for const and let (temporal dead zone)
 * 3. Creation of global object -> window to communicate with browser provided apis
 * 4. Creation of scope and lexical environment
 * 
 * Execution Phase:
 * 1. Each code is executed line by line
 * 2. new context is created for functions
 * 3. Assigns actual values
 */

console.log(manr)

var manr = 'hello';

let man = ()=>{
    console.log('hello')
}
