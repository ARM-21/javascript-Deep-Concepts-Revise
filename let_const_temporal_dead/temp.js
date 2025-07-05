/**there is exception in hoisting for let and case
 * infact they are also hoisted and assigned with special value -> undefined
 * But because of the concept of temporal dead zone
 * we cann't access them before they are initialized
 * 
 * Temporal dead Zone is time period or dead period in hoisting after the variable is hoisted and is not 
 * initialilazed with the actual value
 * 
 * in both case:_
 * same error is shown:- refrence error with different message
 * temporal dead zone -> cannot access before initialization
 *                       the variable is not defined
 * 
 */

/**
 * let variable is not available in global scope, but script(block) scope
 */